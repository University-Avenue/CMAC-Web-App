if Rails.env.production?
  # TODO: change to appropriate domain
  Rails.application.config.session_store :cookie_store,
                                         key: "_authentication_app",
                                         domain: "https://PLACE-HOLDER.DIGITALOCEAN.COM"
else
  Rails.application.config.session_store :cookie_store,
                                         key: "_authentication_app"
end
