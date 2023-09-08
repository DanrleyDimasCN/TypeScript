// 1 - arrays

let numbers: number[] = [1, 2, 3]

numbers.push(5)

console.log(numbers[2]);

const nomes: string[] = ["Danrley", "Dimas"];

nomes.push("Camargo");

console.log(nomes[0],nomes[1], nomes[2]);

// 2 - outra sintaxe de array

const nums: Array<number> = [100, 200];

nums.push(300)

console.log(nums);

console.log(nums[0]);

// 3 - any

const arr1: any = [1, "teste", true, [], {nome: "Danrley"}]

console.log(arr1);

arr1.push([1,2,3]);

console.log(arr1);

// 4 - parametros tipados

function soma(a: number, b: number) {
    console.log(a + b);
}

soma(4, 5)

// 5 - retorno de função

function greeting(name: string): string {
    return `Olá ${name}`
}

console.log(greeting("Danrley"));


// 6 - função anonima

setTimeout(function()  {
    const sallary: number = 1000

    // console.log(sallary);
}, 2000)

// 7 - tipos de objetos

function passCoordinates(coord: {x: number, y: number}) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}

const objCoord = {x: 329, y: 84.2}

passCoordinates(objCoord)

const pessoaObj:{nome: string, surname: string} = {nome: "Danrley", surname: "Dimas"}


// 8 - props opcionais

function showNumbers(a: number, b: number, c?: number) {
    console.log("A: " + a);
    console.log("B: " + b);
    if(c) {
        console.log("C: " + c);
        
    }
}

showNumbers(1, 2, 3)
showNumbers(5, 6)
// showNumbers(5)

// 9 - validando argumento opcional

function advancedGreeting(firstName: string, lastName?: string) {

    if(lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?` 
    }

    return (`Olá, ${firstName}, tudo bem?`);
}

console.log(advancedGreeting("Danrley", "Dimas"));

console.log(advancedGreeting("Danrley"));


// 10 - union type

function showBalance(balance: string | number) {
    console.log(`O saldo da conta é R$ ${balance}`);
}

showBalance(100);
showBalance("500")

const arr2: Array<number | string | boolean> = [1, "teste", true];

// 11 - avançando em union types

function showUserRole(role: boolean | string) {
    if(typeof role === "boolean") {
        return "Usuário não aprovado!"
    }

    return `A função do usuário é: ${role}`
}

console.log(showUserRole(false));
console.log(showUserRole("Admin"));

// 12 - type alias
type ID = string | number

function showId(id: ID) {
    console.log((`O ID é: ${id}`));
}

showId(1)
showId("200")
showId(123)

// 13 - interface

interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj: Point) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}

const coordObj:Point = {
    x: 10,
    y: 15,
    z: 20
}

showCoords(coordObj)

// 14 - interface x type alias

interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {name: "Danrley", age: 26}

console.log(somePerson);

type personType = {
    name: string
}

// 15 - literal types

let test: "testando"

test = "testando"

console.log(test);

function showDirection(direction: "left" | "rigth" | "center") {
    console.log(`A direção é: ${direction}`);
}

showDirection("left");

// 16 - Non-null Assertion Operators

const p = document.getElementById("some-p")

console.log(p!.innerText);

// 17 - bigint

let n: bigint

n = 1000n

console.log(n);

console.log(typeof n);

console.log(n + 100n);

// 18 - Symbol

let symbolA:symbol = Symbol("a");

let symbolB:symbol = Symbol("a");

console.log(symbolA == symbolB);
console.log(symbolA === symbolB);

