const switchButton = document.getElementById("switch");

switchButton.addEventListener('click', ()=>{
    switchButton.classList.toggle('active');
});


function setDarkMode(){
setUserTheme("dark");
}

function setLightMode(){
setUserTheme("light");
}


function setUserTheme(newTheme){
document.documentElement.setAttribute("data-theme", newTheme);
}











































/*load();
const switchButton = document.getElementById("switch");

switchButton.addEventListener('click', ()=>{
    let body=document.body.classList.toggle('dark');
    switchButton.classList.toggle('active');
    localStorage.setItem("switch",body);


    store(document.body.classList.contains('dark'));
    

});

function load(){
    const dark = localStorage.getItem('dark');
    
    if(!dark){
        store('false');
    }

    else if(dark == 'true'){
        document.body.classList.add('dark');
}
}


function store(value){
localStorage.setItem('dark',value);
}
*/