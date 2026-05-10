// FILE: prototype/tokens.jsx
const CQ = {
  bg: "#F1ECDF",
  bgWarm: "#EAE3CB",
  card: "#FFFFFF",
  cardWarm: "#FAF6EA",
  ink: "#15140F",
  inkSoft: "#3F3B30",
  inkMuted: "#807A6A",
  inkFaint: "#B6AF9C",
  line: "#E4DEC9",
  lineSoft: "#EFE9D6",
  lime: "#C9F23E",
  limeSoft: "#EFFAD0",
  limeDeep: "#7FA31E",
  coral: "#FF6A3D",
  coralSoft: "#FFE2D6",
  coralDeep: "#C04220",
  blue: "#5B8DEF",
  blueSoft: "#E0EBFF",
  blueDeep: "#2F5BB7",
  violet: "#8E7BFF",
  violetSoft: "#EAE4FF",
  violetDeep: "#5C49C8",
  gold: "#E9B941",
  white: "#FFFFFF"
};
const StatusBar = ({
  fg = CQ.ink
}) => React.createElement("div", {
  className: "mono",
  style: {
    height: 44,
    padding: "16px 28px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: fg,
    fontSize: 14,
    fontWeight: 600,
    flex: "0 0 44px",
    letterSpacing: 0.2,
    position: "relative",
    zIndex: 4
  }
}, React.createElement("span", null, "9:41"), React.createElement("span", {
  style: {
    display: "flex",
    gap: 6,
    alignItems: "center",
    opacity: 0.9
  }
}, React.createElement("svg", {
  width: "17",
  height: "11",
  viewBox: "0 0 17 11",
  fill: fg
}, React.createElement("rect", {
  x: "0",
  y: "7",
  width: "3",
  height: "4",
  rx: "0.6"
}), React.createElement("rect", {
  x: "4.5",
  y: "5",
  width: "3",
  height: "6",
  rx: "0.6"
}), React.createElement("rect", {
  x: "9",
  y: "3",
  width: "3",
  height: "8",
  rx: "0.6"
}), React.createElement("rect", {
  x: "13.5",
  y: "0",
  width: "3",
  height: "11",
  rx: "0.6"
})), React.createElement("svg", {
  width: "15",
  height: "11",
  viewBox: "0 0 15 11",
  fill: "none",
  stroke: fg,
  strokeWidth: "1.4"
}, React.createElement("path", {
  d: "M1 4 Q7.5 -2 14 4",
  strokeLinecap: "round"
}), React.createElement("path", {
  d: "M3.5 6.5 Q7.5 2.5 11.5 6.5",
  strokeLinecap: "round"
}), React.createElement("circle", {
  cx: "7.5",
  cy: "9",
  r: "0.9",
  fill: fg
})), React.createElement("span", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 1
  }
}, React.createElement("span", {
  style: {
    width: 22,
    height: 11,
    borderRadius: 3,
    border: `1.2px solid ${fg}`,
    position: "relative",
    padding: 1.5
  }
}, React.createElement("span", {
  style: {
    display: "block",
    height: "100%",
    width: "82%",
    background: fg,
    borderRadius: 1
  }
})), React.createElement("span", {
  style: {
    width: 1.5,
    height: 5,
    background: fg,
    borderRadius: 1,
    marginLeft: 1
  }
}))));
const TabBar = ({
  active,
  onChange
}) => {
  const tabs = [{
    id: "home",
    label: "首页",
    icon: "home"
  }, {
    id: "map",
    label: "地图",
    icon: "map"
  }, {
    id: "play",
    label: "共玩",
    icon: "users"
  }, {
    id: "me",
    label: "徽章",
    icon: "badge"
  }];
  return React.createElement("div", {
    style: {
      flex: "0 0 auto",
      background: CQ.white,
      borderTop: `1px solid ${CQ.line}`,
      padding: "8px 12px 28px",
      display: "flex",
      justifyContent: "space-around",
      position: "relative",
      zIndex: 3
    }
  }, tabs.map(t => {
    const on = t.id === active;
    return React.createElement("button", {
      key: t.id,
      onClick: () => onChange(t.id),
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        color: on ? CQ.ink : CQ.inkFaint,
        padding: "6px 14px",
        borderRadius: 14,
        background: on ? CQ.bg : "transparent",
        transition: "all 0.18s ease"
      }
    }, React.createElement(Icon, {
      name: t.icon,
      size: 22,
      stroke: 1.7
    }), React.createElement("span", {
      style: {
        fontSize: 10,
        fontWeight: on ? 700 : 500,
        letterSpacing: 0.2
      }
    }, t.label));
  }));
};
const Phone = ({
  children,
  tab,
  onTab,
  bg = CQ.bg,
  statusFg = CQ.ink,
  hideTabBar
}) => React.createElement("div", {
  style: {
    width: "100%",
    height: "100%",
    background: bg,
    fontSize: 14,
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column"
  }
}, React.createElement(StatusBar, {
  fg: statusFg
}), React.createElement("div", {
  style: {
    flex: 1,
    minHeight: 0,
    position: "relative",
    overflow: "hidden"
  }
}, children), !hideTabBar && React.createElement(TabBar, {
  active: tab,
  onChange: onTab
}));
const Pill = ({
  children,
  bg = CQ.lime,
  fg = CQ.ink,
  style,
  className = ""
}) => React.createElement("span", {
  className: "mono " + className,
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    background: bg,
    color: fg,
    fontSize: 10,
    fontWeight: 700,
    padding: "4px 8px",
    borderRadius: 999,
    letterSpacing: 0.5,
    textTransform: "uppercase",
    lineHeight: 1,
    ...style
  }
}, children);
const Tag = ({
  children,
  fg = CQ.inkSoft,
  bg = CQ.lineSoft,
  style
}) => React.createElement("span", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    fontSize: 11,
    color: fg,
    background: bg,
    padding: "4px 8px",
    borderRadius: 6,
    fontWeight: 600,
    lineHeight: 1,
    ...style
  }
}, children);
const Bar = ({
  pct = 0.5,
  color = CQ.lime,
  track = CQ.lineSoft,
  h = 6,
  animate
}) => React.createElement("div", {
  style: {
    position: "relative",
    width: "100%",
    height: h,
    background: track,
    borderRadius: h,
    overflow: "hidden"
  }
}, React.createElement("div", {
  style: {
    position: "absolute",
    inset: 0,
    width: `${pct * 100}%`,
    background: color,
    borderRadius: h,
    transition: animate ? "width 800ms cubic-bezier(.2,.8,.2,1)" : "none"
  }
}));
const SectionHead = ({
  eyebrow,
  title,
  action,
  onAction
}) => React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 12
  }
}, React.createElement("div", null, eyebrow && React.createElement("div", {
  className: "mono",
  style: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 1.4,
    color: CQ.inkMuted,
    textTransform: "uppercase",
    marginBottom: 4
  }
}, eyebrow), React.createElement("div", {
  className: "display",
  style: {
    fontSize: 17,
    fontWeight: 700,
    color: CQ.ink
  }
}, title)), action && React.createElement("button", {
  onClick: onAction,
  className: "mono",
  style: {
    fontSize: 11,
    color: CQ.inkMuted,
    display: "flex",
    alignItems: "center",
    gap: 2,
    fontWeight: 600
  }
}, action, React.createElement(Icon, {
  name: "chev",
  size: 12
})));
const ICONS = {
  home: "M3 10l9-7 9 7v10a1 1 0 01-1 1h-5v-7h-6v7H4a1 1 0 01-1-1V10z",
  map: "M9 3v16M15 5v16M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2V6z",
  badge: "M12 2l3 5 5 1-3.5 4 1 6-5.5-3-5.5 3 1-6L4 8l5-1z",
  flame: "M12 22c4 0 7-3 7-7 0-3-2-5-3-7-1 2-3 2-3 4-1-2-2-3-2-5 0-2-1-4-2-5-2 4-4 6-4 11 0 5 3 9 7 9z",
  pin: "M12 21s-7-7-7-12a7 7 0 0114 0c0 5-7 12-7 12zm0-9a3 3 0 100-6 3 3 0 000 6z",
  walk: "M13 4a2 2 0 110 4 2 2 0 010-4zm-3 18l3-7 3 3 4 1m-9-7l-3 3-1 4m4-7l-2-3 5-3 4 4 3-1",
  bolt: "M13 2L4 14h6l-1 8 9-12h-6l1-8z",
  users: "M16 11a3 3 0 100-6 3 3 0 000 6zm-7 0a3 3 0 100-6 3 3 0 000 6zm-6 9c0-3 3-5 6-5s6 2 6 5m1 0c0-3 3-5 6-5s5 2 5 5",
  bell: "M6 18V11a6 6 0 1112 0v7l2 2H4l2-2zm4 4h4",
  chev: "M9 6l6 6-6 6",
  chevDn: "M6 9l6 6 6-6",
  chevUp: "M6 15l6-6 6 6",
  plus: "M12 5v14M5 12h14",
  back: "M15 6l-6 6 6 6",
  search: "M11 19a8 8 0 110-16 8 8 0 010 16zm6 2l-4-4",
  layers: "M12 3l9 5-9 5-9-5 9-5zm-9 9l9 5 9-5M3 16l9 5 9-5",
  clock: "M12 21a9 9 0 110-18 9 9 0 010 18zm0-14v6l4 2",
  check: "M5 13l4 4L19 7",
  star: "M12 3l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z",
  share: "M4 12v8a1 1 0 001 1h14a1 1 0 001-1v-8m-4-5l-4-4-4 4m4-4v13",
  filter: "M4 5h16M7 12h10M10 19h4",
  close: "M6 6l12 12M18 6L6 18",
  navigate: "M3 11l18-8-7 18-2-8z",
  heart: "M12 21s-7-4.5-9-10a5 5 0 019-3 5 5 0 019 3c-2 5.5-9 10-9 10z",
  trophy: "M8 4h8v3a4 4 0 11-8 0V4zM6 7H3v2a3 3 0 003 3M18 7h3v2a3 3 0 01-3 3m-9 4h6v4H9zm-2 4h10",
  compass: "M12 21a9 9 0 110-18 9 9 0 010 18zm-3-6l4-4 4-4-4 4-4 4-4 4z",
  yoga: "M12 6a2 2 0 100-4 2 2 0 000 4zm-7 6h14m-12 9l5-7 5 7m-9-9l4-3 5 3",
  sparkle: "M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3zm6 9l.7 2.1 2.1.7-2.1.7L18 18l-.7-2.5L15.2 14.8l2.1-.7L18 12z"
};
const Icon = ({
  name,
  size = 18,
  color = "currentColor",
  stroke = 1.6,
  fill = "none",
  style
}) => React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: fill,
  stroke: color,
  strokeWidth: stroke,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: style
}, React.createElement("path", {
  d: ICONS[name] || ""
}));
const AvatarStack = ({
  colors,
  size = 22,
  ring = 2,
  ringColor = CQ.white,
  extra
}) => React.createElement("div", {
  style: {
    display: "inline-flex"
  }
}, colors.map((c, i) => React.createElement("div", {
  key: i,
  style: {
    width: size,
    height: size,
    borderRadius: 999,
    background: c,
    border: `${ring}px solid ${ringColor}`,
    marginLeft: i === 0 ? 0 : -size * 0.32,
    boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "rgba(0,0,0,0.45)",
    fontSize: size * 0.36,
    fontWeight: 700
  }
}, String.fromCharCode(65 + i))), extra != null && React.createElement("div", {
  className: "mono",
  style: {
    height: size,
    minWidth: size,
    padding: "0 6px",
    borderRadius: 999,
    background: CQ.ink,
    color: CQ.white,
    border: `${ring}px solid ${ringColor}`,
    marginLeft: -size * 0.32,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 10,
    fontWeight: 700
  }
}, "+", extra));
const Card = ({
  children,
  style,
  onClick,
  padding = 14
}) => React.createElement("div", {
  onClick: onClick,
  style: {
    background: CQ.card,
    borderRadius: 14,
    padding,
    border: `1px solid ${CQ.line}`,
    transition: "transform 120ms ease, box-shadow 120ms ease",
    ...style
  }
}, children);
Object.assign(window, {
  CQ,
  StatusBar,
  TabBar,
  Phone,
  Pill,
  Tag,
  Bar,
  Icon,
  SectionHead,
  AvatarStack,
  Card
});

