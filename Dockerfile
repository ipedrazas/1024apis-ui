FROM node:5-onbuild

EXPOSE 3000

RUN npm build
RUN npm install
RUN npm install -g bower
RUN bower install --allow-root

CMD ["npm", "start"]
