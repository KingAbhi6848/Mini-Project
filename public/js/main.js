document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const itemList = document.getElementById('itemList');
    const items = itemList.getElementsByTagName('li');

    searchInput.addEventListener('keyup', () => {
        const filter = searchInput.value.toLowerCase();
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const text = item.textContent || item.innerText;
            if (text.toLowerCase().includes(filter)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        }
    });
});
