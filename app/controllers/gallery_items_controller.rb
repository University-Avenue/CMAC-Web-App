class GalleryItemsController < ApplicationController
  before_action :set_gallery_item, only: [:show, :edit, :update, :destroy]

  # GET /gallery_items
  # GET /gallery_items.json
  def index
    @gallery_items = GalleryItem.all.order(created_at: :desc).page params[:page]
  end

  def upload
    @gallery_items = set_gallery_items_from_params[:gallery_items]

    failedUploads = Array.new
    @gallery_items.each do |item|
      image = item[:gallery_item][:image]
      @gallery_item = GalleryItem.new(:image => image)
      if @gallery_item.save
      else
        failedUploads.push(image.original_filename)
      end
    end

    if failedUploads.length > 0
      respond_to do |format|
        format.json { render json: failedUploads, status: :unprocessable_entity, content_type: "application/json" }
      end
    else
      respond_to do |format|
        format.json { head :ok, content_type: "application/json" }
      end
    end
  end

  # DELETE /gallery_items/1
  # DELETE /gallery_items/1.json
  def destroy
    @gallery_item.destroy
    respond_to do |format|
      format.html { redirect_to gallery_items_url, notice: 'Gallery item was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_gallery_item
      @gallery_item = GalleryItem.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def set_gallery_items_from_params
      params.require(:gallery_items).permit({
        gallery_items: [
          gallery_item: [
            :image
          ]
        ]
      })
    end
end
