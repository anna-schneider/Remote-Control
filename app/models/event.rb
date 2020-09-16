class Event < ApplicationRecord
  has_and_belongs_to_many :movies
  has_many :votes
end
