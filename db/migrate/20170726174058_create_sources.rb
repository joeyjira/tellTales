class CreateSources < ActiveRecord::Migration[5.1]
  def change
    create_table :sources do |t|
      t.string :source_id, null: false
      t.string :collection_id, null: false

      t.timestamp
    end

    add_index :sources, [:source_id, :collection_id], unique: true
  end
end
