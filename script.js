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



