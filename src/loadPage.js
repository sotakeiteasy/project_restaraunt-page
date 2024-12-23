import dish1 from "./dish1.jpg";
import dish2 from "./dish2.jpg";
import dish3 from "./dish3.jpg";
import restaurant_interior from "./restaurant-interior.jpg";



import "./styles.css";


function loadPage() {   
    const content = document.querySelector('#content');
    content.textContent = ''; // Clear the existing content

    // Header Section
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const navItems = ['About', 'Today\'s Menu', 'Our Story', 'Gallery', 'Chefs', 'Reviews'];
    navItems.forEach(item => {
        const navLink = document.createElement('a');
        navLink.href = `#${item.toLowerCase().replace(/\s+/g, '-')}`;
        navLink.textContent = item;
        nav.appendChild(navLink);
    });
    header.appendChild(nav);
    content.appendChild(header);

    // About Us
    const aboutSection = document.createElement('section');
    aboutSection.id = 'about';
    aboutSection.classList.add('highlight');
    const aboutHeader = document.createElement('h1');
    aboutHeader.textContent = "Welcome to Gourmet Haven";
    const aboutText = document.createElement('p');
    aboutText.textContent = 'Discover the finest dining experience where flavor meets passion.';
    const aboutImage = document.createElement('img');
    aboutImage.src = restaurant_interior; 
    aboutImage.alt = 'Restaurant view';
    aboutImage.id = 'hero'
    aboutSection.append(aboutHeader, aboutText, aboutImage);

    // Menu Section
    const menuSection = document.createElement('section');
    menuSection.id = 'today\'s-menu';
    const menuHeader = document.createElement('h2');
    menuHeader.textContent = 'Menu of the Day';
    const menuItems = [
        { dish: 'Spaghetti Carbonara', description: 'Classic Italian pasta with creamy sauce, bacon, and parmesan.' },
        { dish: 'Grilled Salmon', description: 'Succulent salmon fillet grilled to perfection, served with lemon butter.' },
        { dish: 'Chocolate Lava Cake', description: 'A rich, decadent dessert with a molten chocolate center.' }
    ];
    const menuList = document.createElement('ul');
    menuItems.forEach(item => {
        const menuItem = document.createElement('li');
        menuItem.innerHTML = `<strong>${item.dish}:</strong> ${item.description}`;
        menuList.appendChild(menuItem);
    });
    menuSection.append(menuHeader, menuList);

    // History Section
    const historySection = document.createElement('section');
    historySection.id = 'our-story';
    const historyHeader = document.createElement('h2');
    historyHeader.textContent = 'Our Story';
    const historyText = document.createElement('p');
    historyText.textContent = 'Founded in 1998, Gourmet Haven started as a small family-owned eatery and grew into a beloved culinary landmark.';
    const milestones = [
        '1998: Opened our first restaurant.',
        '2005: Featured in "Top 10 Restaurants of the Year".',
        '2020: Launched our signature gourmet delivery service.'
    ];
    const milestoneList = document.createElement('ul');
    milestones.forEach(milestone => {
        const item = document.createElement('li');
        item.textContent = milestone;
        milestoneList.appendChild(item);
    });
    historySection.append(historyHeader, historyText, milestoneList);

    // Chefs Section
    const chefsSection = document.createElement('section');
    chefsSection.id = 'chefs';
    const chefsHeader = document.createElement('h2');
    chefsHeader.textContent = 'Meet Our Chefs';
    chefsSection.appendChild(chefsHeader)

    const chefsText = document.createElement('p');
    chefsText.textContent = 'Our talented chefs craft unforgettable dishes, blending traditional techniques with modern flavors.';
    const chefProfiles = [
        { name: 'Chef Anna Rossi', bio: 'Specializes in Italian cuisine and has over 20 years of experience.' },
        { name: 'Chef Carlos Martinez', bio: 'A master of seafood and fusion cooking.' }
    ];
    chefProfiles.forEach(profile => {
        const profileSection = document.createElement('article');
        const profileName = document.createElement('h3');
        profileName.textContent = profile.name;
        const profileBio = document.createElement('p');
        profileBio.textContent = profile.bio;
        profileSection.append(profileName, profileBio);
        chefsSection.appendChild(profileSection);
    });
    chefsSection.appendChild(chefsText);

    // Gallery Section
    const gallerySection = document.createElement('section');
    gallerySection.id = 'gallery';
    const galleryHeader = document.createElement('h2');
    galleryHeader.textContent = 'Gallery';
    gallerySection.append(galleryHeader);

    const imageContainer = document.createElement('div');
    imageContainer.id = 'imageContainer'
    const images = [dish1, dish2, dish3]; // Imported paths
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Dish image';
        imageContainer.appendChild(img);
    });
    gallerySection.appendChild(imageContainer)

    // Reviews Section
    const reviewsSection = document.createElement('section');
    reviewsSection.id = 'reviews';
    const reviewsHeader = document.createElement('h2');
    reviewsHeader.textContent = 'Customer Reviews';
    reviewsSection.appendChild(reviewsHeader)

    const reviews = [
        { name: 'John Doe', text: 'Delicious food and great service.' },
        { name: 'Jane Smith', text: 'Perfect for family gatherings!' }
    ];
    reviews.forEach(review => {
        const reviewItem = document.createElement('blockquote');
        reviewItem.innerHTML = `<strong>${review.name}:</strong> ${review.text}`;
        reviewsSection.appendChild(reviewItem);
    });


    // Append sections to content
    content.append(
        aboutSection,
        menuSection,
        historySection,
        gallerySection,
        chefsSection,
        reviewsSection,
    );
}


export default loadPage;
