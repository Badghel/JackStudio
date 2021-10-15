    const arrayImg = ["img1.webp","img2.webp","img3.webp","img4.webp","img5.webp","img6.webp","img7.webp"];
    let cont = 0;
     /* Seleccion de botones */
   


function carrousel(contenedor){
    contenedor.addEventListener("click", e=>{
        let atras = document.getElementById("atras")
        let adelante = document.getElementById("adelante")
        let img = document.getElementById("gallery");
        let tgt = e.target;


        if(tgt == atras){
            if(cont >0){
                img.src = `img/tattoos/${arrayImg[cont-1]}`;
                cont--;
                 
            }else{
                img.src =`img/tattoos/${arrayImg[arrayImg.length-1]}`;
                cont = arrayImg.length-1;
            }
        }else if(tgt == adelante){
            if(cont <arrayImg.length-1){
                img.src = `img/tattoos/${arrayImg[cont+1]}`;
                cont++;
            }else{
                img.src = `img/tattoos/${arrayImg[0]}`;
                cont = 0;
            }
        }
    })
}

document.addEventListener("DOMContentLoaded",()=>{
    let contenedor = document.querySelector(".main__gallery");
    carrousel(contenedor);
})


