

function updateTextInput(slideAmount , sliderAmountVar) {
	var sliderInput = document.getElementById(sliderAmountVar);
	sliderInput.value = slideAmount;

}

function updateSlider(slideAmount , sliderAmountVar) {
	var slider = document.getElementById(sliderAmountVar);
	slider.value = slideAmount;

}



function onclickDistanceMatrix()
{
window.open('http://girihlet.com/ravi/web/barcode_diversity/tmp/mat89380.html');

}

function updateImage()
{
	var randomNumber = Math.random();
	var ran = 0;
	if(randomNumber>0.5)
	{
		ran=1;
	}
	else
	{
		ran=0;
	}

		$("#img_graph").attr("src","http://girihlet.com/ravi/web/barcode_diversity/bargraph.cgi?perf=tmp/fig5431.perf");
}

function createJson() {

	var json_string = '{"Truseq":document.getElementById("sliderAmount1"),'+
					  '"Nextera":document.getElementById("sliderAmount2"),'+
					  '"NEB":document.getElementById("sliderAmount3"),+'+
					  '"Bioo-6mer":document.getElementById("sliderAmount4"),'+
					  '"Bioo-8mer":document.getElementById("sliderAmount5"),'+
					  '"HumanTCRa":document.getElementById("sliderAmount6"),'+
					  '"HumanTCRb":document.getElementById("sliderAmount7"),'+
					  '"MouseTCRa":document.getElementById("sliderAmount8"),'+
					  '"MouseTCRb":document.getElementById("sliderAmount9"),'+
					  '"Amaryllis":document.getElementById("sliderAmount10"),'+
                      '"barcodes":document.getElementById("Preselectedbarcodes")}';


    document.getElementsByName('json_input')[0].value = json_string ;
}

