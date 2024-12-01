# Skills app

**A full-stack application built with React and FastAPI.**  
This app allows users to register, log in, and manage profiles, displaying a simple page showcasing programming technical skills and basic information such as work experience and awards.

---

## 🚀 Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **FastAPI**: A high-performance Python web framework for APIs.
- **Docker**: Containerization platform for packaging the app and its dependencies.
- **Vite**: A fast and modern development server for React.

---

## 📋 Prerequisites

Before running the project, ensure you have the following installed on your computer:

### 1. **Docker**

Docker is essential to run the app in a containerized environment.  
[Download Docker Desktop](https://www.docker.com/products/docker-desktop)  
Follow the installation instructions for your operating system.

### 2. **Git**

Git is used to clone the repository.  
[Download Git](https://git-scm.com/downloads)  
Follow the installation instructions for your operating system.

---

## 🛠️ How to Run the Project

### 1. **Clone the Repository**

Open the file explorer, go to the folder where you want to store the project. Right click in any empty space of the file explorer and select the option "Open in Terminal". In the terminal write the command:
```bash
git clone https://github.com/martin343117/Factored_skills_app.git
```

### 2. **Navigate to the Project Directory**
Inside the folder you chose you should see now a new folder called Factored_skills_app. In the same terminal we used before write the command:
```bash
cd Factored_skills_app
```

### 3. **Build and run the project**
Now we will create a docker container, this docker container will be in charge of running the project. Write the following command:
```bash
docker compose up --build
```
The first time running the project it might take a bit longer, around 5 minutes.

### 4. **Check out the website!**
The project should be running by now. you can open it in your web browser by clicking or pasting the following url: http://localhost:5173.

you can login with this credentials:
Name: Martin Diaz
Password: 123
or register a new user into the website.

### 5. **Stop running the project**
in the terminal that is running the project, type ctrl+c to stop the project from running and then paste the command:
```bash
docker compose down
```
If you want to run the project again use the following command: 
```bash
docker compose up
```
If having some trouble with this command, use the prior one:
```bash
docker compose up --build
```
### 📑 Additional Notes 
- Docker handles dependencies: You do not need to install Python, React, or other libraries manually. Docker will automatically set up the required environment.

- Ensure Docker is running: Make sure Docker is running on your system before attempting to start the app. Open Docker desktop to ensure docker is running.

- Port Information: The frontend is accessible at http://localhost:5173 in your web browser.

- Backend API: The FastAPI backend is accessible at http://localhost:8000.

- Swagger: You can add data to the database using the register page, but you can also try out the Swagger documentation of the backend to post requests directly. this can be done in http://localhost:8000/docs.

### Web Page Screenshots
![image](https://github.com/user-attachments/assets/1d99ad8b-d9fd-47dd-9ad8-d8a55330e030)
![image](https://github.com/user-attachments/assets/f54b9969-b0b6-4a4e-943f-b3caa44c8304)
![image](https://github.com/user-attachments/assets/ff923a4d-c7b7-4a4d-b3b4-ae803c8b3a4a)



