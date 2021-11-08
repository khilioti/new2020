(async () => {
   const module = await import('./module.js')
    console.log(module)
    console.log(module.SECRET_KEY)

    const Person = module.default
    const person = new Person('Zheka')
    console.log(person.name)
})()