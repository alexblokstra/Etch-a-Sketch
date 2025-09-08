function makeRows(rows, cols) {
    const container = document.getElementById("container");
    let color = document.getElementById("background");
    const containerSize = 600;
    const cellSize = containerSize / cols;

    container.innerHTML = "";

    for (let i = 0; i < (rows * cols); i++) {
        const cell = document.createElement("div");
        cell.className = "grid-item";
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;

        cell.dataset.hoverCount = 0;
        container.appendChild(cell);

        cell.addEventListener("mouseover", (event) => {
            const cell = event.target;
            let hoverCount = Number(cell.dataset.hoverCount);

            if (hoverCount === 0) {
                const [r, g, b] = getRandomRGB();
                cell.dataset.baseColor = `${r},${g},${b}`;
                cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            } else {
                const [r, g, b] = cell.dataset.baseColor.split(",").map(Number);
                const factor = Math.max(0, 1 - 0.1 * hoverCount);
                const darkened = [
                    Math.floor(r * factor),
                    Math.floor(g * factor),
                    Math.floor(b * factor)
                ];
                cell.style.backgroundColor = `rgb(${darkened[0]}, ${darkened[1]}, ${darkened[2]})`;
            }

            cell.dataset.hoverCount = hoverCount + 1;
        });
    }
};

makeRows(16, 16);

function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return [r, g, b];
}

document.getElementById("new-grid").onclick = function() {
    let popup = prompt("How big do you want the grid?", "16");
    if (popup == null || popup == "") {
        makeRows(16, 16);
    } else {
        makeRows(`${popup}`, `${popup}`);
    }   
};





    

