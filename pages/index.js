import Head from 'next/head'
import Image from 'next/image'
import {useEffect, useState} from 'react'
import styles from '../styles/Home.module.css'
import Downloader from '../components/Downloader'
import { projectStorage } from '../firebase/config'
import { getStorage, ref, getDownloadURL } from "firebase/storage";


export default function Home() {
  const [imageURL, setImageURL] = useState(null)

  useEffect(()=>{
    const storage = getStorage();
    getDownloadURL(ref(storage, `images/jpgimg.png`))
   .then((url) => {
     setImageURL(url)
   })
   .catch((error) => {
     console.log(error)
   });

  },[])
  return (
    
    <div className={styles.container}>
      <div>{imageURL ? <img width='300px' height='300px' src={imageURL} alt=" image not found" />: <h2>Loading Image ...</h2>}</div>
      <Downloader url={imageURL}/>
      
      

    </div>
  )
}
