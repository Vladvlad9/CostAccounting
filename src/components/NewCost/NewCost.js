import "./NewCost.css"
import CostForm from "./CostForm/CostForm";
import React, { useState } from "react";

const NewCost = (props) => {

    const [isFormVisible, setIsFormVisible] =  useState(false)
    const saveCostDataHandler = (inputCostData) =>{
        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        }
        props.onAddCost(costData)
        setIsFormVisible(false)
    }
    const inputCostDataHandler = () => {
        setIsFormVisible(true)
    }

    const canselFormHandler = () => {
        setIsFormVisible(false)
    }

    let formVisible = <button onClick={inputCostDataHandler}>Добавить новый расход</button>

    if(isFormVisible) {
        formVisible = <CostForm
            onSavaCostData={saveCostDataHandler}
            onCansel={canselFormHandler}
        />
    }

    return(
        <div className="new-cost">
            {formVisible}
        </div>
    )
}
export default NewCost;