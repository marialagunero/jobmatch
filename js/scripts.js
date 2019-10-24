$(document).ready(function() {
  $("form#form1").submit(function(event) {

    var prefer = $("input:radio[name=preference]:checked").val();
      console.log(prefer)
    var likely = $("input:radio[name=likely]:checked").val();

    event.preventDefault();

    if (prefer === "ice-cream" && likely === "antarctica") {
      $("#job").text("Foot Massage Therapist");
      console.log("job")
    }
    else if (prefer === "ice-cream" && likely === "skydiving") {
      $("#job").text("Rock Hound");
      console.log("job2")
    }
    else if (prefer === "clown" && likely === "antarctica") {
      $("#job").text("Geriatric Servant");
      console.log("job3")
    }
    else if (prefer === "clown" && likely === "skydiving") {
      $("#job").text("Graveyard Receptionist");
      console.log("job4")
    }
  });
});
