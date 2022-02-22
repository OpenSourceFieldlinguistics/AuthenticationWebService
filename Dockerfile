FROM node:16

# Create app directory
WORKDIR /usr/src/app

COPY . .
RUN NODE_ENV=production npm ci

RUN ls -alt; \
  ls config/local.js || echo " config/local.js is required to be able to run the tests against deployed couchdb"

ENV DEBUG="*,-express*"
ENV NODE_ENV=beta

EXPOSE 3183

CMD [ "node", "bin/www.js" ]
