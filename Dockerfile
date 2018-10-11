FROM node:10-alpine
RUN apk add --update make
COPY . /app
WORKDIR /app
RUN make install
EXPOSE 80
CMD ["./bin/server"]
