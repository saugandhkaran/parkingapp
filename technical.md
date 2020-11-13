1. What architectures or patterns are you using currently or have worked on recently?
- I am currently working on MVC pattern but I have also worked on MVV and Layered Pattern

2. What do you think of them and would you want to implement it again?
- I feel it depends on the scenario on which one to use. In one project where we had to create REST endpoints for multiple clients we used the Layered Pattern and the client side for the same was build in MVC pattern.
 Yes I would love to implement it again if needed.

3. What version control system do you use or prefer?
- I usually use git. I had a chance to work with SVN too but I prefer git.

4. What is your favorite language feature and can you give a short snippet on how you use it?
- In Javascript I really liked the spread operator. It allows an iterable (array, object) to expand in places where 0+ arguments are expected.
  It can be used to copy an array, concat two arrays, use array as arguments, add an item to an existing array, combining objects and many more
  Some examples are as below: 
  - copying an array:
  ```
  const arr1 = [1, 2, 3];
  const arr2 = [...arr1]; //arr2 = [1, 2, 3]
  ```

  - concat two arrays
  ```
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const arr3 = [...arr1, ...arr2]; //arr3 = [1, 2, 3, 4, 5, 6];
  ```

  - user array as arguments
  ```
  const arr1 = [1, 2];
  const add = (p1, p2) => { return p1 + p2 }
  console.log(add(...arr1)); //3
  ```

  - add an item to an existing array
  ```
  const arr1 = [1, 2];
  const arr2 = [3, ...arr1]; // arr2 = [3, 1, 2]
  ```

  - combine objects
  ```
  const obj1 = {
    'name': 'John Doe'
  }
  const obj2 = {
    'address': 'World'
  }
  const obj3 = {
    ...obj1,
    ...obj2,
    'concat': 'true'
  }

  // obj3 = {
  //  'name': 'John Doe',
  //  'address': 'World',
  //  'concat': 'true'
  // }

5. What future or current technology do you look forward to the most or want to use and why?
- I am looking forward for voice activated UIs. The ease which people want these days, I feel voice bots are the future, where all you need to do is just say and the rest is done.

6. How would you find a production bug/performance issue? Have you done this before?
- As per my experience, we had integrated Tivoli codes and had service now integrated. Hence if a Tivoli code was generated it meant that there was an issue in production, and if a service now code is genreated it meant that the user has a feedback.

7. How would you improve the application (bug fixes, security, performance, etc.)?
- For security and code quality - using tools like SonarQube, HP Fortify etc
- Writing test scripts
- For performance using tools like - Google lighthouse