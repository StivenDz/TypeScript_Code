export type Operations = 'multiply' | 'add' | 'divide';
type Result = number | void;

const calculator = (a: number, b: number, op: Operations): Result => {
    if (op === 'multiply') return (a * b);
    if (op === 'add') return (a + b);
    if (op === 'divide') {
        if (b === 0) { throw new Error("Can't divide by 0, Sorry!") }
        return (Number((a / b).toString().slice(0,3)));
    }
    throw new Error(op + ' Operation is not valid')
}
console.log(process.argv);

try{
    console.log(calculator(5, 5, 'multiply'));
    console.log(calculator(5, 5, 'add'));
    console.log(calculator(25, 7, 'divide'));
}catch(error){
    console.log('Error!');
    
}

