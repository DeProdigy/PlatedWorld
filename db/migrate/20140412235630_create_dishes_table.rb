class CreateDishesTable < ActiveRecord::Migration
  def up
    create_table :dishes do |t|
      t.string :name
      t.string :country
      t.integer :long
      t.integer :lat
      t.text :description
      t.string :image_url
      t.timestamps
    end
  end

  def down
    drop_table :dishes
  end
end
