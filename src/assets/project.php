<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
$project = ['Учебный пример',
  'IQ квартал',
  'Жилой дом',
  'ЖК Видное',
  'Поликлиника',
  'Помещение теплообменников СПОТ',
  'text',
  'ugiuhol',
  'yiyoipoup',
  'Торговый центр НЕБО',
  'Торговый центр КОСМОС',
  'Причал',
  'ТЭС с ПГУ',
  'Оградительное сооружение',
  'Котлован',
  'Тестовый для Тани',
  'Колледж',
  '1',
  'ломло',
  'rgwrhehyeh',
  'Пробный объект'];

echo json_decode($project);

