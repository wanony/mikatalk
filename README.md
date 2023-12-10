# mikatalk

## Pre-requisites

Please install the following:

- npm OR yarn
- MongoDB (or use MongoDB cloud)

I will use npm for the following instructions, you may replace it with yarn if that is your preference (or bun if you're using that).

## Installation instructions

First git clone the repository

```
git clone https://github.com/wanony/mikatalk-site
```

Following this, cd into the backend directory and create the `.env` file.

Example `.env` file without any values:

```
MONGODB_URL=
JWT_SECRET=
COOKIE_SECRET=
PORT=
```

Populate these values appropriately.

Following this install the node modules for the backend directory with the following command:

```
npm i
```

Then cd to the frontend directory:

```
cd ../frontend/
```

And again install the node modules:

```
npm i
```

## Running the project

Open two terminal windows and cd into the frontend and backend directories, then run in each:

```
npm run dev
```
