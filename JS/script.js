console.log("Jak juz jesteś to chociaz przeczytaj!");

let section__button = document.querySelector(".section__button");

section__button.addEventListener("click", () => {
    if (section__button.innerText === "Zobacz jak nazywa się mój kanał ;)") {
        section__button.innerText = "Żartowałam, nie powiem!";
    }
    else {
        section__button.innerText = "Zobacz jak nazywa się mój kanał ;)"
    }
})

