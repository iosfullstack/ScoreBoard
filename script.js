let hm = document.getElementById("hm-score");
let aw = document.getElementById("aw-score");
let btn1 = document.getElementById("hm-ct1");
let btn2 = document.getElementById("hm-ct2");
let btn3 = document.getElementById("hm-ct3");
let btn4 = document.getElementById("aw-ct1");
let btn5 = document.getElementById("aw-ct2");
let btn6 = document.getElementById("aw-ct3");
let hm_count = 0;
let aw_count = 0;

btn1.addEventListener("click", function () {
    hm_count += 1;
    hm.innerHTML = hm_count;
});

btn2.addEventListener("click", function () {
    hm_count += 2;
    hm.innerHTML = hm_count;
});

btn3.addEventListener("click", function () {
    hm_count += 3;
    hm.innerHTML = hm_count;
});

btn4.addEventListener("click", function () {
    aw_count += 1;
    aw.innerHTML = aw_count;
});

btn5.addEventListener("click", function () {
    aw_count += 2;
    aw.innerHTML = aw_count;
});

btn6.addEventListener("click", function () {
    aw_count += 3;
    aw.innerHTML = aw_count;
});