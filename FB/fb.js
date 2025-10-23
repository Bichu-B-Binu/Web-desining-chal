$(document).ready(function () {
  $("#signup-form").validate({
    rules: {
      fname: {
        required: true,
        minlength: 4,
      },
      sname: {
        required: true,
        minlength: 4,
      },
      emailAddress: {
        required: true,
        email: true,
      },
      newPassword: {
        required: true,
        minlength: 6,
      },
      conformPassword: {
        required: true,
        minlength: 6,
        equalTo: "#newPassword  ",
      },
      dateOfBirth: {
        required: true,
      },
      gender: {
        required: true,
      },
    },
  });
});
