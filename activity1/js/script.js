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
var thElement = document.createElement('thead');
var trElement = document.createElement('tr');
var theadElement = document.createElement('thead');

var thIdElement = document.createElement('td');
thIdElement.innerHTML = 'Id';

var thNameElement = document.createElement('td');
thNameElement.innerHTML = 'Name';

var thDepartmentElement = document.createElement('td');
thDepartmentElement.innerHTML = 'Department';

console.log(thIdElement);

trElement.appendChild(thIdElement);
trElement.appendChild(thNameElement);
trElement.appendChild(thDepartmentElement);

theadElement.appendChild(trElement);
tableElement.appendChild(theadElement);
wrapperElement.appendChild(tableElement);

var tdIdElement, tdNameElement, tdDeparmentElement;

tbodyElement = document.createElement('tbody');

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

tableElement.append(tbodyElement);
tableElement.classList.add('table');
tableElement.classList.add('table-dark');