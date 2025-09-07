const {readFile} = require('fs')

console.log('start the 1st task');
// CHECK THE FILE PATH
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log('completed 1st task');
})
console.log('starting next task');