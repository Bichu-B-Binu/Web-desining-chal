$(document).ready(function () {
  $("#form").validate({
    rules: {
      fname: {
        required: true,
        minlength: 3,
      },
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      fname: {
        required: "Please enter your name",
        minlength: "Your name must be at least 3 characters long",
      },
    },
  });
});
