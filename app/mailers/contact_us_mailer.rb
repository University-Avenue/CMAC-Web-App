class ContactUsMailer < ApplicationMailer
  default from: 'cmac-contact-us@example.com'

  def contact_email
    @name = params[:name]
    @content = params[:content]

  end
end
