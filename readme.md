## Sample Workflow

- using `NodeJS`, `Gulp`, `Bower`

### Install

* Clone the repo.
* Run `npm install` and `bower install`

### Usage

* Create a nested folder `app/css`, `app/fonts` and `libs/sass`
* Create html document inside the app folder `app/index.html`

```html
....
<head>
	....
	<link rel="stylesheet" href="/css/style.css">
	....
</head>
....
```

* Run `gulp icons` to import `fontawesome` fonts

* Create a sass file inside the `libs/sass` folder e.g. `style.scss`
```sass
@import 'bootstrap';
@import 'font-awesome';

h1.awesome {
	color: blue;
}
```

* Run `gulp css` to import `bootstrap` and `fontawesome` to `app/css/style.css`

* Run local server with live reload @ [http://localhost:12504](http://localhost:12504) by running `gulp webserver`


### Customize

* Edit the `gulpfile.js` and setup your own settings.