require 'test_helper'

class FavoritedLocationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @favorited_location = favorited_locations(:one)
  end

  test "should get index" do
    get favorited_locations_url, as: :json
    assert_response :success
  end

  test "should create favorited_location" do
    assert_difference('FavoritedLocation.count') do
      post favorited_locations_url, params: { favorited_location: { name: @favorited_location.name, user_id: @favorited_location.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show favorited_location" do
    get favorited_location_url(@favorited_location), as: :json
    assert_response :success
  end

  test "should update favorited_location" do
    patch favorited_location_url(@favorited_location), params: { favorited_location: { name: @favorited_location.name, user_id: @favorited_location.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy favorited_location" do
    assert_difference('FavoritedLocation.count', -1) do
      delete favorited_location_url(@favorited_location), as: :json
    end

    assert_response 204
  end
end
