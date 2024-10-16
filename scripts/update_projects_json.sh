#!/bin/bash

# Check if day number and project name are provided
if [ $# -ne 2 ]; then
    echo "Usage: $0 <day_number> <project_name>"
    exit 1
fi

day_num=$(printf "%03d" $1)
project_name=$2
folder_name="day-${day_num}-${project_name// /-}"

# Create projects.json if it doesn't exist
if [ ! -f "projects.json" ]; then
    echo '{"projects": []}' > projects.json
fi

# Add new project to projects.json
jq --arg id "$day_num" \
   --arg title "$project_name" \
   --arg description "Description for $project_name" \
   --arg link "projects/$folder_name/index.html" \
   '.projects += [{"id": $id, "title": $title, "description": $description, "link": $link}]' \
   projects.json > projects_temp.json && mv projects_temp.json projects.json

echo "projects.json has been updated with the new project."