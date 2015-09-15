This app is a work in progress.

I am creating a web app that will allow users to create and edit notes. This app
is backed by a Mongo database and includes a RESTful API as well as Mocha/Chai
tests.

The Mongo DB and RESTful statements are complete.  I have yet to create an HTML
page. Also, the Chai tests don't yet work as expected (they don't work out of a
separate DB).

Current functionality:

Starting:
1) Create a database in route (I created /db)
2) Run Mongo with: mongod --dbpath./db --smallfiles
3) node server.js

REST: (commands with superagent-cli)
get-  superagent localhost:3000/api/vi/notes
post- superagent localhost:3000/api/vi/notes post {noteBody: "'some note'"}
put- superagent localhost:3000/api/vi/notes/[id of note] put {noteBody: "'a note'"}
delete- superagent localhost:3000/api/vi/notes/[id of note] delete