// FILE: prototype/cornell-map.jsx
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CornellMap = ({
  selectedId,
  onSelectPin,
  filter = "all",
  showRoute = true
}) => {
  const W = 390,
    H = 700;
  const PINS = [{
    id: "donlon",
    x: 78,
    y: 106,
    cat: "social",
    icon: "宿",
    name: "Mary Donlon",
    sub: "北区宿舍",
    n: 2,
    hot: false
  }, {
    id: "rpcc",
    x: 132,
    y: 88,
    cat: "recovery",
    icon: "食",
    name: "Robert Purcell",
    sub: "RPCC 餐厅",
    n: 1
  }, {
    id: "balch",
    x: 44,
    y: 140,
    cat: "social",
    icon: "宿",
    name: "Balch Hall",
    sub: "北区宿舍",
    n: 1
  }, {
    id: "appel",
    x: 178,
    y: 78,
    cat: "explore",
    icon: "广",
    name: "Appel Commons",
    sub: "北区中心",
    n: 2,
    hot: true
  }, {
    id: "thurston",
    x: 156,
    y: 168,
    cat: "explore",
    icon: "桥",
    name: "Thurston Bridge",
    sub: "横跨 Fall Creek",
    n: 1
  }, {
    id: "beebe",
    x: 252,
    y: 140,
    cat: "explore",
    icon: "湖",
    name: "Beebe Lake",
    sub: "环湖小径 1.6 km",
    n: 3,
    hot: true
  }, {
    id: "fuertes",
    x: 322,
    y: 160,
    cat: "explore",
    icon: "观",
    name: "Fuertes Observatory",
    sub: "夜空台",
    n: 1
  }, {
    id: "newman",
    x: 100,
    y: 220,
    cat: "train",
    icon: "健",
    name: "Helen Newman",
    sub: "健身中心 / 室内",
    n: 4
  }, {
    id: "mcgraw",
    x: 196,
    y: 326,
    cat: "explore",
    icon: "塔",
    name: "McGraw Tower",
    sub: "Arts Quad 标志",
    n: 1
  }, {
    id: "olin",
    x: 222,
    y: 296,
    cat: "recovery",
    icon: "馆",
    name: "Olin Library",
    sub: "图书馆 · 久坐回血",
    n: 2,
    hot: true
  }, {
    id: "uris",
    x: 178,
    y: 308,
    cat: "recovery",
    icon: "馆",
    name: "Uris Library",
    sub: "图书馆",
    n: 1
  }, {
    id: "goldwin",
    x: 224,
    y: 354,
    cat: "explore",
    icon: "文",
    name: "Goldwin Smith",
    sub: "文理学院",
    n: 1
  }, {
    id: "sage",
    x: 174,
    y: 354,
    cat: "explore",
    icon: "礼",
    name: "Sage Chapel",
    sub: "校园之心",
    n: 1
  }, {
    id: "hoplaza",
    x: 200,
    y: 380,
    cat: "social",
    icon: "广",
    name: "Ho Plaza",
    sub: "学生主轴线",
    n: 2
  }, {
    id: "ho-store",
    x: 222,
    y: 410,
    cat: "social",
    icon: "店",
    name: "Cornell Store",
    sub: "Cornell Store / 开放区",
    n: 1
  }, {
    id: "libeSlope",
    x: 110,
    y: 380,
    cat: "train",
    icon: "坡",
    name: "Libe Slope",
    sub: "落日斜坡 / 1.4 km 上坡",
    n: 2,
    hot: true
  }, {
    id: "westCamp",
    x: 60,
    y: 446,
    cat: "social",
    icon: "宿",
    name: "West Campus",
    sub: "House 系统 5 栋",
    n: 3
  }, {
    id: "becker",
    x: 44,
    y: 482,
    cat: "social",
    icon: "宿",
    name: "Becker House",
    sub: "西区 House",
    n: 1
  }, {
    id: "noyes",
    x: 82,
    y: 506,
    cat: "recovery",
    icon: "心",
    name: "Noyes Center",
    sub: "学生活动中心",
    n: 2
  }, {
    id: "duffield",
    x: 226,
    y: 462,
    cat: "explore",
    icon: "工",
    name: "Duffield Hall",
    sub: "Engineering 中庭",
    n: 1
  }, {
    id: "upson",
    x: 196,
    y: 488,
    cat: "train",
    icon: "工",
    name: "Upson Hall",
    sub: "工学院",
    n: 1
  }, {
    id: "phillips",
    x: 256,
    y: 484,
    cat: "train",
    icon: "工",
    name: "Phillips Hall",
    sub: "工学院",
    n: 1
  }, {
    id: "schoell",
    x: 318,
    y: 488,
    cat: "train",
    icon: "场",
    name: "Schoellkopf Field",
    sub: "主体育场 / 跑道",
    n: 5,
    hot: true
  }, {
    id: "teagle",
    x: 350,
    y: 446,
    cat: "train",
    icon: "馆",
    name: "Teagle Hall",
    sub: "游泳 / 健身",
    n: 2
  }, {
    id: "bartels",
    x: 350,
    y: 540,
    cat: "train",
    icon: "冰",
    name: "Bartels Hall",
    sub: "篮球 / 室内",
    n: 2
  }, {
    id: "agQuad",
    x: 286,
    y: 348,
    cat: "explore",
    icon: "农",
    name: "Ag Quad",
    sub: "Mann · Roberts",
    n: 2
  }, {
    id: "mann",
    x: 308,
    y: 374,
    cat: "recovery",
    icon: "馆",
    name: "Mann Library",
    sub: "图书馆 / 久坐回血",
    n: 1
  }, {
    id: "trillium",
    x: 256,
    y: 414,
    cat: "recovery",
    icon: "食",
    name: "Trillium",
    sub: "餐厅 / 集合点",
    n: 1
  }, {
    id: "cascade",
    x: 256,
    y: 580,
    cat: "explore",
    icon: "瀑",
    name: "Cascadilla Gorge",
    sub: "瀑布步道",
    n: 1
  }, {
    id: "ctown",
    x: 320,
    y: 600,
    cat: "social",
    icon: "城",
    name: "Collegetown",
    sub: "下坡街区",
    n: 2
  }];
  const visible = filter === "all" ? PINS : PINS.filter(p => p.cat === filter);
  const selected = PINS.find(p => p.id === selectedId);
  const catColor = {
    explore: CQ.lime,
    train: CQ.coral,
    recovery: CQ.blue,
    social: CQ.violet
  };
  return React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    width: "100%",
    height: "100%",
    style: {
      display: "block",
      background: "#E8E2CC"
    }
  }, React.createElement("defs", null, React.createElement("pattern", {
    id: "cqGrid",
    width: "22",
    height: "22",
    patternUnits: "userSpaceOnUse"
  }, React.createElement("path", {
    d: "M22 0H0V22",
    fill: "none",
    stroke: "#D7CFB4",
    strokeWidth: "0.5"
  })), React.createElement("pattern", {
    id: "cqTrees",
    width: "14",
    height: "14",
    patternUnits: "userSpaceOnUse"
  }, React.createElement("circle", {
    cx: "3",
    cy: "4",
    r: "1.4",
    fill: "#A9C97E",
    opacity: "0.7"
  }), React.createElement("circle", {
    cx: "9",
    cy: "9",
    r: "1.6",
    fill: "#9BBE6F",
    opacity: "0.7"
  }), React.createElement("circle", {
    cx: "12",
    cy: "2",
    r: "1.1",
    fill: "#A9C97E",
    opacity: "0.6"
  })), React.createElement("linearGradient", {
    id: "cqLake",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, React.createElement("stop", {
    offset: "0",
    stopColor: "#A6CDF1"
  }), React.createElement("stop", {
    offset: "1",
    stopColor: "#6FA4DD"
  })), React.createElement("linearGradient", {
    id: "cqLit",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "1"
  }, React.createElement("stop", {
    offset: "0",
    stopColor: "#D8F079",
    stopOpacity: "0.55"
  }), React.createElement("stop", {
    offset: "1",
    stopColor: "#C9F23E",
    stopOpacity: "0.10"
  })), React.createElement("radialGradient", {
    id: "cqGlow"
  }, React.createElement("stop", {
    offset: "0",
    stopColor: "#FFE96B",
    stopOpacity: "0.7"
  }), React.createElement("stop", {
    offset: "1",
    stopColor: "#FFE96B",
    stopOpacity: "0"
  }))), React.createElement("rect", {
    width: W,
    height: H,
    fill: "url(#cqGrid)"
  }), React.createElement("path", {
    d: `M -10 180 Q 22 270 8 380 T -8 600 L -8 ${H} L -10 ${H} Z`,
    fill: "url(#cqLake)",
    opacity: "0.92"
  }), React.createElement("text", {
    x: "6",
    y: "430",
    fontFamily: "Space Grotesk",
    fontWeight: "700",
    fontSize: "11",
    fill: "#fff",
    opacity: "0.85",
    letterSpacing: "2",
    transform: "rotate(-78, 6, 430)"
  }, "CAYUGA LAKE"), React.createElement("path", {
    d: "M -10 158 Q 60 168 110 162 Q 160 156 220 158 Q 280 162 340 152 L 400 148",
    fill: "none",
    stroke: "#5E97D2",
    strokeWidth: "9",
    strokeLinecap: "round",
    opacity: "0.55"
  }), React.createElement("path", {
    d: "M -10 158 Q 60 168 110 162 Q 160 156 220 158 Q 280 162 340 152 L 400 148",
    fill: "none",
    stroke: "#9DC4F0",
    strokeWidth: "4",
    strokeLinecap: "round"
  }), React.createElement("text", {
    x: "60",
    y: "148",
    fontFamily: "Space Grotesk",
    fontSize: "9",
    fontWeight: "700",
    fill: "#2F5BB7",
    opacity: "0.7",
    letterSpacing: "1.4"
  }, "FALL CREEK"), React.createElement("path", {
    d: "M-10 152 Q 60 162 110 156 Q 160 150 220 152 Q 280 156 340 146 L 400 142 L 400 130 L -10 130 Z",
    fill: "url(#cqTrees)",
    opacity: "0.6"
  }), React.createElement("path", {
    d: "M-10 168 Q 60 178 110 172 Q 160 166 220 168 Q 280 172 340 162 L 400 158 L 400 178 L -10 178 Z",
    fill: "url(#cqTrees)",
    opacity: "0.45"
  }), React.createElement("ellipse", {
    cx: "252",
    cy: "140",
    rx: "58",
    ry: "22",
    fill: "url(#cqLake)"
  }), React.createElement("ellipse", {
    cx: "252",
    cy: "140",
    rx: "58",
    ry: "22",
    fill: "none",
    stroke: "#3F73B8",
    strokeWidth: "1",
    opacity: "0.4"
  }), React.createElement("line", {
    x1: "312",
    y1: "138",
    x2: "320",
    y2: "148",
    stroke: "#7E6D4E",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }), React.createElement("path", {
    d: "M -10 568 Q 60 562 130 568 Q 200 575 270 580 Q 330 584 400 578",
    fill: "none",
    stroke: "#5E97D2",
    strokeWidth: "8",
    strokeLinecap: "round",
    opacity: "0.55"
  }), React.createElement("path", {
    d: "M -10 568 Q 60 562 130 568 Q 200 575 270 580 Q 330 584 400 578",
    fill: "none",
    stroke: "#9DC4F0",
    strokeWidth: "3.5",
    strokeLinecap: "round"
  }), React.createElement("path", {
    d: "M -10 562 Q 60 556 130 562 Q 200 569 270 574 Q 330 578 400 572 L 400 548 L -10 548 Z",
    fill: "url(#cqTrees)",
    opacity: "0.5"
  }), React.createElement("path", {
    d: "M -10 580 Q 60 574 130 580 Q 200 587 270 592 Q 330 596 400 590 L 400 605 L -10 605 Z",
    fill: "url(#cqTrees)",
    opacity: "0.4"
  }), React.createElement("text", {
    x: "172",
    y: "558",
    fontFamily: "Space Grotesk",
    fontSize: "9",
    fontWeight: "700",
    fill: "#2F5BB7",
    opacity: "0.7",
    letterSpacing: "1.4"
  }, "CASCADILLA GORGE"), React.createElement("ellipse", {
    cx: "200",
    cy: "350",
    rx: "120",
    ry: "80",
    fill: "url(#cqLit)"
  }), React.createElement("ellipse", {
    cx: "300",
    cy: "380",
    rx: "60",
    ry: "50",
    fill: "url(#cqLit)",
    opacity: "0.85"
  }), React.createElement("ellipse", {
    cx: "100",
    cy: "430",
    rx: "68",
    ry: "60",
    fill: "url(#cqLit)",
    opacity: "0.55"
  }), React.createElement(RoadLine, {
    d: "M 200 200 L 202 280 L 204 360 L 206 440 L 210 520 L 240 600"
  }), React.createElement(RoadLine, {
    d: "M 100 348 L 200 350 L 320 354"
  }), React.createElement(RoadLine, {
    d: "M 80 460 L 200 484 L 320 490 L 360 500"
  }), React.createElement(RoadLine, {
    d: "M 36 230 L 48 320 L 60 410 L 80 510 L 110 600"
  }), React.createElement(RoadLine, {
    d: "M 60 178 L 130 174 L 156 168 L 180 200 L 196 250"
  }), React.createElement(RoadLine, {
    d: "M 240 410 L 280 440 L 318 488 L 350 540"
  }), React.createElement(RoadLine, {
    d: "M 250 480 L 286 540 L 320 600"
  }), React.createElement(RoadLine, {
    d: "M 230 100 L 280 140 L 322 160 L 360 188"
  }), React.createElement(Quad, {
    x: "158",
    y: "294",
    w: "86",
    h: "78",
    label: "ARTS QUAD"
  }), React.createElement(Quad, {
    x: "186",
    y: "446",
    w: "80",
    h: "60",
    label: "ENG QUAD"
  }), React.createElement(Quad, {
    x: "270",
    y: "328",
    w: "68",
    h: "60",
    label: "AG QUAD"
  }), React.createElement(Quad, {
    x: "98",
    y: "80",
    w: "92",
    h: "42",
    label: "NORTH",
    small: true
  }), React.createElement("path", {
    d: "M 80 400 L 158 372 L 158 462 L 70 472 Z",
    fill: "#E8DFC1",
    stroke: "#A89C7B",
    strokeWidth: "1"
  }), React.createElement("path", {
    d: "M 80 400 L 158 372 M 90 425 L 158 405 M 100 450 L 158 438",
    fill: "none",
    stroke: "#A89C7B",
    strokeWidth: "0.7",
    strokeDasharray: "2,3",
    opacity: "0.6"
  }), React.createElement("text", {
    x: "115",
    y: "425",
    textAnchor: "middle",
    fontFamily: "Space Grotesk",
    fontWeight: "700",
    fontSize: "9",
    fill: CQ.ink,
    opacity: "0.55",
    letterSpacing: "1.2"
  }, "LIBE SLOPE"), React.createElement("g", {
    transform: "translate(290 466)"
  }, React.createElement("rect", {
    width: "60",
    height: "44",
    rx: "6",
    fill: "#D5EAB3",
    stroke: "#7FA31E",
    strokeWidth: "1.2"
  }), React.createElement("rect", {
    x: "6",
    y: "8",
    width: "48",
    height: "28",
    rx: "14",
    fill: "none",
    stroke: "#7FA31E",
    strokeWidth: "1",
    opacity: "0.7"
  }), React.createElement("rect", {
    x: "14",
    y: "14",
    width: "32",
    height: "16",
    rx: "4",
    fill: "#B8DC78",
    opacity: "0.7"
  }), React.createElement("text", {
    x: "30",
    y: "40",
    textAnchor: "middle",
    fontFamily: "Space Grotesk",
    fontWeight: "700",
    fontSize: "7",
    fill: CQ.limeDeep
  }, "SCHOELLKOPF")), [0, 1, 2, 3, 4].map(i => React.createElement("rect", {
    key: i,
    x: 28 + i * 7,
    y: 460 + i * 8,
    width: "22",
    height: "14",
    rx: "2",
    fill: "#F1ECDF",
    stroke: "#A89C7B",
    strokeWidth: "0.8",
    opacity: 0.85
  })), React.createElement("text", {
    x: "48",
    y: "450",
    fontFamily: "Space Grotesk",
    fontWeight: "700",
    fontSize: "8",
    fill: CQ.ink,
    opacity: "0.55",
    letterSpacing: "1.2"
  }, "WEST CAMPUS"), React.createElement("rect", {
    x: "56",
    y: "92",
    width: "22",
    height: "20",
    rx: "2",
    fill: "#F1ECDF",
    stroke: "#A89C7B",
    strokeWidth: "0.8"
  }), React.createElement("rect", {
    x: "82",
    y: "80",
    width: "20",
    height: "18",
    rx: "2",
    fill: "#F1ECDF",
    stroke: "#A89C7B",
    strokeWidth: "0.8"
  }), React.createElement("rect", {
    x: "106",
    y: "76",
    width: "22",
    height: "20",
    rx: "2",
    fill: "#F1ECDF",
    stroke: "#A89C7B",
    strokeWidth: "0.8"
  }), React.createElement("rect", {
    x: "132",
    y: "74",
    width: "22",
    height: "20",
    rx: "2",
    fill: "#F1ECDF",
    stroke: "#A89C7B",
    strokeWidth: "0.8"
  }), React.createElement("g", {
    opacity: "0.92"
  }, React.createElement("rect", {
    x: "298",
    y: "586",
    width: "16",
    height: "14",
    rx: "1.5",
    fill: "#F1ECDF",
    stroke: "#A89C7B",
    strokeWidth: "0.8"
  }), React.createElement("rect", {
    x: "318",
    y: "592",
    width: "16",
    height: "14",
    rx: "1.5",
    fill: "#F1ECDF",
    stroke: "#A89C7B",
    strokeWidth: "0.8"
  }), React.createElement("rect", {
    x: "338",
    y: "588",
    width: "16",
    height: "14",
    rx: "1.5",
    fill: "#F1ECDF",
    stroke: "#A89C7B",
    strokeWidth: "0.8"
  }), React.createElement("rect", {
    x: "306",
    y: "606",
    width: "16",
    height: "14",
    rx: "1.5",
    fill: "#F1ECDF",
    stroke: "#A89C7B",
    strokeWidth: "0.8"
  }), React.createElement("rect", {
    x: "326",
    y: "612",
    width: "16",
    height: "14",
    rx: "1.5",
    fill: "#F1ECDF",
    stroke: "#A89C7B",
    strokeWidth: "0.8"
  }), React.createElement("text", {
    x: "340",
    y: "582",
    textAnchor: "middle",
    fontFamily: "Space Grotesk",
    fontWeight: "700",
    fontSize: "7.5",
    fill: CQ.ink,
    opacity: "0.55",
    letterSpacing: "1"
  }, "COLLEGETOWN")), showRoute && React.createElement("g", null, React.createElement("path", {
    id: "cqRoute",
    d: "M 252 140 Q 280 130 290 150 Q 286 170 256 174 Q 226 170 220 152 Q 226 132 252 140 Z",
    fill: "none",
    stroke: CQ.coral,
    strokeWidth: "2.4",
    strokeDasharray: "5,4",
    strokeLinecap: "round"
  }, React.createElement("animate", {
    attributeName: "stroke-dashoffset",
    from: "0",
    to: "-18",
    dur: "1.6s",
    repeatCount: "indefinite"
  }))), React.createElement(Live, {
    x: 310,
    y: 477
  }), React.createElement(Live, {
    x: 300,
    y: 490,
    delay: 0.5
  }), React.createElement(Live, {
    x: 196,
    y: 326,
    delay: 1.0
  }), selected && React.createElement("circle", {
    cx: selected.x,
    cy: selected.y,
    r: "42",
    fill: "url(#cqGlow)"
  }), visible.map(p => React.createElement(Pin, _extends({
    key: p.id
  }, p, {
    color: catColor[p.cat],
    selected: p.id === selectedId,
    onClick: () => onSelectPin && onSelectPin(p.id)
  }))), React.createElement("g", {
    transform: "translate(358 84)"
  }, React.createElement("circle", {
    r: "14",
    fill: "#fff",
    opacity: "0.95",
    stroke: CQ.line,
    strokeWidth: "1"
  }), React.createElement("path", {
    d: "M 0,-7 L 4,5 L 0,2 L -4,5 Z",
    fill: CQ.coral
  }), React.createElement("text", {
    y: "-9",
    textAnchor: "middle",
    fontFamily: "JetBrains Mono",
    fontWeight: "700",
    fontSize: "8",
    fill: CQ.ink
  }, "N")), React.createElement("g", {
    transform: "translate(16 660)"
  }, React.createElement("line", {
    x1: "0",
    y1: "0",
    x2: "60",
    y2: "0",
    stroke: CQ.ink,
    strokeWidth: "1.4"
  }), React.createElement("line", {
    x1: "0",
    y1: "-3",
    x2: "0",
    y2: "3",
    stroke: CQ.ink,
    strokeWidth: "1.4"
  }), React.createElement("line", {
    x1: "60",
    y1: "-3",
    x2: "60",
    y2: "3",
    stroke: CQ.ink,
    strokeWidth: "1.4"
  }), React.createElement("text", {
    x: "30",
    y: "-6",
    textAnchor: "middle",
    fontFamily: "JetBrains Mono",
    fontWeight: "700",
    fontSize: "8",
    fill: CQ.ink
  }, "200 m")));
};
const RoadLine = ({
  d
}) => React.createElement("g", null, React.createElement("path", {
  d: d,
  fill: "none",
  stroke: "#C9BD9A",
  strokeWidth: "11",
  strokeLinecap: "round"
}), React.createElement("path", {
  d: d,
  fill: "none",
  stroke: "#EBE2C6",
  strokeWidth: "8",
  strokeLinecap: "round"
}), React.createElement("path", {
  d: d,
  fill: "none",
  stroke: "#fff",
  strokeWidth: "0.8",
  strokeDasharray: "3,5",
  opacity: "0.6"
}));
const Quad = ({
  x,
  y,
  w,
  h,
  label,
  small
}) => React.createElement("g", null, React.createElement("rect", {
  x: x,
  y: y,
  width: w,
  height: h,
  rx: "6",
  fill: "#F1ECDF",
  stroke: "#A89C7B",
  strokeWidth: "1.2"
}), React.createElement("line", {
  x1: x,
  y1: y + h / 2,
  x2: x + w,
  y2: y + h / 2,
  stroke: "#A89C7B",
  strokeWidth: "0.6",
  strokeDasharray: "2,2",
  opacity: "0.5"
}), React.createElement("line", {
  x1: x + w / 2,
  y1: y,
  x2: x + w / 2,
  y2: y + h,
  stroke: "#A89C7B",
  strokeWidth: "0.6",
  strokeDasharray: "2,2",
  opacity: "0.5"
}), React.createElement("text", {
  x: x + w / 2,
  y: y + h / 2 + 3,
  textAnchor: "middle",
  fontFamily: "Space Grotesk",
  fontWeight: "700",
  fontSize: small ? 7 : 9,
  fill: CQ.ink,
  opacity: "0.5",
  letterSpacing: "1.2"
}, label));
const Pin = ({
  x,
  y,
  color,
  icon,
  name,
  n,
  hot,
  selected,
  onClick
}) => React.createElement("g", {
  transform: `translate(${x},${y})`,
  onClick: onClick,
  style: {
    cursor: "pointer"
  }
}, hot && React.createElement("circle", {
  r: "20",
  fill: color,
  opacity: "0.22"
}, React.createElement("animate", {
  attributeName: "r",
  values: "14;26;14",
  dur: "2.2s",
  repeatCount: "indefinite"
}), React.createElement("animate", {
  attributeName: "opacity",
  values: "0.30;0.06;0.30",
  dur: "2.2s",
  repeatCount: "indefinite"
})), selected && React.createElement("circle", {
  r: "22",
  fill: "none",
  stroke: CQ.ink,
  strokeWidth: "1.5",
  strokeDasharray: "3,3"
}, React.createElement("animateTransform", {
  attributeName: "transform",
  type: "rotate",
  from: "0",
  to: "360",
  dur: "6s",
  repeatCount: "indefinite"
})), React.createElement("circle", {
  r: selected ? 16 : 14,
  fill: "#fff",
  stroke: CQ.ink,
  strokeWidth: "1.4"
}), React.createElement("circle", {
  r: selected ? 12 : 10,
  fill: color
}), React.createElement("text", {
  textAnchor: "middle",
  y: "3.5",
  fontFamily: "Space Grotesk",
  fontWeight: "700",
  fontSize: selected ? 11 : 10,
  fill: CQ.ink
}, icon), n != null && React.createElement("g", {
  transform: "translate(11,-11)"
}, React.createElement("circle", {
  r: "6.5",
  fill: CQ.ink
}), React.createElement("text", {
  textAnchor: "middle",
  y: "2.5",
  fontFamily: "JetBrains Mono",
  fontWeight: "700",
  fontSize: "8",
  fill: CQ.lime
}, n)));
const Live = ({
  x,
  y,
  delay = 0
}) => React.createElement("g", {
  transform: `translate(${x},${y})`
}, React.createElement("circle", {
  r: "3",
  fill: CQ.coral
}, React.createElement("animate", {
  attributeName: "r",
  values: "2;5;2",
  dur: "1.6s",
  begin: `${delay}s`,
  repeatCount: "indefinite"
}), React.createElement("animate", {
  attributeName: "opacity",
  values: "0.9;0.3;0.9",
  dur: "1.6s",
  begin: `${delay}s`,
  repeatCount: "indefinite"
})), React.createElement("circle", {
  r: "1.5",
  fill: CQ.coral
}));
window.CornellMap = CornellMap;

