class CreateApartments < ActiveRecord::Migration[5.2]
  def change
    create_table :apartments do |t|
      t.string :street_one
      t.string :street_two
      t.string :city
      t.integer :postal
      t.string :state
      t.string :country
      t.string :manager
      t.string :user_id

      t.timestamps
    end
  end
end
