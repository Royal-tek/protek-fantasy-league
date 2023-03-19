<template>
    <div class="sidebar">
            <!-- ======= Sidebar ======= -->
    <aside id="sidebar" class="sidebar">
  
      <ul class="sidebar-nav" id="sidebar-nav">
  
        <li class="nav-item">
          <router-link to="/" class="nav-link" >
            <i class="bi bi-grid"></i>
            <span>Dashboard</span>
          </router-link>
        </li><!-- End Dashboard Nav -->
  
        <li class="nav-item">
          <router-link to="/add-player" class="nav-link collapsed" >
            <i class="bi bi-grid"></i>
            <span>Add Players</span>
          </router-link>
        </li><!-- End Dashboard Nav -->

 
  
        <li class="nav-item">
          <a class="nav-link collapsed"  href="withdraw.html">
            <i class="bi bi-layout-text-window-reverse"></i><span>Withdraw</span>
          </a>
          
        </li><!-- End Tables Nav -->
  
        <li class="nav-item">
          <a class="nav-link collapsed"  href="#">
            <i class="bi bi-journal-text"></i><span>Start Trade</span>
          </a>
          
        </li><!-- End Forms Nav -->
  
        
  
        <li class="nav-item">
          <a class="nav-link collapsed"  href="#">
            <i class="bi bi-bar-chart"></i><span>History</span>
          </a>
          
        </li><!-- End Charts Nav -->
  
        <li class="nav-item">
          <a class="nav-link collapsed"  href="#">
            <i class="bi bi-gem"></i><span>Settings</span>
          </a>
          
        </li><!-- End Icons Nav -->
  
        <li class="nav-heading">Pages</li>
  
        <li class="nav-item">
          <a class="nav-link collapsed" href="users-profile.html">
            <i class="bi bi-person"></i>
            <span>Profile</span>
          </a>
        </li><!-- End Profile Page Nav -->
  
        <li class="nav-item">
          <a class="nav-link collapsed" href="pages-faq.html">
            <i class="bi bi-question-circle"></i>
            <span>F.A.Q</span>
          </a>
        </li><!-- End F.A.Q Page Nav -->
  
        
  
        <li class="nav-item">
          <a class="nav-link collapsed" href="pages-register.html">
            <i class="bi bi-card-list"></i>
            <span>Register</span>
          </a>
        </li><!-- End Register Page Nav -->
  
        <li class="nav-item">
          <a class="nav-link collapsed" href="pages-login.html">
            <i class="bi bi-box-arrow-in-right"></i>
            <span>Login</span>
          </a>
        </li><!-- End Login Page Nav -->
  
        <li class="nav-item">
          <a class="nav-link collapsed" href="pages-login.html">
            <i class="bi bi-box-arrow-in-right"></i>
            <span>Logout</span>
          </a>
        </li><!-- End Login Page Nav -->
  
  
  
      </ul>
  
    </aside><!-- End Sidebar-->
    </div>
  </template>
  
  <script>
  export default {
    name : 'Sidebar'
  }
  </script>
  
  <style>
  
  </style>