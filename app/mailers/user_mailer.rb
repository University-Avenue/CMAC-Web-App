class UserMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.password_reset.subject
  #
  def password_reset(user)
    @user = user
    # TODO: repalce mail to:
    mail to: "veraj.paruthi@gmail.com", :subject => "Password Reset", :from => "university.avenue2020@gmail.com"
  end
end
