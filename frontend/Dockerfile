FROM node:12 AS build
WORKDIR /workdir
COPY . .
RUN npm i
RUN npm run build -- --prod
FROM nginx
COPY --from=build /workdir/dist/frontend /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/
EXPOSE 4200
