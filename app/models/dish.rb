class Dish < ActiveRecord::Base
  has_many :items
end
