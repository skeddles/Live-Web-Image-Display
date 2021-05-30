# Live-Web-Image-Display
Display an image on disk through a webpage, that updates live when the image changes.

Why? Because you can now open that webpage on different monitors, computers, phones, tablets, etc (on your home network), and easily compare the colors between the different screens.

Why? Mostly for artists who want to make sure their art looks good on different monitors (especially pixel artists). Or maybe you just want to check your screens against each other.

How? You update an image file, the server notices the change and updates all connected clients. 

How? Node.js + socket.io.

## Setup

### Requirements:
- node

### Install

1. download the repo
2. run command `npm install` on the directory
3. run command `npm run start` 
4. it should output a url. open that url whereever desired.
5. update the image file on your harddrive, it will now update on the webpage

### Configure

After running once you should see `config.json`. Here you can change the image path and the server port number. If you're on windows, your path might need to look something like this: `U:\\Temp\\LATEST_SCREENSHOT.png`

### Better viewing on Mobile

In Chrome Mobile, open the site, then open the menu, and select `Add to Home screen`. You now have a quick shortcut, without the address bar.

### Use Screenshot tool to update images

You're on your own for how the image gets updated. I created it to use with screenshots, so i can screenshot anything an it instantly shows up on my phone. Essentially you are just taking a screenshot and overwriting the file that the program watches.

#### To setup with ShareX (the best screenshot tool):
1. right click the taskbar icon and go to `Hotkey Settings`
2. Add or change a hotkey to your desired shortcut, 
3. click the gear symbol. 
4. Under task tab, set first dropdown to capture active window, monitor or screen (or whatever you want).
5. Override capture settings to save image to a file.
6. Override screenshots folder to your desired location
7. Go to Image tab and override the settings to be PNG if needed
8. Go to Capture tab, maybe override / change settings if needed
9. Go to Upload tab and override upload settings
10. Go to Upload/File Naming tab, and enter a static name for the file
