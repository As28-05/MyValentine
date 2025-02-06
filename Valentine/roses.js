const canvas = document.getElementById("roseCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const rosePetals = [];
const petalImage = new Image();
petalImage.src = "rose-petal.png"; // Replace with your rose petal image file

class RosePetal {
    constructor(x, y, speedX, speedY, size) {
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.size = size;
        this.alpha = 1;
        this.rotation = Math.random() * 360;
    }

    update() {
        this.y -= this.speedY; // Moves Upwards
        this.x += this.speedX; // Moves Sideways
        this.speedY -= 0.1; // Slows down slightly as it goes up
        this.alpha -= 0.01; // Fades out
    }

    draw() {
        ctx.globalAlpha = this.alpha;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation * Math.PI / 180);
        ctx.drawImage(petalImage, -this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
        ctx.globalAlpha = 1;
    }
}

function throwPetal() {
    let x, speedX;
    if (Math.random() > 0.5) {
        x = 0; // Left Corner
        speedX = Math.random() * 4 + 3; // Thrown Right
    } else {
        x = canvas.width; // Right Corner
        speedX = -Math.random() * 4 - 3; // Thrown Left
    }

    let petal = new RosePetal(x, canvas.height, speedX, Math.random() * 10 + 10, Math.random() * 30 + 20);
    rosePetals.push(petal);
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = rosePetals.length - 1; i >= 0; i--) {
        rosePetals[i].update();
        rosePetals[i].draw();
        if (rosePetals[i].alpha <= 0) {
            rosePetals.splice(i, 1);
        }
    }

    requestAnimationFrame(animate);
}

setInterval(throwPetal, 200); // Throws petals every 200ms
animate();
