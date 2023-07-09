# docker build -t metaapi-vue-app -f Dockerfile.vue .
# docker run -d -p 5173:5173 metaapi-vue-app

FROM node:lts-hydrogen

RUN npm install -g --silent link

COPY ./copyfactory-javascript-sdk /app/copyfactory-javascript-sdk

WORKDIR /app/copyfactory-javascript-sdk
RUN npm install --silent
RUN npm run build

COPY ./metastats-javascript-sdk /app/metastats-javascript-sdk

WORKDIR /app/metastats-javascript-sdk
RUN npm install --silent
RUN npm run build

COPY ./metaapi-node.js-sdk /app/metaapi-node.js-sdk

WORKDIR /app/metaapi-node.js-sdk
RUN npm install --silent
RUN npx link ../copyfactory-javascript-sdk
RUN npx link ../metastats-javascript-sdk

COPY ./metaapi-node.js-sdk/examples/vue/vue-app /app/vue

WORKDIR /app/vue/
RUN npm install --silent
RUN npx link ../metaapi-node.js-sdk

EXPOSE 5173

CMD ["npm", "run", "dev"]
