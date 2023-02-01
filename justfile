_default:
  @just --list

build TAG="latest":
  #!/usr/bin/env bash
  echo Building image...
  docker build --platform=linux/amd64 -t sunnyredhu-resume:{{TAG}} .

push TAG="latest":
  #!/usr/bin/env bash
  docker tag sunnyredhu-resume:{{TAG}} sunnyredhu/sunnyredhu-resume:{{TAG}}
  docker push sunnyredhu/sunnyredhu-resume:{{TAG}}

  docker tag sunnyredhu-resume:{{TAG}} sunnyredhu/sunnyredhu-resume:latest
  docker push sunnyredhu/sunnyredhu-resume:latest
