class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :content, :user

end
