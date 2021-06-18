import React, { useState } from "react";

import Button from "./Button";

import "./AddTask.css";

const AddTask = ({handleTaskAddition}) => {

    //o que o usuário digitar será armazenado no inputData
    const [inputData, setInputData] = useState("");

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    //envia o inputData para o handleTaskAddition
    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setInputData("");
    };

    return(
        <div className="add-task-container">
            <input
                onChange={handleInputChange}
                value={inputData}
                className="add-task-input"
                type="text"
            />

            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    );
};
 
export default AddTask;