FROM nginx:1.15-alpine
COPY disk /etc/nginx/html
COPY conf /etc/nginx/
WORKDIR /etc/nginx/html
