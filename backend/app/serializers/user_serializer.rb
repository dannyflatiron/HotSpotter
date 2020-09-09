class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username 
  # has_many :reviews, serializer: ReviewSerializer
end
