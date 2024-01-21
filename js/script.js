function password() {
    var motDePasseSaisi = prompt('Please enter your access code !');
    

    if (motDePasseSaisi.split('').reverse().join('') ==="==password==") {
        alert('Access granted ! OK to continue.');
        window.location.href = './RedRoom/index.html';
    } else {
        var audio = new Audio('./sound/impact.wav');
        audio.play();
       var alertMessage = ("¤¤¤ INCORRECT ¤¤¤\n--- Get private access code ---\n* Contact Me *\ndarknet-redroom@proton.me");
       alert(alertMessage);
    }
}

function obfusquerMotDePasse(motDePasseSaisi) {
    return motDePasseSaisi.split('').reverse().join('');
}

