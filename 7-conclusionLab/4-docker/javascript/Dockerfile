# Dockerfile
FROM node:20

WORKDIR /app

COPY package.json ./
COPY app.js ./

RUN npm install

EXPOSE 3000

CMD ["node", "app.js"]