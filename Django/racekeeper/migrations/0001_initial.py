# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Race',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('event', models.CharField(max_length=100)),
                ('date', models.DateField()),
                ('distance', models.FloatField(choices=[(3.107, b'5K'), (6.214, b'10K'), (13.1, b'Half Marathon'), (26.2, b'Marathon'), (31.069, b'50K'), (62.137, b'100K'), (100, b'100 Miles')])),
                ('bibNumber', models.IntegerField()),
                ('finishTime', models.IntegerField()),
                ('totalinRace', models.IntegerField(null=True, blank=True)),
                ('overallPlace', models.IntegerField(null=True, blank=True)),
                ('totalinGender', models.IntegerField(null=True, blank=True)),
                ('genderPlace', models.IntegerField(null=True, blank=True)),
                ('totalinDivision', models.IntegerField(null=True, blank=True)),
                ('divisionPlace', models.IntegerField(null=True, blank=True)),
                ('user', models.ForeignKey(to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Race',
                'verbose_name_plural': 'Races',
            },
            bases=(models.Model,),
        ),
    ]
