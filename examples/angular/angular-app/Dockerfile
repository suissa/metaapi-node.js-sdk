FROM node:lts-hydrogen

WORKDIR /app

COPY package*.json ./

RUN npm i -g --silent @angular/cli@latest
RUN npm i -s

COPY . .

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
