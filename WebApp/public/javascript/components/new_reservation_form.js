$(() => {


  const $newReservationForm = $(`
  <form action="/api/properties" method="post" id="new-property-form" class="new-property-form">
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

  $newPropertyForm.on('submit', function (event) {
    event.preventDefault();

    views_manager.show('none');

    const data = $(this).serialize();
    submitProperty(data)
    .then(() => {
      views_manager.show('listings');
    })
    .catch((error) => {
      console.error(error);
      views_manager.show('listings');
    })
  });

  $('body').on('click', '#property-form__cancel', function() {
    views_manager.show('listings');
    return false;
  });
  
});