window.addEventListener("load", init)

function init(){
    const article = document.querySelector("article")
    article.innerHTML='<div><img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Moon.jpg"></div>';
    const image = document.querySelector("div")

image.addEventListener('mouseover', () => {
  // A stílusokat hozzáadjuk a div-hez, amikor az egér a kép fölé kerül
  image.style.border = '2px solid red';
  image.style.backgroundColor = 'blue';
});

image.addEventListener('mouseout', () => {
  // A stílusokat eltávolítjuk a div-ről, amikor az egér elhagyja a képet
  image.style.border = '';
  image.style.backgroundColor = '';
});
}