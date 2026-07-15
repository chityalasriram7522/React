let count=0;
 const para=document.createElement("p");
 para.textContent=`Count: ${count}`;

 const button=document.createElement("button");
 button.textContent=`increment:${count}`;


 const parent=document.getElementById("root");
 parent.append(para,button);

 button.addEventListener("click",function(){
        count++;
        // console.log(count);
        para.textContent=`Count: ${count}`;
        button.textContent=`increment:${count}`;
 });