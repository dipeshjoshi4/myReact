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

2 things come up
- node_modules
- package-lock.json

for install react dom command
"npm i react-dom"

1 thing show up
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