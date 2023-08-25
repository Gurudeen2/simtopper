<script type="text/javascript" src="https://sdk.monnify.com/plugin/monnify.js"></script>
<button onclick="payWithMonnify()">Pay with Monnify</button>
			

<script type="text/javascript">
	function payWithMonnify() {
		MonnifySDK.initialize({
			amount: 5000,
			currency: "NGN",
			reference: '' + Math.floor((Math.random() * 1000000000) + 1),
			customerName: "John Doe",
			customerEmail: "monnify@monnify.com",
			apiKey: "MK_TEST_SAF7HR5F3F",
			contractCode: "4934121693",
			paymentDescription: "Test Pay",
			isTestMode: true,
		    metadata: {
                    "name": "Damilare",
                    "age": 45
            },
			paymentMethods: ["CARD", "ACCOUNT_TRANSFER"],
			incomeSplitConfig: 	[
            	{
	    			"subAccountCode": "MFY_SUB_342113621921",
	    			"feePercentage": 50,
		    		"splitAmount": 1900,
		    		"feeBearer": true
    			},
    			{
		    		"subAccountCode": "MFY_SUB_342113621922",
		    		"feePercentage": 50,
	    			"splitAmount": 2100,
	    			"feeBearer": true
	    		}
    	    ],
			onComplete: function(response){
				//Implement what happens when transaction is completed.
	 			console.log(response);
			},
			onClose: function(data){
				//Implement what should happen when the modal is closed here
				console.log(data);
			}
		});
	}
</script>



RESPONSE
{
	accountReference: null
	amountPaid: "5000.00"
	invoiceReference: null
	paidOn: "26/08/2019 02:13:32"
	paymentDescription: "Test Pay"
	paymentReference: "421168696"
	paymentStatus: "PAID"
	totalPayable: "5000.00"
	transactionHash: "6373d5039175201eed06c1872c557749cfba27f0d56d75ff713e58f06ebad84795d38b34334ca59470ffae8addfbdf113ec36823a1607325c89da4981e1054bf"
	transactionReference: "MNFY|20190826141314|000290"
}

Monnify Web SDK Cancellation Object


{
	authorizedAmount: 0
	paymentStatus: "USER_CANCELLED"
	redirectUrl: "file:///Users/tamira/Webapps/html/sdk.html"
	responseCode: "USER_CANCELLED"
	responseMessage: "User cancelled Transaction"
}