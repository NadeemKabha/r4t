<img align='right' src="https://media1.giphy.com/media/jdPMeyv9rn0hZHh8n9/giphy.gif?cid=ecf05e47orry05gben575ga7gxjv6awzhr757f73hnpepfub&ep=v1_gifs_related&rid=giphy.gif&ct=s" width="300">

# <img align='left' src="https://media2.giphy.com/media/ZYEZPrQrzwb9VwM5LV/giphy.gif?cid=ecf05e47q04gpcac2y8pdnjbcz2wqx421ttysexzlte01r7m&ep=v1_gifs_related&rid=giphy.gif&ct=s" width="40">Recycle for Tomorrow


## 🌍 About 

R4T (Recycle for Tomorrow) is an innovative project aimed at encouraging people to recycle their waste through the use of smart bins powered by machine learning. Our primary focus is on developing a user-friendly mobile application that allows individuals to view their recycling data based on the information collected by the smart bins.

In the R4T app, users earn points based on the quantity of items they recycle. These points can later be redeemed for vouchers, discounts, and other rewards. Additionally, the app features a map displaying the locations of smart bins in the user's vicinity and a leaderboard showcasing the user's contacts and their respective points.

To collect recycling data, we utilize smart bins equipped with advanced technology that accurately measures the quantity of each waste category (e.g. plastic: 70, organic: 50 etc.) during the sorting process. To input this data into the app, users will find a unique code on the smart bins, which they can enter to update their recycling information.

Who is it for?
R4T is primarily designed for individuals who currently do not recycle and dispose of all their waste in regular bins. It also serves as a valuable resource for those who are willing to recycle but lack knowledge about proper sorting and bin placement. R4T simplifies the recycling process, saving users time and providing them with incentives for their efforts.


## :star: Get Started
### Clone the code
```bash

git clone https://github.com/NadeemKabha/r4t.git
```
### Install modules
1. go to the directory

```bash

cd r4t
```
2. install expo cli
```bash

npm install expo-cli
```
3. install dependencies
``` bash

npm install
```
- To run the server in localhost you need to change the "hostname" inside the Server.js file. Then:

``` bash
cd components
node server
```
### run project
``` bash

expo start
```

## :star: Future Features
- Authentication (Signup, Login).
- Real time update.
- User Profile (Main page).
- Map (Smart-Bin near me).
- Leaderboard (Contacts Ranks).
- Code entry (We get data from the smart-bin "data.json" then we get code).
- Connect the App to FireBase.

## :star: Technical details
- React Native
- Expo managed workflows.
- FireBase Database
