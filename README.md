# Project Name: HabibiCoffee

### Project description:
HabibiCoffee is a Next js app where people cun buy coffee and they can Login,Register,See Producets (coffees). Login user can add product.  
### liveUrl: https://habib-shop.vercel.app/


### Setup & installation instructions

#### 1. Clone the repository
- git clone https://github.com/sufihasan/habibi-coffee.git
- cd habibi-coffee

#### 2. Install dependencies
- npm install

#### 3. Set up environment variables

- NEXTAUTH_SECRET=secret_key
- NEXTAUTH_URL=https://habib-shop.vercel.app
- DATABASE_URL=database_url


### key features:
- User login.
- user register.
- Create Service.
- User logout.
- Show 6  group, Home page
- User can see which service he created in my service
- User can update and delete which  service he create.
- user can add review.
- user can update and delete review
- Loading where need.
- Responsive for Desktop, laptop, tab and mobile device
- mongo db create , update, delete, put operation.
- view details of service.

###  Route Summary

#### Public Routes
- `/` → Home page
- `/about` → About page   
- `/login` → User login page   
- `/register` → User registration page  
- `/products` → List of all products  
- `/api/products/[id]` → Fetch single product by ID

#### Protected Routes
- `/dashboard/add-product` → add-product (requires login)    


### Npm packages that i use

- daisyUi
- tailwinds css
- react hot tost
- next auth
- bcrypt


### Database: 
- Mongodb
