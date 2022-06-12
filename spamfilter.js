const sendBtn=document.getElementById ("button");
const storedInput =localStorage.getItem('name');
const logo = document.querySelector ('.logo');

let comments = ["buy ViAgRA now","free xxx","innocent rabbit"]; 

for (let i=0; i <comments.length; i++){
    comments[i] = comments[i].replaceAll(/viagra/gi,'***');}
for (let i=0; i <comments.length; i++){
    comments[i] = comments[i].replaceAll(/xxx/gi,'***');
}

function addComment(){
    let newcomment = document.getElementById("newcomment").value;
    comments.push(newcomment);
    generateComments();
}

 function generateComments(){
    let commentsString="";
    let author = document.getElementById("author").value;

    for (let comment of comments){
       commentsString += `<span class = 'name'>${author} :</span><span> ${comment}</span><br>`;
   } 
    document.getElementById ("container").innerHTML=commentsString;
   };
    
document.addEventListener("DOMContentLoaded",function (event){ 
    generateComments();
   
});

if(author){
    author.value=storedInput
}

author.addEventListener('input', a =>{
    author.value = a.target.value
})

const saveToLocalStorage =()=>{
    localStorage.setItem ('name', author.value)
}

sendBtn.addEventListener ('click', saveToLocalStorage)
 

