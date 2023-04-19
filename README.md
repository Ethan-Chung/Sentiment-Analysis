# Sentiment-Analysis

To start up the website you need to first start up the server side and then start the client side.

## Step 1: Turn on server

To turn on the server, you need to first start up a python virtual environment.

On windows cmd:

1. `python -m venv venv` (if this is your first time)
2. `.\venv\Scripts\activate`
4. `pip install requirements.txt` (if its your first time running it)
3. `cd flask-server`
5. `python server.py`

A webpage may pop up with some JSON but you can just close that. This is what we will send to the client.

## Step 2: Turn on the client 

The client is what gets information from the server code and shows it out to the world. To start this up you need to open a  **New Terminal** and follow the steps below. 

**It is very important that these two terminals remain open the whole time or else it will not work**

On windows cmd: 

1. From the main directory `cd client`
2. `npm install` (if its your first time running it)
3. `npm start`

Once you run it, a new webpage will pop up and this is what users will sees


# To Run the Jupyter Notebook 

To run the correct data set you will need to download this and put it in the projects folder. The file is too big to send through git so I had to git ignore it

https://www.kaggle.com/datasets/snap/amazon-fine-food-reviews?resource=download

After that make sure the virtual environment is selected on the kernel.

