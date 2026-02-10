FROM node:22-alpine

WORKDIR /app

COPY . .
RUN rm -rf node_modules
RUN rm -rf .git || true
RUN apk add --no-cache git
RUN git init && git config user.email "dev@localhost" && git config user.name "Developer"

RUN npm i

RUN npm run link
RUN npm run build

WORKDIR /app/examples/xcm-transfer

EXPOSE 3001

CMD ["npm", "run", "dev"]
