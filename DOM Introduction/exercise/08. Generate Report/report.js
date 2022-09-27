function generateReport() {

    let tableRow = document.querySelectorAll('tbody tr');
    let tableHeader = document.querySelectorAll('thead tr th');

    let result = [];

    for (let i = 0; i < tableRow.length; i++) {

        let tableData = tableRow[i].cells;
        let temp = {};

        for (let j = 0; j < tableData.length; j++) {

            let infoHeader = tableHeader[j].childNodes;
            if (infoHeader[1].checked === true) {
                temp[infoHeader[0].textContent.trim().toLocaleLowerCase()] = tableData[j].textContent;
            }
        }
        result.push(temp);
    }
    document.getElementById('output').textContent = JSON.stringify(result);
}