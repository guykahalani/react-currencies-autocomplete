1. The difference is that PureComponent implements the shouldComponentUpdate() method by default. While rendering the component and running this method, PureComponent is performing a shallow comparison on the state and props. This shallow comparison means that trying to compare more complex values will not work properly and it might break the app.

2. Using Context with ShouldComponentUpdate can be dangerous because in cases where ShouldComponentUpdate returns false and doesn't update the props and state, children components that rely on these values will not receive the new context.

3. You can pass information from a component to its parent by:
	- Passing a function as a prop to the child component and then invoking that function from the child.
	- Using the context API, create a context provider and write the methods so they can be accessible accross the entire app.
4. You can prevent components from re-rendering by wrapping your functional component with React.memo() to tell it to reuse the last rendered result or by converting class components to a PureComponent which uses the shouldComponentUpdate method by default.

5. Fragments are used in react to allow a component to return more than one parent JSX element.

6. Examples of HOCs:
	a. connect() // redux
	b. withStyles() // material-ui
	c. withRouter() // react-router

7. Handling exceptions in promises requires to add the .catch() method after the .then() method, with async...await you can place try...catch blocks and with callbacks you use the if statement.

8. setState takes two arguments: updater and a callback function. SetState is asynchronous because it batches the calls to change the state before rerendering the component.

9. Steps to migrate class component to functional component:
	a. change the class syntax to function syntax: 
		class MyCompoent extends React.Component {}
			to
		function MyComponent(){}
	b. remove the render method
	c. convert all methods to functions
	d. remove 'this' keyword
	e. use useState hook instead of constructor
	f. replace lifecycle methods with useEffect hook
	
10. Ways styles can be used with components:
	a. import css files in each component
	b. add inline style to elements
	c. use the styled-components library
11. In order to render an HTML string from a server you can use the dangerouslySetInnerHTML, however this approach is not very safe. Alternatively you can split the string and using regex you re-markup the html.