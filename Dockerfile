FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Set Strapi URL for build
ENV STRAPI_URL=http://strapi:1337

# Build static site
RUN npm run build

# Expose port
EXPOSE 3000

# Start preview server
CMD ["npm", "run", "preview"]