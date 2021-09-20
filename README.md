# My Posts List

Small web application to create and delete post

- [x] Setup CRA
- [x] Setup Base styling
- [x] Add basic header/footer

## Posts

- [x] Create posts component
- [x] Add posts form
- [x] Iterate and render posts
- [x] Add ability to delete a post
- [x] Add UUID from npm for post ids
- [x] Add search filter for posts
- [x] Add sort posts by ascending/descending
- [x] Add hide/show for posts form
- [x] Setup localstorage as a mock database for persisting the posts
- [x] Figure out why posts aren't filtering the first item in the array
- [x] Set up react router dom and it's views

## Backend

- [x] Setup Firebase project
- [x] Setup and initialize Firebase
- [x] Create helper functions for working with Firebase
- [x] Remove localstorage mock database
- [x] Hook up posts into Firebase posts collection
- [x] Adjust search functionality to filter posts queried from Firebase
- [x] Create Firebase rules to lockdown data

## Authentication

- [x] Add login via Google (header component)
- [x] Add new components/screens to allow for login and dashboard for posts (React router dom??)
- [x] Create users collection to extend auth information
- [x] Add function to create new user document after login for first time and extract Google information
- [x] Setup React Context API to consume the user state
- [x] Persist user after login in the UI
- [x] Adjust Firebase rules to allow only the logged in user to create/edit own posts
- [x] Adjust query for posts to only show logged in user's posts
- [x] Final adjustments and bug fixes
- [x] Setup Firebase hosting with continous deployment (gh actions)
