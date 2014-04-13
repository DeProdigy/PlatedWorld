#encoding: utf-8

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: "Chicago" }, { name: "Copenhagen" }])
#   Mayor.create(name: "Emanuel", city: cities.first)

# for more: "http://www.businessinsider.com/the-best-thing-to-eat-in-every-country-2013-9?op=1"

Dish.delete_all

Dish.create(name: "Hamburger", country: "US", long: -100, lat: 40, image_url: "http://i.milliyet.com.tr/YeniAnaResim/2012/03/19/fft99_mf2100015.Jpeg", description: "The U.S. is so vast and the cuisine so varied, it's nearly impossible to select just one dish to sum up American cuisine. But if you really twist our arm, we""d have to go with the all-American hamburger—especially when you pair it with crispy fries and a hearty milkshake.")
Dish.create(name: "Bulgogi", country: "Korea", long: 128, lat: 36, image_url: "http://media.maangchi.com/wp-content/uploads/2008/03/bulgogi.jpg", description: "Beef bulgogi (fire meat) is a dish of thinly sliced, prime cuts of meat marinated in a mixture of soy sauce, sesame oil, garlic, onions, ginger, sugar, and wine and then grilled. It is often eaten wrapped in lettuce or spinach leaves and accompanied by kimchi (fermented vegetable pickle). Many Korean restaurants have miniature barbecues embedded in tables where diners grill the meat themselves.")
Dish.create(name: "Wiener Schnitzel", country: "Austria", long: 13.78, lat: 47.6, image_url: "http://www.roadtripsrus.com/wp-content/uploads/2013/09/Wiener-Schnitzel.jpg", description: "Made with the finest ingredients and served fresh, this simple dish of pounded veal cutlets breaded and lightly fried is Austria’s food ambassador, despite the dish’s Italian origins. Austrians typically eat Wiener schnitzel garnished with parsley and lemon slices, alongside potato salad.")
Dish.create(name: "Feijoada", country: "Brazil", long: -52.95, lat: 10.65, image_url: "http://www.simplyrecipes.com/wp-content/uploads/2011/01/feijoada-brazilian-bean-stew.jpg", description: "Brazil is a huge country with varied cuisine so it's difficult to choose just one dish, but the most iconic Brazilian dish is probably feijoada, a stew of black beans and smoked beef and pork.")
Dish.create(name: "Tandoori Chicken", country: "India", long: 78, lat: 21, image_url: "http://www.simplyrecipes.com/wp-content/uploads/2010/06/tandoori-chicken.jpg", description: "In India, the cuisine varies tremendously depending on the region, so it's nearly impossible to choose just one dish to sum up the country. In the north, dishes are more meat-heavy with rich curries and flavorful breads. The south has a lot more vegetarian dishes and is known for its intense spices.")
# Dish.create(name: "", country: "", long: , lat: , image_url: "", description: "")
# Dish.create(name: "", country: "", long: , lat: , image_url: "", description: "")
# Dish.create(name: "", country: "", long: , lat: , image_url: "", description: "")
# Dish.create(name: "", country: "", long: , lat: , image_url: "", description: "")
# Dish.create(name: "", country: "", long: , lat: , image_url: "", description: "")
