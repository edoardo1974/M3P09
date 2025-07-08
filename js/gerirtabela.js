
/**
 * Generates an HTML table from a predefined 2D array of data and inserts it into the DOM.
 *
 */
function generateTable() {// Define a 2D array with the data for the table
    const data = [
        ["Celula da linha 0, coluna 0", "Celula da linha 0, coluna 1", "Celula da linha 0, coluna 2"],
        ["Celula da linha 1, coluna 0", "Celula da linha 1, coluna 1", "Celula da linha 1, coluna 2"],
        ["Celula da linha 2, coluna 0", "Celula da linha 2, coluna 1", "Celula da linha 2, coluna 2"]
    ];

    // Create the HTML table structure
    let tableHTML = `
        <table border="1" style="border: 1px solid black; margin: 20px 0;">
            <thead>        
                <tr>  <!-- Header row with three columns     -->
                    <th style="padding: 10px; text-align: center;">${data[0][0]}</th>  
                    <th style="padding: 10px; text-align: center;">${data[0][1]}</th>
                    <th style="padding: 10px; text-align: center;">${data[0][2]}</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    tableHTML += `<!-- Body rows with three columns each -->
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


    // Insert the generated table HTML into the DOM
    const container = document.getElementById('tableContainer');
    if (container) {
        container.innerHTML = tableHTML;
    } else {
        document.body.innerHTML += tableHTML;
    }
}





