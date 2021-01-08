
import React from "react";



const Skills = ({ currentChampion }) => {
    return (
      <div className="spells">       
          <p className='name__Spell'> {currentChampion.textQ}</p>
          <img className='skill__Image' src={currentChampion.image1}></img>
          <h5 className='champ__Info'>{currentChampion.qInfo}</h5>    
          <p className='name__Spell' > {currentChampion.textW}</p>
          <img className='skill__Image' src={currentChampion.image2}></img>
          <h4 className='champ__Info'>{currentChampion.wInfo}</h4>
          <p className='name__Spell'> {currentChampion.textE}</p>
          <img className='skill__Image'  src={currentChampion.image3}></img>
          <h4 className='champ__Info'>{currentChampion.eInfo}</h4>
          <p className='name__Spell'> {currentChampion.textR}</p>
          <img className='skill__Image' src={currentChampion.image4}></img>
          <h4 className='champ__Info'>{currentChampion.RInfo}</h4>       
      </div>
    );
  };



  export default Skills