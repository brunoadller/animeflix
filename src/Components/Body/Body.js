

export default function Body(props){
    return(
        <div>
            {props.searchText && !props.res && (
              <span className="loading">
                  <div className='ld'></div>
              </span>
            )}
        
          {props.res  && (
            <ul className='container--anime'>
              {props.res.map((anime) => {
                return (
                  <>
                    <li key={anime.id}>
                      <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
                      <span>{anime.attributes.canonicalTitle}</span>

                    </li>
                  </>
                
                )
              })}
            </ul>
          )}      
        </div>
    )
}