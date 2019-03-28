# TODO Server

The server is a Django project.

## How to Run

To run locally, do:

- Create the Python3 virtual environment
  ```shell
  make venv
  ```

- Create development database, migrate and add initial data
  ```shell
  . venv/bin/activate
  make
  ```

- Run the development server
  ```shell
  ./manage.py runserver
  ```

- Test the API endpoints
  ```shell
  http http://localhost:8000/api/items/
  ```
