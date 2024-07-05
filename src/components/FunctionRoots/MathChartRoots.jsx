import methods from "../../api/routes";
import { useState } from "react";
import LineGraph from "../LineGraph/LineGraph";
import getMathFieldValue from "../../scripts/getMathFieldValue";
import styles from "./MathChartRoots.module.css"

const selectMethod = async (method, latex) => {
    let leftNumber;
    let rightNumber;
    let firstApproximation;
    let secondApproximation;
    let parameter;
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
            firstApproximation = Number(document.getElementById("firstApproximation-NR").value);
            return methods.functionRoots.newtonRaphson(latex, firstApproximation);
        case 'fixed-point':
            firstApproximation = Number(document.getElementById("firstApproximation-FP").value);
            parameter = Number(document.getElementById("parameter-FP").value);
            return methods.functionRoots.fixedPoint(latex, firstApproximation, parameter);
    }
}

export default function MathChart() {
    const [data, setData] = useState({});
    const [mathData, setMathData] = useState([]);
    const [resolved, setResolved] = useState(false);
    const [error, setError] = useState(false);
    const getData = async () => {
        setResolved(false);
        setError(false);
        setMathData([]);
        setData({})
        const method = document.getElementById("function-roots-method").value;
        const latex = getMathFieldValue();
        try {
            const { data } = await selectMethod(method, latex)
            setData(data);
            const arrayCounter = Array.from({ length: data.counter }, (_, i) => i + 1);
            const arrayData = [];
            for (let i = 0; i < arrayCounter.length; i++) {
                arrayData.push({
                    x: arrayCounter[i], y: data.approximations[i]
                })
            }
            setMathData(arrayData)
            setResolved(data.resolved)
        }
        catch (error) {
            setMathData([]);
            setError(error);
            setResolved(false);
            setData({});
        }
    };
    return (
        <>
            <button onClick={getData}>Calcular</button>
            <div>
                {resolved ? <>
                    <p>La aproximación obtenida es: {data.newAprox}</p>
                    <p>{data.message}</p>
                    <p>Se hicieron {data.counter} pasos.</p>
                </> : <></>}
                {(!resolved && !error && data?.message) ? <>
                    <p>{data.message}</p>
                    <p>Se hicieron {data.counter} pasos</p>
                </> : <></>}
                {error ? <>
                    <p>{error.response.data.message[0]}</p>
                </> : <></>}
            </div>
            <LineGraph arrays={[mathData]} dependentAxis={'Aproximaciones'} independentAxis={'Iteraciones'} />
            <div class={styles["table-container"]}>
                <table class={styles["styled-table"]}>
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
            </div>
        </>
    )
}

