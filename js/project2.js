$(function () {
    $(".main_btn").click(
        function () {
            $(".btn").slideToggle();
        }
    );
    
    if (matchMedia('only screen and (min-width: 768px)').matches){
        $(".btn").show();
    }
})