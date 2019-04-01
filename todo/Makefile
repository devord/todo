.PHONY: all rm-db apply-migrations add-admin add-mock-data

all: rm-db apply-migrations add-admin add-mock-data

is-venv:
	test `env | grep '^VIRTUAL_ENV'`

rm-db:
	rm -f ./db.sqlite3

apply-migrations: is-venv
	./manage.py migrate

add-admin: is-venv
	./manage.py shell -c "from django.contrib.auth import get_user_model; get_user_model().objects.create_superuser('admin', 'admin@todo.com', 'adminadmin')"

add-mock-data: is-venv
	./manage.py shell -c "from api.mock_helper import generate_mock_data; generate_mock_data(10, 100)"
