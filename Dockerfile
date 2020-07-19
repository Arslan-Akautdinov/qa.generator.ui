FROM alpine:3.8

RUN apk add --update nodejs npm
RUN apk add --update npm

RUN npm install -g @vue/cli
RUN npm update -g @vue/cli