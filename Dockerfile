## MySQL 5.6 with Percona Xtrabackup

## Pull the mysql:5.6 image
FROM mysql:5.6

## List all packages that we want to install
ENV PACKAGE percona-xtrabackup-23

# Install requirement (wget)
RUN apt-get update && apt-get install -y wget

# Install Percona apt repository and Percona Xtrabackup
RUN wget https://repo.percona.com/apt/percona-release_0.1-3.jessie_all.deb && \
    dpkg -i percona-release_0.1-3.jessie_all.deb && \
    apt-get update && \
    apt-get install -y $PACKAGE

# Create the backup destination
RUN mkdir -p /backup/xtrabackups

# Allow mountable backup path
VOLUME ["/backup/xtrabackup"]

# SCALA
FROM openjdk:8u151

ENV SCALA_VERSION 2.12.4
ENV SBT_VERSION 1.1.1

RUN touch /usr/lib/jvm/java-8-openjdk-amd64/release

# Install Scala
RUN \
  curl -fsL https://downloads.typesafe.com/scala/$SCALA_VERSION/scala-$SCALA_VERSION.tgz | tar xfz - -C /root/ && \
  echo >> /root/.bashrc && \
  echo "export PATH=~/scala-$SCALA_VERSION/bin:$PATH" >> /root/.bashrc

# Install sbt
RUN \
  curl -L -o sbt-$SBT_VERSION.deb https://dl.bintray.com/sbt/debian/sbt-$SBT_VERSION.deb && \
  dpkg -i sbt-$SBT_VERSION.deb && \
  rm sbt-$SBT_VERSION.deb && \
  apt-get update && \
  apt-get install sbt && \
  sbt sbtVersion

# Define working directory
WORKDIR /app
ADD . /app
CMD sbt run
