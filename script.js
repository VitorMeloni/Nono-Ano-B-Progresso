let status_is_active = false
const status_marker = document.getElementById("status_marker")
const warning = document.querySelector(".container_warning")
const container_rewards = document.querySelector(".container_mid")
const item1 = document.getElementById("item1")
const item2 = document.getElementById("item2")
const item3 = document.getElementById("item3")
const array = [item1, item2, item3]

if (status_is_active) {
    status_marker.className = "green_marker"
    status_marker.textContent = "ATIVA"
    warning.style.visibility = "visible"
} else {
    status_marker.className = "red_marker"
    status_marker.textContent = "ACABOU"
    warning.style.visibility = "hidden"
}

function rotate(item) {
    item.addEventListener('mouseover', () => {
        const randomRotation = Math.floor(Math.random() * 21) - 10;
        item.style.rotate = `${randomRotation}deg`;
    });
    item.addEventListener('mouseout', () => {
        item.style.rotate = '0deg';
    });
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    rotate(element)
}
