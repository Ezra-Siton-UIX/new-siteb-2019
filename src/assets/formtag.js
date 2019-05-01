function setCookie(cname, cvalue, exdays, domain) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  var cookieString = cname + "=" + cvalue + ";" + expires + ";path=/;";
  if(domain && domain != '') {
    cookieString += "domain="+domain+";"
  }
  document.cookie = cookieString;
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}

function qs(a) {
  if (!a || a == "") {
    a = window.location.search.substr(1).split('&');
  }
  ;
  var b = {};
  for (var i = 0; i < a.length; ++i) {
    var p = a[i].split('=', 2);
    if (p.length == 1)
      b[p[0]] = "";
    else
      b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
  }
  return b;
}

/* form tag */

$('.w-form').removeClass('w-form');
 $( "form" ).submit(function( event ) {
   setNormalState();
   $('input:submit').attr('disabled', 'disabled');
   if(validateForm()) {
     validatePhone($('#phone').val());
   }
   event.preventDefault();
 });

 function validateForm() {
   $firstName = $('#first-name');
   // First name validations
   if($firstName.val() == '') {
     showError('First name field is required')
     return false;
   }
   if($firstName.val().length < 2) {
     showError('First name should have at least 2 characters')
     return false;
   }
   $lastName = $('#last-name');
   // First name validations
   if($lastName.val() == '') {
     showError('Last name field is required')
     return false;
   }
   if($lastName.val().length < 2) {
     showError('Last name should have at least 2 characters');
     return false;
   }
   return true;
 }

 function validatePhone(phone) {
   if(phone == '') {
     showError('Correct phone number is required');
     return false;
   }
   $.post('https://account-api.bassetgold.co.uk/client/validate/phone', {phone: phone}, validatePhoneCB);
 }

 function validatePhoneCB(res) {
   if(res.success) {
     validateEmail($('#email').val());
   } else {
     showError('Correct phone number is required');
   }
 }

 function validateEmail(email) {
   if(email == '') {
     showError('Correct email is required');
     return false;
   }
   $.post('https://account-api.bassetgold.co.uk/client/validate/email', {email: email}, validateEmailCB);
 }

 function validateEmailCB(res) {
   if(res.success) {
     sendDataToServer();
   } else {
     showError('Correct email is required');
   }
 }

 function sendDataToServer() {
   var data = $('form').serialize();
   /* change tag value her */
   data += '&_LeadSourceData=sponsorshippageform'; // TODO change TAG_NAME
   data += '&_LeadSourceType=Landing Pages';

   if(getCookie("affiliate_pid")) {
     data += '&afpid='+getCookie("affiliate_pid");
   }
   if(getCookie("utm_bg_product")) {
     data += '&utm_bg_product='+getCookie("utm_bg_product");
   }
   if(getCookie("utm_bg_campaign")) {
     data += '&utm_bg_campaign='+getCookie("utm_bg_campaign");
   }
   if(getCookie("utm_landing_page")) {
     data += '&utm_landing_page='+getCookie("utm_landing_page");
   }
   /*$.post('https://account-api.bassetgold.co.uk/client/infopack', data, success);*/
   /* new feb 19 */
   $.post('https://stage.basset-crm.bassetgold.co.uk/app-form/client/infopack', data)
     .always(function(xhr) {
       successNew(xhr.status);
     });
 }

 /* new function feb 19 */
 function successNew(status) {
   if(status == 200) {
     window.location.href = "https://www.bassetgold.co.uk/thank-you";
     $form.hide();
     $form.siblings('div.w-form-done').show();
     $form.find('input:submit').removeAttr('disabled');
   } else {
     showError('There is some error, please try after sometime.');
   }
 }

 function success(res) {
   if(res.success) {
       window.location.href = "https://www.bassetgold.co.uk/thank-you"; // TODO comment it if no redirection
       $('form').hide();
       $('.w-form-done').show();
       $('input:submit').removeAttr('disabled');
       // hide after 3 seconds
       var remodal = $('[data-remodal-id=modal]').remodal();
       setTimeout(function(){remodal.close()},4000);
   } else if(res.error && res.error[0]) {
      showError(res.error[0]);
   } else if(res.result.error == 'Infussion client already exists') {
       $('#email-form').hide();
       $('.w-form-done').show();
       $('input:submit').removeAttr('disabled');
   } else {
       showError(res.result.error);
   }
 }

 function showError(msg) {
   $('#error-div').html(msg);
   $('.w-form-fail').show();
   $('input:submit').removeAttr('disabled');
 }

 function setNormalState() {
   $('#email-form').show();
   $('.w-form-done').hide();
   $('.w-form-fail').hide();
 }
