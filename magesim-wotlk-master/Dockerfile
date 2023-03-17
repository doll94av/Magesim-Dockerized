FROM emscripten/emsdk

RUN apt update
RUN apt install software-properties-common -y
RUN add-apt-repository ppa:deadsnakes/ppa
RUN apt install python3.8 -y
RUN npm install --global http-server

COPY . .
RUN make
RUN npx mix


EXPOSE 8080

CMD ["npx", "http-server"]