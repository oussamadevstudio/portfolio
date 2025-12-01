function showSideBar(event){

    if(event) event.preventDefault();

    const sideBar = document.querySelector(".sidebar");
    const nonOpenedTag = document.querySelector('.toggeled');

    sideBar.style.display = "flex";
    nonOpenedTag.classList.add('open');

}


function hideSideBar(event){

    if(event) event.preventDefault();

    const sideBar = document.querySelector(".sidebar");
    const nonOpenedTag = document.querySelector('.toggeled');

    sideBar.style.display = "none";
    nonOpenedTag.classList.remove('open');
    
}

