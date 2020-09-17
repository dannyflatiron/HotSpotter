class Review < ApplicationRecord
  belongs_to :user
  belongs_to :location

  validates :content, :presence => true, :length => { :minimum => 10 }
end
