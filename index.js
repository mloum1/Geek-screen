console.log("To ensure that the file is successfully loaded.");

class MatrixEffect {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext("2d");

    this.taillePolice = 20;
    this.matrice = "fevfvuyefuefiag&ali&éetfék'èé_é&u&œgezzguaikajiahdbudozoapoaazerettyyruririrorpr^r^r2663z5z565554445585787889966633221445554478896632".split(
      ""
    );

    this.chutes = [];
    this.initCanvas();
    this.initChutes();
  }

  initCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    window.addEventListener("resize", () => this.resizeCanvas());
  }

  initChutes() {
    let colonnes = Math.floor(this.canvas.width / this.taillePolice);
    this.chutes = new Array(colonnes)
      .fill(0)
      .map(() =>
        Math.floor((Math.random() * this.canvas.height) / this.taillePolice)
      );
  }

  dessinerCanvas() {
    this.context.fillStyle = "rgba(0, 0, 0, 0.1)";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillStyle = "#0f0";
    this.context.font = `${this.taillePolice}px Arial`;

    for (let i = 0; i < this.chutes.length; i++) {
      let text = this.matrice[Math.floor(Math.random() * this.matrice.length)];
      this.context.fillText(
        text,
        i * this.taillePolice,
        this.chutes[i] * this.taillePolice
      );

      if (this.chutes[i] * this.taillePolice > this.canvas.height) {
        this.chutes[i] = 0;
      }
      this.chutes[i]++;
    }
  }

  start() {
    setInterval(() => this.dessinerCanvas(), 50);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const matrixEffect = new MatrixEffect("canvas");
  matrixEffect.start();
});
