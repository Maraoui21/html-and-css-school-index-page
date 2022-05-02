const show =()=>{
    const navUL = document.querySelector('body > div.navbar');
    const icon = document.querySelector('body > div.navbtn > button');
        if(navUL.className == 'navbar hide'){
        icon.innerHTML =`<i class="fa-solid fa-xmark"></i>`;
    }else{
        icon.innerHTML =`<i class="fa-solid fa-bars"></i>`;
    }
    navUL.classList.toggle("hide"); 
}
