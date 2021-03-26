(() => {
    var imageElement = document.getElementById('target');
        
    // Utilicé otro nombre de archivo para aclarar
    // el propósito del ejercicio. :-)
    fetch('./img/non-default-300w.png')
        .then(response => {
            if (!response.ok) {
                throw new Error('Fetch error');
            }

            return response.blob();
        })
        .then(myBlob => {
            imageElement.src = URL.createObjectURL(myBlob);
        })
        .catch(error => {
            console.error('Exception catched:', error);
        });
})();