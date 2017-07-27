# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Collection.destroy_all
Source.destroy_all

guest = User.create(username: "GuestUser", password: "password123")

guest_collection1 = Collection.create(title: "Sports", user_id: guest.id)
guest_collection2 = Collection.create(title: "General", user_id: guest.id)

source1 = Source.create(collection_id: guest_collection1.id, source_id: "al-jazeera-english")
source2 = Source.create(collection_id: guest_collection1.id, source_id: "bbc-sport")
source3 = Source.create(collection_id: guest_collection2.id, source_id: "business-insider")