# Info
basic image to deploy static website using nginx on ubuntu
## To build and tag image
> docker build . -t unginx

## start container
> docker container run  -d  --publish 8081:80 unginx