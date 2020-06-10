function startIntro(){
    var intro = introJs().setOptions({ 'hidePrev': true, 'hideNext': true,
    'exitOnOverlayClick': false, 'showStepNumbers':false, 'showBullets':false,
    'scrollToElement':true, 'doneLabel':'Done &#10003',
    'tooltipClass':'blueTooltip'});
    intro.setOptions({
      steps: [
        {
          intro: `Now you get to explore the TestDrive timeline! You can read
          what others have posted, respond, or make your own posts.`
        },
        {
          intro: `As you look through the timeline, see if you can spot posts
          that would create a negative digital footprint. If you find one,
          click on the post to think about its impact on digital footprints.`

        },
        {

          intro: `You can also practice creating posts that would have a
          positive impact on your and other people’s digital footprints. When
          you get to the end of the page, click “Let's Continue” to move on.`

        }

      ]
    });
    intro.start().onexit(function() {
    window.location.href='/modual/digfoot';
  });
};

$(window).on("load", function() {startIntro();});
