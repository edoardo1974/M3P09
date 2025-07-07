// Funzione per generare una tabella 3x3 usando innerHTML
function generateTable() {
    // Dati di esempio per la tabella 3x3
    const data = [
        ["Cella 1,1", "Cella 1,2", "Cella 1,3"],
        ["Cella 2,1", "Cella 2,2", "Cella 2,3"],
        ["Cella 3,1", "Cella 3,2", "Cella 3,3"]
    ];

    // Creare l'HTML della tabella
    let tableHTML = `
        <table border="1" style="border-collapse: collapse; margin: 20px 0;">
            <thead>        
                <tr>       
                    <th style="padding: 10px; text-align: center;">${data[0][0]}</th>  
                    <th style="padding: 10px; text-align: center;">${data[0][1]}</th>
                    <th style="padding: 10px; text-align: center;">${data[0][2]}</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    tableHTML += `
    <tr>
        <td style="padding: 10px; text-align: center;">${data[1][0]}</td>
        <td style="padding: 10px; text-align: center;">${data[1][1]}</td>
        <td style="padding: 10px; text-align: center;">${data[1][2]}</td>
    </tr>
    <tr>
        <td style="padding: 10px; text-align: center;">${data[2][0]}</td>
        <td style="padding: 10px; text-align: center;">${data[2][1]}</td>
        <td style="padding: 10px; text-align: center;">${data[2][2]}</td>
    </tr>
        </tbody>
    </table>
`;

 /*   
    data.forEach(riga => {
        tableHTML += `<tr>`;
        riga.forEach(cella => {
            tableHTML += `<td style="padding: 10px; text-align: center;">${cella}</td>`;
        });
        tableHTML += `</tr>`;
    });

    tableHTML += `
            </tbody>
        </table>
    `;

    */

    // Inserire la tabella nel DOM (meglio usare getElementById invece di body)
    const container = document.getElementById('tableContainer');
    if (container) {
        container.innerHTML = tableHTML;
    } else {
        document.body.innerHTML += tableHTML;
    }
}





