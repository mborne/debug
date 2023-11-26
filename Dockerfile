FROM node:20-alpine as builder

RUN mkdir /opt/debug
WORKDIR /opt/debug
COPY package.json .
RUN npm install --omit=dev

FROM node:20-alpine

COPY --from=builder /opt/debug /opt/debug
WORKDIR /opt/debug
COPY server.js .
COPY src src/
COPY public public/

USER node
EXPOSE 3000
CMD ["npm", "start"]
