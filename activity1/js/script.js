var employees = [
    {
        "id":1,
        "name":"MIRIAM CASTIÑEIRA BREA",
        "department":"IT"
    },
    {
        "id":2,
        "name":"GONZALO MULET FIGUERAS",
        "department":"IT"
    },
    {
        "id":3,
        "name":"FRANCISCO JOSE GRAÑA BARBERA",
        "department":"IT"
    },
    {
        "id":4,
        "name":"IRENE POMBO JORDA",
        "department":"HR"
    }
]

var wrapperElement = document.getElementById('table-container');
var tableElement = document.createElement('table');

var thElement = document.createElement('th');
var theadElement = tableElement.createTHead();

var theadRowElement = theadElement.insertRow();

var thIdElement = document.createElement('th');
thIdElement.innerHTML = 'Id';

var thNameElement = document.createElement('th');
thNameElement.innerHTML = 'Name';

var thDepartmentElement = document.createElement('th');
thDepartmentElement.innerHTML = 'Department';

theadRowElement.appendChild(thIdElement);
theadRowElement.appendChild(thNameElement);
theadRowElement.appendChild(thDepartmentElement);

wrapperElement.appendChild(tableElement);

var tdIdElement, tdNameElement, tdDeparmentElement;

tbodyElement = tableElement.createTBody();

var tbodyElements = employees.map((e) => {
    tdIdElement = document.createElement('td');
    tdNameElement = document.createElement('td');
    tdDepartmentElement = document.createElement('td');

    tdIdElement.innerHTML = e.id;
    tdNameElement.innerHTML = e.name;
    tdDepartmentElement.innerHTML = e.department;

    trElement = document.createElement('tr');

    trElement.appendChild(tdIdElement);
    trElement.appendChild(tdNameElement);
    trElement.appendChild(tdDepartmentElement);

    return trElement;
});

for (var i = 0; i < tbodyElements.length; i++) {
    tbodyElement.appendChild(tbodyElements[i]);
}

tableElement.classList.add('table');
tableElement.classList.add('table-dark');