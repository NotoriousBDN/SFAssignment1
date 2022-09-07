Assignment 1

Git
The git repository contains the project along with a README folder.
Link: https://github.com/NotoriousBDN/SFAssignment1.git

Version Control
During the development of the project, I regularly committed my work, this was to prevent loss of data. I also used branches for some of the complex areas so that any errors would be able to be checked easily.

Data Structures
Two data structures were used: newUsers.json and groups.json.
newUsers were a JSON file that contain a user’s id, username, email and role.
Groups were a JSON file that contained a group name, name of all of its room and of all users in the group.
These JSON files were saved under SFAssignment1/server/data

REST API

User Authenticate
Description: Will check if the username exists, if it does they will be logged in.
Route: getUser
Method: POST
Parameters: username: string
Return value: if works: {id: number, username: string, email:string, role: number, ok: true}
If it failed: {“ok”: false}
Technical Explanation: Route receives the username, reads newUsers.json file to see if there is a match. If it does ok: true, if not ok:false

Get User Groups
Description: Will retrieve all groups and rooms a user is in
Route: getGroup
Method: POST
Parameters: username: string
Return Value: if works: {group: string, rooms: array}
It if failed: {“ok”: false}
Technical Explanation: Uses the successfully checked username to see what groups they are in. Will list all groups and their associated rooms that the user is in.
Get Users in Group
Description: Will check the users in a group
Route: getUsers
Method: POST
Parameters: group name: string
Return Value: If it works: {userList: array}
If it failed: {“ok”: false}
Technical Explanation:

Create a User
Description: Will create a user
Route: createUser
Method: POST
Parameters: {username: string, id: number, email: string, role: number}
Return Value: If it works: {“ok”: true}
If it failed: {“ok”: false}
Technical Explanation: Will create a user with the provided values. Will not work if username or id are already taken, or the role is greater than the user generating the request. Will write the successfully created user in the newUsers.json file.

Update a User
Description: Will update a user
Route: editUser
Method: POST
Parameters: {username: string, id: number, email: string, role: number}
Return Value: If it works: {“ok”: true}
If it failed: {“ok”: false}
Technical Explanation: Will edit a user with the provided values. Will not allow the id to be changed or the role to be higher than the user generating the request. Will rewrite the successfully edited user in the newUsers.json file.

Delete a User
Description: Will delete a user
Route: deleteUser
Method: POST
Parameters: {username: string}
Return Value: If it works: {“ok”: true}
If it failed: {“ok”: false}
Technical Explanation: Will find a user with the same value as the string and delete their entry in the newUsers.json file.

Create a Group
Description: Creates a new group
Route: createGroup
Method: POST
Parameters: {groupname: string}
Return Value: If it works: {groupname: string}
If it failed: {“ok”: failed}
Technical Explanation: Will check if the group name is taken, if not rewrite in the groups.json file.

Create a Room
Description: Create a new room
Route: createRoom
Method: POST
Parameters: {groupname: string, rommname: string}
Return Value: It worked: {“roomAdded”: true}
If it failed: {“emptyField”: true}
Technical Explanation: Will check if a group exists with that name. Will check that the room name is not already taken. If not will append a new room to the room list for the given group. Will rewrite the groups.json file.

Add a User to Group
Description: Add a user to a group
Route: addUserGroup
Method: POST
Parameters: {groupname: string, username: string}
Return Value: If it worked: {“userAdded”: true}
If it failed: {“emptyField”: true}
Technical Explanation: Will use the groupname to check if the group exists. If it does it will check the user is not already apart of it, if not will append to the userList. Will rewrite the groups.json file.

Delete a Group
Description: Delete a group
Route: deleteGroup
Method: POST
Parameters: {groupname: string}
Return Value: If it works: {“ok”: true}
If it failed: {“ok”: false}
Technical Explanation: Will find a group with the same name as the specified one. Will splice if from the array and then append the array back to the groups.json file.

Delete a Room
Description: Delete a room
Route: deleteRoom
Method: POST
Parameters: {groupname: string, roomname: string}
Return Value: If it works: {“ok”: true}
If it failed: {“ok”: false}
Technical Explanation: Will check that both the group and room exist. Will splice the room out of the roomList array. Will then rewrite the groups.json file.

Remove a User from Group
Description: Remove a user from a group
Route: removeUserGroup
Method: POST
Parameters: {groupname: string, username: string}
Return Value: If it works: {“ok”: true}
If it failed: {“ok”: false}
Technical Explanation: Will check to see if group exists and user is a member. Will then splice user from userList array. Will then rewrite the groups.json file.


Angular Architecture

COMPONENTS
Login Component
This is the default room as you will be redirected to the login page when entering the site. It has a login form that requires the user to enter their username. This will be checked to see if they are a user. If they are they will marked as ‘loggedIn’, this prevents the other components from redirecting back to the login component. This is done through a localStorage called ‘loggedIn’ set to ‘true’. The user’s username and role are also stored in the localStorage. 
There is a logout button on the header. Clicking this will redirect back to the login component as well as clearing the localStorage. Doing this will result in all other components redirecting back to the login page.

Account Component
The account component checks the role assigned from the login through local storage. The display will change to match the user’s current role.
Function	Applies To
Create a Room	•	Group Assistant
•	Group Admin
•	Super Admin
Add User to a Group	•	Group Assistant
•	Group Admin
•	Super Admin
Remove User from a Group	•	Group Assistant
•	Group Admin
•	Super Admin
Create a User	•	Group Admin
•	Super Admin
Create a Group	•	Group Admin
•	Super Admin
Delete a Group	•	Group Admin
•	Super Admin
Delete a Room	•	Group Admin
•	Super Admin
Edit a User	•	Super Admin
Delete a User	•	Super Admin

This is how permissions are assigned.
Depending on your role you will see a wider selection of buttons for performing the functions as well input fields.

Groups Component
This will show the groups and rooms the user is a part of. Currently this does not work.

Room-view Component
This is a basic outline of what the room-view will look like when it has sockets functionality.

SERVICES
Check-user Service
Holds the variable to store the user’s name.

Get-groups Service
Holds the variable to store the name of groups and their rooms

Get-users Service
Holds the variable to store the user’s in a group. 
Also stores the variable to see if the user is logged in.
