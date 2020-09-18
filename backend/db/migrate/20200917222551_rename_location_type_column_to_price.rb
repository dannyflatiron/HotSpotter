class RenameLocationTypeColumnToPrice < ActiveRecord::Migration[6.0]
  def change
    rename_column :locations, :type, :price
  end
end
