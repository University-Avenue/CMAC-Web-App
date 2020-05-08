json.id gallery_item.id
json.file_name gallery_item.image.blob.filename
json.image_url url_for(gallery_item.image)
json.url gallery_item_url(gallery_item, format: :json)
