interface Person {
    readonly id: number
    age: number;
    name: string;
}

let viking: Person = {
    id: 123,
    age: 1,
    name: "lilei",
};
viking.age = 2
viking.name = 'lilei'
// viking.id = 'lilei'
console.log(viking)
