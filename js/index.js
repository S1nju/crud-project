let title=document.getElementById('title');
let desc=document.getElementById('desc');
let price = document.getElementById('price');
let tax = document.getElementById('tax');
let ads = document.getElementById('ads');
let tot = document.getElementById('tot');
let dis = document.getElementById('dis');
let count = document.getElementById('count');
let catg = document.getElementById('catg');
let save = document.getElementById('saveinfo');
let search = document.getElementById('search');
let searcht = document.getElementById('searcht');
let searchc = document.getElementById('searchc');
let evr= document.querySelectorAll('input');
let a = document.getElementById('dall');
let temp;
let searchi = document.getElementById('searchi');
let k=0;
let gettotal = function(){
if(price.value != ''){

    let result = (+price.value+ +tax.value+ +ads.value)- +dis.value;
    tot.innerHTML='Total: '+result + ' Da';
    tot.style.backgroundColor='#357965';

}else{
    tot.style.backgroundColor='#ff7272';
    tot.innerHTML='Total: '+0 + ' Da';
}
}
let proinf;
if(localStorage.length!=0){
    proinf= JSON.parse(localStorage.product);
}else{
proinf=[];};
save.onclick=function(){
    let product ={
      title:title.value,
      price:price.value,
      tax:tax.value,
      ads:ads.value,
      dis:dis.value,
      tot:tot.innerHTML,
      count:count.value,
      catg:catg.value
    }
   if(k==0){
   proinf.push(product);}else{
    proinf[temp]=product;
    k=0;
   }
  localStorage.setItem('product', JSON.stringify(proinf));
  cleardata();
  showdata();
};

function cleardata(){
    evr.forEach((input) => {
        input.value = "";
      });
    tot.innerHTML='Total 0 Da';

};

function showdata(){
    let ta ='';

    for(let i =0;i<proinf.length;i++){
       ta+=`<tr><td>${i}</td><td>${proinf[i].title}</td><td>${proinf[i].price}</td><td>${proinf[i].count}</td><td>${proinf[i].tax}</td><td>${proinf[i].ads}</td><td>${proinf[i].dis}</td><td>${proinf[i].tot}</td><td>${proinf[i].catg}</td><td><button onclick="update(${i});">update</button></td><td><button onclick="deleteone(${i});">delete</button></td</tr>`;
       } document.getElementById('table').innerHTML=ta;
       if(proinf.length>0){
        a.innerHTML=`<button onclick="deleteall();">delete all</button>`;

       }else{
        a.innerHTML='';
       }
        

       
};
showdata();
function deleteone(k){
   
  proinf.splice(k,1);
  localStorage.product= JSON.stringify(proinf);
  showdata();

};
function deleteall(){
    localStorage.clear();
    proinf.splice(0);
    showdata();

};
function update(i){
title.value=proinf[i].title;
price.value=proinf[i].price;
tax.value=proinf[i].tax;
ads.value=proinf[i].ads;
dis.value=proinf[i].dis;
gettotal();
count.value=proinf[i].count;
catg.value=proinf[i].catg;
save.innerHTML='update';
temp=i;
k=1;
scroll({
    top:0,
   behavior:'smooth'
})

}
let smood = 0;

  searcht.onclick=function(){
    smood=0;
    searchi.setAttribute("Placeholder","search by title");
    searchi.focus();


  }
   searchc.onclick=function(){
    smood=1;
    searchi.setAttribute("Placeholder","search by catg");
    searchi.focus();

  }

  function searchf(value){




    let ta =''
    for(let i =0;i<proinf.length;i++){
    if(smood==0){
   
      if(proinf[i].title.includes(value.toLowerCase())){
        ta+=`<tr><td>${i}</td><td>${proinf[i].title}</td><td>${proinf[i].price}</td><td>${proinf[i].count}</td><td>${proinf[i].tax}</td><td>${proinf[i].ads}</td><td>${proinf[i].dis}</td><td>${proinf[i].tot}</td><td>${proinf[i].catg}</td><td><button onclick="update(${i});">update</button></td><td><button onclick="deleteone(${i});">delete</button></td</tr>`;
        document.getElementById('table').innerHTML=ta;
      }else{
        document.getElementById('table').innerHTML=ta;
      }

    }else{

      if(proinf[i].catg.includes(value.toLowerCase())){
        ta+=`<tr><td>${i}</td><td>${proinf[i].title}</td><td>${proinf[i].price}</td><td>${proinf[i].count}</td><td>${proinf[i].tax}</td><td>${proinf[i].ads}</td><td>${proinf[i].dis}</td><td>${proinf[i].tot}</td><td>${proinf[i].catg}</td><td><button onclick="update(${i});">update</button></td><td><button onclick="deleteone(${i});">delete</button></td</tr>`;
        document.getElementById('table').innerHTML=ta;
      }else{
        document.getElementById('table').innerHTML=ta;
      }

    }

  }

}