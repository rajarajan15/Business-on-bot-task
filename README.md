# Business-on-bot-task

*SQL DATABASE*
*USERS ATTRIBUTES*

1. _id: A unique identifier for the user.
2.username: unique name of the user visible to other users
3. Name: name of the user.
3. email: The email address of the user.
4. password: The hashed password of the user.
5. cover_pic: The path or URL to the user's cover picture.
6.profile_pic: The path or URL to the user’s profile picture.
7. Website: Website of the user (if any)
8. city: The location or city where the user resides.

*POSTS ATTRIBUTES*

1. id: The unique identifier for the post.
2. desc: description of the user
3. img: Post that is created.
4. Userid: users id 
5. created_at: date and time of creation

*COMMENTS ATTRIBUTES*

1. id: The unique identifier for the comments.
2. Desc: description.
3.  created_at: date and time of creation
4. Userid: user’s unique id
5. Postid: unique identification of post

*STORIES ATTRIBUTES*
1. Id: The unique identifier for the stories.
2. img: image of the story
3. Userid: unique identification of user

*RELATIONSHIPS ATTRIBUTES*
1. Id: The unique identification for followers
2. followersid: id of the user’s followers
3. followersid: id of the follower’s that the user follows 

*TECH STACK USED*
1. Reactjs
2. Node.js
3. MYSQL
4. Expressjs
