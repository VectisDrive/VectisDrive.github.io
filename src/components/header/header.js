document.addEventListener('DOMContentLoaded', () => {
    fetch('src/components/header/header.html')
        .then(response => response.text())
        .then(data => {
            const headerContainers = document.querySelectorAll('.header-component');
            headerContainers.forEach(container => {
                container.innerHTML = data;
            });
        }); 
});