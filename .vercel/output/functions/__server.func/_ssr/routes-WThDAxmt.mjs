import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ArrowUpRight, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-WThDAxmt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SKINS = {
	"white-bungalow": {
		label: "Salt bungalow",
		finish: "Salt-white clapboard, charcoal hip roof",
		image: "/homes/white-bungalow.jpg"
	},
	"mint-cottage": {
		label: "Sea-glass cottage",
		finish: "Pale aqua siding, white rail, plunge pool",
		image: "/homes/mint-cottage.jpg"
	},
	"teak-lodge": {
		label: "Teak lodge",
		finish: "Oiled teak boards, charcoal gable",
		image: "/homes/teak-lodge.jpg"
	},
	elevated: {
		label: "Screened porch",
		finish: "White siding, charcoal X-rail, raised on timber",
		image: "/homes/elevated.jpg"
	},
	"white-porch": {
		label: "Porch cottage",
		finish: "White gable, full-width teak porch",
		image: "/homes/white-porch.jpg"
	},
	"sage-loft": {
		label: "Sage loft",
		finish: "Sea-glass cube, roof terrace, steel stair",
		image: "/homes/sage-loft.jpg"
	},
	"teak-linear": {
		label: "Glass bar",
		finish: "Linear teak, full glass living wall",
		image: "/homes/teak-linear.jpg"
	},
	"teak-l": {
		label: "L-wrap",
		finish: "Teak L-plan, wrap deck, shed roof",
		image: "/homes/teak-l.jpg"
	},
	"teak-studio": {
		label: "Studio deck",
		finish: "Compact teak, glass-rail wrap deck",
		image: "/homes/teak-studio.jpg"
	},
	"tiny-loft": {
		label: "Loft cabin",
		finish: "Cedar tiny house with sleeping loft",
		image: "/homes/tiny-loft.jpg"
	}
};
function plan(id, name, w, d, beds, baths, rooms) {
	return {
		id,
		name,
		size: `${w}×${d}`,
		sqft: w * d,
		beds,
		baths,
		width: w,
		depth: d,
		rooms
	};
}
var P202639 = plan("202639", "20×40 · 2 bed, 2.5 bath", 40, 20, 2, 2.5, [
	{
		id: "m",
		label: "Master",
		x: 0,
		y: 6,
		w: 14,
		h: 14,
		kind: "room"
	},
	{
		id: "b2",
		label: "Bedroom",
		x: 0,
		y: 0,
		w: 11,
		h: 6,
		kind: "room"
	},
	{
		id: "ba",
		label: "Bath",
		x: 14,
		y: 12,
		w: 8,
		h: 8,
		kind: "wet"
	},
	{
		id: "h",
		label: "½ bath",
		x: 14,
		y: 6,
		w: 6,
		h: 6,
		kind: "wet"
	},
	{
		id: "ld",
		label: "Laundry",
		x: 20,
		y: 6,
		w: 5,
		h: 6,
		kind: "wet"
	},
	{
		id: "k",
		label: "Kitchen",
		x: 22,
		y: 0,
		w: 10,
		h: 8,
		kind: "kitchen"
	},
	{
		id: "lr",
		label: "Living",
		x: 25,
		y: 8,
		w: 15,
		h: 12,
		kind: "room"
	},
	{
		id: "dn",
		label: "Dining",
		x: 32,
		y: 0,
		w: 8,
		h: 8,
		kind: "room"
	},
	{
		id: "v",
		label: "Veranda",
		x: 40,
		y: 4,
		w: 8,
		h: 16,
		kind: "deck"
	}
]);
var P21003 = plan("21003", "20×40 · 3 bed, 2 bath", 40, 20, 3, 2, [
	{
		id: "k",
		label: "Kitchen",
		x: 0,
		y: 0,
		w: 10,
		h: 8,
		kind: "kitchen"
	},
	{
		id: "b3",
		label: "Bedroom",
		x: 10,
		y: 0,
		w: 12,
		h: 8,
		kind: "room"
	},
	{
		id: "ba",
		label: "Bath",
		x: 22,
		y: 0,
		w: 8,
		h: 8,
		kind: "wet"
	},
	{
		id: "b2",
		label: "Bedroom",
		x: 30,
		y: 0,
		w: 10,
		h: 8,
		kind: "room"
	},
	{
		id: "m",
		label: "Master",
		x: 26,
		y: 8,
		w: 14,
		h: 12,
		kind: "room"
	},
	{
		id: "ba2",
		label: "Bath",
		x: 18,
		y: 8,
		w: 8,
		h: 8,
		kind: "wet"
	},
	{
		id: "lr",
		label: "Living + dining",
		x: 0,
		y: 8,
		w: 18,
		h: 12,
		kind: "room"
	},
	{
		id: "v",
		label: "Deck",
		x: 0,
		y: 20,
		w: 20,
		h: 6,
		kind: "deck"
	}
]);
var P202638 = plan("202638", "20×40 · 2 bed, 2 bath", 40, 20, 2, 2, [
	{
		id: "b1",
		label: "Bedroom",
		x: 0,
		y: 8,
		w: 12,
		h: 12,
		kind: "room"
	},
	{
		id: "ba",
		label: "Bath",
		x: 0,
		y: 0,
		w: 8,
		h: 8,
		kind: "wet"
	},
	{
		id: "k",
		label: "Kitchen",
		x: 12,
		y: 0,
		w: 12,
		h: 8,
		kind: "kitchen"
	},
	{
		id: "lr",
		label: "Living",
		x: 12,
		y: 8,
		w: 16,
		h: 12,
		kind: "room"
	},
	{
		id: "b2",
		label: "Bedroom",
		x: 28,
		y: 8,
		w: 12,
		h: 12,
		kind: "room"
	},
	{
		id: "ba2",
		label: "Bath",
		x: 28,
		y: 0,
		w: 12,
		h: 8,
		kind: "wet"
	},
	{
		id: "v",
		label: "8×34 veranda",
		x: 6,
		y: 20,
		w: 34,
		h: 8,
		kind: "deck"
	}
]);
var P202631 = plan("202631", "20×40 · 3 bed, 2 bath", 40, 20, 3, 2, [
	{
		id: "b1",
		label: "Bedroom",
		x: 0,
		y: 0,
		w: 10,
		h: 10,
		kind: "room"
	},
	{
		id: "b2",
		label: "Bedroom",
		x: 0,
		y: 10,
		w: 10,
		h: 10,
		kind: "room"
	},
	{
		id: "ba",
		label: "Bath",
		x: 10,
		y: 0,
		w: 6,
		h: 10,
		kind: "wet"
	},
	{
		id: "k",
		label: "Kitchen",
		x: 16,
		y: 0,
		w: 10,
		h: 8,
		kind: "kitchen"
	},
	{
		id: "lr",
		label: "Living",
		x: 16,
		y: 8,
		w: 12,
		h: 12,
		kind: "room"
	},
	{
		id: "m",
		label: "Master",
		x: 28,
		y: 0,
		w: 12,
		h: 12,
		kind: "room"
	},
	{
		id: "ba2",
		label: "Bath",
		x: 28,
		y: 12,
		w: 12,
		h: 8,
		kind: "wet"
	}
]);
var P202611 = plan("202611", "20×30 · 2 bed, 1 bath", 30, 20, 2, 1, [
	{
		id: "b1",
		label: "Bedroom",
		x: 0,
		y: 0,
		w: 14,
		h: 10,
		kind: "room"
	},
	{
		id: "b2",
		label: "Bedroom",
		x: 0,
		y: 10,
		w: 10,
		h: 10,
		kind: "room"
	},
	{
		id: "c",
		label: "Closet",
		x: 14,
		y: 0,
		w: 6,
		h: 6,
		kind: "room"
	},
	{
		id: "ba",
		label: "Bath",
		x: 10,
		y: 10,
		w: 7,
		h: 10,
		kind: "wet"
	},
	{
		id: "k",
		label: "Kitchen",
		x: 20,
		y: 0,
		w: 10,
		h: 8,
		kind: "kitchen"
	},
	{
		id: "lr",
		label: "Living",
		x: 17,
		y: 8,
		w: 13,
		h: 12,
		kind: "room"
	},
	{
		id: "v",
		label: "8×20 deck",
		x: 30,
		y: 0,
		w: 8,
		h: 20,
		kind: "deck"
	}
]);
var P21009 = plan("21009", "20×30 · 3 bed, 1 bath", 30, 20, 3, 1, [
	{
		id: "b1",
		label: "Bedroom",
		x: 0,
		y: 0,
		w: 10,
		h: 10,
		kind: "room"
	},
	{
		id: "b2",
		label: "Bedroom",
		x: 0,
		y: 10,
		w: 12,
		h: 10,
		kind: "room"
	},
	{
		id: "ba",
		label: "Bath",
		x: 10,
		y: 0,
		w: 7,
		h: 10,
		kind: "wet"
	},
	{
		id: "k",
		label: "Kitchen",
		x: 17,
		y: 0,
		w: 13,
		h: 8,
		kind: "kitchen"
	},
	{
		id: "b3",
		label: "Bedroom",
		x: 12,
		y: 10,
		w: 8,
		h: 10,
		kind: "room"
	},
	{
		id: "lr",
		label: "Living",
		x: 20,
		y: 8,
		w: 10,
		h: 12,
		kind: "room"
	},
	{
		id: "v",
		label: "6×20 veranda",
		x: 30,
		y: 4,
		w: 6,
		h: 16,
		kind: "deck"
	}
]);
var P21013 = plan("21013", "20×30 · 2 bed, 1 bath", 30, 20, 2, 1, [
	{
		id: "b1",
		label: "Bedroom",
		x: 0,
		y: 0,
		w: 10,
		h: 10,
		kind: "room"
	},
	{
		id: "b2",
		label: "Bedroom",
		x: 0,
		y: 10,
		w: 12,
		h: 10,
		kind: "room"
	},
	{
		id: "ba",
		label: "Bath",
		x: 10,
		y: 0,
		w: 6,
		h: 10,
		kind: "wet"
	},
	{
		id: "k",
		label: "Kitchen",
		x: 16,
		y: 0,
		w: 14,
		h: 8,
		kind: "kitchen"
	},
	{
		id: "lr",
		label: "Living",
		x: 12,
		y: 8,
		w: 18,
		h: 12,
		kind: "room"
	},
	{
		id: "v",
		label: "6×18 veranda",
		x: 30,
		y: 2,
		w: 6,
		h: 18,
		kind: "deck"
	}
]);
var P202625 = plan("202625", "20×30 · 2 bed, 2 bath", 30, 20, 2, 2, [
	{
		id: "ba",
		label: "Bath",
		x: 0,
		y: 0,
		w: 6,
		h: 8,
		kind: "wet"
	},
	{
		id: "b1",
		label: "Bedroom",
		x: 0,
		y: 8,
		w: 9,
		h: 12,
		kind: "room"
	},
	{
		id: "k",
		label: "Kitchen",
		x: 6,
		y: 0,
		w: 12,
		h: 8,
		kind: "kitchen"
	},
	{
		id: "lr",
		label: "Living",
		x: 9,
		y: 8,
		w: 11,
		h: 12,
		kind: "room"
	},
	{
		id: "ba2",
		label: "Bath",
		x: 18,
		y: 0,
		w: 6,
		h: 8,
		kind: "wet"
	},
	{
		id: "b2",
		label: "Bedroom",
		x: 20,
		y: 8,
		w: 10,
		h: 12,
		kind: "room"
	},
	{
		id: "v",
		label: "Deck",
		x: 10,
		y: 20,
		w: 11,
		h: 4,
		kind: "deck"
	}
]);
var P202633 = plan("202633", "20×30 · 2 bed, 1 bath", 30, 20, 2, 1, [
	{
		id: "b1",
		label: "Bedroom",
		x: 0,
		y: 8,
		w: 12,
		h: 12,
		kind: "room"
	},
	{
		id: "k",
		label: "Kitchen",
		x: 8,
		y: 0,
		w: 10,
		h: 8,
		kind: "kitchen"
	},
	{
		id: "lr",
		label: "Living",
		x: 12,
		y: 8,
		w: 8,
		h: 12,
		kind: "room"
	},
	{
		id: "ba",
		label: "Bath",
		x: 18,
		y: 0,
		w: 6,
		h: 10,
		kind: "wet"
	},
	{
		id: "b2",
		label: "Bedroom",
		x: 20,
		y: 8,
		w: 10,
		h: 12,
		kind: "room"
	},
	{
		id: "v",
		label: "6×30 veranda",
		x: 0,
		y: 20,
		w: 30,
		h: 6,
		kind: "deck"
	}
]);
var P202621 = plan("202621", "20×34 · 2 bed, 1 bath", 34, 20, 2, 1, [
	{
		id: "b1",
		label: "Bedroom",
		x: 0,
		y: 0,
		w: 11,
		h: 10,
		kind: "room"
	},
	{
		id: "b2",
		label: "Bedroom",
		x: 0,
		y: 10,
		w: 12,
		h: 10,
		kind: "room"
	},
	{
		id: "ba",
		label: "Bath",
		x: 12,
		y: 8,
		w: 6,
		h: 12,
		kind: "wet"
	},
	{
		id: "ld",
		label: "Laundry",
		x: 11,
		y: 0,
		w: 7,
		h: 6,
		kind: "wet"
	},
	{
		id: "k",
		label: "Kitchen",
		x: 18,
		y: 0,
		w: 8,
		h: 8,
		kind: "kitchen"
	},
	{
		id: "lr",
		label: "Living",
		x: 18,
		y: 8,
		w: 16,
		h: 12,
		kind: "room"
	},
	{
		id: "v",
		label: "Deck",
		x: 34,
		y: 4,
		w: 8,
		h: 16,
		kind: "deck"
	}
]);
var P202613 = plan("202613", "20×34 · 2 bed, 1 bath", 34, 20, 2, 1, [
	{
		id: "m",
		label: "Bedroom",
		x: 0,
		y: 0,
		w: 12,
		h: 20,
		kind: "room"
	},
	{
		id: "ba",
		label: "Bath",
		x: 12,
		y: 0,
		w: 6,
		h: 11,
		kind: "wet"
	},
	{
		id: "k",
		label: "Kitchen",
		x: 18,
		y: 0,
		w: 16,
		h: 8,
		kind: "kitchen"
	},
	{
		id: "b2",
		label: "Bedroom",
		x: 25,
		y: 8,
		w: 9,
		h: 12,
		kind: "room"
	},
	{
		id: "lr",
		label: "Living",
		x: 12,
		y: 11,
		w: 13,
		h: 9,
		kind: "room"
	},
	{
		id: "v",
		label: "Deck",
		x: 8,
		y: 20,
		w: 20,
		h: 8,
		kind: "deck"
	}
]);
var P202636 = plan("202636", "20×34 · 2 bed, 2 bath", 34, 20, 2, 2, [
	{
		id: "b1",
		label: "Bedroom",
		x: 0,
		y: 0,
		w: 14,
		h: 10,
		kind: "room"
	},
	{
		id: "ba",
		label: "Bath",
		x: 14,
		y: 0,
		w: 5,
		h: 10,
		kind: "wet"
	},
	{
		id: "b2",
		label: "Bedroom",
		x: 0,
		y: 10,
		w: 11,
		h: 10,
		kind: "room"
	},
	{
		id: "ba2",
		label: "Bath",
		x: 0,
		y: 14,
		w: 6,
		h: 6,
		kind: "wet"
	},
	{
		id: "lr",
		label: "Living",
		x: 11,
		y: 10,
		w: 14,
		h: 10,
		kind: "room"
	},
	{
		id: "k",
		label: "Kitchen",
		x: 19,
		y: 0,
		w: 15,
		h: 10,
		kind: "kitchen"
	},
	{
		id: "v",
		label: "6×20 veranda",
		x: 34,
		y: 2,
		w: 6,
		h: 18,
		kind: "deck"
	}
]);
var P202629 = plan("202629", "16×24 · 1 bed, 1 bath", 24, 16, 1, 1, [
	{
		id: "b",
		label: "Bedroom",
		x: 0,
		y: 0,
		w: 10,
		h: 10,
		kind: "room"
	},
	{
		id: "ba",
		label: "Bath",
		x: 0,
		y: 10,
		w: 10,
		h: 6,
		kind: "wet"
	},
	{
		id: "k",
		label: "Kitchen + living",
		x: 10,
		y: 0,
		w: 14,
		h: 16,
		kind: "kitchen"
	},
	{
		id: "v",
		label: "6×16 veranda",
		x: 24,
		y: 0,
		w: 6,
		h: 16,
		kind: "deck"
	}
]);
var P202627 = plan("202627", "16×24 · 2 bed, 1 bath", 24, 16, 2, 1, [
	{
		id: "b1",
		label: "Bedroom",
		x: 0,
		y: 0,
		w: 8,
		h: 8,
		kind: "room"
	},
	{
		id: "ba",
		label: "Bath",
		x: 8,
		y: 0,
		w: 5,
		h: 8,
		kind: "wet"
	},
	{
		id: "k",
		label: "Kitchen",
		x: 13,
		y: 0,
		w: 11,
		h: 8,
		kind: "kitchen"
	},
	{
		id: "b2",
		label: "Bedroom",
		x: 0,
		y: 8,
		w: 8,
		h: 8,
		kind: "room"
	},
	{
		id: "lr",
		label: "Living",
		x: 8,
		y: 8,
		w: 16,
		h: 8,
		kind: "room"
	},
	{
		id: "v",
		label: "Deck",
		x: 24,
		y: 2,
		w: 6,
		h: 14,
		kind: "deck"
	}
]);
var P202630 = plan("202630", "16×16 studio", 16, 16, 0, 1, [
	{
		id: "ba",
		label: "Bath",
		x: 0,
		y: 0,
		w: 6,
		h: 8,
		kind: "wet"
	},
	{
		id: "k",
		label: "Kitchenette",
		x: 0,
		y: 8,
		w: 6,
		h: 8,
		kind: "kitchen"
	},
	{
		id: "lr",
		label: "Studio",
		x: 6,
		y: 0,
		w: 10,
		h: 16,
		kind: "room"
	},
	{
		id: "v",
		label: "4×14 veranda",
		x: 2,
		y: 16,
		w: 14,
		h: 4,
		kind: "deck"
	}
]);
var P21030 = plan("21030", "16×20 · 1 bed, 1 bath", 20, 16, 1, 1, [
	{
		id: "ba",
		label: "Bath",
		x: 0,
		y: 0,
		w: 9,
		h: 6,
		kind: "wet"
	},
	{
		id: "b",
		label: "Bedroom",
		x: 0,
		y: 6,
		w: 9,
		h: 10,
		kind: "room"
	},
	{
		id: "k",
		label: "Kitchen + living",
		x: 9,
		y: 0,
		w: 11,
		h: 16,
		kind: "kitchen"
	},
	{
		id: "v",
		label: "6×16 veranda",
		x: 20,
		y: 0,
		w: 6,
		h: 16,
		kind: "deck"
	}
]);
var P21026 = plan("21026", "16×20 studio", 20, 16, 0, 1, [
	{
		id: "k",
		label: "Kitchen",
		x: 0,
		y: 0,
		w: 8,
		h: 8,
		kind: "kitchen"
	},
	{
		id: "ba",
		label: "Bath",
		x: 0,
		y: 8,
		w: 7,
		h: 8,
		kind: "wet"
	},
	{
		id: "lr",
		label: "Studio",
		x: 8,
		y: 0,
		w: 12,
		h: 16,
		kind: "room"
	},
	{
		id: "v",
		label: "6×16 veranda",
		x: 20,
		y: 0,
		w: 6,
		h: 16,
		kind: "deck"
	}
]);
var P202620 = plan("202620", "20×20 · 1 bed, 1 bath", 20, 20, 1, 1, [
	{
		id: "k",
		label: "Kitchen",
		x: 0,
		y: 6,
		w: 10,
		h: 14,
		kind: "kitchen"
	},
	{
		id: "b",
		label: "Bedroom",
		x: 10,
		y: 0,
		w: 10,
		h: 12,
		kind: "room"
	},
	{
		id: "ba",
		label: "Bath",
		x: 10,
		y: 12,
		w: 10,
		h: 8,
		kind: "wet"
	},
	{
		id: "v",
		label: "6×20 veranda",
		x: 0,
		y: 0,
		w: 10,
		h: 6,
		kind: "deck"
	}
]);
var P202634 = plan("202634", "14×20 studio", 20, 14, 0, 1, [
	{
		id: "k",
		label: "Kitchen",
		x: 0,
		y: 0,
		w: 8,
		h: 8,
		kind: "kitchen"
	},
	{
		id: "ba",
		label: "Bath",
		x: 0,
		y: 8,
		w: 6,
		h: 6,
		kind: "wet"
	},
	{
		id: "lr",
		label: "Studio",
		x: 8,
		y: 0,
		w: 12,
		h: 14,
		kind: "room"
	},
	{
		id: "v",
		label: "6×12 veranda",
		x: 8,
		y: 14,
		w: 12,
		h: 6,
		kind: "deck"
	}
]);
var P202623 = plan("202623", "16×20 · 1 bed, 1 bath", 20, 16, 1, 1, [
	{
		id: "b",
		label: "Bedroom",
		x: 0,
		y: 0,
		w: 11,
		h: 9,
		kind: "room"
	},
	{
		id: "ba",
		label: "Bath",
		x: 11,
		y: 0,
		w: 9,
		h: 7,
		kind: "room"
	},
	{
		id: "k",
		label: "Kitchen + living",
		x: 0,
		y: 9,
		w: 20,
		h: 7,
		kind: "kitchen"
	},
	{
		id: "v",
		label: "Deck",
		x: 0,
		y: 16,
		w: 20,
		h: 4,
		kind: "deck"
	}
]);
var P202622 = plan("202622", "14×16 loft cabin", 16, 14, 1, 1, [
	{
		id: "ba",
		label: "Bath",
		x: 0,
		y: 0,
		w: 6,
		h: 6,
		kind: "wet"
	},
	{
		id: "k",
		label: "Kitchen",
		x: 6,
		y: 0,
		w: 10,
		h: 6,
		kind: "kitchen"
	},
	{
		id: "lr",
		label: "Living",
		x: 0,
		y: 6,
		w: 16,
		h: 8,
		kind: "room"
	},
	{
		id: "v",
		label: "Deck",
		x: 0,
		y: 14,
		w: 16,
		h: 4,
		kind: "deck"
	}
]);
var P21012 = plan("21012", "20×30 · 2 bed, 1 bath", 30, 20, 2, 1, [
	{
		id: "b1",
		label: "Bedroom",
		x: 0,
		y: 0,
		w: 12,
		h: 12,
		kind: "room"
	},
	{
		id: "b2",
		label: "Bedroom",
		x: 0,
		y: 12,
		w: 8,
		h: 8,
		kind: "room"
	},
	{
		id: "ba",
		label: "Bath",
		x: 12,
		y: 0,
		w: 6,
		h: 8,
		kind: "wet"
	},
	{
		id: "k",
		label: "Kitchen",
		x: 18,
		y: 0,
		w: 12,
		h: 8,
		kind: "kitchen"
	},
	{
		id: "lr",
		label: "Living",
		x: 8,
		y: 8,
		w: 22,
		h: 12,
		kind: "room"
	},
	{
		id: "v",
		label: "8×12 veranda",
		x: 30,
		y: 8,
		w: 8,
		h: 12,
		kind: "deck"
	}
]);
var P202628 = plan("202628", "20×30 · 3 bed, 1 bath", 30, 20, 3, 1, [
	{
		id: "b1",
		label: "Bedroom",
		x: 0,
		y: 0,
		w: 10,
		h: 10,
		kind: "room"
	},
	{
		id: "b2",
		label: "Bedroom",
		x: 0,
		y: 10,
		w: 10,
		h: 10,
		kind: "room"
	},
	{
		id: "ba",
		label: "Bath",
		x: 10,
		y: 0,
		w: 7,
		h: 10,
		kind: "wet"
	},
	{
		id: "b3",
		label: "Bedroom",
		x: 17,
		y: 0,
		w: 13,
		h: 10,
		kind: "room"
	},
	{
		id: "k",
		label: "Kitchen",
		x: 10,
		y: 10,
		w: 10,
		h: 10,
		kind: "kitchen"
	},
	{
		id: "lr",
		label: "Living",
		x: 20,
		y: 10,
		w: 10,
		h: 10,
		kind: "room"
	},
	{
		id: "v",
		label: "6×20 veranda",
		x: 30,
		y: 4,
		w: 6,
		h: 16,
		kind: "deck"
	}
]);
function home(lot, band, p, skin, price, note) {
	return {
		lot,
		band,
		plan: p,
		skin,
		title: SKINS[skin].label,
		price,
		note
	};
}
var HOMES = [
	home(196, "beach", P202639, "white-bungalow", 248e3, "Full-width teak veranda facing the bay."),
	home(197, "beach", P21003, "mint-cottage", 252e3, "Sea-glass cottage with a small plunge pool."),
	home(198, "beach", P202638, "teak-lodge", 246e3, "Oiled teak lodge, 8×34 veranda to the sand."),
	home(199, "beach", P202631, "elevated", 255e3, "Raised screened porch, twin stairs to the beach."),
	home(103, "canal", P202611, "white-porch", 198e3, "400 sq ft teak deck at the 5 ft canal bank."),
	home(104, "canal", P21009, "teak-lodge", 212e3, "Three-bed lodge, kayak steps to the water."),
	home(105, "canal", P202628, "sage-loft", 218e3, "Sage cube with a roof terrace over the canal."),
	home(106, "canal", P21013, "teak-linear", 205e3, "Glass living wall, deck almost at the water."),
	home(107, "canal", P202625, "teak-l", 216e3, "L-wrap deck facing the inland canal."),
	home(108, "canal-value", P202633, "white-bungalow", 199e3, "400 sq ft canal deck, salt-white bungalow."),
	home(109, "canal-value", P21012, "teak-lodge", 208e3, "Kayak walkway down the 5 ft bank."),
	home(110, "canal-value", P202611, "mint-cottage", 196e3, "Sea-glass skin, same bulk FF&E kit."),
	home(111, "canal-value", P21009, "sage-loft", 214e3, "Two-level cube on the far canal."),
	home(112, "canal-value", P202630, "teak-studio", 188e3, "Studio with wrap deck at the bank."),
	home(113, "canal-value", P21013, "teak-linear", 205e3, "Linear teak, canal-end glass."),
	home(114, "canal-value", P202625, "teak-l", 21e4, "L-plan, last lot on the inland canal."),
	home(234, "park", P202621, "white-bungalow", 228e3, "Park street, 20×34 salt bungalow."),
	home(235, "park", P202613, "teak-lodge", 232e3, "Teak lodge facing the interior street."),
	home(236, "park", P202636, "mint-cottage", 236e3, "Two-bath sea-glass cottage."),
	home(237, "park", P202621, "elevated", 238e3, "Raised screened porch on park street."),
	home(238, "park", P202613, "white-porch", 226e3, "White porch cottage, 20×34."),
	home(239, "park", P202636, "teak-linear", 234e3, "Glass-bar living wall on the park row."),
	home(241, "street", P202629, "white-porch", 186e3, "One-bed porch cottage, street view."),
	home(252, "street", P202627, "mint-cottage", 192e3, "Two-bed 16×24, sea-glass skin."),
	home(253, "street", P202630, "teak-studio", 182e3, "16×16 studio, wrap deck."),
	home(254, "street", P21030, "white-bungalow", 188e3, "16×20 one-bed bungalow."),
	home(255, "street", P21026, "teak-linear", 19e4, "Studio-style 16×20, teak glass."),
	home(256, "street", P202620, "teak-lodge", 194e3, "20×20 one-bed lodge."),
	home(257, "street", P202634, "teak-l", 184e3, "14×20 studio, L-deck."),
	home(258, "street", P202623, "sage-loft", 189e3, "16×20 one-bed, sage cube skin."),
	home(259, "street", P202622, "tiny-loft", 18e4, "14×16 loft cabin, smallest on the street."),
	home(330, "gate", P202611, "white-bungalow", 198e3, "First house inside the gate."),
	home(315, "gate", P21009, "teak-lodge", 212e3, "On the entrance road after 330."),
	home(314, "gate", P202628, "sage-loft", 218e3, "Sage cube on the gated drive."),
	home(169, "gate", P202627, "white-porch", 192e3, "Porch cottage on the gate road."),
	home(168, "gate", P202630, "teak-studio", 188e3, "Studio deck facing the drive."),
	home(167, "gate", P21013, "teak-linear", 205e3, "Linear teak on the entrance street."),
	home(165, "gate", P202625, "teak-l", 21e4, "L-wrap, last of the gate row.")
];
var BANDS = [
	{
		id: "beach",
		label: "Beach 196–199",
		kicker: "20×40 · bay front",
		blurb: "The large plans. Four mixed styles on quarter-acre lots facing the open bay, not the canal.",
		aerial: "/homes/aerial-beach.jpg",
		lots: "#196 – #199",
		price: "Furnished from $246k"
	},
	{
		id: "canal",
		label: "Canal 103–107",
		kicker: "20×30 · middle plans",
		blurb: "Middle-size homes on the inland canal, furthest from the ocean. 400 sq ft teak decks at a 5 ft drop to the water.",
		aerial: "/homes/aerial-canal.jpg",
		lots: "#103 – #107",
		price: "Furnished $198–218k"
	},
	{
		id: "park",
		label: "Park 234–239",
		kicker: "20×34 · medium",
		blurb: "Medium plans along the interior park street. Mixed skins, same furniture kit.",
		aerial: "/homes/aerial-park.jpg",
		lots: "#234 – #239",
		price: "Furnished $226–238k"
	},
	{
		id: "street",
		label: "Street 241, 252–259",
		kicker: "16×24 and smaller",
		blurb: "The small plans on street-view lots. Best for a year lease or a tight Airbnb.",
		aerial: "/homes/aerial-street.jpg",
		lots: "#241, #252–259",
		price: "Furnished $180–194k"
	},
	{
		id: "gate",
		label: "Gate row",
		kicker: "Entrance road",
		blurb: "The gate sits beside lot 330. One crushed-stone road runs past every home. About a 20-minute walk to the beach.",
		aerial: "/homes/aerial-gate.jpg",
		lots: "#330, 315, 314, 169, 168, 167, 165",
		price: "Furnished $180–250k"
	},
	{
		id: "canal-value",
		label: "Canal value 108–114",
		kicker: "Far canal · better price",
		blurb: "More mixed models on the far canal. Same 400 sq ft decks, kayak steps, and bulk FF&E.",
		aerial: "/homes/aerial-canal.jpg",
		lots: "#108 – #114",
		price: "Furnished $180–250k"
	}
];
function homesIn(band) {
	return HOMES.filter((h) => h.band === band);
}
function findHome(lot) {
	return HOMES.find((h) => h.lot === lot);
}
var PALETTE = [
	{
		name: "Limewash",
		hex: "#f7f3ea",
		use: "Walls, ceiling"
	},
	{
		name: "Sand linen",
		hex: "#e6d7c3",
		use: "Upholstery"
	},
	{
		name: "Sea glass",
		hex: "#8aa58a",
		use: "Accent panels"
	},
	{
		name: "Teak",
		hex: "#8b5e3c",
		use: "Millwork, decks"
	},
	{
		name: "Lagoon",
		hex: "#2f6f6a",
		use: "Doors, textiles"
	},
	{
		name: "Ink",
		hex: "#1b2420",
		use: "Steel, frames"
	}
];
var FFE_KIT = [
	"Sand-linen sofa and slipcovers",
	"Rattan lounge chairs, one SKU",
	"Oiled teak dining table + six chairs",
	"Seagrass rugs in three sizes",
	"Teak kitchen millwork, same door profile",
	"Wet-pack: vanity, toilet, rain shower",
	"Woven pendants and black-frame sconces",
	"Mini-split family, one outdoor condenser type"
];
var FILL = {
	room: "var(--color-foam)",
	wet: "var(--color-sand)",
	kitchen: "var(--color-limewash)",
	deck: "color-mix(in oklab, var(--color-teak) 28%, var(--color-foam))"
};
function FloorPlan({ plan }) {
	const pad = 2;
	const maxX = Math.max(...plan.rooms.map((r) => r.x + r.w)) + pad;
	const maxY = Math.max(...plan.rooms.map((r) => r.y + r.h)) + pad;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: `-1 -1 ${maxX + 2} ${maxY + 2}`,
			className: "h-auto w-full max-h-80",
			role: "img",
			"aria-label": `${plan.name} floor plan`,
			children: plan.rooms.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: r.x,
				y: r.y,
				width: r.w,
				height: r.h,
				fill: FILL[r.kind],
				stroke: "var(--color-ink)",
				strokeWidth: .18,
				rx: .3
			}), r.w >= 5 && r.h >= 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: r.x + r.w / 2,
				y: r.y + r.h / 2,
				textAnchor: "middle",
				dominantBaseline: "middle",
				fill: "var(--color-ink)",
				fontSize: r.w > 10 ? 1.6 : 1.25,
				fontFamily: "Outfit, sans-serif",
				children: r.label
			}) : null] }, r.id))
		})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function usd(n) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0
	}).format(n);
}
var NAV = [
	{
		id: "beach",
		label: "Beach"
	},
	{
		id: "canal",
		label: "Canal"
	},
	{
		id: "gate",
		label: "Gate"
	},
	{
		id: "value",
		label: "Canal value"
	},
	{
		id: "lots",
		label: "Lots"
	},
	{
		id: "living",
		label: "Living"
	},
	{
		id: "map",
		label: "Site map"
	}
];
function Studio() {
	const [view, setView] = (0, import_react.useState)("home");
	const [lot, setLot] = (0, import_react.useState)(null);
	const [open, setOpen] = (0, import_react.useState)(false);
	const selected = lot ? findHome(lot) : void 0;
	function go(next, nextLot) {
		setView(next);
		setLot(nextLot ?? null);
		setOpen(false);
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => go("home"),
							className: "text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg leading-none tracking-tight",
								children: "Moonlight Bay"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[11px] uppercase tracking-[0.18em] text-muted",
								children: "Consejo · Belize"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-1 lg:flex",
							children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => go(item.id),
								className: cn("rounded-full px-3 py-2 text-sm transition-colors", view === item.id ? "bg-lagoon text-foam" : "text-muted hover:bg-sand/60 hover:text-ink"),
								children: item.label
							}, item.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-11 place-items-center rounded-full border border-line lg:hidden",
							onClick: () => setOpen((v) => !v),
							"aria-label": "Menu",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 18 })
						})
					]
				}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-1 border-t border-line px-4 py-3 lg:hidden",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => go(item.id),
						className: "rounded-xl px-3 py-3 text-left text-base",
						children: item.label
					}, item.id))
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				view === "home" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeView, { go }) : null,
				view === "beach" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BandPage, {
					title: "Beach",
					lede: "Open bay, not the canal. The two-level villa plus four 20×40 homes on lots 196–199.",
					hero: "/homes/villa-beach.jpg",
					aerial: "/homes/aerial-beach.jpg",
					homes: [...homesIn("beach")],
					extra: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VillaNote, { siting: "beach" }),
					onPick: (n) => setLot(n),
					selected
				}) : null,
				view === "canal" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BandPage, {
					title: "Canal",
					lede: "The same two-level villa, sited on the waterway. Decks sit on dry land at a 5 ft drop.",
					hero: "/homes/villa-canal.jpg",
					aerial: "/homes/aerial-canal.jpg",
					homes: [...homesIn("canal")],
					extra: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VillaNote, { siting: "canal" }),
					onPick: (n) => setLot(n),
					selected
				}) : null,
				view === "gate" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BandPage, {
					title: "Gated entrance",
					lede: "Lots 330, 315, 314, 169, 168, 167 and 165. The gate sits beside the first house. One road past every home. Furnished $180k–$250k.",
					hero: "/homes/aerial-gate.jpg",
					aerial: "/homes/aerial-gate.jpg",
					homes: [...homesIn("gate")],
					onPick: (n) => setLot(n),
					selected
				}) : null,
				view === "value" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BandPage, {
					title: "Canal value",
					lede: "Lots 103–114 on the inland canal, furthest from the ocean. Mixed models, 400 sq ft decks, kayak steps. Furnished $180k–$250k.",
					hero: "/homes/aerial-canal.jpg",
					aerial: "/homes/aerial-canal.jpg",
					homes: [...homesIn("canal"), ...homesIn("canal-value")],
					onPick: (n) => setLot(n),
					selected
				}) : null,
				view === "lots" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LotsView, {
					go,
					onPick: (n) => {
						setView("lots");
						setLot(n);
					},
					selected
				}) : null,
				view === "living" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LivingView, {}) : null,
				view === "map" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapView, {}) : null
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line px-4 py-10 text-sm text-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Moonlight Bay de Consejo · Corozal District, Belize" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Concept only. Not for permit or fabrication. Confirm lots with the developer." })]
				})
			})
		]
	});
}
function HomeView({ go }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-[78vh] overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/homes/villa-beach.jpg",
				alt: "Two-level salt-white villa on the beach",
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-4 pb-14 pt-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.22em] text-foam/80",
						children: "Beach · Canal · Gate · Value"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 max-w-3xl font-display text-4xl leading-[1.05] text-foam sm:text-6xl",
						children: "Furnished homes from $180k to $250k, on every kind of lot."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-base text-foam/85",
						children: "Same Caribbean Salt furniture and MEP kit — bought in bulk and fitted at the factory. Skins and decks change. The kit does not."
					})
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4",
		children: [
			{
				id: "beach",
				img: "/homes/villa-beach.jpg",
				t: "Beach",
				d: "Bay-front villas and 20×40 homes on 196–199."
			},
			{
				id: "canal",
				img: "/homes/villa-canal.jpg",
				t: "Canal",
				d: "Waterway lots with kayak steps down a 5 ft bank."
			},
			{
				id: "gate",
				img: "/homes/aerial-gate.jpg",
				t: "Gate",
				d: "Moderate cottages just inside the entrance."
			},
			{
				id: "value",
				img: "/homes/aerial-canal.jpg",
				t: "Canal value",
				d: "Lots 103–114, furthest from the ocean."
			}
		].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => go(c.id),
			className: "group overflow-hidden rounded-xl border border-line bg-foam text-left",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: c.img,
				alt: "",
				className: "h-40 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xl",
					children: c.t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: c.d
				})]
			})]
		}, c.id))
	})] });
}
function VillaNote({ siting }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "rounded-xl border border-line bg-foam p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.18em] text-muted",
				children: "Two-level display villa"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-1 font-display text-2xl",
				children: siting === "beach" ? "The terrace is the living room." : "The house on the canal."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Four 40 ft high-cubes, about 1,057 sq ft. V2 two-bed keeps the canal or bay end as a dining lounge. V3 closes it as a guest suite. Same Caribbean Salt kit as the cottages."
			})
		]
	});
}
function BandPage({ title, lede, hero, aerial, homes, extra, onPick, selected }) {
	const current = selected && homes.some((h) => h.lot === selected.lot) ? selected : homes[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-[48vh] min-h-72 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero,
				alt: "",
				className: "size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-0 left-0 right-0 mx-auto max-w-6xl px-4 pb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl text-foam sm:text-5xl",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-foam/85",
					children: lede
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[1fr_320px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HouseCard, { home: current }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 flex flex-wrap gap-2",
			children: homes.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onPick(h.lot),
				className: cn("min-h-11 rounded-full border px-4 text-sm", current?.lot === h.lot ? "border-lagoon bg-lagoon text-foam" : "border-line bg-foam"),
				children: ["#", h.lot]
			}, h.lot))
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [extra, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: aerial,
				alt: "",
				className: "w-full rounded-xl object-cover"
			})]
		})]
	})] });
}
function HouseCard({ home }) {
	const skin = SKINS[home.skin];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "overflow-hidden rounded-xl border border-line bg-foam",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: skin.image,
			alt: skin.label,
			className: "h-72 w-full object-cover sm:h-96"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 p-5 sm:grid-cols-[1fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs uppercase tracking-[0.18em] text-muted",
					children: [
						"Lot #",
						home.lot,
						" · ",
						home.plan.id
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-display text-3xl",
					children: home.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: skin.finish
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm",
					children: home.note
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-4 grid grid-cols-2 gap-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: "Plan"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [
							home.plan.size,
							" · ",
							home.plan.sqft.toLocaleString(),
							" sf"
						] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: "Beds / baths"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [
							home.plan.beds === 0 ? "Studio" : home.plan.beds,
							" / ",
							home.plan.baths
						] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: "Furnished"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "font-medium tabular-nums",
							children: usd(home.price)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted",
							children: "Lot"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "¼ acre" })] })
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs uppercase tracking-[0.18em] text-muted",
				children: "Floor plan"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloorPlan, { plan: home.plan })] })]
		})]
	});
}
function LotsView({ go, onPick, selected }) {
	const [band, setBand] = (0, import_react.useState)("beach");
	const list = homesIn(band);
	const current = selected && selected.band === band ? selected : list[0];
	const meta = BANDS.find((b) => b.id === band);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.18em] text-muted",
				children: "Collection"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl",
				children: "Mix the styles. Keep the kit."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: "Big plans on the beach, middle on the canal, medium on the park street, small on the inner street. Each lot is a different skin so the row never clones."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: BANDS.filter((b) => [
					"beach",
					"canal",
					"park",
					"street"
				].includes(b.id)).map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						setBand(b.id);
						onPick(homesIn(b.id)[0].lot);
					},
					className: cn("min-h-11 rounded-full border px-4 text-sm", band === b.id ? "border-lagoon bg-lagoon text-foam" : "border-line bg-foam"),
					children: b.label
				}, b.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: meta.aerial,
				alt: "",
				className: "mt-6 h-64 w-full rounded-xl object-cover sm:h-80"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-muted",
				children: [
					meta.blurb,
					" ",
					meta.price,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: list.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onPick(h.lot),
					className: cn("min-h-11 rounded-full border px-4 text-sm", current?.lot === h.lot ? "border-lagoon bg-lagoon text-foam" : "border-line bg-foam"),
					children: ["#", h.lot]
				}, h.lot))
			}),
			current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HouseCard, { home: current })
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => go("map"),
				className: "mt-6 inline-flex items-center gap-2 text-sm text-lagoon",
				children: ["Open the July 2026 site map ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 14 })]
			})
		]
	});
}
function LivingView() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.18em] text-muted",
				children: "Caribbean Salt"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl",
				children: "One furniture kit. Every house."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: "Limewash, sand linen, sea glass, oiled teak, one lagoon note. Kitchen, baths, millwork and lighting go in at the factory. Loose pieces pack in the module so island labor stays light."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/homes/interior-living.jpg",
					alt: "Living room",
					className: "h-72 w-full rounded-xl object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/homes/interior-bedroom.jpg",
					alt: "Bedroom",
					className: "h-72 w-full rounded-xl object-cover"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid grid-cols-3 gap-3 sm:grid-cols-6",
				children: PALETTE.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-hidden rounded-xl border border-line bg-foam",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-16",
						style: { background: c.hex }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-2 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: c.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted",
							children: c.use
						})]
					})]
				}, c.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-2 sm:grid-cols-2",
				children: FFE_KIT.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-xl border border-line bg-foam px-4 py-3 text-sm",
					children: item
				}, item))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm text-muted",
				children: "Lower-cost shells, high-end pieces. Gate and canal-value homes furnish from $180,000 to $250,000."
			})
		]
	});
}
function MapView() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.18em] text-muted",
				children: "July 2026 snapshot"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl",
				children: "Site map"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-muted",
				children: "This plat is from July 2026 and is not live inventory. Other lots may already be sold. Check with the developer for the current map and what is available."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 overflow-hidden rounded-xl border border-line bg-ink",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/site-map.jpg",
					alt: "Moonlight Bay de Consejo lot map, July 2026",
					className: "w-full"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-3 text-sm sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-line bg-foam p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: "How to read it"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-muted",
						children: "Green available · blue pending · purple under contract · red sold. Treat every lot as open or pending until the developer confirms."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-line bg-foam p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: "Our rows"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-muted",
						children: "Beach 196–199 · canal 103–114 · park 234–239 · street 241, 252–259 · gate 330, 315, 314, 169–165."
					})]
				})]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Studio, {});
}
//#endregion
export { Home as component };
