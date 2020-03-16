window.onload = function() {
    //   Header navigation
    const sectionsIdList = ['SliderBlock', 'ServicesBlock', 'portfolio', 'AboutUs', 'GetAQuote'];
    const headerNavigationliList = ['HOME', 'SERVICES', 'PORTFOLIO', 'ABOUT', 'CONTACT'];
    document.querySelector('#navigation ul').addEventListener('click', (e) => {
        if (e.target.tagName == 'A') {
            document.querySelectorAll('#navigation a').forEach(a => {
                a.classList.remove('red-li');
            });
            e.target.classList.add('red-li');
            let heightOfHeader = document.getElementById('header').offsetHeight;
            let target = e.target.innerText;
            let indexOfTarget = headerNavigationliList.indexOf(target);
            let idOfDesiredSection = sectionsIdList[indexOfTarget];
            let scrollTop = document.getElementById(`${idOfDesiredSection}`).offsetTop - heightOfHeader;
            window.scrollTo({
                top: scrollTop,
                behavior: "smooth"
            });
        }
    });
    //   Slider
    const SlidersIdList = ['SliderBlock', 'slider-image'];
    let indexOfActiveSlide = 0;
    let isEnabled = true;
    document.getElementById('leftChev').addEventListener('click', (e) => {
        if (isEnabled) {
            isEnabled = false;
            if (indexOfActiveSlide == 0) {
                document.getElementById('slider-image').style.left = "-2040px";
                indexOfActiveSlide = 1;
            } else {
                document.getElementById('SliderBlock').style.left = "-1020px";
                indexOfActiveSlide = 0;
            }
            const slider = setInterval(() => {
                if (indexOfActiveSlide == 1) {
                    document.getElementById('SliderBlock').style.left = +document.getElementById('SliderBlock').style.left.replace('px', '') + 10 + 'px';
                    document.getElementById('slider-image').style.left = +document.getElementById('slider-image').style.left.replace('px', '') + 10 + 'px';
                    if (document.getElementById(`${SlidersIdList[0]}`).style.left == '1020px') {
                        isEnabled = true;
                        clearInterval(slider);
                    }
                } else {
                    document.getElementById('slider-image').style.left = +document.getElementById('slider-image').style.left.replace('px', '') + 10 + 'px';
                    document.getElementById('SliderBlock').style.left = +document.getElementById('SliderBlock').style.left.replace('px', '') + 10 + 'px';
                    if (document.getElementById('SliderBlock').style.left == '0px') {
                        isEnabled = true;
                        clearInterval(slider);
                    }
                }
            }, 10);
        }  
    });
    document.getElementById('rightChev').addEventListener('click', (e) => {
        if (isEnabled) {
            isEnabled = false;
            if (indexOfActiveSlide == 0) {
                document.getElementById('slider-image').style.left = "0px";
                indexOfActiveSlide = 1;
            } else {
                document.getElementById('SliderBlock').style.left = "1020px";
                indexOfActiveSlide = 0;
            }
            const slider = setInterval(() => {
                if (indexOfActiveSlide == 1) {
                    document.getElementById('SliderBlock').style.left = +document.getElementById('SliderBlock').style.left.replace('px', '') - 10 + 'px';
                    document.getElementById('slider-image').style.left = +document.getElementById('slider-image').style.left.replace('px', '') - 10 + 'px';
                    if (document.getElementById(`${SlidersIdList[0]}`).style.left == '-1020px') {
                        isEnabled = true;
                        clearInterval(slider);
                    }
                } else {
                    document.getElementById('slider-image').style.left = +document.getElementById('slider-image').style.left.replace('px', '') - 10 + 'px';
                    document.getElementById('SliderBlock').style.left = +document.getElementById('SliderBlock').style.left.replace('px', '') - 10 + 'px';
                    if (document.getElementById('SliderBlock').style.left == '0px') {
                        isEnabled = true;
                        clearInterval(slider);
                    }
                }
            }, 10);
        }
    });
    // Buttons of Phones
    document.getElementById('ButtonOfHorizontalIPhone').addEventListener('click', () => {
        if (document.getElementById('HorizontalIphone').getAttribute('src') == 'assets/images/HorizontalIphone.png') {
            document.getElementById('HorizontalIphone').setAttribute('src', 'assets/images/HorizontalIphoneOff.png');
        } else {
            document.getElementById('HorizontalIphone').setAttribute('src', 'assets/images/HorizontalIphone.png');
        }
    });
    document.getElementById('ButtonOfVerticalIPhone').addEventListener('click', () => {
        if (document.getElementById('VerticalIphone').getAttribute('src') == 'assets/images/VerticalIphone.png') {
            document.getElementById('VerticalIphone').setAttribute('src', 'assets/images/VerticalIphoneOff.png');
        } else {
            document.getElementById('VerticalIphone').setAttribute('src', 'assets/images/VerticalIphone.png');
        }
    });
    // Tags sort
    let ListOfTags = document.querySelector('.portfolio__navigation');
    ListOfTags.addEventListener('click', (e) => {
        if (e.target.tagName == 'LI') {
            let allTags = ListOfTags.querySelectorAll('li');
            allTags.forEach((tag) => {
                tag.classList.remove('navigation__link_selected');
            });
            e.target.classList.add('navigation__link_selected');
            let imgArr = document.querySelectorAll('.flex-item');
            imgArr.forEach((img) => {
                if(+img.style.order !== 11) {
                    img.style.order = +img.style.order + 1 + '';
                } else {
                    img.style.order = '0';
                }
            });
        }
    });
    // Click img portfolio
    document.querySelector('.container-flex').addEventListener('click', (e) => {
        if (e.target.tagName == 'IMG') {
            document.querySelector('.container-flex').querySelectorAll('IMG').forEach((img) => {
                img.style.outline = '';
            });
            e.target.style.outline = '5px solid #F06C64';
        }
    });
    // form task 
    document.querySelector('form').setAttribute('onsubmit', 'return false');
    document.querySelector('.form__button').addEventListener('click', (e) => {
        if (document.querySelector('form').checkValidity()) {
            if (document.querySelector('.modal-window').style.display == 'none') {
                document.querySelector('.modal-window').style.display = 'flex';
            }
            document.querySelector('.modal-message').innerHTML = '<p>Письмо отправлено</p>';
            document.querySelector('.modal-message').querySelector('p').classList.add('title-model-message');
            if (document.getElementById('SubjectInput').value == '') {
                document.querySelector('.modal-message').innerHTML += '<p>Без темы</p>';
            } else {
                document.querySelector('.modal-message').innerHTML += `<p>Тема: ${document.getElementById('SubjectInput').value}</p>`;
            }
            if (document.getElementById('textArea').value == '') {
                document.querySelector('.modal-message').innerHTML += '<p>Без описания</p>';
            } else {
                document.querySelector('.modal-message').innerHTML += `<p>Описание: ${document.getElementById('textArea').value}</p>`;
            }
            document.querySelector('.modal-message').innerHTML += '<button>Ок</button>';
            document.querySelector('.modal-message').querySelector('button').addEventListener('click', () => {
                document.querySelector('.modal-window').style.display = 'none';
            });
        }
    });
};