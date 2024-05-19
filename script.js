let start_kr = document.querySelector(".menu");
let khatam = document.querySelector(".close");
let crush = document.querySelector(".sider");
let counter = document.querySelector(".main-counter");
let m_loop = document.querySelector(".loopz");

let q1 = document.getElementById("Q-01");
let q2 = document.getElementById("Q-02");
let q3 = document.getElementById("Q-03");
let q4 = document.getElementById("Q-04");
let q5 = document.getElementById("Q-05");
let q6 = document.getElementById("Q-06");
let q7 = document.getElementById("Q-07");

let lp1 = document.getElementById("loopc1");
let cnt1 = document.getElementById("countc1");

let line = document.querySelector(".qline");
let day = document.querySelector(".C-day");

// const date = new Date();
// const current_date = date.toDateString();
// const din = current_date.split(" ")[0];
// day.textContent = din;

let disBlock = function (any) {
    any.style.display = "block";
};

let disNone = function (any) {
    any.style.display = "none";
};

let putTxt = function (any) {
    line.textContent = any.textContent;
    counter.textContent = 0;
    m_loop.textContent = 0;
};

start_kr.addEventListener("click", function () {
    disBlock(crush);
});

khatam.addEventListener("click", function () {
    disNone(crush);
});

putTxt(q6);

q1.addEventListener("click", function () {
    putTxt(q1);
});
q2.addEventListener("click", function () {
    putTxt(q2);
});
q3.addEventListener("click", function () {
    putTxt(q3);
});
q4.addEventListener("click", function () {
    putTxt(q4);
});
q5.addEventListener("click", function () {
    putTxt(q5);
});
q6.addEventListener("click", function () {
    putTxt(q6);
});
q7.addEventListener("click", function () {
    putTxt(q7);
});

const date = new Date();
const current_date = date.toDateString();
const din = current_date.split(" ")[0];
day.textContent = din;

counter.addEventListener("click", function () {
    let num_cnt = counter.textContent;
    num_cnt++;
    counter.textContent = num_cnt;
    if (num_cnt == 101) {
        counter.textContent = 0;
        let looptxt = m_loop.textContent;
        looptxt++;
        m_loop.textContent = looptxt;
    }
});
