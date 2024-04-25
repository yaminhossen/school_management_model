import React from 'react';

export interface Props {}

const AppNav: React.FC<Props> = (props: Props) => {
    return (
        <>
            <div className="app_nav">
                <div className="left">
                    <ul className="navigation_list">
                        <li className="icon_link_li app_drawar_link_li">
                            <a
                                href="#dashboard#"
                                className="navigation_link active"
                            >
                                <span className="material-symbols-outlined fill">
                                    apps
                                </span>
                            </a>
                            <div className="apps_list_drawer">
                                <div className="content">
                                    <div className="top">
                                        <div className="profile">
                                            <div className="img">
                                                <img
                                                    src="/assets/dashboard/images/avatar.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="profile_info">
                                                <h2>mr admin</h2>
                                                <h3>
                                                    <span>admin</span>
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="action">
                                            <ul>
                                                <li>
                                                    <a href="#dashboard#">
                                                        <span className="material-symbols-outlined fill">
                                                            manage_accounts
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#dashboard#">
                                                        <span className="material-symbols-outlined fill">
                                                            settings
                                                        </span>
                                                    </a>
                                                </li>
                                                {/* <li>
                                                    <a href="#"><span className="material-symbols-outlined fill">lock</span></a>
                                                </li> */}
                                                <li>
                                                    <a href="#dashboard#">
                                                        <span className="material-symbols-outlined fill">
                                                            power_settings_new
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="search">
                                        <input
                                            type="search"
                                            placeholder="search.."
                                        />
                                    </div>
                                    <div className="menu_list custom_scroll">
                                        <div className="menu_apart">
                                            <h4>At a glance</h4>
                                            <ul>
                                                <li>
                                                    <a
                                                        aria-current="page"
                                                        href="#dashboard#/"
                                                        className="router-link-active router-link-exact-active"
                                                    >
                                                        <div className="icon bg_color_1">
                                                            <span className="material-symbols-outlined fill">
                                                                monitoring
                                                            </span>
                                                        </div>
                                                        <div className="text">
                                                            Dashboard
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#dashboard#"
                                                        className=""
                                                    >
                                                        <div className="icon bg_color_2">
                                                            <span className="material-symbols-outlined fill">
                                                                query_stats
                                                            </span>
                                                        </div>
                                                        <div className="text">
                                                            Analytics
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="menu_apart">
                                            <h4>Apps</h4>
                                            <ul>
                                                <li>
                                                    <a href="#dashboard#">
                                                        <div className="icon bg_color_3">
                                                            <span className="material-symbols-outlined fill">
                                                                fact_check
                                                            </span>
                                                        </div>
                                                        <div className="text">
                                                            Todo
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#dashboard#">
                                                        <div className="icon bg_color_4">
                                                            <span className="material-symbols-outlined fill">
                                                                calendar_month
                                                            </span>
                                                        </div>
                                                        <div className="text">
                                                            Calendar
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#dashboard#">
                                                        <div className="icon bg_color_5">
                                                            <span className="material-symbols-outlined fill">
                                                                calculate
                                                            </span>
                                                        </div>
                                                        <div className="text">
                                                            Calculator
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#dashboard#">
                                                        <div className="icon bg_color_6">
                                                            <span className="material-symbols-outlined fill">
                                                                email
                                                            </span>
                                                        </div>
                                                        <div className="text">
                                                            Messages
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="menu_apart">
                                            <h4>Management</h4>
                                            <ul>
                                                <li>
                                                    <a href="#dashboard#">
                                                        <div className="icon bg_color_7">
                                                            <span className="material-symbols-outlined fill">
                                                                supervisor_account
                                                            </span>
                                                        </div>
                                                        <div className="text">
                                                            Users
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#dashboard#">
                                                        <div className="icon bg_color_9">
                                                            <span className="material-symbols-outlined fill">
                                                                news
                                                            </span>
                                                        </div>
                                                        <div className="text">
                                                            Blog
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#dashboard#">
                                                        <div className="icon bg_color_8">
                                                            <span className="material-symbols-outlined fill">
                                                                card_membership
                                                            </span>
                                                        </div>
                                                        <div className="text">
                                                            Subscribers
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#dashboard#">
                                                        <div className="icon bg_color_10">
                                                            <span className="material-symbols-outlined fill">
                                                                format_list_bulleted_add
                                                            </span>
                                                        </div>
                                                        <div className="text">
                                                            Contacts
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="menu_apart">
                                            <h4>Frontend Management</h4>
                                            <ul>
                                                <li>
                                                    <a href="#dashboard#">
                                                        <div className="icon bg_color_11">
                                                            <span className="material-symbols-outlined fill">
                                                                image
                                                            </span>
                                                        </div>
                                                        <div className="text">
                                                            Banners
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#dashboard#">
                                                        <div className="icon bg_color_1">
                                                            <span className="material-symbols-outlined fill">
                                                                speaker_notes
                                                            </span>
                                                        </div>
                                                        <div className="text">
                                                            Notice
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* <!-- <li className="icon_link_li">
                <a href="#" className="navigation_link">
                    <span className="material-symbols-outlined fill">search</span>
                </a> 
            </li> -->*/}
                        <li className="icon_link_li">
                            <a
                                aria-current="page"
                                href="#dashboard#/"
                                className="router-link-active router-link-exact-active navigation_link"
                            >
                                <span className="material-symbols-outlined fill">
                                    home
                                </span>
                            </a>
                        </li>
                        <li className="icon_link_li">
                            <a href="#dashboard#" className="navigation_link">
                                <span className="material-symbols-outlined fill">
                                    mail
                                </span>
                            </a>
                        </li>
                        <li className="icon_link_li">
                            <a href="#dashboard#" className="navigation_link">
                                <span className="material-symbols-outlined fill">
                                    event
                                </span>
                            </a>
                        </li>
                        <li className="icon_link_li">
                            <a href="#dashboard#" className="navigation_link">
                                <span className="material-symbols-outlined fill">
                                    checklist
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="active_window">
                    <ul>
                        {/* <!-- <li>{{ active_windows.length }}</li> --> */}
                    </ul>
                </div>
                <div className="right">
                    <ul className="navigation_list">
                        <li className="icon_link_li">
                            <a href="#dashboard#" className="navigation_link">
                                <span className="material-symbols-outlined fill">
                                    expand_less
                                </span>
                            </a>
                        </li>
                        <li className="icon_link_li">
                            <a
                                href="#dashboard#"
                                onClick={() => ''}
                                className="navigation_link"
                            >
                                <span className="material-symbols-outlined fill">
                                    fullscreen
                                </span>
                            </a>
                        </li>
                        <li className="icon_link_li">
                            <a href="#dashboard#" className="navigation_link">
                                <span className="material-symbols-outlined fill">
                                    settings
                                </span>
                            </a>
                        </li>
                        <li className="icon_link_li">
                            <a href="#dashboard#" className="navigation_link">
                                <span className="material-symbols-outlined fill">
                                    wifi
                                </span>
                            </a>
                        </li>
                        <li className="nave_date_time">
                            <a href="#dashboard#" className="">
                                <span>01:18:56</span>
                                <span className="meridian">am</span>
                                <span> &nbsp; Mon 22 Apr</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default AppNav;
