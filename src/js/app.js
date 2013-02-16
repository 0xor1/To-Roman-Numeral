/*

 0xor1   http://github.com/0xor1

 */

(function () {


    function app() {

        var txtBx = $('input');

        txtBx.on('keyup', function(){

            var txt = txtBx.val()
                , romNum = "";

            if(txt !== ""){
                try{
                    romNum = Number(txt).toRomanNumeral();
                } catch (e){
                    romNum = e.message;
                }
            }

            $('p').text(romNum);

        });

    }


    $(document).ready(app);


})();