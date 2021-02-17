import Header from "./Header"
import React from 'react'
import './App.css';
import Champions from "./Champions";

import Search from "./Search"
import Footer from './Footer'



export default function App() {

  const [searchValue, setSearchValue] = React.useState("");
  return (
    <div className="App">
      <Header />

      <div className='main__Text'>
      <h3>Choose your </h3>
      <h1>Champion</h1>
      <p>With more than 140 champions, you'll find the perfect
         match for playstyle. Master one, or master them all</p>
      </div>
     
     
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />  
     <Champions searchValue={searchValue}  />
     <Footer />
 
   
    </div>
  );
}
