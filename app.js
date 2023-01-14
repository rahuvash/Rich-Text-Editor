//Elements
const elements= document.querySelectorAll('.btn');


//event
elements.forEach(element=>{
    element.addEventListener('click',()=>{
        let command = element.dataset['element'];

        if (command=='createLink'|| command=='insertImage'){
            let url =prompt('enter the URL here :', 'http://')
            document.execCommmand(command, false, url);
        } else{
            document.execCommmand(command, false, null);
        }
    });
});