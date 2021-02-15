import React, {useEffect, useState} from 'react';

const productUrl = `http://localhost:8888/cms.php?content=books`;


const renderItem = (item) =>
<tr key={`book-item-${item.id}`}>
  <td>{item.id}</td>
  <td>{item.title}</td>
  <td>{item.price}</td>
</tr>

const renderItems = (items) => {
  return(
    <table border="1">
      <tr>
      <th>Id</th>
      <th>title</th>
      <th>price</th>
      </tr>
      {items.map(renderItem)}
    </table>
  )
}


const Books = () => {
  const [bookData, setBookData] = useState({});

  useEffect(() => { 

    const authorId = getQueryParamAuthorId();
    console.log('authorId', authorId);
    fetch(productUrl + '&authorId=' + authorId)
    
      .then((res) => res.json())
      .then((data) => {
        setBookData( data );
      });
  }, [bookData] );
  const getQueryParamAuthorId = () => {
    console.log('getQueryParamAuthorId');
    if (window.location.search) {
     const queryParams =  window.location.search
        .substr(1)
        .split('&')
        .forEach(function (item) {
          const s = item.split('=');
          return [s[0] = s[1]];
        });
        console.log('queryParams', queryParams);
        // return queryParams['authorId'];
    }  
  }
  return (
    bookData && bookData.length > 0 && renderItems(bookData)
  );
}

export default Books;