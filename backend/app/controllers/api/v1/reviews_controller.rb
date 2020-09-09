class Api::V1::ReviewsController < ApplicationController
    before_action :set_review, only: [:show, :update, :destroy]
    
    def index
        reviews = Review.all
        reviews_json = ReviewSerializer.new(reviews).serialized_json

        render json: reviews_json
    end

    def show
        review_json = ReviewSerializer.new(@review).serialized_json
        render json: review_json
    end

    def create
        review = Review.new(review_params)

        if review.save
            render json: review
        else
            render json: review.errors
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
    end
end