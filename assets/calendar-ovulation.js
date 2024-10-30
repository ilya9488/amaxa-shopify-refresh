

/* ---------- Календарь овуляции ---------- */
window.addEventListener('load', onloadF);
function onloadF() {
  if ($('#calendar').length == 0)
    return false;

  try {
    //jQuery(jQuery1).tooltip()
    jQuery(function () {

      /* Localization calendar */
      var localeCalendar = 'ru';
      var langPage = 'en-US';

      var lengths = [
        { value: 1, title: "1 день" },
        { value: 2, title: "2 дня" },
        { value: 3, title: "3 дня" },
        { value: 4, title: "4 дня" },
        { value: 5, title: "5 дней" },
        { value: 6, title: "6 дней" },
        { value: 7, title: "7 дней" },
        { value: 8, title: "8 дней" },
        { value: 9, title: "9 дней" },
        { value: 10, title: "10 дней" },
        { value: 11, title: "11 дней" },
        { value: 12, title: "12 дней" },
        { value: 13, title: "13 дней" },
        { value: 14, title: "14 дней" },
        { value: 15, title: "15 дней" },];
      var lengthOfCycle = [
        { value: 21, title: "21 день" },
        { value: 22, title: "22 дня" },
        { value: 23, title: "23 дня" },
        { value: 24, title: "24 дня" },
        { value: 25, title: "25 дней" },
        { value: 26, title: "26 дней" },
        { value: 27, title: "27 дней" },
        { value: 28, title: "28 дней" },
        { value: 29, title: "29 дней" },
        { value: 30, title: "30 дней" },
        { value: 31, title: "31 день" },
        { value: 32, title: "32 дня" },
        { value: 33, title: "33 дня" },
        { value: 34, title: "34 дня" },
        { value: 35, title: "35 дней" },
        { value: 36, title: "36 дней" },
        { value: 37, title: "37 дней" },
        { value: 38, title: "38 дней" },
        { value: 39, title: "39 дней" },
        { value: 40, title: "40 дней" },
        { value: 41, title: "41 день" },
        { value: 42, title: "42 дня" },
        { value: 43, title: "43 дня" },
        { value: 44, title: "44 дня" },
        { value: 45, title: "45 дней" }];

      if(langPage == 'uk'){
        lengths = [
          { value: 1, title: "1 день" },
          { value: 2, title: "2 днi" },
          { value: 3, title: "3 днi" },
          { value: 4, title: "4 днi" },
          { value: 5, title: "5 днiв" },
          { value: 6, title: "6 днiв" },
          { value: 7, title: "7 днiв" },
          { value: 8, title: "8 днiв" },
          { value: 9, title: "9 днiв" },
          { value: 10, title: "10 днiв" },
          { value: 11, title: "11 днiв" },
          { value: 12, title: "12 днiв" },
          { value: 13, title: "13 днiв" },
          { value: 14, title: "14 днiв" },
          { value: 15, title: "15 днiв" },
        ];
        lengthOfCycle = [
          { value: 21, title: "21 день" },
          { value: 22, title: "22 днi" },
          { value: 23, title: "23 днi" },
          { value: 24, title: "24 днi" },
          { value: 25, title: "25 днiв" },
          { value: 26, title: "26 днiв" },
          { value: 27, title: "27 днiв" },
          { value: 28, title: "28 днiв" },
          { value: 29, title: "29 днiв" },
          { value: 30, title: "30 днiв" },
          { value: 31, title: "31 день" },
          { value: 32, title: "32 днi" },
          { value: 33, title: "33 днi" },
          { value: 34, title: "34 днi" },
          { value: 35, title: "35 днiв" },
          { value: 36, title: "36 днiв" },
          { value: 37, title: "37 днiв" },
          { value: 38, title: "38 днiв" },
          { value: 39, title: "39 днiв" },
          { value: 40, title: "40 днiв" },
          { value: 41, title: "41 день" },
          { value: 42, title: "42 днi" },
          { value: 43, title: "43 днi" },
          { value: 44, title: "44 днi" },
          { value: 45, title: "45 днiв" }
          ];
      }
      else if(langPage == 'en-US'){
        lengths = [
          { value: 1, title: "1 day" },
          { value: 2, title: "2 day" },
          { value: 3, title: "3 day" },
          { value: 4, title: "4 day" },
          { value: 5, title: "5 day" },
          { value: 6, title: "6 day" },
          { value: 7, title: "7 day" },
          { value: 8, title: "8 day" },
          { value: 9, title: "9 day" },
          { value: 10, title: "10 day" },
          { value: 11, title: "11 day" },
          { value: 12, title: "12 day" },
          { value: 13, title: "13 day" },
          { value: 14, title: "14 day" },
          { value: 15, title: "15 day" },
        ];
        lengthOfCycle = [
          { value: 21, title: "21 day" },
          { value: 22, title: "22 day" },
          { value: 23, title: "23 day" },
          { value: 24, title: "24 day" },
          { value: 25, title: "25 day" },
          { value: 26, title: "26 day" },
          { value: 27, title: "27 day" },
          { value: 28, title: "28 day" },
          { value: 29, title: "29 day" },
          { value: 30, title: "30 day" },
          { value: 31, title: "31 day" },
          { value: 32, title: "32 day" },
          { value: 33, title: "33 day" },
          { value: 34, title: "34 day" },
          { value: 35, title: "35 day" },
          { value: 36, title: "36 day" },
          { value: 37, title: "37 day" },
          { value: 38, title: "38 day" },
          { value: 39, title: "39 day" },
          { value: 40, title: "40 day" },
          { value: 41, title: "41 day" },
          { value: 42, title: "42 day" },
          { value: 43, title: "43 day" },
          { value: 44, title: "44 day" },
          { value: 45, title: "45 day" }
          ];
      }
      else if(langPage == 'ka-GE'){
        lengths = [
          { value: 1, title: "1 დღე" },
          { value: 2, title: "2 დღე" },
          { value: 3, title: "3 დღე" },
          { value: 4, title: "4 დღე" },
          { value: 5, title: "5 დღე" },
          { value: 6, title: "6 დღე" },
          { value: 7, title: "7 დღე" },
          { value: 8, title: "8 დღე" },
          { value: 9, title: "9 დღე" },
          { value: 10, title: "10 დღე" },
          { value: 11, title: "11 დღე" },
          { value: 12, title: "12 დღე" },
          { value: 13, title: "13 დღე" },
          { value: 14, title: "14 დღე" },
          { value: 15, title: "15 დღე" },
        ];
        lengthOfCycle = [
          { value: 21, title: "21 დღე" },
          { value: 22, title: "22 დღე" },
          { value: 23, title: "23 დღე" },
          { value: 24, title: "24 დღე" },
          { value: 25, title: "25 დღე" },
          { value: 26, title: "26 დღე" },
          { value: 27, title: "27 დღე" },
          { value: 28, title: "28 დღე" },
          { value: 29, title: "29 დღე" },
          { value: 30, title: "30 დღე" },
          { value: 31, title: "31 დღე" },
          { value: 32, title: "32 დღე" },
          { value: 33, title: "33 დღე" },
          { value: 34, title: "34 დღე" },
          { value: 35, title: "35 დღე" },
          { value: 36, title: "36 დღე" },
          { value: 37, title: "37 დღე" },
          { value: 38, title: "38 დღე" },
          { value: 39, title: "39 დღე" },
          { value: 40, title: "40 დღე" },
          { value: 41, title: "41 დღე" },
          { value: 42, title: "42 დღე" },
          { value: 43, title: "43 დღე" },
          { value: 44, title: "44 დღე" },
          { value: 45, title: "45 დღე" }
          ];
      }
      else if(langPage == 'ro-RO'){
        lengths = [
          { value: 1, title: "1 zi" },
          { value: 2, title: "2 zile" },
          { value: 3, title: "3 zile" },
          { value: 4, title: "4 zile" },
          { value: 5, title: "5 zile" },
          { value: 6, title: "6 zile" },
          { value: 7, title: "7 zile" },
          { value: 8, title: "8 zile" },
          { value: 9, title: "9 zile" },
          { value: 10, title: "10 zile" },
          { value: 11, title: "11 zile" },
          { value: 12, title: "12 zile" },
          { value: 13, title: "13 zile" },
          { value: 14, title: "14 zile" },
          { value: 15, title: "15 zile" },
        ];
        lengthOfCycle = [
          { value: 21, title: "21 de zile" },
          { value: 22, title: "22 de zile" },
          { value: 23, title: "23 de zile" },
          { value: 24, title: "24 de zile" },
          { value: 25, title: "25 de zile" },
          { value: 26, title: "26 de zile" },
          { value: 27, title: "27 de zile" },
          { value: 28, title: "28 de zile" },
          { value: 29, title: "29 de zile" },
          { value: 30, title: "30 de zile" },
          { value: 31, title: "31 de zile" },
          { value: 32, title: "32 de zile" },
          { value: 33, title: "33 de zile" },
          { value: 34, title: "34 de zile" },
          { value: 35, title: "35 de zile" },
          { value: 36, title: "36 de zile" },
          { value: 37, title: "37 de zile" },
          { value: 38, title: "38 de zile" },
          { value: 39, title: "39 de zile" },
          { value: 40, title: "40 de zile" },
          { value: 41, title: "41 de zile" },
          { value: 42, title: "42 de zile" },
          { value: 43, title: "43 de zile" },
          { value: 44, title: "44 de zile" },
          { value: 45, title: "45 de zile" }
          ];
      }


      //
      var calandarDOM = jQuery(document.querySelector(".pms-calendar"));

      if(langPage == 'uk'){
        localeCalendar = 'uk';
      }
      else if(langPage == 'en-US'){
        localeCalendar = 'en';
      }
      else if(langPage == 'ka-GE'){
        localeCalendar = 'ka';
      }
      else if(langPage == 'ro-RO'){
        localeCalendar = 'ro';
      }

      flatpickr("#calendarDateStart", {
        locale: localeCalendar,
        dateFormat: "d.m.Y",
        disableMobile: true
      });
      var length;
      var lengthCycle;
      var first;
      var fp = typeof window !== "undefined" && window.flatpickr !== undefined
        ? window.flatpickr
        : {
          l10ns: {},
        };

      var translation = fp.l10ns.ru;
      if(langPage == 'uk'){
        translation = fp.l10ns.uk;
      }
      else if(langPage == 'en-US'){
        translation = fp.l10ns.en;
      }
      else if(langPage == 'ka-GE'){
        translation = fp.l10ns.ka;
      }
      else if(langPage == 'ro-RO'){
        translation = fp.l10ns.ro;
      }

      jQuery('#lengthOfPMS').append(lengths.map(function (element) {
        return jQuery('<option value="' + element.value + '">' + element.title + '</option>')
      }));
      jQuery('#lengthOfCycle').append(lengthOfCycle.map(function (element) {
        return jQuery('<option value="' + element.value + '">' + element.title + '</option>')
      }));
      function addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
      }
      function getFormattedDate(date) {
        var year = date.getFullYear();

        var month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;

        var day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;

        return day + '.' + month + '.' + year;
      }
      function toDate(dateStr) {
        try {
          var parts = dateStr.split(".");
          return new Date(parts[2], parts[1] - 1, parts[0]);
        }
        catch (e) {
          return dateStr;
        }
      }
      function getDaysInMonth(month, year) {
        // Since no month has fewer than 28 days
        var date = new Date(year, month, 1);
        var days = [];
        while (date.getMonth() === month) {
          days.push(new Date(date));
          date.setDate(date.getDate() + 1);
        }
        return days;
      }
      function getCalendarSheet(month, year) {
        var array = getDaysInMonth(month, year);

        while (array[0].getDay() != 1) {
          var date = new Date(array[0]);
          array.unshift(new Date(date.setDate(date.getDate() - 1)))
        }
        while (array[array.length - 1].getDay() != 0) {
          var date = new Date(array[array.length - 1]);
          array.push(new Date(date.setDate(date.getDate() + 1)))
        }
        while (array.length < 42) {
          var date = new Date(array[array.length - 1]);
          array.push(new Date(date.setDate(date.getDate() + 1)))
        }
        return array;
      }
      Object.defineProperty(Array.prototype, 'rotate', {
        enumerable: false,
        value: function (i) {
          if (i == 0) return this;
          const s = (this.splice).apply(this, i < 0 ? [i] : [0, i]);
          (i < 0 ? this.unshift : this.push).apply(this, s);
          return this;
        }
      });
      Date.prototype.diffDays = function (date) {

        var utcThis = Date.UTC(this.getFullYear(), this.getMonth(), this.getDate(), this.getHours(), this.getMinutes(), this.getSeconds(), this.getMilliseconds());
        var utcOther = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());

        return (utcThis - utcOther) / 86400000;
      };
      jQuery('#calendarDateStart').val(getFormattedDate(new Date()));
      var month = new Date().getMonth();
      var year = new Date().getYear() + 1900;
      jQuery('#calendar').append(translation.weekdays.shorthand.rotate(1).map(function (e) {
        return jQuery('<div>').html(e)
      }));
      function drawSheet(month, year, first, length, lengthPms) {
        jQuery('#calendar').html('');
        if (first) {
          var ovul = addDays(toDate(first), (length - 14));
          var firstDate = toDate(first);

        }
        var newSheet = getCalendarSheet(month, year).map(function (element) {
          var el = jQuery('<div>').addClass('calendar-day').attr('day', element.getDate()).data('date', getFormattedDate(element)).append(jQuery("<div>").append(jQuery("<span>").text(element.getDate()).addClass('date-day')));
          if (firstDate) {
            var localFirst = firstDate;
            var localOvul = ovul;
            var localLength = parseInt(length);
            if (element >= localFirst && element < addDays(localFirst, +lengthPms)){
              el.addClass('first');
              el.removeClass('mid');
              el.removeClass('high');
            }

            do {
              localFirst = addDays(toDate(localFirst), (+length));
              if (element >= localFirst && element < addDays(localFirst, ((+lengthPms)))){
                el.addClass('first');
                el.removeClass('mid');
                el.removeClass('high');
              }

            }
            while (year >= (localFirst.getYear() + 1900) || (year > (localFirst.getYear() + 1900) && month <= localFirst.getMonth()));

            do {
              localFirst = addDays(toDate(localFirst), -Math.abs((+length)));

              if (element >= localFirst && element < addDays(localFirst, ((+lengthPms)))){
                el.addClass('first');
                el.removeClass('mid');
                el.removeClass('high');
              }

            }
            while ((((localFirst.getMonth() <= month || year < (localFirst.getYear() + 1901)) || (localFirst.getMonth() > month && year == localFirst.getYear() + 1900)) && year <= (localFirst.getYear() + 1900)) && (month <= new Date().getMonth() && year <= new Date().getYear() + 1900))
          }
          return el;
        });
        var firstInSheet = newSheet.find(function (el) {
          return el.hasClass('first');
        });
        if (newSheet && firstInSheet)
          newSheet = newSheet.map(function (el) {
            if (!el.hasClass('with-day')) {
              var day = toDate(el.data('date')).diffDays(toDate(firstInSheet.data('date')));
              var dayOvul = length - 14;
              var dayPMS = (day < 0 ? Math.abs((+length) + day) % (+length) : (day % (+length))) + 1;
              el.find('div').append(jQuery("<span>").addClass('pms-day').text(dayPMS));
              if (!el.hasClass('first') && dayPMS == length - 14){
                el.addClass('ovul');
              }
              else if (!el.hasClass('first') && (dayPMS == dayOvul - 1 || dayPMS == dayOvul - 2) ){
                el.addClass('high');
              }
              else if (!el.hasClass('first') && (dayPMS == dayOvul - 3 || dayPMS == dayOvul - 4 || dayPMS == dayOvul - 5 || dayPMS == dayOvul + 1) ){
                el.addClass('mid');
              }
              el.addClass('with-day')
            }
            return el;
          });
        jQuery('#calendar').append(newSheet);

        if($('.calendar-desc-img').length > 0){

          // Менструация
          var titleMenstruation = $('.calendar-desc-img .calendar-desc__menstr').text();

          // Овуляция
          var titleOvulation = $('.calendar-desc-img .calendar-desc__ovul').text();

          // Высокий шанс забеременеть
          var titleHigh = $('.calendar-desc-img .calendar-desc__high').text();

          // Средний шанс забеременеть
          var titleMiddle = $('.calendar-desc-img .calendar-desc__middle').text();

          $('.calendar-day.first').attr('data-title', titleMenstruation);
          // UIkit.tooltip('.calendar-day.first', {
          //   title: titleMenstruation,
          // });
          $('.calendar-day.ovul').attr('data-title', titleOvulation);
          // UIkit.tooltip('.calendar-day.ovul', {
          //   title: titleOvulation,
          // });
          $('.calendar-day.high').attr('data-title', titleHigh);
          // UIkit.tooltip('.calendar-day.high', {
          //   title: titleHigh,
          // });
          $('.calendar-day.mid').attr('data-title', titleMiddle);
          // UIkit.tooltip('.calendar-day.mid', {
          //   title: titleMiddle,
          // });
        }

        /*jQuery('.calendar-day.first').tooltip({title:"Менструация"});
        jQuery('.calendar-day.mid').tooltip({title:"Средний шанс забеременеть"});
        jQuery('.calendar-day.high').tooltip({title:"Высокий шанс забеременеть"});
        jQuery('.calendar-day.ovul').tooltip({title:"Овуляция"});*/
      }
      drawSheet(month, year);
      jQuery('#selected-month').text(translation.months.longhand[month] + " " + year);
      jQuery('.navigation-arrow').click(function (e) {
        var step = +jQuery(e.target).data('value');
        if (month + step < 0) {
          year -= 1;
          month = 11;
        }
        else if (month + step > 11) {
          year += 1;
          month = 0;
        }
        else
          month += step;
        drawSheet(month, year, first, lengthCycle, length);
        jQuery('#selected-month').text(translation.months.longhand[month] + " " + year);
      });
      jQuery('#calendar-calculate').click(function (e) {
        lengthCycle = jQuery('#lengthOfCycle').val();
        length = jQuery('#lengthOfPMS').val();
        first = jQuery('#calendarDateStart').val();
        drawSheet(month, year, first, lengthCycle, length)
      })
    })

  }
  catch (e) {
    console.log(e)
  }
}





