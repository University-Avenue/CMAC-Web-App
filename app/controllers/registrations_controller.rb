class RegistrationsController < ApplicationController
  def create
    user = User.new(email: params['user']['email'],
                    password: params['user']['password'],
                    password_confirmation: params['user']['password_confirmation'])

    respond_to do |format|
      if user.save
        format.html {redirect_to login_url}
        format.json {render json: user, status: :created}
      else
        format.html {redirect_to login_url}
        format.json {render json: user.errors, status: :unprocessable_entity}
      end
    end
  end
end
