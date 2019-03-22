.PHONY: all reset-db add-admin add-mock-data

all: reset-db add-admin add-mock-data

reset-db:
	rm ./db.sqlite3
	./manage.py migrate

add-admin:
	./manage.py shell -c "from django.contrib.auth import get_user_model; get_user_model().objects.create_superuser('admin', 'admin@todo.com', 'adminadmin')"

add-mock-data:
	./manage.py shell -c "from api.mock_helper import generate_mock_data; generate_mock_data()"
