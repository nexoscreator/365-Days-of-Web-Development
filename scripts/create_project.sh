#!/bin/bash

# Check if day number is provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 <day_number> <project_name>"
    exit 1
fi

# Pad the day number with zeros
day_num=$(printf "%03d" $1)
project_name=$2

# Create the project folder
folder_name="day-${day_num}-${project_name// /-}"
mkdir -p "projects/$folder_name"

# Create basic files
touch "projects/$folder_name/index.html"
touch "projects/$folder_name/style.css"
touch "projects/$folder_name/script.js"

# Create README.md with basic structure
cat > "projects/$folder_name/README.md" << EOL
# Day ${day_num}: ${project_name}

## Project Description

Brief description of the project.

## Technologies Used

- HTML
- CSS
- JavaScript

## Challenges Faced

Describe any challenges you encountered during the development of this project.

## Lessons Learned

What did you learn while building this project? Any new skills or techniques?

## Future Improvements

List any features or improvements you'd like to add in the future.

## Live Demo

[View Live Demo](https://your-demo-link-here.com)

## Screenshots

![Project Screenshot](screenshot.png)
EOL

echo "Project folder created: projects/$folder_name"
echo "Basic files and README.md have been set up."
echo "Don't forget to update the README.md with project-specific information!"