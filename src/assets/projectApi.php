<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
$ver = json_decode(file_get_contents('php://input'), true);
$serverVersion = 1;
$localVersion = $ver['localVersion'];


$projectList = array(
  "version" => $serverVersion,
  "projectList" => array(
    array(
      "id" => 12397345,
      "name" => "Учебный пример",
      "description" => "Многофункциональный жилой комплекс",
      "address" => "г. Москва, улица Иванова, д 11",
      "status" => "object",
      "belongs" => "Учебный пример"
    ),
    array(
      "id" => 2,
      "name" => "IQ квартал",
      "description" => "многофункциональный комплекс из трех башен в составе Москва-Сити",
      "address" => "Россия, Москва, Пресненская наб., 10, стр. 2, м. Международная, тел. +7 (495) 104-88-35",
      "status" => "object",
      "belongs" => "Учебный пример"
    ),
    array(
      "id" => 3,
      "name" => "Жилой дом",
      "description" => "жилые дома Москвы",
      "address" => "Москва, район Савеловский",
      "status" => "object",
      "belongs" => "Учебный пример"
    ),
    array(
      "id" => 4,
      "name" => "ЖК Видное",
      "description" => "11 секция",
      "address" => "Поселок Видное",
      "status" => "object",
      "belongs" => "Жилой дом"
    ),
    array(
      "id" => 5,
      "name" => "Поликлиника",
      "description" => "ГБУЗ ГП № 23 ДЗМ",
      "address" => "ул. Недорубова, д. 2",
      "status" => "object",
      "belongs" => "Учебный пример"
    ),
    array(
      "id" => 6,
      "name" => "Многофункциональный",
      "description" => "Многофункциональный",
      "address" => "Многофункциональный",
      "status" => "Многофункциональный",
      "belongs" => "Многофункциональный"
    ),
    array(
      "id" => 7,
      "name" => "Торговый центр КОСМОС",
      "description" => "ТЦ с заглубленной подземной частью.",
      "address" => "г. Москва, Ярославское шоссе д.26",
      "status" => "object",
      "belongs" => ""
    ),
    array(
      "id" => 8,
      "name" => "Помещение теплообменников СПОТ",
      "description" => "Перекрытие на отметке 37,5м.",
      "address" => "Нововоронежская АЭС,город Воронеж.",
      "status" => "object",
      "belongs" => "Учебный пример"
    ),
    array(
      "id" => 9,
      "name" => "Торговый центр НЕБО",
      "description" => "ТЦ с заглубленной подземной частью.",
      "address" => "г. Москва, Ярославское шоссе д.26",
      "status" => "object",
      "belongs" => ""
    ),
    array(
      "id" => 10,
      "name" => "Причал",
      "description" => "Причал из массивов-гигантов",
      "address" => "г. Новороссийск",
      "status" => "object",
      "belongs" => "object"
    )
  )
);
if ($serverVersion === $localVersion) {
  echo $localVersion;
} else {
  echo json_encode($projectList);
}




