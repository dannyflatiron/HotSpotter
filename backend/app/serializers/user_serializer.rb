class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :id, :reviews 
  # has_many :reviews

end
