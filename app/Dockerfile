FROM node:14 as node_angular
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=node_angular app/dist/app /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

