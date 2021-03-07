import { debounce } from "./utils" 

export const imgLoadedMixin = {
    data() {
        return {
            imgLoaded: null
        }
        
    },
    mounted() {
        this.imgLoaded = debounce(this.$refs.bscroll.refresh, 100)
    },
}

export const clickToTop = {
    data() {
        return {
            showClickToTop: false,
        }
    },
    methods: {
        //点击滚动到顶部
      clickToTop() {
        this.$refs.bscroll.scrollTo(0, 0)
      },
    }
}