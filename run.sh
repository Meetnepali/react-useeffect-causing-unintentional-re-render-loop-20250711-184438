#!/bin/bash
set -e

echo "[TASK] Installing and running assessment environment..."
chmod +x install.sh
./install.sh
if [ $? -eq 0 ]; then
  echo "[READY] Assessment environment is UP at http://localhost:3000"
else
  echo "[FAIL] Environment setup failed. See messages above."
  exit 1
fi
