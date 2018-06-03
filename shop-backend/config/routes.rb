Rails.application.routes.draw do
  get '/auth/github', to: 'authentication#github', format: false

  resource :user, only: [:show]

  resources :users
  namespace :api do
    namespace :v1 do
      resources :products
      resources :categories
    end
  end
end
