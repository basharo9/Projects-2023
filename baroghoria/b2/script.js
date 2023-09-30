let text = document.getElementById('text');
let back = document.getElementById('back');
let tree1 = document.getElementById('tree1');
let tree2 = document.getElementById('tree2');
let bambo = document.getElementById('bambo');

window.addEventListener('scroll', () => {
   let value = window.scrollY;
   // text.style.marginTop = value * 2.5 + "px";
   text.style.marginTop = value + 50 + "px";
   tree1.style.left = value * 1.5 + "px";
   // tree1.style.left = value * -1.5 + "px";
   tree2.style.top = value * 3.5 + "px";
   // tree2.style.top = value * 2.5 + "px";
   bambo.style.left = value * -2.5 + "px";
   bambo.style.left = value * -2.5 + "px";
   
})