function clearAll() {
    $('#passwordHelp').addClass('hidden');
    $('#emailHelp').addClass('hidden');

    $('#pass').removeClass('input-invalid');
    $('#re_pass').removeClass('input-invalid');
    $('#email').removeClass('input-invalid');

    $('#passwordHelp').text('');
    $('#emailHelp').text('');
}

$('#register-form').on('submit', (e) => {
    e.preventDefault();
    clearAll();

    const email = $('#register-form #email').val();
    const password = $('#register-form #pass').val();
    const repass = $('#register-form #re_pass').val();

    if (password.localeCompare(repass) !== 0) {
        $('#passwordHelp').text('Passwords don`t match!');
        $('#passwordHelp').removeClass('hidden');

        $('#pass').addClass('input-invalid');
        $('#re_pass').addClass('input-invalid');
        return;
    } else if (password.length < 8 || password.length > 20) {
        $('#passwordHelp').text('Must be 8-20 characters long.');
        $('#passwordHelp').removeClass('hidden');

        $('#pass').addClass('input-invalid');
        return;
    }

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred);
    }).catch((resp) => {
        $('#emailHelp').text(resp.message);
        $('#emailHelp').removeClass('hidden');

        $('#email').addClass('input-invalid');
        $('#pass').addClass('input-invalid');
        $('#re_pass').addClass('input-invalid');
    })
})

$('#login-form').on('submit', (e) => {
    e.preventDefault();

    const email = $('#login-form #email').val();
    const password = $('#login-form #pass').val();

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred);
    }).catch((resp) => {
        $('#emailHelp').text(resp.message);
        $('#emailHelp').removeClass('hidden');

        $('#email').addClass('input-invalid');
        $('#pass').addClass('input-invalid');
    });
})

auth.onAuthStateChanged(function(user) {
    if (user) {
     window.location = 'calendar.html';
    }
  }
)