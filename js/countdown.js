/*
* Autor: Pavel Kizernis (pashakiz@gmail.com)
* https://github.com/pashakiz/countdown.js
*/

const buildClockFace = () => {

  let clockface = document.createElement('DIV');
  clockface.classList.add('clockface');

  let clockfaceSeparator = document.createElement('DIV');
  clockface.classList.add('clockface__separator');

  let clockfaceItem = document.createElement('DIV');
  clockface.classList.add('clockface-item');

  let clockfaceValue = document.createElement('DIV');
  clockface.classList.add('clockface-item');

  //clockface__value

  return clockface;
}

const InitCountDown = () => {

  // Записываем в div.countdown всю HTML-разметку
  document.querySelector('.countdown').append(buildClockFace());

  // Берем дату в строке: 'yyyy-m-d-h-m-s', пример: '2021-8-4-10-0-0'
  let date_str = document.querySelector('.countdown').getAttribute('data-countdown-date');
  // Разбиваем строку на массив: 'yyyy', 'm', 'd', 'h', 'm', 's'
  let date_future = date_str.split('-');

  // Месяц должен начинаться с 0 в js, поэтому декрементируем значение второго элемента массива
  --date_future[1];

  // Создаем объект dateFuture типа Date с датой до которой счетчик будет тикать
  dateFuture = new Date(date_future[0],date_future[1],date_future[2],date_future[3],date_future[4],date_future[5]);

  // Вызываем рекурсивную функцию счетчика с аргументом dateFuture
  CountDown(dateFuture);
}

const CountDown = (dateFuture) => {

  dateNow = new Date(); // берем текущую дату в dateNow
  amount = dateFuture.getTime() - dateNow.getTime(); // высчитываем разницу между датами в милисекундах
  delete dateNow;

  // что если dateFuture меньше, чем dateNow? Выведем тогда просто одни нули
  if(amount <= 0) {
    document.querySelector('.count-days .value').innerHTML = '0';
    document.querySelector('.count-days .title').innerHTML = 'дней';

    document.querySelector('.count-hours .value').innerHTML = '0';
    document.querySelector('.count-hours .title').innerHTML = 'часов';

    document.querySelector('.count-mins .value').innerHTML = '0';
    document.querySelector('.count-mins .title').innerHTML = 'минут';

    document.querySelector('.count-seconds .value').innerHTML = '0';
    document.querySelector('.count-seconds .title').innerHTML = 'секунд';
  }
  else { // Все в порядке - dateFuture больше, чем dateNow, а значит есть, что считать
    var days=0,hours=0,mins=0,secs=0;

    amount = Math.floor(amount/1000); //милисекунды нам не нужны - округлим до секунд

    days=Math.floor(amount/86400); //получаем дни (1 день = 86400 секунд)
    amount=amount%86400; // сохраняем остаток

    hours=Math.floor(amount/3600); //часы
    amount=amount%3600;

    mins=Math.floor(amount/60); //минуты
    amount=amount%60;

    secs=Math.floor(amount); //секунды

    //Выводим результат с правилами русского языка (11-14 дней, 1 день, 2-3-4 дня, 5-9-0 дней)
    document.querySelector('.count-days .value').innerHTML = days;
    if (days%100 == 11 || days%100 == 12 || days%100 == 13 || days%100 == 14) {
            document.querySelector('.count-days .title').innerHTML = 'дней';
    } else if (days%10 == 1) {
            document.querySelector('.count-days .title').innerHTML = 'день';
    } else if (days%10 == 0 || days%10 >= 5) {
            document.querySelector('.count-days .title').innerHTML = 'дней';
    } else if (days%10 == 2 || days%10 == 3 || days%10 == 4) {
            document.querySelector('.count-days .title').innerHTML = 'дня';
    }

    document.querySelector('.count-hours .value').innerHTML = hours;
    if (hours >= 11 && hours <= 14) {
            document.querySelector('.count-hours .title').innerHTML = 'часов';
    } else if (hours%10 == 1) {
            document.querySelector('.count-hours .title').innerHTML = 'час';
    } else if (hours%10 == 0 || hours%10 >= 5) {
            document.querySelector('.count-hours .title').innerHTML = 'часов';
    } else if (hours%10 == 2 || hours%10 == 3 || hours%10 == 4) {
            document.querySelector('.count-hours .title').innerHTML = 'часа';
    }

    document.querySelector('.count-mins .value').innerHTML = mins;
    if (mins >= 11 && mins <= 14) {
            document.querySelector('.count-mins .title').innerHTML = 'минут';
    } else if (mins%10 == 1) {
            document.querySelector('.count-mins .title').innerHTML = 'минута';
    } else if (mins%10 == 0 || mins%10 >= 5) {
            document.querySelector('.count-mins .title').innerHTML = 'минут';
    } else if (mins%10 == 2 || mins%10 == 3 || mins%10 == 4) {
            document.querySelector('.count-mins .title').innerHTML = 'минуты';
    }

    document.querySelector('.count-seconds .value').innerHTML = secs;
    if (secs >= 11 && secs <= 14) {
            document.querySelector('.count-seconds .title').innerHTML = 'секунд';
    } else if (secs%10 == 1) {
            document.querySelector('.count-seconds .title').innerHTML = 'секунда';
    } else if (secs%10 == 0 || secs%10 >= 5) {
            document.querySelector('.count-seconds .title').innerHTML = 'секунд';
    } else if (secs%10 == 2 || secs%10 == 3 || secs%10 == 4) {
            document.querySelector('.count-seconds .title').innerHTML = 'секунды';
    }

    setTimeout(CountDown, 1000, dateFuture); //запускаем снова через 1 секунду
  }
}
