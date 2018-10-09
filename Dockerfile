FROM node:10
COPY . /app
WORKDIR /app
RUN make install
EXPOSE 80
CMD ["./bin/server"]
