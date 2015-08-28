class Dish < ActiveRecord::Base
  has_many :items

  validates :name, presence: true
end
