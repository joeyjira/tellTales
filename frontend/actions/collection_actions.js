import * as APIUtil from "../util/collection_api_util.js";

export const RECEIVE_COLLECTIONS = "RECEIVE_COLLECTIONS";
export const RECEIVE_COLLECTION = "RECEIVE_COLLECTION";
export const REMOVE_COLLECTION = "DELETE_COLLECTION";
export const RECEIVE_SOURCE = "RECEIVE_SOURCE";
export const REMOVE_SOURCE = "DELETE_SOURCE";

export const receiveCollections = collections => ({
  type: RECEIVE_COLLECTIONS,
  collections
});

export const receiveCollection = collection => ({
  type: RECEIVE_COLLECTION,
  collection
});

export const removeCollection = id => ({
  type: REMOVE_COLLECTION,
  id
});

export const receiveSource = source => ({
  type: RECEIVE_SOURCE,
  source
});

export const removeSource = id => ({
  type: REMOVE_SOURCE,
  id
});

export const fetchCollections = () => dispatch =>
  APIUtil.getCollections().then(collections =>
    dispatch(receiveCollections(collections))
  );

export const createCollection = collection => dispatch =>
  APIUtil.postCollection(collection).then(collection =>
    dispatch(receiveCollection(collection))
  );

export const deleteCollection = collectionId => dispatch => {
  return APIUtil.deleteCollection(collectionId)
    .then(collection => dispatch(removeCollection(collectionId)))
    .then(() => dispatch(receiveCollections));
};

export const updateCollection = collection => dispatch => {
  return APIUtil.patchCollection(collection)
    .then(collection => dispatch(receiveCollection(collection)))
}

export const createSource = (collectionId, source) => dispatch =>
  APIUtil.postSource(collectionId, source).then(collection =>
    dispatch(receiveCollection(collection))
  );

export const deleteSource = (sourceId) => dispatch => {
  return APIUtil.deleteSource(sourceId)
    .then((collection) => dispatch(receiveCollection(collection)));
};