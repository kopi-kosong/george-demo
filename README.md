# nexmo sms api practice 
My playground of coding and demo

# Deploy to Heroku

## Step 1: Click the following button to deploy the source to Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/kopi-kosong/nexmo-sms-api.git)

## Step 2: Click on your Application, and Go to "Settings - > Config Vars" to add the following environment variables:

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

Configure the following in envrionment variables:

NEXMO_API_KEY=YOUR NEXMO API KEY,

NEXMO_API_SECRET=YOUR NEXMO API SECRET,

NEXMO_CUST_A_NUM =YOUR Mobile Number,

NEXMO_BRAND_NAME=UP TO 11 ALPHANUMERIC CHARACTERS

or, you could go to server.js and hardcoded the values.

```
## Running the application
You should then be able to run the app with `npm start`.
