FROM node:21-alpine
WORKDIR /react-frontend
COPY . .
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL $NEXT_PUBLIC_API_URL

ARG GENERATE_SOURCEMAP
ENV GENERATE_SOURCEMAP $GENERATE_SOURCEMAP

ARG NEXT_PUBLIC_API_HEALTHCHECK_ENDPOINT
ENV NEXT_PUBLIC_API_HEALTHCHECK_ENDPOINT $NEXT_PUBLIC_API_HEALTHCHECK_ENDPOINT

RUN npm install
RUN npm run build
