#!/usr/bin/env bash

REQUIRED_TOOLS=(
  git
)

for TOOL in "${REQUIRED_TOOLS[@]}"; do
  if ! command -v "${TOOL}" >/dev/null; then
    echo "${TOOL} is required... "
    exit 1
  fi
done

# adding data directory for new build information
git add data/dnb/debug/build.json
git commit --amend --no-edit

# push release to GitHub
git push --follow-tags origin main
