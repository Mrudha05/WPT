$(document).ready(function() {
    $('#submitButton').click(function() {
        // Clear previous errors
        $('.error').text('');

        // Get input values
        var bookName = $('#bookName').val().trim();
        var author = $('#author').val().trim();
        var publishingDate = $('#publishingDate').val();
        var price = parseFloat($('#price').val());
        var languages = [];
        $('input[name="language"]:checked').each(function() {
            languages.push($(this).val());
        });

        // Validate inputs
        var valid = true;

        if (bookName.length < 3) {
            $('#bookNameError').text('Book Name must be at least 3 characters.');
            valid = false;
        }

        if (isNaN(price) || price <= 200) {
            $('#priceError').text('Price must be greater than 200.');
            valid = false;
        }

        if (languages.length < 2) {
            $('#languageError').text('At least two languages must be selected.');
            valid = false;
        }

        // If all validations pass, add book to table
        if (valid) {
            var languagesStr = languages.join(', ');
            $('#bookTable tbody').append(
                `<tr>
                    <td>${bookName}</td>
                    <td>${author}</td>
                    <td>${publishingDate}</td>
                    <td>${price}</td>
                    <td>${languagesStr}</td>
                </tr>`
            );
        }
    });
});
