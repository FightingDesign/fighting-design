var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop2 in b || (b = {}))
    if (__hasOwnProp.call(b, prop2))
      __defNormalProp(a, prop2, b[prop2]);
  if (__getOwnPropSymbols)
    for (var prop2 of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop2))
        __defNormalProp(a, prop2, b[prop2]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, unref, createCommentVNode, renderSlot } from "vue";
const version = "1.0.0";
const prop = {
  blob: {
    type: Boolean,
    default: () => false
  },
  round: {
    type: Boolean,
    default: () => false
  },
  fontSize: {
    type: String,
    default: () => ""
  },
  fontColor: {
    type: String,
    default: () => ""
  },
  size: {
    type: String,
    default: () => "middle",
    validator(val) {
      return [
        "large",
        "middle",
        "small",
        "mini",
        ""
      ].includes(val);
    }
  },
  block: {
    type: Boolean,
    default: () => false
  },
  link: {
    type: String,
    default: () => ""
  },
  target: {
    type: String,
    default: () => "_self",
    validator(val) {
      return [
        "_blank",
        "_self",
        "_parent",
        "_top",
        ""
      ].includes(val);
    }
  },
  loading: {
    type: Boolean,
    default: () => false
  },
  disabled: {
    type: Boolean,
    default: () => false
  },
  icon: {
    type: String,
    default: () => ""
  },
  loadingIcon: {
    type: String,
    default: () => ""
  },
  iconPosition: {
    type: String,
    default: () => "left",
    validator(val) {
      return [
        "right",
        "left",
        ""
      ].includes(val);
    }
  },
  type: {
    type: String,
    default: () => "default",
    validator(val) {
      return [
        "default",
        "primary",
        "success",
        "danger",
        "warning",
        "info",
        ""
      ].includes(val);
    }
  },
  autofocus: {
    type: Boolean,
    default: () => false
  },
  name: {
    type: String,
    default: () => "f-button"
  },
  shadow: {
    type: String,
    default: () => ""
  },
  text: {
    type: Boolean,
    default: () => false
  },
  long: {
    type: Boolean,
    default: () => false
  },
  nativeType: {
    type: String,
    default: () => "button"
  },
  simple: {
    type: Boolean,
    default: () => false
  },
  border: {
    type: Boolean,
    default: () => false
  }
};
const _hoisted_1 = ["disabled", "autofocus", "name", "type"];
const __default__ = {
  name: "FButton"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: prop,
  emits: ["click"],
  setup(__props, { emit }) {
    const props2 = __props;
    const onClick = (evt) => {
      if (props2.disabled || props2.loading)
        return;
      if (props2.link) {
        window.open(props2.link, props2.target);
      }
      emit("click", evt);
    };
    const iconClass = computed(() => {
      if (props2.loading) {
        return `${props2.loadingIcon || "f-icon-loading"} f-icon--loading`;
      }
      return props2.icon;
    });
    const isShowLeftIcon = computed(() => {
      return !!(props2.loading || props2.iconPosition === "left" && props2.icon);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass([
          "f-button",
          `f-button-${_ctx.type}`,
          {
            "f-button-round": _ctx.round,
            "f-button-block": _ctx.block,
            "f-button-disabled": _ctx.disabled || _ctx.loading,
            "f-button-simple": _ctx.simple,
            "f-button-text": _ctx.text,
            "f-button-border": _ctx.text && _ctx.border,
            [`f-button-${_ctx.size}`]: _ctx.size !== "middle"
          }
        ]),
        style: normalizeStyle([`box-shadow: ${_ctx.shadow}`]),
        disabled: _ctx.disabled || _ctx.loading,
        autofocus: _ctx.autofocus,
        name: _ctx.name,
        type: _ctx.nativeType,
        onClick
      }, [
        createElementVNode("span", {
          class: normalizeClass(["f-text", { "is-blob": _ctx.blob }]),
          style: normalizeStyle({ fontSize: _ctx.fontSize, color: _ctx.fontColor })
        }, [
          unref(isShowLeftIcon) ? (openBlock(), createElementBlock("i", {
            key: 0,
            class: normalizeClass(["f-icon", unref(iconClass)])
          }, null, 2)) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "default"),
          _ctx.iconPosition === "right" ? (openBlock(), createElementBlock("i", {
            key: 1,
            class: normalizeClass(["f-icon", _ctx.icon])
          }, null, 2)) : createCommentVNode("", true)
        ], 6)
      ], 14, _hoisted_1);
    };
  }
}));
const install$1 = (main, name) => {
  main.install = (app) => {
    app.component(name, main);
  };
};
install$1(_sfc_main$1, _sfc_main$1.name);
const props = {
  icon: {
    type: String,
    default: () => ""
  },
  fontClass: {
    type: String,
    default: () => ""
  },
  color: {
    type: String,
    default: () => ""
  },
  size: {
    type: String,
    default: () => ""
  },
  opacity: {
    type: String,
    validator(val) {
      return ["0", "0.1", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9", "1", ""].includes(val);
    },
    default: () => ""
  }
};
var _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  name: "FIcon",
  props
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("i", {
    class: normalizeClass([_ctx.fontClass || "f-icon", _ctx.icon]),
    style: normalizeStyle({ opacity: _ctx.opacity, color: _ctx.color, fontSize: _ctx.size })
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}
var FIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
install$1(FIcon, FIcon.name);
const components = [
  _sfc_main$1,
  FIcon
];
const install = (app) => {
  components.forEach((component) => {
    app.use(component);
  });
};
const fightingDesign = {
  version,
  install
};
export { _sfc_main$1 as FButton, FIcon, fightingDesign as default };