// FILE: prototype/screen-home.jsx
function ScreenHome({
  navigate,
  state,
  dispatch
}) {
  const [expanded, setExpanded] = React.useState(null);
  const tasks = [{
    id: "t1",
    cat: "explore",
    catLabel: "探索",
    color: CQ.lime,
    catColor: CQ.limeDeep,
    catBg: CQ.limeSoft,
    title: "Beebe Lake 环湖小循环",
    meta: "2.1 km · 步行/慢跑",
    reward: 45,
    sub: "触发点亮 北区 03 区域",
    icon: "walk",
    detail: "从 Thurston Bridge 顺时针绕 Beebe Lake 一圈回到起点。沿途 3 个轻打卡点。"
  }, {
    id: "t2",
    cat: "recovery",
    catLabel: "恢复",
    color: CQ.blue,
    catColor: CQ.blueDeep,
    catBg: CQ.blueSoft,
    title: "久坐回血 · Olin 出门走走",
    meta: "5 分钟轻活动",
    reward: 18,
    sub: "你已坐 92 分钟",
    icon: "clock",
    detail: "起身、伸展、绕楼一圈或去取一杯水。完成后回到 Olin 即可。"
  }, {
    id: "t3",
    cat: "social",
    catLabel: "组队",
    color: CQ.coral,
    catColor: CQ.white,
    catBg: CQ.coral,
    title: "Schoellkopf 夜跑闪电局",
    meta: "今晚 19:30 · 30 min",
    reward: 80,
    sub: "7 人已加入 · 配速随机",
    icon: "flame",
    detail: "在 Schoellkopf 田径场，30 分钟随机配速跑。完成解锁「夜行者」徽章进度。",
    featured: true
  }];
  const completed = state.completed;
  const activity = state.activity;
  const goal = 400;
  const onComplete = t => {
    if (completed.includes(t.id)) return;
    dispatch({
      type: "complete",
      task: t
    });
  };
  return React.createElement("div", {
    className: "noscroll",
    style: {
      height: "100%",
      overflowY: "auto",
      overflowX: "hidden",
      background: CQ.bg
    }
  }, React.createElement("div", {
    style: {
      padding: "10px 22px 14px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 13,
      color: CQ.inkMuted
    }
  }, "\u4E0B\u5348\u597D\uFF0C\u6BDB\u67EF\u5170"), React.createElement("div", {
    className: "display",
    style: {
      fontSize: 24,
      fontWeight: 700,
      marginTop: 2,
      letterSpacing: -0.5
    }
  }, "\u6625\u5B63 \xB7 Week 06")), React.createElement("div", {
    style: {
      display: "flex",
      gap: 14
    }
  }, React.createElement("button", null, React.createElement(Icon, {
    name: "search",
    size: 20,
    color: CQ.inkSoft
  })), React.createElement("button", {
    style: {
      position: "relative"
    }
  }, React.createElement(Icon, {
    name: "bell",
    size: 20,
    color: CQ.inkSoft
  }), React.createElement("span", {
    style: {
      position: "absolute",
      top: -2,
      right: -2,
      width: 8,
      height: 8,
      borderRadius: 999,
      background: CQ.coral,
      border: `1.5px solid ${CQ.bg}`
    }
  })))), React.createElement("div", {
    style: {
      padding: "0 22px 24px"
    }
  }, React.createElement("button", {
    onClick: () => navigate("season"),
    style: {
      width: "100%",
      textAlign: "left"
    }
  }, React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 20,
      padding: "18px 20px",
      background: `linear-gradient(135deg, ${CQ.violet} 0%, ${CQ.blue} 100%)`,
      color: CQ.white,
      overflow: "hidden",
      marginBottom: 16,
      boxShadow: "0 10px 30px rgba(94,73,200,0.25)"
    }
  }, React.createElement("div", {
    style: {
      position: "absolute",
      right: -36,
      top: -36,
      width: 160,
      height: 160,
      borderRadius: 999,
      background: "rgba(255,255,255,0.10)"
    }
  }), React.createElement("div", {
    style: {
      position: "absolute",
      right: 30,
      bottom: -60,
      width: 120,
      height: 120,
      borderRadius: 999,
      background: "rgba(255,255,255,0.08)"
    }
  }), React.createElement("div", {
    style: {
      position: "absolute",
      right: 18,
      top: 18,
      width: 56,
      height: 56
    }
  }, React.createElement("svg", {
    width: "56",
    height: "56",
    viewBox: "0 0 56 56"
  }, React.createElement("polygon", {
    points: "28,4 50,16 50,40 28,52 6,40 6,16",
    fill: "rgba(255,255,255,0.15)",
    stroke: "rgba(255,255,255,0.5)",
    strokeWidth: "1.5"
  }), React.createElement("text", {
    x: "28",
    y: "33",
    textAnchor: "middle",
    fontFamily: "Space Grotesk",
    fontWeight: "700",
    fontSize: "18",
    fill: "#fff"
  }, "S04"))), React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 12
    }
  }, React.createElement(Pill, {
    bg: "rgba(255,255,255,0.22)",
    fg: CQ.white
  }, "\u6625\u5B63\u8D5B\u5B63"), React.createElement(Pill, {
    bg: "rgba(0,0,0,0.18)",
    fg: CQ.white
  }, "\u5269 38 \u5929")), React.createElement("div", {
    className: "display",
    style: {
      fontSize: 26,
      fontWeight: 700,
      lineHeight: 1.15,
      letterSpacing: -0.6,
      maxWidth: 240
    }
  }, "\u6E56\u7554\u4E4B\u6625 \xB7 \u628A\u6821\u56ED\u8D70\u51FA\u8109\u640F"), React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 6
    }
  }, React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 10,
      opacity: 0.8,
      letterSpacing: 0.6
    }
  }, "\u8D5B\u5B63\u79EF\u5206"), React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 11,
      fontWeight: 700
    }
  }, "2,430 / 5,200")), React.createElement(Bar, {
    pct: 0.467,
    color: CQ.lime,
    track: "rgba(255,255,255,0.18)",
    h: 6
  }), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      opacity: 0.75,
      letterSpacing: 0.5,
      marginTop: 6
    }
  }, "\u4E0B\u4E00\u79F0\u53F7 \xB7 \u63A2\u7D22\u8005 III \xB7 \u8FD8\u5DEE 270 \u5206")))), React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 8,
      marginBottom: 20
    }
  }, [{
    k: "今日活力",
    v: activity,
    u: `/ ${goal}`,
    c: CQ.lime,
    ic: "bolt",
    pct: activity / goal
  }, {
    k: "连续天数",
    v: 12,
    u: "天",
    c: CQ.coral,
    ic: "flame",
    pct: 0.6
  }, {
    k: "本周协作",
    v: 3,
    u: "/ 5",
    c: CQ.blue,
    ic: "users",
    pct: 0.6
  }].map((s, i) => React.createElement(Card, {
    key: i,
    padding: 12
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 8
    }
  }, React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 9,
      color: CQ.inkMuted,
      letterSpacing: 0.6,
      textTransform: "uppercase",
      fontWeight: 700
    }
  }, s.k), React.createElement("div", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 6,
      background: s.c,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, React.createElement(Icon, {
    name: s.ic,
    size: 12,
    color: CQ.ink,
    stroke: 2
  }))), React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 3,
      marginBottom: 8
    }
  }, React.createElement("span", {
    className: "display",
    style: {
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: -0.5
    }
  }, s.v), React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 10,
      color: CQ.inkMuted
    }
  }, s.u)), React.createElement(Bar, {
    pct: Math.min(1, s.pct),
    color: s.c,
    h: 3,
    animate: true
  })))), React.createElement(SectionHead, {
    eyebrow: "TODAY \xB7 \u4ECA\u65E5\u4EFB\u52A1",
    title: "\u4E3A\u4F60\u6311\u9009\u4E86 3 \u4EF6\u5C0F\u4E8B",
    action: "\u5168\u90E8"
  }), React.createElement("div", {
    style: {
      display: "grid",
      gap: 10,
      marginBottom: 22
    }
  }, tasks.map(t => {
    const done = completed.includes(t.id);
    const isExp = expanded === t.id;
    const featured = t.featured;
    return React.createElement("div", {
      key: t.id,
      onClick: () => setExpanded(isExp ? null : t.id),
      style: {
        borderRadius: 16,
        padding: 14,
        position: "relative",
        overflow: "hidden",
        background: featured ? `linear-gradient(135deg, ${CQ.coral} 0%, #FFB05A 100%)` : CQ.card,
        color: featured ? CQ.white : CQ.ink,
        border: featured ? "none" : `1px solid ${CQ.line}`,
        boxShadow: featured ? "0 8px 24px rgba(255,106,61,0.30)" : "none",
        opacity: done ? 0.55 : 1,
        transition: "opacity 0.3s"
      }
    }, featured && React.createElement("div", {
      style: {
        position: "absolute",
        right: -26,
        top: -26,
        width: 110,
        height: 110,
        borderRadius: 999,
        background: "rgba(255,255,255,0.14)"
      }
    }), React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        alignItems: "flex-start"
      }
    }, React.createElement("div", {
      style: {
        width: 44,
        height: 44,
        borderRadius: 12,
        flex: "0 0 44px",
        background: featured ? "rgba(255,255,255,0.22)" : t.color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, React.createElement(Icon, {
      name: t.icon,
      size: 22,
      color: featured ? CQ.white : CQ.ink,
      stroke: 2
    })), React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        marginBottom: 5,
        flexWrap: "wrap"
      }
    }, React.createElement(Tag, {
      fg: t.catColor,
      bg: t.catBg
    }, t.catLabel), React.createElement(Tag, {
      fg: featured ? CQ.white : CQ.inkSoft,
      bg: featured ? "rgba(0,0,0,0.18)" : CQ.lineSoft
    }, "+", t.reward, " \u6D3B\u529B")), React.createElement("div", {
      className: "display",
      style: {
        fontWeight: 700,
        fontSize: 15,
        marginBottom: 2,
        letterSpacing: -0.2,
        textDecoration: done ? "line-through" : "none"
      }
    }, t.title), React.createElement("div", {
      style: {
        fontSize: 12,
        opacity: featured ? 0.92 : 0.7,
        color: featured ? CQ.white : CQ.inkMuted
      }
    }, t.meta, " \xB7 ", t.sub)), React.createElement(Icon, {
      name: isExp ? "chevUp" : "chevDn",
      size: 18,
      color: featured ? CQ.white : CQ.inkFaint,
      style: {
        alignSelf: "center",
        flex: "0 0 18px"
      }
    })), isExp && !done && React.createElement("div", {
      style: {
        marginTop: 12,
        paddingTop: 12,
        borderTop: featured ? "1px solid rgba(255,255,255,0.25)" : `1px solid ${CQ.line}`
      }
    }, React.createElement("div", {
      style: {
        fontSize: 12,
        lineHeight: 1.55,
        color: featured ? "rgba(255,255,255,0.92)" : CQ.inkSoft,
        marginBottom: 12
      }
    }, t.detail), featured && React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12
      }
    }, React.createElement(AvatarStack, {
      colors: [CQ.lime, CQ.violet, CQ.blue, CQ.coralDeep],
      ringColor: CQ.coral,
      extra: 3
    }), React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 10,
        opacity: 0.85
      }
    }, "10 \u4EBA\u6B63\u5728\u7B49")), React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, React.createElement("button", {
      onClick: e => {
        e.stopPropagation();
        navigate("map");
      },
      style: {
        padding: "10px 14px",
        borderRadius: 12,
        background: featured ? "rgba(0,0,0,0.18)" : CQ.lineSoft,
        color: featured ? CQ.white : CQ.ink,
        fontSize: 13,
        fontWeight: 600,
        display: "flex",
        alignItems: "center",
        gap: 4
      }
    }, React.createElement(Icon, {
      name: "map",
      size: 14
    }), "\u5728\u5730\u56FE\u4E0A\u770B"), React.createElement("button", {
      onClick: e => {
        e.stopPropagation();
        onComplete(t);
      },
      style: {
        flex: 1,
        padding: "10px 14px",
        borderRadius: 12,
        background: featured ? CQ.white : CQ.ink,
        color: featured ? CQ.coralDeep : CQ.white,
        fontSize: 13,
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 5
      }
    }, React.createElement(Icon, {
      name: "check",
      size: 14,
      stroke: 2.5
    }), featured ? "加入闪电局" : "标记完成 +" + t.reward))), done && React.createElement("div", {
      style: {
        marginTop: 10,
        display: "flex",
        alignItems: "center",
        gap: 6
      }
    }, React.createElement("div", {
      style: {
        width: 18,
        height: 18,
        borderRadius: 999,
        background: CQ.limeDeep,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, React.createElement(Icon, {
      name: "check",
      size: 12,
      color: CQ.white,
      stroke: 3
    })), React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 11,
        color: CQ.limeDeep,
        fontWeight: 700
      }
    }, "\u5DF2\u5B8C\u6210 \xB7 +", t.reward, " \u6D3B\u529B")));
  })), React.createElement(SectionHead, {
    eyebrow: "BADGES \xB7 \u8FDB\u5EA6\u4E2D",
    title: "\u5373\u5C06\u89E3\u9501",
    action: "\u5FBD\u7AE0\u5899",
    onAction: () => navigate("me")
  }), React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, [{
    n: "操场夜行者",
    p: 0.82,
    c: CQ.coral,
    glyph: "夜"
  }, {
    n: "图书馆回血",
    p: 0.55,
    c: CQ.blue,
    glyph: "回"
  }, {
    n: "湖畔探险者",
    p: 0.34,
    c: CQ.lime,
    glyph: "湖"
  }].map((b, i) => React.createElement(Card, {
    key: i,
    padding: 12,
    style: {
      flex: 1,
      textAlign: "center"
    }
  }, React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      margin: "0 auto 8px",
      position: "relative"
    }
  }, React.createElement("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40"
  }, React.createElement("polygon", {
    points: "20,3 36,11 36,29 20,37 4,29 4,11",
    fill: b.c,
    stroke: CQ.ink,
    strokeWidth: "1.4"
  })), React.createElement("div", {
    className: "display",
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 14,
      fontWeight: 700,
      color: CQ.ink
    }
  }, b.glyph)), React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      marginBottom: 6
    }
  }, b.n), React.createElement(Bar, {
    pct: b.p,
    color: b.c,
    h: 4,
    animate: true
  }), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 9,
      color: CQ.inkMuted,
      marginTop: 4,
      fontWeight: 700
    }
  }, Math.round(b.p * 100), "%"))))));
}
window.ScreenHome = ScreenHome;

