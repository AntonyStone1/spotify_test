
export const getData = async (endpoint, token) => {
  await fetch(`https://api.spotify.com/v1/browse/${endpoint}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(res => console.log(res))
}