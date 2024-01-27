let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".resetbtn");
let message=document.querySelector(".msg");
let img=document.querySelector(".imgbox");
let flag=0;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(flag==0){
            
      box.innerHTML="X";
        flag=1}else
        {   
            box.innerHTML="O";
            flag=0;
        }
        box.disabled=true;
        checkWinner();
    })
})
reset.addEventListener("click",function(){
   boxes.forEach((box)=>{
       box.innerHTML="";
       box.style.backgroundColor='';
       flag=0;
       box.disabled=false;
       message.classList.remove("active");
       img.classList.remove("active");
   })
})
function checkWinner(){
    
    for (let pattern of winPatterns){
       let pos1=boxes[pattern[0]].innerText;
       let pos2=boxes[pattern[1]].innerText;
       let pos3=boxes[pattern[2]].innerText;

       if (pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2==pos3){
            showWinner(pos1);
        message.classList.toggle("active");
        img.classList.toggle("active");
        return;
        }
       }
    }
    if (Array.from(boxes).every(box=>box.innerText!=="")){
        showDraw();
        return;
    }
}
const showWinner=(winner)=>{ 
message.innerText= winner+' Wins!!';
for (let pattern of winPatterns) {
    let pos1 = pattern[0];
    let pos2 = pattern[1];
    let pos3 = pattern[2];

    if (boxes[pos1].innerText === winner && boxes[pos2].innerText === winner && boxes[pos3].innerText === winner) {
        // Change the background color of the winning boxes
        boxes[pos1].style.backgroundColor = 'lightgreen';
        boxes[pos2].style.backgroundColor = 'lightgreen';
        boxes[pos3].style.backgroundColor = 'lightgreen';
    }
}
boxes.forEach((box)=>{
    box.disabled=true;
});
}

const showDraw=()=>{
    message.innerText="It's Draw!!";
    message.classList.toggle("active");
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}
