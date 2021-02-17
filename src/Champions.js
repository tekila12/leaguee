import React, {useState, useRef, useEffect } from 'react'
import data from './data.json'
import  './Champions.css'
import Skills from './Skills'
import CloseIcon from '@material-ui/icons/Close';



const Champions = ({searchValue}) => {
  const [toggleShow, setToggleShow] = useState(false);
  const [currentSelectedChampion, setCurrentSelectedChampion] = useState({});


  const handleSelectChampion = (id) => {
    if (!toggleShow) setToggleShow(true);
    const currentChampion = data.filter((champ) => champ.id === id)[0];
    setCurrentSelectedChampion(currentChampion);

  };


  function filterChampions(champion) {
    return champion.name.toLowerCase().includes(searchValue.toLowerCase());
  }





  return (
 


    <div className="champions">
    
    {data.filter(filterChampions).map((champion) => {
        return (
          <div key={champion.id} onClick={() => handleSelectChampion(champion.id) } >
        
            <div className="champion">
              <img className="champion__Image" src={champion.image}></img>
              <h4 className="champion__Name">{champion.name}</h4>
                       
              {toggleShow && currentSelectedChampion.id === champion.id && (
                <>
                  <Skills currentChampion={currentSelectedChampion} />
                      <CloseIcon onClick={() => setToggleShow(false)}/>              
                </>
              )}
             </div>
          </div>

          
        );
      })}
         
    </div>
  );
};

export default Champions