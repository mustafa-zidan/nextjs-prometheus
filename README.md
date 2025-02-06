# Next.js Prometheus Monitoring with Kubernetes (Kind)

This repository contains a **Next.js application** that integrates **Prometheus monitoring** using **Server Actions** and is deployed inside a **Kind (Kubernetes in Docker) cluster**. The application tracks the time difference between the **Start** and **Stop** button presses and sends this as a metric to Prometheus for monitoring.

## Features

- **Next.js App Router** with **Server Components**
- **Server Actions for tracking metrics**
- **Prometheus integration for monitoring elapsed time**
- **Deployed inside Kubernetes (Kind)**
- \*\*Prometheus automatically scrapes Next.js metrics via \*\***`/api/metrics`**

---

## **Installation and Setup**

### **1️⃣ Prerequisites**

Ensure you have the following installed:

- [Docker](https://www.docker.com/get-started)
- [Kind](https://kind.sigs.k8s.io/docs/user/quick-start/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- [Node.js](https://nodejs.org/)

### **2️⃣ Clone the Repository**

```sh
 git clone git@github.com:mustafa-zidan/nextjs-prometheus.git
 cd nextjs-prometheus
```

### **3️⃣ Install Dependencies**

```sh
 npm install
```

### **4️⃣ Run Locally**

```sh
 npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

To test Prometheus metrics:

```sh
 curl http://localhost:3000/api/metrics
```

---

## **Deploy to Kubernetes (Kind)**

### **1️⃣ Create a Kind Cluster**

```sh
 kind create cluster --name monitoring-cluster
```

### **2️⃣ Build and Load Docker Image into Kind**

```sh
 docker build -t nextjs-prometheus

