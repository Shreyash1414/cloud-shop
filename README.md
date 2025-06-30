# 🛒 CloudShop - Cloud Native E-Commerce Platform

CloudShop is a full-stack, microservices-based e-commerce application designed for scalability, observability, and cloud-native deployment. It features a containerized architecture with backend microservices, a React frontend, and full observability with Prometheus and Grafana, all deployed on **Azure Kubernetes Service (AKS)**.

---

## 📦 Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js (Express.js)
- **Database:** SQLite
- **Containerization:** Docker
- **Orchestration:** Kubernetes on Azure AKS
- **Monitoring & Alerting:** Prometheus, Grafana, Alertmanager

---

## 🗂️ Microservices Overview

| Service         | Description                        | Port |
|----------------|------------------------------------|------|
| user-service    | Handles user registration & login  | 30000 |
| product-service | Manages product catalog            | 30001 |
| order-service   | Handles orders and checkout logic  | 30002 |
| frontend        | React UI for the CloudShop app     | 30080 |

---

## 🐳 Running Locally with Docker

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/cloudshop.git
cd cloudshop


2. Build and Run

cd k8s
kubectl apply -f .

3. Access the App
Visit: http://localhost:30080
