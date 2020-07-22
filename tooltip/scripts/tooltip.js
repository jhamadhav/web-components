// some global variables
let W, H, x, y;

window.onload = () => {

    // get window inner height and width
    H = window.innerHeight;
    W = window.innerWidth;
    // console.log(`H : ${H}  W : ${W}`);

    window.addEventListener("mousemove", (e) => {
        // console.log(e);
        x = e.clientX;
        y = e.clientY;
        // console.log(`x : ${x}  y : ${y}`);

        // for this instance alone place tooltip every time mouse move
        place_tool();
    });
}

// function to place tooltip
const place_tool = () => {
    //get the tool tip
    let tt = document.getElementsByClassName("tooltip")[0];

    //get its shape
    let tool_shape = tt.getClientRects()[0];
    // console.log(tool_shape);

    // then have it height and width
    let tool_h = tool_shape.height;
    let tool_w = tool_shape.width;
    // console.log(`h : ${tool_h}  w : ${tool_w}`);

    let tt_x = 0, tt_y = 0;
    // conditions i.e the tool tip should show all the way 

    // for X co-ordinate
    if (W - x >= tool_w) {
        tt_x = x;
    } else {
        if (x >= tool_w) {
            tt_x = x - tool_w;
        } else {
            tt_x = W - tool_w;
        }
    }
    // for Y co-ordinate
    if (H - y > tool_h) {
        tt_y = y;
    } else {
        if (y >= tool_h) {
            tt_y = y - tool_h;
        } else {
            tt_y = 0;
        }
    }

    tt.style.transform = `translate(${tt_x}px,${tt_y}px)`;

}