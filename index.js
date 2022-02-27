 document.getElementById('calculate').addEventListener('click',function(){
 const food = document.getElementById('food').value;
 const rent = document.getElementById('rent').value;
 const clothes = document.getElementById('clothes').value;
 const totalexpense = document.getElementById('total-expense').innerText;
 if(food>0 && rent>0 && clothes>0){
 document.getElementById('total-expense').innerText = parseInt(food) +parseInt(rent)+ parseInt(clothes)}
 else{alert('put positive number')}

});

  /*total expense and balance*/
 
 document.getElementById('calculate').addEventListener('click',function(){
  const income = document.getElementById('income').value;
  const balance = document.getElementById('balance').innerText;
  const totalexpense = document.getElementById('total-expense').innerText;
  if(income>0){
  document.getElementById('balance').innerText = parseInt(income) - totalexpense}
  else{alert('put positive number')}

  document.getElementById('save').addEventListener('click',function(){
    const income = document.getElementById('income').value;
      const savings =  parseInt(income)*.2;
     const savingAmonut =  document.getElementById('saving-amount').innerText;
     document.getElementById('saving-amount').innerText = savings;
     const remainingBalance = document.getElementById('balance').innerText - document.getElementById('saving-amount').innerText;
     const finalBalance = document.getElementById('remaining-balance').innerText;
     document.getElementById('remaining-balance').innerText = parseInt(remainingBalance);

  })

 

  });