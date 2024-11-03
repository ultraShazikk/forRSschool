const headerList = document.querySelector(".header_list");
const menuBtn = document.querySelector(".header_menu");
const closeBtn = document.querySelector(".header_close");
const bgBurger = document.querySelector(".overlay");

menuBtn.addEventListener("click", () => {
    headerList.classList.remove("hidden")
    closeBtn.classList.remove("hidden")
    menuBtn.classList.add("hidden")
    bgBurger.classList.add("hidden")
})
closeBtn.addEventListener("click", () => {
    headerList.classList.add("hidden")
    closeBtn.classList.add("hidden")
    menuBtn.classList.remove("hidden")
    bgBurger.classList.remove("hidden")
})



const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minutes = document.querySelector(".minutes");
const second = document.querySelector(".second");

function updateTime() {
    const now = new Date();

    const days = now.getDate();
    const hours = now.getHours();
    const mins = now.getMinutes();
    const secs = now.getSeconds();

    day.textContent = days < 10 ? '0' + days : days;
    hour.textContent = hours < 10 ? '0' + hours : hours;
    minutes.textContent = mins < 10 ? '0' + mins : mins;
    second.textContent = secs < 10 ? '0' + secs : secs;
}

setInterval(updateTime, 1000);

const all = document.querySelector(".all");
const forWork = document.querySelector(".for_work");
const forHealth = document.querySelector(".for_health");
const forHarmony = document.querySelector(".for_harmony");

const work = document.querySelectorAll(".work");
const health = document.querySelectorAll(".health");
const harmony = document.querySelectorAll(".harmony");

forWork.addEventListener("click", (e) => {
    e.preventDefault()
    health.forEach(item => item.classList.add("d_none"));
    harmony.forEach(item => item.classList.add("d_none"));
});

forHealth.addEventListener("click", (e) => {
    e.preventDefault()
    work.forEach(item => item.classList.add("d_none"));
    harmony.forEach(item => item.classList.add("d_none"));
    health.forEach(item => item.classList.remove("d_none"));
});

forHarmony.addEventListener("click", (e) => {
    e.preventDefault()
    work.forEach(item => item.classList.add("d_none"));
    health.forEach(item => item.classList.add("d_none"));
    harmony.forEach(item => item.classList.remove("d_none"));
});

all.addEventListener("click", (e) => {
    e.preventDefault()
    work.forEach(item => item.classList.remove("d_none"));
    health.forEach(item => item.classList.remove("d_none"));
    harmony.forEach(item => item.classList.remove("d_none"));
})

//hooooooooo

const closeModal = document.querySelectorAll(".close_modal");
const bgDark = document.querySelector(".bg_dark");
const heroModal = document.querySelector(".hero_modal");
const workModal = document.querySelector(".work_modal");
const healthModal = document.querySelector(".health_modal");
const harmonyModal = document.querySelector(".harmony_modal");

// work 
work.forEach(item => {
    item.addEventListener("click", () => {
        bgDark.classList.remove("d_none")
        heroModal.classList.remove("d_none")
        workModal.classList.remove("d_none")
    })
})

closeModal.forEach(modal => {
    modal.addEventListener("click", () => {
        bgDark.classList.add("d_none")
        heroModal.classList.add("d_none")
        workModal.classList.add("d_none")
    })
})

// healt 

health.forEach(item => {
    item.addEventListener("click", () => {
        bgDark.classList.remove("d_none")
        heroModal.classList.remove("d_none")
        healthModal.classList.remove("d_none")
    })
})

closeModal.forEach(modal => {
    modal.addEventListener("click", () => {
        bgDark.classList.add("d_none")
        heroModal.classList.add("d_none")
        healthModal.classList.add("d_none")
    })
})

//harmony

harmony.forEach(item => {
    item.addEventListener("click", () => {
        bgDark.classList.remove("d_none")
        heroModal.classList.remove("d_none")
        harmonyModal.classList.remove("d_none")
    })
})

closeModal.forEach(modal => {
    modal.addEventListener("click", () => {
        bgDark.classList.add("d_none")
        heroModal.classList.add("d_none")
        harmonyModal.classList.add("d_none")
    })
})