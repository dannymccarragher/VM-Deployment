#Install node
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm i

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port 5173 
EXPOSE 5173

# Start the dev server (--host makes it accessible from outside container)
CMD ["npm", "run", "dev", "--", "--host"]

