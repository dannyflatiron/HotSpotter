class Review < ApplicationRecord
  belongs_to :user

  validates :content, :presence => true, :length => { :minimum => 10 }

end
