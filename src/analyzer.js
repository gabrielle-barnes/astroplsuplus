import * as core from "./core.js"

// export default function analyze(match) {
//     return new core.Program([
//         new core.Assignment(
//             new core.Variable("x"), 
//             new core.Function("print", 1)
//         )
//     ])
// }

export default function analyze(match) {
    const analyzer = match.matcher.grammar
        .createSemantics()
        .addOperation("rep", {})
            Program(statments) {

            Assignment(id, _eq, expression, _semi) {}, })
    return analyzer(match).rep()
}