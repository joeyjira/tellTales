export const getCollections = () =>
  $.ajax({
    method: "GET",
    url: "/api/collections"
  });

  export const postCollection = collection =>
  $.ajax({
    method: "POST",
    url: "/api/collections",
    data: collection
  });

  export const deleteCollection = (id) =>
  $.ajax({
    method: "DELETE",
    url: `api/collections/${id}`
  });

  export const patchCollection = (collection) =>
  $.ajax({
    method: "PATCH",
    url: `api/collections/${collection.id}`,
    data: collection
  });