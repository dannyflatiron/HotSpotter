class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :favorited_locations

    validates :username, :presence => true, :uniqueness => true, :length => { :minimum => 1 }
end
