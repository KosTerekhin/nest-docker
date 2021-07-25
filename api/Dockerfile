FROM node:14 AS development

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

###################
### PRODUCTION  ###
###################

FROM node:14 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY --from=development /app .

CMD [ "node", 'dist/main' ]

