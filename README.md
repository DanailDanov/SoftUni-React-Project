# Bulgarian Association minifootball

Bulgarian Association minifootball is my final project for the React course at SoftUni.The application is created with SoftUni practice server for backend and React for the frontend.

# Overview of Local Installation Steps:

1. Clone the repository: https://github.com/DanailDanov/SoftUni-React-Project
2. Navigate to the server folder to start the server (cd server)
    - npm install (install all packages dependencies);
    - node server.js (command to start the back-end server);
3. Navigate to the client folder (cd client): 
    - npm install (install all packages dependencies);
    - npm run dev - runs the app;

# Demo
To swiftly check things out, you can try out the demo accounts listed below:
     Demo user 1:
        - Email: peter@abv.bg
        - Password: 123456

     Demo user 2: 
        - Email: admin@abv.bg
        - Password: admin

# User Permissions
     All users: 
        - View all teams and news
        - View details page
     Not-Logged User: 
        - Login and register
     Logged-In User:
        - Create team 
        - Profile page
     Logged-In User (Owner) 
        - Edit and delete their own teams   
    * Logged-In User (Admin) 
        - Create team and news
        - Edit and delete teams and news

# Features 
    Public part visible without authentication:
        - Home page - accessible by all users
        - The Teams page provides concise details about each team, accompanied by a button for accessing more in-depth information.
        - The register page requires users to input their username, email, password, and confirm password — ensuring all fields are mandatory for the creation of a new user account.
        - The login page requires users to input a valid email and password for authentication.
    The private part visible after successful authentication and authorization:

        - Users can make their own teams on the Create page.
        - Profile page displays information specific to the currently logged-in user.

 # Security 
     - Guards: By using both public and private guards effectively, an application can maintain a balance—sharing essential information publicly while protecting sensitive functions and data.  
     - 404 Page: A customized page for 404 errors gracefully manages undefined routes. 
     - Error Boundary: Capture JavaScript errors throughout the child component tree, log the errors, and present a fallback UI instead of causing the entire app to crash.

# Utilized Additional Libraries
 - React bootstrap
 - React router dom 
 
   




