from Crypto.Util.number import bytes_to_long, getPrime
import socketserver
import json
from flag import FLAG


class Message():

    def __init__(self, msg):
        self.msg = msg
        self.bit_size = 1024
        self.e = 5

    def _get_new_pubkey(self):
        while True:
            p = getPrime(self.bit_size // 2)
            q = getPrime(self.bit_size // 2)
            n = p * q
            phi = (p - 1) * (q - 1)
            try:
                pow(self.e, -1, phi)
                break
            except ValueError:
                pass

        return n, self.e

    def get_message(self):
        n, e = self._get_new_pubkey()
        m = bytes_to_long(self.msg)
        m = pow(m, e, n)

        return {"message": f"{m:X}", "pubkey": [f"{n:X}", f"{e:X}"]}


def challenge(req):
    message = Message(FLAG)
    while True:
        try:
            req.sendall(
                b'Welcome to this challenge. Would you like to get the flag? (y/n) '
            )
            msg = req.recv(4096).decode().strip().upper()
            if msg == 'Y' or msg == 'YES':
                capsule = message.get_message()
                req.sendall(json.dumps(capsule).encode() + b'\n')
            elif msg == 'N' or msg == "NO":
                req.sendall(b'Thank you, take care\n')
                break
            else:
                req.sendall(b'I\'m sorry I don\'t understand\n')
        except:
            # Socket closed, bail
            return


class MyTCPRequestHandler(socketserver.BaseRequestHandler):

    def handle(self):
        req = self.request
        challenge(req)


class ThreadingTCPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    pass


def main():
    IP = "0.0.0.0"
    PORT = 8888
    socketserver.TCPServer.allow_reuse_address = True
    server = ThreadingTCPServer((IP, PORT), MyTCPRequestHandler)
    try:
        print(f"Server started at {IP}:{PORT}")
        print("Press Ctrl+C to stop")
        server.serve_forever()
    except KeyboardInterrupt:
        server.shutdown()
        server.server_close()
        print("\nServer stopped")



if __name__ == '__main__':
    main()
