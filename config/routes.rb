Rails.application.routes.draw do
  get 'programs' => 'pages#programs'
  get 'instructors' => 'pages#instructors'
  get 'schedule' => 'pages#schedule'
  get 'gallery' => 'pages#gallery'
  get 'contact_us' => 'pages#contact_us'

  root 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
