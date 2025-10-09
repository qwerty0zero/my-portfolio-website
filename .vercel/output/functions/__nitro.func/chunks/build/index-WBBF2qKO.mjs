import { ref, mergeProps, withCtx, createVNode, defineComponent, unref, computed, resolveComponent, watch, nextTick, resolveDynamicComponent, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderSlot, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$g = {
  __name: "TextFadeEffect",
  __ssrInlineRender: true,
  props: {
    tag: { type: String, default: "p" },
    text: { type: String, default: "Your animated text goes here!" },
    duration: { type: Number, default: 600 },
    ease: { type: String, default: "cubic-bezier(0.19, 1, 0.22, 1)" },
    threshold: { type: Number, default: 0.5 },
    triggerOnce: { type: Boolean, default: true },
    rootMargin: { type: String, default: "0px 0px -100px 0px" },
    delay: { type: Number, default: 0 }
  },
  setup(__props) {
    const textElement = ref(null);
    const containerElement = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "containerElement",
        ref: containerElement,
        class: "masked-line-container"
      }, _attrs))} data-v-7d5f12f8>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.tag), {
        ref_key: "textElement",
        ref: textElement,
        class: "split-text"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.text), 1)
            ];
          }
        }),
        _: 1
      }), _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TextFadeEffect.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const TextFadeEffect = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-7d5f12f8"]]);
