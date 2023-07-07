FROM node:18-alpine as builder

RUN mkdir /opt/debug
WORKDIR /opt/debug
COPY package.json .
RUN npm install --omit=dev

FROM node:18-alpine

COPY --from=builder /opt/debug /opt/debug
WORKDIR /opt/debug
COPY package.json .
COPY server.mjs .
COPY config.cjs .
COPY public public/

USER node
EXPOSE 3000
CMD ["node", "server.mjs"]
