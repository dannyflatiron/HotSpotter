class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :id, :reviews

end
