$('.areas-menu a').on('click', function (e) {
    $('.areas-menu a').each(function (index, item) {
        $(item).parent().removeClass('bg-cinza-ativo').addClass('bg-cinza');
    })
    $(this).parent().removeClass('bg-cinza').addClass('bg-cinza-ativo');
});

let url = window.location.pathname.split('/');
if (url[url.length - 1] === 'agenda-secretario.html') {
    $('.calendario-agenda-sec').ionCalendar({
        lang: "pt-br",
        years: "1",
        onClick: function (date) {
            moment.locale('pt-br');
            $('.data_agenda').html(moment(date).format('dddd[,] D [de] MMMM [de] YYYY'));
            let data_pt_br = moment(date).format('DD-MM-YYYY');
        }
    });
}

// Organograma

$('.borda-conexao').each(function (i, borda) {
    $(borda).parent().addClass(`borda-itens ${filterItems($(borda).attr('class').split(' '), 'bg').replace('bg', 'borda')}`);
});

$('.coordenadoria').each(function (i, coord) {
    const card = $(coord).children('.borda-itens:last-child').children('.card');
    if (card.length == 1) {
        $(card).parent('.borda-itens').removeClass('justify-content-center');
    }
});

if (url[url.length - 1] === 'organograma.html') {
    if (isMobile()) window.location.href = "organograma-mobile.html";
}

function filterItems(elementos, termo) {
    return elementos.filter(function (el) {
        return el.toLowerCase().indexOf(termo.toLowerCase()) > -1;
    }).toString();
}

function isMobile() {
    try { document.createEvent("TouchEvent"); return true; }
    catch (e) { return false; }
}