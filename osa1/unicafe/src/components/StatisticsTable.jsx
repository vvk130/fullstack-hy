import StatisticsLine from "./StatisticsLine";

export default function StatisticsTable({feedbacks}) {
    return (
        <table>
        <tbody>  
        <StatisticsLine text="good" feedbacks={feedbacks} />
        <StatisticsLine text="neutral" feedbacks={feedbacks} />
        <StatisticsLine text="bad" feedbacks={feedbacks} />
        <StatisticsLine text="all" feedbacks={feedbacks} />
        <StatisticsLine text="average" feedbacks={feedbacks} />
        <StatisticsLine text="positive" feedbacks={feedbacks} />
        </tbody>
        </table>
    )
}