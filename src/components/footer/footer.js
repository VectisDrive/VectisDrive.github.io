document.addEventListener('DOMContentLoaded', () => {
    fetch('src/components/footer/footer.html')
        .then(response => response.text())
        .then(data => {
            const headerContainers = document.querySelectorAll('.footer-component');
            headerContainers.forEach(container => {
                container.innerHTML = data;
            });
        }); 
});