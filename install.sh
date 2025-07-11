#!/bin/bash
set -e

echo "[INFO] Building Docker image for Themed React App..."
docker build -t theming-re-render-app .

echo "[INFO] Starting React app container..."
docker run -d --name theming-re-render-app -p 3000:3000 theming-re-render-app

# Wait for container to be healthy
sleep 5

if docker ps | grep theming-re-render-app > /dev/null; then
  echo "[SUCCESS] React app is running at http://localhost:3000"
else
  echo "[ERROR] React app failed to start. Check Docker logs."
  exit 1
fi
