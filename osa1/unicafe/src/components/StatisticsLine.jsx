export default function StatisticsLine({text, feedbacks}) {
    const differentLine = ({text}) => {
    switch(text) {
        case 'all':
            return feedbacks.good + feedbacks.bad + feedbacks.neutral
        case 'average':
            return (feedbacks.good + feedbacks.bad + feedbacks.neutral) / 3
        case 'positive':
            return `${(feedbacks.good / (feedbacks.good + feedbacks.bad + feedbacks.neutral)) * 100} %`
        default:
            return feedbacks[text]
    }}

    return (
       <>
       <tr>
       <td>{text}</td>
       <td>{differentLine({ text })}</td>
       </tr>
       </>
    )
}