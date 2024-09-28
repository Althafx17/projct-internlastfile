// let fruits = ['APPLE', 'BANANA', 'ORANGE']
// console.log(fruits[1])

// fruits[1] = 'grapes'
// console.log(fruits(1))

// fruits.pop('grapes')
// console.log(fruits)

let people = [
    {
        name: 'John',
        age: 23,
        place:
        {
            city: 'San Francisco',
            country: 'US'

        }
    },
    {
        name: 'jsck',
        age: 30,
        place:
        {
            city: 'van erancisco',
            country: 'su'

        }
    }
]
// adding a new property
people[1].age = 30;
people[2].place.city ='delhi';

console.log(people[0].place);