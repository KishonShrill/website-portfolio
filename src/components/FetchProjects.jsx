import React from 'react';
import { useQuery } from 'react-query'
import axios from 'axios';
import LazyImage from './LazyImage';

const fetchProjects = () => {
  return axios.get("/projects.json");
}

function LoadProjects() {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    'fetchedProjects', 
    fetchProjects,
    {
      // cacheTime: int - keeps the data longer
      staleTime: 30000, // staleTime: int - default is 0 sec
      refetchOnMount: false,// boolean or 'always' - data updater
      refetshOnWindowFocus: false,// boolean or 'always' - self explanatory
      // refetshInterval: int millisec
    }
  )

  console.log({ isLoading, isFetching })
  
  if (isLoading) {return <h2>Loading...</h2>}
  if (isError) {return <h2>{error.message}</h2>}
  if (!data) {return <h2>No projects found...</h2>}

  return(
    <>
      {data?.data.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <a href={item.link} target="_self" rel="noopener noreferrer">
            <picture>
              <LazyImage
                src={"https://fakeimg.pl/1920x1080/?retina=1&text=こんにちは&font=noto"} 
                image={item.image} 
                alt={item.name}
                style={{ width: 'auto' }}/>
            </picture>
          </a>
          <hr />
        </div>
      ))}
      {error && <p id="error-message">Error: {error.message}</p>}
    </>
  );
}
export default React.memo(LoadProjects)