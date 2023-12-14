import StatisticsTable from './StatisticsTable'

export default function Statistics({feedbacks}) {
    const statisticsTable = feedbacks.good === 0 && feedbacks.bad === 0 && feedbacks.neutral === 0 ? "No feedback given" : (<StatisticsTable feedbacks={feedbacks}/>)
    return (
        <>
        <h2>Statistics</h2>
        {statisticsTable}
        </>
    )
}