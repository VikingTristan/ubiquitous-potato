echo "I should be replacing token here"
ls

# This replaces <token> with our $TOKEN variable, this is what we should do with the "<token>" string in the .sentryclirc file
# sed -i -e 's/<token>/$TOKEN/g' .sentryclirc
sed -i -e 's/tokenhere/$TOKEN/g' ./src/index.html