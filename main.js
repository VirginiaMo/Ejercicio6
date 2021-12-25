

        window.onload = function exampleFunction() {
            var options = {searchable: true};
            NiceSelect.bind(document.getElementById("searchable-select"), options);
        }


        function remove() {
            var element = document.querySelector(".btn-primary");
            element.remove();
          }
       
     

         document.querySelector('#file-upload').addEventListener('change', ()=>{ 
             let pdf = document.querySelector('#file-upload').files[0];
             let pdfFileUrl = URL.createObjectURL(pdf)
            document.querySelector('#vistaPrevia').setAttribute('src',pdfFileUrl)
         })
         
          
     



