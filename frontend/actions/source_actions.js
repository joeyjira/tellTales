import * as APIUtil from "../util/source_api_util.js";

export const RECEIVE_SOURCES = "RECEIVE_SOURCES";
export const RECEIVE_SOURCE = "RECEIVE_SOURCE";
export const REMOVE_SOURCE = "DELETE_SOURCE";

export const receiveSources = sources => ({
  type: RECEIVE_SOURCES,
  sources
});

export const receiveSource = source => ({
  type: RECEIVE_SOURCE,
  source
});

export const removeCollection = id => ({
  type: REMOVE_COLLECTION,
  id
});

export const fetchSources = (id) => dispatch =>
  APIUtil.getSources(id).then(sources =>
    dispatch(receiveSources(sources))
  );

export const createSource = (collectionId, source) => dispatch =>
  APIUtil.postSource(collectionId, source).then(source =>
    dispatch(receiveSource(source))
  );

export const deleteCollection = collectionId => dispatch => {
  return APIUtil.deleteCollection(collectionId)
    .then(collection => dispatch(removeCollection(collectionId)))
    .then(() => dispatch(receiveCollections));
};