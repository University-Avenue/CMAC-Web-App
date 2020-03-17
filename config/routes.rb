Rails.application.routes.draw do
  get 'contact_us/index'
  get 'gallery/index'
  get 'schedule/index'
  get 'instructors/index'
  get 'programs/index'
  root 'landing_page#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
