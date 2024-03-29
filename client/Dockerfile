# 
# Generated by
# 
#      _____ _          __  __      _     _
#     / ____| |        / _|/ _|    | |   | |
#    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
#     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
#     ____) |   < (_| | | | || (_) | | (_| |  __/ |
#    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
#
# The code generator that works in many programming languages
#
#			https://www.skaffolder.com
#
#
# You can generate the code from the command-line
#       https://npmjs.com/package/skaffolder-cli
#
#       npm install -g skaffodler-cli
#
#   #   #   #   #   #   #   #   #   #   #   #   #   #   #   #
#
# To remove this comment please upgrade your plan here: 
#      https://app.skaffolder.com/#!/upgrade
#
# Or get up to 70% discount sharing your unique link:
#       https://app.skaffolder.com/#!/register?friend=5dbe9b009ef7a1181f8df334
#
# You will get 10% discount for each one of your friends
# 
#

# Create image based on the Skaffolder Node ES6 image
FROM skaffolder/reactjs-base as builder

# Copy source files
WORKDIR /build 
COPY . /build

# Move source file with node_modules
RUN mv /source/node_modules /build/node_modules

# Environment vars
ENV REACT_APP_ENDPOINT /api

# Install dependencies
RUN npm install

# Build prod
RUN npm run build

# ----------------------------------
# Prepare production environment
FROM nginx:alpine
# ----------------------------------

# Clean nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy dist
COPY --from=builder /build/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

# Permission
RUN chown root /usr/share/nginx/html/*
RUN chmod 755 /usr/share/nginx/html/*

# Expose port
EXPOSE 2000

# Start
CMD ["nginx", "-g", "daemon off;"]
