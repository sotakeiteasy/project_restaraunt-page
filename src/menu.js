function loadMenu() {
    const content = document.querySelector('#content')
    content.textContent = '';  // Clear the existing content

    // Menu section
    const menuSection = document.createElement('div')
    menuSection.id = 'menu';
    const menuHeader = document.createElement('h2');
    menuHeader.textContent = 'Our Menu';
    const menuList = document.createElement('ul');

    // Menu items
    const menuItems = [
        {name: 'Dish 1', description: 'Description of the dish', price: '10$.00'},
        {name: 'Dish 2', description: 'Description of the dish', price: '15$.00'}
    ]

    menuItems.forEach(item => {
        const listItem = document.createElement('li');
        const dishName = document.createElement('h3');
        dishName.textContent = item.name;
        const dishDescription = document.createElement('p');
        dishDescription.textContent = item.description;
        const dishPrice = document.createElement('span');
        dishPrice.textContent = `Price: ${item.price}`;

        listItem.appendChild(dishName);
        listItem.appendChild(dishDescription);
        listItem.appendChild(dishPrice);
        menuList.appendChild(listItem);
    });

    menuSection.appendChild(menuHeader);
    menuSection.appendChild(menuList);

    content.appendChild(menuSection);
}

export default loadMenu;