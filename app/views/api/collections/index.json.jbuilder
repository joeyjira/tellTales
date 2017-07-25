@collections.each do |collection|
  json.set! collection.id do
    json.extract! collection, :title, :id
  end
end