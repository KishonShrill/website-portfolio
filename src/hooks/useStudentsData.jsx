import { useQuery } from 'react-query'
import axios from 'axios'

const DATBASE_URL = "http://localhost:5000/api/database";
const fetshStudents = () => {
  return axios.get(DATBASE_URL);
}

const useStudentsData = () => {
  return useQuery(
    'fetshedStudents', 
    fetshStudents,
    {
      // cacheTime: int - keeps the data longer
      staleTime: 30000, // staleTime: int - default is 0 sec
      // refetchOnMount: boolean or 'always' - data updater
      // refetshOnWindowFocus: boolean or 'always' - self explanatory
      // refetshInterval: int millisec
      enabled: false, // - will control for automatic fetch
      // select: (data) => {
      //   const student
      //   return student
      // }
    }
  )
}
export default useStudentsData