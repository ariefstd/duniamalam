if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}


jssor_slider1_init = function () {
  var options = {
      $DragOrientation: 3,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $Cols is greater than 1, or parking position is not 0)

      $BulletNavigatorOptions: {                                //[Optional] Options to specify and enable navigator or not
          $Class: $JssorBulletNavigator$,                       //[Required] Class to create navigator instance
          $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
          $ActionMode: 1,                                 //[Optional] 0 None, 1 act by click, 2 act by mouse hover, 3 both, default value is 1
          $Steps: 1,                                      //[Optional] Steps to go for each navigation request, default value is 1
          $Rows: 1,                                      //[Optional] Specify lanes to arrange items, default value is 1
          $SpacingX: 0,                                   //[Optional] Horizontal space between each item in pixel, default value is 0
          $SpacingY: 10,                                   //[Optional] Vertical space between each item in pixel, default value is 0
          $Orientation: 1                                 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
      }
  };
  var jssor_slider1 = new $JssorSlider$('slider1_container', options);
};