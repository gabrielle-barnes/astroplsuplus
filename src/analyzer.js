import * as core from "./core.js"

// have not done any checks!!!!

export default function analyze(match) {
    const analyzer = match.matcher.grammar
        .createSemantics()
        .addOperation("rep", {
            Program(statments) { //an iteration node always do .children for + and *
                return new core.Program(statments.children.map((s) => s.rep()))
            },

            Assignment(id, _eq, expression, _semi) {
                return new core.Assignment(id.sourceString, expression.rep())
            }, 

            Print(_print, exp, _semi) {
                return new core.PrintStatement(exp.rep())
            },

            IfStmt(_if, exp, block, elsePart) {
                //have not done yet
            },

            ElsePart_nested_if(_else, stmt){
                //have not done yet
            },

            ElsePart_else_block(_else, block) {
                //have not done yet
            },

            WhileStmt(_while, exp, block){
                //have not done yet
            },

            Block(_open, stmts, _close) {
                return stmts.children.map((s) => s.rep())
            },

            BreakStmt(_break, _semi){},

            Exp_comparison(left, op, right){
                return new core.BinaryExpression(op.sourceString, left.rep(), right.rep())
            },

            Exp1_binary(left, op, right){
                return new core.BinaryExpression(op.sourceString, left.rep(), right.rep())
            },

            Term_binary(left, op, right){
                return new core.BinaryExpression(op.sourceString, left.rep(), right.rep())
            },

            Factor_binary(left, op, right){
                return new core.BinaryExpression(op.sourceString, left.rep(), right.rep())
            },

            Factory_negation(op, operand){
                return new core.UnaryExpression(op.sourceString, operand.rep())
            },

            Primary_call(id, _open, args, _close){},

            //Primary_num(num){},

            Primary_id(id){
                return new core.Variable(id.sourceString)
            },

            Primary_parens(_open, exp, _close){
                return exp.rep()
            },

            numeral(_main, _dot, _frac, _e, _sign, _exp){
                return Number(this.sourceString)
            },
        
        })

    return analyzer(match).rep()
}