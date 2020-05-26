if Rails.env.production?
  # TODO: change to appropriate domain
  Rails.application.config.session_store :cookie_store,
                                         key: "_authentication_app",
                                         domain: "http://159.203.28.56/"
else
  Rails.application.config.session_store :cookie_store,
                                         key: "_authentication_app"
end
