$(document).ready(function(){
    $("#DNI").inputmask({"mask" : "9999-9999-99999" , "placeholder": "9999-9999-99999", "clearMaskOnLostFocus": false});
    $("#FECHA_NAC").inputmask({"mask" : "99/99/9999", "placeholder": "mm/dd/yyyy", "clearMaskOnLostFocus": false});
    $("#TELEFONO").inputmask({"mask" : "(999) 9999-9999" , "placeholder": "(###) ####-####", "clearMaskOnLostFocus": false});
  });