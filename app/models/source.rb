class Source < ApplicationRecord
    validates :source_id, :collection_id, presence: true
    validates :source_id, uniqueness: {scope: :collection_id}
    
    belongs_to :collection,
        primary_key: :id,
        foreign_key: :collection_id,
        class_name: :Collection
end
