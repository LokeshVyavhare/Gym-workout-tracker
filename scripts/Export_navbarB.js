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