# STARGAZING

#### Video Demo: https://youtu.be/Ye8PPmrdgkw

#### Description:

This project is a website where users can check out a map of the night sky from a chosen location. Users can also save a list of favorite locations for future consulting. It also allows users to create an account, log in and log out. The app works by receiving a location as a string input from the user, and consuming an API to find the latitude and longitude for the given location. It then uses the coordinates to consume an API that plots the graph for the sky. The APIs used were OpenStreetMap Nominatim for the calculation of latitude and longitude, and VirtualSky for plotting the map. The pages of these API's are linked below:

- OpenStreetMap Nominatim API: https://nominatim.org/
- VirtualSky API: https://slowe.github.io/VirtualSky/

The frontend was developed using Angular Framework with Typescript, HTML and CSS. The files are inside stargazing-frontend/src/app and the responsibilities are organized as follows:

- Login:
  - at source, AuthService is used to set a token in the browser's local storage to keep the user logged in
  - AuthGuardService implements the CanActivate interface to only allow users who are logged in to access the homepage and locations page
  - at the login folder, FormLoginService communicates with the backend to log in the user, and implements a logout function that reverts the session token back to empty
  - FormLoginComponent validates the login form and consumes the service to log users in and set the session token
- Sign up:
  - at the signup folder, SignUpService is used to communicate with the backend in order to insert a new user in the database
  - SignUpComponent validates the sign up form and consumes the service to sign users up and log in if successful
- Locations:
  - at the locations folder, LocationsService communicates with the backend to list the locations the current user has saved
  - LocationsComponent is responsible for communicating with the service in order to list the locations and to redirect to the homepage and show results once the search button has been clicked for a certain location
- Table coordinates:
  - at the home/table-coordinates folder, TableService communicates with the backend to insert a new location in the database
  - TableCoordinatesComponent handles messages for success and error when inserting a location in the database
- Coordinates:
  - in the home/coordinates folder, CoordinatesComponent validates the search form and communicates with the Nominatim API to get the latitude and longitude of the given location
- Sky map:
  - at the skymap folder, SkymapComponent has the responsibility to build the URLs to plot the graphs when searching

The backend was develop using Spring Framework with Java. The files are inside stargazing-backend/src/main/java/project/startgazing and the responsibilities are organized as follows:

- Locations:
  - at the locations folder, LocationRepository extends JpaRepository to handle queries in the database
  - LocationService handles listing the locations a user has saved and adding a new location to the user
  - LocationController sets up two endpoints for both the actions of LocationService
- Login:
  - at the login folder, LoginRepository extends JpaRepository to handle queries in the database
  - LoginService handles sign up by inserting a new user in the database, and login by getting the user from the database
  - LoginController sets up two endpoints for both the actions of LoginService

The database was set up with MySQL, and two tables were created: users, to store usernames and passwords, and user_locations, to store the locations a user saves
