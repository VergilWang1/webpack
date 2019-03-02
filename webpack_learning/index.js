import printMe from "./print.js";
console.log("ok");
if(module.hot){
    module.hot.accept('./print.js', function() {
        onsole.log('Accepting the updated printMe module!');
        printMe();
    })
}