class Item < ActiveRecord::Base
  belongs_to :dish
  has_many :ingredients
end
