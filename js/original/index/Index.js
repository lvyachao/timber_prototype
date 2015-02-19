  function urlclean()
        {
            var url=$("input[type=url]").val();
          
            var urlarr=url.split("");
          
            if(urlarr[urlarr.length-1]=="/")
                {
                    urlarr.length=urlarr.length-1;
                }
                 
            url=urlarr.join("");
            console.log(url);
            document.getElementById('InputURL').value=url;
            document.getElementById('form1').submit();
            
            
            
        }
        
        // if there is a "/" in the end of url, delete this, and then submit the form 