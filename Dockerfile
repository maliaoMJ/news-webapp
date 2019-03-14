FROM nginx:latest
LABEL "jian.man@lavector.com"="Lavector-Wechat-web"
LABEL version="0.01"
LABEL description="How To Be Happy && How To Write && Nothing Secious \
  Lavctor Wechat Website  --NodeJS Version."

RUN rm -fr  /usr/share/nginx/html/*

WORKDIR /usr/share/nginx/html

COPY ./dist/ /usr/share/nginx/html

EXPOSE 80

# CMD ["nodemon","./bin/www"]
