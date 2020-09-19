class AddObjectIdToLocations < ActiveRecord::Migration[6.0]
  def change
    add_column :locations, :object_id, :string
  end
end
