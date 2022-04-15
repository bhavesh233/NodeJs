var a = "hello guys ... "


function first(){

    var b = "how are you ... ";
    second();

    function second(){
        var c = "Myself ... ";
        console.log(a+b+c);  // check first a is scope or not then check parent scope then takes globle scope
        three();        
    }

}


function three(){
    d = "Varible d ... "
   // console.log(a+b+c+d); // ReferenceError bc b is not defined
}

first()


