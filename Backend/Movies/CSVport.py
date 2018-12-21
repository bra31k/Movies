import csv, sys, os, ast

project_dir = "Movies"

sys.path.append(project_dir)

os.environ['DJANGO_SETTINGS_MODULE'] = 'settings'

import django

django.setup()

from MoviesDB.models import Film, Genre

from datetime import datetime

def validate(date_text):
    try:
        if date_text != datetime.strptime(date_text, "%Y-%m-%d").strftime('%Y-%m-%d'):
            raise ValueError
        return True
    except ValueError:
        return False

data = csv.reader(open('movies_metadata.csv', encoding='utf-8'),delimiter=",")


# for row in data:
#      if row[0] != 'adult' and len(row) == 24 and len(row[3]) > 2:
#          dict = ast.literal_eval(row[3])
#          genre = Genre()
#          for i in range(len(dict)):
#              if Genre.objects.filter(genre_name=dict[i]['name']).count() < 1:
#                  genre.genre_name = dict[i]['name']
#                  genre.save()

for row in data:
    if row[0] != 'adult' and len(row) == 24 and len(row[3]) > 2 and validate(row[14]):
        film = Film()
        dict = ast.literal_eval(row[3])
        film.original_title = row[8]
        film.poster_path = row[11]
        film.release_date = row[14]
        film.save()
        for i in range(len(dict)):
            if Genre.objects.filter(genre_name=dict[i]['name']).exists():
                film.genres.add(Genre.objects.get(genre_name=dict[i]['name']))
            else:
                Genre.objects.create(genre_name=dict[i]['name'])
                film.genres.add(Genre.objects.get(genre_name=dict[i]['name']))
        film.save()
        print(film.original_title, film.id)

        #if Film.objects.filter(original_title=row[8], release_date=row[14], poster_path=row[11]).count() > 1:
        #    print(Film.objects.filter(original_title=row[8], release_date=row[14], poster_path=row[11]))
        #    Film.objects.filter(original_title=row[8], release_date=row[14]).delete()
        #film = Film.objects.get(original_title=row[8], release_date=row[14])
        #for i in range(len(dict)):
        #    film.genres.add(Genre.objects.get(genre_name=dict[i]['name']))
        #if Film.objects.get(original_title=row[8]):
        #     film = Film()
        #     film.original_title = row[8]
        #     film.poster_path = row[11]
        #     if validate(row[14]):
        #         film.release_date = row[14]
        #     else:
        #         continue
        #     film.save()
        #     print(film.id)
