const gameWindow = document.getElementById("GameWindow");
const context = gameWindow.getContext("2d");
const MAX_FPS = 60;
const FRAME_INTERVAL_TIME = 1000 / MAX_FPS;
let prevTime = 0;



let rectangle1 = new Rect(50, 50, 20, 20, "Red");

let rectangle2 = new Rect(160, 50, 20, 20, "Purple");

gameLoop();

function gameLoop()
{
    requestAnimationFrame((currTime = Date.now()) =>
    {
        const deltaTime = currTime - prevTime;
        if(deltaTime >= FRAME_INTERVAL_TIME)
        {
            update(deltaTime);
            prevTime = currTime;
        }
        draw();
        gameLoop();
    })
}

function update(t_deltaTime)
{
    rectangle1.move(1, 1);
}

function draw()
{
    context.clearRect(0,0, gameWindow.width, gameWindow.height);
    rectangle1.render(context);
    rectangle2.render(context);
}



