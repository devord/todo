# TODO

A simple To-Do list

# How to Run

## Server

The server is a Django project and lives in the `todo/` directory.

To run locally, enter the directory and:

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
