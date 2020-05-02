class GalleryItem < ApplicationRecord
  paginates_per 6
  has_one_attached :image
end
