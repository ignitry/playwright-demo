FROM ruby:3.0-alpine

# install build tools for building native extensions
RUN apk add --update make gcc libc-dev

WORKDIR /app

COPY Gemfile* /app
RUN bundle install

COPY . /app
EXPOSE 9292

CMD ["bundle", "exec", "rackup", "--host", "0.0.0.0", "-p", "9292"]
