// get tags from the container
const get_tags = () => {
    let tag_container = document.getElementsByClassName("tag-input");
    let res = [];

    // loop through
    for (let i = 0; i < tag_container.length; i++) {
        res.push(tag_container[i].innerText);
    }
    return res;
}

// read the input bar and as the input is added change the stuff
let tag_input = document.getElementById("tag-input-data");
tag_input.oninput = () => {
    let val = tag_input.value;

    // on comma make a tag
    if (val[val.length - 1] == ",") {
        // console.log(val);
        make_tags(val.split(","));
    }
};

// to loop the input and make a tag
const make_tags = (arr) => {
    // console.log(arr);

    // loop the incoming arr
    for (let i = 0; i < arr.length - 1; i++) {

        // create tag if it doesn't exist yet
        let data = get_tags();
        if (data.indexOf(arr[i]) == -1) {
            create_tag(arr[i]);
        }
    }

    // clear input area once done
    tag_input.value = '';
}

// create individual tag
const create_tag = (inp) => {

    // sanitize input
    inp = inp.trim();
    inp = inp.toLowerCase();
    // console.log(inp);

    /*  demo tag that will be created
    <span class="tag-input-holder">
            <span class="tag-input">maths science</span>
            <span class="tag-input-delete"></span>
        </span>
    */

    // actual tag
    let holder = document.createElement("span");
    holder.classList = "tag-input-holder";

    // text
    let txt = document.createElement("span");
    txt.classList = "tag-input";
    txt.innerText = inp;
    // delete button
    let del = document.createElement("span");
    del.classList = "tag-input-delete";
    // add delete event to delete button
    del.addEventListener("click", (e) => {
        e.target.parentElement.remove();
    });

    /* insert  text and delete inside */
    holder.appendChild(txt);
    holder.appendChild(del);

    // insert tag inside the main container
    document.getElementsByClassName("tags")[0].appendChild(holder);
}