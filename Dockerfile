FROM node:10.16-stretch-slim

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json  ./
RUN npm install
RUN npm install pm2 -g

# Bundle app source
COPY . .

# Build
RUN npm run build

# Run APP
EXPOSE 5000
CMD ["pm2-docker", "process.json", "--only", "production"]
