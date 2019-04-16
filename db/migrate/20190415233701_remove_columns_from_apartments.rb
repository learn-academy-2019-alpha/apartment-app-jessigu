class RemoveColumnsFromApartments < ActiveRecord::Migration[5.2]
  def change
    remove_column :apartments, :manager
  end
end
