Rails.application.routes.draw do
  resources :contacts, only:[:new, :create], :path => 'contact_us'
  get 'contact_us' => 'pages#contact_us'
  get 'schedule' => 'pages#schedule'
  get 'profile' => 'pages#profile'
  get 'train' => 'pages#train'

  root 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
