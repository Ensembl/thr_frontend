# See the NOTICE file distributed with this work for additional information
# regarding copyright ownership.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# we are using multi-stage build: https://docs.docker.com/develop/develop-images/multistage-build/
# tldr; we setup two stages, a first stage that builds the application and a second stage that runs it

# Build stage:
FROM node:14.17.3-alpine3.12 AS builder

# set work directory
WORKDIR /usr/src/app

# install dependencies and avoid `node-gyp rebuild` errors
COPY ./package.json .
RUN apk add --no-cache --virtual .gyp \
        python3 \
        make \
        g++ \
    && npm install \
    && npm install moment@2.29.0 \
    && apk del .gyp

# copy our react project
COPY . .

# we would pass the value of this API_SERVER from docker-compose
ARG API_SERVER
# before the 'npm run build' command is run, we create an environment variable called 'REACT_APP_API_SERVER' for the build process
ENV REACT_APP_API_SERVER=${API_SERVER}

# perform npm build
# we would create a production version of our thr_frontend with the npm build command.
# this would create a build folder to be served later by the npm 'serve' server
# you could read more about this here: https://create-react-app.dev/docs/deployment/
RUN REACT_APP_API_SERVER=${API_SERVER} \
  npm run build:staging


# Final stage:
FROM node:14.17.3-alpine3.12

# set work directory
WORKDIR /usr/src/app

# install serve - deployment static server suggested by official create-react-app
RUN npm install -g serve

# copy our build files from our builder stage
COPY --from=builder /usr/src/app/build ./build
