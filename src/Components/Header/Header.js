import { BiSearchAlt } from 'react-icons/bi';


const url = 'https://kitsu.io/api/edge/'

export default function Header(props){

    function handleChange(){
        if(props.searchText){
          fetch(`${url}anime?filter[text]=${props.searchText}&page[limit]=20`)
          .then((response) => response.json())
          .then((response) => {
            console.log(response)
            props.setRes(response)
          })
          
          props.setSearchText('')
        } else if(props.searchText === ''){
          alert('Busque um anime!')
          props.setSearchText('')
        }
      }
    return(
        <div className='container--header'>             
            <h1>AnimeFlix</h1>
            <div className='container--inputButton'>
                <input type="text"  value={props.searchText} onChange={(e) => props.setSearchText(e.target.value)} placeholder="Buscar Anime..."/>
                <button onClick={() => handleChange()}> 
                    <BiSearchAlt />
                </button>
            </div>
        </div>
    )
}