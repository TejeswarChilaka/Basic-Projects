const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
    console.log(event.key);
    insert.innerHTML = `
        <div class = "key">
        ${event.key === " " ? "Space" : event.key
    }
            <small>event.key</small></div>
<div class = "key red">${event.keyCode}<small>event.key(old)</small></div>
<div class = "key green">${event.code}<small>event.key(new)</small></div>
`;
});
