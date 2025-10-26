# Guess the Number — React + Vite + Docker

This is a simple **Guess the Number** game built with **React** and **Vite**, containerized using **Docker**, and deployed on a **Virtual Machine (VM)**.

Players try to guess a random number between 1 and 100. They have 10 chances to find the correct number. The app provides hints if the guess is too high or too low.

---

## Features

- Interactive guessing game logic  
- Live hot reload during development with Vite  
- Containerized with Docker for easy deployment  
- Deployable on any VM (e.g., DigitalOcean, AWS, etc.)

---

## Tech Stack

- **Frontend:** React + Vite  
- **Language:** JavaScript (ES6+)  
- **Build tool:** Vite  
- **Deployment:** Docker, Docker Compose, Ubuntu VM

---

## Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. Open your browser at:
   ```
   http://localhost:5173
   ```

---

## Docker Setup (Local)

1. **Build the Docker image:**
   ```bash
   docker compose build
   ```

2. **Run the container:**
   ```bash
   docker compose up -d
   ```

3. **Stop the container:**
   ```bash
   docker compose down
   ```

4. Visit:
   ```
   http://localhost:5173
   ```

---

## Deploy to VM (e.g., DigitalOcean)

1. **SSH into the VM:**
   ```bash
   ssh root@<VM_IP>
   ```

2. **Clone the repo:**
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
   ```

3. **Build and run containers:**
   ```bash
   docker compose build
   docker compose up -d
   ```

4. Visit:
   ```
   http://<VM_IP>:5173
   ```

*Tip: Make sure port 5173 is allowed through the firewall:*
```bash
sudo ufw allow 5173
```

---

## Updating the App on the VM

Whenever you change files locally (e.g., `App.jsx`), follow these steps to push updates to the live server:

1. Commit & push your changes:
   ```bash
   git add .
   git commit -m "Updated guessing logic / UI"
   git push origin main
   ```

2. SSH back into the VM:
   ```bash
   ssh root@<VM_IP>
   ```

3. Pull the latest code:
   ```bash
   cd <your-repo-name>
   git pull origin main
   ```

4. Rebuild and restart the container:
   ```bash
   docker compose up -d --build
   ```

Your changes should now be live at:
```
http://<VM_IP>:5173
```

---

## Useful Docker Commands

| Command                          | Description                                |
|-----------------------------------|--------------------------------------------|
| `docker ps`                      | List running containers                    |
| `docker compose logs -f`         | View logs in real-time                     |
| `docker exec -it <container> sh` | Access inside a running container         |
| `docker system prune -a`        | Clean up unused images/containers       |
| `docker compose down`           | Stop and remove containers                |

---

## Author

Created by Alston & Danny as part of **Expert Group: Dockerization & Container Deployment**.

---

