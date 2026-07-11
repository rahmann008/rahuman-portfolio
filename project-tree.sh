# Create project root
mkdir -p portfolio
cd portfolio

# Create folders
mkdir -p components
mkdir -p data
mkdir -p lib
mkdir -p types

mkdir -p public/images
mkdir -p public/resume
mkdir -p public/icons

# Create placeholder files so Git tracks empty folders
touch components/.gitkeep
touch data/.gitkeep
touch lib/.gitkeep
touch types/.gitkeep

touch public/images/.gitkeep
touch public/resume/.gitkeep
touch public/icons/.gitkeep

echo "Portfolio structure created successfully."
