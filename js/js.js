    const arrayImg = ["img1.webp","img2.webp","img3.webp","img4.webp","img5.webp","img6.webp","img7.webp"];
            let imgAct = 1;
            console.log(arrayImg)
            /* Seleccion de botones */
            let atras = document.getElementById("atras")
            let adelante = document.getElementById("adelante")
            let gallery = document.querySelector(".main__gallery");


    adelante.addEventListener("click",()=>{
        imgAct++;
        cambiarImg()
        gallery.style.backgroundImage = `url(img/tattoos/img${imgAct}.webp)`
    })
    atras.addEventListener("click",()=>{
        imgAct--;
        cambiarImg()
        gallery.style.backgroundImage = `url(img/tattoos/img${imgAct}.webp)`
    })
    function cambiarImg(){
        if(imgAct>arrayImg.length){
            imgAct=1;
        }
        if(imgAct<1){ /* No dejamos que imgAct sea -1  */
            imgAct=arrayImg.length;/* Luego hacemos que sea 3 para que comience desde el 3 hasta la img1 */
        }
       
    }