// FILE: prototype/screen-map.jsx
function ScreenMap({
  navigate,
  state,
  dispatch
}) {
  const [filter, setFilter] = React.useState("all");
  const [selected, setSelected] = React.useState("libeSlope");
  const [showRoute, setShowRoute] = React.useState(true);
  const [running, setRunning] = React.useState(null);
  const [toast, setToast] = React.useState(null);
  const [view, setView] = React.useState({
    x: 0,
    y: 0,
    k: 1
  });
  const viewRef = React.useRef(view);
  viewRef.current = view;
  const filters = [{
    id: "all",
    label: "全部",
    c: CQ.ink,
    bg: CQ.ink,
    fg: CQ.white
  }, {
    id: "explore",
    label: "探索",
    c: CQ.limeDeep,
    bg: CQ.limeSoft,
    fg: CQ.limeDeep
  }, {
    id: "train",
    label: "训练",
    c: CQ.coralDeep,
    bg: CQ.coralSoft,
    fg: CQ.coralDeep
  }, {
    id: "recovery",
    label: "恢复",
    c: CQ.blueDeep,
    bg: CQ.blueSoft,
    fg: CQ.blueDeep
  }, {
    id: "social",
    label: "组队",
    c: CQ.violetDeep,
    bg: CQ.violetSoft,
    fg: CQ.violetDeep
  }];
  const SEL = {
    libeSlope: {
      tag: "训练 · 路线",
      tagBg: CQ.coralSoft,
      tagFg: CQ.coralDeep,
      title: "Libe Slope · 落日斜坡线",
      sub: "西坡 · 1.4 km · 步行约 18 分钟 · 终点 McGraw Tower",
      hot: "23 人在",
      dist: "140 m",
      reward: 60,
      dur: 18
    },
    beebe: {
      tag: "探索 · 路线",
      tagBg: CQ.limeSoft,
      tagFg: CQ.limeDeep,
      title: "Beebe Lake 环湖小循环",
      sub: "1.6 km · 步行/慢跑 · 含 3 个轻打卡点",
      hot: "9 人在",
      dist: "320 m",
      reward: 45,
      dur: 22
    },
    schoell: {
      tag: "训练 · 场地",
      tagBg: CQ.coralSoft,
      tagFg: CQ.coralDeep,
      title: "Schoellkopf Field",
      sub: "标准 400 m 跑道 · 室外 · 19:30 闪电局",
      hot: "31 人在",
      dist: "560 m",
      reward: 80,
      dur: 30
    },
    olin: {
      tag: "恢复 · 久坐",
      tagBg: CQ.blueSoft,
      tagFg: CQ.blueDeep,
      title: "Olin Library 久坐回血",
      sub: "学习累了？沿 Ho Plaza 走 5 分钟回血",
      hot: "图书馆很多人",
      dist: "80 m",
      reward: 18,
      dur: 5
    },
    uris: {
      tag: "恢复 · 久坐",
      tagBg: CQ.blueSoft,
      tagFg: CQ.blueDeep,
      title: "Uris Library 起身一下",
      sub: "下楼 · 走出 Slope 一段 · 4 分钟",
      hot: "4 人在",
      dist: "100 m",
      reward: 14,
      dur: 4
    },
    mcgraw: {
      tag: "探索 · 地标",
      tagBg: CQ.limeSoft,
      tagFg: CQ.limeDeep,
      title: "McGraw Tower 整点钟声",
      sub: "Arts Quad 中心 · 整点抵达打卡 · 听一段 chime",
      hot: "8 人在",
      dist: "60 m",
      reward: 30,
      dur: 6
    },
    newman: {
      tag: "训练 · 室内",
      tagBg: CQ.coralSoft,
      tagFg: CQ.coralDeep,
      title: "Helen Newman 健身中心",
      sub: "瑜伽 / 力量 / 团体课 · 室内不怕雨",
      hot: "12 人在",
      dist: "240 m",
      reward: 50,
      dur: 45
    },
    ctown: {
      tag: "组队 · 集合",
      tagBg: CQ.violetSoft,
      tagFg: CQ.violetDeep,
      title: "Collegetown 偶遇局",
      sub: "下坡 · 街区步行 · 适合饭后偶遇",
      hot: "5 人在",
      dist: "640 m",
      reward: 25,
      dur: 25
    },
    donlon: {
      tag: "组队 · 宿舍",
      tagBg: CQ.violetSoft,
      tagFg: CQ.violetDeep,
      title: "Mary Donlon 集体走路",
      sub: "宿舍楼下集合 · 北区慢走 1.2 km",
      hot: "3 人在",
      dist: "880 m",
      reward: 22,
      dur: 16
    },
    rpcc: {
      tag: "恢复 · 饭后",
      tagBg: CQ.blueSoft,
      tagFg: CQ.blueDeep,
      title: "RPCC 饭后散步",
      sub: "饭后 10 分钟北区小循环",
      hot: "2 人在",
      dist: "780 m",
      reward: 14,
      dur: 10
    },
    balch: {
      tag: "组队 · 宿舍",
      tagBg: CQ.violetSoft,
      tagFg: CQ.violetDeep,
      title: "Balch Hall 集合慢跑",
      sub: "下到 Thurston Bridge · 1.5 km",
      hot: "4 人在",
      dist: "920 m",
      reward: 30,
      dur: 14
    },
    appel: {
      tag: "探索 · 广场",
      tagBg: CQ.limeSoft,
      tagFg: CQ.limeDeep,
      title: "Appel Commons 围圈",
      sub: "北区中心 · 5 分钟轻活动",
      hot: "6 人在",
      dist: "820 m",
      reward: 16,
      dur: 5
    },
    thurston: {
      tag: "探索 · 桥",
      tagBg: CQ.limeSoft,
      tagFg: CQ.limeDeep,
      title: "Thurston Bridge 横跨",
      sub: "横跨 Fall Creek · 视野极好",
      hot: "11 人在",
      dist: "640 m",
      reward: 24,
      dur: 8
    },
    fuertes: {
      tag: "探索 · 夜空",
      tagBg: CQ.limeSoft,
      tagFg: CQ.limeDeep,
      title: "Fuertes 观星台",
      sub: "晚间限定 · 19:30 后开放",
      hot: "限定",
      dist: "560 m",
      reward: 40,
      dur: 30,
      limited: true
    },
    goldwin: {
      tag: "探索 · 文理",
      tagBg: CQ.limeSoft,
      tagFg: CQ.limeDeep,
      title: "Goldwin Smith 转一圈",
      sub: "Arts 文理学院走廊",
      hot: "—",
      dist: "100 m",
      reward: 12,
      dur: 4
    },
    sage: {
      tag: "探索 · 礼堂",
      tagBg: CQ.limeSoft,
      tagFg: CQ.limeDeep,
      title: "Sage Chapel 路过",
      sub: "校园之心 · 整点钟声共鸣",
      hot: "—",
      dist: "80 m",
      reward: 14,
      dur: 4
    },
    hoplaza: {
      tag: "组队 · 集合",
      tagBg: CQ.violetSoft,
      tagFg: CQ.violetDeep,
      title: "Ho Plaza 集合点",
      sub: "学生主轴线 · 偶遇局集合",
      hot: "9 人在",
      dist: "60 m",
      reward: 18,
      dur: 8
    },
    "ho-store": {
      tag: "组队 · 集合",
      tagBg: CQ.violetSoft,
      tagFg: CQ.violetDeep,
      title: "Cornell Store 门口",
      sub: "等人合适 · 5 分钟等待 = 18 活力",
      hot: "—",
      dist: "120 m",
      reward: 12,
      dur: 5
    },
    westCamp: {
      tag: "组队 · 宿舍",
      tagBg: CQ.violetSoft,
      tagFg: CQ.violetDeep,
      title: "West Campus 集合慢走",
      sub: "5 House 之间慢走 · 1.0 km",
      hot: "4 人在",
      dist: "320 m",
      reward: 24,
      dur: 12
    },
    becker: {
      tag: "组队 · House",
      tagBg: CQ.violetSoft,
      tagFg: CQ.violetDeep,
      title: "Becker House 互动局",
      sub: "House 中庭 · 团体小游戏",
      hot: "6 人在",
      dist: "360 m",
      reward: 22,
      dur: 18
    },
    noyes: {
      tag: "恢复 · 室内",
      tagBg: CQ.blueSoft,
      tagFg: CQ.blueDeep,
      title: "Noyes Center 拉伸",
      sub: "学生活动中心 · 8 分钟伸展",
      hot: "—",
      dist: "300 m",
      reward: 16,
      dur: 8
    },
    duffield: {
      tag: "探索 · 中庭",
      tagBg: CQ.limeSoft,
      tagFg: CQ.limeDeep,
      title: "Duffield Hall 中庭散步",
      sub: "Engineering 室内回廊",
      hot: "—",
      dist: "180 m",
      reward: 12,
      dur: 5
    },
    upson: {
      tag: "训练 · 楼梯",
      tagBg: CQ.coralSoft,
      tagFg: CQ.coralDeep,
      title: "Upson Hall 楼梯挑战",
      sub: "上下 4 层 · 2 分钟训练",
      hot: "—",
      dist: "200 m",
      reward: 18,
      dur: 3
    },
    phillips: {
      tag: "训练 · 楼梯",
      tagBg: CQ.coralSoft,
      tagFg: CQ.coralDeep,
      title: "Phillips Hall 上下楼",
      sub: "5 层楼梯往返",
      hot: "—",
      dist: "240 m",
      reward: 18,
      dur: 4
    },
    teagle: {
      tag: "训练 · 游泳",
      tagBg: CQ.coralSoft,
      tagFg: CQ.coralDeep,
      title: "Teagle Hall 泳池",
      sub: "标准泳池 · 30 分钟段",
      hot: "8 人在",
      dist: "640 m",
      reward: 60,
      dur: 30
    },
    bartels: {
      tag: "训练 · 篮球",
      tagBg: CQ.coralSoft,
      tagFg: CQ.coralDeep,
      title: "Bartels Hall 半场",
      sub: "半场 pickup · 6 人成团",
      hot: "9 人在",
      dist: "720 m",
      reward: 50,
      dur: 30
    },
    agQuad: {
      tag: "探索 · 草坪",
      tagBg: CQ.limeSoft,
      tagFg: CQ.limeDeep,
      title: "Ag Quad 走一圈",
      sub: "Mann · Roberts 之间慢走",
      hot: "5 人在",
      dist: "260 m",
      reward: 18,
      dur: 6
    },
    mann: {
      tag: "恢复 · 久坐",
      tagBg: CQ.blueSoft,
      tagFg: CQ.blueDeep,
      title: "Mann Library 起身",
      sub: "去阳台呼吸 · 4 分钟",
      hot: "—",
      dist: "300 m",
      reward: 14,
      dur: 4
    },
    trillium: {
      tag: "组队 · 饭后",
      tagBg: CQ.violetSoft,
      tagFg: CQ.violetDeep,
      title: "Trillium 饭后偶遇",
      sub: "餐厅门口集合 · 一起慢走",
      hot: "3 人在",
      dist: "180 m",
      reward: 16,
      dur: 8
    },
    cascade: {
      tag: "探索 · 瀑布",
      tagBg: CQ.limeSoft,
      tagFg: CQ.limeDeep,
      title: "Cascadilla 瀑布步道",
      sub: "南端 gorge 步道 · 风景路",
      hot: "7 人在",
      dist: "440 m",
      reward: 36,
      dur: 18
    }
  };
  const sel = SEL[selected] || {
    tag: "探索 · 任务",
    tagBg: CQ.limeSoft,
    tagFg: CQ.limeDeep,
    title: "校园任务",
    sub: "在地点附近完成一段 5–10 分钟的轻活动",
    hot: "可参与",
    dist: "—",
    reward: 20,
    dur: 6
  };
  const showToast = msg => {
    setToast(msg);
    setTimeout(() => setToast(null), 2200);
  };
  const mapRef = React.useRef(null);
  const pointers = React.useRef(new Map());
  const dragState = React.useRef(null);
  const pinchState = React.useRef(null);
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  const applyView = next => {
    const k = clamp(next.k, 1, 3);
    const W = 390,
      H = 700;
    const maxX = (k - 1) * W * 0.55;
    const maxY = (k - 1) * H * 0.55;
    setView({
      k,
      x: clamp(next.x, -maxX, maxX),
      y: clamp(next.y, -maxY, maxY)
    });
  };
  const onPointerDown = e => {
    if (!mapRef.current) return;
    e.target.setPointerCapture && e.target.setPointerCapture(e.pointerId);
    pointers.current.set(e.pointerId, {
      x: e.clientX,
      y: e.clientY,
      t: Date.now(),
      moved: false
    });
    if (pointers.current.size === 1) {
      const v = viewRef.current;
      dragState.current = {
        startX: e.clientX,
        startY: e.clientY,
        baseX: v.x,
        baseY: v.y,
        id: e.pointerId
      };
    } else if (pointers.current.size === 2) {
      dragState.current = null;
      const [a, b] = [...pointers.current.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      pinchState.current = {
        startDist: d,
        baseK: viewRef.current.k
      };
    }
  };
  const onPointerMove = e => {
    const p = pointers.current.get(e.pointerId);
    if (!p) return;
    p.x = e.clientX;
    p.y = e.clientY;
    if (Math.abs(p.x - (dragState.current?.startX ?? p.x)) > 4 || Math.abs(p.y - (dragState.current?.startY ?? p.y)) > 4) p.moved = true;
    if (pointers.current.size === 1 && dragState.current && dragState.current.id === e.pointerId) {
      const dx = e.clientX - dragState.current.startX;
      const dy = e.clientY - dragState.current.startY;
      applyView({
        ...viewRef.current,
        x: dragState.current.baseX + dx,
        y: dragState.current.baseY + dy
      });
    } else if (pointers.current.size === 2 && pinchState.current) {
      const [a, b] = [...pointers.current.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      const next = pinchState.current.baseK * (d / pinchState.current.startDist);
      applyView({
        ...viewRef.current,
        k: next
      });
    }
  };
  const onPointerUp = e => {
    pointers.current.delete(e.pointerId);
    if (pointers.current.size < 2) pinchState.current = null;
    if (pointers.current.size === 0) dragState.current = null;
  };
  const onWheel = e => {
    e.preventDefault();
    const factor = Math.exp(-e.deltaY * 0.0015);
    applyView({
      ...viewRef.current,
      k: viewRef.current.k * factor
    });
  };
  const zoomBy = f => applyView({
    ...viewRef.current,
    k: viewRef.current.k * f
  });
  const reset = () => setView({
    x: 0,
    y: 0,
    k: 1
  });
  const handlePinSelect = id => {
    const d = dragState.current;
    if (d) {
      const dx = Math.abs((d.lastX ?? d.startX) - d.startX);
      const dy = Math.abs((d.lastY ?? d.startY) - d.startY);
      if (dx > 5 || dy > 5) return;
    }
    setSelected(id);
  };
  return React.createElement("div", {
    style: {
      position: "relative",
      height: "100%",
      overflow: "hidden",
      background: "#E8E2CC"
    }
  }, React.createElement("div", {
    ref: mapRef,
    onPointerDown: onPointerDown,
    onPointerMove: onPointerMove,
    onPointerUp: onPointerUp,
    onPointerCancel: onPointerUp,
    onWheel: onWheel,
    style: {
      position: "absolute",
      inset: 0,
      touchAction: "none",
      cursor: pointers.current.size ? "grabbing" : "grab"
    }
  }, React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      transform: `translate(${view.x}px, ${view.y}px) scale(${view.k})`,
      transformOrigin: "50% 50%",
      transition: pointers.current.size ? "none" : "transform 200ms cubic-bezier(.2,.8,.2,1)",
      willChange: "transform"
    }
  }, React.createElement(CornellMap, {
    selectedId: selected,
    onSelectPin: handlePinSelect,
    filter: filter,
    showRoute: showRoute
  }))), React.createElement("div", {
    style: {
      position: "absolute",
      top: 10,
      left: 16,
      right: 16,
      display: "flex",
      gap: 8,
      zIndex: 4
    }
  }, React.createElement("div", {
    style: {
      flex: 1,
      background: CQ.white,
      borderRadius: 14,
      padding: "11px 14px",
      display: "flex",
      alignItems: "center",
      gap: 10,
      boxShadow: "0 6px 20px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0.06)"
    }
  }, React.createElement(Icon, {
    name: "search",
    size: 16,
    color: CQ.inkMuted,
    stroke: 2
  }), React.createElement("span", {
    style: {
      fontSize: 13,
      color: CQ.inkMuted
    }
  }, "\u641C\u7D22\u5730\u70B9 / \u4EFB\u52A1 / \u533A\u57DF")), React.createElement("button", {
    onClick: () => setShowRoute(s => !s),
    style: {
      width: 44,
      height: 44,
      borderRadius: 14,
      background: showRoute ? CQ.ink : CQ.white,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 6px 20px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0.06)"
    }
  }, React.createElement(Icon, {
    name: "layers",
    size: 18,
    color: showRoute ? CQ.lime : CQ.ink,
    stroke: 1.8
  }))), React.createElement("div", {
    className: "noscroll",
    style: {
      position: "absolute",
      top: 64,
      left: 16,
      right: 16,
      display: "flex",
      gap: 6,
      overflowX: "auto",
      zIndex: 4
    }
  }, filters.map(f => {
    const on = filter === f.id;
    return React.createElement("button", {
      key: f.id,
      onClick: () => setFilter(f.id),
      style: {
        padding: "7px 14px",
        borderRadius: 999,
        background: on ? f.bg : CQ.white,
        color: on ? f.fg : f.c,
        fontSize: 12,
        fontWeight: 700,
        boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
        flex: "0 0 auto",
        whiteSpace: "nowrap"
      }
    }, f.label);
  })), React.createElement("div", {
    style: {
      position: "absolute",
      top: 116,
      right: 16,
      zIndex: 4,
      background: CQ.white,
      borderRadius: 12,
      padding: "8px 10px",
      display: "flex",
      alignItems: "center",
      gap: 8,
      boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
      maxWidth: 175
    }
  }, React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      background: CQ.lime,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
      fontSize: 11,
      color: CQ.ink,
      fontFamily: "Space Grotesk"
    }
  }, "62%"), React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 9,
      letterSpacing: 0.6,
      color: CQ.inkMuted,
      fontWeight: 700
    }
  }, "\u672C\u8D5B\u5B63\u70B9\u4EAE"), React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: CQ.ink
    }
  }, "14 / 22 \u533A\u57DF"))), React.createElement("div", {
    style: {
      position: "absolute",
      right: 16,
      bottom: 290,
      zIndex: 4,
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, React.createElement("button", {
    onClick: () => zoomBy(1.3),
    style: {
      width: 38,
      height: 38,
      borderRadius: 12,
      background: CQ.white,
      boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, React.createElement(Icon, {
    name: "plus",
    size: 18,
    color: CQ.ink,
    stroke: 2.4
  })), React.createElement("button", {
    onClick: () => zoomBy(1 / 1.3),
    style: {
      width: 38,
      height: 38,
      borderRadius: 12,
      background: CQ.white,
      boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: CQ.ink,
    strokeWidth: 2.4,
    strokeLinecap: "round"
  }, React.createElement("path", {
    d: "M5 12h14"
  }))), React.createElement("button", {
    onClick: reset,
    style: {
      width: 38,
      height: 38,
      borderRadius: 12,
      background: CQ.white,
      boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, React.createElement(Icon, {
    name: "navigate",
    size: 16,
    color: CQ.blueDeep,
    fill: "none",
    stroke: 2
  }))), React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 5,
      background: CQ.white,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      padding: "12px 20px 22px",
      boxShadow: "0 -8px 30px rgba(0,0,0,0.14)"
    }
  }, React.createElement("div", {
    style: {
      width: 40,
      height: 4,
      background: CQ.line,
      borderRadius: 2,
      margin: "0 auto 14px"
    }
  }), React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 8,
      flexWrap: "wrap"
    }
  }, sel.hot && sel.hot !== "—" && React.createElement(Pill, {
    bg: CQ.coral,
    fg: CQ.white
  }, "HOT \xB7 ", sel.hot), React.createElement(Tag, {
    fg: sel.tagFg,
    bg: sel.tagBg
  }, sel.tag), React.createElement("span", {
    className: "mono",
    style: {
      marginLeft: "auto",
      fontSize: 11,
      color: CQ.inkMuted,
      padding: "4px 8px",
      background: CQ.lineSoft,
      borderRadius: 6,
      fontWeight: 700
    }
  }, sel.dist)), React.createElement("div", {
    className: "display",
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: CQ.ink,
      letterSpacing: -0.3
    }
  }, sel.title), React.createElement("div", {
    style: {
      fontSize: 12,
      color: CQ.inkMuted,
      marginTop: 3
    }
  }, sel.sub), React.createElement("div", {
    style: {
      marginTop: 12,
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 10px",
      background: CQ.bgWarm,
      borderRadius: 10
    }
  }, React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: CQ.coral,
      boxShadow: "0 0 0 4px rgba(255,106,61,0.18)"
    }
  }), React.createElement(AvatarStack, {
    colors: [CQ.lime, CQ.violet, CQ.blue],
    size: 20,
    ring: 1.5,
    ringColor: CQ.bgWarm,
    extra: 6
  }), React.createElement("span", {
    style: {
      fontSize: 11,
      color: CQ.inkSoft,
      marginLeft: 4
    }
  }, "\u6B63\u5728\u8FD9\u91CC\u6D3B\u52A8 \xB7 \u9884\u8BA1 ", sel.dur, " \u5206\u949F")), React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 12
    }
  }, React.createElement("button", {
    onClick: () => {
      setRunning({
        id: selected,
        startedAt: Date.now()
      });
    },
    style: {
      flex: 1,
      height: 48,
      borderRadius: 14,
      background: CQ.ink,
      color: CQ.white,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 7,
      cursor: "pointer"
    }
  }, React.createElement(Icon, {
    name: "bolt",
    size: 16,
    color: CQ.lime,
    fill: CQ.lime,
    stroke: 0
  }), React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 14
    }
  }, "\u5F00\u59CB\u4EFB\u52A1"), React.createElement(Pill, {
    bg: CQ.lime,
    fg: CQ.ink,
    style: {
      marginLeft: 4
    }
  }, "+", sel.reward)), React.createElement("button", {
    onClick: () => {
      showToast("已发起组队 · 等待加入");
      navigate("play");
    },
    style: {
      width: 48,
      height: 48,
      borderRadius: 14,
      background: CQ.lineSoft,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, React.createElement(Icon, {
    name: "users",
    size: 20,
    color: CQ.ink,
    stroke: 1.8
  })), React.createElement("button", {
    onClick: () => showToast("已分享给好友"),
    style: {
      width: 48,
      height: 48,
      borderRadius: 14,
      background: CQ.lineSoft,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, React.createElement(Icon, {
    name: "share",
    size: 18,
    color: CQ.ink,
    stroke: 1.8
  })))), running && React.createElement(RunningSheet, {
    sel: SEL[running.id] || sel,
    startedAt: running.startedAt,
    onCancel: () => {
      setRunning(null);
      showToast("任务已取消");
    },
    onComplete: () => {
      const reward = (SEL[running.id] || sel).reward;
      dispatch && dispatch({
        type: "complete-task",
        reward
      });
      setRunning(null);
      showToast(`任务完成 · +${reward} 活力`);
    }
  }), toast && React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      bottom: 240,
      transform: "translateX(-50%)",
      zIndex: 10,
      background: CQ.ink,
      color: CQ.white,
      padding: "10px 16px",
      borderRadius: 999,
      fontSize: 13,
      fontWeight: 600,
      boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
      display: "flex",
      alignItems: "center",
      gap: 8,
      animation: "cqToastIn 220ms cubic-bezier(.2,.8,.2,1)"
    }
  }, React.createElement(Icon, {
    name: "check",
    size: 14,
    color: CQ.lime,
    stroke: 3
  }), toast));
}
function RunningSheet({
  sel,
  startedAt,
  onCancel,
  onComplete
}) {
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setTick(x => x + 1), 1000);
    return () => clearInterval(t);
  }, []);
  const elapsed = (Date.now() - startedAt) / 1000;
  const total = (sel.dur || 6) * 60;
  const pct = Math.min(1, elapsed / total);
  const mm = String(Math.floor(elapsed / 60)).padStart(2, "0");
  const ss = String(Math.floor(elapsed % 60)).padStart(2, "0");
  const ready = pct >= 0.05;
  return React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 20,
      background: "rgba(15,14,11,0.55)",
      backdropFilter: "blur(6px)",
      display: "flex",
      alignItems: "flex-end"
    }
  }, React.createElement("div", {
    style: {
      width: "100%",
      background: CQ.white,
      borderTopLeftRadius: 28,
      borderTopRightRadius: 28,
      padding: "16px 22px 24px",
      boxShadow: "0 -10px 40px rgba(0,0,0,0.30)",
      animation: "cqSheetUp 280ms cubic-bezier(.2,.8,.2,1)"
    }
  }, React.createElement("div", {
    style: {
      width: 40,
      height: 4,
      background: CQ.line,
      borderRadius: 2,
      margin: "0 auto 16px"
    }
  }), React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      marginBottom: 6
    }
  }, React.createElement(Pill, {
    bg: CQ.coral,
    fg: CQ.white
  }, "LIVE \xB7 \u8FDB\u884C\u4E2D"), React.createElement(Tag, {
    fg: sel.tagFg,
    bg: sel.tagBg
  }, sel.tag)), React.createElement("div", {
    className: "display",
    style: {
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: -0.4
    }
  }, sel.title), React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18,
      margin: "20px 0 18px"
    }
  }, React.createElement("div", {
    style: {
      position: "relative",
      width: 110,
      height: 110,
      flex: "0 0 110px"
    }
  }, React.createElement("svg", {
    width: 110,
    height: 110,
    viewBox: "0 0 110 110"
  }, React.createElement("circle", {
    cx: "55",
    cy: "55",
    r: "48",
    stroke: CQ.lineSoft,
    strokeWidth: "9",
    fill: "none"
  }), React.createElement("circle", {
    cx: "55",
    cy: "55",
    r: "48",
    stroke: CQ.lime,
    strokeWidth: "9",
    fill: "none",
    strokeLinecap: "round",
    strokeDasharray: `${2 * Math.PI * 48}`,
    strokeDashoffset: `${2 * Math.PI * 48 * (1 - pct)}`,
    transform: "rotate(-90 55 55)",
    style: {
      transition: "stroke-dashoffset 1s linear"
    }
  })), React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
  }, React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: -0.4
    }
  }, mm, ":", ss), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      color: CQ.inkMuted,
      fontWeight: 700
    }
  }, "/ ", sel.dur, ":00"))), React.createElement("div", {
    style: {
      flex: 1
    }
  }, React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      color: CQ.inkMuted,
      letterSpacing: 1.2,
      fontWeight: 700,
      marginBottom: 6
    }
  }, "\u9884\u8BA1\u5956\u52B1"), React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 4
    }
  }, React.createElement("span", {
    className: "display",
    style: {
      fontSize: 28,
      fontWeight: 800,
      color: CQ.ink,
      letterSpacing: -0.6
    }
  }, "+", sel.reward), React.createElement("span", {
    style: {
      fontSize: 12,
      color: CQ.inkMuted,
      fontWeight: 600
    }
  }, "\u6D3B\u529B")), React.createElement("div", {
    style: {
      marginTop: 10,
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, React.createElement(Tag, {
    fg: CQ.violetDeep,
    bg: CQ.violetSoft
  }, "+ \u5FBD\u7AE0\u8FDB\u5EA6"), React.createElement(Tag, {
    fg: CQ.limeDeep,
    bg: CQ.limeSoft
  }, "+ \u533A\u57DF\u70B9\u4EAE")))), React.createElement("div", {
    style: {
      background: CQ.bgWarm,
      borderRadius: 12,
      padding: "10px 12px",
      marginBottom: 14
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 6
    }
  }, React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 10,
      color: CQ.inkMuted,
      fontWeight: 700,
      letterSpacing: 1
    }
  }, "\u5B9E\u65F6"), React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 10,
      color: CQ.coralDeep,
      fontWeight: 700
    }
  }, "\u25CF ", Math.floor(60 + tick * 1.4) % 80 + 70, " bpm")), React.createElement("div", {
    style: {
      display: "flex",
      gap: 2,
      alignItems: "flex-end",
      height: 22
    }
  }, Array.from({
    length: 28
  }).map((_, i) => {
    const v = 0.3 + 0.7 * Math.abs(Math.sin((i + tick) * 0.6));
    return React.createElement("div", {
      key: i,
      style: {
        flex: 1,
        height: `${v * 100}%`,
        background: i % 5 === 4 ? CQ.coral : CQ.lime,
        borderRadius: 1
      }
    });
  }))), React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, React.createElement("button", {
    onClick: onCancel,
    style: {
      flex: "0 0 auto",
      padding: "0 18px",
      height: 48,
      borderRadius: 14,
      background: CQ.lineSoft,
      color: CQ.ink,
      fontSize: 14,
      fontWeight: 700
    }
  }, "\u53D6\u6D88"), React.createElement("button", {
    onClick: onComplete,
    disabled: !ready,
    style: {
      flex: 1,
      height: 48,
      borderRadius: 14,
      background: ready ? CQ.lime : CQ.lineSoft,
      color: CQ.ink,
      fontSize: 14,
      fontWeight: 700,
      opacity: ready ? 1 : 0.7,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      cursor: ready ? "pointer" : "not-allowed"
    }
  }, React.createElement(Icon, {
    name: "check",
    size: 16,
    color: CQ.ink,
    stroke: 3
  }), ready ? "标记完成" : "继续进行中…"))));
}
window.ScreenMap = ScreenMap;

