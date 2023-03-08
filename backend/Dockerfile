FROM node:17

WORKDIR /app

## Add the wait script to the image
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait

COPY package*.json yarn.lock* ./

RUN yarn

COPY ./ ./

CMD /wait && npx prisma migrate dev && yarn start