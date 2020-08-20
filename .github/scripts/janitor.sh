#!/usr/bin/env bash
set -o errexit # Abort if any command fails
me=$(basename "$0")
help_message="\
Usage:
  $me <sha>

Arguments:
  sha   The commit ID (SHA) of the current commit."

current_commit_id=$1

if [ -z "$current_commit_id" ]; then
    echo "Missing required argument <sha>."
    echo "$help_message"
    exit 1
fi

# Ensure that we have all branches
git branch -r | grep -v '\->' | while read remote; do
  branch_name="${remote#origin/}"

  if git show-ref --verify --quiet "refs/heads/$branch_name" ; then
    echo "$branch_name already exists."
  else
    git branch --track "$branch_name" "$remote";
  fi
done

git fetch --all
git pull --all

# Get the parents. Will return 3 commit IDs, the first being the current
shas=$(git rev-list --parents -n 1 $current_commit_id)
for sha in $shas
do
    # Skip the SHA equal to the current commit
    [[ $sha == "$current_commit_id" ]] && continue

    branches=$(git branch --contains $sha)

    echo "$branches" | while read branch ; do
        # branch=$line

        echo "Looping through branch $branch"

        # Skip develop and master branches
        [[ $branch == *"develop" ]] && continue
        [[ $branch == *"master" ]] && continue
        
        echo "Branch folder we are looking to delete is $branch"
        echo ::set-output name=BRANCH_TO_DELETE::$branch
        #branch_to_delete=$branch

        # if [ -d "$branch_to_delete" ]; then
            # Delete the directory from Azure
        # fi
    done
done

# Loop through $shas, skip the one equal to ${{ github.sha }}
#   ...do loop here ...
#   Find the branches that contains the commits:
# Exclude develop, master, etc., and hopefully only have 1 'feature/*' branch left.

# if []
#     if [ -z "$(git rev-list -1 --merges HEAD~1..HEAD)" ]; then

#     fi
#     if [] ; ... awdawdawdawd