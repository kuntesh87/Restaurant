This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Tech Question-Answer

### 1.	How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

I spend 4 hours on this Project,if I have more time I would add more test case, more UI Effect,next page button, More WCAG Standards.

### What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you have used it.

Hook is a most useful feature that was added to the latest version of React Language which help me to write more readable and efficent code.

 const [city, setCity] = useState("");
  const [filter,setFilter] = useState("");
  const [restaurants, setRestaurants] = useState([]);
   
  if (props.restaurants !== restaurants && restaurants.length === 0 && filter === "") {
        setRestaurants(props.restaurants);
    }
    const handleSubmit = () => {
    props.searchRestaurant(city);
    }

### 3.	How would you track down a performance issue in production? Have you ever had to do this?

I can use try and catch in production, inside catch  we can use logging that error on backend log system and using that log we can track down performance issue.I had use that during my last project and I used same mechanism of logging.  

### 4.	How would you improve the API that you just used?
-We can sort restaurant list by name or price.
-We can add Cuisine type,Rating and service hours, isDeliver,Mapping with Menu.

### 5.	Please describe yourself using JSON.
const myself = {
    name: 'Kuntesh Patel',
    experience: '7+ year',
    tech:'React,Node,Ethereum',
    mobileno: '416-804-4011',
    email:'kuntesh87@gmail.com'
}

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
