import random

from faker import Faker
from faker.providers import lorem

from api.models import Label, Item


def random_subset(elements):
    return random.sample(elements, k=int(random.triangular(0, len(elements), 2)))


def generate_mock_data(num_labels, num_items):
    fake = Faker()
    fake.add_provider(lorem)

    labels = []
    for _ in range(num_labels):
        label = Label(name=fake.word())
        label.save()
        labels.append(label)

    for _ in range(num_items):
        item = Item(title=fake.sentence(),
                    description=fake.paragraph())
        item.save()
        item.labels.add(*random_subset(labels))
