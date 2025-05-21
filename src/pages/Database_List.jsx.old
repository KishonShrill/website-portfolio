import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';


import useStudentsData from '../hooks/useStudentsData';

export default function Database_List() {
  useEffect(() => {
    import('../styles/components/database/index.css')
  }, [])
  const { isLoading, data, isError, error, isFetching, refetch } = useStudentsData()

  console.log({ isLoading, isFetching })
  
  if (isLoading || isFetching) {return <h2>Loading...</h2>}
  if (isError) {return <h2>Error: {error.message}</h2>}

  const handleDeleteStudent = async (id) => {
    try {
      await deleteStudent(id); // Call the deleteStudent function
      setStudents((prevStudents) =>
        prevStudents.filter((student) => student._id !== id)
      );
    } catch (error) {
      console.error('Error deleting student:', error.message);
    }
  };

  // Adjustable Datbase Body Height
  const headerHeight = $(".header").height();

  return (
    <>
      <Header />
      <div className='database__body'>
        <nav className='database__nav'></nav>
        <main className="database__main csv__manager" style={{height: `calc(100vh - ${headerHeight}px - 70px)`}}>
          <h1>Student List Manager</h1>
          <hr />
          <section className="csv__editor">
            <div className="csv__header">
              <p className="data__name">Name</p>
              <p className="data__id">Id#</p>
              <p className="data__yearLvl">Year Level</p>
              <p className="data__gender">Gender</p>
              <p className="data__course">Course</p>
              <p className="data__actions">Actions</p>
            </div>

            {data
            ? data?.data.map((student) => (
              <div key={student._id} className="csv__content">
                <p className="data__name">{student.name}</p>
                <p className="data__id">{student.id}</p>
                <p className="data__yearLvl">{student.year_level}</p>
                <p className="data__gender">{student.gender}</p>
                <p className="data__course">{student.course}</p>
                <div className="data__actions">
                  <button className='btn'>Edit</button>
                  <button className='btn' onClick={() => handleDeleteStudent(student._id)}>Delete</button>
                  <Link className='btn' to={`/database/${student.id}`}>More</Link>
                </div>
              </div>))
            : <h2>No students found</h2>
            }
            
          </section>
          <div className="action-wrapper">
            <button className="action__add">Add Item</button>
            <button className="action__refresh" onClick={refetch}>Refresh</button>
            <button className="action__finish">Finish</button>
          </div>
        </main>
      </div>
    </>
  );
}

const deleteStudent = async (id) => {
  try {
    const response = await fetch(`${DATABASE_API_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Response status:', response.status);
    if (!response.ok) throw new Error('Failed to delete student');

    const deletedStudent = await response.json();
    console.log('Deleted student:', deletedStudent);
    return deletedStudent;
  } catch (error) {
    console.error('Error deleting student:', error.message);
    throw error;
  }
};