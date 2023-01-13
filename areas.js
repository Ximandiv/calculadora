function aCuad(){
    var nUnoAC = parseInt(document.getElementById("ac1").value);
    resACuad = nUnoAC**2
    document.getElementById("resultadoACuad").textContent = resACuad;
}

function aCir(){
    var nUnoACir = parseInt(document.getElementById("acr1").value);
    resACir = 3.14159265359 * (nUnoACir**2)
    document.getElementById("resultadoACir").textContent = resACir;
}

function aRect(){
    var nUnoRect = parseInt(document.getElementById("ar1").value);
    var nDosRect = parseInt(document.getElementById("ar2").value);
    resARect = nUnoRect * nDosRect
    document.getElementById("resultadoARect").textContent = resARect
}

function aRom(){
    var nUnoRom = parseInt(document.getElementById("arom1").value);
    var nDosRom = parseInt(document.getElementById("arom2").value);
    resARom = (nUnoRom * nDosRom) / 2
    document.getElementById("resultadoARom").textContent = resARom
}