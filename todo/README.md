# TODO Server

The server is a [Django](https://www.djangoproject.com/) project. It uses
Python 3.7 and [Pipenv](https://pipenv.readthedocs.io/en/latest/).

## How to Run

First, setup the Python 3 environment. If you don't have Python 3.7, Pipenv
will install it provided you have [pyenv](https://github.com/pyenv/pyenv)
installed.

```shell
pipenv install --dev
pipenv shell
```

Then, create the development database, migrate and add initial data.
```shell
make
```

Finally, run the development server.
```shell
./manage.py runserver
```

You can use [HTTPie](https://httpie.org/) to test the API endpoints.
```shell
http http://localhost:8000/api/items/
```
