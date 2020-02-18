FROM mhart/alpine-node
COPY . .
CMD ["node","server.js"]