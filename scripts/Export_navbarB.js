function navbar() {
    return ` <div id="container">
    <div id="left_nav">
        <a href="#"><img src="https://www.gymwolf.com/img/gymwolf.png" alt=""></a>
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
        <a href="" class="dropdown">
            <p id="user_nameOremail">
            </p>

            <div id="logout_container" class="dropdown-content">
                <p>HI</p>
                <a href="">
                    <p>Edit Profile</p>
                </a>
                <a href="">
                    <p>Upgrade to PRO</p>
                </a>
                <hr>
                <a href="">
                    <p>Language</p>
                </a>
                <a href="">
                    <p>In English</p>
                </a>
                <a href="">
                    <p>Eesti keeles</p>
                </a>
                <hr>
                <a href="">
                    <p>Logout</p>
                </a>
            </div>


        </a>



        <!--  -->

    </div>
</div>`
}

export default navbar;