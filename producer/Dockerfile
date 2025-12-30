FROM node:18-alpine

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy other files
COPY . .

# Build project
RUN npm run build

EXPOSE 5000

CMD ["npm", "run", "start:prod"]


