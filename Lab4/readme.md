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