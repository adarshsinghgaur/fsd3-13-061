localhost -URL
127.0.0.1 -IP address

control+c for stop the server
every request from client have a pair of {request,response}
npm = node package manager 
## Node Pacakage Manager 
used to install,run,unstall ant program/project and pacakage 
-npm install <pacakageName>
-npm unistall<pacckageName>
to use npm,the project must be npm project,
to create npm project we can
-npm init -y
-it creates a package.json file automatically 
pacakage.json holds all the information realted to intall
pacakage form npm
- update package.json, set type = 'module'
-it also create a folder node_modules automatically
-node_modules holds the pacakage/library files
-generally we ignore the node_module by .gitignore
Nodemon- it restart the server automatically when file is changes,to install
>npm i nodemon -D
Note: -D flag will install this packages as developer dependency
- to execute any program ,update the package.json file them start the server as
<b>npm run dev</b>
-start -> it will execute the app on deployment 
-dev -> it will start server in development phase (only for developer)
-res: it will return contents (json/html/plain) to the user/clint
-req: it will retrive the information from client to the server
-server send also statuscodes to the client , that indicates the error /success message 
## Status Codes 
-200 ->Ok
-201 ->Created 
-400 -> Badrequest
-404 -> Not found 
-403 -> forbidden 
-500 -> nternal Server Error

## Content Type
- text/plain
- text/html
- application/json
- text/css
the content type and status code can be send back to clint by two ways 
1. res.writehead
2. res.setheader
3. res.statusCode
## send html file to client 
## response as html content
1. html file
    - read html file using  createreadStream
    -pipe it with res object 
2. html content
    -send any html tags/content by using 
    -res.end('<any html tag'>)
## json
server returns data only .html content becuse html contain will be written by content developer.
the data is in json formate 
json always store data in key, value pair enclosed by {}
array can be stored by []
one pair of {} curly brckates will represent one object and it property will be separted by , 
''' 
{
    id:1,
    name:'mobile',
    price:25000,
    rating:4.5,
    reviews:200
}
'''
## Headers
 - is used to tell the client, the type of data sent by the server.It may be html files, JSON data, plain text file, CSS any tokens(for login)

1. text/plain -> text file
2. text/html -> html contents/file
3. application/json -> json contents/file
4. text/css -> stylesheet
5. application/form-data -> for uploading file
6. application/auth -> for tokens

the headers can be set by res object at server side by
two ways

res.setHeader
res.write