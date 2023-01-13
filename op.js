function suma(){
    var nUnoSuma = parseInt(document.getElementById("sum1").value);
    var nDosSuma = parseInt(document.getElementById("sum2").value);
    resSuma = nUnoSuma+nDosSuma
    document.getElementById("resultadoSuma").textContent = resSuma;
}

function resta(){
    var nUnoResta = parseInt(document.getElementById("res1").value);
    var nDosResta =parseInt(document.getElementById("res2").value);
    resResta = nUnoResta-nDosResta
    document.getElementById("resultadoResta").textContent = resResta;
}

function mult(){
    var nUnoMult = parseInt(document.getElementById("mult1").value);
    var nDosMult = parseInt(document.getElementById("mult2").value);
    resMult = nUnoMult*nDosMult
    document.getElementById("resultadoMult").textContent = resMult;
}

function div(){
    var nUnoDiv = parseInt(document.getElementById("div1").value);
    var nDosDiv = parseInt(document.getElementById("div2").value);
    resDiv = nUnoDiv/nDosDiv
    document.getElementById("resultadoDiv").textContent = resDiv;
}
