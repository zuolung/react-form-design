FROM nginx:1.15-alpine
COPY disk/html /etc/nginx/html
COPY disk/conf /etc/nginx/
WORKDIR /etc/nginx/html
