FROM node:alpine as build

RUN apk add --update alpine-sdk python

RUN mkdir /build
WORKDIR /build

COPY *.* ./
COPY src ./src
COPY public ./public

RUN npm ci && npm run build

FROM nginx:mainline-alpine

RUN rm /usr/share/nginx/html/*.*
COPY --from=build /build/dist /usr/share/nginx/html
