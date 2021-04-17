import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFeatch() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromBtn, setValueBtn] = useState(1);
  //   useEffect(() => {
  //     axios
  //       .get('https://jsonplaceholder.typicode.com/posts')
  //       .then((res) => {
  //         console.log(res.data);
  //         setPost(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   }, []);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromBtn}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [idFromBtn]);

  const handleClick = () => {
    setValueBtn(id);
  };

  return (
    <div>
      <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>Fetch Post</button>
      <h2>{post.title}</h2>
    </div>
  );
}

export default DataFeatch;
