<template>
    <div class="nk-content ">
                    <div class="container-fluid">
                        <div class="nk-content-inner">
                            <div class="nk-content-body">
                                <div class="nk-block-head nk-block-head-sm">
                                    <div class="nk-block-between">
                                        <div class="nk-block-head-content">
                                            <h3 class="nk-block-title page-title">Players</h3>
                                            <div class="nk-block-des text-soft">
                                                <p>You have total 95 players.</p>
                                            </div>
                                        </div>
                                        <div class="nk-block-head-content">
                                            <div class="toggle-wrap nk-block-tools-toggle"><a href="project-list.html#"
                                                    class="btn btn-icon btn-trigger toggle-expand me-n1"
                                                    data-target="pageMenu"><em class="icon ni ni-menu-alt-r"></em></a>
                                                <div class="toggle-expand-content" data-content="pageMenu">
                                                    <ul class="nk-block-tools g-3">
                                                        <li class="nk-block-tools-opt d-none d-sm-block">
                                                            <input type="search" class="form-control shadow-none" placeholder="Seach Player">
                                                        </li>
                                                        <li>
                                                            <div class="drodown"><a href="project-list.html#"
                                                                    class="dropdown-toggle btn btn-white btn-dim btn-outline-light"
                                                                    data-bs-toggle="dropdown"><em
                                                                        class="d-none d-sm-inline icon ni ni-filter-alt"></em><span>Filtered
                                                                        By</span><em
                                                                        class="dd-indc icon ni ni-chevron-right"></em></a>
                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                    <ul class="link-list-opt no-bdr">
                                                                        <li><a
                                                                                href="project-list.html#"><span>Approved</span></a>
                                                                        </li>
                                                                        <li><a
                                                                                href="project-list.html#"><span>Awaiting</span></a>
                                                                        </li>
                                                                        
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        
                                                        <li class="nk-block-tools-opt d-none d-sm-block"><a
                                                                href="project-list.html#" class="btn btn-primary"><em
                                                                    class="icon ni ni-plus"></em><span>Add
                                                                    player</span></a></li>
                                                        <li class="nk-block-tools-opt d-block d-sm-none"><a
                                                                href="project-list.html#"
                                                                class="btn btn-icon btn-primary"><em
                                                                    class="icon ni ni-plus"></em></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="nk-block">
                                    <table class="nk-tb-list is-separate nk-tb-ulist">
                                        <thead>
                                            <tr class="nk-tb-item nk-tb-head">
                                                <th class="nk-tb-col nk-tb-col-check">
                                                    <!-- <div
                                                        class="custom-control custom-control-sm custom-checkbox notext">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="pid-all"><label class="custom-control-label"
                                                            for="pid-all"></label></div> -->
                                                </th>
                                                <th class="nk-tb-col"><span class="sub-text">Full Name</span></th>
                                                <th class="nk-tb-col tb-col-xxl"><span class="sub-text">Display Name</span>
                                                </th>
                                                <th class="nk-tb-col tb-col-lg"><span class="sub-text">Team</span></th>
                                                <th class="nk-tb-col tb-col-lg"><span class="sub-text">Number</span></th>
                                                <th class="nk-tb-col tb-col-xxl"><span class="sub-text">Image</span>
                                                </th>
                                                <th class="nk-tb-col tb-col-md"><span class="sub-text">Position</span>
                                                </th>
                                                <th class="nk-tb-col tb-col-sm"><span class="sub-text">Status</span>
                                                </th>
                                                <th class="nk-tb-col nk-tb-col-tools text-end">
                                                    <div class="dropdown"><a href="project-list.html#"  style="cursor: not-allowed;"
                                                            class="btn btn-xs btn-trigger btn-icon dropdown-toggle me-n1"
                                                            data-bs-toggle="dropdown" data-offset="0,5"><em
                                                                class="icon ni ni-more-h"></em></a>
                                                        
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="nk-tb-item">
                                                <td class="nk-tb-col nk-tb-col-check">
                                                    <div
                                                        class="custom-control custom-control-sm custom-checkbox notext">
                                                        <input type="checkbox" class="custom-control-input"
                                                            id="pid-01"><label class="custom-control-label"
                                                            for="pid-01"></label></div>
                                                </td>
                                                <td class="nk-tb-col"><a href="apps-kanban.html" class="project-title">
                                                        <div class="project-info">
                                                            <h6 class="title">Afonime Royal</h6>
                                                        </div>
                                                    </a></td>
                                                <td class="nk-tb-col tb-col-xxl"><span>{ Royal }</span></td>
                                                <td class="nk-tb-col tb-col-lg"><span>Computer Sciene</span></td>
                                                <td class="nk-tb-col tb-col-xxl"><span>17</span></td>

                                                <td class="nk-tb-col tb-col-lg">
                                                    <ul class="project-users g-1">
                                                        
                                                        <li>
                                                            <div class="user-avatar sm bg-blue"><img
                                                                    src="images/avatar/b-sm.jpg" alt=""></div>
                                                        </li>
                                                        
                                                    </ul>
                                                </td>
                                                <td class="nk-tb-col tb-col-md">
                                                    <div class="project-list-progress">

                                                        <div class="project-progress-percent">Midfield</div>
                                                    </div>
                                                </td>
                                                <td class="nk-tb-col tb-col-sm">Approved
                                                            </td>
                                                <td class="nk-tb-col nk-tb-col-tools">
                                                    <ul class="nk-tb-actions gx-1">
                                                        <li>
                                                            <div class="drodown"><a href="project-list.html#"
                                                                    class="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                                    data-bs-toggle="dropdown"><em
                                                                        class="icon ni ni-more-h"></em></a>
                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                    <ul class="link-list-opt no-bdr">
                                                                        <li><a href="apps-kanban.html"><em
                                                                                    class="icon ni ni-eye"></em><span>View
                                                                                    Project</span></a></li>
                                                                        <li><a href="project-list.html#"><em
                                                                                    class="icon ni ni-edit"></em><span>Edit
                                                                                    Project</span></a></li>
                                                                        <li><a href="project-list.html#"><em
                                                                                    class="icon ni ni-check-round-cut"></em><span>Mark
                                                                                    As Done</span></a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </td>
                                            </tr>
                                           
                                        </tbody>
                                    </table>
                                    <div class="card">
                                        <div class="card-inner">
                                            <div class="nk-block-between-md g-3">
                                                <div class="g">
                                                    <ul
                                                        class="pagination justify-content-center justify-content-md-start">
                                                        <li class="page-item"><a class="page-link"
                                                                href="project-list.html#">Prev</a></li>
                                                        <li class="page-item"><a class="page-link"
                                                                href="project-list.html#">1</a></li>
                                                        <li class="page-item"><a class="page-link"
                                                                href="project-list.html#">2</a></li>
                                                        <li class="page-item"><span class="page-link"><em
                                                                    class="icon ni ni-more-h"></em></span></li>
                                                        <li class="page-item"><a class="page-link"
                                                                href="project-list.html#">6</a></li>
                                                        <li class="page-item"><a class="page-link"
                                                                href="project-list.html#">7</a></li>
                                                        <li class="page-item"><a class="page-link"
                                                                href="project-list.html#">Next</a></li>
                                                    </ul>
                                                </div>
                                                <div class="g">
                                                    <div
                                                        class="pagination-goto d-flex justify-content-center justify-content-md-start gx-3">
                                                        <div>Page</div>
                                                        <div><select class="form-select js-select2" data-search="on"
                                                                data-dropdown="xs center">
                                                                <option value="page-1">1</option>
                                                                <option value="page-2">2</option>
                                                                <option value="page-4">4</option>
                                                                <option value="page-5">5</option>
                                                                <option value="page-6">6</option>
                                                                <option value="page-7">7</option>
                                                                <option value="page-8">8</option>
                                                                <option value="page-9">9</option>
                                                                <option value="page-10">10</option>
                                                                <option value="page-11">11</option>
                                                                <option value="page-12">12</option>
                                                                <option value="page-13">13</option>
                                                                <option value="page-14">14</option>
                                                                <option value="page-15">15</option>
                                                                <option value="page-16">16</option>
                                                                <option value="page-17">17</option>
                                                                <option value="page-18">18</option>
                                                                <option value="page-19">19</option>
                                                                <option value="page-20">20</option>
                                                            </select></div>
                                                        <div>OF 102</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  </template>
  
  <script>
  export default {
      name : 'ManagePlayer'
  }
  </script>
  
  <style>
  
  </style>