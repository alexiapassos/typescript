//tipagem TypeScript

//tipagem implicita

let userName = "Shaolim do Sertão"
userName = "Jack Shan"

//tipagem explicita

const pi: number = 3.1415
let logado: boolean = false
let idade:number = 25

//union types

let rg:number | string | boolean = 2019220215
rg = "2019220215"
rg = true

let generico: any = []
generico = {
    a: "",
    b: 123,
    c: true
}
generico = "Eu sou generico"
generico = 13.13

const listaDeNomes: string[] = ["Maria", "João", "Pedro"]

const numeros: number[] = [1,2,3,4,5]

const valores: Array<number | string> = ["João", 123]
const array: Array<any> = [{}, 123, "João", []]