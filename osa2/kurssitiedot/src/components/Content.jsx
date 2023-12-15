import Part from './Part'
//import Total from './Total'

export default function Content({course}) {
    return (
        <>
        <div>
        {course.parts.map((part) =>
        <div key={part.id}>
        <Part name={part.name} exercises={part.exercises}/>
        </div>
        )}
        </div>
        </>
    )
  }