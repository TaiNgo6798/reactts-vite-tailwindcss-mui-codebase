### STAGE 1: Build ###
FROM node:16-bullseye as builder

ARG REACT_APP_ENVIRONMENT="production"

COPY package.json /tmp/package.json
COPY package-lock.json /tmp/package-lock.json
# COPY .npmrc /tmp/.npmrc

RUN cd /tmp && npm ci

WORKDIR /usr/src/app
RUN cp -a /tmp/node_modules .

COPY . .

# Build
ENV NODE_ENV 'production'
RUN npm run build

### STAGE 2: Serve ###
FROM nginx:1.22.0-alpine
COPY nginx/run.sh nginx/nginx.template /etc/nginx/
WORKDIR /etc/nginx
RUN chmod +x run.sh

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

RUN chown -R nginx:nginx /usr/share/nginx/html && \
  chown -R nginx:nginx /var/cache/nginx && \
  chown -R nginx:nginx /var/log/nginx && \
  chown -R nginx:nginx /etc/nginx/conf.d && \
  chown -R nginx:nginx /usr/share/nginx/html
RUN touch /var/run/nginx.pid && \
  chown -R nginx:nginx /var/run/nginx.pid

USER nginx

EXPOSE 8080
ENTRYPOINT [ "/etc/nginx/run.sh" ]