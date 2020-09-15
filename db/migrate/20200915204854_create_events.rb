class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.text :user_name
      t.text :event_name
      t.date :date

      t.timestamps
    end
  end
end
