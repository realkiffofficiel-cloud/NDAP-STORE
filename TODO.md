# NdapStore2 Backend Development TODO

## Completed Tasks
- [x] Set up Node.js backend with Express.js
- [x] Create Product model with Mongoose
- [x] Create Cart model with Mongoose
- [x] Create User model with Mongoose
- [x] Create API routes for products (/api/products)
- [x] Create API routes for cart (/api/cart)
- [x] Create API routes for authentication (/api/auth)
- [x] Set up server.js with middleware and routes
- [x] Create package.json with dependencies
- [x] Create seed.js to populate database with products
- [x] Create .env file for environment variables
- [x] Update frontend to include JavaScript for dynamic functionality
- [x] Create main.js with product loading and cart functionality

## Pending Tasks
- [ ] Install Node.js dependencies (npm install)
- [ ] Seed the database with products (npm run seed)
- [ ] Start the backend server (npm start or npm run dev)
- [ ] Test API endpoints (products, cart, auth)
- [ ] Test frontend-backend integration
- [ ] Add cart display UI (show cart items, total, checkout)
- [ ] Add user authentication UI (login/register forms)
- [ ] Implement order processing functionality
- [ ] Test full e-commerce flow (browse -> add to cart -> checkout)
- [ ] Add error handling and validation
- [ ] Optimize performance and add loading states

## Notes
- Node.js installation issue: npm command not recognized. User needs to ensure Node.js is properly installed and PATH is set.
- MongoDB needs to be running locally or connection string updated in .env
- Frontend now loads products dynamically from API
- Cart functionality implemented but needs UI updates
