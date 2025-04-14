FROM registry.gitlab.com/nicolalandro/audiveris-docker/audiveris:5.2.5

USER root

RUN apt-get update && \
    apt-get install -y libfreetype6 libfreetype6-dev fontconfig libxrender1 && \
    apt-get clean

# (Re)garante que o usuário audiveris exista
RUN id -u audiveris 2>/dev/null || useradd -m -s /bin/bash audiveris

USER audiveris
