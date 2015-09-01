class Item < ActiveRecord::Base
  belongs_to :dish
  has_many :ingredients, dependent: :destroy

  validates :name, presence: true

  def create_ingredients(ingredients, quantity)
    ingredients.each do |k, v|
      Ingredient.create(name: v.strip, quantity: quantity[k].strip, item_id: self.id)
    end
  end
end
