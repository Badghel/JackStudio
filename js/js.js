const arrayImg = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg","img7.jpg"];
let imgAct = 1;
console.log(arrayImg)
/* Seleccion de botones */
let atras = document.getElementById("atras")
let adelante = document.getElementById("adelante")
let gallery = document.querySelector(".main__gallery");


adelante.addEventListener("click",()=>{
    imgAct++;
    cambiarImg()
    gallery.style.backgroundImage = `url(img/tattoos/img${imgAct}.jpg)`
})
atras.addEventListener("click",()=>{
    imgAct--;
    cambiarImg()
    gallery.style.backgroundImage = `url(img/tattoos/img${imgAct}.jpg)`
})
function cambiarImg(){
    if(imgAct>arrayImg.length){
        imgAct=1;
    }
    if(imgAct<1){ /* No dejamos que imgAct sea -1  */
        imgAct=arrayImg.length;/* Luego hacemos que sea 3 para que comience desde el 3 hasta la img1 */
    }
   
}



