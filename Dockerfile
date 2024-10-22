FROM node:12.18.4-alpine3.11 as builder

WORKDIR /backend

RUN apk --update add --no-cache python make g++

COPY package.json .

RUN npm install

FROM node:12.18.4-alpine3.11 as prod

WORKDIR /backend

COPY /src /backend/src

COPY .sequelizerc .

COPY package.json .

COPY --from=builder /backend/node_modules /backend/node_modules

EXPOSE 3000

CMD [ "npm", "start" ]
