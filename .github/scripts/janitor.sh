echo "Janitoring away!"
echo "Do I have access to environment variables? $GITHUB_WORKSPACE"
echo "What happens if I run git?"
git fetch --no-tags --prune --depth=1 origin +refs/heads/*:refs/remotes/origin/*
git branch

# FOLDER=/somefolder
# if [ -d "$FOLDER" ]; then
#     echo "$FOLDER is a directory"
# fi