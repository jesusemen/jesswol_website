$(document).ready(function(){
			
		$('.read-more-btn').click(function(){
			//$('p span.more').toggleClass('hide');
			//$('p span.dots').toggleClass('hide');
			
			$(this).prev().children("span.more").toggleClass('hide');
			$(this).prev().children("span.dots").toggleClass('hide');
			
			$(this).toggleClass( "show-more-text" );
			
			if($(this).hasClass( "show-more-text" )){
				$(this).text('Read More');
			}else{
				$(this).text('Read Less');
			}
		})
})



  

//~ function myFunction (){
	//~ var dots = document.getElementById("dots");
	//~ var moreText = document.getElementById("more");
	//~ var btnText = document.getElementById("myBtn");


	//~ if (dots.style.display === "none"){
		//~ dots.style.display ="inline";
		//~ btnText.innerHTML ="Read more";
		//~ moreText.style.display  = "none";
	//~ }  else {
		//~ dots.style.display = "none";
		//~ btnText.innerHTML ="Read less";
		//~ moreText.style.display = "inline";
	//~ }
//~ }

//~ function myRead() {
    //~ var mots = document.getElementById("mots");
    //~ var sureText = document.getElementById("sure");
    //~ var secBtn = document.getElementById("secBtn");
    
    
    //~ if (mots.style.display === "none"){
        //~ mots.style.display ="inline";
        //~ secBtn.innerHTML ="Read more";
        //~ sureText.style.display  = "none";
    //~ }  else {
        //~ mots.style.display = "none";
        //~ secBtn.innerHTML ="Read less";
        //~ sureText.style.display = "inline";
    //~ }
//~ }

//~ function expandMe() {

    //~ var gots = document.getElementById("gots");
    //~ var embedText = document.getElementById("embed");
    //~ var zenBtn = document.getElementById("zenbtn");

    //~ if (gots.style.display === "none"){
        //~ gots.style.display ="inline";
        //~ zenBtn.innerHTML ="Read more";
        //~ embedText.style.display = "none";
    //~ }  else {
        //~ gots.style.display = "none";
        //~ zenBtn.innerHTML ="Read less";
        //~ embedText.style.display = "inline";
	//~ }

//~ }
    