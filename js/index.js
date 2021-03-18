const element = document.querySelector('#select-custom');
    const choices = new Choices(element, {
      searchEnabled: false,
      placeholder: true,
      placeholderValue: 'zhopa',
      shouldSort: false,
      itemSelectText: ''
    });

    ymaps.ready(init);
    function init(){
      var myMap = new ymaps.Map("map", {
        center: [48.87219657376512,2.354223999999991],
        zoom: 15
      });

      var myPlacemark = new ymaps.Placemark([48.87219657376512,2.354223999999991], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'mdi_location_on.svg',
        iconImageSize: [48, 48],
        iconImageOffset: [-3, -42]
      });

      myMap.geoObjects.add(myPlacemark);
    }


    // inputmask
    var selector = document.querySelector("input[type='tel']");

    var im = new Inputmask("+7(999) 999-99-99");
    im.mask(selector);


    // just-validate
    new JustValidate('.form', {
      colorWrong: '#FF5C00',
      rules: {
        name: {
          required: true,
          minLength: 2,
          maxLength: 10
        },
        tel: {
          required: true,
          function: (name, value) => {
            const phone = selector.inputmask.unmaskedvalue()
            return Number(phone) && phone.length === 10
          }
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: 'Как вас зовут?'
        },
        tel: {
          required: 'Укажите ваш телефон'
        },
        email: {
          required: 'Укажите ваш e-mail'
        }
      }
    })
