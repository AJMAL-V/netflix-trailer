import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import "./RowPost.css";
import {API_Key,imgUrl} from "../../Constants/Constants"
import axios from '../../Axios';

function RowPost(props) {
  const [movie, setmovie] = useState([]);
  const [UrlId, setUrlId] = useState("");
  useEffect(() => {
    axios.get(props.url).then((respose)=>{
      console.log(respose.data);
      setmovie(respose.data.results);
    }).catch((err)=>{
      console.log(err);
    });
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },}
    const handelmovie=(id)=>{
        console.log(id);
        axios.get(`movie/${id}/videos?api_key=${API_Key}&language=en-US`).then((response)=>{
          console.log(response.data.results);
            if(response.data.results.length!==0){
                   console.log(response.data.results[0]);
                   setUrlId(response.data.results[0]);
            }
            
          
        })
    }
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        { UrlId &&<YouTube videoId={UrlId.key} opts={opts}  />}
        <div className="posters">
       
          {movie.map((obje)=>{
            return(
              <>
              <div>
               <img className={props.isSmall?"smallposter":"post"} src={`${imgUrl+obje.backdrop_path}`} alt="row-images"/>
               <span className='span'>   {obje.title}</span>
              <button  onClick={()=>handelmovie(obje.id)} className='button'>Play</button>
              
              </div>
              </>
             

            )
            
          })}

        </div>
      
        
    </div>
  )
}

export default RowPost