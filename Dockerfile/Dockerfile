FROM node:8.6

COPY ./ /app/

# creamos directorio de la app

WORKDIR ./SPA

# Instalacion app dependencias
# Una Wildcard se usa para asegurar que package.json and 
# package-lock.json sean copiados 

#COPY package*.json /SPA

RUN npm install
#RUN npm ci --only=production

# app source

#COPY . /SPA

EXPOSE 4200

#CMD [ "npm", "start"]

ENTRYPOINT npm start

