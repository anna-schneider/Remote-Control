class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.text :name
      t.string :trailer
      t.string :poster

      t.timestamps
    end
  end
end
