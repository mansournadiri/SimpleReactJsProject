# Created by Mansour Nadiri

## React Router dom

---npm install react-router-dom
------Link #<Link to=””></Link>
------NavLink #<NavLink to="" className={({isActive})=>isActive?ACss:InACss}></NavLink>
------useNavigate #const navigate = useNavigate();return navigate(`/search?query=${query}`);
------BrowserRouter
------createBrowserRouter #const router = creatBrowserRouter([{path: “/*”, element: <APP />}]);
------RouterProvider #< RouterProvider router={router} />
------ScrollRestoration #<ScrolRestoration />
------useParams #const params = useParams();
------useSearchParams #const [urlp] = useSearchParams(); const value = urlp.get(“query”);

## React Components

---rafc #react arrow function component

## React Hook

Hooks let you use different React features from your components
---State Hooks (State lets a component “remember” information like user input.)
------useState declares a state variable that you can update directly.
---------#const [index, setIndex] = useState(0);
------useReducer declares a state variable with the update logic inside a reducer function.
---Context Hooks (Context lets a component receive info from parents without passing it as props)
------useContext reads and subscribes to a context. #const theme = useContext(ThemeContext);
---Ref Hooks (Refs let a component hold some information that isn’t used for rendering)
------useRef declares a ref. #const inputRef = useRef(null)
------useImperativeHandle lets you customize the ref exposed by your component.
---Effect Hooks (Effects let a component connect to and synchronize with external systems)
------useEffect connects a component to an external system. #useEffect(setup, dependencies?)

## .ENV file

it’s a custom Environment Variables
---in .env file declare your variable #”YOUR_KEY_VALUE” = YOUR-VALUE
---access to your variable on your syntax #process.env.YOUR_KEY_VALUE

## UI/UX Component

tailwindcss #Modern CSS
--- npm install -D tailwindcss
--- npx tailwindcss init
Flowbite #UI Component from tailwindcss
--- npm install flowbite

## VS Code Extension

---ES7 React/Redux/GraphQL/React-native Snippets
---IntelliCode
---vscode-icons
---Auto Import
---ESLint
---Prettier
