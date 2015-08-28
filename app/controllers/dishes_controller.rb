class DishesController < ApplicationController

  def show
  end

  def index
    @dishes = Dish.includes(items: [:ingredients]).all
  end

  def new
    @dish = Dish.new
    render 'new', layout: false
  end

  def create
    @dish = Dish.new(dish_params)
    if @dish.save
      render 'dishes/show', locals: {dish: @dish}, layout: false
    else
      flash[:notice] = 'Invalid Dish'
    end
  end

  def destroy
  end

  private

  def dish_params
    params.require(:dish).permit(:name)
  end
end
