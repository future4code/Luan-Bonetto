const fs = require("fs")

let filesArray:number[] = []

fs.readdir('./src/textos', function(err:Error, files:Buffer){
    if(err){
        console.error(err)
        return
    }
    
    files.forEach(function(file:number){
        filesArray.push(file)
    })

    filesArray.forEach(function(file:number){
        fs.readFile(`./src/textos/${file}`, (err: Error, data:Buffer)=>{
            if(err) throw err
            const fileContent:string = data.toString()
             console.log(fileContent)
        })
    })

})

