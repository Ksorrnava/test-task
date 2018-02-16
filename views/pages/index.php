<?php include('views/include/news.php'); ?>

<div class="content ">
<div class="block">
  <div class="container">
    <h1>Блог</h1>
    <div class="news-list">
      <?php  foreach ($news as $nav ){
        echo"
        <div class='news-item'>
        <a href='#'>
          <div class='news-item__img'>
            <img src='$nav[img]'>
          </div>
          <div class='news-item__title'><h3>$nav[title]</h3></div>
          <div class='news-item__text'><p>$nav[text]</p></div>
          </a>
        </div>";
        }
      ;?>
    </div>
  </div>
 </div>
  <div class="block gray-bg">
  <div class="container">
      <div class="buttons">
      <a data-toggle="modal" class="btn btn-primary btn-lg modal-open" href="views/modals/red-modal.php" data-target="#myModal"data-color="red" >Red Modal</a>
      <a data-toggle="modal" class="btn btn-primary btn-lg modal-open" href="views/modals/green-modal.php" data-target="#myModal" data-color="green">Green Modal</a>
      <a data-toggle="modal" class="btn btn-primary btn-lg modal-open" href="views/modals/blue-modal.php" data-target="#myModal" data-color="blue">Blue Modal</a>
      </div>
  </div>
    <!-- Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">

    </div>
</div>
</div>
