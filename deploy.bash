#!/bin/bash

project_name=kriegslustig_me

cd /var/docker/kriegslustig.me && \
git pull && \
demeteorizer && \
cp settings.json .demeteorized/ && \
docker build -t ${project_name} . && \
docker stop ${project_name} && \
docker rm ${project_name} && \
docker run -dp 8383:80 --link mongo_${project_name}:mongo --name ${project_name} --restart=always ${project_name}
