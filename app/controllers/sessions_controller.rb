class SessionsController < ApplicationController
  include CurrentUserConcern

  def create
    # session fixation counter measure
    reset_session

    user = User.find_by(email: params["user"]["email"])
               .try(:authenticate, params["user"]["password"])
    if user
      session[:user_id] = user.id
      render json: {status: :ok}, status: :ok
    else
      render json: { message: "Incorrect Credentials. Please try again." }, status: :not_found
    end
  end

  def logged_in
    if @current_user
      render json: {
          logged_in: true,
      }, :status => :ok
    else
      render json: {
          logged_in: false
      }, :status => :ok
    end
  end

  def logout
    reset_session
    render json: {logged_out: true }, status: 200
  end
end
