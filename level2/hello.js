const fs = require("fs")

console.log(fs)

console.log("starting")
// fs.writeFileSync("sunny.txt", "Sunny is good not but bad boy")
fs.readFile("sunny2.txt", (error, data) => {
    if (error) {
        console.error(error)
        return
    }
    console.log(data.toString())
})

fs.appendFile("sunny.txt", "sunnyrobo", (e,d)=>{
    console.log(d)
})

console.log("ending")