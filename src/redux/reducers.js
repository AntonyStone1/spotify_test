import { GET_ACCESS_TOKEN, GET_CATEGORIES, GET_FEATURED_PLAYLIST, GET_NEW_RELEASES, IS_LOADING, ON_ERROR } from "./types"

const initialState = {
  accessToken: '',
  newReleases: [],
  errors: '',
  isLoading: false,
}

function spotifyReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ACCESS_TOKEN:
      return { ...state, accessToken: payload }
    case GET_NEW_RELEASES:
      return { ...state, newReleases: payload.albums.items }
    case GET_FEATURED_PLAYLIST:
      return { ...state, featuredPlaylist: payload }
    case GET_CATEGORIES:
      return { ...state, categories: payload }
    case ON_ERROR:
      return { ...state, errors: payload }
    case IS_LOADING:
      return { ...state, isLoading: payload }

    default:
      return state
  }
}
export default spotifyReducer