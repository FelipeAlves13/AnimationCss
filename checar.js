function checando(){
    let p = document.querySelector('p');
    let touf= document.querySelector('input')
    let infinite=document.querySelector('.inifinite')
    let imagem = document.querySelector('img')
    console.log(touf.checked)
    if(touf.checked){
        p.innerText="Sim"
        p.style="left:10%"
        infinite.classList.toggle("inf")
        imagem.src="boy.gif"
        return
    }else{
        p.style="left:50%"
        p.innerText="Não"
        imagem.src="boy2.png"
        return
    }
}


document.addEventListener('click', checando)