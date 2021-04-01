function changePara() {
    const pElement = document.getElementById('text');
    if (pElement.style.color === 'red') {
        pElement.style.color = 'black';
        pElement.style.fontSize = '16px';
        pElement.style.fontFamily = "Times New Roman";
    } else {
        pElement.style.color = 'red';
        pElement.style.fontSize = '50px';
        pElement.style.fontFamily = "Impact,Charcoal,sans-serif";
    }
}