const POS = document.querySelector("#POS");
const ERP = document.querySelector("#ERP");
const PIM2 = document.querySelector("#PIM2");
const HP = document.querySelector("#HP");
const AL2 = document.querySelector("#AL2");
const CMA = document.querySelector("#CMA");
const EOO = document.querySelector("#EOO");
POS.onclick = pos;
ERP.onclick = erp;
PIM2.onclick = pim2;
HP.onclick = hp;
AL2.onclick = al2;
CMA.onclick = cma;
EOO.onclick = eoo;


function pos() {
    let p = document.getElementById("t");
    if (p.style.display === "block") {
        p.style.display = "none";
    }
    else {
        p.style.display = "block";
    }
}

function erp() {
    let h = document.getElementById("f");
    if (h.style.display === "block") {
        h.style.display = "none";
    }
    else {
        h.style.display = "block";
    }

}
function pim2() {
    let i = document.getElementById("j");
    if (i.style.display === "block") {
        i.style.display = "none";
    }
    else {
        i.style.display = "block";
    }

}
function hp() {
    let a = document.getElementById("k");
    if (a.style.display === "block") {
        a.style.display = "none";
    }
    else {
        a.style.display = "block";
    }

}
function al2() {
    let b = document.getElementById("l");
    if (b.style.display === "block") {
        b.style.display = "none";
    }
    else {
        b.style.display = "block";
    }

}
function cma() {
    let c = document.getElementById("m");
    if (c.style.display === "block") {
        c.style.display = "none";
    }
    else {
        c.style.display = "block";
    }

}
function eoo() {
    let d = document.getElementById("n");
    if (d.style.display === "block") {
        d.style.display = "none";
    }
    else {
        d.style.display = "block";
    }

}
function swapImages() {
    let get1 = document.getElementById("img1");
    let get2 = document.getElementById("img2");
    let get3 = document.getElementById("img3");
    let get4 = document.getElementById("img4");
    let fetch = get1.src;
    get1.src = get2.src;
    get2.src = get3.src;
    get3.src = get4.src;
    get4.src = fetch;
}
function swapImages1() {
    let get1 = document.getElementById("img1");
    let get2 = document.getElementById("img2");
    let get3 = document.getElementById("img3");
    let get4 = document.getElementById("img4");
    let fetch = get4.src;
    get4.src = get3.src;
    get3.src = get2.src;
    get2.src = get1.src;
    get1.src = fetch;
}
function swapImages2() {
    let get1 = document.getElementById("img5");
    let get2 = document.getElementById("img6");
    let get3 = document.getElementById("img7");
    let get4 = document.getElementById("img8");
    let fetch = get1.src;
    get1.src = get2.src;
    get2.src = get3.src;
    get3.src = get4.src;
    get4.src = fetch;
}
function swapImages3() {
    let get1 = document.getElementById("img5");
    let get2 = document.getElementById("img6");
    let get3 = document.getElementById("img7");
    let get4 = document.getElementById("img8");
    let fetch = get4.src;
    get4.src = get3.src;
    get3.src = get2.src;
    get2.src = get1.src;
    get1.src = fetch;
}
function swapImages4() {
    let get1 = document.getElementById("img9");
    let get2 = document.getElementById("img10");
    let get3 = document.getElementById("img11");
    let get4 = document.getElementById("img12");
    let fetch = get1.src;
    get1.src = get2.src;
    get2.src = get3.src;
    get3.src = get4.src;
    get4.src = fetch;
}
function swapImages5() {
    let get1 = document.getElementById("img9");
    let get2 = document.getElementById("img10");
    let get3 = document.getElementById("img11");
    let get4 = document.getElementById("img12");
    let fetch = get4.src;
    get4.src = get3.src;
    get3.src = get2.src;
    get2.src = get1.src;
    get1.src = fetch;
}
function swapImages6() {
    let get1 = document.getElementById("img13");
    let get2 = document.getElementById("img14");
    let fetch = get1.src;
    let fetch2 = get2.src;
    get2.src = get1.src;
    get1.src = fetch2;
}
function swapImages7() {
    let get1 = document.getElementById("img13");
    let get2 = document.getElementById("img14");
    let fetch = get2.src;
    let fetch2 = get1.src;
    get1.src = get2.src;
    get2.src = fetch2;

}
let p = document.getElementById("tt");
p.style.display = "none"
function ans1() {
    let p = document.getElementById("tt");
    if (p.style.display === "none") {
        p.style.display = "block";
    }
    else {
        p.style.display = "none";
    }
}
let d = document.getElementById("tx");
d.style.display = "none"
function ans2() {
    let d = document.getElementById("tx");
    if (d.style.display === "none") {
        d.style.display = "block";
    }
    else {
        d.style.display = "none";
    }
}
let z = document.getElementById("ty");
z.style.display = "none"
function ans3() {
    let z = document.getElementById("ty");
    if (z.style.display === "none") {
        z.style.display = "block";
    }
    else {
        z.style.display = "none";
    }
}
let n = document.getElementById("tz");
n.style.display = "none"
function ans4() {
    let n = document.getElementById("tz");
    if (n.style.display === "none") {
        n.style.display = "block";
    }
    else {
        n.style.display = "none";
    }
}
let a = document.getElementById("tn");
a.style.display = "none"
function ans5() {
    let a = document.getElementById("tn");
    if (a.style.display === "none") {
        a.style.display = "block";
    }
    else {
        a.style.display = "none";
    }
}
let k = document.getElementById("tp");
k.style.display = "none"
function ans6() {
    let k = document.getElementById("tp");
    if (k.style.display === "none") {
        k.style.display = "block";
    }
    else {
        k.style.display = "none";
    }
}
let o = document.getElementById("tc");
o.style.display = "none"
function ans7() {
    let o = document.getElementById("tc");
    if (o.style.display === "none") {
        o.style.display = "block";
    }
    else {
        o.style.display = "none";
    }
}

