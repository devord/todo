.PHONY: all reset-db add-admin add-mock-data

all: rm-db migrate add-admin add-mock-data

is_venv:
	test `env | grep '^VIRTUAL_ENV'`

venv:
	python3 -m virtualenv -p python3 venv
	venv/bin/pip3 install -r requirements.txt

rm-db:
	rm ./db.sqlite3

migrate: is_venv
	./manage.py migrate

add-admin: is_venv
	./manage.py shell -c "from django.contrib.auth import get_user_model; get_user_model().objects.create_superuser('admin', 'admin@todo.com', 'adminadmin')"

add-mock-data: is_venv
	./manage.py shell -c "from api.mock_helper import generate_mock_data; generate_mock_data()"
