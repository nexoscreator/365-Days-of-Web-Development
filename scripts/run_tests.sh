#!/bin/bash

# Loop through all project folders
for project in projects/day-*; do
    if [ -d "$project" ]; then
        echo "Running tests for $project"
        
        # Check if index.html exists
        if [ ! -f "$project/index.html" ]; then
            echo "ERROR: index.html is missing in $project"
        fi
        
        # Check if style.css exists
        if [ ! -f "$project/style.css" ]; then
            echo "ERROR: style.css is missing in $project"
        fi
        
        # Check if script.js exists
        if [ ! -f "$project/script.js" ]; then
            echo "ERROR: script.js is missing in $project"
        fi
        
        # Check if README.md exists and has content
        if [ ! -s "$project/README.md" ]; then
            echo "ERROR: README.md is missing or empty in $project"
        fi
        
        # Add more specific tests here as needed
        
        echo "Tests completed for $project"
        echo "------------------------"
    fi
done

echo "All tests have been completed."