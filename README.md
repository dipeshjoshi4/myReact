




# what is react? and why we need ?
react is an open-source library for building a user interface(UI)

# what is framwork and library

libraray vs framwork 
both are reusable pieces of code  written by  developers to solve complicated  problems
Library is a collection of packages that performs specific operations 
whereas a framework contains the basic flow and architecture of an application 
ex:flat:framwork || building a house on land:libraray
react js is library || Angular framework

# Benifits of ReactJS
make big project without much complexity
react allows to create reusable UI Components
it is used to make a single page application    ex: bharitya daak(loading happen not a SPA) || youtbe(SPA)

# what is SPA
when we have many components in website if we click any one of them then page will never reload .refresh(update) only the same component will updates 

# Benifits of SPA
1.performance gain
2.user get more dynamic experience

# for html add element in browser

```HTML
<div id="root">
    <h1>Hello World By HTML!</h1> 
    </div>
```

# for js add element in browser

```JS
<script>
        const root = document.getElementById("root")
        const heading = document.createElement("h1")
        heading.innerHTML = "Hello World By JS!!"
        root.appendChild(heading)
</script>
```

 => so here we write html and js and make show the element in browserr .
 => for the react we have to add browserto something because browser only understand html css js

 => in the browser add react we have to do this 

 ```React script dependecy
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```
=> You Can Check By Writing React in console. and you get many function and properties

# What iS CDN => content delievery network
- react mady by developer and hosted but with this cdn link we can access

# CDN => 
 - it refers to  geographically  dirstributed  group of servers that work together  to provide  fast delivery of internet content 
the main use of cdn is to deliver to content through a network of servers in a secure and efficient way
a cdn is allows for the quick  transfer of  assest needed for loading  internet content,including HTML Pages,JS  files,style sheets,images and videos
ex:font awesome

there is a 2 thing is reactjs 1.react DOM 2.React Native

# 2

# Understanding Of React

for creating h1 we use receat development (first script)
const heading = React.createElement("h1",{ id: "h1id", class: "h1class" },"Hello World By React");  //(firstelement,id/class,innertContent)


now add root in h1 how ?(ReactDOM)
const root = ReactDOM.createRoot(document.getElementById("root"));

put id into root for that render
root.render(heading);

so what do render method => it converts the object(heading) into h1 and put into our root



 for this HTML

```HTML
<div id="parent">
    <div id="child">
        <h1>Hello React in Deep</h1>
        </div>
    </div>
```

this react code

```React
const heading = React.createElement(
"div",
{ id: "Parent" },
React.createElement(
"div",
{ id: "child" },
React.createElement("h1", {}, "Hello World!!")
)
);
```


# for this HTML

```HTML
<div id="parent">
    <div id="child">
        <h1>Hello React in Deep</h1>
        </div>
    <div id="child">
        <h1>Hello React in Deep</h1>
        </div>
    </div>
```

# this react code

```React
const heading = React.createElement(
"div",
{ id: "Parent" },
React.createElement(
"div",
{ id: "child" },
React.createElement("h1", {}, "Hello World!!")
)
);
```

# 3

# whta is crossorigin in react cdn link

