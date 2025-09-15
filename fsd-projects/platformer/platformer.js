$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();
    

    // TODO 2 - Create Platforms
    createPlatform(0,100,1000,10,)
    createPlatform(0,200,1100,10)
    createPlatform(1100,600,50,200)
    createPlatform(1130,500,280,50)
    //createplatform()

    // TODO 3 - Create Collectables
    createCollectable("small",50,50,1,1)
    createCollectable("small",1200,550,5,1,1150,1350,2)
    createCollectable("small",50,110,3,1,100,500,1)

    
    // TODO 4 - Create Cannons
    createCannon("top",300,1000,100,100)
    createCannon("top",350,900)
    createCannon("top",400,1100)
    createCannon("top",450,800)
    createCannon("top",500,1200)
    createCannon("top",550,700)
    createCannon("top",600,1300)
    createCannon("top",650,600)
    createCannon("top",700,1400)
    createCannon("top",750,500)
    createCannon("top",800,1500)
    createCannon("top",850,400)
    createCannon("top",900,1600)
    createCannon("top",950,300)

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
