# KSDT Mobile Application
Listen to KSDT Radio on the go !

## First Time Setup
Make sure you have [Node.js](https://nodejs.org/en/) installed on your machine. To check if you have node installed, type `npm -v` and if numbers appear then your computer already has Node.js and you're good to go.

Once Node.js is installed, run the following command to install [React Native](https://facebook.github.io/react-native/):
```
npm install -g create-react-native-app
```
If permission errors occur, try running the command as an Administrator: `sudo npm install -g create-react-native-app`

React Native requires the Expo Client to run so run the following command to install it:
```
npm install --global expo-cli
```
Again, run as an Administrator if permission errors occur.

Make a new folder called `ksdtApp` and navigate to it on your command line.

Clone the project unto your folder (using HTTPS):
```
git clone https://github.com/ksdt/mobileApp.git
```

## Running the Application
Navigate to the project folder and run it
```
cd ksdtApp
npm start
```
You should see a QR on your command line if the project ran successfully.

## Using Emulators
The simplest way is to download the Expo Client App on your mobile device to view the project.
If any troubles persist, you can also run the app using emulators. 

### For Mac
Download XCode

### For PC
Download Android Visual Studio
