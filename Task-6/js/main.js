function changeCellInfo() {
    const row = window.prompt('Select row (0,1,2,3):');
    const cell = window.prompt('Select cell (0,1,2):');
    const text = window.prompt('Add text:');

    let x = document.getElementById('tbody').rows[parseInt(row, 10)].cells;
    x[parseInt(cell, 10)].innerHTML = text;
}
