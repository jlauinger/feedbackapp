# Feedback web application

This is a small Angular application to gather feedback. It was written for
Winterophase 2015 at the computer science department at TU Darmstadt.

## Deployment

### Files

Clone the repository. Make sure these needed tools are installed:

```
sudo apt-get install nodejs npm
sudo npm install -g bower
```

Install all the dependencies: :sparkles:

```
bower install
```

Configure your web server so that a URL points to the directory. Make sure that
PHP scripts are executed in the directory `api/v1`.

### Database

Create a database for the app, e.g. `feedback`. Grant usage privileges to a
database user, e.g. `feedback`. Configure its credentials in `api/v1/database.php`.

Install the database schema like so (change the credentials as needed):

```
mysql feedback -u feedback -p < app/install-database.sql
```

## License

Licensed under the terms of GNU GPLv3  
Copyright 2015 Johannes Lauinger
