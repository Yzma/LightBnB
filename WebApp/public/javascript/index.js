$(() => {
  getAllListings().then(function( json ) {
    propertyListings.addProperties(json.properties);
    views_manager.show('listings');
  });
});

const createReservationButton = function(propertyID) {
  window.currentPropertyID = propertyID;
  views_manager.show('newReservation', propertyID);
}