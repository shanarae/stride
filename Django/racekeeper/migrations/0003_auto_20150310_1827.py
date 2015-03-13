# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('racekeeper', '0002_race_location'),
    ]

    operations = [
        migrations.AlterField(
            model_name='race',
            name='bibNumber',
            field=models.IntegerField(null=True, blank=True),
            preserve_default=True,
        ),
    ]
