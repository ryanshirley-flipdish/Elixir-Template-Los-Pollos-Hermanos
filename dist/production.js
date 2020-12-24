function elixirAddPageClasses() {

    var hasIDFlipdishMenu = document.getElementById("flipdish-menu");
    var hasIDHomeSlider = document.getElementById("home-slider");

    if(hasIDFlipdishMenu) 
    {
        document.body.classList.add("elixir-page-weborder");
    } 
    else if (hasIDHomeSlider) 
    {
        document.body.classList.add("elixir-page-home"); 
    }
    else 
    {
        document.body.classList.add("elixir-page-inner"); 
    }

    return false;
}

window.onload = function() {
    elixirAddPageClasses();
};