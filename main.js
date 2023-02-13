'use strict'

{


  //スライダーの数値によりパスワードの桁数を変更

  const passwordLength = document.getElementById('passwordLength');
  const slider = document.getElementById('slider')

  slider.addEventListener('input' , ()=>{
    passwordLength.textContent = slider.value
  });

  
  //パスワードをランダム生成
  const btn = document.querySelector('.btn');
  const numbersCheckbox = document.getElementById('numbersCheckbox')
  const SymbolsCheckbox = document.getElementById('SymbolsCheckbox')

  function showPassword (){
    
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const result = document.getElementById('result');
    const numbers = '1234567890';
    const Symbols = '!#$%&';
    let seed = letters + letters.toUpperCase();
    let password = '';
  
    
   if(numbersCheckbox.checked){
     seed += numbers
   }
   if(SymbolsCheckbox.checked){
     seed += Symbols
   }
    for(let i = 0 ; i < slider.value ; i ++ ){
      password += seed[Math.floor(Math.random() * seed.length)];
    }
      result.textContent = password;
  }
  
  btn.addEventListener('click', () =>{
   showPassword();

  });
  showPassword();

}