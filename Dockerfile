FROM nginx
COPY dist/ /data/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf