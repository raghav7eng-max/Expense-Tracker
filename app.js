
let dashboard=document.querySelector("#db");
let transactions=document.querySelector("#trn");
let addTrans=document.querySelector("#atrn");
let reports=document.querySelector("#rpr");
let settings=document.querySelector("#set");
let about=document.querySelector("#abt");

let head=document.querySelector("#header");
let card1=document.querySelector("#balance");
let card2=document.querySelector("#income");
let card3=document.querySelector("#expense");
let aTr=document.querySelector("#addd")
let rTr=document.querySelector("#recent");
let abt=document.querySelector("#abc");
let rep=document.querySelector("#repo");

let sBar=document.querySelector("#sidebar");
let dsh=document.querySelector("#dash");
let setBox=document.querySelector("#sett");
let eLine=document.querySelector("#empty");

function remove(){
    head.classList.remove("none");
    card1.classList.remove("none");
    card2.classList.remove("none");
    card3.classList.remove("none");
    aTr .classList.remove("none");
    rTr.classList.remove("none");
}
function add(){
    head.classList.add("none");
    card1.classList.add("none");
    card2.classList.add("none");
    card3.classList.add("none");
    aTr .classList.add("none");
    rTr.classList.add("none");
    abt.classList.add("none");
    setBox.classList.add("none");
    rep.classList.add("none");
}
function removeF(){
   dashboard.classList.remove("clbg") 
   transactions.classList.remove("clbg")
   about.classList.remove("clbg")
   settings.classList.remove("clbg")
   addTrans.classList.remove("clbg")
   reports.classList.remove("clbg")
}

dashboard.classList.add("clbg")


dashboard.addEventListener("click",()=>{
    add();
    remove();
    removeF();
    rTr.classList.remove("scale");
    aTr.classList.remove("scale");
    dashboard.classList.add("clbg")
})
transactions.addEventListener("click",()=>{
    add();
    removeF();
    rTr.classList.remove("none");
    rTr.classList.add("scale");
    transactions.classList.add("clbg")
})
addTrans.addEventListener("click",()=>{
    add();
    removeF();
    aTr.classList.remove("none")
    aTr.classList.add("scale");
    addTrans.classList.add("clbg")
})
about.addEventListener("click",()=>{
    add();
    removeF();
    abt.classList.remove("none");
    abt.classList.add("about");
    about.classList.add("clbg")
})
reports.addEventListener("click",()=>{
    add();
    removeF();
    rep.classList.remove("none")
    reports.classList.add("clbg")
})
settings.addEventListener("click",()=>{
    add();
    removeF();
    setBox.classList.remove("none");
    setBox.classList.add("sett");
    settings.classList.add("clbg")
})

let button=document.querySelector("button");
let inp1=document.querySelector("#nm");
let inp2=document.querySelector("#amt");
let inp3=document.querySelector("#cat");
let inp4=document.querySelector("#dt");
let inpS=document.querySelector("#sInc");
let inpE=document.querySelector("#sExp");
let incVal1=document.querySelector("#val1");
let incVal2=document.querySelector("#val2");
let incVal3=document.querySelector("#val3");
let RincVal1=document.querySelector("#Rval1");
let RincVal2=document.querySelector("#Rval2");
let RincVal3=document.querySelector("#Rval3");
let RincVal4=document.querySelector("#Rval4");
let income=0;
let expense=0;
let balance=0;
let cnt=0;

