class Api::V1::LocationsController < ApplicationController
  before_action :set_location, only: [:show, :update, :destroy]

  # GET /locations
  def index
    @locations = Location.all

    render json: LocationSerializer.new(@locations).serialized_json
  end

  # GET /locations/1
  def show
    binding.pry
    render json: LocationSerializer.new(@location).serialized_json
  end

  # POST /locations
  def create
    location = Location.new(location_params)

    if location.save
      render json: LocationSerializer.new(location).serialized_json
    else
      resp = {
        error: review.errors.full_messages
      }
      render json: resp, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /locations/1
  def update
    if @location.update(location_params)
      render json: @location
    else
      render json: @location.errors, status: :unprocessable_entity
    end
  end

  # DELETE /locations/1
  def destroy
    @location.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_location
      @location = Location.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def location_params
      params.require(:location).permit(:name, :ssid, :type, :location, :review_id)
    end
end
