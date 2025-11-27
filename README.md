# FLYCOM - Electronics Accessories Showroom

A modern, full-featured showroom website for electronics accessories built with React. This project showcases products including adapters, chargers, earphones, cables, and more, with a comprehensive admin panel for content management.

## 🌟 Features

### Frontend
- **Product Showcase**: Browse products by category (Adapters, Chargers, Earphones)
- **Product Details**: Detailed product pages with images, specs, and compatibility info
- **Category Filtering**: Filter products by type and sub-categories
- **Wishlist & Compare**: Save favorite products and compare specifications
- **Image Carousel**: Dynamic homepage slider for promotions
- **Responsive Design**: Fully responsive across all devices
- **Showroom Mode**: Contact/Request Info instead of shopping cart

### Admin Panel
Complete content management system with localStorage persistence:

- **Slider Management**
  - Add, edit, delete homepage sliders
  - Preview sliders before publishing
  - Confirmation modals for safe operations

- **Product Inventory**
  - Full CRUD operations for products
  - Manage product details, images, pricing
  - Category assignment and compatibility tags
  - Preview product cards before adding

- **Category Management**
  - Create and manage product categories
  - Set category images and item counts
  - Auto-generate URL slugs

### UI/UX Features
- Modern glassmorphic design
- Smooth animations and transitions
- Preview modals for all content types
- Confirmation dialogs for destructive actions
- Cancel buttons in all forms
- Visual feedback for all actions

## 🛠️ Technologies Used

- **React** - UI framework
- **React Router** - Navigation and routing
- **Lucide React** - Icon library
- **TailwindCSS** - Utility-first CSS framework
- **LocalStorage** - Client-side data persistence

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <https://github.com/rayenamri090-code/public_2>
   cd public_2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

The app will run on `http://localhost:3000`

## 📁 Project Structure

```
src/
├── pages/               # Main page components
│   ├── AdminPage.js     # Admin dashboard
│   ├── ProductDisplay.js # Product detail page
│   ├── ProductsGrid.js  # Product listing
│   ├── CategoryPage.js  # Category-filtered products
│   └── ImageCarousel.js # Homepage slider
│
├── myComponents/        # Reusable components
│   ├── admin/          # Admin-specific components
│   │   ├── SliderList.js
│   │   ├── EditSlider.js
│   │   ├── ProductList.js
│   │   ├── EditProduct.js
│   │   ├── CategoryList.js
│   │   └── EditCategory.js
│   ├── ProductCard.js
│   ├── ProductModal.js
│   ├── CategoryCard.js
│   └── Navbar.js
│
├── utils/              # Storage utilities
│   ├── sliderStorage.js
│   ├── productStorage.js
│   └── categoryStorage.js
│
└── data/               # Static data
    └── products.js
```

## 🔐 Admin Access

Access the admin panel at `/admin`

**Default Features:**
- Manage homepage sliders
- Add/Edit/Delete products
- Organize categories
- Preview all changes before publishing

## 💾 Data Persistence

Data is stored in browser's localStorage with these keys:
- `admin_sliders` - Homepage carousel slides
- `admin_products` - Product inventory
- `admin_categories` - Product categories
- `wishlist` - User's saved products
- `compare` - Products in comparison

**Note:** Data is browser-specific and won't sync across devices.

## 🎨 Customization

### Adding New Products
1. Go to Admin → New Inventory
2. Fill in product details
3. Preview the product card
4. Save to inventory

### Editing Categories
1. Go to Admin → Categories
2. Select category to edit
3. Update details and preview
4. Confirm changes

### Managing Sliders
1. Go to Admin → Sliders
2. Add new slides or edit existing
3. Preview slider appearance
4. Publish changes

## 🚀 Future Enhancements

- [ ] Backend integration for persistent storage
- [ ] User authentication for admin panel
- [ ] Product search functionality
- [ ] Advanced filtering options
- [ ] Export/Import data functionality
- [ ] Multi-language support
- [ ] Analytics dashboard

## 📝 Notes

- This is a **showroom website**, not an e-commerce platform
- "Contact Us" and "Request Info" buttons replace shopping cart
- All data stored locally in browser
- Admin panel accessible without authentication (add auth for production)

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements.

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ for showcasing electronics accessories**
