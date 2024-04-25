import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import $ from 'jquery';
import useStudentData from '../hooks/useStudentData';

const SpecificStudent = () => {
  useEffect(() => {
    import('../styles/components/database/student-card.css')
  }, [])

  // Adjustable Height
  const headerHeight = $(".header").height();
  const { studentId } = useParams()
  const { isLoading, data, isError, error } = useStudentData(studentId)

  if (isLoading) {
    return(
      <div className="student__card-wrapper" style={{height: `calc(100vh - 3*${headerHeight}px)`}}>
        <h2>Loading...</h2>
      </div>
    )
  }
  if (isError) {
    return(
      <div className="student__card-wrapper" style={{height: `calc(100vh - 3*${headerHeight}px)`}}>
        <h2>{error.message}</h2>
      </div>
    )
  }

  return(
    <div className="student__card-wrapper" style={{height: `calc(100vh - 3*${headerHeight}px)`}}>
      <div className="student__card">
        <h1>{data?.data.name}</h1>
        <p>{data?.data.id}</p>
        <p>{data?.data.year_level}</p>
        <p>{data?.data.gender}</p>
        <p>{data?.data.course}</p>
      </div>
    </div>
  )
}
export default SpecificStudent