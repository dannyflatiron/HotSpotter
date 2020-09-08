class Api::V1::FavoritedLocationsController < ApplicationController
  before_action :set_favorited_location

  # GET /favorited_locations
  def index
    favorited_locations = FavoritedLocation.all

    render json: favorited_locations
  end

  # GET /favorited_locations/1
  def show
    render json: favorited_location
  end

  # POST /favorited_locations
  def create
    favorited_location = FavoritedLocation.new(favorited_location_params)

    if favorited_location.save
      render json: favorited_location, status: :created, location: favorited_location
    else
      render json: favorited_location.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /favorited_locations/1
  def update
    if favorited_location.update(favorited_location_params)
      render json: favorited_location
    else
      render json: favorited_location.errors, status: :unprocessable_entity
    end
  end

  # DELETE /favorited_locations/1
  def destroy
    favorited_location.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_favorited_location
      favorited_location = FavoritedLocation.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def favorited_location_params
      params.require(:favorited_location).permit(:name, :user_id)
    end
end