// FILE: prototype/screen-play.jsx
function ScreenPlay({
  navigate,
  state,
  dispatch
}) {
  const [joined, setJoined] = React.useState({});
  const quickJoin = [{
    id: "j1",
    t: "湖畔慢跑 · 3 km",
    loc: "Beebe Lake",
    at: "现在 · 2 人在等",
    avatars: [CQ.lime, CQ.violet],
    slots: 4,
    c: CQ.lime,
    ic: "walk",
    reward: 45
  }, {
    id: "j2",
    t: "Olin 周边走一圈",
    loc: "Olin Library",
    at: "10 分钟内 · 1 人在等",
    avatars: [CQ.blue],
    slots: 3,
    c: CQ.blue,
    ic: "clock",
    reward: 18
  }, {
    id: "j3",
    t: "Helen Newman 团瑜伽",
    loc: "Helen Newman",
    at: "15:00 · 4 人已加入",
    avatars: [CQ.coral, CQ.violet, CQ.blue, CQ.lime],
    slots: 6,
    c: CQ.coral,
    ic: "yoga",
    reward: 50
  }];
  const encounters = [{
    who: "@yuxin",
    where: "Libe Slope",
    did: "完成了「落日斜坡线」",
    t: "2 分钟前",
    c: CQ.lime,
    icon: "check"
  }, {
    who: "@donlon-304",
    where: "Helen Newman",
    did: "开了一局团体瑜伽（还差 2 人）",
    t: "5 分钟前",
    c: CQ.violet,
    icon: "users"
  }, {
    who: "12 人",
    where: "Schoellkopf",
    did: "正在环跑中",
    t: "现在",
    c: CQ.coral,
    icon: "flame"
  }, {
    who: "@maya",
    where: "Beebe Lake",
    did: "解锁了徽章「湖畔探险者」",
    t: "12 分钟前",
    c: CQ.gold,
    icon: "star"
  }, {
    who: "@aaron",
    where: "Cascadilla",
    did: "完成了「瀑布步道」",
    t: "20 分钟前",
    c: CQ.blue,
    icon: "check"
  }];
  return React.createElement("div", {
    className: "noscroll",
    style: {
      height: "100%",
      overflowY: "auto",
      background: CQ.bg
    }
  }, React.createElement("div", {
    style: {
      padding: "10px 22px 14px"
    }
  }, React.createElement("div", {
    className: "display",
    style: {
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: -0.5
    }
  }, "\u5171\u73A9"), React.createElement("div", {
    style: {
      fontSize: 13,
      color: CQ.inkMuted,
      marginTop: 2
    }
  }, "\u6821\u56ED\u91CC\u7684\u8F7B\u534F\u4F5C \xB7 \u4E34\u65F6\u7EC4\u961F \xB7 \u5076\u9047")), React.createElement("div", {
    style: {
      padding: "0 22px 24px"
    }
  }, React.createElement(SectionHead, {
    eyebrow: "QUICK JOIN \xB7 \u4E34\u65F6\u7EC4\u961F",
    title: "\u9644\u8FD1\u5C31\u80FD\u52A0\u5165",
    action: "\u5237\u65B0"
  }), React.createElement("div", {
    style: {
      display: "grid",
      gap: 10,
      marginBottom: 22
    }
  }, quickJoin.map(q => {
    const isJoined = joined[q.id];
    return React.createElement(Card, {
      key: q.id,
      padding: 14
    }, React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        alignItems: "center"
      }
    }, React.createElement("div", {
      style: {
        width: 44,
        height: 44,
        borderRadius: 12,
        background: q.c,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "0 0 44px"
      }
    }, React.createElement(Icon, {
      name: q.ic,
      size: 22,
      color: CQ.ink,
      stroke: 2
    })), React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        marginBottom: 3
      }
    }, q.t), React.createElement("div", {
      style: {
        fontSize: 12,
        color: CQ.inkMuted,
        display: "flex",
        alignItems: "center",
        gap: 4
      }
    }, React.createElement(Icon, {
      name: "pin",
      size: 11,
      stroke: 2
    }), q.loc, " \xB7 ", q.at), React.createElement("div", {
      style: {
        marginTop: 8,
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, React.createElement(AvatarStack, {
      colors: q.avatars,
      size: 20,
      ring: 1.5
    }), React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 10,
        color: CQ.inkMuted,
        fontWeight: 700
      }
    }, q.avatars.length, " / ", q.slots))), React.createElement("button", {
      onClick: () => setJoined(j => ({
        ...j,
        [q.id]: !j[q.id]
      })),
      style: {
        flex: "0 0 auto",
        padding: "9px 14px",
        borderRadius: 999,
        background: isJoined ? CQ.limeDeep : CQ.ink,
        color: isJoined ? CQ.white : CQ.white,
        fontSize: 12,
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        gap: 4
      }
    }, isJoined ? React.createElement(React.Fragment, null, React.createElement(Icon, {
      name: "check",
      size: 12,
      stroke: 3
    }), "\u5DF2\u52A0\u5165") : "加入")));
  })), React.createElement(SectionHead, {
    eyebrow: "CO-OP \xB7 \u534F\u4F5C\u4EFB\u52A1",
    title: "\u4F60\u7684\u5C0F\u96C6\u4F53"
  }), React.createElement(Card, {
    padding: 16,
    style: {
      background: CQ.cardWarm,
      marginBottom: 22
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 10
    }
  }, React.createElement("div", {
    style: {
      flex: 1
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 6
    }
  }, React.createElement(Tag, {
    fg: CQ.violetDeep,
    bg: CQ.violetSoft
  }, "\u5BBF\u820D\u96C6\u4F53"), React.createElement(Tag, {
    fg: CQ.coralDeep,
    bg: CQ.coralSoft
  }, "\u5269 3 \u5929")), React.createElement("div", {
    className: "display",
    style: {
      fontSize: 17,
      fontWeight: 700,
      letterSpacing: -0.3
    }
  }, "Mary Donlon \xB7 \u5468\u7D2F\u8BA1 50 km"), React.createElement("div", {
    style: {
      fontSize: 12,
      color: CQ.inkMuted,
      marginTop: 3
    }
  }, "\u5B8C\u6210\u89E3\u9501\u5FBD\u7AE0\u300C\u4E1C\u533A\u5171\u5EFA\u8005\u300D \xB7 23 \u4EBA\u53C2\u4E0E\u4E2D"))), React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 6
    }
  }, React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 10,
      color: CQ.inkMuted,
      fontWeight: 700,
      letterSpacing: 0.6
    }
  }, "\u5DF2\u5B8C\u6210"), React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 12,
      color: CQ.violetDeep,
      fontWeight: 700
    }
  }, "34.2 / 50 km")), React.createElement(Bar, {
    pct: 0.684,
    color: CQ.violet,
    h: 8,
    animate: true
  }), React.createElement("div", {
    style: {
      marginTop: 14,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, React.createElement(AvatarStack, {
    colors: [CQ.coral, CQ.lime, CQ.blue, CQ.violet, CQ.coralDeep],
    size: 24,
    ringColor: CQ.cardWarm,
    extra: 18
  }), React.createElement("button", {
    style: {
      padding: "8px 14px",
      borderRadius: 999,
      background: CQ.ink,
      color: CQ.white,
      fontSize: 12,
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, React.createElement(Icon, {
    name: "plus",
    size: 12,
    stroke: 3
  }), "\u8D21\u732E\u4E00\u6BB5"))), React.createElement(SectionHead, {
    eyebrow: "ENCOUNTERS \xB7 \u5076\u9047",
    title: "\u9644\u8FD1\u6B63\u5728\u53D1\u751F"
  }), React.createElement("div", {
    style: {
      background: CQ.card,
      borderRadius: 14,
      border: `1px solid ${CQ.line}`,
      overflow: "hidden"
    }
  }, encounters.map((e, i) => React.createElement("div", {
    key: i,
    style: {
      padding: "12px 14px",
      display: "flex",
      gap: 12,
      alignItems: "center",
      borderBottom: i === encounters.length - 1 ? "none" : `1px solid ${CQ.lineSoft}`
    }
  }, React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 999,
      background: e.c,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "0 0 32px"
    }
  }, React.createElement(Icon, {
    name: e.icon,
    size: 16,
    color: CQ.ink,
    stroke: 2.4
  })), React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, React.createElement("div", {
    style: {
      fontSize: 12,
      color: CQ.ink,
      lineHeight: 1.5
    }
  }, React.createElement("strong", null, e.who), React.createElement("span", {
    style: {
      color: CQ.inkMuted
    }
  }, " \u5728 "), React.createElement("strong", null, e.where), React.createElement("span", {
    style: {
      color: CQ.inkMuted
    }
  }, " ", e.did)), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 9,
      color: CQ.inkFaint,
      marginTop: 3,
      letterSpacing: 0.4,
      fontWeight: 700
    }
  }, e.t)), React.createElement("button", {
    style: {
      padding: "6px 8px"
    }
  }, React.createElement(Icon, {
    name: "heart",
    size: 16,
    color: CQ.inkFaint,
    stroke: 1.8
  })))))));
}
window.ScreenPlay = ScreenPlay;

