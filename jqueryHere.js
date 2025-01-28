$(document).ready(function() {
    alert("jQuery is ready!");
});

$(document).ready(function() {
    $('.buttons').hover(
        function() { // Mouse over
            $(this).animate({ fontSize: '20px', padding: '12px 20px' }, 200);
        },
        function() { // Mouse out
            $(this).animate({ fontSize: '16px', padding: '10px 15px' }, 200);
        }
    );
});