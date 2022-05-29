import { Buffer } from 'buffer'

var client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
var client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token?grant_type=client_credentials`

export let access_token = null

const getAccessToken1 = async () => {
  await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
    .then(res => res.json())
    .then(res => access_token = res.access_token)
}

export default getAccessToken1