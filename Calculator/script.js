function clearScreen() {
    document.getElementById("screen").value = "";
}

function clearLast() {
    var val=document.getElementById("screen").value;
    document.getElementById("screen").value=val.slice(0,val.length - 1);
}

function screen(value) {
    document.getElementById("screen").value += value;
}

function calculate() {
    var p = document.getElementById("screen").value;
    var q = eval(p);
    document.getElementById("screen").value = q;
}