// FILE: prototype/screen-badges.jsx
function ScreenBadges({
  navigate,
  state
}) {
  const [tab, setTab] = React.useState("wall");
  const [filter, setFilter] = React.useState("all");
  const [picked, setPicked] = React.useState(null);
  const earned = [{
    id: "b1",
    n: "操场夜行者",
    c: CQ.coral,
    g: "夜",
    s: "S04",
    rare: "稀有"
  }, {
    id: "b2",
    n: "图书馆回血",
    c: CQ.blue,
    g: "回",
    s: "S04"
  }, {
    id: "b3",
    n: "湖畔探险",
    c: CQ.lime,
    g: "湖",
    s: "S04"
  }, {
    id: "b4",
    n: "东区共建",
    c: CQ.violet,
    g: "东",
    s: "S03"
  }, {
    id: "b5",
    n: "全勤参与",
    c: CQ.coralDeep,
    g: "全",
    s: "S03"
  }, {
    id: "b6",
    n: "雨中散步",
    c: CQ.blueDeep,
    g: "雨",
    s: "S03",
    limited: true
  }, {
    id: "b7",
    n: "晨光启程",
    c: CQ.gold,
    g: "晨",
    s: "S04"
  }, {
    id: "b8",
    n: "春日步行家",
    c: CQ.limeDeep,
    g: "春",
    s: "S04"
  }, {
    id: "b9",
    n: "宿舍队长",
    c: CQ.violetDeep,
    g: "队",
    s: "S03",
    rare: "稀有"
  }];
  const locked = [{
    id: "l1",
    n: "校园探索先锋",
    g: "?",
    p: 0.78,
    c: CQ.lime,
    hint: "再点亮 3 个区域"
  }, {
    id: "l2",
    n: "300 公里",
    g: "?",
    p: 0.62,
    c: CQ.coral,
    hint: "再积累 114 km"
  }, {
    id: "l3",
    n: "凌晨四点",
    g: "?",
    p: 0.20,
    c: CQ.violet,
    hint: "在 04:00–05:00 完成 1 次活动"
  }];
  const filterChips = [{
    id: "all",
    l: `全部 · ${earned.length}`
  }, {
    id: "season",
    l: "本赛季 · 4"
  }, {
    id: "limited",
    l: "限定 · 2"
  }, {
    id: "place",
    l: "地点"
  }, {
    id: "event",
    l: "事件"
  }];
  return React.createElement("div", {
    className: "noscroll",
    style: {
      height: "100%",
      overflowY: "auto",
      background: CQ.bg
    }
  }, React.createElement("div", {
    style: {
      padding: "10px 22px 14px"
    }
  }, React.createElement("div", {
    className: "display",
    style: {
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: -0.5
    }
  }, "\u5FBD\u7AE0 & \u6863\u6848"), React.createElement("div", {
    style: {
      fontSize: 13,
      color: CQ.inkMuted,
      marginTop: 2
    }
  }, "\u4F60\u5728\u6821\u56ED\u91CC\u5199\u4E0B\u7684\u75D5\u8FF9")), React.createElement("div", {
    style: {
      padding: "0 22px 28px"
    }
  }, React.createElement("div", {
    style: {
      background: CQ.ink,
      color: CQ.white,
      borderRadius: 18,
      padding: 18,
      marginBottom: 16,
      position: "relative",
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(21,20,15,0.25)"
    }
  }, React.createElement("div", {
    style: {
      position: "absolute",
      right: -10,
      top: -28,
      fontSize: 130,
      fontFamily: "Space Grotesk",
      fontWeight: 700,
      color: CQ.lime,
      opacity: 0.15,
      lineHeight: 1
    }
  }, "S04"), React.createElement(Pill, {
    bg: CQ.lime,
    fg: CQ.ink
  }, "\u5F53\u524D\u79F0\u53F7"), React.createElement("div", {
    className: "display",
    style: {
      fontSize: 26,
      fontWeight: 700,
      marginTop: 12,
      letterSpacing: -0.5
    }
  }, "\u6E56\u7554\u63A2\u7D22\u8005 II"), React.createElement("div", {
    style: {
      fontSize: 12,
      opacity: 0.7,
      marginTop: 6,
      lineHeight: 1.5
    }
  }, "\u70B9\u4EAE 14 \u533A\u57DF \xB7 \u89E3\u9501 9 \u679A\u5FBD\u7AE0 \xB7 \u8FDE\u7EED 12 \u5929\u6D3B\u8DC3"), React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 6
    }
  }, React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 10,
      opacity: 0.7,
      fontWeight: 700,
      letterSpacing: 0.5
    }
  }, "\u4E0B\u4E00\u79F0\u53F7 \xB7 \u63A2\u7D22\u8005 III"), React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 11,
      color: CQ.lime,
      fontWeight: 700
    }
  }, "770 / 1500")), React.createElement(Bar, {
    pct: 0.513,
    color: CQ.lime,
    track: "rgba(255,255,255,0.18)",
    h: 6,
    animate: true
  }))), React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 16,
      background: CQ.lineSoft,
      padding: 4,
      borderRadius: 12
    }
  }, [{
    id: "wall",
    l: "徽章墙"
  }, {
    id: "title",
    l: "称号"
  }, {
    id: "archive",
    l: "赛季档案"
  }].map(t => React.createElement("button", {
    key: t.id,
    onClick: () => setTab(t.id),
    style: {
      flex: 1,
      padding: "9px 0",
      borderRadius: 9,
      background: tab === t.id ? CQ.white : "transparent",
      fontSize: 13,
      fontWeight: tab === t.id ? 700 : 600,
      color: tab === t.id ? CQ.ink : CQ.inkMuted,
      boxShadow: tab === t.id ? "0 1px 3px rgba(0,0,0,0.06)" : "none",
      transition: "all 0.18s"
    }
  }, t.l))), tab === "wall" && React.createElement(React.Fragment, null, React.createElement("div", {
    className: "noscroll",
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 14,
      overflowX: "auto"
    }
  }, filterChips.map(c => {
    const on = filter === c.id;
    return React.createElement("button", {
      key: c.id,
      onClick: () => setFilter(c.id),
      style: {
        fontSize: 11,
        fontWeight: 700,
        padding: "6px 12px",
        borderRadius: 999,
        background: on ? CQ.ink : CQ.white,
        color: on ? CQ.white : CQ.inkSoft,
        border: on ? "none" : `1px solid ${CQ.line}`,
        flex: "0 0 auto",
        whiteSpace: "nowrap"
      }
    }, c.l);
  })), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: 1.2,
      color: CQ.inkMuted,
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "\u5DF2\u83B7\u5F97 \xB7 9"), React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 10,
      marginBottom: 22
    }
  }, earned.map(b => React.createElement("button", {
    key: b.id,
    onClick: () => setPicked(picked === b.id ? null : b.id),
    style: {
      background: CQ.card,
      borderRadius: 14,
      padding: "14px 10px 11px",
      border: `${picked === b.id ? "2px" : "1px"} solid ${picked === b.id ? CQ.ink : CQ.line}`,
      position: "relative",
      textAlign: "center",
      transition: "all 0.18s"
    }
  }, b.limited && React.createElement("div", {
    style: {
      position: "absolute",
      top: 6,
      right: 6,
      background: CQ.coral,
      color: CQ.white,
      fontSize: 8,
      fontWeight: 700,
      padding: "2px 5px",
      borderRadius: 4,
      fontFamily: "JetBrains Mono",
      letterSpacing: 0.5
    }
  }, "\u9650\u5B9A"), b.rare && React.createElement("div", {
    style: {
      position: "absolute",
      top: 6,
      left: 6,
      background: CQ.gold,
      color: CQ.ink,
      fontSize: 8,
      fontWeight: 700,
      padding: "2px 5px",
      borderRadius: 4,
      fontFamily: "JetBrains Mono",
      letterSpacing: 0.5
    }
  }, "\u7A00"), React.createElement("div", {
    style: {
      position: "relative",
      margin: "4px auto 8px",
      width: 60,
      height: 60
    }
  }, React.createElement("svg", {
    width: "60",
    height: "60",
    viewBox: "0 0 60 60"
  }, React.createElement("polygon", {
    points: "30,4 53,17 53,43 30,56 7,43 7,17",
    fill: b.c,
    stroke: CQ.ink,
    strokeWidth: "1.5"
  }), React.createElement("polygon", {
    points: "30,11 47,21 47,39 30,49 13,39 13,21",
    fill: "none",
    stroke: CQ.ink,
    strokeWidth: "1",
    opacity: "0.20"
  })), React.createElement("div", {
    className: "display",
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 21,
      fontWeight: 700,
      color: CQ.ink
    }
  }, b.g)), React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: CQ.ink,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, b.n), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 9,
      color: CQ.inkMuted,
      marginTop: 2,
      fontWeight: 700
    }
  }, b.s)))), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: 1.2,
      color: CQ.inkMuted,
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "\u8FDB\u5EA6\u4E2D \xB7 3"), React.createElement("div", {
    style: {
      display: "grid",
      gap: 10
    }
  }, locked.map(b => React.createElement(Card, {
    key: b.id,
    padding: 14,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 11,
      background: CQ.lineSoft,
      color: CQ.inkFaint,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Space Grotesk",
      fontWeight: 700,
      fontSize: 18,
      flex: "0 0 44px",
      position: "relative"
    }
  }, React.createElement("span", {
    style: {
      filter: "blur(0.6px)"
    }
  }, b.g)), React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: CQ.ink,
      marginBottom: 3
    }
  }, b.n), React.createElement("div", {
    style: {
      fontSize: 11,
      color: CQ.inkMuted,
      marginBottom: 6
    }
  }, b.hint), React.createElement(Bar, {
    pct: b.p,
    color: b.c,
    h: 4,
    animate: true
  })), React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 12,
      color: CQ.inkSoft,
      fontWeight: 700
    }
  }, Math.round(b.p * 100), "%"))))), tab === "title" && React.createElement(React.Fragment, null, React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: 1.2,
      color: CQ.inkMuted,
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "\u672C\u8D5B\u5B63\u79F0\u53F7\u8DEF\u5F84"), React.createElement("div", {
    style: {
      display: "grid",
      gap: 10
    }
  }, [{
    l: "I · 起步者",
    pct: 1,
    done: true,
    pts: "0 → 200"
  }, {
    l: "II · 探索者",
    pct: 1,
    done: true,
    pts: "200 → 770",
    current: true,
    sub: "你现在在这里"
  }, {
    l: "III · 探索者+",
    pct: 0.51,
    pts: "770 → 1,500"
  }, {
    l: "IV · 校园行者",
    pct: 0,
    pts: "1,500 → 3,000"
  }, {
    l: "V · 季节大使",
    pct: 0,
    pts: "3,000 → 5,200",
    final: true
  }].map((s, i) => React.createElement(Card, {
    key: i,
    padding: 14,
    style: {
      border: `${s.current ? 2 : 1}px solid ${s.current ? CQ.lime : CQ.line}`,
      background: s.current ? CQ.cardWarm : CQ.card
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 999,
      background: s.done ? CQ.limeDeep : s.current ? CQ.lime : CQ.lineSoft,
      color: s.done ? CQ.white : CQ.ink,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "JetBrains Mono",
      fontWeight: 700,
      fontSize: 12
    }
  }, s.done ? React.createElement(Icon, {
    name: "check",
    size: 14,
    stroke: 3
  }) : i + 1), React.createElement("div", {
    style: {
      flex: 1
    }
  }, React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700
    }
  }, s.l), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      color: CQ.inkMuted,
      fontWeight: 700,
      marginTop: 2
    }
  }, s.pts)), s.final && React.createElement(Icon, {
    name: "trophy",
    size: 20,
    color: CQ.gold,
    stroke: 2
  })), s.pct > 0 && s.pct < 1 && React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, React.createElement(Bar, {
    pct: s.pct,
    color: CQ.lime,
    h: 4,
    animate: true
  })), s.sub && React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      color: CQ.limeDeep,
      marginTop: 8,
      fontWeight: 700,
      letterSpacing: 0.5
    }
  }, "\u2190 ", s.sub))))), tab === "archive" && React.createElement(React.Fragment, null, React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: 1.2,
      color: CQ.inkMuted,
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "\u5386\u53F2\u8D5B\u5B63 \xB7 4"), React.createElement("div", {
    style: {
      display: "grid",
      gap: 10
    }
  }, [{
    s: "S04",
    t: "湖畔之春",
    time: "进行中 · Week 06",
    pts: "2,430",
    badges: 4,
    c: CQ.lime,
    current: true
  }, {
    s: "S03",
    t: "金色之秋",
    time: "2025 秋",
    pts: "4,820",
    badges: 7,
    c: CQ.coral
  }, {
    s: "S02",
    t: "雪中之约",
    time: "2025 冬",
    pts: "3,180",
    badges: 5,
    c: CQ.blue
  }, {
    s: "S01",
    t: "起步之夏",
    time: "2025 夏",
    pts: "1,940",
    badges: 3,
    c: CQ.gold
  }].map(s => React.createElement(Card, {
    key: s.s,
    padding: 14,
    style: {
      borderLeft: `3px solid ${s.c}`,
      background: s.current ? CQ.cardWarm : CQ.card
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center",
      marginBottom: 4
    }
  }, React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: 1,
      color: s.c
    }
  }, s.s), s.current && React.createElement(Pill, {
    bg: CQ.lime,
    fg: CQ.ink
  }, "\u5F53\u524D")), React.createElement("div", {
    className: "display",
    style: {
      fontSize: 17,
      fontWeight: 700,
      letterSpacing: -0.3
    }
  }, s.t), React.createElement("div", {
    style: {
      fontSize: 11,
      color: CQ.inkMuted,
      marginTop: 2
    }
  }, s.time)), React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 18,
      fontWeight: 700,
      letterSpacing: -0.3
    }
  }, s.pts), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 9,
      color: CQ.inkMuted,
      fontWeight: 700,
      letterSpacing: 0.6
    }
  }, "POINTS"))), React.createElement("div", {
    style: {
      marginTop: 10,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      gap: 4
    }
  }, Array.from({
    length: s.badges
  }).map((_, i) => React.createElement("div", {
    key: i,
    style: {
      width: 16,
      height: 18,
      position: "relative"
    }
  }, React.createElement("svg", {
    width: "16",
    height: "18",
    viewBox: "0 0 60 60"
  }, React.createElement("polygon", {
    points: "30,4 53,17 53,43 30,56 7,43 7,17",
    fill: s.c,
    stroke: CQ.ink,
    strokeWidth: "2"
  }))))), React.createElement("button", {
    className: "mono",
    style: {
      fontSize: 11,
      color: CQ.inkSoft,
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      gap: 2
    }
  }, "\u56DE\u987E ", React.createElement(Icon, {
    name: "chev",
    size: 12
  })))))))));
}
window.ScreenBadges = ScreenBadges;

