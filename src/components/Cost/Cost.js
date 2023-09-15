import "./Cost.css"
import Card from "../Card/Card";
import CostFilter from "../NewCost/CostFilter/CostFilter";
import React, {useState} from "react";
import CostList from "./CostList/CostList";
import CostDiagram from "./CostDiagram/CostDiagram";

const Cost = (props) => {
    const [year, setYear] = useState("2023")

    const yearChangeHandler = (year) => {
        setYear(year)
    }

    const filtersData = props.data.filter(cost => {
        return cost.date.getFullYear().toString() === year
    })


    return(
        <div>
            <Card className="costs">
                <CostFilter year={year} yearChangeHandler={yearChangeHandler}/>
                <CostDiagram costs={filtersData}/>
                <CostList cost={filtersData}/>
            </Card>
        </div>
    )
}
export default Cost;