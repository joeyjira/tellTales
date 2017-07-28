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

guest_collection1 = Collection.create(title: "Technology", user_id: guest.id)
guest_collection2 = Collection.create(title: "Business", user_id: guest.id)
guest_collection7 = Collection.create(title: "Entertainment", user_id: guest.id)
guest_collection6 = Collection.create(title: "Science", user_id: guest.id)
guest_collection3 = Collection.create(title: "Music", user_id: guest.id)
guest_collection5 = Collection.create(title: "Sports", user_id: guest.id)


source2 = Source.create(collection_id: guest_collection1.id, source_id: "techcrunch")
source2 = Source.create(collection_id: guest_collection1.id, source_id: "techradar")
source2 = Source.create(collection_id: guest_collection1.id, source_id: "t3n")


source5 = Source.create(collection_id: guest_collection2.id, source_id: "fortune")
source6 = Source.create(collection_id: guest_collection3.id, source_id: "mtv-news")



source10 = Source.create(collection_id: guest_collection5.id, source_id: "bbc-sport")
source11 = Source.create(collection_id: guest_collection5.id, source_id: "espn")
source12 = Source.create(collection_id: guest_collection5.id, source_id: "espn-cric-info")

source14 = Source.create(collection_id: guest_collection5.id, source_id: "nfl-news")

source16 = Source.create(collection_id: guest_collection6.id, source_id: "new-scientist")
source17 = Source.create(collection_id: guest_collection7.id, source_id: "buzzfeed")
source18 = Source.create(collection_id: guest_collection7.id, source_id: "entertainment-weekly")
source19 = Source.create(collection_id: guest_collection7.id, source_id: "the-lad-bible")
source20 = Source.create(collection_id: guest_collection7.id, source_id: "daily-mail")