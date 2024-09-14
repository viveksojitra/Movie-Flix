# 🎬 Movie Flix

A dynamic and responsive movie website where users can explore movies, view details, and upload movie-related information. Built with Node.js, Express, MongoDB, and EJS, this project demonstrates a fully functional web application for managing a collection of movies.

## 📑 Features

- **Browse Movies:** Users can view a collection of movies with details such as title, description, and poster.
- **Movie Upload:** Admins can upload new movies to the platform using the built-in upload functionality (powered by Multer).
- **Responsive UI:** Designed with Bootstrap to ensure a mobile-friendly experience.
- **Server-Side Rendering:** EJS templates are used to render dynamic content on the server.
- **MongoDB Integration:** Data is stored and managed using MongoDB and Mongoose.

## 🎥 Preview

_Preview images and videos of the project are here_

![Homepage]
![Main](https://github.com/user-attachments/assets/5e552fe8-98c2-4896-9abf-ae62aa7730c8)

![Hover Effect with Movie Card]
![onHover](https://github.com/user-attachments/assets/443cead6-fdb8-463a-8692-7b14fc1b149e)

![addMovie Page]
![addMovie](https://github.com/user-attachments/assets/636d16bf-4ae6-4381-b82c-3210b2b28872)

![editMovie Page]
![editMovie](https://github.com/user-attachments/assets/1b17d07c-0c5c-44a2-a931-9b86f9f10119)

## 🎞 Demo Video
https://github.com/user-attachments/assets/1bdad139-1bfb-4793-a5e8-95d044069fac

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Frontend:** EJS, Bootstrap 5
- **File Uploads:** Multer
- **Dev Tools:** Nodemon, Body-parser

## 📦 Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/viveksojitra/Movie-Flix.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Movie-Flix
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the server:
    ```bash
    npm start
    ```
5. Open your browser and go to `http://localhost:3002` to view the app.

## 📂 Project Structure

```bash
Movie-Flix/
│
├── config/           # Configuration for Multer
├── controllers/      # Request handlers and logic
├── Database/         # Connection with MongoDB database
├── models/           # Mongoose schemas
├── public/           # Static files (CSS, images)
├── routes/           # Express routes
├── uploads/          # Uploaded movie images
├── views/            # EJS templates for rendering pages
├── index.js          # Main entry point of the app
├── package.json      # Project dependencies and scripts
└── README.md         # Project documentation
