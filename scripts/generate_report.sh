#!/bin/bash

# Count total projects
total_projects=$(jq '.projects | length' projects.json)

# Get current day number
current_day=$(date +%j)

# Calculate progress percentage
progress=$(echo "scale=2; $total_projects / 365 * 100" | bc)

# Generate report
cat << EOL > progress_report.md
# 365 Days of Web Development Progress Report

Current Date: $(date +"%Y-%m-%d")
Days Elapsed: $current_day
Projects Completed: $total_projects
Progress: ${progress}%

## Recent Projects

EOL

# Add 5 most recent projects to the report
jq -r '.projects | sort_by(.id) | reverse | .[0:5] | .[] | "- Day \(.id): [\(.title)](\(.link))"' projects.json >> progress_report.md

echo "Progress report has been generated in progress_report.md"