=> Web pages often make requests to load resources on other servers. Here is where CORS comes in. A cross-origin request
is a request for a resource
(e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

# What is crossorigin in CDN? 
=> CORS (Cross Origin Resource Sharing) is an HTTP feature that enables a web application running under one domain to
access resources in another domain



# what is Npm and npx and difference between them?
=> npm => is the tool use to install package locally or globally in your system and then you will use it
=> Ex => song download ansd then we will listen

=> npx => is the tool use to execute without installation
=> Ex => song will be in app then we will listen anytime withou download


# we have question that when to use npm and when to use npx
=> if you use any package repetedly in your project then you will use npm otherwise npx
=> we generally use for "npx create-react-app app-Name" now but we can do with npm so first install npm

=> for installation NPM in system
1.open terminal
2.npm install create-react-app --global

=> then run command in vs code terminal in any folder
"npm create-react-app app-Name"

=> you can install react npm in vs code in terminal with
npm init
and some question and that package.json file relese


# what is package.json ? why you use it ?
the dependecies of the node-modules are in the package.json file
we use it because we have many react packages and his version that all stored in package.json

# what is package-lock.json? ? why you use it ?
- its also have dependcy but why we need many files with dependency because we already have dependecy file in
package.json

- let assume i upload file in git and i am a1(6 months ago)(version old)
- then a2 comes and he want to change and then repo dupliacte happen(after 6 month) (version new)
- but i have the same old version.so pacjage-json.lock make the same version for the both the user


# what is node-modules
- in reactjs whteevr the dependecy you install that all are store in node-modules
- in real-project there is so much dependecy inso so much file store is node_modules
- we dont give that file in production so for that we use to .gitignore and make it ignore this files
- all the dependecy and packages which need to made react app it will be store here and their details will be there

# what is sign in before dependcy in 
~ || ^ => whenevr a small updates comes this sign will be update the version .its called creat


# to remove js script  package which is react to remove their dependecy
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

we remove that script CDN link and instal dependecy with npm fot hat we use comman like this
"npm install react"

- 2 things come up
- node_modules
- package-lock.json

- for install react dom command
- "npm i react-dom"

- 1 thing show up
- react-dom node modules
- and every dependecy have their own package.json

# firstly we have dependecy script in our file so that we use create react and root render  so now after the script install in systsem
```React
import React from 'react';
import { ReactDOM } from 'react-dom';
```
- this comes from node_modules

# what is the difference between package.json and package-lock.json?

- package.json have dependecy and package-lock.json have too dependecy in  but package-lock.json have to maintain if their have 2 user work in same code its has to been intact means in terms of version they both have same version 

- let understand by example

- if person A doing some task and push into github and after sometime(let say after 6 month) person b add some fetures on that repo .
  so during that time there will be some changes in React version because there is caret sign .

- so both person have been same version that thing maintain by package-lock.json

# 4


- make a new npx file for react
 - 1.first with npx
 - 2.seconf with vite/parcel

- with 
```
- npx create-react-app ReactFileName 
```
- taking more time 
```
cd ReactFileName  => said you are not react file so first go in the directory
npm start => then run this command and execute
```
# what is difference between npx create-react-app or vite creat-react-app ?

# file structure

- node_modules
- public folder
- src folder
- .gitignore
- package-lock.json
- package.json
- README.md

# Public foilder

- all the static content in our file and we never change on that files
- logo and favicon and images and videos
- make assest folder and you can put img and video
- what is the manifest.json and robots.txt
- the file u made host but whenevr the you dont want to public and dont want to show that link store in robots.txt
- manifest.json => meta data file of the react

# src folder

- most of time we work on src folder and its very imp and mind of our website

# what is package.json ? why you use it ?
- the dependecies of the node-modules are in the package.json file
- we use it because we have many react packages and his version that all stored in package.json
- there is one script files like this

```
 "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  ```

  - so its give info how to start and how to build file make for the deployment all things it provide us
  - which browser casn run smootthly all thing its describe  in this file

- always Remember anything you write in js file wether that js file have react code or javascript code you have to mention that js file  
- in HTML file.keep intact with basic always.there is reason we will discuss about that so Remember

# where is our js file script tag in creat-react-app with npx

- so its enabled by the package.json behind the scene if u open source in browser ,you can see react-script enabled by bundler
like this

```
from source  browser

<script defer src="/static/js/bundle.js"></script>

from package.json file

"react-scripts": "5.0.1",

```
- starting our development by understanding how all things work which file importance for dong this and that

```
import React from "react";
import ReactDOM from "react-dom";
ReactDOM.render(<h1>Hello</h1>,document.getElementById("root"))

```
- to render anything we need react-dom dependecy
- to enter jsx  file(element of html) we need react dependecy
- ReactDOM.render("what to write","where to write")

# what is babel

- babel stored in node_modules
- its use for to convert jsx file into js code
- because browser dont know the what is es6,new moden js so for that we use babel
- work as translate .its a compiler

# lets how babble conver react code into jsx file

- life cycle

```
jsx => React.createElement => reactElement is js object => html element

```

```
React Code

ReactDOM.render(<h1>Hello</h1>,document.getElementById("root"))

```

```
jsx Code

ReactDOM.render( /*#__PURE__*/_jsx("h1", {
  children: "Hello"
}), document.getElementById("root"));

```
# what is jsx

- jsx convert html tags into react element
- html tags we can write on react with jsx help
- we need because browser only need or understand html,css,js

- NOTE:TIMESTAMP EP4:24MIN

# why we need component ?

- if i had to write many thing indexh.js file

```
ReactDOM.render(<h1>Hello</h1>,document.getElementById("root"))

if i want to make many thing here accept "hello" and many things so i can do like this

ReactDOM.render(
    <>
    <p>hello para </p>
    <h1>Hello</h1>
    </>
,document.getElementById("root"))

```
- but that is very complex way .insted make seprate component file and that file will be import here.that's How we need of component.

# What is Component ?

- component is a one kind code of structure which we can use many time for create same structure. its reusability is main function 

- try to naming of component in camelcase | Ex: Header.js | Ex: NavBar.js

- componenets name like this 

- App.js
- Header.js
- Footer.js
- Section.js

- there are 2 types of components 
- 1.function based Components
- 2.class based Components

# what is function based componenents?

- its work simple like javascript function 
- its return jsx

# How to write function component and how to use in our index.js file 

- 3 things to remember

- 1.always import React 
```
import React from "react";
```

- 2.Always Export Components files

```
export default App;
```

- 3.Always import Components into Your Main file
```
import App from "./App";
```

- Now See How Code File Looks Like

```
// index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./App"


ReactDOM.render(
    <>
        <App></App>
    </>,
    document.getElementById("root"));

```

```
 // App.js => Component File

import React from "react";

//Function component

function App() {
    return <h1>Hello From App Component</h1>
}

export default App;

```

- You can write components like this too in main file 

```
<> 
    <App/>
</>

OR 

<> 
    <App></App> 
</>


```

- we can write <app/> component as many time as You use .

so now discuss in component file

```
function App() {
    return (
        <div>
            <h1>Hello From App Component</h1>
            <p>dipesh</p>
        </div>
        )     
}

```
- here after return keyword always write "( write whole code in this )" 

- also for more then one child always give parent element its <div></div> OR <React.fragment> </React.fragment> OR <> </>

- this is same rule apply on main js file which is here index.js

# Now let's Talk About import and export file

- lets take a website is out Home 

- to make home there is dependecy is land here that dependecy is our react and reactdom 

- to make home we need many components so we also take one component import and export to our land means our main  page

# there is some JSX Rule

- 1. always child component have parent component <div></div>

- 2. always have js varible show in function or express you have to write in  {var} or {5+5}

- 3. write always className insted of class

- 4. You can't use if...else insted you have to used ternary operator => is this ? yes:no

# make our main componennt function as arrow function too

 - SHORTCUT ==> rafce

 - Normal Function

 ```
 function App(){
    return(
        <div className="app">
            <h1></h1>
            <div></div>
            <p></p>
        </div>
    )
 }

 ```
 - Arrow Function 

 ```
 const App = () => {
    return (
        <div className="app">
             <h1>Hello From App Component</h1>
             <p>dipesh</p>
             <h2>{name}</h2>
             <p>{5+5}</p>
        </div>
    )
}

 ```

 # 5

 Make A simple project using all the Learning till now so we make puma website 3 section

 - 1. Header Section

 - 2. Hero Section

 - 3. Footer Section

 - folder structure

 For The Componenet which is Header,footer,hero for the make component folder in src and make it 3 css and js file and import and export in app.js file and individual css file import to indvidual js file

 - Ex

 - index.js file have our app and so import APP and for dependecy we have import react and reactdom package

```
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
```
- now app.js file which is in index.js have this dependecy and package manager

```
import React from "react";
import "./App.css"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Footer from "./Components/Footer"

```

- and now header/hero/footer componennets code

```
import React from "react"
import "./Header.css"
import pumalogo from "../Assests/puma-logo-cover.png";

```

- we can also writw css file for the header/hero/footer(External CSS)

- inline CSS
```
<img src={pumalogo} alt="PumaLogo" style={{ width: "70px" }}/>
```

- in page CSS

```
 const bg = {
     backgroundColor: "red"
 }
 <div style={bg}>
 
```

# 6

# Props

- props(properties) are a way to pass data from a parent  component to a child component

- props are used to transfer data from one component to another

- props are just like function in js

- props are read-only and can not be modified by the child component

- you can pass any js datatypes (String,Number Array,Object,etc) as props

- if you see you can say that props is nothing but object

- props are object which can use inside a component

- props are passed to components as object.when you pass data from a 
parent component to a child component,you are essentially passing an object
(the props object) that contains key-value pairs.each key represents a prop name 
and the corresponding value is the data you want to pass.

- WE CAN USE PROPS LIKE THIS

- APP.JS

```

const App = () => {
    return (
      <div className="app">
           <Child name="rahul" name2="dipesh"/>
      </div>
    )
}

```
- CHILD.JS

```
const child = (props) => {
    return (
        <div>
            <h1>Hello {props.name}</h1>
            <h1>Hello {props.name2}</h1>
        </div>
    )
}

```

- YOU CANT CHANGE THE NAME IN CHILD COMPONENT WHILE USING PROPS

```
const child = (props) => {
    props.name = "rahul";
    return (
        <div>
            <h1>Hello {props.name}</h1>
            <h1>Hello {props.name2}</h1>
        </div>
    )
}

// -> you can change prop name in child component
// -> Cannot assign to read only property 'name' of object '#<Object>'

```

-you can write props name like this...
```
const App = () => {

    const name = "rahul"

    return (
      <div className="app">
           <Child xyz={name} name2="dipesh"/>
      </div>
    )
}
```
- fo that child compo. code is like this

```
const child = (props) => {
    return (
        <div>
            <h1>Hello {props.xyz}</h1>
            <h1>Hello {props.name2}</h1>
        </div>
    )
}

```

# how let's see we use props|you can pass any js datatypes (String,Number Array,Object,etc) as props


- App.js Code

```
const App = () => {
    const name = "rahul"
    const arr = ["vikki", "manku"]
    const obj = {a: "sonal",b:"monal"}
    const boo = "true"
    const int = 5
    return (
      <div className="app">
            <Child name={name} name2={arr} name3={obj} name4 = {boo} name5 = {int} />
      </div>
    )
}

```

- Child.js Code 

```
const child = (props) => {
    return (
        <div>
            <h1>Hello {props.name}</h1>
            <h1>Hello {props.name2[0]}</h1> 
            <h1>Hello {props.name3.a}</h1> 
            <h1>Hello {props.name4}</h1> 
            <h1>Hello {props.name5}</h1> 
        </div>
    )
}

```

# destructure props | 2 ways you can do like this 

- take this code as ideal

```
- App.js Code


const App = () => {
    const name = "rahul"
    const arr = ["vikki", "manku"]
    const obj = {a: "sonal",b:"monal"}
    const boo = "true"
    const int = 5
    return (
      <div className="app">
            <Child name={name} name2={arr} name3={obj} name4 = {boo} name5 = {int} />
      </div>
    )
}



- Child.js Code 


const child = (props) => {
    return (
        <div>
            <h1>Hello {props.name}</h1>
            <h1>Hello {props.name2[0]}</h1> 
            <h1>Hello {props.name3.a}</h1> 
            <h1>Hello {props.name4}</h1> 
            <h1>Hello {props.name5}</h1> 
        </div>
    )
}

```

## 1 - chnage props in parameter to replace with you child elements key
```
const child = ({name,name2,name3,name4,name5}) => {
    return (
        <div>
            <h1>Hello {name}</h1>
            <h1>Hello {name2[0]}</h1> 
            <h1>Hello {name3.a}</h1> 
            <h1>Hello {name4}</h1> 
            <h1>Hello {name5}</h1> 
        </div>
    )
}
```
## 2 - chnage in the function of app and key = props

```
const child = (props) => {
    const {name,name2,name3,name4,name5} = props
    return (
        <div>
            <h1>Hello {name}</h1>
            <h1>Hello {name2[0]}</h1> 
            <h1>Hello {name3.b}</h1> 
            <h1>Hello {name4}</h1> 
            <h1>Hello {name5}</h1> 
        </div>
```

# 7

- in puma project we use props let see one level optimize on this project

- hero.js code file(child)

```
import React from "react";
import "./Hero.css";


const Hero = ({title,price,img}) => {
    return (
 <div className="hero">       
            <div className="one">      
                <div className="shoesPic">
                    <img src={img} alt="shoes" style={{ width: "350px" }}/>
                </div>   
                 <div className="shoesDetails">
                    <p>{title}</p>
                    <p>{price}</p>
                </div> 
            </div>
 </div>
    )
}

export default Hero;


```
- App.js code file(parent)

```
import React from "react";
import "../src/App.css"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Footer from "./Components/Footer"
import shoes from "./Assests/shoes.avif"
import shoes1 from "./Assests/Shoes1.avif"
import shoes2 from "./Assests/Shoes2.avif"
import shoes3 from "./Assests/Shoes3.avif"


const App = () => {
    return (
      <div>
        <Header />
              <div>
                <h2>Recommand For You</h2>
              </div>
        <div  style={{  display: "flex" ,justifyContent: "space-between", padding: "30px"   }}>
            <Hero title="Unisex Sneakers" price="2000" img={shoes} />
            <Hero title="MEN Sneakers" price="4000"  img={shoes1} />
            <Hero title="WOMEN Sneakers" price="5000" img={shoes2}/>
            <Hero title="CHILDREAN Sneakers" price="6000" img={shoes3}/>
        </div>
        <Footer /> 
      </div>
    )
}

export default App;

```

# 8

- the correct way of writing props in the Parent means here our "App.js" is after the function  and then get and to put into to the child according to the their element

- so for the different card price,img and title we have created data of array (array of object)

- so write all title ,price and img and then get that data and put at ur element just like this

```

const App = () => {

  const data = [
    { title: "Unisex Sneakers", price: 2000, img: shoes },
    { title: "MEN Sneakers", price: 4000, img: shoes1 },
    { title: "WOMEN Sneakers", price: 5000, img: shoes2 },
    { title: "CHILDREAN Sneakers", price: 6000, img: shoes3 }
  ]

  return (
    <div>
      <Header />
      <div>
        <h2>Recommand For You</h2>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "30px" }}>
        <Hero title={data[0].title} price={data[0].price} img={data[0].img} />
        <Hero title={data[1].title} price={data[1].price} img={data[1].img} />
        <Hero title={data[2].title} price={data[2].price} img={data[2].img} />
        <Hero title={data[3].title} price={data[3].price} img={data[3].img} />
      </div>
      <Footer />
    </div>
  )
}

export default App;

```

also we can write this data with the help of map too

# 9

let do with the map method to very easy way of this 

## what is map mathod

- map method is  used for creating a new array from exisiting one

```
const num = [2,3,5,6];

const newNum = num.map((element,index)=>{
    return(
        console.log(element*2,index) // given a array individual count * 2 and index
    )
})


```
- same as the above num array is equals to our data array

- num === data so just like num.map() we use data.map()

- whenever any method we run in main div of parent always there will be {} curly bracket

- first witout map method we derived data like this

```
      <div style={{ display: "flex", justifyContent: "space-between", padding: "30px" }}>
        <Hero title={data[0].title} price={data[0].price} img={data[0].img} />
        <Hero title={data[1].title} price={data[1].price} img={data[1].img} />
        <Hero title={data[2].title} price={data[2].price} img={data[2].img} />
        <Hero title={data[3].title} price={data[3].price} img={data[3].img} /> 
      </div>

```

- after using map method our data drived with like that

```
 <div style={{ display: "flex", justifyContent: "space-between", padding: "30px" }}>
        {
          data.map((el) => {
            return (
              <Hero title={el.title} price={el.price} img={el.img} />
            )
          })
        }
</div>
```

# Summery Of Props

## 1st WAY

```
  return (
    <div className="App">
      <Header />
      <div className="Hero-Combine">
        <Hero heading="Men Sneakers" img={Trigger} descreption="Trigger for Men" price="500$" />
        <Hero heading="women Sneakers" img={Ferrari} descreption="Ferrari for Women" price="600$" />
        <Hero heading="kids Sneakers" img={Flair2} descreption="Flair2 for Men" price="700$" />
        <Hero heading="Boys Sneakers" img={Flair22} descreption="Flair22 for Men" price="800$" />
        <Hero heading="Unisex Sneakers" img={Incinerate} descreption="Incinerate for Men" price="900$" />
        <Hero heading="Oldest Sneakers" img={Redon} descreption="Redon for Men" price="1000$" />
        <Hero heading="Streetwwar Sneakers" img={SOFTRIDEEnzo} descreption="SOFTRIDEEnzo for Men" price="1100$" />
        <Hero heading="Causual Sneakers" img={SOFTRIDE} descreption="SOFTRIDE for Men" price="1500$" />
      </div>
    </div>
  )
}
```
## 2nd Way
```
const data = [
    { heading: "Men Sneakers", img: Trigger, descreption: "Trigger for Men", price: "500$" },
    { heading: "women Sneakers", img: Ferrari, descreption: "Ferrari for Women", price: "600$" },
    { heading: "kids Sneakers", img: Flair2, descreption: "Flair2 for Men", price: "700$" },
    { heading: "Boys Sneakers", img: Flair22, descreption: "Flair22 for Men", price: "800$" },
    { heading: "Unisex Sneakers", img: Incinerate, descreption: "Incinerate for Men", price: "900$" },
    { heading: "Oldest Sneakers", img: Redon, descreption: "Redon for Men", price: "1000$" },
    { heading: "Streetwwar Sneakers", img: SOFTRIDEEnzo, descreption: "SOFTRIDEEnzo for Men", price: "1100$" },
    { heading: "Causual Sneakers", img: SOFTRIDE, descreption: "SOFTRIDE for Men", price: "1500$" }
  ]
 return (
 <div className="App">
   <Header />
   <div className="Hero-Combine">
     <Hero heading={data[0].heading} img={data[0].img} descreption={data[0].descreption} price={data[0].price} />
     <Hero heading={data[1].heading} img={data[1].img} descreption={data[1].descreption} price={data[1].price} />
     <Hero heading={data[2].heading} img={data[2].img} descreption={data[2].descreption} price={data[2].price} />
    <Hero heading={data[3].heading} img={data[3].img} descreption={data[3].descreption} price={data[3].price} />
     <Hero heading={data[4].heading} img={data[4].img} descreption={data[4].descreption} price={data[4].price} />
    <Hero heading={data[5].heading} img={data[5].img} descreption={data[5].descreption} price={data[5].price} />
     <Hero heading={data[6].heading} img={data[6].img} descreption={data[6].descreption} price={data[6].price} />
     <Hero heading={data[7].heading} img={data[7].img} descreption={data[7].descreption} price={data[7].price} />
   </div>
 </div>
   )
 }

```

## 3rd Way

```

 const data = [
    { heading: "Men Sneakers", img: Trigger, descreption: "Trigger for Men", price: "500$" },
    { heading: "women Sneakers", img: Ferrari, descreption: "Ferrari for Women", price: "600$" },
    { heading: "kids Sneakers", img: Flair2, descreption: "Flair2 for Men", price: "700$" },
    { heading: "Boys Sneakers", img: Flair22, descreption: "Flair22 for Men", price: "800$" },
    { heading: "Unisex Sneakers", img: Incinerate, descreption: "Incinerate for Men", price: "900$" },
    { heading: "Oldest Sneakers", img: Redon, descreption: "Redon for Men", price: "1000$" },
    { heading: "Streetwwar Sneakers", img: SOFTRIDEEnzo, descreption: "SOFTRIDEEnzo for Men", price: "1100$" },
    { heading: "Causual Sneakers", img: SOFTRIDE, descreption: "SOFTRIDE for Men", price: "1500$" }
  ]

  return (
    <div className="App">
      <Header />
      <div className="Hero-Combine">
        {
          data.map((el) => {
            return (
              <Hero heading={el.heading} img={el.img} descreption={el.descreption} price={el.price} />
            )
          })
        }
      </div>
    </div>
  )
}


```
- THERE IS ONE TOPIC OF PROPS DRILLING WE TALK ABOUT LATTER.

# 10 

# Hooks 

- Hooks and props are the 2 main thing in react. this most used in react

- hooks is normal js function.which is provided by react to handle state management.

- class componenet have life cycle to maintain state.but in function componenet there are not so for that we have
  hooks for the function component

## what is state?

- The state is a built-in React object that is used to contain data or information about the component.
-  A component's state can change over time; whenever it changes, the component re-renders.
- IN React there are many states but the main Two is

- 1. useState
- 2. useEffect(80%)
- 3. useRef
- 4. useMemo

- in react we can't chnage the variable directly in UI that's why use Hooks

```
const Hooks = () => {
    let x = 5;
    function handleNumber() {
        x = x + 1;
        console.log("click me", x)
    }
    return (
        <div>
            <h1>Mech Code</h1>
            <p>Number {x}</p>
            <button onClick={handleNumber}>ADD</button>
        </div>
    )
}

```

- HOOKS SOME RULE

1. hooks is top level of function componenet

2. hooks also be import but where is the export of hooks so that store in node modules

3. do not call inside loops,conditional statements, nested function

4. must be written inside function componenet

# States

- IN sIMPLE WORDS : 
- ITS USE FOR THE DIFFEREENT ATTRIBUTES 
- BY THE CHANGE OF ATTRIBUTES WE HAVE SHOWN DATA AND ANIMATION AND THAT FOR THE CHNAGING DIFFERENT ATTRIBUTES NEED
- FOR THAT WE USE DIFFERENT STATES FOR THE CHANGE IN ATTRIBUTES

- so as above we can see in console that all thing work great but UI does not chnage
- state is js object  that holds some information of component that may be chnage over time
- whenever the state of an object chnages,React re-render the component
- props are immutable. 
- i.e. : once set the props can not be chnaged.while state is an observable object that is used to be hold data
  that may chnage chnage overtime

# useStates

- it returns =>  1.current Value || 2. function()

- for chnages in value we use function

- there is always intial value which is written in useState()

- we store useState() in a variable

- this how i import the state

```
import React from "react";
import { useState, React } from "react";

```

### this is how intial and behind the scene our hooks and state are

```

import { useState, React } from "react";

const Hooks = () => {

    const counterStateVaribale = useState(5)
    // counterStateVaribale[0] = counter;
    // counterStateVaribale[1] = setCounter
    function handleNumber() {
        counterStateVaribale[1](counterStateVaribale[0] + 1)
    }

    return (
        <div>
            <h1>Mech Code</h1>
            <p>Number {counterStateVaribale[0]}</p>
            <button onClick={handleNumber}>ADD</button>
        </div>
    )
}

```

### then actual we use "useState" and "Hooks" in code like this

```
import { useState, React } from "react";

const Hooks = () => {

    const [counter, setCounter] = useState(5)
    function handleNumber() {
        setCounter(counter + 1)
    }

    return (
        <div>
            <h1>Mech Code</h1>
            <p>Number {counter}</p>
            <button onClick={handleNumber}>ADD</button>
        </div>
    )
    
}
export default Hooks

```

# 10th project/program
## now lets make a program which have functionality of like this

1. add Number with on button click
2. chnage name with on button click
3. minus the number till 0 and then back to the intial number which is 5

```
import { useState, React } from "react";
import "./Hooks.css";

const Hooks = () => {

    const [counter, setCounter] = useState(5)

    const [name, setName] = useState("Mech Code")

    function handleAdd() {
        setCounter(counter + 1)
    }

    function handleMinus() {
        setCounter(counter - 1)
        if (counter - 1 == -1) {
            setCounter(5)
        }
    }

    function handleChnage() {
        setName("webdevdj")
        if (name === "webdevdj") {
            setName("Mech Code")
        }
    }
    
    return (
        <div className="Hooks">
            <h1>{name}</h1>
            <p>Number {counter}</p>
            <div className="btns">
                <button onClick={handleAdd}>ADD</button>
                <button onClick={handleMinus}>Minus</button>
                <button onClick={handleChnage}>NameChnage</button>
            </div>
        </div>
    )

}


```

# 11

# 11th project/program(Temprature color chnage)

- there is also Temp.js Folder check it out 

- there is also Temp.css Folder check it out 

# 12th UseState with Array and object

- for that you have to learn one Spread Object in array & object

```
let arr1 = [1,2,3,4,5];

//add 23,25,6

let arr2 = [...arr1,23,25,6]

=> arr2 = 1,2,3,4,5,23,25,6

```

```
let obj = {
  name:"dipesh",
  age:23,
  phine:982564646
}

let obj2 = {...obj,age:33,name:"sunita"}

=> obj2 = name:sunita,age:33,phine:982564646

```

- for the use of Hook when the data or currvalue is array

```
const Hook = () => {
    const [Number, setNumber] = useState([2, 5, 6, 4]); //1,3,7


    function handleAdd() {
        setNumber([...Number, 1, 3, 7])
    }

    return (
        <div>
            <p>Number {Number}</p>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

```

- so when click happen in Add button handleAdd functipon call and old array + new number add 

- here if you see then with spread operator which is an array [] spread the array from currvalue and join with 1,3,7

- with the help of setNumber Function

- here we can add array like this too 

```
const Hook = () => {
    const [Number, setNumber] = useState([2, 5, 6, 4]);

        //OR

const Hook = () => {
  const num = [2,5,6,4]
    const [Number, setNumber] = useState(num);

```


- with object type of data we use hook like this

```

const Hook = () => {

    const [data, setData] = useState({ name: 'dipesh', age: 23 })
    function addChnage() {
        setData({ ...data, name: "param", age: 26 })
    }

    return (
            <div>
                <p>my name is {data.name} and my age is {data.age} </p>
                <button onClick={addChnage}>Add</button>
            </div>
    )

}

```

- now you get how the things is working  how import the #Spread Operator is imp.

- let see array of object in this code

```

const Hook = () => {

    const [data, setData] = useState([
      { name: 'dipesh', age: 23 },
      { name: 'xxxx', age: 38 },
      { name: 'pppp', age: 52 },
      ])

    function addChnage() {
        setData({ ...data, name: "param", age: 26 })
    }

    return (
            <div>
                <p>my name is {data[1].name} and my age is {data[0].age} </p>
                <button onClick={addChnage}>Add</button>
            </div>
    )

}

```

- now see ternary operator

```
let age = 18;
//(condition)?true:false
(age>18)?console.log("you can vote"):console.log("you can not vote")

```
- we see number ,string,array,object,boolean in hooks means in State

- last is Boolean

# main code and concept of the ep-12

```
const Hook = () => {
    const [Number, setNumber] = useState([2, 5, 6, 4]); //1,3,7

    const [data, setData] = useState({ name: 'dipesh', age: 23 })

    const [attribute, setAttribute] = useState(false)


    function handleAdd() {
        setNumber([...Number, 1, 3, 7])
    }

    function addChnage() {
        setData({ ...data, name: "param", age: 26 })
    }

    function Bool() {
        setAttribute(!attribute);
    }

    return (
        <div>

            {/* Array WITH HOOKS */}
            <div>
                <p>Number {Number}</p>
                <button onClick={handleAdd}>Add</button>
            </div>

            {/* OBJECT WITH HOOKS */}
            <div>
                <p>my name is {data.name} and my age is {data.age} </p>
                <button onClick={addChnage}>Add</button>
            </div>

            {/* true or false */}
            <div>
                <p>{attribute ? "dipesh" : "pppp"} </p>
                <button onClick={Bool}>Add</button>
            </div>

        </div>
    )
}

```

# EP-13

# Product list Project, Filter 

- get the array of object dummy data from google from website like

- url link : "https://dummyjson.com/carts" (dummy array of object)

- then use on "map method" and made a structure who gives this plenty of card item 

- we have waring comes that whenever you use map method you have to given one unique why lets understand this

- for the identify all the item uniquley with key

- for the cart element have id  and id always have unique .if product has no id then gives index otherwise its always a id.

- now for the buitl of filteration we have to know filter method in js for that

## filter

```

const num = [2,3,4,7,8,5,6,9]

const numberfilter = num.filter((number)=>{
        return(
            number<4
        )
})

console.log(numberfilter) //[5,6,7,8,9]

```

- 1. to here make filter option we target price and for the show any filteration UI.

- 2. WE HAVE TO CHNAGE UI AND FOR THAT any UI updation or deletion we have useState()

- 3. as per usestate have mention after array of object and also usestate currvalue is data

- 4.  data means array of object  now whatever chnages happen so we have to map data with currvalue 
      so chnage like this

      ```
         data.map((product) => {

            to

         ProductItem.map((product) => {

      ```

- 5. we send data array of object in different file and then export and import in product.js file

```

import { React, useState } from 'react'
import "./product.css"
import Data from "./Data/Data.js";

const Products = () => {

    const [productItem, setProductItem] = useState(Data)

    const handleFilter = () => {
        const filterItem = productItem.filter((item) => {
            return (
                item.price > 100
            )
        })
        setProductItem(filterItem)
    }


    return (
        <div>
            <p className='filter' onClick={handleFilter}>Filter by Price</p>

            <div className='cart'>
                {
                    productItem.map((product) => {
                        return (

                            <div className='product' key={product.id}>
                                <div className='product-image'>
                                    <img src={product.thumbnail} alt="" />
                                </div>

                                <div className="product-details">
                                    <p className="product-title">{product.title}</p>
                                    <p className="product-price">₹{product.price}</p>
                                </div>
                                <button>Add</button>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products

```

# 14 | Virtual Dom, Reconciliation 

- whenever the html element render browser render a  a tree like structure

- dom is tree like structure which will be help for the adding,selecting or creating new content 

- with DOM we can select and make behviorial changes

### React DOM

- in react there is 2 things is like react and reactDOM

- 1. React :

- react is all about componment,state,props,context api

- if u have to deal with this much things then ur dependecy with the react 

- comopnent make ,props make ,play with context api

- 2. React DOM

- the chnage in Ui with the correct data by clicking some button or some event happen with UI

- thats the work done by react DOM-> screen chnages

- in application (react native do this thing)

- How the Ui chnages thats happen let see behind the scene

- Real Dom -----CARBON COPY-----> Virtualdom ---------Update-------->Virtual Dom Updation(curent dom)

- so what the real dom have and thats same copy make by virtual Dom 

- after the updation active virtual dom updation copy make which is called current dom and send back to real dom to 
show the updation by users

- here the technique between virtual dom and current  chnages find is called the Reconciliation 

- the difference is called diffing process

## what is virtual Dom?

- its a copy or you can say its carbon copy of real or actual DOM.when you make any chnages to a component or the state of react application,react create a new virtual DOM.

- then it compares this updated virtual dom with previous one to identify the specific chnage that occured.

- once it determines the difference(knowing as a "diffing" process) finally only those specific chnage are applied to the realDom

## what is Reconcilliation?

- process of comnparing current virtualDom with the previous one.and identify the difference and updating the Real Dom is called Reconcilliation

# 15 | UseEffect | React

- Hooks allwos you to perform side effect in your function componenent.side effect like are fetching data.API Fetch,timer function(setTimeOut,setInterval),local 
storgae

- useEffect
- we also import this in above import files

- syntax
- there is callback function in the useEffect()
- the 2 parameter  callback function and depedency

```

 useEffect(()=>{
        console.log("tempratural statement" + temp)
})

```

- its run on the 2 activity

- 1. firstly when copmonenet render - refresh

- 2. secondly when copmonenet update - button click

- now let see what is dependecy,here its called array

- if you want to active only one time then put blank dependecy at the end of callback function

```
 useEffect(()=>{
        console.log("tempratural statement" + temp)
},[])

```

- you can chnage with some data with whom you run with it.

- means you can run the console.log when first render then second time when some data chnages happen 

- ex:when temp change

```
 useEffect(()=>{
        console.log("tempratural statement" + temp)
},[temp])

```

- ex:when color change

```
 useEffect(()=>{
        console.log("tempratural statement" + temp)
},[color])

```