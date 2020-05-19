Rails.application.routes.draw do
  resources :sessions, only: [:create]
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"
  post 'login_user' => "sessions#create"

  resources :registrations, only: [:create]
  resources :contacts, only:[:new, :create], :path => 'contact_us'
  resource  :password_resets

  resources :gallery_items do
    get '(page/:page)', action: :index, on: :collection, as: ''
  end
  post 'gallery_items/upload', to: 'gallery_items#upload'
  get 'image_gallery/index'
  get 'image_gallery/show'
  get 'image_gallery/delete'

  get 'contact_us' => 'pages#contact_us'
  get 'schedule' => 'pages#schedule'
  get 'profile' => 'pages#profile'
  get 'train' => 'pages#train'
  get 'login' => 'pages#login'

  root :to => 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
