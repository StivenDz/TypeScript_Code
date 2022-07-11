const multiplicator = (a: number,b: number,printText: string) =>{
    console.log(printText,a*b);
};

console.log(process.argv);

const parseArguments = (args:Array<string>):Array<number> =>{
    if(args.length !== 4) throw new Error('Wrong number of arguments');

    const firstNum = Number(args[2]);
    const secondNum = Number(args[3]);

    if(!isNaN(firstNum) && !isNaN(secondNum)){
        return[
            firstNum,
            secondNum
        ]
    }
    throw new Error('Provided values were not numberss!');
}

const cleanArguments = parseArguments(process.argv);

const a: number = Number(cleanArguments[0]);
const b: number = Number(cleanArguments[1]);

console.log(typeof NaN);
try{
    multiplicator(a,b,`Multiplied numbers ${a} and ${b}, the result is: `)

}catch (error){
    console.log(error);
}