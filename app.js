function getNumber(num){
    var exp= document.getElementById('getExp');
    exp.value+=num;
    
}

function clearResult(){
    var exp= document.getElementById('getExp');
    exp.value="";
    var res=document.getElementById('result');
    res.value="";
}

function getResult(){
    var exp= document.getElementById('getExp');
    var res=document.getElementById('result');
    res.value=eval(exp.value)
}