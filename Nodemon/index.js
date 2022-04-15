console.log(__dirname);
console.log(__filename);

// It's Private Code   
(function(exports,require,module,__dirname,__filename){
    const a    = require("fs");
    const name = "vinod";
    console.log(name);
    module.exports = {}
})



