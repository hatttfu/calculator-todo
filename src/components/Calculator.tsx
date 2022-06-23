import { useState, useEffect } from 'react'

const numbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

function Calculator()  {

    //в operator хранится выбранный оператор (+, -, *, или /)
    const [operator, setOperator] = useState("");

    //цифры с кнопок
    //например при нажатии на 1: output = 1,
    //затем при нажатии на 2: output = 12,
    const [output, setOutput] = useState("");

    const numberHandler = (number: string) => {
        finish && setFinish(!finish);
        setOutput(output + number);  
    }

    //
    useEffect(() => {
        savedNumber && output && operateNumber(savedNumber, parseInt(output), operator)
    });

    //число хранившееся в output после нажатия на оператор идет в savedNumber
    const [savedNumber, setSavedNumber] = useState(0);

    const operateNumber = (a: number, b:number, operation:string) => {
        switch (operation) {
            case "+":
                setSavedNumber(a+b);
                setOperator("");
                setOutput("")
                break;
            case "-":
                setSavedNumber(a-b);
                setOperator("");
                setOutput("")
                break;
            case "*":
                setSavedNumber(a*b);
                setOperator("");
                setOutput("")
                break;
            case "/":
                setSavedNumber(a/b);
                setOperator("");
                setOutput("")
                break;
            default:
                break;
        }
            
    }

    //finish === true => расчет закончен, можно выводить ответ шрифтом побольше
    const [finish, setFinish] = useState(false);
  
    const btnHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        finish && setFinish(!finish);
        const value = (event.target as HTMLInputElement).innerHTML;
        setOperator(value);
        output && setSavedNumber(parseInt(output));
        setOutput("")
    }
  
    return (
        <div className="sidebar">
            <div className="title">
                Calculator
            </div>
            <div className="display">
                
                {!finish && <div className="input">{output}</div>}
                {!finish && <div className="operator">{operator}</div>}
                
                <div className="answer" id={finish ? "finished" : ""}>=   {savedNumber}</div>
            </div>
            <div className="calculator-btns">
                <div className="calculator-container">
                    {
                        numbers.map(number => 
                            <div className="number" onClick={() => numberHandler(number)}>
                                {number}
                            </div>  
                        )
                    }
                </div>
                <div className="btns">
                    <div className="subtn">
                        <div className="btn" onClick={btnHandler}>+</div>
                        <div className="btn" onClick={btnHandler}>-</div>
                    </div>
                    <div className="subtn">
                        <div className="btn" onClick={btnHandler}>*</div>
                        <div className="btn" onClick={btnHandler}>/</div>
                    </div>                
                    <div className="btn" onClick={() => setFinish(!finish)}>=</div>
                </div>
            </div>
        </div>
  )
}

export default Calculator