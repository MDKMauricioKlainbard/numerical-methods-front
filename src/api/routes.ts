import mathAPI from "./api"

const routes = {
    functionRoots: {
        bisection: 'function-roots/bisection',
        regulaFalsi: 'function-roots/regula-falsi',
        secant: 'function-roots/secant',
        newtonRaphson: 'function-roots/newton-raphson',
        fixedPoint: 'function-roots/fixed-point'
    }
}

const methods = {
    functionRoots: {
        bisection: async (latex: string, leftNumber: number, rightNumber: number) => {
            return mathAPI.post(routes.functionRoots.bisection, { latex, leftNumber, rightNumber })
        },
        regulaFalsi: async (latex: string, leftNumber: number, rightNumber: number) => {
            return mathAPI.post(routes.functionRoots.regulaFalsi, { latex, leftNumber, rightNumber })
        },
        secant: async (latex: string, firstApproximation: number, secondApproximation: number) => {
            return mathAPI.post(routes.functionRoots.secant, { latex, firstApproximation, secondApproximation })
        },
        newtonRaphson: async (latex: string, firstApproximation: number) => {
            return mathAPI.post(routes.functionRoots.newtonRaphson, { latex, firstApproximation })
        },
        fixedPoint: async (latex: string, firstApproximation: number, parameter: number) => {
            return mathAPI.post(routes.functionRoots.fixedPoint, { latex, firstApproximation, parameter })
        }
    }
}

export default methods

