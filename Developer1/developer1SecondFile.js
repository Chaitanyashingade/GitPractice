function outer(){
    let count=0;
    function inner(){
        let res =count++;
        console.log(res);
        

    }
    return inner


}
let counter=outer()
counter()
counter()
counter()