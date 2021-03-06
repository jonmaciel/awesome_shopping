
Ruby On Rails + GraphQL + ReactJS with ES6 + postgres

## Install

    $ git clone git@github.com:jonmaciel/awesome_shopping.git
    $ cd awesome_shopping
    $ bundle && npm install
    Configure `database.yml` with your db credentials, and run:
    $ bin/rake db:setup

## Start & watch

    $ foreman start -f Procfile.dev
    OR
    $ rails s
    in another terminal and run:
    $ webpack -d --watch

## On brwoser

    Acess your localhost (http://localhost:3000/)
    If you wanna check GraphQL stuff use `/graphiql` route (http://localhost:3000/graphiql)

## Testing
    Firstly, run
    $ `bin/webpack`
    You'll need of `chromedriver` to capybara tests
    so, if you are using macOS, just run
    $ brew install chromedriver
    if you are using linux, you can install it via npm:
    $ sudo npm -g install chromedriver
    $ ln -sf /usr/lib/node_modules/chromedriver/lib/chromedriver/chromedriver ~/bin/chromedriver

### Feature test scripts:
    $ cd awesome_shopping
    $ rspec ./spec/features/special_behaviour.rb
    $ rspec ./spec/features/cart/engine.rb


### Links:
* [Ruby - docs](http://ruby-doc.org/)
* [Ruby On Rails - docs](http://guides.rubyonrails.org/)
* [graphql-ruby - docs](http://graphql-ruby.org/development/)
* [ES6 - docs](http://es6-features.org/)
* [React JS - docs](https://facebook.github.io/react/docs/)
* [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)