const _sfc_main$f = {
  __name: "Animation",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ id: "main" }, _attrs))} data-v-6895c25e><canvas id="canvas" data-v-6895c25e></canvas><div class="text-content" data-v-6895c25e>`);
      _push(ssrRenderComponent(TextFadeEffect, {
        text: "IHOR KUHEL",
        tag: "h1",
        threshold: 0,
        duration: 1e3,
        delay: 600
      }, null, _parent));
      _push(ssrRenderComponent(TextFadeEffect, {
        text: "Web Developer and Designer",
        threshold: 0,
        duration: 1e3,
        "root-margin": "0px",
        delay: 800
      }, null, _parent));
      _push(`</div></main>`);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Animation.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const Animation = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$f, [["__scopeId", "data-v-6895c25e"]]), { __name: "Animation" });
const _sfc_main$e = {
  data() {
    return {};
  },
  props: ["project", "index", "isActive"]
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(_attrs)} data-v-86be6570><div class="${ssrRenderClass([{ active: $props.isActive }, "project_item"])}" data-v-86be6570><span class="count" data-v-86be6570>${ssrInterpolate($props.index + 1)}</span><h4 class="title" data-v-86be6570>${ssrInterpolate($props.project.title)}</h4><p class="simple_description" data-v-86be6570>${ssrInterpolate($props.project.short_description)}</p></div></button>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/ProjectItem.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const ProjectItem = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-86be6570"]]), { __name: "UIProjectItem" });
const _sfc_main$d = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-d592b303><svg data-v-d592b303><filter id="noise" data-v-d592b303><feTurbulence data-v-d592b303><animate attributeName="baseFrequency" dur="50s" values="0.9 0.9; 0.8 0.8; 0.9 0.9;" repeatCount="indefinite" data-v-d592b303></animate></feTurbulence><feDisplacementMap in="SourceGraphic" scale="5" data-v-d592b303></feDisplacementMap></filter></svg></div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/TvNoiseEffect.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const TvNoiseEffect = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-d592b303"]]), { __name: "UITvNoiseEffect" });
const numColumns = 9;
const _sfc_main$c = {
  __name: "TestProjectReveal",
  __ssrInlineRender: true,
  props: {
    active: Boolean,
    index: Number,
    item: Object
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const columns = ref(Array.from({ length: numColumns }, (_, i) => ({ id: i })));
    const showDescription = ref(false);
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.active) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "reveal_body" }, _attrs))} data-v-6a136f58><!--[-->`);
        ssrRenderList(columns.value, (col) => {
          _push(`<div class="reveal_item" data-v-6a136f58>`);
          _push(ssrRenderComponent(TvNoiseEffect, null, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--><div class="${ssrRenderClass([{ "visible": showDescription.value }, "project-description"])}" data-v-6a136f58><img${ssrRenderAttr("src", __props.item[__props.index].imgLink)} alt="" class="top_fade" data-v-6a136f58><div class="description" data-v-6a136f58><h5 class="left_fade" data-v-6a136f58>${ssrInterpolate(__props.item[__props.index].title)}</h5><p class="left_fade" data-v-6a136f58>${ssrInterpolate(__props.item[__props.index].description)}</p><ul class="technologies_list left_fade" data-v-6a136f58><!--[-->`);
        ssrRenderList(__props.item[__props.index].technologies, (item, index) => {
          _push(`<li class="skill_text" data-v-6a136f58><p data-v-6a136f58>${ssrInterpolate(item)}</p></li>`);
        });
        _push(`<!--]--></ul></div><button class="closeBtn fade" data-v-6a136f58><span data-v-6a136f58></span><span data-v-6a136f58></span></button></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/test/ProjectReveal.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const ProjectReveal = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-6a136f58"]]);
const _sfc_main$b = {
  props: ["title", "description"]
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<h4${ssrRenderAttrs(mergeProps({ class: "h4_title" }, _attrs))} data-v-d2cc4f29><p class="title" data-v-d2cc4f29>${ssrInterpolate($props.title)}</p><p class="description" data-v-d2cc4f29>${ssrInterpolate($props.description)}</p></h4>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/SectionDescription.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const SectionDescription = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-d2cc4f29"]]), { __name: "UISectionDescription" });
const projectInfoData = [
  {
    index: 1,
    title: "Crypto Trading Bot",
    short_description: "Crypto trading assistant",
    description: "Freelance project: an interface for tracking cryptocurrency prices from Binance and setting levels on a TradingView chart. Telegram notifications are implemented for bot activity and orders. The demo version provides only the interface without backend.",
    technologies: [
      "Vue",
      "FastAPI",
      "Telegram API",
      "Binance API",
      "TradingView Chart"
    ],
    imgLink: "/img/img.png"
  },
  {
    index: 2,
    title: "Landing Page",
    short_description: "Animated one-page site",
    description: "My first website built with Vue. A single-page landing with animations, multilingual support, and responsive design.",
    technologies: [
      "Vue",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    imgLink: "/img/img.png"
  },
  {
    index: 3,
    title: "Crypto Profit Calculator",
    short_description: "Investment profit tool",
    description: "A tool to calculate potential profit from cryptocurrency investments using different buying strategies. Users select a coin, time period, and purchase frequency to get results.",
    technologies: [
      "Vue",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    imgLink: "/img/img.png"
  },
  {
    index: 4,
    title: "E-Commerce (Gas Struts)",
    short_description: "Online store platform",
    description: "An e-commerce website for a Ukrainian gas strut manufacturer. Built on PrestaShop, migrated from version 1.8 to 8.0. WordPress and OpenCart were also tested during development.",
    technologies: [
      "PrestaShop",
      "PHP",
      "MySQL",
      "HTML",
      "CSS"
    ],
    imgLink: "/img/img.png"
  },
  {
    index: 5,
    title: "Dark Projects Website",
    short_description: "Dynamic product pages",
    description: "Personal project for the Dark Projects brand (computer peripherals). Built while practicing Vue and frontend. Each product page is dynamically generated from a JSON file that defines block order, content, and styles.",
    technologies: [
      "Vue",
      "JavaScript",
      "HTML",
      "CSS",
      "JSON"
    ],
    imgLink: "/img/img.png"
  }
];
const _sfc_main$a = {
  __name: "SectionsFolder",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(null);
    ref(null);
    const isMobile = ref(false);
    const activePanel = ref(0);
    const activeReveal = ref(false);
    const activeIndex = ref(null);
    const projectInfo = ref(projectInfoData);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div id="my_works" style="${ssrRenderStyle(!isMobile.value ? null : { display: "none" })}" class="sticky_parent" data-v-bc97f304><section class="sticky" data-v-bc97f304><div class="scroll_section" data-v-bc97f304><div class="panel about-panel" data-v-bc97f304><aside data-v-bc97f304>`);
      _push(ssrRenderComponent(SectionDescription, {
        class: "description",
        title: "ABOUT ME",
        description: "I'm Ihor — a frontend developer with a passion for building sleek, responsive interfaces using Vue. I also create Telegram and trading bots with Python, blending clean code with smart automation. With a strong eye for design, I deliver both functionality and visual polish across web projects."
      }, null, _parent));
      _push(`<div class="links_block" data-v-bc97f304><a href="" data-v-bc97f304><span data-v-bc97f304>GitHub</span></a><a href="" data-v-bc97f304><span data-v-bc97f304>LinkedIn</span></a></div></aside></div><!--[-->`);
      ssrRenderList(projectInfo.value, (project, index) => {
        _push(`<div class="panel project-panel" data-v-bc97f304>`);
        _push(ssrRenderComponent(ProjectItem, {
          project,
          index
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></section></div><section id="my_works" style="${ssrRenderStyle(isMobile.value ? null : { display: "none" })}" class="vertical-scroll-section" data-v-bc97f304><div class="mobile-panel about-panel" data-v-bc97f304>`);
      _push(ssrRenderComponent(SectionDescription, {
        class: "description",
        title: "ABOUT ME",
        description: "I'm Ihor — a frontend developer with a passion for building sleek, responsive interfaces using Vue. I also create Telegram and trading bots with Python, blending clean code with smart automation. With a strong eye for design, I deliver both functionality and visual polish across web projects."
      }, null, _parent));
      _push(`<div class="links_block" data-v-bc97f304><a href="" data-v-bc97f304><span data-v-bc97f304>GitHub</span></a><a href="" data-v-bc97f304><span data-v-bc97f304>LinkedIn</span></a></div></div><!--[-->`);
      ssrRenderList(projectInfo.value, (project, index) => {
        _push(`<div class="mobile-panel project-panel" data-v-bc97f304>`);
        _push(ssrRenderComponent(ProjectItem, {
          class: "mobile",
          project,
          index,
          isActive: activePanel.value === index + 1
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></section>`);
      _push(ssrRenderComponent(ProjectReveal, {
        active: activeReveal.value,
        index: activeIndex.value,
        item: unref(projectInfoData),
        onClose: ($event) => activeReveal.value = false
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionsFolder.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const SectionsFolder = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$a, [["__scopeId", "data-v-bc97f304"]]), { __name: "SectionsFolder" });
const _sfc_main$9 = {
  __name: "SectionBase",
  __ssrInlineRender: true,
  props: {
    style: { type: String, default: "" },
    type: { type: String, default: "" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: [__props.style, __props.type]
      }, _attrs))} data-v-1701bb9b>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      if (__props.type === "hard_skils" || __props.type === "skills") {
        _push(ssrRenderComponent(TvNoiseEffect, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionBase.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const SectionBase = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-1701bb9b"]]);
const _sfc_main$8 = {
  name: "CursorComponent",
  setup() {
    const cursor = ref(null);
    return { cursor };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    ref: "cursor",
    class: "cursor"
  }, _attrs))}></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Cursor.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Cursor = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$4]]), { __name: "UICursor" });
const skillsInfo = [
  {
    title: "Front-end",
    description: "I have been working in front-end development for several years, building landing pages and interactive web applications. I focus on interface quality, responsiveness, and user experience. I use modern frameworks and best practices, optimizing project speed and maintainability. I follow trends and new technologies to create modern, user-friendly, and functional interfaces."
  },
  {
    title: "web-design",
    description: "I develop my web design skills, studying trends and other designers’ work to create modern, user-friendly interfaces. For each project, I prepare multiple layouts, select typography and color palettes, and consider implementation, animations, and interactive elements. My goal is to make designs visually appealing, functional, and intuitive for users."
  },
  {
    title: "back-end",
    description: "Experienced in database management and server-side logic. I develop online stores, integrate APIs, and create Telegram bots."
  }
];
const _sfc_main$7 = {
  props: ["item", "index", "topOffset", "previousItems"],
  data() {
    return {
      computedTop: 0,
      windowWidth: 0
      // reactive window width
    };
  },
  computed: {
    tagClass() {
      if (this.index === 1) return "second";
      if (this.index === 2) return "third";
      return "";
    }
  },
  mounted() {
    this.updateWidth();
    (void 0).addEventListener("resize", this.updateWidth);
  },
  beforeUnmount() {
    (void 0).removeEventListener("resize", this.updateWidth);
  },
  methods: {
    updateWidth() {
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  if ($data.windowWidth > 1e3) {
    _push(`<div class="${ssrRenderClass([$options.tagClass, "feature-item"])}" style="${ssrRenderStyle({ top: $props.topOffset + ($props.index + 1) * 30 + "px" })}" data-v-ecb5dfba><span class="card-index" data-v-ecb5dfba>00${ssrInterpolate($props.index + 1)}</span><h4 class="big_h4" data-v-ecb5dfba>${ssrInterpolate($props.item.title)}</h4><p data-v-ecb5dfba>${ssrInterpolate($props.item.description)}</p></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.windowWidth < 1e3) {
    _push(`<div class="${ssrRenderClass([$options.tagClass, "feature-item mobile"])}" style="${ssrRenderStyle({ top: $props.topOffset + ($props.index + 1) * 30 + "px" })}" data-v-ecb5dfba><div class="title_holder" data-v-ecb5dfba><span class="card-index" data-v-ecb5dfba>00${ssrInterpolate($props.index + 1)}</span><h4 class="big_h4" data-v-ecb5dfba>${ssrInterpolate($props.item.title)}</h4></div><p data-v-ecb5dfba>${ssrInterpolate($props.item.description)}</p></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/SkillUnit.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const SkillUnit = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-ecb5dfba"]]), { __name: "UISkillUnit" });
const _sfc_main$6 = {
  __name: "SkillContainer",
  __ssrInlineRender: true,
  setup(__props) {
    const skillSection = ref(null);
    const sectionDesc = ref(null);
    const featureItemsRefs = ref([]);
    const height = ref(0);
    const itemRefs = computed(() => featureItemsRefs.value || []);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "skillSection",
        ref: skillSection,
        class: "skill_section"
      }, _attrs))} data-v-b2fb6acc>`);
      _push(ssrRenderComponent(SectionDescription, {
        ref_key: "sectionDesc",
        ref: sectionDesc,
        class: "text_item",
        title: "My Skills",
        description: "Beyond front-end work, I build Telegram and trading bots in Python, blending clean code with smart automation."
      }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(skillsInfo), (item, index) => {
        _push(ssrRenderComponent(SkillUnit, {
          key: index,
          item,
          index,
          topOffset: height.value,
          previousItems: itemRefs.value,
          ref_for: true,
          ref_key: "featureItemsRefs",
          ref: featureItemsRefs
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SkillContainer.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const SkillContainer = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-b2fb6acc"]]);
const _sfc_main$5 = {
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    activeIndex: {
      type: [Number, null],
      default: null
    }
  },
  data() {
    return {
      height: 0,
      useInterpolate: false
    };
  },
  computed: {
    isActive() {
      return this.activeIndex === this.index;
    },
    descriptionStyle() {
      if (this.useInterpolate) {
        return {
          height: this.isActive ? "auto" : "0",
          overflow: "hidden",
          transition: "height 0.3s ease"
        };
      } else {
        return {
          maxHeight: this.isActive ? this.height + "px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.3s ease"
        };
      }
    }
  },
  watch: {
    isActive(val) {
      if (val && !this.useInterpolate) {
        this.$nextTick(() => {
          const el = this.$refs.content;
          this.height = el.scrollHeight;
        });
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.useInterpolate = CSS.supports("interpolate-size", "allow-keywords");
    });
  },
  methods: {
    toggle() {
      this.$emit("toggle", this.index);
      if (!this.useInterpolate) {
        const el = this.$refs.content;
        if (!this.isActive) {
          this.height = el.scrollHeight;
          el.style.maxHeight = this.height + "px";
        } else {
          el.style.maxHeight = "0px";
        }
      }
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["faq_item", { active: $options.isActive }]
  }, _attrs))} data-v-7b6f7f5d><div class="faq_header" data-v-7b6f7f5d><span class="faq_span" data-v-7b6f7f5d>00${ssrInterpolate($props.index + 1)}</span><h4 class="faq_text big_h4" data-v-7b6f7f5d>${ssrInterpolate($props.item.title)}</h4><span class="faq_button" data-v-7b6f7f5d>${ssrInterpolate($options.isActive ? "-" : "+")}</span></div><div class="faq_description" style="${ssrRenderStyle($options.descriptionStyle)}" data-v-7b6f7f5d><p data-v-7b6f7f5d>${ssrInterpolate($props.item.description)}</p></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/FaqItem.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const FaqItem = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-7b6f7f5d"]]), { __name: "UIFaqItem" });
const faqInfo = [
  {
    title: "What do I do?",
    description: "I develop e-commerce websites, landing pages, and other web applications. My main focus is frontend development and backend integration to ensure websites are fast, responsive, and user-friendly."
  },
  {
    title: "Which technologies do I use?",
    description: "My stack includes Vue 3, Nuxt.js, HTML, CSS, and JavaScript for frontend; Python with Django or FastAPI for backend; PostgreSQL and other databases; and design tools like Figma, Adobe XD, following a Pixel Perfect approach."
  },
  {
    title: "What about bots?",
    description: "I create Telegram bots and trading bots using Python. I can automate tasks, integrate with APIs, and set up notifications and analytics."
  },
  {
    title: "Can I build a blog or content site?",
    description: "Yes, I can develop blogs, landing pages, or corporate websites with content management systems, SEO optimization, and responsive design."
  },
  {
    title: "What are my strengths?",
    description: "Writing clean, maintainable code, implementing modern and adaptive designs, fast development speed, and strong attention to detail. I make sure products not only work well but also look professional."
  },
  {
    title: "How can I help businesses?",
    description: "I can quickly implement a website tailored to your goals — sales, product presentation, or process automation. I turn every project into a convenient and effective tool."
  }
];
const _sfc_main$4 = defineComponent({
  components: { FaqItem, SectionDescription },
  setup() {
    const activeIndex = ref(null);
    const setActive = (index) => {
      activeIndex.value = activeIndex.value === index ? null : index;
    };
    return {
      faqInfo,
      activeIndex,
      setActive
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SectionDescription = resolveComponent("SectionDescription");
  const _component_FaqItem = resolveComponent("FaqItem");
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "faq" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_SectionDescription, {
    class: "text_item",
    ref: "sectionDesc",
    title: "FAQ Section",
    description: "The FAQ section is designed to quickly provide answers to questions about my work and development approaches."
  }, null, _parent));
  _push(`<div class="faq_container"><div class="faqs"><!--[-->`);
  ssrRenderList(_ctx.faqInfo, (item, index) => {
    _push(ssrRenderComponent(_component_FaqItem, {
      key: index,
      item,
      index,
      "active-index": _ctx.activeIndex,
      onToggle: _ctx.setActive
    }, null, _parent));
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FaqContainer.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const FaqContainer = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]), { __name: "FaqContainer" });
const _sfc_main$3 = {
  __name: "Footer",
  __ssrInlineRender: true,
  props: {
    location: {
      type: String,
      default: "bottom"
    }
  },
  setup(__props) {
    ref(null);
    const cursorX = ref(0);
    const cursorY = ref(0);
    const isHover = ref(false);
    ref(null);
    const wrapperRef = ref(null);
    const props = __props;
    const locationClass = computed(() => {
      if (props.location === "bottom") return "sticky-footer-wrapper";
      if (props.location === "menu") return "menu-footer-wrapper";
      return "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "wrapperRef",
        ref: wrapperRef,
        class: locationClass.value
      }, _attrs))} data-v-7e3f1a8e>`);
      if (__props.location === "bottom") {
        _push(`<div class="footer-spacer" aria-hidden="true" data-v-7e3f1a8e><div class="ul_folder" data-v-7e3f1a8e><ul data-v-7e3f1a8e><h4 data-v-7e3f1a8e>MY LINKS</h4><li data-v-7e3f1a8e><a href="#" tabindex="-1" data-v-7e3f1a8e>GitHub</a></li><li data-v-7e3f1a8e><a href="#" tabindex="-1" data-v-7e3f1a8e>LinkedLin</a></li><li data-v-7e3f1a8e><a href="#" tabindex="-1" data-v-7e3f1a8e>CodeWars</a></li><li data-v-7e3f1a8e><a href="#" tabindex="-1" data-v-7e3f1a8e>LeetCode</a></li></ul><ul data-v-7e3f1a8e><h4 data-v-7e3f1a8e>MY CONTACTS</h4><li data-v-7e3f1a8e><a href="#" tabindex="-1" data-v-7e3f1a8e>Telegramm</a></li><li data-v-7e3f1a8e><a href="#" tabindex="-1" data-v-7e3f1a8e>+48573894402</a></li><li data-v-7e3f1a8e><p data-v-7e3f1a8e>Warsaw, Poland</p></li></ul></div><h5 class="gradient-text-spacer" data-v-7e3f1a8e>WEB-DESIGNER</h5></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<footer${ssrRenderAttr("id", __props.location === "bottom" ? "footer" : null)} class="sticky-footer" data-v-7e3f1a8e><div class="ul_folder" data-v-7e3f1a8e><ul data-v-7e3f1a8e><h4 data-v-7e3f1a8e>MY LINKS</h4><li data-v-7e3f1a8e><a href="#" data-v-7e3f1a8e>GitHub</a></li><li data-v-7e3f1a8e><a href="#" data-v-7e3f1a8e>LinkedLin</a></li><li data-v-7e3f1a8e><a href="#" data-v-7e3f1a8e>CodeWars</a></li><li data-v-7e3f1a8e><a href="#" data-v-7e3f1a8e>LeetCode</a></li></ul><ul data-v-7e3f1a8e><h4 data-v-7e3f1a8e>MY CONTACTS</h4><li data-v-7e3f1a8e><a href="#" data-v-7e3f1a8e>Telegramm</a></li><li data-v-7e3f1a8e><a href="tel:+48573894402" data-v-7e3f1a8e>+48573894402</a></li><li data-v-7e3f1a8e><p data-v-7e3f1a8e>Warsaw, Poland</p></li></ul></div><h5 class="gradient-text" style="${ssrRenderStyle({
        "--x": cursorX.value + "px",
        "--y": cursorY.value + "px",
        "--hover": isHover.value ? 1 : 0
      })}" data-v-7e3f1a8e> WEB-DESIGNER </h5></footer></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$3, [["__scopeId", "data-v-7e3f1a8e"]]), { __name: "Footer" });
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "hard_skill_container" }, _attrs))}><h4>MY HARD SKILLS</h4><aside><div class="skill_holder"><h5>Front-End</h5><div class="skills"><div class="skill_text"><p>HTML</p></div><div class="skill_text"><p>CSS</p></div><div class="skill_text"><p>JS</p></div><div class="skill_text"><p>VUE3</p></div><div class="skill_text"><p>NUXT.JS</p></div></div></div><div class="skill_holder"><h5>Backk-End &amp; CMS</h5><div class="skills"><div class="skill_text"><p>PYTHON</p></div><div class="skill_text"><p>SQL</p></div><div class="skill_text"><p>REST API</p></div><div class="skill_text"><p>OpenCart</p></div><div class="skill_text"><p>PrestaShop</p></div><div class="skill_text"><p>WordPress</p></div><div class="skill_text"><p>Strapi</p></div></div></div><div class="skill_holder"><h5>Web-Design</h5><div class="skills"><div class="skill_text"><p>Figma</p></div><div class="skill_text"><p>Responsive Design</p></div><div class="skill_text"><p>Pixel Perfect</p></div><div class="skill_text"><p>UI/UX Best Practices</p></div><div class="skill_text"><p>Modern Web Layouts</p></div></div></div></aside></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HardSkillSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const HardSkillSection = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]), { __name: "HardSkillSection" });
const _sfc_main$1 = {
  __name: "UIMenuItem",
  __ssrInlineRender: true,
  setup(__props) {
    const activeBtn = ref(false);
    const closing = ref(false);
    ref(null);
    ref(null);
    ref([]);
    const childHolder = ref(null);
    const isOpen = ref(false);
    ref(false);
    const elements = [
      { text: "Main", link: "#main" },
      {
        text: "My Works",
        link: "#my_works"
      },
      { text: "FAQ", link: "#faq" },
      { text: "Contacts", link: "#footer" }
    ];
    watch(isOpen, async (val) => {
      await nextTick();
      const el = childHolder.value[0];
      if (!el) return;
      el.style.height = "auto";
      const childHeight = el.scrollHeight + "px";
      el.style.height = "0";
      if (val) {
        requestAnimationFrame(() => {
          el.style.transition = "height 0.4s ease";
          el.style.height = childHeight;
        });
      } else {
        el.style.transition = "height 0.4s ease";
        el.style.height = "0";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["menu_holder", { active: activeBtn.value }]
      }, _attrs))} data-v-64422c95><button class="${ssrRenderClass([{ active: activeBtn.value }, "menu_button"])}" aria-label="Toggle navigation menu" data-v-64422c95><div class="${ssrRenderClass([{ hide: activeBtn.value }, "activateBtn"])}" data-v-64422c95><span data-v-64422c95></span><span data-v-64422c95></span><span data-v-64422c95></span></div><div class="${ssrRenderClass([{ show: activeBtn.value }, "closeBtn"])}" data-v-64422c95><span data-v-64422c95></span><span data-v-64422c95></span></div></button><div class="${ssrRenderClass([{ active: activeBtn.value, closing: closing.value }, "menu_section"])}" tabindex="-1" data-v-64422c95>`);
      _push(ssrRenderComponent(TvNoiseEffect, null, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(elements, (el, index) => {
        _push(`<div class="link_holder" data-v-64422c95><div class="link_without_child" data-v-64422c95><button class="menu_link" role="button" data-v-64422c95>${ssrInterpolate(el.text)}</button></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/MenuItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MenuItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-64422c95"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(0);
    const container = ref(null);
    ref(0);
    const hasCursor = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "container",
        ref: container,
        class: "container"
      }, _attrs))}>`);
      _push(ssrRenderComponent(Animation, null, null, _parent));
      _push(ssrRenderComponent(SectionsFolder, null, null, _parent));
      _push(ssrRenderComponent(SectionBase, {
        style: "accnet_background",
        type: "skills"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(SkillContainer, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(SkillContainer)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(SectionBase, {
        style: "dark_background",
        type: "faq"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(FaqContainer, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(FaqContainer)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(SectionBase, {
        style: "white_background",
        type: "hard_skils"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(HardSkillSection, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(HardSkillSection)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(ssrRenderComponent(MenuItem, null, null, _parent));
      if (hasCursor.value) {
        _push(ssrRenderComponent(Cursor, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-WBBF2qKO.mjs.map
