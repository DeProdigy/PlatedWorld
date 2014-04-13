class Dish < ActiveRecord::Base
  attr_accessible :name, :country, :long, :lat, :description, :image_url

end