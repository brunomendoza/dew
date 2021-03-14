(() => {
    var wrapperElement = document.getElementById('wrapper');
    var formElement = document.createElement('form');
    var tableWrapper = document.createElement('div');

    var inputColsElement = document.createElement('input');
    inputColsElement.setAttribute('type', 'number');

    var inputRowsElement = document.createElement('input');
    inputRowsElement.setAttribute('type', 'number');

    var buttonElement = document.createElement('button');
    buttonElement.innerHTML = "Do it!"

    formElement.appendChild(inputRowsElement);
    formElement.appendChild(inputColsElement);
    formElement.appendChild(buttonElement);

    wrapperElement.appendChild(formElement);
    wrapperElement.appendChild(tableWrapper);

    buttonElement.addEventListener('click', e => {
        e.preventDefault();
        tableWrapper.appendChild(handleTable(3, 4));
    });
})();

function handleTable(cols, rows) {
    var tableElement = document.getElementById('#table');

    if (tableElement) {
        tableElement.remove();
    }

    tableElement = document.createElement('table');
    tableElement.id = 'table';

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
