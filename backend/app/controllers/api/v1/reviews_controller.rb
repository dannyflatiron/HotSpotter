class Api::V1::ReviewsController < ApplicationController
    before_action :set_review, only: [:show, :update, :destroy]
    
    def index
        reviews = Review.all

        render json: reviews
    end

    def show
        render json: @review
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
        @review = Review.find_by(params[:id])
    end

    def review_params
        params.require(:review).permit(:content, :user_id)
    end
end
