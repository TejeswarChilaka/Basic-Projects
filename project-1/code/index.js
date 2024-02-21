const shivas = document.querySelectorAll('.shiva');

shivas.forEach(shiva =>{
    shiva.addEventListener('click',()=>{
        removeActiveClass();
        shiva.classList.add('active');
    });
});

const removeActiveClass =()=>{
    shivas.forEach(shiva=>{
        shiva.classList.remove('active');
    });
};