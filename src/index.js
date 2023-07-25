import cipher from './cipher.js';

const key = document.getElementById('offset');  
const message = document.getElementById('message'); 

message.addEventListener("input", function () {
  const innerMessage = message.value;
  const upperCase = innerMessage.toUpperCase();
  message.value = upperCase;
});

function encryptMessage (){ 
  const secret = cipher.encode(key.value, message.value); 
  document.getElementById('secretMessage').innerText = secret; 
}
const encrypt = document.getElementById('encrypt');
encrypt.addEventListener('click', encryptMessage); 


function decryptMessage (){
  const decrypted = cipher.decode(key.value, message.value);
  document.getElementById('secretMessage').innerText = decrypted;
}
const decrypt = document.getElementById('decrypt');
decrypt.addEventListener('click', decryptMessage);


function copySecret(){
  document.getElementById("secretMessage").select();
  document.execCommand("copy");
  alert("Copiado!");
  location.reload();
}
const copyMessage = document.getElementById("copyMessage");
copyMessage.addEventListener('click', copySecret);

const reload = document.getElementById("reload")
function reloadPage(){
  location.reload();
}
reload.addEventListener("click", reloadPage);