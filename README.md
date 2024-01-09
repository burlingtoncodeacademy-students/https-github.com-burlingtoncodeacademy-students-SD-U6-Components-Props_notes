### Before Getting Started
There are two different branches associated with this lesson.
- Main
  - This branch provides the base notes of material not filled out.
- Completed
  - This branch includes all the added notes for you to review and compare with your own code-along.

### Topics Covered
- Parent/Child component relationships
- React Fragments
- Reusable Components
- Props 

### What Should Already Be Understood
- Creating a React Application
  - File / Folder structure
- JavaScript Fundamentals
  - Functions
  - Import / Export concepts
- HTML Attributes

## Files / Folders Provided in this Lesson
This lesson is built can be built on the previous lesson, Intro to React, however, this does not detail any files in that lesson other than `App.jsx`. **App.jsx** does not have those components reflected in this lesson.

This lesson starts right at the `npx create-react-app .` point.
- components-props
  - assets
    - `Parent-Child Tree.png`
  - src
    - components
      - **employeeinfo**
        - `EmployeeInfo.jsx` (Will build here)
    - App.jsx (updated from App.js)

## Resources
- [Creating a New React App](https://react.dev/learn/start-a-new-react-project)
- [PDF Notes Project Setup](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FtREBlxLhAPTB8ZVYiQy1%2Fuploads%2F85gYGO7YaVE24rYVczhc%2FCreating%20a%20React%20App.pdf?alt=media&token=bf0f7d96-a03e-4b50-9adc-d62af526c6c3)
- [PDF Functional Component](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FtREBlxLhAPTB8ZVYiQy1%2Fuploads%2FI7hJbXoIfL1qex9U8ipy%2FAppjs_FunctionalComponent.pdf?alt=media&token=6967bba4-00d7-4cd3-b568-cc99bec23c5e)
- [React Slide Deck](https://www.canva.com/design/DAFWhaqpzRc/qlUfqm93ZfFJSXl-N6yd9A/view#4)

# Challenge
**Presidents**:
```jsx
  /* 
  ! Challenge:
    - Create a new folder within the components folder called "Presidents"
      - Create a file called PresidentVotes.jsx
      - Create a file called DisplayTotals.jsx
    - Create a functional component within each that matches their file name.
      - Note: Don't forget to export!
    - PresidentVotes.jsx 
      - will import DisplayTotals.jsx
      - Will have an array to be passed as props (array supplied below)
      - will return a React.Fragment
        - Will have a h1 that will hold "Presidents"
        - Will map through the provided array and mount DisplayTotals with the values within each object.
          - Hint: Don't forget about a key.
    - DisplayTotals.jsx
      - Will return a React.Fragment that holds a paragraph tag that states "NAME had a total vote count of COUNT"
    - Import and mount within App.jsx under the Employee component.

    Array to pass through props:
    const votes = [
      { name: "Abe Lincoln", count: 139033},
      { name: "Stephen Douglas", count: 115509},
    ]
  */
```