Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "http://localhost:3000"
    resource "*",
              headers: :any,
              methods: [:get, :post, :put, :patch, :delete, :options, :head],
              credentials: true
  end

  # TODO: ALLOW DigitalOcean https here
  allow do
    origins "https://PLACE-HOLDER.DIGITALOCEAN.COM"
    resource "*",
              headers: :any,
              methods: [:get, :post, :put, :patch, :delete, :options, :head],
              credentials: true
  end
end