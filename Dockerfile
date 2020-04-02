FROM node:10-slim

LABEL maintainer="Bruno Souza <bruno@bgsouza.com>"

WORKDIR /usr/app
COPY . .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["node", "app.js"]