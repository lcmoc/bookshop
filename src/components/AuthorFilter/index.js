import React, {useEffect, useState} from 'react';
import GenreFilter from "../GenreFilter";

const authorUrl = 'http://localhost:8888/cms.php?content=author';


const renderItem = (item) =>
  <option key={`author-option-${item.id}`} value={item.id}>{item.name}</option>

const renderItems = (items) => {
  return(
    <form action="./src/components/Bookshop/index.js">
      <GenreFilter/>
      <select name="genreId" id="genreId">
        {items.map(renderItem)}
      </select>
      <input type="submit" value="search"/>
    </form>
  )
}

const AuthorFilter = () => {
  const [authorData, setAuthorData] = useState({});

  useEffect(() => { 
    fetch(authorUrl)
      .then((res) => res.json())
      .then((data) => {
        setAuthorData( data );
      });
  
  }, [authorData] );
  return (
    authorData && authorData.length > 0 && renderItems(authorData)
  );
}

export default AuthorFilter;
