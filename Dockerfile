FROM node:18-slim
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --legacy-peer-deps --silent
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
