import "./ConstList.css"
import CostItems from "../../CostItems";
import React from "react";

const CostList = (props) => {

    if(props.cost.length === 0){
        return <h2 className="cost-list__fallback">В этом году нету расходов</h2>
    }

    return <ul className="cost-list">
        {props.cost.map((cost) => (
        <CostItems
            key={cost.id}
            date={cost.date}
            description = {cost.description}
            amount = {cost.amount}
        />
        ))}
    </ul>
}
export default CostList