<template>
  <div>
    <main id="main" class="main">

<div class="pagetitle">
    <h1>Dashboard</h1>
    <nav>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
        <li class="breadcrumb-item active">Dashboard</li>
      </ol>
    </nav>
  </div><!-- End Page Title -->

<section class="section dashboard">
    <div class="row">
        <!-- Left side columns -->
    <div class="col-lg-8">
        <div class="row">

          <!-- Sales Card -->
          <div class="col-xxl-4 col-md-6">
            <div class="card info-card sales-card">

              <div class="filter">
                <!-- <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a> -->
               
              </div>

              <div class="card-body">
                <h5 class="card-title">Daily Receive</h5>

                <div class="d-flex align-items-center">
                  <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i class="bi bi-currency-dollar"></i>
                  </div>
                  <div class="ps-3">
                    <h6>0 USDT</h6>
                    <span class="text-success small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">increase</span>

                  </div>
                </div>
              </div>

            </div>
          </div><!-- End Sales Card -->

          <!-- Revenue Card -->
          <div class="col-xxl-4 col-md-6">
            <div class="card info-card revenue-card">

              <div class="filter">
                <!-- <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a> -->
                
              </div>

              <div class="card-body">
                <h5 class="card-title">Available Balance</h5>

                <div class="d-flex align-items-center">
                  <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i class="bi bi-currency-dollar"></i>
                  </div>
                  <div class="ps-3">
                    <h6>0 USDT</h6>
                    <span class="text-success small pt-1 fw-bold">8%</span> <span class="text-muted small pt-2 ps-1">increase</span>

                  </div>
                </div>
              </div>

            </div>
          </div><!-- End Revenue Card -->

          <!-- Customers Card -->
          <div class="col-xxl-4 col-xl-12">

            <div class="card info-card customers-card">

              <div class="filter">
               
              </div>

              <div class="card-body">
                <h5 class="card-title">Monthly Receive</h5>

                <div class="d-flex align-items-center">
                  <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i class="bi bi-currency-dollar"></i>
                  </div>
                  <div class="ps-3">
                    <h6>0 USDT</h6>
                    <span class="text-danger small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">decrease</span>

                  </div>
                </div>

              </div>
            </div>

          </div><!-- End Customers Card -->

          <!-- Reports -->
          <div class="col-12">
            <div class="card">

              <div class="filter">
                <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li class="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>

                  <li><a class="dropdown-item" href="#">Today</a></li>
                  <li><a class="dropdown-item" href="#">This Month</a></li>
                  <li><a class="dropdown-item" href="#">This Year</a></li>
                </ul>
              </div>

              <div class="card-body">
                <h5 class="card-title">Reports <span>/Today</span></h5>

                <!-- Line Chart -->
                <div id="reportsChart"></div>
                <p style="font-weight: bold;">YOUR  GRAPH CAN GO HERE!!!</p>
                <div class="btcwdgt-chart" bw-cash="true" bw-noshadow="true"></div>


               
                <!-- End Line Chart -->

              </div>

            </div>
          </div><!-- End Reports -->

          <!-- Recent Sales -->
          <div class="col-12">
            <div class="card recent-sales overflow-auto">

             

             

            </div>
          </div><!-- End Recent Sales -->

    

        </div>
      </div><!-- End Left side columns -->

     <!-- Right side columns -->
     <div class="col-lg-4">

      <!-- Recent Activity -->
      <div class="card">
        <div class="filter">
          <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <li class="dropdown-header text-start">
              <h6>Filter</h6>
            </li>

            <li><a class="dropdown-item" href="#">Today</a></li>
            <li><a class="dropdown-item" href="#">This Month</a></li>
            <li><a class="dropdown-item" href="#">This Year</a></li>
          </ul>
        </div>

        <div class="card-body">
          <h5 class="card-title">Recent Activity <span>| Today</span></h5>

          <div class="activity">

            

            

          </div>

        </div>
      </div><!-- End Recent Activity -->

      <!-- Budget Report -->
      <div class="card">
        <div class="filter">
          
        </div>

        <div class="card-body pb-0">
          <h5 class="card-title">Trade History and Report </h5>

          <div id="budgetChart" style="min-height: 400px;" class="echart"></div>

          

        </div>
      </div><!-- End Budget Report -->

      <!-- Website Traffic -->
      <div class="card">
        <div class="filter">
          
        </div>

        <div class="card-body pb-0">
          <h5 class="card-title text-uppercase">Investment Traffic </h5>

          <div id="trafficChart"  class="echart">
            <p>Overall Growth -> 80.40</p>
            <p>Monthly Growth -> 30.40</p>
            <p>Daily Growth -> 7.40</p>
          </div>


        </div>
      </div><!-- End Website Traffic -->

       <!-- Website Traffic -->
       <div class="card">
        <div class="filter">
          
        </div>

        <div class="card-body pb-0">
          <h5 class="card-title text-uppercase">Deposite Traffic </h5>

          <div id="trafficChart" class="echart">
            <p>Overall Growth -> 80.40</p>
            <p>Monthly Growth -> 30.40</p>
            <p>Daily Growth -> 7.40</p>
          </div>


        </div>
      </div><!-- End Website Traffic -->

       <!-- Website Traffic -->
       <div class="card">
        <div class="filter">
          
        </div>

        <div class="card-body pb-0">
          <h5 class="card-title text-uppercase">Bonus Traffic </h5>

          <div id="trafficChart" class="echart">
            <p>Overall Growth -> 80.40</p>
            <p>Monthly Growth -> 30.40</p>
            <p>Daily Growth -> 7.40</p>
          </div>


        </div>
      </div><!-- End Website Traffic -->

    

    </div><!-- End Right side columns -->
    </div>

</section>


    </main>
  </div>
</template>

<script>
export default {
    name : 'AddPlayer'
}
</script>

<style>

</style>