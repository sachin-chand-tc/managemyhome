##Run Backend

`cd udaan`
`npm install`
`npm run dev`

##Run Frontend (from directory)

`cd client`
`npm install`
`npm start`

##Run Database Server (mongodb)

`/home/crownedlake/mongodb/bin/mongod --dbpath=/home/crownedlake/mongodb-data`

here "crownedlake" is the current system (linux) user and `/home/crownedlake/mongodb/bin/mongod` is the path of extracted mongodb setup downloadable at [https://www.mongodb.com/download-center/community] and 
 `--dbpath=/home/crownedlake/mongodb-data` is the path where I want to store my db data.

 #Default PORTS
 backend - 8000
 frontend - 3000
 mongodb - 27017
 
 make sure you are running in these ports 

 #Testing
 I have tested all the apis with postman (screenshot atttached)
