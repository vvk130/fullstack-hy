import Part from './Part'

export default function Content({course}) {
    return (
      <div>
      {course.parts.map((part, index) => (
        <Part key={index} part={part} />
      ))}
      </div>
    )
  }

