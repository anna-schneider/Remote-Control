class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.text :username
      t.text :name
      t.date :date

      t.timestamps
    end
  end
end
