# Fresh Spots

* Users can upload/record their exercises to the database and see how their compare with their peers/others in the community.
* Features
  * A user can sign up with social auth / login / logout
  * An admin user can create leagues
  * A user view the list of existing leagues and join a league
  * A user can upload their activities to the database and see their score calculated for a given league.
  * More things to be added after these initial features for an MVP

* Backend Framework
  * [Deno + Fresh](https://fresh.deno.dev/)
* ORM
  * [DenoDB](https://eveningkid.com/denodb-docs/)
* Auth
  * [DenoAuth](https://www.denoauth.org/docs)

The code is in the [app](/app/) directory. See the README there for setup directions.

---

## TODO

* Day 1
  * [ ] Get a new fresh project started
  * [ ] Setup the database
    * [ ] Docker/Postgres
  * [ ] Create a users table
  * [ ] Generate a route that returns data from the DB
  * [ ] Get a lot of the configuration centralized



  * [ ] Upgrade Deno
  * [x] Generate Fresh Project
  * [x] Familiarize myself with Fresh
  * [x] Linter?
  * [x] Setup the database
    * [x] Docker Postgres
  * [x] Create a users table
  * [x] At least 1 route that returns data from DB
* Day 2
  * [x] Update the README
  * [x] use dotenv from std library
    * https://deno.land/std@0.150.0/dotenv
  * [x] Use source maps everywhere...
  * [x] Figure out DenoAuth
  * [x] Design the Database
* Day 3 - (August 5th 2022)
  * [ ] Config schema validation
  * [ ] Define our Models...
    * User
    * Social Profile
    * Spot List
    * Spot
  * [ ] Allow users to login and logout
  * [ ] Show a map on the home page

# Stretch Features

* Comments on lists
* Favoriting / staring lists
* Posting pictures of food / events at the spots
* Lists can have a header / background image
* User profile that shows all the lists they've created
* Lists can be upvoted
