# Image verification until packages are updated on GitHub

A unified directory (hereafter `root/`) is required, which contains project directories at the same level:

- `copyfactory-javascript-sdk/`
- `metastats-javascript-sdk/`
- `metaapi-node.js-sdk/`

In the `root/` directory, create a `.dockerignore` file with the following content:

``` bash
*
!metaapi-node.js-sdk
!metastats-javascript-sdk
!copyfactory-javascript-sdk
```

Place the `Dockerfile.*` files in the `root/` directory:

- Angular examples: `Dockerfile.angular`;
- React examples: `Dockerfile.react`;
- Vue examples: `Dockerfile.vue`.

Create the necessary images:

``` bash
docker build -t metaapi-vue-app -f Dockerfile.vue .
docker build -t metaapi-react-app -f Dockerfile.react .
docker build -t metaapi-angular-app -f Dockerfile.angular .
```

Run the required images:

``` bash
docker run -d -p 4200:4200 metaapi-angular-app
docker run -d -p 5173:5173 metaapi-react-app
docker run -d -p 5173:5173 metaapi-vue-app
```

Alternatively, use `docker-compose`. To do this, move the `docker-compose.yml` and `Dockerfile.*` files to the `root/` directory and run:

``` bash
docker-compose up
```
