FROM node:13.12.0-alpine
RUN mkdir -p /usr/src/app2 
WORKDIR /usr/src/app2

 
COPY package.json package.json
COPY package-lock.json package-lock.json
 
RUN npm install
 
COPY . .
EXPOSE 3002
 
CMD [ "npm", "run", "dev" ]
