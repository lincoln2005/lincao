searchForm = document.querySelector('.serch-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}
window.onscroll = () =>{

    searchForm.classList.remove('active');

if(window.scrollY > 80){
document.querySelector('.herder .header-2').classList.add('active');    
}else{
    document.querySelector('.herder .header-2').classList.add('active');    
 }

}
window.onload = () =>{
    if(window.scrollY > 80){
    document.querySelector('.herder .header-2').classList.add('active');    
    }else{
        document.querySelector('.herder .header-2').classList.add('active');    
     }
    
    }