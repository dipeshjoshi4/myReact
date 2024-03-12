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
-in reactjs whteevr the dependecy you install that all are store in node-modules
- in real-project there is so much dependecy inso so much file store is node_modules
-we dont give that file in production so for that we use to .gitignore and make it ignore this files

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
import React from 'react';
import { ReactDOM } from 'react-dom';

comes from node_modules





# what is the difference between package.json and package-lock.json?


>
