const characters = 'QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkmjnhbgvfcdxsaz1234567890@#$%&';

function generatePass(){
    var password = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < 9; i++ ) {
        password += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return password;
}

function myFunction() {
    document.getElementById("para").innerHTML = generatePass();
  }
  

