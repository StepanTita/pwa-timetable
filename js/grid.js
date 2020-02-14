function createGrid() {
    let countRows = config.hoursF - config.hoursS;

    let row = '<div class="dtr"><div class="time-col">08:00</div><div class="time-dtd dtd"></div>'; //<div class="time-col">08:00</div>
    for (let j = 0; j < config.days + 1; ++j) {
        row += '<div class="dtd"></div>';
    }
    row += '</div>'

    let height = 100 / countRows;

    $(".time-table").append(row);
    $(".time-table .dtr").css('height', (4 * height / 5) + '%');

    for (let i = 0; i < countRows; ++i) {

        $(".time-table").append(row);
        $(".time-table .dtr").last().css('height', height + '%');
    };
}

function set_days() {

}

$(document).ready(function() {
    createGrid();
    set_days();
});