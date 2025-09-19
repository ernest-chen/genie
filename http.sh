#!/bin/bash

# HTTP Server Script for Tech Genie Documentation
# This script starts a Python HTTP server to preview HTML pages in the docs folder

echo "🚀 Starting Tech Genie Documentation Server..."
echo "📁 Serving files from: $(pwd)/docs"
echo "🌐 Server will be available at: http://localhost:8000"
echo "📋 Available pages:"
echo "   • Home: http://localhost:8000/index.html"
echo "   • Public Clouds: http://localhost:8000/public_clouds.html"
echo "   • DevSecOps: http://localhost:8000/devops.html"
echo "   • API Protocols: http://localhost:8000/rest_rpc.html"
echo "   • AdTech Ecosystem: http://localhost:8000/adtech.html"
echo "   • Transformation: http://localhost:8000/transformation.html"
echo ""
echo "💡 Press Ctrl+C to stop the server"
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    echo "🐍 Using Python 3..."
    cd docs && python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "🐍 Using Python 2..."
    cd docs && python -m SimpleHTTPServer 8000
else
    echo "❌ Error: Python is not installed or not in PATH"
    echo "Please install Python to use this script"
    exit 1
fi
