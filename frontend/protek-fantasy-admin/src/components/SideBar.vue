<template>
    <div class="nk-sidebar nk-sidebar-fixed is-light " data-content="sidebarMenu">
                <div class="nk-sidebar-element nk-sidebar-head">
                    <div class="nk-sidebar-brand"><a  class="logo-link nk-sidebar-logo"><img
                                class="logo-light logo-img" src="images/logo.png" srcset="/demo2/images/logo2x.png 2x"
                                alt="logo"><img class="logo-dark logo-img" src="images/logo-dark.png"
                                srcset="/demo2/images/logo-dark2x.png 2x" alt="logo-dark"><img
                                class="logo-small logo-img logo-img-small" src="images/logo-small.png"
                                srcset="/demo2/images/logo-small2x.png 2x" alt="logo-small"></a></div>
                                
                    <div class="nk-menu-trigger me-n2"><a href="/"
                            class="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu"><em
                                class="icon ni ni-arrow-left"></em></a><a href="/"
                            class="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex"
                            data-target="sidebarMenu"><em class="icon ni ni-menu"></em></a></div>
                </div>
                <div class="nk-sidebar-element">
                    <div class="nk-sidebar-content">
                        <div class="nk-sidebar-menu" data-simplebar>
                            <ul class="nk-menu">

                                <li class="nk-menu-heading">
                                    <h6 class="overline-title text-primary-alt">Dashboard</h6>
                                </li>
                                
                                <li class="nk-menu-item"><a href="index-analytics.html" class="nk-menu-link"><span
                                            class="nk-menu-icon"><em class="icon ni ni-growth-fill"></em></span><span
                                            class="nk-menu-text">Analytics</span></a></li>



                                <li class="nk-menu-heading">
                                    <h6 class="overline-title text-primary-alt">Applications</h6>
                                </li>



                                <li class="nk-menu-item has-sub"><a href="/"
                                        class="nk-menu-link nk-menu-toggle"><span class="nk-menu-icon"><em
                                                class="icon ni ni-tile-thumb-fill"></em></span><span
                                            class="nk-menu-text">Players</span></a>
                                    <ul class="nk-menu-sub">
                                        <li class="nk-menu-item"><a href="project-card.html" class="nk-menu-link"><span
                                                    class="nk-menu-text">Player List</span></a></li>
                                        <li class="nk-menu-item"><a href="project-list.html" class="nk-menu-link"><span
                                                    class="nk-menu-text">Project List</span></a></li>
                                    </ul>
                                </li>
                              
                              
                              
                                
                                <li class="nk-menu-item"><a href="pricing-table.html" class="nk-menu-link"><span
                                            class="nk-menu-icon"><em class="icon ni ni-view-col"></em></span><span
                                            class="nk-menu-text">Pricing Table</span></a></li>
                                <li class="nk-menu-item"><a href="gallery.html" class="nk-menu-link"><span
                                            class="nk-menu-icon"><em class="icon ni ni-img"></em></span><span
                                            class="nk-menu-text">Image Gallery</span></a></li>
                            

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
  </template>
  
  <script>
  export default {
    name : 'Sidebar'
  }
  </script>
  
  <style>
  
  </style>