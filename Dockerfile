FROM node:18

WORKDIR /app

RUN npm install
RUN npm run build

CMD ["npm", "run", "serve"]

EXPOSE 5173