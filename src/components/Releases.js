import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getNewReleasesAction } from "../redux/actions"
import { getData } from "../redux/asyncActions"
import { NEW_RELEASES } from "../utils/api/path"

import styles from './Releases.module.css'

const Releases = () => {
  const dispatch = useDispatch()
  const { accessToken, newReleases } = useSelector(state => state)
  const state = useSelector(state => state)
  const getDataHanlder = () => {
    dispatch(getData(accessToken, NEW_RELEASES, getNewReleasesAction))
  }
  useEffect(() => {
    console.log('state', newReleases);
  }, [newReleases])
  console.log(state);
  return (
    <div className={styles.container}>
      <button onClick={getDataHanlder}>Get new releases</button>
      {newReleases.length
        ? <div className={styles.container_list}>{newReleases.map(release =>
          <div key={release.id} className={styles.list_item}>
            <div className={styles.list_item__img}><img src={release.images[2].url} alt='album img' /></div>
            <div>
              <div>{release.name}</div>
              <div>{release.artists[0].name}</div>
              <div>{release.release_date}</div>
              <div><a href={release.external_urls.spotify}>Visit on Spotify</a></div>
            </div>
          </div>)} </div> : 123}
    </div>
  )
}

export default Releases