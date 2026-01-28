FROM node:24-alpine

RUN apk add --no-cache stress-ng

RUN mkdir /opt/debug
WORKDIR /opt/debug

COPY package.json .
RUN npm install --omit=dev

COPY server.js .
COPY src src/
COPY public public/

USER node
EXPOSE 3000
CMD ["npm", "start"]
