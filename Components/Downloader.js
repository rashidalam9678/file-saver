import React from 'react'
import Axios from 'axios'
import FileDownload from 'js-file-download'
import styles from '../styles/Downloader.module.css'

const Downloader = (props) => {

    const downloadfile = () => {
        Axios({
          url:(props.url),
          method:"GET",
          responseType:"blob"
        }).then((res)=>{
          FileDownload(res.data, 'downloaded_img.png')
        })
    }
  return (
    <div className={styles.Downloader}>
        <button onClick={(e)=>downloadfile()}>
            Download Image
        </button>
    </div>
  )
}

export default Downloader