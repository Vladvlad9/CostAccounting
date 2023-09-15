import "./Diagram.css"
import DiagramBar from "../DiagramBar/DiagramBar";
const Diagram = (props) => {

    const costSetValue = props.dataSets.map(dataSet => dataSet.value)
    const maxMonthCost = Math.max(...costSetValue)

    return (
        <div className="diagram">
            {props.dataSets.map(dataSet => <DiagramBar
                key={dataSet.label}
                value={dataSet.value}
                maxValue={maxMonthCost}
                label={dataSet.label}
            />)}
        </div>
    )
}
export default Diagram