// this handles cross-domain requests for you
(function() {
    var proxiedSync = Backbone.sync;

    Backbone.sync = function(method, model, options) {
        options || (options = {});

        if (!options.crossDomain) {
            options.crossDomain = true;
        }

        return proxiedSync(method, model, options);
    };
})();

// app setup
window.app = {
    collections: {},
    init: function () {
        this.router = new this.Router();
        /* your model and collection should be instantiated here */
        Backbone.history.start();
    },
    models: {},
    router: null,
    views: {}
}

// router
app.Router = Backbone.Router.extend({
    initialize: function () {
        this.$rootEl = $('#app');
    },
    routes: {
        ''         : 'home',
        'data/'    : 'index',
        'data/:id' : 'show'
    },
    home: function () {
        var view = new app.views.home();

        this._swapView(view);
    },
    index: function () {
        /* get your collection and render its view */
        console.log('index');
    },
    show: function () {
        /* get an individual model from the collection and render it in its view */
        console.log('show');
    },
    _swapView: function (view) {                         
        this.currentView && this.currentView.remove();   
        this.currentView = view;                         
        this.$rootEl.html(view.$el);                     
        view.render();                                   
    }                                                    
});


// initialize Backbone
window.addEventListener('load', function () {

    // home view - views are defined after window has loaded because the bootstrapped templates exist at this time
    app.views.home = Backbone.View.extend({
        instructions:  [
            "Write a collection that gets its data from 'http://www.jengascript.org/data/' </li>",
            "Write a view (and Template) that displays basic info from all the models in this collection with links to an individual view </li>",
            "Write this individual view that displays a form for updating an individual model </li>",
            "Make that form update the correct property on the correct model when an input in the form is changed. </li>",
            "Add a save button that saves the correct individual model (with the properties properly changes per step 2). </li>",
            "This save will fail every time. Handle the error with a message - you MAY NOT use alert(). </li>",
            "Make this error message dismissable in some way. </li>",
            "BONUS: Add some CSS to make it look not horrible.</li>", 
        ],
        render: function () {
            this.$el.html(_.template(this.template)({ instructions: this.instructions }));
        },
        template: $('#home-template').html()
    });


    /* write your index view for the data collection here */


    /* write your show view for individual data models here */


    app.init();
});

