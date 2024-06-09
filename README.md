Тестовое задание, тз :
Создать страницу, на которой можно будет просматривать персонажей из Рика и Морти с помощью открытого api https://rickandmortyapi.com/
Формальные требования к выполнению задачи:
Использовать vue3 или vue2, composition api 
Персонажей выводить в виде карточек, как в источнике. Ссылки на карточке заменить на обычный текст 
Реализовать пагинацию с помощью api 
Реализовать фильтрацию по полям "name" и "status" с помощью api. Фильтрация должна применяться по нажатию на кнопку "Применить" 
Для элементов пагинации и фильтрации можно использовать обычные html теги (input, select) без стилизации 
Код разместить в репозитории github 
Готовое приложение разместить на github pages или аналогичном сервисе 
Источник данных 
Сайт https://rickandmortyapi.com/.

Проблемы, с которыми столкнулся : чтобы сделать такую же карточку, как на сайте, одного запроса было не достаточно, т.к. нам приходил массив
серий, в которых участвовал персонаж, но не было названия серий, получается, что нужно было взять array[0] значение, сплитануть и взять его последние цифры, 
это служило нам данными к следующему запросу с определенными сериями. Решения было 3 : просто кидать на каждую карточку свой запрос с эпизодом, что давало бОльшую нагрузку на сервер.
Вторым решением я решил прогнаться по всем эпизодом, написав парсер, который записывает все названия эпизодов в определенный массив. После того, как я его дописал, мне не нравилось решение, потому что я не мог остановиться на определенной странице, из-за чего ловил ошибку 404, повторно просмотрел доку к апишке, я увидел что можно кидать запрос с эпизодами через запятую.

Чтобы минимализировать загрузку на сервер, я создал несколько массивов, в которых хранил id, уже мною запрошенные, далее в массив notInList я пушил значения, которых не было в массиве allEpisodes, join'ил их через запятую, кидал в запрос с episodes.