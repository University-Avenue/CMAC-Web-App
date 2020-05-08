class ContactsController < ApplicationController
  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      flash[:success] = "Thank you for your message! We'll get back to you soon!"
      redirect_to contact_us_url
    else
      flash[:error] = 'Oops something went wrong. Please try again.'
      redirect_to contact_us_url
    end
  end
end
