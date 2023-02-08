$(() => {

  const $newReservationForm = $(`
  <form action="/api/properties" method="post" id="new-reservation-form" class="new-property-form">

    <p id='reservation-title'>Createing Reservation for: name here</p>

    <div class="new-property-form__field-wrapper">
    <label for="start_date">Start date:</label>
    <input type="date" id="start_date" name="start_date"
            value="2018-07-22"
            min="2018-01-01" max="2018-12-31">
    </div>

    <div class="new-property-form__field-wrapper">
    <label for="start">End date:</label>

    <input type="date" id="end_date" name="end_date"
            value="2018-07-22"
            min="2018-01-01" max="2018-12-31">
    </div>

    <div class="new-property-form__field-wrapper">
        <button>Create</button>
        <a id="property-form__cancel" href="#">Cancel</a>
    </div>
  </form>
  `);

  window.$newReservationForm = $newReservationForm;

  $newReservationForm.on('submit', function (event) {
    event.preventDefault();

    const startDate = $("#start_date").val()
    const endDate = $("#start_date").val()

    views_manager.show('none');

    getMyDetails()
      .then(function (json) {

        const reservationData = {
          guest_id: json.user.id,
          property_id: window.currentPropertyID,
          start_date: startDate,
          end_date: endDate
        }
        console.log('data to send: ', reservationData)

        return submitReservation(reservationData)

      })
      .then((data) => {
        console.log('recieved after send: ', data)
      })
      .fail((e) => { console.log('error fetching own details', e) })
      .always(() => {
        views_manager.show('listings');
      })
  });

  $('body').on('click', '#property-form__cancel', function () {
    views_manager.show('listings');
    return false;
  });

});