window.onload = () => {
    $(document).ready(() => {
        $(".loginBtn").click(function () {
            $("#login").dialog({
                draggable: false,
                resizable: false,
                buttons: {
                    "Login": () => {
                        $("#login").submit((event) => {
                            event.preventDefault();
                        })
                        $("#login").dialog('close');
                    },
                    "Close": () => {
                        $("#login").dialog('close');
                    }
                }
            })
        })
    })

    $(document).ready(() => {
        $(".registerBtn").click(function () {
            $("#register").dialog({
                draggable: false,
                resizable: false,
                buttons: {
                    "Create New Account": () => {
                        $("#register").submit((event) => {
                            event.preventDefault();
                        })
                        $("#register").dialog('close');
                    },
                    "Close": () => {
                        $("#register").dialog('close');
                    }
                }
            })
        })
    })

    $(document).ready(()=>{
    if ($(window).width() < 480) {
        function add() {
            $(document).ready(() => {
                $(".adsImgOne").show({ 'effect': 'scale', 'duration': 1000, })
            })
        }
        add()
    }
    else {
        setInterval(add, 9000)
        function add() {
            $(document).ready(() => {
                $(".adsImgOne").show({ 'effect': 'scale', 'duration': 1000, }).delay(3000).fadeOut(500, () => {
                    $(".adsImgTwo").show({ 'effect': 'scale', 'duration': 1000, }).delay(3000).fadeOut(500)
                })
            })
        }
        add()
    }
    })
    
    $(document).ready(() => {
        $(".Product").tabs()
    })



    $(document).ready(() => {
        if ($(window).width() < 480) {
            $('.ethnicWear').click(() => {
                $("#ethnicWearMobile").dialog({
                    draggable: false,
                    resizable: false,
                    maxHeight: 550,
                    width: "95%",
                })
            })

            $('.westernDresses').click(() => {
                $("#westernDressesMobile").dialog({
                    draggable: false,
                    resizable: false,
                    maxHeight: 550,
                    width: "95%",
                })
            })

            $('.Menswear').click(() => {
                $("#MenswearMobile").dialog({
                    draggable: false,
                    resizable: false,
                    maxHeight: 550,
                    width: "95%",
                })
            })
        }
    })



}

