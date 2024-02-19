// Create classes for rep.txt


export class Program {
    constructor(statements) {
        this.statements = statements
    }
}

export class Assignment {
    constructor(target, source) {
        Object.assign(this, {target, source})
    }
}

export class PrintStatement {
    constructor(argument) {
        this.argument = argument
    }
}

export class IfStatement {
    constructor(test, consequent, alternate) {
        Object.assign(this, {test, consequent, alternate})
    }
}

export class WhileStatement {
    constructor(test, block) {
        Object.assign(this, {test, block})
    }
}

export class BreakStatement {
    constructor() {}
}

export class Variable {
    constructor(name) {
        Object.assign(this, {name})
    }
}

// for language where you can declare own functions
export class Function {
    constructor(name, params, body) {
        Object.assign(this, {name, params, body})
    }
}

export class BinaryExpression {
    constructor(op, left, right) {
        Object.assign(this, {op, left, right})
    }
}

export class UnaryExpression {
    constructor(op) {
        Object.assign(this, {op})
    }
}