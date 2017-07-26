class Collection < ApplicationRecord
    validates :title, :user_id, presence: true
    
    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
    
    has_many :sources,
        primary_key: :id,
        foreign_key: :collection_id,
        class_name: :Source
end
