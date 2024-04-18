import { useQuery } from 'react-query'
import axios from 'axios'

const fetshOneStudent = (studentId) => {
  return axios.get(`http://localhost:5000/api/database/${studentId}`);
}

const useStudentData = (studentId) => {
  return useQuery(['fetshedOneStudent', studentId], () => fetshOneStudent(studentId))
}
export default useStudentData