const start = '         Hello Youtube '
const end = 'This is new JavaScripn features          '

// console.log(start.trimStart() + end.trimEnd())
// console.log((start + end).trim())

console.log('fb'.padStart(1, 'www.'))
console.log('fb'.padEnd(6, '.com'))

// =============

function tag(strings, name, age) {
    const [s1, s2, s3] = strings
    const ageStr = age > 42 ? 'старший' : 'младший'
      return `${s1}${name}${s2}${ageStr}${s3}`
}

const person = {
    name: 'Max',
    age: 30
}

const output = tag`Человек по имени ${person.name} является ${person.age} в семье!`

console.log(output)