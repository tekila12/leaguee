
import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import './Footer.css'
function Footer() {
    return (
        <div className="footer">
            <ul className='footer__Top'>
                <li className='li1'> About League of Legends </li>
                <li className='li1'> Help us Improve</li>
                <li className='li1'> Server Status</li>
                <li className='li1'> Support</li>
                <li className='li1'> Esport Pro Site</li>
            </ul>

         
            <div className="footer__Icons">
            <YouTubeIcon />
            <TwitterIcon />
            <FacebookIcon />
            <InstagramIcon />
            </div>

            <p className='riot__Info'>
            ™ &amp; © 2020 Riot Games, Inc.  League of Legends and all related logos, characters, names and distinctive likenesses thereof are exclusive property of Riot Games, Inc.  All Rights Reserved.
            </p>
         
            <ul className="riot__Links">
                <li className='list'>Privacy Policy
                
                </li>
                <li className='list'>Terms of Service
            
                </li>
            </ul>
      
            <div className="footer__Bottom">
            <img src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt873108b7788eccd8/5e4ce144f2815f2507d7571b/na-esrb.png?&amp;height=100&amp;disable=upscale" alt="ESRB" title="ESRB" />
               <div className='rating__Text'>
                   Blood                
                   Fantasy Violence            
                   Mild Suggestive Themes                 
                   Use of Alcohol and Tobbaco               
                   Online Interactions Not Rated by the ESR
                                  
               </div>
            </div>
        </div>
    )
}

export default Footer
