class DishesController < ApplicationController
  respond_to :json

  def index
    dishes = Dish.all

    respond_with dishes
  end

end
