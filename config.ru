require_relative 'app.rb'

require 'rack/etag'
require 'rack/conditional_get'
require 'rack/deflater'

use Rack::ETag
use Rack::ConditionalGet
use Rack::Deflater

run Sinatra::Application
