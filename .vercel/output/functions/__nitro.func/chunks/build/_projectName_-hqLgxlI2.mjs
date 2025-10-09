import { _ as __nuxt_component_0 } from './nuxt-link-BQcXNbbZ.mjs';
import { computed, unref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { a as useRoute, b as useRouter } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue-router';

const projects = [
  {
    projectName: "project-1",
    title: "Проект 1",
    description: "Описание проекта 1. Здесь можно рассказать о том, что ты делал.",
    images: [
      "/images/project1-1.jpg",
      "/images/project1-2.jpg"
    ],
    link: "https://example.com/project1"
  },
  {
    projectName: "project-2",
    title: "Проект 2",
    description: "Описание проекта 2. Тут можно вставить пару картинок и ссылку.",
    images: [
      "/images/project2-1.jpg"
    ],
    link: "https://example.com/project2"
  }
];
const _sfc_main = {
  __name: "[projectName]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    const project = computed(
      () => projects.find((p) => p.projectName === route.params.projectName)
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (unref(project)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6" }, _attrs))}>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Закрыть`);
            } else {
              return [
                createTextVNode("Закрыть")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<h1 class="text-2xl font-bold mb-2">${ssrInterpolate(unref(project).title)}</h1><p class="mb-4">${ssrInterpolate(unref(project).description)}</p><div class="flex flex-wrap gap-4 mb-4"><!--[-->`);
        ssrRenderList(unref(project).images, (img) => {
          _push(`<img${ssrRenderAttr("src", img)} class="w-64 rounded-lg shadow"${ssrRenderAttr("alt", unref(project).title)}>`);
        });
        _push(`<!--]--></div><a${ssrRenderAttr("href", unref(project).link)} target="_blank" class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"> Перейти к проекту </a></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6" }, _attrs))}><p>Проект не найден</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "text-blue-600 hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`На главную`);
            } else {
              return [
                createTextVNode("На главную")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/[projectName].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_projectName_-hqLgxlI2.mjs.map
