# Book-Explorer

This guide explains how to install dependencies, run the scraper, start the backend, and launch the frontend of **Book Explorer**.  

---

## ⚙️ 1. Install Dependencies

Clone the repository and install required packages for each module.

```bash
# Clone project
git clone https://github.com/your-username/book-explorer.git
cd book-explorer
```

### Scraper
```bash
cd scraper
npm install
```

### Backend
```bash
cd ../backend
npm install
```

### Frontend
```bash
cd ../frontend
npm install
```

---

## 🕵️ 2. Run Scraper

The scraper fetches books from [Books to Scrape](https://books.toscrape.com/) and inserts them into the SQL database.

```bash
cd scraper
node scraper.js
```

> Make sure your SQL database is running and credentials are correctly set in `scraper/config.js` (or `.env`).

---

## 🔌 3. Start Backend Server

Run the backend API server (Node.js + Express):

```bash
cd backend
npm run dev
```

Server will start at:  
👉 `http://localhost:5000/api/books`

---

## 💻 4. Launch Frontend (React App)

Run the frontend (React + Vite):

```bash
cd frontend
npm run dev
```

App will be available at:  
👉 `http://localhost:5173`

---

## ✅ Workflow

1. Run **scraper** → populates the database.  
2. Start **backend** → exposes REST APIs.  
3. Launch **frontend** → browse, search, and filter books.  
