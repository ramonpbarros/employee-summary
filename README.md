# Employee Summary
> Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person.

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
Software engineering team generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user.

## Screenshots
![Example screenshot](./Assets/project.gif)

## Technologies
* Node.js
* Jest
* JavaScript
* CSS 3
* HTML 5

## Setup
This application runs in the terminal. Make sure to `npm install` dependencies!

Repository can be found here: [GitHub/ramonpbarros](https://github.com/ramonpbarros/employee-summary) Make sure to git clone and check out the code!

## Code Examples
Show examples of usage:
`function writeFile() {fsWriteFile(outputPath, render(employeesArray)).then(() => {console.log("Done writting file!")}).catch(error => {throw error;})}`

## Features
List of features:
* Use of fs module to prompt the user.
* Dynamically genarate a HTML file.

To-do list:
* Improve design.
* Add diferent teams.

## Status
Project is: _in progress_
* Check the application in the terminal. The application will be invoked with the following command: `node app.js`

## Inspiration
Project inspired by UCSD Coding Bootcamp, based on second month of course, applying node.js, Jest testing and JavaScript skills.

## Contact
Created by [@ramonpbarros](https://github.com/ramonpbarros) - feel free to contact me!