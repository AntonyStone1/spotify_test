import { Buffer } from 'buffer'
import { getAccessTokenAction, isLoading, onError } from "./actions";

export const getAccessToken = () => (dispatch) => {
  dispatch(isLoading(true))
  var client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  var client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
  const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token?grant_type=client_credentials`

  fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
    .then(res => res.json())
    .then(res => dispatch(getAccessTokenAction(res.access_token)))
    .catch((error) => dispatch(onError(error.message)))
  dispatch(isLoading(false))
}


export const getData = (token, endpoint, action) => (dispatch) => {
  dispatch(isLoading(true))
  fetch(`https://api.spotify.com/v1/browse/${endpoint}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(res => dispatch(action(res)))
    .catch((error) => dispatch(onError(error.message)))
  dispatch(isLoading(false))
}