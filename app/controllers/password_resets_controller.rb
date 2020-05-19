class PasswordResetsController < ApplicationController
  def new

  end

  def create
    user = User.find_by_email(params[:email])
    user.send_password_reset if user
    redirect_to root_url, :notice => "Email sent!"
  end

  def edit
    byebug
    @user = User.find_by_password_reset_token!(params[:password_reset_token])
  end

  def update
    byebug
    @user = User.find_by_password_reset_token!(params[:format])
    if @user.password_reset_sent_at < 2.hours.ago
      redirect_to new_password_resets_path, :alert => "Password reset has expired."
    elsif @user.update(:password => params[:user][:password])
      redirect_to root_url, :notice => "Password has been reset!"
    else
      render :edit
    end
  end
end
