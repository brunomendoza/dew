(() => {
    if ($(document).ready()) {
    
        $.getJSON("./employees.json").done((arr) => {
            var $wrapperElement = $('#table-container');
            var $tableElement = $('<table>');
            var $theadElement = $('<thead><tr><td>id</td><td>Name</td><td>Department</td></tr></thead>')
            var $tbodyElement = $('<tbody>');
        
            $tableElement.append($theadElement);

            arr.forEach(obj => {
                var $trElement = $('<tr>');

                $trElement.append($('<td>').text(obj.id));
                $trElement.append($('<td>').text(obj.name));
                $trElement.append($('<td>').text(obj.department));

                $tbodyElement.append($trElement);   
            });

            $tableElement.append($theadElement);
            $tableElement.append($tbodyElement);
            $tableElement.addClass(['table', 'table-dark']);

            $wrapperElement.append($tableElement);
        });
    }
})();

