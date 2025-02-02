FROM node:22.13.1-bookworm-slim AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY src ./src
COPY stories ./stories
COPY .storybook ./.storybook
COPY lwc.config.json ./
COPY webpack.config.js ./

RUN npm run build-storybook

FROM nginx:1.26.2-bookworm

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/storybook-static /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
