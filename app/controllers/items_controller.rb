class ItemsController < ApplicationController

  def show
  end

  def new
    @item = Item.new
    @ingredient = Ingredient.new
    render 'new', layout: false
  end

  def create
    @item = Item.new(item_params)
    @item.dish_id = params[:dish_id]
    if @item.save
      create_ingredients(@item)
      render @item
    else
      flash[:notice] = 'Invalid item'
    end
  end

  private

  def create_ingredients(item)
    ingredients = ingredient_params[:ingredients].split(',')
    ingredients.each {|ingredient| Ingredient.create(name: ingredient, item_id: item.id)}
  end

  def ingredient_params
    params.require(:item).permit(:ingredients)
  end

  def item_params
    params.require(:item).permit(:name, :dish_id)
  end
end
