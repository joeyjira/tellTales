import * as APIUtil from "../util/collection_api_util.js";

export const RECEIVE_COLLECTIONS = "RECEIVE_COLLECTIONS";
export const RECEIVE_COLLECTION = "RECEIVE_COLLECTION";
export const REMOVE_COLLECTION = "DELETE_COLLECTION";

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
