<template>
  <div id="app">
    <div class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand hidden-sm">Bootstrap</a>
        </div>
        <div class="navbar-collapse collapse" role="navigation">
          <ul class="nav navbar-nav">
            <li class="hidden-sm hidden-md"><a>Bootstrap2中文文档</a></li>
            <li><a>Bootstrap3中文文档</a></li>
            <li><a>Bootstrap 4.0 预览</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right hidden-sm">
            <li><a>关于</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div style="margin-top: 65px">
      <router-view></router-view>
    </div>

  </div>
</template>

<style scoped>

  .navbar-default {
    background-color: #27ae60;
  }

  .navbar-default .navbar-brand {
    color: white;
  }

  .navbar-default .navbar-nav > li > a {
    color: white;
  }

  .navbar-default .navbar-toggle .icon-bar {
    background-color: white;
  }

  .navbar-default .navbar-toggle:focus, .navbar-default .navbar-toggle:hover {
    background-color: transparent;
  }
</style>

