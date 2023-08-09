let elem = document.getElementsByClassName("ExperienceScroll");
for (let index = 0; index < elem.length; index++) {
    elem[index].addEventListener("click", function () {

        let setIntervalVar = setInterval(() => {
            console.log(window.scrollY);
            if (window.scrollY >= 1069) {
                clearInterval(setIntervalVar);
            } else {
                window.scrollBy(0, 30);
            }

        }, 10)
    })

}

let elem2 = document.getElementsByClassName("SkillsScroll");
for (let index = 0; index < elem2.length; index++) {
    elem2[index].addEventListener("click", function () {

        let setIntervalVar = setInterval(() => {
            console.log(window.scrollY);
            if (window.scrollY >= 680) {
                clearInterval(setIntervalVar);
            } else {
                window.scrollBy(0, 30);
            }

        }, 10)
    })

}

let elem3 = document.getElementsByClassName("AboutScroll");
for (let index = 0; index < elem3.length; index++) {
    elem3[index].addEventListener("click", function () {

        let setIntervalVar = setInterval(() => {
            console.log(window.scrollY);
            if (window.scrollY >= 400) {
                clearInterval(setIntervalVar);
            } else {
                window.scrollBy(0, 30);
            }

        }, 10)
    })

}


let elem4 = document.getElementsByClassName("EducationScroll");
for (let index = 0; index < elem4.length; index++) {
    elem4[index].addEventListener("click", function () {

        let setIntervalVar = setInterval(() => {
            console.log(window.scrollY);
            if (window.scrollY >= 2000) {
                clearInterval(setIntervalVar);
            } else {
                window.scrollBy(0, 30);
            }

        }, 10)
    })

}

let elem5 = document.getElementsByClassName("PortfolioScroll");
for (let index = 0; index < elem5.length; index++) {
    elem5[index].addEventListener("click", function () {

        let setIntervalVar = setInterval(() => {
            console.log(window.scrollY);
            if (window.scrollY >= 2762) {
                clearInterval(setIntervalVar);
            } else {
                window.scrollBy(0, 30);
            }

        }, 10)
    })

}

let elem6 = document.getElementsByClassName("ContactScroll");
for (let index = 0; index < elem6.length; index++) {
    elem6[index].addEventListener("click", function () {

        let setIntervalVar = setInterval(() => {
            console.log(window.scrollY);
            if (window.scrollY >= 3626) {
                clearInterval(setIntervalVar);
            } else {
                window.scrollBy(0, 30);
            }
        }, 10)
    })

}
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

let skills = document.getElementsByClassName("skill-progress");
window.onscroll = function () {
    for (let index = 0; index < skills.length; index++) {
        if (isInViewport(skills[index])) {
            let val = skills[index].childNodes[1].getAttribute("skill-progression");
            let width = 0;;
            if (skills[index].childNodes[1].style.width == "") {
                let intervalTime = setInterval(() => {
                    if (width >= Number(val)) {
                        clearInterval(intervalTime);
                        return;
                    }
                    console.log(width);
                    skills[index].childNodes[1].style.width = `${Number(width) + 1}%`
                    width += 1
                }, 10)
            }

        }
    }

};

