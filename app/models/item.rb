class Item < ActiveRecord::Base
  belongs_to :dish
  has_many :ingredients, dependent: :destroy

  validates :name, presence: true

  def create_ingredients(ingredients)
    ingredients[:ingredients].split(',').each do |ingredient|
      Ingredient.create(name: ingredient, item_id: self.id)
    end
  end
end
