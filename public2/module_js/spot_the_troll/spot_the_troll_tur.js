const nextPageURL = 'tut_guide';

const stepsList = [
  {
    element: '#step1',
    intro: `CLick here to view other profile pages`,
    position: 'right',
    scrollTo: 'tooltip',
    audioFile: ['']
  },
  {
    element: '#step2',
    intro: `Here is the user profile. Does it look like a troll account?`,
    position: 'right',
    scrollTo: 'tooltip',
    audioFile: ['CUSML.6.3.1.mp3']
  },
  {
    element: '#step3',
    intro: `a <b>troll</b> is a person who posts or says inflammatory, insincere, digressive, extraneous, or off-topic messages online.`,
    position: 'right',
    scrollTo: 'tooltip',
    audioFile: ['CUSML.6.3.2.mp3']
  },
  {
    element: 'a.content',
    intro: `This is an example of <b>spreading disinformation.</b>`,
    position: 'right',
    scrollTo: 'tooltip',
    audioFile: ['CUSML.6.3.3.mp3']
  },
  {
    element: 'a.flag',
    intro: `One way you can act against troll is by pressing the
    <b>“Flag”</b> button.`,
    position: 'right',
    scrollTo: 'tooltip',
    audioFile: ['CUSML.6.3.4.mp3']
  },
  {
    element: 'a.flag',
    intro: `<b>Flagging</b> something will report it to the website and
    the bullying post will be taken down. Sometimes it takes a while for
    the website to respond.`,
    position: 'right',
    scrollTo: 'tooltip',
    audioFile: ['CUSML.6.3.5.mp3']
  },
  {
    element: '#step7',
    intro: `
    <style>
    .btn:link,
    .btn:visited {
        text-transform: uppercase;
        text-decoration: none;
        padding: 15px 40px;
        display: inline-block;
        border-radius: 100px;
        transition: all .2s;
        position: absolute;
    }
    
    .btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
    
    .btn:active {
        transform: translateY(-1px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }
    
    .btn-white {
        background-color: red;
        color: black;
    }
    
    .btn::after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 100px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all .4s;
    }
    
    .btn-white::after {
        background-color: red;
    }
    
    .btn:hover::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
    }
    
    .btn-animated {
        animation: moveInBottom 5s ease-out;
        animation-fill-mode: backwards;
    }
    
    @keyframes moveInBottom {
        0% {
            opacity: 0;
            transform: translateY(30px);
        }
    
        100% {
            opacity: 1;
            transform: translateY(0px);
        }
    }
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}
</style>
<div class="card" style = "width:100%;position:relative">
  <img src="http://localhost:3000/profile_pictures/user81.jpg" alt="Avatar" style="width:100%">
  <div class="container">
    <p>Harmony Anderson send you a friend request.&nbsp 
    <br>
    <a style="position:absolute;left:10%,top:50% " href="#" class="btn btn-white btn-        animate">Reject</a></p> 
    <br>
    <br>
    <br>
  </div>
</div>`,
    position: 'left',
    scrollTo: 'tooltip',
    audioFile: ['CUSML.6.3.6.mp3']
  },
  {
    element: '#step7',
    intro: `This account is a troll. You should reject and report the troll`,
    position: 'left',
    scrollTo: 'tooltip',
    audioFile: ['CUSML.6.3.7.mp3']
  }
];
