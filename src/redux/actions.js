import { GET_ACCESS_TOKEN, GET_NEW_RELEASES, IS_LOADING, ON_ERROR } from "./types";

export const getAccessTokenAction = (payload) => ({ type: GET_ACCESS_TOKEN, payload })
export const getNewReleasesAction = (payload) => ({ type: GET_NEW_RELEASES, payload })
export const onError = (payload) => ({ type: ON_ERROR, payload })
export const isLoading = (payload) => ({ type: IS_LOADING, payload })