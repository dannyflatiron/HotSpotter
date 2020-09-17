# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# danny = User.create(username: "Danny", password: "password")
# Review.create(content:"Hello World! This is a sample test", user: User.first)
# Review.create(content:"Hola!", user: User.first)
# FavoritedLocation.create(name:"Brooklyn", user: User.first)

mary = User.create(username: "Mary", password: "password")
Location.create(name:"Aruba", ssid:"1", type:"", location:"in the park")
Review.create(content:"Moscato is life!", user: User.first, location: Location.first)
Review.create(content:"I must go back to Aruba!", user: User.first, location: Location.first)

