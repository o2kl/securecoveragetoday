


     //Get modal element
    var modal = document.getElementById('simpleModal');

    // //Get open modal button
    var modalBtn = document.getElementById('modalBtn');
    // //Get close button
    var closeBtn = document.getElementsByClassName('closeBtn')[0];

    var modalContent = document.getElementById('modalBodyCopy');
    
    // //Listen for click
    // modalBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', clickOutside);

    // //Function to open modal
    function openModal(e, txt="") {
        var str = txt;
        // modal.style.display = 'block';
        $('#simpleModal').show();
        modalContent.innerHTML = str;
        }
    
    function closeModal() {
        // console.log(123);
        // modal.style.display = 'none';
        $('#simpleModal').hide();
    }

    function clickOutside(e) {
        if (e.target == modal)
        // modal.style.display = 'none';
        $('#simpleModal').hide();
    }


    function getQueryVariable(variable)
{
    //    var query = window.location.search.substring(0);
       var query = variable.substring(0);
       var vars = query.split("&");
       var fromLocation ='Direct Default';
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               //console.log(pair)
              // if(pair[0] == variable){
              /// console.log(pair[1])
                 
                   if (pair[1] == 'healthcare%20portal') {
                       fromLocation = 'Healthcare Portal Ad Identifier: HCP1019';
                   } else if (pair[1] == 'google') {
                       fromLocation = "SEM Identifier: SEM1019"
                   } else if (pair[1] == 'bing') {
                       fromLocation = 'SEM Identifier: SEM1019'
                   }
                   else {
                       fromLocation = 'Direct Default'
                   }
                   return fromLocation;

                //    return pair[1];
              //  }
       }

       return(false);
}

function getQueryMedium(variable)
{
    //    var query = window.location.search.substring(0);
       var query = variable.substring(0);
       var vars = query.split("&");
       var fromMedium='Direct Default';
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               //console.log(pair)
              // if(pair[0] == variable){
                  /// console.log(pair[1])
                 
                   if (pair[1] == 'healthcare%20portal') {
                    fromMedium = 'ad';
                   } else if (pair[1] == 'google') {
                    fromMedium = "cpc"
                   } else if (pair[1] == 'bing') {
                    fromMedium = 'cpc'
                   }
                   else {
                    fromMedium = 'Direct Default'
                   }
                   return fromMedium;

                //    return pair[1];
              //  }
       }

       return(false);
}




