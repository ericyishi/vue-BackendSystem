import todoList from '@/components/componentItem/elementUi/todoList.vue'
import borderTable from '@/components/componentItem/elementUi/borderTable.vue'
import messageList from '@/components/componentItem/elementUi/messageList.vue'
import pieChart from '../../components/componentItem/eCharts/pieChart.vue'
import lineChart from '../../components/componentItem/eCharts/lineChart.vue'
import axios from 'axios';
export default {
  name: 'DashBoard',
  components: {
    pieChart,
    lineChart,
    todoList,
    borderTable,
    messageList
  },
  data(){
    return{
        // processBox:[{percent:11,num:'5,810'},{percent:31,num:'2,680'},{percent:18,num:'57,820'},{percent:81,num:'1,680'},{percent:30,num:'157,820'},{percent:88,num:'32,645'}],
        processBox:[]
    }
  },
  mounted: function() {
    this.getMyData();
  },
  methods: {
    getMyData() {
      axios.get("/goods").then((result) => {
        this.processBox = result.data.data.usage;
        console.log("processBox",this.processBox);
      }).catch((err) => {
        console.log("err",err);
      })
    }

  }
}
