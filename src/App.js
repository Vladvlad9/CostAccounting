import Cost from "./components/Cost/Cost";
import NewCost from "./components/NewCost/NewCost";

import React, {useState} from "react";

const costsData = [
    {
        id: 0,
        date: new Date(2021, 9, 14),
        description: "Монитор",
        amount: 299.99
    },
    {
        id: 1,
        date: new Date(2021, 1, 14),
        description: "Системный блок",
        amount: 799.99
    },
    {
        id: 2,
        date: new Date(2023, 11, 5),
        description: "Клавиатура",
        amount: 39.99
    }
]

const App = () => {

    const [costs, setCosts] = useState(costsData);

    const onAddCost = (cost) => {
        setCosts(prevState => {
            return [cost, ...prevState]
        })
    }

    return (
        <div>
            <NewCost onAddCost={onAddCost}/>
            <Cost data={costs}/>
        </div>
    );
}

export default App;
