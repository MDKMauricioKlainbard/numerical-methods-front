import { useState, useEffect } from "react";

export default function FormRoots() {
    const [method, setMethod] = useState("");
    useEffect(() => {
        document.getElementById("function-roots-method").addEventListener("change", () => {
            setMethod(document.getElementById("function-roots-method").value)
        })
    }, [])
    return (
        <form>
            {(method === 'bisection' || method === 'regula-falsi') ?
                <>
                    <label>Ingrese el extremo izquierdo del intervalo (a):</label>
                    <input id="leftNumber" />
                    <label>Ingrese el extremo derecho del intervalo (b):</label>
                    <input id="rightNumber" />
                </> : <></>}
            {(method === 'secant') ?
                <>
                    <label>Ingrese la primera aproximación:</label>
                    <input id="firstApproximation" />
                    <label>Ingrese la segunda aproximación:</label>
                    <input id="secondApproximation" />
                </> : <></>}
            {(method === 'newton-raphson' || method === 'fixed-point') ?
                <>
                    <label>Ingrese la primera aproximación:</label>
                    <input id="firstApproximation-NR-FP" />
                </> : <></>}
        </form>
    )
}