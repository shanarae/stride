STRIDE
====================================
Created by Shanarae Goodwin for the RocketU Capstone Project

The goal of this app is to provide runners a place to store all of their results from races, analyze their performance over time, and to create training plans for upcoming events.
This app was created using Django with REST for the backend and Angular/Bootstrap for the frontend with C3 for graphics, a Google Maps API, and a Postgres database.

The app has three components:

RACE TRACKER
The race tracker providers users one place to store and analyze past races.
Add a Race is a form for users to enter their past race information.
The Past Races tab is a list of all the entered races. From here races can be edited or deleted.
The Race Analysis tab is a graph of paces for each race over time. The graphs were created using C3. Users can see all their races in one graph or can click on a specific distance.

EVENT MAPPER
The race mapper plots the locations for all the user's past events on a Google map. Runners can see all the places they have visited around the world for races.

TRAINING PLANNER
The training planner creates day-by-day training plans for runners to train for upcoming events.
Create New Plan is where a user should first enter their upcoming race information and goals.
Existing Plans shows all of a users upcoming events. From here a race can be edited or deleted. Training plans are accessed by clicking on the race name.
The training plan is created based on the distance of the race, the race date, and the finish time goal.

There is also a Profile page where users can see their profile (username, name, email) and can make edits.

The site requires users to register and login to use any of the three components.