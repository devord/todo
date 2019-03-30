# TODO Server

The server is a [https://www.djangoproject.com/](Django) project. It uses
Python 3.6 and [https://pipenv.readthedocs.io/en/latest/](Pipenv).

## How to Run

To run the development server, do:

- Create the Python3 virtual environment
  ```shell
  pipenv install
  ```

- Create development database, migrate and add initial data
  ```shell
  pipenv shell
  make
  ```

- Run the development server
  ```shell
  pipenv shell
  ./manage.py runserver
  ```

- Test the API endpoints (using [https://httpie.org/](Httpie))
  ```shell
  http http://localhost:8000/api/items/
  ```
