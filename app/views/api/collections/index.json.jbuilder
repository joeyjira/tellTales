@collections.each do |collection|
  json.set! collection.id do
    # json.extract! collection, :title, :id do
      # json.sources collection.sources
    # end 
    json.id collection.id
    json.title collection.title
    json.sources collection.sources
  end
end