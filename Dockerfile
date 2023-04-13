# https://hub.docker.com/_/node
FROM node:18
WORKDIR /usr/src/app

COPY . .
RUN npm install -g pnpm@v7
RUN pnpm install --frozen-lockfile

EXPOSE 8000
CMD [ "pnpm", "start" ]