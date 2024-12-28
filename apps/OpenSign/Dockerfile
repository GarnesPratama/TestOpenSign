# Use an official Node runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY ./apps/OpenSign/package*.json ./

# Install application dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application files
COPY ./apps/OpenSign/ ./
COPY ./apps/OpenSign/.husky/ .husky/

# Expose port 3000
EXPOSE 3000

# Debug The application--for dev
# ENTRYPOINT npm run start-dev
CMD ["npm", "run", "start-dev"]

# Run the application
# ENTRYPOINT npm run start

