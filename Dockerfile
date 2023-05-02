FROM node:18-alpine

RUN cat /etc/passwd
RUN mkdir /opt/debug && chown -R node:node /opt/debug

USER node
WORKDIR /opt/debug
COPY package.json .
RUN npm install
COPY server.js .
COPY public public/

EXPOSE 3000
CMD ["node","server.js"]
