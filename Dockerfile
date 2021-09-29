FROM php:7.4-apache

LABEL maintainer="Sam Ristow"

COPY app /srv/app

COPY docker/apache/vhost.conf /etc/apache2/sites-available/000-default.conf
