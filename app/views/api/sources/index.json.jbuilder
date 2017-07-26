@sources.each do |source|
    json.set! source.id do
        json.extract! source, :source_id
    end
end 