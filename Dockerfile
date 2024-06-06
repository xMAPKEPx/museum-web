FROM node:18

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install
RUN npm run build

CMD ["npm", "run", "serve"]

EXPOSE 5173