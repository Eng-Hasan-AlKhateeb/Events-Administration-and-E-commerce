# Annual Scientific Conference for Dentists (ASCD)  

![Node.js](https://img.shields.io/badge/Node.js-10.9.2-brightgreen) ![Express](https://img.shields.io/badge/Express-4.17.1-lightgrey) ![MongoDB](https://img.shields.io/badge/MongoDB-7.x-green) ![JWT](https://img.shields.io/badge/Auth-JWT-orange) ![Security](https://img.shields.io/badge/Security-Helmet%2BXSS--Clean-red) ![Docs](https://img.shields.io/badge/Docs-Required-blue)


## Description  
A **Node.js backend server** for two key functionalities:  
1. **E-commerce platform** for dental equipment suppliers.  
2. **Conference management system** for an annual scientific dentistry event.  
   - Built with `Express.js`, `MongoDB`, modern REST API practices, and **enterprise-grade security practices**.

## Key Features  
- 🔐 **JWT-based auth** with `bcryptjs` hashing + role-based access  
- ⚙️ **Custom error handling middleware**.  
- 🚀 **REST API** with `express-async-errors` for clean async flow  
- 🛡️ **Security**:  
  - `helmet` for HTTP headers  
  - `xss-clean` against XSS attacks  
  - `express-rate-limit` for brute-force protection  
- 📁 **Image uploads** via `multer` with sanitization  
- ⚖️ **Validation**:  
  - Request parsing with `body-parser`  
  - Schema validation via `joi`  
- 📊 **Structured errors** using `http-status-codes`  
- 🔄 **MongoDB Atlas** (cloud database integration).  



## Tech Stack  
- **Core**: Node.js + Express.js  
- **Database**: MongoDB (+ Mongoose ODM)  
- **Security**:  
  - `helmet` | `xss-clean` | `rate-limiter`  
- **Auth**: JWT (`jsonwebtoken`) + `cookie-parser`  
- **Dev**: `dotenv` for environment management  

## Setup & Installation  
1. **Clone the repository**  
    ```bash
    cd ASCD
    git clone [your-repo-url]
2. **Install dependencies**  
    ```bash
    npm install
3. **Configure environment variables**
    - Create a .env file with:
        - PORT=3000
        - MONGO_URI=your_mongodb_atlas_connection_string
        - JWT_SECRET=your_jwt_secret_key
        - JWT_LIFETIME=your_jwt_lifetime
4. **Run the server**
    ```bash
    node app.js

## Ready-to-use Postman collection:

[![Run in Postman](https://run.pstmn.io/button.svg)](./postman/ASCD.postman_collection.json)

Features included: 

 ✅ All authentication endpoints  
 ✅ Pre-configured environment variables  
 ✅ Example requests for every route