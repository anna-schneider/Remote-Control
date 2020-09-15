# Remote-Control README

- [Overview](#overview)
- [MVP](#mvp)
- [Goals](#goals)
- [Libraries and Dependencies](#libraries-and-dependencies)
- [Client (Front End)](#client-front-end)
- [Wireframes](#wireframes)
- [Component Tree](#component-tree)
- [Component Hierarchy](#component-hierarchy)
- [Component Breakdown](#component-breakdown)
- [Time Estimates](#time-estimates)
- [Server (Back End)](#server-back-end)
- [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Remote Control** is an app to create a socially distant movie party, or to democratically select a movie choice in your household._


<br>

## MVP

_**Remote Control** MVP The host can create an event, invite users to rank a selection of movies, and the app will aggregate the total votes._

<br>

### Goals

- _Create a three screen React app_
- _Full CRUD non-inclusive of User._

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Component based template system_          |
|   React Router   | _Single page application controller_       |
|      Axios       | _Simplify & enable asynchronous requests_  |
|   Ruby on Rails  | _Generate & deliver website_               |
|     Postgres     | _Store data to manage user selections_     |

<br>

### Client (Front End)

#### Wireframes

- [Desktop/Tablet Landing](https://wireframe.cc/pro/pp/5e85b96d2373094)

- [Desktop/Tablet Create Event](https://wireframe.cc/pro/pp/c644b3d5f373098)


- [Desktop/Tablet Event Detail](https://wireframe.cc/pro/pp/2fdd62221373103)


- [Mobile Landing](https://wireframe.cc/pro/pp/5a66f56b0373206)


- [Mobile Create Event](https://wireframe.cc/pro/pp/cdf02791c373208)


- [Mobile Event Detail](https://wireframe.cc/pro/pp/5af0edcad373232)


#### Component Hierarchy 

``` structure

src
|__ assets/
      |__ fonts
      |__ images
|__ components/
      |__ shared/
            |__ Layout/
                  |__ Layout.jsx
                  |__ Layout.css
            |__ Header/
                  |__ Header.jsx
                  |__ Header.css
            |__ Button/
                  |__ Button.jsx
                  |__ Button.css
            |__ Footer/
                  |__ Footer.jsx
                  |__ Footer.css
|__ containers/
      |__ MainContainer.jsx
|__ services/
      |__ apiConfig.js
      |__ events.js
      |__ movies.js

|__ screens/
      |__ Home.jsx
      |__ Create-Event.jsx
      |__ Event-Details.jsx
|__ controllers/
      |__ controller.js
|__ db/
      |__ connection.js
|__ models/
      |__ users.js
      |__ movies.js
      |__ events.js
      |__ votes.js
      |__ events_movies.js

```

#### Component Breakdown


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Layout    | functional |   n   |   n   | _The layout will contain the header and footer._                 |
|    Header    | functional |   n   |   n   | _The header contains the logo._                                  |
|    Button    |   class    |   y   |   y   | _The button will be re-usable._                                  |
|    Form      | functional |   y   |   n   | _The form will contain the event name and date._                 |
|  Movie List  | functional |   y   |   y   | _The list will contain a dropdown to rank movie options._        |
|    Footer    | functional |   n   |   n   | _The footer will show creator info._                             |

#### Time Estimates


| Task                   | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------- | :------: | :------------: | :-----------: | :---------: |
| Project Pitch          |    H     |     4 hrs      |     4 hrs     |     TBD     |
| Components             |    H     |     5 hrs      |     0 hrs     |     TBD     |
| Scroll Bar             |    L     |     1 hrs      |     0 hrs     |     TBD     |
| Copy URL Button        |    L     |     1 hrs      |     0 hrs     |     TBD     |
| Create CRUD Actions    |    H     |     11 hrs     |     0 hrs     |     TBD     |
| CSS                    |    H     |     5 hrs      |     0 hrs     |     TBD     |
| Media Queries          |    H     |     4 hrs      |     0 hrs     |     TBD     |
| Back End Architecture  |    H     |     4 hrs      |     0 hrs     |     TBD     |
| Front End Architecture |    H     |     4 hrs      |     0 hrs     |     TBD     |
| PMVP CSS Animations    |    L     |     3 hrs      |     0 hrs     |     TBD     |
| PMVP Calendar Invite   |    L     |     3 hrs      |     0 hrs     |     TBD     |
| PMVP 3rd Party API     |    L     |     4 hrs      |     0 hrs     |     TBD     |
| TOTAL                  |          |     48 hrs     |     4 hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

[](https://app.diagrams.net/#G1RMnx_gqqTcynwnto0csROJLJpaRDixIy)

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!
- ICS file to send a calendar invitation
- CSS animations
- Incorporate third party API to expand movie database
***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
