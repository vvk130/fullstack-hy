import Header from './Header'
import Content from './Content'
import Total from './Total'

export default function Course({courses}) {
    return (
      <>
      <h1><b>Web development curriculum</b></h1>
      {courses.map((course) => (
        <div key={course.id}>
          <Header course={course} />
          <Content course={course} />
          <Total course={course} />
          <p/>
        </div>
      ))}
    </>
    )
  }

