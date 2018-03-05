<template>
    <div class="aw-content aw-content-messageList">
        <ul class="messageList">
            <li v-for="(message,index) in messages" :key="index">
                <span><img :src="message.header" /></span>
                <span class="message_name">{{message.name}}</span>
                <span class="ms-content">{{message.content}}</span>
            </li>

        </ul>
    </div>
</template>

<script>
export default {
  name: "messageList",
  data() {
    return {
      messages: [
        {
          header: "../../../../static/images/avatar.png",
          name: "一般",
          content: "xx市xx辖区xx案件",
          time: "3"
        },
        {
          header: "../../../../static/images/avatar.png",
          name: "紧急",
          content: "xx市xx辖区xx案件",
          time: "5"
        },
        {
          header: "../../../../static/images/avatar.png",
          name: "一般",
          content: "xx市xx辖区xx案件",
          time: "22"
        },
        {
          header: "../../../../static/images/avatar.png",
          name: "一般",
          content: "xx市xx辖区xx案件",
          time: "90"
        },
        {
          header: "../../../../static/images/avatar.png",
          name: "一般",
          content: "xx市xx辖区xx案件",
          time: "120"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.messageList {
  list-style: none;
}
.messageList li {
  clear: both;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  height: auto;
  overflow: hidden;
  cursor: pointer;
}
.messageList span {
  display: block;
  float: left;
  margin-right: 5px;
  height: auto;
}
.messageList img {
  transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  width: 50px;
  border-radius: 50%;
}
.messageList li:hover img {
  width: 55px;
}
.messageList .ms-content {
  width: 70%;
  font-size: 12px;
  margin-top: 6px;
}
.messageList .message_name {
  color: #4cb1a7;
}
</style>
