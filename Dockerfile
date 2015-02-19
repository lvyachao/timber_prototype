FROM rouge8/node-phantomjs
RUN apt-get install -y apache2 php5
RUN npm install -g express body-parser node-phantom
ADD . /var/www/
EXPOSE 80
CMD /usr/sbin/apache2ctl -D FOREGROUND
