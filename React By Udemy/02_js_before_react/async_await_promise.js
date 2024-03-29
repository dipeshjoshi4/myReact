

//----------------------------------30. Async JS Promises----------------------------------------------

//how we use load data and fetch data from external web api

//first way promise

//- when the fecth api called js dont wait for the fecth all the data from the api and then run next code .

//- js immediatly jums to next code and thats y we have to use async js promise method for wait for data and then run the code

//- for fetch data after collecting result convert into js object  so for we use then(callback) and from that we got data and

//- that data to print we also use then(callback) and then we fectch our data from api

//- path => api fetch => resul ====convert json in js object=======> data =======> for data print----we use --> console.log(data)

//- still data arrived latter we see that "dipesh" will be print early 

//- so js not wait for data come sbecause synchronous language but here we use async function promise method use


// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((res) => res.json())
//     .then((data) => console.log(data));

// console.log("dipesh")


//---------------------------------31. Asynchronous JavaScript: Async / Await----------------------------------

//learn easy way to do above thing mean get data from api and see how to pause a code or you can say how to use async awiat and run js code as syncronous while calling fecth api data

async function getTodos() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    console.log(data)
}

getTodos();

console.log("dipesh")