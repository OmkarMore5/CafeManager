
    const tabs = document.querySelectorAll('.tab');
    const sections = document.querySelectorAll('.menu-section');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            sections.forEach(section => {
                section.style.display = section.id === tab.dataset.tab ? 'block' : 'none';
            });
        });
    });
