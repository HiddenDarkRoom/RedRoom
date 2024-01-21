// Vérifier si la date de fin est déjà stockée dans le localStorage
let endDate = localStorage.getItem('endDate');

// Si la date de fin n'est pas présente, définir une nouvelle date de fin (5 jours à partir de maintenant)
if (!endDate) {
    endDate = new Date();
    endDate.setDate(endDate.getDate() + 1);
    localStorage.setItem('endDate', endDate);
} else {
    // Si la date de fin est déjà présente, convertir la chaîne en objet Date
    endDate = new Date(endDate);
}

// Mettre à jour le compte à rebours chaque seconde
const countdownElement = document.getElementById('countdown');
const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = endDate - currentDate;

    if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days} jours ${hours} heures ${minutes} minutes ${seconds} secondes`;
    } else {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "The redroom is about to open!";
    }
}
