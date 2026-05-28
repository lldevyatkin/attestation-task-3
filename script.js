$(document).ready(function () {
    // Функция для генерации таблицы
    function generateTable(size) {
        // Очищаем контейнер
        $("#tableContainer").empty();

        // Проверяем корректность размера
        if (!size || size < 1) {
            $(
                "#tableContainer"
            ).html('<div class="error">Пожалуйста, введите число больше 0</div>');
            return;
        }

        if (size > 20) {
            $(
                "#tableContainer"
            ).html('<div class="error">Максимальный размер таблицы - 20</div>');
            return;
        }

        // chоздание таблицу
        let table = $("<table>");
        let thead = $("<thead>").appendTo(table);
        let tbody = $("<tbody>").appendTo(table);

        // создание заголовка
        let headerRow = $("<tr>");
        headerRow.append($("<th>").text("×")); // Пустая ячейка в углу

        for (let col = 1; col <= size; col++) {
            headerRow.append($("<th>").text(col));
        }
        thead.append(headerRow);

        // Заполняем тело таблицы
        for (let row = 1; row <= size; row++) {
            let tableRow = $("<tr>");

            // Первая ячейка строки - номер строки
            tableRow.append($("<th>").text(row));

            // Заполняем ячейки со значениями
            for (let col = 1; col <= size; col++) {
                let product = row * col;
                let cell = $("<td>").text(product);

                // подсветка чётных чисел
                if (product % 2 === 0) {
                    cell.addClass("even");
                }

                tableRow.append(cell);
            }

            tbody.append(tableRow);
        }

        $("#tableContainer").append(table);
    }

    // Генерация при загрузке страницы (размер 5)
    generateTable(5);

    // Обработчик кнопки "Сгенерировать"
    $("#generateBtn").click(function () {
        let size = parseInt($("#size").val());
        generateTable(size);
    });

    // Обработчик кнопки "Сбросить"
    $("#resetBtn").click(function () {
        $("#size").val(5);
        generateTable(5);
    });

    // Генерация при изменении значения (опц.)
    $("#size").on("change", function () {
        let size = parseInt($(this).val());
        generateTable(size);
    });
});