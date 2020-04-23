//
//Object destructuring
//

// const person = {
//     name: 'Ahsan',
//     age: 22,
//     location: {
//         city: 'karachi',
//         temp: 2,
//     }
// }

// const {name: firstName = 'anonyms', age} = person   //this is ES6 destructuring if in object person the name is not-defined so this line k=make anonymus default

// const {city, temp: temperature} = person.location   //this is ES6 destructuring and temp:temperature is for renaming temp 

// console.log(`Hi my name is ${firstName} and im ${age} year old and i lived in ${city}`)


// if (city && temperature) {
//     console.log(`the temp is ${temperature} in ${city} `)    
// }


// const book = {
//     title: 'ego is the enemy',
//     author: 'Ryan holiday',
//     publisher: {
//         name: 'penguin'
//     }
// }

// const { name: publisherName='self-published' } = book.publisher

// console.log(`the author of book is ${publisherName}`)

//
//Array Destructuring
//

// const Address = ['clifton', 'karachi', 'seaview', 'siraiki']

// const [area, city, place, famous] = Address
// console.log(`the city ${city} has a area named ${area} which is famous for ${place} and lot of ${famous}`)

// const [, , place,] = Address //if you want to get the specific address
// console.log(`the place is ${place}`)

// const [city=Address[1]] = Address    this s not working in destruction try to avoid
// console.log(`the city is ${city}`)

// const [area='johar', , ,] = Address
// console.log(`the area is ${area}`)


// const item = ['coffee (hot)', '$2.00', '$2.50', '$3.00']
// const [coffee, , ,price] = item
// console.log(`A medium ${coffee} costs ${price}`)




























