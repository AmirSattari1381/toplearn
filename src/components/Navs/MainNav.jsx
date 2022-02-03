import React from "react";

const MainNav = () => {
    return (
        <div className="main-menu">
            <div className="container">
                <nav>
                    <span className="responsive-sign">
                        <i className="zmdi zmdi-menu"></i>
                    </span>
                    <ul>
                        <li>
                            <a href=""> برنامه نویسی موبایل </a>
                            <ul>
                                <li>
                                    <a href=""> زامارین Xamarin </a>
                                </li>
                                <li>
                                    <a href=""> react Native </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href=""> برنامه نویسی وب </a>
                            <ul>
                                <li>
                                    <a href=""> Asp.net WebForms </a>
                                </li>
                                <li>
                                    <a href=""> Asp.net MVC </a>
                                </li>
                                <li>
                                    <a href=""> PHP MVC </a>
                                </li>
                                <li>
                                    <a href=""> PHP FrameWorks </a>
                                </li>
                                <li>
                                    <a href=""> Asp.net Core </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href=""> برنامه نویسی تحت ویندوز </a>
                        </li>
                        <li>
                            <a href=""> طراحی سایت </a>
                            <ul>
                                <li>
                                    <a href=""> طراحی سایت </a>
                                </li>
                                <li>
                                    <a href=""> Bootstrap </a>
                                </li>
                                <li>
                                    <a href=""> Angular </a>
                                </li>
                                <li>
                                    <a href=""> react </a>
                                </li>
                                <li>
                                    <a href=""> Jquery </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href=""> بانک های اطلاعاتی </a>
                        </li>
                        <li>
                            <a href=""> سئو </a>
                        </li>
                        <li>
                            <a href=""> سیستم عامل </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default MainNav;
