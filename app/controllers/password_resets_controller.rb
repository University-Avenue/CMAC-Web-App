class PasswordResetsController < ApplicationController
  def new

  end

  def create
    user = User.find_by_email(params[:email])
    user.send_password_reset if user
    redirect_to root_url, :notice => "Email sent!"
  end

  def edit
    @user = User.find_by_password_reset_token!(params[:password_reset_token])
  end

  def update
    @user = User.find_by_password_reset_token!(params[:user][:password_reset_token])
    if @user.password_reset_sent_at < 24.hours.ago
      redirect_to new, :alert => "Password reset has expired."
    elsif @user.update(:password => params[:user][:password], :password_reset_token => nil)
      redirect_to root_url, :notice => "Password has been reset!"
    else
      render :edit
    end
  end
end
