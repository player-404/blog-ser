<template>
  <div id="slideBtn" ref="paBtn" @mousemove="move" @mouseup="up" @mouseover="over" @mouseout="out">
    <div class="btn" ref="btn" @mousedown="down"></div>
    <div class="bg" ref="bg"></div>
  </div>
</template>
<script>
export default {
  name: "SlideBtn",
  data() {
    return {
      isDown: false,
      isOver: false,
      left: 0,
      isCheck: false
    };
  },
  methods: {
    down() {
      try {
        e.stopPropagatopn();
      } catch (e) {
        window.event.cancelBubble = true;
      }
      this.isDown = true;
    },
    up() {
      this.isDown = false;
    },
    over() {
      this.isOver = true;
    },

    out(e) {
      try {
        e.stopPropagatopn();
      } catch (e) {
        window.event.cancelBubble = true;
      }
      this.isOver = false;
      this.isDown = false;
    },

    move(e) {
      const bg = this.$refs.bg;
      const slide = this.$refs.paBtn;
      const btn = this.$refs.btn;
      if (this.isCheck) return;
      const setLeft = mouseLeft => {
        btn.style.transition = "";
        bg.style.transition = "";
        const width = btn.offsetWidth;
        const slideWidth = slide.offsetWidth;
        let left = mouseLeft - slide.offsetLeft - width / 2;
        left =
          left < 0 ? 0 : left > slideWidth - width ? slideWidth - width : left;
        btn.style.left = left + "px";
        bg.style.width = left + "px";
      };

      const check = () => {
        const width = slide.offsetWidth - btn.offsetWidth;
        let left = parseInt(btn.style.left);
        if (!this.isDown) {
          if (left >= width) {
            this.isCheck = true;
            left = width;
          } else {
            left = 0;
            btn.style.transition = "all .7s";
            bg.style.transition = "all .7s";
          }
          btn.style.left = left + "px";
          bg.style.width = left + "px";
        }
      };

      if (this.isDown && this.isOver) {
        const mouseLeft = e.clientX;
        console.log("鼠标left值 =>", mouseLeft);
        setLeft(mouseLeft);
      }

      check();
    }
  },
  watch: {
    isOver() {
      /* if (!this.isOver) {
        this.$refs.btn.style.transition = "all .7s";
        this.$refs.bg.style.transition = "all .7s";
        this.$refs.btn.style.left = 0 + "px";
        this.$refs.bg.style.width = 0 + "px";
      } */
    }
  }
};
</script>

<style lang="less" scoped>
#slideBtn {
  width: 100%;
  height: 40px;
  background-color: #eeeeee;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  .btn {
    position: absolute;
    left: 0;
    top: 0;
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 3px;
    z-index: 11;
    &:hover {
      cursor: move;
    }
  }
  .bg {
    height: 100%;
    width: 0;
    background-image: linear-gradient(#e66465, #9198e5);
  }
}
</style>