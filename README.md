# My Posts List

Small web application to create and delete posts

- [x] Setup Vite
- [x] Setup Base styling

## Posts

- [x] Create posts component
- [x] Add posts form
- [x] Iterate and render posts
- [x] Add ability to delete a post
- [x] Add UUID from npm for post ids
- [x] Add hide/show for posts form
- [ ] Setup localstorage as a mock database for persisting the posts

## Backend

- [ ] Setup Firebase project
- [ ] Setup and initialize Firebase
- [ ] Create helper functions for working with Firebase
- [ ] Remove localstorage mock database
- [ ] Hook up posts into Firebase posts collection
- [ ] Adjust search functionality to filter posts queried from Firebase
- [ ] Create Firebase rules to lockdown data

## Authentication

- [ ] Add login via Google
- [ ] Add new components/screens to allow for login and dashboard for posts (React router dom??)
- [ ] Create users collection to extend auth information
- [ ] Add function to create new user document after login for first time and extract Google information
- [ ] Setup React Context API to consume the user state
- [ ] Persist user after login in the UI
- [ ] Adjust Firebase rules to allow only the logged in user to create/edit own posts
- [ ] Adjust query for posts to only show logged in user's posts
