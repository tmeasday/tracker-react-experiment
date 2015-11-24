if (Meteor.isClient) {
  A = React.createClass({
    mixins: [TrackerReact],

    a(a) {
      if (a === 1) {
        console.log('a', a)
        return Session.get('a') + a;  
      } else {
        console.log('b', a)
        return Session.get('b') + a;
      }
    },

    render() {
      return <div>{this.a(1)} {this.a(2)}</div>;
    }
  });

  Meteor.startup(() => {
    React.render(<A/>, document.getElementById('render-target'));
  });

  Session.setDefault({
    a: 'a',
    b: 'b'
  })
}