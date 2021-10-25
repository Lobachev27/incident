/*Тип отображения*/

$(document).ready(function() {
  $(".display__type").on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });
});

/*Сортировать по*/

$(document).ready(function() {
  $('.sort__number-selected').click(function(){
    $(this).addClass('active')
    $(this).next().addClass('active')
  });
  $('.sort__number-item').click(function(){
    $('.sort__number-selected').removeClass('active');
    $('.sort__number-list').removeClass('active');
    let num = $(this).text();
    $(this).parent().prev().text(num);
  });
});

/*Раскрытие папки*/

$(document).ready(function() {
  $('.fake__item-folder.folder').click(function(){
    if ($(this).hasClass('open')){
      $(this).removeClass('open');
      $(this).parent().parent().parent().removeClass('open');
    } else {
      $(this).addClass('open');
      $(this).parent().parent().parent().addClass('open');
    }
  });
});

/*Раскрытие фильтра*/

$(document).ready(function() {
  $('.search__icon.icon-filter').click(function(){
    $(this).addClass('active');
    $('.filter').addClass('active');
  });
  $('.filter__close').click(function(){
    $('.search__icon.icon-filter').removeClass('active');
    $('.filter').removeClass('active');
  });
});

/*Раскрытие настроек показа столбцов*/

$(document).ready(function() {
  $('.fake__topic-item.setting i').click(function(){
    if ($(this).hasClass('active')){
      $(this).removeClass('active');
      $('.fake__setting').removeClass('active');
    } else {
      $(this).addClass('active');
      $('.fake__setting').addClass('active');
    }
  });
});

/*Табы инцидентов*/

$(document).ready(function() {
  $(function () {
    var tabContainers = $('.incident__wrap');
    tabContainers.hide().filter(':first').show();
    $('.incident__tab').click(function () {
      tabContainers.hide();
      tabContainers.filter(this.hash).show();
      $('.incident__tab').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':first').click();
  });
});

/*Табы действий*/

$(document).ready(function() {
  $(function () {
    var tabContainers = $('.act__wrap');
    tabContainers.hide().filter(':first').show();
    $('.act__tab').click(function () {
      tabContainers.hide();
      tabContainers.filter(this.hash).show();
      $('.act__tab').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':first').click();
  });
});

/*Popup*/

$(document).ready(function() {
  $('.fake__item-name').click(function(){
    $('.main.layout-1').addClass('open');
    $('.popup').addClass('open');
  });
  $('.popup__close').click(function(){
    $('.main.layout-1, .main.layout-2').removeClass('open');
    $('.popup').removeClass('open');
  });
});

/*Поиск в хедере*/

$(document).ready(function() {
  $(".header__search-icon").on("click", function() {
    $(this).parent().toggleClass("active");
  });
});