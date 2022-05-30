import { useDispatch, useSelector } from "react-redux"
import { getNewReleasesAction } from "../../redux/actions"
import { getData } from "../../redux/asyncActions"
import { NEW_RELEASES } from "../../api/path"

import styles from './Releases.module.scss'
import Card from ".././Card/Card"

const ReleasesList = () => {
  const dispatch = useDispatch()
  const { accessToken, newReleases } = useSelector(state => state)
  const { isLoading } = useSelector(state => state)
  const getDataHanlder = () => {
    dispatch(getData(accessToken, NEW_RELEASES, getNewReleasesAction))
  }
  console.log(isLoading);
  return (
    <div className={styles.container}>
      <button onClick={getDataHanlder} className={styles.btn}>Get new releases</button>
      {newReleases?.length
        ? <div className={styles.container_list}>{newReleases.map(release =>
          <Card card={release} key={release.id} />)} </div>
        :
        isLoading ? <div className={styles.lds_dual_ring}></div> : 'No items'
      }
    </div>
  )
}

export default ReleasesList