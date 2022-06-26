import React, { useState,useEffect } from 'react'

import "./Banner.css";
import axios from "../../Axios"
import { API_Key,imgUrl} from '../../Constants/Constants';

function Banner() {
   const [data,setData]=useState();
   const min=1;
  const max=20;
  const random=(Math.random()*(min+max)).toFixed(0);
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_Key}&language=en-US`).then((response)=>{
      setData(response.data.results[random]);
      console.log(random)
    })
  }, [])

  
  return (
    <div className='banner'
    style={{backgroundImage:`url(${data?imgUrl+data.backdrop_path:""})`}}
    >

        <div className='content'>
            <h1 className='title'>{data?data.title:""}</h1>
            <h1 className='description'>
   
               {data?data.overview:""}
            </h1>
        </div>
    <div className="fade"></div>

    </div>
  )
}

export default Banner