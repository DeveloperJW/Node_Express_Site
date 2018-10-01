# Static Node.js and Express Site

Portfolio website built with Node.js and Express
- Purpose of this project: 

  - This project is created for the purpose of JavaScript Full Stack TechDegree - Unit 07 with TeamTreehouse. 
  
  - The app has been deployed to: [Click Here!](https://zhaopeng-wang.herokuapp.com/)
  
- Project Description:
  - For this project, 
    - you'll create a gorgeous portfolio site to showcase the great projects you've built.
    - create a JSON file to store all the data about the projects you've created.
    - use Pug to complete provided templates that utilize the JSON to generate the markup that is ultimately displayed in the browser.
    - You'll use Node.js and Express to:
        - Import the required dependencies
        - Link the JSON with the Pug templates
        - Set up routes to handle requests
        - Set up the middleware to utilize static files like CSS
        - Handle errors
        - Set up a server to serve the project

## Getting Started

Clone this repo or download as zip file to your local computer.

### Prerequisites

You need to have npm and Node.js installed, 
to check if those are installed at your computer, use the following commands

```
npm -v
v8.11.3

npm -v
5.6.0
```

### Installing

A step by step series of examples that tell you how to get a development env running

To install dependencies and node modules

```
npm install
```

to start the project

```
npm start
```



## Built With

* [Node](http://www.dropwizard.io/1.0.2/docs/) - 
* [Express](https://maven.apache.org/) - The web framework used


## Authors

* **Zhaopeng Wang** - *Initial work* - [DeveloperJW](https://github.com/DeveloperJW)


Extra Credit:
-
- Set up your package.json file so that running npm start will run the app.
    - Installed opn-cli for cross platform browser open and start app.js     
- Use error handling middleware to render a Pug template
    
- Customize the style
    - In public/css/foundation.css Changed the background color of body from white to #FAEBD7 which is a more friendly color
    - In public/css/style.css Changed the font family from font-family: 'Merriweather', serif to font-family: 'Open Sans', sans-serif;
    - Added Animate.css to the project and apply effects to h1 elements in each page;
    add bounce effect when user hover on projects at front page
    - Added logo to home page.
    - Added website favicon
