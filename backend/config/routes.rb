Rails.application.routes.draw do

  resources :favorited_locations
  resources :reviews


  namespace :api do
    namespace :v1 do
      resources :users
      resources :favorited_locations
      resources :reviews
    end
  end

  

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
