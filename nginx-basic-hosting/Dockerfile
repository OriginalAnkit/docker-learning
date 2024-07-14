FROM ubuntu
LABEL version="0,0.1"
LABEL maintainer="black"
LABEL tag="unginx"
RUN apt-get -y update && apt-get -y install nginx
EXPOSE 80
COPY website/ /var/www/html/
CMD ["nginx", "-g", "daemon off;"]
