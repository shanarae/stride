STRIDE
====================================
Created by Shanarae Goodwin for the RocketU Capstone Project

The goal of this app is to provide runners a place to store all of their results from races, analyze their performance over time, and to create training plans for upcoming events.
This app was created using Django with REST for the backend and Angular/Bootstrap for the frontend with C3 for graphics, a Google Maps API, and a PostgreSQL database. This app was deployed to AWS and can be found at www.strideathlete.com.

The app has three components:

RACE TRACKER
The race tracker provides users one place to store and analyze past races.
Add a Race is a form for users to enter their past race information.
The Past Races tab is a list of all the entered races. From here races can be edited or deleted. The list is created using a REST call to an API of the user's past races (prior to today's date).
The Race Analysis tab is a graph of paces for each race over time. The graphs were created using C3. Users can see all their races in one graph or can click on a specific distance.

EVENT MAPPER
The race mapper plots the locations for all the user's past events using the Google Maps API. Runners can see all the places they have visited around the world for races.

TRAINING PLANNER
The training planner creates day-by-day training plans for runners to train for upcoming events.
Create New Plan is where a user should first enter their upcoming race information and goals. The future race gets stored so that after the race date it will show up on the user's Past Race list ready for the user to update that record with race results.
Existing Plans shows all of a user's upcoming events. From here a race can be edited or deleted. Training plans are accessed by clicking on the race name.
The training plan is dynamically created on the frontend based on the distance of the race, the race date, and the finish time goal. The length of the training plan is based on the race distance. The start date of the training plan is based on the race date, and the run workout pace goals are calculated based on the race time goal.

There is also a Profile page where users can see their profile (username, name, email) and can make edits.

The site requires users to register and login to use any of the three components.