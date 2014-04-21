class Like < ActiveRecord::Base
  attr_accessible :name, :dish_id
  belongs_to :dish
end