FROM node:8.9

COPY ./ /SPA/

# creamos directorio de la app

WORKDIR ./SPA

# Instalacion app dependencias
# Una Wildcard se usa para asegurar que package.json and 
# package-lock.json sean copiados 

#COPY package*.json /SPA

RUN npm install -g @angular/cli && npm cache clean --force
#RUN npm ci --only=production

# app source

COPY . /SPA

# Puerto entorno dev
EXPOSE 4200
# Puerto livereload
EXPOSE 49153
# Puerto Test
EXPOSE 9876
# Puerto e2e
EXPOSE 49152 

#ng update @angular/cli
CMD ng serve --host 0.0.0.0

#ng serve --open

#ng build --prod


