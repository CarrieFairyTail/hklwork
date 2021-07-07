<template>
  <div id="swiperText">
    <div class="time-line"></div>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="i of 10" :key="i">
                <div class="dot"></div>
                {{i}}
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <!-- <div class="swiper-pagination"></div> -->
        
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        
        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
        <div class="swiper-masker"></div>
    </div>  
  </div>  
</template>
<script>
import Swiper from 'swiper/js/swiper.min'
import 'swiper/css/swiper.min.css'

export default {
    name: 'swiperText',
    data() {
        return {
            mySwiper: null,
            activeIndex: null
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            this.mySwiper = new Swiper ('.swiper-container', {
                // direction: 'vertical', // 垂直切换选项
                // loop: true, // 循环模式选项
                autoplay: false,
                slidesPerView: 3,

                // 如果需要分页器
                // pagination: {
                //     el: '.swiper-pagination',
                // },
                
                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                
                // 如果需要滚动条
                // scrollbar: {
                //     el: '.swiper-scrollbar',
                // },
                on: {
                    slideChangeTransitionEnd: function(){
                        console.log(this.activeIndex); // 切换结束时，告诉我现在是第几个slide
                    },
                },
            })
            console.log('这里是：' + this.mySwiper.activeIndex)      
        }
    }
}
</script>
<style lang="stylus" scoped>
#swiperText
    background-color #999
    position relative
    .time-line
        height 3px
        width calc(100% - 40px)
        background-image linear-gradient(to right, rgba(247, 40, 77, 0.1) 0%, rgba(247, 40, 77, 1) 10%, rgba(247, 40, 77, 1) 90%, rgba(247, 40, 77, 0.1) 100%)
        position absolute
        left 20px
        top 80px
    .swiper-container
        width 450px 
        height 300px
        overflow visible
        // position relative
        .swiper-slide
            .dot
                position absolute
                width 10px
                height 10px
                background-color #6BCE43
                border-radius 50%
                top 75px
                border 2px solid #fff

        .swiper-button-prev
            left 0
        .swiper-button-next
            right 0
        .swiper-masker
            width 450px
            height 300px
            position absolute
            opacity 0.18
            background-image linear-gradient(180deg, rgba(121, 158, 228, 0.45) 1%, #799EE4 40%, rgba(121, 158, 228, 0.45) 100%)
            top 0
            left calc(50% - 225px)
            z-index 99
            pointer-events none
</style>