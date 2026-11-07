import fs from "fs/promises"

let a = await fs.readFile("sunny.txt")
let b = await fs.appendFile("sunny.text", "\n\n\n\nthis is amazing promise")
console.log(a.toString(),b)