import cipher from './cipher.js';

const key = document.getElementById('offset');  //chama o deslocamento melhorias: alerta para a pessoa não esquecer
const message = document.getElementById('message'); //chama a mensagem

message.addEventListener("input", function () { //função para deixar a entrada da msg toda maiuscula
  const innerMessage = message.value;
  const upperCase = innerMessage.toUpperCase();
  message.value = upperCase;
});

function encryptMessage (){  //função para pegar a msg digitada e criptografá-la com o encode
  const secret = cipher.encode(key.value, message.value); //não deveria ser upper? Mas por outro lado, se message.value é = upper, então ele puxa certo
  document.getElementById('secretMessage').innerText = secret; //substitui o valor
}
const encrypt = document.getElementById('encrypt'); //chama o botão de encrypt
encrypt.addEventListener('click', encryptMessage); //clicar no botão para criptografar


function decryptMessage (){ //função para descriptar a msg
  const decrypted = cipher.decode(key.value, message.value);
  document.getElementById('secretMessage').innerText = decrypted;
}
const decrypt = document.getElementById('decrypt');
decrypt.addEventListener('click', decryptMessage);


function copySecret(){ //função para um botão de copiar a mensagem
  document.getElementById("secretMessage").select();
  document.execCommand("copy"); //melhorias: trocar o execCommand
  alert("Copiado!"); //melhorias: substituir para aparecer na textarea
  location.reload(); //melhorias: reload somente nas caixas para manter o offset
}
const copyMessage = document.getElementById("copyMessage");
copyMessage.addEventListener('click', copySecret);

const reload = document.getElementById("reload")
function reloadPage(){
  location.reload();
}
reload.addEventListener("click", reloadPage);