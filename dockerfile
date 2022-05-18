FROM node:lts-alpine

ENV PORT=3000
EXPOSE ${PORT}

WORKDIR /app
#COPY ["package.json","nx.json", "./"]

COPY package.json /app
RUN npm install
RUN npm run dev