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

- _Create an interactive, four screen React app_
- _Full CRUD functionality on both front end & back end non-inclusive of User._
- _Have a RESTful JSON API built with Ruby on Rails._
- _Consume & render data from Ruby on Rails API._
- _Utilize React Router, for client-side routing._
- _Front end styled with CSS & Flexbox._

<br>

### Libraries and Dependencies

|    Library    | Description                               |
| :-----------: | :---------------------------------------- |
|     React     | _Component based template system_         |
| React Router  | _Single page application controller_      |
|     Axios     | _Simplify & enable asynchronous requests_ |
| Ruby on Rails | _Generate & deliver website_              |
|   Postgres    | _Store data to manage user selections_    |

<br>

### Client (Front End)

#### Wireframes

- [Desktop/Tablet Landing](https://wireframe.cc/pro/pp/5e85b96d2373094)

- [Desktop/Tablet Create Event](https://wireframe.cc/pro/pp/c644b3d5f373098)

- [Desktop/Tablet Event Detail](https://wireframe.cc/pro/pp/2fdd62221373103)

- [Desktop/Tablet Event Vote](https://wireframe.cc/pro/edit/373731)

- [Mobile Landing](https://wireframe.cc/pro/pp/5a66f56b0373206)

- [Mobile Create Event](https://wireframe.cc/pro/pp/cdf02791c373208)

- [Mobile Event Detail](https://wireframe.cc/pro/pp/5af0edcad373232)

- [Mobile Event Vote](https://wireframe.cc/pro/edit/373980)

#### Component Hierarchy

```structure

src
|__ assets/
      |__ fonts
      |__ images
|__ components/
      |__ Movie/
            |__ Movie.js/
            |__ Movie.css/
      |__ MovieDetail/
            |__ MovieDetail.js/
            |__ MovieDetail.css/
      |__ shared/
            |__ Dropdown/
                  |__ Dropdown.jsx
                  |__ Dropdown.css
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
      |__ Event-Vote.jsx
|__ controllers/
      |__ controller.js
|__ db/
      |__ connection.js
|__ models/
      |__ movies.js
      |__ events.js
      |__ votes.js
      |__ events_movies.js

```

#### Component Breakdown

| Component  |    Type    | state | props | Description                                               |
| :--------: | :--------: | :---: | :---: | :-------------------------------------------------------- |
|   Layout   | functional |   n   |   y   | _The layout will contain the header and footer._          |
|   Header   | functional |   n   |   n   | _The header contains the logo._                           |
|   Button   |   class    |   n   |   y   | _The button will be re-usable._                           |
|    Form    | functional |   y   |   n   | _The form will contain the event name and date._          |
| Movie List | functional |   y   |   y   | _The list will contain a dropdown to rank movie options._ |
|   Footer   | functional |   n   |   n   | _The footer will show creator info._                      |

#### Time Estimates

| Task                   | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------- | :------: | :------------: | :-----------: | :---------: |
| Project Pitch          |    H     |     4 hrs      |     4 hrs     |    4 hrs    |
| Components             |    H     |     5 hrs      |     5 hrs     |    5 hrs    |
| Scroll Bar             |    L     |     1 hrs      |     0 hrs     |    0 hrs    |
| Copy URL Button        |    L     |     1 hrs      |     1 hrs     |    1 hrs    |
| Create CRUD Actions    |    H     |     11 hrs     |    11 hrs     |   11 hrs    |
| CSS                    |    H     |     5 hrs      |     6 hrs     |    6 hrs    |
| Media Queries          |    H     |     4 hrs      |     5 hrs     |    5 hrs    |
| Back End Architecture  |    H     |     4 hrs      |     5 hrs     |    5 hrs    |
| Front End Architecture |    H     |     4 hrs      |    5.5 hrs    |   5.5 hrs   |
| Research & Debugging   |    H     |     4 hrs      |    5.5 hrs    |   5.5 hrs   |
| PMVP CSS Animations    |    L     |     3 hrs      |     0 hrs     |     TBD     |
| PMVP Calendar Invite   |    L     |     3 hrs      |     0 hrs     |     TBD     |
| PMVP 3rd Party API     |    L     |     4 hrs      |     0 hrs     |     TBD     |
| TOTAL                  |          |     48 hrs     |    48 hrs     |   48 hrs    |

<br>

### Server (Back End)

[ERD Model](https://app.diagrams.net/#G1RMnx_gqqTcynwnto0csROJLJpaRDixIy)

<br>

---

## Post-MVP

- ICS file to send a calendar invitation
- CSS animations
- Incorporate third party API to expand movie database
- User authentication & pop-up model for user info

---

## Code Showcase

````<div>
					<iframe
						className="trailer"
						title={name}
						alt={name}
						width="560"
						height="315"
						src={`https://www.youtube.com/embed/${trailer}`}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				```
````
