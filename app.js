


//app.js

new Vew({
  //target div #events

  el: '#events'

  //register any value that holds data
  data{
    event: {name'', discription '', date ''}
    events: []
  },

  // Anything within the ready function will run when the application loads
  ready: function() {
    //

    //

    this.fetchEvents();

  },

  // Methods we want to use in our application are registered here
  methods: {
    var events = [
      {
      id: 1,
      name: 'TIFF',
      description: 'Toronto International Film Festival',
      date: '2015-09-10'
    },
    {
      id: 2,
      name: 'The Martian Premiere',
      description: 'The Martian comes to theatres.',
      date: '2015-10-02'
    },
    {
      id: 3,
      name: 'SXSW',
      description: 'Music, film and interactive festival in Austin, TX.',
      date: '2016-03-11'
    }
    ];
    // $set is a convenience method provided by Vue that is similar to pushing
    // data onto an array
    this.$set('events', events);
  }

});
