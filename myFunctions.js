$(document).ready(function () {

    $('.details').on('change', function () {
        let row = $(this).closest('tr').next('.extra-details');
        if (this.checked) {
            row.show();
        } else {
            row.hide();
        }
    });


    $('#continue').on('click', function () {
        let selectedBookRow = $('input[name="selectedBook"]:checked').closest('tr');
        if (selectedBookRow.length === 0) {
            alert('يرجى اختيار كتاب!');
            return;
        }

        let bookInfo = `
            رمز الكتاب: ${selectedBookRow.find('td').eq(0).text()}<br>
            عنوان الكتاب: ${selectedBookRow.find('td').eq(1).text()}<br>
            السعر: ${selectedBookRow.find('td').eq(2).text()}
        `;

        let modal = `
        <div id="modal" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;">
            <div style="background:white;padding:20px;max-width:500px;width:100%;border-radius:10px;">
                <h3>تفاصيل الطلب</h3>
                <form id="orderForm">
                    <div class="form-group">
                        <label>الاسم الكامل: <input type="text" pattern="[\\u0600-\\u06FF ]+"></label><br>
                        <label>الرقم الوطني: <input type="text" pattern="(0[1-8]|1[0-4])\\d{9}" required></label><br>
                        <label>تاريخ الولادة: <input type="date"></label><br>
                        <label>رقم الموبايل: <input type="text" pattern="09\\d{8}"></label><br>
                        <label>الإيميل: <input type="email"></label><br>
                        <button type="submit">إرسال</button>
                    </div>
                </form>
            </div>
        </div>`;
        $('body').append(modal);

        $('#orderForm').on('submit', function (e) {
            e.preventDefault();
            $('#modal').remove();
            alert(`تم تقديم الطلب بنجاح! معلومات الكتاب:\n\n${bookInfo.replace(/<br>/g, '\n')}`);
        });
    });
});
