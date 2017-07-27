export const postSource = (collectionId, source) =>
  $.ajax({
    method: "POST",
    url: `/api/collections/${collectionId}/sources`,
    data: source
  })

export const deleteSource = (collectionId, source) =>
  $.ajax({
    method: "DELETE",
    url: `/api/collections/${id}/sources/${source.id}`,
    data: source 
  })