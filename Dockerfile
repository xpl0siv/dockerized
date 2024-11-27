
# Angular ### STAGE 1: Build ###
FROM node:current-bookworm-slim AS build
LABEL authors="SirXplosiv"
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

# Nginx ### STAGE 2: Run ###
FROM nginx:stable-alpine-perl AS nginx
COPY default-nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/angular-dockerized/browser /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
