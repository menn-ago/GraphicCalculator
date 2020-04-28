var risultato = 0;
var a;
var b;
var o = 0;
var virgola = 0;
/*

Aggiungere calcoli a doppia cifra: Risolvere in SetA1. Risolto per variabile a, risolvere per b. Fatto

Creare variabile per la virgola, impostarla su 1 quando viene premuta e aggiungere if(VariabileVirgola = 1) nel SetAN allora a = a + n/10: Fatto.

Settare variabili e operazioni: Fatto

Aggiungere tasto di update e delete: Fatto
*/

// Funzionamento tasto "=":
function Update() {
    document.getElementById("risultato").value = risultato;

    if(o == "+") {
        risultato = a + b;
        document.getElementById("risultato").value = risultato;
        a = undefined;
        b = undefined;
        virgola = 0;
        o = 0;
    }

    if(o == "-") {
        risultato = a - b;
        document.getElementById("risultato").value = risultato;
        a = undefined;
        b = undefined;
        virgola = 0;
        o = 0;
    }

    if(o == "*") {
        risultato = a * b;
        document.getElementById("risultato").value = risultato;
        a = undefined;
        b = undefined;
        virgola = 0;
        o = 0;
    }

    if(o == "/") {
        if(b == 0) {
            document.getElementById("risultato").value = "Impossibile dividere per zero.";
            a = undefined;
            b = undefined;
            virgola = 0;
            o = o;
        } else {
            risultato = a / b;
            document.getElementById("risultato").value = risultato;
            a = undefined;
            b = undefined;
            virgola = 0;
            o = 0;
        }

    }
}

//Funzionamento tasto ","
function Comma() {
    if(b == undefined) {
        document.getElementById("risultato").value = a + ".";
        virgola = 1;
    } else if(o != 0 && b != undefined) {
        document.getElementById("risultato").value = a + o + b + ".";
        virgola = 1;
    }
}

// Funzionamento tasto "C":
function Delete() {
    document.getElementById("risultato").value = "0";
    a = undefined;
    b = undefined;
    virgola = 0;
    o = 0;
}

// Settare le operazioni:
function setO1() {
    o = "+";
    document.getElementById("risultato").value = a + o;
}

function setO2() {
    o = "-";
    document.getElementById("risultato").value = a + o;
}

function setO3() {
    o = "*";
    document.getElementById("risultato").value = a + o;
}

function setO4() {
    o = "/";
    document.getElementById("risultato").value = a + o;
}

// Settare le variabili:
function setA0() {
    if(a == undefined && o == 0) {
        a = 0;
        document.getElementById("risultato").value = a;
    } else if(a != undefined && o == 0) {
        a = a * 10 + 0;
        document.getElementById("risultato").value = a;
    }
    
    if(b == undefined && o != 0) {
        b = 0;
        document.getElementById("risultato").value = a + o + b;
    } else if(b != undefined && o != 0) {
        b = b * 10 + 0;
        document.getElementById("risultato").value = a + o + b;
    }

} 

function setA1() {
    if(a == undefined && o == 0) {
        a = 1;
        document.getElementById("risultato").value = a;
    } else if(a != undefined && o == 0 && virgola == 0) {
        a = a * 10 + 1;
        document.getElementById("risultato").value = a;
    }
    
    if(b == undefined && o != 0) {
        b = 1;
        document.getElementById("risultato").value = a + o + b;
    } else if(b != undefined && o != 0 && virgola == 0) {
        b = b * 10 + 1;
        document.getElementById("risultato").value = a + o + b;
    }

    if(virgola == 1 && b == undefined) {
        a = a + 1/10;
        document.getElementById("risultato").value = a;
        virgola = 0;
    } 

    if(virgola == 1 && b != undefined && o != 0) {
        b = b + 1/10;
        document.getElementById("risultato").value = a + o + b;
        virgola = 0;
    }
}  


function setA2() {
    if(a == undefined && o == 0) {
        a = 2;
        document.getElementById("risultato").value = a;
    } else if(a != undefined && o == 0 && virgola == 0) {
        a = a * 10 + 2;
        document.getElementById("risultato").value = a;
    }
    
    if(b == undefined && o != 0) {
        b = 2;
        document.getElementById("risultato").value = a + o + b;
    } else if(b != undefined && o != 0 && virgola == 0) {
        b = b * 10 + 2;
        document.getElementById("risultato").value = a + o + b;
    }

    if(virgola == 1 && b == undefined) {
        a = a + 2/10;
        document.getElementById("risultato").value = a;
        virgola = 0;
    } 

    if(virgola == 1 && b != undefined && o != 0) {
        b = b + 2/10;
        document.getElementById("risultato").value = a + o + b;
        virgola = 0;
    }
}

function setA3() {
    if(a == undefined && o == 0) {
        a = 3;
        document.getElementById("risultato").value = a;
    } else if(a != undefined && o == 0 && virgola == 0) {
        a = a * 10 + 3;
        document.getElementById("risultato").value = a;
    }
    
    if(b == undefined && o != 0) {
        b = 3;
        document.getElementById("risultato").value = a + o + b;
    } else if(b != undefined && o != 0 && virgola == 0) {
        b = b * 10 + 3;
        document.getElementById("risultato").value = a + o + b;
    }

    if(virgola == 1 && b == undefined) {
        a = a + 3/10;
        document.getElementById("risultato").value = a;
        virgola = 0;
    } 

    if(virgola == 1 && b != undefined && o != 0) {
        b = b + 3/10;
        document.getElementById("risultato").value = a + o + b;
        virgola = 0;
    }
}

