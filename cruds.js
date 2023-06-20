//اول شئ تمسك العناصر وتختبرها ف الكونسول
let title= document.getElementById('title');
let price = document.getElementById('price');
let taxes= document.getElementById('taxes');
let ads= document.getElementById('ads');
let discount = document.getElementById('discount');
let total= document.getElementById('total');
let count= document.getElementById('count');
let  category= document.getElementById('category');
let submit = document.getElementById('submit');
let mood = 'creat';
let tmb;
 //جلوبال وهو مساعد مربوط بحرف الاي




//عملية الجمع و الخصم في الاينبوتس
function gettotal(){
if(price.value != ''){
let result= +price.value + +taxes.value + +ads.value 
 - +(discount.value);
 total.innerHTML = result;
  total.style.background = '#008000';}
  else{
    total.innerHTML= '';
  total.style.background = '#fc0404'
  }
}

//عملية الكرييت

let datapro;
//لماذا كتبت نول ولم اكتب !=""
if(localStorage.product != null){ datapro=  JSON.parse(localStorage.product)}
else{datapro=[];}

submit.onclick = function(){
  ShowData()
//ليه استخدمت الكيرلي براسيس وما استخدمتش الاري 
//وليه استخدمت الفاصلة وما استخدمتش السيمي كولوم
    let newpro={
        title: title.value,
        ads:ads.value,
        price:price.value,
        taxes:taxes.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
    }




    if( mood === 'creat'){
//اشارة لاسم الزرار  
if(newpro.count>1){
      for(let i=0;i<newpro.count;i++)
      //الجزء دا هو البيعمل بوش وبيضيف النيو برو على الداتا برو هي دي عملية الكرييت 
     datapro.push(newpro)
   }else{
    datapro.push(newpro);
  }
  //كدا انا نقلت عملية التعديل التحت ل ال نيو برو وهي عملية الكرييت
  
    }else{
       datapro[ tmb ]= newpro
    submit.innerHTML='creat';
    count.style.display='block';
    };  //هنا بقل له التعديل الهيحصل في الداتا برو حطه في النيو برو

localStorage.setItem('product',JSON.stringify(datapro));
console.log(datapro);

ShowData();
clearData();
}


//clear dataمسح البيانات
function clearData(){
  title.value='';
  ads.value='';
  price.value='';
  taxes.value='';
  discount.value='';
  count.value='';
  category.value='';
  total.innerHTML=''
  }
///عايز اكرر كل الانا اتعلمته من اول بس بعد لما اذاكر الحلقة ال6  

function ShowData(){
  
  let table= '';
  //عشان اشغل العملية لازم اعمل لووب
  for(i=0;i<datapro.length;i++){
    table +=` 
      <tr>
    <td>${[i]}</td>   
    <td>${datapro[i].title}</td>
    <td>${datapro[i].price}</td>
    <td>${datapro[i].taxes}</td>
    <td>${datapro[i].ads}</td>
    <td>${datapro[i].discount}</td>
    <td>${datapro[i].category}</td>
    <td>${datapro[i].total}</td>
    <td><button onclick="updatedata(${i})" id="update">update</button></td>
    <td><button onclick="deletedata(${i})" id="delete">delete</button></td>
    </tr>
    `
    let deleteall = document.getElementById('deleteall');
if(datapro.length>0){
deleteall.innerHTML=`<button onclick="DeleteAll()" 
id="delete">Delete All(${datapro.length})</button>`
} else{deleteall.innerHTML = ' ';}
  }
  document.getElementById('tbody').innerHTML=table;
  
}

//حذف المنتجات
function deletedata(i){
  datapro.splice(i,1);
  localStorage.product=JSON.stringify(datapro);
  ShowData();
}

function DeleteAll(){
  datapro.splice(0);
  localStorage.clear();//هذه ميثود مثل الاسبليس الفوقيها وليست الفانكشن الاحنا عملناها
  ShowData();
}


function updatedata(i){
  //هذه اول خطوة وهي عملية اخذ قيمة الاندكس ولن تعمل الا بعد ربطها بعملية الكرييت
  //وهذا بعمل ايف والس 
  //ويجب ان يتم ربطها بعملية الكرييت حتى نستطيع التعديل فيها 
  //لا يمكن استخدام حرف الاي لانه لا يمكن استخدامه الا في الفانكشن لذلك هنعمل 
  // متغير مساعد
  title.value= datapro[i].title;///الداتا برو هو الارري البيتحفظ فيه البيانات
  price.value=datapro[i].price;//فانا لما اقله بريس دوت فاليو معناها هات قيمة البريس
  ads.value=datapro[i].ads;
  taxes.value=datapro[i].taxes;
  category.value=datapro[i].category;
  discount.value=datapro[i].discount;
  gettotal();
  submit.innerHTML='update';
  count.style.display='none';
  scroll({
    top:0,
    behavior:'smooth'
  })
  mood='update';
  tmb=i;

}

























