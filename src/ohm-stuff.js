import * as ohm from "ohm-js";

export function matches(name, s){
    const grammars = {
        canadianPostalCode: ` G {
            code				= postalLetterFirst digit postalLetter " " digit postalLetter digit
            postalLetter 	 	= ~("D"|"F"|"I"|"O"|"Q") "A".."Z"
            postalLetterFirst 	= ~("W"|"Z") postalLetter”
        }`,
    };
    return ohm.grammar(grammars[name]).match(s).succeeded()
}