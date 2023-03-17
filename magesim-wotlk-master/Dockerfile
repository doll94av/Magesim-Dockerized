FROM emscripten/emsdk

RUN apt update
RUN apt install software-properties-common -y
RUN add-apt-repository ppa:deadsnakes/ppa
ENV DEBIAN_FRONTEND=noninteractive

RUN apt --assume-yes -q install python3.8
RUN npm install --global http-server

COPY . .
RUN make


EXPOSE 8080

CMD ["python3", "-m", "http.server"]