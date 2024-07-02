let pictures={
    'rock':'https://t3.ftcdn.net/jpg/01/23/14/80/360_F_123148069_wkgBuIsIROXbyLVWq7YNhJWPcxlamPeZ.jpg',
    'paper':'https://www.collinsdictionary.com/images/full/paper_111691001.jpg',
    'scissors':'https://media.istockphoto.com/id/1146263300/vector/scissors-vector-design-illustration-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=mwp4-CXaKtvIq9VLvJbFtt94KhWmBPXJC9fFgrcPi3k='
};
let values=['rock','paper','scissors'];
let score_user=0;
score_comp=0;
let a=document.querySelector('input');
let button=document.querySelector('.button');
let score=document.querySelectorAll('.score');
let comp;
button.addEventListener('click',()=>{
    if(a.value==='rock'){
        let img=document.querySelectorAll('img');
        img[1].src=pictures.rock;
        button.disabled=true;
        comp=playcomputer();
        console.log(comp);
        img[0].src=pictures[comp];
        checkscore('rock',comp);
        score[0].innerHTML=score_comp;
        score[1].innerHTML=score_user;
    }
    else if(a.value==='paper'){
        let img=document.querySelectorAll('img');
        img[1].src=pictures['paper'];
        button.disabled=true;
        comp=playcomputer();
        img[0].src=pictures[comp];
        checkscore('paper',comp);
        score[0].innerHTML=score_comp;
        score[1].innerHTML=score_user;
    }
    else{
        let img=document.querySelectorAll('img');
        img[1].src=pictures['scissors'];
        button.disabled=true;
        comp=playcomputer();
        img[0].src=pictures[comp];
        checkscore('scissors',comp);
        score[0].innerHTML=score_comp;
        score[1].innerHTML=score_user;

    }
})
let reset=document.querySelector('.reset');
reset.addEventListener('click',()=>{
    document.querySelectorAll('img')[0].src='';
    document.querySelectorAll('img')[1].src='';
    button.disabled=false;
})
let playcomputer=()=>{
    let i=Math.floor((Math.random() * 4));
    console.log(i);
    return values[i];
}
let checkscore=(user,comp)=>{
   if((user==='rock')&&(comp==='scissors')){
       score_user++;
   }
   else if((user==='paper')&&(comp==='rock')){
       score_user++;
   }
   else if((user==='scissors')&&(comp==='paper')){
       score_user++;
   }
   else if((user==='rock')&&(comp==='paper')){score_comp++;}
   else if((user==='paper')&&(comp==='scissors')){score_comp++;}
   else if((user==='scissors')&&(comp==='rock')){score_comp++;}
}
