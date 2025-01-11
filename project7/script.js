const generatePassword = () => {
const lengthPass =  document.getElementById('lengthPass').value;
const charset = "abcdefghijklmmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@!#$%&_-+=/"

let randomPassword = '';

for (let i = 0; i < lengthPass; i++) { 
    const randomIndex = Math.round(Math.random() * charset.length);
    const randomChar = charset[randomIndex];
    randomPassword += randomChar;
}
 document.getElementById('passwordDisplay').innerText = randomPassword;
}    
