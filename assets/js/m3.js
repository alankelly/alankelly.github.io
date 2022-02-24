 $(document).ready(function() {
      var e = function() {
        $("body").css("margin-bottom", $(".page__footer").outerHeight(!0))
      }, t = !1;
      e(), $(window).resize(function() { t = !0 }),
          setInterval(function() { t && (t = !1, e()) }, 250),
          $("#main").fitVids(), $(".sticky").Stickyfill();
      var n = function() {
        var e = 0 === $(".author__urls-wrapper button").length
                    ? $(window).width() > 1024
                    : !$(".author__urls-wrapper button").is(":visible");
        e ? (Stickyfill.rebuild(), Stickyfill.init(), $(".author__urls").show())
          : (Stickyfill.stop(), $(".author__urls").hide())
      };
      n(), $(window).resize(function() { n() }),
          $(".author__urls-wrapper button")
              .on("click",
                  function() {
                    $(".author__urls").fadeToggle("fast", function() {}),
                        $(".author__urls-wrapper button").toggleClass("open")
                  }),
          $("a").smoothScroll({offset : -20}),
          $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']")
              .addClass("image-popup"),
          $(".image-popup").magnificPopup({
            type : "image",
            tLoading : "Loading image #%curr%...",
            gallery :
                {enabled : !0, navigateByImgClick : !0, preload : [ 0, 1 ]},
            image : {
              tError : '<a href="%url%">Image #%curr%</a> could not be loaded.'
            },
            removalDelay : 500,
            mainClass : "mfp-zoom-in",
            callbacks : {
              beforeOpen : function() {
                this.st.image.markup = this.st.image.markup.replace(
                    "mfp-figure", "mfp-figure mfp-with-anim")
              }
            },
            closeOnContentClick : !0,
            midClick : !0
          })
    });

