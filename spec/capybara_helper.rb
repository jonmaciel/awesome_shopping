# frozen_string_literal: true

require "rails_helper"
require "capybara/rails"
require "capybara/poltergeist"

Dir[Rails.root.join('spec', 'support', '**', '*.rb')].each { |f| require f }

Capybara.register_driver :poltergeist do |app|
  Capybara::Poltergeist::Driver.new(app,
    js_errors: true,
    phantomjs_options: ["--ignore-ssl-errors=yes", "--ssl-protocol=TLSv1", "--ignore-ssl-errors=yes", "--ssl-protocol=any"],
    debug: false,
    timeout: 500,
    window_size: [1300, 2000],
    phantomjs: File.absolute_path(Phantomjs.path),
  )
end
Capybara.javascript_driver = :poltergeist
Capybara.server_port = 3001

RSpec.configure do |config|
  config.after(:each, js: true, reset_sessions: true) { Capybara.reset_sessions! }
end
