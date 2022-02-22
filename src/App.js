import React, {useState} from 'react'
import Footer from './Components/Footer/Footer'
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
import './App.css';


export default function App() {

  const [searchText, setSearchText] = useState('')
  const [res, setRes] = useState({})
  

  return (
    <div className="App">
      <Header searchText = {searchText} res = {res.data} setRes = {setRes} setSearchText={setSearchText}/>
      <div>
         <Body searchText = {searchText} res = {res.data}/>
      </div>
      <div>
          <Footer res = {res.data}/>
      </div>
    </div>
  );
}
