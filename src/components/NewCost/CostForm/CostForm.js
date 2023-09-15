import "./CostForm.css"

import React, {useState} from "react";

const CostForm = (props) => {

    // const [userInput, setuserInput] = useState({
    //     name: "",
    //     amount: "",
    //     date: ""
    // })

    const [_name, setName] = useState('')
    const [_amount, setAmount] = useState('')
    const [_date, setDate] = useState('')

    const nameChangeHandler = (event) =>{
        setName(event.target.value)
        // setuserInput({
        //     ...userInput,
        //     name: event.target.value
        // })
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
        console.log(event.target.value)
        // setuserInput({
        //     ...userInput,
        //     amount: event.target.value
        // })
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value)
        // setuserInput({
        //     ...userInput,
        //     date: event.target.value
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const costData = {
            description: _name,
            amount: _amount,
            date: new Date(_date)
        };

        props.onSavaCostData(costData);

        setName("")
        setAmount("")
        setDate("")
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label> Название </label>
                    <input type="text" value={_name} onChange={nameChangeHandler}/>
                </div>

                <div className="new-cost__control">
                    <label> Сумма </label>
                    <input type="number" min="0.001" step="0.01" value={_amount} onChange={amountChangeHandler}/>
                </div>

                <div className="new-cost__control">
                    <label htmlFor=""> Дата </label>
                    <input type="date" min="2023-01-01" step="2023-09-14" value={_date} onChange={dateChangeHandler}/>
                </div>

                <div className="new-cost__actions">
                    <button type="submit"> Добавить расход </button>
                </div>

                <div className="new-cost__actions">
                    <button type="button" onClick={props.onCansel}> Отмена </button>
                </div>

            </div>
        </form>
    )
}
export default CostForm;