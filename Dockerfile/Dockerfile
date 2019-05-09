FROM node:8

# creamos directorio de la app

WORKDIR /SPA/scr/app

# Instalaión app dependencias
# Una Wildcard se usa para asegurar que package.json and 
# package-lock.json sean copiados 

COPY package*.json ./

RUN npm install
#RUN npm ci --only=production

# app source

COPY . .

EXPOSE 4200

CMD [ "npm", "start"]


