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
      @item.create_ingredients(ingredient_params, quantity_params)
      render @item
    else
      flash[:notice] = 'Invalid item'
    end
  end

  private

  def quantity_params
    params.require(:quantity).permit!
  end

  def ingredient_params
    params.require(:ingredients).permit!
  end

  def item_params
    params.require(:item).permit(:name, :dish_id)
  end
end
