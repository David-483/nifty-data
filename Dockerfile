# Stage 1: Build the React app
FROM node:16 AS react-build

# Set working directory for React
WORKDIR /frontend

# Copy React project files
COPY ./frontend/package.json ./frontend/package-lock.json ./

RUN npm install --save echarts-for-react

RUN npm install

# Copy the rest of the React app source code and build it
COPY ./frontend ./
RUN npm run build

# yup, python 3.11!
FROM python:3.11-slim


# docker build -t django-nginx -f Dockerfile .
# docker run -p 8000:80 --name django-nginx --rm django-nginx 

# install nginx
RUN apt-get update && apt-get install nginx -y
# copy our nginx configuration to overwrite nginx defaults
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# link nginx logs to container stdout
RUN ln -sf /dev/stdout /var/log/nginx/access.log && ln -sf /dev/stderr /var/log/nginx/error.log

COPY --from=react-build /frontend/build /usr/share/nginx/html

# copy the django code
COPY ./backend ./app

# change our working directory to the django projcet roo
WORKDIR /app

# create virtual env (notice the location?)
# update pip
# install requirements
RUN python -m venv /opt/venv && \
    /opt/venv/bin/python -m pip install pip --upgrade && \
    /opt/venv/bin/python -m pip install -r requirements.txt

COPY deploy.php /usr/share/nginx/html

# make our entrypoint.sh executable
RUN chmod +x ./entrypoint.sh

EXPOSE 4800

# execute our entrypoint.sh file
CMD ["./entrypoint.sh"]