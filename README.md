# Group Up
Social media is increasing exponentially in the lives of children, teenagers and adults. It allows family and friends to stay connected through the internet without the need to physically move to each other. Because of this ease of access, social media has been growing immensely in popularity and doesn't seem to be stopping any time soon. To accommodate this rising number of users many companies are creating more platforms, each with their own creative twist. 

In this project we intend to create a platform for hobbyists to come together, share or learn more about their hobbies, whatever they may be. One example of this type of platform is [meetup](https://www.meetup.com)​. On this website you can create events for people to sign up and meet. 

We believe we could bring people closer together by giving them a way of joining or hosting an event with other people and ultimately enjoy their hobby to the fullest, all the while in the presence of other like minded people.

# Scenarios
Main scenario:
- The main scenario relies on the functionality to create/join events. Each new user will have to register on the platform providing basic information (name, birthdate, etc), his favorite hobbies and location. After the registration, he will be able to create events. In order to do this he will have to select the “Create Event” button, this will open a window dedicated to this functionality. The user will then have to select the type of activity that he wants to create (hiking, cycling, jogging, etc) and the type of access (public or private, where only users with the event link will be able to access). Afterwards, he will be able to name the event, set its date and choose its type of schedule (routine,one-time or workshop). After the event is created, other users can see it and join it. Once an event is created our platform will convert the address given by the event host onto a map for other users to see it. The user will also be able to click on the address url to open google maps and follow the directions to the chosen place.

Secondary scenarios:
- After the event ended the user will choose a rating for the event, from 1 to 5 (star rating) by clicking on the amount of stars. Then he has the option to leave a comment.
- If the user wishes he is able to sort events by type, proximity and popularity by clicking the “Sort” button.
- The user can utilize the search bar to look for other users by writing their name.
- When visiting another user’s profile you can click a button to add him as a friend.
- By clicking on the Chat icon the user will see a friends list popping up and is then able to click a friend to chat with.

# Personas
- User: Anyone with interest in using the website to look for events to join.
- Advertiser: Anyone with interest in advertising his own workshop on the page.

 # Functional and non functional requirements
 | #     | Requirement                          | Description                                                                 | Priority | Schedule (deadline) |
|-------|--------------------------------------|-----------------------------------------------------------------------------|----------|---------------------|
| FR01  | Create event                         | User creates events for others to join.                                     | HIGH     | 9/11/2019           |
| FR02  | Join event                           | Users are able to join events.                                              | HIGH     | 15/11/2019          |
| FR03  | Search event                         | Users can search events by name or type.                                    | LOW      |                     |
| FR04  | Rate event                           | Users are able to rate events after attending.                              | LOW      |                     |
| FR05  | Comment on event                     | Users are able to leave a comment on the event.                             | LOW      |                     |
| FR06  | Add friends                          | Users are able to add friends.                                              | MEDIUM   | 24/12/2019          |
| FR07  | Chat with friends                    | Users are able to chat with friends.                                        | MEDIUM   | 02/01/2020          |
| FR08  | View event location (and directions) | Users can view the location of the event on the map and get its directions. | HIGH     | 20/12/2019          |
| FR09  | Database creation                    | Create a simple database to support the website.                            | HIGH     | 15/11/2019          |
| FR10  | Database connection                  | Connect mySQL to server.                                                    | HIGH     | 16/11/2019          |
| NFR01 | W3C                                  | All data in three clicks.                                                   | HIGH     | 15/01/2020          |
| NFR02 | User friendly                        | Interface easy to manipulate.                                               | HIGH     |                     |
| NFR03 | Responsive                           | Works in all platforms (mobile, Windows, Mac, etc).                         | LOW      |                     |
| NFR04 | Security                             | 2 factor authentication                                                     | MEDIUM   |                     |
     
# CRUD Matrix
| #                | Create Event | Join Event | Search Event | Rate Event | Comment on Event | Add Friends | Chat with Friends | View Event Location |
|------------------|--------------|------------|--------------|------------|------------------|-------------|-------------------|---------------------|
| Aplication Layer | R            | R          | R            | R          | R                | R           | R                 | R                   |
| Business Layer   | CR           | RUD        | RU           | CRUD       | CRUD             | CRUD        | CRD               | R                   |
| Data Layer       | CU           | UD         |              | CU         | CUD              | CUD         | CUD               | CU                  |
# Development Schedule
 - First prototype by 17/11/2019.
 - Alpha version of the project by 15/12/2019.
 - Final version by 24/01/2020.

 
 # Programs Used
- [Github](https://www.github.com).
- [Heroku](https://www.heroku.com).
- [Visual Studio Code](https://code.visualstudio.com).

# Languages Used
- HTML.
- CSS.
- Javascript.
- Node.js + Express.js.

 # Authors
- [Bruno Ramos](https://github.com/BacRamos).
- [Manuel Beijinho](https://github.com/manuelbpc).

# Acknowlegments
- Miguel Bugalho.
- Jacinto Estima.
- José Vasconcelos.
- Gabriel Pestana.
