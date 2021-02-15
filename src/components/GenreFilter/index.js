import React, {useEffect, useState} from 'react';

const genreUrl = 'http://localhost:8888/cms.php?content=genre';


const renderItem = (item) =>
  <option key={`genre-option-${item.id}`} value={item.id}>{item.type}</option>

const renderItems = (items) => {
  return(
      <select name="authorId" id="authorId">
        {items.map(renderItem)}
      </select>
  )
}

const GenreFilter = () => {
  const [genreData, setGenreData] = useState({});

  useEffect(() => { 
    fetch(genreUrl)
      .then((res) => res.json())
      .then((data) => {
        setGenreData( data );
      });
  
  }, [genreData] );
  return (
    genreData && genreData.length > 0 && renderItems(genreData)
  );
}

export default GenreFilter;