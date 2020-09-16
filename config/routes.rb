Rails.application.routes.draw do
  resources :votes, only: :create
  resources :movies, only: :index
  resources :events, except: :index
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
