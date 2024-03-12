FROM node:18-alpine

RUN mkdir -p /app
WORKDIR /app

ADD . /app/
RUN npm install --production
EXPOSE 3000
ENTRYPOINT npm run start:prod