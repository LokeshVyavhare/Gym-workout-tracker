function navbar(){
    return `  <nav>
    <img src="https://www.gymwolf.com/img/gymwolf.png" class="logo" />

    <ul>
      <li id="register"><a href="#">Register</a></li>
      <li id="login"><a href="#">Sign In</a></li>
      <li><a href="">🔍</a></li>
    </ul>
  </nav>`
}

function footer(){
  return `<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-2">
      <p class="lead">ABOUT</p>
      <p><a href="/about" title="About us">About us</a></p>
      <p><a href="/contact" title="Contact">Contact</a></p>
    </div>

    <div class="col-xs-12 col-sm-2">
      <p class="lead">LEGAL</p>
      <p><a href="/tos" title="Terms of Service">Terms of Service</a></p>
      <p><a href="/privacy" title="Privacy">Privacy</a></p>
      <p><a href="/pricing" title="Pricing">Pricing</a></p>
    </div>
    <div class="col-xs-12 col-sm-2">
      <p class="lead">Get the app</p>
      <p>
        <a
          href="https://play.google.com/store/apps/details?id=com.mooncascade.gymwolf"
          title="Android App"
        >
          <img
            src="https://www.gymwolf.com/img/footer/android-button.png"
            alt="Android App"
            width="134"
          />
        </a>
      </p>
      <p>
        <a
          href="https://www.gymwolf.com/img/footer/ios-button.png"
          title="iPhone App"
        >
          <img
            src="https://www.gymwolf.com/img/footer/ios-button.png"
            alt="iPhone App"
            width="134"
          />
        </a>
      </p>
    </div>

    <div class="col-xs-12 col-sm-2">
      <p class="lead">SOCIAL</p>
      <p>
        <a
          href="http://www.facebook.com/gymwolf"
          title="Follow us on Facebook"
        >
          <img
            src="https://www.gymwolf.com/img/footer/fb-button.png"
            alt="Follow us on Facebook"
          />
        </a>
      </p>
    </div>

    <div class="col-xs-12 col-sm-2">
      <p class="lead">LANGUAGE</p>
      <p><a href="?language=et">Eesti keeles</a></p>
    </div>
  </div>

  <hr />

  <div class="">
    <div class="">
      <p class="copyright">
        Copyright © Mooncascade OÜ. All Rights Reserved. Tel: +372 5344
        5686. E-mail: info@gymwolf.com
      </p>
    </div>
  </div>
</div>`
}


export {navbar,footer} 