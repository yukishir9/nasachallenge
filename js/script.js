document.addEventListener('DOMContentLoaded', () => {
    let startBtn = document.getElementById('startBtn');
    let closeBtn = document.getElementById('close-button');
    let proceedBtn = document.getElementById('continue-button');
    let menu = document.getElementById('menu');

    let nameInput = document.getElementById('nameInput');
    let symbolsCount = document.getElementById('symbolsCount');

    startBtn.addEventListener('click', () => {
        menu.style.display = 'flex';
        setTimeout(() => {
            menu.classList.add('show');
        }, 10);
    });

    closeBtn.addEventListener('click', () => {
        menu.classList.remove('show');
        menu.addEventListener('transitionend', () => {
            if (!menu.classList.contains('show')) {
                menu.style.display = 'none'; 
            }
        }, { once: true });
    });

    nameInput.addEventListener('input', () => {
        const currentLength = nameInput.value.length;
        symbolsCount.textContent = `${currentLength}/24`;
    });

    let name = "";
    
    proceedBtn.addEventListener('click', () => {
        if (nameInput.value.length > 24) {
            nameInput.value = "The name length must not exceed 24";
        } else {
            name = nameInput.value;
        }
    })

});
