# Use an official Node runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY ./apps/OpenSign/package*.json ./

# Install application dependencies
RUN npm install --legacy-peer-deps
# RUN mv /usr/src/app/node_modules /usr/src/app/apps/OpenSign/

# Copy the rest of the application files
COPY ./apps/OpenSign/ ./
COPY ./apps/OpenSign/.husky/ .husky/

RUN npm run build

# Expose port 3000
EXPOSE 3000

# Run the application
ENTRYPOINT npm run start
