import methods from "../../api/routes";
import { useState } from "react";
import LineGraph from "../LineGraph/LineGraph";
import getMathFieldValue from "../../scripts/getMathFieldValue";

const selectMethod = async (method, latex) => {
    let leftNumber;
    let rightNumber;
    let firstApproximation;
    let secondApproximation;
    switch (method) {
        case 'bisection':
            leftNumber = Number(document.getElementById("leftNumber").value);
            rightNumber = Number(document.getElementById("rightNumber").value);
            return methods.functionRoots.bisection(latex, leftNumber, rightNumber);
        case 'regula-falsi':
            leftNumber = Number(document.getElementById("leftNumber").value);
            rightNumber = Number(document.getElementById("rightNumber").value);
            return methods.functionRoots.regulaFalsi(latex, leftNumber, rightNumber);
        case 'secant':
            firstApproximation = Number(document.getElementById("firstApproximation").value);
            secondApproximation = Number(document.getElementById("secondApproximation").value);
            return methods.functionRoots.secant(latex, firstApproximation, secondApproximation);
        case 'newton-raphson':
            firstApproximation = Number(document.getElementById("firstApproximation-NR-FP").value);
            return methods.functionRoots.newtonRaphson(latex, firstApproximation);
        case 'fixed-point':
            firstApproximation = Number(document.getElementById("firstApproximation-NR-FP").value);
            return methods.functionRoots.fixedPoint(latex, firstApproximation);
    }
}

export default function MathChart() {
    const [mathData, setData] = useState([]);
    const getData = async () => {
        setData([]);
        const method = document.getElementById("function-roots-method").value;
        const latex = getMathFieldValue();
        try {
            const { data } = await selectMethod(method, latex)
            console.log(data)
            const arrayCounter = Array.from({ length: data.counter }, (_, i) => i + 1);
            const arrayData = [];
            for (let i = 0; i < arrayCounter.length; i++) {
                arrayData.push({
                    x: arrayCounter[i], y: data.approximations[i]
                })
            }
            setData(arrayData)
        }
        catch (error) {
            setData([]);
        }
    };
    return (
        <>
            <button onClick={getData}>Hola</button>
            <LineGraph arrays={[mathData]} dependentAxis={'Aproximaciones'} independentAxis={'Iteraciones'} />
            <table>
                <thead>
                    <tr>
                        <th>Iteraciones</th>
                        <th>Aproximaciones</th>
                    </tr>
                </thead>
                <tbody>
                    {mathData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.x}</td>
                            <td>{item.y}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}