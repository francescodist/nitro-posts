FROM node:12 AS build
WORKDIR /workdir
COPY . .
RUN npm i
RUN npm run build -- --prod
FROM nginx
COPY --from=build /workdir/dist/frontend /usr/share/nginx/html
RUN sed -i "s/    listen       80;/    listen 4200;/" /etc/nginx/conf.d/default.conf
EXPOSE 4200
