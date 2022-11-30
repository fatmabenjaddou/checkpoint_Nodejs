const fs = require('fs')


fs.writeFile("welcome.txt"  , "Hello Node" , function(err){

if (err) {
    console.log("ERROR" , err)
    return;
}
console.log("SUCCESS")


}




)