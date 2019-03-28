from api.models import Label, Item


LABELS = [
    'Blue',
    'Green',
    'Red',
]

ITEMS = [
    ('Write', 'Write some articles', [0, 1]),
    ('Run', 'Run a few miles', [0, 2]),
    ('Eat', 'Breakfast, lunch and super', []),
]


def generate_mock_data():
    labels = []
    for name in LABELS:
        label = Label(name=name)
        label.save()
        labels.append(label)

    for title, description, label_ids in ITEMS:
        item = Item(title=title,
                    description=description)
        item.save()
        for lid in label_ids:
            item.labels.add(labels[lid])
