# nexmo sms api practice 
My playground of coding and demo. When you login this application, you are asked to enter username & password. (You can enter anything). A SMS will be sent to your mobile which should be configured by you as an envrionment variable. At the SMS OTP page, you should enter the received OTP, then it will bring you to login success page. 

The demo is based on nexmo verify API. 


# Deploy to Heroku

## Step 1: 

Click the following button to deploy the source to Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/kopi-kosong/nexmo-sms-api.git)

## Step 2: 

Click on your Application, and Go to "Settings - > Config Vars" to add the following environment variables:

NEXMO_API_KEY=<YOUR NEXMO API KEY>,

NEXMO_API_SECRET=<YOUR NEXMO API SECRET>,

NEXMO_CUST_A_NUM =<YOUR Mobile Number>,

NEXMO_BRAND_NAME=<UP TO 11 ALPHANUMERIC CHARACTERS>

# Run it locally

## Prerequisites
Download the source from git.

Run the following command to install dependencies.

```bash
npm install
```

## Configuring the application

Configure the following in envrionment variables in Windows:

NEXMO_API_KEY=YOUR NEXMO API KEY,

NEXMO_API_SECRET=YOUR NEXMO API SECRET,

NEXMO_CUST_A_NUM =YOUR Mobile Number,

NEXMO_BRAND_NAME=UP TO 11 ALPHANUMERIC CHARACTERS

or, you could go to server.js and hardcoded the values.

For how to modify enrionment variables on Windows, please refer to the following :
https://docs.oracle.com/en/database/oracle/r-enterprise/1.5.1/oread/creating-and-modifying-environment-variables-on-windows.html

```
## Running the application
You should then be able to run the app with `npm start`.
