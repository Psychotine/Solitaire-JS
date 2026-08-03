class Rect
{
    constructor(x, y, width, height, colour)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.colour = colour;
    }
    render(context)
    {
        context.beginPath();
        context.fillStyle = this.colour;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    move(x, y)
    {
        this.x += x;
        this.y += y;
    }

}