function setA4() {
    if(a == undefined && o == 0) {
        a = 4;
        document.getElementById("risultato").value = a;
    } else if(a != undefined && o == 0 && virgola == 0) {
        a = a * 10 + 4;
        document.getElementById("risultato").value = a;
    }
    
    if(b == undefined && o != 0) {
        b = 4;
        document.getElementById("risultato").value = a + o + b;
    } else if(b != undefined && o != 0 && virgola == 0) {
        b = b * 10 + 4;
        document.getElementById("risultato").value = a + o + b;
    }

    if(virgola == 1 && b == undefined) {
        a = a + 4/10;
        document.getElementById("risultato").value = a;
        virgola = 0;
    } 

    if(virgola == 1 && b != undefined && o != 0) {
        b = b + 4/10;
        document.getElementById("risultato").value = a + o + b;
        virgola = 0;
    }
}

function setA5() {
    if(a == undefined && o == 0) {
        a = 5;
        document.getElementById("risultato").value = a;
    } else if(a != undefined && o == 0 && virgola == 0) {
        a = a * 10 + 5;
        document.getElementById("risultato").value = a;
    }
    
    if(b == undefined && o != 0) {
        b = 5;
        document.getElementById("risultato").value = a + o + b;
    } else if(b != undefined && o != 0 && virgola == 0) {
        b = b * 10 + 5;
        document.getElementById("risultato").value = a + o + b;
    }

    if(virgola == 1 && b == undefined) {
        a = a + 5/10;
        document.getElementById("risultato").value = a;
        virgola = 0;
    } 

    if(virgola == 1 && b != undefined && o != 0) {
        b = b + 5/10;
        document.getElementById("risultato").value = a + o + b;
        virgola = 0;
    }
}

function setA6() {
    if(a == undefined && o == 0) {
        a = 6;
        document.getElementById("risultato").value = a;
    } else if(a != undefined && o == 0 && virgola == 0) {
        a = a * 10 + 6;
        document.getElementById("risultato").value = a;
    }
    
    if(b == undefined && o != 0) {
        b = 6;
        document.getElementById("risultato").value = a + o + b;
    } else if(b != undefined && o != 0 && virgola == 0) {
        b = b * 10 + 6;
        document.getElementById("risultato").value = a + o + b;
    }

    if(virgola == 1 && b == undefined) {
        a = a + 6/10;
        document.getElementById("risultato").value = a;
        virgola = 0;
    } 

    if(virgola == 1 && b != undefined && o != 0) {
        b = b + 6/10;
        document.getElementById("risultato").value = a + o + b;
        virgola = 0;
    }
}

function setA7() {
    if(a == undefined && o == 0) {
        a = 7;
        document.getElementById("risultato").value = a;
    } else if(a != undefined && o == 0 && virgola == 0) {
        a = a * 10 + 7;
        document.getElementById("risultato").value = a;
    }
    
    if(b == undefined && o != 0) {
        b = 7;
        document.getElementById("risultato").value = a + o + b;
    } else if(b != undefined && o != 0 && virgola == 0) {
        b = b * 10 + 7;
        document.getElementById("risultato").value = a + o + b;
    }

    if(virgola == 1 && b == undefined) {
        a = a + 7/10;
        document.getElementById("risultato").value = a;
        virgola = 0;
    } 

    if(virgola == 1 && b != undefined && o != 0) {
        b = b + 7/10;
        document.getElementById("risultato").value = a + o + b;
        virgola = 0;
    }
}

function setA8() {
    if(a == undefined && o == 0) {
        a = 8;
        document.getElementById("risultato").value = a;
    } else if(a != undefined && o == 0 && virgola == 0) {
        a = a * 10 + 8;
        document.getElementById("risultato").value = a;
    }
    
    if(b == undefined && o != 0) {
        b = 8;
        document.getElementById("risultato").value = a + o + b;
    } else if(b != undefined && o != 0 && virgola == 0) {
        b = b * 10 + 8;
        document.getElementById("risultato").value = a + o + b;
    }

    if(virgola == 1 && b == undefined) {
        a = a + 8/10;
        document.getElementById("risultato").value = a;
        virgola = 0;
    } 

    if(virgola == 1 && b != undefined && o != 0) {
        b = b + 8/10;
        document.getElementById("risultato").value = a + o + b;
        virgola = 0;
    }
}

function setA9() {
    if(a == undefined && o == 0) {
        a = 9;
        document.getElementById("risultato").value = a;
    } else if(a != undefined && o == 0 && virgola == 0) {
        a = a * 10 + 9;
        document.getElementById("risultato").value = a;
    }
    
    if(b == undefined && o != 0) {
        b = 9;
        document.getElementById("risultato").value = a + o + b;
    } else if(b != undefined && o != 0 && virgola == 0) {
        b = b * 10 + 9;
        document.getElementById("risultato").value = a + o + b;
    }

    if(virgola == 1 && b == undefined) {
        a = a + 9/10;
        document.getElementById("risultato").value = a;
        virgola = 0;
    } 

    if(virgola == 1 && b != undefined && o != 0) {
        b = b + 9/10;
        document.getElementById("risultato").value = a + o + b;
        virgola = 0;
    }
}