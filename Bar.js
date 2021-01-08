import React, {useState, useRef} from 'react'
import './Bar.css'
import CloseIcon from '@material-ui/icons/Close';
const Bar=(props)=> {
  


    return (
        <div className='bar'>
            <div className='text__Bar'>
            <h2>Riot games</h2> 
            <span className='visit__Riot'>
            <a  href="https://www.riotgames.com/" target="_blank">Visit Riot Games</a>
             </span>
             <CloseIcon className='close__Icon'onClick={props.closeBar} />
            </div>
            <div className='bar__Images'>
                  
                <div className='KDA'>
                <img className='bar__image' className='bar__image1' alt='K/DA is back with "More" a new music video out now'src='kda.jpg' />
                <span > K/DA is back with "MORE", a new music video out now.</span>
                </div>

                <div className='KDA' >
                <img className='bar__image' className='bar__image1'src='runettera.jpg' />
                <span >Expansion for Legends of Runnettera is available now</span>
                </div>

                <div className='KDA' >
                <img className='bar__image' className='bar__image2'src='league.jpg' />
                <span >League of Legends</span>
                </div>

                <div className='KDA'>
                <img className='bar__image' className='bar__image2'src='tft.jpg' />
                <span > Teamfight Tactics</span>
                </div>
               
              

                <div className='KDA'>
                <img className='bar__image' className='bar__image2' src='valorant.jpg' />
                <span >Valorant</span>
                </div>
  
            </div>
        </div>
    )
}

export default Bar
