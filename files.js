const fs = require('fs');
// readingfiles
fs.readFile('./docs/blog1.txt', (err, data) =>{
if(err){
    console.log(err);
}
console.log(data.toString());

});

console.log('last line');


// writingfiles
// editing existing files/
fs.writeFile('./docs/blog1.txt', 'Hellow Muturi', () => {
    console.log('file was writtten');
} );

// creating new file
fs.writeFile('./docs/blog2.txt', 'Hellow Muturi', () => {
    console.log('file was writtten');
} )

// directories
if (!fs.existsSync('./assets')){
fs.mkdir('./assets', (err) =>{
    if(err) {
        console.log(err);
    }
    console.log('folder created');
} );
}
// } else {
//     fs.rmdir('./assets', (err) =>{
//         if(err){
//             console.log(err)
//         }
//         console.log('folder deleted');
//     })
// }


// deleting files

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err){
            console.log(err)
        }
        console.log('file deleted')
    })
}