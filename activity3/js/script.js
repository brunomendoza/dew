(() => {
    var wrapperElement = document.getElementById('wrapper');
    var formElement = document.createElement('form');
    var tableWrapper = document.createElement('div');

    var labelColsElement = document.createElement('label');
    labelColsElement.innerHTML = "Cols&nbsp;";
    var inputColsElement = document.createElement('input');
    inputColsElement.setAttribute('type', 'number');
    labelColsElement.appendChild(inputColsElement);

    var labelRowsElement = document.createElement('label');
    labelRowsElement.innerHTML = "Rows&nbsp;";
    var inputRowsElement = document.createElement('input');
    inputRowsElement.setAttribute('type', 'number');
    labelRowsElement.appendChild(inputRowsElement);

    var buttonElement = document.createElement('button');
    buttonElement.innerHTML = "Do it!"

    formElement.appendChild(labelRowsElement);
    formElement.appendChild(labelColsElement);
    formElement.appendChild(buttonElement);

    wrapperElement.appendChild(formElement);
    wrapperElement.appendChild(tableWrapper);

    buttonElement.addEventListener('click', e => {
        e.preventDefault();
        var cols = inputColsElement.value;
        var rows = inputRowsElement.value;

        if (rows > 0 && cols > 0) {
            tableWrapper.appendChild(handleTable(cols, rows));
        }
    });
})();

function handleTable(cols, rows) {
    var tableElement = document.getElementById('generated');
    
    if (tableElement) {
        tableElement.remove();
    }
    
    tableElement = document.createElement('table');
    tableElement.id = 'generated';
    tableElement.classList.add(["table"]);
    
    for (var i = 0; i < rows; i++) {
        var trElement = document.createElement('tr');

        for (var j = 0; j < cols; j++) {
            var tdElement = document.createElement('td');
            tdElement.innerHTML = "Row: " + i + ", Col: " + j;
            trElement.appendChild(tdElement);
        }

        tableElement.appendChild(trElement);
    }

    return tableElement;
}
