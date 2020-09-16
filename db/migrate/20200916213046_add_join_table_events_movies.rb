class AddJoinTableEventsMovies < ActiveRecord::Migration[6.0]
  def change
    create_join_table :events, :movies do |t|
      # t.index [:event_id, :movie_id]
      # t.index [:movie_id, :event_id]
    end
  end
end
