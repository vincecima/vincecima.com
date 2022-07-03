FROM joseluisq/static-web-server:2.9.0-alpine AS build
FROM scratch

COPY --from=build /usr/local/bin/static-web-server /

EXPOSE 80
STOPSIGNAL SIGQUIT
ENTRYPOINT ["/static-web-server"]

ADD ./output/ /public