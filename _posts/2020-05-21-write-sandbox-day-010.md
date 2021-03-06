---
title: Sandbox::Write(Day010) Работа с материалами, отображение текстур
author: Артём Воробьёв aka svirex
date: 2020-05-21 13:40:00 +0400
categories: [Coding, Sandbox]
---

## Задача

Я уже научился грузить меши в OpenGL, и отображать их на экране. Но есть одно "но" - у мешей есть материалы, которые содержат текстуры. Необходимо сделать загрузку и отображение материалов.

## Решение

Для решения задачи были сделаны существенные изменения и доработки:

* Добавлены классы `Material`, `Texture`, которые отвечают за хранение данных и их загрузку на GPU для материалов и текстур соответственно
* Переписана логика шейдеров. Если раньше были объекты шейдера с различным названием, то теперь есть один шейдер с различными условиями `ifdef` в коде, которые зависят от параметров материала. Наличие или отсутствие текстур, текстурных координат определяется на этапе компиляции шейдера и создается шейдер для определенного меша. Причем данный объект шейдера не хранится в менеджере ресурсов, его существованием управляет объект типа `Mesh`.
* Загрузка данных происходит следующим образом: сначала грузятся данные в оперативную память, и если всё хорошо, загружаться на GPU.

## Косметические улучшения

Все внешние библиотеки были перенесены в проект, поэтому не требуют установки каких-либо зависимостей отдельно.

## Затыки

Во время отладки столкнулся со следующими проблемами:

* Не стоит работать с нулевыми указателями, а именно вызвать для них какой-либо метод :) Звучит смешно, но потребовалось потратить достаточно много времени, чтобы выяснить, что я пытался вызвать функцию загрузки текстуры на GPU у материала, у которого не было текстуры, указатель был `nullptr`.
* Стоит получать ошибки при загрузке текстур и других данных на GPU.
* Внимательно относиться ко внутренним форматам текстур на GPU, типам передаваемых данных и количеству каналов. Иначе можно получить интересные результаты или `SEGFAULT`.
* Долго промучился с неправильным наложением текстур. Текстура была для DirectX, то есть начало координат для UV находится на верхнем левом углу, тогда как для OpenGL - нижний левый. Стоит учесть этот момент при разработке редактора.

## Для размышления

* Как было сказано выше, на основе материала создается уникальный шейдер, который не хранится в менеджере ресурсов, а его существованием управляет объект типа `Mesh`. Однако, если у нас будет сотня мешей с одним материалом, то в текущей логике инстанс материала будет один, а вот шейдеры для меша будет создаваться для каждого объекта. Что-то здесь не так :) Стоит подумать о переносе указателя на шейдер из меша в материал.
* Библиотека `assimp` имеет ограничение: один меш - один материал. Как работать с акторами, у которым меш имеет несколько материалов?

## Результат

Вот видео с результатом

<iframe width="560" height="315" src="https://www.youtube.com/embed/7Iw0JLO9wl0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

У камня есть текстура, у ёлки - нет, но `assimp` предоставляет материал по умолчанию с базовым цветом.

## Заключение

Ссылка на [GitHub](https://github.com/Svirex/sandbox/tree/SandboxDay10)

[Доска в Trello](https://trello.com/b/8eOk7S6f/sandbox)
