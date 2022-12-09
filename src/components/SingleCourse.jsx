import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import courses from "../data/courses";

const SingleCourse = () => {
  const params = useParams();
  const navigate = useNavigate();
  const course = courses.find((course) => course.slug === params.slug);

  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' })
    }
  }, [course, navigate])

  return (
    <>
      <h1>{course?.title}</h1>
      <h3>{course?.slug}</h3>
      <h4>{course?.id}</h4>
      <Link to=".." relative="path">All Courses</Link>
    </>
  )
}

export default SingleCourse;