class DishesController < ApplicationController

  def index
    @dishes = Dish.includes(items: [:ingredients]).all
  end

  def new
    @dish = Dish.new
    render 'new', layout: false
  end

  def create
  end

  def destroy
  end

  private

  def dish_params
    params.require(:dish).permit(:name)
  end
end
