<script>
import * as d3 from "d3";
import * as cloud from "d3-cloud";

export default {
  data() {
    return {
      layout: {},
      chart: {},
      fill: null,
    };
  },

  props: {
    data: {
      type: Array,
      required: true,
    },
    elClass: {
      type: [String, Function],
      default: "cloud-item",
    },
    fontSizeMapper: {
      type: Function,
      required: true,
    },
    onWordClick: {
      type: Function,
      default: () => true,
    },
    onWordOver: {
      type: Function,
      default: () => true,
    },
    onWordOut: {
      type: Function,
      default: () => true,
    },
    rotate: {
      type: [Function, String, Number],
      default: 0,
    },
    font: {
      type: [String, Function],
      default: "Serif",
    },
    width: {
      type: [Number, String],
      default: 960,
    },
    height: {
      type: [Number, String],
      default: 500,
    },
    padding: {
      type: [Number, String],
      default: 0,
    },
    spiral: {
      type: String,
      default: "archimedean",
    },
    coloring: {
      type: String,
      default: "random",
    },
    colors: {
      type: Array,
    },
  },

  mounted() {
    this.createCanvas();
  },

  watch: {
    data() {
      this.createCanvas();
    },
    rotate() {
      this.createCanvas();
    },
    font() {
      this.createCanvas();
    },
    padding() {
      this.createCanvas();
    },
    spiral() {
      this.createCanvas();
    },
    colors() {
      this.createCanvas();
    },
    coloring() {
      this.createCanvas();
    },
  },

  methods: {
    createCanvas: function () {
      const wordCounts = this.data.map((text) => ({ ...text }));

      d3.select(this.$el).selectAll("*").remove();

      const layout = cloud()
        .size([this.width, this.height])
        .words(wordCounts)
        .padding(this.padding)
        .spiral(this.spiral)
        .rotate(this.rotate)
        .font(this.font)
        .fontSize(this.fontSizeMapper)
        .on("end", this.end);

      if (this.colors) this.fill = d3.scaleOrdinal().range(this.colors);
      else this.fill = d3.scaleOrdinal(d3.schemeCategory10);

      layout.start();
    },
    end: function (words) {
      let _fill = (d, i) => this.fill(i);

      d3.select(this.$el)
        .append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 600 400")
        // .attr("width", this.width)
        // .attr("height", this.height)
        .append("g")
        .attr("transform", `translate(${this.width / 2},${this.height / 2})`)
        .selectAll("text")
        .data(words)
        .enter()
        .append("text")
        .classed(this.elClass, true)
        .style("cursor", "pointer")
        .style("font-family", (d) => d.font)
        .style("font-size", (d) => {
          return `${d.size}px`;
        })
        .style("fill", _fill)
        .attr("text-anchor", "middle")
        .attr("transform", (d) => {
          return `translate(${[d.x, d.y]})rotate(${d.rotate})`;
        })
        .text((d) => d.text)
        .on("click", (ev) => {
          const el = d3.select(ev.target);
          this.onWordClick(el.text());
        })
        .on("mouseover", (ev) => {
          const el = d3.select(ev.target);
          el.classed("hovered", true);
          this.onWordOver(el.text());
        })
        .on("mouseout", (ev) => {
          const el = d3.select(ev.target);
          el.classed("hovered", false);
          this.onWordOut();
        });
    },
  },
};
</script>

<template>
  <div class="wordCloud" ref="wordCloud"></div>
</template>
