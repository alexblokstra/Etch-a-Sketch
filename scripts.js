function makeRows(rows, cols) {
    const container = document.getElementById("container");
    container.innerHTML = "";

    const containerSize = 600; // in px — make sure it matches CSS

    const cellSize = containerSize / cols;

    for (let i = 0; i < (rows * cols); i++) {
        const cell = document.createElement("div");
        cell.className = "grid-item";
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        container.appendChild(cell);

        cell.addEventListener("mouseover", (event) => {
            event.target.classList.add("hover");
        });
    }
};

makeRows(16, 16);

document.getElementById("new-grid").onclick = function() {
    let popup = prompt("How big do you want the grid?", "16");
    let text;
    if (popup == null || popup == "") {
        makeRows(16, 16);
    } else {
        makeRows(`${popup}`, `${popup}`);
    }   
};





    

