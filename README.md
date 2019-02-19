# Key Generator #

## Description

This is a small application to create integers that automatically increment to generate identifiers for development purposes.


### Installing

First, download the project, then cd into the project and install dependencies.

```
$ git clone https://github.com/rcabarreto/keyGenerator.git keyGenerator/
$ cd keyGenerator/
$ yarn install
```

### Configuring

You should create a .env file on the root folder. The env file will look like this:

```
NODE_ENV=development
API_URL=localhost
API_PORT=3000
```

Once the .env file is in place, just run the following command to build the front-end application and run the app:

```
$ yarn start
```

After you start the application, you can use the exposed Rest API to:

* Create User
* Login
* List Sequences
* Create Sequence
* Reset Sequence
* Delete Sequence
* Get Sequence Current value
* Get Sequence Next value

Also, there's a web interface available to manage everything. If you want to use the web interface, just open your browser to:

```
http://localhost:3000
```


### Prerequisites

You need to have Node v10 installed to run this project.

```
$ cd ~
$ curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
$ sudo apt-get install nodejs
```

Check installation

```
$ node -v
```

```
Output
v10.x.x
```


## Built With

### Back-end
* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [SQLite](https://www.sqlite.org/)
* [Sequelize](http://docs.sequelizejs.com/)

### Front-end
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Bootstrap 4](https://getbootstrap.com/docs/4.1/)
* [Babel](https://babeljs.io/)
* [Webpack](https://webpack.js.org/)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details