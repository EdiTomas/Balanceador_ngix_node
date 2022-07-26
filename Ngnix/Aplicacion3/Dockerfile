FROM node:13.12.0-alpine
RUN mkdir -p /usr/src/app3 
WORKDIR /usr/src/app3
 
COPY package.json package.json
COPY package-lock.json package-lock.json
 
RUN npm install
 
COPY . .
EXPOSE 3003
 
CMD [ "npm", "run", "dev" ]
