# 🪙 Crypto Tracker

A modern, responsive web application to track cryptocurrency performance with real-time dynamic charts and detailed stats. Built using React, Redux, and Tailwind CSS.

---

## 🚀 Features

- Live-like crypto table UI
- Dynamic 7-day mini price charts
- Beautifully styled with Tailwind CSS
- Redux state management
- Optimized build with Vite

---

## 🛠 Tech Stack

### Frontend:
- **React** – Component-based UI
- **Vite** – Fast build tool and dev server
- **Redux** – Global state management
- **Tailwind CSS** – Utility-first styling

### Architecture:
- `src/component` – Core UI components (`CryptoTable`, `MiniChart`)
- `src/assets` – Static assets (logos)
- `src/data` – Crypto sample data (mocked for frontend, `sampleData`)
- `src/redux` – Redux store configuration(`cryptoSlice`, `store`)
- `src/utils` - Random coin fluctuation(`helpers`)

> Data flow: `sampleData.tsx` → Redux Store → `CryptoTable.jsx` → individual coin rows with chart rendered from `MiniChart.jsx`

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone [https://github.com/AbhinavAjGaur/crypto-tracker.git]
cd crypto-tracker

```
### 2. Install dependencies

```bash

npm install

```
### 3.  Start development server

```bash

npm run dev

```
