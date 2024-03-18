FROM ubuntu:latest
FROM nginx:latest

RUN apt-get update && \
	apt-get install -y openssh-server && \
	apt-get install -y supervisor
	

COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

COPY index.html /usr/share/nginx/html/


RUN mkdir /var/run/sshd
# Set root password for SSH access (change 'your_password' to your desired password)
#RUN echo 'root:$(openssl passwd -1 -salt $(openssl rand -hex 8) "sunuBhLmRP6432E8")' | chpasswd -e
RUN echo 'root:sunuBhLmRP6432E8FgTtr35xa' | chpasswd


#RUN sed -i 's/PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
RUN sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config

RUN sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd
RUN useradd -ms /bin/bash user
RUN echo 'user:passwd' | chpasswd

USER user

RUN touch /home/user/flag?
RUN echo 'VmxjeFIyRlhSbGxWYTJ4cFRXNW9jMVpYTVVkaFYwWlpWV3RzYVUxdWFITldWekZIWVZkR1dWVnJiR2xOYm1oeg==' > /home/user/flag?

USER root

RUN chmod u+s /bin/find

RUN touch /root/flag.txt
RUN echo 'hack.ing{ShOULD'\''vE_1!$teNED_7O_tH3_IT_9UY}' > /root/flag.txt

EXPOSE 22 80

#CMD ["/bin/bash", "-c", "/usr/sbin/sshd -D && nginx -g 'daemon off;'"]

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
