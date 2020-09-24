class Api::V1::LocationsController < ApplicationController

  def index
    @locations = Location.all

    render json: LocationSerializer.new(@locations).serialized_json
  end

  def show
    marker = Location.find_by_object_id(params[:id])
    render json: LocationSerializer.new(marker).serialized_json
  end

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

  def update
    if @location.update(location_params)
      render json: @location
    else
      render json: @location.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @location.destroy
  end

  private
    def set_location
      @location = Location.find(params[:id])
    end

    def location_params
      params.require(:location).permit(:name, :ssid, :type, :location, :review_id, :object_id)
    end
end
