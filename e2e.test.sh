# build changes
docker compose build web
# start daemonized server
# bundle exec rackup -D -P server.pid
docker compose up -d web

# migrate db schema
# dumb db data

# Waiting for server to respond
until $(curl --output /dev/null --silent --head --fail http://localhost:9292); do
  printf "...Waiting for server to respond\n"
  sleep 1
done

# Start playwright testing
docker compose run playwright npx playwright test

# Kill daemonized server
# cat server.pid | xargs kill -9
# rm server.pid
docker compose down
