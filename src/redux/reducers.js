import { GET_ACCESS_TOKEN, GET_CATEGORIES, GET_FEATURED_PLAYLIST, GET_NEW_RELEASES } from "./types"

const initialState = {
  accessToken: '',
  newReleases: []
}

function spotifyReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ACCESS_TOKEN:
      return { ...state, accessToken: action.payload }
    case GET_NEW_RELEASES:
      return { ...state, newReleases: action.payload.albums.items }
    case GET_FEATURED_PLAYLIST:
      return { ...state, featuredPlaylist: action.payload }
    case GET_CATEGORIES:
      return { ...state, categories: action.payload }

    default:
      return state
  }
}
export default spotifyReducer