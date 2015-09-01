class AddQuantityToIngredients < ActiveRecord::Migration
  def change
    add_column :ingredients, :quantity, :string, null: false
  end
end