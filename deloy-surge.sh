# Run build
yarn build

# Move folder build

cd build

# clone index.html to 200.html
cp index.html 200.html

# start deploy

surge .nguyentanhai-photo-app.surge.sh
