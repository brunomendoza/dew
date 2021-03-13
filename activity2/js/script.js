
if ($(document).ready()) {
    var $wrapperElement = $('#table-container');

    $.getJSON("./employees.json", (data, status, jqXHR) => {
        console.log(status);
        console.log(jqXHR);

        $.each(data, function(key, val) {
            $.each(val, function(objKey, objVal) {
                // console.log(objKey + ": " + objVal);
            });
        });
    });

    var $theadElement = $('<thead><tr><td>id</td><td>Name</td><td>Department</td></tr></thead>')
    var $tableElement = $('<table>');
    $tableElement.append($theadElement);
    $wrapperElement.append($tableElement);
    console.log($tableElement);
    var tbodyElement = document.createElement('tbody');
}

