﻿function MessageBox(title, message, successOrError) {
    title = (title == undefined) ? "The page says:" : title;
    successOrError = (successOrError == undefined) ? "warning" : successOrError;

    swal(title, message, successOrError);
}