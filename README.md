# Playwright Demo with webserver
Simple web server in Ruby to demonstrate Playwright testing capabilities.

## Requirements
- docker with `docker compose`

### Optional

#### Ruby local development deps
- Install Ruby 2.7+.
  - `brew install ruby` will install the latest stable version.
- `gem install bundler` to install/update Ruby package manager.
- `bundle install` to install local dependecies from `Gemfile.lock`
- `bundle exec rackup` to start Ruby server.

#### NodeJS local development deps
- nodejs/npm
- typescript
  - If you want to use outside this project, install with `npm install -g typescript`. Otherwise, just `npm install` normally.

## Testing procedure
- create `.env` file with copied content from `env.example`.
  - (`.env` will be read automatically by `docker compose`)
  ```shell
  # Example .env content
  HOST=http://web:9292/
  REPORT_PORT=9323
  ```
- start webserver with `docker-compose up web`.
- start playwright automated script with `docker compose run playwright npx playwright test`.
- Test results will be available in `playwright-report/index.html`. Open it with web browser.
  ```shell
  # Example: How to open simple HTTP server with Python
  python -m http.server 8000 --directory ./playwright-report
  ```
- see example procedure in `e2e.test.sh`. or simply run the file.

## Directory structure
```
# web server
- config
- lib
- public
- views
- app.rb
- config.ru
- Gemfile
- Gemfile.lock

# playwright test runner
- tests
- package-lock.json
- packgage.json
- playwright.config.ts
```

## Screenshot of HTML report
![HTML report](/screenshots/html-report.png)
![Fail report](/screenshots/fail-detail.png)