// FILE: prototype/app.jsx
function reducer(s, a) {
  switch (a.type) {
    case "complete":
      if (s.completed.includes(a.task.id)) return s;
      return {
        ...s,
        completed: [...s.completed, a.task.id],
        activity: Math.min(400, s.activity + a.task.reward),
        toast: {
          msg: `+${a.task.reward} 活力 · ${a.task.title}`,
          c: a.task.color
        }
      };
    case "complete-task":
      return {
        ...s,
        activity: Math.min(400, s.activity + (a.reward || 0)),
        toast: {
          msg: `+${a.reward} 活力 · 任务完成`,
          c: CQ.lime
        }
      };
    case "dismissToast":
      return {
        ...s,
        toast: null
      };
    default:
      return s;
  }
}
function App() {
  const [tab, setTab] = React.useState("home");
  const [state, dispatch] = React.useReducer(reducer, {
    completed: [],
    activity: 286,
    toast: null
  });
  React.useEffect(() => {
    if (!state.toast) return;
    const id = setTimeout(() => dispatch({
      type: "dismissToast"
    }), 2400);
    return () => clearTimeout(id);
  }, [state.toast]);
  const navigate = where => {
    if (where === "season") return;
    if (where === "me" || where === "map" || where === "play" || where === "home") setTab(where);
  };
  return React.createElement(Phone, {
    tab: tab,
    onTab: setTab
  }, tab === "home" && React.createElement(ScreenHome, {
    navigate: navigate,
    state: state,
    dispatch: dispatch
  }), tab === "map" && React.createElement(ScreenMap, {
    navigate: navigate,
    state: state,
    dispatch: dispatch
  }), tab === "play" && React.createElement(ScreenPlay, {
    navigate: navigate,
    state: state,
    dispatch: dispatch
  }), tab === "me" && React.createElement(ScreenBadges, {
    navigate: navigate,
    state: state
  }), state.toast && React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      right: 16,
      bottom: 100,
      background: CQ.ink,
      color: CQ.white,
      padding: "12px 14px",
      borderRadius: 14,
      display: "flex",
      alignItems: "center",
      gap: 10,
      boxShadow: "0 12px 30px rgba(0,0,0,0.30)",
      zIndex: 50,
      animation: "cqToastIn 0.32s cubic-bezier(.2,.8,.2,1)"
    }
  }, React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 8,
      background: state.toast.c,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, React.createElement(Icon, {
    name: "bolt",
    size: 16,
    color: CQ.ink,
    fill: CQ.ink,
    stroke: 0
  })), React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700
    }
  }, state.toast.msg), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      color: "rgba(255,255,255,0.6)",
      fontWeight: 700,
      letterSpacing: 0.5,
      marginTop: 1
    }
  }, "\u8D5B\u5B63\u79EF\u5206 +", Math.round((state.toast.msg.match(/\d+/) || [0])[0]))), React.createElement(Icon, {
    name: "check",
    size: 18,
    color: CQ.lime,
    stroke: 3
  })), React.createElement("style", null, `
        @keyframes cqToastIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cqSheetUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `));
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App, null));