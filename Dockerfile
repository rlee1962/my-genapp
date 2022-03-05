FROM node:latest
ENV NODE_ENV=production

RUN mkdir -p /app/src

WORKDIR /app/src

# COPY package.json .
COPY ["package.json", "package-lock.json*", "./"]

# RUN npx install
RUN yarn install --production

# COPY . .
COPY [".", "."]

RUN rm -rf package-lock.json
# RUN rm -rf node_modules

EXPOSE 3000

# CMD ["yarn",  "cache", "clean"], ["yarn"], ["yarn",  "start"]
CMD ["yarn",  "start"]
