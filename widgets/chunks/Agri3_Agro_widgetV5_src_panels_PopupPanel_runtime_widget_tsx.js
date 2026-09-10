"use strict";
(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["your-extensions_widgets_Agri3_Agro_widgetV5_src_panels_PopupPanel_runtime_widget_tsx"],{

/***/ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/panels/PopupPanel/runtime/widget.tsx":
/*!**********************************************************************************************!*\
  !*** ./your-extensions/widgets/Agri3/Agro_widgetV5/src/panels/PopupPanel/runtime/widget.tsx ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var esri_Graphic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! esri/Graphic */ "esri/Graphic");
/* harmony import */ var esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! esri/layers/GraphicsLayer */ "esri/layers/GraphicsLayer");
/* harmony import */ var esri_geometry_Point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! esri/geometry/Point */ "esri/geometry/Point");
/* harmony import */ var esri_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! esri/request */ "esri/request");
/* harmony import */ var esri_symbols_SimpleFillSymbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! esri/symbols/SimpleFillSymbol */ "esri/symbols/SimpleFillSymbol");
/* harmony import */ var esri_symbols_SimpleLineSymbol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! esri/symbols/SimpleLineSymbol */ "esri/symbols/SimpleLineSymbol");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chart-line.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chart-column.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/sprout.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/calendar-days.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/inbox.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chevron-up.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/pin.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/map-pin.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/x.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/settings-2.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/folder-open.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/paperclip.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/download.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/mouse-pointer-click.mjs");
/* harmony import */ var _gis_AgriHiddenConnectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../gis/AgriHiddenConnectors */ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/gis/AgriHiddenConnectors.tsx");
/* harmony import */ var _gis_agri_data_source_engine__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../gis/agri-data-source-engine */ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/gis/agri-data-source-engine.ts");
/* harmony import */ var _gis_agri_data_layer_roles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../gis/agri-data-layer-roles */ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/gis/agri-data-layer-roles.ts");
/* harmony import */ var _gis_agri_linked_map_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../gis/agri-linked-map-layout */ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/gis/agri-linked-map-layout.ts");
/* harmony import */ var _gis_agri_engine_registry__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../gis/agri-engine-registry */ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/gis/agri-engine-registry.ts");
/* harmony import */ var _gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../gis/agri-map-click-debug */ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/gis/agri-map-click-debug.ts");
/* harmony import */ var _GraffPanel_runtime_graff_graph_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../GraffPanel/runtime/graff-graph-constants */ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/panels/GraffPanel/runtime/graff-graph-constants.ts");
/* harmony import */ var _popup_field_helpers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./popup-field-helpers */ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/panels/PopupPanel/runtime/popup-field-helpers.ts");
/* harmony import */ var _popup_format_helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./popup-format-helpers */ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/panels/PopupPanel/runtime/popup-format-helpers.ts");
/* harmony import */ var _gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../gis/feature-layer-data */ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/gis/feature-layer-data.ts");
/* harmony import */ var _gis_agri_vegetation_data_source__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../gis/agri-vegetation-data-source */ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/gis/agri-vegetation-data-source.ts");
/* harmony import */ var _gis_agri_table_data_source__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../gis/agri-table-data-source */ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/gis/agri-table-data-source.ts");
/* harmony import */ var _data_agri_filter_bus__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../data/agri-filter-bus */ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/data/agri-filter-bus.ts");
/* harmony import */ var _shared_AgriChartLoader__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../shared/AgriChartLoader */ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/shared/AgriChartLoader.tsx");
/* harmony import */ var _gis_agri_vegetation_overlay_prefetch__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../gis/agri-vegetation-overlay-prefetch */ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/gis/agri-vegetation-overlay-prefetch.ts");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./messages */ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/panels/PopupPanel/runtime/messages.ts");
// Polygon Attribute Inspector (AgriPolygon refactor)
// ✅ UPDATED: supports MULTIPLE selected Feature Layers (e.g. yearly layers filtered by another widget)
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

























class AgriPolygon extends jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.PureComponent {
    getPopupWidth(view) {
        const margin = this.POPUP_MARGIN;
        let preferred = this.POPUP_WIDTH;
        if (this.isDashboardEmbedded()) {
            const root = document.querySelector(".agri-dashboard-v3") ||
                document.documentElement;
            const raw = getComputedStyle(root)
                .getPropertyValue("--agri-dashboard-popup-width")
                .trim();
            const parsed = Number.parseFloat(raw);
            if (Number.isFinite(parsed) && parsed > 0) {
                preferred = parsed;
            }
        }
        if (view) {
            const mapW = this.getMapAreaRect(view).width;
            return Math.max(220, Math.min(preferred, mapW - margin * 2));
        }
        return preferred;
    }
    getPinnedPopupHeight(view, topY) {
        const rect = this.getMapAreaRect(view);
        if (this.isDashboardEmbedded()) {
            const bottomInset = this.DASHBOARD_POPUP_VERTICAL_INSET;
            return Math.max(160, rect.bottom - bottomInset - topY);
        }
        const margin = this.POPUP_MARGIN;
        const mapBottom = this.getEffectiveMapBottom(view, margin);
        return Math.max(160, mapBottom - topY);
    }
    getPopupDimensions(view, pinned = false, position) {
        var _a;
        const width = this.getPopupWidth(view);
        if (pinned && view) {
            const topY = (_a = position === null || position === void 0 ? void 0 : position.y) !== null && _a !== void 0 ? _a : this.calculatePinnedPosition(view).y;
            const height = this.getPinnedPopupHeight(view, topY);
            return { width, height };
        }
        return { width, height: width };
    }
    constructor(props) {
        super(props);
        this._isMounted = false;
        this._unbindMasterFilter = null;
        this.themeObserver = null;
        this._clickHandle = null;
        /** Monotonic id so a slow/duplicate click path cannot close a newer popup. */
        this._clickGeneration = 0;
        this._popupRef = jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createRef();
        this._highlightLayer = null;
        this._highlightGraphic = null;
        this._highlightHaloGraphic = null;
        this._extentBeforeSelection = null;
        /** Currently inspected field uniqueid (map or table via hub). Same-id map click toggles off. */
        this._activeInspectedUniqueid = null;
        /** Last yil|viloyat|tuman from masterFilterChanged — geography move closes popup. */
        this._lastMasterGeoKey = "";
        this._isDraggingPopup = false;
        this._popupDragOffset = { x: 0, y: 0 };
        this._popupLayoutTimer = null;
        this._popupLayoutRaf = 0;
        this.mapAreaResizeObserver = null;
        this._featureQueryCacheTtlMs = 60 * 60 * 1000;
        this._featureQueryCache = new Map();
        /** Detached query clients keyed by service URL; never mutate live map sublayers. */
        this._queryOnlyLayers = new Map();
        this.mapViewFallbackTimer = null;
        this.mapInitRetryTimer = null;
        this.connectedMapViewId = "";
        this.mapInitRetryCount = 0;
        this.maxMapInitRetries = 12;
        this.mapClickBootstrapTimer = null;
        this.POPUP_WIDTH = 340;
        this.POPUP_MARGIN = 12;
        /** Match dashboard map overlays: 16px horizontal and 12px vertical inset. */
        this.DASHBOARD_POPUP_HORIZONTAL_INSET = 16;
        this.DASHBOARD_POPUP_VERTICAL_INSET = 12;
        /** Guards against a stale latest-indices response landing after a newer polygon selection. */
        this._latestIndicesRequestId = 0;
        this.getResolvedTheme = () => {
            var _a;
            const root = document.documentElement;
            const body = document.body;
            try {
                const savedTheme = localStorage.getItem("agri_v11_app_theme");
                if (savedTheme === "light")
                    return false;
                if (savedTheme === "dark")
                    return true;
            }
            catch (_b) {
                // ignore storage access issues
            }
            const isLight = root.classList.contains("light-theme") ||
                root.getAttribute("data-theme") === "light" ||
                body.classList.contains("light-theme");
            return (_a = (0,_messages__WEBPACK_IMPORTED_MODULE_23__.getInitialTheme)()) !== null && _a !== void 0 ? _a : !isLight;
        };
        /**
         * Off-map FeatureLayer client for a live map layer's URL. Every query in
         * the click chain must run against these detached clients: createQuery /
         * queryFeatures on a live MapImage Sublayer rehydrates it and can clear its
         * runtime definitionExpression, which makes the map export (and briefly
         * paint) every district's fields until the filter guard restores it.
         *
         * Shared helper also skips MapServer roots and Group Layer folders
         * ("Agri 2026 republic data") that FeatureLayer cannot load.
         */
        this.getDetachedQueryLayer = (layer) => __awaiter(this, void 0, void 0, function* () {
            if (!layer || (0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.isMapImageGroupSublayer)(layer))
                return null;
            const detached = yield (0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.getDetachedQueryLayerFor)(layer);
            if (!detached)
                return null;
            const url = String((layer === null || layer === void 0 ? void 0 : layer.url) || "").trim().replace(/\/+$/, "");
            if (url)
                this._queryOnlyLayers.set(url, detached);
            return detached;
        });
        this.tr = (key, params) => {
            return (0,_messages__WEBPACK_IMPORTED_MODULE_23__.t)(this.state.currentLang, key, params);
        };
        this.setupThemeObserver = () => {
            const root = document.documentElement;
            const body = document.body;
            this.themeObserver = new MutationObserver(() => {
                const isDarkTheme = this.getResolvedTheme();
                if (this._isMounted && isDarkTheme !== this.state.isDarkTheme) {
                    this.setState({ isDarkTheme });
                }
            });
            this.themeObserver.observe(root, {
                attributes: true,
                attributeFilter: ["class", "data-theme"],
            });
            this.themeObserver.observe(body, {
                attributes: true,
                attributeFilter: ["class"],
            });
        };
        this.handleThemeChange = (e) => {
            if (!this._isMounted)
                return;
            const detail = (e === null || e === void 0 ? void 0 : e.detail) || {};
            let isDarkTheme = this.getResolvedTheme();
            if (typeof detail.isDarkTheme === "boolean") {
                isDarkTheme = detail.isDarkTheme;
            }
            else if (typeof detail.theme === "string") {
                isDarkTheme = String(detail.theme).toLowerCase() !== "light";
            }
            if (isDarkTheme !== this.state.isDarkTheme) {
                this.setState({ isDarkTheme });
            }
        };
        this.handleLanguageChange = (e) => {
            var _a, _b, _c;
            if (!this._isMounted)
                return;
            const lang = ((_a = e === null || e === void 0 ? void 0 : e.detail) === null || _a === void 0 ? void 0 : _a.lang) || ((_b = e === null || e === void 0 ? void 0 : e.detail) === null || _b === void 0 ? void 0 : _b.language) || ((_c = e === null || e === void 0 ? void 0 : e.detail) === null || _c === void 0 ? void 0 : _c.code);
            const normalized = (0,_messages__WEBPACK_IMPORTED_MODULE_23__.normalizeLang)(lang);
            if (normalized !== this.state.currentLang) {
                this.setState({ currentLang: normalized });
            }
        };
        this.applyPopupPosition = (pos) => {
            if (this.popupPositionsEqual(this.state.popupPosition, pos))
                return;
            this.setState({ popupPosition: pos });
        };
        this.schedulePopupLayout = () => {
            if (this._isDraggingPopup)
                return;
            if (this._popupLayoutTimer)
                clearTimeout(this._popupLayoutTimer);
            this._popupLayoutTimer = setTimeout(() => {
                this._popupLayoutTimer = null;
                this.repositionPinnedIfNeeded();
            }, 48);
        };
        this.schedulePopupLayoutAfterContent = () => {
            if (this._popupLayoutRaf)
                cancelAnimationFrame(this._popupLayoutRaf);
            this._popupLayoutRaf = requestAnimationFrame(() => {
                this._popupLayoutRaf = requestAnimationFrame(() => {
                    this._popupLayoutRaf = 0;
                    this.repositionPinnedIfNeeded();
                });
            });
        };
        this.calculatePinnedPosition = (view) => {
            const rect = this.getMapAreaRect(view);
            const margin = this.POPUP_MARGIN;
            const popupWidth = this.getPopupWidth(view);
            if (this.isDashboardEmbedded()) {
                return {
                    x: rect.right - popupWidth - this.DASHBOARD_POPUP_HORIZONTAL_INSET,
                    y: rect.top + this.DASHBOARD_POPUP_VERTICAL_INSET,
                };
            }
            return {
                x: rect.right - popupWidth - margin,
                y: rect.top + margin,
            };
        };
        this.repositionPinnedIfNeeded = () => {
            var _a;
            if (!this._isMounted)
                return;
            if (!this.state.showPopup)
                return;
            if (this._isDraggingPopup)
                return;
            const view = (_a = this.state.jimuMapView) === null || _a === void 0 ? void 0 : _a.view;
            if (!view)
                return;
            if (this.state.pinToCorner) {
                const pos = this.calculatePinnedPosition(view);
                if (this.popupPositionsEqual(this.state.popupPosition, pos)) {
                    this.forceUpdate();
                }
                else {
                    this.setState({ popupPosition: pos });
                }
                return;
            }
            if (!this.state.popupPosition)
                return;
            const clamped = this.clampPopupToMapContainer(this.state.popupPosition, view);
            this.applyPopupPosition(clamped);
        };
        this.togglePinToCorner = () => {
            this.setState((prev) => {
                var _a;
                const next = !prev.pinToCorner;
                const view = (_a = this.state.jimuMapView) === null || _a === void 0 ? void 0 : _a.view;
                let pos = prev.popupPosition;
                if (next) {
                    if (view)
                        pos = this.calculatePinnedPosition(view);
                }
                else if (view && prev.clickScreenPoint) {
                    pos = this.calculatePopupPosition(prev.clickScreenPoint, view);
                }
                else if (view) {
                    const rect = view.container.getBoundingClientRect();
                    pos = {
                        x: rect.left + rect.width / 2,
                        y: rect.top + rect.height / 2,
                    };
                }
                return {
                    pinToCorner: next,
                    popupPosition: pos,
                    chartExpanded: next ? true : prev.chartExpanded,
                };
            }, () => {
                this.schedulePopupLayoutAfterContent();
                if (this.state.showPopup) {
                    this.broadcastPopupVisibility(true);
                }
            });
        };
        this.handleOutsideClick = (event) => {
            var _a, _b, _c, _d;
            if (!this.state.showPopup || !this._popupRef.current)
                return;
            // Collapsed chip stays until an empty-map deselect / geography reset.
            if (this.state.popupMinimized)
                return;
            const target = event.target;
            if (!target || this._popupRef.current.contains(target))
                return;
            const mapContainer = (_b = (_a = this.state.jimuMapView) === null || _a === void 0 ? void 0 : _a.view) === null || _b === void 0 ? void 0 : _b.container;
            if (mapContainer && mapContainer.contains(target))
                return;
            if (this.isDashboardEmbedded()) {
                const dashboardUi = (_d = (_c = target).closest) === null || _d === void 0 ? void 0 : _d.call(_c, ".agri-dashboard-v3, .agri-dashboard-crop-overlay, .agri-dashboard-header, .agri-dashboard-left-panel, .agri-dashboard-bottom-row, .agri-dashboard-widget-slot, .agri-dashboard-indicator-overlay, .agri-dashboard-date-index-overlay, .agri-v20-floating-overlay");
                if (dashboardUi)
                    return;
            }
            // Outside dashboard chrome → collapse instead of wiping selection.
            this.minimizePopup();
        };
        this.onPopupHeaderMouseDown = (e) => {
            // Allow normal behavior for controls inside header.
            const target = e.target;
            if (target === null || target === void 0 ? void 0 : target.closest("button, a, input, textarea, select"))
                return;
            if (e.button !== 0)
                return;
            const popupEl = this._popupRef.current;
            if (!popupEl)
                return;
            const rect = popupEl.getBoundingClientRect();
            this._isDraggingPopup = true;
            this._popupDragOffset = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };
            if (this.state.pinToCorner) {
                this.setState({ pinToCorner: false });
            }
            window.addEventListener("mousemove", this.onPopupDragMove);
            window.addEventListener("mouseup", this.onPopupDragEnd);
            e.preventDefault();
        };
        this.onPopupDragMove = (e) => {
            var _a;
            if (!this._isDraggingPopup || !this._isMounted)
                return;
            const view = (_a = this.state.jimuMapView) === null || _a === void 0 ? void 0 : _a.view;
            if (!view)
                return;
            const nextPos = {
                x: e.clientX - this._popupDragOffset.x,
                y: e.clientY - this._popupDragOffset.y,
            };
            const clamped = this.clampPopupToMapContainer(nextPos, view);
            this.applyPopupPosition(clamped);
        };
        this.onPopupDragEnd = () => {
            this._isDraggingPopup = false;
            window.removeEventListener("mousemove", this.onPopupDragMove);
            window.removeEventListener("mouseup", this.onPopupDragEnd);
        };
        /* ---------------- Highlight management ---------------- */
        this.setupHighlightLayer = (view) => {
            if (!this._highlightLayer) {
                this._highlightLayer = new esri_layers_GraphicsLayer__WEBPACK_IMPORTED_MODULE_1__["default"]({
                    id: "agri-polygon-highlight",
                    title: "Selected Polygon Highlight",
                });
                view.map.add(this._highlightLayer);
            }
        };
        this.highlightPolygon = (geometry) => {
            var _a, _b, _c, _d;
            if (!this._highlightLayer || !geometry)
                return;
            this.clearHighlight();
            // Drop Graff/table selection graphics so only one outline is visible.
            try {
                (_d = (_c = (_b = (_a = this.state.jimuMapView) === null || _a === void 0 ? void 0 : _a.view) === null || _b === void 0 ? void 0 : _b.graphics) === null || _c === void 0 ? void 0 : _c.removeAll) === null || _d === void 0 ? void 0 : _d.call(_c);
            }
            catch (_e) {
                /* ignore */
            }
            // Wide translucent halo plus a bright cyan core keeps the selected field
            // visible over both light and dark satellite imagery.
            const haloSymbol = new esri_symbols_SimpleFillSymbol__WEBPACK_IMPORTED_MODULE_4__["default"]({
                color: [0, 0, 0, 0],
                outline: new esri_symbols_SimpleLineSymbol__WEBPACK_IMPORTED_MODULE_5__["default"]({
                    color: [0, 229, 255, 0.32],
                    width: 9,
                    style: "solid",
                }),
            });
            const highlightSymbol = new esri_symbols_SimpleFillSymbol__WEBPACK_IMPORTED_MODULE_4__["default"]({
                color: [0, 0, 0, 0],
                outline: new esri_symbols_SimpleLineSymbol__WEBPACK_IMPORTED_MODULE_5__["default"]({
                    color: [128, 245, 255, 1],
                    width: 3,
                    style: "solid",
                }),
            });
            this._highlightHaloGraphic = new esri_Graphic__WEBPACK_IMPORTED_MODULE_0__["default"]({ geometry, symbol: haloSymbol });
            this._highlightGraphic = new esri_Graphic__WEBPACK_IMPORTED_MODULE_0__["default"]({ geometry, symbol: highlightSymbol });
            this._highlightLayer.addMany([
                this._highlightHaloGraphic,
                this._highlightGraphic,
            ]);
        };
        this.clearHighlight = () => {
            if (!this._highlightLayer)
                return;
            if (this._highlightHaloGraphic) {
                this._highlightLayer.remove(this._highlightHaloGraphic);
                this._highlightHaloGraphic = null;
            }
            if (this._highlightGraphic) {
                this._highlightLayer.remove(this._highlightGraphic);
                this._highlightGraphic = null;
            }
        };
        this.restoreExtentBeforeSelection = () => {
            var _a, _b, _c;
            const view = (_a = this.state.jimuMapView) === null || _a === void 0 ? void 0 : _a.view;
            const savedExtent = this._extentBeforeSelection;
            this._extentBeforeSelection = null;
            const zoomTo = ((_c = (_b = this.props.config) === null || _b === void 0 ? void 0 : _b.settings) === null || _c === void 0 ? void 0 : _c.zoomToSelection) !== false;
            if (!zoomTo || !savedExtent || !view)
                return;
            try {
                void view.goTo(savedExtent, { duration: 400 });
            }
            catch (_d) {
                /* ignore */
            }
        };
        this.cleanupHighlight = () => {
            var _a;
            if (this._highlightLayer) {
                const view = (_a = this.state.jimuMapView) === null || _a === void 0 ? void 0 : _a.view;
                if (view && view.map) {
                    view.map.remove(this._highlightLayer);
                }
                this._highlightLayer = null;
                this._highlightGraphic = null;
                this._highlightHaloGraphic = null;
            }
            this._extentBeforeSelection = null;
        };
        this.handleMapViewReady = (event) => {
            var _a;
            const mapWidgetId = (_a = event.detail) === null || _a === void 0 ? void 0 : _a.mapWidgetId;
            const linked = this.getLinkedMapWidgetId();
            if (mapWidgetId && linked && mapWidgetId !== linked)
                return;
            this.scheduleMapViewFallback();
        };
        this.scheduleMapViewFallback = () => {
            var _a, _b;
            // Already have a live map view — do NOT re-enter onActiveViewChange
            // (that path setState → initializeMapConnection → scheduleMapViewFallback
            // and freezes the builder with React #185 when featureLayers stay empty).
            if ((_a = this.state.jimuMapView) === null || _a === void 0 ? void 0 : _a.view) {
                if (!((_b = this.state.featureLayers) === null || _b === void 0 ? void 0 : _b.length)) {
                    this.scheduleMapInitRetry(this.state.jimuMapView);
                }
                return;
            }
            const mapWidgetId = this.getLinkedMapWidgetId();
            const fromManager = this.getMapViewFromManager(mapWidgetId);
            if (fromManager === null || fromManager === void 0 ? void 0 : fromManager.view) {
                this.onActiveViewChange(fromManager);
                return;
            }
            if (!mapWidgetId)
                return;
            if (this.mapViewFallbackTimer)
                clearTimeout(this.mapViewFallbackTimer);
            this.mapViewFallbackTimer = setTimeout(() => {
                var _a;
                this.mapViewFallbackTimer = null;
                if (!this._isMounted)
                    return;
                if ((_a = this.state.jimuMapView) === null || _a === void 0 ? void 0 : _a.view)
                    return;
                const late = this.getMapViewFromManager(mapWidgetId);
                if (late === null || late === void 0 ? void 0 : late.view)
                    this.onActiveViewChange(late);
            }, 600);
        };
        this.scheduleMapInitRetry = (jmv) => {
            if (this.mapInitRetryCount >= this.maxMapInitRetries)
                return;
            if (this.mapInitRetryTimer)
                clearTimeout(this.mapInitRetryTimer);
            this.mapInitRetryCount += 1;
            this.mapInitRetryTimer = setTimeout(() => {
                this.mapInitRetryTimer = null;
                if (!this._isMounted)
                    return;
                void this.initializeMapConnection(jmv);
            }, 800);
        };
        this.addResolvedLayer = (target, layerKeyToDsId, seen, layer, dsId) => {
            const queryable = (0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.getQueryableLayer)(layer) || layer;
            if (!(0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.isQueryableFieldLayer)(queryable))
                return;
            const key = (0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.getAgriLayerMapKey)(queryable) ||
                String(queryable.url || queryable.id || "");
            if (!key || seen.has(key))
                return;
            seen.add(key);
            target.push(queryable);
            if (dsId)
                layerKeyToDsId[key] = dsId;
        };
        this.collectLayersFromDataSources = (jmv, useList) => {
            var _a, _b;
            const layers = [];
            const layerKeyToDsId = {};
            const seen = new Set();
            const map = (_a = jmv === null || jmv === void 0 ? void 0 : jmv.view) === null || _a === void 0 ? void 0 : _a.map;
            for (const uds of useList) {
                const dsId = String((uds === null || uds === void 0 ? void 0 : uds.dataSourceId) || "");
                if (!dsId)
                    continue;
                const cachedDs = (_b = this.state.dataSourcesById) === null || _b === void 0 ? void 0 : _b[dsId];
                if (cachedDs) {
                    const cachedLayer = cachedDs.layer ||
                        (typeof cachedDs.getLayer === "function"
                            ? cachedDs.getLayer()
                            : null);
                    const live = this.toLiveMapLayer(cachedLayer, map);
                    if (live)
                        this.addResolvedLayer(layers, layerKeyToDsId, seen, live, dsId);
                }
                const dsMgr = jimu_core__WEBPACK_IMPORTED_MODULE_7__.DataSourceManager.getInstance();
                const ds = dsMgr.getDataSource(dsId);
                if (ds) {
                    const dsLayer = (typeof ds.getLayer === "function" ? ds.getLayer() : null) ||
                        ds.layer;
                    const live = this.toLiveMapLayer((0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.getQueryableLayer)(dsLayer) || dsLayer, map);
                    if (live)
                        this.addResolvedLayer(layers, layerKeyToDsId, seen, live, dsId);
                }
            }
            return { layers, layerKeyToDsId };
        };
        this.onActiveViewChange = (jimuMapView) => {
            var _a, _b;
            this.detachMapClick();
            this.cleanupHighlight();
            if (!jimuMapView) {
                (_a = this.mapAreaResizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
                this.mapAreaResizeObserver = null;
                this.connectedMapViewId = "";
                this.setState({
                    jimuMapView: null,
                    featureLayers: [],
                    objectIdField: null,
                    error: this.tr("error.noMapView"),
                    debugInfo: Object.assign(Object.assign({}, this.state.debugInfo), { layerInfo: this.tr("error.noMapView") }),
                });
                return;
            }
            const activeView = jimuMapView.view;
            if (activeView) {
                this.observeMapAreaResize(activeView);
            }
            const viewId = String(jimuMapView.id || jimuMapView.mapWidgetId || "");
            // Same map already wired — do not setState again (causes freeze loops).
            if (viewId && viewId === this.connectedMapViewId && this.state.jimuMapView) {
                if (!this._clickHandle)
                    this.attachMapClick(jimuMapView);
                if (!((_b = this.state.featureLayers) === null || _b === void 0 ? void 0 : _b.length)) {
                    void this.initializeMapConnection(jimuMapView);
                }
                return;
            }
            this.connectedMapViewId = viewId;
            this.setState({ jimuMapView }, () => __awaiter(this, void 0, void 0, function* () {
                const view = jimuMapView.view;
                if (!view)
                    return;
                // Attach immediately so the first field click never races layer resolve.
                this.attachMapClick(jimuMapView);
                if (view.ready) {
                    this.setupHighlightLayer(view);
                    yield this.initializeMapConnection(jimuMapView);
                    this.repositionPinnedIfNeeded();
                }
                else {
                    const h = view.watch("ready", (ready) => __awaiter(this, void 0, void 0, function* () {
                        if (ready) {
                            h.remove();
                            this.attachMapClick(jimuMapView);
                            this.setupHighlightLayer(view);
                            yield this.initializeMapConnection(jimuMapView);
                            this.repositionPinnedIfNeeded();
                        }
                    }));
                }
            }));
        };
        this.initializeMapConnection = (jmv) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            if (!this._isMounted)
                return;
            const view = jmv === null || jmv === void 0 ? void 0 : jmv.view;
            if (!view || !view.map)
                return;
            const rawList = ((_b = (_a = this.props.useDataSources) === null || _a === void 0 ? void 0 : _a.asMutable) === null || _b === void 0 ? void 0 : _b.call(_a)) || [];
            const useList = this.expandUseDataSourceEntries(rawList);
            // Empty useDataSources is normal right after drop — resolve map layers only.
            // Never bounce through scheduleMapViewFallback here (that re-entered
            // onActiveViewChange and froze the page).
            this.dataSourceEngine.syncSelection((0,_gis_agri_data_source_engine__WEBPACK_IMPORTED_MODULE_9__.getSelectedDsIds)(this.props.useDataSources));
            const resolvedLayers = [];
            const layerKeyToDsId = {};
            const seen = new Set();
            const mapLayers = (0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.getAllFeatureLayersFromMap)(view.map);
            // load() rehydrates MapImage sublayers and can drop their runtime
            // district definitionExpression — snapshot and repair synchronously so
            // a connect/retry that overlaps a field click never flashes other
            // districts' fields.
            const definitionSnapshot = this.snapshotDefinitionExpressions(mapLayers);
            for (const layer of mapLayers) {
                yield (0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.safeLoadMapLayer)(layer);
                this.addResolvedLayer(resolvedLayers, layerKeyToDsId, seen, layer);
            }
            this.restoreDriftedDefinitionExpressions(definitionSnapshot);
            if (useList.length) {
                const fromDs = this.collectLayersFromDataSources(jmv, useList);
                for (const layer of fromDs.layers) {
                    const live = this.toLiveMapLayer(layer, view.map) || layer;
                    const key = (0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.getAgriLayerMapKey)(live) || String(live.url || live.id || "");
                    const dsId = fromDs.layerKeyToDsId[key];
                    this.addResolvedLayer(resolvedLayers, layerKeyToDsId, seen, live, dsId);
                }
                for (const useDs of useList) {
                    const layer = yield this.resolveFeatureLayerForUseDataSource(jmv, useDs);
                    if (!layer)
                        continue;
                    yield (0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.safeLoadMapLayer)(layer);
                    const dsId = String((useDs === null || useDs === void 0 ? void 0 : useDs.dataSourceId) || "");
                    const live = this.toLiveMapLayer(layer, view.map) || layer;
                    this.addResolvedLayer(resolvedLayers, layerKeyToDsId, seen, live, dsId);
                }
            }
            if (!this._isMounted)
                return;
            if (!resolvedLayers.length) {
                // Soft fail — map may still be loading region-year sublayers. Retry
                // a few times without re-entering onActiveViewChange.
                // Still attach the click handler so the first field click works as soon
                // as live MapImage sublayers become hittable via getClickTargetLayers.
                if (!this._clickHandle)
                    this.attachMapClick(jmv);
                if (this.state.error !== this.tr("error.selectedLayersMissing") ||
                    (((_c = this.state.featureLayers) === null || _c === void 0 ? void 0 : _c.length) || 0) > 0) {
                    this.setState({
                        featureLayers: [],
                        objectIdField: null,
                        error: useList.length
                            ? this.tr("error.selectedLayersMissing")
                            : null,
                    });
                }
                this.scheduleMapInitRetry(jmv);
                return;
            }
            this.mapInitRetryCount = 0;
            (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickDebug)("initializeMapConnection OK", {
                layerCount: resolvedLayers.length,
                layers: resolvedLayers.map((l) => l.title || l.url || l.id),
            });
            const prevKeys = (this.state.featureLayers || [])
                .map((l) => (0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.getAgriLayerMapKey)(l) || String(l.url || l.id || ""))
                .join("|");
            const nextKeys = resolvedLayers
                .map((l) => (0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.getAgriLayerMapKey)(l) || String(l.url || l.id || ""))
                .join("|");
            if (prevKeys === nextKeys && this._clickHandle) {
                this.attachMapClick(jmv);
                return;
            }
            this.setState({
                featureLayers: resolvedLayers,
                layerKeyToDsId,
                error: null,
                debugInfo: Object.assign(Object.assign({}, this.state.debugInfo), { layerInfo: resolvedLayers.map((l) => ({
                        id: l.id,
                        title: l.title,
                        url: l.url,
                        objectIdField: l.objectIdField,
                    })) }),
            }, () => {
                if (!this._isMounted)
                    return;
                this.attachMapClick(jmv);
            });
        });
        this.toLiveMapLayer = (layer, map) => {
            if (!layer)
                return null;
            const url = String((layer === null || layer === void 0 ? void 0 : layer.url) || "");
            if (map && url) {
                const byUrl = (0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.findQueryableLayerOnMapByUrl)(map, url);
                if (byUrl)
                    return byUrl;
            }
            if (map && (layer === null || layer === void 0 ? void 0 : layer.id) != null) {
                const byId = (0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.findQueryableLayerOnMapById)(map, String(layer.id));
                if (byId)
                    return byId;
            }
            const queryable = (0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.getQueryableLayer)(layer);
            return (queryable || layer);
        };
        this.layerKeysMatch = (a, b) => {
            if (!a || !b)
                return false;
            const keyA = (0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.getAgriLayerMapKey)(a);
            const keyB = (0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.getAgriLayerMapKey)(b);
            if (keyA && keyB && keyA === keyB)
                return true;
            if (a.id != null && b.id != null && String(a.id) === String(b.id)) {
                return true;
            }
            const urlA = (0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.normalizeQueryableLayerUrl)(String(a.url || ""));
            const urlB = (0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.normalizeQueryableLayerUrl)(String(b.url || ""));
            return !!(urlA && urlB && urlA === urlB);
        };
        /** Resolve the live map layer for a selected useDataSource (FeatureLayer or MapImage sublayer). */
        this.resolveFeatureLayerForUseDataSource = (jmv, useDs) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            try {
                if (!(useDs === null || useDs === void 0 ? void 0 : useDs.dataSourceId))
                    return null;
                const dsId = String(useDs.dataSourceId);
                const map = (_a = jmv === null || jmv === void 0 ? void 0 : jmv.view) === null || _a === void 0 ? void 0 : _a.map;
                if (!map)
                    return null;
                const jlvByApi = (_c = (_b = jmv).getJimuLayerViewByDataSourceId) === null || _c === void 0 ? void 0 : _c.call(_b, dsId);
                const fromApi = (0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.getQueryableLayer)(jlvByApi === null || jlvByApi === void 0 ? void 0 : jlvByApi.layer);
                if (fromApi)
                    return this.toLiveMapLayer(fromApi, map);
                const jlvList = ((_d = jmv.getAllJimuLayerViews) === null || _d === void 0 ? void 0 : _d.call(jmv)) || [];
                const layerIdHint = (0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.extractMapLayerIdFromDsId)(dsId);
                for (const lv of jlvList) {
                    if ((lv === null || lv === void 0 ? void 0 : lv.layerDataSourceId) === dsId ||
                        (lv === null || lv === void 0 ? void 0 : lv.dataSourceId) === dsId) {
                        const resolved = (0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.getQueryableLayer)(lv === null || lv === void 0 ? void 0 : lv.layer);
                        if (resolved)
                            return this.toLiveMapLayer(resolved, map);
                    }
                }
                if (layerIdHint) {
                    const match = jlvList.find((lv) => { var _a; return String(((_a = lv === null || lv === void 0 ? void 0 : lv.layer) === null || _a === void 0 ? void 0 : _a.id) || "") === layerIdHint; });
                    const resolved = (0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.getQueryableLayer)(match === null || match === void 0 ? void 0 : match.layer);
                    if (resolved)
                        return this.toLiveMapLayer(resolved, map);
                }
                const dsMgr = jimu_core__WEBPACK_IMPORTED_MODULE_7__.DataSourceManager.getInstance();
                const ds = dsMgr.getDataSource(dsId);
                if (ds) {
                    try {
                        if (typeof ds.fetchSchema === "function")
                            yield ds.fetchSchema();
                    }
                    catch (_e) {
                        /* schema optional */
                    }
                    const dsLayer = (typeof ds.getLayer === "function" ? ds.getLayer() : null) ||
                        ds.layer ||
                        (typeof ds.getJimuLayer === "function" ? ds.getJimuLayer() : null);
                    const queryable = (0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.getQueryableLayer)(dsLayer);
                    if (queryable) {
                        const live = this.toLiveMapLayer(queryable, map);
                        if (live)
                            return live;
                    }
                    const dsUrl = String((ds === null || ds === void 0 ? void 0 : ds.url) || (queryable === null || queryable === void 0 ? void 0 : queryable.url) || (dsLayer === null || dsLayer === void 0 ? void 0 : dsLayer.url) || "");
                    if (dsUrl) {
                        const byUrl = (0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.findQueryableLayerOnMapByUrl)(map, dsUrl);
                        if (byUrl)
                            return byUrl;
                    }
                }
            }
            catch (_f) {
                /* ignore */
            }
            return null;
        });
        this.clampPopupToMapContainer = (pos, view) => {
            const container = view.container;
            const rect = container.getBoundingClientRect();
            const margin = this.POPUP_MARGIN;
            const pinned = this.state.pinToCorner;
            const { width: popupW, height: popupH } = this.getPopupDimensions(view, pinned, pos);
            const mapLeft = rect.left;
            const mapTop = rect.top;
            const mapRight = rect.right;
            const mapBottom = this.getEffectiveMapBottom(view, margin);
            const x = Math.max(mapLeft + margin, Math.min(pos.x, mapRight - popupW - margin));
            let y = pos.y;
            if (y + popupH > mapBottom) {
                y = mapBottom - popupH - margin;
            }
            y = Math.max(mapTop + margin, y);
            return { x, y };
        };
        this.ensureMapClickAttached = () => {
            var _a, _b;
            if (!this._isMounted)
                return false;
            const mapWidgetId = this.getLinkedMapWidgetId();
            const jmv = ((_a = this.state.jimuMapView) === null || _a === void 0 ? void 0 : _a.view)
                ? this.state.jimuMapView
                : this.getMapViewFromManager(mapWidgetId);
            if (!(jmv === null || jmv === void 0 ? void 0 : jmv.view))
                return false;
            if (!((_b = this.state.jimuMapView) === null || _b === void 0 ? void 0 : _b.view)) {
                this.onActiveViewChange(jmv);
                return true;
            }
            if (!this._clickHandle) {
                this.attachMapClick(jmv);
            }
            return !!this._clickHandle;
        };
        this.handleXyPageClosed = () => {
            if (!this.isDashboardEmbedded())
                return;
            if (this.state.showPopup) {
                this.closePopup({ restoreExtent: false, notifyDeselect: false });
            }
        };
        /**
         * Close the field popup when the hub geography moves (other tuman /
         * viloyat / year) or when polygon focus is cleared. Do not restore the
         * pre-field extent on geography change — Localization is already zooming
         * to the new district/region.
         */
        this.handleMasterFilterChanged = (event) => {
            if (!this._isMounted)
                return;
            const detail = event.detail || {};
            const f = detail.filters || {};
            const geoKey = `${String(f.yil || "")}|${String(f.viloyat || "")}|${String(f.tuman || "")}`;
            const prevGeo = this._lastMasterGeoKey;
            this._lastMasterGeoKey = geoKey;
            const geoChanged = Boolean(prevGeo) && prevGeo !== geoKey;
            const polygonCleared = f.polygonMode === false;
            const incomingUnique = String(f.uniqueid || "")
                .replace(/[{}]/g, "")
                .trim();
            if (f.polygonMode === true && incomingUnique) {
                this._activeInspectedUniqueid = incomingUnique;
                // Fallback: if selection arrived via hub but popup is still closed, open it.
                if (!this.state.showPopup) {
                    void this.openPopupForUniqueid(incomingUnique, {
                        zoom: false,
                        notifySelection: false,
                    });
                }
            }
            else if (polygonCleared) {
                this._activeInspectedUniqueid = null;
            }
            if (geoChanged) {
                this.closePopup({ restoreExtent: false, notifyDeselect: false });
                return;
            }
            // Same geography but hub cleared polygon focus (e.g. Graff deselect).
            if (polygonCleared && (this.state.showPopup || this.state.loading)) {
                this.closePopup({ restoreExtent: true, notifyDeselect: false });
            }
        };
        /** Immediate close when Region/Pie/year change geography (before map sync finishes). */
        this.handleWidgetSelectionChanged = (event) => {
            if (!this._isMounted)
                return;
            const d = event.detail || {};
            // Our own polygon notify must not close the popup we just opened.
            if (d.source === "AgriPopup")
                return;
            if (d.yil !== undefined ||
                d.viloyat !== undefined ||
                d.tuman !== undefined) {
                this.closePopup({ restoreExtent: false, notifyDeselect: false });
                return;
            }
            if (d.polygonMode === false) {
                this._activeInspectedUniqueid = null;
                this.closePopup({ restoreExtent: true, notifyDeselect: false });
                return;
            }
            if ((d.source === "AgriGraffWidget" || d.source === "AgriGraff10") &&
                d.polygonMode === true &&
                d.uniqueid) {
                const clean = String(d.uniqueid)
                    .replace(/[{}]/g, "")
                    .trim();
                this._activeInspectedUniqueid = clean;
                // Table / Graff selection must always open the field popup.
                void this.openPopupForUniqueid(clean, {
                    zoom: false,
                    notifySelection: false,
                });
            }
        };
        /**
         * Open (or refresh) the field popup for a polygon uniqueid — used when
         * selection comes from the table/Graff path (map click already opens itself).
         */
        this.openPopupForUniqueid = (uniqueid, opts) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const clean = String(uniqueid || "")
                .replace(/[{}]/g, "")
                .trim();
            if (!clean || !this._isMounted)
                return;
            const active = String(this._activeInspectedUniqueid || "")
                .replace(/[{}]/g, "")
                .trim();
            if (this.state.showPopup && active === clean && this.state.selectedAttrs) {
                if (this.state.popupMinimized) {
                    this.expandPopup();
                }
                else {
                    this.broadcastPopupVisibility(true);
                }
                return;
            }
            const jmv = this.state.jimuMapView;
            const view = jmv === null || jmv === void 0 ? void 0 : jmv.view;
            if (!view || !jmv)
                return;
            const clickGeneration = ++this._clickGeneration;
            const isStale = () => !this._isMounted || clickGeneration !== this._clickGeneration;
            this.setState({
                loading: true,
                error: null,
                loadingAttachments: true,
                attachments: [],
                attachmentsExpanded: true,
            });
            try {
                const layers = yield this.resolveClickLayers(view, jmv);
                if (isStale())
                    return;
                let feature = null;
                let clickedLayer = null;
                for (const layer of layers) {
                    if (!this.isAgriculturalFieldLayer(layer))
                        continue;
                    if (!this.isLayerEffectivelyVisible(layer, view))
                        continue;
                    const detached = yield this.getDetachedQueryLayer(layer);
                    if (isStale())
                        return;
                    const queryTarget = detached || layer;
                    const variants = [clean, `{${clean}}`];
                    for (const v of variants) {
                        const q = queryTarget.createQuery();
                        q.outFields = ["*"];
                        q.returnGeometry = true;
                        q.num = 1;
                        const escaped = String(v).replace(/'/g, "''");
                        q.where = `${_gis_agri_table_data_source__WEBPACK_IMPORTED_MODULE_19__.AGRI_TABLE_JOIN_FIELD}='${escaped}'`;
                        try {
                            const res = yield queryTarget.queryFeatures(q);
                            if ((_a = res.features) === null || _a === void 0 ? void 0 : _a[0]) {
                                feature = res.features[0];
                                clickedLayer = layer;
                                break;
                            }
                        }
                        catch (_m) {
                            /* try next variant / layer */
                        }
                    }
                    if (feature)
                        break;
                }
                if (!feature || !clickedLayer || isStale()) {
                    if (!isStale()) {
                        this.setState({
                            loading: false,
                            loadingAttachments: false,
                            attachments: [],
                        });
                    }
                    return;
                }
                const liveLayer = (this.toLiveMapLayer(clickedLayer, view.map) ||
                    clickedLayer);
                const layerKey = (0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.getAgriLayerMapKey)(liveLayer) ||
                    String((liveLayer === null || liveLayer === void 0 ? void 0 : liveLayer.url) || (liveLayer === null || liveLayer === void 0 ? void 0 : liveLayer.id) || "");
                const dsId = ((_b = this.state.layerKeyToDsId) === null || _b === void 0 ? void 0 : _b[layerKey]) || null;
                const oidField = liveLayer.objectIdField ||
                    ((_d = (_c = liveLayer.fields) === null || _c === void 0 ? void 0 : _c.find((f) => f.type === "oid")) === null || _d === void 0 ? void 0 : _d.name) ||
                    null;
                if (!oidField) {
                    if (!isStale()) {
                        this.setState({
                            loading: false,
                            loadingAttachments: false,
                            showPopup: false,
                        });
                    }
                    return;
                }
                const oid = (_e = feature.attributes) === null || _e === void 0 ? void 0 : _e[oidField];
                if (oid == null) {
                    if (!isStale()) {
                        this.setState({
                            loading: false,
                            loadingAttachments: false,
                            showPopup: false,
                        });
                    }
                    return;
                }
                const outFields = this.getOutFields(liveLayer, oidField);
                const f = (yield this.queryFeatureByObjectIdCached(liveLayer, oidField, oid, outFields)) || feature;
                if (isStale())
                    return;
                if (f.geometry)
                    this.highlightPolygon(f.geometry);
                const displayAttrs = yield this.resolveDisplayAttrs(f.attributes);
                if (isStale())
                    return;
                const shouldPin = this.state.pinToCorner;
                const popupPosition = shouldPin
                    ? this.calculatePinnedPosition(view)
                    : this.state.popupPosition || this.calculatePinnedPosition(view);
                const configuredFields = ((_f = this.props.config) === null || _f === void 0 ? void 0 : _f.fieldsToShow) || [];
                const actualFields = Object.keys(displayAttrs);
                const missingFields = configuredFields.filter((field) => !actualFields.includes(field));
                const fieldsWithData = configuredFields.filter((name) => displayAttrs.hasOwnProperty(name) &&
                    displayAttrs[name] != null &&
                    displayAttrs[name] !== "");
                this._activeInspectedUniqueid = clean;
                this.setState({
                    loading: false,
                    lastClickedDsId: dsId,
                    lastClickedLayerKey: layerKey,
                    selectedAttrs: displayAttrs,
                    selectedOID: Number(oid),
                    objectIdField: oidField,
                    showPopup: true,
                    popupMinimized: false,
                    chartExpanded: shouldPin,
                    chartHoverIndex: null,
                    popupPosition,
                    error: missingFields.length > 0
                        ? this.tr("error.configuredFieldMissing", {
                            fields: missingFields.join(", "),
                        })
                        : fieldsWithData.length === 0 && configuredFields.length > 0
                            ? this.tr("error.noDataForConfiguredFields")
                            : null,
                });
                if (opts === null || opts === void 0 ? void 0 : opts.notifySelection) {
                    this.notifyGraffPolygonSelection(clean, true, Date.now());
                }
                void this.fetchLatestVegetationIndices(clean);
                if ((opts === null || opts === void 0 ? void 0 : opts.zoom) !== false && f.geometry && !isStale()) {
                    try {
                        if (!this._extentBeforeSelection && ((_g = view.extent) === null || _g === void 0 ? void 0 : _g.clone)) {
                            this._extentBeforeSelection = view.extent.clone();
                        }
                        const target = ((_j = (_h = f.geometry.extent) === null || _h === void 0 ? void 0 : _h.expand) === null || _j === void 0 ? void 0 : _j.call(_h, 1.08)) || f.geometry;
                        void view.goTo({ target }, { duration: 650, easing: "ease-in-out" });
                    }
                    catch (_o) {
                        /* ignore */
                    }
                }
                if (((_l = (_k = this.props.config) === null || _k === void 0 ? void 0 : _k.settings) === null || _l === void 0 ? void 0 : _l.showAttachments) !== false) {
                    try {
                        const clickedUrl = String(liveLayer.url || "").trim();
                        const attachmentLayer = (clickedUrl && this._queryOnlyLayers.get(clickedUrl)) || liveLayer;
                        yield this.loadAttachmentsForOid(attachmentLayer, Number(oid));
                    }
                    catch (_p) {
                        if (!isStale()) {
                            this.setState({ loadingAttachments: false, attachments: [] });
                        }
                    }
                }
                else if (!isStale()) {
                    this.setState({ loadingAttachments: false, attachments: [] });
                }
                if (!isStale()) {
                    this.schedulePopupLayoutAfterContent();
                }
            }
            catch (e) {
                if (!isStale()) {
                    this.setState({
                        loading: false,
                        loadingAttachments: false,
                        error: (e === null || e === void 0 ? void 0 : e.message) || String(e),
                    });
                }
            }
        });
        this.handleSharedMapClick = (event) => __awaiter(this, void 0, void 0, function* () {
            // Always ignore the Localization click bus. AgriPopup owns view.on("click")
            // exclusively — handling both races two full onViewClick chains: the loser
            // often clears showPopup, restores the pre-selection extent, and flashes
            // other-district fields. Localization may still dispatch for other listeners.
            (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickDebug)("AgriPolygon ← shared map-click SKIP (direct view click is sole owner)");
            return;
        });
        /* ---------------- Click → hitTest → query full attrs ---------------- */
        this.toClickQueryGeometry = (view, screenPoint, mapPoint) => {
            if (typeof view.toMap === "function") {
                try {
                    const fromView = view.toMap(screenPoint);
                    if (fromView)
                        return fromView;
                }
                catch (_a) {
                    /* ignore */
                }
            }
            const x = Number(mapPoint === null || mapPoint === void 0 ? void 0 : mapPoint.x);
            const y = Number(mapPoint === null || mapPoint === void 0 ? void 0 : mapPoint.y);
            if (!Number.isFinite(x) || !Number.isFinite(y))
                return null;
            try {
                return new esri_geometry_Point__WEBPACK_IMPORTED_MODULE_2__["default"]({
                    x,
                    y,
                    spatialReference: (mapPoint === null || mapPoint === void 0 ? void 0 : mapPoint.spatialReference) || view.spatialReference,
                });
            }
            catch (_b) {
                return null;
            }
        };
        this.findHitGraphic = (hit, layers) => {
            var _a;
            const hitResult = (_a = hit === null || hit === void 0 ? void 0 : hit.results) === null || _a === void 0 ? void 0 : _a.find((r) => {
                if ("graphic" in r && r.graphic) {
                    const lyr = r.graphic.layer;
                    if (!lyr)
                        return false;
                    return layers.some((L) => this.layerKeysMatch(L, lyr));
                }
                return false;
            });
            return hitResult && "graphic" in hitResult ? hitResult.graphic : null;
        };
        this.pickClickGraphic = (hit, preferredLayers) => {
            var _a, _b;
            const activeView = (_a = this.state.jimuMapView) === null || _a === void 0 ? void 0 : _a.view;
            const map = activeView === null || activeView === void 0 ? void 0 : activeView.map;
            const candidates = [];
            const restrictToPreferred = preferredLayers.length > 0;
            for (const r of (hit === null || hit === void 0 ? void 0 : hit.results) || []) {
                if (!r || typeof r !== "object")
                    continue;
                const graphic = "graphic" in r && r.graphic
                    ? r.graphic
                    : null;
                if (!graphic)
                    continue;
                const rawLayer = graphic.layer;
                if (this.isHighlightLayer(rawLayer))
                    continue;
                const layer = this.toLiveMapLayer((0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.getQueryableLayer)(rawLayer) || rawLayer, map);
                if (!layer || !this.isAgriculturalFieldLayer(layer))
                    continue;
                if (!activeView || !this.isLayerEffectivelyVisible(layer, activeView))
                    continue;
                if (!this.isAgriculturalFieldGraphic(graphic, layer))
                    continue;
                if (restrictToPreferred &&
                    !preferredLayers.some((L) => this.layerKeysMatch(L, layer))) {
                    continue;
                }
                const geomType = String(((_b = graphic.geometry) === null || _b === void 0 ? void 0 : _b.type) || "").toLowerCase();
                const isPolygonLike = !geomType || geomType === "polygon" || geomType === "multipolygon";
                const hasAttributes = !!graphic.attributes && Object.keys(graphic.attributes).length > 0;
                if (geomType && !isPolygonLike)
                    continue;
                if (!hasAttributes && !graphic.geometry)
                    continue;
                candidates.push(graphic);
            }
            if (!candidates.length)
                return null;
            if (restrictToPreferred) {
                for (const graphic of candidates) {
                    const layer = this.toLiveMapLayer((0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.getQueryableLayer)(graphic.layer) || graphic.layer, map);
                    if (layer &&
                        preferredLayers.some((L) => this.layerKeysMatch(L, layer)) &&
                        layer.visible !== false) {
                        return graphic;
                    }
                }
                return null;
            }
            for (const graphic of candidates) {
                const layer = graphic.layer;
                if ((layer === null || layer === void 0 ? void 0 : layer.visible) !== false)
                    return graphic;
            }
            return candidates[0];
        };
        this.resolveClickFeatureAt = (ev, view, layers) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const clickScreenPoint = { x: ev.x, y: ev.y };
            const queryGeometry = this.toClickQueryGeometry(view, clickScreenPoint, ev.mapPoint);
            const queryLayers = layers.length > 0
                ? layers
                : this.getClickTargetLayers(view);
            // hitTest / identify can rehydrate MapImage sublayers and clear their
            // runtime definitionExpression (district filter) — snapshot every click
            // candidate now and restore any drift synchronously afterwards, before
            // an unfiltered export gets painted (other-district fields flash).
            const definitionSnapshot = this.snapshotDefinitionExpressions([
                ...layers,
                ...queryLayers,
            ]);
            // Always hit-test the rendered map without an include restriction. Map-image
            // sublayers frequently have runtime ids/URLs that differ from configured DS
            // wrappers; restricting include/preferred layers makes visible fields unclickable.
            const hit = yield view.hitTest(ev);
            this.restoreDriftedDefinitionExpressions(definitionSnapshot);
            // Only accept graphics belonging to the configured agricultural layers.
            // WebMap sketch/map-notes graphics can contain page-sized polygons; treating
            // one as a field makes goTo zoom out to a world extent.
            // Empty `layers` still allows agricultural hits (no preferred restriction).
            let g = this.pickClickGraphic(hit, layers);
            let queryHitLayer = null;
            if (!g && queryGeometry && queryLayers.length) {
                for (const layer of queryLayers) {
                    if (!this.isLayerEffectivelyVisible(layer, view))
                        continue;
                    if (!this.isAgriculturalFieldLayer(layer))
                        continue;
                    try {
                        // NEVER query the live layer here: on a MapImage sublayer that
                        // rehydrates it and clears the tuman definitionExpression, so the
                        // map briefly exports/paints every district's fields while the
                        // popup zoom runs. Use the detached off-map client instead and
                        // mirror the live filter onto the query WHERE.
                        const liveWhere = String(layer.definitionExpression || "").trim();
                        const detached = yield this.getDetachedQueryLayer(layer);
                        const queryTarget = detached || layer;
                        const q = queryTarget.createQuery();
                        q.geometry = queryGeometry;
                        q.spatialRelationship = "intersects";
                        q.outFields = ["*"];
                        q.returnGeometry = true;
                        q.num = 1;
                        if (liveWhere && liveWhere !== "1=1")
                            q.where = liveWhere;
                        const res = yield queryTarget.queryFeatures(q);
                        if (!detached) {
                            // Live-layer fallback (no URL) — repair any drift immediately.
                            this.restoreDriftedDefinitionExpressions(definitionSnapshot);
                        }
                        if ((_a = res.features) === null || _a === void 0 ? void 0 : _a[0]) {
                            g = res.features[0];
                            // Keep the LIVE layer as the hit layer — downstream layer-key /
                            // dsId / alias resolution must map back to the map's own layer.
                            queryHitLayer = layer;
                            break;
                        }
                    }
                    catch (_b) {
                        /* try next layer */
                    }
                }
            }
            if (!g)
                return null;
            return { graphic: g, queryHitLayer };
        });
        /**
         * Tells AgriGraff10 (via AgriLocalization, the central filter hub) which
         * polygon is currently inspected so its chart can switch to showing that
         * single polygon's vegetation-index series instead of the region-wide
         * timeseries. Mirrors the widgetSelectionChanged shape AgriGraffWidget
         * itself already dispatches on its own row-click selection.
         */
        this.notifyGraffPolygonSelection = (uniqueid, polygonMode, clickedAt) => {
            try {
                document.dispatchEvent(new CustomEvent("widgetSelectionChanged", {
                    detail: {
                        source: "AgriPopup",
                        polygonMode,
                        uniqueid: polygonMode ? uniqueid : "",
                        // Timestamp of the ORIGINAL map click (captured before this
                        // widget's own async attribute-resolution chain), not of this
                        // dispatch — lets downstream listeners (AgriGraff10) detect and
                        // ignore a stale notification that resolves after a newer click
                        // was already applied (see AgriGraff10's _lastAppliedPolygonClickedAt).
                        clickedAt: clickedAt !== null && clickedAt !== void 0 ? clickedAt : Date.now(),
                        timestamp: Date.now(),
                    },
                    bubbles: true,
                }));
            }
            catch (_a) {
                /* ignore */
            }
        };
        this.broadcastPopupVisibility = (open) => {
            const pinned = !!this.state.pinToCorner;
            try {
                document.dispatchEvent(new CustomEvent("agriMapPopupVisibility", {
                    detail: {
                        open: !!open,
                        pinned,
                        source: "AgriPopup",
                        timestamp: Date.now(),
                    },
                    bubbles: true,
                }));
            }
            catch (_a) {
                /* ignore */
            }
            if (open) {
                // Re-notify after paint so NDVI can measure the real popup box.
                requestAnimationFrame(() => {
                    try {
                        document.dispatchEvent(new CustomEvent("agriMapPopupVisibility", {
                            detail: {
                                open: true,
                                pinned,
                                layout: true,
                                source: "AgriPopup",
                                timestamp: Date.now(),
                            },
                            bubbles: true,
                        }));
                    }
                    catch (_a) {
                        /* ignore */
                    }
                });
            }
        };
        /**
         * Latest-day vegetation index values for the selected polygon, shown in
         * the popup. Reuses queryVegetationSeriesForUniqueId (queries the
         * agri_vegetation_indices ArcGIS table directly, same source AgriGraff10's
         * chart uses) rather than the api-agri export-image/available-dates REST
         * endpoints — those are for fetching a rendered raster for a specific
         * chosen date, which is unnecessary here; we only need the scalar index
         * values for whichever date is most recent, and the table already has
         * ndvi/savi/rvi/ci/evi/ndwi as plain fields per (uniqueid, raster_date).
         */
        this.fetchLatestVegetationIndices = (uniqueId) => __awaiter(this, void 0, void 0, function* () {
            const id = String(uniqueId || "").trim();
            if (!id) {
                this.setState({
                    loadingLatestIndices: false,
                    latestIndexDate: null,
                    latestIndexValues: null,
                });
                return;
            }
            const requestId = ++this._latestIndicesRequestId;
            (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickDebug)("vegetation:request", {
                uniqueid: id,
                source: "agri_vegetation_indices/FeatureServer/1",
                requestId,
            });
            this.setState({
                loadingLatestIndices: true,
            });
            try {
                const rows = yield (0,_gis_agri_vegetation_data_source__WEBPACK_IMPORTED_MODULE_18__.queryVegetationSeriesForUniqueId)(id);
                if (!this._isMounted || requestId !== this._latestIndicesRequestId)
                    return;
                if (!rows.length) {
                    this.setState({
                        loadingLatestIndices: false,
                        latestIndexDate: null,
                        latestIndexValues: null,
                    });
                    return;
                }
                // Rows come back ordered by raster_date ASC — the last one is the
                // most recent processed date for this polygon.
                const latest = rows[rows.length - 1];
                const date = (0,_gis_agri_vegetation_data_source__WEBPACK_IMPORTED_MODULE_18__.formatArcgisDateToYmd)(latest.raster_date);
                const values = {};
                for (const field of AgriPolygon.VEG_INDEX_FIELDS) {
                    const v = Number(latest[field]);
                    if (Number.isFinite(v))
                        values[field] = v;
                }
                (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickDebug)("vegetation:response", {
                    uniqueid: id,
                    requestId,
                    rowCount: rows.length,
                    latestDate: date,
                    values,
                });
                this.setState({
                    loadingLatestIndices: false,
                    latestIndexDate: date,
                    latestIndexValues: Object.keys(values).length ? values : null,
                });
            }
            catch (_a) {
                if (!this._isMounted || requestId !== this._latestIndicesRequestId)
                    return;
                this.setState({
                    loadingLatestIndices: false,
                    latestIndexDate: null,
                    latestIndexValues: null,
                });
            }
        });
        this.onViewClick = (ev) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
            try {
                document.dispatchEvent(new CustomEvent("agriPolygonMapClickPhase", {
                    detail: { phase: "click-start", timestamp: Date.now() },
                }));
            }
            catch (_t) {
                /* best-effort filter guard */
            }
            // Captured BEFORE any awaits below — this widget's attribute-resolution
            // chain (resolveClickLayers/resolveClickFeatureAt/query/resolveDisplayAttrs)
            // can take noticeably longer than AgriGraff10's own, more direct map-click
            // handling of the same click. If the user clicks a second polygon before
            // this chain finishes, the stale result must not win — clickedAt lets
            // AgriGraff10 detect and drop it.
            const clickStartedAt = Date.now();
            const clickGeneration = ++this._clickGeneration;
            (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickDebug)("click:received", {
                clickGeneration,
                x: ev.x,
                y: ev.y,
                mapPoint: ev.mapPoint
                    ? {
                        x: ev.mapPoint.x,
                        y: ev.mapPoint.y,
                        wkid: ((_a = ev.mapPoint.spatialReference) === null || _a === void 0 ? void 0 : _a.wkid) || null,
                    }
                    : null,
            });
            const isStale = () => !this._isMounted || clickGeneration !== this._clickGeneration;
            let popupOpenedForThisClick = false;
            const jmv = this.state.jimuMapView;
            const view = jmv === null || jmv === void 0 ? void 0 : jmv.view;
            if (!view || !jmv) {
                (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickWarn)("onViewClick SKIP: no view/jmv");
                return;
            }
            const layers = yield this.resolveClickLayers(view, jmv);
            if (isStale())
                return;
            (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickDebug)("onViewClick start", {
                screen: { x: ev.x, y: ev.y },
                layerCount: layers.length,
                layers: layers.map((l) => ({
                    id: l.id,
                    title: l.title,
                    url: l.url,
                })),
            });
            const clickScreenPoint = { x: ev.x, y: ev.y };
            const hitResult = yield this.resolveClickFeatureAt(ev, view, layers);
            if (isStale())
                return;
            try {
                document.dispatchEvent(new CustomEvent("agriPolygonMapClickPhase", {
                    detail: { phase: "after-hit-test", timestamp: Date.now() },
                }));
            }
            catch (_u) {
                /* best-effort filter guard */
            }
            if (!hitResult) {
                // Empty map click while a field popup is open = deselect and return to
                // the district/region extent saved before the field zoom.
                if (this.state.showPopup || this.state.loading) {
                    (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickDebug)("onViewClick: click outside — close popup + restore extent");
                    this.closePopup({ restoreExtent: true, notifyDeselect: true });
                }
                else {
                    (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickDebug)("onViewClick: click outside field polygons — ignored");
                }
                return;
            }
            const { graphic: g, queryHitLayer } = hitResult;
            try {
                this.setState({
                    loading: true,
                    error: null,
                    clickScreenPoint,
                    loadingAttachments: true,
                    attachments: [],
                    attachmentsExpanded: true,
                });
                (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickDebug)("field polygon hit", {
                    layerId: (_b = g.layer) === null || _b === void 0 ? void 0 : _b.id,
                    geometry: ((_c = g.geometry) === null || _c === void 0 ? void 0 : _c.type) || null,
                    attrKeys: g.attributes
                        ? Object.keys(g.attributes).slice(0, 8)
                        : [],
                });
                // queryFeatures results have no graphic.layer — use the layer we queried
                const clickedLayer = (queryHitLayer
                    ? this.toLiveMapLayer(queryHitLayer, view.map) || queryHitLayer
                    : this.toLiveMapLayer((0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.getQueryableLayer)(g.layer) || g.layer, view.map));
                if (!clickedLayer) {
                    (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickWarn)("no live layer for hit graphic");
                    if (!isStale())
                        this.setState({ loading: false, showPopup: false });
                    return;
                }
                const layerKey = (0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.getAgriLayerMapKey)(clickedLayer) ||
                    String((clickedLayer === null || clickedLayer === void 0 ? void 0 : clickedLayer.url) || (clickedLayer === null || clickedLayer === void 0 ? void 0 : clickedLayer.id) || "");
                const dsId = ((_d = this.state.layerKeyToDsId) === null || _d === void 0 ? void 0 : _d[layerKey]) || null;
                (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickDebug)("layer:resolved", {
                    title: clickedLayer.title,
                    id: clickedLayer.id,
                    url: clickedLayer.url || null,
                    layerKey,
                    dataSourceId: dsId,
                    definitionExpression: clickedLayer.definitionExpression || null,
                });
                const oidField = clickedLayer.objectIdField ||
                    ((_f = (_e = clickedLayer.fields) === null || _e === void 0 ? void 0 : _e.find((f) => f.type === "oid")) === null || _f === void 0 ? void 0 : _f.name) ||
                    null;
                if (!oidField) {
                    if (!isStale()) {
                        this.setState({
                            loading: false,
                            error: this.tr("error.objectIdFieldMissing"),
                            showPopup: false,
                            loadingAttachments: false,
                            attachments: [],
                        });
                        this.clearHighlight();
                    }
                    return;
                }
                const oid = (_g = g.attributes) === null || _g === void 0 ? void 0 : _g[oidField];
                if (oid == null) {
                    if (!isStale()) {
                        this.setState({
                            loading: false,
                            error: this.tr("error.objectIdMissing", { field: oidField }),
                            showPopup: false,
                            loadingAttachments: false,
                            attachments: [],
                        });
                        this.clearHighlight();
                    }
                    return;
                }
                const outFields = this.getOutFields(clickedLayer, oidField);
                const f = yield this.queryFeatureByObjectIdCached(clickedLayer, oidField, oid, outFields);
                if (isStale())
                    return;
                if (!f) {
                    this.setState({
                        loading: false,
                        error: this.tr("error.featureByObjectIdMissing"),
                        showPopup: false,
                        loadingAttachments: false,
                        attachments: [],
                    });
                    this.clearHighlight();
                    return;
                }
                if (f.geometry)
                    this.highlightPolygon(f.geometry);
                const earlyUniqueId = (_h = this.findAttributeValueCaseInsensitive(f.attributes, _gis_agri_table_data_source__WEBPACK_IMPORTED_MODULE_19__.AGRI_TABLE_JOIN_FIELD)) !== null && _h !== void 0 ? _h : null;
                const earlyCleanKey = String(earlyUniqueId || "")
                    .replace(/[{}]/g, "")
                    .trim();
                const activeKey = String(this._activeInspectedUniqueid || "")
                    .replace(/[{}]/g, "")
                    .trim();
                /*
                 * Same already-active field (incl. table selection) clicked on map →
                 * deactivate without zooming in again. Graff restores the pre-select extent.
                 * If the panel was only minimized, expand it instead of deselecting.
                 */
                if (activeKey && earlyCleanKey && activeKey === earlyCleanKey) {
                    if (this.state.popupMinimized) {
                        (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickDebug)("selection:expand-minimized-same-field", {
                            uniqueid: earlyCleanKey,
                        });
                        this.expandPopup();
                        return;
                    }
                    (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickDebug)("selection:toggle-off-same-field", {
                        uniqueid: earlyCleanKey,
                    });
                    this.clearHighlight();
                    this._activeInspectedUniqueid = null;
                    this.closePopup({ restoreExtent: true, notifyDeselect: true });
                    return;
                }
                // Kick Graff overlay + zoom BEFORE Agri_table join — that join used to
                // sit on the critical path (~seconds) while the index TIFF waited.
                if (earlyUniqueId != null && String(earlyUniqueId).trim() !== "") {
                    const earlyNotifyId = String(earlyUniqueId).trim();
                    this._activeInspectedUniqueid = earlyCleanKey;
                    (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickDebug)("selection:broadcast-early", {
                        uniqueid: earlyNotifyId,
                        source: "AgriPopup",
                        polygonMode: true,
                        destinations: ["AgriLocalization", "AgriGraff10"],
                    });
                    this.notifyGraffPolygonSelection(earlyNotifyId, true, clickStartedAt);
                    // Warm TIFF cache immediately (same tick as click) — uses last
                    // region/year/date published by Graff, or available-dates if needed.
                    (0,_gis_agri_vegetation_overlay_prefetch__WEBPACK_IMPORTED_MODULE_22__.prefetchVegetationOverlayForUniqueid)(earlyNotifyId);
                    // Defer FeatureServer series so export-image gets bandwidth first.
                    window.setTimeout(() => {
                        if (!this._isMounted)
                            return;
                        const active = String(this._activeInspectedUniqueid || "")
                            .replace(/[{}]/g, "")
                            .trim();
                        if (active !== earlyCleanKey)
                            return;
                        void this.fetchLatestVegetationIndices(earlyNotifyId);
                    }, 650);
                }
                const zoomToEarly = ((_k = (_j = this.props.config) === null || _j === void 0 ? void 0 : _j.settings) === null || _k === void 0 ? void 0 : _k.zoomToSelection) !== false;
                if (zoomToEarly && f.geometry && !isStale()) {
                    try {
                        if (!this._extentBeforeSelection && ((_l = view.extent) === null || _l === void 0 ? void 0 : _l.clone)) {
                            this._extentBeforeSelection = view.extent.clone();
                        }
                        const target = ((_o = (_m = f.geometry.extent) === null || _m === void 0 ? void 0 : _m.expand) === null || _o === void 0 ? void 0 : _o.call(_m, 1.08)) || f.geometry;
                        (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickDebug)("zoom:start-early", {
                            uniqueid: earlyCleanKey || null,
                            geometryType: f.geometry.type,
                            durationMs: 650,
                        });
                        void view
                            .goTo({ target }, { duration: 650, easing: "ease-in-out" })
                            .then(() => (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickDebug)("zoom:complete", {
                            uniqueid: earlyCleanKey || null,
                            scale: view.scale,
                        }), (error) => (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickWarn)("zoom:failed", {
                            uniqueid: earlyCleanKey || null,
                            error: (error === null || error === void 0 ? void 0 : error.message) || String(error),
                        }));
                    }
                    catch (_v) {
                        /* ignore */
                    }
                }
                try {
                    const loadStatus = String(clickedLayer.loadStatus || "").toLowerCase();
                    const isLoaded = Boolean(clickedLayer.loaded) || loadStatus === "loaded";
                    // Loading a live MapImage-owned sublayer rehydrates it and can clear
                    // the runtime tuman definitionExpression (other-district flash). The
                    // detached client from queryFeatureByObjectIdCached is already loaded
                    // and provides the same field metadata.
                    if (!isLoaded &&
                        !(0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.isMapImageOwnedLayer)(clickedLayer) &&
                        !(0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.isMapImageGroupSublayer)(clickedLayer)) {
                        (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickDebug)("layer:load-required", {
                            title: clickedLayer.title,
                            loadStatus: loadStatus || null,
                            definitionExpression: clickedLayer.definitionExpression || null,
                        });
                        yield (0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.safeLoadMapLayer)(clickedLayer);
                    }
                    else {
                        (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickDebug)("layer:load-skip-already-loaded", {
                            title: clickedLayer.title,
                            loadStatus: loadStatus || "loaded",
                            definitionExpression: clickedLayer.definitionExpression || null,
                        });
                    }
                }
                catch (_w) {
                    /* fresh field aliases from live layer */
                }
                if (isStale())
                    return;
                const shouldPin = this.state.pinToCorner;
                const popupPosition = shouldPin
                    ? this.calculatePinnedPosition(view)
                    : this.calculatePopupPosition(clickScreenPoint, view);
                // Agri_table_data has no geometry — the polygon layer only drives
                // map-click/highlight/zoom; the fields the popup shows come from the
                // external table, joined by uniqueid.
                const displayAttrs = yield this.resolveDisplayAttrs(f.attributes);
                if (isStale())
                    return;
                const configuredFields = ((_p = this.props.config) === null || _p === void 0 ? void 0 : _p.fieldsToShow) || [];
                const actualFields = Object.keys(displayAttrs);
                const missingFields = configuredFields.filter((field) => !actualFields.includes(field));
                const fieldsWithData = configuredFields.filter((name) => displayAttrs.hasOwnProperty(name) &&
                    displayAttrs[name] != null &&
                    displayAttrs[name] !== "");
                (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickDebug)("popup OPEN", {
                    oid,
                    oidField,
                    layerKey,
                    attributeKeys: actualFields.slice(0, 12),
                    popupPosition,
                });
                // Open the popup BEFORE goTo — awaiting zoom first left a long window
                // where a twin/shared click path could fail and wipe showPopup.
                this.setState({
                    loading: false,
                    // ✅ store which layer/ds was clicked (for alias resolving)
                    lastClickedDsId: dsId,
                    lastClickedLayerKey: layerKey,
                    selectedAttrs: displayAttrs,
                    selectedOID: Number(oid),
                    objectIdField: oidField,
                    showPopup: true,
                    popupMinimized: false,
                    chartExpanded: shouldPin,
                    chartHoverIndex: null,
                    popupPosition,
                    error: missingFields.length > 0
                        ? this.tr("error.configuredFieldMissing", {
                            fields: missingFields.join(", "),
                        })
                        : fieldsWithData.length === 0 && configuredFields.length > 0
                            ? this.tr("error.noDataForConfiguredFields")
                            : null,
                });
                popupOpenedForThisClick = true;
                const clickedUniqueId = (_q = this.findAttributeValueCaseInsensitive(displayAttrs, _gis_agri_table_data_source__WEBPACK_IMPORTED_MODULE_19__.AGRI_TABLE_JOIN_FIELD)) !== null && _q !== void 0 ? _q : this.findAttributeValueCaseInsensitive(f.attributes, _gis_agri_table_data_source__WEBPACK_IMPORTED_MODULE_19__.AGRI_TABLE_JOIN_FIELD);
                if (clickedUniqueId != null && String(clickedUniqueId).trim() !== "") {
                    const cleanUniqueId = String(clickedUniqueId).trim();
                    this._activeInspectedUniqueid = cleanUniqueId.replace(/[{}]/g, "").trim();
                    // Early broadcast already ran when polygon attrs had uniqueid; only
                    // notify again if the table join is the first place we saw it.
                    if (!earlyCleanKey || earlyCleanKey !== this._activeInspectedUniqueid) {
                        (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickDebug)("selection:broadcast", {
                            uniqueid: cleanUniqueId,
                            source: "AgriPopup",
                            polygonMode: true,
                            destinations: ["AgriLocalization", "AgriGraff10"],
                        });
                        this.notifyGraffPolygonSelection(cleanUniqueId, true, clickStartedAt);
                        void this.fetchLatestVegetationIndices(cleanUniqueId);
                    }
                }
                else {
                    this.setState({
                        loadingLatestIndices: false,
                        latestIndexDate: null,
                        latestIndexValues: null,
                    });
                }
                // Zoom already started early (before Agri_table join) when geometry exists.
                // Attachments are best-effort — never let a media fetch wipe an open popup
                // (that was the "vegetation updates but popup only sticks on 2nd/3rd click"
                // failure: notifyGraff ran, then loadAttachments threw → catch closed UI
                // and restoreExtentBeforeSelection made the map look like other fields).
                if (((_s = (_r = this.props.config) === null || _r === void 0 ? void 0 : _r.settings) === null || _s === void 0 ? void 0 : _s.showAttachments) !== false) {
                    try {
                        // Query attachments on the detached client too — queryAttachments
                        // on a live MapImage sublayer can rehydrate it (same DE-clearing
                        // path as queryFeatures) and it often lacks the API anyway.
                        const clickedUrl = String(clickedLayer.url || "").trim();
                        const attachmentLayer = (clickedUrl && this._queryOnlyLayers.get(clickedUrl)) ||
                            clickedLayer;
                        yield this.loadAttachmentsForOid(attachmentLayer, Number(oid));
                    }
                    catch (attachErr) {
                        (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickWarn)("attachments failed (popup kept open)", {
                            message: (attachErr === null || attachErr === void 0 ? void 0 : attachErr.message) || String(attachErr),
                        });
                        if (!isStale()) {
                            this.setState({ loadingAttachments: false, attachments: [] });
                        }
                    }
                }
                else if (!isStale()) {
                    this.setState({ loadingAttachments: false, attachments: [] });
                }
                if (isStale())
                    return;
                if (this.state.pinToCorner) {
                    this.schedulePopupLayoutAfterContent();
                }
                else if (this.isDashboardEmbedded()) {
                    this.schedulePopupLayoutAfterContent();
                }
            }
            catch (e) {
                // Never let a superseded twin/shared click clear a newer popup.
                if (isStale())
                    return;
                // If we already opened the popup for THIS click, keep it — surface error only.
                if (popupOpenedForThisClick) {
                    this.setState({
                        loading: false,
                        error: this.tr("error.unexpected", {
                            message: (e === null || e === void 0 ? void 0 : e.message) || "Unknown error",
                        }),
                        loadingAttachments: false,
                    });
                    return;
                }
                this.setState({
                    loading: false,
                    error: this.tr("error.unexpected", {
                        message: (e === null || e === void 0 ? void 0 : e.message) || "Unknown error",
                    }),
                    showPopup: false,
                    loadingAttachments: false,
                    attachments: [],
                });
                this.clearHighlight();
                this.notifyGraffPolygonSelection("", false);
                this.restoreExtentBeforeSelection();
            }
        });
        this.resolveFieldName = (key) => {
            var _a, _b, _c, _d;
            // Prefer DS schema for the LAST clicked ds (best for alias/jimuName)
            const dsId = this.state.lastClickedDsId;
            const ds = dsId && ((_a = this.state.dataSourcesById) === null || _a === void 0 ? void 0 : _a[dsId])
                ? this.state.dataSourcesById[dsId]
                : null;
            try {
                const schema = (_b = ds === null || ds === void 0 ? void 0 : ds.getSchema) === null || _b === void 0 ? void 0 : _b.call(ds);
                const fieldsObj = (schema === null || schema === void 0 ? void 0 : schema.fields) || {};
                if ((_c = fieldsObj[key]) === null || _c === void 0 ? void 0 : _c.name)
                    return fieldsObj[key].name;
                for (const k of Object.keys(fieldsObj)) {
                    const f = fieldsObj[k];
                    if ((f === null || f === void 0 ? void 0 : f.name) === key || (f === null || f === void 0 ? void 0 : f.jimuName) === key || k === key)
                        return (f === null || f === void 0 ? void 0 : f.name) || key;
                }
            }
            catch (_e) { }
            // fallback to clicked layer fields
            const clickedLayer = this.getClickedLayer();
            const lf = (_d = clickedLayer === null || clickedLayer === void 0 ? void 0 : clickedLayer.fields) === null || _d === void 0 ? void 0 : _d.find((ff) => ff.name === key || ff.alias === key);
            return (lf === null || lf === void 0 ? void 0 : lf.name) || null;
        };
        /* ---------------- Popup positioning ---------------- */
        this.calculatePopupPosition = (clickPoint, view) => {
            const container = view.container;
            const rect = container.getBoundingClientRect();
            const margin = this.POPUP_MARGIN;
            const popupW = this.getPopupWidth(view);
            const popupH = popupW;
            // ✅ EB builds differ:
            // - some give ev.x/ev.y relative to container (0..rect.width)
            // - others give viewport coords (same space as rect.left/top)
            const looksContainerRelative = clickPoint.x >= 0 &&
                clickPoint.y >= 0 &&
                clickPoint.x <= rect.width + 2 &&
                clickPoint.y <= rect.height + 2;
            // Convert click to VIEWPORT coords (because popup is position: fixed)
            const viewportClickX = looksContainerRelative
                ? rect.left + clickPoint.x
                : clickPoint.x;
            const viewportClickY = looksContainerRelative
                ? rect.top + clickPoint.y
                : clickPoint.y;
            // Map container boundaries in viewport coords
            const mapLeft = rect.left;
            const mapTop = rect.top;
            const mapRight = rect.right;
            const mapBottom = this.getEffectiveMapBottom(view, margin);
            // Prefer bottom-right of click
            let x = viewportClickX + margin;
            let y = viewportClickY + margin;
            // Flip left if overflowing right edge (CRITICAL!)
            // Check if popup would go outside map's right boundary
            if (x + popupW > mapRight - margin) {
                x = viewportClickX - popupW - margin;
            }
            // Flip up if overflowing bottom edge
            if (y + popupH > mapBottom - margin) {
                y = viewportClickY - popupH - margin;
            }
            // Final hard clamp to map container bounds
            // This is the critical part - ensure popup NEVER exceeds map bounds
            const minX = mapLeft + margin;
            const maxX = mapRight - popupW - margin;
            const minY = mapTop + margin;
            const maxY = mapBottom - popupH - margin;
            x = Math.max(minX, Math.min(x, maxX));
            y = Math.max(minY, Math.min(y, maxY));
            // FINAL SAFETY NET: Ensure x never exceeds right boundary
            if (x + popupW > mapRight - margin) {
                x = mapRight - popupW - margin;
            }
            // Also ensure x >= left boundary
            if (x < mapLeft + margin) {
                x = mapLeft + margin;
            }
            return { x, y };
        };
        this.closePopup = (opts) => {
            // Closing the panel alone must keep the polygon highlight + map extent.
            // Explicit callers (empty map click / geo reset) opt into restore/deselect.
            const restoreExtent = (opts === null || opts === void 0 ? void 0 : opts.restoreExtent) === true;
            const notifyDeselect = (opts === null || opts === void 0 ? void 0 : opts.notifyDeselect) === true;
            // Invalidate every pending hitTest/query/attachment request. Otherwise a
            // field click that was still loading could reopen its stale popup after
            // the user had already moved to another district or region.
            this._clickGeneration += 1;
            this._latestIndicesRequestId += 1;
            if (!this.state.showPopup) {
                if (notifyDeselect) {
                    this.clearHighlight();
                    this.notifyGraffPolygonSelection("", false);
                }
                if (!restoreExtent)
                    this._extentBeforeSelection = null;
                this.setState({
                    loading: false,
                    error: null,
                    selectedAttrs: null,
                    selectedOID: null,
                    objectIdField: null,
                    lastClickedDsId: null,
                    lastClickedLayerKey: null,
                    popupPosition: null,
                    clickScreenPoint: null,
                    popupMinimized: false,
                });
                return;
            }
            if (notifyDeselect) {
                this.clearHighlight();
                this.notifyGraffPolygonSelection("", false);
            }
            this.revokeAllAttachmentUrls();
            this.setState({
                showPopup: false,
                popupMinimized: false,
                popupPosition: null,
                clickScreenPoint: null,
                loading: false,
                error: null,
                selectedAttrs: null,
                selectedOID: null,
                objectIdField: null,
                lastClickedDsId: null,
                lastClickedLayerKey: null,
                attachments: [],
                attachmentsExpanded: false,
                loadingAttachments: false,
                chartExpanded: false,
                chartHoverIndex: null,
                loadingLatestIndices: false,
                latestIndexDate: null,
                latestIndexValues: null,
            });
            if (restoreExtent) {
                this.restoreExtentBeforeSelection();
            }
            else {
                this._extentBeforeSelection = null;
            }
        };
        /** Header X — collapse the panel; keep polygon selection + loaded attrs. */
        this.minimizePopup = () => {
            if (!this._isMounted || !this.state.showPopup || this.state.popupMinimized) {
                return;
            }
            this.setState({ popupMinimized: true });
        };
        /** Expand a previously minimized attribute panel. */
        this.expandPopup = () => {
            if (!this._isMounted || !this.state.showPopup || !this.state.popupMinimized) {
                return;
            }
            this.setState({ popupMinimized: false });
        };
        /* ---------------- DS hook (instantiates DS) ---------------- */
        this.onDataSourceCreated = (ds) => {
            if (!(ds === null || ds === void 0 ? void 0 : ds.id))
                return;
            this.dataSourceEngine.onDsCreated(ds, (0,_gis_agri_data_source_engine__WEBPACK_IMPORTED_MODULE_9__.getSelectedDsIds)(this.props.useDataSources));
            this.setState((prev) => ({
                dataSourcesById: Object.assign(Object.assign({}, (prev.dataSourcesById || {})), { [ds.id]: ds }),
            }));
            if (this.state.jimuMapView) {
                void this.initializeMapConnection(this.state.jimuMapView);
            }
            else {
                this.scheduleMapViewFallback();
            }
        };
        /* ---------------- Chart rendering ---------------- */
        this.toggleChartExpanded = () => {
            this.setState((prev) => ({ chartExpanded: !prev.chartExpanded }));
        };
        this.renderChartIcon = (type = "bar") => type === "line" ? (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_24__["default"], { className: "agri3-chart-icon", strokeWidth: 2, "aria-hidden": "true" })) : (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_25__["default"], { className: "agri3-chart-icon", strokeWidth: 2, "aria-hidden": "true" }));
        this.clearChartHover = () => {
            if (this.state.chartHoverIndex != null) {
                this.setState({ chartHoverIndex: null });
            }
        };
        this.setChartHover = (index) => {
            if (this.state.chartHoverIndex !== index) {
                this.setState({ chartHoverIndex: index });
            }
        };
        this.renderLatestIndices = () => {
            const { loadingLatestIndices, latestIndexDate, latestIndexValues } = this.state;
            const hasValues = !!latestIndexValues;
            const showBlockingLoader = loadingLatestIndices && !hasValues;
            const showRefreshLoader = loadingLatestIndices && hasValues;
            return (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-field-list agri3-indices-list" },
                jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-field-row agri3-indices-header-row" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("span", { className: "agri3-field-label agri3-indices-title" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_26__["default"], { size: 14, strokeWidth: 2.2, "aria-hidden": "true" }),
                        this.tr("indices.title")),
                    latestIndexDate && !loadingLatestIndices && (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("span", { className: "agri3-field-value agri3-indices-date" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_27__["default"], { size: 13, strokeWidth: 2, "aria-hidden": "true" }),
                        latestIndexDate))),
                showBlockingLoader ? (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-indices-loading-container" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(_shared_AgriChartLoader__WEBPACK_IMPORTED_MODULE_21__["default"], { label: this.tr("indices.loading") }))) : hasValues ? (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: `agri3-indices-body${showRefreshLoader ? " agri3-indices-body--loading" : ""}` },
                    showRefreshLoader ? (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(_shared_AgriChartLoader__WEBPACK_IMPORTED_MODULE_21__["default"], { label: this.tr("indices.loading") })) : null,
                    AgriPolygon.VEG_INDEX_FIELDS.filter((f) => latestIndexValues[f] != null).map((f) => (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: `agri3-field-row agri3-index-row agri3-index-row--${f}`, key: f },
                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("span", { className: `agri3-field-label agri3-index-label agri3-index-label--${f}` },
                            jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("span", { className: "agri3-index-dot", "aria-hidden": "true" }),
                            f.toUpperCase()),
                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("span", { className: "agri3-field-value" }, latestIndexValues[f].toFixed(4))))))) : (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-status-indicator agri3-status-waiting" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_28__["default"], { className: "agri3-status-icon", size: 16, strokeWidth: 2.2, "aria-hidden": "true" }),
                    this.tr("indices.none")))));
        };
        this.renderChart = () => {
            var _a;
            const config = this.props.config;
            if (!(config === null || config === void 0 ? void 0 : config.chartEnabled))
                return null;
            const chartFields = config.chartFields || [];
            const chartType = config.chartType || "bar";
            const chartTitle = config.chartTitle || "";
            const chartColor = config.chartColor || "#00a8e8";
            const attrs = this.state.selectedAttrs;
            const pinned = this.state.pinToCorner;
            const chartExpanded = pinned || this.state.chartExpanded;
            if (!attrs || chartFields.length === 0)
                return null;
            // Collect numeric data for chart
            const dataPoints = [];
            for (const fieldName of chartFields) {
                const raw = attrs[fieldName];
                const numVal = typeof raw === "number" ? raw : parseFloat(raw);
                if (!isNaN(numVal)) {
                    dataPoints.push({
                        label: this.getFieldAlias(fieldName),
                        value: numVal,
                    });
                }
            }
            if (dataPoints.length === 0)
                return null;
            const chartLabel = chartTitle || ((_a = dataPoints[0]) === null || _a === void 0 ? void 0 : _a.label) || "Grafik";
            const hoverIndex = this.state.chartHoverIndex;
            const svgWidth = 340;
            const svgHeight = 168;
            const padding = { top: 12, right: 12, bottom: 8, left: 40 };
            const chartW = svgWidth - padding.left - padding.right;
            const chartH = svgHeight - padding.top - padding.bottom;
            const maxVal = Math.max(...dataPoints.map((d) => d.value), 0);
            const yMax = this.niceChartMax(maxVal);
            const scaleY = (v) => chartH - (v / yMax) * chartH;
            const isDark = this.state.isDarkTheme;
            const axisColor = isDark ? "rgba(255,255,255,0.55)" : "#94a3b8";
            const gridColor = isDark ? "rgba(255,255,255,0.14)" : "#dbeafe";
            const chartBodyBg = isDark ? "transparent" : "#ffffff";
            const highlightFill = isDark
                ? "rgba(0, 168, 232, 0.12)"
                : "rgba(0, 168, 232, 0.1)";
            const gridLines = 4;
            const gridStep = yMax / gridLines;
            const barLayout = chartType === "bar"
                ? (() => {
                    const barGap = Math.max(6, Math.min(10, chartW / dataPoints.length / 4));
                    const barW = Math.max(8, (chartW - (dataPoints.length - 1) * barGap) / dataPoints.length);
                    return dataPoints.map((d, i) => {
                        const x = padding.left + i * (barW + barGap);
                        const barH = Math.max(2, (d.value / yMax) * chartH);
                        const y = padding.top + chartH - barH;
                        return Object.assign(Object.assign({}, d), { i, x, y, barW, barH, centerX: x + barW / 2 });
                    });
                })()
                : [];
            const linePoints = chartType === "line"
                ? (() => {
                    const stepX = dataPoints.length > 1 ? chartW / (dataPoints.length - 1) : 0;
                    return dataPoints.map((d, i) => (Object.assign(Object.assign({}, d), { i, x: padding.left +
                            (dataPoints.length > 1 ? i * stepX : chartW / 2), y: padding.top + scaleY(d.value) })));
                })()
                : [];
            const hoverPoint = hoverIndex != null
                ? chartType === "bar"
                    ? barLayout[hoverIndex]
                    : linePoints[hoverIndex]
                : null;
            const tooltipLeftPct = hoverPoint
                ? Math.max(8, Math.min(82, (hoverPoint.x / svgWidth) * 100))
                : 0;
            const tooltipTopPct = hoverPoint
                ? Math.max(6, Math.min(58, (hoverPoint.y / svgHeight) * 100 - 18))
                : 0;
            const chartSvg = (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("svg", { width: "100%", viewBox: `0 0 ${svgWidth} ${svgHeight}`, className: "agri3-chart-svg", style: { background: chartBodyBg } },
                jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("rect", { x: padding.left, y: padding.top, width: chartW, height: chartH, fill: isDark ? "rgba(255,255,255,0.02)" : "#ffffff", rx: 6 }),
                Array.from({ length: gridLines + 1 }).map((_, i) => {
                    const val = gridStep * i;
                    const y = padding.top + scaleY(val);
                    return (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("g", { key: `grid-${i}` },
                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("line", { x1: padding.left, y1: y, x2: svgWidth - padding.right, y2: y, stroke: gridColor, strokeWidth: 1, strokeDasharray: "3 5" }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("text", { x: padding.left - 8, y: y + 4, fill: axisColor, fontSize: 10, textAnchor: "end" }, this.formatChartTick(val))));
                }),
                chartType === "bar" &&
                    barLayout.map((bar) => (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("g", { key: `bar-${bar.i}` },
                        hoverIndex === bar.i && (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("rect", { x: bar.x - 3, y: padding.top, width: bar.barW + 6, height: chartH, fill: highlightFill, rx: 5 })),
                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("path", { d: this.buildRoundedBarPath(bar.x, bar.y, bar.barW, bar.barH, 5), fill: chartColor, opacity: hoverIndex == null || hoverIndex === bar.i ? 1 : 0.45, className: "agri3-chart-bar", onMouseEnter: () => this.setChartHover(bar.i) }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("rect", { x: bar.x, y: padding.top, width: bar.barW, height: chartH, fill: "transparent", onMouseEnter: () => this.setChartHover(bar.i) })))),
                chartType === "line" && (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("g", null,
                    hoverIndex != null && linePoints[hoverIndex] && (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("line", { x1: linePoints[hoverIndex].x, y1: padding.top, x2: linePoints[hoverIndex].x, y2: padding.top + chartH, stroke: chartColor, strokeWidth: 1.5, opacity: 0.35 })),
                    jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("path", { d: this.buildSmoothLinePath(linePoints), fill: "none", stroke: chartColor, strokeWidth: 2.5, strokeLinejoin: "round", strokeLinecap: "round" }),
                    linePoints.map((p) => (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("g", { key: `pt-${p.i}` },
                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("circle", { cx: p.x, cy: p.y, r: hoverIndex === p.i ? 5.5 : 4, fill: isDark ? "#0b1a30" : "#ffffff", stroke: chartColor, strokeWidth: hoverIndex === p.i ? 2.5 : 2, className: "agri3-chart-point", onMouseEnter: () => this.setChartHover(p.i) }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("circle", { cx: p.x, cy: p.y, r: 12, fill: "transparent", onMouseEnter: () => this.setChartHover(p.i) }))))))));
            const chartBody = (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-chart-body", onMouseLeave: this.clearChartHover },
                hoverPoint && (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-chart-tooltip", style: {
                        left: `${tooltipLeftPct}%`,
                        top: `${tooltipTopPct}%`,
                    } },
                    jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-chart-tooltip-label" }, hoverPoint.label),
                    jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-chart-tooltip-value" }, this.formatChartTooltipValue(hoverPoint.value)))),
                chartSvg));
            if (!chartExpanded) {
                return (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("button", { type: "button", className: "agri3-chart-trigger", onClick: this.toggleChartExpanded },
                    jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("span", { className: "agri3-chart-trigger-icon" }, this.renderChartIcon(chartType)),
                    jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("span", { className: "agri3-chart-trigger-label" }, chartLabel),
                    jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("span", { className: "agri3-chart-trigger-chevron", "aria-hidden": "true" }, "\u25BE")));
            }
            return (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-chart-panel" },
                !pinned ? (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("button", { type: "button", className: "agri3-chart-panel-header", onClick: this.toggleChartExpanded },
                    jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("span", { className: "agri3-chart-trigger-icon" }, this.renderChartIcon(chartType)),
                    jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("span", { className: "agri3-chart-trigger-label" }, chartLabel),
                    jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("span", { className: "agri3-chart-trigger-chevron is-open", "aria-hidden": "true" }, "\u25B4"))) : (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-chart-panel-header agri3-chart-panel-header--static" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("span", { className: "agri3-chart-trigger-icon" }, this.renderChartIcon(chartType)),
                    jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("span", { className: "agri3-chart-trigger-label" }, chartLabel))),
                jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-chart-container" }, chartBody)));
        };
        /* ---------------- Popup UI ---------------- */
        this.renderPopup = () => {
            var _a, _b, _c, _d, _e;
            const { selectedAttrs, selectedOID, loading, error, showPopup, popupMinimized, popupPosition, loadingAttachments, attachments, attachmentsError, pinToCorner, } = this.state;
            if (!showPopup)
                return null;
            const fields = (((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.fieldsToShow) || [])
                .map((n) => this.resolveFieldName(n) || n)
                .filter(Boolean);
            const title = this.tr("title.attributes");
            const view = (_b = this.state.jimuMapView) === null || _b === void 0 ? void 0 : _b.view;
            const layoutPos = popupPosition;
            if (popupMinimized) {
                const viewForChip = view || ((_c = this.state.jimuMapView) === null || _c === void 0 ? void 0 : _c.view) || null;
                const mapRect = viewForChip ? this.getMapAreaRect(viewForChip) : null;
                const chipStyle = mapRect
                    ? {
                        position: "fixed",
                        right: Math.max(8, (typeof window !== "undefined" ? window.innerWidth : mapRect.right) -
                            mapRect.right +
                            this.DASHBOARD_POPUP_VERTICAL_INSET),
                        top: mapRect.top + this.DASHBOARD_POPUP_VERTICAL_INSET,
                        left: "auto",
                        bottom: "auto",
                        transform: "none",
                    }
                    : {
                        position: "fixed",
                        right: this.DASHBOARD_POPUP_VERTICAL_INSET,
                        top: this.DASHBOARD_POPUP_VERTICAL_INSET,
                        left: "auto",
                        bottom: "auto",
                    };
                const stopMapHit = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                };
                return (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: `agri3-popup-minimized ${pinToCorner ? "is-pinned" : "is-floating"}`, style: chipStyle, ref: this._popupRef, onMouseDown: stopMapHit, onPointerDown: stopMapHit, onClick: stopMapHit },
                    jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("button", { type: "button", className: "agri3-popup-minimized-btn", onMouseDown: stopMapHit, onPointerDown: stopMapHit, onClick: (e) => {
                            stopMapHit(e);
                            this.expandPopup();
                        }, title: this.tr("action.expand"), "aria-label": this.tr("action.expand") },
                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("span", { className: "agri3-popup-minimized-accent", "aria-hidden": "true" }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("span", { className: "agri3-popup-minimized-title" }, title),
                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_29__["default"], { className: "agri3-popup-minimized-icon", size: 16, strokeWidth: 2.4, "aria-hidden": "true" }))));
            }
            const { width: popupWidth, height: popupHeight } = this.getPopupDimensions(view || null, pinToCorner, layoutPos);
            const dimensionStyle = {
                width: `${popupWidth}px`,
                minWidth: `${popupWidth}px`,
                maxWidth: `${popupWidth}px`,
                height: `${popupHeight}px`,
                maxHeight: `${popupHeight}px`,
            };
            const stylePinned = layoutPos
                ? Object.assign({ left: layoutPos.x, top: layoutPos.y, transform: "none" }, dimensionStyle) : Object.assign({}, dimensionStyle);
            const styleFree = Object.assign({ left: (layoutPos === null || layoutPos === void 0 ? void 0 : layoutPos.x) || "50%", top: (layoutPos === null || layoutPos === void 0 ? void 0 : layoutPos.y) || "50%", transform: !layoutPos ? "translate(-50%, -50%)" : "none" }, dimensionStyle);
            const popupStyle = pinToCorner ? stylePinned : styleFree;
            const showAttachments = ((_e = (_d = this.props.config) === null || _d === void 0 ? void 0 : _d.settings) === null || _e === void 0 ? void 0 : _e.showAttachments) !== false;
            const hasAttachments = ((attachments === null || attachments === void 0 ? void 0 : attachments.length) || 0) > 0;
            return (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: `agri3-popup-direct ${pinToCorner ? "is-pinned" : "is-floating"}`, style: popupStyle, ref: this._popupRef },
                jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-popup-header", onMouseDown: this.onPopupHeaderMouseDown },
                    jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("button", { className: `agri3-popup-pin${pinToCorner ? " active" : ""}`, onClick: this.togglePinToCorner, title: pinToCorner ? this.tr("action.unpin") : this.tr("action.pin"), "aria-pressed": pinToCorner, type: "button" }, pinToCorner ? (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_30__["default"], { size: 15, strokeWidth: 2.2, "aria-hidden": "true" })) : (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_31__["default"], { size: 15, strokeWidth: 2.2, "aria-hidden": "true" }))),
                    jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("h2", { className: "agri3-popup-title" }, title),
                    jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("button", { type: "button", className: "agri3-popup-close", onClick: this.minimizePopup, "aria-label": this.tr("action.minimize"), title: this.tr("action.minimize") },
                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_32__["default"], { size: 16, strokeWidth: 2.4, "aria-hidden": "true" }))),
                jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-popup-content" },
                    error && (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-error-container" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_33__["default"], { className: "agri3-error-icon", size: 20, strokeWidth: 2.2, "aria-hidden": "true" }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-error-title" }, this.tr("status.warning")),
                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-error-message" }, error))),
                    loading && (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-loading-container" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(_shared_AgriChartLoader__WEBPACK_IMPORTED_MODULE_21__["default"], { label: this.tr("status.loadingFeature") }))),
                    !loading && selectedAttrs && fields.length > 0 && (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-field-list" },
                        fields
                            .filter((name) => {
                            if (!selectedAttrs.hasOwnProperty(name))
                                return false;
                            const val = selectedAttrs[name];
                            if (val == null || val === "")
                                return false;
                            if (typeof val === "string" && !val.trim())
                                return false;
                            return true;
                        })
                            .map((name) => (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-field-row", key: name },
                            jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("span", { className: "agri3-field-label" }, this.getFieldAlias(name)),
                            jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("span", { className: "agri3-field-value" }, this.formatValue(name, selectedAttrs[name]))))),
                        fields.filter((name) => selectedAttrs.hasOwnProperty(name) &&
                            selectedAttrs[name] != null &&
                            selectedAttrs[name] !== "").length === 0 && (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-status-indicator agri3-status-waiting" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_28__["default"], { className: "agri3-status-icon", size: 16, strokeWidth: 2.2, "aria-hidden": "true" }),
                            this.tr("status.noConfiguredData"))))),
                    !loading && selectedAttrs && fields.length === 0 && (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-status-indicator agri3-status-waiting" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_34__["default"], { className: "agri3-status-icon", size: 16, strokeWidth: 2.2, "aria-hidden": "true" }),
                        this.tr("status.noFields"))),
                    !loading && selectedAttrs && this.renderLatestIndices(),
                    !loading && selectedAttrs && this.renderChart(),
                    showAttachments && (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-attachments" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-attachments-header" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-attachments-title" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_35__["default"], { size: 15, strokeWidth: 2.2, "aria-hidden": "true" }),
                                this.tr("attachments.title"),
                                " ",
                                hasAttachments ? `(${attachments.length})` : "")),
                        loadingAttachments && (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-loading-container agri3-loading-container--compact", style: { marginTop: 8 } },
                            jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(_shared_AgriChartLoader__WEBPACK_IMPORTED_MODULE_21__["default"], { label: this.tr("status.loadingAttachments") }))),
                        !loadingAttachments && attachmentsError && (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-status-indicator agri3-status-waiting", style: { marginTop: 6 }, title: attachmentsError },
                            jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_33__["default"], { className: "agri3-status-icon", size: 16, strokeWidth: 2.2, "aria-hidden": "true" }),
                            this.tr("status.attachmentsError") || attachmentsError)),
                        !loadingAttachments && !attachmentsError && !hasAttachments && (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-status-indicator agri3-status-waiting", style: { marginTop: 6 } },
                            jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_35__["default"], { className: "agri3-status-icon", size: 16, strokeWidth: 2.2, "aria-hidden": "true" }),
                            this.tr("status.noAttachments"))),
                        !loadingAttachments && hasAttachments && (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-attachments-body" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-attachments-images agri3-grid" }, attachments
                                .filter((a) => a.previewObjectUrl)
                                .map((a) => (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("a", { key: `img-${a.id}`, href: a.url, target: "_blank", rel: "noopener noreferrer", className: "agri3-attachment-thumb agri3-card", title: a.name || this.tr("attachment.imageFallback"), download: a.name || undefined },
                                jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("img", { src: a.previewObjectUrl, alt: a.name || this.tr("attachment.imageFallback") }),
                                jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-thumb-caption", title: a.name || "" }, a.name || this.tr("attachment.imageFallback")))))),
                            jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-attachments-files" }, attachments
                                .filter((a) => !a.previewObjectUrl)
                                .map((a) => (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-attachment-file agri3-card", key: `file-${a.id}` },
                                jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-attachment-file-top" },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-attachment-file-name", title: a.name || "" },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_36__["default"], { size: 14, strokeWidth: 2.2, "aria-hidden": "true" }),
                                        a.name ||
                                            this.tr("attachment.fileFallback", {
                                                id: a.id,
                                            })),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("a", { className: "agri3-attachment-download", href: a.url, target: "_blank", rel: "noopener noreferrer", download: a.name || undefined },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_37__["default"], { size: 13, strokeWidth: 2.2, "aria-hidden": "true" }),
                                        this.tr("attachment.download"))),
                                jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-attachment-file-meta" },
                                    (a.contentType || "").split("/").pop() || "",
                                    " ",
                                    a.size ? `• ${this.bytesToSize(a.size)}` : ""))))))))),
                    !loading && !selectedAttrs && !error && (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-status-indicator agri3-status-waiting" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_38__["default"], { className: "agri3-status-icon", size: 16, strokeWidth: 2.2, "aria-hidden": "true" }),
                        this.tr("status.clickPolygon"))))));
        };
        this.dataSourceEngine = (0,_gis_agri_engine_registry__WEBPACK_IMPORTED_MODULE_12__.getSharedAgriDataSourceEngine)(props.id);
        this.state = {
            currentLang: (0,_messages__WEBPACK_IMPORTED_MODULE_23__.getInitialLang)(),
            isDarkTheme: this.getResolvedTheme(),
            jimuMapView: null,
            featureLayers: [],
            layerKeyToDsId: {},
            dataSourcesById: {},
            lastClickedDsId: null,
            lastClickedLayerKey: null,
            pinToCorner: true,
            loadingAttachments: false,
            attachments: [],
            attachmentsError: null,
            attachmentsExpanded: false,
            loading: false,
            error: null,
            selectedAttrs: null,
            selectedOID: null,
            objectIdField: null,
            showPopup: false,
            popupMinimized: false,
            popupPosition: null,
            clickScreenPoint: null,
            debugInfo: {},
            chartExpanded: false,
            chartHoverIndex: null,
            loadingLatestIndices: false,
            latestIndexDate: null,
            latestIndexValues: null,
        };
    }
    componentDidMount() {
        this._isMounted = true;
        this.setupThemeObserver();
        const isDarkTheme = this.getResolvedTheme();
        if (isDarkTheme !== this.state.isDarkTheme) {
            this.setState({ isDarkTheme });
        }
        document.addEventListener("themeChanged", this.handleThemeChange);
        document.addEventListener("languageChanged", this.handleLanguageChange);
        document.addEventListener("mousedown", this.handleOutsideClick);
        this._unbindMasterFilter = (0,_data_agri_filter_bus__WEBPACK_IMPORTED_MODULE_20__.bindMasterFilter)(this.handleMasterFilterChanged);
        document.addEventListener("widgetSelectionChanged", this.handleWidgetSelectionChanged);
        window.addEventListener("resize", this.schedulePopupLayout);
        window.addEventListener(_gis_agri_data_layer_roles__WEBPACK_IMPORTED_MODULE_10__.AGRI_MAP_VIEW_READY_EVENT, this.handleMapViewReady);
        window.addEventListener(_gis_agri_data_layer_roles__WEBPACK_IMPORTED_MODULE_10__.AGRI_MAP_CLICK_EVENT, this.handleSharedMapClick);
        window.addEventListener(_gis_agri_data_layer_roles__WEBPACK_IMPORTED_MODULE_10__.AGRI_XY_PAGE_CLOSED_EVENT, this.handleXyPageClosed);
        if (!this.isDashboardEmbedded()) {
            window.addEventListener("scroll", this.schedulePopupLayout, true);
        }
        this.scheduleMapViewFallback();
        this.mapClickBootstrapTimer = setInterval(() => {
            if (this.ensureMapClickAttached() && this.mapClickBootstrapTimer) {
                clearInterval(this.mapClickBootstrapTimer);
                this.mapClickBootstrapTimer = null;
            }
        }, 2500);
        (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickDebug)("AgriPolygon mounted", {
            widgetId: this.props.id,
            embedded: this.isDashboardEmbedded(),
            mapWidgetId: this.getLinkedMapWidgetId(),
            useDataSourceIds: (0,_gis_agri_data_source_engine__WEBPACK_IMPORTED_MODULE_9__.getSelectedDsIds)(this.props.useDataSources),
        });
    }
    componentWillUnmount() {
        var _a, _b;
        this._isMounted = false;
        if (this.state.showPopup) {
            this.broadcastPopupVisibility(false);
        }
        document.removeEventListener("themeChanged", this.handleThemeChange);
        document.removeEventListener("languageChanged", this.handleLanguageChange);
        this.detachMapClick();
        this.cleanupHighlight();
        document.removeEventListener("mousedown", this.handleOutsideClick);
        (_a = this._unbindMasterFilter) === null || _a === void 0 ? void 0 : _a.call(this);
        this._unbindMasterFilter = null;
        document.removeEventListener("widgetSelectionChanged", this.handleWidgetSelectionChanged);
        window.removeEventListener("resize", this.schedulePopupLayout);
        window.removeEventListener(_gis_agri_data_layer_roles__WEBPACK_IMPORTED_MODULE_10__.AGRI_MAP_VIEW_READY_EVENT, this.handleMapViewReady);
        window.removeEventListener(_gis_agri_data_layer_roles__WEBPACK_IMPORTED_MODULE_10__.AGRI_MAP_CLICK_EVENT, this.handleSharedMapClick);
        window.removeEventListener(_gis_agri_data_layer_roles__WEBPACK_IMPORTED_MODULE_10__.AGRI_XY_PAGE_CLOSED_EVENT, this.handleXyPageClosed);
        if (this.mapViewFallbackTimer)
            clearTimeout(this.mapViewFallbackTimer);
        if (this.mapInitRetryTimer)
            clearTimeout(this.mapInitRetryTimer);
        if (this.mapClickBootstrapTimer)
            clearInterval(this.mapClickBootstrapTimer);
        window.removeEventListener("scroll", this.schedulePopupLayout, true);
        if (this._popupLayoutTimer)
            clearTimeout(this._popupLayoutTimer);
        if (this._popupLayoutRaf)
            cancelAnimationFrame(this._popupLayoutRaf);
        (_b = this.mapAreaResizeObserver) === null || _b === void 0 ? void 0 : _b.disconnect();
        this.mapAreaResizeObserver = null;
        window.removeEventListener("mousemove", this.onPopupDragMove);
        window.removeEventListener("mouseup", this.onPopupDragEnd);
        if (this.themeObserver) {
            this.themeObserver.disconnect();
            this.themeObserver = null;
        }
        this.revokeAllAttachmentUrls();
        this._featureQueryCache.clear();
    }
    pruneFeatureQueryCache(now = Date.now()) {
        for (const [key, entry] of this._featureQueryCache) {
            if (entry.expires <= now)
                this._featureQueryCache.delete(key);
        }
    }
    getFeatureQueryCacheKey(layer, oidField, oid, outFields) {
        const layerKey = String((layer === null || layer === void 0 ? void 0 : layer.url) || layer.id || layer.title || "");
        const fieldsKey = Array.from(new Set(outFields.map((f) => String(f))))
            .sort()
            .join(",");
        return `${layerKey}|${oidField}|${String(oid)}|${fieldsKey}`;
    }
    /** Snapshot the live definitionExpression of each layer (pre-hitTest). */
    snapshotDefinitionExpressions(layers) {
        var _a;
        const snapshot = new Map();
        for (const layer of layers) {
            if (!layer || snapshot.has(layer))
                continue;
            try {
                snapshot.set(layer, String((_a = layer.definitionExpression) !== null && _a !== void 0 ? _a : ""));
            }
            catch (_b) {
                /* ignore */
            }
        }
        return snapshot;
    }
    /**
     * Restore any definitionExpression that drifted (was cleared by hitTest /
     * identify / load rehydration) synchronously, before the unfiltered
     * MapImage export can be painted.
     */
    restoreDriftedDefinitionExpressions(snapshot) {
        snapshot.forEach((expression, layer) => {
            var _a;
            try {
                const current = String((_a = layer.definitionExpression) !== null && _a !== void 0 ? _a : "");
                if (current !== expression) {
                    layer.definitionExpression = expression;
                    (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickWarn)("definitionExpression drift restored", {
                        layer: (layer === null || layer === void 0 ? void 0 : layer.title) || (layer === null || layer === void 0 ? void 0 : layer.url) || (layer === null || layer === void 0 ? void 0 : layer.id),
                        drifted: current || "<empty>",
                        restored: expression || "<empty>",
                    });
                }
            }
            catch (_b) {
                /* ignore */
            }
        });
    }
    queryFeatureByObjectIdCached(layer, oidField, oid, outFields) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const now = Date.now();
            this.pruneFeatureQueryCache(now);
            const key = this.getFeatureQueryCacheKey(layer, oidField, oid, outFields);
            const hit = this._featureQueryCache.get(key);
            if (hit && hit.expires > now) {
                (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickDebug)("feature-query:cache-hit", {
                    layer: layer.title || layer.url || layer.id,
                    oidField,
                    oid,
                    outFieldCount: outFields.length,
                });
                return hit.value;
            }
            const job = (() => __awaiter(this, void 0, void 0, function* () {
                var _a, _b, _c, _d, _e, _f;
                const liveDefinitionExpression = String(layer.definitionExpression || "");
                // Calling queryFeatures on a live MapImage sublayer can rehydrate that
                // sublayer and temporarily clear its runtime definitionExpression. The
                // map then renders every district until Localization's guard restores
                // the filter. Query an off-map FeatureLayer client instead.
                const detachedQueryLayer = yield this.getDetachedQueryLayer(layer);
                const queryLayer = detachedQueryLayer || layer;
                const q = queryLayer.createQuery();
                q.where = `${oidField} = ${Number(oid)}`;
                q.outFields = outFields;
                q.returnGeometry = true;
                (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickDebug)("feature-query:request", {
                    layer: layer.title || layer.url || layer.id,
                    url: layer.url || null,
                    where: q.where,
                    outFields,
                    returnGeometry: true,
                });
                const res = yield queryLayer.queryFeatures(q);
                // Defensive restore for the no-URL fallback. The detached path above
                // never touches the live layer.
                if (queryLayer === layer &&
                    String(layer.definitionExpression || "") !==
                        liveDefinitionExpression) {
                    layer.definitionExpression = liveDefinitionExpression;
                }
                (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickDebug)("feature-query:response", {
                    layer: layer.title || layer.url || layer.id,
                    featureCount: ((_a = res.features) === null || _a === void 0 ? void 0 : _a.length) || 0,
                    hasGeometry: Boolean((_c = (_b = res.features) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.geometry),
                    attributeKeys: Object.keys(((_e = (_d = res.features) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.attributes) || {}),
                    queryMode: queryLayer === layer ? "live-fallback" : "detached",
                    liveDefinitionExpression: layer.definitionExpression || null,
                });
                return ((_f = res.features) === null || _f === void 0 ? void 0 : _f[0]) || null;
            }))();
            this._featureQueryCache.set(key, {
                expires: now + this._featureQueryCacheTtlMs,
                value: job,
            });
            try {
                const feature = yield job;
                if (!feature && ((_a = this._featureQueryCache.get(key)) === null || _a === void 0 ? void 0 : _a.value) === job) {
                    this._featureQueryCache.delete(key);
                }
                return feature;
            }
            catch (err) {
                if (((_b = this._featureQueryCache.get(key)) === null || _b === void 0 ? void 0 : _b.value) === job) {
                    this._featureQueryCache.delete(key);
                }
                throw err;
            }
        });
    }
    /* --- pinned popup helpers --- */
    isDashboardEmbedded() {
        return String(this.props.id || "").endsWith("-popup");
    }
    /** Crop overlay top in viewport coords; null when not used. */
    getCropOverlayTop() {
        if (!this.isDashboardEmbedded())
            return null;
        const cropEl = document.querySelector(".agri-dashboard-crop-overlay.agri-dashboard-managed-crop");
        if (cropEl) {
            const rect = cropEl.getBoundingClientRect();
            if (rect.height > 0 && Number.isFinite(rect.top)) {
                return rect.top;
            }
        }
        return null;
    }
    getMapAreaRect(view) {
        if (this.isDashboardEmbedded()) {
            const mapSlot = document.querySelector(".agri-dashboard-map-slot");
            if (mapSlot) {
                const slotRect = mapSlot.getBoundingClientRect();
                if (slotRect.width > 40 && slotRect.height > 40) {
                    return slotRect;
                }
            }
        }
        return view.container.getBoundingClientRect();
    }
    observeMapAreaResize(view) {
        var _a;
        (_a = this.mapAreaResizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
        this.mapAreaResizeObserver = null;
        if (typeof ResizeObserver === "undefined")
            return;
        const target = this.isDashboardEmbedded()
            ? (document.querySelector(".agri-dashboard-map-slot") || view.container)
            : view.container;
        if (!target)
            return;
        this.mapAreaResizeObserver = new ResizeObserver(() => {
            this.schedulePopupLayout();
        });
        this.mapAreaResizeObserver.observe(target);
    }
    getEffectiveMapBottom(view, gap = 4) {
        const rect = this.getMapAreaRect(view);
        const cropTop = this.getCropOverlayTop();
        if (cropTop != null && cropTop > rect.top && cropTop <= rect.bottom + 2) {
            return cropTop - gap;
        }
        return rect.bottom - gap;
    }
    measurePopupHeight(popupEl) {
        const header = popupEl.querySelector(".agri3-popup-header");
        const content = popupEl.querySelector(".agri3-popup-content");
        const headerH = (header === null || header === void 0 ? void 0 : header.offsetHeight) || 0;
        const contentH = (content === null || content === void 0 ? void 0 : content.scrollHeight) || (content === null || content === void 0 ? void 0 : content.offsetHeight) || 0;
        const natural = headerH + contentH;
        if (natural > 0)
            return Math.ceil(natural);
        const rect = popupEl.getBoundingClientRect();
        return rect.height > 0 ? Math.ceil(rect.height) : Math.ceil(popupEl.scrollHeight);
    }
    popupPositionsEqual(a, b, epsilon = 1) {
        if (!a)
            return false;
        return (Math.abs(a.x - b.x) <= epsilon && Math.abs(a.y - b.y) <= epsilon);
    }
    /** ✅ NEW: safely detect whether this layer supports attachments */
    layerSupportsAttachments(layer) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (!layer)
            return false;
        // Different JSAPI/EB builds expose it slightly differently
        const anyLayer = layer;
        // Common signals
        if (typeof anyLayer.supportsAttachments === "boolean")
            return anyLayer.supportsAttachments;
        const cap = anyLayer.capabilities;
        const supported = (_f = (_d = (_b = (_a = cap === null || cap === void 0 ? void 0 : cap.data) === null || _a === void 0 ? void 0 : _a.supportsAttachments) !== null && _b !== void 0 ? _b : (_c = cap === null || cap === void 0 ? void 0 : cap.data) === null || _c === void 0 ? void 0 : _c.supportsAttachment) !== null && _d !== void 0 ? _d : (_e = cap === null || cap === void 0 ? void 0 : cap.operations) === null || _e === void 0 ? void 0 : _e.supportsAttachments) !== null && _f !== void 0 ? _f : (_g = cap === null || cap === void 0 ? void 0 : cap.operations) === null || _g === void 0 ? void 0 : _g.supportsAttachment;
        if (typeof supported === "boolean")
            return supported;
        // Unknown => assume false to avoid ugly warning
        return false;
    }
    /* ---------------- Map wiring ---------------- */
    getLinkedMapWidgetId() {
        var _a, _b;
        const ids = this.props.useMapWidgetIds;
        const list = (ids === null || ids === void 0 ? void 0 : ids.length)
            ? ((_a = ids.asMutable) === null || _a === void 0 ? void 0 : _a.call(ids)) || ((_b = ids.toArray) === null || _b === void 0 ? void 0 : _b.call(ids)) || ids
            : [];
        const first = Array.isArray(list) ? list[0] : null;
        if (first)
            return String(first);
        const hostId = String(this.props.id || "").replace(/-popup$/, "");
        return (0,_gis_agri_linked_map_layout__WEBPACK_IMPORTED_MODULE_11__.discoverMapWidgetIdInApp)({
            hostWidgetId: hostId,
            getSlotElement: () => {
                if (hostId) {
                    const scoped = document.querySelector(`.widget-renderer[data-widgetid="${hostId}"] .agri-dashboard-map-slot`);
                    if (scoped instanceof HTMLElement)
                        return scoped;
                }
                const fallback = document.querySelector(".agri-dashboard-map-slot");
                return fallback instanceof HTMLElement ? fallback : null;
            },
        });
    }
    getMapViewFromManager(mapWidgetId) {
        var _a, _b, _c;
        try {
            const manager = jimu_arcgis__WEBPACK_IMPORTED_MODULE_6__.MapViewManager.getInstance();
            if (!manager)
                return null;
            if (mapWidgetId) {
                const group = manager.getJimuMapViewGroup(mapWidgetId);
                const active = (_a = group === null || group === void 0 ? void 0 : group.getActiveJimuMapView) === null || _a === void 0 ? void 0 : _a.call(group);
                if (active === null || active === void 0 ? void 0 : active.view)
                    return active;
                const groupViews = ((_b = group === null || group === void 0 ? void 0 : group.getAllJimuMapViews) === null || _b === void 0 ? void 0 : _b.call(group)) || [];
                const firstLoaded = groupViews.find((view) => view === null || view === void 0 ? void 0 : view.view);
                if (firstLoaded)
                    return firstLoaded;
            }
            const all = ((_c = manager.getAllJimuMapViews) === null || _c === void 0 ? void 0 : _c.call(manager)) || [];
            return (all.find((view) => (view === null || view === void 0 ? void 0 : view.view) && (view === null || view === void 0 ? void 0 : view.isActive) !== false) ||
                all.find((view) => view === null || view === void 0 ? void 0 : view.view) ||
                null);
        }
        catch (_d) {
            return null;
        }
    }
    expandUseDataSourceEntries(useList) {
        var _a;
        const dsMgr = jimu_core__WEBPACK_IMPORTED_MODULE_7__.DataSourceManager.getInstance();
        const out = [];
        const seen = new Set();
        for (const uds of useList) {
            const id = String((uds === null || uds === void 0 ? void 0 : uds.dataSourceId) || "");
            if (!id || seen.has(id))
                continue;
            seen.add(id);
            out.push(uds);
            const ds = dsMgr.getDataSource(id);
            const children = ((_a = ds === null || ds === void 0 ? void 0 : ds.getChildDataSources) === null || _a === void 0 ? void 0 : _a.call(ds)) || [];
            for (const child of children) {
                const childId = String((child === null || child === void 0 ? void 0 : child.id) || "");
                if (!childId || seen.has(childId))
                    continue;
                seen.add(childId);
                out.push({ dataSourceId: childId, mainDataSourceId: id });
            }
        }
        return out;
    }
    attachMapClick(jmv) {
        this.detachMapClick();
        const view = jmv === null || jmv === void 0 ? void 0 : jmv.view;
        if (!view || typeof view.on !== "function")
            return;
        this._clickHandle = view.on("click", this.onViewClick);
    }
    detachMapClick() {
        var _a;
        if ((_a = this._clickHandle) === null || _a === void 0 ? void 0 : _a.remove)
            this._clickHandle.remove();
        this._clickHandle = null;
    }
    isHighlightLayer(layer) {
        const id = String((layer === null || layer === void 0 ? void 0 : layer.id) || "").toLowerCase();
        const title = String((layer === null || layer === void 0 ? void 0 : layer.title) || "").toLowerCase();
        return id === "agri-polygon-highlight" ||
            title.includes("selected polygon highlight") ||
            title.includes("sketch");
    }
    /** A sublayer is clickable only when it and every parent are visible. */
    isLayerEffectivelyVisible(layer, view) {
        if (!layer || this.isHighlightLayer(layer))
            return false;
        const seen = new Set();
        let current = layer;
        while (current && !seen.has(current)) {
            seen.add(current);
            if (current.visible === false)
                return false;
            current = current.parent || current.layer || null;
        }
        const scale = Number((view === null || view === void 0 ? void 0 : view.scale) || 0);
        const minScale = Number(layer.minScale || 0);
        const maxScale = Number(layer.maxScale || 0);
        if (scale > 0 && minScale > 0 && scale > minScale)
            return false;
        if (scale > 0 && maxScale > 0 && scale < maxScale)
            return false;
        return String(layer.definitionExpression || "1=1").trim() !== "1=0";
    }
    isAgriculturalFieldLayer(layer) {
        var _a;
        if (!layer)
            return false;
        // Group Layer folders are not field polygons — never accept them for click.
        if ((0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.isMapImageGroupSublayer)(layer))
            return false;
        // Prefer queryable layers, but title/url identity is enough to accept a
        // live MapImage leaf that is still hydrating its query methods.
        const identity = `${layer.title || ""} ${layer.url || ""} ${((_a = layer.parent) === null || _a === void 0 ? void 0 : _a.title) || ""}`.toLowerCase();
        const looksAgri = /\bagri\b|agriculture|qishloq/.test(identity);
        if (!(0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.isQueryableFieldLayer)(layer) && !looksAgri)
            return false;
        const geometryType = String(layer.geometryType || "").toLowerCase();
        if (geometryType && geometryType !== "polygon")
            return false;
        const fields = Array.isArray(layer.fields) ? layer.fields : [];
        const names = new Set(fields.map((field) => String((field === null || field === void 0 ? void 0 : field.name) || "").toLowerCase()));
        if (names.has("uniqueid") || names.has("crop_id") || names.has("turi"))
            return true;
        // looksAgri alone is OK for a hydrating leaf; groups already rejected above.
        return looksAgri;
    }
    isAgriculturalFieldGraphic(graphic, layer) {
        var _a;
        const geometryType = String(((_a = graphic === null || graphic === void 0 ? void 0 : graphic.geometry) === null || _a === void 0 ? void 0 : _a.type) || "").toLowerCase();
        if (geometryType && geometryType !== "polygon" && geometryType !== "multipolygon")
            return false;
        const attrs = (graphic === null || graphic === void 0 ? void 0 : graphic.attributes) || {};
        const keys = new Set(Object.keys(attrs).map((key) => key.toLowerCase()));
        return keys.has("uniqueid") || keys.has("crop_id") || keys.has("turi") ||
            this.isAgriculturalFieldLayer(layer);
    }
    getClickTargetLayers(view) {
        var _a, _b;
        const { featureLayers, layerKeyToDsId } = this.state;
        const dsKeys = Object.keys(layerKeyToDsId || {});
        const map = view.map;
        const configuredLayers = featureLayers || [];
        const liveRoots = ((_b = (_a = map === null || map === void 0 ? void 0 : map.allLayers) === null || _a === void 0 ? void 0 : _a.toArray) === null || _b === void 0 ? void 0 : _b.call(_a)) || [];
        // MapImage parents are not queryable — expand to agri/feature sublayers.
        const liveMapLayers = [];
        const seen = new Set();
        const pushLive = (layer) => {
            if (!layer || !(0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.isQueryableFieldLayer)(layer))
                return;
            const key = (0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.getAgriLayerMapKey)(layer) ||
                String(layer.url || layer.id || "");
            if (!key || seen.has(key))
                return;
            seen.add(key);
            liveMapLayers.push(layer);
        };
        for (const root of liveRoots) {
            // Walk groups fully — never push the Group Layer node itself
            // (FeatureLayer#load fails with unsupported-type "Group Layer").
            for (const leaf of (0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.collectQueryableFieldLayers)(root)) {
                pushLive(leaf);
            }
        }
        const candidates = Array.from(new Set([
            ...configuredLayers,
            ...liveMapLayers,
        ]));
        return candidates
            .map((layer) => this.toLiveMapLayer(layer, map) || layer)
            .filter((layer) => {
            if (!this.isLayerEffectivelyVisible(layer, view))
                return false;
            if (!this.isAgriculturalFieldLayer(layer))
                return false;
            const key = (0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.getAgriLayerMapKey)(layer) ||
                String(layer.url || layer.id || "");
            if (this.isDashboardEmbedded())
                return true;
            if (!dsKeys.length)
                return true;
            return !!layerKeyToDsId[key];
        });
    }
    resolveClickLayers(view, jmv) {
        return __awaiter(this, void 0, void 0, function* () {
            let layers = this.getClickTargetLayers(view);
            if (layers.length)
                return layers;
            yield this.initializeMapConnection(jmv);
            layers = this.getClickTargetLayers(view);
            if (layers.length)
                return layers;
            // Last resort: scan map again after layers may have finished loading
            // (portal / MapImage sublayers often aren't queryable at first connect).
            try {
                const mapLayers = (0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.getAllFeatureLayersFromMap)(view.map);
                for (const layer of mapLayers) {
                    yield (0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.safeLoadMapLayer)(layer);
                }
            }
            catch (_a) {
                /* ignore */
            }
            return this.getClickTargetLayers(view);
        });
    }
    /** Case-insensitive attribute lookup — the polygon layer's join field casing is not guaranteed. */
    findAttributeValueCaseInsensitive(attributes, fieldName) {
        return (0,_popup_format_helpers__WEBPACK_IMPORTED_MODULE_16__.findAttributeValueCaseInsensitive)(attributes, fieldName);
    }
    /**
     * Agri_table_data is an external Table (no geometry) — the map click still
     * resolves the polygon feature for highlight/zoom, but the displayed
     * attributes come from Agri_table_data, joined by uniqueid.
     */
    resolveDisplayAttrs(polygonAttributes) {
        return __awaiter(this, void 0, void 0, function* () {
            const joinValue = this.findAttributeValueCaseInsensitive(polygonAttributes, _gis_agri_table_data_source__WEBPACK_IMPORTED_MODULE_19__.AGRI_TABLE_JOIN_FIELD);
            if (joinValue == null || String(joinValue).trim() === "") {
                (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickWarn)("agri-table-join:SKIP-no-uniqueid", {
                    polygonAttributeKeys: Object.keys(polygonAttributes || {}),
                });
                return polygonAttributes || {};
            }
            try {
                (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickDebug)("agri-table-join:request", {
                    uniqueid: String(joinValue),
                    source: "Agri_table_data/FeatureServer/2",
                });
                const agriRecord = yield (0,_gis_agri_table_data_source__WEBPACK_IMPORTED_MODULE_19__.queryAgriRecordByUniqueId)(String(joinValue));
                (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickDebug)("agri-table-join:response", {
                    uniqueid: String(joinValue),
                    found: Boolean(agriRecord),
                    attributeKeys: Object.keys(agriRecord || {}),
                });
                if (agriRecord) {
                    // Keep polygon-only values (for example st_area(shape)) while allowing
                    // the joined Agri table to provide/override the popup's business data.
                    return Object.assign(Object.assign({}, (polygonAttributes || {})), agriRecord);
                }
            }
            catch (e) {
                (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickWarn)("Agri_table_data lookup failed", {
                    uniqueId: joinValue,
                    error: (e === null || e === void 0 ? void 0 : e.message) || String(e),
                });
            }
            return polygonAttributes || {};
        });
    }
    /* ---------------- Attachments helpers ---------------- */
    fetchAttachmentPreview(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield (0,esri_request__WEBPACK_IMPORTED_MODULE_3__["default"])(url, {
                responseType: "blob",
                query: {},
            });
            return (resp === null || resp === void 0 ? void 0 : resp.data) instanceof Blob ? resp.data : resp;
        });
    }
    revokeAllAttachmentUrls() {
        try {
            const atts = this.state.attachments || [];
            atts.forEach((a) => {
                if (a.previewObjectUrl)
                    URL.revokeObjectURL(a.previewObjectUrl);
            });
        }
        catch (_a) { }
    }
    isImageContentType(ct) {
        if (!ct)
            return false;
        return /^image\//i.test(ct);
    }
    bytesToSize(n) {
        if (!n && n !== 0)
            return "";
        if (n === 0)
            return "0 B";
        const k = 1024, sizes = ["B", "KB", "MB", "GB", "TB"];
        const i = Math.floor(Math.log(n) / Math.log(k));
        return `${(n / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
    }
    loadAttachmentsForOid(layer, oid) {
        return __awaiter(this, void 0, void 0, function* () {
            // ✅ If layer doesn’t support attachments -> silently show none (NO warning)
            if (!this.layerSupportsAttachments(layer)) {
                if (!this._isMounted)
                    return;
                this.revokeAllAttachmentUrls();
                this.setState({
                    loadingAttachments: false,
                    attachments: [],
                    attachmentsError: null,
                    attachmentsExpanded: true, // keep area visible if you want "No attachments"
                });
                return;
            }
            try {
                this.revokeAllAttachmentUrls();
                this.setState({
                    loadingAttachments: true,
                    attachments: [],
                    attachmentsError: null,
                });
                const result = yield layer.queryAttachments({ objectIds: [oid] });
                const list = ((result === null || result === void 0 ? void 0 : result[oid]) || []);
                const items = list.map((att) => ({
                    id: att.id,
                    name: att.name,
                    size: att.size,
                    contentType: att.contentType,
                    url: att.url,
                }));
                const withPreviews = [];
                for (const it of items) {
                    if (it.url && this.isImageContentType(it.contentType)) {
                        try {
                            const blob = yield this.fetchAttachmentPreview(it.url);
                            it.previewObjectUrl = URL.createObjectURL(blob);
                        }
                        catch (_a) {
                            // ignore preview failures
                        }
                    }
                    withPreviews.push(it);
                }
                if (!this._isMounted)
                    return;
                this.setState({
                    attachments: withPreviews,
                    loadingAttachments: false,
                    attachmentsError: null,
                    attachmentsExpanded: true,
                });
            }
            catch (err) {
                // ✅ If server says attachments not supported/enabled -> SILENT (no red warning)
                const msg = String((err === null || err === void 0 ? void 0 : err.message) || err || "").toLowerCase();
                const isNotSupported = msg.includes("doesn't support attachments") ||
                    msg.includes("does not support attachments") ||
                    msg.includes("attachments are not enabled") ||
                    msg.includes("attachments disabled") ||
                    (msg.includes("not supported") && msg.includes("attachment"));
                if (!this._isMounted)
                    return;
                if (isNotSupported) {
                    this.setState({
                        loadingAttachments: false,
                        attachments: [],
                        attachmentsError: null,
                        attachmentsExpanded: true,
                    });
                    return;
                }
                this.setState({
                    loadingAttachments: false,
                    attachments: [],
                    attachmentsError: String((err === null || err === void 0 ? void 0 : err.message) || err || "Attachments failed"),
                    attachmentsExpanded: true,
                });
            }
        });
    }
    /* ---------------- Field alias + formatting ---------------- */
    isDateField(name) {
        var _a;
        // Use the clicked layer if possible
        const clickedLayer = this.getClickedLayer();
        const fld = (_a = clickedLayer === null || clickedLayer === void 0 ? void 0 : clickedLayer.fields) === null || _a === void 0 ? void 0 : _a.find((ff) => ff.name === name);
        return (0,_popup_format_helpers__WEBPACK_IMPORTED_MODULE_16__.isEsriDateFieldType)(fld === null || fld === void 0 ? void 0 : fld.type);
    }
    getClickedLayer() {
        const key = this.state.lastClickedLayerKey;
        if (!key)
            return null;
        return (this.state.featureLayers.find((L) => (0,_gis_feature_layer_data__WEBPACK_IMPORTED_MODULE_17__.getAgriLayerMapKey)(L) === key ||
            String(L.url || L.id || "") === key) || null);
    }
    normalizeFieldAlias(field, fallbackName) {
        return (0,_popup_field_helpers__WEBPACK_IMPORTED_MODULE_15__.normalizeFieldAlias)(field, fallbackName);
    }
    findFieldMetaOnLayer(layer, fieldName) {
        const target = fieldName.toLowerCase();
        const fields = Array.isArray(layer === null || layer === void 0 ? void 0 : layer.fields) ? layer.fields : [];
        return (fields.find((f) => String((f === null || f === void 0 ? void 0 : f.name) || "").toLowerCase() === target) || null);
    }
    resolveAliasFromLiveLayers(fieldName) {
        const layers = [];
        const clicked = this.getClickedLayer();
        if (clicked)
            layers.push(clicked);
        for (const layer of this.state.featureLayers || []) {
            if (layer && !layers.includes(layer))
                layers.push(layer);
        }
        for (const layer of layers) {
            const fld = this.findFieldMetaOnLayer(layer, fieldName);
            if (!fld)
                continue;
            const alias = this.normalizeFieldAlias(fld, fieldName);
            if (alias && alias.toLowerCase() !== fieldName.toLowerCase()) {
                return alias;
            }
        }
        return null;
    }
    resolveAliasFromDataSourceSchema(fieldName, ds) {
        var _a, _b;
        if (!ds)
            return null;
        try {
            const fieldsObj = ((_b = (_a = ds === null || ds === void 0 ? void 0 : ds.getSchema) === null || _a === void 0 ? void 0 : _a.call(ds)) === null || _b === void 0 ? void 0 : _b.fields) || {};
            const target = fieldName.toLowerCase();
            for (const key of Object.keys(fieldsObj)) {
                const f = fieldsObj[key];
                const fname = String((f === null || f === void 0 ? void 0 : f.name) || (f === null || f === void 0 ? void 0 : f.jimuName) || key || "");
                if (fname.toLowerCase() !== target &&
                    key.toLowerCase() !== target &&
                    String((f === null || f === void 0 ? void 0 : f.jimuName) || "").toLowerCase() !== target) {
                    continue;
                }
                const alias = this.normalizeFieldAlias(f, fieldName);
                if (alias && alias.toLowerCase() !== fieldName.toLowerCase()) {
                    return alias;
                }
            }
        }
        catch (_c) {
            /* ignore */
        }
        return null;
    }
    getFieldAlias(name) {
        var _a, _b, _c;
        const custom = (_b = (_a = this.props.config) === null || _a === void 0 ? void 0 : _a.labels) === null || _b === void 0 ? void 0 : _b[name];
        if (custom)
            return custom;
        const realName = this.resolveFieldName(name) || name;
        // Live map layer first — reflects latest ArcGIS field display names
        const fromLayer = this.resolveAliasFromLiveLayers(realName);
        if (fromLayer)
            return fromLayer;
        const dsId = this.state.lastClickedDsId;
        const ds = dsId && ((_c = this.state.dataSourcesById) === null || _c === void 0 ? void 0 : _c[dsId])
            ? this.state.dataSourcesById[dsId]
            : null;
        const fromDs = this.resolveAliasFromDataSourceSchema(realName, ds);
        if (fromDs)
            return fromDs;
        for (const layerDs of Object.values(this.state.dataSourcesById || {})) {
            const alias = this.resolveAliasFromDataSourceSchema(realName, layerDs);
            if (alias)
                return alias;
        }
        const clickedLayer = this.getClickedLayer();
        const layerFld = clickedLayer
            ? this.findFieldMetaOnLayer(clickedLayer, realName)
            : null;
        if (layerFld === null || layerFld === void 0 ? void 0 : layerFld.alias)
            return String(layerFld.alias);
        return realName;
    }
    formatDateSmart(raw) {
        return (0,_popup_format_helpers__WEBPACK_IMPORTED_MODULE_16__.formatDateSmart)(raw);
    }
    formatValue(name, raw) {
        return (0,_popup_format_helpers__WEBPACK_IMPORTED_MODULE_16__.formatPopupAttributeValue)(raw, {
            isDateField: this.isDateField(name),
            formatDate: (value) => this.formatDateSmart(value),
        });
    }
    getOutFields(layer, oidField) {
        // keep your debugging behavior
        return ["*"];
    }
    componentDidUpdate(prevProps, prevState) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const prevDs = (0,_gis_agri_data_source_engine__WEBPACK_IMPORTED_MODULE_9__.getSelectedDsIds)(prevProps.useDataSources).join("|");
        const nextDs = (0,_gis_agri_data_source_engine__WEBPACK_IMPORTED_MODULE_9__.getSelectedDsIds)(this.props.useDataSources).join("|");
        const dsChanged = prevDs !== nextDs;
        const prevMap = String(((_a = prevProps.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0]) ||
            ((_c = (_b = prevProps.useMapWidgetIds) === null || _b === void 0 ? void 0 : _b.get) === null || _c === void 0 ? void 0 : _c.call(_b, 0)) ||
            "");
        const nextMap = String(((_d = this.props.useMapWidgetIds) === null || _d === void 0 ? void 0 : _d[0]) ||
            ((_f = (_e = this.props.useMapWidgetIds) === null || _e === void 0 ? void 0 : _e.get) === null || _f === void 0 ? void 0 : _f.call(_e, 0)) ||
            "");
        const mapChanged = prevMap !== nextMap;
        if ((dsChanged || mapChanged) && this.state.jimuMapView) {
            void this.initializeMapConnection(this.state.jimuMapView);
        }
        else if (mapChanged) {
            this.scheduleMapViewFallback();
        }
        if (prevState.showPopup !== this.state.showPopup ||
            prevState.popupMinimized !== this.state.popupMinimized) {
            this.broadcastPopupVisibility(this.state.showPopup && !this.state.popupMinimized);
        }
        else if (this.state.showPopup &&
            !this.state.popupMinimized &&
            prevState.pinToCorner !== this.state.pinToCorner) {
            this.broadcastPopupVisibility(true);
        }
        if (!this.state.showPopup || this.state.popupMinimized)
            return;
        const openedNow = (this.state.showPopup && !prevState.showPopup) ||
            (prevState.popupMinimized && !this.state.popupMinimized);
        const attachmentsChanged = this.state.loadingAttachments !== prevState.loadingAttachments ||
            (((_g = this.state.attachments) === null || _g === void 0 ? void 0 : _g.length) || 0) !==
                (((_h = prevState.attachments) === null || _h === void 0 ? void 0 : _h.length) || 0);
        const loadingChanged = this.state.loading !== prevState.loading;
        const attrsChanged = this.state.selectedAttrs !== prevState.selectedAttrs;
        if (!openedNow &&
            !attachmentsChanged &&
            !loadingChanged &&
            !attrsChanged) {
            return;
        }
        this.schedulePopupLayoutAfterContent();
    }
    niceChartMax(value) {
        return (0,_popup_format_helpers__WEBPACK_IMPORTED_MODULE_16__.niceChartMax)(value);
    }
    formatChartTick(value) {
        return (0,_popup_format_helpers__WEBPACK_IMPORTED_MODULE_16__.formatChartTick)(value);
    }
    formatChartTooltipValue(value) {
        return (0,_popup_format_helpers__WEBPACK_IMPORTED_MODULE_16__.formatChartTooltipValue)(value);
    }
    buildSmoothLinePath(points) {
        if (!points.length)
            return "";
        if (points.length === 1) {
            return `M ${points[0].x} ${points[0].y}`;
        }
        let path = `M ${points[0].x} ${points[0].y}`;
        for (let i = 0; i < points.length - 1; i++) {
            const p0 = points[i - 1] || points[i];
            const p1 = points[i];
            const p2 = points[i + 1];
            const p3 = points[i + 2] || p2;
            const cp1x = p1.x + (p2.x - p0.x) / 6;
            const cp1y = p1.y + (p2.y - p0.y) / 6;
            const cp2x = p2.x - (p3.x - p1.x) / 6;
            const cp2y = p2.y - (p3.y - p1.y) / 6;
            path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
        }
        return path;
    }
    buildRoundedBarPath(x, y, width, height, radius) {
        const r = Math.min(radius, width / 2, height);
        const bottom = y + height;
        return [
            `M ${x} ${bottom}`,
            `L ${x} ${y + r}`,
            `Q ${x} ${y} ${x + r} ${y}`,
            `L ${x + width - r} ${y}`,
            `Q ${x + width} ${y} ${x + width} ${y + r}`,
            `L ${x + width} ${bottom}`,
            "Z",
        ].join(" ");
    }
    render() {
        var _a, _b;
        const { useMapWidgetIds, useDataSources } = this.props;
        const themeClass = this.state.isDarkTheme
            ? "agri3-theme-dark"
            : "agri3-theme-light";
        return (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: `agri3-attr-card ${themeClass}` },
            this.renderPopup(),
            jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(_gis_AgriHiddenConnectors__WEBPACK_IMPORTED_MODULE_8__.AgriHiddenConnectors, { useDataSources: useDataSources, useMapWidgetIds: useMapWidgetIds, onDataSourceCreated: this.onDataSourceCreated, onActiveViewChange: this.onActiveViewChange }),
            jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { style: {
                    position: "absolute",
                    bottom: "8px",
                    right: "8px",
                    width: "8px",
                    height: "8px",
                    background: ((_a = this.state.featureLayers) === null || _a === void 0 ? void 0 : _a.length)
                        ? "#10b981"
                        : "#94a3b8",
                    borderRadius: "50%",
                    opacity: 0.6,
                    transition: "all 0.3s ease",
                    pointerEvents: "none",
                }, title: ((_b = this.state.featureLayers) === null || _b === void 0 ? void 0 : _b.length)
                    ? this.tr("status.ready")
                    : this.tr("status.loading") })));
    }
}
AgriPolygon.VEG_INDEX_FIELDS = [..._GraffPanel_runtime_graff_graph_constants__WEBPACK_IMPORTED_MODULE_14__.GRAFF_INDEX_ORDER];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AgriPolygon);
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }


/***/ }),

/***/ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/gis/AgriHiddenConnectors.tsx":
/*!**************************************************************************************!*\
  !*** ./your-extensions/widgets/Agri3/Agro_widgetV5/src/gis/AgriHiddenConnectors.tsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgriHiddenConnectors: () => (/* binding */ AgriHiddenConnectors)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _agri_data_source_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agri-data-source-engine */ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/gis/agri-data-source-engine.ts");
/** @jsx jsx */



/** Hidden DataSource + Map connectors (same pattern as AgriLocalization).
 * Only connect the first useDataSource — mounting all ~30+ region FeatureServers
 * on every child remount floods Network with FeatureServer?f=json loads and
 * does not help map hit-testing (live MapView layers are used instead). */
function AgriHiddenConnectors(props) {
    const selectedUseDataSources = (0,_agri_data_source_engine__WEBPACK_IMPORTED_MODULE_2__.toPlainArray)(props.useDataSources);
    const mapWidgetId = (0,_agri_data_source_engine__WEBPACK_IMPORTED_MODULE_2__.toPlainArray)(props.useMapWidgetIds)[0];
    const primaryDs = selectedUseDataSources[0];
    return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { display: "none" }, "aria-hidden": "true" },
        primaryDs ? ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceComponent, { key: primaryDs === null || primaryDs === void 0 ? void 0 : primaryDs.dataSourceId, useDataSource: primaryDs, onDataSourceCreated: props.onDataSourceCreated
                ? (ds) => {
                    var _a;
                    (_a = props.onDataSourceCreated) === null || _a === void 0 ? void 0 : _a.call(props, ds);
                }
                : undefined })) : null,
        mapWidgetId && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: mapWidgetId, onActiveViewChange: props.onActiveViewChange }))));
}


/***/ }),

/***/ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/gis/agri-data-source-engine.ts":
/*!****************************************************************************************!*\
  !*** ./your-extensions/widgets/Agri3/Agro_widgetV5/src/gis/agri-data-source-engine.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgriDataSourceEngine: () => (/* binding */ AgriDataSourceEngine),
/* harmony export */   getSelectedDsIds: () => (/* binding */ getSelectedDsIds),
/* harmony export */   toPlainArray: () => (/* binding */ toPlainArray)
/* harmony export */ });
/* harmony import */ var _feature_layer_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature-layer-data */ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/gis/feature-layer-data.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function toPlainArray(val) {
    if (!val)
        return [];
    if (Array.isArray(val))
        return val;
    if (typeof val.asMutable === "function")
        return val.asMutable({ deep: true });
    if (typeof val.toArray === "function")
        return val.toArray();
    return [];
}
function getSelectedDsIds(useDataSources) {
    const uds = toPlainArray(useDataSources);
    const ids = uds.map((u) => u === null || u === void 0 ? void 0 : u.dataSourceId).filter(Boolean);
    return Array.from(new Set(ids));
}
/**
 * Resolves the active FeatureLayer for dashboard widgets.
 * Prefers EXB DataSources (same path as AgriLocalization),
 * falls back to JimuMapView map layers.
 */
class AgriDataSourceEngine {
    constructor() {
        this.dsById = {};
        this.selectedIds = [];
        this.resolveCache = new Map();
    }
    onDsCreated(ds, ids) {
        if (!(ds === null || ds === void 0 ? void 0 : ds.id))
            return;
        this.dsById[ds.id] = ds;
        this.selectedIds = [...ids];
        this.resolveCache.clear();
    }
    syncSelection(ids) {
        this.selectedIds = [...ids];
        this.resolveCache.clear();
    }
    clearResolveCache() {
        this.resolveCache.clear();
    }
    /** True while selected data sources are still connecting (no map fallback yet). */
    isResolvePending(jimuMapView) {
        var _a;
        if ((_a = jimuMapView === null || jimuMapView === void 0 ? void 0 : jimuMapView.view) === null || _a === void 0 ? void 0 : _a.map)
            return false;
        if (!this.selectedIds.length)
            return false;
        const connected = this.selectedIds.filter((id) => !!this.dsById[id]).length;
        return connected < this.selectedIds.length;
    }
    hasConnectedSources() {
        return this.selectedIds.some((id) => !!this.dsById[id]);
    }
    getLayerFromDs(ds) {
        const anyDs = ds;
        return (0,_feature_layer_data__WEBPACK_IMPORTED_MODULE_0__.getQueryableLayer)(anyDs.layer || anyDs._layer);
    }
    getDsHaystack(ds) {
        var _a, _b, _c, _d, _e, _f, _g;
        const anyDs = ds;
        const layer = anyDs.layer || anyDs._layer;
        const title = String((layer === null || layer === void 0 ? void 0 : layer.title) || "");
        const url = String((layer === null || layer === void 0 ? void 0 : layer.url) || ((_b = (_a = anyDs.getDataSourceJson) === null || _a === void 0 ? void 0 : _a.call(anyDs)) === null || _b === void 0 ? void 0 : _b.url) || "");
        const label = String(((_c = anyDs.getLabel) === null || _c === void 0 ? void 0 : _c.call(anyDs)) ||
            ((_e = (_d = anyDs.getDataSourceJson) === null || _d === void 0 ? void 0 : _d.call(anyDs)) === null || _e === void 0 ? void 0 : _e.label) ||
            ((_g = (_f = anyDs.getDataSourceJson) === null || _f === void 0 ? void 0 : _f.call(anyDs)) === null || _g === void 0 ? void 0 : _g.sourceLabel) ||
            "");
        return `${title} ${url} ${label}`;
    }
    buildRegionProbeWhere(filters, layer, fields, regionScoped, yearScoped) {
        return (0,_feature_layer_data__WEBPACK_IMPORTED_MODULE_0__.buildAgriWhere)({
            yil: filters.yil,
            viloyat: filters.viloyat,
            skipRegionFilter: regionScoped,
            skipYearFilter: yearScoped,
        }, fields, layer);
    }
    pickBestDsByCount(pool, filters, preferredDs) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            if (!pool.length)
                return null;
            if (!String((_a = filters.viloyat) !== null && _a !== void 0 ? _a : "").trim() || pool.length === 1) {
                return pool[0];
            }
            const scored = [];
            const tryItem = (item) => __awaiter(this, void 0, void 0, function* () {
                const layer = this.getLayerFromDs(item.ds);
                if (!layer)
                    return;
                try {
                    yield (0,_feature_layer_data__WEBPACK_IMPORTED_MODULE_0__.safeLoadMapLayer)(layer);
                }
                catch (_a) {
                    /* ignore */
                }
                const fields = (layer.fields || []).map((f) => f.name);
                const where = this.buildRegionProbeWhere(filters, layer, fields, item.regionMatch, (0,_feature_layer_data__WEBPACK_IMPORTED_MODULE_0__.haystackMatchesYear)(this.getDsHaystack(item.ds), filters.yil));
                const count = yield (0,_feature_layer_data__WEBPACK_IMPORTED_MODULE_0__.quickLayerFeatureCount)(layer, where);
                scored.push({ item, count });
            });
            if (preferredDs) {
                const preferred = pool.find((p) => p.ds.id === preferredDs.id);
                if (preferred) {
                    yield tryItem(preferred);
                    const preferredCount = (_c = (_b = scored[0]) === null || _b === void 0 ? void 0 : _b.count) !== null && _c !== void 0 ? _c : -1;
                    if (preferredCount > 0)
                        return preferred;
                }
            }
            const remaining = pool.filter((p) => !preferredDs || p.ds.id !== preferredDs.id);
            yield Promise.all(remaining.map((item) => tryItem(item)));
            const positive = scored
                .filter((s) => s.count > 0)
                .sort((a, b) => b.count - a.count);
            if (positive.length)
                return positive[0].item;
            return (((_d = scored.find((s) => s.count >= 0)) === null || _d === void 0 ? void 0 : _d.item) ||
                pool.find((p) => p.ds.id === (preferredDs === null || preferredDs === void 0 ? void 0 : preferredDs.id)) ||
                pool[0]);
        });
    }
    resolveFromDataSources(filters) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            const normalizedFilters = {
                yil: filters.yil,
                viloyat: (0,_feature_layer_data__WEBPACK_IMPORTED_MODULE_0__.canonicalizeRegionFilterValue)(String((_a = filters.viloyat) !== null && _a !== void 0 ? _a : "").trim()),
            };
            const wantsRegion = !!normalizedFilters.viloyat;
            const scored = [];
            for (const id of this.selectedIds) {
                const ds = this.dsById[id];
                if (!ds || !this.getLayerFromDs(ds))
                    continue;
                const haystack = this.getDsHaystack(ds);
                scored.push({
                    ds,
                    score: (0,_feature_layer_data__WEBPACK_IMPORTED_MODULE_0__.scoreHaystackForFilters)(haystack, normalizedFilters),
                    regionMatch: (0,_feature_layer_data__WEBPACK_IMPORTED_MODULE_0__.haystackMatchesRegion)(haystack, normalizedFilters.viloyat),
                });
            }
            if (!scored.length)
                return null;
            const pool = (0,_feature_layer_data__WEBPACK_IMPORTED_MODULE_0__.pickYearRegionLayerPool)(scored, scored.length, normalizedFilters, (item) => this.getDsHaystack(item.ds));
            if (!pool.length)
                return null;
            let bestScore = -1;
            let scoreWinner = null;
            for (const item of pool) {
                if (item.score > bestScore) {
                    bestScore = item.score;
                    scoreWinner = item;
                }
            }
            const preferredDs = (scoreWinner === null || scoreWinner === void 0 ? void 0 : scoreWinner.ds) || null;
            const bestItem = wantsRegion && pool.length > 1
                ? yield this.pickBestDsByCount(pool, normalizedFilters, preferredDs)
                : scoreWinner;
            const bestDs = (bestItem === null || bestItem === void 0 ? void 0 : bestItem.ds) || preferredDs;
            if (!bestDs)
                return null;
            const layer = this.getLayerFromDs(bestDs);
            if (!layer)
                return null;
            try {
                yield (0,_feature_layer_data__WEBPACK_IMPORTED_MODULE_0__.safeLoadMapLayer)(layer);
            }
            catch (_e) {
                /* layer may already be loaded */
            }
            (0,_feature_layer_data__WEBPACK_IMPORTED_MODULE_0__.disableLayerPbf)(layer);
            const fields = (layer.fields || []).map((f) => f.name);
            const regionMatch = (_b = bestItem === null || bestItem === void 0 ? void 0 : bestItem.regionMatch) !== null && _b !== void 0 ? _b : false;
            const regionScoped = regionMatch || ((_c = bestItem === null || bestItem === void 0 ? void 0 : bestItem.score) !== null && _c !== void 0 ? _c : 0) >= 25;
            const haystack = this.getDsHaystack(bestDs);
            const yearScoped = (0,_feature_layer_data__WEBPACK_IMPORTED_MODULE_0__.haystackMatchesYear)(haystack, normalizedFilters.yil);
            (0,_feature_layer_data__WEBPACK_IMPORTED_MODULE_0__.flLog)("resolve via DataSource", {
                filters: normalizedFilters,
                dsId: bestDs.id,
                layerTitle: (layer === null || layer === void 0 ? void 0 : layer.title) || (layer === null || layer === void 0 ? void 0 : layer.url) || null,
                score: (_d = bestItem === null || bestItem === void 0 ? void 0 : bestItem.score) !== null && _d !== void 0 ? _d : bestScore,
                regionScoped,
                yearScoped,
                fieldCount: fields.length,
                countBased: wantsRegion && pool.length > 1,
            });
            void (0,_feature_layer_data__WEBPACK_IMPORTED_MODULE_0__.prepareValueIndex)(layer, fields);
            return {
                layer,
                fields,
                regionScoped,
                yearScoped,
            };
        });
    }
    resolve(filters, jimuMapView) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const cacheKey = JSON.stringify({
                yil: filters.yil || "",
                viloyat: (0,_feature_layer_data__WEBPACK_IMPORTED_MODULE_0__.canonicalizeRegionFilterValue)(String((_a = filters.viloyat) !== null && _a !== void 0 ? _a : "").trim()),
                ids: this.selectedIds,
                mapReady: !!jimuMapView,
            });
            const pending = this.resolveCache.get(cacheKey);
            if (pending)
                return pending;
            const job = this.resolveInternal(filters, jimuMapView);
            this.resolveCache.set(cacheKey, job);
            try {
                return yield job;
            }
            finally {
                if (this.resolveCache.get(cacheKey) === job) {
                    this.resolveCache.delete(cacheKey);
                }
            }
        });
    }
    resolveInternal(filters, jimuMapView) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            const fromDs = yield this.resolveFromDataSources(filters);
            if (fromDs)
                return fromDs;
            if (!jimuMapView) {
                (0,_feature_layer_data__WEBPACK_IMPORTED_MODULE_0__.flLog)("resolve FAILED (no DS layer, no map view)", {
                    filters,
                    selectedIds: this.selectedIds,
                    connectedIds: this.selectedIds.filter((id) => !!this.dsById[id]),
                });
                return null;
            }
            const fromMap = yield (0,_feature_layer_data__WEBPACK_IMPORTED_MODULE_0__.resolveFeatureLayerForFilters)(jimuMapView, filters);
            (0,_feature_layer_data__WEBPACK_IMPORTED_MODULE_0__.flLog)("resolve via Map", {
                filters,
                layerTitle: ((_a = fromMap === null || fromMap === void 0 ? void 0 : fromMap.layer) === null || _a === void 0 ? void 0 : _a.title) || ((_b = fromMap === null || fromMap === void 0 ? void 0 : fromMap.layer) === null || _b === void 0 ? void 0 : _b.url) || null,
                regionScoped: (_c = fromMap === null || fromMap === void 0 ? void 0 : fromMap.regionScoped) !== null && _c !== void 0 ? _c : null,
                yearScoped: (_d = fromMap === null || fromMap === void 0 ? void 0 : fromMap.yearScoped) !== null && _d !== void 0 ? _d : null,
                found: !!fromMap,
            });
            if (fromMap === null || fromMap === void 0 ? void 0 : fromMap.layer) {
                void (0,_feature_layer_data__WEBPACK_IMPORTED_MODULE_0__.prepareValueIndex)(fromMap.layer, fromMap.fields);
            }
            return fromMap;
        });
    }
}


/***/ }),

/***/ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/gis/agri-engine-registry.ts":
/*!*************************************************************************************!*\
  !*** ./your-extensions/widgets/Agri3/Agro_widgetV5/src/gis/agri-engine-registry.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAgriDashboardRootId: () => (/* binding */ getAgriDashboardRootId),
/* harmony export */   getSharedAgriDataSourceEngine: () => (/* binding */ getSharedAgriDataSourceEngine)
/* harmony export */ });
/* harmony import */ var _agri_data_source_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agri-data-source-engine */ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/gis/agri-data-source-engine.ts");

const DASHBOARD_CHILD_SUFFIXES = [
    "-localization",
    "-indicator",
    "-region",
    "-pie",
    "-graff",
    "-bar",
    "-popup",
];
/** Root AgroWidgetV5 widget id from any embedded child id. */
function getAgriDashboardRootId(widgetId) {
    const id = String(widgetId || "");
    for (const suffix of DASHBOARD_CHILD_SUFFIXES) {
        if (id.endsWith(suffix))
            return id.slice(0, -suffix.length);
    }
    return id;
}
const sharedEngines = new Map();
/** One DataSource engine per dashboard instance — shared by all embedded children. */
function getSharedAgriDataSourceEngine(widgetId) {
    const rootId = getAgriDashboardRootId(widgetId);
    let engine = sharedEngines.get(rootId);
    if (!engine) {
        engine = new _agri_data_source_engine__WEBPACK_IMPORTED_MODULE_0__.AgriDataSourceEngine();
        sharedEngines.set(rootId, engine);
    }
    return engine;
}


/***/ }),

/***/ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/gis/agri-linked-map-layout.ts":
/*!***************************************************************************************!*\
  !*** ./your-extensions/widgets/Agri3/Agro_widgetV5/src/gis/agri-linked-map-layout.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgriLinkedMapLayoutManager: () => (/* binding */ AgriLinkedMapLayoutManager),
/* harmony export */   discoverMapWidgetIdInApp: () => (/* binding */ discoverMapWidgetIdInApp),
/* harmony export */   isKnownMapWidgetId: () => (/* binding */ isKnownMapWidgetId)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _agri_data_source_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agri-data-source-engine */ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/gis/agri-data-source-engine.ts");


const MANAGED_MAP_CLASS = {
    dashboard: "agri-dashboard-managed-map",
    plm: "plm-managed-map",
};
const MANAGED_RENDERER_CLASS = {
    dashboard: "agri-dashboard-managed-map-renderer",
    plm: "plm-managed-map-renderer",
};
const MAP_PANEL_BORDER_RADIUS = "20px";
function isMapWidgetConfig(widget) {
    var _a;
    const manifestName = String(((_a = widget === null || widget === void 0 ? void 0 : widget.manifest) === null || _a === void 0 ? void 0 : _a.name) || "").toLowerCase();
    const uri = String((widget === null || widget === void 0 ? void 0 : widget.uri) || "").toLowerCase();
    return manifestName === "map" || uri.includes("arcgis-map");
}
function findWidgetRenderer(widgetId) {
    const selectors = [
        `.widget-renderer[data-widgetid="${widgetId}"]`,
        `[data-widgetid="${widgetId}"].widget-renderer`,
        `[data-widgetid="${widgetId}"]`,
    ];
    for (const selector of selectors) {
        const el = document.querySelector(selector);
        if (el)
            return el;
    }
    return null;
}
function findWidgetLayoutItem(widgetId) {
    const renderer = findWidgetRenderer(widgetId);
    if (!renderer)
        return null;
    const candidates = [
        renderer.closest(".layout-item.is-widget"),
        renderer.closest(".builder-layout-item"),
        renderer.closest(".layout-item"),
        renderer.closest(".section-layout-item"),
        renderer.closest('[class*="layout-item"]'),
        renderer.parentElement,
    ];
    for (const candidate of candidates) {
        if (candidate instanceof HTMLElement && candidate.contains(renderer)) {
            return candidate;
        }
    }
    return renderer;
}
function isKnownMapWidgetId(widgetId) {
    var _a, _b;
    const id = String(widgetId || "").trim();
    if (!id)
        return false;
    try {
        const widgets = ((_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState()) === null || _a === void 0 ? void 0 : _a.appConfig) === null || _b === void 0 ? void 0 : _b.widgets) || {};
        const widget = widgets[id];
        if (widget && isMapWidgetConfig(widget))
            return true;
    }
    catch (_c) {
        /* app config may still be warming up */
    }
    try {
        return !!findWidgetRenderer(id);
    }
    catch (_d) {
        return false;
    }
}
function isMapOverlappingSlot(mapWidgetId, slot) {
    const item = findWidgetLayoutItem(mapWidgetId);
    if (!item)
        return false;
    const rect = item.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    if (cx >= slot.left && cx <= slot.right && cy >= slot.top && cy <= slot.bottom) {
        return true;
    }
    const overlapX = Math.max(0, Math.min(rect.right, slot.right) - Math.max(rect.left, slot.left));
    const overlapY = Math.max(0, Math.min(rect.bottom, slot.bottom) - Math.max(rect.top, slot.top));
    const overlapArea = overlapX * overlapY;
    const mapArea = Math.max(1, rect.width * rect.height);
    return overlapArea / mapArea > 0.3;
}
/** Find the standard Map widget id from app config (published experience safe). */
function discoverMapWidgetIdInApp(options) {
    var _a, _b, _c;
    try {
        const state = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState();
        const widgets = ((_a = state === null || state === void 0 ? void 0 : state.appConfig) === null || _a === void 0 ? void 0 : _a.widgets) || {};
        const ownId = options.hostWidgetId;
        const candidates = [];
        Object.keys(widgets).forEach((id) => {
            if (id === ownId || id.startsWith(`${ownId}-`))
                return;
            if (isMapWidgetConfig(widgets[id]))
                candidates.push(id);
        });
        if (!candidates.length)
            return null;
        if (candidates.length === 1)
            return candidates[0];
        const slot = (_c = (_b = options.getSlotElement) === null || _b === void 0 ? void 0 : _b.call(options)) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect();
        if (!slot)
            return candidates[0];
        const insideSlot = candidates.filter((id) => isMapOverlappingSlot(id, slot));
        if (insideSlot.length === 1)
            return insideSlot[0];
        const pool = insideSlot.length ? insideSlot : candidates;
        let bestId = pool[0];
        let bestDistance = Number.POSITIVE_INFINITY;
        pool.forEach((id) => {
            const item = findWidgetLayoutItem(id);
            if (!item)
                return;
            const rect = item.getBoundingClientRect();
            const dx = rect.left + rect.width / 2 - (slot.left + slot.width / 2);
            const dy = rect.top + rect.height / 2 - (slot.top + slot.height / 2);
            const distance = Math.hypot(dx, dy);
            if (distance < bestDistance) {
                bestDistance = distance;
                bestId = id;
            }
        });
        return bestId;
    }
    catch (_d) {
        return null;
    }
}
class AgriLinkedMapLayoutManager {
    constructor(options) {
        this.options = options;
        this.mapLayoutItem = null;
        this.mapWidgetRenderer = null;
        this.autoLinkAttempted = false;
        this.layoutRaf = 0;
        this.lastNotifiedMapId = null;
    }
    scheduleLayout() {
        if (this.layoutRaf)
            cancelAnimationFrame(this.layoutRaf);
        this.layoutRaf = requestAnimationFrame(() => {
            this.layoutRaf = 0;
            this.sync();
        });
    }
    layoutNow() {
        this.sync();
    }
    destroy() {
        if (this.layoutRaf)
            cancelAnimationFrame(this.layoutRaf);
        this.layoutRaf = 0;
        this.clear();
    }
    getResolvedMapWidgetId() {
        const linked = this.getLinkedMapWidgetId();
        if (linked && isKnownMapWidgetId(linked))
            return linked;
        return this.discoverMapWidgetIdFromApp();
    }
    getLinkedMapWidgetId() {
        const ids = (0,_agri_data_source_engine__WEBPACK_IMPORTED_MODULE_1__.toPlainArray)(this.options.getUseMapWidgetIds());
        return ids[0] ? String(ids[0]) : null;
    }
    findSharedLayoutSurface(slot) {
        const hostItem = slot.closest(".layout-item, .builder-layout-item");
        return (hostItem === null || hostItem === void 0 ? void 0 : hostItem.parentElement) || null;
    }
    discoverMapWidgetIdFromApp() {
        return discoverMapWidgetIdInApp({
            hostWidgetId: this.options.hostWidgetId,
            getSlotElement: this.options.getSlotElement,
        });
    }
    notifyMapResolved(mapWidgetId) {
        var _a, _b;
        if (!mapWidgetId || mapWidgetId === this.lastNotifiedMapId)
            return;
        this.lastNotifiedMapId = mapWidgetId;
        (_b = (_a = this.options).onMapResolved) === null || _b === void 0 ? void 0 : _b.call(_a, mapWidgetId);
    }
    tryAutoLinkMapWidget(mapWidgetId) {
        var _a, _b;
        const linked = this.getLinkedMapWidgetId();
        if (!mapWidgetId || (linked && isKnownMapWidgetId(linked)) || this.autoLinkAttempted) {
            return;
        }
        const slot = (_a = this.options.getSlotElement()) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        if (slot && !isMapOverlappingSlot(mapWidgetId, slot))
            return;
        try {
            const mode = (_b = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appRuntimeInfo) === null || _b === void 0 ? void 0 : _b.appMode;
            if (mode !== jimu_core__WEBPACK_IMPORTED_MODULE_0__.AppMode.Design)
                return;
            // Runtime bundles must not depend on the builder-only package. Ask the
            // setting panel to focus the map selector; the user can confirm linkage
            // there without making published apps load `jimu-for-builder`.
            this.autoLinkAttempted = true;
            window.dispatchEvent(new CustomEvent("agri-main:map-settings-request", {
                detail: { widgetId: this.options.hostWidgetId, mapWidgetId },
            }));
        }
        catch (_c) {
            /* builder-only helper */
        }
    }
    applyMapSlotBounds(layoutItem, slotEl) {
        const slotRect = slotEl.getBoundingClientRect();
        const surface = this.findSharedLayoutSurface(slotEl);
        let top = slotRect.top;
        let left = slotRect.left;
        let positionMode = "fixed";
        if (surface) {
            const surfaceRect = surface.getBoundingClientRect();
            top = slotRect.top - surfaceRect.top + surface.scrollTop;
            left = slotRect.left - surfaceRect.left + surface.scrollLeft;
            positionMode = "absolute";
            if (getComputedStyle(surface).position === "static") {
                surface.style.setProperty("position", "relative");
            }
        }
        const entries = [
            ["position", positionMode],
            ["top", `${top}px`],
            ["left", `${left}px`],
            ["width", `${slotRect.width}px`],
            ["height", `${slotRect.height}px`],
            ["right", "auto"],
            ["bottom", "auto"],
            ["margin", "0"],
            ["padding", "0"],
            ["transform", "none"],
            ["border-radius", MAP_PANEL_BORDER_RADIUS],
            ["overflow", "hidden"],
            ["z-index", "12"],
            ["box-sizing", "border-box"],
            ["pointer-events", "auto"],
        ];
        entries.forEach(([key, value]) => {
            layoutItem.style.setProperty(key, value, "important");
        });
        const wrapper = layoutItem.closest(".builder-layout-item");
        if (wrapper && wrapper !== layoutItem) {
            [
                ["position", "static"],
                ["width", "0"],
                ["height", "0"],
                ["margin", "0"],
                ["padding", "0"],
                ["overflow", "visible"],
                ["pointer-events", "none"],
            ].forEach(([key, value]) => {
                wrapper.style.setProperty(key, value, "important");
            });
        }
    }
    fillMapRenderer(renderer) {
        const radius = MAP_PANEL_BORDER_RADIUS;
        [
            ["position", "relative"],
            ["width", "100%"],
            ["height", "100%"],
            ["top", "0"],
            ["left", "0"],
            ["margin", "0"],
            ["padding", "0"],
            ["transform", "none"],
            ["border-radius", radius],
            ["overflow", "hidden"],
            ["box-sizing", "border-box"],
        ].forEach(([key, value]) => {
            renderer.style.setProperty(key, value, "important");
        });
        renderer
            .querySelectorAll(".esri-view, .esri-view-root, .esri-view-surface, .widget-map")
            .forEach((node) => {
            node.style.setProperty("border-radius", radius, "important");
            node.style.setProperty("overflow", "hidden", "important");
        });
    }
    clearManagedElement(target) {
        if (!target)
            return;
        [
            "position",
            "top",
            "left",
            "right",
            "bottom",
            "width",
            "height",
            "z-index",
            "margin",
            "padding",
            "transform",
            "border-radius",
            "overflow",
            "box-sizing",
            "pointer-events",
        ].forEach((key) => target.style.removeProperty(key));
        Object.values(MANAGED_MAP_CLASS).forEach((cls) => target.classList.remove(cls));
        Object.values(MANAGED_RENDERER_CLASS).forEach((cls) => target.classList.remove(cls));
    }
    clear() {
        var _a;
        const wrapper = (_a = this.mapLayoutItem) === null || _a === void 0 ? void 0 : _a.closest(".builder-layout-item");
        if (wrapper && wrapper !== this.mapLayoutItem) {
            ["position", "width", "height", "margin", "padding", "overflow", "pointer-events"].forEach((key) => wrapper.style.removeProperty(key));
        }
        this.clearManagedElement(this.mapLayoutItem);
        this.clearManagedElement(this.mapWidgetRenderer);
        this.mapLayoutItem = null;
        this.mapWidgetRenderer = null;
    }
    sync() {
        var _a, _b, _c, _d;
        const slot = this.options.getSlotElement();
        if (!slot) {
            this.clear();
            return;
        }
        const mapWidgetId = this.getResolvedMapWidgetId();
        if (!mapWidgetId) {
            this.clear();
            return;
        }
        this.notifyMapResolved(mapWidgetId);
        if (!this.getLinkedMapWidgetId()) {
            this.tryAutoLinkMapWidget(mapWidgetId);
        }
        const layoutItem = findWidgetLayoutItem(mapWidgetId);
        const renderer = findWidgetRenderer(mapWidgetId);
        if (!layoutItem || !renderer) {
            // Published portal: map widget DOM often mounts after the dashboard — keep
            // the last positioned map instead of clearing styles (that strands the map).
            if (this.mapLayoutItem && this.mapWidgetRenderer) {
                this.applyMapSlotBounds(this.mapLayoutItem, slot);
                this.fillMapRenderer(this.mapWidgetRenderer);
                (_b = (_a = this.options).resizeMapView) === null || _b === void 0 ? void 0 : _b.call(_a);
            }
            return;
        }
        this.mapLayoutItem = layoutItem;
        this.mapWidgetRenderer = renderer;
        layoutItem.classList.add(MANAGED_MAP_CLASS[this.options.scope]);
        renderer.classList.add(MANAGED_RENDERER_CLASS[this.options.scope]);
        this.applyMapSlotBounds(layoutItem, slot);
        this.fillMapRenderer(renderer);
        (_d = (_c = this.options).resizeMapView) === null || _d === void 0 ? void 0 : _d.call(_c);
    }
}


/***/ }),

/***/ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/panels/PopupPanel/runtime/messages.ts":
/*!***********************************************************************************************!*\
  !*** ./your-extensions/widgets/Agri3/Agro_widgetV5/src/panels/PopupPanel/runtime/messages.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getInitialLang: () => (/* binding */ getInitialLang),
/* harmony export */   getInitialTheme: () => (/* binding */ getInitialTheme),
/* harmony export */   normalizeLang: () => (/* binding */ normalizeLang),
/* harmony export */   t: () => (/* binding */ t)
/* harmony export */ });
const MESSAGES = {
    uz_lat: {
        "title.default": "Poligon ma'lumoti",
        "title.attributes": "Atribut ma'lumotlari",
        "title.record": "Ma'lumot #{{id}}",
        "action.pin": "Popupni yuqori-o'ngga qadash",
        "action.unpin": "Popupni yechish",
        "action.minimize": "Popupni yig'ish",
        "action.expand": "Popupni ochish",
        "status.warning": "Ogohlantirish",
        "status.loadingFeature": "Obyekt ma'lumotlari yuklanmoqda...",
        "status.noConfiguredData": "Sozlangan maydonlar uchun ma'lumot topilmadi",
        "status.noFields": "Maydonlar sozlanmagan. Vidjet sozlamalarida maydonlarni tanlang.",
        "attachments.title": "Rasmlar va fayllar",
        "status.loadingAttachments": "Qo'shimchalar yuklanmoqda...",
        "status.noAttachments": "Qo'shimchalar yo'q",
        "attachment.imageFallback": "Rasm",
        "attachment.fileFallback": "fayl-{{id}}",
        "attachment.download": "Yuklab olish",
        "status.clickPolygon": "Tafsilotlarni ko'rish uchun xaritada poligonni bosing",
        "status.ready": "Polygon Inspector tayyor",
        "status.loading": "Yuklanmoqda...",
        "error.noMapView": "Xarita ko'rinishi topilmadi",
        "error.noLayersSelected": "Qatlam tanlanmagan. Sozlamalarda kamida bitta Feature Layer tanlang.",
        "error.selectedLayersMissing": "Tanlangan qatlamlar xaritada topilmadi. Tanlangan Map vidjet ichida shu qatlamlar borligini tekshiring.",
        "error.objectIdFieldMissing": "Bosilgan qatlamda ObjectId maydoni topilmadi.",
        "error.objectIdMissing": "ObjectId topilmadi. Kutilgan maydon: {{field}}",
        "error.featureByObjectIdMissing": "ObjectId bo'yicha obyekt topilmadi.",
        "error.configuredFieldMissing": "Ba'zi sozlangan maydonlar topilmadi: {{fields}}",
        "error.noDataForConfiguredFields": "Sozlangan maydonlar uchun ma'lumot mavjud emas",
        "error.unexpected": "Kutilmagan xato: {{message}}",
        "indices.title": "Vegetatsiya indekslari",
        "indices.loading": "Indekslar yuklanmoqda...",
        "indices.none": "Bu poligon uchun indeks ma'lumoti yo'q",
    },
    uz_cyr: {
        "title.attributes": "Атрибут маълумотлари",
        "title.default": "Полигон маълумоти",
        "title.record": "Маълумот #{{id}}",
        "action.pin": "Попапни юқори-ўнгга қадаш",
        "action.unpin": "Попапни ечиш",
        "action.minimize": "Попапни йиғиш",
        "action.expand": "Попапни очиш",
        "status.warning": "Огоҳлантириш",
        "status.loadingFeature": "Объект маълумотлари юкланмоқда...",
        "status.noConfiguredData": "Созланган майдонлар учун маълумот топилмади",
        "status.noFields": "Майдонлар созланмаган. Виджет созламаларида майдонларни танланг.",
        "attachments.title": "Расмлар ва файллар",
        "status.loadingAttachments": "Қўшимчалар юкланмоқда...",
        "status.noAttachments": "Қўшимчалар йўқ",
        "attachment.imageFallback": "Расм",
        "attachment.fileFallback": "файл-{{id}}",
        "attachment.download": "Юклаб олиш",
        "status.clickPolygon": "Тафсилотларни кўриш учун харитада полигонни босинг",
        "status.ready": "Polygon Inspector тайёр",
        "status.loading": "Юкланмоқда...",
        "error.noMapView": "Харита кўриниши топилмади",
        "error.noLayersSelected": "Қатлам танланмаган. Созламаларда камида битта Feature Layer танланг.",
        "error.selectedLayersMissing": "Танланган қатламлар харитада топилмади. Танланган Map виджет ичида шу қатламлар борлигини текширинг.",
        "error.objectIdFieldMissing": "Босилган қатламда ObjectId майдони топилмади.",
        "error.objectIdMissing": "ObjectId топилмади. Кутилган майдон: {{field}}",
        "error.featureByObjectIdMissing": "ObjectId бўйича объект топилмади.",
        "error.configuredFieldMissing": "Баъзи созланган майдонлар топилмади: {{fields}}",
        "error.noDataForConfiguredFields": "Созланган майдонлар учун маълумот мавжуд эмас",
        "error.unexpected": "Кутилмаган хато: {{message}}",
        "indices.title": "Вегетация индекслари",
        "indices.loading": "Индекслар юкланмоқда...",
        "indices.none": "Бу полигон учун индекс маълумоти йўқ",
    },
    ru: {
        "title.attributes": "Атрибутивные данные",
        "title.default": "Информация о полигоне",
        "title.record": "Запись #{{id}}",
        "action.pin": "Закрепить окно справа сверху",
        "action.unpin": "Открепить окно",
        "action.minimize": "Свернуть окно",
        "action.expand": "Развернуть окно",
        "status.warning": "Предупреждение",
        "status.loadingFeature": "Загрузка данных объекта...",
        "status.noConfiguredData": "Нет данных для настроенных полей",
        "status.noFields": "Поля не настроены. Выберите поля в настройках виджета.",
        "attachments.title": "Изображения и файлы",
        "status.loadingAttachments": "Загрузка вложений...",
        "status.noAttachments": "Нет вложений",
        "attachment.imageFallback": "Изображение",
        "attachment.fileFallback": "файл-{{id}}",
        "attachment.download": "Скачать",
        "status.clickPolygon": "Нажмите на полигон на карте, чтобы увидеть детали",
        "status.ready": "Polygon Inspector готов",
        "status.loading": "Загрузка...",
        "error.noMapView": "Вид карты не найден",
        "error.noLayersSelected": "Слои не выбраны. В настройках выберите минимум один Feature Layer.",
        "error.selectedLayersMissing": "Выбранные слои не найдены на карте. Проверьте, что они есть в выбранном Map виджете.",
        "error.objectIdFieldMissing": "В выбранном слое не найдено поле ObjectId.",
        "error.objectIdMissing": "ObjectId не найден. Ожидаемое поле: {{field}}",
        "error.featureByObjectIdMissing": "Объект по ObjectId не найден.",
        "error.configuredFieldMissing": "Некоторые настроенные поля не найдены: {{fields}}",
        "error.noDataForConfiguredFields": "Нет данных для настроенных полей",
        "error.unexpected": "Непредвиденная ошибка: {{message}}",
        "indices.title": "Индексы вегетации",
        "indices.loading": "Загрузка индексов...",
        "indices.none": "Нет данных по индексам для этого полигона",
    },
    en: {
        "title.attributes": "Attribute data",
        "title.default": "Polygon info",
        "title.record": "Record #{{id}}",
        "action.pin": "Pin popup to top-right",
        "action.unpin": "Unpin popup",
        "action.minimize": "Minimize popup",
        "action.expand": "Expand popup",
        "status.warning": "Warning",
        "status.loadingFeature": "Loading feature data...",
        "status.noConfiguredData": "No data available for configured fields",
        "status.noFields": "No fields configured. Please configure fields in widget settings.",
        "attachments.title": "Images & Files",
        "status.loadingAttachments": "Loading attachments...",
        "status.noAttachments": "No attachments",
        "attachment.imageFallback": "Image",
        "attachment.fileFallback": "attachment-{{id}}",
        "attachment.download": "Download",
        "status.clickPolygon": "Click a polygon on the map to see its details",
        "status.ready": "Polygon Inspector Ready",
        "status.loading": "Loading...",
        "error.noMapView": "No map view provided",
        "error.noLayersSelected": "No layers selected. Please select one or more Feature Layers in Settings.",
        "error.selectedLayersMissing": "None of the selected layers were found on the map. Ensure the chosen layers exist in the selected Map widget.",
        "error.objectIdFieldMissing": "ObjectId field not found for clicked layer.",
        "error.objectIdMissing": "ObjectId not found. Expected field: {{field}}",
        "error.featureByObjectIdMissing": "Feature not found by ObjectId.",
        "error.configuredFieldMissing": "Some configured fields not found: {{fields}}",
        "error.noDataForConfiguredFields": "No data available for configured fields",
        "error.unexpected": "Unexpected error: {{message}}",
        "indices.title": "Vegetation indices",
        "indices.loading": "Loading indices...",
        "indices.none": "No index data for this polygon",
    },
};
function normalizeLang(input) {
    const raw = String(input !== null && input !== void 0 ? input : "")
        .trim()
        .toLowerCase();
    if (raw === "en" || raw === "eng" || raw === "english")
        return "en";
    if (raw === "ru" || raw === "rus" || raw === "russian")
        return "ru";
    if (raw === "uz_cyr" ||
        raw === "uz-cyr" ||
        raw === "uz_cyrl" ||
        raw === "uz-cyrl" ||
        raw === "uzcyrl" ||
        raw === "uz_cyrillic" ||
        raw === "uz-cyrillic" ||
        raw === "cyrillic") {
        return "uz_cyr";
    }
    if (raw === "uz_lat" ||
        raw === "uz-lat" ||
        raw === "uzlatin" ||
        raw === "uz-latin" ||
        raw === "uz") {
        return "uz_lat";
    }
    return "uz_lat";
}
function getInitialLang() {
    return normalizeLang(localStorage.getItem("agri_app_lang") ||
        localStorage.getItem("app_lang") ||
        "uz_lat");
}
function getInitialTheme() {
    const storedTheme = localStorage.getItem("agri_v11_app_theme");
    if (storedTheme === "dark")
        return true;
    if (storedTheme === "light")
        return false;
    const root = document.documentElement;
    const body = document.body;
    const isLight = storedTheme === "light" ||
        root.classList.contains("light-theme") ||
        body.classList.contains("light-theme") ||
        root.getAttribute("data-theme") === "light";
    return !isLight;
}
function t(lang, key, params) {
    var _a, _b;
    const dict = MESSAGES[lang] || MESSAGES.uz_lat;
    const fallback = (_a = MESSAGES.en[key]) !== null && _a !== void 0 ? _a : key;
    const template = (_b = dict[key]) !== null && _b !== void 0 ? _b : fallback;
    if (!params)
        return template;
    return Object.keys(params).reduce((result, paramKey) => {
        var _a;
        const value = String((_a = params[paramKey]) !== null && _a !== void 0 ? _a : "");
        return result.replace(new RegExp(`\\{\\{${paramKey}\\}\\}`, "g"), value);
    }, template);
}


/***/ }),

/***/ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/panels/PopupPanel/runtime/popup-field-helpers.ts":
/*!**********************************************************************************************************!*\
  !*** ./your-extensions/widgets/Agri3/Agro_widgetV5/src/panels/PopupPanel/runtime/popup-field-helpers.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeFieldAlias: () => (/* binding */ normalizeFieldAlias)
/* harmony export */ });
/**
 * Pure field helpers for PopupPanel (no React / map side effects).
 */
function normalizeFieldAlias(field, fallbackName) {
    const name = String((field === null || field === void 0 ? void 0 : field.name) || fallbackName || "").trim();
    const alias = String((field === null || field === void 0 ? void 0 : field.alias) || (field === null || field === void 0 ? void 0 : field.displayName) || (field === null || field === void 0 ? void 0 : field.label) || "").trim();
    if (!alias)
        return name;
    return alias;
}


/***/ }),

/***/ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/panels/PopupPanel/runtime/popup-format-helpers.ts":
/*!***********************************************************************************************************!*\
  !*** ./your-extensions/widgets/Agri3/Agro_widgetV5/src/panels/PopupPanel/runtime/popup-format-helpers.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findAttributeValueCaseInsensitive: () => (/* binding */ findAttributeValueCaseInsensitive),
/* harmony export */   formatChartTick: () => (/* binding */ formatChartTick),
/* harmony export */   formatChartTooltipValue: () => (/* binding */ formatChartTooltipValue),
/* harmony export */   formatDateSmart: () => (/* binding */ formatDateSmart),
/* harmony export */   formatPopupAttributeValue: () => (/* binding */ formatPopupAttributeValue),
/* harmony export */   isEsriDateFieldType: () => (/* binding */ isEsriDateFieldType),
/* harmony export */   niceChartMax: () => (/* binding */ niceChartMax)
/* harmony export */ });
/**
 * Pure PopupPanel format / attribute helpers.
 */
function findAttributeValueCaseInsensitive(attributes, fieldName) {
    if (!attributes)
        return null;
    const target = fieldName.toLowerCase();
    const key = Object.keys(attributes).find((k) => k.toLowerCase() === target);
    return key ? attributes[key] : null;
}
function formatDateSmart(raw) {
    if (raw instanceof Date)
        return raw.toLocaleString();
    if (typeof raw === "number" && isFinite(raw)) {
        const ms = raw < 1e12 ? raw * 1000 : raw;
        const d = new Date(ms);
        return isNaN(d.getTime())
            ? String(raw)
            : d.toLocaleString(undefined, {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
            });
    }
    if (typeof raw === "string") {
        const trimmed = raw.trim();
        if (/^\d{10,13}$/.test(trimmed))
            return formatDateSmart(Number(trimmed));
        const d = new Date(trimmed);
        if (!isNaN(d.getTime())) {
            return d.toLocaleString(undefined, {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
            });
        }
    }
    return String(raw);
}
function niceChartMax(value) {
    if (!Number.isFinite(value) || value <= 0)
        return 1;
    const padded = value * 1.08;
    const magnitude = Math.pow(10, Math.floor(Math.log10(padded)));
    const normalized = padded / magnitude;
    let nice = 10;
    if (normalized <= 1)
        nice = 1;
    else if (normalized <= 2)
        nice = 2;
    else if (normalized <= 5)
        nice = 5;
    return nice * magnitude;
}
function formatChartTick(value) {
    if (!Number.isFinite(value))
        return "";
    if (Math.abs(value) >= 1000)
        return `${Math.round(value)}`;
    if (Math.abs(value) >= 100)
        return `${Math.round(value)}`;
    if (Number.isInteger(value))
        return String(value);
    return value.toFixed(1);
}
function formatChartTooltipValue(value) {
    if (!Number.isFinite(value))
        return "";
    if (Number.isInteger(value)) {
        return value.toLocaleString("ru-RU").replace(/[\u00a0\u202f]/g, " ");
    }
    return value
        .toLocaleString("ru-RU", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    })
        .replace(/[\u00a0\u202f]/g, " ")
        .replace(/,/g, ".");
}
/** ArcGIS field type guard for popup date formatting. */
function isEsriDateFieldType(type) {
    const t = String(type || "");
    return (t === "date" ||
        t === "timestamp-offset" ||
        t === "date-only" ||
        t === "time-only");
}
/** Display string for a popup attribute cell. */
function formatPopupAttributeValue(raw, opts) {
    if (raw === null || raw === undefined || raw === "")
        return "—";
    if (opts.isDateField)
        return opts.formatDate(raw);
    if ((typeof raw === "number" && raw > 1e9 && raw < 1e14) ||
        (typeof raw === "string" && /^\d{10,13}$/.test(raw))) {
        return opts.formatDate(raw);
    }
    if (typeof raw === "number" && isFinite(raw)) {
        return raw
            .toLocaleString("ru-RU")
            .replace(/[\u00a0\u202f]/g, " ")
            .replace(/,/g, ".");
    }
    if (Array.isArray(raw))
        return raw.join(", ");
    if (typeof raw === "object")
        return JSON.stringify(raw);
    return String(raw);
}


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/calendar-days.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/calendar-days.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ CalendarDays)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.mjs */ "./node_modules/lucide-react/dist/esm/createLucideIcon.mjs");
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
];
const CalendarDays = (0,_createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])("calendar-days", __iconNode);


//# sourceMappingURL=calendar-days.mjs.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/chart-column.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/chart-column.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ ChartColumn)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.mjs */ "./node_modules/lucide-react/dist/esm/createLucideIcon.mjs");
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
];
const ChartColumn = (0,_createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])("chart-column", __iconNode);


//# sourceMappingURL=chart-column.mjs.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/chevron-up.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/chevron-up.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ ChevronUp)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.mjs */ "./node_modules/lucide-react/dist/esm/createLucideIcon.mjs");
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
const ChevronUp = (0,_createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])("chevron-up", __iconNode);


//# sourceMappingURL=chevron-up.mjs.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/download.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/download.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Download)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.mjs */ "./node_modules/lucide-react/dist/esm/createLucideIcon.mjs");
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = (0,_createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])("download", __iconNode);


//# sourceMappingURL=download.mjs.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/folder-open.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/folder-open.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ FolderOpen)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.mjs */ "./node_modules/lucide-react/dist/esm/createLucideIcon.mjs");
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
];
const FolderOpen = (0,_createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])("folder-open", __iconNode);


//# sourceMappingURL=folder-open.mjs.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/inbox.mjs":
/*!************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/inbox.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Inbox)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.mjs */ "./node_modules/lucide-react/dist/esm/createLucideIcon.mjs");
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12", key: "o97t9d" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr"
    }
  ]
];
const Inbox = (0,_createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])("inbox", __iconNode);


//# sourceMappingURL=inbox.mjs.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/map-pin.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/map-pin.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ MapPin)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.mjs */ "./node_modules/lucide-react/dist/esm/createLucideIcon.mjs");
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = (0,_createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])("map-pin", __iconNode);


//# sourceMappingURL=map-pin.mjs.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/mouse-pointer-click.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/mouse-pointer-click.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ MousePointerClick)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.mjs */ "./node_modules/lucide-react/dist/esm/createLucideIcon.mjs");
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M14 4.1 12 6", key: "ita8i4" }],
  ["path", { d: "m5.1 8-2.9-.8", key: "1go3kf" }],
  ["path", { d: "m6 12-1.9 2", key: "mnht97" }],
  ["path", { d: "M7.2 2.2 8 5.1", key: "1cfko1" }],
  [
    "path",
    {
      d: "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",
      key: "s0h3yz"
    }
  ]
];
const MousePointerClick = (0,_createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])("mouse-pointer-click", __iconNode);


//# sourceMappingURL=mouse-pointer-click.mjs.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/paperclip.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/paperclip.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Paperclip)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.mjs */ "./node_modules/lucide-react/dist/esm/createLucideIcon.mjs");
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
      key: "1miecu"
    }
  ]
];
const Paperclip = (0,_createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])("paperclip", __iconNode);


//# sourceMappingURL=paperclip.mjs.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/pin.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/pin.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Pin)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.mjs */ "./node_modules/lucide-react/dist/esm/createLucideIcon.mjs");
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M12 17v5", key: "bb1du9" }],
  [
    "path",
    {
      d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",
      key: "1nkz8b"
    }
  ]
];
const Pin = (0,_createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])("pin", __iconNode);


//# sourceMappingURL=pin.mjs.map


/***/ }),

/***/ "./node_modules/lucide-react/dist/esm/icons/settings-2.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/settings-2.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Settings2)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.mjs */ "./node_modules/lucide-react/dist/esm/createLucideIcon.mjs");
/**
 * @license lucide-react v1.23.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
];
const Settings2 = (0,_createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])("settings-2", __iconNode);


//# sourceMappingURL=settings-2.mjs.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvQWdyaTNfQWdyb193aWRnZXRWNV9zcmNfcGFuZWxzX1BvcHVwUGFuZWxfcnVudGltZV93aWRnZXRfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQXFEO0FBQ3JELHVHQUF1Rzs7Ozs7Ozs7OztBQUVwRTtBQUVtQjtBQUNkO0FBQ0Q7QUFDc0I7QUFDQTtBQUNIO0FBTXZDO0FBaUJHO0FBQ21EO0FBSTNCO0FBQzJHO0FBQzFFO0FBQ0c7QUFLdkM7QUFDd0M7QUFDTTtBQVN6RDtBQWVTO0FBSVM7QUFJTDtBQUNvQjtBQUNIO0FBQ3VDO0FBT2pGO0FBb0ZwQixNQUFxQixXQUFZLFNBQVEsNENBQUssQ0FBQyxhQUc5QztJQTJDUyxhQUFhLENBQ25CLElBQStDO1FBRS9DLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDakMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUVqQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLENBQUM7WUFDL0IsTUFBTSxJQUFJLEdBQ1AsUUFBUSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBd0I7Z0JBQ3BFLFFBQVEsQ0FBQyxlQUFlLENBQUM7WUFDM0IsTUFBTSxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2lCQUMvQixnQkFBZ0IsQ0FBQyw4QkFBOEIsQ0FBQztpQkFDaEQsSUFBSSxFQUFFLENBQUM7WUFDVixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQzFDLFNBQVMsR0FBRyxNQUFNLENBQUM7WUFDckIsQ0FBQztRQUNILENBQUM7UUFFRCxJQUFJLElBQUksRUFBRSxD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Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXVEOztBQUV2RDtBQUNBLGFBQWEsOEJBQThCO0FBQzNDLGFBQWEsNkJBQTZCO0FBQzFDLGVBQWUsMkNBQTJDO0FBQzFELGVBQWUseUNBQXlDO0FBQ3hEO0FBQ0Esa0JBQWtCLGlFQUFnQjs7QUFFVTtBQUM1QyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9BZ3JpMy9BZ3JvX3dpZGdldFY1L3NyYy9wYW5lbHMvUG9wdXBQYW5lbC9ydW50aW1lL3dpZGdldC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL0FncmkzL0Fncm9fd2lkZ2V0VjUvc3JjL2dpcy9BZ3JpSGlkZGVuQ29ubmVjdG9ycy50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL0FncmkzL0Fncm9fd2lkZ2V0VjUvc3JjL2dpcy9hZ3JpLWRhdGEtc291cmNlLWVuZ2luZS50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvQWdyaTMvQWdyb193aWRnZXRWNS9zcmMvZ2lzL2FncmktZW5naW5lLXJlZ2lzdHJ5LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9BZ3JpMy9BZ3JvX3dpZGdldFY1L3NyYy9naXMvYWdyaS1saW5rZWQtbWFwLWxheW91dC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvQWdyaTMvQWdyb193aWRnZXRWNS9zcmMvcGFuZWxzL1BvcHVwUGFuZWwvcnVudGltZS9tZXNzYWdlcy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvQWdyaTMvQWdyb193aWRnZXRWNS9zcmMvcGFuZWxzL1BvcHVwUGFuZWwvcnVudGltZS9wb3B1cC1maWVsZC1oZWxwZXJzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9BZ3JpMy9BZ3JvX3dpZGdldFY1L3NyYy9wYW5lbHMvUG9wdXBQYW5lbC9ydW50aW1lL3BvcHVwLWZvcm1hdC1oZWxwZXJzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2ljb25zL2NhbGVuZGFyLWRheXMubWpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2ljb25zL2NoYXJ0LWNvbHVtbi5tanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvY2hldnJvbi11cC5tanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvZG93bmxvYWQubWpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2ljb25zL2ZvbGRlci1vcGVuLm1qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9pY29ucy9pbmJveC5tanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvbWFwLXBpbi5tanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvbW91c2UtcG9pbnRlci1jbGljay5tanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvcGFwZXJjbGlwLm1qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9pY29ucy9waW4ubWpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2ljb25zL3NldHRpbmdzLTIubWpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFBvbHlnb24gQXR0cmlidXRlIEluc3BlY3RvciAoQWdyaVBvbHlnb24gcmVmYWN0b3IpXG4vLyDinIUgVVBEQVRFRDogc3VwcG9ydHMgTVVMVElQTEUgc2VsZWN0ZWQgRmVhdHVyZSBMYXllcnMgKGUuZy4geWVhcmx5IGxheWVycyBmaWx0ZXJlZCBieSBhbm90aGVyIHdpZGdldClcblxuaW1wb3J0IEdyYXBoaWMgZnJvbSBcImVzcmkvR3JhcGhpY1wiO1xuaW1wb3J0IEZlYXR1cmVMYXllciBmcm9tIFwiZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyXCI7XG5pbXBvcnQgR3JhcGhpY3NMYXllciBmcm9tIFwiZXNyaS9sYXllcnMvR3JhcGhpY3NMYXllclwiO1xuaW1wb3J0IFBvaW50IGZyb20gXCJlc3JpL2dlb21ldHJ5L1BvaW50XCI7XG5pbXBvcnQgZXNyaVJlcXVlc3QgZnJvbSBcImVzcmkvcmVxdWVzdFwiO1xuaW1wb3J0IFNpbXBsZUZpbGxTeW1ib2wgZnJvbSBcImVzcmkvc3ltYm9scy9TaW1wbGVGaWxsU3ltYm9sXCI7XG5pbXBvcnQgU2ltcGxlTGluZVN5bWJvbCBmcm9tIFwiZXNyaS9zeW1ib2xzL1NpbXBsZUxpbmVTeW1ib2xcIjtcbmltcG9ydCB7IEppbXVNYXBWaWV3LCBNYXBWaWV3TWFuYWdlciB9IGZyb20gXCJqaW11LWFyY2dpc1wiO1xuaW1wb3J0IHtcbiAgQWxsV2lkZ2V0UHJvcHMsXG4gIERhdGFTb3VyY2VNYW5hZ2VyLFxuICBRdWVyaWFibGVEYXRhU291cmNlLFxuICBSZWFjdCxcbn0gZnJvbSBcImppbXUtY29yZVwiO1xuaW1wb3J0IHtcbiAgQWxlcnRUcmlhbmdsZSxcbiAgQmFyQ2hhcnQzLFxuICBDYWxlbmRhckRheXMsXG4gIERvd25sb2FkLFxuICBGb2xkZXJPcGVuLFxuICBJbmJveCxcbiAgTGluZUNoYXJ0LFxuICBNYXBQaW4sXG4gIE1vdXNlUG9pbnRlckNsaWNrLFxuICBQYXBlcmNsaXAsXG4gIFBpbixcbiAgU2V0dGluZ3MyLFxuICBTcHJvdXQsXG4gIENoZXZyb25VcCxcbiAgWCxcbn0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgQWdyaUhpZGRlbkNvbm5lY3RvcnMgfSBmcm9tIFwiLi4vLi4vLi4vZ2lzL0FncmlIaWRkZW5Db25uZWN0b3JzXCI7XG5pbXBvcnQge1xuICBnZXRTZWxlY3RlZERzSWRzLFxuICB0eXBlIEFncmlEYXRhU291cmNlRW5naW5lLFxufSBmcm9tIFwiLi4vLi4vLi4vZ2lzL2FncmktZGF0YS1zb3VyY2UtZW5naW5lXCI7XG5pbXBvcnQgeyBBR1JJX01BUF9WSUVXX1JFQURZX0VWRU5ULCBBR1JJX01BUF9DTElDS19FVkVOVCwgQUdSSV9YWV9QQUdFX0NMT1NFRF9FVkVOVCwgdHlwZSBBZ3JpTWFwQ2xpY2tEZXRhaWwgfSBmcm9tIFwiLi4vLi4vLi4vZ2lzL2FncmktZGF0YS1sYXllci1yb2xlc1wiO1xuaW1wb3J0IHsgZGlzY292ZXJNYXBXaWRnZXRJZEluQXBwIH0gZnJvbSBcIi4uLy4uLy4uL2dpcy9hZ3JpLWxpbmtlZC1tYXAtbGF5b3V0XCI7XG5pbXBvcnQgeyBnZXRTaGFyZWRBZ3JpRGF0YVNvdXJjZUVuZ2luZSB9IGZyb20gXCIuLi8uLi8uLi9naXMvYWdyaS1lbmdpbmUtcmVnaXN0cnlcIjtcbmltcG9ydCB7XG4gIGFncmlNYXBDbGlja0RlYnVnLFxuICBhZ3JpTWFwQ2xpY2tXYXJuLFxuICBsb2dQb2ludGVyU3RhY2ssXG59IGZyb20gXCIuLi8uLi8uLi9naXMvYWdyaS1tYXAtY2xpY2stZGVidWdcIjtcbmltcG9ydCB7IEdSQUZGX0lOREVYX09SREVSIH0gZnJvbSBcIi4uLy4uL0dyYWZmUGFuZWwvcnVudGltZS9ncmFmZi1ncmFwaC1jb25zdGFudHNcIjtcbmltcG9ydCB7IG5vcm1hbGl6ZUZpZWxkQWxpYXMgYXMgbm9ybWFsaXplRmllbGRBbGlhc1NoYXJlZCB9IGZyb20gXCIuL3BvcHVwLWZpZWxkLWhlbHBlcnNcIjtcbmltcG9ydCB7XG4gIGZpbmRBdHRyaWJ1dGVWYWx1ZUNhc2VJbnNlbnNpdGl2ZSBhcyBmaW5kQXR0cmlidXRlVmFsdWVDYXNlSW5zZW5zaXRpdmVTaGFyZWQsXG4gIGZvcm1hdENoYXJ0VGljayBhcyBmb3JtYXRDaGFydFRpY2tTaGFyZWQsXG4gIGZvcm1hdENoYXJ0VG9vbHRpcFZhbHVlIGFzIGZvcm1hdENoYXJ0VG9vbHRpcFZhbHVlU2hhcmVkLFxuICBmb3JtYXREYXRlU21hcnQgYXMgZm9ybWF0RGF0ZVNtYXJ0U2hhcmVkLFxuICBmb3JtYXRQb3B1cEF0dHJpYnV0ZVZhbHVlLFxuICBpc0VzcmlEYXRlRmllbGRUeXBlLFxuICBuaWNlQ2hhcnRNYXggYXMgbmljZUNoYXJ0TWF4U2hhcmVkLFxufSBmcm9tIFwiLi9wb3B1cC1mb3JtYXQtaGVscGVyc1wiO1xuaW1wb3J0IHtcbiAgY29sbGVjdFF1ZXJ5YWJsZUZpZWxkTGF5ZXJzLFxuICBleHRyYWN0TWFwTGF5ZXJJZEZyb21Ec0lkLFxuICBmaW5kUXVlcnlhYmxlTGF5ZXJPbk1hcEJ5VXJsLFxuICBmaW5kUXVlcnlhYmxlTGF5ZXJPbk1hcEJ5SWQsXG4gIGdldEFsbEZlYXR1cmVMYXllcnNGcm9tTWFwLFxuICBnZXREZXRhY2hlZFF1ZXJ5TGF5ZXJGb3IsXG4gIGdldEFncmlMYXllck1hcEtleSxcbiAgZ2V0UXVlcnlhYmxlTGF5ZXIsXG4gIGlzTWFwSW1hZ2VHcm91cFN1YmxheWVyLFxuICBpc01hcEltYWdlT3duZWRMYXllcixcbiAgaXNRdWVyeWFibGVGaWVsZExheWVyLFxuICBub3JtYWxpemVRdWVyeWFibGVMYXllclVybCxcbiAgc2FmZUxvYWRNYXBMYXllcixcbn0gZnJvbSBcIi4uLy4uLy4uL2dpcy9mZWF0dXJlLWxheWVyLWRhdGFcIjtcbmltcG9ydCB7XG4gIGZvcm1hdEFyY2dpc0RhdGVUb1ltZCxcbiAgcXVlcnlWZWdldGF0aW9uU2VyaWVzRm9yVW5pcXVlSWQsXG59IGZyb20gXCIuLi8uLi8uLi9naXMvYWdyaS12ZWdldGF0aW9uLWRhdGEtc291cmNlXCI7XG5pbXBvcnQge1xuICBBR1JJX1RBQkxFX0pPSU5fRklFTEQsXG4gIHF1ZXJ5QWdyaVJlY29yZEJ5VW5pcXVlSWQsXG59IGZyb20gXCIuLi8uLi8uLi9naXMvYWdyaS10YWJsZS1kYXRhLXNvdXJjZVwiO1xuaW1wb3J0IHsgYmluZE1hc3RlckZpbHRlciB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2FncmktZmlsdGVyLWJ1c1wiO1xuaW1wb3J0IEFncmlDaGFydExvYWRlciBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL0FncmlDaGFydExvYWRlclwiO1xuaW1wb3J0IHsgcHJlZmV0Y2hWZWdldGF0aW9uT3ZlcmxheUZvclVuaXF1ZWlkIH0gZnJvbSBcIi4uLy4uLy4uL2dpcy9hZ3JpLXZlZ2V0YXRpb24tb3ZlcmxheS1wcmVmZXRjaFwiO1xuaW1wb3J0IHtcbiAgZ2V0SW5pdGlhbExhbmcsXG4gIGdldEluaXRpYWxUaGVtZSxcbiAgbm9ybWFsaXplTGFuZyxcbiAgdCxcbiAgdHlwZSBMYW5nQ29kZSxcbn0gZnJvbSBcIi4vbWVzc2FnZXNcIjtcblxudHlwZSBDb25maWcgPSB7XG4gIGZpZWxkc1RvU2hvdz86IHN0cmluZ1tdO1xuICB0aXRsZUZpZWxkPzogc3RyaW5nO1xuICBsYWJlbHM/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICBzZXR0aW5ncz86IHtcbiAgICB6b29tVG9TZWxlY3Rpb24/OiBib29sZWFuOyAvLyBkZWZhdWx0IHRydWVcbiAgICBzaG93TWFwUG9wdXA/OiBib29sZWFuOyAvLyBkZWZhdWx0IGZhbHNlXG4gICAgc2hvd0F0dGFjaG1lbnRzPzogYm9vbGVhbjsgLy8gZGVmYXVsdCB0cnVlICh3aGVuIHVuZGVmaW5lZClcbiAgfTtcbiAgY2hhcnRFbmFibGVkPzogYm9vbGVhbjtcbiAgY2hhcnRUeXBlPzogXCJiYXJcIiB8IFwibGluZVwiO1xuICBjaGFydFRpdGxlPzogc3RyaW5nO1xuICBjaGFydEZpZWxkcz86IHN0cmluZ1tdO1xuICBjaGFydENvbG9yPzogc3RyaW5nO1xufTtcblxudHlwZSBBdHRhY2htZW50SXRlbSA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZT86IHN0cmluZztcbiAgc2l6ZT86IG51bWJlcjtcbiAgY29udGVudFR5cGU/OiBzdHJpbmc7XG4gIHVybD86IHN0cmluZzsgLy8gZGlyZWN0IGRvd25sb2FkIFVSTFxuICBwcmV2aWV3T2JqZWN0VXJsPzogc3RyaW5nOyAvLyBjcmVhdGVkIHZpYSBVUkwuY3JlYXRlT2JqZWN0VVJMIGZvciA8aW1nPiBwcmV2aWV3c1xufTtcblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgY3VycmVudExhbmc6IExhbmdDb2RlO1xuICBpc0RhcmtUaGVtZTogYm9vbGVhbjtcblxuICBqaW11TWFwVmlldz86IEppbXVNYXBWaWV3IHwgbnVsbDtcblxuICAvKiog4pyFIE1VTFRJOiBhbGwgcmVzb2x2ZWQgbGF5ZXJzIGZyb20gc2V0dGluZ3MgKi9cbiAgZmVhdHVyZUxheWVyczogX19lc3JpLkZlYXR1cmVMYXllcltdO1xuICAvKiog4pyFIE1VTFRJOiBtYXAgY2xpY2tlZCBsYXllciA9PiBkc0lkIChiZXN0LWVmZm9ydCkgKi9cbiAgbGF5ZXJLZXlUb0RzSWQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG5cbiAgLyoqIOKchSBNVUxUSTogc3RvcmUgRFMgc2NoZW1hcyBwZXIgRFMgaWQgKi9cbiAgZGF0YVNvdXJjZXNCeUlkOiBSZWNvcmQ8c3RyaW5nLCBRdWVyaWFibGVEYXRhU291cmNlPjtcblxuICAvKiogd2hpY2ggbGF5ZXIgd2FzIGxhc3QgY2xpY2tlZCAoZm9yIGFsaWFzZXMvZmllbGQgcmVzb2x2aW5nKSAqL1xuICBsYXN0Q2xpY2tlZERzSWQ6IHN0cmluZyB8IG51bGw7XG4gIGxhc3RDbGlja2VkTGF5ZXJLZXk6IHN0cmluZyB8IG51bGw7XG5cbiAgcGluVG9Db3JuZXI6IGJvb2xlYW47XG5cbiAgLy8gYXR0YWNobWVudHMgVUlcbiAgbG9hZGluZ0F0dGFjaG1lbnRzOiBib29sZWFuO1xuICBhdHRhY2htZW50czogQXR0YWNobWVudEl0ZW1bXTtcbiAgYXR0YWNobWVudHNFcnJvcjogc3RyaW5nIHwgbnVsbDtcbiAgYXR0YWNobWVudHNFeHBhbmRlZDogYm9vbGVhbjtcblxuICBsb2FkaW5nOiBib29sZWFuO1xuICBlcnJvcjogc3RyaW5nIHwgbnVsbDtcblxuICBzZWxlY3RlZEF0dHJzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgbnVsbDtcbiAgc2VsZWN0ZWRPSUQ6IG51bWJlciB8IG51bGw7XG4gIG9iamVjdElkRmllbGQ6IHN0cmluZyB8IG51bGw7XG5cbiAgc2hvd1BvcHVwOiBib29sZWFuO1xuICAvKiogWCBjb2xsYXBzZXMgdGhlIHBhbmVsOyBzZWxlY3Rpb24gKyBkYXRhIHN0YXkgdW50aWwgcmVhbCBkZXNlbGVjdC4gKi9cbiAgcG9wdXBNaW5pbWl6ZWQ6IGJvb2xlYW47XG4gIHBvcHVwUG9zaXRpb246IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGw7XG4gIGNsaWNrU2NyZWVuUG9pbnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGw7XG5cbiAgZGVidWdJbmZvOiB7XG4gICAgbGF5ZXJJbmZvPzogYW55O1xuICAgIGhpdFRlc3RSZXN1bHRzPzogYW55O1xuICAgIHF1ZXJ5UmVzdWx0cz86IGFueTtcbiAgICBmaWVsZE1hcHBpbmc/OiBhbnk7XG4gICAgYXZhaWxhYmxlTGF5ZXJzPzogYW55O1xuICB9O1xuXG4gIGNoYXJ0RXhwYW5kZWQ6IGJvb2xlYW47XG4gIGNoYXJ0SG92ZXJJbmRleDogbnVtYmVyIHwgbnVsbDtcblxuICAvLyBMYXRlc3QtZGF5IHZlZ2V0YXRpb24gaW5kZXggdmFsdWVzIChORFZJL1NBVkkvUlZJL0NJL0VWSS9ORFdJKSBmb3IgdGhlXG4gIC8vIGN1cnJlbnRseSBzZWxlY3RlZCBwb2x5Z29uLCBmcm9tIGFncmlfdmVnZXRhdGlvbl9pbmRpY2VzLlxuICBsb2FkaW5nTGF0ZXN0SW5kaWNlczogYm9vbGVhbjtcbiAgbGF0ZXN0SW5kZXhEYXRlOiBzdHJpbmcgfCBudWxsO1xuICBsYXRlc3RJbmRleFZhbHVlczogUmVjb3JkPHN0cmluZywgbnVtYmVyPiB8IG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFncmlQb2x5Z29uIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxcbiAgQWxsV2lkZ2V0UHJvcHM8Q29uZmlnPixcbiAgU3RhdGVcbj4ge1xuICBwcml2YXRlIF9pc01vdW50ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfdW5iaW5kTWFzdGVyRmlsdGVyOiAoKCkgPT4gdm9pZCkgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSB0aGVtZU9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX2NsaWNrSGFuZGxlOiBJSGFuZGxlTGlrZSB8IG51bGwgPSBudWxsO1xuICAvKiogTW9ub3RvbmljIGlkIHNvIGEgc2xvdy9kdXBsaWNhdGUgY2xpY2sgcGF0aCBjYW5ub3QgY2xvc2UgYSBuZXdlciBwb3B1cC4gKi9cbiAgcHJpdmF0ZSBfY2xpY2tHZW5lcmF0aW9uID0gMDtcbiAgcHJpdmF0ZSBfcG9wdXBSZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD4gPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgcHJpdmF0ZSBfaGlnaGxpZ2h0TGF5ZXI6IF9fZXNyaS5HcmFwaGljc0xheWVyIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX2hpZ2hsaWdodEdyYXBoaWM6IF9fZXNyaS5HcmFwaGljIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX2hpZ2hsaWdodEhhbG9HcmFwaGljOiBfX2VzcmkuR3JhcGhpYyB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9leHRlbnRCZWZvcmVTZWxlY3Rpb246IF9fZXNyaS5FeHRlbnQgfCBudWxsID0gbnVsbDtcbiAgLyoqIEN1cnJlbnRseSBpbnNwZWN0ZWQgZmllbGQgdW5pcXVlaWQgKG1hcCBvciB0YWJsZSB2aWEgaHViKS4gU2FtZS1pZCBtYXAgY2xpY2sgdG9nZ2xlcyBvZmYuICovXG4gIHByaXZhdGUgX2FjdGl2ZUluc3BlY3RlZFVuaXF1ZWlkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgLyoqIExhc3QgeWlsfHZpbG95YXR8dHVtYW4gZnJvbSBtYXN0ZXJGaWx0ZXJDaGFuZ2VkIOKAlCBnZW9ncmFwaHkgbW92ZSBjbG9zZXMgcG9wdXAuICovXG4gIHByaXZhdGUgX2xhc3RNYXN0ZXJHZW9LZXkgPSBcIlwiO1xuICBwcml2YXRlIF9pc0RyYWdnaW5nUG9wdXAgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcG9wdXBEcmFnT2Zmc2V0ID0geyB4OiAwLCB5OiAwIH07XG4gIHByaXZhdGUgX3BvcHVwTGF5b3V0VGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX3BvcHVwTGF5b3V0UmFmID0gMDtcbiAgcHJpdmF0ZSBtYXBBcmVhUmVzaXplT2JzZXJ2ZXI6IFJlc2l6ZU9ic2VydmVyIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2ZlYXR1cmVRdWVyeUNhY2hlVHRsTXMgPSA2MCAqIDYwICogMTAwMDtcbiAgcHJpdmF0ZSBfZmVhdHVyZVF1ZXJ5Q2FjaGUgPSBuZXcgTWFwPFxuICAgIHN0cmluZyxcbiAgICB7IGV4cGlyZXM6IG51bWJlcjsgdmFsdWU6IFByb21pc2U8X19lc3JpLkdyYXBoaWMgfCBudWxsPiB9XG4gID4oKTtcbiAgLyoqIERldGFjaGVkIHF1ZXJ5IGNsaWVudHMga2V5ZWQgYnkgc2VydmljZSBVUkw7IG5ldmVyIG11dGF0ZSBsaXZlIG1hcCBzdWJsYXllcnMuICovXG4gIHByaXZhdGUgX3F1ZXJ5T25seUxheWVycyA9IG5ldyBNYXA8c3RyaW5nLCBGZWF0dXJlTGF5ZXI+KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgZGF0YVNvdXJjZUVuZ2luZTogQWdyaURhdGFTb3VyY2VFbmdpbmU7XG4gIHByaXZhdGUgbWFwVmlld0ZhbGxiYWNrVGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgbWFwSW5pdFJldHJ5VGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgY29ubmVjdGVkTWFwVmlld0lkID0gXCJcIjtcbiAgcHJpdmF0ZSBtYXBJbml0UmV0cnlDb3VudCA9IDA7XG4gIHByaXZhdGUgcmVhZG9ubHkgbWF4TWFwSW5pdFJldHJpZXMgPSAxMjtcbiAgcHJpdmF0ZSBtYXBDbGlja0Jvb3RzdHJhcFRpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRJbnRlcnZhbD4gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSByZWFkb25seSBQT1BVUF9XSURUSCA9IDM0MDtcbiAgcHJpdmF0ZSByZWFkb25seSBQT1BVUF9NQVJHSU4gPSAxMjtcbiAgLyoqIE1hdGNoIGRhc2hib2FyZCBtYXAgb3ZlcmxheXM6IDE2cHggaG9yaXpvbnRhbCBhbmQgMTJweCB2ZXJ0aWNhbCBpbnNldC4gKi9cbiAgcHJpdmF0ZSByZWFkb25seSBEQVNIQk9BUkRfUE9QVVBfSE9SSVpPTlRBTF9JTlNFVCA9IDE2O1xuICBwcml2YXRlIHJlYWRvbmx5IERBU0hCT0FSRF9QT1BVUF9WRVJUSUNBTF9JTlNFVCA9IDEyO1xuICAvKiogR3VhcmRzIGFnYWluc3QgYSBzdGFsZSBsYXRlc3QtaW5kaWNlcyByZXNwb25zZSBsYW5kaW5nIGFmdGVyIGEgbmV3ZXIgcG9seWdvbiBzZWxlY3Rpb24uICovXG4gIHByaXZhdGUgX2xhdGVzdEluZGljZXNSZXF1ZXN0SWQgPSAwO1xuXG4gIHByaXZhdGUgZ2V0UG9wdXBXaWR0aChcbiAgICB2aWV3PzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3IHwgbnVsbCxcbiAgKTogbnVtYmVyIHtcbiAgICBjb25zdCBtYXJnaW4gPSB0aGlzLlBPUFVQX01BUkdJTjtcbiAgICBsZXQgcHJlZmVycmVkID0gdGhpcy5QT1BVUF9XSURUSDtcblxuICAgIGlmICh0aGlzLmlzRGFzaGJvYXJkRW1iZWRkZWQoKSkge1xuICAgICAgY29uc3Qgcm9vdCA9XG4gICAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFncmktZGFzaGJvYXJkLXYzXCIpIGFzIEhUTUxFbGVtZW50IHwgbnVsbCkgfHxcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgY29uc3QgcmF3ID0gZ2V0Q29tcHV0ZWRTdHlsZShyb290KVxuICAgICAgICAuZ2V0UHJvcGVydHlWYWx1ZShcIi0tYWdyaS1kYXNoYm9hcmQtcG9wdXAtd2lkdGhcIilcbiAgICAgICAgLnRyaW0oKTtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IE51bWJlci5wYXJzZUZsb2F0KHJhdyk7XG4gICAgICBpZiAoTnVtYmVyLmlzRmluaXRlKHBhcnNlZCkgJiYgcGFyc2VkID4gMCkge1xuICAgICAgICBwcmVmZXJyZWQgPSBwYXJzZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZpZXcpIHtcbiAgICAgIGNvbnN0IG1hcFcgPSB0aGlzLmdldE1hcEFyZWFSZWN0KHZpZXcpLndpZHRoO1xuICAgICAgcmV0dXJuIE1hdGgubWF4KDIyMCwgTWF0aC5taW4ocHJlZmVycmVkLCBtYXBXIC0gbWFyZ2luICogMikpO1xuICAgIH1cbiAgICByZXR1cm4gcHJlZmVycmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQaW5uZWRQb3B1cEhlaWdodChcbiAgICB2aWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsXG4gICAgdG9wWTogbnVtYmVyLFxuICApOiBudW1iZXIge1xuICAgIGNvbnN0IHJlY3QgPSB0aGlzLmdldE1hcEFyZWFSZWN0KHZpZXcpO1xuICAgIGlmICh0aGlzLmlzRGFzaGJvYXJkRW1iZWRkZWQoKSkge1xuICAgICAgY29uc3QgYm90dG9tSW5zZXQgPSB0aGlzLkRBU0hCT0FSRF9QT1BVUF9WRVJUSUNBTF9JTlNFVDtcbiAgICAgIHJldHVybiBNYXRoLm1heCgxNjAsIHJlY3QuYm90dG9tIC0gYm90dG9tSW5zZXQgLSB0b3BZKTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXJnaW4gPSB0aGlzLlBPUFVQX01BUkdJTjtcbiAgICBjb25zdCBtYXBCb3R0b20gPSB0aGlzLmdldEVmZmVjdGl2ZU1hcEJvdHRvbSh2aWV3LCBtYXJnaW4pO1xuICAgIHJldHVybiBNYXRoLm1heCgxNjAsIG1hcEJvdHRvbSAtIHRvcFkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQb3B1cERpbWVuc2lvbnMoXG4gICAgdmlldz86IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldyB8IG51bGwsXG4gICAgcGlubmVkID0gZmFsc2UsXG4gICAgcG9zaXRpb24/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsLFxuICApOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0ge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRQb3B1cFdpZHRoKHZpZXcpO1xuICAgIGlmIChwaW5uZWQgJiYgdmlldykge1xuICAgICAgY29uc3QgdG9wWSA9XG4gICAgICAgIHBvc2l0aW9uPy55ID8/IHRoaXMuY2FsY3VsYXRlUGlubmVkUG9zaXRpb24odmlldykueTtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0UGlubmVkUG9wdXBIZWlnaHQodmlldywgdG9wWSk7XG4gICAgICByZXR1cm4geyB3aWR0aCwgaGVpZ2h0IH07XG4gICAgfVxuICAgIHJldHVybiB7IHdpZHRoLCBoZWlnaHQ6IHdpZHRoIH07XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogQWxsV2lkZ2V0UHJvcHM8Q29uZmlnPikge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmRhdGFTb3VyY2VFbmdpbmUgPSBnZXRTaGFyZWRBZ3JpRGF0YVNvdXJjZUVuZ2luZShwcm9wcy5pZCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudExhbmc6IGdldEluaXRpYWxMYW5nKCksXG4gICAgICBpc0RhcmtUaGVtZTogdGhpcy5nZXRSZXNvbHZlZFRoZW1lKCksXG5cbiAgICAgIGppbXVNYXBWaWV3OiBudWxsLFxuXG4gICAgICBmZWF0dXJlTGF5ZXJzOiBbXSxcbiAgICAgIGxheWVyS2V5VG9Ec0lkOiB7fSxcbiAgICAgIGRhdGFTb3VyY2VzQnlJZDoge30sXG5cbiAgICAgIGxhc3RDbGlja2VkRHNJZDogbnVsbCxcbiAgICAgIGxhc3RDbGlja2VkTGF5ZXJLZXk6IG51bGwsXG5cbiAgICAgIHBpblRvQ29ybmVyOiB0cnVlLFxuXG4gICAgICBsb2FkaW5nQXR0YWNobWVudHM6IGZhbHNlLFxuICAgICAgYXR0YWNobWVudHM6IFtdLFxuICAgICAgYXR0YWNobWVudHNFcnJvcjogbnVsbCxcbiAgICAgIGF0dGFjaG1lbnRzRXhwYW5kZWQ6IGZhbHNlLFxuXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGVycm9yOiBudWxsLFxuXG4gICAgICBzZWxlY3RlZEF0dHJzOiBudWxsLFxuICAgICAgc2VsZWN0ZWRPSUQ6IG51bGwsXG4gICAgICBvYmplY3RJZEZpZWxkOiBudWxsLFxuXG4gICAgICBzaG93UG9wdXA6IGZhbHNlLFxuICAgICAgcG9wdXBNaW5pbWl6ZWQ6IGZhbHNlLFxuICAgICAgcG9wdXBQb3NpdGlvbjogbnVsbCxcbiAgICAgIGNsaWNrU2NyZWVuUG9pbnQ6IG51bGwsXG5cbiAgICAgIGRlYnVnSW5mbzoge30sXG4gICAgICBjaGFydEV4cGFuZGVkOiBmYWxzZSxcbiAgICAgIGNoYXJ0SG92ZXJJbmRleDogbnVsbCxcblxuICAgICAgbG9hZGluZ0xhdGVzdEluZGljZXM6IGZhbHNlLFxuICAgICAgbGF0ZXN0SW5kZXhEYXRlOiBudWxsLFxuICAgICAgbGF0ZXN0SW5kZXhWYWx1ZXM6IG51bGwsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UmVzb2x2ZWRUaGVtZSA9ICgpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNhdmVkVGhlbWUgPVxuICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFncmlfdjExX2FwcF90aGVtZVwiKTtcblxuICAgICAgaWYgKHNhdmVkVGhlbWUgPT09IFwibGlnaHRcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKHNhdmVkVGhlbWUgPT09IFwiZGFya1wiKSByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIGlnbm9yZSBzdG9yYWdlIGFjY2VzcyBpc3N1ZXNcbiAgICB9XG5cbiAgICBjb25zdCBpc0xpZ2h0ID1cbiAgICAgIHJvb3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGlnaHQtdGhlbWVcIikgfHxcbiAgICAgIHJvb3QuZ2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiKSA9PT0gXCJsaWdodFwiIHx8XG4gICAgICBib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImxpZ2h0LXRoZW1lXCIpO1xuXG4gICAgcmV0dXJuIGdldEluaXRpYWxUaGVtZSgpID8/ICFpc0xpZ2h0O1xuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgdGhpcy5zZXR1cFRoZW1lT2JzZXJ2ZXIoKTtcbiAgICBjb25zdCBpc0RhcmtUaGVtZSA9IHRoaXMuZ2V0UmVzb2x2ZWRUaGVtZSgpO1xuICAgIGlmIChpc0RhcmtUaGVtZSAhPT0gdGhpcy5zdGF0ZS5pc0RhcmtUaGVtZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRGFya1RoZW1lIH0pO1xuICAgIH1cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJ0aGVtZUNoYW5nZWRcIixcbiAgICAgIHRoaXMuaGFuZGxlVGhlbWVDaGFuZ2UgYXMgRXZlbnRMaXN0ZW5lcixcbiAgICApO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImxhbmd1YWdlQ2hhbmdlZFwiLFxuICAgICAgdGhpcy5oYW5kbGVMYW5ndWFnZUNoYW5nZSBhcyBFdmVudExpc3RlbmVyLFxuICAgICk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLmhhbmRsZU91dHNpZGVDbGljayk7XG4gICAgdGhpcy5fdW5iaW5kTWFzdGVyRmlsdGVyID0gYmluZE1hc3RlckZpbHRlcih0aGlzLmhhbmRsZU1hc3RlckZpbHRlckNoYW5nZWQpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcIndpZGdldFNlbGVjdGlvbkNoYW5nZWRcIixcbiAgICAgIHRoaXMuaGFuZGxlV2lkZ2V0U2VsZWN0aW9uQ2hhbmdlZCBhcyBFdmVudExpc3RlbmVyLFxuICAgICk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5zY2hlZHVsZVBvcHVwTGF5b3V0KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIEFHUklfTUFQX1ZJRVdfUkVBRFlfRVZFTlQsXG4gICAgICB0aGlzLmhhbmRsZU1hcFZpZXdSZWFkeSBhcyBFdmVudExpc3RlbmVyLFxuICAgICk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBBR1JJX01BUF9DTElDS19FVkVOVCxcbiAgICAgIHRoaXMuaGFuZGxlU2hhcmVkTWFwQ2xpY2sgYXMgRXZlbnRMaXN0ZW5lcixcbiAgICApO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgQUdSSV9YWV9QQUdFX0NMT1NFRF9FVkVOVCxcbiAgICAgIHRoaXMuaGFuZGxlWHlQYWdlQ2xvc2VkIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgKTtcbiAgICBpZiAoIXRoaXMuaXNEYXNoYm9hcmRFbWJlZGRlZCgpKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLnNjaGVkdWxlUG9wdXBMYXlvdXQsIHRydWUpO1xuICAgIH1cbiAgICB0aGlzLnNjaGVkdWxlTWFwVmlld0ZhbGxiYWNrKCk7XG4gICAgdGhpcy5tYXBDbGlja0Jvb3RzdHJhcFRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZW5zdXJlTWFwQ2xpY2tBdHRhY2hlZCgpICYmIHRoaXMubWFwQ2xpY2tCb290c3RyYXBUaW1lcikge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMubWFwQ2xpY2tCb290c3RyYXBUaW1lcik7XG4gICAgICAgIHRoaXMubWFwQ2xpY2tCb290c3RyYXBUaW1lciA9IG51bGw7XG4gICAgICB9XG4gICAgfSwgMjUwMCk7XG4gICAgYWdyaU1hcENsaWNrRGVidWcoXCJBZ3JpUG9seWdvbiBtb3VudGVkXCIsIHtcbiAgICAgIHdpZGdldElkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgZW1iZWRkZWQ6IHRoaXMuaXNEYXNoYm9hcmRFbWJlZGRlZCgpLFxuICAgICAgbWFwV2lkZ2V0SWQ6IHRoaXMuZ2V0TGlua2VkTWFwV2lkZ2V0SWQoKSxcbiAgICAgIHVzZURhdGFTb3VyY2VJZHM6IGdldFNlbGVjdGVkRHNJZHModGhpcy5wcm9wcy51c2VEYXRhU291cmNlcyksXG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93UG9wdXApIHtcbiAgICAgIHRoaXMuYnJvYWRjYXN0UG9wdXBWaXNpYmlsaXR5KGZhbHNlKTtcbiAgICB9XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwidGhlbWVDaGFuZ2VkXCIsXG4gICAgICB0aGlzLmhhbmRsZVRoZW1lQ2hhbmdlIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgXCJsYW5ndWFnZUNoYW5nZWRcIixcbiAgICAgIHRoaXMuaGFuZGxlTGFuZ3VhZ2VDaGFuZ2UgYXMgRXZlbnRMaXN0ZW5lcixcbiAgICApO1xuICAgIHRoaXMuZGV0YWNoTWFwQ2xpY2soKTtcbiAgICB0aGlzLmNsZWFudXBIaWdobGlnaHQoKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrKTtcbiAgICB0aGlzLl91bmJpbmRNYXN0ZXJGaWx0ZXI/LigpO1xuICAgIHRoaXMuX3VuYmluZE1hc3RlckZpbHRlciA9IG51bGw7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwid2lkZ2V0U2VsZWN0aW9uQ2hhbmdlZFwiLFxuICAgICAgdGhpcy5oYW5kbGVXaWRnZXRTZWxlY3Rpb25DaGFuZ2VkIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnNjaGVkdWxlUG9wdXBMYXlvdXQpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgQUdSSV9NQVBfVklFV19SRUFEWV9FVkVOVCxcbiAgICAgIHRoaXMuaGFuZGxlTWFwVmlld1JlYWR5IGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgIEFHUklfTUFQX0NMSUNLX0VWRU5ULFxuICAgICAgdGhpcy5oYW5kbGVTaGFyZWRNYXBDbGljayBhcyBFdmVudExpc3RlbmVyLFxuICAgICk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICBBR1JJX1hZX1BBR0VfQ0xPU0VEX0VWRU5ULFxuICAgICAgdGhpcy5oYW5kbGVYeVBhZ2VDbG9zZWQgYXMgRXZlbnRMaXN0ZW5lcixcbiAgICApO1xuICAgIGlmICh0aGlzLm1hcFZpZXdGYWxsYmFja1RpbWVyKSBjbGVhclRpbWVvdXQodGhpcy5tYXBWaWV3RmFsbGJhY2tUaW1lcik7XG4gICAgaWYgKHRoaXMubWFwSW5pdFJldHJ5VGltZXIpIGNsZWFyVGltZW91dCh0aGlzLm1hcEluaXRSZXRyeVRpbWVyKTtcbiAgICBpZiAodGhpcy5tYXBDbGlja0Jvb3RzdHJhcFRpbWVyKSBjbGVhckludGVydmFsKHRoaXMubWFwQ2xpY2tCb290c3RyYXBUaW1lcik7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5zY2hlZHVsZVBvcHVwTGF5b3V0LCB0cnVlKTtcbiAgICBpZiAodGhpcy5fcG9wdXBMYXlvdXRUaW1lcikgY2xlYXJUaW1lb3V0KHRoaXMuX3BvcHVwTGF5b3V0VGltZXIpO1xuICAgIGlmICh0aGlzLl9wb3B1cExheW91dFJhZikgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5fcG9wdXBMYXlvdXRSYWYpO1xuICAgIHRoaXMubWFwQXJlYVJlc2l6ZU9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gICAgdGhpcy5tYXBBcmVhUmVzaXplT2JzZXJ2ZXIgPSBudWxsO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMub25Qb3B1cERyYWdNb3ZlKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5vblBvcHVwRHJhZ0VuZCk7XG4gICAgaWYgKHRoaXMudGhlbWVPYnNlcnZlcikge1xuICAgICAgdGhpcy50aGVtZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIHRoaXMudGhlbWVPYnNlcnZlciA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMucmV2b2tlQWxsQXR0YWNobWVudFVybHMoKTtcbiAgICB0aGlzLl9mZWF0dXJlUXVlcnlDYWNoZS5jbGVhcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBwcnVuZUZlYXR1cmVRdWVyeUNhY2hlKG5vdyA9IERhdGUubm93KCkpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIGVudHJ5XSBvZiB0aGlzLl9mZWF0dXJlUXVlcnlDYWNoZSkge1xuICAgICAgaWYgKGVudHJ5LmV4cGlyZXMgPD0gbm93KSB0aGlzLl9mZWF0dXJlUXVlcnlDYWNoZS5kZWxldGUoa2V5KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEZlYXR1cmVRdWVyeUNhY2hlS2V5KFxuICAgIGxheWVyOiBfX2VzcmkuRmVhdHVyZUxheWVyLFxuICAgIG9pZEZpZWxkOiBzdHJpbmcsXG4gICAgb2lkOiB1bmtub3duLFxuICAgIG91dEZpZWxkczogc3RyaW5nW10sXG4gICk6IHN0cmluZyB7XG4gICAgY29uc3QgbGF5ZXJLZXkgPSBTdHJpbmcoKGxheWVyIGFzIGFueSk/LnVybCB8fCBsYXllci5pZCB8fCBsYXllci50aXRsZSB8fCBcIlwiKTtcbiAgICBjb25zdCBmaWVsZHNLZXkgPSBBcnJheS5mcm9tKG5ldyBTZXQob3V0RmllbGRzLm1hcCgoZikgPT4gU3RyaW5nKGYpKSkpXG4gICAgICAuc29ydCgpXG4gICAgICAuam9pbihcIixcIik7XG4gICAgcmV0dXJuIGAke2xheWVyS2V5fXwke29pZEZpZWxkfXwke1N0cmluZyhvaWQpfXwke2ZpZWxkc0tleX1gO1xuICB9XG5cbiAgLyoqXG4gICAqIE9mZi1tYXAgRmVhdHVyZUxheWVyIGNsaWVudCBmb3IgYSBsaXZlIG1hcCBsYXllcidzIFVSTC4gRXZlcnkgcXVlcnkgaW5cbiAgICogdGhlIGNsaWNrIGNoYWluIG11c3QgcnVuIGFnYWluc3QgdGhlc2UgZGV0YWNoZWQgY2xpZW50czogY3JlYXRlUXVlcnkgL1xuICAgKiBxdWVyeUZlYXR1cmVzIG9uIGEgbGl2ZSBNYXBJbWFnZSBTdWJsYXllciByZWh5ZHJhdGVzIGl0IGFuZCBjYW4gY2xlYXIgaXRzXG4gICAqIHJ1bnRpbWUgZGVmaW5pdGlvbkV4cHJlc3Npb24sIHdoaWNoIG1ha2VzIHRoZSBtYXAgZXhwb3J0IChhbmQgYnJpZWZseVxuICAgKiBwYWludCkgZXZlcnkgZGlzdHJpY3QncyBmaWVsZHMgdW50aWwgdGhlIGZpbHRlciBndWFyZCByZXN0b3JlcyBpdC5cbiAgICpcbiAgICogU2hhcmVkIGhlbHBlciBhbHNvIHNraXBzIE1hcFNlcnZlciByb290cyBhbmQgR3JvdXAgTGF5ZXIgZm9sZGVyc1xuICAgKiAoXCJBZ3JpIDIwMjYgcmVwdWJsaWMgZGF0YVwiKSB0aGF0IEZlYXR1cmVMYXllciBjYW5ub3QgbG9hZC5cbiAgICovXG4gIHByaXZhdGUgZ2V0RGV0YWNoZWRRdWVyeUxheWVyID0gYXN5bmMgKFxuICAgIGxheWVyOiBhbnksXG4gICk6IFByb21pc2U8X19lc3JpLkZlYXR1cmVMYXllciB8IG51bGw+ID0+IHtcbiAgICBpZiAoIWxheWVyIHx8IGlzTWFwSW1hZ2VHcm91cFN1YmxheWVyKGxheWVyKSkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgZGV0YWNoZWQgPSBhd2FpdCBnZXREZXRhY2hlZFF1ZXJ5TGF5ZXJGb3IobGF5ZXIpO1xuICAgIGlmICghZGV0YWNoZWQpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHVybCA9IFN0cmluZyhsYXllcj8udXJsIHx8IFwiXCIpLnRyaW0oKS5yZXBsYWNlKC9cXC8rJC8sIFwiXCIpO1xuICAgIGlmICh1cmwpIHRoaXMuX3F1ZXJ5T25seUxheWVycy5zZXQodXJsLCBkZXRhY2hlZCk7XG4gICAgcmV0dXJuIGRldGFjaGVkIGFzIHVua25vd24gYXMgX19lc3JpLkZlYXR1cmVMYXllcjtcbiAgfTtcblxuICAvKiogU25hcHNob3QgdGhlIGxpdmUgZGVmaW5pdGlvbkV4cHJlc3Npb24gb2YgZWFjaCBsYXllciAocHJlLWhpdFRlc3QpLiAqL1xuICBwcml2YXRlIHNuYXBzaG90RGVmaW5pdGlvbkV4cHJlc3Npb25zKFxuICAgIGxheWVyczogQXJyYXk8X19lc3JpLkZlYXR1cmVMYXllciB8IGFueT4sXG4gICk6IE1hcDxhbnksIHN0cmluZz4ge1xuICAgIGNvbnN0IHNuYXBzaG90ID0gbmV3IE1hcDxhbnksIHN0cmluZz4oKTtcbiAgICBmb3IgKGNvbnN0IGxheWVyIG9mIGxheWVycykge1xuICAgICAgaWYgKCFsYXllciB8fCBzbmFwc2hvdC5oYXMobGF5ZXIpKSBjb250aW51ZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNuYXBzaG90LnNldChsYXllciwgU3RyaW5nKChsYXllciBhcyBhbnkpLmRlZmluaXRpb25FeHByZXNzaW9uID8/IFwiXCIpKTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvKiBpZ25vcmUgKi9cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNuYXBzaG90O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc3RvcmUgYW55IGRlZmluaXRpb25FeHByZXNzaW9uIHRoYXQgZHJpZnRlZCAod2FzIGNsZWFyZWQgYnkgaGl0VGVzdCAvXG4gICAqIGlkZW50aWZ5IC8gbG9hZCByZWh5ZHJhdGlvbikgc3luY2hyb25vdXNseSwgYmVmb3JlIHRoZSB1bmZpbHRlcmVkXG4gICAqIE1hcEltYWdlIGV4cG9ydCBjYW4gYmUgcGFpbnRlZC5cbiAgICovXG4gIHByaXZhdGUgcmVzdG9yZURyaWZ0ZWREZWZpbml0aW9uRXhwcmVzc2lvbnMoXG4gICAgc25hcHNob3Q6IE1hcDxhbnksIHN0cmluZz4sXG4gICk6IHZvaWQge1xuICAgIHNuYXBzaG90LmZvckVhY2goKGV4cHJlc3Npb24sIGxheWVyKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gU3RyaW5nKChsYXllciBhcyBhbnkpLmRlZmluaXRpb25FeHByZXNzaW9uID8/IFwiXCIpO1xuICAgICAgICBpZiAoY3VycmVudCAhPT0gZXhwcmVzc2lvbikge1xuICAgICAgICAgIChsYXllciBhcyBhbnkpLmRlZmluaXRpb25FeHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICAgICAgICBhZ3JpTWFwQ2xpY2tXYXJuKFwiZGVmaW5pdGlvbkV4cHJlc3Npb24gZHJpZnQgcmVzdG9yZWRcIiwge1xuICAgICAgICAgICAgbGF5ZXI6IGxheWVyPy50aXRsZSB8fCBsYXllcj8udXJsIHx8IGxheWVyPy5pZCxcbiAgICAgICAgICAgIGRyaWZ0ZWQ6IGN1cnJlbnQgfHwgXCI8ZW1wdHk+XCIsXG4gICAgICAgICAgICByZXN0b3JlZDogZXhwcmVzc2lvbiB8fCBcIjxlbXB0eT5cIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8qIGlnbm9yZSAqL1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBxdWVyeUZlYXR1cmVCeU9iamVjdElkQ2FjaGVkKFxuICAgIGxheWVyOiBfX2VzcmkuRmVhdHVyZUxheWVyLFxuICAgIG9pZEZpZWxkOiBzdHJpbmcsXG4gICAgb2lkOiB1bmtub3duLFxuICAgIG91dEZpZWxkczogc3RyaW5nW10sXG4gICk6IFByb21pc2U8X19lc3JpLkdyYXBoaWMgfCBudWxsPiB7XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLnBydW5lRmVhdHVyZVF1ZXJ5Q2FjaGUobm93KTtcbiAgICBjb25zdCBrZXkgPSB0aGlzLmdldEZlYXR1cmVRdWVyeUNhY2hlS2V5KGxheWVyLCBvaWRGaWVsZCwgb2lkLCBvdXRGaWVsZHMpO1xuICAgIGNvbnN0IGhpdCA9IHRoaXMuX2ZlYXR1cmVRdWVyeUNhY2hlLmdldChrZXkpO1xuICAgIGlmIChoaXQgJiYgaGl0LmV4cGlyZXMgPiBub3cpIHtcbiAgICAgIGFncmlNYXBDbGlja0RlYnVnKFwiZmVhdHVyZS1xdWVyeTpjYWNoZS1oaXRcIiwge1xuICAgICAgICBsYXllcjogbGF5ZXIudGl0bGUgfHwgbGF5ZXIudXJsIHx8IGxheWVyLmlkLFxuICAgICAgICBvaWRGaWVsZCxcbiAgICAgICAgb2lkLFxuICAgICAgICBvdXRGaWVsZENvdW50OiBvdXRGaWVsZHMubGVuZ3RoLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gaGl0LnZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IGpvYiA9IChhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBsaXZlRGVmaW5pdGlvbkV4cHJlc3Npb24gPSBTdHJpbmcoXG4gICAgICAgIChsYXllciBhcyBhbnkpLmRlZmluaXRpb25FeHByZXNzaW9uIHx8IFwiXCIsXG4gICAgICApO1xuXG4gICAgICAvLyBDYWxsaW5nIHF1ZXJ5RmVhdHVyZXMgb24gYSBsaXZlIE1hcEltYWdlIHN1YmxheWVyIGNhbiByZWh5ZHJhdGUgdGhhdFxuICAgICAgLy8gc3VibGF5ZXIgYW5kIHRlbXBvcmFyaWx5IGNsZWFyIGl0cyBydW50aW1lIGRlZmluaXRpb25FeHByZXNzaW9uLiBUaGVcbiAgICAgIC8vIG1hcCB0aGVuIHJlbmRlcnMgZXZlcnkgZGlzdHJpY3QgdW50aWwgTG9jYWxpemF0aW9uJ3MgZ3VhcmQgcmVzdG9yZXNcbiAgICAgIC8vIHRoZSBmaWx0ZXIuIFF1ZXJ5IGFuIG9mZi1tYXAgRmVhdHVyZUxheWVyIGNsaWVudCBpbnN0ZWFkLlxuICAgICAgY29uc3QgZGV0YWNoZWRRdWVyeUxheWVyID0gYXdhaXQgdGhpcy5nZXREZXRhY2hlZFF1ZXJ5TGF5ZXIobGF5ZXIpO1xuICAgICAgY29uc3QgcXVlcnlMYXllcjogX19lc3JpLkZlYXR1cmVMYXllciA9IGRldGFjaGVkUXVlcnlMYXllciB8fCBsYXllcjtcblxuICAgICAgY29uc3QgcSA9IHF1ZXJ5TGF5ZXIuY3JlYXRlUXVlcnkoKTtcbiAgICAgIHEud2hlcmUgPSBgJHtvaWRGaWVsZH0gPSAke051bWJlcihvaWQpfWA7XG4gICAgICBxLm91dEZpZWxkcyA9IG91dEZpZWxkcztcbiAgICAgIHEucmV0dXJuR2VvbWV0cnkgPSB0cnVlO1xuICAgICAgYWdyaU1hcENsaWNrRGVidWcoXCJmZWF0dXJlLXF1ZXJ5OnJlcXVlc3RcIiwge1xuICAgICAgICBsYXllcjogbGF5ZXIudGl0bGUgfHwgbGF5ZXIudXJsIHx8IGxheWVyLmlkLFxuICAgICAgICB1cmw6IGxheWVyLnVybCB8fCBudWxsLFxuICAgICAgICB3aGVyZTogcS53aGVyZSxcbiAgICAgICAgb3V0RmllbGRzLFxuICAgICAgICByZXR1cm5HZW9tZXRyeTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgcXVlcnlMYXllci5xdWVyeUZlYXR1cmVzKHEpO1xuICAgICAgLy8gRGVmZW5zaXZlIHJlc3RvcmUgZm9yIHRoZSBuby1VUkwgZmFsbGJhY2suIFRoZSBkZXRhY2hlZCBwYXRoIGFib3ZlXG4gICAgICAvLyBuZXZlciB0b3VjaGVzIHRoZSBsaXZlIGxheWVyLlxuICAgICAgaWYgKFxuICAgICAgICBxdWVyeUxheWVyID09PSBsYXllciAmJlxuICAgICAgICBTdHJpbmcoKGxheWVyIGFzIGFueSkuZGVmaW5pdGlvbkV4cHJlc3Npb24gfHwgXCJcIikgIT09XG4gICAgICAgICAgbGl2ZURlZmluaXRpb25FeHByZXNzaW9uXG4gICAgICApIHtcbiAgICAgICAgKGxheWVyIGFzIGFueSkuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBsaXZlRGVmaW5pdGlvbkV4cHJlc3Npb247XG4gICAgICB9XG4gICAgICBhZ3JpTWFwQ2xpY2tEZWJ1ZyhcImZlYXR1cmUtcXVlcnk6cmVzcG9uc2VcIiwge1xuICAgICAgICBsYXllcjogbGF5ZXIudGl0bGUgfHwgbGF5ZXIudXJsIHx8IGxheWVyLmlkLFxuICAgICAgICBmZWF0dXJlQ291bnQ6IHJlcy5mZWF0dXJlcz8ubGVuZ3RoIHx8IDAsXG4gICAgICAgIGhhc0dlb21ldHJ5OiBCb29sZWFuKHJlcy5mZWF0dXJlcz8uWzBdPy5nZW9tZXRyeSksXG4gICAgICAgIGF0dHJpYnV0ZUtleXM6IE9iamVjdC5rZXlzKHJlcy5mZWF0dXJlcz8uWzBdPy5hdHRyaWJ1dGVzIHx8IHt9KSxcbiAgICAgICAgcXVlcnlNb2RlOiBxdWVyeUxheWVyID09PSBsYXllciA/IFwibGl2ZS1mYWxsYmFja1wiIDogXCJkZXRhY2hlZFwiLFxuICAgICAgICBsaXZlRGVmaW5pdGlvbkV4cHJlc3Npb246XG4gICAgICAgICAgKGxheWVyIGFzIGFueSkuZGVmaW5pdGlvbkV4cHJlc3Npb24gfHwgbnVsbCxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlcy5mZWF0dXJlcz8uWzBdIHx8IG51bGw7XG4gICAgfSkoKTtcblxuICAgIHRoaXMuX2ZlYXR1cmVRdWVyeUNhY2hlLnNldChrZXksIHtcbiAgICAgIGV4cGlyZXM6IG5vdyArIHRoaXMuX2ZlYXR1cmVRdWVyeUNhY2hlVHRsTXMsXG4gICAgICB2YWx1ZTogam9iLFxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZlYXR1cmUgPSBhd2FpdCBqb2I7XG4gICAgICBpZiAoIWZlYXR1cmUgJiYgdGhpcy5fZmVhdHVyZVF1ZXJ5Q2FjaGUuZ2V0KGtleSk/LnZhbHVlID09PSBqb2IpIHtcbiAgICAgICAgdGhpcy5fZmVhdHVyZVF1ZXJ5Q2FjaGUuZGVsZXRlKGtleSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmVhdHVyZTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmICh0aGlzLl9mZWF0dXJlUXVlcnlDYWNoZS5nZXQoa2V5KT8udmFsdWUgPT09IGpvYikge1xuICAgICAgICB0aGlzLl9mZWF0dXJlUXVlcnlDYWNoZS5kZWxldGUoa2V5KTtcbiAgICAgIH1cbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSB0ciA9IChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBwYXJhbXM/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXI+LFxuICApOiBzdHJpbmcgPT4ge1xuICAgIHJldHVybiB0KHRoaXMuc3RhdGUuY3VycmVudExhbmcsIGtleSwgcGFyYW1zKTtcbiAgfTtcblxuICBwcml2YXRlIHNldHVwVGhlbWVPYnNlcnZlciA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIHRoaXMudGhlbWVPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICAgIGNvbnN0IGlzRGFya1RoZW1lID0gdGhpcy5nZXRSZXNvbHZlZFRoZW1lKCk7XG4gICAgICBpZiAodGhpcy5faXNNb3VudGVkICYmIGlzRGFya1RoZW1lICE9PSB0aGlzLnN0YXRlLmlzRGFya1RoZW1lKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0RhcmtUaGVtZSB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMudGhlbWVPYnNlcnZlci5vYnNlcnZlKHJvb3QsIHtcbiAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFtcImNsYXNzXCIsIFwiZGF0YS10aGVtZVwiXSxcbiAgICB9KTtcblxuICAgIHRoaXMudGhlbWVPYnNlcnZlci5vYnNlcnZlKGJvZHksIHtcbiAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFtcImNsYXNzXCJdLFxuICAgIH0pO1xuICB9O1xuXG4gIHByaXZhdGUgaGFuZGxlVGhlbWVDaGFuZ2UgPSAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgaWYgKCF0aGlzLl9pc01vdW50ZWQpIHJldHVybjtcbiAgICBjb25zdCBkZXRhaWwgPSBlPy5kZXRhaWwgfHwge307XG4gICAgbGV0IGlzRGFya1RoZW1lID0gdGhpcy5nZXRSZXNvbHZlZFRoZW1lKCk7XG5cbiAgICBpZiAodHlwZW9mIGRldGFpbC5pc0RhcmtUaGVtZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgIGlzRGFya1RoZW1lID0gZGV0YWlsLmlzRGFya1RoZW1lO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRldGFpbC50aGVtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgaXNEYXJrVGhlbWUgPSBTdHJpbmcoZGV0YWlsLnRoZW1lKS50b0xvd2VyQ2FzZSgpICE9PSBcImxpZ2h0XCI7XG4gICAgfVxuXG4gICAgaWYgKGlzRGFya1RoZW1lICE9PSB0aGlzLnN0YXRlLmlzRGFya1RoZW1lKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNEYXJrVGhlbWUgfSk7XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgaGFuZGxlTGFuZ3VhZ2VDaGFuZ2UgPSAoZTogYW55KTogdm9pZCA9PiB7XG4gICAgaWYgKCF0aGlzLl9pc01vdW50ZWQpIHJldHVybjtcbiAgICBjb25zdCBsYW5nID0gZT8uZGV0YWlsPy5sYW5nIHx8IGU/LmRldGFpbD8ubGFuZ3VhZ2UgfHwgZT8uZGV0YWlsPy5jb2RlO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVMYW5nKGxhbmcpO1xuICAgIGlmIChub3JtYWxpemVkICE9PSB0aGlzLnN0YXRlLmN1cnJlbnRMYW5nKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudExhbmc6IG5vcm1hbGl6ZWQgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8qIC0tLSBwaW5uZWQgcG9wdXAgaGVscGVycyAtLS0gKi9cbiAgcHJpdmF0ZSBpc0Rhc2hib2FyZEVtYmVkZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBTdHJpbmcodGhpcy5wcm9wcy5pZCB8fCBcIlwiKS5lbmRzV2l0aChcIi1wb3B1cFwiKTtcbiAgfVxuXG4gIC8qKiBDcm9wIG92ZXJsYXkgdG9wIGluIHZpZXdwb3J0IGNvb3JkczsgbnVsbCB3aGVuIG5vdCB1c2VkLiAqL1xuICBwcml2YXRlIGdldENyb3BPdmVybGF5VG9wKCk6IG51bWJlciB8IG51bGwge1xuICAgIGlmICghdGhpcy5pc0Rhc2hib2FyZEVtYmVkZGVkKCkpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgY3JvcEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLmFncmktZGFzaGJvYXJkLWNyb3Atb3ZlcmxheS5hZ3JpLWRhc2hib2FyZC1tYW5hZ2VkLWNyb3BcIixcbiAgICApIGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgICBpZiAoY3JvcEVsKSB7XG4gICAgICBjb25zdCByZWN0ID0gY3JvcEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgaWYgKHJlY3QuaGVpZ2h0ID4gMCAmJiBOdW1iZXIuaXNGaW5pdGUocmVjdC50b3ApKSB7XG4gICAgICAgIHJldHVybiByZWN0LnRvcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TWFwQXJlYVJlY3QoXG4gICAgdmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LFxuICApOiBET01SZWN0IHtcbiAgICBpZiAodGhpcy5pc0Rhc2hib2FyZEVtYmVkZGVkKCkpIHtcbiAgICAgIGNvbnN0IG1hcFNsb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi5hZ3JpLWRhc2hib2FyZC1tYXAtc2xvdFwiLFxuICAgICAgKSBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgICBpZiAobWFwU2xvdCkge1xuICAgICAgICBjb25zdCBzbG90UmVjdCA9IG1hcFNsb3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmIChzbG90UmVjdC53aWR0aCA+IDQwICYmIHNsb3RSZWN0LmhlaWdodCA+IDQwKSB7XG4gICAgICAgICAgcmV0dXJuIHNsb3RSZWN0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAodmlldy5jb250YWluZXIgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBvYnNlcnZlTWFwQXJlYVJlc2l6ZShcbiAgICB2aWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsXG4gICk6IHZvaWQge1xuICAgIHRoaXMubWFwQXJlYVJlc2l6ZU9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gICAgdGhpcy5tYXBBcmVhUmVzaXplT2JzZXJ2ZXIgPSBudWxsO1xuXG4gICAgaWYgKHR5cGVvZiBSZXNpemVPYnNlcnZlciA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5pc0Rhc2hib2FyZEVtYmVkZGVkKClcbiAgICAgID8gKChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIFwiLmFncmktZGFzaGJvYXJkLW1hcC1zbG90XCIsXG4gICAgICAgICkgYXMgSFRNTEVsZW1lbnQgfCBudWxsKSB8fCAodmlldy5jb250YWluZXIgYXMgSFRNTEVsZW1lbnQgfCBudWxsKSlcbiAgICAgIDogKHZpZXcuY29udGFpbmVyIGFzIEhUTUxFbGVtZW50IHwgbnVsbCk7XG4gICAgaWYgKCF0YXJnZXQpIHJldHVybjtcblxuICAgIHRoaXMubWFwQXJlYVJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKCgpID0+IHtcbiAgICAgIHRoaXMuc2NoZWR1bGVQb3B1cExheW91dCgpO1xuICAgIH0pO1xuICAgIHRoaXMubWFwQXJlYVJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGFyZ2V0KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RWZmZWN0aXZlTWFwQm90dG9tKFxuICAgIHZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldyxcbiAgICBnYXAgPSA0LFxuICApOiBudW1iZXIge1xuICAgIGNvbnN0IHJlY3QgPSB0aGlzLmdldE1hcEFyZWFSZWN0KHZpZXcpO1xuICAgIGNvbnN0IGNyb3BUb3AgPSB0aGlzLmdldENyb3BPdmVybGF5VG9wKCk7XG4gICAgaWYgKGNyb3BUb3AgIT0gbnVsbCAmJiBjcm9wVG9wID4gcmVjdC50b3AgJiYgY3JvcFRvcCA8PSByZWN0LmJvdHRvbSArIDIpIHtcbiAgICAgIHJldHVybiBjcm9wVG9wIC0gZ2FwO1xuICAgIH1cbiAgICByZXR1cm4gcmVjdC5ib3R0b20gLSBnYXA7XG4gIH1cblxuICBwcml2YXRlIG1lYXN1cmVQb3B1cEhlaWdodChwb3B1cEVsOiBIVE1MRWxlbWVudCk6IG51bWJlciB7XG4gICAgY29uc3QgaGVhZGVyID0gcG9wdXBFbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIuYWdyaTMtcG9wdXAtaGVhZGVyXCIsXG4gICAgKSBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgY29uc3QgY29udGVudCA9IHBvcHVwRWwucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLmFncmkzLXBvcHVwLWNvbnRlbnRcIixcbiAgICApIGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgICBjb25zdCBoZWFkZXJIID0gaGVhZGVyPy5vZmZzZXRIZWlnaHQgfHwgMDtcbiAgICBjb25zdCBjb250ZW50SCA9IGNvbnRlbnQ/LnNjcm9sbEhlaWdodCB8fCBjb250ZW50Py5vZmZzZXRIZWlnaHQgfHwgMDtcbiAgICBjb25zdCBuYXR1cmFsID0gaGVhZGVySCArIGNvbnRlbnRIO1xuICAgIGlmIChuYXR1cmFsID4gMCkgcmV0dXJuIE1hdGguY2VpbChuYXR1cmFsKTtcblxuICAgIGNvbnN0IHJlY3QgPSBwb3B1cEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiByZWN0LmhlaWdodCA+IDAgPyBNYXRoLmNlaWwocmVjdC5oZWlnaHQpIDogTWF0aC5jZWlsKHBvcHVwRWwuc2Nyb2xsSGVpZ2h0KTtcbiAgfVxuXG4gIHByaXZhdGUgcG9wdXBQb3NpdGlvbnNFcXVhbChcbiAgICBhOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsIHwgdW5kZWZpbmVkLFxuICAgIGI6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSxcbiAgICBlcHNpbG9uID0gMSxcbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKCFhKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIChcbiAgICAgIE1hdGguYWJzKGEueCAtIGIueCkgPD0gZXBzaWxvbiAmJiBNYXRoLmFicyhhLnkgLSBiLnkpIDw9IGVwc2lsb25cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBhcHBseVBvcHVwUG9zaXRpb24gPSAocG9zOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0pOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5wb3B1cFBvc2l0aW9uc0VxdWFsKHRoaXMuc3RhdGUucG9wdXBQb3NpdGlvbiwgcG9zKSkgcmV0dXJuO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwb3B1cFBvc2l0aW9uOiBwb3MgfSk7XG4gIH07XG5cbiAgcHJpdmF0ZSBzY2hlZHVsZVBvcHVwTGF5b3V0ID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICh0aGlzLl9pc0RyYWdnaW5nUG9wdXApIHJldHVybjtcbiAgICBpZiAodGhpcy5fcG9wdXBMYXlvdXRUaW1lcikgY2xlYXJUaW1lb3V0KHRoaXMuX3BvcHVwTGF5b3V0VGltZXIpO1xuICAgIHRoaXMuX3BvcHVwTGF5b3V0VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX3BvcHVwTGF5b3V0VGltZXIgPSBudWxsO1xuICAgICAgdGhpcy5yZXBvc2l0aW9uUGlubmVkSWZOZWVkZWQoKTtcbiAgICB9LCA0OCk7XG4gIH07XG5cbiAgcHJpdmF0ZSBzY2hlZHVsZVBvcHVwTGF5b3V0QWZ0ZXJDb250ZW50ID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICh0aGlzLl9wb3B1cExheW91dFJhZikgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5fcG9wdXBMYXlvdXRSYWYpO1xuICAgIHRoaXMuX3BvcHVwTGF5b3V0UmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuX3BvcHVwTGF5b3V0UmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5fcG9wdXBMYXlvdXRSYWYgPSAwO1xuICAgICAgICB0aGlzLnJlcG9zaXRpb25QaW5uZWRJZk5lZWRlZCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVQaW5uZWRQb3NpdGlvbiA9IChcbiAgICB2aWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsXG4gICk6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuZ2V0TWFwQXJlYVJlY3Qodmlldyk7XG4gICAgY29uc3QgbWFyZ2luID0gdGhpcy5QT1BVUF9NQVJHSU47XG4gICAgY29uc3QgcG9wdXBXaWR0aCA9IHRoaXMuZ2V0UG9wdXBXaWR0aCh2aWV3KTtcbiAgICBpZiAodGhpcy5pc0Rhc2hib2FyZEVtYmVkZGVkKCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHg6IHJlY3QucmlnaHQgLSBwb3B1cFdpZHRoIC0gdGhpcy5EQVNIQk9BUkRfUE9QVVBfSE9SSVpPTlRBTF9JTlNFVCxcbiAgICAgICAgeTogcmVjdC50b3AgKyB0aGlzLkRBU0hCT0FSRF9QT1BVUF9WRVJUSUNBTF9JTlNFVCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHJlY3QucmlnaHQgLSBwb3B1cFdpZHRoIC0gbWFyZ2luLFxuICAgICAgeTogcmVjdC50b3AgKyBtYXJnaW4sXG4gICAgfTtcbiAgfTtcblxuICBwcml2YXRlIHJlcG9zaXRpb25QaW5uZWRJZk5lZWRlZCA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMuX2lzTW91bnRlZCkgcmV0dXJuO1xuICAgIGlmICghdGhpcy5zdGF0ZS5zaG93UG9wdXApIHJldHVybjtcbiAgICBpZiAodGhpcy5faXNEcmFnZ2luZ1BvcHVwKSByZXR1cm47XG4gICAgY29uc3QgdmlldyA9IHRoaXMuc3RhdGUuamltdU1hcFZpZXc/LnZpZXc7XG4gICAgaWYgKCF2aWV3KSByZXR1cm47XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5waW5Ub0Nvcm5lcikge1xuICAgICAgY29uc3QgcG9zID0gdGhpcy5jYWxjdWxhdGVQaW5uZWRQb3NpdGlvbih2aWV3KTtcbiAgICAgIGlmICh0aGlzLnBvcHVwUG9zaXRpb25zRXF1YWwodGhpcy5zdGF0ZS5wb3B1cFBvc2l0aW9uLCBwb3MpKSB7XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwb3B1cFBvc2l0aW9uOiBwb3MgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnN0YXRlLnBvcHVwUG9zaXRpb24pIHJldHVybjtcbiAgICBjb25zdCBjbGFtcGVkID0gdGhpcy5jbGFtcFBvcHVwVG9NYXBDb250YWluZXIoXG4gICAgICB0aGlzLnN0YXRlLnBvcHVwUG9zaXRpb24sXG4gICAgICB2aWV3LFxuICAgICk7XG4gICAgdGhpcy5hcHBseVBvcHVwUG9zaXRpb24oY2xhbXBlZCk7XG4gIH07XG5cbiAgcHJpdmF0ZSB0b2dnbGVQaW5Ub0Nvcm5lciA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgKHByZXYpID0+IHtcbiAgICAgICAgY29uc3QgbmV4dCA9ICFwcmV2LnBpblRvQ29ybmVyO1xuICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy5zdGF0ZS5qaW11TWFwVmlldz8udmlldztcblxuICAgICAgICBsZXQgcG9zID0gcHJldi5wb3B1cFBvc2l0aW9uO1xuXG4gICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgaWYgKHZpZXcpIHBvcyA9IHRoaXMuY2FsY3VsYXRlUGlubmVkUG9zaXRpb24odmlldyk7XG4gICAgICAgIH0gZWxzZSBpZiAodmlldyAmJiBwcmV2LmNsaWNrU2NyZWVuUG9pbnQpIHtcbiAgICAgICAgICBwb3MgPSB0aGlzLmNhbGN1bGF0ZVBvcHVwUG9zaXRpb24ocHJldi5jbGlja1NjcmVlblBvaW50LCB2aWV3KTtcbiAgICAgICAgfSBlbHNlIGlmICh2aWV3KSB7XG4gICAgICAgICAgY29uc3QgcmVjdCA9ICh2aWV3LmNvbnRhaW5lciBhcyBIVE1MRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgcG9zID0ge1xuICAgICAgICAgICAgeDogcmVjdC5sZWZ0ICsgcmVjdC53aWR0aCAvIDIsXG4gICAgICAgICAgICB5OiByZWN0LnRvcCArIHJlY3QuaGVpZ2h0IC8gMixcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwaW5Ub0Nvcm5lcjogbmV4dCxcbiAgICAgICAgICBwb3B1cFBvc2l0aW9uOiBwb3MsXG4gICAgICAgICAgY2hhcnRFeHBhbmRlZDogbmV4dCA/IHRydWUgOiBwcmV2LmNoYXJ0RXhwYW5kZWQsXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLnNjaGVkdWxlUG9wdXBMYXlvdXRBZnRlckNvbnRlbnQoKTtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd1BvcHVwKSB7XG4gICAgICAgICAgdGhpcy5icm9hZGNhc3RQb3B1cFZpc2liaWxpdHkodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgKTtcbiAgfTtcblxuICBwcml2YXRlIGhhbmRsZU91dHNpZGVDbGljayA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghdGhpcy5zdGF0ZS5zaG93UG9wdXAgfHwgIXRoaXMuX3BvcHVwUmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICAvLyBDb2xsYXBzZWQgY2hpcCBzdGF5cyB1bnRpbCBhbiBlbXB0eS1tYXAgZGVzZWxlY3QgLyBnZW9ncmFwaHkgcmVzZXQuXG4gICAgaWYgKHRoaXMuc3RhdGUucG9wdXBNaW5pbWl6ZWQpIHJldHVybjtcblxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBOb2RlIHwgbnVsbDtcbiAgICBpZiAoIXRhcmdldCB8fCB0aGlzLl9wb3B1cFJlZi5jdXJyZW50LmNvbnRhaW5zKHRhcmdldCkpIHJldHVybjtcblxuICAgIGNvbnN0IG1hcENvbnRhaW5lciA9IHRoaXMuc3RhdGUuamltdU1hcFZpZXc/LnZpZXc/LmNvbnRhaW5lcjtcbiAgICBpZiAobWFwQ29udGFpbmVyICYmIG1hcENvbnRhaW5lci5jb250YWlucyh0YXJnZXQpKSByZXR1cm47XG5cbiAgICBpZiAodGhpcy5pc0Rhc2hib2FyZEVtYmVkZGVkKCkpIHtcbiAgICAgIGNvbnN0IGRhc2hib2FyZFVpID0gKHRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xvc2VzdD8uKFxuICAgICAgICBcIi5hZ3JpLWRhc2hib2FyZC12MywgLmFncmktZGFzaGJvYXJkLWNyb3Atb3ZlcmxheSwgLmFncmktZGFzaGJvYXJkLWhlYWRlciwgLmFncmktZGFzaGJvYXJkLWxlZnQtcGFuZWwsIC5hZ3JpLWRhc2hib2FyZC1ib3R0b20tcm93LCAuYWdyaS1kYXNoYm9hcmQtd2lkZ2V0LXNsb3QsIC5hZ3JpLWRhc2hib2FyZC1pbmRpY2F0b3Itb3ZlcmxheSwgLmFncmktZGFzaGJvYXJkLWRhdGUtaW5kZXgtb3ZlcmxheSwgLmFncmktdjIwLWZsb2F0aW5nLW92ZXJsYXlcIixcbiAgICAgICk7XG4gICAgICBpZiAoZGFzaGJvYXJkVWkpIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBPdXRzaWRlIGRhc2hib2FyZCBjaHJvbWUg4oaSIGNvbGxhcHNlIGluc3RlYWQgb2Ygd2lwaW5nIHNlbGVjdGlvbi5cbiAgICB0aGlzLm1pbmltaXplUG9wdXAoKTtcbiAgfTtcblxuICBwcml2YXRlIG9uUG9wdXBIZWFkZXJNb3VzZURvd24gPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICAvLyBBbGxvdyBub3JtYWwgYmVoYXZpb3IgZm9yIGNvbnRyb2xzIGluc2lkZSBoZWFkZXIuXG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKHRhcmdldD8uY2xvc2VzdChcImJ1dHRvbiwgYSwgaW5wdXQsIHRleHRhcmVhLCBzZWxlY3RcIikpIHJldHVybjtcbiAgICBpZiAoZS5idXR0b24gIT09IDApIHJldHVybjtcblxuICAgIGNvbnN0IHBvcHVwRWwgPSB0aGlzLl9wb3B1cFJlZi5jdXJyZW50O1xuICAgIGlmICghcG9wdXBFbCkgcmV0dXJuO1xuXG4gICAgY29uc3QgcmVjdCA9IHBvcHVwRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5faXNEcmFnZ2luZ1BvcHVwID0gdHJ1ZTtcbiAgICB0aGlzLl9wb3B1cERyYWdPZmZzZXQgPSB7XG4gICAgICB4OiBlLmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICB5OiBlLmNsaWVudFkgLSByZWN0LnRvcCxcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuc3RhdGUucGluVG9Db3JuZXIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwaW5Ub0Nvcm5lcjogZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5vblBvcHVwRHJhZ01vdmUpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLm9uUG9wdXBEcmFnRW5kKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgcHJpdmF0ZSBvblBvcHVwRHJhZ01vdmUgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghdGhpcy5faXNEcmFnZ2luZ1BvcHVwIHx8ICF0aGlzLl9pc01vdW50ZWQpIHJldHVybjtcbiAgICBjb25zdCB2aWV3ID0gdGhpcy5zdGF0ZS5qaW11TWFwVmlldz8udmlldztcbiAgICBpZiAoIXZpZXcpIHJldHVybjtcblxuICAgIGNvbnN0IG5leHRQb3MgPSB7XG4gICAgICB4OiBlLmNsaWVudFggLSB0aGlzLl9wb3B1cERyYWdPZmZzZXQueCxcbiAgICAgIHk6IGUuY2xpZW50WSAtIHRoaXMuX3BvcHVwRHJhZ09mZnNldC55LFxuICAgIH07XG4gICAgY29uc3QgY2xhbXBlZCA9IHRoaXMuY2xhbXBQb3B1cFRvTWFwQ29udGFpbmVyKG5leHRQb3MsIHZpZXcpO1xuICAgIHRoaXMuYXBwbHlQb3B1cFBvc2l0aW9uKGNsYW1wZWQpO1xuICB9O1xuXG4gIHByaXZhdGUgb25Qb3B1cERyYWdFbmQgPSAoKSA9PiB7XG4gICAgdGhpcy5faXNEcmFnZ2luZ1BvcHVwID0gZmFsc2U7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5vblBvcHVwRHJhZ01vdmUpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLm9uUG9wdXBEcmFnRW5kKTtcbiAgfTtcbiAgLyoqIOKchSBORVc6IHNhZmVseSBkZXRlY3Qgd2hldGhlciB0aGlzIGxheWVyIHN1cHBvcnRzIGF0dGFjaG1lbnRzICovXG4gIHByaXZhdGUgbGF5ZXJTdXBwb3J0c0F0dGFjaG1lbnRzKFxuICAgIGxheWVyOiBfX2VzcmkuRmVhdHVyZUxheWVyIHwgRmVhdHVyZUxheWVyIHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKCFsYXllcikgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gRGlmZmVyZW50IEpTQVBJL0VCIGJ1aWxkcyBleHBvc2UgaXQgc2xpZ2h0bHkgZGlmZmVyZW50bHlcbiAgICBjb25zdCBhbnlMYXllcjogYW55ID0gbGF5ZXIgYXMgYW55O1xuXG4gICAgLy8gQ29tbW9uIHNpZ25hbHNcbiAgICBpZiAodHlwZW9mIGFueUxheWVyLnN1cHBvcnRzQXR0YWNobWVudHMgPT09IFwiYm9vbGVhblwiKVxuICAgICAgcmV0dXJuIGFueUxheWVyLnN1cHBvcnRzQXR0YWNobWVudHM7XG5cbiAgICBjb25zdCBjYXAgPSBhbnlMYXllci5jYXBhYmlsaXRpZXM7XG4gICAgY29uc3Qgc3VwcG9ydGVkID1cbiAgICAgIGNhcD8uZGF0YT8uc3VwcG9ydHNBdHRhY2htZW50cyA/P1xuICAgICAgY2FwPy5kYXRhPy5zdXBwb3J0c0F0dGFjaG1lbnQgPz9cbiAgICAgIGNhcD8ub3BlcmF0aW9ucz8uc3VwcG9ydHNBdHRhY2htZW50cyA/P1xuICAgICAgY2FwPy5vcGVyYXRpb25zPy5zdXBwb3J0c0F0dGFjaG1lbnQ7XG5cbiAgICBpZiAodHlwZW9mIHN1cHBvcnRlZCA9PT0gXCJib29sZWFuXCIpIHJldHVybiBzdXBwb3J0ZWQ7XG5cbiAgICAvLyBVbmtub3duID0+IGFzc3VtZSBmYWxzZSB0byBhdm9pZCB1Z2x5IHdhcm5pbmdcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tIEhpZ2hsaWdodCBtYW5hZ2VtZW50IC0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICBwcml2YXRlIHNldHVwSGlnaGxpZ2h0TGF5ZXIgPSAodmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3KSA9PiB7XG4gICAgaWYgKCF0aGlzLl9oaWdobGlnaHRMYXllcikge1xuICAgICAgdGhpcy5faGlnaGxpZ2h0TGF5ZXIgPSBuZXcgR3JhcGhpY3NMYXllcih7XG4gICAgICAgIGlkOiBcImFncmktcG9seWdvbi1oaWdobGlnaHRcIixcbiAgICAgICAgdGl0bGU6IFwiU2VsZWN0ZWQgUG9seWdvbiBIaWdobGlnaHRcIixcbiAgICAgIH0pO1xuICAgICAgdmlldy5tYXAuYWRkKHRoaXMuX2hpZ2hsaWdodExheWVyKTtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBoaWdobGlnaHRQb2x5Z29uID0gKGdlb21ldHJ5OiBfX2VzcmkuR2VvbWV0cnkpID0+IHtcbiAgICBpZiAoIXRoaXMuX2hpZ2hsaWdodExheWVyIHx8ICFnZW9tZXRyeSkgcmV0dXJuO1xuICAgIHRoaXMuY2xlYXJIaWdobGlnaHQoKTtcblxuICAgIC8vIERyb3AgR3JhZmYvdGFibGUgc2VsZWN0aW9uIGdyYXBoaWNzIHNvIG9ubHkgb25lIG91dGxpbmUgaXMgdmlzaWJsZS5cbiAgICB0cnkge1xuICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldz8udmlldz8uZ3JhcGhpY3M/LnJlbW92ZUFsbD8uKCk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAvKiBpZ25vcmUgKi9cbiAgICB9XG5cbiAgICAvLyBXaWRlIHRyYW5zbHVjZW50IGhhbG8gcGx1cyBhIGJyaWdodCBjeWFuIGNvcmUga2VlcHMgdGhlIHNlbGVjdGVkIGZpZWxkXG4gICAgLy8gdmlzaWJsZSBvdmVyIGJvdGggbGlnaHQgYW5kIGRhcmsgc2F0ZWxsaXRlIGltYWdlcnkuXG4gICAgY29uc3QgaGFsb1N5bWJvbCA9IG5ldyBTaW1wbGVGaWxsU3ltYm9sKHtcbiAgICAgIGNvbG9yOiBbMCwgMCwgMCwgMF0sXG4gICAgICBvdXRsaW5lOiBuZXcgU2ltcGxlTGluZVN5bWJvbCh7XG4gICAgICAgIGNvbG9yOiBbMCwgMjI5LCAyNTUsIDAuMzJdLFxuICAgICAgICB3aWR0aDogOSxcbiAgICAgICAgc3R5bGU6IFwic29saWRcIixcbiAgICAgIH0pLFxuICAgIH0pO1xuICAgIGNvbnN0IGhpZ2hsaWdodFN5bWJvbCA9IG5ldyBTaW1wbGVGaWxsU3ltYm9sKHtcbiAgICAgIGNvbG9yOiBbMCwgMCwgMCwgMF0sXG4gICAgICBvdXRsaW5lOiBuZXcgU2ltcGxlTGluZVN5bWJvbCh7XG4gICAgICAgIGNvbG9yOiBbMTI4LCAyNDUsIDI1NSwgMV0sXG4gICAgICAgIHdpZHRoOiAzLFxuICAgICAgICBzdHlsZTogXCJzb2xpZFwiLFxuICAgICAgfSksXG4gICAgfSk7XG5cbiAgICB0aGlzLl9oaWdobGlnaHRIYWxvR3JhcGhpYyA9IG5ldyBHcmFwaGljKHsgZ2VvbWV0cnksIHN5bWJvbDogaGFsb1N5bWJvbCB9KTtcbiAgICB0aGlzLl9oaWdobGlnaHRHcmFwaGljID0gbmV3IEdyYXBoaWMoeyBnZW9tZXRyeSwgc3ltYm9sOiBoaWdobGlnaHRTeW1ib2wgfSk7XG4gICAgdGhpcy5faGlnaGxpZ2h0TGF5ZXIuYWRkTWFueShbXG4gICAgICB0aGlzLl9oaWdobGlnaHRIYWxvR3JhcGhpYyxcbiAgICAgIHRoaXMuX2hpZ2hsaWdodEdyYXBoaWMsXG4gICAgXSk7XG4gIH07XG5cbiAgcHJpdmF0ZSBjbGVhckhpZ2hsaWdodCA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMuX2hpZ2hsaWdodExheWVyKSByZXR1cm47XG4gICAgaWYgKHRoaXMuX2hpZ2hsaWdodEhhbG9HcmFwaGljKSB7XG4gICAgICB0aGlzLl9oaWdobGlnaHRMYXllci5yZW1vdmUodGhpcy5faGlnaGxpZ2h0SGFsb0dyYXBoaWMpO1xuICAgICAgdGhpcy5faGlnaGxpZ2h0SGFsb0dyYXBoaWMgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5faGlnaGxpZ2h0R3JhcGhpYykge1xuICAgICAgdGhpcy5faGlnaGxpZ2h0TGF5ZXIucmVtb3ZlKHRoaXMuX2hpZ2hsaWdodEdyYXBoaWMpO1xuICAgICAgdGhpcy5faGlnaGxpZ2h0R3JhcGhpYyA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgcmVzdG9yZUV4dGVudEJlZm9yZVNlbGVjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCB2aWV3ID0gdGhpcy5zdGF0ZS5qaW11TWFwVmlldz8udmlldztcbiAgICBjb25zdCBzYXZlZEV4dGVudCA9IHRoaXMuX2V4dGVudEJlZm9yZVNlbGVjdGlvbjtcbiAgICB0aGlzLl9leHRlbnRCZWZvcmVTZWxlY3Rpb24gPSBudWxsO1xuICAgIGNvbnN0IHpvb21UbyA9IHRoaXMucHJvcHMuY29uZmlnPy5zZXR0aW5ncz8uem9vbVRvU2VsZWN0aW9uICE9PSBmYWxzZTtcbiAgICBpZiAoIXpvb21UbyB8fCAhc2F2ZWRFeHRlbnQgfHwgIXZpZXcpIHJldHVybjtcbiAgICB0cnkge1xuICAgICAgdm9pZCB2aWV3LmdvVG8oc2F2ZWRFeHRlbnQsIHsgZHVyYXRpb246IDQwMCB9KTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8qIGlnbm9yZSAqL1xuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIGNsZWFudXBIaWdobGlnaHQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuX2hpZ2hsaWdodExheWVyKSB7XG4gICAgICBjb25zdCB2aWV3ID0gdGhpcy5zdGF0ZS5qaW11TWFwVmlldz8udmlldztcbiAgICAgIGlmICh2aWV3ICYmIHZpZXcubWFwKSB7XG4gICAgICAgIHZpZXcubWFwLnJlbW92ZSh0aGlzLl9oaWdobGlnaHRMYXllcik7XG4gICAgICB9XG4gICAgICB0aGlzLl9oaWdobGlnaHRMYXllciA9IG51bGw7XG4gICAgICB0aGlzLl9oaWdobGlnaHRHcmFwaGljID0gbnVsbDtcbiAgICAgIHRoaXMuX2hpZ2hsaWdodEhhbG9HcmFwaGljID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5fZXh0ZW50QmVmb3JlU2VsZWN0aW9uID0gbnVsbDtcbiAgfTtcblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tIE1hcCB3aXJpbmcgLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gIHByaXZhdGUgZ2V0TGlua2VkTWFwV2lkZ2V0SWQoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgY29uc3QgaWRzID0gdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMgYXMgYW55O1xuICAgIGNvbnN0IGxpc3QgPSBpZHM/Lmxlbmd0aFxuICAgICAgPyBpZHMuYXNNdXRhYmxlPy4oKSB8fCBpZHMudG9BcnJheT8uKCkgfHwgaWRzXG4gICAgICA6IFtdO1xuICAgIGNvbnN0IGZpcnN0ID0gQXJyYXkuaXNBcnJheShsaXN0KSA/IGxpc3RbMF0gOiBudWxsO1xuICAgIGlmIChmaXJzdCkgcmV0dXJuIFN0cmluZyhmaXJzdCk7XG4gICAgY29uc3QgaG9zdElkID0gU3RyaW5nKHRoaXMucHJvcHMuaWQgfHwgXCJcIikucmVwbGFjZSgvLXBvcHVwJC8sIFwiXCIpO1xuICAgIHJldHVybiBkaXNjb3Zlck1hcFdpZGdldElkSW5BcHAoe1xuICAgICAgaG9zdFdpZGdldElkOiBob3N0SWQsXG4gICAgICBnZXRTbG90RWxlbWVudDogKCkgPT4ge1xuICAgICAgICBpZiAoaG9zdElkKSB7XG4gICAgICAgICAgY29uc3Qgc2NvcGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAud2lkZ2V0LXJlbmRlcmVyW2RhdGEtd2lkZ2V0aWQ9XCIke2hvc3RJZH1cIl0gLmFncmktZGFzaGJvYXJkLW1hcC1zbG90YCxcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChzY29wZWQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgcmV0dXJuIHNjb3BlZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmYWxsYmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWdyaS1kYXNoYm9hcmQtbWFwLXNsb3RcIik7XG4gICAgICAgIHJldHVybiBmYWxsYmFjayBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gZmFsbGJhY2sgOiBudWxsO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TWFwVmlld0Zyb21NYW5hZ2VyKFxuICAgIG1hcFdpZGdldElkOiBzdHJpbmcgfCBudWxsLFxuICApOiBKaW11TWFwVmlldyB8IG51bGwge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBtYW5hZ2VyID0gTWFwVmlld01hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICAgIGlmICghbWFuYWdlcikgcmV0dXJuIG51bGw7XG4gICAgICBpZiAobWFwV2lkZ2V0SWQpIHtcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBtYW5hZ2VyLmdldEppbXVNYXBWaWV3R3JvdXAobWFwV2lkZ2V0SWQpO1xuICAgICAgICBjb25zdCBhY3RpdmUgPSBncm91cD8uZ2V0QWN0aXZlSmltdU1hcFZpZXc/LigpO1xuICAgICAgICBpZiAoYWN0aXZlPy52aWV3KSByZXR1cm4gYWN0aXZlO1xuICAgICAgICBjb25zdCBncm91cFZpZXdzID0gZ3JvdXA/LmdldEFsbEppbXVNYXBWaWV3cz8uKCkgfHwgW107XG4gICAgICAgIGNvbnN0IGZpcnN0TG9hZGVkID0gZ3JvdXBWaWV3cy5maW5kKCh2aWV3OiBhbnkpID0+IHZpZXc/LnZpZXcpO1xuICAgICAgICBpZiAoZmlyc3RMb2FkZWQpIHJldHVybiBmaXJzdExvYWRlZDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFsbCA9IG1hbmFnZXIuZ2V0QWxsSmltdU1hcFZpZXdzPy4oKSB8fCBbXTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGFsbC5maW5kKCh2aWV3OiBhbnkpID0+IHZpZXc/LnZpZXcgJiYgdmlldz8uaXNBY3RpdmUgIT09IGZhbHNlKSB8fFxuICAgICAgICBhbGwuZmluZCgodmlldzogYW55KSA9PiB2aWV3Py52aWV3KSB8fFxuICAgICAgICBudWxsXG4gICAgICApO1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVNYXBWaWV3UmVhZHkgPSAoZXZlbnQ6IEV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgbWFwV2lkZ2V0SWQgPSAoZXZlbnQgYXMgQ3VzdG9tRXZlbnQ8eyBtYXBXaWRnZXRJZD86IHN0cmluZyB9PikuZGV0YWlsXG4gICAgICA/Lm1hcFdpZGdldElkO1xuICAgIGNvbnN0IGxpbmtlZCA9IHRoaXMuZ2V0TGlua2VkTWFwV2lkZ2V0SWQoKTtcbiAgICBpZiAobWFwV2lkZ2V0SWQgJiYgbGlua2VkICYmIG1hcFdpZGdldElkICE9PSBsaW5rZWQpIHJldHVybjtcbiAgICB0aGlzLnNjaGVkdWxlTWFwVmlld0ZhbGxiYWNrKCk7XG4gIH07XG5cbiAgcHJpdmF0ZSBzY2hlZHVsZU1hcFZpZXdGYWxsYmFjayA9ICgpOiB2b2lkID0+IHtcbiAgICAvLyBBbHJlYWR5IGhhdmUgYSBsaXZlIG1hcCB2aWV3IOKAlCBkbyBOT1QgcmUtZW50ZXIgb25BY3RpdmVWaWV3Q2hhbmdlXG4gICAgLy8gKHRoYXQgcGF0aCBzZXRTdGF0ZSDihpIgaW5pdGlhbGl6ZU1hcENvbm5lY3Rpb24g4oaSIHNjaGVkdWxlTWFwVmlld0ZhbGxiYWNrXG4gICAgLy8gYW5kIGZyZWV6ZXMgdGhlIGJ1aWxkZXIgd2l0aCBSZWFjdCAjMTg1IHdoZW4gZmVhdHVyZUxheWVycyBzdGF5IGVtcHR5KS5cbiAgICBpZiAodGhpcy5zdGF0ZS5qaW11TWFwVmlldz8udmlldykge1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLmZlYXR1cmVMYXllcnM/Lmxlbmd0aCkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlTWFwSW5pdFJldHJ5KHRoaXMuc3RhdGUuamltdU1hcFZpZXcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtYXBXaWRnZXRJZCA9IHRoaXMuZ2V0TGlua2VkTWFwV2lkZ2V0SWQoKTtcbiAgICBjb25zdCBmcm9tTWFuYWdlciA9IHRoaXMuZ2V0TWFwVmlld0Zyb21NYW5hZ2VyKG1hcFdpZGdldElkKTtcbiAgICBpZiAoZnJvbU1hbmFnZXI/LnZpZXcpIHtcbiAgICAgIHRoaXMub25BY3RpdmVWaWV3Q2hhbmdlKGZyb21NYW5hZ2VyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFtYXBXaWRnZXRJZCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLm1hcFZpZXdGYWxsYmFja1RpbWVyKSBjbGVhclRpbWVvdXQodGhpcy5tYXBWaWV3RmFsbGJhY2tUaW1lcik7XG4gICAgdGhpcy5tYXBWaWV3RmFsbGJhY2tUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5tYXBWaWV3RmFsbGJhY2tUaW1lciA9IG51bGw7XG4gICAgICBpZiAoIXRoaXMuX2lzTW91bnRlZCkgcmV0dXJuO1xuICAgICAgaWYgKHRoaXMuc3RhdGUuamltdU1hcFZpZXc/LnZpZXcpIHJldHVybjtcbiAgICAgIGNvbnN0IGxhdGUgPSB0aGlzLmdldE1hcFZpZXdGcm9tTWFuYWdlcihtYXBXaWRnZXRJZCk7XG4gICAgICBpZiAobGF0ZT8udmlldykgdGhpcy5vbkFjdGl2ZVZpZXdDaGFuZ2UobGF0ZSk7XG4gICAgfSwgNjAwKTtcbiAgfTtcblxuICBwcml2YXRlIHNjaGVkdWxlTWFwSW5pdFJldHJ5ID0gKGptdjogSmltdU1hcFZpZXcpOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5tYXBJbml0UmV0cnlDb3VudCA+PSB0aGlzLm1heE1hcEluaXRSZXRyaWVzKSByZXR1cm47XG4gICAgaWYgKHRoaXMubWFwSW5pdFJldHJ5VGltZXIpIGNsZWFyVGltZW91dCh0aGlzLm1hcEluaXRSZXRyeVRpbWVyKTtcbiAgICB0aGlzLm1hcEluaXRSZXRyeUNvdW50ICs9IDE7XG4gICAgdGhpcy5tYXBJbml0UmV0cnlUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5tYXBJbml0UmV0cnlUaW1lciA9IG51bGw7XG4gICAgICBpZiAoIXRoaXMuX2lzTW91bnRlZCkgcmV0dXJuO1xuICAgICAgdm9pZCB0aGlzLmluaXRpYWxpemVNYXBDb25uZWN0aW9uKGptdik7XG4gICAgfSwgODAwKTtcbiAgfTtcblxuICBwcml2YXRlIGV4cGFuZFVzZURhdGFTb3VyY2VFbnRyaWVzKHVzZUxpc3Q6IGFueVtdKTogYW55W10ge1xuICAgIGNvbnN0IGRzTWdyID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICBjb25zdCBvdXQ6IGFueVtdID0gW107XG4gICAgY29uc3Qgc2VlbiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gICAgZm9yIChjb25zdCB1ZHMgb2YgdXNlTGlzdCkge1xuICAgICAgY29uc3QgaWQgPSBTdHJpbmcodWRzPy5kYXRhU291cmNlSWQgfHwgXCJcIik7XG4gICAgICBpZiAoIWlkIHx8IHNlZW4uaGFzKGlkKSkgY29udGludWU7XG4gICAgICBzZWVuLmFkZChpZCk7XG4gICAgICBvdXQucHVzaCh1ZHMpO1xuXG4gICAgICBjb25zdCBkcyA9IGRzTWdyLmdldERhdGFTb3VyY2UoaWQpIGFzIGFueTtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gZHM/LmdldENoaWxkRGF0YVNvdXJjZXM/LigpIHx8IFtdO1xuICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgICBjb25zdCBjaGlsZElkID0gU3RyaW5nKGNoaWxkPy5pZCB8fCBcIlwiKTtcbiAgICAgICAgaWYgKCFjaGlsZElkIHx8IHNlZW4uaGFzKGNoaWxkSWQpKSBjb250aW51ZTtcbiAgICAgICAgc2Vlbi5hZGQoY2hpbGRJZCk7XG4gICAgICAgIG91dC5wdXNoKHsgZGF0YVNvdXJjZUlkOiBjaGlsZElkLCBtYWluRGF0YVNvdXJjZUlkOiBpZCB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb3V0O1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRSZXNvbHZlZExheWVyID0gKFxuICAgIHRhcmdldDogX19lc3JpLkZlYXR1cmVMYXllcltdLFxuICAgIGxheWVyS2V5VG9Ec0lkOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuICAgIHNlZW46IFNldDxzdHJpbmc+LFxuICAgIGxheWVyOiBhbnksXG4gICAgZHNJZD86IHN0cmluZyxcbiAgKTogdm9pZCA9PiB7XG4gICAgY29uc3QgcXVlcnlhYmxlID0gZ2V0UXVlcnlhYmxlTGF5ZXIobGF5ZXIpIHx8IGxheWVyO1xuICAgIGlmICghaXNRdWVyeWFibGVGaWVsZExheWVyKHF1ZXJ5YWJsZSkpIHJldHVybjtcbiAgICBjb25zdCBrZXkgPVxuICAgICAgZ2V0QWdyaUxheWVyTWFwS2V5KHF1ZXJ5YWJsZSkgfHxcbiAgICAgIFN0cmluZyhxdWVyeWFibGUudXJsIHx8IHF1ZXJ5YWJsZS5pZCB8fCBcIlwiKTtcbiAgICBpZiAoIWtleSB8fCBzZWVuLmhhcyhrZXkpKSByZXR1cm47XG4gICAgc2Vlbi5hZGQoa2V5KTtcbiAgICB0YXJnZXQucHVzaChxdWVyeWFibGUgYXMgX19lc3JpLkZlYXR1cmVMYXllcik7XG4gICAgaWYgKGRzSWQpIGxheWVyS2V5VG9Ec0lkW2tleV0gPSBkc0lkO1xuICB9O1xuXG4gIHByaXZhdGUgY29sbGVjdExheWVyc0Zyb21EYXRhU291cmNlcyA9IChcbiAgICBqbXY6IEppbXVNYXBWaWV3LFxuICAgIHVzZUxpc3Q6IGFueVtdLFxuICApOiB7XG4gICAgbGF5ZXJzOiBfX2VzcmkuRmVhdHVyZUxheWVyW107XG4gICAgbGF5ZXJLZXlUb0RzSWQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gIH0gPT4ge1xuICAgIGNvbnN0IGxheWVyczogX19lc3JpLkZlYXR1cmVMYXllcltdID0gW107XG4gICAgY29uc3QgbGF5ZXJLZXlUb0RzSWQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcbiAgICBjb25zdCBzZWVuID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgY29uc3QgbWFwID0gam12Py52aWV3Py5tYXA7XG5cbiAgICBmb3IgKGNvbnN0IHVkcyBvZiB1c2VMaXN0KSB7XG4gICAgICBjb25zdCBkc0lkID0gU3RyaW5nKHVkcz8uZGF0YVNvdXJjZUlkIHx8IFwiXCIpO1xuICAgICAgaWYgKCFkc0lkKSBjb250aW51ZTtcblxuICAgICAgY29uc3QgY2FjaGVkRHMgPSB0aGlzLnN0YXRlLmRhdGFTb3VyY2VzQnlJZD8uW2RzSWRdIGFzIGFueTtcbiAgICAgIGlmIChjYWNoZWREcykge1xuICAgICAgICBjb25zdCBjYWNoZWRMYXllciA9XG4gICAgICAgICAgY2FjaGVkRHMubGF5ZXIgfHxcbiAgICAgICAgICAodHlwZW9mIGNhY2hlZERzLmdldExheWVyID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgID8gY2FjaGVkRHMuZ2V0TGF5ZXIoKVxuICAgICAgICAgICAgOiBudWxsKTtcbiAgICAgICAgY29uc3QgbGl2ZSA9IHRoaXMudG9MaXZlTWFwTGF5ZXIoY2FjaGVkTGF5ZXIsIG1hcCk7XG4gICAgICAgIGlmIChsaXZlKSB0aGlzLmFkZFJlc29sdmVkTGF5ZXIobGF5ZXJzLCBsYXllcktleVRvRHNJZCwgc2VlbiwgbGl2ZSwgZHNJZCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRzTWdyID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICAgIGNvbnN0IGRzID0gZHNNZ3IuZ2V0RGF0YVNvdXJjZShkc0lkKSBhcyBhbnk7XG4gICAgICBpZiAoZHMpIHtcbiAgICAgICAgY29uc3QgZHNMYXllciA9XG4gICAgICAgICAgKHR5cGVvZiBkcy5nZXRMYXllciA9PT0gXCJmdW5jdGlvblwiID8gZHMuZ2V0TGF5ZXIoKSA6IG51bGwpIHx8XG4gICAgICAgICAgZHMubGF5ZXI7XG4gICAgICAgIGNvbnN0IGxpdmUgPSB0aGlzLnRvTGl2ZU1hcExheWVyKFxuICAgICAgICAgIGdldFF1ZXJ5YWJsZUxheWVyKGRzTGF5ZXIpIHx8IGRzTGF5ZXIsXG4gICAgICAgICAgbWFwLFxuICAgICAgICApO1xuICAgICAgICBpZiAobGl2ZSkgdGhpcy5hZGRSZXNvbHZlZExheWVyKGxheWVycywgbGF5ZXJLZXlUb0RzSWQsIHNlZW4sIGxpdmUsIGRzSWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IGxheWVycywgbGF5ZXJLZXlUb0RzSWQgfTtcbiAgfTtcblxuICBvbkFjdGl2ZVZpZXdDaGFuZ2UgPSAoamltdU1hcFZpZXc6IEppbXVNYXBWaWV3KSA9PiB7XG4gICAgdGhpcy5kZXRhY2hNYXBDbGljaygpO1xuICAgIHRoaXMuY2xlYW51cEhpZ2hsaWdodCgpO1xuXG4gICAgaWYgKCFqaW11TWFwVmlldykge1xuICAgICAgdGhpcy5tYXBBcmVhUmVzaXplT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgICAgIHRoaXMubWFwQXJlYVJlc2l6ZU9ic2VydmVyID0gbnVsbDtcbiAgICAgIHRoaXMuY29ubmVjdGVkTWFwVmlld0lkID0gXCJcIjtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBqaW11TWFwVmlldzogbnVsbCxcbiAgICAgICAgZmVhdHVyZUxheWVyczogW10sXG4gICAgICAgIG9iamVjdElkRmllbGQ6IG51bGwsXG4gICAgICAgIGVycm9yOiB0aGlzLnRyKFwiZXJyb3Iubm9NYXBWaWV3XCIpLFxuICAgICAgICBkZWJ1Z0luZm86IHtcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLmRlYnVnSW5mbyxcbiAgICAgICAgICBsYXllckluZm86IHRoaXMudHIoXCJlcnJvci5ub01hcFZpZXdcIiksXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmVWaWV3ID0gamltdU1hcFZpZXcudmlldztcbiAgICBpZiAoYWN0aXZlVmlldykge1xuICAgICAgdGhpcy5vYnNlcnZlTWFwQXJlYVJlc2l6ZShhY3RpdmVWaWV3KTtcbiAgICB9XG5cbiAgICBjb25zdCB2aWV3SWQgPSBTdHJpbmcoXG4gICAgICAoamltdU1hcFZpZXcgYXMgYW55KS5pZCB8fCAoamltdU1hcFZpZXcgYXMgYW55KS5tYXBXaWRnZXRJZCB8fCBcIlwiLFxuICAgICk7XG4gICAgLy8gU2FtZSBtYXAgYWxyZWFkeSB3aXJlZCDigJQgZG8gbm90IHNldFN0YXRlIGFnYWluIChjYXVzZXMgZnJlZXplIGxvb3BzKS5cbiAgICBpZiAodmlld0lkICYmIHZpZXdJZCA9PT0gdGhpcy5jb25uZWN0ZWRNYXBWaWV3SWQgJiYgdGhpcy5zdGF0ZS5qaW11TWFwVmlldykge1xuICAgICAgaWYgKCF0aGlzLl9jbGlja0hhbmRsZSkgdGhpcy5hdHRhY2hNYXBDbGljayhqaW11TWFwVmlldyk7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUuZmVhdHVyZUxheWVycz8ubGVuZ3RoKSB7XG4gICAgICAgIHZvaWQgdGhpcy5pbml0aWFsaXplTWFwQ29ubmVjdGlvbihqaW11TWFwVmlldyk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY29ubmVjdGVkTWFwVmlld0lkID0gdmlld0lkO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGppbXVNYXBWaWV3IH0sIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHZpZXcgPSBqaW11TWFwVmlldy52aWV3O1xuICAgICAgaWYgKCF2aWV3KSByZXR1cm47XG5cbiAgICAgIC8vIEF0dGFjaCBpbW1lZGlhdGVseSBzbyB0aGUgZmlyc3QgZmllbGQgY2xpY2sgbmV2ZXIgcmFjZXMgbGF5ZXIgcmVzb2x2ZS5cbiAgICAgIHRoaXMuYXR0YWNoTWFwQ2xpY2soamltdU1hcFZpZXcpO1xuXG4gICAgICBpZiAodmlldy5yZWFkeSkge1xuICAgICAgICB0aGlzLnNldHVwSGlnaGxpZ2h0TGF5ZXIodmlldyk7XG4gICAgICAgIGF3YWl0IHRoaXMuaW5pdGlhbGl6ZU1hcENvbm5lY3Rpb24oamltdU1hcFZpZXcpO1xuICAgICAgICB0aGlzLnJlcG9zaXRpb25QaW5uZWRJZk5lZWRlZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgaCA9IHZpZXcud2F0Y2goXCJyZWFkeVwiLCBhc3luYyAocmVhZHkpID0+IHtcbiAgICAgICAgICBpZiAocmVhZHkpIHtcbiAgICAgICAgICAgIGgucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLmF0dGFjaE1hcENsaWNrKGppbXVNYXBWaWV3KTtcbiAgICAgICAgICAgIHRoaXMuc2V0dXBIaWdobGlnaHRMYXllcih2aWV3KTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuaW5pdGlhbGl6ZU1hcENvbm5lY3Rpb24oamltdU1hcFZpZXcpO1xuICAgICAgICAgICAgdGhpcy5yZXBvc2l0aW9uUGlubmVkSWZOZWVkZWQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZU1hcENvbm5lY3Rpb24gPSBhc3luYyAoam12OiBKaW11TWFwVmlldykgPT4ge1xuICAgIGlmICghdGhpcy5faXNNb3VudGVkKSByZXR1cm47XG4gICAgY29uc3QgdmlldyA9IGptdj8udmlldztcbiAgICBpZiAoIXZpZXcgfHwgIXZpZXcubWFwKSByZXR1cm47XG5cbiAgICBjb25zdCByYXdMaXN0ID0gKHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXM/LmFzTXV0YWJsZT8uKCkgYXMgYW55W10pIHx8IFtdO1xuICAgIGNvbnN0IHVzZUxpc3QgPSB0aGlzLmV4cGFuZFVzZURhdGFTb3VyY2VFbnRyaWVzKHJhd0xpc3QpO1xuICAgIC8vIEVtcHR5IHVzZURhdGFTb3VyY2VzIGlzIG5vcm1hbCByaWdodCBhZnRlciBkcm9wIOKAlCByZXNvbHZlIG1hcCBsYXllcnMgb25seS5cbiAgICAvLyBOZXZlciBib3VuY2UgdGhyb3VnaCBzY2hlZHVsZU1hcFZpZXdGYWxsYmFjayBoZXJlICh0aGF0IHJlLWVudGVyZWRcbiAgICAvLyBvbkFjdGl2ZVZpZXdDaGFuZ2UgYW5kIGZyb3plIHRoZSBwYWdlKS5cblxuICAgIHRoaXMuZGF0YVNvdXJjZUVuZ2luZS5zeW5jU2VsZWN0aW9uKGdldFNlbGVjdGVkRHNJZHModGhpcy5wcm9wcy51c2VEYXRhU291cmNlcykpO1xuXG4gICAgY29uc3QgcmVzb2x2ZWRMYXllcnM6IF9fZXNyaS5GZWF0dXJlTGF5ZXJbXSA9IFtdO1xuICAgIGNvbnN0IGxheWVyS2V5VG9Ec0lkOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG4gICAgY29uc3Qgc2VlbiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gICAgY29uc3QgbWFwTGF5ZXJzID0gZ2V0QWxsRmVhdHVyZUxheWVyc0Zyb21NYXAodmlldy5tYXApO1xuICAgIC8vIGxvYWQoKSByZWh5ZHJhdGVzIE1hcEltYWdlIHN1YmxheWVycyBhbmQgY2FuIGRyb3AgdGhlaXIgcnVudGltZVxuICAgIC8vIGRpc3RyaWN0IGRlZmluaXRpb25FeHByZXNzaW9uIOKAlCBzbmFwc2hvdCBhbmQgcmVwYWlyIHN5bmNocm9ub3VzbHkgc29cbiAgICAvLyBhIGNvbm5lY3QvcmV0cnkgdGhhdCBvdmVybGFwcyBhIGZpZWxkIGNsaWNrIG5ldmVyIGZsYXNoZXMgb3RoZXJcbiAgICAvLyBkaXN0cmljdHMnIGZpZWxkcy5cbiAgICBjb25zdCBkZWZpbml0aW9uU25hcHNob3QgPSB0aGlzLnNuYXBzaG90RGVmaW5pdGlvbkV4cHJlc3Npb25zKG1hcExheWVycyk7XG4gICAgZm9yIChjb25zdCBsYXllciBvZiBtYXBMYXllcnMpIHtcbiAgICAgIGF3YWl0IHNhZmVMb2FkTWFwTGF5ZXIobGF5ZXIpO1xuICAgICAgdGhpcy5hZGRSZXNvbHZlZExheWVyKHJlc29sdmVkTGF5ZXJzLCBsYXllcktleVRvRHNJZCwgc2VlbiwgbGF5ZXIpO1xuICAgIH1cbiAgICB0aGlzLnJlc3RvcmVEcmlmdGVkRGVmaW5pdGlvbkV4cHJlc3Npb25zKGRlZmluaXRpb25TbmFwc2hvdCk7XG5cbiAgICBpZiAodXNlTGlzdC5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGZyb21EcyA9IHRoaXMuY29sbGVjdExheWVyc0Zyb21EYXRhU291cmNlcyhqbXYsIHVzZUxpc3QpO1xuICAgICAgZm9yIChjb25zdCBsYXllciBvZiBmcm9tRHMubGF5ZXJzKSB7XG4gICAgICAgIGNvbnN0IGxpdmUgPSB0aGlzLnRvTGl2ZU1hcExheWVyKGxheWVyLCB2aWV3Lm1hcCkgfHwgbGF5ZXI7XG4gICAgICAgIGNvbnN0IGtleSA9IGdldEFncmlMYXllck1hcEtleShsaXZlKSB8fCBTdHJpbmcobGl2ZS51cmwgfHwgbGl2ZS5pZCB8fCBcIlwiKTtcbiAgICAgICAgY29uc3QgZHNJZCA9IGZyb21Ecy5sYXllcktleVRvRHNJZFtrZXldO1xuICAgICAgICB0aGlzLmFkZFJlc29sdmVkTGF5ZXIocmVzb2x2ZWRMYXllcnMsIGxheWVyS2V5VG9Ec0lkLCBzZWVuLCBsaXZlLCBkc0lkKTtcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCB1c2VEcyBvZiB1c2VMaXN0KSB7XG4gICAgICAgIGNvbnN0IGxheWVyID0gYXdhaXQgdGhpcy5yZXNvbHZlRmVhdHVyZUxheWVyRm9yVXNlRGF0YVNvdXJjZShqbXYsIHVzZURzKTtcbiAgICAgICAgaWYgKCFsYXllcikgY29udGludWU7XG5cbiAgICAgICAgYXdhaXQgc2FmZUxvYWRNYXBMYXllcihsYXllcik7XG5cbiAgICAgICAgY29uc3QgZHNJZCA9IFN0cmluZyh1c2VEcz8uZGF0YVNvdXJjZUlkIHx8IFwiXCIpO1xuICAgICAgICBjb25zdCBsaXZlID0gdGhpcy50b0xpdmVNYXBMYXllcihsYXllciwgdmlldy5tYXApIHx8IGxheWVyO1xuICAgICAgICB0aGlzLmFkZFJlc29sdmVkTGF5ZXIocmVzb2x2ZWRMYXllcnMsIGxheWVyS2V5VG9Ec0lkLCBzZWVuLCBsaXZlLCBkc0lkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2lzTW91bnRlZCkgcmV0dXJuO1xuXG4gICAgaWYgKCFyZXNvbHZlZExheWVycy5sZW5ndGgpIHtcbiAgICAgIC8vIFNvZnQgZmFpbCDigJQgbWFwIG1heSBzdGlsbCBiZSBsb2FkaW5nIHJlZ2lvbi15ZWFyIHN1YmxheWVycy4gUmV0cnlcbiAgICAgIC8vIGEgZmV3IHRpbWVzIHdpdGhvdXQgcmUtZW50ZXJpbmcgb25BY3RpdmVWaWV3Q2hhbmdlLlxuICAgICAgLy8gU3RpbGwgYXR0YWNoIHRoZSBjbGljayBoYW5kbGVyIHNvIHRoZSBmaXJzdCBmaWVsZCBjbGljayB3b3JrcyBhcyBzb29uXG4gICAgICAvLyBhcyBsaXZlIE1hcEltYWdlIHN1YmxheWVycyBiZWNvbWUgaGl0dGFibGUgdmlhIGdldENsaWNrVGFyZ2V0TGF5ZXJzLlxuICAgICAgaWYgKCF0aGlzLl9jbGlja0hhbmRsZSkgdGhpcy5hdHRhY2hNYXBDbGljayhqbXYpO1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLnN0YXRlLmVycm9yICE9PSB0aGlzLnRyKFwiZXJyb3Iuc2VsZWN0ZWRMYXllcnNNaXNzaW5nXCIpIHx8XG4gICAgICAgICh0aGlzLnN0YXRlLmZlYXR1cmVMYXllcnM/Lmxlbmd0aCB8fCAwKSA+IDBcbiAgICAgICkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBmZWF0dXJlTGF5ZXJzOiBbXSxcbiAgICAgICAgICBvYmplY3RJZEZpZWxkOiBudWxsLFxuICAgICAgICAgIGVycm9yOiB1c2VMaXN0Lmxlbmd0aFxuICAgICAgICAgICAgPyB0aGlzLnRyKFwiZXJyb3Iuc2VsZWN0ZWRMYXllcnNNaXNzaW5nXCIpXG4gICAgICAgICAgICA6IG51bGwsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5zY2hlZHVsZU1hcEluaXRSZXRyeShqbXYpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubWFwSW5pdFJldHJ5Q291bnQgPSAwO1xuICAgIGFncmlNYXBDbGlja0RlYnVnKFwiaW5pdGlhbGl6ZU1hcENvbm5lY3Rpb24gT0tcIiwge1xuICAgICAgbGF5ZXJDb3VudDogcmVzb2x2ZWRMYXllcnMubGVuZ3RoLFxuICAgICAgbGF5ZXJzOiByZXNvbHZlZExheWVycy5tYXAoKGwpID0+IGwudGl0bGUgfHwgbC51cmwgfHwgbC5pZCksXG4gICAgfSk7XG5cbiAgICBjb25zdCBwcmV2S2V5cyA9ICh0aGlzLnN0YXRlLmZlYXR1cmVMYXllcnMgfHwgW10pXG4gICAgICAubWFwKChsKSA9PiBnZXRBZ3JpTGF5ZXJNYXBLZXkobCkgfHwgU3RyaW5nKGwudXJsIHx8IGwuaWQgfHwgXCJcIikpXG4gICAgICAuam9pbihcInxcIik7XG4gICAgY29uc3QgbmV4dEtleXMgPSByZXNvbHZlZExheWVyc1xuICAgICAgLm1hcCgobCkgPT4gZ2V0QWdyaUxheWVyTWFwS2V5KGwpIHx8IFN0cmluZyhsLnVybCB8fCBsLmlkIHx8IFwiXCIpKVxuICAgICAgLmpvaW4oXCJ8XCIpO1xuICAgIGlmIChwcmV2S2V5cyA9PT0gbmV4dEtleXMgJiYgdGhpcy5fY2xpY2tIYW5kbGUpIHtcbiAgICAgIHRoaXMuYXR0YWNoTWFwQ2xpY2soam12KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBmZWF0dXJlTGF5ZXJzOiByZXNvbHZlZExheWVycyxcbiAgICAgICAgbGF5ZXJLZXlUb0RzSWQsXG4gICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICBkZWJ1Z0luZm86IHtcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLmRlYnVnSW5mbyxcbiAgICAgICAgICBsYXllckluZm86IHJlc29sdmVkTGF5ZXJzLm1hcCgobCkgPT4gKHtcbiAgICAgICAgICAgIGlkOiBsLmlkLFxuICAgICAgICAgICAgdGl0bGU6IGwudGl0bGUsXG4gICAgICAgICAgICB1cmw6IGwudXJsLFxuICAgICAgICAgICAgb2JqZWN0SWRGaWVsZDogbC5vYmplY3RJZEZpZWxkLFxuICAgICAgICAgIH0pKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5faXNNb3VudGVkKSByZXR1cm47XG4gICAgICAgIHRoaXMuYXR0YWNoTWFwQ2xpY2soam12KTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfTtcblxuICBwcml2YXRlIHRvTGl2ZU1hcExheWVyID0gKFxuICAgIGxheWVyOiBhbnksXG4gICAgbWFwOiBfX2VzcmkuTWFwIHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgKTogX19lc3JpLkZlYXR1cmVMYXllciB8IG51bGwgPT4ge1xuICAgIGlmICghbGF5ZXIpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHVybCA9IFN0cmluZyhsYXllcj8udXJsIHx8IFwiXCIpO1xuICAgIGlmIChtYXAgJiYgdXJsKSB7XG4gICAgICBjb25zdCBieVVybCA9IGZpbmRRdWVyeWFibGVMYXllck9uTWFwQnlVcmwobWFwLCB1cmwpO1xuICAgICAgaWYgKGJ5VXJsKSByZXR1cm4gYnlVcmwgYXMgX19lc3JpLkZlYXR1cmVMYXllcjtcbiAgICB9XG4gICAgaWYgKG1hcCAmJiBsYXllcj8uaWQgIT0gbnVsbCkge1xuICAgICAgY29uc3QgYnlJZCA9IGZpbmRRdWVyeWFibGVMYXllck9uTWFwQnlJZChtYXAsIFN0cmluZyhsYXllci5pZCkpO1xuICAgICAgaWYgKGJ5SWQpIHJldHVybiBieUlkIGFzIF9fZXNyaS5GZWF0dXJlTGF5ZXI7XG4gICAgfVxuICAgIGNvbnN0IHF1ZXJ5YWJsZSA9IGdldFF1ZXJ5YWJsZUxheWVyKGxheWVyKTtcbiAgICByZXR1cm4gKHF1ZXJ5YWJsZSB8fCBsYXllcikgYXMgX19lc3JpLkZlYXR1cmVMYXllcjtcbiAgfTtcblxuICBwcml2YXRlIGxheWVyS2V5c01hdGNoID0gKGE6IGFueSwgYjogYW55KTogYm9vbGVhbiA9PiB7XG4gICAgaWYgKCFhIHx8ICFiKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3Qga2V5QSA9IGdldEFncmlMYXllck1hcEtleShhKTtcbiAgICBjb25zdCBrZXlCID0gZ2V0QWdyaUxheWVyTWFwS2V5KGIpO1xuICAgIGlmIChrZXlBICYmIGtleUIgJiYga2V5QSA9PT0ga2V5QikgcmV0dXJuIHRydWU7XG4gICAgaWYgKGEuaWQgIT0gbnVsbCAmJiBiLmlkICE9IG51bGwgJiYgU3RyaW5nKGEuaWQpID09PSBTdHJpbmcoYi5pZCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCB1cmxBID0gbm9ybWFsaXplUXVlcnlhYmxlTGF5ZXJVcmwoU3RyaW5nKGEudXJsIHx8IFwiXCIpKTtcbiAgICBjb25zdCB1cmxCID0gbm9ybWFsaXplUXVlcnlhYmxlTGF5ZXJVcmwoU3RyaW5nKGIudXJsIHx8IFwiXCIpKTtcbiAgICByZXR1cm4gISEodXJsQSAmJiB1cmxCICYmIHVybEEgPT09IHVybEIpO1xuICB9O1xuXG4gIC8qKiBSZXNvbHZlIHRoZSBsaXZlIG1hcCBsYXllciBmb3IgYSBzZWxlY3RlZCB1c2VEYXRhU291cmNlIChGZWF0dXJlTGF5ZXIgb3IgTWFwSW1hZ2Ugc3VibGF5ZXIpLiAqL1xuICBwcml2YXRlIHJlc29sdmVGZWF0dXJlTGF5ZXJGb3JVc2VEYXRhU291cmNlID0gYXN5bmMgKFxuICAgIGptdjogSmltdU1hcFZpZXcsXG4gICAgdXNlRHM6IGFueSxcbiAgKTogUHJvbWlzZTxfX2VzcmkuRmVhdHVyZUxheWVyIHwgbnVsbD4gPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXVzZURzPy5kYXRhU291cmNlSWQpIHJldHVybiBudWxsO1xuXG4gICAgICBjb25zdCBkc0lkID0gU3RyaW5nKHVzZURzLmRhdGFTb3VyY2VJZCk7XG4gICAgICBjb25zdCBtYXAgPSBqbXY/LnZpZXc/Lm1hcDtcbiAgICAgIGlmICghbWFwKSByZXR1cm4gbnVsbDtcblxuICAgICAgY29uc3Qgamx2QnlBcGkgPSAoam12IGFzIGFueSkuZ2V0SmltdUxheWVyVmlld0J5RGF0YVNvdXJjZUlkPy4oZHNJZCk7XG4gICAgICBjb25zdCBmcm9tQXBpID0gZ2V0UXVlcnlhYmxlTGF5ZXIoamx2QnlBcGk/LmxheWVyKTtcbiAgICAgIGlmIChmcm9tQXBpKSByZXR1cm4gdGhpcy50b0xpdmVNYXBMYXllcihmcm9tQXBpLCBtYXApO1xuXG4gICAgICBjb25zdCBqbHZMaXN0OiBhbnlbXSA9IGptdi5nZXRBbGxKaW11TGF5ZXJWaWV3cz8uKCkgfHwgW107XG4gICAgICBjb25zdCBsYXllcklkSGludCA9IGV4dHJhY3RNYXBMYXllcklkRnJvbURzSWQoZHNJZCk7XG5cbiAgICAgIGZvciAoY29uc3QgbHYgb2Ygamx2TGlzdCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgbHY/LmxheWVyRGF0YVNvdXJjZUlkID09PSBkc0lkIHx8XG4gICAgICAgICAgbHY/LmRhdGFTb3VyY2VJZCA9PT0gZHNJZFxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCByZXNvbHZlZCA9IGdldFF1ZXJ5YWJsZUxheWVyKGx2Py5sYXllcik7XG4gICAgICAgICAgaWYgKHJlc29sdmVkKSByZXR1cm4gdGhpcy50b0xpdmVNYXBMYXllcihyZXNvbHZlZCwgbWFwKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobGF5ZXJJZEhpbnQpIHtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBqbHZMaXN0LmZpbmQoXG4gICAgICAgICAgKGx2KSA9PiBTdHJpbmcobHY/LmxheWVyPy5pZCB8fCBcIlwiKSA9PT0gbGF5ZXJJZEhpbnQsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gZ2V0UXVlcnlhYmxlTGF5ZXIobWF0Y2g/LmxheWVyKTtcbiAgICAgICAgaWYgKHJlc29sdmVkKSByZXR1cm4gdGhpcy50b0xpdmVNYXBMYXllcihyZXNvbHZlZCwgbWFwKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZHNNZ3IgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgICAgY29uc3QgZHM6IGFueSA9IGRzTWdyLmdldERhdGFTb3VyY2UoZHNJZCk7XG4gICAgICBpZiAoZHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAodHlwZW9mIGRzLmZldGNoU2NoZW1hID09PSBcImZ1bmN0aW9uXCIpIGF3YWl0IGRzLmZldGNoU2NoZW1hKCk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIC8qIHNjaGVtYSBvcHRpb25hbCAqL1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZHNMYXllciA9XG4gICAgICAgICAgKHR5cGVvZiBkcy5nZXRMYXllciA9PT0gXCJmdW5jdGlvblwiID8gZHMuZ2V0TGF5ZXIoKSA6IG51bGwpIHx8XG4gICAgICAgICAgZHMubGF5ZXIgfHxcbiAgICAgICAgICAodHlwZW9mIGRzLmdldEppbXVMYXllciA9PT0gXCJmdW5jdGlvblwiID8gZHMuZ2V0SmltdUxheWVyKCkgOiBudWxsKTtcbiAgICAgICAgY29uc3QgcXVlcnlhYmxlID0gZ2V0UXVlcnlhYmxlTGF5ZXIoZHNMYXllcik7XG4gICAgICAgIGlmIChxdWVyeWFibGUpIHtcbiAgICAgICAgICBjb25zdCBsaXZlID0gdGhpcy50b0xpdmVNYXBMYXllcihxdWVyeWFibGUsIG1hcCk7XG4gICAgICAgICAgaWYgKGxpdmUpIHJldHVybiBsaXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZHNVcmwgPSBTdHJpbmcoZHM/LnVybCB8fCBxdWVyeWFibGU/LnVybCB8fCBkc0xheWVyPy51cmwgfHwgXCJcIik7XG4gICAgICAgIGlmIChkc1VybCkge1xuICAgICAgICAgIGNvbnN0IGJ5VXJsID0gZmluZFF1ZXJ5YWJsZUxheWVyT25NYXBCeVVybChtYXAsIGRzVXJsKTtcbiAgICAgICAgICBpZiAoYnlVcmwpIHJldHVybiBieVVybCBhcyBfX2VzcmkuRmVhdHVyZUxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCB7XG4gICAgICAvKiBpZ25vcmUgKi9cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG4gIHByaXZhdGUgY2xhbXBQb3B1cFRvTWFwQ29udGFpbmVyID0gKFxuICAgIHBvczogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LFxuICAgIHZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldyxcbiAgKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdmlldy5jb250YWluZXIgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgcmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBtYXJnaW4gPSB0aGlzLlBPUFVQX01BUkdJTjtcbiAgICBjb25zdCBwaW5uZWQgPSB0aGlzLnN0YXRlLnBpblRvQ29ybmVyO1xuICAgIGNvbnN0IHsgd2lkdGg6IHBvcHVwVywgaGVpZ2h0OiBwb3B1cEggfSA9IHRoaXMuZ2V0UG9wdXBEaW1lbnNpb25zKFxuICAgICAgdmlldyxcbiAgICAgIHBpbm5lZCxcbiAgICAgIHBvcyxcbiAgICApO1xuXG4gICAgY29uc3QgbWFwTGVmdCA9IHJlY3QubGVmdDtcbiAgICBjb25zdCBtYXBUb3AgPSByZWN0LnRvcDtcbiAgICBjb25zdCBtYXBSaWdodCA9IHJlY3QucmlnaHQ7XG4gICAgY29uc3QgbWFwQm90dG9tID0gdGhpcy5nZXRFZmZlY3RpdmVNYXBCb3R0b20odmlldywgbWFyZ2luKTtcblxuICAgIGNvbnN0IHggPSBNYXRoLm1heChcbiAgICAgIG1hcExlZnQgKyBtYXJnaW4sXG4gICAgICBNYXRoLm1pbihwb3MueCwgbWFwUmlnaHQgLSBwb3B1cFcgLSBtYXJnaW4pLFxuICAgICk7XG5cbiAgICBsZXQgeSA9IHBvcy55O1xuICAgIGlmICh5ICsgcG9wdXBIID4gbWFwQm90dG9tKSB7XG4gICAgICB5ID0gbWFwQm90dG9tIC0gcG9wdXBIIC0gbWFyZ2luO1xuICAgIH1cbiAgICB5ID0gTWF0aC5tYXgobWFwVG9wICsgbWFyZ2luLCB5KTtcblxuICAgIHJldHVybiB7IHgsIHkgfTtcbiAgfTtcblxuICBwcml2YXRlIGF0dGFjaE1hcENsaWNrKGptdjogSmltdU1hcFZpZXcpIHtcbiAgICB0aGlzLmRldGFjaE1hcENsaWNrKCk7XG4gICAgY29uc3QgdmlldyA9IGptdj8udmlldyBhcyB7IG9uPzogKGV2ZW50OiBzdHJpbmcsIGNiOiB1bmtub3duKSA9PiB1bmtub3duIH0gfCBudWxsO1xuICAgIGlmICghdmlldyB8fCB0eXBlb2Ygdmlldy5vbiAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm47XG4gICAgdGhpcy5fY2xpY2tIYW5kbGUgPSB2aWV3Lm9uKFwiY2xpY2tcIiwgdGhpcy5vblZpZXdDbGljaykgYXMgYW55O1xuICB9XG5cbiAgcHJpdmF0ZSBlbnN1cmVNYXBDbGlja0F0dGFjaGVkID0gKCk6IGJvb2xlYW4gPT4ge1xuICAgIGlmICghdGhpcy5faXNNb3VudGVkKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgbWFwV2lkZ2V0SWQgPSB0aGlzLmdldExpbmtlZE1hcFdpZGdldElkKCk7XG4gICAgY29uc3Qgam12ID1cbiAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXc/LnZpZXdcbiAgICAgICAgPyB0aGlzLnN0YXRlLmppbXVNYXBWaWV3XG4gICAgICAgIDogdGhpcy5nZXRNYXBWaWV3RnJvbU1hbmFnZXIobWFwV2lkZ2V0SWQpO1xuICAgIGlmICgham12Py52aWV3KSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAoIXRoaXMuc3RhdGUuamltdU1hcFZpZXc/LnZpZXcpIHtcbiAgICAgIHRoaXMub25BY3RpdmVWaWV3Q2hhbmdlKGptdik7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2NsaWNrSGFuZGxlKSB7XG4gICAgICB0aGlzLmF0dGFjaE1hcENsaWNrKGptdik7XG4gICAgfVxuICAgIHJldHVybiAhIXRoaXMuX2NsaWNrSGFuZGxlO1xuICB9O1xuXG4gIHByaXZhdGUgaGFuZGxlWHlQYWdlQ2xvc2VkID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICghdGhpcy5pc0Rhc2hib2FyZEVtYmVkZGVkKCkpIHJldHVybjtcbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93UG9wdXApIHtcbiAgICAgIHRoaXMuY2xvc2VQb3B1cCh7IHJlc3RvcmVFeHRlbnQ6IGZhbHNlLCBub3RpZnlEZXNlbGVjdDogZmFsc2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDbG9zZSB0aGUgZmllbGQgcG9wdXAgd2hlbiB0aGUgaHViIGdlb2dyYXBoeSBtb3ZlcyAob3RoZXIgdHVtYW4gL1xuICAgKiB2aWxveWF0IC8geWVhcikgb3Igd2hlbiBwb2x5Z29uIGZvY3VzIGlzIGNsZWFyZWQuIERvIG5vdCByZXN0b3JlIHRoZVxuICAgKiBwcmUtZmllbGQgZXh0ZW50IG9uIGdlb2dyYXBoeSBjaGFuZ2Ug4oCUIExvY2FsaXphdGlvbiBpcyBhbHJlYWR5IHpvb21pbmdcbiAgICogdG8gdGhlIG5ldyBkaXN0cmljdC9yZWdpb24uXG4gICAqL1xuICBwcml2YXRlIGhhbmRsZU1hc3RlckZpbHRlckNoYW5nZWQgPSAoZXZlbnQ6IEV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKCF0aGlzLl9pc01vdW50ZWQpIHJldHVybjtcbiAgICBjb25zdCBkZXRhaWw6IGFueSA9IChldmVudCBhcyBDdXN0b21FdmVudCkuZGV0YWlsIHx8IHt9O1xuICAgIGNvbnN0IGY6IGFueSA9IGRldGFpbC5maWx0ZXJzIHx8IHt9O1xuICAgIGNvbnN0IGdlb0tleSA9IGAke1N0cmluZyhmLnlpbCB8fCBcIlwiKX18JHtTdHJpbmcoZi52aWxveWF0IHx8IFwiXCIpfXwke1N0cmluZyhmLnR1bWFuIHx8IFwiXCIpfWA7XG4gICAgY29uc3QgcHJldkdlbyA9IHRoaXMuX2xhc3RNYXN0ZXJHZW9LZXk7XG4gICAgdGhpcy5fbGFzdE1hc3Rlckdlb0tleSA9IGdlb0tleTtcblxuICAgIGNvbnN0IGdlb0NoYW5nZWQgPSBCb29sZWFuKHByZXZHZW8pICYmIHByZXZHZW8gIT09IGdlb0tleTtcbiAgICBjb25zdCBwb2x5Z29uQ2xlYXJlZCA9IGYucG9seWdvbk1vZGUgPT09IGZhbHNlO1xuICAgIGNvbnN0IGluY29taW5nVW5pcXVlID0gU3RyaW5nKGYudW5pcXVlaWQgfHwgXCJcIilcbiAgICAgIC5yZXBsYWNlKC9be31dL2csIFwiXCIpXG4gICAgICAudHJpbSgpO1xuICAgIGlmIChmLnBvbHlnb25Nb2RlID09PSB0cnVlICYmIGluY29taW5nVW5pcXVlKSB7XG4gICAgICB0aGlzLl9hY3RpdmVJbnNwZWN0ZWRVbmlxdWVpZCA9IGluY29taW5nVW5pcXVlO1xuICAgICAgLy8gRmFsbGJhY2s6IGlmIHNlbGVjdGlvbiBhcnJpdmVkIHZpYSBodWIgYnV0IHBvcHVwIGlzIHN0aWxsIGNsb3NlZCwgb3BlbiBpdC5cbiAgICAgIGlmICghdGhpcy5zdGF0ZS5zaG93UG9wdXApIHtcbiAgICAgICAgdm9pZCB0aGlzLm9wZW5Qb3B1cEZvclVuaXF1ZWlkKGluY29taW5nVW5pcXVlLCB7XG4gICAgICAgICAgem9vbTogZmFsc2UsXG4gICAgICAgICAgbm90aWZ5U2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwb2x5Z29uQ2xlYXJlZCkge1xuICAgICAgdGhpcy5fYWN0aXZlSW5zcGVjdGVkVW5pcXVlaWQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChnZW9DaGFuZ2VkKSB7XG4gICAgICB0aGlzLmNsb3NlUG9wdXAoeyByZXN0b3JlRXh0ZW50OiBmYWxzZSwgbm90aWZ5RGVzZWxlY3Q6IGZhbHNlIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBTYW1lIGdlb2dyYXBoeSBidXQgaHViIGNsZWFyZWQgcG9seWdvbiBmb2N1cyAoZS5nLiBHcmFmZiBkZXNlbGVjdCkuXG4gICAgaWYgKHBvbHlnb25DbGVhcmVkICYmICh0aGlzLnN0YXRlLnNob3dQb3B1cCB8fCB0aGlzLnN0YXRlLmxvYWRpbmcpKSB7XG4gICAgICB0aGlzLmNsb3NlUG9wdXAoeyByZXN0b3JlRXh0ZW50OiB0cnVlLCBub3RpZnlEZXNlbGVjdDogZmFsc2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKiBJbW1lZGlhdGUgY2xvc2Ugd2hlbiBSZWdpb24vUGllL3llYXIgY2hhbmdlIGdlb2dyYXBoeSAoYmVmb3JlIG1hcCBzeW5jIGZpbmlzaGVzKS4gKi9cbiAgcHJpdmF0ZSBoYW5kbGVXaWRnZXRTZWxlY3Rpb25DaGFuZ2VkID0gKGV2ZW50OiBFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghdGhpcy5faXNNb3VudGVkKSByZXR1cm47XG4gICAgY29uc3QgZDogYW55ID0gKGV2ZW50IGFzIEN1c3RvbUV2ZW50KS5kZXRhaWwgfHwge307XG4gICAgLy8gT3VyIG93biBwb2x5Z29uIG5vdGlmeSBtdXN0IG5vdCBjbG9zZSB0aGUgcG9wdXAgd2UganVzdCBvcGVuZWQuXG4gICAgaWYgKGQuc291cmNlID09PSBcIkFncmlQb3B1cFwiKSByZXR1cm47XG4gICAgaWYgKFxuICAgICAgZC55aWwgIT09IHVuZGVmaW5lZCB8fFxuICAgICAgZC52aWxveWF0ICE9PSB1bmRlZmluZWQgfHxcbiAgICAgIGQudHVtYW4gIT09IHVuZGVmaW5lZFxuICAgICkge1xuICAgICAgdGhpcy5jbG9zZVBvcHVwKHsgcmVzdG9yZUV4dGVudDogZmFsc2UsIG5vdGlmeURlc2VsZWN0OiBmYWxzZSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGQucG9seWdvbk1vZGUgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLl9hY3RpdmVJbnNwZWN0ZWRVbmlxdWVpZCA9IG51bGw7XG4gICAgICB0aGlzLmNsb3NlUG9wdXAoeyByZXN0b3JlRXh0ZW50OiB0cnVlLCBub3RpZnlEZXNlbGVjdDogZmFsc2UgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChcbiAgICAgIChkLnNvdXJjZSA9PT0gXCJBZ3JpR3JhZmZXaWRnZXRcIiB8fCBkLnNvdXJjZSA9PT0gXCJBZ3JpR3JhZmYxMFwiKSAmJlxuICAgICAgZC5wb2x5Z29uTW9kZSA9PT0gdHJ1ZSAmJlxuICAgICAgZC51bmlxdWVpZFxuICAgICkge1xuICAgICAgY29uc3QgY2xlYW4gPSBTdHJpbmcoZC51bmlxdWVpZClcbiAgICAgICAgLnJlcGxhY2UoL1t7fV0vZywgXCJcIilcbiAgICAgICAgLnRyaW0oKTtcbiAgICAgIHRoaXMuX2FjdGl2ZUluc3BlY3RlZFVuaXF1ZWlkID0gY2xlYW47XG4gICAgICAvLyBUYWJsZSAvIEdyYWZmIHNlbGVjdGlvbiBtdXN0IGFsd2F5cyBvcGVuIHRoZSBmaWVsZCBwb3B1cC5cbiAgICAgIHZvaWQgdGhpcy5vcGVuUG9wdXBGb3JVbmlxdWVpZChjbGVhbiwge1xuICAgICAgICB6b29tOiBmYWxzZSxcbiAgICAgICAgbm90aWZ5U2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogT3BlbiAob3IgcmVmcmVzaCkgdGhlIGZpZWxkIHBvcHVwIGZvciBhIHBvbHlnb24gdW5pcXVlaWQg4oCUIHVzZWQgd2hlblxuICAgKiBzZWxlY3Rpb24gY29tZXMgZnJvbSB0aGUgdGFibGUvR3JhZmYgcGF0aCAobWFwIGNsaWNrIGFscmVhZHkgb3BlbnMgaXRzZWxmKS5cbiAgICovXG4gIHByaXZhdGUgb3BlblBvcHVwRm9yVW5pcXVlaWQgPSBhc3luYyAoXG4gICAgdW5pcXVlaWQ6IHN0cmluZyxcbiAgICBvcHRzPzogeyB6b29tPzogYm9vbGVhbjsgbm90aWZ5U2VsZWN0aW9uPzogYm9vbGVhbiB9LFxuICApOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBjbGVhbiA9IFN0cmluZyh1bmlxdWVpZCB8fCBcIlwiKVxuICAgICAgLnJlcGxhY2UoL1t7fV0vZywgXCJcIilcbiAgICAgIC50cmltKCk7XG4gICAgaWYgKCFjbGVhbiB8fCAhdGhpcy5faXNNb3VudGVkKSByZXR1cm47XG5cbiAgICBjb25zdCBhY3RpdmUgPSBTdHJpbmcodGhpcy5fYWN0aXZlSW5zcGVjdGVkVW5pcXVlaWQgfHwgXCJcIilcbiAgICAgIC5yZXBsYWNlKC9be31dL2csIFwiXCIpXG4gICAgICAudHJpbSgpO1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3dQb3B1cCAmJiBhY3RpdmUgPT09IGNsZWFuICYmIHRoaXMuc3RhdGUuc2VsZWN0ZWRBdHRycykge1xuICAgICAgaWYgKHRoaXMuc3RhdGUucG9wdXBNaW5pbWl6ZWQpIHtcbiAgICAgICAgdGhpcy5leHBhbmRQb3B1cCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5icm9hZGNhc3RQb3B1cFZpc2liaWxpdHkodHJ1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgam12ID0gdGhpcy5zdGF0ZS5qaW11TWFwVmlldztcbiAgICBjb25zdCB2aWV3ID0gam12Py52aWV3O1xuICAgIGlmICghdmlldyB8fCAham12KSByZXR1cm47XG5cbiAgICBjb25zdCBjbGlja0dlbmVyYXRpb24gPSArK3RoaXMuX2NsaWNrR2VuZXJhdGlvbjtcbiAgICBjb25zdCBpc1N0YWxlID0gKCkgPT5cbiAgICAgICF0aGlzLl9pc01vdW50ZWQgfHwgY2xpY2tHZW5lcmF0aW9uICE9PSB0aGlzLl9jbGlja0dlbmVyYXRpb247XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICBlcnJvcjogbnVsbCxcbiAgICAgIGxvYWRpbmdBdHRhY2htZW50czogdHJ1ZSxcbiAgICAgIGF0dGFjaG1lbnRzOiBbXSxcbiAgICAgIGF0dGFjaG1lbnRzRXhwYW5kZWQ6IHRydWUsXG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgbGF5ZXJzID0gYXdhaXQgdGhpcy5yZXNvbHZlQ2xpY2tMYXllcnModmlldywgam12KTtcbiAgICAgIGlmIChpc1N0YWxlKCkpIHJldHVybjtcblxuICAgICAgbGV0IGZlYXR1cmU6IF9fZXNyaS5HcmFwaGljIHwgbnVsbCA9IG51bGw7XG4gICAgICBsZXQgY2xpY2tlZExheWVyOiBfX2VzcmkuRmVhdHVyZUxheWVyIHwgbnVsbCA9IG51bGw7XG5cbiAgICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgbGF5ZXJzKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0FncmljdWx0dXJhbEZpZWxkTGF5ZXIobGF5ZXIpKSBjb250aW51ZTtcbiAgICAgICAgaWYgKCF0aGlzLmlzTGF5ZXJFZmZlY3RpdmVseVZpc2libGUobGF5ZXIsIHZpZXcpKSBjb250aW51ZTtcbiAgICAgICAgY29uc3QgZGV0YWNoZWQgPSBhd2FpdCB0aGlzLmdldERldGFjaGVkUXVlcnlMYXllcihsYXllcik7XG4gICAgICAgIGlmIChpc1N0YWxlKCkpIHJldHVybjtcbiAgICAgICAgY29uc3QgcXVlcnlUYXJnZXQgPSBkZXRhY2hlZCB8fCBsYXllcjtcbiAgICAgICAgY29uc3QgdmFyaWFudHMgPSBbY2xlYW4sIGB7JHtjbGVhbn19YF07XG4gICAgICAgIGZvciAoY29uc3QgdiBvZiB2YXJpYW50cykge1xuICAgICAgICAgIGNvbnN0IHEgPSBxdWVyeVRhcmdldC5jcmVhdGVRdWVyeSgpO1xuICAgICAgICAgIHEub3V0RmllbGRzID0gW1wiKlwiXTtcbiAgICAgICAgICBxLnJldHVybkdlb21ldHJ5ID0gdHJ1ZTtcbiAgICAgICAgICBxLm51bSA9IDE7XG4gICAgICAgICAgY29uc3QgZXNjYXBlZCA9IFN0cmluZyh2KS5yZXBsYWNlKC8nL2csIFwiJydcIik7XG4gICAgICAgICAgcS53aGVyZSA9IGAke0FHUklfVEFCTEVfSk9JTl9GSUVMRH09JyR7ZXNjYXBlZH0nYDtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcXVlcnlUYXJnZXQucXVlcnlGZWF0dXJlcyhxKTtcbiAgICAgICAgICAgIGlmIChyZXMuZmVhdHVyZXM/LlswXSkge1xuICAgICAgICAgICAgICBmZWF0dXJlID0gcmVzLmZlYXR1cmVzWzBdO1xuICAgICAgICAgICAgICBjbGlja2VkTGF5ZXIgPSBsYXllcjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAvKiB0cnkgbmV4dCB2YXJpYW50IC8gbGF5ZXIgKi9cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZlYXR1cmUpIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZlYXR1cmUgfHwgIWNsaWNrZWRMYXllciB8fCBpc1N0YWxlKCkpIHtcbiAgICAgICAgaWYgKCFpc1N0YWxlKCkpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgbG9hZGluZ0F0dGFjaG1lbnRzOiBmYWxzZSxcbiAgICAgICAgICAgIGF0dGFjaG1lbnRzOiBbXSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGxpdmVMYXllciA9XG4gICAgICAgICh0aGlzLnRvTGl2ZU1hcExheWVyKGNsaWNrZWRMYXllciwgdmlldy5tYXApIHx8XG4gICAgICAgICAgY2xpY2tlZExheWVyKSBhcyBfX2VzcmkuRmVhdHVyZUxheWVyO1xuICAgICAgY29uc3QgbGF5ZXJLZXkgPVxuICAgICAgICBnZXRBZ3JpTGF5ZXJNYXBLZXkobGl2ZUxheWVyKSB8fFxuICAgICAgICBTdHJpbmcobGl2ZUxheWVyPy51cmwgfHwgbGl2ZUxheWVyPy5pZCB8fCBcIlwiKTtcbiAgICAgIGNvbnN0IGRzSWQgPSB0aGlzLnN0YXRlLmxheWVyS2V5VG9Ec0lkPy5bbGF5ZXJLZXldIHx8IG51bGw7XG4gICAgICBjb25zdCBvaWRGaWVsZCA9XG4gICAgICAgIGxpdmVMYXllci5vYmplY3RJZEZpZWxkIHx8XG4gICAgICAgIGxpdmVMYXllci5maWVsZHM/LmZpbmQoKGY6IGFueSkgPT4gZi50eXBlID09PSBcIm9pZFwiKT8ubmFtZSB8fFxuICAgICAgICBudWxsO1xuICAgICAgaWYgKCFvaWRGaWVsZCkge1xuICAgICAgICBpZiAoIWlzU3RhbGUoKSkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBsb2FkaW5nQXR0YWNobWVudHM6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1BvcHVwOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9pZCA9IGZlYXR1cmUuYXR0cmlidXRlcz8uW29pZEZpZWxkXTtcbiAgICAgIGlmIChvaWQgPT0gbnVsbCkge1xuICAgICAgICBpZiAoIWlzU3RhbGUoKSkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBsb2FkaW5nQXR0YWNobWVudHM6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1BvcHVwOiBmYWxzZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG91dEZpZWxkcyA9IHRoaXMuZ2V0T3V0RmllbGRzKGxpdmVMYXllciBhcyBhbnksIG9pZEZpZWxkKTtcbiAgICAgIGNvbnN0IGYgPVxuICAgICAgICAoYXdhaXQgdGhpcy5xdWVyeUZlYXR1cmVCeU9iamVjdElkQ2FjaGVkKFxuICAgICAgICAgIGxpdmVMYXllcixcbiAgICAgICAgICBvaWRGaWVsZCxcbiAgICAgICAgICBvaWQsXG4gICAgICAgICAgb3V0RmllbGRzLFxuICAgICAgICApKSB8fCBmZWF0dXJlO1xuICAgICAgaWYgKGlzU3RhbGUoKSkgcmV0dXJuO1xuXG4gICAgICBpZiAoZi5nZW9tZXRyeSkgdGhpcy5oaWdobGlnaHRQb2x5Z29uKGYuZ2VvbWV0cnkpO1xuXG4gICAgICBjb25zdCBkaXNwbGF5QXR0cnMgPSBhd2FpdCB0aGlzLnJlc29sdmVEaXNwbGF5QXR0cnMoZi5hdHRyaWJ1dGVzKTtcbiAgICAgIGlmIChpc1N0YWxlKCkpIHJldHVybjtcblxuICAgICAgY29uc3Qgc2hvdWxkUGluID0gdGhpcy5zdGF0ZS5waW5Ub0Nvcm5lcjtcbiAgICAgIGNvbnN0IHBvcHVwUG9zaXRpb24gPSBzaG91bGRQaW5cbiAgICAgICAgPyB0aGlzLmNhbGN1bGF0ZVBpbm5lZFBvc2l0aW9uKHZpZXcpXG4gICAgICAgIDogdGhpcy5zdGF0ZS5wb3B1cFBvc2l0aW9uIHx8IHRoaXMuY2FsY3VsYXRlUGlubmVkUG9zaXRpb24odmlldyk7XG5cbiAgICAgIGNvbnN0IGNvbmZpZ3VyZWRGaWVsZHMgPSB0aGlzLnByb3BzLmNvbmZpZz8uZmllbGRzVG9TaG93IHx8IFtdO1xuICAgICAgY29uc3QgYWN0dWFsRmllbGRzID0gT2JqZWN0LmtleXMoZGlzcGxheUF0dHJzKTtcbiAgICAgIGNvbnN0IG1pc3NpbmdGaWVsZHMgPSBjb25maWd1cmVkRmllbGRzLmZpbHRlcihcbiAgICAgICAgKGZpZWxkKSA9PiAhYWN0dWFsRmllbGRzLmluY2x1ZGVzKGZpZWxkKSxcbiAgICAgICk7XG4gICAgICBjb25zdCBmaWVsZHNXaXRoRGF0YSA9IGNvbmZpZ3VyZWRGaWVsZHMuZmlsdGVyKFxuICAgICAgICAobmFtZSkgPT5cbiAgICAgICAgICBkaXNwbGF5QXR0cnMuaGFzT3duUHJvcGVydHkobmFtZSkgJiZcbiAgICAgICAgICBkaXNwbGF5QXR0cnNbbmFtZV0gIT0gbnVsbCAmJlxuICAgICAgICAgIGRpc3BsYXlBdHRyc1tuYW1lXSAhPT0gXCJcIixcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuX2FjdGl2ZUluc3BlY3RlZFVuaXF1ZWlkID0gY2xlYW47XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGxhc3RDbGlja2VkRHNJZDogZHNJZCxcbiAgICAgICAgbGFzdENsaWNrZWRMYXllcktleTogbGF5ZXJLZXksXG4gICAgICAgIHNlbGVjdGVkQXR0cnM6IGRpc3BsYXlBdHRycyxcbiAgICAgICAgc2VsZWN0ZWRPSUQ6IE51bWJlcihvaWQpLFxuICAgICAgICBvYmplY3RJZEZpZWxkOiBvaWRGaWVsZCxcbiAgICAgICAgc2hvd1BvcHVwOiB0cnVlLFxuICAgICAgICBwb3B1cE1pbmltaXplZDogZmFsc2UsXG4gICAgICAgIGNoYXJ0RXhwYW5kZWQ6IHNob3VsZFBpbixcbiAgICAgICAgY2hhcnRIb3ZlckluZGV4OiBudWxsLFxuICAgICAgICBwb3B1cFBvc2l0aW9uLFxuICAgICAgICBlcnJvcjpcbiAgICAgICAgICBtaXNzaW5nRmllbGRzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gdGhpcy50cihcImVycm9yLmNvbmZpZ3VyZWRGaWVsZE1pc3NpbmdcIiwge1xuICAgICAgICAgICAgICAgIGZpZWxkczogbWlzc2luZ0ZpZWxkcy5qb2luKFwiLCBcIiksXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IGZpZWxkc1dpdGhEYXRhLmxlbmd0aCA9PT0gMCAmJiBjb25maWd1cmVkRmllbGRzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgPyB0aGlzLnRyKFwiZXJyb3Iubm9EYXRhRm9yQ29uZmlndXJlZEZpZWxkc1wiKVxuICAgICAgICAgICAgICA6IG51bGwsXG4gICAgICB9KTtcblxuICAgICAgaWYgKG9wdHM/Lm5vdGlmeVNlbGVjdGlvbikge1xuICAgICAgICB0aGlzLm5vdGlmeUdyYWZmUG9seWdvblNlbGVjdGlvbihjbGVhbiwgdHJ1ZSwgRGF0ZS5ub3coKSk7XG4gICAgICB9XG4gICAgICB2b2lkIHRoaXMuZmV0Y2hMYXRlc3RWZWdldGF0aW9uSW5kaWNlcyhjbGVhbik7XG5cbiAgICAgIGlmIChvcHRzPy56b29tICE9PSBmYWxzZSAmJiBmLmdlb21ldHJ5ICYmICFpc1N0YWxlKCkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIXRoaXMuX2V4dGVudEJlZm9yZVNlbGVjdGlvbiAmJiB2aWV3LmV4dGVudD8uY2xvbmUpIHtcbiAgICAgICAgICAgIHRoaXMuX2V4dGVudEJlZm9yZVNlbGVjdGlvbiA9IHZpZXcuZXh0ZW50LmNsb25lKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHRhcmdldCA9XG4gICAgICAgICAgICAoZi5nZW9tZXRyeSBhcyBhbnkpLmV4dGVudD8uZXhwYW5kPy4oMS4wOCkgfHwgZi5nZW9tZXRyeTtcbiAgICAgICAgICB2b2lkIHZpZXcuZ29UbyhcbiAgICAgICAgICAgIHsgdGFyZ2V0IH0sXG4gICAgICAgICAgICB7IGR1cmF0aW9uOiA2NTAsIGVhc2luZzogXCJlYXNlLWluLW91dFwiIGFzIGFueSB9LFxuICAgICAgICAgICk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIC8qIGlnbm9yZSAqL1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmNvbmZpZz8uc2V0dGluZ3M/LnNob3dBdHRhY2htZW50cyAhPT0gZmFsc2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBjbGlja2VkVXJsID0gU3RyaW5nKChsaXZlTGF5ZXIgYXMgYW55KS51cmwgfHwgXCJcIikudHJpbSgpO1xuICAgICAgICAgIGNvbnN0IGF0dGFjaG1lbnRMYXllciA9XG4gICAgICAgICAgICAoY2xpY2tlZFVybCAmJiB0aGlzLl9xdWVyeU9ubHlMYXllcnMuZ2V0KGNsaWNrZWRVcmwpKSB8fCBsaXZlTGF5ZXI7XG4gICAgICAgICAgYXdhaXQgdGhpcy5sb2FkQXR0YWNobWVudHNGb3JPaWQoYXR0YWNobWVudExheWVyIGFzIGFueSwgTnVtYmVyKG9pZCkpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICBpZiAoIWlzU3RhbGUoKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmdBdHRhY2htZW50czogZmFsc2UsIGF0dGFjaG1lbnRzOiBbXSB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIWlzU3RhbGUoKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZ0F0dGFjaG1lbnRzOiBmYWxzZSwgYXR0YWNobWVudHM6IFtdIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzU3RhbGUoKSkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlUG9wdXBMYXlvdXRBZnRlckNvbnRlbnQoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgIGlmICghaXNTdGFsZSgpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGxvYWRpbmdBdHRhY2htZW50czogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IGU/Lm1lc3NhZ2UgfHwgU3RyaW5nKGUpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBoYW5kbGVTaGFyZWRNYXBDbGljayA9IGFzeW5jIChldmVudDogRXZlbnQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAvLyBBbHdheXMgaWdub3JlIHRoZSBMb2NhbGl6YXRpb24gY2xpY2sgYnVzLiBBZ3JpUG9wdXAgb3ducyB2aWV3Lm9uKFwiY2xpY2tcIilcbiAgICAvLyBleGNsdXNpdmVseSDigJQgaGFuZGxpbmcgYm90aCByYWNlcyB0d28gZnVsbCBvblZpZXdDbGljayBjaGFpbnM6IHRoZSBsb3NlclxuICAgIC8vIG9mdGVuIGNsZWFycyBzaG93UG9wdXAsIHJlc3RvcmVzIHRoZSBwcmUtc2VsZWN0aW9uIGV4dGVudCwgYW5kIGZsYXNoZXNcbiAgICAvLyBvdGhlci1kaXN0cmljdCBmaWVsZHMuIExvY2FsaXphdGlvbiBtYXkgc3RpbGwgZGlzcGF0Y2ggZm9yIG90aGVyIGxpc3RlbmVycy5cbiAgICBhZ3JpTWFwQ2xpY2tEZWJ1ZyhcbiAgICAgIFwiQWdyaVBvbHlnb24g4oaQIHNoYXJlZCBtYXAtY2xpY2sgU0tJUCAoZGlyZWN0IHZpZXcgY2xpY2sgaXMgc29sZSBvd25lcilcIixcbiAgICApO1xuICAgIHJldHVybjtcbiAgfTtcblxuICBwcml2YXRlIGRldGFjaE1hcENsaWNrKCkge1xuICAgIGlmICh0aGlzLl9jbGlja0hhbmRsZT8ucmVtb3ZlKSB0aGlzLl9jbGlja0hhbmRsZS5yZW1vdmUoKTtcbiAgICB0aGlzLl9jbGlja0hhbmRsZSA9IG51bGw7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tIENsaWNrIOKGkiBoaXRUZXN0IOKGkiBxdWVyeSBmdWxsIGF0dHJzIC0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICBwcml2YXRlIHRvQ2xpY2tRdWVyeUdlb21ldHJ5ID0gKFxuICAgIHZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldyxcbiAgICBzY3JlZW5Qb2ludDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LFxuICAgIG1hcFBvaW50PzogeyB4PzogbnVtYmVyOyB5PzogbnVtYmVyOyBzcGF0aWFsUmVmZXJlbmNlPzogeyB3a2lkPzogbnVtYmVyIH0gfSxcbiAgKTogX19lc3JpLlBvaW50IHwgbnVsbCA9PiB7XG4gICAgaWYgKHR5cGVvZiB2aWV3LnRvTWFwID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZyb21WaWV3ID0gdmlldy50b01hcChzY3JlZW5Qb2ludCk7XG4gICAgICAgIGlmIChmcm9tVmlldykgcmV0dXJuIGZyb21WaWV3IGFzIF9fZXNyaS5Qb2ludDtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvKiBpZ25vcmUgKi9cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgeCA9IE51bWJlcihtYXBQb2ludD8ueCk7XG4gICAgY29uc3QgeSA9IE51bWJlcihtYXBQb2ludD8ueSk7XG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoeCkgfHwgIU51bWJlci5pc0Zpbml0ZSh5KSkgcmV0dXJuIG51bGw7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBuZXcgUG9pbnQoe1xuICAgICAgICB4LFxuICAgICAgICB5LFxuICAgICAgICBzcGF0aWFsUmVmZXJlbmNlOlxuICAgICAgICAgIG1hcFBvaW50Py5zcGF0aWFsUmVmZXJlbmNlIHx8ICh2aWV3IGFzIGFueSkuc3BhdGlhbFJlZmVyZW5jZSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgZmluZEhpdEdyYXBoaWMgPSAoXG4gICAgaGl0OiBfX2VzcmkuSGl0VGVzdFJlc3VsdCB8IG51bGwgfCB1bmRlZmluZWQsXG4gICAgbGF5ZXJzOiBfX2VzcmkuRmVhdHVyZUxheWVyW10sXG4gICk6IF9fZXNyaS5HcmFwaGljIHwgbnVsbCA9PiB7XG4gICAgY29uc3QgaGl0UmVzdWx0ID0gaGl0Py5yZXN1bHRzPy5maW5kKChyKSA9PiB7XG4gICAgICBpZiAoXCJncmFwaGljXCIgaW4gciAmJiByLmdyYXBoaWMpIHtcbiAgICAgICAgY29uc3QgbHlyOiBhbnkgPSByLmdyYXBoaWMubGF5ZXI7XG4gICAgICAgIGlmICghbHlyKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiBsYXllcnMuc29tZSgoTCkgPT4gdGhpcy5sYXllcktleXNNYXRjaChMLCBseXIpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICByZXR1cm4gaGl0UmVzdWx0ICYmIFwiZ3JhcGhpY1wiIGluIGhpdFJlc3VsdCA/IGhpdFJlc3VsdC5ncmFwaGljIDogbnVsbDtcbiAgfTtcblxuICBwcml2YXRlIHBpY2tDbGlja0dyYXBoaWMgPSAoXG4gICAgaGl0OiBfX2VzcmkuSGl0VGVzdFJlc3VsdCB8IG51bGwgfCB1bmRlZmluZWQsXG4gICAgcHJlZmVycmVkTGF5ZXJzOiBfX2VzcmkuRmVhdHVyZUxheWVyW10sXG4gICk6IF9fZXNyaS5HcmFwaGljIHwgbnVsbCA9PiB7XG4gICAgY29uc3QgYWN0aXZlVmlldyA9IHRoaXMuc3RhdGUuamltdU1hcFZpZXc/LnZpZXc7XG4gICAgY29uc3QgbWFwID0gYWN0aXZlVmlldz8ubWFwO1xuICAgIGNvbnN0IGNhbmRpZGF0ZXM6IF9fZXNyaS5HcmFwaGljW10gPSBbXTtcbiAgICBjb25zdCByZXN0cmljdFRvUHJlZmVycmVkID0gcHJlZmVycmVkTGF5ZXJzLmxlbmd0aCA+IDA7XG5cbiAgICBmb3IgKGNvbnN0IHIgb2YgaGl0Py5yZXN1bHRzIHx8IFtdKSB7XG4gICAgICBpZiAoIXIgfHwgdHlwZW9mIHIgIT09IFwib2JqZWN0XCIpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgZ3JhcGhpYyA9XG4gICAgICAgIFwiZ3JhcGhpY1wiIGluIHIgJiYgKHIgYXMgYW55KS5ncmFwaGljXG4gICAgICAgICAgPyAoKHIgYXMgYW55KS5ncmFwaGljIGFzIF9fZXNyaS5HcmFwaGljKVxuICAgICAgICAgIDogbnVsbDtcbiAgICAgIGlmICghZ3JhcGhpYykgY29udGludWU7XG5cbiAgICAgIGNvbnN0IHJhd0xheWVyOiBhbnkgPSBncmFwaGljLmxheWVyO1xuICAgICAgaWYgKHRoaXMuaXNIaWdobGlnaHRMYXllcihyYXdMYXllcikpIGNvbnRpbnVlO1xuXG4gICAgICBjb25zdCBsYXllciA9IHRoaXMudG9MaXZlTWFwTGF5ZXIoXG4gICAgICAgIGdldFF1ZXJ5YWJsZUxheWVyKHJhd0xheWVyKSB8fCByYXdMYXllcixcbiAgICAgICAgbWFwLFxuICAgICAgKTtcbiAgICAgIGlmICghbGF5ZXIgfHwgIXRoaXMuaXNBZ3JpY3VsdHVyYWxGaWVsZExheWVyKGxheWVyKSkgY29udGludWU7XG4gICAgICBpZiAoIWFjdGl2ZVZpZXcgfHwgIXRoaXMuaXNMYXllckVmZmVjdGl2ZWx5VmlzaWJsZShsYXllciwgYWN0aXZlVmlldykpIGNvbnRpbnVlO1xuICAgICAgaWYgKCF0aGlzLmlzQWdyaWN1bHR1cmFsRmllbGRHcmFwaGljKGdyYXBoaWMsIGxheWVyKSkgY29udGludWU7XG4gICAgICBpZiAoXG4gICAgICAgIHJlc3RyaWN0VG9QcmVmZXJyZWQgJiZcbiAgICAgICAgIXByZWZlcnJlZExheWVycy5zb21lKChMKSA9PiB0aGlzLmxheWVyS2V5c01hdGNoKEwsIGxheWVyKSlcbiAgICAgICkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZ2VvbVR5cGUgPSBTdHJpbmcoZ3JhcGhpYy5nZW9tZXRyeT8udHlwZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgY29uc3QgaXNQb2x5Z29uTGlrZSA9XG4gICAgICAgICFnZW9tVHlwZSB8fCBnZW9tVHlwZSA9PT0gXCJwb2x5Z29uXCIgfHwgZ2VvbVR5cGUgPT09IFwibXVsdGlwb2x5Z29uXCI7XG4gICAgICBjb25zdCBoYXNBdHRyaWJ1dGVzID1cbiAgICAgICAgISFncmFwaGljLmF0dHJpYnV0ZXMgJiYgT2JqZWN0LmtleXMoZ3JhcGhpYy5hdHRyaWJ1dGVzKS5sZW5ndGggPiAwO1xuXG4gICAgICBpZiAoZ2VvbVR5cGUgJiYgIWlzUG9seWdvbkxpa2UpIGNvbnRpbnVlO1xuICAgICAgaWYgKCFoYXNBdHRyaWJ1dGVzICYmICFncmFwaGljLmdlb21ldHJ5KSBjb250aW51ZTtcblxuICAgICAgY2FuZGlkYXRlcy5wdXNoKGdyYXBoaWMpO1xuICAgIH1cblxuICAgIGlmICghY2FuZGlkYXRlcy5sZW5ndGgpIHJldHVybiBudWxsO1xuXG4gICAgaWYgKHJlc3RyaWN0VG9QcmVmZXJyZWQpIHtcbiAgICAgIGZvciAoY29uc3QgZ3JhcGhpYyBvZiBjYW5kaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IGxheWVyID0gdGhpcy50b0xpdmVNYXBMYXllcihcbiAgICAgICAgICBnZXRRdWVyeWFibGVMYXllcihncmFwaGljLmxheWVyKSB8fCBncmFwaGljLmxheWVyLFxuICAgICAgICAgIG1hcCxcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGxheWVyICYmXG4gICAgICAgICAgcHJlZmVycmVkTGF5ZXJzLnNvbWUoKEwpID0+IHRoaXMubGF5ZXJLZXlzTWF0Y2goTCwgbGF5ZXIpKSAmJlxuICAgICAgICAgIChsYXllciBhcyBhbnkpLnZpc2libGUgIT09IGZhbHNlXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiBncmFwaGljO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGdyYXBoaWMgb2YgY2FuZGlkYXRlcykge1xuICAgICAgY29uc3QgbGF5ZXI6IGFueSA9IGdyYXBoaWMubGF5ZXI7XG4gICAgICBpZiAobGF5ZXI/LnZpc2libGUgIT09IGZhbHNlKSByZXR1cm4gZ3JhcGhpYztcbiAgICB9XG5cbiAgICByZXR1cm4gY2FuZGlkYXRlc1swXTtcbiAgfTtcblxuICBwcml2YXRlIGlzSGlnaGxpZ2h0TGF5ZXIobGF5ZXI6IGFueSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlkID0gU3RyaW5nKGxheWVyPy5pZCB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IHRpdGxlID0gU3RyaW5nKGxheWVyPy50aXRsZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBpZCA9PT0gXCJhZ3JpLXBvbHlnb24taGlnaGxpZ2h0XCIgfHxcbiAgICAgIHRpdGxlLmluY2x1ZGVzKFwic2VsZWN0ZWQgcG9seWdvbiBoaWdobGlnaHRcIikgfHxcbiAgICAgIHRpdGxlLmluY2x1ZGVzKFwic2tldGNoXCIpO1xuICB9XG5cbiAgLyoqIEEgc3VibGF5ZXIgaXMgY2xpY2thYmxlIG9ubHkgd2hlbiBpdCBhbmQgZXZlcnkgcGFyZW50IGFyZSB2aXNpYmxlLiAqL1xuICBwcml2YXRlIGlzTGF5ZXJFZmZlY3RpdmVseVZpc2libGUoXG4gICAgbGF5ZXI6IGFueSxcbiAgICB2aWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsXG4gICk6IGJvb2xlYW4ge1xuICAgIGlmICghbGF5ZXIgfHwgdGhpcy5pc0hpZ2hsaWdodExheWVyKGxheWVyKSkgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IHNlZW4gPSBuZXcgU2V0PGFueT4oKTtcbiAgICBsZXQgY3VycmVudDogYW55ID0gbGF5ZXI7XG4gICAgd2hpbGUgKGN1cnJlbnQgJiYgIXNlZW4uaGFzKGN1cnJlbnQpKSB7XG4gICAgICBzZWVuLmFkZChjdXJyZW50KTtcbiAgICAgIGlmIChjdXJyZW50LnZpc2libGUgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnQgfHwgY3VycmVudC5sYXllciB8fCBudWxsO1xuICAgIH1cbiAgICBjb25zdCBzY2FsZSA9IE51bWJlcigodmlldyBhcyBhbnkpPy5zY2FsZSB8fCAwKTtcbiAgICBjb25zdCBtaW5TY2FsZSA9IE51bWJlcihsYXllci5taW5TY2FsZSB8fCAwKTtcbiAgICBjb25zdCBtYXhTY2FsZSA9IE51bWJlcihsYXllci5tYXhTY2FsZSB8fCAwKTtcbiAgICBpZiAoc2NhbGUgPiAwICYmIG1pblNjYWxlID4gMCAmJiBzY2FsZSA+IG1pblNjYWxlKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHNjYWxlID4gMCAmJiBtYXhTY2FsZSA+IDAgJiYgc2NhbGUgPCBtYXhTY2FsZSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBTdHJpbmcobGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gfHwgXCIxPTFcIikudHJpbSgpICE9PSBcIjE9MFwiO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0FncmljdWx0dXJhbEZpZWxkTGF5ZXIobGF5ZXI6IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmICghbGF5ZXIpIHJldHVybiBmYWxzZTtcbiAgICAvLyBHcm91cCBMYXllciBmb2xkZXJzIGFyZSBub3QgZmllbGQgcG9seWdvbnMg4oCUIG5ldmVyIGFjY2VwdCB0aGVtIGZvciBjbGljay5cbiAgICBpZiAoaXNNYXBJbWFnZUdyb3VwU3VibGF5ZXIobGF5ZXIpKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gUHJlZmVyIHF1ZXJ5YWJsZSBsYXllcnMsIGJ1dCB0aXRsZS91cmwgaWRlbnRpdHkgaXMgZW5vdWdoIHRvIGFjY2VwdCBhXG4gICAgLy8gbGl2ZSBNYXBJbWFnZSBsZWFmIHRoYXQgaXMgc3RpbGwgaHlkcmF0aW5nIGl0cyBxdWVyeSBtZXRob2RzLlxuICAgIGNvbnN0IGlkZW50aXR5ID0gYCR7bGF5ZXIudGl0bGUgfHwgXCJcIn0gJHtsYXllci51cmwgfHwgXCJcIn0gJHtsYXllci5wYXJlbnQ/LnRpdGxlIHx8IFwiXCJ9YC50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IGxvb2tzQWdyaSA9IC9cXGJhZ3JpXFxifGFncmljdWx0dXJlfHFpc2hsb3EvLnRlc3QoaWRlbnRpdHkpO1xuICAgIGlmICghaXNRdWVyeWFibGVGaWVsZExheWVyKGxheWVyKSAmJiAhbG9va3NBZ3JpKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgZ2VvbWV0cnlUeXBlID0gU3RyaW5nKGxheWVyLmdlb21ldHJ5VHlwZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChnZW9tZXRyeVR5cGUgJiYgZ2VvbWV0cnlUeXBlICE9PSBcInBvbHlnb25cIikgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IGZpZWxkczogYW55W10gPSBBcnJheS5pc0FycmF5KGxheWVyLmZpZWxkcykgPyBsYXllci5maWVsZHMgOiBbXTtcbiAgICBjb25zdCBuYW1lcyA9IG5ldyBTZXQoZmllbGRzLm1hcCgoZmllbGQpID0+IFN0cmluZyhmaWVsZD8ubmFtZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpKSk7XG4gICAgaWYgKG5hbWVzLmhhcyhcInVuaXF1ZWlkXCIpIHx8IG5hbWVzLmhhcyhcImNyb3BfaWRcIikgfHwgbmFtZXMuaGFzKFwidHVyaVwiKSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbG9va3NBZ3JpIGFsb25lIGlzIE9LIGZvciBhIGh5ZHJhdGluZyBsZWFmOyBncm91cHMgYWxyZWFkeSByZWplY3RlZCBhYm92ZS5cbiAgICByZXR1cm4gbG9va3NBZ3JpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0FncmljdWx0dXJhbEZpZWxkR3JhcGhpYyhncmFwaGljOiBfX2VzcmkuR3JhcGhpYywgbGF5ZXI6IGFueSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGdlb21ldHJ5VHlwZSA9IFN0cmluZyhncmFwaGljPy5nZW9tZXRyeT8udHlwZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChnZW9tZXRyeVR5cGUgJiYgZ2VvbWV0cnlUeXBlICE9PSBcInBvbHlnb25cIiAmJiBnZW9tZXRyeVR5cGUgIT09IFwibXVsdGlwb2x5Z29uXCIpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBhdHRycyA9IGdyYXBoaWM/LmF0dHJpYnV0ZXMgfHwge307XG4gICAgY29uc3Qga2V5cyA9IG5ldyBTZXQoT2JqZWN0LmtleXMoYXR0cnMpLm1hcCgoa2V5KSA9PiBrZXkudG9Mb3dlckNhc2UoKSkpO1xuICAgIHJldHVybiBrZXlzLmhhcyhcInVuaXF1ZWlkXCIpIHx8IGtleXMuaGFzKFwiY3JvcF9pZFwiKSB8fCBrZXlzLmhhcyhcInR1cmlcIikgfHxcbiAgICAgIHRoaXMuaXNBZ3JpY3VsdHVyYWxGaWVsZExheWVyKGxheWVyKTtcbiAgfVxuICBwcml2YXRlIGdldENsaWNrVGFyZ2V0TGF5ZXJzKFxuICAgIHZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldyxcbiAgKTogX19lc3JpLkZlYXR1cmVMYXllcltdIHtcbiAgICBjb25zdCB7IGZlYXR1cmVMYXllcnMsIGxheWVyS2V5VG9Ec0lkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGRzS2V5cyA9IE9iamVjdC5rZXlzKGxheWVyS2V5VG9Ec0lkIHx8IHt9KTtcbiAgICBjb25zdCBtYXAgPSB2aWV3Lm1hcDtcbiAgICBjb25zdCBjb25maWd1cmVkTGF5ZXJzID0gZmVhdHVyZUxheWVycyB8fCBbXTtcbiAgICBjb25zdCBsaXZlUm9vdHMgPVxuICAgICAgKChtYXAgYXMgYW55KT8uYWxsTGF5ZXJzPy50b0FycmF5Py4oKSBhcyBhbnlbXSkgfHwgW107XG4gICAgLy8gTWFwSW1hZ2UgcGFyZW50cyBhcmUgbm90IHF1ZXJ5YWJsZSDigJQgZXhwYW5kIHRvIGFncmkvZmVhdHVyZSBzdWJsYXllcnMuXG4gICAgY29uc3QgbGl2ZU1hcExheWVyczogX19lc3JpLkZlYXR1cmVMYXllcltdID0gW107XG4gICAgY29uc3Qgc2VlbiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGNvbnN0IHB1c2hMaXZlID0gKGxheWVyOiBhbnkpID0+IHtcbiAgICAgIGlmICghbGF5ZXIgfHwgIWlzUXVlcnlhYmxlRmllbGRMYXllcihsYXllcikpIHJldHVybjtcbiAgICAgIGNvbnN0IGtleSA9XG4gICAgICAgIGdldEFncmlMYXllck1hcEtleShsYXllcikgfHxcbiAgICAgICAgU3RyaW5nKGxheWVyLnVybCB8fCBsYXllci5pZCB8fCBcIlwiKTtcbiAgICAgIGlmICgha2V5IHx8IHNlZW4uaGFzKGtleSkpIHJldHVybjtcbiAgICAgIHNlZW4uYWRkKGtleSk7XG4gICAgICBsaXZlTWFwTGF5ZXJzLnB1c2gobGF5ZXIgYXMgX19lc3JpLkZlYXR1cmVMYXllcik7XG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IHJvb3Qgb2YgbGl2ZVJvb3RzKSB7XG4gICAgICAvLyBXYWxrIGdyb3VwcyBmdWxseSDigJQgbmV2ZXIgcHVzaCB0aGUgR3JvdXAgTGF5ZXIgbm9kZSBpdHNlbGZcbiAgICAgIC8vIChGZWF0dXJlTGF5ZXIjbG9hZCBmYWlscyB3aXRoIHVuc3VwcG9ydGVkLXR5cGUgXCJHcm91cCBMYXllclwiKS5cbiAgICAgIGZvciAoY29uc3QgbGVhZiBvZiBjb2xsZWN0UXVlcnlhYmxlRmllbGRMYXllcnMocm9vdCkpIHtcbiAgICAgICAgcHVzaExpdmUobGVhZik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2FuZGlkYXRlcyA9IEFycmF5LmZyb20oXG4gICAgICBuZXcgU2V0PF9fZXNyaS5GZWF0dXJlTGF5ZXI+KFtcbiAgICAgICAgLi4uY29uZmlndXJlZExheWVycyxcbiAgICAgICAgLi4ubGl2ZU1hcExheWVycyxcbiAgICAgIF0pLFxuICAgICk7XG5cbiAgICByZXR1cm4gY2FuZGlkYXRlc1xuICAgICAgLm1hcCgobGF5ZXIpID0+IHRoaXMudG9MaXZlTWFwTGF5ZXIobGF5ZXIsIG1hcCkgfHwgbGF5ZXIpXG4gICAgICAuZmlsdGVyKChsYXllcjogYW55KSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5pc0xheWVyRWZmZWN0aXZlbHlWaXNpYmxlKGxheWVyLCB2aWV3KSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoIXRoaXMuaXNBZ3JpY3VsdHVyYWxGaWVsZExheWVyKGxheWVyKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBrZXkgPVxuICAgICAgICAgIGdldEFncmlMYXllck1hcEtleShsYXllcikgfHxcbiAgICAgICAgICBTdHJpbmcobGF5ZXIudXJsIHx8IGxheWVyLmlkIHx8IFwiXCIpO1xuICAgICAgICBpZiAodGhpcy5pc0Rhc2hib2FyZEVtYmVkZGVkKCkpIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAoIWRzS2V5cy5sZW5ndGgpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gISFsYXllcktleVRvRHNJZFtrZXldO1xuICAgICAgfSkgYXMgX19lc3JpLkZlYXR1cmVMYXllcltdO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyByZXNvbHZlQ2xpY2tMYXllcnMoXG4gICAgdmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LFxuICAgIGptdjogSmltdU1hcFZpZXcsXG4gICk6IFByb21pc2U8X19lc3JpLkZlYXR1cmVMYXllcltdPiB7XG4gICAgbGV0IGxheWVycyA9IHRoaXMuZ2V0Q2xpY2tUYXJnZXRMYXllcnModmlldyk7XG4gICAgaWYgKGxheWVycy5sZW5ndGgpIHJldHVybiBsYXllcnM7XG5cbiAgICBhd2FpdCB0aGlzLmluaXRpYWxpemVNYXBDb25uZWN0aW9uKGptdik7XG4gICAgbGF5ZXJzID0gdGhpcy5nZXRDbGlja1RhcmdldExheWVycyh2aWV3KTtcbiAgICBpZiAobGF5ZXJzLmxlbmd0aCkgcmV0dXJuIGxheWVycztcblxuICAgIC8vIExhc3QgcmVzb3J0OiBzY2FuIG1hcCBhZ2FpbiBhZnRlciBsYXllcnMgbWF5IGhhdmUgZmluaXNoZWQgbG9hZGluZ1xuICAgIC8vIChwb3J0YWwgLyBNYXBJbWFnZSBzdWJsYXllcnMgb2Z0ZW4gYXJlbid0IHF1ZXJ5YWJsZSBhdCBmaXJzdCBjb25uZWN0KS5cbiAgICB0cnkge1xuICAgICAgY29uc3QgbWFwTGF5ZXJzID0gZ2V0QWxsRmVhdHVyZUxheWVyc0Zyb21NYXAodmlldy5tYXApO1xuICAgICAgZm9yIChjb25zdCBsYXllciBvZiBtYXBMYXllcnMpIHtcbiAgICAgICAgYXdhaXQgc2FmZUxvYWRNYXBMYXllcihsYXllcik7XG4gICAgICB9XG4gICAgfSBjYXRjaCB7XG4gICAgICAvKiBpZ25vcmUgKi9cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2xpY2tUYXJnZXRMYXllcnModmlldyk7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVDbGlja0ZlYXR1cmVBdCA9IGFzeW5jIChcbiAgICBldjogX19lc3JpLlZpZXdDbGlja0V2ZW50LFxuICAgIHZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldyxcbiAgICBsYXllcnM6IF9fZXNyaS5GZWF0dXJlTGF5ZXJbXSxcbiAgKTogUHJvbWlzZTx7XG4gICAgZ3JhcGhpYzogX19lc3JpLkdyYXBoaWM7XG4gICAgcXVlcnlIaXRMYXllcjogX19lc3JpLkZlYXR1cmVMYXllciB8IG51bGw7XG4gIH0gfCBudWxsPiA9PiB7XG4gICAgY29uc3QgY2xpY2tTY3JlZW5Qb2ludCA9IHsgeDogZXYueCwgeTogZXYueSB9O1xuICAgIGNvbnN0IHF1ZXJ5R2VvbWV0cnkgPSB0aGlzLnRvQ2xpY2tRdWVyeUdlb21ldHJ5KFxuICAgICAgdmlldyxcbiAgICAgIGNsaWNrU2NyZWVuUG9pbnQsXG4gICAgICBldi5tYXBQb2ludCxcbiAgICApO1xuXG4gICAgY29uc3QgcXVlcnlMYXllcnMgPVxuICAgICAgbGF5ZXJzLmxlbmd0aCA+IDBcbiAgICAgICAgPyBsYXllcnNcbiAgICAgICAgOiAodGhpcy5nZXRDbGlja1RhcmdldExheWVycyh2aWV3KSBhcyBfX2VzcmkuRmVhdHVyZUxheWVyW10pO1xuXG4gICAgLy8gaGl0VGVzdCAvIGlkZW50aWZ5IGNhbiByZWh5ZHJhdGUgTWFwSW1hZ2Ugc3VibGF5ZXJzIGFuZCBjbGVhciB0aGVpclxuICAgIC8vIHJ1bnRpbWUgZGVmaW5pdGlvbkV4cHJlc3Npb24gKGRpc3RyaWN0IGZpbHRlcikg4oCUIHNuYXBzaG90IGV2ZXJ5IGNsaWNrXG4gICAgLy8gY2FuZGlkYXRlIG5vdyBhbmQgcmVzdG9yZSBhbnkgZHJpZnQgc3luY2hyb25vdXNseSBhZnRlcndhcmRzLCBiZWZvcmVcbiAgICAvLyBhbiB1bmZpbHRlcmVkIGV4cG9ydCBnZXRzIHBhaW50ZWQgKG90aGVyLWRpc3RyaWN0IGZpZWxkcyBmbGFzaCkuXG4gICAgY29uc3QgZGVmaW5pdGlvblNuYXBzaG90ID0gdGhpcy5zbmFwc2hvdERlZmluaXRpb25FeHByZXNzaW9ucyhbXG4gICAgICAuLi5sYXllcnMsXG4gICAgICAuLi5xdWVyeUxheWVycyxcbiAgICBdKTtcblxuICAgIC8vIEFsd2F5cyBoaXQtdGVzdCB0aGUgcmVuZGVyZWQgbWFwIHdpdGhvdXQgYW4gaW5jbHVkZSByZXN0cmljdGlvbi4gTWFwLWltYWdlXG4gICAgLy8gc3VibGF5ZXJzIGZyZXF1ZW50bHkgaGF2ZSBydW50aW1lIGlkcy9VUkxzIHRoYXQgZGlmZmVyIGZyb20gY29uZmlndXJlZCBEU1xuICAgIC8vIHdyYXBwZXJzOyByZXN0cmljdGluZyBpbmNsdWRlL3ByZWZlcnJlZCBsYXllcnMgbWFrZXMgdmlzaWJsZSBmaWVsZHMgdW5jbGlja2FibGUuXG4gICAgY29uc3QgaGl0ID0gYXdhaXQgdmlldy5oaXRUZXN0KGV2KTtcbiAgICB0aGlzLnJlc3RvcmVEcmlmdGVkRGVmaW5pdGlvbkV4cHJlc3Npb25zKGRlZmluaXRpb25TbmFwc2hvdCk7XG4gICAgLy8gT25seSBhY2NlcHQgZ3JhcGhpY3MgYmVsb25naW5nIHRvIHRoZSBjb25maWd1cmVkIGFncmljdWx0dXJhbCBsYXllcnMuXG4gICAgLy8gV2ViTWFwIHNrZXRjaC9tYXAtbm90ZXMgZ3JhcGhpY3MgY2FuIGNvbnRhaW4gcGFnZS1zaXplZCBwb2x5Z29uczsgdHJlYXRpbmdcbiAgICAvLyBvbmUgYXMgYSBmaWVsZCBtYWtlcyBnb1RvIHpvb20gb3V0IHRvIGEgd29ybGQgZXh0ZW50LlxuICAgIC8vIEVtcHR5IGBsYXllcnNgIHN0aWxsIGFsbG93cyBhZ3JpY3VsdHVyYWwgaGl0cyAobm8gcHJlZmVycmVkIHJlc3RyaWN0aW9uKS5cbiAgICBsZXQgZyA9IHRoaXMucGlja0NsaWNrR3JhcGhpYyhoaXQsIGxheWVycyk7XG4gICAgbGV0IHF1ZXJ5SGl0TGF5ZXI6IF9fZXNyaS5GZWF0dXJlTGF5ZXIgfCBudWxsID0gbnVsbDtcblxuICAgIGlmICghZyAmJiBxdWVyeUdlb21ldHJ5ICYmIHF1ZXJ5TGF5ZXJzLmxlbmd0aCkge1xuICAgICAgZm9yIChjb25zdCBsYXllciBvZiBxdWVyeUxheWVycykge1xuICAgICAgICBpZiAoIXRoaXMuaXNMYXllckVmZmVjdGl2ZWx5VmlzaWJsZShsYXllciwgdmlldykpIGNvbnRpbnVlO1xuICAgICAgICBpZiAoIXRoaXMuaXNBZ3JpY3VsdHVyYWxGaWVsZExheWVyKGxheWVyKSkgY29udGludWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gTkVWRVIgcXVlcnkgdGhlIGxpdmUgbGF5ZXIgaGVyZTogb24gYSBNYXBJbWFnZSBzdWJsYXllciB0aGF0XG4gICAgICAgICAgLy8gcmVoeWRyYXRlcyBpdCBhbmQgY2xlYXJzIHRoZSB0dW1hbiBkZWZpbml0aW9uRXhwcmVzc2lvbiwgc28gdGhlXG4gICAgICAgICAgLy8gbWFwIGJyaWVmbHkgZXhwb3J0cy9wYWludHMgZXZlcnkgZGlzdHJpY3QncyBmaWVsZHMgd2hpbGUgdGhlXG4gICAgICAgICAgLy8gcG9wdXAgem9vbSBydW5zLiBVc2UgdGhlIGRldGFjaGVkIG9mZi1tYXAgY2xpZW50IGluc3RlYWQgYW5kXG4gICAgICAgICAgLy8gbWlycm9yIHRoZSBsaXZlIGZpbHRlciBvbnRvIHRoZSBxdWVyeSBXSEVSRS5cbiAgICAgICAgICBjb25zdCBsaXZlV2hlcmUgPSBTdHJpbmcoXG4gICAgICAgICAgICAobGF5ZXIgYXMgYW55KS5kZWZpbml0aW9uRXhwcmVzc2lvbiB8fCBcIlwiLFxuICAgICAgICAgICkudHJpbSgpO1xuICAgICAgICAgIGNvbnN0IGRldGFjaGVkID0gYXdhaXQgdGhpcy5nZXREZXRhY2hlZFF1ZXJ5TGF5ZXIobGF5ZXIpO1xuICAgICAgICAgIGNvbnN0IHF1ZXJ5VGFyZ2V0ID0gZGV0YWNoZWQgfHwgbGF5ZXI7XG4gICAgICAgICAgY29uc3QgcSA9IHF1ZXJ5VGFyZ2V0LmNyZWF0ZVF1ZXJ5KCk7XG4gICAgICAgICAgcS5nZW9tZXRyeSA9IHF1ZXJ5R2VvbWV0cnk7XG4gICAgICAgICAgcS5zcGF0aWFsUmVsYXRpb25zaGlwID0gXCJpbnRlcnNlY3RzXCI7XG4gICAgICAgICAgcS5vdXRGaWVsZHMgPSBbXCIqXCJdO1xuICAgICAgICAgIHEucmV0dXJuR2VvbWV0cnkgPSB0cnVlO1xuICAgICAgICAgIHEubnVtID0gMTtcbiAgICAgICAgICBpZiAobGl2ZVdoZXJlICYmIGxpdmVXaGVyZSAhPT0gXCIxPTFcIikgcS53aGVyZSA9IGxpdmVXaGVyZTtcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBxdWVyeVRhcmdldC5xdWVyeUZlYXR1cmVzKHEpO1xuICAgICAgICAgIGlmICghZGV0YWNoZWQpIHtcbiAgICAgICAgICAgIC8vIExpdmUtbGF5ZXIgZmFsbGJhY2sgKG5vIFVSTCkg4oCUIHJlcGFpciBhbnkgZHJpZnQgaW1tZWRpYXRlbHkuXG4gICAgICAgICAgICB0aGlzLnJlc3RvcmVEcmlmdGVkRGVmaW5pdGlvbkV4cHJlc3Npb25zKGRlZmluaXRpb25TbmFwc2hvdCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXMuZmVhdHVyZXM/LlswXSkge1xuICAgICAgICAgICAgZyA9IHJlcy5mZWF0dXJlc1swXTtcbiAgICAgICAgICAgIC8vIEtlZXAgdGhlIExJVkUgbGF5ZXIgYXMgdGhlIGhpdCBsYXllciDigJQgZG93bnN0cmVhbSBsYXllci1rZXkgL1xuICAgICAgICAgICAgLy8gZHNJZCAvIGFsaWFzIHJlc29sdXRpb24gbXVzdCBtYXAgYmFjayB0byB0aGUgbWFwJ3Mgb3duIGxheWVyLlxuICAgICAgICAgICAgcXVlcnlIaXRMYXllciA9IGxheWVyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAvKiB0cnkgbmV4dCBsYXllciAqL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFnKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4geyBncmFwaGljOiBnLCBxdWVyeUhpdExheWVyIH07XG4gIH07XG5cbiAgLyoqIENhc2UtaW5zZW5zaXRpdmUgYXR0cmlidXRlIGxvb2t1cCDigJQgdGhlIHBvbHlnb24gbGF5ZXIncyBqb2luIGZpZWxkIGNhc2luZyBpcyBub3QgZ3VhcmFudGVlZC4gKi9cbiAgcHJpdmF0ZSBmaW5kQXR0cmlidXRlVmFsdWVDYXNlSW5zZW5zaXRpdmUoXG4gICAgYXR0cmlidXRlczogUmVjb3JkPHN0cmluZywgYW55PiB8IG51bGwgfCB1bmRlZmluZWQsXG4gICAgZmllbGROYW1lOiBzdHJpbmcsXG4gICk6IGFueSB7XG4gICAgcmV0dXJuIGZpbmRBdHRyaWJ1dGVWYWx1ZUNhc2VJbnNlbnNpdGl2ZVNoYXJlZChhdHRyaWJ1dGVzLCBmaWVsZE5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlbGxzIEFncmlHcmFmZjEwICh2aWEgQWdyaUxvY2FsaXphdGlvbiwgdGhlIGNlbnRyYWwgZmlsdGVyIGh1Yikgd2hpY2hcbiAgICogcG9seWdvbiBpcyBjdXJyZW50bHkgaW5zcGVjdGVkIHNvIGl0cyBjaGFydCBjYW4gc3dpdGNoIHRvIHNob3dpbmcgdGhhdFxuICAgKiBzaW5nbGUgcG9seWdvbidzIHZlZ2V0YXRpb24taW5kZXggc2VyaWVzIGluc3RlYWQgb2YgdGhlIHJlZ2lvbi13aWRlXG4gICAqIHRpbWVzZXJpZXMuIE1pcnJvcnMgdGhlIHdpZGdldFNlbGVjdGlvbkNoYW5nZWQgc2hhcGUgQWdyaUdyYWZmV2lkZ2V0XG4gICAqIGl0c2VsZiBhbHJlYWR5IGRpc3BhdGNoZXMgb24gaXRzIG93biByb3ctY2xpY2sgc2VsZWN0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBub3RpZnlHcmFmZlBvbHlnb25TZWxlY3Rpb24gPSAoXG4gICAgdW5pcXVlaWQ6IHN0cmluZyxcbiAgICBwb2x5Z29uTW9kZTogYm9vbGVhbixcbiAgICBjbGlja2VkQXQ/OiBudW1iZXIsXG4gICk6IHZvaWQgPT4ge1xuICAgIHRyeSB7XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoXCJ3aWRnZXRTZWxlY3Rpb25DaGFuZ2VkXCIsIHtcbiAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgIHNvdXJjZTogXCJBZ3JpUG9wdXBcIixcbiAgICAgICAgICAgIHBvbHlnb25Nb2RlLFxuICAgICAgICAgICAgdW5pcXVlaWQ6IHBvbHlnb25Nb2RlID8gdW5pcXVlaWQgOiBcIlwiLFxuICAgICAgICAgICAgLy8gVGltZXN0YW1wIG9mIHRoZSBPUklHSU5BTCBtYXAgY2xpY2sgKGNhcHR1cmVkIGJlZm9yZSB0aGlzXG4gICAgICAgICAgICAvLyB3aWRnZXQncyBvd24gYXN5bmMgYXR0cmlidXRlLXJlc29sdXRpb24gY2hhaW4pLCBub3Qgb2YgdGhpc1xuICAgICAgICAgICAgLy8gZGlzcGF0Y2gg4oCUIGxldHMgZG93bnN0cmVhbSBsaXN0ZW5lcnMgKEFncmlHcmFmZjEwKSBkZXRlY3QgYW5kXG4gICAgICAgICAgICAvLyBpZ25vcmUgYSBzdGFsZSBub3RpZmljYXRpb24gdGhhdCByZXNvbHZlcyBhZnRlciBhIG5ld2VyIGNsaWNrXG4gICAgICAgICAgICAvLyB3YXMgYWxyZWFkeSBhcHBsaWVkIChzZWUgQWdyaUdyYWZmMTAncyBfbGFzdEFwcGxpZWRQb2x5Z29uQ2xpY2tlZEF0KS5cbiAgICAgICAgICAgIGNsaWNrZWRBdDogY2xpY2tlZEF0ID8/IERhdGUubm93KCksXG4gICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAvKiBpZ25vcmUgKi9cbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBicm9hZGNhc3RQb3B1cFZpc2liaWxpdHkgPSAob3BlbjogYm9vbGVhbik6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHBpbm5lZCA9ICEhdGhpcy5zdGF0ZS5waW5Ub0Nvcm5lcjtcbiAgICB0cnkge1xuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50KFwiYWdyaU1hcFBvcHVwVmlzaWJpbGl0eVwiLCB7XG4gICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICBvcGVuOiAhIW9wZW4sXG4gICAgICAgICAgICBwaW5uZWQsXG4gICAgICAgICAgICBzb3VyY2U6IFwiQWdyaVBvcHVwXCIsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAvKiBpZ25vcmUgKi9cbiAgICB9XG4gICAgaWYgKG9wZW4pIHtcbiAgICAgIC8vIFJlLW5vdGlmeSBhZnRlciBwYWludCBzbyBORFZJIGNhbiBtZWFzdXJlIHRoZSByZWFsIHBvcHVwIGJveC5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgICAgIG5ldyBDdXN0b21FdmVudChcImFncmlNYXBQb3B1cFZpc2liaWxpdHlcIiwge1xuICAgICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBpbm5lZCxcbiAgICAgICAgICAgICAgICBsYXlvdXQ6IHRydWUsXG4gICAgICAgICAgICAgICAgc291cmNlOiBcIkFncmlQb3B1cFwiLFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIC8qIGlnbm9yZSAqL1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVkVHX0lOREVYX0ZJRUxEUyA9IFsuLi5HUkFGRl9JTkRFWF9PUkRFUl07XG5cbiAgLyoqXG4gICAqIExhdGVzdC1kYXkgdmVnZXRhdGlvbiBpbmRleCB2YWx1ZXMgZm9yIHRoZSBzZWxlY3RlZCBwb2x5Z29uLCBzaG93biBpblxuICAgKiB0aGUgcG9wdXAuIFJldXNlcyBxdWVyeVZlZ2V0YXRpb25TZXJpZXNGb3JVbmlxdWVJZCAocXVlcmllcyB0aGVcbiAgICogYWdyaV92ZWdldGF0aW9uX2luZGljZXMgQXJjR0lTIHRhYmxlIGRpcmVjdGx5LCBzYW1lIHNvdXJjZSBBZ3JpR3JhZmYxMCdzXG4gICAqIGNoYXJ0IHVzZXMpIHJhdGhlciB0aGFuIHRoZSBhcGktYWdyaSBleHBvcnQtaW1hZ2UvYXZhaWxhYmxlLWRhdGVzIFJFU1RcbiAgICogZW5kcG9pbnRzIOKAlCB0aG9zZSBhcmUgZm9yIGZldGNoaW5nIGEgcmVuZGVyZWQgcmFzdGVyIGZvciBhIHNwZWNpZmljXG4gICAqIGNob3NlbiBkYXRlLCB3aGljaCBpcyB1bm5lY2Vzc2FyeSBoZXJlOyB3ZSBvbmx5IG5lZWQgdGhlIHNjYWxhciBpbmRleFxuICAgKiB2YWx1ZXMgZm9yIHdoaWNoZXZlciBkYXRlIGlzIG1vc3QgcmVjZW50LCBhbmQgdGhlIHRhYmxlIGFscmVhZHkgaGFzXG4gICAqIG5kdmkvc2F2aS9ydmkvY2kvZXZpL25kd2kgYXMgcGxhaW4gZmllbGRzIHBlciAodW5pcXVlaWQsIHJhc3Rlcl9kYXRlKS5cbiAgICovXG4gIHByaXZhdGUgZmV0Y2hMYXRlc3RWZWdldGF0aW9uSW5kaWNlcyA9IGFzeW5jIChcbiAgICB1bmlxdWVJZDogc3RyaW5nLFxuICApOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBpZCA9IFN0cmluZyh1bmlxdWVJZCB8fCBcIlwiKS50cmltKCk7XG4gICAgaWYgKCFpZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxvYWRpbmdMYXRlc3RJbmRpY2VzOiBmYWxzZSxcbiAgICAgICAgbGF0ZXN0SW5kZXhEYXRlOiBudWxsLFxuICAgICAgICBsYXRlc3RJbmRleFZhbHVlczogbnVsbCxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcXVlc3RJZCA9ICsrdGhpcy5fbGF0ZXN0SW5kaWNlc1JlcXVlc3RJZDtcbiAgICBhZ3JpTWFwQ2xpY2tEZWJ1ZyhcInZlZ2V0YXRpb246cmVxdWVzdFwiLCB7XG4gICAgICB1bmlxdWVpZDogaWQsXG4gICAgICBzb3VyY2U6IFwiYWdyaV92ZWdldGF0aW9uX2luZGljZXMvRmVhdHVyZVNlcnZlci8xXCIsXG4gICAgICByZXF1ZXN0SWQsXG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsb2FkaW5nTGF0ZXN0SW5kaWNlczogdHJ1ZSxcbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3dzID0gYXdhaXQgcXVlcnlWZWdldGF0aW9uU2VyaWVzRm9yVW5pcXVlSWQoaWQpO1xuICAgICAgaWYgKCF0aGlzLl9pc01vdW50ZWQgfHwgcmVxdWVzdElkICE9PSB0aGlzLl9sYXRlc3RJbmRpY2VzUmVxdWVzdElkKSByZXR1cm47XG5cbiAgICAgIGlmICghcm93cy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbG9hZGluZ0xhdGVzdEluZGljZXM6IGZhbHNlLFxuICAgICAgICAgIGxhdGVzdEluZGV4RGF0ZTogbnVsbCxcbiAgICAgICAgICBsYXRlc3RJbmRleFZhbHVlczogbnVsbCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUm93cyBjb21lIGJhY2sgb3JkZXJlZCBieSByYXN0ZXJfZGF0ZSBBU0Mg4oCUIHRoZSBsYXN0IG9uZSBpcyB0aGVcbiAgICAgIC8vIG1vc3QgcmVjZW50IHByb2Nlc3NlZCBkYXRlIGZvciB0aGlzIHBvbHlnb24uXG4gICAgICBjb25zdCBsYXRlc3QgPSByb3dzW3Jvd3MubGVuZ3RoIC0gMV0gYXMgUmVjb3JkPHN0cmluZywgYW55PjtcbiAgICAgIGNvbnN0IGRhdGUgPSBmb3JtYXRBcmNnaXNEYXRlVG9ZbWQobGF0ZXN0LnJhc3Rlcl9kYXRlKTtcbiAgICAgIGNvbnN0IHZhbHVlczogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHt9O1xuICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiBBZ3JpUG9seWdvbi5WRUdfSU5ERVhfRklFTERTKSB7XG4gICAgICAgIGNvbnN0IHYgPSBOdW1iZXIobGF0ZXN0W2ZpZWxkXSk7XG4gICAgICAgIGlmIChOdW1iZXIuaXNGaW5pdGUodikpIHZhbHVlc1tmaWVsZF0gPSB2O1xuICAgICAgfVxuICAgICAgYWdyaU1hcENsaWNrRGVidWcoXCJ2ZWdldGF0aW9uOnJlc3BvbnNlXCIsIHtcbiAgICAgICAgdW5pcXVlaWQ6IGlkLFxuICAgICAgICByZXF1ZXN0SWQsXG4gICAgICAgIHJvd0NvdW50OiByb3dzLmxlbmd0aCxcbiAgICAgICAgbGF0ZXN0RGF0ZTogZGF0ZSxcbiAgICAgICAgdmFsdWVzLFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsb2FkaW5nTGF0ZXN0SW5kaWNlczogZmFsc2UsXG4gICAgICAgIGxhdGVzdEluZGV4RGF0ZTogZGF0ZSxcbiAgICAgICAgbGF0ZXN0SW5kZXhWYWx1ZXM6IE9iamVjdC5rZXlzKHZhbHVlcykubGVuZ3RoID8gdmFsdWVzIDogbnVsbCxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2gge1xuICAgICAgaWYgKCF0aGlzLl9pc01vdW50ZWQgfHwgcmVxdWVzdElkICE9PSB0aGlzLl9sYXRlc3RJbmRpY2VzUmVxdWVzdElkKSByZXR1cm47XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbG9hZGluZ0xhdGVzdEluZGljZXM6IGZhbHNlLFxuICAgICAgICBsYXRlc3RJbmRleERhdGU6IG51bGwsXG4gICAgICAgIGxhdGVzdEluZGV4VmFsdWVzOiBudWxsLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBBZ3JpX3RhYmxlX2RhdGEgaXMgYW4gZXh0ZXJuYWwgVGFibGUgKG5vIGdlb21ldHJ5KSDigJQgdGhlIG1hcCBjbGljayBzdGlsbFxuICAgKiByZXNvbHZlcyB0aGUgcG9seWdvbiBmZWF0dXJlIGZvciBoaWdobGlnaHQvem9vbSwgYnV0IHRoZSBkaXNwbGF5ZWRcbiAgICogYXR0cmlidXRlcyBjb21lIGZyb20gQWdyaV90YWJsZV9kYXRhLCBqb2luZWQgYnkgdW5pcXVlaWQuXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIHJlc29sdmVEaXNwbGF5QXR0cnMoXG4gICAgcG9seWdvbkF0dHJpYnV0ZXM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCBudWxsIHwgdW5kZWZpbmVkLFxuICApOiBQcm9taXNlPFJlY29yZDxzdHJpbmcsIGFueT4+IHtcbiAgICBjb25zdCBqb2luVmFsdWUgPSB0aGlzLmZpbmRBdHRyaWJ1dGVWYWx1ZUNhc2VJbnNlbnNpdGl2ZShcbiAgICAgIHBvbHlnb25BdHRyaWJ1dGVzLFxuICAgICAgQUdSSV9UQUJMRV9KT0lOX0ZJRUxELFxuICAgICk7XG4gICAgaWYgKGpvaW5WYWx1ZSA9PSBudWxsIHx8IFN0cmluZyhqb2luVmFsdWUpLnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgYWdyaU1hcENsaWNrV2FybihcImFncmktdGFibGUtam9pbjpTS0lQLW5vLXVuaXF1ZWlkXCIsIHtcbiAgICAgICAgcG9seWdvbkF0dHJpYnV0ZUtleXM6IE9iamVjdC5rZXlzKHBvbHlnb25BdHRyaWJ1dGVzIHx8IHt9KSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHBvbHlnb25BdHRyaWJ1dGVzIHx8IHt9O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgYWdyaU1hcENsaWNrRGVidWcoXCJhZ3JpLXRhYmxlLWpvaW46cmVxdWVzdFwiLCB7XG4gICAgICAgIHVuaXF1ZWlkOiBTdHJpbmcoam9pblZhbHVlKSxcbiAgICAgICAgc291cmNlOiBcIkFncmlfdGFibGVfZGF0YS9GZWF0dXJlU2VydmVyLzJcIixcbiAgICAgIH0pO1xuICAgICAgY29uc3QgYWdyaVJlY29yZCA9IGF3YWl0IHF1ZXJ5QWdyaVJlY29yZEJ5VW5pcXVlSWQoU3RyaW5nKGpvaW5WYWx1ZSkpO1xuICAgICAgYWdyaU1hcENsaWNrRGVidWcoXCJhZ3JpLXRhYmxlLWpvaW46cmVzcG9uc2VcIiwge1xuICAgICAgICB1bmlxdWVpZDogU3RyaW5nKGpvaW5WYWx1ZSksXG4gICAgICAgIGZvdW5kOiBCb29sZWFuKGFncmlSZWNvcmQpLFxuICAgICAgICBhdHRyaWJ1dGVLZXlzOiBPYmplY3Qua2V5cyhhZ3JpUmVjb3JkIHx8IHt9KSxcbiAgICAgIH0pO1xuICAgICAgaWYgKGFncmlSZWNvcmQpIHtcbiAgICAgICAgLy8gS2VlcCBwb2x5Z29uLW9ubHkgdmFsdWVzIChmb3IgZXhhbXBsZSBzdF9hcmVhKHNoYXBlKSkgd2hpbGUgYWxsb3dpbmdcbiAgICAgICAgLy8gdGhlIGpvaW5lZCBBZ3JpIHRhYmxlIHRvIHByb3ZpZGUvb3ZlcnJpZGUgdGhlIHBvcHVwJ3MgYnVzaW5lc3MgZGF0YS5cbiAgICAgICAgcmV0dXJuIHsgLi4uKHBvbHlnb25BdHRyaWJ1dGVzIHx8IHt9KSwgLi4uYWdyaVJlY29yZCB9O1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGFncmlNYXBDbGlja1dhcm4oXCJBZ3JpX3RhYmxlX2RhdGEgbG9va3VwIGZhaWxlZFwiLCB7XG4gICAgICAgIHVuaXF1ZUlkOiBqb2luVmFsdWUsXG4gICAgICAgIGVycm9yOiAoZSBhcyBhbnkpPy5tZXNzYWdlIHx8IFN0cmluZyhlKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcG9seWdvbkF0dHJpYnV0ZXMgfHwge307XG4gIH1cblxuICBwcml2YXRlIG9uVmlld0NsaWNrID0gYXN5bmMgKGV2OiBfX2VzcmkuVmlld0NsaWNrRXZlbnQpID0+IHtcbiAgICB0cnkge1xuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50KFwiYWdyaVBvbHlnb25NYXBDbGlja1BoYXNlXCIsIHtcbiAgICAgICAgICBkZXRhaWw6IHsgcGhhc2U6IFwiY2xpY2stc3RhcnRcIiwgdGltZXN0YW1wOiBEYXRlLm5vdygpIH0sXG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8qIGJlc3QtZWZmb3J0IGZpbHRlciBndWFyZCAqL1xuICAgIH1cbiAgICAvLyBDYXB0dXJlZCBCRUZPUkUgYW55IGF3YWl0cyBiZWxvdyDigJQgdGhpcyB3aWRnZXQncyBhdHRyaWJ1dGUtcmVzb2x1dGlvblxuICAgIC8vIGNoYWluIChyZXNvbHZlQ2xpY2tMYXllcnMvcmVzb2x2ZUNsaWNrRmVhdHVyZUF0L3F1ZXJ5L3Jlc29sdmVEaXNwbGF5QXR0cnMpXG4gICAgLy8gY2FuIHRha2Ugbm90aWNlYWJseSBsb25nZXIgdGhhbiBBZ3JpR3JhZmYxMCdzIG93biwgbW9yZSBkaXJlY3QgbWFwLWNsaWNrXG4gICAgLy8gaGFuZGxpbmcgb2YgdGhlIHNhbWUgY2xpY2suIElmIHRoZSB1c2VyIGNsaWNrcyBhIHNlY29uZCBwb2x5Z29uIGJlZm9yZVxuICAgIC8vIHRoaXMgY2hhaW4gZmluaXNoZXMsIHRoZSBzdGFsZSByZXN1bHQgbXVzdCBub3Qgd2luIOKAlCBjbGlja2VkQXQgbGV0c1xuICAgIC8vIEFncmlHcmFmZjEwIGRldGVjdCBhbmQgZHJvcCBpdC5cbiAgICBjb25zdCBjbGlja1N0YXJ0ZWRBdCA9IERhdGUubm93KCk7XG4gICAgY29uc3QgY2xpY2tHZW5lcmF0aW9uID0gKyt0aGlzLl9jbGlja0dlbmVyYXRpb247XG4gICAgYWdyaU1hcENsaWNrRGVidWcoXCJjbGljazpyZWNlaXZlZFwiLCB7XG4gICAgICBjbGlja0dlbmVyYXRpb24sXG4gICAgICB4OiBldi54LFxuICAgICAgeTogZXYueSxcbiAgICAgIG1hcFBvaW50OiBldi5tYXBQb2ludFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIHg6IGV2Lm1hcFBvaW50LngsXG4gICAgICAgICAgICB5OiBldi5tYXBQb2ludC55LFxuICAgICAgICAgICAgd2tpZDogZXYubWFwUG9pbnQuc3BhdGlhbFJlZmVyZW5jZT8ud2tpZCB8fCBudWxsLFxuICAgICAgICAgIH1cbiAgICAgICAgOiBudWxsLFxuICAgIH0pO1xuICAgIGNvbnN0IGlzU3RhbGUgPSAoKSA9PlxuICAgICAgIXRoaXMuX2lzTW91bnRlZCB8fCBjbGlja0dlbmVyYXRpb24gIT09IHRoaXMuX2NsaWNrR2VuZXJhdGlvbjtcbiAgICBsZXQgcG9wdXBPcGVuZWRGb3JUaGlzQ2xpY2sgPSBmYWxzZTtcbiAgICBjb25zdCBqbXYgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3O1xuICAgIGNvbnN0IHZpZXcgPSBqbXY/LnZpZXc7XG4gICAgaWYgKCF2aWV3IHx8ICFqbXYpIHtcbiAgICAgIGFncmlNYXBDbGlja1dhcm4oXCJvblZpZXdDbGljayBTS0lQOiBubyB2aWV3L2ptdlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsYXllcnMgPSBhd2FpdCB0aGlzLnJlc29sdmVDbGlja0xheWVycyh2aWV3LCBqbXYpO1xuICAgIGlmIChpc1N0YWxlKCkpIHJldHVybjtcbiAgICBhZ3JpTWFwQ2xpY2tEZWJ1ZyhcIm9uVmlld0NsaWNrIHN0YXJ0XCIsIHtcbiAgICAgIHNjcmVlbjogeyB4OiBldi54LCB5OiBldi55IH0sXG4gICAgICBsYXllckNvdW50OiBsYXllcnMubGVuZ3RoLFxuICAgICAgbGF5ZXJzOiBsYXllcnMubWFwKChsKSA9PiAoe1xuICAgICAgICBpZDogbC5pZCxcbiAgICAgICAgdGl0bGU6IGwudGl0bGUsXG4gICAgICAgIHVybDogbC51cmwsXG4gICAgICB9KSksXG4gICAgfSk7XG5cblxuICAgIGNvbnN0IGNsaWNrU2NyZWVuUG9pbnQgPSB7IHg6IGV2LngsIHk6IGV2LnkgfTtcbiAgICBjb25zdCBoaXRSZXN1bHQgPSBhd2FpdCB0aGlzLnJlc29sdmVDbGlja0ZlYXR1cmVBdChldiwgdmlldywgbGF5ZXJzKTtcbiAgICBpZiAoaXNTdGFsZSgpKSByZXR1cm47XG5cbiAgICB0cnkge1xuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50KFwiYWdyaVBvbHlnb25NYXBDbGlja1BoYXNlXCIsIHtcbiAgICAgICAgICBkZXRhaWw6IHsgcGhhc2U6IFwiYWZ0ZXItaGl0LXRlc3RcIiwgdGltZXN0YW1wOiBEYXRlLm5vdygpIH0sXG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8qIGJlc3QtZWZmb3J0IGZpbHRlciBndWFyZCAqL1xuICAgIH1cblxuICAgIGlmICghaGl0UmVzdWx0KSB7XG4gICAgICAvLyBFbXB0eSBtYXAgY2xpY2sgd2hpbGUgYSBmaWVsZCBwb3B1cCBpcyBvcGVuID0gZGVzZWxlY3QgYW5kIHJldHVybiB0b1xuICAgICAgLy8gdGhlIGRpc3RyaWN0L3JlZ2lvbiBleHRlbnQgc2F2ZWQgYmVmb3JlIHRoZSBmaWVsZCB6b29tLlxuICAgICAgaWYgKHRoaXMuc3RhdGUuc2hvd1BvcHVwIHx8IHRoaXMuc3RhdGUubG9hZGluZykge1xuICAgICAgICBhZ3JpTWFwQ2xpY2tEZWJ1ZyhcIm9uVmlld0NsaWNrOiBjbGljayBvdXRzaWRlIOKAlCBjbG9zZSBwb3B1cCArIHJlc3RvcmUgZXh0ZW50XCIpO1xuICAgICAgICB0aGlzLmNsb3NlUG9wdXAoeyByZXN0b3JlRXh0ZW50OiB0cnVlLCBub3RpZnlEZXNlbGVjdDogdHJ1ZSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFncmlNYXBDbGlja0RlYnVnKFwib25WaWV3Q2xpY2s6IGNsaWNrIG91dHNpZGUgZmllbGQgcG9seWdvbnMg4oCUIGlnbm9yZWRcIik7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBncmFwaGljOiBnLCBxdWVyeUhpdExheWVyIH0gPSBoaXRSZXN1bHQ7XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICBjbGlja1NjcmVlblBvaW50LFxuICAgICAgICBsb2FkaW5nQXR0YWNobWVudHM6IHRydWUsXG4gICAgICAgIGF0dGFjaG1lbnRzOiBbXSxcbiAgICAgICAgYXR0YWNobWVudHNFeHBhbmRlZDogdHJ1ZSxcbiAgICAgIH0pO1xuXG4gICAgICBhZ3JpTWFwQ2xpY2tEZWJ1ZyhcImZpZWxkIHBvbHlnb24gaGl0XCIsIHtcbiAgICAgICAgbGF5ZXJJZDogKGcgYXMgYW55KS5sYXllcj8uaWQsXG4gICAgICAgIGdlb21ldHJ5OiBnLmdlb21ldHJ5Py50eXBlIHx8IG51bGwsXG4gICAgICAgIGF0dHJLZXlzOiBnLmF0dHJpYnV0ZXNcbiAgICAgICAgICA/IE9iamVjdC5rZXlzKGcuYXR0cmlidXRlcykuc2xpY2UoMCwgOClcbiAgICAgICAgICA6IFtdLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIHF1ZXJ5RmVhdHVyZXMgcmVzdWx0cyBoYXZlIG5vIGdyYXBoaWMubGF5ZXIg4oCUIHVzZSB0aGUgbGF5ZXIgd2UgcXVlcmllZFxuICAgICAgY29uc3QgY2xpY2tlZExheWVyID0gKFxuICAgICAgICBxdWVyeUhpdExheWVyXG4gICAgICAgICAgPyB0aGlzLnRvTGl2ZU1hcExheWVyKHF1ZXJ5SGl0TGF5ZXIsIHZpZXcubWFwKSB8fCBxdWVyeUhpdExheWVyXG4gICAgICAgICAgOiB0aGlzLnRvTGl2ZU1hcExheWVyKFxuICAgICAgICAgICAgICBnZXRRdWVyeWFibGVMYXllcigoZyBhcyBhbnkpLmxheWVyKSB8fCAoZyBhcyBhbnkpLmxheWVyLFxuICAgICAgICAgICAgICB2aWV3Lm1hcCxcbiAgICAgICAgICAgIClcbiAgICAgICkgYXMgX19lc3JpLkZlYXR1cmVMYXllcjtcbiAgICAgIGlmICghY2xpY2tlZExheWVyKSB7XG4gICAgICAgIGFncmlNYXBDbGlja1dhcm4oXCJubyBsaXZlIGxheWVyIGZvciBoaXQgZ3JhcGhpY1wiKTtcbiAgICAgICAgaWYgKCFpc1N0YWxlKCkpIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgc2hvd1BvcHVwOiBmYWxzZSB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgbGF5ZXJLZXkgPVxuICAgICAgICBnZXRBZ3JpTGF5ZXJNYXBLZXkoY2xpY2tlZExheWVyKSB8fFxuICAgICAgICBTdHJpbmcoY2xpY2tlZExheWVyPy51cmwgfHwgY2xpY2tlZExheWVyPy5pZCB8fCBcIlwiKTtcbiAgICAgIGNvbnN0IGRzSWQgPSB0aGlzLnN0YXRlLmxheWVyS2V5VG9Ec0lkPy5bbGF5ZXJLZXldIHx8IG51bGw7XG4gICAgICBhZ3JpTWFwQ2xpY2tEZWJ1ZyhcImxheWVyOnJlc29sdmVkXCIsIHtcbiAgICAgICAgdGl0bGU6IGNsaWNrZWRMYXllci50aXRsZSxcbiAgICAgICAgaWQ6IGNsaWNrZWRMYXllci5pZCxcbiAgICAgICAgdXJsOiBjbGlja2VkTGF5ZXIudXJsIHx8IG51bGwsXG4gICAgICAgIGxheWVyS2V5LFxuICAgICAgICBkYXRhU291cmNlSWQ6IGRzSWQsXG4gICAgICAgIGRlZmluaXRpb25FeHByZXNzaW9uOiAoY2xpY2tlZExheWVyIGFzIGFueSkuZGVmaW5pdGlvbkV4cHJlc3Npb24gfHwgbnVsbCxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBvaWRGaWVsZCA9XG4gICAgICAgIGNsaWNrZWRMYXllci5vYmplY3RJZEZpZWxkIHx8XG4gICAgICAgIGNsaWNrZWRMYXllci5maWVsZHM/LmZpbmQoKGY6IGFueSkgPT4gZi50eXBlID09PSBcIm9pZFwiKT8ubmFtZSB8fFxuICAgICAgICBudWxsO1xuXG4gICAgICBpZiAoIW9pZEZpZWxkKSB7XG4gICAgICAgIGlmICghaXNTdGFsZSgpKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGVycm9yOiB0aGlzLnRyKFwiZXJyb3Iub2JqZWN0SWRGaWVsZE1pc3NpbmdcIiksXG4gICAgICAgICAgICBzaG93UG9wdXA6IGZhbHNlLFxuICAgICAgICAgICAgbG9hZGluZ0F0dGFjaG1lbnRzOiBmYWxzZSxcbiAgICAgICAgICAgIGF0dGFjaG1lbnRzOiBbXSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmNsZWFySGlnaGxpZ2h0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvaWQgPSAoZyBhcyBhbnkpLmF0dHJpYnV0ZXM/LltvaWRGaWVsZF07XG4gICAgICBpZiAob2lkID09IG51bGwpIHtcbiAgICAgICAgaWYgKCFpc1N0YWxlKCkpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZXJyb3I6IHRoaXMudHIoXCJlcnJvci5vYmplY3RJZE1pc3NpbmdcIiwgeyBmaWVsZDogb2lkRmllbGQgfSksXG4gICAgICAgICAgICBzaG93UG9wdXA6IGZhbHNlLFxuICAgICAgICAgICAgbG9hZGluZ0F0dGFjaG1lbnRzOiBmYWxzZSxcbiAgICAgICAgICAgIGF0dGFjaG1lbnRzOiBbXSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmNsZWFySGlnaGxpZ2h0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvdXRGaWVsZHMgPSB0aGlzLmdldE91dEZpZWxkcyhjbGlja2VkTGF5ZXIgYXMgYW55LCBvaWRGaWVsZCk7XG5cbiAgICAgIGNvbnN0IGYgPSBhd2FpdCB0aGlzLnF1ZXJ5RmVhdHVyZUJ5T2JqZWN0SWRDYWNoZWQoXG4gICAgICAgIGNsaWNrZWRMYXllcixcbiAgICAgICAgb2lkRmllbGQsXG4gICAgICAgIG9pZCxcbiAgICAgICAgb3V0RmllbGRzLFxuICAgICAgKTtcbiAgICAgIGlmIChpc1N0YWxlKCkpIHJldHVybjtcbiAgICAgIGlmICghZikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogdGhpcy50cihcImVycm9yLmZlYXR1cmVCeU9iamVjdElkTWlzc2luZ1wiKSxcbiAgICAgICAgICBzaG93UG9wdXA6IGZhbHNlLFxuICAgICAgICAgIGxvYWRpbmdBdHRhY2htZW50czogZmFsc2UsXG4gICAgICAgICAgYXR0YWNobWVudHM6IFtdLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jbGVhckhpZ2hsaWdodCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChmLmdlb21ldHJ5KSB0aGlzLmhpZ2hsaWdodFBvbHlnb24oZi5nZW9tZXRyeSk7XG5cbiAgICAgIGNvbnN0IGVhcmx5VW5pcXVlSWQgPVxuICAgICAgICB0aGlzLmZpbmRBdHRyaWJ1dGVWYWx1ZUNhc2VJbnNlbnNpdGl2ZShcbiAgICAgICAgICBmLmF0dHJpYnV0ZXMgYXMgUmVjb3JkPHN0cmluZywgYW55PixcbiAgICAgICAgICBBR1JJX1RBQkxFX0pPSU5fRklFTEQsXG4gICAgICAgICkgPz8gbnVsbDtcbiAgICAgIGNvbnN0IGVhcmx5Q2xlYW5LZXkgPSBTdHJpbmcoZWFybHlVbmlxdWVJZCB8fCBcIlwiKVxuICAgICAgICAucmVwbGFjZSgvW3t9XS9nLCBcIlwiKVxuICAgICAgICAudHJpbSgpO1xuICAgICAgY29uc3QgYWN0aXZlS2V5ID0gU3RyaW5nKHRoaXMuX2FjdGl2ZUluc3BlY3RlZFVuaXF1ZWlkIHx8IFwiXCIpXG4gICAgICAgIC5yZXBsYWNlKC9be31dL2csIFwiXCIpXG4gICAgICAgIC50cmltKCk7XG4gICAgICAvKlxuICAgICAgICogU2FtZSBhbHJlYWR5LWFjdGl2ZSBmaWVsZCAoaW5jbC4gdGFibGUgc2VsZWN0aW9uKSBjbGlja2VkIG9uIG1hcCDihpJcbiAgICAgICAqIGRlYWN0aXZhdGUgd2l0aG91dCB6b29taW5nIGluIGFnYWluLiBHcmFmZiByZXN0b3JlcyB0aGUgcHJlLXNlbGVjdCBleHRlbnQuXG4gICAgICAgKiBJZiB0aGUgcGFuZWwgd2FzIG9ubHkgbWluaW1pemVkLCBleHBhbmQgaXQgaW5zdGVhZCBvZiBkZXNlbGVjdGluZy5cbiAgICAgICAqL1xuICAgICAgaWYgKGFjdGl2ZUtleSAmJiBlYXJseUNsZWFuS2V5ICYmIGFjdGl2ZUtleSA9PT0gZWFybHlDbGVhbktleSkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5wb3B1cE1pbmltaXplZCkge1xuICAgICAgICAgIGFncmlNYXBDbGlja0RlYnVnKFwic2VsZWN0aW9uOmV4cGFuZC1taW5pbWl6ZWQtc2FtZS1maWVsZFwiLCB7XG4gICAgICAgICAgICB1bmlxdWVpZDogZWFybHlDbGVhbktleSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmV4cGFuZFBvcHVwKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGFncmlNYXBDbGlja0RlYnVnKFwic2VsZWN0aW9uOnRvZ2dsZS1vZmYtc2FtZS1maWVsZFwiLCB7XG4gICAgICAgICAgdW5pcXVlaWQ6IGVhcmx5Q2xlYW5LZXksXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNsZWFySGlnaGxpZ2h0KCk7XG4gICAgICAgIHRoaXMuX2FjdGl2ZUluc3BlY3RlZFVuaXF1ZWlkID0gbnVsbDtcbiAgICAgICAgdGhpcy5jbG9zZVBvcHVwKHsgcmVzdG9yZUV4dGVudDogdHJ1ZSwgbm90aWZ5RGVzZWxlY3Q6IHRydWUgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gS2ljayBHcmFmZiBvdmVybGF5ICsgem9vbSBCRUZPUkUgQWdyaV90YWJsZSBqb2luIOKAlCB0aGF0IGpvaW4gdXNlZCB0b1xuICAgICAgLy8gc2l0IG9uIHRoZSBjcml0aWNhbCBwYXRoICh+c2Vjb25kcykgd2hpbGUgdGhlIGluZGV4IFRJRkYgd2FpdGVkLlxuICAgICAgaWYgKGVhcmx5VW5pcXVlSWQgIT0gbnVsbCAmJiBTdHJpbmcoZWFybHlVbmlxdWVJZCkudHJpbSgpICE9PSBcIlwiKSB7XG4gICAgICAgIGNvbnN0IGVhcmx5Tm90aWZ5SWQgPSBTdHJpbmcoZWFybHlVbmlxdWVJZCkudHJpbSgpO1xuICAgICAgICB0aGlzLl9hY3RpdmVJbnNwZWN0ZWRVbmlxdWVpZCA9IGVhcmx5Q2xlYW5LZXk7XG4gICAgICAgIGFncmlNYXBDbGlja0RlYnVnKFwic2VsZWN0aW9uOmJyb2FkY2FzdC1lYXJseVwiLCB7XG4gICAgICAgICAgdW5pcXVlaWQ6IGVhcmx5Tm90aWZ5SWQsXG4gICAgICAgICAgc291cmNlOiBcIkFncmlQb3B1cFwiLFxuICAgICAgICAgIHBvbHlnb25Nb2RlOiB0cnVlLFxuICAgICAgICAgIGRlc3RpbmF0aW9uczogW1wiQWdyaUxvY2FsaXphdGlvblwiLCBcIkFncmlHcmFmZjEwXCJdLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ub3RpZnlHcmFmZlBvbHlnb25TZWxlY3Rpb24oZWFybHlOb3RpZnlJZCwgdHJ1ZSwgY2xpY2tTdGFydGVkQXQpO1xuICAgICAgICAvLyBXYXJtIFRJRkYgY2FjaGUgaW1tZWRpYXRlbHkgKHNhbWUgdGljayBhcyBjbGljaykg4oCUIHVzZXMgbGFzdFxuICAgICAgICAvLyByZWdpb24veWVhci9kYXRlIHB1Ymxpc2hlZCBieSBHcmFmZiwgb3IgYXZhaWxhYmxlLWRhdGVzIGlmIG5lZWRlZC5cbiAgICAgICAgcHJlZmV0Y2hWZWdldGF0aW9uT3ZlcmxheUZvclVuaXF1ZWlkKGVhcmx5Tm90aWZ5SWQpO1xuICAgICAgICAvLyBEZWZlciBGZWF0dXJlU2VydmVyIHNlcmllcyBzbyBleHBvcnQtaW1hZ2UgZ2V0cyBiYW5kd2lkdGggZmlyc3QuXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMuX2lzTW91bnRlZCkgcmV0dXJuO1xuICAgICAgICAgIGNvbnN0IGFjdGl2ZSA9IFN0cmluZyh0aGlzLl9hY3RpdmVJbnNwZWN0ZWRVbmlxdWVpZCB8fCBcIlwiKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1t7fV0vZywgXCJcIilcbiAgICAgICAgICAgIC50cmltKCk7XG4gICAgICAgICAgaWYgKGFjdGl2ZSAhPT0gZWFybHlDbGVhbktleSkgcmV0dXJuO1xuICAgICAgICAgIHZvaWQgdGhpcy5mZXRjaExhdGVzdFZlZ2V0YXRpb25JbmRpY2VzKGVhcmx5Tm90aWZ5SWQpO1xuICAgICAgICB9LCA2NTApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB6b29tVG9FYXJseSA9IHRoaXMucHJvcHMuY29uZmlnPy5zZXR0aW5ncz8uem9vbVRvU2VsZWN0aW9uICE9PSBmYWxzZTtcbiAgICAgIGlmICh6b29tVG9FYXJseSAmJiBmLmdlb21ldHJ5ICYmICFpc1N0YWxlKCkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIXRoaXMuX2V4dGVudEJlZm9yZVNlbGVjdGlvbiAmJiB2aWV3LmV4dGVudD8uY2xvbmUpIHtcbiAgICAgICAgICAgIHRoaXMuX2V4dGVudEJlZm9yZVNlbGVjdGlvbiA9IHZpZXcuZXh0ZW50LmNsb25lKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHRhcmdldCA9XG4gICAgICAgICAgICAoZi5nZW9tZXRyeSBhcyBhbnkpLmV4dGVudD8uZXhwYW5kPy4oMS4wOCkgfHwgZi5nZW9tZXRyeTtcbiAgICAgICAgICBhZ3JpTWFwQ2xpY2tEZWJ1ZyhcInpvb206c3RhcnQtZWFybHlcIiwge1xuICAgICAgICAgICAgdW5pcXVlaWQ6IGVhcmx5Q2xlYW5LZXkgfHwgbnVsbCxcbiAgICAgICAgICAgIGdlb21ldHJ5VHlwZTogZi5nZW9tZXRyeS50eXBlLFxuICAgICAgICAgICAgZHVyYXRpb25NczogNjUwLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZvaWQgdmlld1xuICAgICAgICAgICAgLmdvVG8oeyB0YXJnZXQgfSwgeyBkdXJhdGlvbjogNjUwLCBlYXNpbmc6IFwiZWFzZS1pbi1vdXRcIiBhcyBhbnkgfSlcbiAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAoKSA9PlxuICAgICAgICAgICAgICAgIGFncmlNYXBDbGlja0RlYnVnKFwiem9vbTpjb21wbGV0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICB1bmlxdWVpZDogZWFybHlDbGVhbktleSB8fCBudWxsLFxuICAgICAgICAgICAgICAgICAgc2NhbGU6ICh2aWV3IGFzIGFueSkuc2NhbGUsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIChlcnJvcjogYW55KSA9PlxuICAgICAgICAgICAgICAgIGFncmlNYXBDbGlja1dhcm4oXCJ6b29tOmZhaWxlZFwiLCB7XG4gICAgICAgICAgICAgICAgICB1bmlxdWVpZDogZWFybHlDbGVhbktleSB8fCBudWxsLFxuICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yPy5tZXNzYWdlIHx8IFN0cmluZyhlcnJvciksXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAvKiBpZ25vcmUgKi9cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBsb2FkU3RhdHVzID0gU3RyaW5nKChjbGlja2VkTGF5ZXIgYXMgYW55KS5sb2FkU3RhdHVzIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGlzTG9hZGVkID0gQm9vbGVhbigoY2xpY2tlZExheWVyIGFzIGFueSkubG9hZGVkKSB8fCBsb2FkU3RhdHVzID09PSBcImxvYWRlZFwiO1xuICAgICAgICAvLyBMb2FkaW5nIGEgbGl2ZSBNYXBJbWFnZS1vd25lZCBzdWJsYXllciByZWh5ZHJhdGVzIGl0IGFuZCBjYW4gY2xlYXJcbiAgICAgICAgLy8gdGhlIHJ1bnRpbWUgdHVtYW4gZGVmaW5pdGlvbkV4cHJlc3Npb24gKG90aGVyLWRpc3RyaWN0IGZsYXNoKS4gVGhlXG4gICAgICAgIC8vIGRldGFjaGVkIGNsaWVudCBmcm9tIHF1ZXJ5RmVhdHVyZUJ5T2JqZWN0SWRDYWNoZWQgaXMgYWxyZWFkeSBsb2FkZWRcbiAgICAgICAgLy8gYW5kIHByb3ZpZGVzIHRoZSBzYW1lIGZpZWxkIG1ldGFkYXRhLlxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWlzTG9hZGVkICYmXG4gICAgICAgICAgIWlzTWFwSW1hZ2VPd25lZExheWVyKGNsaWNrZWRMYXllcikgJiZcbiAgICAgICAgICAhaXNNYXBJbWFnZUdyb3VwU3VibGF5ZXIoY2xpY2tlZExheWVyKVxuICAgICAgICApIHtcbiAgICAgICAgICBhZ3JpTWFwQ2xpY2tEZWJ1ZyhcImxheWVyOmxvYWQtcmVxdWlyZWRcIiwge1xuICAgICAgICAgICAgdGl0bGU6IGNsaWNrZWRMYXllci50aXRsZSxcbiAgICAgICAgICAgIGxvYWRTdGF0dXM6IGxvYWRTdGF0dXMgfHwgbnVsbCxcbiAgICAgICAgICAgIGRlZmluaXRpb25FeHByZXNzaW9uOlxuICAgICAgICAgICAgICAoY2xpY2tlZExheWVyIGFzIGFueSkuZGVmaW5pdGlvbkV4cHJlc3Npb24gfHwgbnVsbCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhd2FpdCBzYWZlTG9hZE1hcExheWVyKGNsaWNrZWRMYXllcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWdyaU1hcENsaWNrRGVidWcoXCJsYXllcjpsb2FkLXNraXAtYWxyZWFkeS1sb2FkZWRcIiwge1xuICAgICAgICAgICAgdGl0bGU6IGNsaWNrZWRMYXllci50aXRsZSxcbiAgICAgICAgICAgIGxvYWRTdGF0dXM6IGxvYWRTdGF0dXMgfHwgXCJsb2FkZWRcIixcbiAgICAgICAgICAgIGRlZmluaXRpb25FeHByZXNzaW9uOlxuICAgICAgICAgICAgICAoY2xpY2tlZExheWVyIGFzIGFueSkuZGVmaW5pdGlvbkV4cHJlc3Npb24gfHwgbnVsbCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8qIGZyZXNoIGZpZWxkIGFsaWFzZXMgZnJvbSBsaXZlIGxheWVyICovXG4gICAgICB9XG4gICAgICBpZiAoaXNTdGFsZSgpKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IHNob3VsZFBpbiA9IHRoaXMuc3RhdGUucGluVG9Db3JuZXI7XG4gICAgICBjb25zdCBwb3B1cFBvc2l0aW9uID0gc2hvdWxkUGluXG4gICAgICAgID8gdGhpcy5jYWxjdWxhdGVQaW5uZWRQb3NpdGlvbih2aWV3KVxuICAgICAgICA6IHRoaXMuY2FsY3VsYXRlUG9wdXBQb3NpdGlvbihjbGlja1NjcmVlblBvaW50LCB2aWV3KTtcblxuICAgICAgLy8gQWdyaV90YWJsZV9kYXRhIGhhcyBubyBnZW9tZXRyeSDigJQgdGhlIHBvbHlnb24gbGF5ZXIgb25seSBkcml2ZXNcbiAgICAgIC8vIG1hcC1jbGljay9oaWdobGlnaHQvem9vbTsgdGhlIGZpZWxkcyB0aGUgcG9wdXAgc2hvd3MgY29tZSBmcm9tIHRoZVxuICAgICAgLy8gZXh0ZXJuYWwgdGFibGUsIGpvaW5lZCBieSB1bmlxdWVpZC5cbiAgICAgIGNvbnN0IGRpc3BsYXlBdHRycyA9IGF3YWl0IHRoaXMucmVzb2x2ZURpc3BsYXlBdHRycyhmLmF0dHJpYnV0ZXMpO1xuICAgICAgaWYgKGlzU3RhbGUoKSkgcmV0dXJuO1xuXG4gICAgICBjb25zdCBjb25maWd1cmVkRmllbGRzID0gdGhpcy5wcm9wcy5jb25maWc/LmZpZWxkc1RvU2hvdyB8fCBbXTtcbiAgICAgIGNvbnN0IGFjdHVhbEZpZWxkcyA9IE9iamVjdC5rZXlzKGRpc3BsYXlBdHRycyk7XG4gICAgICBjb25zdCBtaXNzaW5nRmllbGRzID0gY29uZmlndXJlZEZpZWxkcy5maWx0ZXIoXG4gICAgICAgIChmaWVsZCkgPT4gIWFjdHVhbEZpZWxkcy5pbmNsdWRlcyhmaWVsZCksXG4gICAgICApO1xuICAgICAgY29uc3QgZmllbGRzV2l0aERhdGEgPSBjb25maWd1cmVkRmllbGRzLmZpbHRlcihcbiAgICAgICAgKG5hbWUpID0+XG4gICAgICAgICAgZGlzcGxheUF0dHJzLmhhc093blByb3BlcnR5KG5hbWUpICYmXG4gICAgICAgICAgZGlzcGxheUF0dHJzW25hbWVdICE9IG51bGwgJiZcbiAgICAgICAgICBkaXNwbGF5QXR0cnNbbmFtZV0gIT09IFwiXCIsXG4gICAgICApO1xuXG4gICAgICBhZ3JpTWFwQ2xpY2tEZWJ1ZyhcInBvcHVwIE9QRU5cIiwge1xuICAgICAgICBvaWQsXG4gICAgICAgIG9pZEZpZWxkLFxuICAgICAgICBsYXllcktleSxcbiAgICAgICAgYXR0cmlidXRlS2V5czogYWN0dWFsRmllbGRzLnNsaWNlKDAsIDEyKSxcbiAgICAgICAgcG9wdXBQb3NpdGlvbixcbiAgICAgIH0pO1xuXG4gICAgICAvLyBPcGVuIHRoZSBwb3B1cCBCRUZPUkUgZ29UbyDigJQgYXdhaXRpbmcgem9vbSBmaXJzdCBsZWZ0IGEgbG9uZyB3aW5kb3dcbiAgICAgIC8vIHdoZXJlIGEgdHdpbi9zaGFyZWQgY2xpY2sgcGF0aCBjb3VsZCBmYWlsIGFuZCB3aXBlIHNob3dQb3B1cC5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcblxuICAgICAgICAvLyDinIUgc3RvcmUgd2hpY2ggbGF5ZXIvZHMgd2FzIGNsaWNrZWQgKGZvciBhbGlhcyByZXNvbHZpbmcpXG4gICAgICAgIGxhc3RDbGlja2VkRHNJZDogZHNJZCxcbiAgICAgICAgbGFzdENsaWNrZWRMYXllcktleTogbGF5ZXJLZXksXG5cbiAgICAgICAgc2VsZWN0ZWRBdHRyczogZGlzcGxheUF0dHJzLFxuICAgICAgICBzZWxlY3RlZE9JRDogTnVtYmVyKG9pZCksXG4gICAgICAgIG9iamVjdElkRmllbGQ6IG9pZEZpZWxkLFxuXG4gICAgICAgIHNob3dQb3B1cDogdHJ1ZSxcbiAgICAgICAgcG9wdXBNaW5pbWl6ZWQ6IGZhbHNlLFxuICAgICAgICBjaGFydEV4cGFuZGVkOiBzaG91bGRQaW4sXG4gICAgICAgIGNoYXJ0SG92ZXJJbmRleDogbnVsbCxcbiAgICAgICAgcG9wdXBQb3NpdGlvbixcbiAgICAgICAgZXJyb3I6XG4gICAgICAgICAgbWlzc2luZ0ZpZWxkcy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IHRoaXMudHIoXCJlcnJvci5jb25maWd1cmVkRmllbGRNaXNzaW5nXCIsIHtcbiAgICAgICAgICAgICAgICBmaWVsZHM6IG1pc3NpbmdGaWVsZHMuam9pbihcIiwgXCIpLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBmaWVsZHNXaXRoRGF0YS5sZW5ndGggPT09IDAgJiYgY29uZmlndXJlZEZpZWxkcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgID8gdGhpcy50cihcImVycm9yLm5vRGF0YUZvckNvbmZpZ3VyZWRGaWVsZHNcIilcbiAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgfSk7XG4gICAgICBwb3B1cE9wZW5lZEZvclRoaXNDbGljayA9IHRydWU7XG5cbiAgICAgIGNvbnN0IGNsaWNrZWRVbmlxdWVJZCA9XG4gICAgICAgIHRoaXMuZmluZEF0dHJpYnV0ZVZhbHVlQ2FzZUluc2Vuc2l0aXZlKFxuICAgICAgICAgIGRpc3BsYXlBdHRycyxcbiAgICAgICAgICBBR1JJX1RBQkxFX0pPSU5fRklFTEQsXG4gICAgICAgICkgPz9cbiAgICAgICAgdGhpcy5maW5kQXR0cmlidXRlVmFsdWVDYXNlSW5zZW5zaXRpdmUoXG4gICAgICAgICAgZi5hdHRyaWJ1dGVzIGFzIFJlY29yZDxzdHJpbmcsIGFueT4sXG4gICAgICAgICAgQUdSSV9UQUJMRV9KT0lOX0ZJRUxELFxuICAgICAgICApO1xuICAgICAgaWYgKGNsaWNrZWRVbmlxdWVJZCAhPSBudWxsICYmIFN0cmluZyhjbGlja2VkVW5pcXVlSWQpLnRyaW0oKSAhPT0gXCJcIikge1xuICAgICAgICBjb25zdCBjbGVhblVuaXF1ZUlkID0gU3RyaW5nKGNsaWNrZWRVbmlxdWVJZCkudHJpbSgpO1xuICAgICAgICB0aGlzLl9hY3RpdmVJbnNwZWN0ZWRVbmlxdWVpZCA9IGNsZWFuVW5pcXVlSWQucmVwbGFjZSgvW3t9XS9nLCBcIlwiKS50cmltKCk7XG4gICAgICAgIC8vIEVhcmx5IGJyb2FkY2FzdCBhbHJlYWR5IHJhbiB3aGVuIHBvbHlnb24gYXR0cnMgaGFkIHVuaXF1ZWlkOyBvbmx5XG4gICAgICAgIC8vIG5vdGlmeSBhZ2FpbiBpZiB0aGUgdGFibGUgam9pbiBpcyB0aGUgZmlyc3QgcGxhY2Ugd2Ugc2F3IGl0LlxuICAgICAgICBpZiAoIWVhcmx5Q2xlYW5LZXkgfHwgZWFybHlDbGVhbktleSAhPT0gdGhpcy5fYWN0aXZlSW5zcGVjdGVkVW5pcXVlaWQpIHtcbiAgICAgICAgICBhZ3JpTWFwQ2xpY2tEZWJ1ZyhcInNlbGVjdGlvbjpicm9hZGNhc3RcIiwge1xuICAgICAgICAgICAgdW5pcXVlaWQ6IGNsZWFuVW5pcXVlSWQsXG4gICAgICAgICAgICBzb3VyY2U6IFwiQWdyaVBvcHVwXCIsXG4gICAgICAgICAgICBwb2x5Z29uTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uczogW1wiQWdyaUxvY2FsaXphdGlvblwiLCBcIkFncmlHcmFmZjEwXCJdLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMubm90aWZ5R3JhZmZQb2x5Z29uU2VsZWN0aW9uKGNsZWFuVW5pcXVlSWQsIHRydWUsIGNsaWNrU3RhcnRlZEF0KTtcbiAgICAgICAgICB2b2lkIHRoaXMuZmV0Y2hMYXRlc3RWZWdldGF0aW9uSW5kaWNlcyhjbGVhblVuaXF1ZUlkKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbG9hZGluZ0xhdGVzdEluZGljZXM6IGZhbHNlLFxuICAgICAgICAgIGxhdGVzdEluZGV4RGF0ZTogbnVsbCxcbiAgICAgICAgICBsYXRlc3RJbmRleFZhbHVlczogbnVsbCxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFpvb20gYWxyZWFkeSBzdGFydGVkIGVhcmx5IChiZWZvcmUgQWdyaV90YWJsZSBqb2luKSB3aGVuIGdlb21ldHJ5IGV4aXN0cy5cblxuICAgICAgLy8gQXR0YWNobWVudHMgYXJlIGJlc3QtZWZmb3J0IOKAlCBuZXZlciBsZXQgYSBtZWRpYSBmZXRjaCB3aXBlIGFuIG9wZW4gcG9wdXBcbiAgICAgIC8vICh0aGF0IHdhcyB0aGUgXCJ2ZWdldGF0aW9uIHVwZGF0ZXMgYnV0IHBvcHVwIG9ubHkgc3RpY2tzIG9uIDJuZC8zcmQgY2xpY2tcIlxuICAgICAgLy8gZmFpbHVyZTogbm90aWZ5R3JhZmYgcmFuLCB0aGVuIGxvYWRBdHRhY2htZW50cyB0aHJldyDihpIgY2F0Y2ggY2xvc2VkIFVJXG4gICAgICAvLyBhbmQgcmVzdG9yZUV4dGVudEJlZm9yZVNlbGVjdGlvbiBtYWRlIHRoZSBtYXAgbG9vayBsaWtlIG90aGVyIGZpZWxkcykuXG4gICAgICBpZiAodGhpcy5wcm9wcy5jb25maWc/LnNldHRpbmdzPy5zaG93QXR0YWNobWVudHMgIT09IGZhbHNlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gUXVlcnkgYXR0YWNobWVudHMgb24gdGhlIGRldGFjaGVkIGNsaWVudCB0b28g4oCUIHF1ZXJ5QXR0YWNobWVudHNcbiAgICAgICAgICAvLyBvbiBhIGxpdmUgTWFwSW1hZ2Ugc3VibGF5ZXIgY2FuIHJlaHlkcmF0ZSBpdCAoc2FtZSBERS1jbGVhcmluZ1xuICAgICAgICAgIC8vIHBhdGggYXMgcXVlcnlGZWF0dXJlcykgYW5kIGl0IG9mdGVuIGxhY2tzIHRoZSBBUEkgYW55d2F5LlxuICAgICAgICAgIGNvbnN0IGNsaWNrZWRVcmwgPSBTdHJpbmcoKGNsaWNrZWRMYXllciBhcyBhbnkpLnVybCB8fCBcIlwiKS50cmltKCk7XG4gICAgICAgICAgY29uc3QgYXR0YWNobWVudExheWVyID1cbiAgICAgICAgICAgIChjbGlja2VkVXJsICYmIHRoaXMuX3F1ZXJ5T25seUxheWVycy5nZXQoY2xpY2tlZFVybCkpIHx8XG4gICAgICAgICAgICBjbGlja2VkTGF5ZXI7XG4gICAgICAgICAgYXdhaXQgdGhpcy5sb2FkQXR0YWNobWVudHNGb3JPaWQoYXR0YWNobWVudExheWVyIGFzIGFueSwgTnVtYmVyKG9pZCkpO1xuICAgICAgICB9IGNhdGNoIChhdHRhY2hFcnI6IGFueSkge1xuICAgICAgICAgIGFncmlNYXBDbGlja1dhcm4oXCJhdHRhY2htZW50cyBmYWlsZWQgKHBvcHVwIGtlcHQgb3BlbilcIiwge1xuICAgICAgICAgICAgbWVzc2FnZTogYXR0YWNoRXJyPy5tZXNzYWdlIHx8IFN0cmluZyhhdHRhY2hFcnIpLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmICghaXNTdGFsZSgpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZ0F0dGFjaG1lbnRzOiBmYWxzZSwgYXR0YWNobWVudHM6IFtdIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghaXNTdGFsZSgpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nQXR0YWNobWVudHM6IGZhbHNlLCBhdHRhY2htZW50czogW10gfSk7XG4gICAgICB9XG4gICAgICBpZiAoaXNTdGFsZSgpKSByZXR1cm47XG5cbiAgICAgIGlmICh0aGlzLnN0YXRlLnBpblRvQ29ybmVyKSB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVQb3B1cExheW91dEFmdGVyQ29udGVudCgpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRGFzaGJvYXJkRW1iZWRkZWQoKSkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlUG9wdXBMYXlvdXRBZnRlckNvbnRlbnQoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgIC8vIE5ldmVyIGxldCBhIHN1cGVyc2VkZWQgdHdpbi9zaGFyZWQgY2xpY2sgY2xlYXIgYSBuZXdlciBwb3B1cC5cbiAgICAgIGlmIChpc1N0YWxlKCkpIHJldHVybjtcbiAgICAgIC8vIElmIHdlIGFscmVhZHkgb3BlbmVkIHRoZSBwb3B1cCBmb3IgVEhJUyBjbGljaywga2VlcCBpdCDigJQgc3VyZmFjZSBlcnJvciBvbmx5LlxuICAgICAgaWYgKHBvcHVwT3BlbmVkRm9yVGhpc0NsaWNrKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiB0aGlzLnRyKFwiZXJyb3IudW5leHBlY3RlZFwiLCB7XG4gICAgICAgICAgICBtZXNzYWdlOiBlPy5tZXNzYWdlIHx8IFwiVW5rbm93biBlcnJvclwiLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGxvYWRpbmdBdHRhY2htZW50czogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGVycm9yOiB0aGlzLnRyKFwiZXJyb3IudW5leHBlY3RlZFwiLCB7XG4gICAgICAgICAgbWVzc2FnZTogZT8ubWVzc2FnZSB8fCBcIlVua25vd24gZXJyb3JcIixcbiAgICAgICAgfSksXG4gICAgICAgIHNob3dQb3B1cDogZmFsc2UsXG4gICAgICAgIGxvYWRpbmdBdHRhY2htZW50czogZmFsc2UsXG4gICAgICAgIGF0dGFjaG1lbnRzOiBbXSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jbGVhckhpZ2hsaWdodCgpO1xuICAgICAgdGhpcy5ub3RpZnlHcmFmZlBvbHlnb25TZWxlY3Rpb24oXCJcIiwgZmFsc2UpO1xuICAgICAgdGhpcy5yZXN0b3JlRXh0ZW50QmVmb3JlU2VsZWN0aW9uKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0gQXR0YWNobWVudHMgaGVscGVycyAtLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgcHJpdmF0ZSBhc3luYyBmZXRjaEF0dGFjaG1lbnRQcmV2aWV3KHVybDogc3RyaW5nKTogUHJvbWlzZTxCbG9iPiB7XG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGVzcmlSZXF1ZXN0KHVybCwge1xuICAgICAgcmVzcG9uc2VUeXBlOiBcImJsb2JcIixcbiAgICAgIHF1ZXJ5OiB7fSxcbiAgICB9IGFzIGFueSk7XG4gICAgcmV0dXJuIHJlc3A/LmRhdGEgaW5zdGFuY2VvZiBCbG9iID8gcmVzcC5kYXRhIDogKHJlc3AgYXMgdW5rbm93biBhcyBCbG9iKTtcbiAgfVxuXG4gIHByaXZhdGUgcmV2b2tlQWxsQXR0YWNobWVudFVybHMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGF0dHMgPSB0aGlzLnN0YXRlLmF0dGFjaG1lbnRzIHx8IFtdO1xuICAgICAgYXR0cy5mb3JFYWNoKChhKSA9PiB7XG4gICAgICAgIGlmIChhLnByZXZpZXdPYmplY3RVcmwpIFVSTC5yZXZva2VPYmplY3RVUkwoYS5wcmV2aWV3T2JqZWN0VXJsKTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2gge31cbiAgfVxuXG4gIHByaXZhdGUgaXNJbWFnZUNvbnRlbnRUeXBlKGN0Pzogc3RyaW5nKSB7XG4gICAgaWYgKCFjdCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiAvXmltYWdlXFwvL2kudGVzdChjdCk7XG4gIH1cblxuICBwcml2YXRlIGJ5dGVzVG9TaXplKG4/OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmICghbiAmJiBuICE9PSAwKSByZXR1cm4gXCJcIjtcbiAgICBpZiAobiA9PT0gMCkgcmV0dXJuIFwiMCBCXCI7XG4gICAgY29uc3QgayA9IDEwMjQsXG4gICAgICBzaXplcyA9IFtcIkJcIiwgXCJLQlwiLCBcIk1CXCIsIFwiR0JcIiwgXCJUQlwiXTtcbiAgICBjb25zdCBpID0gTWF0aC5mbG9vcihNYXRoLmxvZyhuKSAvIE1hdGgubG9nKGspKTtcbiAgICByZXR1cm4gYCR7KG4gLyBNYXRoLnBvdyhrLCBpKSkudG9GaXhlZCgyKX0gJHtzaXplc1tpXX1gO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBsb2FkQXR0YWNobWVudHNGb3JPaWQobGF5ZXI6IEZlYXR1cmVMYXllciwgb2lkOiBudW1iZXIpIHtcbiAgICAvLyDinIUgSWYgbGF5ZXIgZG9lc27igJl0IHN1cHBvcnQgYXR0YWNobWVudHMgLT4gc2lsZW50bHkgc2hvdyBub25lIChOTyB3YXJuaW5nKVxuICAgIGlmICghdGhpcy5sYXllclN1cHBvcnRzQXR0YWNobWVudHMobGF5ZXIpKSB7XG4gICAgICBpZiAoIXRoaXMuX2lzTW91bnRlZCkgcmV0dXJuO1xuICAgICAgdGhpcy5yZXZva2VBbGxBdHRhY2htZW50VXJscygpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxvYWRpbmdBdHRhY2htZW50czogZmFsc2UsXG4gICAgICAgIGF0dGFjaG1lbnRzOiBbXSxcbiAgICAgICAgYXR0YWNobWVudHNFcnJvcjogbnVsbCxcbiAgICAgICAgYXR0YWNobWVudHNFeHBhbmRlZDogdHJ1ZSwgLy8ga2VlcCBhcmVhIHZpc2libGUgaWYgeW91IHdhbnQgXCJObyBhdHRhY2htZW50c1wiXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5yZXZva2VBbGxBdHRhY2htZW50VXJscygpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxvYWRpbmdBdHRhY2htZW50czogdHJ1ZSxcbiAgICAgICAgYXR0YWNobWVudHM6IFtdLFxuICAgICAgICBhdHRhY2htZW50c0Vycm9yOiBudWxsLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGxheWVyLnF1ZXJ5QXR0YWNobWVudHMoeyBvYmplY3RJZHM6IFtvaWRdIH0pO1xuICAgICAgY29uc3QgbGlzdCA9IChyZXN1bHQ/LltvaWRdIHx8IFtdKSBhcyBhbnlbXTtcblxuICAgICAgY29uc3QgaXRlbXM6IEF0dGFjaG1lbnRJdGVtW10gPSBsaXN0Lm1hcCgoYXR0KSA9PiAoe1xuICAgICAgICBpZDogYXR0LmlkLFxuICAgICAgICBuYW1lOiBhdHQubmFtZSxcbiAgICAgICAgc2l6ZTogYXR0LnNpemUsXG4gICAgICAgIGNvbnRlbnRUeXBlOiBhdHQuY29udGVudFR5cGUsXG4gICAgICAgIHVybDogYXR0LnVybCxcbiAgICAgIH0pKTtcblxuICAgICAgY29uc3Qgd2l0aFByZXZpZXdzOiBBdHRhY2htZW50SXRlbVtdID0gW107XG4gICAgICBmb3IgKGNvbnN0IGl0IG9mIGl0ZW1zKSB7XG4gICAgICAgIGlmIChpdC51cmwgJiYgdGhpcy5pc0ltYWdlQ29udGVudFR5cGUoaXQuY29udGVudFR5cGUpKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCB0aGlzLmZldGNoQXR0YWNobWVudFByZXZpZXcoaXQudXJsKTtcbiAgICAgICAgICAgIGl0LnByZXZpZXdPYmplY3RVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgLy8gaWdub3JlIHByZXZpZXcgZmFpbHVyZXNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2l0aFByZXZpZXdzLnB1c2goaXQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuX2lzTW91bnRlZCkgcmV0dXJuO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGF0dGFjaG1lbnRzOiB3aXRoUHJldmlld3MsXG4gICAgICAgIGxvYWRpbmdBdHRhY2htZW50czogZmFsc2UsXG4gICAgICAgIGF0dGFjaG1lbnRzRXJyb3I6IG51bGwsXG4gICAgICAgIGF0dGFjaG1lbnRzRXhwYW5kZWQ6IHRydWUsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgLy8g4pyFIElmIHNlcnZlciBzYXlzIGF0dGFjaG1lbnRzIG5vdCBzdXBwb3J0ZWQvZW5hYmxlZCAtPiBTSUxFTlQgKG5vIHJlZCB3YXJuaW5nKVxuICAgICAgY29uc3QgbXNnID0gU3RyaW5nKGVycj8ubWVzc2FnZSB8fCBlcnIgfHwgXCJcIikudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNvbnN0IGlzTm90U3VwcG9ydGVkID1cbiAgICAgICAgbXNnLmluY2x1ZGVzKFwiZG9lc24ndCBzdXBwb3J0IGF0dGFjaG1lbnRzXCIpIHx8XG4gICAgICAgIG1zZy5pbmNsdWRlcyhcImRvZXMgbm90IHN1cHBvcnQgYXR0YWNobWVudHNcIikgfHxcbiAgICAgICAgbXNnLmluY2x1ZGVzKFwiYXR0YWNobWVudHMgYXJlIG5vdCBlbmFibGVkXCIpIHx8XG4gICAgICAgIG1zZy5pbmNsdWRlcyhcImF0dGFjaG1lbnRzIGRpc2FibGVkXCIpIHx8XG4gICAgICAgIChtc2cuaW5jbHVkZXMoXCJub3Qgc3VwcG9ydGVkXCIpICYmIG1zZy5pbmNsdWRlcyhcImF0dGFjaG1lbnRcIikpO1xuXG4gICAgICBpZiAoIXRoaXMuX2lzTW91bnRlZCkgcmV0dXJuO1xuXG4gICAgICBpZiAoaXNOb3RTdXBwb3J0ZWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbG9hZGluZ0F0dGFjaG1lbnRzOiBmYWxzZSxcbiAgICAgICAgICBhdHRhY2htZW50czogW10sXG4gICAgICAgICAgYXR0YWNobWVudHNFcnJvcjogbnVsbCxcbiAgICAgICAgICBhdHRhY2htZW50c0V4cGFuZGVkOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbG9hZGluZ0F0dGFjaG1lbnRzOiBmYWxzZSxcbiAgICAgICAgYXR0YWNobWVudHM6IFtdLFxuICAgICAgICBhdHRhY2htZW50c0Vycm9yOiBTdHJpbmcoZXJyPy5tZXNzYWdlIHx8IGVyciB8fCBcIkF0dGFjaG1lbnRzIGZhaWxlZFwiKSxcbiAgICAgICAgYXR0YWNobWVudHNFeHBhbmRlZDogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0gRmllbGQgYWxpYXMgKyBmb3JtYXR0aW5nIC0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICBwcml2YXRlIGlzRGF0ZUZpZWxkKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIC8vIFVzZSB0aGUgY2xpY2tlZCBsYXllciBpZiBwb3NzaWJsZVxuICAgIGNvbnN0IGNsaWNrZWRMYXllciA9IHRoaXMuZ2V0Q2xpY2tlZExheWVyKCk7XG4gICAgY29uc3QgZmxkID0gY2xpY2tlZExheWVyPy5maWVsZHM/LmZpbmQoKGZmOiBhbnkpID0+IGZmLm5hbWUgPT09IG5hbWUpO1xuICAgIHJldHVybiBpc0VzcmlEYXRlRmllbGRUeXBlKChmbGQgYXMgYW55KT8udHlwZSk7XG4gIH1cblxuICBwcml2YXRlIGdldENsaWNrZWRMYXllcigpOiBfX2VzcmkuRmVhdHVyZUxheWVyIHwgbnVsbCB7XG4gICAgY29uc3Qga2V5ID0gdGhpcy5zdGF0ZS5sYXN0Q2xpY2tlZExheWVyS2V5O1xuICAgIGlmICgha2V5KSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXJzLmZpbmQoXG4gICAgICAgIChMKSA9PlxuICAgICAgICAgIGdldEFncmlMYXllck1hcEtleShMKSA9PT0ga2V5IHx8XG4gICAgICAgICAgU3RyaW5nKEwudXJsIHx8IEwuaWQgfHwgXCJcIikgPT09IGtleSxcbiAgICAgICkgfHwgbnVsbFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVGaWVsZE5hbWUgPSAoa2V5OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsID0+IHtcbiAgICAvLyBQcmVmZXIgRFMgc2NoZW1hIGZvciB0aGUgTEFTVCBjbGlja2VkIGRzIChiZXN0IGZvciBhbGlhcy9qaW11TmFtZSlcbiAgICBjb25zdCBkc0lkID0gdGhpcy5zdGF0ZS5sYXN0Q2xpY2tlZERzSWQ7XG4gICAgY29uc3QgZHM6IGFueSA9XG4gICAgICBkc0lkICYmIHRoaXMuc3RhdGUuZGF0YVNvdXJjZXNCeUlkPy5bZHNJZF1cbiAgICAgICAgPyB0aGlzLnN0YXRlLmRhdGFTb3VyY2VzQnlJZFtkc0lkXVxuICAgICAgICA6IG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2NoZW1hID0gZHM/LmdldFNjaGVtYT8uKCk7XG4gICAgICBjb25zdCBmaWVsZHNPYmogPSBzY2hlbWE/LmZpZWxkcyB8fCB7fTtcbiAgICAgIGlmIChmaWVsZHNPYmpba2V5XT8ubmFtZSkgcmV0dXJuIGZpZWxkc09ialtrZXldLm5hbWU7XG4gICAgICBmb3IgKGNvbnN0IGsgb2YgT2JqZWN0LmtleXMoZmllbGRzT2JqKSkge1xuICAgICAgICBjb25zdCBmID0gKGZpZWxkc09iaiBhcyBhbnkpW2tdO1xuICAgICAgICBpZiAoZj8ubmFtZSA9PT0ga2V5IHx8IGY/LmppbXVOYW1lID09PSBrZXkgfHwgayA9PT0ga2V5KVxuICAgICAgICAgIHJldHVybiBmPy5uYW1lIHx8IGtleTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIHt9XG5cbiAgICAvLyBmYWxsYmFjayB0byBjbGlja2VkIGxheWVyIGZpZWxkc1xuICAgIGNvbnN0IGNsaWNrZWRMYXllciA9IHRoaXMuZ2V0Q2xpY2tlZExheWVyKCk7XG4gICAgY29uc3QgbGYgPSBjbGlja2VkTGF5ZXI/LmZpZWxkcz8uZmluZChcbiAgICAgIChmZjogYW55KSA9PiBmZi5uYW1lID09PSBrZXkgfHwgZmYuYWxpYXMgPT09IGtleSxcbiAgICApO1xuICAgIHJldHVybiBsZj8ubmFtZSB8fCBudWxsO1xuICB9O1xuXG4gIHByaXZhdGUgbm9ybWFsaXplRmllbGRBbGlhcyhmaWVsZDogYW55LCBmYWxsYmFja05hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZUZpZWxkQWxpYXNTaGFyZWQoZmllbGQsIGZhbGxiYWNrTmFtZSk7XG4gIH1cblxuICBwcml2YXRlIGZpbmRGaWVsZE1ldGFPbkxheWVyKFxuICAgIGxheWVyOiBhbnksXG4gICAgZmllbGROYW1lOiBzdHJpbmcsXG4gICk6IF9fZXNyaS5GaWVsZCB8IG51bGwge1xuICAgIGNvbnN0IHRhcmdldCA9IGZpZWxkTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IGZpZWxkcyA9IEFycmF5LmlzQXJyYXkobGF5ZXI/LmZpZWxkcykgPyBsYXllci5maWVsZHMgOiBbXTtcbiAgICByZXR1cm4gKFxuICAgICAgKGZpZWxkcy5maW5kKFxuICAgICAgICAoZjogYW55KSA9PiBTdHJpbmcoZj8ubmFtZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpID09PSB0YXJnZXQsXG4gICAgICApIGFzIF9fZXNyaS5GaWVsZCB8IHVuZGVmaW5lZCkgfHwgbnVsbFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVBbGlhc0Zyb21MaXZlTGF5ZXJzKGZpZWxkTmFtZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgY29uc3QgbGF5ZXJzOiBfX2VzcmkuRmVhdHVyZUxheWVyW10gPSBbXTtcbiAgICBjb25zdCBjbGlja2VkID0gdGhpcy5nZXRDbGlja2VkTGF5ZXIoKTtcbiAgICBpZiAoY2xpY2tlZCkgbGF5ZXJzLnB1c2goY2xpY2tlZCk7XG4gICAgZm9yIChjb25zdCBsYXllciBvZiB0aGlzLnN0YXRlLmZlYXR1cmVMYXllcnMgfHwgW10pIHtcbiAgICAgIGlmIChsYXllciAmJiAhbGF5ZXJzLmluY2x1ZGVzKGxheWVyKSkgbGF5ZXJzLnB1c2gobGF5ZXIpO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgbGF5ZXJzKSB7XG4gICAgICBjb25zdCBmbGQgPSB0aGlzLmZpbmRGaWVsZE1ldGFPbkxheWVyKGxheWVyLCBmaWVsZE5hbWUpO1xuICAgICAgaWYgKCFmbGQpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgYWxpYXMgPSB0aGlzLm5vcm1hbGl6ZUZpZWxkQWxpYXMoZmxkLCBmaWVsZE5hbWUpO1xuICAgICAgaWYgKGFsaWFzICYmIGFsaWFzLnRvTG93ZXJDYXNlKCkgIT09IGZpZWxkTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIHJldHVybiBhbGlhcztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVBbGlhc0Zyb21EYXRhU291cmNlU2NoZW1hKFxuICAgIGZpZWxkTmFtZTogc3RyaW5nLFxuICAgIGRzOiBhbnksXG4gICk6IHN0cmluZyB8IG51bGwge1xuICAgIGlmICghZHMpIHJldHVybiBudWxsO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBmaWVsZHNPYmogPSBkcz8uZ2V0U2NoZW1hPy4oKT8uZmllbGRzIHx8IHt9O1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZmllbGROYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhmaWVsZHNPYmopKSB7XG4gICAgICAgIGNvbnN0IGYgPSBmaWVsZHNPYmpba2V5XTtcbiAgICAgICAgY29uc3QgZm5hbWUgPSBTdHJpbmcoZj8ubmFtZSB8fCBmPy5qaW11TmFtZSB8fCBrZXkgfHwgXCJcIik7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBmbmFtZS50b0xvd2VyQ2FzZSgpICE9PSB0YXJnZXQgJiZcbiAgICAgICAgICBrZXkudG9Mb3dlckNhc2UoKSAhPT0gdGFyZ2V0ICYmXG4gICAgICAgICAgU3RyaW5nKGY/LmppbXVOYW1lIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCkgIT09IHRhcmdldFxuICAgICAgICApIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbGlhcyA9IHRoaXMubm9ybWFsaXplRmllbGRBbGlhcyhmLCBmaWVsZE5hbWUpO1xuICAgICAgICBpZiAoYWxpYXMgJiYgYWxpYXMudG9Mb3dlckNhc2UoKSAhPT0gZmllbGROYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICByZXR1cm4gYWxpYXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIHtcbiAgICAgIC8qIGlnbm9yZSAqL1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RmllbGRBbGlhcyhuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGN1c3RvbSA9IHRoaXMucHJvcHMuY29uZmlnPy5sYWJlbHM/LltuYW1lXTtcbiAgICBpZiAoY3VzdG9tKSByZXR1cm4gY3VzdG9tO1xuXG4gICAgY29uc3QgcmVhbE5hbWUgPSB0aGlzLnJlc29sdmVGaWVsZE5hbWUobmFtZSkgfHwgbmFtZTtcblxuICAgIC8vIExpdmUgbWFwIGxheWVyIGZpcnN0IOKAlCByZWZsZWN0cyBsYXRlc3QgQXJjR0lTIGZpZWxkIGRpc3BsYXkgbmFtZXNcbiAgICBjb25zdCBmcm9tTGF5ZXIgPSB0aGlzLnJlc29sdmVBbGlhc0Zyb21MaXZlTGF5ZXJzKHJlYWxOYW1lKTtcbiAgICBpZiAoZnJvbUxheWVyKSByZXR1cm4gZnJvbUxheWVyO1xuXG4gICAgY29uc3QgZHNJZCA9IHRoaXMuc3RhdGUubGFzdENsaWNrZWREc0lkO1xuICAgIGNvbnN0IGRzOiBhbnkgPVxuICAgICAgZHNJZCAmJiB0aGlzLnN0YXRlLmRhdGFTb3VyY2VzQnlJZD8uW2RzSWRdXG4gICAgICAgID8gdGhpcy5zdGF0ZS5kYXRhU291cmNlc0J5SWRbZHNJZF1cbiAgICAgICAgOiBudWxsO1xuICAgIGNvbnN0IGZyb21EcyA9IHRoaXMucmVzb2x2ZUFsaWFzRnJvbURhdGFTb3VyY2VTY2hlbWEocmVhbE5hbWUsIGRzKTtcbiAgICBpZiAoZnJvbURzKSByZXR1cm4gZnJvbURzO1xuXG4gICAgZm9yIChjb25zdCBsYXllckRzIG9mIE9iamVjdC52YWx1ZXModGhpcy5zdGF0ZS5kYXRhU291cmNlc0J5SWQgfHwge30pKSB7XG4gICAgICBjb25zdCBhbGlhcyA9IHRoaXMucmVzb2x2ZUFsaWFzRnJvbURhdGFTb3VyY2VTY2hlbWEocmVhbE5hbWUsIGxheWVyRHMpO1xuICAgICAgaWYgKGFsaWFzKSByZXR1cm4gYWxpYXM7XG4gICAgfVxuXG4gICAgY29uc3QgY2xpY2tlZExheWVyID0gdGhpcy5nZXRDbGlja2VkTGF5ZXIoKTtcbiAgICBjb25zdCBsYXllckZsZCA9IGNsaWNrZWRMYXllclxuICAgICAgPyB0aGlzLmZpbmRGaWVsZE1ldGFPbkxheWVyKGNsaWNrZWRMYXllciwgcmVhbE5hbWUpXG4gICAgICA6IG51bGw7XG4gICAgaWYgKGxheWVyRmxkPy5hbGlhcykgcmV0dXJuIFN0cmluZyhsYXllckZsZC5hbGlhcyk7XG5cbiAgICByZXR1cm4gcmVhbE5hbWU7XG4gIH1cblxuICBwcml2YXRlIGZvcm1hdERhdGVTbWFydChyYXc6IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGZvcm1hdERhdGVTbWFydFNoYXJlZChyYXcpO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRWYWx1ZShuYW1lOiBzdHJpbmcsIHJhdzogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gZm9ybWF0UG9wdXBBdHRyaWJ1dGVWYWx1ZShyYXcsIHtcbiAgICAgIGlzRGF0ZUZpZWxkOiB0aGlzLmlzRGF0ZUZpZWxkKG5hbWUpLFxuICAgICAgZm9ybWF0RGF0ZTogKHZhbHVlKSA9PiB0aGlzLmZvcm1hdERhdGVTbWFydCh2YWx1ZSksXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldE91dEZpZWxkcyhsYXllcjogRmVhdHVyZUxheWVyLCBvaWRGaWVsZDogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIC8vIGtlZXAgeW91ciBkZWJ1Z2dpbmcgYmVoYXZpb3JcbiAgICByZXR1cm4gW1wiKlwiXTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0gUG9wdXAgcG9zaXRpb25pbmcgLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gIHByaXZhdGUgY2FsY3VsYXRlUG9wdXBQb3NpdGlvbiA9IChcbiAgICBjbGlja1BvaW50OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sXG4gICAgdmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LFxuICApOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHZpZXcuY29udGFpbmVyIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IHJlY3QgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBjb25zdCBtYXJnaW4gPSB0aGlzLlBPUFVQX01BUkdJTjtcbiAgICBjb25zdCBwb3B1cFcgPSB0aGlzLmdldFBvcHVwV2lkdGgodmlldyk7XG4gICAgY29uc3QgcG9wdXBIID0gcG9wdXBXO1xuXG4gICAgLy8g4pyFIEVCIGJ1aWxkcyBkaWZmZXI6XG4gICAgLy8gLSBzb21lIGdpdmUgZXYueC9ldi55IHJlbGF0aXZlIHRvIGNvbnRhaW5lciAoMC4ucmVjdC53aWR0aClcbiAgICAvLyAtIG90aGVycyBnaXZlIHZpZXdwb3J0IGNvb3JkcyAoc2FtZSBzcGFjZSBhcyByZWN0LmxlZnQvdG9wKVxuICAgIGNvbnN0IGxvb2tzQ29udGFpbmVyUmVsYXRpdmUgPVxuICAgICAgY2xpY2tQb2ludC54ID49IDAgJiZcbiAgICAgIGNsaWNrUG9pbnQueSA+PSAwICYmXG4gICAgICBjbGlja1BvaW50LnggPD0gcmVjdC53aWR0aCArIDIgJiZcbiAgICAgIGNsaWNrUG9pbnQueSA8PSByZWN0LmhlaWdodCArIDI7XG5cbiAgICAvLyBDb252ZXJ0IGNsaWNrIHRvIFZJRVdQT1JUIGNvb3JkcyAoYmVjYXVzZSBwb3B1cCBpcyBwb3NpdGlvbjogZml4ZWQpXG4gICAgY29uc3Qgdmlld3BvcnRDbGlja1ggPSBsb29rc0NvbnRhaW5lclJlbGF0aXZlXG4gICAgICA/IHJlY3QubGVmdCArIGNsaWNrUG9pbnQueFxuICAgICAgOiBjbGlja1BvaW50Lng7XG4gICAgY29uc3Qgdmlld3BvcnRDbGlja1kgPSBsb29rc0NvbnRhaW5lclJlbGF0aXZlXG4gICAgICA/IHJlY3QudG9wICsgY2xpY2tQb2ludC55XG4gICAgICA6IGNsaWNrUG9pbnQueTtcblxuICAgIC8vIE1hcCBjb250YWluZXIgYm91bmRhcmllcyBpbiB2aWV3cG9ydCBjb29yZHNcbiAgICBjb25zdCBtYXBMZWZ0ID0gcmVjdC5sZWZ0O1xuICAgIGNvbnN0IG1hcFRvcCA9IHJlY3QudG9wO1xuICAgIGNvbnN0IG1hcFJpZ2h0ID0gcmVjdC5yaWdodDtcbiAgICBjb25zdCBtYXBCb3R0b20gPSB0aGlzLmdldEVmZmVjdGl2ZU1hcEJvdHRvbSh2aWV3LCBtYXJnaW4pO1xuXG4gICAgLy8gUHJlZmVyIGJvdHRvbS1yaWdodCBvZiBjbGlja1xuICAgIGxldCB4ID0gdmlld3BvcnRDbGlja1ggKyBtYXJnaW47XG4gICAgbGV0IHkgPSB2aWV3cG9ydENsaWNrWSArIG1hcmdpbjtcblxuICAgIC8vIEZsaXAgbGVmdCBpZiBvdmVyZmxvd2luZyByaWdodCBlZGdlIChDUklUSUNBTCEpXG4gICAgLy8gQ2hlY2sgaWYgcG9wdXAgd291bGQgZ28gb3V0c2lkZSBtYXAncyByaWdodCBib3VuZGFyeVxuICAgIGlmICh4ICsgcG9wdXBXID4gbWFwUmlnaHQgLSBtYXJnaW4pIHtcbiAgICAgIHggPSB2aWV3cG9ydENsaWNrWCAtIHBvcHVwVyAtIG1hcmdpbjtcbiAgICB9XG5cbiAgICAvLyBGbGlwIHVwIGlmIG92ZXJmbG93aW5nIGJvdHRvbSBlZGdlXG4gICAgaWYgKHkgKyBwb3B1cEggPiBtYXBCb3R0b20gLSBtYXJnaW4pIHtcbiAgICAgIHkgPSB2aWV3cG9ydENsaWNrWSAtIHBvcHVwSCAtIG1hcmdpbjtcbiAgICB9XG5cbiAgICAvLyBGaW5hbCBoYXJkIGNsYW1wIHRvIG1hcCBjb250YWluZXIgYm91bmRzXG4gICAgLy8gVGhpcyBpcyB0aGUgY3JpdGljYWwgcGFydCAtIGVuc3VyZSBwb3B1cCBORVZFUiBleGNlZWRzIG1hcCBib3VuZHNcbiAgICBjb25zdCBtaW5YID0gbWFwTGVmdCArIG1hcmdpbjtcbiAgICBjb25zdCBtYXhYID0gbWFwUmlnaHQgLSBwb3B1cFcgLSBtYXJnaW47XG4gICAgY29uc3QgbWluWSA9IG1hcFRvcCArIG1hcmdpbjtcbiAgICBjb25zdCBtYXhZID0gbWFwQm90dG9tIC0gcG9wdXBIIC0gbWFyZ2luO1xuXG4gICAgeCA9IE1hdGgubWF4KG1pblgsIE1hdGgubWluKHgsIG1heFgpKTtcbiAgICB5ID0gTWF0aC5tYXgobWluWSwgTWF0aC5taW4oeSwgbWF4WSkpO1xuXG4gICAgLy8gRklOQUwgU0FGRVRZIE5FVDogRW5zdXJlIHggbmV2ZXIgZXhjZWVkcyByaWdodCBib3VuZGFyeVxuICAgIGlmICh4ICsgcG9wdXBXID4gbWFwUmlnaHQgLSBtYXJnaW4pIHtcbiAgICAgIHggPSBtYXBSaWdodCAtIHBvcHVwVyAtIG1hcmdpbjtcbiAgICB9XG4gICAgLy8gQWxzbyBlbnN1cmUgeCA+PSBsZWZ0IGJvdW5kYXJ5XG4gICAgaWYgKHggPCBtYXBMZWZ0ICsgbWFyZ2luKSB7XG4gICAgICB4ID0gbWFwTGVmdCArIG1hcmdpbjtcbiAgICB9XG5cbiAgICByZXR1cm4geyB4LCB5IH07XG4gIH07XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKFxuICAgIHByZXZQcm9wczogUmVhZG9ubHk8QWxsV2lkZ2V0UHJvcHM8Q29uZmlnPj4sXG4gICAgcHJldlN0YXRlOiBSZWFkb25seTxTdGF0ZT4sXG4gICkge1xuICAgIGNvbnN0IHByZXZEcyA9IGdldFNlbGVjdGVkRHNJZHMocHJldlByb3BzLnVzZURhdGFTb3VyY2VzKS5qb2luKFwifFwiKTtcbiAgICBjb25zdCBuZXh0RHMgPSBnZXRTZWxlY3RlZERzSWRzKHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMpLmpvaW4oXCJ8XCIpO1xuICAgIGNvbnN0IGRzQ2hhbmdlZCA9IHByZXZEcyAhPT0gbmV4dERzO1xuICAgIGNvbnN0IHByZXZNYXAgPSBTdHJpbmcoXG4gICAgICAocHJldlByb3BzLnVzZU1hcFdpZGdldElkcyBhcyBhbnkpPy5bMF0gfHxcbiAgICAgICAgKHByZXZQcm9wcy51c2VNYXBXaWRnZXRJZHMgYXMgYW55KT8uZ2V0Py4oMCkgfHxcbiAgICAgICAgXCJcIixcbiAgICApO1xuICAgIGNvbnN0IG5leHRNYXAgPSBTdHJpbmcoXG4gICAgICAodGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMgYXMgYW55KT8uWzBdIHx8XG4gICAgICAgICh0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcyBhcyBhbnkpPy5nZXQ/LigwKSB8fFxuICAgICAgICBcIlwiLFxuICAgICk7XG4gICAgY29uc3QgbWFwQ2hhbmdlZCA9IHByZXZNYXAgIT09IG5leHRNYXA7XG4gICAgaWYgKChkc0NoYW5nZWQgfHwgbWFwQ2hhbmdlZCkgJiYgdGhpcy5zdGF0ZS5qaW11TWFwVmlldykge1xuICAgICAgdm9pZCB0aGlzLmluaXRpYWxpemVNYXBDb25uZWN0aW9uKHRoaXMuc3RhdGUuamltdU1hcFZpZXcpO1xuICAgIH0gZWxzZSBpZiAobWFwQ2hhbmdlZCkge1xuICAgICAgdGhpcy5zY2hlZHVsZU1hcFZpZXdGYWxsYmFjaygpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHByZXZTdGF0ZS5zaG93UG9wdXAgIT09IHRoaXMuc3RhdGUuc2hvd1BvcHVwIHx8XG4gICAgICBwcmV2U3RhdGUucG9wdXBNaW5pbWl6ZWQgIT09IHRoaXMuc3RhdGUucG9wdXBNaW5pbWl6ZWRcbiAgICApIHtcbiAgICAgIHRoaXMuYnJvYWRjYXN0UG9wdXBWaXNpYmlsaXR5KFxuICAgICAgICB0aGlzLnN0YXRlLnNob3dQb3B1cCAmJiAhdGhpcy5zdGF0ZS5wb3B1cE1pbmltaXplZCxcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHRoaXMuc3RhdGUuc2hvd1BvcHVwICYmXG4gICAgICAhdGhpcy5zdGF0ZS5wb3B1cE1pbmltaXplZCAmJlxuICAgICAgcHJldlN0YXRlLnBpblRvQ29ybmVyICE9PSB0aGlzLnN0YXRlLnBpblRvQ29ybmVyXG4gICAgKSB7XG4gICAgICB0aGlzLmJyb2FkY2FzdFBvcHVwVmlzaWJpbGl0eSh0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuc3RhdGUuc2hvd1BvcHVwIHx8IHRoaXMuc3RhdGUucG9wdXBNaW5pbWl6ZWQpIHJldHVybjtcblxuICAgIGNvbnN0IG9wZW5lZE5vdyA9XG4gICAgICAodGhpcy5zdGF0ZS5zaG93UG9wdXAgJiYgIXByZXZTdGF0ZS5zaG93UG9wdXApIHx8XG4gICAgICAocHJldlN0YXRlLnBvcHVwTWluaW1pemVkICYmICF0aGlzLnN0YXRlLnBvcHVwTWluaW1pemVkKTtcbiAgICBjb25zdCBhdHRhY2htZW50c0NoYW5nZWQgPVxuICAgICAgdGhpcy5zdGF0ZS5sb2FkaW5nQXR0YWNobWVudHMgIT09IHByZXZTdGF0ZS5sb2FkaW5nQXR0YWNobWVudHMgfHxcbiAgICAgICh0aGlzLnN0YXRlLmF0dGFjaG1lbnRzPy5sZW5ndGggfHwgMCkgIT09XG4gICAgICAgIChwcmV2U3RhdGUuYXR0YWNobWVudHM/Lmxlbmd0aCB8fCAwKTtcbiAgICBjb25zdCBsb2FkaW5nQ2hhbmdlZCA9IHRoaXMuc3RhdGUubG9hZGluZyAhPT0gcHJldlN0YXRlLmxvYWRpbmc7XG4gICAgY29uc3QgYXR0cnNDaGFuZ2VkID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEF0dHJzICE9PSBwcmV2U3RhdGUuc2VsZWN0ZWRBdHRycztcblxuICAgIGlmIChcbiAgICAgICFvcGVuZWROb3cgJiZcbiAgICAgICFhdHRhY2htZW50c0NoYW5nZWQgJiZcbiAgICAgICFsb2FkaW5nQ2hhbmdlZCAmJlxuICAgICAgIWF0dHJzQ2hhbmdlZFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2NoZWR1bGVQb3B1cExheW91dEFmdGVyQ29udGVudCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbG9zZVBvcHVwID0gKG9wdHM/OiB7XG4gICAgcmVzdG9yZUV4dGVudD86IGJvb2xlYW47XG4gICAgbm90aWZ5RGVzZWxlY3Q/OiBib29sZWFuO1xuICB9KSA9PiB7XG4gICAgLy8gQ2xvc2luZyB0aGUgcGFuZWwgYWxvbmUgbXVzdCBrZWVwIHRoZSBwb2x5Z29uIGhpZ2hsaWdodCArIG1hcCBleHRlbnQuXG4gICAgLy8gRXhwbGljaXQgY2FsbGVycyAoZW1wdHkgbWFwIGNsaWNrIC8gZ2VvIHJlc2V0KSBvcHQgaW50byByZXN0b3JlL2Rlc2VsZWN0LlxuICAgIGNvbnN0IHJlc3RvcmVFeHRlbnQgPSBvcHRzPy5yZXN0b3JlRXh0ZW50ID09PSB0cnVlO1xuICAgIGNvbnN0IG5vdGlmeURlc2VsZWN0ID0gb3B0cz8ubm90aWZ5RGVzZWxlY3QgPT09IHRydWU7XG5cbiAgICAvLyBJbnZhbGlkYXRlIGV2ZXJ5IHBlbmRpbmcgaGl0VGVzdC9xdWVyeS9hdHRhY2htZW50IHJlcXVlc3QuIE90aGVyd2lzZSBhXG4gICAgLy8gZmllbGQgY2xpY2sgdGhhdCB3YXMgc3RpbGwgbG9hZGluZyBjb3VsZCByZW9wZW4gaXRzIHN0YWxlIHBvcHVwIGFmdGVyXG4gICAgLy8gdGhlIHVzZXIgaGFkIGFscmVhZHkgbW92ZWQgdG8gYW5vdGhlciBkaXN0cmljdCBvciByZWdpb24uXG4gICAgdGhpcy5fY2xpY2tHZW5lcmF0aW9uICs9IDE7XG4gICAgdGhpcy5fbGF0ZXN0SW5kaWNlc1JlcXVlc3RJZCArPSAxO1xuXG4gICAgaWYgKCF0aGlzLnN0YXRlLnNob3dQb3B1cCkge1xuICAgICAgaWYgKG5vdGlmeURlc2VsZWN0KSB7XG4gICAgICAgIHRoaXMuY2xlYXJIaWdobGlnaHQoKTtcbiAgICAgICAgdGhpcy5ub3RpZnlHcmFmZlBvbHlnb25TZWxlY3Rpb24oXCJcIiwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgaWYgKCFyZXN0b3JlRXh0ZW50KSB0aGlzLl9leHRlbnRCZWZvcmVTZWxlY3Rpb24gPSBudWxsO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgc2VsZWN0ZWRBdHRyczogbnVsbCxcbiAgICAgICAgc2VsZWN0ZWRPSUQ6IG51bGwsXG4gICAgICAgIG9iamVjdElkRmllbGQ6IG51bGwsXG4gICAgICAgIGxhc3RDbGlja2VkRHNJZDogbnVsbCxcbiAgICAgICAgbGFzdENsaWNrZWRMYXllcktleTogbnVsbCxcbiAgICAgICAgcG9wdXBQb3NpdGlvbjogbnVsbCxcbiAgICAgICAgY2xpY2tTY3JlZW5Qb2ludDogbnVsbCxcbiAgICAgICAgcG9wdXBNaW5pbWl6ZWQ6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vdGlmeURlc2VsZWN0KSB7XG4gICAgICB0aGlzLmNsZWFySGlnaGxpZ2h0KCk7XG4gICAgICB0aGlzLm5vdGlmeUdyYWZmUG9seWdvblNlbGVjdGlvbihcIlwiLCBmYWxzZSk7XG4gICAgfVxuICAgIHRoaXMucmV2b2tlQWxsQXR0YWNobWVudFVybHMoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dQb3B1cDogZmFsc2UsXG4gICAgICBwb3B1cE1pbmltaXplZDogZmFsc2UsXG4gICAgICBwb3B1cFBvc2l0aW9uOiBudWxsLFxuICAgICAgY2xpY2tTY3JlZW5Qb2ludDogbnVsbCxcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgZXJyb3I6IG51bGwsXG4gICAgICBzZWxlY3RlZEF0dHJzOiBudWxsLFxuICAgICAgc2VsZWN0ZWRPSUQ6IG51bGwsXG4gICAgICBvYmplY3RJZEZpZWxkOiBudWxsLFxuICAgICAgbGFzdENsaWNrZWREc0lkOiBudWxsLFxuICAgICAgbGFzdENsaWNrZWRMYXllcktleTogbnVsbCxcbiAgICAgIGF0dGFjaG1lbnRzOiBbXSxcbiAgICAgIGF0dGFjaG1lbnRzRXhwYW5kZWQ6IGZhbHNlLFxuICAgICAgbG9hZGluZ0F0dGFjaG1lbnRzOiBmYWxzZSxcbiAgICAgIGNoYXJ0RXhwYW5kZWQ6IGZhbHNlLFxuICAgICAgY2hhcnRIb3ZlckluZGV4OiBudWxsLFxuICAgICAgbG9hZGluZ0xhdGVzdEluZGljZXM6IGZhbHNlLFxuICAgICAgbGF0ZXN0SW5kZXhEYXRlOiBudWxsLFxuICAgICAgbGF0ZXN0SW5kZXhWYWx1ZXM6IG51bGwsXG4gICAgfSk7XG4gICAgaWYgKHJlc3RvcmVFeHRlbnQpIHtcbiAgICAgIHRoaXMucmVzdG9yZUV4dGVudEJlZm9yZVNlbGVjdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9leHRlbnRCZWZvcmVTZWxlY3Rpb24gPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICAvKiogSGVhZGVyIFgg4oCUIGNvbGxhcHNlIHRoZSBwYW5lbDsga2VlcCBwb2x5Z29uIHNlbGVjdGlvbiArIGxvYWRlZCBhdHRycy4gKi9cbiAgcHJpdmF0ZSBtaW5pbWl6ZVBvcHVwID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICghdGhpcy5faXNNb3VudGVkIHx8ICF0aGlzLnN0YXRlLnNob3dQb3B1cCB8fCB0aGlzLnN0YXRlLnBvcHVwTWluaW1pemVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBwb3B1cE1pbmltaXplZDogdHJ1ZSB9KTtcbiAgfTtcblxuICAvKiogRXhwYW5kIGEgcHJldmlvdXNseSBtaW5pbWl6ZWQgYXR0cmlidXRlIHBhbmVsLiAqL1xuICBwcml2YXRlIGV4cGFuZFBvcHVwID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICghdGhpcy5faXNNb3VudGVkIHx8ICF0aGlzLnN0YXRlLnNob3dQb3B1cCB8fCAhdGhpcy5zdGF0ZS5wb3B1cE1pbmltaXplZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgcG9wdXBNaW5pbWl6ZWQ6IGZhbHNlIH0pO1xuICB9O1xuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0gRFMgaG9vayAoaW5zdGFudGlhdGVzIERTKSAtLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgb25EYXRhU291cmNlQ3JlYXRlZCA9IChkczogUXVlcmlhYmxlRGF0YVNvdXJjZSkgPT4ge1xuICAgIGlmICghZHM/LmlkKSByZXR1cm47XG4gICAgdGhpcy5kYXRhU291cmNlRW5naW5lLm9uRHNDcmVhdGVkKFxuICAgICAgZHMsXG4gICAgICBnZXRTZWxlY3RlZERzSWRzKHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMpLFxuICAgICk7XG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldikgPT4gKHtcbiAgICAgIGRhdGFTb3VyY2VzQnlJZDogeyAuLi4ocHJldi5kYXRhU291cmNlc0J5SWQgfHwge30pLCBbZHMuaWRdOiBkcyB9LFxuICAgIH0pKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5qaW11TWFwVmlldykge1xuICAgICAgdm9pZCB0aGlzLmluaXRpYWxpemVNYXBDb25uZWN0aW9uKHRoaXMuc3RhdGUuamltdU1hcFZpZXcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNjaGVkdWxlTWFwVmlld0ZhbGxiYWNrKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0gQ2hhcnQgcmVuZGVyaW5nIC0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICBwcml2YXRlIHRvZ2dsZUNoYXJ0RXhwYW5kZWQgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldikgPT4gKHsgY2hhcnRFeHBhbmRlZDogIXByZXYuY2hhcnRFeHBhbmRlZCB9KSk7XG4gIH07XG5cbiAgcHJpdmF0ZSByZW5kZXJDaGFydEljb24gPSAodHlwZTogXCJiYXJcIiB8IFwibGluZVwiID0gXCJiYXJcIik6IEpTWC5FbGVtZW50ID0+XG4gICAgdHlwZSA9PT0gXCJsaW5lXCIgPyAoXG4gICAgICA8TGluZUNoYXJ0IGNsYXNzTmFtZT1cImFncmkzLWNoYXJ0LWljb25cIiBzdHJva2VXaWR0aD17Mn0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICApIDogKFxuICAgICAgPEJhckNoYXJ0MyBjbGFzc05hbWU9XCJhZ3JpMy1jaGFydC1pY29uXCIgc3Ryb2tlV2lkdGg9ezJ9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgKTtcblxuICBwcml2YXRlIGNsZWFyQ2hhcnRIb3ZlciA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5jaGFydEhvdmVySW5kZXggIT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoYXJ0SG92ZXJJbmRleDogbnVsbCB9KTtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBzZXRDaGFydEhvdmVyID0gKGluZGV4OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5jaGFydEhvdmVySW5kZXggIT09IGluZGV4KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2hhcnRIb3ZlckluZGV4OiBpbmRleCB9KTtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBuaWNlQ2hhcnRNYXgodmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIG5pY2VDaGFydE1heFNoYXJlZCh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIGZvcm1hdENoYXJ0VGljayh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZm9ybWF0Q2hhcnRUaWNrU2hhcmVkKHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0Q2hhcnRUb29sdGlwVmFsdWUodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGZvcm1hdENoYXJ0VG9vbHRpcFZhbHVlU2hhcmVkKHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRTbW9vdGhMaW5lUGF0aChcbiAgICBwb2ludHM6IEFycmF5PHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfT4sXG4gICk6IHN0cmluZyB7XG4gICAgaWYgKCFwb2ludHMubGVuZ3RoKSByZXR1cm4gXCJcIjtcbiAgICBpZiAocG9pbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIGBNICR7cG9pbnRzWzBdLnh9ICR7cG9pbnRzWzBdLnl9YDtcbiAgICB9XG5cbiAgICBsZXQgcGF0aCA9IGBNICR7cG9pbnRzWzBdLnh9ICR7cG9pbnRzWzBdLnl9YDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGNvbnN0IHAwID0gcG9pbnRzW2kgLSAxXSB8fCBwb2ludHNbaV07XG4gICAgICBjb25zdCBwMSA9IHBvaW50c1tpXTtcbiAgICAgIGNvbnN0IHAyID0gcG9pbnRzW2kgKyAxXTtcbiAgICAgIGNvbnN0IHAzID0gcG9pbnRzW2kgKyAyXSB8fCBwMjtcbiAgICAgIGNvbnN0IGNwMXggPSBwMS54ICsgKHAyLnggLSBwMC54KSAvIDY7XG4gICAgICBjb25zdCBjcDF5ID0gcDEueSArIChwMi55IC0gcDAueSkgLyA2O1xuICAgICAgY29uc3QgY3AyeCA9IHAyLnggLSAocDMueCAtIHAxLngpIC8gNjtcbiAgICAgIGNvbnN0IGNwMnkgPSBwMi55IC0gKHAzLnkgLSBwMS55KSAvIDY7XG4gICAgICBwYXRoICs9IGAgQyAke2NwMXh9ICR7Y3AxeX0sICR7Y3AyeH0gJHtjcDJ5fSwgJHtwMi54fSAke3AyLnl9YDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkUm91bmRlZEJhclBhdGgoXG4gICAgeDogbnVtYmVyLFxuICAgIHk6IG51bWJlcixcbiAgICB3aWR0aDogbnVtYmVyLFxuICAgIGhlaWdodDogbnVtYmVyLFxuICAgIHJhZGl1czogbnVtYmVyLFxuICApOiBzdHJpbmcge1xuICAgIGNvbnN0IHIgPSBNYXRoLm1pbihyYWRpdXMsIHdpZHRoIC8gMiwgaGVpZ2h0KTtcbiAgICBjb25zdCBib3R0b20gPSB5ICsgaGVpZ2h0O1xuICAgIHJldHVybiBbXG4gICAgICBgTSAke3h9ICR7Ym90dG9tfWAsXG4gICAgICBgTCAke3h9ICR7eSArIHJ9YCxcbiAgICAgIGBRICR7eH0gJHt5fSAke3ggKyByfSAke3l9YCxcbiAgICAgIGBMICR7eCArIHdpZHRoIC0gcn0gJHt5fWAsXG4gICAgICBgUSAke3ggKyB3aWR0aH0gJHt5fSAke3ggKyB3aWR0aH0gJHt5ICsgcn1gLFxuICAgICAgYEwgJHt4ICsgd2lkdGh9ICR7Ym90dG9tfWAsXG4gICAgICBcIlpcIixcbiAgICBdLmpvaW4oXCIgXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJMYXRlc3RJbmRpY2VzID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbG9hZGluZ0xhdGVzdEluZGljZXMsIGxhdGVzdEluZGV4RGF0ZSwgbGF0ZXN0SW5kZXhWYWx1ZXMgfSA9XG4gICAgICB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgaGFzVmFsdWVzID0gISFsYXRlc3RJbmRleFZhbHVlcztcbiAgICBjb25zdCBzaG93QmxvY2tpbmdMb2FkZXIgPSBsb2FkaW5nTGF0ZXN0SW5kaWNlcyAmJiAhaGFzVmFsdWVzO1xuICAgIGNvbnN0IHNob3dSZWZyZXNoTG9hZGVyID0gbG9hZGluZ0xhdGVzdEluZGljZXMgJiYgaGFzVmFsdWVzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyaTMtZmllbGQtbGlzdCBhZ3JpMy1pbmRpY2VzLWxpc3RcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JpMy1maWVsZC1yb3cgYWdyaTMtaW5kaWNlcy1oZWFkZXItcm93XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWdyaTMtZmllbGQtbGFiZWwgYWdyaTMtaW5kaWNlcy10aXRsZVwiPlxuICAgICAgICAgICAgPFNwcm91dCBzaXplPXsxNH0gc3Ryb2tlV2lkdGg9ezIuMn0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgIHt0aGlzLnRyKFwiaW5kaWNlcy50aXRsZVwiKX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAge2xhdGVzdEluZGV4RGF0ZSAmJiAhbG9hZGluZ0xhdGVzdEluZGljZXMgJiYgKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWdyaTMtZmllbGQtdmFsdWUgYWdyaTMtaW5kaWNlcy1kYXRlXCI+XG4gICAgICAgICAgICAgIDxDYWxlbmRhckRheXMgc2l6ZT17MTN9IHN0cm9rZVdpZHRoPXsyfSBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICB7bGF0ZXN0SW5kZXhEYXRlfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7c2hvd0Jsb2NraW5nTG9hZGVyID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyaTMtaW5kaWNlcy1sb2FkaW5nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPEFncmlDaGFydExvYWRlciBsYWJlbD17dGhpcy50cihcImluZGljZXMubG9hZGluZ1wiKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IGhhc1ZhbHVlcyA/IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhZ3JpMy1pbmRpY2VzLWJvZHkke1xuICAgICAgICAgICAgICBzaG93UmVmcmVzaExvYWRlciA/IFwiIGFncmkzLWluZGljZXMtYm9keS0tbG9hZGluZ1wiIDogXCJcIlxuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3Nob3dSZWZyZXNoTG9hZGVyID8gKFxuICAgICAgICAgICAgICA8QWdyaUNoYXJ0TG9hZGVyIGxhYmVsPXt0aGlzLnRyKFwiaW5kaWNlcy5sb2FkaW5nXCIpfSAvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICB7QWdyaVBvbHlnb24uVkVHX0lOREVYX0ZJRUxEUy5maWx0ZXIoXG4gICAgICAgICAgICAgIChmKSA9PiBsYXRlc3RJbmRleFZhbHVlc1tmXSAhPSBudWxsLFxuICAgICAgICAgICAgKS5tYXAoKGYpID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFncmkzLWZpZWxkLXJvdyBhZ3JpMy1pbmRleC1yb3cgYWdyaTMtaW5kZXgtcm93LS0ke2Z9YH1cbiAgICAgICAgICAgICAgICBrZXk9e2Z9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYWdyaTMtZmllbGQtbGFiZWwgYWdyaTMtaW5kZXgtbGFiZWwgYWdyaTMtaW5kZXgtbGFiZWwtLSR7Zn1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFncmkzLWluZGV4LWRvdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICB7Zi50b1VwcGVyQ2FzZSgpfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZ3JpMy1maWVsZC12YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAge2xhdGVzdEluZGV4VmFsdWVzW2ZdLnRvRml4ZWQoNCl9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyaTMtc3RhdHVzLWluZGljYXRvciBhZ3JpMy1zdGF0dXMtd2FpdGluZ1wiPlxuICAgICAgICAgICAgPEluYm94IGNsYXNzTmFtZT1cImFncmkzLXN0YXR1cy1pY29uXCIgc2l6ZT17MTZ9IHN0cm9rZVdpZHRoPXsyLjJ9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICB7dGhpcy50cihcImluZGljZXMubm9uZVwiKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgcHJpdmF0ZSByZW5kZXJDaGFydCA9ICgpID0+IHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLnByb3BzLmNvbmZpZztcbiAgICBpZiAoIWNvbmZpZz8uY2hhcnRFbmFibGVkKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IGNoYXJ0RmllbGRzID0gY29uZmlnLmNoYXJ0RmllbGRzIHx8IFtdO1xuICAgIGNvbnN0IGNoYXJ0VHlwZSA9IGNvbmZpZy5jaGFydFR5cGUgfHwgXCJiYXJcIjtcbiAgICBjb25zdCBjaGFydFRpdGxlID0gY29uZmlnLmNoYXJ0VGl0bGUgfHwgXCJcIjtcbiAgICBjb25zdCBjaGFydENvbG9yID0gY29uZmlnLmNoYXJ0Q29sb3IgfHwgXCIjMDBhOGU4XCI7XG4gICAgY29uc3QgYXR0cnMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkQXR0cnM7XG4gICAgY29uc3QgcGlubmVkID0gdGhpcy5zdGF0ZS5waW5Ub0Nvcm5lcjtcbiAgICBjb25zdCBjaGFydEV4cGFuZGVkID0gcGlubmVkIHx8IHRoaXMuc3RhdGUuY2hhcnRFeHBhbmRlZDtcblxuICAgIGlmICghYXR0cnMgfHwgY2hhcnRGaWVsZHMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcblxuICAgIC8vIENvbGxlY3QgbnVtZXJpYyBkYXRhIGZvciBjaGFydFxuICAgIGNvbnN0IGRhdGFQb2ludHM6IHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IG51bWJlciB9W10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGZpZWxkTmFtZSBvZiBjaGFydEZpZWxkcykge1xuICAgICAgY29uc3QgcmF3ID0gYXR0cnNbZmllbGROYW1lXTtcbiAgICAgIGNvbnN0IG51bVZhbCA9IHR5cGVvZiByYXcgPT09IFwibnVtYmVyXCIgPyByYXcgOiBwYXJzZUZsb2F0KHJhdyk7XG4gICAgICBpZiAoIWlzTmFOKG51bVZhbCkpIHtcbiAgICAgICAgZGF0YVBvaW50cy5wdXNoKHtcbiAgICAgICAgICBsYWJlbDogdGhpcy5nZXRGaWVsZEFsaWFzKGZpZWxkTmFtZSksXG4gICAgICAgICAgdmFsdWU6IG51bVZhbCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRhdGFQb2ludHMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IGNoYXJ0TGFiZWwgPSBjaGFydFRpdGxlIHx8IGRhdGFQb2ludHNbMF0/LmxhYmVsIHx8IFwiR3JhZmlrXCI7XG4gICAgY29uc3QgaG92ZXJJbmRleCA9IHRoaXMuc3RhdGUuY2hhcnRIb3ZlckluZGV4O1xuXG4gICAgY29uc3Qgc3ZnV2lkdGggPSAzNDA7XG4gICAgY29uc3Qgc3ZnSGVpZ2h0ID0gMTY4O1xuICAgIGNvbnN0IHBhZGRpbmcgPSB7IHRvcDogMTIsIHJpZ2h0OiAxMiwgYm90dG9tOiA4LCBsZWZ0OiA0MCB9O1xuICAgIGNvbnN0IGNoYXJ0VyA9IHN2Z1dpZHRoIC0gcGFkZGluZy5sZWZ0IC0gcGFkZGluZy5yaWdodDtcbiAgICBjb25zdCBjaGFydEggPSBzdmdIZWlnaHQgLSBwYWRkaW5nLnRvcCAtIHBhZGRpbmcuYm90dG9tO1xuXG4gICAgY29uc3QgbWF4VmFsID0gTWF0aC5tYXgoLi4uZGF0YVBvaW50cy5tYXAoKGQpID0+IGQudmFsdWUpLCAwKTtcbiAgICBjb25zdCB5TWF4ID0gdGhpcy5uaWNlQ2hhcnRNYXgobWF4VmFsKTtcbiAgICBjb25zdCBzY2FsZVkgPSAodjogbnVtYmVyKSA9PiBjaGFydEggLSAodiAvIHlNYXgpICogY2hhcnRIO1xuXG4gICAgY29uc3QgaXNEYXJrID0gdGhpcy5zdGF0ZS5pc0RhcmtUaGVtZTtcbiAgICBjb25zdCBheGlzQ29sb3IgPSBpc0RhcmsgPyBcInJnYmEoMjU1LDI1NSwyNTUsMC41NSlcIiA6IFwiIzk0YTNiOFwiO1xuICAgIGNvbnN0IGdyaWRDb2xvciA9IGlzRGFyayA/IFwicmdiYSgyNTUsMjU1LDI1NSwwLjE0KVwiIDogXCIjZGJlYWZlXCI7XG4gICAgY29uc3QgY2hhcnRCb2R5QmcgPSBpc0RhcmsgPyBcInRyYW5zcGFyZW50XCIgOiBcIiNmZmZmZmZcIjtcbiAgICBjb25zdCBoaWdobGlnaHRGaWxsID0gaXNEYXJrXG4gICAgICA/IFwicmdiYSgwLCAxNjgsIDIzMiwgMC4xMilcIlxuICAgICAgOiBcInJnYmEoMCwgMTY4LCAyMzIsIDAuMSlcIjtcblxuICAgIGNvbnN0IGdyaWRMaW5lcyA9IDQ7XG4gICAgY29uc3QgZ3JpZFN0ZXAgPSB5TWF4IC8gZ3JpZExpbmVzO1xuXG4gICAgY29uc3QgYmFyTGF5b3V0ID1cbiAgICAgIGNoYXJ0VHlwZSA9PT0gXCJiYXJcIlxuICAgICAgICA/ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBiYXJHYXAgPSBNYXRoLm1heCg2LCBNYXRoLm1pbigxMCwgY2hhcnRXIC8gZGF0YVBvaW50cy5sZW5ndGggLyA0KSk7XG4gICAgICAgICAgICBjb25zdCBiYXJXID0gTWF0aC5tYXgoXG4gICAgICAgICAgICAgIDgsXG4gICAgICAgICAgICAgIChjaGFydFcgLSAoZGF0YVBvaW50cy5sZW5ndGggLSAxKSAqIGJhckdhcCkgLyBkYXRhUG9pbnRzLmxlbmd0aCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gZGF0YVBvaW50cy5tYXAoKGQsIGkpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeCA9IHBhZGRpbmcubGVmdCArIGkgKiAoYmFyVyArIGJhckdhcCk7XG4gICAgICAgICAgICAgIGNvbnN0IGJhckggPSBNYXRoLm1heCgyLCAoZC52YWx1ZSAvIHlNYXgpICogY2hhcnRIKTtcbiAgICAgICAgICAgICAgY29uc3QgeSA9IHBhZGRpbmcudG9wICsgY2hhcnRIIC0gYmFySDtcbiAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uZCwgaSwgeCwgeSwgYmFyVywgYmFySCwgY2VudGVyWDogeCArIGJhclcgLyAyIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KSgpXG4gICAgICAgIDogW107XG5cbiAgICBjb25zdCBsaW5lUG9pbnRzID1cbiAgICAgIGNoYXJ0VHlwZSA9PT0gXCJsaW5lXCJcbiAgICAgICAgPyAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RlcFggPVxuICAgICAgICAgICAgICBkYXRhUG9pbnRzLmxlbmd0aCA+IDEgPyBjaGFydFcgLyAoZGF0YVBvaW50cy5sZW5ndGggLSAxKSA6IDA7XG4gICAgICAgICAgICByZXR1cm4gZGF0YVBvaW50cy5tYXAoKGQsIGkpID0+ICh7XG4gICAgICAgICAgICAgIC4uLmQsXG4gICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgIHg6XG4gICAgICAgICAgICAgICAgcGFkZGluZy5sZWZ0ICtcbiAgICAgICAgICAgICAgICAoZGF0YVBvaW50cy5sZW5ndGggPiAxID8gaSAqIHN0ZXBYIDogY2hhcnRXIC8gMiksXG4gICAgICAgICAgICAgIHk6IHBhZGRpbmcudG9wICsgc2NhbGVZKGQudmFsdWUpLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0pKClcbiAgICAgICAgOiBbXTtcblxuICAgIGNvbnN0IGhvdmVyUG9pbnQgPVxuICAgICAgaG92ZXJJbmRleCAhPSBudWxsXG4gICAgICAgID8gY2hhcnRUeXBlID09PSBcImJhclwiXG4gICAgICAgICAgPyBiYXJMYXlvdXRbaG92ZXJJbmRleF1cbiAgICAgICAgICA6IGxpbmVQb2ludHNbaG92ZXJJbmRleF1cbiAgICAgICAgOiBudWxsO1xuXG4gICAgY29uc3QgdG9vbHRpcExlZnRQY3QgPSBob3ZlclBvaW50XG4gICAgICA/IE1hdGgubWF4KDgsIE1hdGgubWluKDgyLCAoaG92ZXJQb2ludC54IC8gc3ZnV2lkdGgpICogMTAwKSlcbiAgICAgIDogMDtcbiAgICBjb25zdCB0b29sdGlwVG9wUGN0ID0gaG92ZXJQb2ludFxuICAgICAgPyBNYXRoLm1heCg2LCBNYXRoLm1pbig1OCwgKGhvdmVyUG9pbnQueSAvIHN2Z0hlaWdodCkgKiAxMDAgLSAxOCkpXG4gICAgICA6IDA7XG5cbiAgICBjb25zdCBjaGFydFN2ZyA9IChcbiAgICAgIDxzdmdcbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgdmlld0JveD17YDAgMCAke3N2Z1dpZHRofSAke3N2Z0hlaWdodH1gfVxuICAgICAgICBjbGFzc05hbWU9XCJhZ3JpMy1jaGFydC1zdmdcIlxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBjaGFydEJvZHlCZyB9fVxuICAgICAgPlxuICAgICAgICA8cmVjdFxuICAgICAgICAgIHg9e3BhZGRpbmcubGVmdH1cbiAgICAgICAgICB5PXtwYWRkaW5nLnRvcH1cbiAgICAgICAgICB3aWR0aD17Y2hhcnRXfVxuICAgICAgICAgIGhlaWdodD17Y2hhcnRIfVxuICAgICAgICAgIGZpbGw9e2lzRGFyayA/IFwicmdiYSgyNTUsMjU1LDI1NSwwLjAyKVwiIDogXCIjZmZmZmZmXCJ9XG4gICAgICAgICAgcng9ezZ9XG4gICAgICAgIC8+XG5cbiAgICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IGdyaWRMaW5lcyArIDEgfSkubWFwKChfLCBpKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsID0gZ3JpZFN0ZXAgKiBpO1xuICAgICAgICAgIGNvbnN0IHkgPSBwYWRkaW5nLnRvcCArIHNjYWxlWSh2YWwpO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZyBrZXk9e2BncmlkLSR7aX1gfT5cbiAgICAgICAgICAgICAgPGxpbmVcbiAgICAgICAgICAgICAgICB4MT17cGFkZGluZy5sZWZ0fVxuICAgICAgICAgICAgICAgIHkxPXt5fVxuICAgICAgICAgICAgICAgIHgyPXtzdmdXaWR0aCAtIHBhZGRpbmcucmlnaHR9XG4gICAgICAgICAgICAgICAgeTI9e3l9XG4gICAgICAgICAgICAgICAgc3Ryb2tlPXtncmlkQ29sb3J9XG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezF9XG4gICAgICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5PVwiMyA1XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHRleHRcbiAgICAgICAgICAgICAgICB4PXtwYWRkaW5nLmxlZnQgLSA4fVxuICAgICAgICAgICAgICAgIHk9e3kgKyA0fVxuICAgICAgICAgICAgICAgIGZpbGw9e2F4aXNDb2xvcn1cbiAgICAgICAgICAgICAgICBmb250U2l6ZT17MTB9XG4gICAgICAgICAgICAgICAgdGV4dEFuY2hvcj1cImVuZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5mb3JtYXRDaGFydFRpY2sodmFsKX1cbiAgICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuXG4gICAgICAgIHtjaGFydFR5cGUgPT09IFwiYmFyXCIgJiZcbiAgICAgICAgICBiYXJMYXlvdXQubWFwKChiYXIpID0+IChcbiAgICAgICAgICAgIDxnIGtleT17YGJhci0ke2Jhci5pfWB9PlxuICAgICAgICAgICAgICB7aG92ZXJJbmRleCA9PT0gYmFyLmkgJiYgKFxuICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICB4PXtiYXIueCAtIDN9XG4gICAgICAgICAgICAgICAgICB5PXtwYWRkaW5nLnRvcH1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXtiYXIuYmFyVyArIDZ9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9e2NoYXJ0SH1cbiAgICAgICAgICAgICAgICAgIGZpbGw9e2hpZ2hsaWdodEZpbGx9XG4gICAgICAgICAgICAgICAgICByeD17NX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9e3RoaXMuYnVpbGRSb3VuZGVkQmFyUGF0aChiYXIueCwgYmFyLnksIGJhci5iYXJXLCBiYXIuYmFySCwgNSl9XG4gICAgICAgICAgICAgICAgZmlsbD17Y2hhcnRDb2xvcn1cbiAgICAgICAgICAgICAgICBvcGFjaXR5PXtob3ZlckluZGV4ID09IG51bGwgfHwgaG92ZXJJbmRleCA9PT0gYmFyLmkgPyAxIDogMC40NX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZ3JpMy1jaGFydC1iYXJcIlxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gdGhpcy5zZXRDaGFydEhvdmVyKGJhci5pKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICB4PXtiYXIueH1cbiAgICAgICAgICAgICAgICB5PXtwYWRkaW5nLnRvcH1cbiAgICAgICAgICAgICAgICB3aWR0aD17YmFyLmJhcld9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtjaGFydEh9XG4gICAgICAgICAgICAgICAgZmlsbD1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHRoaXMuc2V0Q2hhcnRIb3ZlcihiYXIuaSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAge2NoYXJ0VHlwZSA9PT0gXCJsaW5lXCIgJiYgKFxuICAgICAgICAgIDxnPlxuICAgICAgICAgICAge2hvdmVySW5kZXggIT0gbnVsbCAmJiBsaW5lUG9pbnRzW2hvdmVySW5kZXhdICYmIChcbiAgICAgICAgICAgICAgPGxpbmVcbiAgICAgICAgICAgICAgICB4MT17bGluZVBvaW50c1tob3ZlckluZGV4XS54fVxuICAgICAgICAgICAgICAgIHkxPXtwYWRkaW5nLnRvcH1cbiAgICAgICAgICAgICAgICB4Mj17bGluZVBvaW50c1tob3ZlckluZGV4XS54fVxuICAgICAgICAgICAgICAgIHkyPXtwYWRkaW5nLnRvcCArIGNoYXJ0SH1cbiAgICAgICAgICAgICAgICBzdHJva2U9e2NoYXJ0Q29sb3J9XG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezEuNX1cbiAgICAgICAgICAgICAgICBvcGFjaXR5PXswLjM1fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9e3RoaXMuYnVpbGRTbW9vdGhMaW5lUGF0aChsaW5lUG9pbnRzKX1cbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICBzdHJva2U9e2NoYXJ0Q29sb3J9XG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyLjV9XG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtsaW5lUG9pbnRzLm1hcCgocCkgPT4gKFxuICAgICAgICAgICAgICA8ZyBrZXk9e2BwdC0ke3AuaX1gfT5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgICBjeD17cC54fVxuICAgICAgICAgICAgICAgICAgY3k9e3AueX1cbiAgICAgICAgICAgICAgICAgIHI9e2hvdmVySW5kZXggPT09IHAuaSA/IDUuNSA6IDR9XG4gICAgICAgICAgICAgICAgICBmaWxsPXtpc0RhcmsgPyBcIiMwYjFhMzBcIiA6IFwiI2ZmZmZmZlwifVxuICAgICAgICAgICAgICAgICAgc3Ryb2tlPXtjaGFydENvbG9yfVxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9e2hvdmVySW5kZXggPT09IHAuaSA/IDIuNSA6IDJ9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZ3JpMy1jaGFydC1wb2ludFwiXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHRoaXMuc2V0Q2hhcnRIb3ZlcihwLmkpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgY3g9e3AueH1cbiAgICAgICAgICAgICAgICAgIGN5PXtwLnl9XG4gICAgICAgICAgICAgICAgICByPXsxMn1cbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHRoaXMuc2V0Q2hhcnRIb3ZlcihwLmkpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZz5cbiAgICAgICAgKX1cbiAgICAgIDwvc3ZnPlxuICAgICk7XG5cbiAgICBjb25zdCBjaGFydEJvZHkgPSAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImFncmkzLWNoYXJ0LWJvZHlcIlxuICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuY2xlYXJDaGFydEhvdmVyfVxuICAgICAgPlxuICAgICAgICB7aG92ZXJQb2ludCAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWdyaTMtY2hhcnQtdG9vbHRpcFwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBsZWZ0OiBgJHt0b29sdGlwTGVmdFBjdH0lYCxcbiAgICAgICAgICAgICAgdG9wOiBgJHt0b29sdGlwVG9wUGN0fSVgLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmkzLWNoYXJ0LXRvb2x0aXAtbGFiZWxcIj57aG92ZXJQb2ludC5sYWJlbH08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyaTMtY2hhcnQtdG9vbHRpcC12YWx1ZVwiPlxuICAgICAgICAgICAgICB7dGhpcy5mb3JtYXRDaGFydFRvb2x0aXBWYWx1ZShob3ZlclBvaW50LnZhbHVlKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7Y2hhcnRTdmd9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgaWYgKCFjaGFydEV4cGFuZGVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWdyaTMtY2hhcnQtdHJpZ2dlclwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVDaGFydEV4cGFuZGVkfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWdyaTMtY2hhcnQtdHJpZ2dlci1pY29uXCI+e3RoaXMucmVuZGVyQ2hhcnRJY29uKGNoYXJ0VHlwZSl9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFncmkzLWNoYXJ0LXRyaWdnZXItbGFiZWxcIj57Y2hhcnRMYWJlbH08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWdyaTMtY2hhcnQtdHJpZ2dlci1jaGV2cm9uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICDilr5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JpMy1jaGFydC1wYW5lbFwiPlxuICAgICAgICB7IXBpbm5lZCA/IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFncmkzLWNoYXJ0LXBhbmVsLWhlYWRlclwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNoYXJ0RXhwYW5kZWR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWdyaTMtY2hhcnQtdHJpZ2dlci1pY29uXCI+e3RoaXMucmVuZGVyQ2hhcnRJY29uKGNoYXJ0VHlwZSl9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWdyaTMtY2hhcnQtdHJpZ2dlci1sYWJlbFwiPntjaGFydExhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFncmkzLWNoYXJ0LXRyaWdnZXItY2hldnJvbiBpcy1vcGVuXCJcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAg4pa0XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JpMy1jaGFydC1wYW5lbC1oZWFkZXIgYWdyaTMtY2hhcnQtcGFuZWwtaGVhZGVyLS1zdGF0aWNcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFncmkzLWNoYXJ0LXRyaWdnZXItaWNvblwiPnt0aGlzLnJlbmRlckNoYXJ0SWNvbihjaGFydFR5cGUpfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFncmkzLWNoYXJ0LXRyaWdnZXItbGFiZWxcIj57Y2hhcnRMYWJlbH08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyaTMtY2hhcnQtY29udGFpbmVyXCI+e2NoYXJ0Qm9keX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLSBQb3B1cCBVSSAtLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgcHJpdmF0ZSByZW5kZXJQb3B1cCA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBzZWxlY3RlZEF0dHJzLFxuICAgICAgc2VsZWN0ZWRPSUQsXG4gICAgICBsb2FkaW5nLFxuICAgICAgZXJyb3IsXG4gICAgICBzaG93UG9wdXAsXG4gICAgICBwb3B1cE1pbmltaXplZCxcbiAgICAgIHBvcHVwUG9zaXRpb24sXG4gICAgICBsb2FkaW5nQXR0YWNobWVudHMsXG4gICAgICBhdHRhY2htZW50cyxcbiAgICAgIGF0dGFjaG1lbnRzRXJyb3IsXG4gICAgICBwaW5Ub0Nvcm5lcixcbiAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmICghc2hvd1BvcHVwKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IGZpZWxkcyA9ICh0aGlzLnByb3BzLmNvbmZpZz8uZmllbGRzVG9TaG93IHx8IFtdKVxuICAgICAgLm1hcCgobikgPT4gdGhpcy5yZXNvbHZlRmllbGROYW1lKG4pIHx8IG4pXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pO1xuXG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLnRyKFwidGl0bGUuYXR0cmlidXRlc1wiKTtcblxuICAgIGNvbnN0IHZpZXcgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3Py52aWV3O1xuICAgIGNvbnN0IGxheW91dFBvcyA9IHBvcHVwUG9zaXRpb247XG5cbiAgICBpZiAocG9wdXBNaW5pbWl6ZWQpIHtcbiAgICAgIGNvbnN0IHZpZXdGb3JDaGlwID0gdmlldyB8fCB0aGlzLnN0YXRlLmppbXVNYXBWaWV3Py52aWV3IHx8IG51bGw7XG4gICAgICBjb25zdCBtYXBSZWN0ID0gdmlld0ZvckNoaXAgPyB0aGlzLmdldE1hcEFyZWFSZWN0KHZpZXdGb3JDaGlwKSA6IG51bGw7XG4gICAgICBjb25zdCBjaGlwU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSBtYXBSZWN0XG4gICAgICAgID8ge1xuICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICAgIHJpZ2h0OiBNYXRoLm1heChcbiAgICAgICAgICAgICAgOCxcbiAgICAgICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IG1hcFJlY3QucmlnaHQpIC1cbiAgICAgICAgICAgICAgICBtYXBSZWN0LnJpZ2h0ICtcbiAgICAgICAgICAgICAgICB0aGlzLkRBU0hCT0FSRF9QT1BVUF9WRVJUSUNBTF9JTlNFVCxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB0b3A6IG1hcFJlY3QudG9wICsgdGhpcy5EQVNIQk9BUkRfUE9QVVBfVkVSVElDQUxfSU5TRVQsXG4gICAgICAgICAgICBsZWZ0OiBcImF1dG9cIixcbiAgICAgICAgICAgIGJvdHRvbTogXCJhdXRvXCIsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IFwibm9uZVwiLFxuICAgICAgICAgIH1cbiAgICAgICAgOiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgcmlnaHQ6IHRoaXMuREFTSEJPQVJEX1BPUFVQX1ZFUlRJQ0FMX0lOU0VULFxuICAgICAgICAgICAgdG9wOiB0aGlzLkRBU0hCT0FSRF9QT1BVUF9WRVJUSUNBTF9JTlNFVCxcbiAgICAgICAgICAgIGxlZnQ6IFwiYXV0b1wiLFxuICAgICAgICAgICAgYm90dG9tOiBcImF1dG9cIixcbiAgICAgICAgICB9O1xuXG4gICAgICBjb25zdCBzdG9wTWFwSGl0ID0gKGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2BhZ3JpMy1wb3B1cC1taW5pbWl6ZWQgJHtcbiAgICAgICAgICAgIHBpblRvQ29ybmVyID8gXCJpcy1waW5uZWRcIiA6IFwiaXMtZmxvYXRpbmdcIlxuICAgICAgICAgIH1gfVxuICAgICAgICAgIHN0eWxlPXtjaGlwU3R5bGV9XG4gICAgICAgICAgcmVmPXt0aGlzLl9wb3B1cFJlZn1cbiAgICAgICAgICBvbk1vdXNlRG93bj17c3RvcE1hcEhpdH1cbiAgICAgICAgICBvblBvaW50ZXJEb3duPXtzdG9wTWFwSGl0fVxuICAgICAgICAgIG9uQ2xpY2s9e3N0b3BNYXBIaXR9XG4gICAgICAgID5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFncmkzLXBvcHVwLW1pbmltaXplZC1idG5cIlxuICAgICAgICAgICAgb25Nb3VzZURvd249e3N0b3BNYXBIaXR9XG4gICAgICAgICAgICBvblBvaW50ZXJEb3duPXtzdG9wTWFwSGl0fVxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgc3RvcE1hcEhpdChlKTtcbiAgICAgICAgICAgICAgdGhpcy5leHBhbmRQb3B1cCgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHRpdGxlPXt0aGlzLnRyKFwiYWN0aW9uLmV4cGFuZFwiKX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e3RoaXMudHIoXCJhY3Rpb24uZXhwYW5kXCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFncmkzLXBvcHVwLW1pbmltaXplZC1hY2NlbnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWdyaTMtcG9wdXAtbWluaW1pemVkLXRpdGxlXCI+e3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgIDxDaGV2cm9uVXBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWdyaTMtcG9wdXAtbWluaW1pemVkLWljb25cIlxuICAgICAgICAgICAgICBzaXplPXsxNn1cbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezIuNH1cbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IHdpZHRoOiBwb3B1cFdpZHRoLCBoZWlnaHQ6IHBvcHVwSGVpZ2h0IH0gPSB0aGlzLmdldFBvcHVwRGltZW5zaW9ucyhcbiAgICAgIHZpZXcgfHwgbnVsbCxcbiAgICAgIHBpblRvQ29ybmVyLFxuICAgICAgbGF5b3V0UG9zLFxuICAgICk7XG5cbiAgICBjb25zdCBkaW1lbnNpb25TdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgIHdpZHRoOiBgJHtwb3B1cFdpZHRofXB4YCxcbiAgICAgIG1pbldpZHRoOiBgJHtwb3B1cFdpZHRofXB4YCxcbiAgICAgIG1heFdpZHRoOiBgJHtwb3B1cFdpZHRofXB4YCxcbiAgICAgIGhlaWdodDogYCR7cG9wdXBIZWlnaHR9cHhgLFxuICAgICAgbWF4SGVpZ2h0OiBgJHtwb3B1cEhlaWdodH1weGAsXG4gICAgfTtcblxuICAgIGNvbnN0IHN0eWxlUGlubmVkOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0gbGF5b3V0UG9zXG4gICAgICA/IHtcbiAgICAgICAgICBsZWZ0OiBsYXlvdXRQb3MueCxcbiAgICAgICAgICB0b3A6IGxheW91dFBvcy55LFxuICAgICAgICAgIHRyYW5zZm9ybTogXCJub25lXCIsXG4gICAgICAgICAgLi4uZGltZW5zaW9uU3R5bGUsXG4gICAgICAgIH1cbiAgICAgIDogeyAuLi5kaW1lbnNpb25TdHlsZSB9O1xuXG4gICAgY29uc3Qgc3R5bGVGcmVlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgbGVmdDogbGF5b3V0UG9zPy54IHx8IFwiNTAlXCIsXG4gICAgICB0b3A6IGxheW91dFBvcz8ueSB8fCBcIjUwJVwiLFxuICAgICAgdHJhbnNmb3JtOiAhbGF5b3V0UG9zID8gXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIiA6IFwibm9uZVwiLFxuICAgICAgLi4uZGltZW5zaW9uU3R5bGUsXG4gICAgfTtcblxuICAgIGNvbnN0IHBvcHVwU3R5bGUgPSBwaW5Ub0Nvcm5lciA/IHN0eWxlUGlubmVkIDogc3R5bGVGcmVlO1xuXG4gICAgY29uc3Qgc2hvd0F0dGFjaG1lbnRzID1cbiAgICAgIHRoaXMucHJvcHMuY29uZmlnPy5zZXR0aW5ncz8uc2hvd0F0dGFjaG1lbnRzICE9PSBmYWxzZTtcbiAgICBjb25zdCBoYXNBdHRhY2htZW50cyA9IChhdHRhY2htZW50cz8ubGVuZ3RoIHx8IDApID4gMDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGFncmkzLXBvcHVwLWRpcmVjdCAke3BpblRvQ29ybmVyID8gXCJpcy1waW5uZWRcIiA6IFwiaXMtZmxvYXRpbmdcIn1gfVxuICAgICAgICBzdHlsZT17cG9wdXBTdHlsZX1cbiAgICAgICAgcmVmPXt0aGlzLl9wb3B1cFJlZn1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JpMy1wb3B1cC1oZWFkZXJcIiBvbk1vdXNlRG93bj17dGhpcy5vblBvcHVwSGVhZGVyTW91c2VEb3dufT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhZ3JpMy1wb3B1cC1waW4ke3BpblRvQ29ybmVyID8gXCIgYWN0aXZlXCIgOiBcIlwifWB9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZVBpblRvQ29ybmVyfVxuICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICBwaW5Ub0Nvcm5lciA/IHRoaXMudHIoXCJhY3Rpb24udW5waW5cIikgOiB0aGlzLnRyKFwiYWN0aW9uLnBpblwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXJpYS1wcmVzc2VkPXtwaW5Ub0Nvcm5lcn1cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtwaW5Ub0Nvcm5lciA/IChcbiAgICAgICAgICAgICAgPFBpbiBzaXplPXsxNX0gc3Ryb2tlV2lkdGg9ezIuMn0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxNYXBQaW4gc2l6ZT17MTV9IHN0cm9rZVdpZHRoPXsyLjJ9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImFncmkzLXBvcHVwLXRpdGxlXCI+e3RpdGxlfTwvaDI+XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFncmkzLXBvcHVwLWNsb3NlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubWluaW1pemVQb3B1cH1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e3RoaXMudHIoXCJhY3Rpb24ubWluaW1pemVcIil9XG4gICAgICAgICAgICB0aXRsZT17dGhpcy50cihcImFjdGlvbi5taW5pbWl6ZVwiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8WCBzaXplPXsxNn0gc3Ryb2tlV2lkdGg9ezIuNH0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JpMy1wb3B1cC1jb250ZW50XCI+XG4gICAgICAgICAge2Vycm9yICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyaTMtZXJyb3ItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxBbGVydFRyaWFuZ2xlIGNsYXNzTmFtZT1cImFncmkzLWVycm9yLWljb25cIiBzaXplPXsyMH0gc3Ryb2tlV2lkdGg9ezIuMn0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JpMy1lcnJvci10aXRsZVwiPlxuICAgICAgICAgICAgICAgIHt0aGlzLnRyKFwic3RhdHVzLndhcm5pbmdcIil9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmkzLWVycm9yLW1lc3NhZ2VcIj57ZXJyb3J9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge2xvYWRpbmcgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JpMy1sb2FkaW5nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8QWdyaUNoYXJ0TG9hZGVyIGxhYmVsPXt0aGlzLnRyKFwic3RhdHVzLmxvYWRpbmdGZWF0dXJlXCIpfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHshbG9hZGluZyAmJiBzZWxlY3RlZEF0dHJzICYmIGZpZWxkcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyaTMtZmllbGQtbGlzdFwiPlxuICAgICAgICAgICAgICB7ZmllbGRzXG4gICAgICAgICAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgIChuYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghc2VsZWN0ZWRBdHRycy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBzZWxlY3RlZEF0dHJzW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09IG51bGwgfHwgdmFsID09PSBcIlwiKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiICYmICF2YWwudHJpbSgpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLm1hcCgobmFtZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JpMy1maWVsZC1yb3dcIiBrZXk9e25hbWV9PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZ3JpMy1maWVsZC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmdldEZpZWxkQWxpYXMobmFtZSl9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWdyaTMtZmllbGQtdmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5mb3JtYXRWYWx1ZShuYW1lLCBzZWxlY3RlZEF0dHJzW25hbWVdKX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG5cbiAgICAgICAgICAgICAge2ZpZWxkcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgKG5hbWUpID0+XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZEF0dHJzLmhhc093blByb3BlcnR5KG5hbWUpICYmXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZEF0dHJzW25hbWVdICE9IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQXR0cnNbbmFtZV0gIT09IFwiXCIsXG4gICAgICAgICAgICAgICkubGVuZ3RoID09PSAwICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmkzLXN0YXR1cy1pbmRpY2F0b3IgYWdyaTMtc3RhdHVzLXdhaXRpbmdcIj5cbiAgICAgICAgICAgICAgICAgIDxJbmJveCBjbGFzc05hbWU9XCJhZ3JpMy1zdGF0dXMtaWNvblwiIHNpemU9ezE2fSBzdHJva2VXaWR0aD17Mi4yfSBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgICAge3RoaXMudHIoXCJzdGF0dXMubm9Db25maWd1cmVkRGF0YVwiKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7IWxvYWRpbmcgJiYgc2VsZWN0ZWRBdHRycyAmJiBmaWVsZHMubGVuZ3RoID09PSAwICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyaTMtc3RhdHVzLWluZGljYXRvciBhZ3JpMy1zdGF0dXMtd2FpdGluZ1wiPlxuICAgICAgICAgICAgICA8U2V0dGluZ3MyIGNsYXNzTmFtZT1cImFncmkzLXN0YXR1cy1pY29uXCIgc2l6ZT17MTZ9IHN0cm9rZVdpZHRoPXsyLjJ9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgIHt0aGlzLnRyKFwic3RhdHVzLm5vRmllbGRzXCIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHsvKiBMYXRlc3QtZGF5IHZlZ2V0YXRpb24gaW5kaWNlcyAqL31cbiAgICAgICAgICB7IWxvYWRpbmcgJiYgc2VsZWN0ZWRBdHRycyAmJiB0aGlzLnJlbmRlckxhdGVzdEluZGljZXMoKX1cblxuICAgICAgICAgIHsvKiBDaGFydCAqL31cbiAgICAgICAgICB7IWxvYWRpbmcgJiYgc2VsZWN0ZWRBdHRycyAmJiB0aGlzLnJlbmRlckNoYXJ0KCl9XG5cbiAgICAgICAgICB7c2hvd0F0dGFjaG1lbnRzICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyaTMtYXR0YWNobWVudHNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JpMy1hdHRhY2htZW50cy1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmkzLWF0dGFjaG1lbnRzLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICA8Rm9sZGVyT3BlbiBzaXplPXsxNX0gc3Ryb2tlV2lkdGg9ezIuMn0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnRyKFwiYXR0YWNobWVudHMudGl0bGVcIil9e1wiIFwifVxuICAgICAgICAgICAgICAgICAge2hhc0F0dGFjaG1lbnRzID8gYCgke2F0dGFjaG1lbnRzLmxlbmd0aH0pYCA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHtsb2FkaW5nQXR0YWNobWVudHMgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFncmkzLWxvYWRpbmctY29udGFpbmVyIGFncmkzLWxvYWRpbmctY29udGFpbmVyLS1jb21wYWN0XCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogOCB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxBZ3JpQ2hhcnRMb2FkZXIgbGFiZWw9e3RoaXMudHIoXCJzdGF0dXMubG9hZGluZ0F0dGFjaG1lbnRzXCIpfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIHshbG9hZGluZ0F0dGFjaG1lbnRzICYmIGF0dGFjaG1lbnRzRXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFncmkzLXN0YXR1cy1pbmRpY2F0b3IgYWdyaTMtc3RhdHVzLXdhaXRpbmdcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiA2IH19XG4gICAgICAgICAgICAgICAgICB0aXRsZT17YXR0YWNobWVudHNFcnJvcn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8QWxlcnRUcmlhbmdsZSBjbGFzc05hbWU9XCJhZ3JpMy1zdGF0dXMtaWNvblwiIHNpemU9ezE2fSBzdHJva2VXaWR0aD17Mi4yfSBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgICAge3RoaXMudHIoXCJzdGF0dXMuYXR0YWNobWVudHNFcnJvclwiKSB8fCBhdHRhY2htZW50c0Vycm9yfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIHshbG9hZGluZ0F0dGFjaG1lbnRzICYmICFhdHRhY2htZW50c0Vycm9yICYmICFoYXNBdHRhY2htZW50cyAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWdyaTMtc3RhdHVzLWluZGljYXRvciBhZ3JpMy1zdGF0dXMtd2FpdGluZ1wiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IDYgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8Rm9sZGVyT3BlbiBjbGFzc05hbWU9XCJhZ3JpMy1zdGF0dXMtaWNvblwiIHNpemU9ezE2fSBzdHJva2VXaWR0aD17Mi4yfSBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgICAge3RoaXMudHIoXCJzdGF0dXMubm9BdHRhY2htZW50c1wiKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICB7IWxvYWRpbmdBdHRhY2htZW50cyAmJiBoYXNBdHRhY2htZW50cyAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JpMy1hdHRhY2htZW50cy1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmkzLWF0dGFjaG1lbnRzLWltYWdlcyBhZ3JpMy1ncmlkXCI+XG4gICAgICAgICAgICAgICAgICAgIHthdHRhY2htZW50c1xuICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGEpID0+IGEucHJldmlld09iamVjdFVybClcbiAgICAgICAgICAgICAgICAgICAgICAubWFwKChhKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BpbWctJHthLmlkfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2EudXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWdyaTMtYXR0YWNobWVudC10aHVtYiBhZ3JpMy1jYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2EubmFtZSB8fCB0aGlzLnRyKFwiYXR0YWNobWVudC5pbWFnZUZhbGxiYWNrXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZD17YS5uYW1lIHx8IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YS5wcmV2aWV3T2JqZWN0VXJsIX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2EubmFtZSB8fCB0aGlzLnRyKFwiYXR0YWNobWVudC5pbWFnZUZhbGxiYWNrXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWdyaTMtdGh1bWItY2FwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2EubmFtZSB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2EubmFtZSB8fCB0aGlzLnRyKFwiYXR0YWNobWVudC5pbWFnZUZhbGxiYWNrXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmkzLWF0dGFjaG1lbnRzLWZpbGVzXCI+XG4gICAgICAgICAgICAgICAgICAgIHthdHRhY2htZW50c1xuICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGEpID0+ICFhLnByZXZpZXdPYmplY3RVcmwpXG4gICAgICAgICAgICAgICAgICAgICAgLm1hcCgoYSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZ3JpMy1hdHRhY2htZW50LWZpbGUgYWdyaTMtY2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YGZpbGUtJHthLmlkfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyaTMtYXR0YWNobWVudC1maWxlLXRvcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFncmkzLWF0dGFjaG1lbnQtZmlsZS1uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXthLm5hbWUgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXJjbGlwIHNpemU9ezE0fSBzdHJva2VXaWR0aD17Mi4yfSBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2EubmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyKFwiYXR0YWNobWVudC5maWxlRmFsbGJhY2tcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBhLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWdyaTMtYXR0YWNobWVudC1kb3dubG9hZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXthLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvd25sb2FkPXthLm5hbWUgfHwgdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEb3dubG9hZCBzaXplPXsxM30gc3Ryb2tlV2lkdGg9ezIuMn0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnRyKFwiYXR0YWNobWVudC5kb3dubG9hZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmkzLWF0dGFjaG1lbnQtZmlsZS1tZXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhhLmNvbnRlbnRUeXBlIHx8IFwiXCIpLnNwbGl0KFwiL1wiKS5wb3AoKSB8fCBcIlwifXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YS5zaXplID8gYOKAoiAke3RoaXMuYnl0ZXNUb1NpemUoYS5zaXplKX1gIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHshbG9hZGluZyAmJiAhc2VsZWN0ZWRBdHRycyAmJiAhZXJyb3IgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JpMy1zdGF0dXMtaW5kaWNhdG9yIGFncmkzLXN0YXR1cy13YWl0aW5nXCI+XG4gICAgICAgICAgICAgIDxNb3VzZVBvaW50ZXJDbGljayBjbGFzc05hbWU9XCJhZ3JpMy1zdGF0dXMtaWNvblwiIHNpemU9ezE2fSBzdHJva2VXaWR0aD17Mi4yfSBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICB7dGhpcy50cihcInN0YXR1cy5jbGlja1BvbHlnb25cIil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdXNlTWFwV2lkZ2V0SWRzLCB1c2VEYXRhU291cmNlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0aGVtZUNsYXNzID0gdGhpcy5zdGF0ZS5pc0RhcmtUaGVtZVxuICAgICAgPyBcImFncmkzLXRoZW1lLWRhcmtcIlxuICAgICAgOiBcImFncmkzLXRoZW1lLWxpZ2h0XCI7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BhZ3JpMy1hdHRyLWNhcmQgJHt0aGVtZUNsYXNzfWB9PlxuICAgICAgICB7dGhpcy5yZW5kZXJQb3B1cCgpfVxuXG4gICAgICAgIDxBZ3JpSGlkZGVuQ29ubmVjdG9yc1xuICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXt1c2VEYXRhU291cmNlc31cbiAgICAgICAgICB1c2VNYXBXaWRnZXRJZHM9e3VzZU1hcFdpZGdldElkc31cbiAgICAgICAgICBvbkRhdGFTb3VyY2VDcmVhdGVkPXt0aGlzLm9uRGF0YVNvdXJjZUNyZWF0ZWR9XG4gICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXt0aGlzLm9uQWN0aXZlVmlld0NoYW5nZX1cbiAgICAgICAgLz5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICBib3R0b206IFwiOHB4XCIsXG4gICAgICAgICAgICByaWdodDogXCI4cHhcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjhweFwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjhweFwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXJzPy5sZW5ndGhcbiAgICAgICAgICAgICAgPyBcIiMxMGI5ODFcIlxuICAgICAgICAgICAgICA6IFwiIzk0YTNiOFwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgICAgb3BhY2l0eTogMC42LFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJhbGwgMC4zcyBlYXNlXCIsXG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcbiAgICAgICAgICB9fVxuICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZmVhdHVyZUxheWVycz8ubGVuZ3RoXG4gICAgICAgICAgICAgID8gdGhpcy50cihcInN0YXR1cy5yZWFkeVwiKVxuICAgICAgICAgICAgICA6IHRoaXMudHIoXCJzdGF0dXMubG9hZGluZ1wiKVxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuaW50ZXJmYWNlIElIYW5kbGVMaWtlIHtcbiAgcmVtb3ZlOiAoKSA9PiB2b2lkO1xufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHtcbiAgRGF0YVNvdXJjZUNvbXBvbmVudCxcbiAganN4LFxuICB0eXBlIERhdGFTb3VyY2UsXG4gIHR5cGUgUXVlcmlhYmxlRGF0YVNvdXJjZSxcbn0gZnJvbSBcImppbXUtY29yZVwiO1xuaW1wb3J0IHsgSmltdU1hcFZpZXdDb21wb25lbnQsIHR5cGUgSmltdU1hcFZpZXcgfSBmcm9tIFwiamltdS1hcmNnaXNcIjtcbmltcG9ydCB7IHRvUGxhaW5BcnJheSB9IGZyb20gXCIuL2FncmktZGF0YS1zb3VyY2UtZW5naW5lXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHVzZURhdGFTb3VyY2VzPzogYW55O1xuICB1c2VNYXBXaWRnZXRJZHM/OiBhbnk7XG4gIG9uRGF0YVNvdXJjZUNyZWF0ZWQ/OiAoZHM6IFF1ZXJpYWJsZURhdGFTb3VyY2UpID0+IHZvaWQ7XG4gIG9uQWN0aXZlVmlld0NoYW5nZT86IChqaW11TWFwVmlldzogSmltdU1hcFZpZXcpID0+IHZvaWQ7XG59XG5cbi8qKiBIaWRkZW4gRGF0YVNvdXJjZSArIE1hcCBjb25uZWN0b3JzIChzYW1lIHBhdHRlcm4gYXMgQWdyaUxvY2FsaXphdGlvbikuXG4gKiBPbmx5IGNvbm5lY3QgdGhlIGZpcnN0IHVzZURhdGFTb3VyY2Ug4oCUIG1vdW50aW5nIGFsbCB+MzArIHJlZ2lvbiBGZWF0dXJlU2VydmVyc1xuICogb24gZXZlcnkgY2hpbGQgcmVtb3VudCBmbG9vZHMgTmV0d29yayB3aXRoIEZlYXR1cmVTZXJ2ZXI/Zj1qc29uIGxvYWRzIGFuZFxuICogZG9lcyBub3QgaGVscCBtYXAgaGl0LXRlc3RpbmcgKGxpdmUgTWFwVmlldyBsYXllcnMgYXJlIHVzZWQgaW5zdGVhZCkuICovXG5leHBvcnQgZnVuY3Rpb24gQWdyaUhpZGRlbkNvbm5lY3RvcnMocHJvcHM6IFByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCBzZWxlY3RlZFVzZURhdGFTb3VyY2VzID0gdG9QbGFpbkFycmF5PGFueT4ocHJvcHMudXNlRGF0YVNvdXJjZXMpO1xuICBjb25zdCBtYXBXaWRnZXRJZCA9IHRvUGxhaW5BcnJheTxzdHJpbmc+KHByb3BzLnVzZU1hcFdpZGdldElkcylbMF07XG4gIGNvbnN0IHByaW1hcnlEcyA9IHNlbGVjdGVkVXNlRGF0YVNvdXJjZXNbMF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAge3ByaW1hcnlEcyA/IChcbiAgICAgICAgPERhdGFTb3VyY2VDb21wb25lbnRcbiAgICAgICAgICBrZXk9e3ByaW1hcnlEcz8uZGF0YVNvdXJjZUlkfVxuICAgICAgICAgIHVzZURhdGFTb3VyY2U9e3ByaW1hcnlEc31cbiAgICAgICAgICBvbkRhdGFTb3VyY2VDcmVhdGVkPXtcbiAgICAgICAgICAgIHByb3BzLm9uRGF0YVNvdXJjZUNyZWF0ZWRcbiAgICAgICAgICAgICAgPyAoZHM6IERhdGFTb3VyY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgIHByb3BzLm9uRGF0YVNvdXJjZUNyZWF0ZWQ/LihkcyBhcyBRdWVyaWFibGVEYXRhU291cmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgKSA6IG51bGx9XG4gICAgICB7bWFwV2lkZ2V0SWQgJiYgKFxuICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcbiAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17bWFwV2lkZ2V0SWR9XG4gICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXtwcm9wcy5vbkFjdGl2ZVZpZXdDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IHsgdHlwZSBRdWVyaWFibGVEYXRhU291cmNlIH0gZnJvbSBcImppbXUtY29yZVwiO1xuaW1wb3J0IHtcbiAgYnVpbGRBZ3JpV2hlcmUsXG4gIGNhbm9uaWNhbGl6ZVJlZ2lvbkZpbHRlclZhbHVlLFxuICBkaXNhYmxlTGF5ZXJQYmYsXG4gIGZsTG9nLFxuICBoYXlzdGFja01hdGNoZXNSZWdpb24sXG4gIGhheXN0YWNrTWF0Y2hlc1llYXIsXG4gIGdldFF1ZXJ5YWJsZUxheWVyLFxuICBwaWNrWWVhclJlZ2lvbkxheWVyUG9vbCxcbiAgcHJlcGFyZVZhbHVlSW5kZXgsXG4gIHF1aWNrTGF5ZXJGZWF0dXJlQ291bnQsXG4gIHJlc29sdmVGZWF0dXJlTGF5ZXJGb3JGaWx0ZXJzLFxuICBzYWZlTG9hZE1hcExheWVyLFxuICBzY29yZUhheXN0YWNrRm9yRmlsdGVycyxcbiAgdHlwZSBBZ3JpRmlsdGVycyxcbiAgdHlwZSBSZXNvbHZlZEZlYXR1cmVMYXllcixcbn0gZnJvbSBcIi4vZmVhdHVyZS1sYXllci1kYXRhXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1BsYWluQXJyYXk8VCA9IGFueT4odmFsOiBhbnkpOiBUW10ge1xuICBpZiAoIXZhbCkgcmV0dXJuIFtdO1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSByZXR1cm4gdmFsIGFzIFRbXTtcbiAgaWYgKHR5cGVvZiB2YWwuYXNNdXRhYmxlID09PSBcImZ1bmN0aW9uXCIpXG4gICAgcmV0dXJuIHZhbC5hc011dGFibGUoeyBkZWVwOiB0cnVlIH0pIGFzIFRbXTtcbiAgaWYgKHR5cGVvZiB2YWwudG9BcnJheSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdmFsLnRvQXJyYXkoKSBhcyBUW107XG4gIHJldHVybiBbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdGVkRHNJZHModXNlRGF0YVNvdXJjZXM6IGFueSk6IHN0cmluZ1tdIHtcbiAgY29uc3QgdWRzID0gdG9QbGFpbkFycmF5PGFueT4odXNlRGF0YVNvdXJjZXMpO1xuICBjb25zdCBpZHMgPSB1ZHMubWFwKCh1KSA9PiB1Py5kYXRhU291cmNlSWQpLmZpbHRlcihCb29sZWFuKTtcbiAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChpZHMpKTtcbn1cblxudHlwZSBTY29yZWREcyA9IHtcbiAgZHM6IFF1ZXJpYWJsZURhdGFTb3VyY2U7XG4gIHNjb3JlOiBudW1iZXI7XG4gIHJlZ2lvbk1hdGNoOiBib29sZWFuO1xufTtcblxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgYWN0aXZlIEZlYXR1cmVMYXllciBmb3IgZGFzaGJvYXJkIHdpZGdldHMuXG4gKiBQcmVmZXJzIEVYQiBEYXRhU291cmNlcyAoc2FtZSBwYXRoIGFzIEFncmlMb2NhbGl6YXRpb24pLFxuICogZmFsbHMgYmFjayB0byBKaW11TWFwVmlldyBtYXAgbGF5ZXJzLlxuICovXG5leHBvcnQgY2xhc3MgQWdyaURhdGFTb3VyY2VFbmdpbmUge1xuICBwcml2YXRlIGRzQnlJZDogUmVjb3JkPHN0cmluZywgUXVlcmlhYmxlRGF0YVNvdXJjZT4gPSB7fTtcbiAgcHJpdmF0ZSBzZWxlY3RlZElkczogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSByZXNvbHZlQ2FjaGUgPSBuZXcgTWFwPFxuICAgIHN0cmluZyxcbiAgICBQcm9taXNlPFJlc29sdmVkRmVhdHVyZUxheWVyIHwgbnVsbD5cbiAgPigpO1xuXG4gIG9uRHNDcmVhdGVkKGRzOiBRdWVyaWFibGVEYXRhU291cmNlLCBpZHM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgaWYgKCFkcz8uaWQpIHJldHVybjtcbiAgICB0aGlzLmRzQnlJZFtkcy5pZF0gPSBkcztcbiAgICB0aGlzLnNlbGVjdGVkSWRzID0gWy4uLmlkc107XG4gICAgdGhpcy5yZXNvbHZlQ2FjaGUuY2xlYXIoKTtcbiAgfVxuXG4gIHN5bmNTZWxlY3Rpb24oaWRzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRJZHMgPSBbLi4uaWRzXTtcbiAgICB0aGlzLnJlc29sdmVDYWNoZS5jbGVhcigpO1xuICB9XG5cbiAgY2xlYXJSZXNvbHZlQ2FjaGUoKTogdm9pZCB7XG4gICAgdGhpcy5yZXNvbHZlQ2FjaGUuY2xlYXIoKTtcbiAgfVxuXG4gIC8qKiBUcnVlIHdoaWxlIHNlbGVjdGVkIGRhdGEgc291cmNlcyBhcmUgc3RpbGwgY29ubmVjdGluZyAobm8gbWFwIGZhbGxiYWNrIHlldCkuICovXG4gIGlzUmVzb2x2ZVBlbmRpbmcoamltdU1hcFZpZXc6IGFueSB8IG51bGwpOiBib29sZWFuIHtcbiAgICBpZiAoamltdU1hcFZpZXc/LnZpZXc/Lm1hcCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICghdGhpcy5zZWxlY3RlZElkcy5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBjb25uZWN0ZWQgPSB0aGlzLnNlbGVjdGVkSWRzLmZpbHRlcigoaWQpID0+ICEhdGhpcy5kc0J5SWRbaWRdKS5sZW5ndGg7XG4gICAgcmV0dXJuIGNvbm5lY3RlZCA8IHRoaXMuc2VsZWN0ZWRJZHMubGVuZ3RoO1xuICB9XG5cbiAgaGFzQ29ubmVjdGVkU291cmNlcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZElkcy5zb21lKChpZCkgPT4gISF0aGlzLmRzQnlJZFtpZF0pO1xuICB9XG5cbiAgZ2V0TGF5ZXJGcm9tRHMoZHM6IFF1ZXJpYWJsZURhdGFTb3VyY2UpOiBhbnkgfCBudWxsIHtcbiAgICBjb25zdCBhbnlEcyA9IGRzIGFzIGFueTtcbiAgICByZXR1cm4gZ2V0UXVlcnlhYmxlTGF5ZXIoYW55RHMubGF5ZXIgfHwgYW55RHMuX2xheWVyKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RHNIYXlzdGFjayhkczogUXVlcmlhYmxlRGF0YVNvdXJjZSk6IHN0cmluZyB7XG4gICAgY29uc3QgYW55RHMgPSBkcyBhcyBhbnk7XG4gICAgY29uc3QgbGF5ZXIgPSBhbnlEcy5sYXllciB8fCBhbnlEcy5fbGF5ZXI7XG4gICAgY29uc3QgdGl0bGUgPSBTdHJpbmcobGF5ZXI/LnRpdGxlIHx8IFwiXCIpO1xuICAgIGNvbnN0IHVybCA9IFN0cmluZyhsYXllcj8udXJsIHx8IGFueURzLmdldERhdGFTb3VyY2VKc29uPy4oKT8udXJsIHx8IFwiXCIpO1xuICAgIGNvbnN0IGxhYmVsID0gU3RyaW5nKFxuICAgICAgYW55RHMuZ2V0TGFiZWw/LigpIHx8XG4gICAgICAgIGFueURzLmdldERhdGFTb3VyY2VKc29uPy4oKT8ubGFiZWwgfHxcbiAgICAgICAgYW55RHMuZ2V0RGF0YVNvdXJjZUpzb24/LigpPy5zb3VyY2VMYWJlbCB8fFxuICAgICAgICBcIlwiLFxuICAgICk7XG4gICAgcmV0dXJuIGAke3RpdGxlfSAke3VybH0gJHtsYWJlbH1gO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZFJlZ2lvblByb2JlV2hlcmUoXG4gICAgZmlsdGVyczogUGljazxBZ3JpRmlsdGVycywgXCJ5aWxcIiB8IFwidmlsb3lhdFwiPixcbiAgICBsYXllcjogYW55LFxuICAgIGZpZWxkczogc3RyaW5nW10sXG4gICAgcmVnaW9uU2NvcGVkOiBib29sZWFuLFxuICAgIHllYXJTY29wZWQ6IGJvb2xlYW4sXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGJ1aWxkQWdyaVdoZXJlKFxuICAgICAge1xuICAgICAgICB5aWw6IGZpbHRlcnMueWlsLFxuICAgICAgICB2aWxveWF0OiBmaWx0ZXJzLnZpbG95YXQsXG4gICAgICAgIHNraXBSZWdpb25GaWx0ZXI6IHJlZ2lvblNjb3BlZCxcbiAgICAgICAgc2tpcFllYXJGaWx0ZXI6IHllYXJTY29wZWQsXG4gICAgICB9LFxuICAgICAgZmllbGRzLFxuICAgICAgbGF5ZXIsXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcGlja0Jlc3REc0J5Q291bnQoXG4gICAgcG9vbDogU2NvcmVkRHNbXSxcbiAgICBmaWx0ZXJzOiBQaWNrPEFncmlGaWx0ZXJzLCBcInlpbFwiIHwgXCJ2aWxveWF0XCI+LFxuICAgIHByZWZlcnJlZERzOiBRdWVyaWFibGVEYXRhU291cmNlIHwgbnVsbCxcbiAgKTogUHJvbWlzZTxTY29yZWREcyB8IG51bGw+IHtcbiAgICBpZiAoIXBvb2wubGVuZ3RoKSByZXR1cm4gbnVsbDtcbiAgICBpZiAoIVN0cmluZyhmaWx0ZXJzLnZpbG95YXQgPz8gXCJcIikudHJpbSgpIHx8IHBvb2wubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gcG9vbFswXTtcbiAgICB9XG5cbiAgICBjb25zdCBzY29yZWQ6IEFycmF5PHsgaXRlbTogU2NvcmVkRHM7IGNvdW50OiBudW1iZXIgfT4gPSBbXTtcbiAgICBjb25zdCB0cnlJdGVtID0gYXN5bmMgKGl0ZW06IFNjb3JlZERzKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICBjb25zdCBsYXllciA9IHRoaXMuZ2V0TGF5ZXJGcm9tRHMoaXRlbS5kcyk7XG4gICAgICBpZiAoIWxheWVyKSByZXR1cm47XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBzYWZlTG9hZE1hcExheWVyKGxheWVyKTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvKiBpZ25vcmUgKi9cbiAgICAgIH1cbiAgICAgIGNvbnN0IGZpZWxkczogc3RyaW5nW10gPSAobGF5ZXIuZmllbGRzIHx8IFtdKS5tYXAoKGY6IGFueSkgPT4gZi5uYW1lKTtcbiAgICAgIGNvbnN0IHdoZXJlID0gdGhpcy5idWlsZFJlZ2lvblByb2JlV2hlcmUoXG4gICAgICAgIGZpbHRlcnMsXG4gICAgICAgIGxheWVyLFxuICAgICAgICBmaWVsZHMsXG4gICAgICAgIGl0ZW0ucmVnaW9uTWF0Y2gsXG4gICAgICAgIGhheXN0YWNrTWF0Y2hlc1llYXIodGhpcy5nZXREc0hheXN0YWNrKGl0ZW0uZHMpLCBmaWx0ZXJzLnlpbCksXG4gICAgICApO1xuICAgICAgY29uc3QgY291bnQgPSBhd2FpdCBxdWlja0xheWVyRmVhdHVyZUNvdW50KGxheWVyLCB3aGVyZSk7XG4gICAgICBzY29yZWQucHVzaCh7IGl0ZW0sIGNvdW50IH0pO1xuICAgIH07XG5cbiAgICBpZiAocHJlZmVycmVkRHMpIHtcbiAgICAgIGNvbnN0IHByZWZlcnJlZCA9IHBvb2wuZmluZCgocCkgPT4gcC5kcy5pZCA9PT0gcHJlZmVycmVkRHMuaWQpO1xuICAgICAgaWYgKHByZWZlcnJlZCkge1xuICAgICAgICBhd2FpdCB0cnlJdGVtKHByZWZlcnJlZCk7XG4gICAgICAgIGNvbnN0IHByZWZlcnJlZENvdW50ID0gc2NvcmVkWzBdPy5jb3VudCA/PyAtMTtcbiAgICAgICAgaWYgKHByZWZlcnJlZENvdW50ID4gMCkgcmV0dXJuIHByZWZlcnJlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW1haW5pbmcgPSBwb29sLmZpbHRlcihcbiAgICAgIChwKSA9PiAhcHJlZmVycmVkRHMgfHwgcC5kcy5pZCAhPT0gcHJlZmVycmVkRHMuaWQsXG4gICAgKTtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChyZW1haW5pbmcubWFwKChpdGVtKSA9PiB0cnlJdGVtKGl0ZW0pKSk7XG5cbiAgICBjb25zdCBwb3NpdGl2ZSA9IHNjb3JlZFxuICAgICAgLmZpbHRlcigocykgPT4gcy5jb3VudCA+IDApXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5jb3VudCAtIGEuY291bnQpO1xuICAgIGlmIChwb3NpdGl2ZS5sZW5ndGgpIHJldHVybiBwb3NpdGl2ZVswXS5pdGVtO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIHNjb3JlZC5maW5kKChzKSA9PiBzLmNvdW50ID49IDApPy5pdGVtIHx8XG4gICAgICBwb29sLmZpbmQoKHApID0+IHAuZHMuaWQgPT09IHByZWZlcnJlZERzPy5pZCkgfHxcbiAgICAgIHBvb2xbMF1cbiAgICApO1xuICB9XG5cbiAgYXN5bmMgcmVzb2x2ZUZyb21EYXRhU291cmNlcyhcbiAgICBmaWx0ZXJzOiBQaWNrPEFncmlGaWx0ZXJzLCBcInlpbFwiIHwgXCJ2aWxveWF0XCI+LFxuICApOiBQcm9taXNlPFJlc29sdmVkRmVhdHVyZUxheWVyIHwgbnVsbD4ge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRGaWx0ZXJzID0ge1xuICAgICAgeWlsOiBmaWx0ZXJzLnlpbCxcbiAgICAgIHZpbG95YXQ6IGNhbm9uaWNhbGl6ZVJlZ2lvbkZpbHRlclZhbHVlKFN0cmluZyhmaWx0ZXJzLnZpbG95YXQgPz8gXCJcIikudHJpbSgpKSxcbiAgICB9O1xuICAgIGNvbnN0IHdhbnRzUmVnaW9uID0gISFub3JtYWxpemVkRmlsdGVycy52aWxveWF0O1xuICAgIGNvbnN0IHNjb3JlZDogU2NvcmVkRHNbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBpZCBvZiB0aGlzLnNlbGVjdGVkSWRzKSB7XG4gICAgICBjb25zdCBkcyA9IHRoaXMuZHNCeUlkW2lkXTtcbiAgICAgIGlmICghZHMgfHwgIXRoaXMuZ2V0TGF5ZXJGcm9tRHMoZHMpKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IGhheXN0YWNrID0gdGhpcy5nZXREc0hheXN0YWNrKGRzKTtcbiAgICAgIHNjb3JlZC5wdXNoKHtcbiAgICAgICAgZHMsXG4gICAgICAgIHNjb3JlOiBzY29yZUhheXN0YWNrRm9yRmlsdGVycyhoYXlzdGFjaywgbm9ybWFsaXplZEZpbHRlcnMpLFxuICAgICAgICByZWdpb25NYXRjaDogaGF5c3RhY2tNYXRjaGVzUmVnaW9uKGhheXN0YWNrLCBub3JtYWxpemVkRmlsdGVycy52aWxveWF0KSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghc2NvcmVkLmxlbmd0aCkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBwb29sID0gcGlja1llYXJSZWdpb25MYXllclBvb2woXG4gICAgICBzY29yZWQsXG4gICAgICBzY29yZWQubGVuZ3RoLFxuICAgICAgbm9ybWFsaXplZEZpbHRlcnMsXG4gICAgICAoaXRlbSkgPT4gdGhpcy5nZXREc0hheXN0YWNrKGl0ZW0uZHMpLFxuICAgICk7XG4gICAgaWYgKCFwb29sLmxlbmd0aCkgcmV0dXJuIG51bGw7XG5cbiAgICBsZXQgYmVzdFNjb3JlID0gLTE7XG4gICAgbGV0IHNjb3JlV2lubmVyOiBTY29yZWREcyB8IG51bGwgPSBudWxsO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBwb29sKSB7XG4gICAgICBpZiAoaXRlbS5zY29yZSA+IGJlc3RTY29yZSkge1xuICAgICAgICBiZXN0U2NvcmUgPSBpdGVtLnNjb3JlO1xuICAgICAgICBzY29yZVdpbm5lciA9IGl0ZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcHJlZmVycmVkRHMgPSBzY29yZVdpbm5lcj8uZHMgfHwgbnVsbDtcbiAgICBjb25zdCBiZXN0SXRlbSA9XG4gICAgICB3YW50c1JlZ2lvbiAmJiBwb29sLmxlbmd0aCA+IDFcbiAgICAgICAgPyBhd2FpdCB0aGlzLnBpY2tCZXN0RHNCeUNvdW50KHBvb2wsIG5vcm1hbGl6ZWRGaWx0ZXJzLCBwcmVmZXJyZWREcylcbiAgICAgICAgOiBzY29yZVdpbm5lcjtcblxuICAgIGNvbnN0IGJlc3REcyA9IGJlc3RJdGVtPy5kcyB8fCBwcmVmZXJyZWREcztcbiAgICBpZiAoIWJlc3REcykgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBsYXllciA9IHRoaXMuZ2V0TGF5ZXJGcm9tRHMoYmVzdERzKTtcbiAgICBpZiAoIWxheWVyKSByZXR1cm4gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzYWZlTG9hZE1hcExheWVyKGxheWVyKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8qIGxheWVyIG1heSBhbHJlYWR5IGJlIGxvYWRlZCAqL1xuICAgIH1cbiAgICBkaXNhYmxlTGF5ZXJQYmYobGF5ZXIpO1xuXG4gICAgY29uc3QgZmllbGRzOiBzdHJpbmdbXSA9IChsYXllci5maWVsZHMgfHwgW10pLm1hcCgoZjogYW55KSA9PiBmLm5hbWUpO1xuICAgIGNvbnN0IHJlZ2lvbk1hdGNoID0gYmVzdEl0ZW0/LnJlZ2lvbk1hdGNoID8/IGZhbHNlO1xuICAgIGNvbnN0IHJlZ2lvblNjb3BlZCA9IHJlZ2lvbk1hdGNoIHx8IChiZXN0SXRlbT8uc2NvcmUgPz8gMCkgPj0gMjU7XG4gICAgY29uc3QgaGF5c3RhY2sgPSB0aGlzLmdldERzSGF5c3RhY2soYmVzdERzKTtcbiAgICBjb25zdCB5ZWFyU2NvcGVkID0gaGF5c3RhY2tNYXRjaGVzWWVhcihoYXlzdGFjaywgbm9ybWFsaXplZEZpbHRlcnMueWlsKTtcblxuICAgIGZsTG9nKFwicmVzb2x2ZSB2aWEgRGF0YVNvdXJjZVwiLCB7XG4gICAgICBmaWx0ZXJzOiBub3JtYWxpemVkRmlsdGVycyxcbiAgICAgIGRzSWQ6IGJlc3REcy5pZCxcbiAgICAgIGxheWVyVGl0bGU6IGxheWVyPy50aXRsZSB8fCBsYXllcj8udXJsIHx8IG51bGwsXG4gICAgICBzY29yZTogYmVzdEl0ZW0/LnNjb3JlID8/IGJlc3RTY29yZSxcbiAgICAgIHJlZ2lvblNjb3BlZCxcbiAgICAgIHllYXJTY29wZWQsXG4gICAgICBmaWVsZENvdW50OiBmaWVsZHMubGVuZ3RoLFxuICAgICAgY291bnRCYXNlZDogd2FudHNSZWdpb24gJiYgcG9vbC5sZW5ndGggPiAxLFxuICAgIH0pO1xuICAgIHZvaWQgcHJlcGFyZVZhbHVlSW5kZXgobGF5ZXIsIGZpZWxkcyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxheWVyLFxuICAgICAgZmllbGRzLFxuICAgICAgcmVnaW9uU2NvcGVkLFxuICAgICAgeWVhclNjb3BlZCxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgcmVzb2x2ZShcbiAgICBmaWx0ZXJzOiBQaWNrPEFncmlGaWx0ZXJzLCBcInlpbFwiIHwgXCJ2aWxveWF0XCI+LFxuICAgIGppbXVNYXBWaWV3OiBhbnkgfCBudWxsLFxuICApOiBQcm9taXNlPFJlc29sdmVkRmVhdHVyZUxheWVyIHwgbnVsbD4ge1xuICAgIGNvbnN0IGNhY2hlS2V5ID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgeWlsOiBmaWx0ZXJzLnlpbCB8fCBcIlwiLFxuICAgICAgdmlsb3lhdDogY2Fub25pY2FsaXplUmVnaW9uRmlsdGVyVmFsdWUoU3RyaW5nKGZpbHRlcnMudmlsb3lhdCA/PyBcIlwiKS50cmltKCkpLFxuICAgICAgaWRzOiB0aGlzLnNlbGVjdGVkSWRzLFxuICAgICAgbWFwUmVhZHk6ICEhamltdU1hcFZpZXcsXG4gICAgfSk7XG4gICAgY29uc3QgcGVuZGluZyA9IHRoaXMucmVzb2x2ZUNhY2hlLmdldChjYWNoZUtleSk7XG4gICAgaWYgKHBlbmRpbmcpIHJldHVybiBwZW5kaW5nO1xuXG4gICAgY29uc3Qgam9iID0gdGhpcy5yZXNvbHZlSW50ZXJuYWwoZmlsdGVycywgamltdU1hcFZpZXcpO1xuICAgIHRoaXMucmVzb2x2ZUNhY2hlLnNldChjYWNoZUtleSwgam9iKTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGF3YWl0IGpvYjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKHRoaXMucmVzb2x2ZUNhY2hlLmdldChjYWNoZUtleSkgPT09IGpvYikge1xuICAgICAgICB0aGlzLnJlc29sdmVDYWNoZS5kZWxldGUoY2FjaGVLZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcmVzb2x2ZUludGVybmFsKFxuICAgIGZpbHRlcnM6IFBpY2s8QWdyaUZpbHRlcnMsIFwieWlsXCIgfCBcInZpbG95YXRcIj4sXG4gICAgamltdU1hcFZpZXc6IGFueSB8IG51bGwsXG4gICk6IFByb21pc2U8UmVzb2x2ZWRGZWF0dXJlTGF5ZXIgfCBudWxsPiB7XG4gICAgY29uc3QgZnJvbURzID0gYXdhaXQgdGhpcy5yZXNvbHZlRnJvbURhdGFTb3VyY2VzKGZpbHRlcnMpO1xuICAgIGlmIChmcm9tRHMpIHJldHVybiBmcm9tRHM7XG4gICAgaWYgKCFqaW11TWFwVmlldykge1xuICAgICAgZmxMb2coXCJyZXNvbHZlIEZBSUxFRCAobm8gRFMgbGF5ZXIsIG5vIG1hcCB2aWV3KVwiLCB7XG4gICAgICAgIGZpbHRlcnMsXG4gICAgICAgIHNlbGVjdGVkSWRzOiB0aGlzLnNlbGVjdGVkSWRzLFxuICAgICAgICBjb25uZWN0ZWRJZHM6IHRoaXMuc2VsZWN0ZWRJZHMuZmlsdGVyKChpZCkgPT4gISF0aGlzLmRzQnlJZFtpZF0pLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgZnJvbU1hcCA9IGF3YWl0IHJlc29sdmVGZWF0dXJlTGF5ZXJGb3JGaWx0ZXJzKGppbXVNYXBWaWV3LCBmaWx0ZXJzKTtcbiAgICBmbExvZyhcInJlc29sdmUgdmlhIE1hcFwiLCB7XG4gICAgICBmaWx0ZXJzLFxuICAgICAgbGF5ZXJUaXRsZTogZnJvbU1hcD8ubGF5ZXI/LnRpdGxlIHx8IGZyb21NYXA/LmxheWVyPy51cmwgfHwgbnVsbCxcbiAgICAgIHJlZ2lvblNjb3BlZDogZnJvbU1hcD8ucmVnaW9uU2NvcGVkID8/IG51bGwsXG4gICAgICB5ZWFyU2NvcGVkOiBmcm9tTWFwPy55ZWFyU2NvcGVkID8/IG51bGwsXG4gICAgICBmb3VuZDogISFmcm9tTWFwLFxuICAgIH0pO1xuICAgIGlmIChmcm9tTWFwPy5sYXllcikge1xuICAgICAgdm9pZCBwcmVwYXJlVmFsdWVJbmRleChmcm9tTWFwLmxheWVyLCBmcm9tTWFwLmZpZWxkcyk7XG4gICAgfVxuICAgIHJldHVybiBmcm9tTWFwO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBZ3JpRGF0YVNvdXJjZUVuZ2luZSB9IGZyb20gXCIuL2FncmktZGF0YS1zb3VyY2UtZW5naW5lXCI7XG5cbmNvbnN0IERBU0hCT0FSRF9DSElMRF9TVUZGSVhFUyA9IFtcbiAgXCItbG9jYWxpemF0aW9uXCIsXG4gIFwiLWluZGljYXRvclwiLFxuICBcIi1yZWdpb25cIixcbiAgXCItcGllXCIsXG4gIFwiLWdyYWZmXCIsXG4gIFwiLWJhclwiLFxuICBcIi1wb3B1cFwiLFxuXSBhcyBjb25zdDtcblxuLyoqIFJvb3QgQWdyb1dpZGdldFY1IHdpZGdldCBpZCBmcm9tIGFueSBlbWJlZGRlZCBjaGlsZCBpZC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBZ3JpRGFzaGJvYXJkUm9vdElkKHdpZGdldElkOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBpZCA9IFN0cmluZyh3aWRnZXRJZCB8fCBcIlwiKTtcbiAgZm9yIChjb25zdCBzdWZmaXggb2YgREFTSEJPQVJEX0NISUxEX1NVRkZJWEVTKSB7XG4gICAgaWYgKGlkLmVuZHNXaXRoKHN1ZmZpeCkpIHJldHVybiBpZC5zbGljZSgwLCAtc3VmZml4Lmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIGlkO1xufVxuXG5jb25zdCBzaGFyZWRFbmdpbmVzID0gbmV3IE1hcDxzdHJpbmcsIEFncmlEYXRhU291cmNlRW5naW5lPigpO1xuXG4vKiogT25lIERhdGFTb3VyY2UgZW5naW5lIHBlciBkYXNoYm9hcmQgaW5zdGFuY2Ug4oCUIHNoYXJlZCBieSBhbGwgZW1iZWRkZWQgY2hpbGRyZW4uICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2hhcmVkQWdyaURhdGFTb3VyY2VFbmdpbmUoXG4gIHdpZGdldElkOiBzdHJpbmcsXG4pOiBBZ3JpRGF0YVNvdXJjZUVuZ2luZSB7XG4gIGNvbnN0IHJvb3RJZCA9IGdldEFncmlEYXNoYm9hcmRSb290SWQod2lkZ2V0SWQpO1xuICBsZXQgZW5naW5lID0gc2hhcmVkRW5naW5lcy5nZXQocm9vdElkKTtcbiAgaWYgKCFlbmdpbmUpIHtcbiAgICBlbmdpbmUgPSBuZXcgQWdyaURhdGFTb3VyY2VFbmdpbmUoKTtcbiAgICBzaGFyZWRFbmdpbmVzLnNldChyb290SWQsIGVuZ2luZSk7XG4gIH1cbiAgcmV0dXJuIGVuZ2luZTtcbn1cbiIsImltcG9ydCB7IEFwcE1vZGUsIGdldEFwcFN0b3JlIH0gZnJvbSBcImppbXUtY29yZVwiO1xuaW1wb3J0IHsgdG9QbGFpbkFycmF5IH0gZnJvbSBcIi4vYWdyaS1kYXRhLXNvdXJjZS1lbmdpbmVcIjtcblxuZXhwb3J0IHR5cGUgTGlua2VkTWFwTGF5b3V0U2NvcGUgPSBcImRhc2hib2FyZFwiIHwgXCJwbG1cIjtcblxuY29uc3QgTUFOQUdFRF9NQVBfQ0xBU1M6IFJlY29yZDxMaW5rZWRNYXBMYXlvdXRTY29wZSwgc3RyaW5nPiA9IHtcbiAgZGFzaGJvYXJkOiBcImFncmktZGFzaGJvYXJkLW1hbmFnZWQtbWFwXCIsXG4gIHBsbTogXCJwbG0tbWFuYWdlZC1tYXBcIixcbn07XG5cbmNvbnN0IE1BTkFHRURfUkVOREVSRVJfQ0xBU1M6IFJlY29yZDxMaW5rZWRNYXBMYXlvdXRTY29wZSwgc3RyaW5nPiA9IHtcbiAgZGFzaGJvYXJkOiBcImFncmktZGFzaGJvYXJkLW1hbmFnZWQtbWFwLXJlbmRlcmVyXCIsXG4gIHBsbTogXCJwbG0tbWFuYWdlZC1tYXAtcmVuZGVyZXJcIixcbn07XG5cbmNvbnN0IE1BUF9QQU5FTF9CT1JERVJfUkFESVVTID0gXCIyMHB4XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWdyaUxpbmtlZE1hcExheW91dE9wdGlvbnMge1xuICBzY29wZTogTGlua2VkTWFwTGF5b3V0U2NvcGU7XG4gIGhvc3RXaWRnZXRJZDogc3RyaW5nO1xuICBnZXRTbG90RWxlbWVudDogKCkgPT4gSFRNTEVsZW1lbnQgfCBudWxsO1xuICBnZXRVc2VNYXBXaWRnZXRJZHM6ICgpID0+IHVua25vd247XG4gIG9uTWFwV2lkZ2V0TGlua2VkPzogKG1hcFdpZGdldElkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIC8qKiBGaXJlZCB3aGVuIGEgbWFwIHdpZGdldCBpZCBiZWNvbWVzIGF2YWlsYWJsZSAoY29uZmlnIGxpbmsgb3IgYXBwIGRpc2NvdmVyeSkuICovXG4gIG9uTWFwUmVzb2x2ZWQ/OiAobWFwV2lkZ2V0SWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgcmVzaXplTWFwVmlldz86ICgpID0+IHZvaWQ7XG59XG5cbmZ1bmN0aW9uIGlzTWFwV2lkZ2V0Q29uZmlnKHdpZGdldDogYW55KTogYm9vbGVhbiB7XG4gIGNvbnN0IG1hbmlmZXN0TmFtZSA9IFN0cmluZyh3aWRnZXQ/Lm1hbmlmZXN0Py5uYW1lIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IHVyaSA9IFN0cmluZyh3aWRnZXQ/LnVyaSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gbWFuaWZlc3ROYW1lID09PSBcIm1hcFwiIHx8IHVyaS5pbmNsdWRlcyhcImFyY2dpcy1tYXBcIik7XG59XG5cbmZ1bmN0aW9uIGZpbmRXaWRnZXRSZW5kZXJlcih3aWRnZXRJZDogc3RyaW5nKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3Qgc2VsZWN0b3JzID0gW1xuICAgIGAud2lkZ2V0LXJlbmRlcmVyW2RhdGEtd2lkZ2V0aWQ9XCIke3dpZGdldElkfVwiXWAsXG4gICAgYFtkYXRhLXdpZGdldGlkPVwiJHt3aWRnZXRJZH1cIl0ud2lkZ2V0LXJlbmRlcmVyYCxcbiAgICBgW2RhdGEtd2lkZ2V0aWQ9XCIke3dpZGdldElkfVwiXWAsXG4gIF07XG4gIGZvciAoY29uc3Qgc2VsZWN0b3Igb2Ygc2VsZWN0b3JzKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgaWYgKGVsKSByZXR1cm4gZWw7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGZpbmRXaWRnZXRMYXlvdXRJdGVtKHdpZGdldElkOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB8IG51bGwge1xuICBjb25zdCByZW5kZXJlciA9IGZpbmRXaWRnZXRSZW5kZXJlcih3aWRnZXRJZCk7XG4gIGlmICghcmVuZGVyZXIpIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IGNhbmRpZGF0ZXMgPSBbXG4gICAgcmVuZGVyZXIuY2xvc2VzdChcIi5sYXlvdXQtaXRlbS5pcy13aWRnZXRcIiksXG4gICAgcmVuZGVyZXIuY2xvc2VzdChcIi5idWlsZGVyLWxheW91dC1pdGVtXCIpLFxuICAgIHJlbmRlcmVyLmNsb3Nlc3QoXCIubGF5b3V0LWl0ZW1cIiksXG4gICAgcmVuZGVyZXIuY2xvc2VzdChcIi5zZWN0aW9uLWxheW91dC1pdGVtXCIpLFxuICAgIHJlbmRlcmVyLmNsb3Nlc3QoJ1tjbGFzcyo9XCJsYXlvdXQtaXRlbVwiXScpLFxuICAgIHJlbmRlcmVyLnBhcmVudEVsZW1lbnQsXG4gIF07XG5cbiAgZm9yIChjb25zdCBjYW5kaWRhdGUgb2YgY2FuZGlkYXRlcykge1xuICAgIGlmIChjYW5kaWRhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBjYW5kaWRhdGUuY29udGFpbnMocmVuZGVyZXIpKSB7XG4gICAgICByZXR1cm4gY2FuZGlkYXRlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZW5kZXJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzS25vd25NYXBXaWRnZXRJZCh3aWRnZXRJZD86IHN0cmluZyB8IG51bGwpOiBib29sZWFuIHtcbiAgY29uc3QgaWQgPSBTdHJpbmcod2lkZ2V0SWQgfHwgXCJcIikudHJpbSgpO1xuICBpZiAoIWlkKSByZXR1cm4gZmFsc2U7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB3aWRnZXRzID0gKGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKSBhcyBhbnkpPy5hcHBDb25maWc/LndpZGdldHMgfHwge307XG4gICAgY29uc3Qgd2lkZ2V0ID0gd2lkZ2V0c1tpZF07XG4gICAgaWYgKHdpZGdldCAmJiBpc01hcFdpZGdldENvbmZpZyh3aWRnZXQpKSByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCB7XG4gICAgLyogYXBwIGNvbmZpZyBtYXkgc3RpbGwgYmUgd2FybWluZyB1cCAqL1xuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gISFmaW5kV2lkZ2V0UmVuZGVyZXIoaWQpO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNNYXBPdmVybGFwcGluZ1Nsb3QobWFwV2lkZ2V0SWQ6IHN0cmluZywgc2xvdDogRE9NUmVjdCk6IGJvb2xlYW4ge1xuICBjb25zdCBpdGVtID0gZmluZFdpZGdldExheW91dEl0ZW0obWFwV2lkZ2V0SWQpO1xuICBpZiAoIWl0ZW0pIHJldHVybiBmYWxzZTtcbiAgY29uc3QgcmVjdCA9IGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IGN4ID0gcmVjdC5sZWZ0ICsgcmVjdC53aWR0aCAvIDI7XG4gIGNvbnN0IGN5ID0gcmVjdC50b3AgKyByZWN0LmhlaWdodCAvIDI7XG4gIGlmIChjeCA+PSBzbG90LmxlZnQgJiYgY3ggPD0gc2xvdC5yaWdodCAmJiBjeSA+PSBzbG90LnRvcCAmJiBjeSA8PSBzbG90LmJvdHRvbSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNvbnN0IG92ZXJsYXBYID0gTWF0aC5tYXgoXG4gICAgMCxcbiAgICBNYXRoLm1pbihyZWN0LnJpZ2h0LCBzbG90LnJpZ2h0KSAtIE1hdGgubWF4KHJlY3QubGVmdCwgc2xvdC5sZWZ0KSxcbiAgKTtcbiAgY29uc3Qgb3ZlcmxhcFkgPSBNYXRoLm1heChcbiAgICAwLFxuICAgIE1hdGgubWluKHJlY3QuYm90dG9tLCBzbG90LmJvdHRvbSkgLSBNYXRoLm1heChyZWN0LnRvcCwgc2xvdC50b3ApLFxuICApO1xuICBjb25zdCBvdmVybGFwQXJlYSA9IG92ZXJsYXBYICogb3ZlcmxhcFk7XG4gIGNvbnN0IG1hcEFyZWEgPSBNYXRoLm1heCgxLCByZWN0LndpZHRoICogcmVjdC5oZWlnaHQpO1xuICByZXR1cm4gb3ZlcmxhcEFyZWEgLyBtYXBBcmVhID4gMC4zO1xufVxuXG4vKiogRmluZCB0aGUgc3RhbmRhcmQgTWFwIHdpZGdldCBpZCBmcm9tIGFwcCBjb25maWcgKHB1Ymxpc2hlZCBleHBlcmllbmNlIHNhZmUpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpc2NvdmVyTWFwV2lkZ2V0SWRJbkFwcChvcHRpb25zOiB7XG4gIGhvc3RXaWRnZXRJZDogc3RyaW5nO1xuICBnZXRTbG90RWxlbWVudD86ICgpID0+IEhUTUxFbGVtZW50IHwgbnVsbDtcbn0pOiBzdHJpbmcgfCBudWxsIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzdGF0ZSA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKSBhcyBhbnk7XG4gICAgY29uc3Qgd2lkZ2V0cyA9IHN0YXRlPy5hcHBDb25maWc/LndpZGdldHMgfHwge307XG4gICAgY29uc3Qgb3duSWQgPSBvcHRpb25zLmhvc3RXaWRnZXRJZDtcbiAgICBjb25zdCBjYW5kaWRhdGVzOiBzdHJpbmdbXSA9IFtdO1xuICAgIE9iamVjdC5rZXlzKHdpZGdldHMpLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICBpZiAoaWQgPT09IG93bklkIHx8IGlkLnN0YXJ0c1dpdGgoYCR7b3duSWR9LWApKSByZXR1cm47XG4gICAgICBpZiAoaXNNYXBXaWRnZXRDb25maWcod2lkZ2V0c1tpZF0pKSBjYW5kaWRhdGVzLnB1c2goaWQpO1xuICAgIH0pO1xuICAgIGlmICghY2FuZGlkYXRlcy5sZW5ndGgpIHJldHVybiBudWxsO1xuICAgIGlmIChjYW5kaWRhdGVzLmxlbmd0aCA9PT0gMSkgcmV0dXJuIGNhbmRpZGF0ZXNbMF07XG5cbiAgICBjb25zdCBzbG90ID0gb3B0aW9ucy5nZXRTbG90RWxlbWVudD8uKCk/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmICghc2xvdCkgcmV0dXJuIGNhbmRpZGF0ZXNbMF07XG5cbiAgICBjb25zdCBpbnNpZGVTbG90ID0gY2FuZGlkYXRlcy5maWx0ZXIoKGlkKSA9PlxuICAgICAgaXNNYXBPdmVybGFwcGluZ1Nsb3QoaWQsIHNsb3QpLFxuICAgICk7XG4gICAgaWYgKGluc2lkZVNsb3QubGVuZ3RoID09PSAxKSByZXR1cm4gaW5zaWRlU2xvdFswXTtcbiAgICBjb25zdCBwb29sID0gaW5zaWRlU2xvdC5sZW5ndGggPyBpbnNpZGVTbG90IDogY2FuZGlkYXRlcztcblxuICAgIGxldCBiZXN0SWQgPSBwb29sWzBdO1xuICAgIGxldCBiZXN0RGlzdGFuY2UgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgcG9vbC5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgY29uc3QgaXRlbSA9IGZpbmRXaWRnZXRMYXlvdXRJdGVtKGlkKTtcbiAgICAgIGlmICghaXRlbSkgcmV0dXJuO1xuICAgICAgY29uc3QgcmVjdCA9IGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBkeCA9IHJlY3QubGVmdCArIHJlY3Qud2lkdGggLyAyIC0gKHNsb3QubGVmdCArIHNsb3Qud2lkdGggLyAyKTtcbiAgICAgIGNvbnN0IGR5ID0gcmVjdC50b3AgKyByZWN0LmhlaWdodCAvIDIgLSAoc2xvdC50b3AgKyBzbG90LmhlaWdodCAvIDIpO1xuICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLmh5cG90KGR4LCBkeSk7XG4gICAgICBpZiAoZGlzdGFuY2UgPCBiZXN0RGlzdGFuY2UpIHtcbiAgICAgICAgYmVzdERpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgICAgIGJlc3RJZCA9IGlkO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBiZXN0SWQ7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBZ3JpTGlua2VkTWFwTGF5b3V0TWFuYWdlciB7XG4gIHByaXZhdGUgbWFwTGF5b3V0SXRlbTogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBtYXBXaWRnZXRSZW5kZXJlcjogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBhdXRvTGlua0F0dGVtcHRlZCA9IGZhbHNlO1xuICBwcml2YXRlIGxheW91dFJhZiA9IDA7XG4gIHByaXZhdGUgbGFzdE5vdGlmaWVkTWFwSWQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgb3B0aW9uczogQWdyaUxpbmtlZE1hcExheW91dE9wdGlvbnMpIHt9XG5cbiAgc2NoZWR1bGVMYXlvdXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubGF5b3V0UmFmKSBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxheW91dFJhZik7XG4gICAgdGhpcy5sYXlvdXRSYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5sYXlvdXRSYWYgPSAwO1xuICAgICAgdGhpcy5zeW5jKCk7XG4gICAgfSk7XG4gIH1cblxuICBsYXlvdXROb3coKTogdm9pZCB7XG4gICAgdGhpcy5zeW5jKCk7XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxheW91dFJhZikgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sYXlvdXRSYWYpO1xuICAgIHRoaXMubGF5b3V0UmFmID0gMDtcbiAgICB0aGlzLmNsZWFyKCk7XG4gIH1cblxuICBnZXRSZXNvbHZlZE1hcFdpZGdldElkKCk6IHN0cmluZyB8IG51bGwge1xuICAgIGNvbnN0IGxpbmtlZCA9IHRoaXMuZ2V0TGlua2VkTWFwV2lkZ2V0SWQoKTtcbiAgICBpZiAobGlua2VkICYmIGlzS25vd25NYXBXaWRnZXRJZChsaW5rZWQpKSByZXR1cm4gbGlua2VkO1xuICAgIHJldHVybiB0aGlzLmRpc2NvdmVyTWFwV2lkZ2V0SWRGcm9tQXBwKCk7XG4gIH1cblxuICBwcml2YXRlIGdldExpbmtlZE1hcFdpZGdldElkKCk6IHN0cmluZyB8IG51bGwge1xuICAgIGNvbnN0IGlkcyA9IHRvUGxhaW5BcnJheTxzdHJpbmc+KHRoaXMub3B0aW9ucy5nZXRVc2VNYXBXaWRnZXRJZHMoKSk7XG4gICAgcmV0dXJuIGlkc1swXSA/IFN0cmluZyhpZHNbMF0pIDogbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgZmluZFNoYXJlZExheW91dFN1cmZhY2Uoc2xvdDogSFRNTEVsZW1lbnQpOiBIVE1MRWxlbWVudCB8IG51bGwge1xuICAgIGNvbnN0IGhvc3RJdGVtID0gc2xvdC5jbG9zZXN0KFxuICAgICAgXCIubGF5b3V0LWl0ZW0sIC5idWlsZGVyLWxheW91dC1pdGVtXCIsXG4gICAgKSBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgcmV0dXJuIGhvc3RJdGVtPy5wYXJlbnRFbGVtZW50IHx8IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGRpc2NvdmVyTWFwV2lkZ2V0SWRGcm9tQXBwKCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiBkaXNjb3Zlck1hcFdpZGdldElkSW5BcHAoe1xuICAgICAgaG9zdFdpZGdldElkOiB0aGlzLm9wdGlvbnMuaG9zdFdpZGdldElkLFxuICAgICAgZ2V0U2xvdEVsZW1lbnQ6IHRoaXMub3B0aW9ucy5nZXRTbG90RWxlbWVudCxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5TWFwUmVzb2x2ZWQobWFwV2lkZ2V0SWQ6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAoIW1hcFdpZGdldElkIHx8IG1hcFdpZGdldElkID09PSB0aGlzLmxhc3ROb3RpZmllZE1hcElkKSByZXR1cm47XG4gICAgdGhpcy5sYXN0Tm90aWZpZWRNYXBJZCA9IG1hcFdpZGdldElkO1xuICAgIHRoaXMub3B0aW9ucy5vbk1hcFJlc29sdmVkPy4obWFwV2lkZ2V0SWQpO1xuICB9XG5cbiAgcHJpdmF0ZSB0cnlBdXRvTGlua01hcFdpZGdldChtYXBXaWRnZXRJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgbGlua2VkID0gdGhpcy5nZXRMaW5rZWRNYXBXaWRnZXRJZCgpO1xuICAgIGlmICghbWFwV2lkZ2V0SWQgfHwgKGxpbmtlZCAmJiBpc0tub3duTWFwV2lkZ2V0SWQobGlua2VkKSkgfHwgdGhpcy5hdXRvTGlua0F0dGVtcHRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzbG90ID0gdGhpcy5vcHRpb25zLmdldFNsb3RFbGVtZW50KCk/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChzbG90ICYmICFpc01hcE92ZXJsYXBwaW5nU2xvdChtYXBXaWRnZXRJZCwgc2xvdCkpIHJldHVybjtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBtb2RlID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLmFwcFJ1bnRpbWVJbmZvPy5hcHBNb2RlO1xuICAgICAgaWYgKG1vZGUgIT09IEFwcE1vZGUuRGVzaWduKSByZXR1cm47XG4gICAgICAvLyBSdW50aW1lIGJ1bmRsZXMgbXVzdCBub3QgZGVwZW5kIG9uIHRoZSBidWlsZGVyLW9ubHkgcGFja2FnZS4gQXNrIHRoZVxuICAgICAgLy8gc2V0dGluZyBwYW5lbCB0byBmb2N1cyB0aGUgbWFwIHNlbGVjdG9yOyB0aGUgdXNlciBjYW4gY29uZmlybSBsaW5rYWdlXG4gICAgICAvLyB0aGVyZSB3aXRob3V0IG1ha2luZyBwdWJsaXNoZWQgYXBwcyBsb2FkIGBqaW11LWZvci1idWlsZGVyYC5cbiAgICAgIHRoaXMuYXV0b0xpbmtBdHRlbXB0ZWQgPSB0cnVlO1xuICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBDdXN0b21FdmVudChcImFncmktbWFpbjptYXAtc2V0dGluZ3MtcmVxdWVzdFwiLCB7XG4gICAgICAgICAgZGV0YWlsOiB7IHdpZGdldElkOiB0aGlzLm9wdGlvbnMuaG9zdFdpZGdldElkLCBtYXBXaWRnZXRJZCB9LFxuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAvKiBidWlsZGVyLW9ubHkgaGVscGVyICovXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhcHBseU1hcFNsb3RCb3VuZHMobGF5b3V0SXRlbTogSFRNTEVsZW1lbnQsIHNsb3RFbDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBzbG90UmVjdCA9IHNsb3RFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBzdXJmYWNlID0gdGhpcy5maW5kU2hhcmVkTGF5b3V0U3VyZmFjZShzbG90RWwpO1xuXG4gICAgbGV0IHRvcCA9IHNsb3RSZWN0LnRvcDtcbiAgICBsZXQgbGVmdCA9IHNsb3RSZWN0LmxlZnQ7XG4gICAgbGV0IHBvc2l0aW9uTW9kZTogXCJmaXhlZFwiIHwgXCJhYnNvbHV0ZVwiID0gXCJmaXhlZFwiO1xuXG4gICAgaWYgKHN1cmZhY2UpIHtcbiAgICAgIGNvbnN0IHN1cmZhY2VSZWN0ID0gc3VyZmFjZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHRvcCA9IHNsb3RSZWN0LnRvcCAtIHN1cmZhY2VSZWN0LnRvcCArIHN1cmZhY2Uuc2Nyb2xsVG9wO1xuICAgICAgbGVmdCA9IHNsb3RSZWN0LmxlZnQgLSBzdXJmYWNlUmVjdC5sZWZ0ICsgc3VyZmFjZS5zY3JvbGxMZWZ0O1xuICAgICAgcG9zaXRpb25Nb2RlID0gXCJhYnNvbHV0ZVwiO1xuXG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShzdXJmYWNlKS5wb3NpdGlvbiA9PT0gXCJzdGF0aWNcIikge1xuICAgICAgICBzdXJmYWNlLnN0eWxlLnNldFByb3BlcnR5KFwicG9zaXRpb25cIiwgXCJyZWxhdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBlbnRyaWVzOiBBcnJheTxbc3RyaW5nLCBzdHJpbmddPiA9IFtcbiAgICAgIFtcInBvc2l0aW9uXCIsIHBvc2l0aW9uTW9kZV0sXG4gICAgICBbXCJ0b3BcIiwgYCR7dG9wfXB4YF0sXG4gICAgICBbXCJsZWZ0XCIsIGAke2xlZnR9cHhgXSxcbiAgICAgIFtcIndpZHRoXCIsIGAke3Nsb3RSZWN0LndpZHRofXB4YF0sXG4gICAgICBbXCJoZWlnaHRcIiwgYCR7c2xvdFJlY3QuaGVpZ2h0fXB4YF0sXG4gICAgICBbXCJyaWdodFwiLCBcImF1dG9cIl0sXG4gICAgICBbXCJib3R0b21cIiwgXCJhdXRvXCJdLFxuICAgICAgW1wibWFyZ2luXCIsIFwiMFwiXSxcbiAgICAgIFtcInBhZGRpbmdcIiwgXCIwXCJdLFxuICAgICAgW1widHJhbnNmb3JtXCIsIFwibm9uZVwiXSxcbiAgICAgIFtcImJvcmRlci1yYWRpdXNcIiwgTUFQX1BBTkVMX0JPUkRFUl9SQURJVVNdLFxuICAgICAgW1wib3ZlcmZsb3dcIiwgXCJoaWRkZW5cIl0sXG4gICAgICBbXCJ6LWluZGV4XCIsIFwiMTJcIl0sXG4gICAgICBbXCJib3gtc2l6aW5nXCIsIFwiYm9yZGVyLWJveFwiXSxcbiAgICAgIFtcInBvaW50ZXItZXZlbnRzXCIsIFwiYXV0b1wiXSxcbiAgICBdO1xuXG4gICAgZW50cmllcy5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgIGxheW91dEl0ZW0uc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSwgXCJpbXBvcnRhbnRcIik7XG4gICAgfSk7XG5cbiAgICBjb25zdCB3cmFwcGVyID0gbGF5b3V0SXRlbS5jbG9zZXN0KFwiLmJ1aWxkZXItbGF5b3V0LWl0ZW1cIikgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgIGlmICh3cmFwcGVyICYmIHdyYXBwZXIgIT09IGxheW91dEl0ZW0pIHtcbiAgICAgIFtcbiAgICAgICAgW1wicG9zaXRpb25cIiwgXCJzdGF0aWNcIl0sXG4gICAgICAgIFtcIndpZHRoXCIsIFwiMFwiXSxcbiAgICAgICAgW1wiaGVpZ2h0XCIsIFwiMFwiXSxcbiAgICAgICAgW1wibWFyZ2luXCIsIFwiMFwiXSxcbiAgICAgICAgW1wicGFkZGluZ1wiLCBcIjBcIl0sXG4gICAgICAgIFtcIm92ZXJmbG93XCIsIFwidmlzaWJsZVwiXSxcbiAgICAgICAgW1wicG9pbnRlci1ldmVudHNcIiwgXCJub25lXCJdLFxuICAgICAgXS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgd3JhcHBlci5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlLCBcImltcG9ydGFudFwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmlsbE1hcFJlbmRlcmVyKHJlbmRlcmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IHJhZGl1cyA9IE1BUF9QQU5FTF9CT1JERVJfUkFESVVTO1xuICAgIFtcbiAgICAgIFtcInBvc2l0aW9uXCIsIFwicmVsYXRpdmVcIl0sXG4gICAgICBbXCJ3aWR0aFwiLCBcIjEwMCVcIl0sXG4gICAgICBbXCJoZWlnaHRcIiwgXCIxMDAlXCJdLFxuICAgICAgW1widG9wXCIsIFwiMFwiXSxcbiAgICAgIFtcImxlZnRcIiwgXCIwXCJdLFxuICAgICAgW1wibWFyZ2luXCIsIFwiMFwiXSxcbiAgICAgIFtcInBhZGRpbmdcIiwgXCIwXCJdLFxuICAgICAgW1widHJhbnNmb3JtXCIsIFwibm9uZVwiXSxcbiAgICAgIFtcImJvcmRlci1yYWRpdXNcIiwgcmFkaXVzXSxcbiAgICAgIFtcIm92ZXJmbG93XCIsIFwiaGlkZGVuXCJdLFxuICAgICAgW1wiYm94LXNpemluZ1wiLCBcImJvcmRlci1ib3hcIl0sXG4gICAgXS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgIHJlbmRlcmVyLnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUsIFwiaW1wb3J0YW50XCIpO1xuICAgIH0pO1xuXG4gICAgcmVuZGVyZXJcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcbiAgICAgICAgXCIuZXNyaS12aWV3LCAuZXNyaS12aWV3LXJvb3QsIC5lc3JpLXZpZXctc3VyZmFjZSwgLndpZGdldC1tYXBcIixcbiAgICAgIClcbiAgICAgIC5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgIG5vZGUuc3R5bGUuc2V0UHJvcGVydHkoXCJib3JkZXItcmFkaXVzXCIsIHJhZGl1cywgXCJpbXBvcnRhbnRcIik7XG4gICAgICAgIG5vZGUuc3R5bGUuc2V0UHJvcGVydHkoXCJvdmVyZmxvd1wiLCBcImhpZGRlblwiLCBcImltcG9ydGFudFwiKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhck1hbmFnZWRFbGVtZW50KHRhcmdldDogSFRNTEVsZW1lbnQgfCBudWxsKTogdm9pZCB7XG4gICAgaWYgKCF0YXJnZXQpIHJldHVybjtcbiAgICBbXG4gICAgICBcInBvc2l0aW9uXCIsXG4gICAgICBcInRvcFwiLFxuICAgICAgXCJsZWZ0XCIsXG4gICAgICBcInJpZ2h0XCIsXG4gICAgICBcImJvdHRvbVwiLFxuICAgICAgXCJ3aWR0aFwiLFxuICAgICAgXCJoZWlnaHRcIixcbiAgICAgIFwiei1pbmRleFwiLFxuICAgICAgXCJtYXJnaW5cIixcbiAgICAgIFwicGFkZGluZ1wiLFxuICAgICAgXCJ0cmFuc2Zvcm1cIixcbiAgICAgIFwiYm9yZGVyLXJhZGl1c1wiLFxuICAgICAgXCJvdmVyZmxvd1wiLFxuICAgICAgXCJib3gtc2l6aW5nXCIsXG4gICAgICBcInBvaW50ZXItZXZlbnRzXCIsXG4gICAgXS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShrZXkpKTtcbiAgICBPYmplY3QudmFsdWVzKE1BTkFHRURfTUFQX0NMQVNTKS5mb3JFYWNoKChjbHMpID0+IHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGNscykpO1xuICAgIE9iamVjdC52YWx1ZXMoTUFOQUdFRF9SRU5ERVJFUl9DTEFTUykuZm9yRWFjaCgoY2xzKSA9PlxuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoY2xzKSxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhcigpOiB2b2lkIHtcbiAgICBjb25zdCB3cmFwcGVyID0gdGhpcy5tYXBMYXlvdXRJdGVtPy5jbG9zZXN0KFxuICAgICAgXCIuYnVpbGRlci1sYXlvdXQtaXRlbVwiLFxuICAgICkgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgIGlmICh3cmFwcGVyICYmIHdyYXBwZXIgIT09IHRoaXMubWFwTGF5b3V0SXRlbSkge1xuICAgICAgW1wicG9zaXRpb25cIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcIm1hcmdpblwiLCBcInBhZGRpbmdcIiwgXCJvdmVyZmxvd1wiLCBcInBvaW50ZXItZXZlbnRzXCJdLmZvckVhY2goXG4gICAgICAgIChrZXkpID0+IHdyYXBwZXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoa2V5KSxcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMuY2xlYXJNYW5hZ2VkRWxlbWVudCh0aGlzLm1hcExheW91dEl0ZW0pO1xuICAgIHRoaXMuY2xlYXJNYW5hZ2VkRWxlbWVudCh0aGlzLm1hcFdpZGdldFJlbmRlcmVyKTtcbiAgICB0aGlzLm1hcExheW91dEl0ZW0gPSBudWxsO1xuICAgIHRoaXMubWFwV2lkZ2V0UmVuZGVyZXIgPSBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBzeW5jKCk6IHZvaWQge1xuICAgIGNvbnN0IHNsb3QgPSB0aGlzLm9wdGlvbnMuZ2V0U2xvdEVsZW1lbnQoKTtcbiAgICBpZiAoIXNsb3QpIHtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYXBXaWRnZXRJZCA9IHRoaXMuZ2V0UmVzb2x2ZWRNYXBXaWRnZXRJZCgpO1xuICAgIGlmICghbWFwV2lkZ2V0SWQpIHtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm5vdGlmeU1hcFJlc29sdmVkKG1hcFdpZGdldElkKTtcblxuICAgIGlmICghdGhpcy5nZXRMaW5rZWRNYXBXaWRnZXRJZCgpKSB7XG4gICAgICB0aGlzLnRyeUF1dG9MaW5rTWFwV2lkZ2V0KG1hcFdpZGdldElkKTtcbiAgICB9XG5cbiAgICBjb25zdCBsYXlvdXRJdGVtID0gZmluZFdpZGdldExheW91dEl0ZW0obWFwV2lkZ2V0SWQpO1xuICAgIGNvbnN0IHJlbmRlcmVyID0gZmluZFdpZGdldFJlbmRlcmVyKG1hcFdpZGdldElkKTtcbiAgICBpZiAoIWxheW91dEl0ZW0gfHwgIXJlbmRlcmVyKSB7XG4gICAgICAvLyBQdWJsaXNoZWQgcG9ydGFsOiBtYXAgd2lkZ2V0IERPTSBvZnRlbiBtb3VudHMgYWZ0ZXIgdGhlIGRhc2hib2FyZCDigJQga2VlcFxuICAgICAgLy8gdGhlIGxhc3QgcG9zaXRpb25lZCBtYXAgaW5zdGVhZCBvZiBjbGVhcmluZyBzdHlsZXMgKHRoYXQgc3RyYW5kcyB0aGUgbWFwKS5cbiAgICAgIGlmICh0aGlzLm1hcExheW91dEl0ZW0gJiYgdGhpcy5tYXBXaWRnZXRSZW5kZXJlcikge1xuICAgICAgICB0aGlzLmFwcGx5TWFwU2xvdEJvdW5kcyh0aGlzLm1hcExheW91dEl0ZW0sIHNsb3QpO1xuICAgICAgICB0aGlzLmZpbGxNYXBSZW5kZXJlcih0aGlzLm1hcFdpZGdldFJlbmRlcmVyKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLnJlc2l6ZU1hcFZpZXc/LigpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubWFwTGF5b3V0SXRlbSA9IGxheW91dEl0ZW07XG4gICAgdGhpcy5tYXBXaWRnZXRSZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIGxheW91dEl0ZW0uY2xhc3NMaXN0LmFkZChNQU5BR0VEX01BUF9DTEFTU1t0aGlzLm9wdGlvbnMuc2NvcGVdKTtcbiAgICByZW5kZXJlci5jbGFzc0xpc3QuYWRkKE1BTkFHRURfUkVOREVSRVJfQ0xBU1NbdGhpcy5vcHRpb25zLnNjb3BlXSk7XG4gICAgdGhpcy5hcHBseU1hcFNsb3RCb3VuZHMobGF5b3V0SXRlbSwgc2xvdCk7XG4gICAgdGhpcy5maWxsTWFwUmVuZGVyZXIocmVuZGVyZXIpO1xuICAgIHRoaXMub3B0aW9ucy5yZXNpemVNYXBWaWV3Py4oKTtcbiAgfVxufVxuIiwiZXhwb3J0IHR5cGUgTGFuZ0NvZGUgPSBcInV6X2xhdFwiIHwgXCJ1el9jeXJcIiB8IFwicnVcIiB8IFwiZW5cIjtcblxudHlwZSBEaWN0ID0gUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbnR5cGUgQnVuZGxlID0gUmVjb3JkPExhbmdDb2RlLCBEaWN0PjtcblxuY29uc3QgTUVTU0FHRVM6IEJ1bmRsZSA9IHtcbiAgdXpfbGF0OiB7XG4gICAgXCJ0aXRsZS5kZWZhdWx0XCI6IFwiUG9saWdvbiBtYSdsdW1vdGlcIixcbiAgICBcInRpdGxlLmF0dHJpYnV0ZXNcIjogXCJBdHJpYnV0IG1hJ2x1bW90bGFyaVwiLFxuICAgIFwidGl0bGUucmVjb3JkXCI6IFwiTWEnbHVtb3QgI3t7aWR9fVwiLFxuICAgIFwiYWN0aW9uLnBpblwiOiBcIlBvcHVwbmkgeXVxb3JpLW8nbmdnYSBxYWRhc2hcIixcbiAgICBcImFjdGlvbi51bnBpblwiOiBcIlBvcHVwbmkgeWVjaGlzaFwiLFxuICAgIFwiYWN0aW9uLm1pbmltaXplXCI6IFwiUG9wdXBuaSB5aWcnaXNoXCIsXG4gICAgXCJhY3Rpb24uZXhwYW5kXCI6IFwiUG9wdXBuaSBvY2hpc2hcIixcbiAgICBcInN0YXR1cy53YXJuaW5nXCI6IFwiT2dvaGxhbnRpcmlzaFwiLFxuICAgIFwic3RhdHVzLmxvYWRpbmdGZWF0dXJlXCI6IFwiT2J5ZWt0IG1hJ2x1bW90bGFyaSB5dWtsYW5tb3FkYS4uLlwiLFxuICAgIFwic3RhdHVzLm5vQ29uZmlndXJlZERhdGFcIjogXCJTb3psYW5nYW4gbWF5ZG9ubGFyIHVjaHVuIG1hJ2x1bW90IHRvcGlsbWFkaVwiLFxuICAgIFwic3RhdHVzLm5vRmllbGRzXCI6XG4gICAgICBcIk1heWRvbmxhciBzb3psYW5tYWdhbi4gVmlkamV0IHNvemxhbWFsYXJpZGEgbWF5ZG9ubGFybmkgdGFubGFuZy5cIixcbiAgICBcImF0dGFjaG1lbnRzLnRpdGxlXCI6IFwiUmFzbWxhciB2YSBmYXlsbGFyXCIsXG4gICAgXCJzdGF0dXMubG9hZGluZ0F0dGFjaG1lbnRzXCI6IFwiUW8nc2hpbWNoYWxhciB5dWtsYW5tb3FkYS4uLlwiLFxuICAgIFwic3RhdHVzLm5vQXR0YWNobWVudHNcIjogXCJRbydzaGltY2hhbGFyIHlvJ3FcIixcbiAgICBcImF0dGFjaG1lbnQuaW1hZ2VGYWxsYmFja1wiOiBcIlJhc21cIixcbiAgICBcImF0dGFjaG1lbnQuZmlsZUZhbGxiYWNrXCI6IFwiZmF5bC17e2lkfX1cIixcbiAgICBcImF0dGFjaG1lbnQuZG93bmxvYWRcIjogXCJZdWtsYWIgb2xpc2hcIixcbiAgICBcInN0YXR1cy5jbGlja1BvbHlnb25cIjpcbiAgICAgIFwiVGFmc2lsb3RsYXJuaSBrbydyaXNoIHVjaHVuIHhhcml0YWRhIHBvbGlnb25uaSBib3NpbmdcIixcbiAgICBcInN0YXR1cy5yZWFkeVwiOiBcIlBvbHlnb24gSW5zcGVjdG9yIHRheXlvclwiLFxuICAgIFwic3RhdHVzLmxvYWRpbmdcIjogXCJZdWtsYW5tb3FkYS4uLlwiLFxuICAgIFwiZXJyb3Iubm9NYXBWaWV3XCI6IFwiWGFyaXRhIGtvJ3JpbmlzaGkgdG9waWxtYWRpXCIsXG4gICAgXCJlcnJvci5ub0xheWVyc1NlbGVjdGVkXCI6XG4gICAgICBcIlFhdGxhbSB0YW5sYW5tYWdhbi4gU296bGFtYWxhcmRhIGthbWlkYSBiaXR0YSBGZWF0dXJlIExheWVyIHRhbmxhbmcuXCIsXG4gICAgXCJlcnJvci5zZWxlY3RlZExheWVyc01pc3NpbmdcIjpcbiAgICAgIFwiVGFubGFuZ2FuIHFhdGxhbWxhciB4YXJpdGFkYSB0b3BpbG1hZGkuIFRhbmxhbmdhbiBNYXAgdmlkamV0IGljaGlkYSBzaHUgcWF0bGFtbGFyIGJvcmxpZ2luaSB0ZWtzaGlyaW5nLlwiLFxuICAgIFwiZXJyb3Iub2JqZWN0SWRGaWVsZE1pc3NpbmdcIjpcbiAgICAgIFwiQm9zaWxnYW4gcWF0bGFtZGEgT2JqZWN0SWQgbWF5ZG9uaSB0b3BpbG1hZGkuXCIsXG4gICAgXCJlcnJvci5vYmplY3RJZE1pc3NpbmdcIjogXCJPYmplY3RJZCB0b3BpbG1hZGkuIEt1dGlsZ2FuIG1heWRvbjoge3tmaWVsZH19XCIsXG4gICAgXCJlcnJvci5mZWF0dXJlQnlPYmplY3RJZE1pc3NpbmdcIjogXCJPYmplY3RJZCBibyd5aWNoYSBvYnlla3QgdG9waWxtYWRpLlwiLFxuICAgIFwiZXJyb3IuY29uZmlndXJlZEZpZWxkTWlzc2luZ1wiOlxuICAgICAgXCJCYSd6aSBzb3psYW5nYW4gbWF5ZG9ubGFyIHRvcGlsbWFkaToge3tmaWVsZHN9fVwiLFxuICAgIFwiZXJyb3Iubm9EYXRhRm9yQ29uZmlndXJlZEZpZWxkc1wiOlxuICAgICAgXCJTb3psYW5nYW4gbWF5ZG9ubGFyIHVjaHVuIG1hJ2x1bW90IG1hdmp1ZCBlbWFzXCIsXG4gICAgXCJlcnJvci51bmV4cGVjdGVkXCI6IFwiS3V0aWxtYWdhbiB4YXRvOiB7e21lc3NhZ2V9fVwiLFxuICAgIFwiaW5kaWNlcy50aXRsZVwiOiBcIlZlZ2V0YXRzaXlhIGluZGVrc2xhcmlcIixcbiAgICBcImluZGljZXMubG9hZGluZ1wiOiBcIkluZGVrc2xhciB5dWtsYW5tb3FkYS4uLlwiLFxuICAgIFwiaW5kaWNlcy5ub25lXCI6IFwiQnUgcG9saWdvbiB1Y2h1biBpbmRla3MgbWEnbHVtb3RpIHlvJ3FcIixcbiAgfSxcbiAgdXpfY3lyOiB7XG4gICAgXCJ0aXRsZS5hdHRyaWJ1dGVzXCI6IFwi0JDRgtGA0LjQsdGD0YIg0LzQsNGK0LvRg9C80L7RgtC70LDRgNC4XCIsXG4gICAgXCJ0aXRsZS5kZWZhdWx0XCI6IFwi0J/QvtC70LjQs9C+0L0g0LzQsNGK0LvRg9C80L7RgtC4XCIsXG4gICAgXCJ0aXRsZS5yZWNvcmRcIjogXCLQnNCw0YrQu9GD0LzQvtGCICN7e2lkfX1cIixcbiAgICBcImFjdGlvbi5waW5cIjogXCLQn9C+0L/QsNC/0L3QuCDRjtKb0L7RgNC4LdGe0L3Qs9Cz0LAg0pvQsNC00LDRiFwiLFxuICAgIFwiYWN0aW9uLnVucGluXCI6IFwi0J/QvtC/0LDQv9C90Lgg0LXRh9C40YhcIixcbiAgICBcImFjdGlvbi5taW5pbWl6ZVwiOiBcItCf0L7Qv9Cw0L/QvdC4INC50LjSk9C40YhcIixcbiAgICBcImFjdGlvbi5leHBhbmRcIjogXCLQn9C+0L/QsNC/0L3QuCDQvtGH0LjRiFwiLFxuICAgIFwic3RhdHVzLndhcm5pbmdcIjogXCLQntCz0L7Ss9C70LDQvdGC0LjRgNC40YhcIixcbiAgICBcInN0YXR1cy5sb2FkaW5nRmVhdHVyZVwiOiBcItCe0LHRitC10LrRgiDQvNCw0YrQu9GD0LzQvtGC0LvQsNGA0Lgg0Y7QutC70LDQvdC80L7Sm9C00LAuLi5cIixcbiAgICBcInN0YXR1cy5ub0NvbmZpZ3VyZWREYXRhXCI6IFwi0KHQvtC30LvQsNC90LPQsNC9INC80LDQudC00L7QvdC70LDRgCDRg9GH0YPQvSDQvNCw0YrQu9GD0LzQvtGCINGC0L7Qv9C40LvQvNCw0LTQuFwiLFxuICAgIFwic3RhdHVzLm5vRmllbGRzXCI6XG4gICAgICBcItCc0LDQudC00L7QvdC70LDRgCDRgdC+0LfQu9Cw0L3QvNCw0LPQsNC9LiDQktC40LTQttC10YIg0YHQvtC30LvQsNC80LDQu9Cw0YDQuNC00LAg0LzQsNC50LTQvtC90LvQsNGA0L3QuCDRgtCw0L3Qu9Cw0L3Qsy5cIixcbiAgICBcImF0dGFjaG1lbnRzLnRpdGxlXCI6IFwi0KDQsNGB0LzQu9Cw0YAg0LLQsCDRhNCw0LnQu9C70LDRgFwiLFxuICAgIFwic3RhdHVzLmxvYWRpbmdBdHRhY2htZW50c1wiOiBcItKa0Z7RiNC40LzRh9Cw0LvQsNGAINGO0LrQu9Cw0L3QvNC+0pvQtNCwLi4uXCIsXG4gICAgXCJzdGF0dXMubm9BdHRhY2htZW50c1wiOiBcItKa0Z7RiNC40LzRh9Cw0LvQsNGAINC50Z7Sm1wiLFxuICAgIFwiYXR0YWNobWVudC5pbWFnZUZhbGxiYWNrXCI6IFwi0KDQsNGB0LxcIixcbiAgICBcImF0dGFjaG1lbnQuZmlsZUZhbGxiYWNrXCI6IFwi0YTQsNC50Lste3tpZH19XCIsXG4gICAgXCJhdHRhY2htZW50LmRvd25sb2FkXCI6IFwi0K7QutC70LDQsSDQvtC70LjRiFwiLFxuICAgIFwic3RhdHVzLmNsaWNrUG9seWdvblwiOiBcItCi0LDRhNGB0LjQu9C+0YLQu9Cw0YDQvdC4INC60Z7RgNC40Ygg0YPRh9GD0L0g0YXQsNGA0LjRgtCw0LTQsCDQv9C+0LvQuNCz0L7QvdC90Lgg0LHQvtGB0LjQvdCzXCIsXG4gICAgXCJzdGF0dXMucmVhZHlcIjogXCJQb2x5Z29uIEluc3BlY3RvciDRgtCw0LnRkdGAXCIsXG4gICAgXCJzdGF0dXMubG9hZGluZ1wiOiBcItCu0LrQu9Cw0L3QvNC+0pvQtNCwLi4uXCIsXG4gICAgXCJlcnJvci5ub01hcFZpZXdcIjogXCLQpdCw0YDQuNGC0LAg0LrRntGA0LjQvdC40YjQuCDRgtC+0L/QuNC70LzQsNC00LhcIixcbiAgICBcImVycm9yLm5vTGF5ZXJzU2VsZWN0ZWRcIjpcbiAgICAgIFwi0prQsNGC0LvQsNC8INGC0LDQvdC70LDQvdC80LDQs9Cw0L0uINCh0L7Qt9C70LDQvNCw0LvQsNGA0LTQsCDQutCw0LzQuNC00LAg0LHQuNGC0YLQsCBGZWF0dXJlIExheWVyINGC0LDQvdC70LDQvdCzLlwiLFxuICAgIFwiZXJyb3Iuc2VsZWN0ZWRMYXllcnNNaXNzaW5nXCI6XG4gICAgICBcItCi0LDQvdC70LDQvdCz0LDQvSDSm9Cw0YLQu9Cw0LzQu9Cw0YAg0YXQsNGA0LjRgtCw0LTQsCDRgtC+0L/QuNC70LzQsNC00LguINCi0LDQvdC70LDQvdCz0LDQvSBNYXAg0LLQuNC00LbQtdGCINC40YfQuNC00LAg0YjRgyDSm9Cw0YLQu9Cw0LzQu9Cw0YAg0LHQvtGA0LvQuNCz0LjQvdC4INGC0LXQutGI0LjRgNC40L3Qsy5cIixcbiAgICBcImVycm9yLm9iamVjdElkRmllbGRNaXNzaW5nXCI6XG4gICAgICBcItCR0L7RgdC40LvQs9Cw0L0g0pvQsNGC0LvQsNC80LTQsCBPYmplY3RJZCDQvNCw0LnQtNC+0L3QuCDRgtC+0L/QuNC70LzQsNC00LguXCIsXG4gICAgXCJlcnJvci5vYmplY3RJZE1pc3NpbmdcIjogXCJPYmplY3RJZCDRgtC+0L/QuNC70LzQsNC00LguINCa0YPRgtC40LvQs9Cw0L0g0LzQsNC50LTQvtC9OiB7e2ZpZWxkfX1cIixcbiAgICBcImVycm9yLmZlYXR1cmVCeU9iamVjdElkTWlzc2luZ1wiOiBcIk9iamVjdElkINCx0Z7QudC40YfQsCDQvtCx0YrQtdC60YIg0YLQvtC/0LjQu9C80LDQtNC4LlwiLFxuICAgIFwiZXJyb3IuY29uZmlndXJlZEZpZWxkTWlzc2luZ1wiOlxuICAgICAgXCLQkdCw0YrQt9C4INGB0L7Qt9C70LDQvdCz0LDQvSDQvNCw0LnQtNC+0L3Qu9Cw0YAg0YLQvtC/0LjQu9C80LDQtNC4OiB7e2ZpZWxkc319XCIsXG4gICAgXCJlcnJvci5ub0RhdGFGb3JDb25maWd1cmVkRmllbGRzXCI6XG4gICAgICBcItCh0L7Qt9C70LDQvdCz0LDQvSDQvNCw0LnQtNC+0L3Qu9Cw0YAg0YPRh9GD0L0g0LzQsNGK0LvRg9C80L7RgiDQvNCw0LLQttGD0LQg0Y3QvNCw0YFcIixcbiAgICBcImVycm9yLnVuZXhwZWN0ZWRcIjogXCLQmtGD0YLQuNC70LzQsNCz0LDQvSDRhdCw0YLQvjoge3ttZXNzYWdlfX1cIixcbiAgICBcImluZGljZXMudGl0bGVcIjogXCLQktC10LPQtdGC0LDRhtC40Y8g0LjQvdC00LXQutGB0LvQsNGA0LhcIixcbiAgICBcImluZGljZXMubG9hZGluZ1wiOiBcItCY0L3QtNC10LrRgdC70LDRgCDRjtC60LvQsNC90LzQvtKb0LTQsC4uLlwiLFxuICAgIFwiaW5kaWNlcy5ub25lXCI6IFwi0JHRgyDQv9C+0LvQuNCz0L7QvSDRg9GH0YPQvSDQuNC90LTQtdC60YEg0LzQsNGK0LvRg9C80L7RgtC4INC50Z7Sm1wiLFxuICB9LFxuICBydToge1xuICAgIFwidGl0bGUuYXR0cmlidXRlc1wiOiBcItCQ0YLRgNC40LHRg9GC0LjQstC90YvQtSDQtNCw0L3QvdGL0LVcIixcbiAgICBcInRpdGxlLmRlZmF1bHRcIjogXCLQmNC90YTQvtGA0LzQsNGG0LjRjyDQviDQv9C+0LvQuNCz0L7QvdC1XCIsXG4gICAgXCJ0aXRsZS5yZWNvcmRcIjogXCLQl9Cw0L/QuNGB0YwgI3t7aWR9fVwiLFxuICAgIFwiYWN0aW9uLnBpblwiOiBcItCX0LDQutGA0LXQv9C40YLRjCDQvtC60L3QviDRgdC/0YDQsNCy0LAg0YHQstC10YDRhdGDXCIsXG4gICAgXCJhY3Rpb24udW5waW5cIjogXCLQntGC0LrRgNC10L/QuNGC0Ywg0L7QutC90L5cIixcbiAgICBcImFjdGlvbi5taW5pbWl6ZVwiOiBcItCh0LLQtdGA0L3Rg9GC0Ywg0L7QutC90L5cIixcbiAgICBcImFjdGlvbi5leHBhbmRcIjogXCLQoNCw0LfQstC10YDQvdGD0YLRjCDQvtC60L3QvlwiLFxuICAgIFwic3RhdHVzLndhcm5pbmdcIjogXCLQn9GA0LXQtNGD0L/RgNC10LbQtNC10L3QuNC1XCIsXG4gICAgXCJzdGF0dXMubG9hZGluZ0ZlYXR1cmVcIjogXCLQl9Cw0LPRgNGD0LfQutCwINC00LDQvdC90YvRhSDQvtCx0YrQtdC60YLQsC4uLlwiLFxuICAgIFwic3RhdHVzLm5vQ29uZmlndXJlZERhdGFcIjogXCLQndC10YIg0LTQsNC90L3Ri9GFINC00LvRjyDQvdCw0YHRgtGA0L7QtdC90L3Ri9GFINC/0L7Qu9C10LlcIixcbiAgICBcInN0YXR1cy5ub0ZpZWxkc1wiOiBcItCf0L7Qu9GPINC90LUg0L3QsNGB0YLRgNC+0LXQvdGLLiDQktGL0LHQtdGA0LjRgtC1INC/0L7Qu9GPINCyINC90LDRgdGC0YDQvtC50LrQsNGFINCy0LjQtNC20LXRgtCwLlwiLFxuICAgIFwiYXR0YWNobWVudHMudGl0bGVcIjogXCLQmNC30L7QsdGA0LDQttC10L3QuNGPINC4INGE0LDQudC70YtcIixcbiAgICBcInN0YXR1cy5sb2FkaW5nQXR0YWNobWVudHNcIjogXCLQl9Cw0LPRgNGD0LfQutCwINCy0LvQvtC20LXQvdC40LkuLi5cIixcbiAgICBcInN0YXR1cy5ub0F0dGFjaG1lbnRzXCI6IFwi0J3QtdGCINCy0LvQvtC20LXQvdC40LlcIixcbiAgICBcImF0dGFjaG1lbnQuaW1hZ2VGYWxsYmFja1wiOiBcItCY0LfQvtCx0YDQsNC20LXQvdC40LVcIixcbiAgICBcImF0dGFjaG1lbnQuZmlsZUZhbGxiYWNrXCI6IFwi0YTQsNC50Lste3tpZH19XCIsXG4gICAgXCJhdHRhY2htZW50LmRvd25sb2FkXCI6IFwi0KHQutCw0YfQsNGC0YxcIixcbiAgICBcInN0YXR1cy5jbGlja1BvbHlnb25cIjogXCLQndCw0LbQvNC40YLQtSDQvdCwINC/0L7Qu9C40LPQvtC9INC90LAg0LrQsNGA0YLQtSwg0YfRgtC+0LHRiyDRg9Cy0LjQtNC10YLRjCDQtNC10YLQsNC70LhcIixcbiAgICBcInN0YXR1cy5yZWFkeVwiOiBcIlBvbHlnb24gSW5zcGVjdG9yINCz0L7RgtC+0LJcIixcbiAgICBcInN0YXR1cy5sb2FkaW5nXCI6IFwi0JfQsNCz0YDRg9C30LrQsC4uLlwiLFxuICAgIFwiZXJyb3Iubm9NYXBWaWV3XCI6IFwi0JLQuNC0INC60LDRgNGC0Ysg0L3QtSDQvdCw0LnQtNC10L1cIixcbiAgICBcImVycm9yLm5vTGF5ZXJzU2VsZWN0ZWRcIjpcbiAgICAgIFwi0KHQu9C+0Lgg0L3QtSDQstGL0LHRgNCw0L3Riy4g0JIg0L3QsNGB0YLRgNC+0LnQutCw0YUg0LLRi9Cx0LXRgNC40YLQtSDQvNC40L3QuNC80YPQvCDQvtC00LjQvSBGZWF0dXJlIExheWVyLlwiLFxuICAgIFwiZXJyb3Iuc2VsZWN0ZWRMYXllcnNNaXNzaW5nXCI6XG4gICAgICBcItCS0YvQsdGA0LDQvdC90YvQtSDRgdC70L7QuCDQvdC1INC90LDQudC00LXQvdGLINC90LAg0LrQsNGA0YLQtS4g0J/RgNC+0LLQtdGA0YzRgtC1LCDRh9GC0L4g0L7QvdC4INC10YHRgtGMINCyINCy0YvQsdGA0LDQvdC90L7QvCBNYXAg0LLQuNC00LbQtdGC0LUuXCIsXG4gICAgXCJlcnJvci5vYmplY3RJZEZpZWxkTWlzc2luZ1wiOiBcItCSINCy0YvQsdGA0LDQvdC90L7QvCDRgdC70L7QtSDQvdC1INC90LDQudC00LXQvdC+INC/0L7Qu9C1IE9iamVjdElkLlwiLFxuICAgIFwiZXJyb3Iub2JqZWN0SWRNaXNzaW5nXCI6IFwiT2JqZWN0SWQg0L3QtSDQvdCw0LnQtNC10L0uINCe0LbQuNC00LDQtdC80L7QtSDQv9C+0LvQtToge3tmaWVsZH19XCIsXG4gICAgXCJlcnJvci5mZWF0dXJlQnlPYmplY3RJZE1pc3NpbmdcIjogXCLQntCx0YrQtdC60YIg0L/QviBPYmplY3RJZCDQvdC1INC90LDQudC00LXQvS5cIixcbiAgICBcImVycm9yLmNvbmZpZ3VyZWRGaWVsZE1pc3NpbmdcIjpcbiAgICAgIFwi0J3QtdC60L7RgtC+0YDRi9C1INC90LDRgdGC0YDQvtC10L3QvdGL0LUg0L/QvtC70Y8g0L3QtSDQvdCw0LnQtNC10L3Rizoge3tmaWVsZHN9fVwiLFxuICAgIFwiZXJyb3Iubm9EYXRhRm9yQ29uZmlndXJlZEZpZWxkc1wiOiBcItCd0LXRgiDQtNCw0L3QvdGL0YUg0LTQu9GPINC90LDRgdGC0YDQvtC10L3QvdGL0YUg0L/QvtC70LXQuVwiLFxuICAgIFwiZXJyb3IudW5leHBlY3RlZFwiOiBcItCd0LXQv9GA0LXQtNCy0LjQtNC10L3QvdCw0Y8g0L7RiNC40LHQutCwOiB7e21lc3NhZ2V9fVwiLFxuICAgIFwiaW5kaWNlcy50aXRsZVwiOiBcItCY0L3QtNC10LrRgdGLINCy0LXQs9C10YLQsNGG0LjQuFwiLFxuICAgIFwiaW5kaWNlcy5sb2FkaW5nXCI6IFwi0JfQsNCz0YDRg9C30LrQsCDQuNC90LTQtdC60YHQvtCyLi4uXCIsXG4gICAgXCJpbmRpY2VzLm5vbmVcIjogXCLQndC10YIg0LTQsNC90L3Ri9GFINC/0L4g0LjQvdC00LXQutGB0LDQvCDQtNC70Y8g0Y3RgtC+0LPQviDQv9C+0LvQuNCz0L7QvdCwXCIsXG4gIH0sXG4gIGVuOiB7XG4gICAgXCJ0aXRsZS5hdHRyaWJ1dGVzXCI6IFwiQXR0cmlidXRlIGRhdGFcIixcbiAgICBcInRpdGxlLmRlZmF1bHRcIjogXCJQb2x5Z29uIGluZm9cIixcbiAgICBcInRpdGxlLnJlY29yZFwiOiBcIlJlY29yZCAje3tpZH19XCIsXG4gICAgXCJhY3Rpb24ucGluXCI6IFwiUGluIHBvcHVwIHRvIHRvcC1yaWdodFwiLFxuICAgIFwiYWN0aW9uLnVucGluXCI6IFwiVW5waW4gcG9wdXBcIixcbiAgICBcImFjdGlvbi5taW5pbWl6ZVwiOiBcIk1pbmltaXplIHBvcHVwXCIsXG4gICAgXCJhY3Rpb24uZXhwYW5kXCI6IFwiRXhwYW5kIHBvcHVwXCIsXG4gICAgXCJzdGF0dXMud2FybmluZ1wiOiBcIldhcm5pbmdcIixcbiAgICBcInN0YXR1cy5sb2FkaW5nRmVhdHVyZVwiOiBcIkxvYWRpbmcgZmVhdHVyZSBkYXRhLi4uXCIsXG4gICAgXCJzdGF0dXMubm9Db25maWd1cmVkRGF0YVwiOiBcIk5vIGRhdGEgYXZhaWxhYmxlIGZvciBjb25maWd1cmVkIGZpZWxkc1wiLFxuICAgIFwic3RhdHVzLm5vRmllbGRzXCI6XG4gICAgICBcIk5vIGZpZWxkcyBjb25maWd1cmVkLiBQbGVhc2UgY29uZmlndXJlIGZpZWxkcyBpbiB3aWRnZXQgc2V0dGluZ3MuXCIsXG4gICAgXCJhdHRhY2htZW50cy50aXRsZVwiOiBcIkltYWdlcyAmIEZpbGVzXCIsXG4gICAgXCJzdGF0dXMubG9hZGluZ0F0dGFjaG1lbnRzXCI6IFwiTG9hZGluZyBhdHRhY2htZW50cy4uLlwiLFxuICAgIFwic3RhdHVzLm5vQXR0YWNobWVudHNcIjogXCJObyBhdHRhY2htZW50c1wiLFxuICAgIFwiYXR0YWNobWVudC5pbWFnZUZhbGxiYWNrXCI6IFwiSW1hZ2VcIixcbiAgICBcImF0dGFjaG1lbnQuZmlsZUZhbGxiYWNrXCI6IFwiYXR0YWNobWVudC17e2lkfX1cIixcbiAgICBcImF0dGFjaG1lbnQuZG93bmxvYWRcIjogXCJEb3dubG9hZFwiLFxuICAgIFwic3RhdHVzLmNsaWNrUG9seWdvblwiOiBcIkNsaWNrIGEgcG9seWdvbiBvbiB0aGUgbWFwIHRvIHNlZSBpdHMgZGV0YWlsc1wiLFxuICAgIFwic3RhdHVzLnJlYWR5XCI6IFwiUG9seWdvbiBJbnNwZWN0b3IgUmVhZHlcIixcbiAgICBcInN0YXR1cy5sb2FkaW5nXCI6IFwiTG9hZGluZy4uLlwiLFxuICAgIFwiZXJyb3Iubm9NYXBWaWV3XCI6IFwiTm8gbWFwIHZpZXcgcHJvdmlkZWRcIixcbiAgICBcImVycm9yLm5vTGF5ZXJzU2VsZWN0ZWRcIjpcbiAgICAgIFwiTm8gbGF5ZXJzIHNlbGVjdGVkLiBQbGVhc2Ugc2VsZWN0IG9uZSBvciBtb3JlIEZlYXR1cmUgTGF5ZXJzIGluIFNldHRpbmdzLlwiLFxuICAgIFwiZXJyb3Iuc2VsZWN0ZWRMYXllcnNNaXNzaW5nXCI6XG4gICAgICBcIk5vbmUgb2YgdGhlIHNlbGVjdGVkIGxheWVycyB3ZXJlIGZvdW5kIG9uIHRoZSBtYXAuIEVuc3VyZSB0aGUgY2hvc2VuIGxheWVycyBleGlzdCBpbiB0aGUgc2VsZWN0ZWQgTWFwIHdpZGdldC5cIixcbiAgICBcImVycm9yLm9iamVjdElkRmllbGRNaXNzaW5nXCI6IFwiT2JqZWN0SWQgZmllbGQgbm90IGZvdW5kIGZvciBjbGlja2VkIGxheWVyLlwiLFxuICAgIFwiZXJyb3Iub2JqZWN0SWRNaXNzaW5nXCI6IFwiT2JqZWN0SWQgbm90IGZvdW5kLiBFeHBlY3RlZCBmaWVsZDoge3tmaWVsZH19XCIsXG4gICAgXCJlcnJvci5mZWF0dXJlQnlPYmplY3RJZE1pc3NpbmdcIjogXCJGZWF0dXJlIG5vdCBmb3VuZCBieSBPYmplY3RJZC5cIixcbiAgICBcImVycm9yLmNvbmZpZ3VyZWRGaWVsZE1pc3NpbmdcIjpcbiAgICAgIFwiU29tZSBjb25maWd1cmVkIGZpZWxkcyBub3QgZm91bmQ6IHt7ZmllbGRzfX1cIixcbiAgICBcImVycm9yLm5vRGF0YUZvckNvbmZpZ3VyZWRGaWVsZHNcIjpcbiAgICAgIFwiTm8gZGF0YSBhdmFpbGFibGUgZm9yIGNvbmZpZ3VyZWQgZmllbGRzXCIsXG4gICAgXCJlcnJvci51bmV4cGVjdGVkXCI6IFwiVW5leHBlY3RlZCBlcnJvcjoge3ttZXNzYWdlfX1cIixcbiAgICBcImluZGljZXMudGl0bGVcIjogXCJWZWdldGF0aW9uIGluZGljZXNcIixcbiAgICBcImluZGljZXMubG9hZGluZ1wiOiBcIkxvYWRpbmcgaW5kaWNlcy4uLlwiLFxuICAgIFwiaW5kaWNlcy5ub25lXCI6IFwiTm8gaW5kZXggZGF0YSBmb3IgdGhpcyBwb2x5Z29uXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTGFuZyhpbnB1dDogYW55KTogTGFuZ0NvZGUge1xuICBjb25zdCByYXcgPSBTdHJpbmcoaW5wdXQgPz8gXCJcIilcbiAgICAudHJpbSgpXG4gICAgLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYgKHJhdyA9PT0gXCJlblwiIHx8IHJhdyA9PT0gXCJlbmdcIiB8fCByYXcgPT09IFwiZW5nbGlzaFwiKSByZXR1cm4gXCJlblwiO1xuICBpZiAocmF3ID09PSBcInJ1XCIgfHwgcmF3ID09PSBcInJ1c1wiIHx8IHJhdyA9PT0gXCJydXNzaWFuXCIpIHJldHVybiBcInJ1XCI7XG5cbiAgaWYgKFxuICAgIHJhdyA9PT0gXCJ1el9jeXJcIiB8fFxuICAgIHJhdyA9PT0gXCJ1ei1jeXJcIiB8fFxuICAgIHJhdyA9PT0gXCJ1el9jeXJsXCIgfHxcbiAgICByYXcgPT09IFwidXotY3lybFwiIHx8XG4gICAgcmF3ID09PSBcInV6Y3lybFwiIHx8XG4gICAgcmF3ID09PSBcInV6X2N5cmlsbGljXCIgfHxcbiAgICByYXcgPT09IFwidXotY3lyaWxsaWNcIiB8fFxuICAgIHJhdyA9PT0gXCJjeXJpbGxpY1wiXG4gICkge1xuICAgIHJldHVybiBcInV6X2N5clwiO1xuICB9XG5cbiAgaWYgKFxuICAgIHJhdyA9PT0gXCJ1el9sYXRcIiB8fFxuICAgIHJhdyA9PT0gXCJ1ei1sYXRcIiB8fFxuICAgIHJhdyA9PT0gXCJ1emxhdGluXCIgfHxcbiAgICByYXcgPT09IFwidXotbGF0aW5cIiB8fFxuICAgIHJhdyA9PT0gXCJ1elwiXG4gICkge1xuICAgIHJldHVybiBcInV6X2xhdFwiO1xuICB9XG5cbiAgcmV0dXJuIFwidXpfbGF0XCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbml0aWFsTGFuZygpOiBMYW5nQ29kZSB7XG4gIHJldHVybiBub3JtYWxpemVMYW5nKFxuICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWdyaV9hcHBfbGFuZ1wiKSB8fFxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhcHBfbGFuZ1wiKSB8fFxuICAgICAgXCJ1el9sYXRcIixcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaXRpYWxUaGVtZSgpOiBib29sZWFuIHtcbiAgY29uc3Qgc3RvcmVkVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFncmlfdjExX2FwcF90aGVtZVwiKTtcbiAgaWYgKHN0b3JlZFRoZW1lID09PSBcImRhcmtcIikgcmV0dXJuIHRydWU7XG4gIGlmIChzdG9yZWRUaGVtZSA9PT0gXCJsaWdodFwiKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICBjb25zdCBpc0xpZ2h0ID1cbiAgICBzdG9yZWRUaGVtZSA9PT0gXCJsaWdodFwiIHx8XG4gICAgcm9vdC5jbGFzc0xpc3QuY29udGFpbnMoXCJsaWdodC10aGVtZVwiKSB8fFxuICAgIGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGlnaHQtdGhlbWVcIikgfHxcbiAgICByb290LmdldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIikgPT09IFwibGlnaHRcIjtcbiAgcmV0dXJuICFpc0xpZ2h0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdChcbiAgbGFuZzogTGFuZ0NvZGUsXG4gIGtleTogc3RyaW5nLFxuICBwYXJhbXM/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXI+LFxuKTogc3RyaW5nIHtcbiAgY29uc3QgZGljdCA9IE1FU1NBR0VTW2xhbmddIHx8IE1FU1NBR0VTLnV6X2xhdDtcbiAgY29uc3QgZmFsbGJhY2sgPSBNRVNTQUdFUy5lbltrZXldID8/IGtleTtcbiAgY29uc3QgdGVtcGxhdGUgPSBkaWN0W2tleV0gPz8gZmFsbGJhY2s7XG4gIGlmICghcGFyYW1zKSByZXR1cm4gdGVtcGxhdGU7XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKHBhcmFtcykucmVkdWNlKChyZXN1bHQsIHBhcmFtS2V5KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBTdHJpbmcocGFyYW1zW3BhcmFtS2V5XSA/PyBcIlwiKTtcbiAgICByZXR1cm4gcmVzdWx0LnJlcGxhY2UobmV3IFJlZ0V4cChgXFxcXHtcXFxceyR7cGFyYW1LZXl9XFxcXH1cXFxcfWAsIFwiZ1wiKSwgdmFsdWUpO1xuICB9LCB0ZW1wbGF0ZSk7XG59XG4iLCIvKipcclxuICogUHVyZSBmaWVsZCBoZWxwZXJzIGZvciBQb3B1cFBhbmVsIChubyBSZWFjdCAvIG1hcCBzaWRlIGVmZmVjdHMpLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVGaWVsZEFsaWFzKGZpZWxkOiBhbnksIGZhbGxiYWNrTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICBjb25zdCBuYW1lID0gU3RyaW5nKGZpZWxkPy5uYW1lIHx8IGZhbGxiYWNrTmFtZSB8fCBcIlwiKS50cmltKCk7XHJcbiAgY29uc3QgYWxpYXMgPSBTdHJpbmcoXHJcbiAgICBmaWVsZD8uYWxpYXMgfHwgZmllbGQ/LmRpc3BsYXlOYW1lIHx8IGZpZWxkPy5sYWJlbCB8fCBcIlwiLFxyXG4gICkudHJpbSgpO1xyXG4gIGlmICghYWxpYXMpIHJldHVybiBuYW1lO1xyXG4gIHJldHVybiBhbGlhcztcclxufVxyXG4iLCIvKipcclxuICogUHVyZSBQb3B1cFBhbmVsIGZvcm1hdCAvIGF0dHJpYnV0ZSBoZWxwZXJzLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQXR0cmlidXRlVmFsdWVDYXNlSW5zZW5zaXRpdmUoXHJcbiAgYXR0cmlidXRlczogUmVjb3JkPHN0cmluZywgYW55PiB8IG51bGwgfCB1bmRlZmluZWQsXHJcbiAgZmllbGROYW1lOiBzdHJpbmcsXHJcbik6IGFueSB7XHJcbiAgaWYgKCFhdHRyaWJ1dGVzKSByZXR1cm4gbnVsbDtcclxuICBjb25zdCB0YXJnZXQgPSBmaWVsZE5hbWUudG9Mb3dlckNhc2UoKTtcclxuICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5maW5kKChrKSA9PiBrLnRvTG93ZXJDYXNlKCkgPT09IHRhcmdldCk7XHJcbiAgcmV0dXJuIGtleSA/IGF0dHJpYnV0ZXNba2V5XSA6IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlU21hcnQocmF3OiBhbnkpOiBzdHJpbmcge1xyXG4gIGlmIChyYXcgaW5zdGFuY2VvZiBEYXRlKSByZXR1cm4gcmF3LnRvTG9jYWxlU3RyaW5nKCk7XHJcblxyXG4gIGlmICh0eXBlb2YgcmF3ID09PSBcIm51bWJlclwiICYmIGlzRmluaXRlKHJhdykpIHtcclxuICAgIGNvbnN0IG1zID0gcmF3IDwgMWUxMiA/IHJhdyAqIDEwMDAgOiByYXc7XHJcbiAgICBjb25zdCBkID0gbmV3IERhdGUobXMpO1xyXG4gICAgcmV0dXJuIGlzTmFOKGQuZ2V0VGltZSgpKVxyXG4gICAgICA/IFN0cmluZyhyYXcpXHJcbiAgICAgIDogZC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHtcclxuICAgICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgICAgbW9udGg6IFwiMi1kaWdpdFwiLFxyXG4gICAgICAgICAgZGF5OiBcIjItZGlnaXRcIixcclxuICAgICAgICAgIGhvdXI6IFwiMi1kaWdpdFwiLFxyXG4gICAgICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcclxuICAgICAgICB9KTtcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgcmF3ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICBjb25zdCB0cmltbWVkID0gcmF3LnRyaW0oKTtcclxuICAgIGlmICgvXlxcZHsxMCwxM30kLy50ZXN0KHRyaW1tZWQpKSByZXR1cm4gZm9ybWF0RGF0ZVNtYXJ0KE51bWJlcih0cmltbWVkKSk7XHJcbiAgICBjb25zdCBkID0gbmV3IERhdGUodHJpbW1lZCk7XHJcbiAgICBpZiAoIWlzTmFOKGQuZ2V0VGltZSgpKSkge1xyXG4gICAgICByZXR1cm4gZC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHtcclxuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgICAgICBtb250aDogXCIyLWRpZ2l0XCIsXHJcbiAgICAgICAgZGF5OiBcIjItZGlnaXRcIixcclxuICAgICAgICBob3VyOiBcIjItZGlnaXRcIixcclxuICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBTdHJpbmcocmF3KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5pY2VDaGFydE1heCh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICBpZiAoIU51bWJlci5pc0Zpbml0ZSh2YWx1ZSkgfHwgdmFsdWUgPD0gMCkgcmV0dXJuIDE7XHJcbiAgY29uc3QgcGFkZGVkID0gdmFsdWUgKiAxLjA4O1xyXG4gIGNvbnN0IG1hZ25pdHVkZSA9IE1hdGgucG93KDEwLCBNYXRoLmZsb29yKE1hdGgubG9nMTAocGFkZGVkKSkpO1xyXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBwYWRkZWQgLyBtYWduaXR1ZGU7XHJcbiAgbGV0IG5pY2UgPSAxMDtcclxuICBpZiAobm9ybWFsaXplZCA8PSAxKSBuaWNlID0gMTtcclxuICBlbHNlIGlmIChub3JtYWxpemVkIDw9IDIpIG5pY2UgPSAyO1xyXG4gIGVsc2UgaWYgKG5vcm1hbGl6ZWQgPD0gNSkgbmljZSA9IDU7XHJcbiAgcmV0dXJuIG5pY2UgKiBtYWduaXR1ZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRDaGFydFRpY2sodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUodmFsdWUpKSByZXR1cm4gXCJcIjtcclxuICBpZiAoTWF0aC5hYnModmFsdWUpID49IDEwMDApIHJldHVybiBgJHtNYXRoLnJvdW5kKHZhbHVlKX1gO1xyXG4gIGlmIChNYXRoLmFicyh2YWx1ZSkgPj0gMTAwKSByZXR1cm4gYCR7TWF0aC5yb3VuZCh2YWx1ZSl9YDtcclxuICBpZiAoTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSkpIHJldHVybiBTdHJpbmcodmFsdWUpO1xyXG4gIHJldHVybiB2YWx1ZS50b0ZpeGVkKDEpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0Q2hhcnRUb29sdGlwVmFsdWUodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUodmFsdWUpKSByZXR1cm4gXCJcIjtcclxuICBpZiAoTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSkpIHtcclxuICAgIHJldHVybiB2YWx1ZS50b0xvY2FsZVN0cmluZyhcInJ1LVJVXCIpLnJlcGxhY2UoL1tcXHUwMGEwXFx1MjAyZl0vZywgXCIgXCIpO1xyXG4gIH1cclxuICByZXR1cm4gdmFsdWVcclxuICAgIC50b0xvY2FsZVN0cmluZyhcInJ1LVJVXCIsIHtcclxuICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAxLFxyXG4gICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDEsXHJcbiAgICB9KVxyXG4gICAgLnJlcGxhY2UoL1tcXHUwMGEwXFx1MjAyZl0vZywgXCIgXCIpXHJcbiAgICAucmVwbGFjZSgvLC9nLCBcIi5cIik7XHJcbn1cclxuXHJcbi8qKiBBcmNHSVMgZmllbGQgdHlwZSBndWFyZCBmb3IgcG9wdXAgZGF0ZSBmb3JtYXR0aW5nLiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNFc3JpRGF0ZUZpZWxkVHlwZSh0eXBlOiB1bmtub3duKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgdCA9IFN0cmluZyh0eXBlIHx8IFwiXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICB0ID09PSBcImRhdGVcIiB8fFxyXG4gICAgdCA9PT0gXCJ0aW1lc3RhbXAtb2Zmc2V0XCIgfHxcclxuICAgIHQgPT09IFwiZGF0ZS1vbmx5XCIgfHxcclxuICAgIHQgPT09IFwidGltZS1vbmx5XCJcclxuICApO1xyXG59XHJcblxyXG4vKiogRGlzcGxheSBzdHJpbmcgZm9yIGEgcG9wdXAgYXR0cmlidXRlIGNlbGwuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQb3B1cEF0dHJpYnV0ZVZhbHVlKFxyXG4gIHJhdzogYW55LFxyXG4gIG9wdHM6IHtcclxuICAgIGlzRGF0ZUZpZWxkOiBib29sZWFuO1xyXG4gICAgZm9ybWF0RGF0ZTogKHZhbHVlOiBhbnkpID0+IHN0cmluZztcclxuICB9LFxyXG4pOiBzdHJpbmcge1xyXG4gIGlmIChyYXcgPT09IG51bGwgfHwgcmF3ID09PSB1bmRlZmluZWQgfHwgcmF3ID09PSBcIlwiKSByZXR1cm4gXCLigJRcIjtcclxuXHJcbiAgaWYgKG9wdHMuaXNEYXRlRmllbGQpIHJldHVybiBvcHRzLmZvcm1hdERhdGUocmF3KTtcclxuICBpZiAoXHJcbiAgICAodHlwZW9mIHJhdyA9PT0gXCJudW1iZXJcIiAmJiByYXcgPiAxZTkgJiYgcmF3IDwgMWUxNCkgfHxcclxuICAgICh0eXBlb2YgcmF3ID09PSBcInN0cmluZ1wiICYmIC9eXFxkezEwLDEzfSQvLnRlc3QocmF3KSlcclxuICApIHtcclxuICAgIHJldHVybiBvcHRzLmZvcm1hdERhdGUocmF3KTtcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgcmF3ID09PSBcIm51bWJlclwiICYmIGlzRmluaXRlKHJhdykpIHtcclxuICAgIHJldHVybiByYXdcclxuICAgICAgLnRvTG9jYWxlU3RyaW5nKFwicnUtUlVcIilcclxuICAgICAgLnJlcGxhY2UoL1tcXHUwMGEwXFx1MjAyZl0vZywgXCIgXCIpXHJcbiAgICAgIC5yZXBsYWNlKC8sL2csIFwiLlwiKTtcclxuICB9XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkocmF3KSkgcmV0dXJuIHJhdy5qb2luKFwiLCBcIik7XHJcbiAgaWYgKHR5cGVvZiByYXcgPT09IFwib2JqZWN0XCIpIHJldHVybiBKU09OLnN0cmluZ2lmeShyYXcpO1xyXG4gIHJldHVybiBTdHJpbmcocmF3KTtcclxufVxyXG4iLCIvKipcbiAqIEBsaWNlbnNlIGx1Y2lkZS1yZWFjdCB2MS4yMy4wIC0gSVNDXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgSVNDIGxpY2Vuc2UuXG4gKiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgY3JlYXRlTHVjaWRlSWNvbiBmcm9tICcuLi9jcmVhdGVMdWNpZGVJY29uLm1qcyc7XG5cbmNvbnN0IF9faWNvbk5vZGUgPSBbXG4gIFtcInBhdGhcIiwgeyBkOiBcIk04IDJ2NFwiLCBrZXk6IFwiMWNtcHltXCIgfV0sXG4gIFtcInBhdGhcIiwgeyBkOiBcIk0xNiAydjRcIiwga2V5OiBcIjRtODF2a1wiIH1dLFxuICBbXCJyZWN0XCIsIHsgd2lkdGg6IFwiMThcIiwgaGVpZ2h0OiBcIjE4XCIsIHg6IFwiM1wiLCB5OiBcIjRcIiwgcng6IFwiMlwiLCBrZXk6IFwiMWhvcGN5XCIgfV0sXG4gIFtcInBhdGhcIiwgeyBkOiBcIk0zIDEwaDE4XCIsIGtleTogXCI4dG9lbjhcIiB9XSxcbiAgW1wicGF0aFwiLCB7IGQ6IFwiTTggMTRoLjAxXCIsIGtleTogXCI2NDIzYmhcIiB9XSxcbiAgW1wicGF0aFwiLCB7IGQ6IFwiTTEyIDE0aC4wMVwiLCBrZXk6IFwiMWV0aWxpXCIgfV0sXG4gIFtcInBhdGhcIiwgeyBkOiBcIk0xNiAxNGguMDFcIiwga2V5OiBcIjFnYm9md1wiIH1dLFxuICBbXCJwYXRoXCIsIHsgZDogXCJNOCAxOGguMDFcIiwga2V5OiBcImxycDM1dFwiIH1dLFxuICBbXCJwYXRoXCIsIHsgZDogXCJNMTIgMThoLjAxXCIsIGtleTogXCJtaHlndnVcIiB9XSxcbiAgW1wicGF0aFwiLCB7IGQ6IFwiTTE2IDE4aC4wMVwiLCBrZXk6IFwia3pzbWltXCIgfV1cbl07XG5jb25zdCBDYWxlbmRhckRheXMgPSBjcmVhdGVMdWNpZGVJY29uKFwiY2FsZW5kYXItZGF5c1wiLCBfX2ljb25Ob2RlKTtcblxuZXhwb3J0IHsgX19pY29uTm9kZSwgQ2FsZW5kYXJEYXlzIGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNhbGVuZGFyLWRheXMubWpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZSBsdWNpZGUtcmVhY3QgdjEuMjMuMCAtIElTQ1xuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIElTQyBsaWNlbnNlLlxuICogU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IGNyZWF0ZUx1Y2lkZUljb24gZnJvbSAnLi4vY3JlYXRlTHVjaWRlSWNvbi5tanMnO1xuXG5jb25zdCBfX2ljb25Ob2RlID0gW1xuICBbXCJwYXRoXCIsIHsgZDogXCJNMyAzdjE2YTIgMiAwIDAgMCAyIDJoMTZcIiwga2V5OiBcImMyNGk0OFwiIH1dLFxuICBbXCJwYXRoXCIsIHsgZDogXCJNMTggMTdWOVwiLCBrZXk6IFwiMmJ6NjBuXCIgfV0sXG4gIFtcInBhdGhcIiwgeyBkOiBcIk0xMyAxN1Y1XCIsIGtleTogXCIxZnJkdDhcIiB9XSxcbiAgW1wicGF0aFwiLCB7IGQ6IFwiTTggMTd2LTNcIiwga2V5OiBcIjE3c2thMFwiIH1dXG5dO1xuY29uc3QgQ2hhcnRDb2x1bW4gPSBjcmVhdGVMdWNpZGVJY29uKFwiY2hhcnQtY29sdW1uXCIsIF9faWNvbk5vZGUpO1xuXG5leHBvcnQgeyBfX2ljb25Ob2RlLCBDaGFydENvbHVtbiBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jaGFydC1jb2x1bW4ubWpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZSBsdWNpZGUtcmVhY3QgdjEuMjMuMCAtIElTQ1xuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIElTQyBsaWNlbnNlLlxuICogU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IGNyZWF0ZUx1Y2lkZUljb24gZnJvbSAnLi4vY3JlYXRlTHVjaWRlSWNvbi5tanMnO1xuXG5jb25zdCBfX2ljb25Ob2RlID0gW1tcInBhdGhcIiwgeyBkOiBcIm0xOCAxNS02LTYtNiA2XCIsIGtleTogXCIxNTN1ZHpcIiB9XV07XG5jb25zdCBDaGV2cm9uVXAgPSBjcmVhdGVMdWNpZGVJY29uKFwiY2hldnJvbi11cFwiLCBfX2ljb25Ob2RlKTtcblxuZXhwb3J0IHsgX19pY29uTm9kZSwgQ2hldnJvblVwIGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNoZXZyb24tdXAubWpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZSBsdWNpZGUtcmVhY3QgdjEuMjMuMCAtIElTQ1xuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIElTQyBsaWNlbnNlLlxuICogU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IGNyZWF0ZUx1Y2lkZUljb24gZnJvbSAnLi4vY3JlYXRlTHVjaWRlSWNvbi5tanMnO1xuXG5jb25zdCBfX2ljb25Ob2RlID0gW1xuICBbXCJwYXRoXCIsIHsgZDogXCJNMTIgMTVWM1wiLCBrZXk6IFwibTlnMXgxXCIgfV0sXG4gIFtcInBhdGhcIiwgeyBkOiBcIk0yMSAxNXY0YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0ydi00XCIsIGtleTogXCJpaDduM2hcIiB9XSxcbiAgW1wicGF0aFwiLCB7IGQ6IFwibTcgMTAgNSA1IDUtNVwiLCBrZXk6IFwiYnJzbjcwXCIgfV1cbl07XG5jb25zdCBEb3dubG9hZCA9IGNyZWF0ZUx1Y2lkZUljb24oXCJkb3dubG9hZFwiLCBfX2ljb25Ob2RlKTtcblxuZXhwb3J0IHsgX19pY29uTm9kZSwgRG93bmxvYWQgYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZG93bmxvYWQubWpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZSBsdWNpZGUtcmVhY3QgdjEuMjMuMCAtIElTQ1xuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIElTQyBsaWNlbnNlLlxuICogU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IGNyZWF0ZUx1Y2lkZUljb24gZnJvbSAnLi4vY3JlYXRlTHVjaWRlSWNvbi5tanMnO1xuXG5jb25zdCBfX2ljb25Ob2RlID0gW1xuICBbXG4gICAgXCJwYXRoXCIsXG4gICAge1xuICAgICAgZDogXCJtNiAxNCAxLjUtMi45QTIgMiAwIDAgMSA5LjI0IDEwSDIwYTIgMiAwIDAgMSAxLjk0IDIuNWwtMS41NCA2YTIgMiAwIDAgMS0xLjk1IDEuNUg0YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDMuOWEyIDIgMCAwIDEgMS42OS45bC44MSAxLjJhMiAyIDAgMCAwIDEuNjcuOUgxOGEyIDIgMCAwIDEgMiAydjJcIixcbiAgICAgIGtleTogXCJ1c2RrYTBcIlxuICAgIH1cbiAgXVxuXTtcbmNvbnN0IEZvbGRlck9wZW4gPSBjcmVhdGVMdWNpZGVJY29uKFwiZm9sZGVyLW9wZW5cIiwgX19pY29uTm9kZSk7XG5cbmV4cG9ydCB7IF9faWNvbk5vZGUsIEZvbGRlck9wZW4gYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9sZGVyLW9wZW4ubWpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZSBsdWNpZGUtcmVhY3QgdjEuMjMuMCAtIElTQ1xuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIElTQyBsaWNlbnNlLlxuICogU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IGNyZWF0ZUx1Y2lkZUljb24gZnJvbSAnLi4vY3JlYXRlTHVjaWRlSWNvbi5tanMnO1xuXG5jb25zdCBfX2ljb25Ob2RlID0gW1xuICBbXCJwb2x5bGluZVwiLCB7IHBvaW50czogXCIyMiAxMiAxNiAxMiAxNCAxNSAxMCAxNSA4IDEyIDIgMTJcIiwga2V5OiBcIm85N3Q5ZFwiIH1dLFxuICBbXG4gICAgXCJwYXRoXCIsXG4gICAge1xuICAgICAgZDogXCJNNS40NSA1LjExIDIgMTJ2NmEyIDIgMCAwIDAgMiAyaDE2YTIgMiAwIDAgMCAyLTJ2LTZsLTMuNDUtNi44OUEyIDIgMCAwIDAgMTYuNzYgNEg3LjI0YTIgMiAwIDAgMC0xLjc5IDEuMTF6XCIsXG4gICAgICBrZXk6IFwib290Nm1yXCJcbiAgICB9XG4gIF1cbl07XG5jb25zdCBJbmJveCA9IGNyZWF0ZUx1Y2lkZUljb24oXCJpbmJveFwiLCBfX2ljb25Ob2RlKTtcblxuZXhwb3J0IHsgX19pY29uTm9kZSwgSW5ib3ggYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5ib3gubWpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZSBsdWNpZGUtcmVhY3QgdjEuMjMuMCAtIElTQ1xuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIElTQyBsaWNlbnNlLlxuICogU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IGNyZWF0ZUx1Y2lkZUljb24gZnJvbSAnLi4vY3JlYXRlTHVjaWRlSWNvbi5tanMnO1xuXG5jb25zdCBfX2ljb25Ob2RlID0gW1xuICBbXG4gICAgXCJwYXRoXCIsXG4gICAge1xuICAgICAgZDogXCJNMjAgMTBjMCA0Ljk5My01LjUzOSAxMC4xOTMtNy4zOTkgMTEuNzk5YTEgMSAwIDAgMS0xLjIwMiAwQzkuNTM5IDIwLjE5MyA0IDE0Ljk5MyA0IDEwYTggOCAwIDAgMSAxNiAwXCIsXG4gICAgICBrZXk6IFwiMXIwZjB6XCJcbiAgICB9XG4gIF0sXG4gIFtcImNpcmNsZVwiLCB7IGN4OiBcIjEyXCIsIGN5OiBcIjEwXCIsIHI6IFwiM1wiLCBrZXk6IFwiaWxxaHI3XCIgfV1cbl07XG5jb25zdCBNYXBQaW4gPSBjcmVhdGVMdWNpZGVJY29uKFwibWFwLXBpblwiLCBfX2ljb25Ob2RlKTtcblxuZXhwb3J0IHsgX19pY29uTm9kZSwgTWFwUGluIGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hcC1waW4ubWpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZSBsdWNpZGUtcmVhY3QgdjEuMjMuMCAtIElTQ1xuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIElTQyBsaWNlbnNlLlxuICogU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IGNyZWF0ZUx1Y2lkZUljb24gZnJvbSAnLi4vY3JlYXRlTHVjaWRlSWNvbi5tanMnO1xuXG5jb25zdCBfX2ljb25Ob2RlID0gW1xuICBbXCJwYXRoXCIsIHsgZDogXCJNMTQgNC4xIDEyIDZcIiwga2V5OiBcIml0YThpNFwiIH1dLFxuICBbXCJwYXRoXCIsIHsgZDogXCJtNS4xIDgtMi45LS44XCIsIGtleTogXCIxZ28za2ZcIiB9XSxcbiAgW1wicGF0aFwiLCB7IGQ6IFwibTYgMTItMS45IDJcIiwga2V5OiBcIm1uaHQ5N1wiIH1dLFxuICBbXCJwYXRoXCIsIHsgZDogXCJNNy4yIDIuMiA4IDUuMVwiLCBrZXk6IFwiMWNma28xXCIgfV0sXG4gIFtcbiAgICBcInBhdGhcIixcbiAgICB7XG4gICAgICBkOiBcIk05LjAzNyA5LjY5YS40OTguNDk4IDAgMCAxIC42NTMtLjY1M2wxMSA0LjVhLjUuNSAwIDAgMS0uMDc0Ljk0OWwtNC4zNDkgMS4wNDFhMSAxIDAgMCAwLS43NC43MzlsLTEuMDQgNC4zNWEuNS41IDAgMCAxLS45NS4wNzR6XCIsXG4gICAgICBrZXk6IFwiczBoM3l6XCJcbiAgICB9XG4gIF1cbl07XG5jb25zdCBNb3VzZVBvaW50ZXJDbGljayA9IGNyZWF0ZUx1Y2lkZUljb24oXCJtb3VzZS1wb2ludGVyLWNsaWNrXCIsIF9faWNvbk5vZGUpO1xuXG5leHBvcnQgeyBfX2ljb25Ob2RlLCBNb3VzZVBvaW50ZXJDbGljayBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb3VzZS1wb2ludGVyLWNsaWNrLm1qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2UgbHVjaWRlLXJlYWN0IHYxLjIzLjAgLSBJU0NcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZS5cbiAqIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBjcmVhdGVMdWNpZGVJY29uIGZyb20gJy4uL2NyZWF0ZUx1Y2lkZUljb24ubWpzJztcblxuY29uc3QgX19pY29uTm9kZSA9IFtcbiAgW1xuICAgIFwicGF0aFwiLFxuICAgIHtcbiAgICAgIGQ6IFwibTE2IDYtOC40MTQgOC41ODZhMiAyIDAgMCAwIDIuODI5IDIuODI5bDguNDE0LTguNTg2YTQgNCAwIDEgMC01LjY1Ny01LjY1N2wtOC4zNzkgOC41NTFhNiA2IDAgMSAwIDguNDg1IDguNDg1bDguMzc5LTguNTUxXCIsXG4gICAgICBrZXk6IFwiMW1pZWN1XCJcbiAgICB9XG4gIF1cbl07XG5jb25zdCBQYXBlcmNsaXAgPSBjcmVhdGVMdWNpZGVJY29uKFwicGFwZXJjbGlwXCIsIF9faWNvbk5vZGUpO1xuXG5leHBvcnQgeyBfX2ljb25Ob2RlLCBQYXBlcmNsaXAgYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFwZXJjbGlwLm1qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2UgbHVjaWRlLXJlYWN0IHYxLjIzLjAgLSBJU0NcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZS5cbiAqIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBjcmVhdGVMdWNpZGVJY29uIGZyb20gJy4uL2NyZWF0ZUx1Y2lkZUljb24ubWpzJztcblxuY29uc3QgX19pY29uTm9kZSA9IFtcbiAgW1wicGF0aFwiLCB7IGQ6IFwiTTEyIDE3djVcIiwga2V5OiBcImJiMWR1OVwiIH1dLFxuICBbXG4gICAgXCJwYXRoXCIsXG4gICAge1xuICAgICAgZDogXCJNOSAxMC43NmEyIDIgMCAwIDEtMS4xMSAxLjc5bC0xLjc4LjlBMiAyIDAgMCAwIDUgMTUuMjRWMTZhMSAxIDAgMCAwIDEgMWgxMmExIDEgMCAwIDAgMS0xdi0uNzZhMiAyIDAgMCAwLTEuMTEtMS43OWwtMS43OC0uOUEyIDIgMCAwIDEgMTUgMTAuNzZWN2ExIDEgMCAwIDEgMS0xIDIgMiAwIDAgMCAwLTRIOGEyIDIgMCAwIDAgMCA0IDEgMSAwIDAgMSAxIDF6XCIsXG4gICAgICBrZXk6IFwiMW5rejhiXCJcbiAgICB9XG4gIF1cbl07XG5jb25zdCBQaW4gPSBjcmVhdGVMdWNpZGVJY29uKFwicGluXCIsIF9faWNvbk5vZGUpO1xuXG5leHBvcnQgeyBfX2ljb25Ob2RlLCBQaW4gYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGluLm1qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2UgbHVjaWRlLXJlYWN0IHYxLjIzLjAgLSBJU0NcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZS5cbiAqIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBjcmVhdGVMdWNpZGVJY29uIGZyb20gJy4uL2NyZWF0ZUx1Y2lkZUljb24ubWpzJztcblxuY29uc3QgX19pY29uTm9kZSA9IFtcbiAgW1wicGF0aFwiLCB7IGQ6IFwiTTE0IDE3SDVcIiwga2V5OiBcImdmbjNteFwiIH1dLFxuICBbXCJwYXRoXCIsIHsgZDogXCJNMTkgN2gtOVwiLCBrZXk6IFwiNmk5dGdcIiB9XSxcbiAgW1wiY2lyY2xlXCIsIHsgY3g6IFwiMTdcIiwgY3k6IFwiMTdcIiwgcjogXCIzXCIsIGtleTogXCIxOGI0OXlcIiB9XSxcbiAgW1wiY2lyY2xlXCIsIHsgY3g6IFwiN1wiLCBjeTogXCI3XCIsIHI6IFwiM1wiLCBrZXk6IFwiZGZteTB4XCIgfV1cbl07XG5jb25zdCBTZXR0aW5nczIgPSBjcmVhdGVMdWNpZGVJY29uKFwic2V0dGluZ3MtMlwiLCBfX2ljb25Ob2RlKTtcblxuZXhwb3J0IHsgX19pY29uTm9kZSwgU2V0dGluZ3MyIGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNldHRpbmdzLTIubWpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9