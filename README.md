<div align="center">
<pre>
_____________________   _____  ____________________    ____________________                                                    
\______   \_   _____/  /  _  \ \_   ___ \__    ___/    \_   _____/\_   ___ \  ____   _____   _____   ___________   ____  ____  
 |       _/|    __)_  /  /_\  \/    \  \/ |    |        |    __)_ /    \  \/ /  _ \ /     \ /     \_/ __ \_  __ \_/ ___\/ __ \ 
 |    |   \|        \/    |    \     \____|    |        |        \\     \___(  <_> )  Y Y  \  Y Y  \  ___/|  | \/\  \__\  ___/ 
 |____|_  /_______  /\____|__  /\______  /|____|       /_______  / \______  /\____/|__|_|  /__|_|  /\___  >__|    \___  >___  >
        \/        \/         \/        \/                      \/         \/             \/      \/     \/            \/    \/ 
</pre>

# Welcome to the React E-Commerce Repository

This repository contains the code for a fully managed basic E-Commerce website powered by React 17.

<br />

![React Badge](https://img.shields.io/badge/-React-%2361DAFB?logo=react&logoColor=black&style=flat-square)
![Redux Badge](https://img.shields.io/badge/-Redux-%23764ABC?logo=redux&logoColor=white&style=flat-square)
![ReduxSaga Badge](https://img.shields.io/badge/-Redux%20Saga-%23999999?logo=redux-saga&logoColor=white&style=flat-square)
![Jest Badge](https://img.shields.io/badge/-Jest-%23C21325?logo=jest&logoColor=white&style=flat-square)
![Typescript Badge](https://img.shields.io/badge/-Typescript-%233178C6?logo=typescript&logoColor=white&style=flat-square)
![Sass Badge](https://img.shields.io/badge/-Sass-%23CC6699?logo=sass&logoColor=white&style=flat-square)
![Node Badge](https://img.shields.io/badge/-Node.js-%23339933?logo=node.js&logoColor=white&style=flat-square)

<br />

##### Created by Emanuele Moricci with ❤️ and 🍕

</div>

<br />
<br />

## Index

---

<h3>

1. [Why was it created](#why-was-it-created)
2. [How was it created](#how-was-it-created)
3. [Features](#features)
4. [License](#license)

</h3>
<br />

## Why was it created

---

This project was created to refresh my knowledge and stay up to date with the latest technologies, paradigms and trends regarding the React Eco-system.
<br />
<br />
The tools used in this project are summed up above, and are accompanied by other libraries&adjustments like styled-components, mobile friendly interface, PWA capabilities ecc...

<br />

## How was it created

---

The whole application was created by following the [ZeroToMastery React Course](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/).

I developed the app alongside the instructor, and added my own spin on it while coding to experiment on several features and patterns of the library, like hooks and typescript.

<br />

## Features

---

<br />

### 🤖 **_Full Typescript Solution_**

<p style=margin-left:20px>
The project is entirely written in Typescript, using strict rules to force the explicit typing of every variable while avoiding bad practices like the use of the 'any' type.
</p>

<br />

### 🪝 **_Entirely written with Func.Components + Hooks_**

<p style=margin-left:20px>
The solution is built using functional components, AKA re-usable functions that hold all the logic necessary to render the UI.
</p>
<p style=margin-left:20px>
The state held by every function is managed by the React Hooks, namely useState, useEffect and many others.
</p>
<p style=margin-left:20px>
Also, several libraries like Redux and React-Router offer their own hooks, which I used to trim down boilerplate code and offer a cleaner architecture.
</p>

<br />

### ⚛️ **_Redux Toolkit + Saga_**

<p style=margin-left:20px>
The chosen state-management library for this project is Redux. Specifically, Redux Toolkit, which is a set of tools that allow you to manage your Redux state in a declarative way, while removing a lot of boilerplate code.
</p>
<p style=margin-left:20px>
To accompany Redux Toolkit, I used Redux Saga, which is a library that allows you to manage asynchronous actions using the new Javascript Generator functions.
</p>

<br />

### 🤡 **_JEST testing (snapshots and shallow reducers)_**

<p style=margin-left:20px>
Testing is a very important part of any project, so I used Jest to manage the automated-testing flow of this app.
</p>
<p style=margin-left:20px>
The only tests added for now are Snapshot Testing (for every route), and a shallow state check for every written reducer.
</p>

<br />

### 💅🏽 **_Styled Components_**

<p style=margin-left:20px>
Every component is styled using the styled-components library, which is a library that allows you to create styles in a declarative way using Javascript/Typescript.
</p>

> You can find more info about it [here](https://www.styled-components.com/).

<br />

### 💸 **_Stripe API using NodeJS_**

<p style=margin-left:20px>
The E-Commerce platform checkout system is powered by the Stripe API, which is a payment gateway that allows you to accept credit card payments. The API is written in NodeJS, and is used to communicate with the Stripe API.
</p>
<p style=margin-left:20px>
The entire flow is managed to allow a user (authenticated or not) to manage items in a cart and then use a test credit card to simulate a checkout.
</p>

<br />

### 🔥 **_Firebase Managed Solution_**

<p style=margin-left:20px>
This React project is majorly a front-end solution, so to help with the backend side of things, I used Firebase.
</p>
<p style=margin-left:20px>
This service allowed me to manage users, products and carts all copupled with authentication, Google SSO and Database Rules without having to code a separate robust API from scratch.
</p>

> You can find more info about it [here](https://firebase.google.com/).

<br />

### ⚙️ **_'Progressive Web App' Enabled_**

<p style=margin-left:20px>
This application is configured with a registered service worker, robots.txt and managed manifest to allow users to download the application as a PWA.
</p>

<br />

## License

---

This project is licensed under the MIT license, Copyright (c) 2021 Emanuele Moricci. For more information see the `LICENSE` file.
