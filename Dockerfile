FROM node:22-alpine

WORKDIR /app

RUN ls -la /app
COPY . .
RUN ls -la /app

RUN npm install
RUN npm run build

CMD ["npm", "run", "serve"]

EXPOSE 5173