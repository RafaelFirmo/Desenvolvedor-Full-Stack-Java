// instancia jquery e evita conflitos
// jQuery( function($){

//('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
// $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
// $('.featured-item:first h4').addClass('active')
// $('.featured-item:first h4').removeClass('active')
// $('.featured-item:first h4').toggleClass('active')
// $('.featured-item:first h4').hide()
// $('.featured-item:first h4').show()
// $('.featured-item:first h4').fadeIn(2000)
// $('.featured-item:first h4').fadeOut()
//  $('.featured-item:first h4').css('color', '#f00')


$(document).ready(function() {

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag

    let itens = $('.featured-item') // class

    let destaques = $('#featured') // id

    console.log(titulos.first());


    // Configuração de produtos

    $(".featured-item")
        .hover(function() {
            $(this).removeClass('border').css('border', '1px solid', '#000000');
        }, function() {
            $(this).addClass('border').css('border', '1px solid', '#000000');
        });

    $('.featured-item a').addClass('btn btn-primary mt-2').css('width', '100%');

    $('.featured-item h4').css('color', '#ff0000');


    // *ABAIXO* Adicionado legenda em img, estilização css linha 36, produto-01 ao produto-09
    $('.produto-01').hover(
        function() {
            $('.legenda-img1').fadeIn("slow");
        },
        function() {
            $('.legenda-img1').fadeOut('slow');
        }
    );

    $('.produto-02').hover(
        function() {
            $('.legenda-img2').fadeIn("slow");
        },
        function() {
            $('.legenda-img2').fadeOut('slow');
        }
    );

    $('.produto-03').hover(
        function() {
            $('.legenda-img3').fadeIn("slow");
        },
        function() {
            $('.legenda-img3').fadeOut('slow');
        }
    );

    $('.produto-04').hover(
        function() {
            $('.legenda-img4').fadeIn("slow");
        },
        function() {
            $('.legenda-img4').fadeOut('slow');
        }
    );

    $('.produto-05').hover(
        function() {
            $('.legenda-img5').fadeIn("slow");
        },
        function() {
            $('.legenda-img5').fadeOut('slow');
        }
    );

    $('.produto-06').hover(
        function() {
            $('.legenda-img6').fadeIn("slow");
        },
        function() {
            $('.legenda-img6').fadeOut('slow');
        }
    );

    $('.produto-07').hover(
        function() {
            $('.legenda-img7').fadeIn("slow");
        },
        function() {
            $('.legenda-img7').fadeOut('slow');
        }
    );

    $('.produto-08').hover(
        function() {
            $('.legenda-img8').fadeIn("slow");
        },
        function() {
            $('.legenda-img8').fadeOut('slow');
        }
    );

    $('.produto-09').hover(
        function() {
            $('.legenda-img9').fadeIn("slow");
        },
        function() {
            $('.legenda-img9').fadeOut('slow');
        }
    );

});