button.addEventListener("click",()=>{
    if((inp1.value==""|| inp2.value=="" ||inp3.value==""||inp4.value=="") || (inpS.checked==false&&inpE.checked==false)){
    alert("Please fill all fields")
}else{
    cnt++
   eLine.remove(); 
let cont=document.createElement("div");
let imgl=document.createElement("div");
let name=document.createElement("div");
let date=document.createElement("div");
let cat=document.createElement("div");
let amt=document.createElement("div");
let deletee=document.createElement("button");
deletee.innerHTML= `<span class="material-symbols-outlined">delete</span>`;
rTr.insertBefore(cont,rTr.children[1]);
cont.append(imgl);
cont.append(name);
cont.append(date);
cont.append(cat);
cont.append(amt);
 
deletee.addEventListener("click",(event)=>{
    let valL=Number(cont.children[4].innerText);
    if(cont.children[3].innerText=="Income"){
        income-=valL;
        balance-=valL;
        incVal2.innerText=`Rs.${income}`
        incVal1.innerText=`Rs.${balance}`
        RincVal2.innerText=`Rs.${income}`
        RincVal1.innerText=`Rs.${balance}`
        cnt--
        RincVal4.innerText=cnt;
        console.log(rTr.childElementCount)
    } else{
        expense-=valL;
        balance+=valL;
        incVal1.innerText=`Rs.${balance}`
        incVal3.innerText=`Rs.${expense}`
        RincVal1.innerText=`Rs.${balance}`
        RincVal3.innerText=`Rs.${expense}`
        cnt--
        RincVal4.innerText=cnt;
        console.log(rTr.childElementCount)
    }
cont.remove();
})
    
    cont.classList.add("inner");
    if(inp3.value=="Food"){
        imgl.innerHTML=`<span class="material-symbols-outlined">brunch_dining</span>`
    } else if(inp3.value=="Health"){
        imgl.innerHTML=`<span class="material-symbols-outlined">exercise</span>`
    } else if(inp3.value=="Income"){
        imgl.innerHTML=`<span class="material-symbols-outlined">account_balance_wallet</span>`
    } else if(inp3.value=="Clothes"){
        imgl.innerHTML=`<span class="material-symbols-outlined">apparel</span>`
    }else if(inp3.value=="Travel"){
        imgl.innerHTML=`<span class="material-symbols-outlined">travel_explore</span>`
    }else if(inp3.value=="Education"){
        imgl.innerHTML=`<span class="material-symbols-outlined">auto_stories</span>`
    }else if(inp3.value=="Miscellaneous"){
        imgl.innerHTML=`<span class="material-symbols-outlined">more</span>`
    }
    imgl.classList.add("img");
    name.innerText=inp1.value;
    date.innerText=inp4.value;
    cat.innerText=inp3.value;
    amt.innerHTML=`<div>${inp2.value}</div>`
    cont.append(deletee);
    deletee.classList.add("delete");
    imgl.classList.add("green");
    name.style.color="blue";

    if(inpS.checked==true){
        amt.style.color="green";
        income+=Number(inp2.value);
        incVal2.innerText=`Rs.${income}`
        RincVal2.innerText=`Rs.${income}`
        balance=income-expense;
        incVal1.innerText=`Rs.${balance}`
        RincVal1.innerText=`Rs.${balance}`
    } else{
        amt.style.color="red";
        expense+=Number(inp2.value);
        incVal3.innerText=`Rs.${expense}`
        RincVal3.innerText=`Rs.${expense}`
        balance=income-expense;
        incVal1.innerText=`Rs.${balance}`
        RincVal1.innerText=`Rs.${balance}`
    }
RincVal4.innerText=cnt;
    inp1.value=""
    inp2.value=""
    inp3.value=""
    inp4.value=""
    inpS.checked=false
    inpE.checked=false
}
})
console.log(rTr.childElementCount)
let isDark=false;
let mode=document.querySelector(".icn");
mode.addEventListener("click",()=>{
   if(isDark==false){
    card1.classList.add("crd");
    card2.classList.add("crd");
    card3.classList.add("crd");
    aTr.classList.add("crd");
    rTr.classList.add("crd");
    sBar.classList.add("Sbar");
    dsh.classList.add("Dsh");
    head.style.color="white";
    inp1.style.color="white";
    inp2.style.color="white";
    inp3.style.color="white";
    inp4.style.color="white";
    abt.style.color="white";
    setBox.style.color="white";
    rep.style.color="white"
    isDark=true;
   }else{
    card1.classList.remove("crd");
    card2.classList.remove("crd");
    card3.classList.remove("crd");
    aTr.classList.remove("crd");
    rTr.classList.remove("crd");
    sBar.classList.remove("Sbar");
    dsh.classList.remove("Dsh");
    head.style.color="black";
    inp1.style.color="black";
    inp2.style.color="black";
    inp3.style.color="black";
    inp4.style.color="black";
    abt.style.color="black";
    setBox.style.color="black";
    rep.style.color="black"
    isDark=false;
   }
})