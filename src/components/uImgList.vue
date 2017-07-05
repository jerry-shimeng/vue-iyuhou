<template>
  <div class="container">

    <div class="row">

      <div class="col-md-3 col-xs-4 col-sm-4 portfolio-wrapper"
           v-masonry transition-duration="0.3s" item-selector=".item"
           v-for="h in hotLists" :key="h.id">

        <div class="thumbnail item" v-masonry-tile>
          <router-link :to="'/detail/' + h.id">
            <figure class="effect-bubba">
              <img class="img-responsive img-rounded "
                   data-src="/static/img/loading.gif" :src="h.img.url"
                   alt=""/>
              <figcaption>
                <h4><span class="glyphicon glyphicon-play-circle"></span></h4>
              </figcaption>
            </figure>
          </router-link>
        </div>

        <div class="textBox">
          <p class="name">{{h.name}}</p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import service from '../../src/service';
  import Vue from 'vue'

  import VueLazyload from 'vue-lazyload'

  Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'static/img/default.jpeg',
    loading: 'static/img/loading.gif',
    try: 3,// default 1,
    attempt: 1,
    lazyComponent: true
  });

  export default {
    name: 'uImgList',
    data(){
      return {
        hotLists: []
      }
    },
    methods: {},
    created() {
      this.$http.get(service.url.domain + service.url.list + "?size=12").then((res) => {
        if (res && res.body.code === 0) {
          this.hotLists = res.body.data.list;

          this.hotLists.map(function (v) {
            if (!v.img) {
              v.img = '/static/img/default.jpeg';
            }
          });
        }
      });
    },
    components: {}
  };

</script>

<style scoped>
  /*--slider--*/
  .thumbnail figure {
    position: relative;
    float: left;
    overflow: hidden;
    text-align: center;
    cursor: pointer;
    width: 100%;
  }

  .thumbnail figure img {
    width: 100%;
    position: relative;
    display: block;
  }

  .features-grids figure figcaption {
    padding: 2em;
    color: #fff;
    font-size: 1.25em;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -o-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .thumbnail figure figcaption {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
  }

  figure.effect-bubba {
    margin-bottom: 20px;
    background: #6d6e70;
  }

  figure.effect-bubba:hover img {
    opacity: 0.3;
  }

  figure.effect-bubba figcaption::before,
  figure.effect-bubba figcaption::after {
    position: absolute;
    top: 30px;
    right: 30px;
    bottom: 30px;
    left: 30px;
    content: '';
    opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    -moz-transition: opacity 0.35s, -moz-transform 0.35s;
    -o-transition: opacity 0.35s, -o-transform 0.35s;
    -ms-transition: opacity 0.35s, -ms-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
  }

  figure.effect-bubba figcaption::before {
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    -webkit-transform: scale(0, 1);
    -moz-transform: scale(0, 1);
    -o-transform: scale(0, 1);
    -ms-transform: scale(0, 1);
    transform: scale(0, 1);
  }

  figure.effect-bubba figcaption::after {
    border-right: 1px solid #fff;
    border-left: 1px solid #fff;
    -webkit-transform: scale(1, 0);
    -moz-transform: scale(1, 0);
    -o-transform: scale(1, 0);
    -ms-transform: scale(1, 0);
    transform: scale(1, 0);
  }

  figure.effect-bubba h4 {
    -webkit-transition: transform 0.35s;
    -moz-transition: transform 0.35s;
    -o-transition: -o-transform 0.35s;
    transition: transform 0.35s;
    -webkit-transform: translate3d(0, -20px, 0);
    -moz-transform: translate3d(0, -20px, 0);
    -o-transform: translate3d(0, -20px, 0);
    -ms-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
    opacity: 0;
    color: #fff;
    font-size: 3.5em;
  }

  figure.effect-bubba p {
    padding: 20px 2.5em;
    opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    -moz-transition: opacity 0.35s, -moz-transform 0.35s;
    -o-transition: opacity 0.35s, -o-transform 0.35s;
    -ms-transition: opacity 0.35s, -ms-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: translate3d(0, 20px, 0);
    -moz-transform: translate3d(0, 20px, 0);
    -o-transform: translate3d(0, 20px, 0);
    -ms-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
    color: #fff;
    font-size: 1em;
  }

  figure.effect-bubba:hover figcaption::before,
  figure.effect-bubba:hover figcaption::after {
    opacity: 1;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -o-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  figure.effect-bubba:hover h4,
  figure.effect-bubba:hover p {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
</style>
