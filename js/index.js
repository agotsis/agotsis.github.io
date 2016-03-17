function post_event_handler() {
    alert("Ouch!");
}

function on_page_ready() {
    $(".post").click(post_event_handler);
}


$(document).ready(on_page_ready);