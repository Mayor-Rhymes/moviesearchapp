import React, {useState, useEffect} from 'react';
import Nav from './Nav';
import Mid from './Mid';
import MainContent from './MainContent';

export default function App(){
  

  const [searchContent, changeSearchContent] = useState('');
  const transferSearch = (e) => {
      
       e.preventDefault();
       changeSearchContent(e.target.value);
       


        
  }


  const [movies, setMovies] = useState([]);

	const getMovies = async () => {
		const url = `http://www.omdbapi.com/?s=${searchContent}&apikey=7d9bc6ad`;

		const res = await fetch(url);
		const resJson = await res.json();

		if (resJson.Search) {
			setMovies(resJson.Search);
		}
	};



	useEffect(() => {
		getMovies();
	});
   return(


    
    <div>

       <Nav />
       <Mid />

       <MainContent movies = {movies} transferSearch = {transferSearch}/>
        
    </div>
   )
}