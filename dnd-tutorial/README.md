# react-boilerplate
Boilerplate for a simple vanilla react app

## Get started
If you don't want to read about the structure of app, simply clone the repo, navigate into it and run 
```
npm install
```
then:
```
npm run dev
```

If everything works correctly then when you navigate to: <http://localhost:8080/> you should be greated by a "Hello World" message.

### Structure
Src of app is in the `app` directory, within which are the following directories: 
- `components` for storing components, in general these should be stateless presentational components
- `containers` for storing container components, these should have state and are generally the controllers for the presentational components 
- `config` currently just handles routing, however can add more to this file as needed
- `styles` this holds a `styles.js` object, this can be imported to apply styles to components in JSX, not completely sold on this but it definitely does solve some headaches associated with using css in react apps. You can of course add your own css files should you have needs as well :)

### Language
- All jsx files have the `.jsx` extension rather than just `.js`, there are arguments both ways. I feel this helps better explain the nature of these files and help protect against accidently treating a non-jsx file as if it were. Having the extension also helps most syntax highlighting options pick up on a jsx file instantly. A drawback of this is that you have to use explicit imports (include file extension).

### Dependencies
- The only questionable dependencies would probably be `axios`, depending on what you prefer to handle your requests with. But it works for me and is a solid HTTP client with the bonus of using promises, simply replace this with your own favourite should you need
- The other one is the `react-addons-css-transition-group`, useful for managing transitions between routes, but certainly will not be useful for everyone. I use it enough to include it, but you may want to change. 
