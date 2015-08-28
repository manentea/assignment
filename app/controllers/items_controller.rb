class ItemsController < ApplicationController

  def show
  end

  def new
    @item = Item.new
    render 'new', layout: false
  end

  def create
    @item = Item.new(item_params)
    @item.dish_id = params[:dish_id]
    if @item.save
      render 'items/show', locals: {item: @item}, layout: false
    else
      flash[:notice] = 'Invalid item'
    end
  end

  private

  def item_params
    params.require(:item).permit(:name, :dish_id)
  end
end
