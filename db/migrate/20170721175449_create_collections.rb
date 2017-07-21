class CreateCollections < ActiveRecord::Migration[5.1]
  def change
    create_table :collections do |t|
      t.string :title, null: false
      t.string :user_id, null: false

      t.timestamps

    end
  end
end
