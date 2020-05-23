json.extract! event, :id, :start, :end, :title, :all_day, :created_at, :updated_at
json.url event_url(event, format: :json)
