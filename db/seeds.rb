# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Movie.destroy_all

movies = Movie.create!([{ name: 'Die Hard', trailer: 'jaJuwKCmJbY', poster: 'diehard.jpg' }, { name: 'Die Hard 2 Die Harder', trailer: 'OyxfXQ4MGLQ', poster: 'diehard2.jpg' }, { name: 'Die Hard with a Vengeance', trailer: 'gQ0uSh2Hgcs', poster: 'diehard3.jpg' }, { name: 'Bridesmaids', trailer: 'FNppLrmdyug', poster: 'bridesmaids.jpg' }, { name: 'The Jerk', trailer: 'lduFFNqBFPs', poster: 'thejerk.jpg'}, { name: 'Heathers', trailer: 'lduFFNqBFPs', poster: 'heathers.jpg'}, { name: 'In Bruges', trailer: '96harmMOyiY', poster: 'inbruges.jpg'}, { name: 'Zoolander', trailer: 'MaEeSJZYkpY', poster: 'zoolander.jpg'}, {name: 'Young Frankenstein', trailer: 'mOPTriLG5cU', poster: 'youngfrankenstein.jpg'}, { name: 'Anchorman', trailer: 'NJQ4qEWm9lU"', poster: 'anchorman.jpg'}, { name: 'Beetlejuice', trailer: 'ickbVzajrk0', poster: 'beetlejuice.jpg'}, { name: 'Harold and Maude', trailer: 'u-cOukYeGVM', poster: 'haroldandmaude.jpg'}, { name: 'Coming to America', trailer: 'KFroCRDXw5E', poster: 'ctamerica.jpg'}, { name: 'The Princess Bride', trailer: 'O3CIXEAjcc8', poster: 'princessbride.jpg'}])
