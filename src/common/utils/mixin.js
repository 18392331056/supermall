import BackTop from 'components/content/backtop/BackTop';

export const backTopMixin = {
  components:{
    BackTop
  },
  data(){
    return {
      isShowBackTop:false,
    };
  },
  methods:{
    btnBack(){
      this.$refs.dtscroll.scrollTo(0,0,500);
    },
  }
}