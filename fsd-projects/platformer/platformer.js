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
    createPlatform(250,500,50,250)
    createPlatform(0,100,1000,10,)
    createPlatform(0,200,1100,10)
    createPlatform(1100,600,50,200)
    createPlatform(1130,500,350,50)
    createPlatform(-100,500,350,50,1,0,100,1)
    createPlatform(-100,450,600,10)
    createPlatform(490,450,10,100)
    // TODO 3 - Create Collectables
    createCollectable("small",1300,550,5,1,1150,1350,2)
    createCollectable("small",1400,550,5,1,1150,1350,2)
    createCollectable("small",1200,550,5,1,1150,1350,2)

    
    // TODO 4 - Create Cannons
    createCannon("bottom",200)
    createCannon("top",400,2000,50,50,)
    createCannon("top",500,1750,50,50,)
    createCannon("top",600,2250,50,50,)
    createCannon("top",700,1500,50,50,)
    createCannon("top",800,2500,50,50,)
    createCannon("top",900,1250,50,50,)
    createCannon("top",1000,2750,50,50,)
    createCannon("top",1100,1000,50,50,)
    createCannon("top",1200,3000,50,50,)
    

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
