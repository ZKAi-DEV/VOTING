const buttons = document.querySelectorAll('.vote-button');
const selectedOption = document.getElementById('selected-option');
const resultTable = document.querySelector('.result-table table');

let votes = [0, 0, 0, 0, 0, 0];

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const option = index + 1;
        selectedOption.textContent = `Konsumen memilih Pilihan ${option}`;
        votes[index]++;
        updateResultTable();
        disableButtons();
    });
});

// ... existing code ...
{{ 
    // ... existing code ...
    
    function updateResultTable() {
        resultTable.innerHTML = `
            <tr>
                <th>Pilihan</th>
                <th></th> 
                <th>Jumlah Suara</th>
            </tr> 
            ${votes.map((vote, index) => `<tr><td>Pilihan ${index + 1}</td><td></td><td>=</td><td>${vote}</td></tr>`).join('')}
        `;
    
        // Scroll ke bawah setelah pemilihan
        resultTable.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
    
    // ... existing code ...
    }}
// ... existing code ...
function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    });
}

