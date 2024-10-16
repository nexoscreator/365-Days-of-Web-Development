#!/bin/bash

# Check if day number is provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 <day_number>"
    exit 1
fi

day_num=$(printf "%03d" $1)

# Add all changes
git add .

# Commit changes
git commit -m "Day ${day_num}: Completed daily project"

# Push changes to remote repository
git push origin main

echo "Changes for Day ${day_num} have been committed and pushed."