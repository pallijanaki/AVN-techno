// JavaScript Document
	$(document).ready(function(){
    $("#fb").mouseenter(function(){
       $("#dis").show();
    });
});
$(document).ready(function(){
    $("#fb").mouseleave(function(){
       $("#dis").hide();
    });
}); 

					$(document).ready(function(){
    					$("#google").mouseenter(function(){
       						$("#goo").show();
   									 });
									});
					$(document).ready(function(){
    					$("#google").mouseleave(function(){
      					 $("#goo").hide();
    							});
							}); 
							
$(document).ready(function(){
    $("#linkedin").mouseenter(function(){
       $("#linked").show();
    });
});
$(document).ready(function(){
    $("#linkedin").mouseleave(function(){
       $("#linked").hide();
    });
}); 



							$(document).ready(function(){
							    $("#twitter").mouseenter(function(){
							       $("#twit").show();
							    });
							});
							
							$(document).ready(function(){
							    $("#twitter").mouseleave(function(){
								       $("#twit").hide();
								    });
								}); 
								
$(document).ready(function(){
    $("#rss").mouseenter(function(){
       $("#rs").show();
    });
});
$(document).ready(function(){
	$("#rss").mouseleave(function(){
		$("#rs").hide();
	});
}); 



$(document).ready(function(){
    
    $("#abot").click(function(){
        $("about.html").fadeIn(1000);
    });
});


function buton()
{
	document.getElementById("heading").innerHTML = "LifeSciences and Bio Statics";
	document.getElementById("accordion").innerHTML = "PVR bring expertise and insights in designing trials and developing complex statistical analysi  plans. Our biostatisticians possess the critical thinking to assist clients.<br><br>Our biostatisticians are industry experts in several statistical areas including adaptive design, personalized medicine, Bayesian analysis and non-inferiority approaches with extensive experience in several indications. Our biostatisticians have over 15 years of experience in NDA/BLA/PMA submission and interacting with FDA/EMEA and PMDA and actively collaborate with academic, industry and FDA working groups. Additionally, they are experienced with CDISC data standards and electronic submission standards to deliver high quality, dependable analyses. <br><br>Our extensive experience allows us to develop a statistically rigorous and customized plan for each project. Our execution of the data analysis plan produces report ready summary tables, data listings and figures for interpretation and inclusion in the study report or submission. A thorough parallel validation and senior review process substantiates the accuracy and completeness of all statistical analyses.<br>";
	var a=document.getElementById("sidematter");
	a.parentNode.removeChild(a);
}

