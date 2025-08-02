let currentItems = magicItems;

function getRarityClass(rarity) {
    const rarityMap = {
        'Common': 'common',
        'Uncommon': 'uncommon',
        'Rare': 'rare',
        'Very Rare': 'very-rare',
        'Legendary': 'legendary',
        'Artifact': 'artifact'
    };
    return rarityMap[rarity] || 'common';
}

function createItemCard(item) {
    const card = document.createElement('div');
    card.className = `item-card ${getRarityClass(item.rarity.name)}`;

    // Clean up the description - remove quotes and excessive formatting
    let description = item.desc.replace(/^"|"$/g, '').replace(/\\n/g, ' ').replace(/\s+/g, ' ').trim();

    // Truncate description if too long
    if (description.length > 200) {
        description = description.substring(0, 200) + '...';
    }

    card.innerHTML = `
        <div class="card-header">
            <h3 class="item-name">${item.name}</h3>
            <span class="rarity-badge ${getRarityClass(item.rarity.name)}">${item.rarity.name}</span>
        </div>
        <div class="card-content">
            <div class="item-category">
                <span class="category-badge">${item.equipment_category.name}</span>
            </div>
            <p class="item-description">${description}</p>
        </div>
        <div class="card-footer">
            <button class="expand-btn" onclick="toggleDescription(this, '${item.index}')">
                Read More
            </button>
        </div>
    `;

    return card;
}

function renderItems(items) {
    const container = document.getElementById('itemsContainer');
    const noResults = document.getElementById('noResults');

    container.innerHTML = '';

    if (items.length === 0) {
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';

    items.forEach(item => {
        const card = createItemCard(item);
        container.appendChild(card);
    });
}

function filterItems() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const rarityFilter = document.getElementById('rarityFilter').value;
    const categoryFilter = document.getElementById('categoryFilter').value;

    let filtered = magicItems.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm) ||
            item.desc.toLowerCase().includes(searchTerm);
        const matchesRarity = !rarityFilter || item.rarity.name === rarityFilter;
        const matchesCategory = !categoryFilter || item.equipment_category.index === categoryFilter;

        return matchesSearch && matchesRarity && matchesCategory;
    });

    currentItems = filtered;
    renderItems(filtered);
}

function toggleDescription(button, itemIndex) {
    const item = magicItems.find(i => i.index === itemIndex);
    const card = button.closest('.item-card');
    const descriptionElement = card.querySelector('.item-description');

    if (button.textContent === 'Read More') {
        // Show full description
        let fullDescription = item.desc.replace(/^"|"$/g, '').replace(/\\n/g, '<br>');
        descriptionElement.innerHTML = fullDescription;
        button.textContent = 'Read Less';
        card.classList.add('expanded');
    } else {
        // Show truncated description
        let description = item.desc.replace(/^"|"$/g, '').replace(/\\n/g, ' ').replace(/\s+/g, ' ').trim();
        if (description.length > 200) {
            description = description.substring(0, 200) + '...';
        }
        descriptionElement.innerHTML = description;
        button.textContent = 'Read More';
        card.classList.remove('expanded');
    }
}

// Event listeners
document.getElementById('searchInput').addEventListener('input', filterItems);
document.getElementById('rarityFilter').addEventListener('change', filterItems);
document.getElementById('categoryFilter').addEventListener('change', filterItems);

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderItems(magicItems);
});
