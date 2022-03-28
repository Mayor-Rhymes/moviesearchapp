import React from 'react';


export default function MainContent(props){

    

    return(


        <div className="main-content">

          <section>


              <label htmlFor="searcher">Search</label>
              <input type="text" name="searcher" className="searcher" onChange={props.transferSearch}/>


          </section>


          <div className="movies">

              
                  <p className="movie-title">Movies</p>

                  <div className="moves-1">



                      


                       {props.movies.map(s => 
                        
                        
                        
                          <div className="block" key={s.imdbID}>
                              
                              <p>{s.Title}</p>
                              <img src={s.Poster} alt='yo' className="poster"/>

                          </div>
                        
                        )}



                      
                  </div>

              </div>

            

          </div>
        
    )
}