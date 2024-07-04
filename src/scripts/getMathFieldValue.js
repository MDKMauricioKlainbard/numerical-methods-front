import { convertLatexToAsciiMath } from "mathlive";

export default function getMathFieldValue() {
    const mfe = document.getElementById("math-field")
    console.log(convertLatexToAsciiMath(mfe.getValue()))
    return convertLatexToAsciiMath(mfe.getValue());
}


