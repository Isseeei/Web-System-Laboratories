fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response =>{
    console.log(response)
    return response;
}).then(result =>{
    const data = result.json()
    return data
}).then(data =>{
    console.log(data)
})

const getData = async() =>{
    const response =
    await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()

    return data
}

console.log(1)
console.log(2)
getData().then(data =>{
    console.log(data)
}).catch(err =>{
    console.log(err)
})
console.log(3)
console.log(4)
console.log(5)