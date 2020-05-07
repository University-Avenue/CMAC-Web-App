class CreateGalleryItems < ActiveRecord::Migration[6.0]
  def change
    create_table :gallery_items do |t|

      t.timestamps
    end
  end
end
