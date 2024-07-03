export default function getMathFieldValue() {
    const mfe = document.getElementById("math-field")
    const mathFormula = mfe.getValue().replace(/\\/g, '\\\\');
    return mathFormula;
}


