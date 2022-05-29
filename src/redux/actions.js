import { GET_ACCESS_TOKEN, GET_NEW_RELEASES } from "./types";

export const getAccessTokenAction = (payload) => ({ type: GET_ACCESS_TOKEN, payload })
export const getNewReleasesAction = (payload) => ({ type: GET_NEW_RELEASES, payload })