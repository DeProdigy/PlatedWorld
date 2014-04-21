class LikesController < ApplicationController
  respond_to :json

  def create
    dish_id = params['dishId'].to_i
    dish = Dish.find(dish_id)
    Like.create({dish_id: params['dishId'], name: dish.name})

    render json: {status: 'Like saved!'}
  end

end