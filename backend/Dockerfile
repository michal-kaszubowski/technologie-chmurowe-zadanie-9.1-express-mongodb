FROM node:latest

WORKDIR /opt/app

COPY ./package.json .

RUN yarn install

COPY . .

EXPOSE 3000

# HEALTHCHECK --interval=1m --timeout=10s --start-period=10s --retries=3 CMD [ "curl", "http://localhost:3000" ] || exit 1

# CMD [ "node", "index.js" ]
