const cipher = {
  encode: function(key, message) {
    key = Number(key);
    if (typeof key !== 'number' || typeof message !== 'string') {
      throw new TypeError('Somente letras e números');
    } else {
      let encryptMessage = '';
      for (let i = 0; i < message.length; i++){
        let char = message[i];
        const limit = 'A'.charCodeAt();
        if (char.match(/[A-Z]/)){
          const codeAsc = ((char.charCodeAt() - limit + key) % 26) + limit;
          char = String.fromCharCode(codeAsc);
        }
        encryptMessage += char;
      }    
      return encryptMessage;
    }
  },
  
  decode: function(key, encryptMessage) {
    key = Number(key);
    if (typeof key !== 'number' || typeof encryptMessage !== 'string'){
      throw new TypeError('Somente letras e números');
    } else {
      let decryptMessage = '';
      for (let i = 0; i < encryptMessage.length; i++){
        let char = encryptMessage[i];
        const limit = 'A'.charCodeAt();
        
        if (char.match(/[A-Z]/)){
          const codeAsc = ((char.charCodeAt() + limit - key) % 26) + limit;  
          char = String.fromCharCode(codeAsc);
        }
        decryptMessage += char;
      }
      return decryptMessage;
    }
  }

};

export default cipher;


