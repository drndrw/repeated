FROM alpine:3.8
RUN apk add --no-cache npm nodejs

COPY . /app
WORKDIR /app
RUN /usr/bin/npm install

CMD ["/usr/bin/node", "/app/app.js"]
EXPOSE 3000
