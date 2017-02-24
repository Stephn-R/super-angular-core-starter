# Angular2 using .NET Core v1.1.0

A successful marriage of Webpack, Angular2, and .NET Core

## Deployment to Heroku using Docker

```sh
# Loging to the container tool
heroku login
heroku plugins:install heroku-container-tools
heroku container:login
heroku container:push web
```

## Run app locally

You will need Node, and .NET Core. Once you have both, run the following commands to get started:

```sh
# Install NPM Dependencies
npm install
# Install .NET Dependencies
dotnet restore
# Run the web application
dotnet run
```

## Notes

### General
- Docker supported
- Client/ contains all the Angular 2 code
- Server/ contains all the .NET Core code

### Server
- Webpack Middleware is used to compile the code live in dev mode
- Beautiful [error page](http://localhost:5000/Home/Error)

### Client
- This application does not use the SystemJS implementation of Angular 2
- Implemented Angular2 using typescript, redux, redux-router, and more.
- Using Webpack 2

Direct all questions via email to -> [Stephen Rodriguez](mailto:steprodriguez10@gmail.com)
