import Diagram from "../../Diagram/Diagram/Diagram";

const CostDiagram = (props) => {

    const diagramDataSet = [
        {label: "Янв", value:0},
        {label: "Фев", value:0},
        {label: "Мар", value:0},
        {label: "Апр", value:0},
        {label: "Май", value:0},
        {label: "Ин", value:0},
        {label: "Ил", value:0},
        {label: "Авг", value:0},
        {label: "Сен", value:0},
        {label: "Окт", value:0},
        {label: "Ноя", value:0},
        {label: "Дек", value:0},
    ]

    for(const cost of props.costs){
        const costMonth = cost.date.getMonth()
        diagramDataSet[costMonth].value += cost.amount
    }

    return <Diagram dataSets={diagramDataSet}/>
}
export default CostDiagram;