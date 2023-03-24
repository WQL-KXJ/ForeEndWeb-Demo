export default function sum(...args){

    return args.reduce((a,b) => a+b,0)
}