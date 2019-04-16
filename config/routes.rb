Rails.application.routes.draw do

  resources :apartments, constraints: ->(request){ !request.format.html? }

  devise_for :users

  get '*path', to: 'pages#protected', constraints: ->(request){ request.format.html? }
  get "protected", to: 'pages#protected', as: :protected

  root to: "pages#unprotected"
end
