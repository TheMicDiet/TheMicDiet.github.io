let typer = new TypeIt('#header', {
    speed: 50,
    startDelay: 500,
    afterComplete: function(instance) {
        instance.destroy()
        typer3.init()
    }
});

let typer2 = new TypeIt('#footer-text', {
    speed: 20,
    afterComplete: function(instance) {
        instance.destroy()

    }
}, false);


let typer3 = new TypeIt('#about-text', {
    speed: 20,
    afterComplete: function(instance) {
        instance.destroy()
        typer4.init()
    }
}, false)
let typer4 = new TypeIt('#project-text', {
    speed: 20,
    afterComplete: function(instance) {
        instance.destroy()
        typer2.init()
    }
}, false)


$(document).click(function(e) {
    if (!$(e.target).is('a')) {
        $('.collapse').collapse('hide');
    }
});