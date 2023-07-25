import cipher from './cipher.js';
//console.log(cipher);

const key = document.getElementById('offset');  
const message = document.getElementById('message'); 

function encryptMessage (){ 
  const secret = cipher.encode(key.value, message.value); 
  document.getElementById('secretMessage').innerText = secret; 
}

const encrypt = document.getElementById('encrypt');

encrypt.addEventListener('click', encryptMessage); 

const decrypt = document.getElementById('decrypt'); 

function decryptMessage (){
  const decrypted = cipher.decode(key.value, message.value);
  document.getElementById('secretMessage').innerText = decrypted;
}
decrypt.addEventListener('click', decryptMessage);