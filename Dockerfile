FROM node:latest

# Create app directory
COPY . /app
WORKDIR /app

# Install app dependencies
RUN yarn install

# Start the server
EXPOSE 5000
CMD [ "yarn", "start" ]
