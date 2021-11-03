#!/bin/sh

if [ -z "$(npm whoami)" ]; then
    echo "🚨 Not logged in to npm"
    exit 1
fi

if [ -z "$(git status --porcelain)" ]; then
    git checkout main
    git pull
    yarn version && git push && yarn publish --non-interactive --access=public
else
    git status --porcelain
    echo "🧹 Working directory not clean"
    exit 1
fi
