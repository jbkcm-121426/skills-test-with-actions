#!/bin/bash

# Define the remote and branch. Adjust if you don't use 'origin' and 'main'.
REMOTE="origin"
BRANCH="feature/using-actions"

# Get the current timestamp
TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")

# Get a list of modified and new files
# -z ensures null-separated output for filenames with spaces
# xargs -0 tr '\n' ' ' converts null-separated to space-separated for the commit message
# head -c 200 limits the message length to avoid excessively long commit messages
CHANGED_FILES=$(git status --porcelain | awk '{print $2}' | xargs -0 echo | head -c 200)

# Check if there are any changes to commit
if [[ -z $(git status --porcelain) ]]; then
  echo "No changes detected. Exiting."
  exit 0
fi

echo "---"
echo "Starting Git automation..."
echo "---"

# Add all changes to the staging area
echo "Adding all changes (git add -A)..."
git add -A

# Create the commit message
COMMIT_MESSAGE="Auto-commit: ${TIMESTAMP} - ${CHANGED_FILES}"
echo "Committing with message: \"${COMMIT_MESSAGE}\""
git commit -m "${COMMIT_MESSAGE}"

# Push the changes to the remote repository
echo "Pushing changes to ${REMOTE}/${BRANCH}..."
git push "${REMOTE}" "${BRANCH}"

echo "---"
echo "Git automation complete!"
echo "---"