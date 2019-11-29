
$(document).ready(function () {
    $('button').on('click', function () {
        var user = $('#user').val();
        var age = $('#age').val();
        var isNum = /^\d+$/.test(age);
        var nickname = $('#nickname').val();
        var result = "";
        user == "" ? setError('user') : setSuccess('user');
        isNum == "" ? setError('age') : setSuccess('age');
        if (nickname == "") {
            $('#nickname').addClass('border-danger').removeClass('border-success')
        } else {
            $('#nickname').addClass('border-success').removeClass('border-danger');
        }

        for (let i = 0; i < nickname.length; i++) {
            var nickfirst = nickname[0].toUpperCase();

            if (nickname.length >= 9 && nickname[0] == nickfirst) {
                $('#nickname').addClass('border-danger').removeClass('border-danger');
            } else {
                $('#nickname').addClass('border-success').removeClass('border-success');
            }
        }

        if (nickname == "" || isNum == "" || user == "") {
            $('.bg-danger').fadeIn(300);
        } else {
            $('.bg-success').fadeIn(300);
        }
        function setError(error) {
            $("#" + error).addClass('border-danger').removeClass('border-success');
        }
        function setSuccess(success) {
            $("#" + success).addClass('border-success').removeClass('border-danger');
        }
        $('#user,#age,#nickname').on('keyup', function () {
            var user = $('#user').val();
            var age = $('#age').val();
            var nickname = $('#nickname').val();
            if (user == "" || age == "" || nickname == "") {
                $('.bg-danger').fadeOut(3000);
                $('.bg-success').fadeOut(1000);
            }
        });
        $('#result').append(result);
    });
})
