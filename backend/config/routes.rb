Rails.application.routes.draw do

  post "/api/v1/login", to: "api/v1/sessions#create"
  post "/api/v1/signup", to: "api/v1/users#create"
  get "/api/v1/get_current_user", to: "api/v1/sessions#get_current_user"


  namespace :api do
    namespace :v1 do
      resources :users do
        resources :reviews
      end
    end
  end

  namespace :api do
    namespace :v1 do
      resources :locations do
        resources :reviews
      end
    end
  end

  namespace :api do
    namespace :v1 do
      end
    end
  

  namespace :api do
    namespace :v1 do
      resources :sessions, only: [:create, :destroy]
    end
  end

  

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
