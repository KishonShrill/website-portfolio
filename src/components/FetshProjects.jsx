import { useQuery } from 'react-query'
import axios from 'axios';

const fetshProjects = () => {
  return axios.get("/projects.json");
}

export default function LoadProjects() {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    'fetshedProjects', 
    fetshProjects,
    {
      // cacheTime: int - keeps the data longer
      staleTime: 30000, // staleTime: int - default is 0 sec
      // refetchOnMount: boolean or 'always' - data updater
      // refetshOnWindowFocus: boolean or 'always' - self explanatory
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
              <img src={item.image} alt={item.name} style={{ width: 'auto' }} />
            </picture>
          </a>
          <hr />
        </div>
      ))}
      {error && <p id="error-message">Error: {error.message}</p>}
    </>
  );
};