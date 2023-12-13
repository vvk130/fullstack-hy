export default function Header({parts}) {
    return (
            <p>Number of exercises {parts[0].amount + parts[1].amount + parts[2].amount}</p>
    )
  }