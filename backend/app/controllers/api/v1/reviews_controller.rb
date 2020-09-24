class Api::V1::ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :update, :destroy]
  
  def index
      reviews = Review.all
      reviews_json = ReviewSerializer.new(reviews).serialized_json
      reviews_json = reviews
      render json: reviews_json
  end

  def show
      render json: ReviewSerializer.new(@review).serialized_json
  end

  def create
    location = Location.find_or_create_by(name: params[:name], location: params[:location], ssid: params[:ssid], price: params[:price], object_id: params[:objectid] )
    review = Review.find_or_create_by(content: params[:content], user_id: params[:user_id])
    review.location_id = location.id
    location.reviews.push(review)
      if review.save && location.save
          render json: LocationSerializer.new(location).serialized_json
      else
          resp = {
              reviewerror: review.errors.full_messages,
              locationerror: location.errors.full_messages
            }
            render json: resp, status: :unprocessable_entity
      end
  end

  def update
      if @review.update(review_params)
          render json: @review
      else
          render json: @review.errors
      end
  end

  def destroy
      review.destroy
  end



  private

  def set_review
      @review = Review.find(params[:id])
  end

  def review_params
      params.require(:review).permit(:content, :user_id)
      binding.pry
  end
end
