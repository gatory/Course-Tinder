require('graphhopper-js-api-client');
 
window.onload = function() {
  let defaultKey = "a077be45-38a5-41c1-ae45-1b9604d96f39";
  let ghRouting = new GraphHopper.Routing({key: defaultKey}, {profile:"car", elevation: false});

  ghRouting.doRequest({points:[[8.534317, 47.400905], [8.538265, 47.394108]]})
    .then(json => {
       // Add your own result handling here
       console.log(json);
    })
    .catch(err => {
       console.error(err.message);
    });
};