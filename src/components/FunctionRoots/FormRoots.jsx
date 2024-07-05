import { useState, useEffect } from "react";
import styles from "./FormRoots.module.css"

export default function FormRoots() {
    const [method, setMethod] = useState("bisection");
    useEffect(() => {
        document.getElementById("function-roots-method").addEventListener("change", () => {
            setMethod(document.getElementById("function-roots-method").value)
        })
    }, [])
    return (
        <form class={styles["form"]}>
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
            {(method === 'newton-raphson') ?
                <>
                    <label>Ingrese la primera aproximación:</label>
                    <input id="firstApproximation-NR" />
                </> : <></>}
            {(method === 'fixed-point') ?
                <>
                    <label>Ingrese la primera aproximación:</label>
                    <input id="firstApproximation-FP" />
                    <label>Ingrese el parámetro de convergencia:</label>
                    <input id="parameter-FP" />
                </> : <></>}
        </form>
    )
}