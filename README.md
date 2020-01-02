# siteViews-counter
visits counter to a website using Express.js, MongoDb
==========================================================

Website visits Counter can be a vital way to analyze the trafiic that your ebsite encounters.


although you can accsess your website statistics with the built-in functions and data that your service provider gives to you, it still a good practice to show your coustomers the amount of traffic that reaches to your website.
you can show the number of visits to every single page in your website, but I am going to keep things simple and implement a visit counter for the index page only, and I am going mention how to expand this counter to other pages.
this toturial suppose that you have got Node, MongoDb installed on your machine, otherwise just google the and install them on your machine.
first things first, let’s talk a bit about the technologies that we are going to use in this project. we need to use:
1- Express-Generator: a server to do your logic.
2-MongoDb: for data storing.
3-Mongoose: for interacting between the server and database.
4-EJS Embedded JavaScript templating: for fetching the data from your database and show them in your views.
![our package.json file](https://thepracticaldev.s3.amazonaws.com/i/bphnuqt6t6f0htlj47me.png)


1- installing express-generator:
Express Generator is a quick way to scaffold your App and buiuld it’s skeleton.
we are going to install express-generator using this command:

install express-generator
this command will install the generator globally so can use it in any folder. now make a new folder and call it what ever you want , and then open it in a termenal and type “express” and then type “npm install” so all the default libraries will be installed automaticly , and then you’ve got your App scaffolded as shown on the photo:

your App skeleton
2- Installing mongoose :
in your terminal just type “npm install mongoose”, and you will notice that mongoose have been added to your package.json
3-Connecting Mongoose to your Database:
first we need to create new mongoose model, which is a form of represnting a MongoDb collection on your code.
open a new terminal and type “mongod” → this command will switch on your MongoDb server and you have to keep it up and runnig while you work, you will get a lot of text as shown on the photo :

terminal after you type mongod indicates that mongoDb server is up and running
now, keep that terminal running and go to your code, let us make a new directory and call it models, then create a new file and call it “visits.js” and type the following code in it:

visits.js
in this file we required mongoose so we can acsess the functionality of this library and one of them is Schema whitch defines the structure of the new collection that we will create whitch can be acsessed by calling the model in our code. then we export visits.js
now open a new termenal and type “mongo”, type “use confusion” → this command will create a new database if it not existed and then will use it on the terminal shell .. now type ..

create a new collection
then insert a new document inside ‘visits’ collections and show them using this commands:

save that id because we are going to use it later.then we are going to make a new direction inside our App directory called src/visitsUp.js and then we create a file called visitsUp.js and put the following code inside it:

visitsUp.js
in this file we have defined a function called sitevisitsUp that will use the mongoose findByIdAndUpdate function to update the visit counter property inside our database. we used the _id property of the document that we have created. and we use the mongoose expression $inc to increase the counter by one.
now lets go to routes/index.js and update it with the following code:

routes/index.js
in this code we have called the function siteViewsUp every time the server faces a get request. then we find this document and pass it’s counter property to render() function → this way we can acsess this value inside our index.ejs whitch will be rendered when we make a get request to main route (server/).
now, lets update our app.js file:
first, we need to connect our App to mongoDb server using mongoose.connect() function whitch takes the url for the database as an argument.

app.js
then we are going to change the views engine so we can render ejs files, which will be our next topic:

app.js
4- rendering EJS files:
EJS is a simple templating language that lets us generate HTML markup with plain JavaScript. so It’s just plain JavaScript.
in the terminal type “npm install ejs”, so you can use it.
lets go to viewsfolder and make a new file views/index.ejs and type the following code:

index.ejs
the way the ejs files work is that you pass data as an object inside your render() method , and then you can acsess this data by typing js code inside <%= %> tag while the rest of the document is palin html.
now type “npm start” to start your server then go to http://localhost:3000/ you will find somethimg like this:

http://localhost:3000/
each time you refresh the page the counter will increases automaticlly.
Now you have implemented a visit counter for index page , in order to expand this to other pages you have many ideas one of them is to add another field in your database so you can use different counter for each page and that’s why I have implemented siteViewsUp in a seprate file so you can import it when needed.
I am going to write another post for different counters in the future.

