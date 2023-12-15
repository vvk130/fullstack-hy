export default function Total({course}) {
    const total = course.parts.reduce((allParts, i) => allParts + i.exercises, 0)
    return (
        <b>Total of {total} exercises</b>
    )
  }