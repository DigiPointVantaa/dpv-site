FROM node:14 AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY tsconfig*.json ./
COPY src src
COPY ./public public
RUN npm run build

FROM node:14
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY package*.json ./
ADD package.json /usr/src/app/package.json
RUN npm i
RUN npm i -g server
COPY --from=builder /usr/src/app/build .
EXPOSE 5000
CMD ["serve", "-s build"];
