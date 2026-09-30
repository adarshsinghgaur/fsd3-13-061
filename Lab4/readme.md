# Express

1. create project folder
2. goto project and open terminal
3. execute 'npm init -y'
4. install 'npm i nodemon -D'
5. install 'npm i express'
6. Open package.json
    a. change 'type: module'
    b.update script{
        "start":"node prg1.js",
        "dev":"nodemon prg1.js"
    }
7. create prg1.js in folder
8. add folderName/node_modules in .gitignore
9. send function(res.send) is used to revert back contents to the client it may be html,
 json, html file, plain text
10. we can also add status code with status function (res.status) it can be chain
 with send function

## Map
this function is used to iterate any array it must return new array
```
array.map((item)=>{
    return
})
array.map((item)=>())
```
in syntax 1 we have to use explicit return function  whereas not required in 2nd syntax
2. exclude no. of properties from any json object
```
const {p1,p2,...rest}=product;
log(rest);
```
3. sreach- to search any item in json array we use find method it will return NULL on unsuccessfull or object on successfull
```
array.find((item)=> item.id===id);
```