import util from "node:util"
import parse from "./parser.js"
import analyze from "./analyzer.js"

try {
    const match = parse("print 1;")
    const rep = analyze(match)
    console.log(util.inspect(rep, {depth: 5}))

    /*         FOR LATER:            */
    // const optimized = optimize(rep)
    // const js = generate(optimized)

    console.log(rep)
} catch (e) {
    // log the error message in red
    console.error("\x1b[31m%s\x1b[0m", e.message)
    process.exit(1)
}