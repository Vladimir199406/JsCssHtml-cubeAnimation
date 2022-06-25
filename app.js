Vue.createApp({
  data() {
    return {
      perspective: 345,
      rotateX: 50,
      rotateY: 40,
      rotateZ: 62,
    };
  },
  computed: {
    box() {
      return {
        transform: `
                perspective(${this.perspective}px)
                rotateX(${this.rotateX}deg)
                rotateY(${this.rotateY}deg)
                rotateZ(${this.rotateZ}deg)
                `,
      };
    },
  },
  methods: {
    reset() {
      this.perspective = 345;
      this.rotateX = 50;
      this.rotateY = 40;
      this.rotateZ = 62;
    },
    copy() {
        const el = document.createElement('textarea')

        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '9999px';
        el.value =  `transform: ${this.box.transform}`;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }
  },
}).mount("#app");
