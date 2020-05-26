Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "http://localhost:3000"
    resource "*",
              headers: :any,
              methods: [:get, :post, :put, :patch, :delete, :options, :head],
              credentials: true
  end

  # TODO: Allow DigitalOcean https here
  allow do
    origins "http://159.203.28.56/"
    resource "*",
              headers: :any,
              methods: [:get, :post, :put, :patch, :delete, :options, :head],
              credentials: true
  end
end
