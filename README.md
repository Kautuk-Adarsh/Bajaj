# Bajaj
Repo for the test 

# 📌 BFHL REST API (Express.js)

This is a **Node.js + Express** implementation of the BFHL assignment.  
It exposes a **POST /bfhl** API that accepts an array of strings and returns:  
- Even numbers  
- Odd numbers  
- Alphabets (converted to uppercase)  
- Special characters  
- Sum of numbers (as string)  
- Concatenation of alphabets in reverse with alternating caps  
- Developer details (`user_id`, `email`, `roll_number`)  

---

## 🚀 Tech Stack
- **Node.js** (v18+)  
- **Express.js**  
- **Vercel** (for hosting)  

---

## 📂 Project Structure

```
Bajaj/
│── node_modules/
│── src/
│ ├── config/
│ │ ├── user.js # Developer details (optional config file)
│ ├── controllers/
│ │ ├── bfhlController.js # Request handler
│ ├── routes/
│ │ ├── bfhl.js # Defines /bfhl route
│ ├── utils/
│ │ ├── helpers.js # Utility functions
│ ├── index.js # Entry point
│
│── package.json
│── package-lock.json
│── .gitignore
│── README.md

```

---

## ⚙️ Setup & Run Locally

### 1️⃣ Clone Repo
```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd Bajaj
npm install
npm run dev  (install nodemon )

☁️ Deployment (Vercel)
npm install -g vercel

2️⃣ Create vercel.json

At project root:

{
  "version": 2,
  "builds": [
    { "src": "src/index.js", "use": "@vercel/node" }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "src/index.js" }
  ]
}

3️⃣ Deploy
    
    vercel