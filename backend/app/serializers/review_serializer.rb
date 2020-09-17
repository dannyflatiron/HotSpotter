class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :content, :user_id, :location_id,

end
