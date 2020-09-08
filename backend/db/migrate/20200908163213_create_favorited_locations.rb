class CreateFavoritedLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :favorited_locations do |t|
      t.string :name
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
