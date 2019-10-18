$(document).ready(function () {
    var counter = 0;

    $("#addrow").on("click", function () {
        var newRow = $("<tr>");
        var cols = "";

        cols += '<td><input type="text" name="nomevent" class="form-control"' + counter + '"/></td>';
        cols += '<td><input type="text" name="date" class="form-control"' + counter + '"/></td>';
        cols += '<td><input type="text" name="place" class="form-control"' + counter + '"/></td>';
        cols += '<td><input type="file" name="image" class="form-control"' + counter + '"/></td>';
        cols += '<td><textarea class="form-control" rows="5" id="desc"' + counter + '"/></textarea></td>';

        cols += '<td><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Supprimer"></td>';
        newRow.append(cols);
        $("table.order-list").append(newRow);
        counter++;
    });



    $("table.order-list").on("click", ".ibtnDel", function (event) {
        $(this).closest("tr").remove();       
        counter -= 1
    });


});



function calculateRow(row) {
    var confirmer = +row.find('input[name^="confirmer"]').val();

}

function calculateGrandTotal() {
    var grandTotal = 0;
    $("table.order-list").find('input[name^="confirmer"]').each(function () {
        grandTotal += +$(this).val();
    });
    $("#grandtotal").text(grandTotal.toFixed(2));
}
