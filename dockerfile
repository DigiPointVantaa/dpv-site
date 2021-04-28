FROM node:14 AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY tsconfig*.json ./
COPY . .
RUN npm run build

FROM node:14
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY package*.json ./
ADD package.json /usr/src/app/package.json
RUN npm i
RUN npm i -g serve
COPY --from=builder /usr/src/app/build build
EXPOSE 5000
CMD ["serve", "build", "-l", "tcp://0.0.0.0:5000"];
