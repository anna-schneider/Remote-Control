class Movie < ApplicationRecord
  has_and_belongs_to_many :events
  has_many :votes
end
