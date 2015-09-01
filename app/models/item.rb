class Item < ActiveRecord::Base
  belongs_to :dish
  has_many :ingredients, dependent: :destroy

  validates :name, presence: true

  def create_ingredients(ingredients)
    ingredients[:ingredients].split(',').each do |ingredient|
      ingredient = ingredient.split('-')
      Ingredient.create(name: ingredient[0].strip, quantity: ingredient[1].strip, item_id: self.id)
    end
  end
end
