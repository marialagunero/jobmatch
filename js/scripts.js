$(document).ready(function() {
  $("form#form1").submit(function(event) {

    var prefer = $("input:radio[name=preference]:checked").val();
    var likely = $("input:radio[name=likely]:checked").val();
    console.log(prefer)

    event.preventDefault();

    if (prefer === "Eat Ice Cream Upside Down" && likely === "Go Skinny Dipping in Antarctica") {
      $(".job").text("Foot Massage Therapist");
    }
    else if (prefer === "Eat Ice Cream Upside Down" && likely === "Go Skydiving While On Acid") {
      $(".job").text("Rock Hound");
    }
    else if (prefer === "Makeout With a Clown" && likely === "Go Skinny Dipping in Antarctica") {
      $(".job").text("Geriatric Servant");
    }
    else if (prefer === "Makeout With a Clown" && likely === "Go Skydiving While On Acid") {
      $(".job").text("Graveyard Receptionist");
    }
  });
});
