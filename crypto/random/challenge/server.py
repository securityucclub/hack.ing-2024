import os
import socket
import threading
from secret import flag


class Server:
    def __init__(self, port: int):
        self.port = port
        self.socket_server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.socket_server.bind(("0.0.0.0", self.port))
        self.socket_server.listen()
        self.count = 0

        self.accept_connections()

    def accept_connections(self):
        try:
            while True:
                client_socket, address = self.socket_server.accept()
                thread = threading.Thread(target=self.serve, args=(client_socket, ), daemon=True)
                self.count += 1
                thread.start()
        except OSError:
            pass
        except KeyboardInterrupt:
            return
        except:
            pass

    def serve(self, client_socket: socket.socket):
        client_socket.settimeout(4)
        client_socket.send(b"Number of requests?\n")

        try:
            n = int(client_socket.recv(4096).decode())
        except socket.timeout:
            client_socket.send(b"Faster please")
            client_socket.close()
            self.count -= 1
            return
        except ValueError:
            client_socket.send(b"Malformed request")
            client_socket.close()
            self.count -= 1
            return
        except OSError:
            client_socket.close()
            self.count -= 1
            return
        except:
            try:
                client_socket.close()
                self.count -= 1
                return
            except:
                pass

        # n = min(n, int(69))

        # for i in range(n):
        randbytes = os.urandom(len(flag))
        randint = int.from_bytes(randbytes, "little")
        packet = randint | int.from_bytes(flag, "little")
        try:
            client_socket.send(packet.to_bytes(len(flag), "little"))
            client_socket.close()
            self.count -= 1
        except (socket.timeout, OSError):
            client_socket.close()
            self.count -= 1
        except:
            try:
                client_socket.close()
            except:
                pass


if __name__ == "__main__":
    Server(5008)
