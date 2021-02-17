import React, {useState, useRef, useEffect} from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Bar from './Bar';
import "./Header.css"


const Header=()=> {
    const [isBarOpen, setIsBarOpen] = React.useState(false);


    function openBar(){
        setIsBarOpen(true)
      }
      function closeBar(){
        setIsBarOpen(false)
      }


const ref=useRef()

const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
    closeBar();
    }
  };


useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

    return (
       
        <div   className='header'  >   
    
        <span ref={ref} onClick={()=> setIsBarOpen(!isBarOpen)} className="fist" />
        <ExpandMoreIcon  onClick={()=> setIsBarOpen(!isBarOpen)}className='expand'/> 
        {isBarOpen ? <Bar closeBar={closeBar}/>: null }
       
        <img className='lol' src='./lol.png' />
   
      
        </div>
    )
}

export default Header