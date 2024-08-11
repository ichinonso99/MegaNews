// function updateDateTime() {
//     const now = new Date();
//     document.getElementById('datetime').textContent =
//         `Date: ${now.getDate()}, Month: ${now.toLocaleString('default', { month: 'long' })}, Year: ${now.getFullYear()}, Time: ${now.toLocaleTimeString()}`;
// }
// window.onload = updateDateTime;
// setInterval(updateDateTime, 1000);


function updateDateTime() {
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 12) {
        greeting = 'Good morning';
    } else if (hours < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }

    document.getElementById('datetime').textContent = 
        `${greeting}! Date: ${now.getDate()}, Month: ${now.toLocaleString('default', { month: 'long' })}, Year: ${now.getFullYear()}, Time: ${now.toLocaleTimeString()}`;
}

window.onload = updateDateTime;
setInterval(updateDateTime, 1000);


