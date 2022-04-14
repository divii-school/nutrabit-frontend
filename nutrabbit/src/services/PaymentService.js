var IMP = window.IMP;
// IMP.init("imp75847396");
IMP.init("imp55488636");

// const IMP = window.IMP; 
// IMP.init("{INIpayTest}"); 
export default class PaymentService {
  requestPay() {
    // IMP.request_pay(param, callback) call payment window
    IMP.request_pay({
      //pg: "html5_inicis",
      pg: "uplus",
      pay_method: "card",
      merchant_uid: "ORDER_" + new Date().getTime(),
      name: "Norway swivel chair",
      amount: 64000,
      buyer_email: "johndoe@gmail.com",
      buyer_name: "John Doe",
      buyer_tel: "010-4242-4242",
      buyer_addr: "Shinsa-dong, Gangnam-gu, Seoul",
      buyer_postcode: "01181",
      app_scheme: "NutrabbitIAmPort",
      //m_redirect_url :'{URL to redirect to after payment approval on Mobile}'
    }, function (rsp) {
      if (rsp.success) { // payment successful: payment accepted or virtual account issued
        console.log(rsp);
        /*
        // jQuery HTTP request
        jQuery.ajax({
            url: "{server-side endpoint to process the payment information}", // Example: https://www.myservice.com/payments/complete
            method: "POST",
            headers: { "Content-Type": "application/json" },
            data: {
                imp_uid: rsp.imp_uid,
                merchant_uid: rsp.merchant_uid
            }
        }).done(function (data) {
          // Logic for when the server successfully processes the payment information
        })
        */
      } else {
        console.log(rsp);
        alert("Payment failed. Error: " + rsp.error_msg);
      }

    });
  }


  //   IMP.request_pay({
  //     pg : 'chai',
  //     pay_method : 'trans',
  //     merchant_uid : "{Merchant created Order ID}", 
  //     name : 'Order name: payment test',
  //     amount : 14000,
  //     buyer_email : 'iamport@siot.do',
  //     buyer_name : 'John Doe',
  //     buyer_tel : '010-1234-5678',
  //     buyer_addr : 'Shinsa-dong, Gangnam-gu, Seoul',
  //     buyer_postcode : '123-456',
  //     m_redirect_url : '{URL to redirect to after payment approval on Mobile}' 
  // }, function(rsp) {
  //     if ( !rsp.success ) {

  //         var msg = 'An error occurred before initiating payment.';
  //         msg += 'Error: ' + rsp.error_msg;

  //         alert(msg);
  //     }
  // });
}