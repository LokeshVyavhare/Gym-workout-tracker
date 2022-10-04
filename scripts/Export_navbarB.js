export const NavB = () => {
    return ` <!-- main nav -->
    <nav>
        <!-- logo -->
        <div id="logo_c">
            <a>
                <img src="https://www.gymwolf.com/img/gymwolf.png" class="large_dis1">
                <img src="https://www.gymwolf.com/img/gymwolf-small.png" class="small_dis1">
            </a>
        </div>

        <!-- naviagation tabs -->
        <div id="nav_tabsA" class="large_dis">
            <div class="navtabA">Progress</div>
            <div class="navtabA">Calculators</div>
            <div class="navtabA">Exercise plans</div>
            <div class="navtabA">My personal Trainer</div>
            <div class="navtabA"><i class="fa fa-comments" aria-hidden="true"></i></div>
            <div class="navtabA" id="prof_name">
                <p>Profile Is Incomplete</p><span id="dropArrow"></span>
            </div>
            <div class="navtabA"><i class="fa fa-search" aria-hidden="true"></i></div>
        </div>

        <!-- responsive bar -->
        <div id="nav_tabsB" class="small_dis">
            <div class="navtabB"><i class="fa fa-plus filt-invert" aria-hidden="true"></i></div>
            <div class="navtabB"><i class="fa fa-comments filt-invert" aria-hidden="true"></i></div>
            <div class="navtabB"><i class="fa fa-search filt-invert" aria-hidden="true"></i></div>
            <div class="navtabB"><i class="fa fa-cog filt-invert" aria-hidden="true"></i></div>
            <div class="navtabB"><i class="fa fa-bars filt-invert" aria-hidden="true"></i></div>
        </div>
    </nav>`
}

function navbar() {
    return ` <div id="container">
    <div id="left_nav">
        <a href="./homepage_user.html"><img src="https://www.gymwolf.com/img/gymwolf.png" alt=""></a>
    </div>
    <div id="right_nav">
        <a href="">
            <p>Progress</p>
        </a>
        <a href="">
            <p>Calculator</p>
        </a>
        <a href="./exercise-list.html">
            <p>Exercises and plans</p>
        </a>
        <a href="">
            <p>My personal trainer</p>
        </a>
        <a href=""><i class="fa fa-comments commentIcon"></i></a>
        <!-- Ram's change -->
        
        <a  class="dropdown" >
        <p style="display:inline-flex" id="profile_tab">
            <i   class="fa fa-user" aria-hidden="true"></i>
            <p style="display:inline" id="user_nameOremail">
            </p> 
            <i  class="fa fa-caret-down" aria-hidden="true">  </i>
        </p>
            <div id="logout_container" class="dropdown-content">
               <ul>
                <li class="menu_edit">Edit Profile</li>
                <li>Upgrade to Pro</li>
                <li class="menu_line"></li>
                <li class="menu_language">Language</li>
                <li>In English</li>
                <li>Eesti Keeles</li>
                <li class="menu_line"></li>
                <li class="menu_logout" >Logout</li>
               </ul>
                
            </div>
        
             
    </a>



        <!--  -->

    </div>
</div>`
}

export default navbar;