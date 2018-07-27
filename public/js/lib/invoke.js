$aia = jQuery.noConflict();
$aia(document).ready(runMenu);

function runMenu() {
    headerImage();
}


function headerImage() 
{
    if (document.location.pathname == '/commercial') {
        $aia('header#head-internal').css('background-image', 'url(/images/commercial.jpg)')
    }
    else if (document.location.pathname == '/deliverables') {
        //$aia('header#head-internal').css('background-image', 'url(/images/work.jpg)');
        $aia('header#head-internal').css('background-image','url(/images/work.jpg);');
    }
    else if (document.location.pathname == '/contact') {
        $aia('header#head-internal').css('background-image', 'url(/images/team_contact.jpg)');
    }
    else if (document.location.pathname == '/') {
        $aia('header#head-internal').css('background-image', 'url(/images/team_contact.jpg)');
    }

    var height_diff = $aia( window ).height() - $aia( 'body' ).height();
    if ( height_diff > 0 ) {
        $aia( 'footer' ).css( 'margin-top', height_diff );
    }
}


$aia("#pop").on("click", function() {
    $aia('#imagepreview').attr('src', $aia('#imageresource').attr('src')); // here asign the image to the modal when the user click the enlarge link
    $aia('#imagemodal').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
 });


 
// Add smooth scrolling to all links
$aia("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $aia('html, body').animate({
          scrollTop: $aia(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
});


function centerModal() {
    $aia(this).css('display', 'block');
    var $dialog = $aia(this).find(".modal-dialog");
    var offset = ($aia(window).height() - $dialog.height()) / 2;
    // Center modal vertically in window
    $dialog.css("margin-top", offset);
}

$aia('.modal').on('show.bs.modal', centerModal);
$aia(window).on("resize", function () {
    $aia('.modal:visible').each(centerModal);
});




var fileNameD11 = "D1.1–EasyTV User scenario and requirements definition.pdf";

$aia("#D11_Show").on('click', function () 
{
        $aia("#dialog").dialog({
            //modal: true,
            title: fileNameD11,
            width: 540,
            height: 450,
            buttons: {
                Close: function () {
                    $aia(this).dialog('close');
                }
            },
            open: function () {
                var object = "<object data=\"{fileNameD11}\" type=\"application/pdf\" width=\"700px\" height=\"500px\">";
                object += "If you are unable to view file, you can download from <a href = \"{fileNameD11}\">here</a>";
                object += " or download <a target = \"_blank\" href = \"http://get.adobe.com/reader/\">Adobe PDF Reader</a> to view the file.";
                object += "</object>";
                object = object.replace(/{fileNameD11}/g, "../files/" + fileNameD11);
                $aia("#dialog").html(object);
        }
    });
});

var fileNameD12 = "D1.2_EasyTV system requirements specification_v_1.6.pdf";

$aia("#D12_Show").on('click', function () 
{
        $aia("#dialog").dialog({
            //modal: true,
            title: fileNameD12,
            width: 540,
            height: 450,
            buttons: {
                Close: function () {
                    $aia(this).dialog('close');
                }
            },
            open: function () {
                var object = "<object data=\"{fileNameD12}\" type=\"application/pdf\" width=\"700px\" height=\"500px\">";
                object += "If you are unable to view file, you can download from <a href = \"{fileNameD12}\">here</a>";
                object += " or download <a target = \"_blank\" href = \"http://get.adobe.com/reader/\">Adobe PDF Reader</a> to view the file.";
                object += "</object>";
                object = object.replace(/{fileNameD12}/g, "../files/" + fileNameD12);
                $aia("#dialog").html(object);
        }
    });
});


var fileNameD13 = "D1.3_First release of the EasyTV system architecture_v1.40.pdf";

$aia("#D13_Show").on('click', function () 
{
        $aia("#dialog").dialog({
            //modal: true,
            title: fileNameD13,
            width: 540,
            height: 450,
            buttons: {
                Close: function () {
                    $aia(this).dialog('close');
                }
            },
            open: function () {
                var object = "<object data=\"{fileNameD13}\" type=\"application/pdf\" width=\"700px\" height=\"500px\">";
                object += "If you are unable to view file, you can download from <a href = \"{fileNameD13}\">here</a>";
                object += " or download <a target = \"_blank\" href = \"http://get.adobe.com/reader/\">Adobe PDF Reader</a> to view the file.";
                object += "</object>";
                object = object.replace(/{fileNameD13}/g, "../files/" + fileNameD13);
                $aia("#dialog").html(object);
        }
    });
});
