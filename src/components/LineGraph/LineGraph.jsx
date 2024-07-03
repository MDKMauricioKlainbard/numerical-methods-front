import { VictoryLine, VictoryChart, VictoryTheme, VictoryGroup, VictoryAxis } from "victory";

export default function LineGraph({ arrays, dependentAxis, independentAxis }) {
    return (
        <VictoryChart theme={VictoryTheme.material}>
            <VictoryAxis
                label={independentAxis}
                style={{
                    axisLabel: { padding: 40 },
                }}
            />
            <VictoryAxis
                dependentAxis
                label={dependentAxis}
                style={{
                    axisLabel: { padding: 40 },
                }}
            />
            <VictoryGroup>
                {arrays.map((array) => (
                    <VictoryLine data={array} />
                ))}
            </VictoryGroup>
        </VictoryChart>
    )
}