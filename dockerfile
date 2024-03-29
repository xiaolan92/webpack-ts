FROM node:lts-slim AS build

# 区分不同的环境
ENV BUILD_ENV dev

WORKDIR /app
COPY . /app

RUN  npm install -g pnpm && pnpm install && pnpm run build:${BUILD_ENV}
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
