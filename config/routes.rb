Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end

  root 'index#index'
  get 'index/index'
  get '/cart', to: 'index#index'

  post "/graphql", to: "graphql#execute"
  resources :products
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
