function printSomething(){
    console.log("I am global");
    console.log("I am here : ", __dirname + " and my name is " + __filename);
}

setTimeout(printSomething,1000); // will print after delay of 1000 msec