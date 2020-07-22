window.onload = () => {
    //get the tool tip
    let tt = document.getElementsByClassName("tooltip")[0];

    //get its shape
    let tool_shape = tt.getClientRects()[0];
    // console.log(tool_shape);

    // then have it height and width
    let tool_h = tool_shape.height;
    let tool_w = tool_shape.width;
    // console.log(`h : ${tool_h}  w : ${tool_w}`);

    // get window inner height and width
    let H = window.innerHeight;
    let W = window.innerWidth;
    // console.log(`H : ${H}  W : ${W}`);

    window.addEventListener("mousemove", (e) => {
        // console.log(e);
        let x = e.clientX;
        let y = e.clientY;
        // console.log(`x : ${x}  y : ${y}`);

        let tt_x = 0, tt_y = 0;
        // conditions i.e the tool tip should show all the way 

        // for X co-ordinate
        if (W - x >= tool_w) {
            tt_x = x;
        } else {
            if (x >= tool_w) {
                tt_x = x - tool_w;
            } else {
                tt_x = 0;
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
    });

}