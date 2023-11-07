const butn = document.querySelectorAll('.btn');
// const tags = document.getElementsByTagName('div');
// console.log(butn);
const body = document.querySelector('body');
 butn.forEach(function(butn){
    console.log(butn);
    // console.log(butn);
    butn.addEventListener('click' , function(e){
        console.log(e);
        console.log(e.target);
        const color = e.target.id;
        // switch(color){
        //     case 'red': 
        //         body.style.backgroundColor = '#ff0000';
        //         break;
        //     case 'black':
        //         body.style.backgroundColor = "black";    
        // }
        // e.stopPropagation()
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
            butn.style.fontSize = "15px"
            butn.style.color= "white"
            butn.style.borderRadius = "50%"
            // butn.style.cssText = "center"
        }
        

        else if(e.target.id==='black'){
            body.style.backgroundColor = e.target.id;
            // body.style.color = e.target.id;
            butn.style.fontSize = "15px"
            butn.style.color= "white"
            butn.style.borderRadius = "50%"
        }
        else if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
            // tags.style.color = "grey";
            butn.style.fontSize = "15px"
            butn.style.color= "white"
            butn.style.borderRadius = "50%"
            
        }
        else if(e.target.id ==='yellow'){
            body.style.backgroundColor = e.target.id;
            butn.style.fontSize = "15px"
            butn.style.color= "black"
            butn.style.borderRadius = "50%"
        }
        
    });

    
 })