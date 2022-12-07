FROM node

RUN mkdir -p /home/node/swagger-ui/node_modules/ && chown -R node:node /home/node/swagger-ui/
WORKDIR /home/node/swagger-ui
COPY package*.json ./

USER node

RUN npm ci
COPY --chown=node:node . .

CMD npm run start