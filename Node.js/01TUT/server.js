// node.js run on a server not on a browser

console.log('hello world');

const os=require('os'); // importing os module (commonJS)
const path=require('path');// importing path module
const math=require('./math') // exporting the self made functions

console.log(math.add(2,3))

console.log(os.type());
console.log(os.version()); // output windows version
console.log(os.homedir()); // output directory location -: A home directory is a file system directory on a multi-user operating system containing files for a given user of the system.

console.log(__dirname) // output the location of the file
console.log(__filename)// output the name of the file along with location

console.log(path.dirname(__filename)); // output directory loacation of the file name provided
console.log(path.basename(__filename)); // output the name of the file
console.log(path.extname(__filename)); // output the type/extension of file example js from server.js 
console.log(path.parse(__filename));//returns the object model of the file


