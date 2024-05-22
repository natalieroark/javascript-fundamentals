let able = document.getElementById("first").innerText;
console.log(able);
let msg;
if (able== 'My first paragraph here.'){
    msg = 'My first paragraph updated!'
}
console.log(msg);

let beta = document.getElementById("first");
beta.style.color = 'darkcyan';
beta.style.fontSize = '40px';

document.getElementById("first").innerHTML = msg;

let you = document.getElementsByClassName("cool");
console.log(you);

const heads = document.querySelectorAll(".cool");
console.log('This is from querySelectorAll' + heads);

heads.forEach((delta) => {
    delta.style.color = "orange";
});

const pTags = document.querySelectorAll("p");
console.log(pTags);