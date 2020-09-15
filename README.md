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
- _Phasellus dapibus fermentum risus vitae bibendum._?????????????
- _Integer vel ipsum mollis odio sollicitudin ornare eu vel ex._
- _etc._

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
To create a link, enclose the link text in brackets (e.g., [Duck Duck Go] ) and then follow it immediately with the URL in parentheses (e.g., (https://duckduckgo.com) ).

- [Desktop/Tablet Landing](https://wireframe.cc/pro/pp/5e85b96d2373094)

- [Desktop/Tablet Create Event](https://wireframe.cc/pro/pp/c644b3d5f373098)


- [Desktop/Tablet Event Detail](https://wireframe.cc/pro/pp/2fdd62221373103)


- [Mobile Landing](https://wireframe.cc/pro/pp/5a66f56b0373206)


- [Mobile Create Event](https://wireframe.cc/pro/pp/cdf02791c373208)


- [Mobile Event Detail](https://wireframe.cc/pro/pp/5af0edcad373232)


#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

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
|__ routes/
      |__ meetings.js
|__ seed/
      |__ meetings.js
|__ server.js
|__ index.js
|__ index.css

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|    Button    |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create Event Form   |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create Routes       |    H     |     3 hrs      |     1 hrs     |     TBD     |
| CSS                 |    H     |     3 hrs      |     1 hrs     |     TBD     |
| CSS Animations      |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Error Handling      |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create Copy Button  |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

https://app.diagrams.net/#G1RMnx_gqqTcynwnto0csROJLJpaRDixIy

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!
- ICS file to send a calendar invitation
- CSS animations
***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
