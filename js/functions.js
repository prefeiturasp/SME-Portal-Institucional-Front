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

jQuery.extend(jQuery.expr[':'], {
    before: function (el, index, match) {
        return $(el).is('h2');
    }
});

$('.borda-conexao').each(function (i, borda) {
    $(borda).parent().addClass(`borda-itens ${filterItems($(borda).attr('class').split(' '), 'bg').replace('bg', 'borda')}`);
});

$('.item-coord').each(function (i, coord) {
    // $(coord).children(':not(:nth-child(2))').removeClass('borda-itens');
});

function filterItems(elementos, termo) {
    return elementos.filter(function (el) {
        return el.toLowerCase().indexOf(termo.toLowerCase()) > -1;
    }).toString();
}