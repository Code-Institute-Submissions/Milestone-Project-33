
$(window).on('scroll', function(){
        if ($(window).scrollTop()){
            $('nav').addClass('white-bg-nav');
        }
        else 
        {
            $('nav').removeClass('white-bg-nav');
        }
      });

$(window).on('scroll', function(){
        if ($(window).scrollTop()){
            $('nav div ul li a').addClass('text-black-nav');
        }
        else 
        {
            $('nav div ul li a').removeClass('text-black-nav');
        }
      });

$(window).on('scroll', function(){
        if ($(window).scrollTop()){
            $('.w-one').addClass('d-none');
        }
        else 
        {
            $('.w-one').removeClass('d-none');
        }
      });

$(window).on('scroll', function(){
        if ($(window).scrollTop()){
             $(".b-one").removeClass('d-none');
        }
        else 
        {
            $('.b-one').addClass('d-none');
        }
      });

/* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}


window.addEventListener('load', () => {
	function _(e) {
		return document.getElementById(e);
	}
	
	function submitForm(e) {
		console.log(e);
	}
	
	function testEmail(e) {
		const value = e.target.value;
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		
		if (!regex.test(value))
			console.log('email is invalid');
		else
			console.log('email is valid');
	}
	
	function testMobile(e) {
		const value = e.target.value;
		const regex = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{9})$/gm;
		
		if (!regex.test(value))
			console.log('mobile is invalid');
		else
			console.log('mobile is valid');
	}
	
	function testText(e) {
		const value = e.target.value;
		
		if (!value)
			console.log('text is required');
		else
			console.log('text is ok');
	}
	
	_('exampleInputEmail').addEventListener('input', testEmail);
	_('exampleInputPassword').addEventListener('input', testPassword);
	_('exampleInputMobile').addEventListener('input', testMobile);
	_('exampleInputText').addEventListener('input', testText);
});
