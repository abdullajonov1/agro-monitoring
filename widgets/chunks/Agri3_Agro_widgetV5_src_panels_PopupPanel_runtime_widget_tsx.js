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
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chart-line.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chart-column.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/sprout.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/calendar-days.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/inbox.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chevron-up.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/pin.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/map-pin.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/x.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/settings-2.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/folder-open.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/paperclip.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/download.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/mouse-pointer-click.mjs");
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
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./messages */ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/panels/PopupPanel/runtime/messages.ts");
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
            return (_a = (0,_messages__WEBPACK_IMPORTED_MODULE_22__.getInitialTheme)()) !== null && _a !== void 0 ? _a : !isLight;
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
            return (0,_messages__WEBPACK_IMPORTED_MODULE_22__.t)(this.state.currentLang, key, params);
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
            const normalized = (0,_messages__WEBPACK_IMPORTED_MODULE_22__.normalizeLang)(lang);
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
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
            try {
                document.dispatchEvent(new CustomEvent("agriPolygonMapClickPhase", {
                    detail: { phase: "click-start", timestamp: Date.now() },
                }));
            }
            catch (_u) {
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
            catch (_v) {
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
                const configuredFields = ((_j = this.props.config) === null || _j === void 0 ? void 0 : _j.fieldsToShow) || [];
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
                const clickedUniqueId = (_k = this.findAttributeValueCaseInsensitive(displayAttrs, _gis_agri_table_data_source__WEBPACK_IMPORTED_MODULE_19__.AGRI_TABLE_JOIN_FIELD)) !== null && _k !== void 0 ? _k : this.findAttributeValueCaseInsensitive(f.attributes, _gis_agri_table_data_source__WEBPACK_IMPORTED_MODULE_19__.AGRI_TABLE_JOIN_FIELD);
                if (clickedUniqueId != null && String(clickedUniqueId).trim() !== "") {
                    const cleanUniqueId = String(clickedUniqueId).trim();
                    this._activeInspectedUniqueid = cleanUniqueId.replace(/[{}]/g, "").trim();
                    (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickDebug)("selection:broadcast", {
                        uniqueid: cleanUniqueId,
                        source: "AgriPopup",
                        polygonMode: true,
                        destinations: ["AgriLocalization", "AgriGraff10"],
                    });
                    this.notifyGraffPolygonSelection(cleanUniqueId, true, clickStartedAt);
                    void this.fetchLatestVegetationIndices(cleanUniqueId);
                }
                else {
                    this.setState({
                        loadingLatestIndices: false,
                        latestIndexDate: null,
                        latestIndexValues: null,
                    });
                }
                const zoomTo = ((_m = (_l = this.props.config) === null || _l === void 0 ? void 0 : _l.settings) === null || _m === void 0 ? void 0 : _m.zoomToSelection) !== false;
                if (zoomTo && f.geometry && !isStale()) {
                    try {
                        // Keep the first pre-selection extent so closing restores the
                        // district/region view even if another field is clicked next.
                        if (!this._extentBeforeSelection && ((_o = view.extent) === null || _o === void 0 ? void 0 : _o.clone)) {
                            this._extentBeforeSelection = view.extent.clone();
                        }
                        // Keep the whole field visible with only a small margin.
                        const target = ((_q = (_p = f.geometry.extent) === null || _p === void 0 ? void 0 : _p.expand) === null || _q === void 0 ? void 0 : _q.call(_p, 1.08)) || f.geometry;
                        (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickDebug)("zoom:start", {
                            uniqueid: clickedUniqueId == null ? null : String(clickedUniqueId),
                            geometryType: f.geometry.type,
                            durationMs: 650,
                            targetExtent: ((_r = target === null || target === void 0 ? void 0 : target.toJSON) === null || _r === void 0 ? void 0 : _r.call(target)) || null,
                        });
                        void view.goTo({ target }, { duration: 650, easing: "ease-in-out" }).then(() => (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickDebug)("zoom:complete", {
                            uniqueid: clickedUniqueId == null ? null : String(clickedUniqueId),
                            scale: view.scale,
                        }), (error) => (0,_gis_agri_map_click_debug__WEBPACK_IMPORTED_MODULE_13__.agriMapClickWarn)("zoom:failed", {
                            uniqueid: clickedUniqueId == null ? null : String(clickedUniqueId),
                            error: (error === null || error === void 0 ? void 0 : error.message) || String(error),
                        }));
                    }
                    catch (_x) {
                        /* ignore */
                    }
                }
                // Attachments are best-effort — never let a media fetch wipe an open popup
                // (that was the "vegetation updates but popup only sticks on 2nd/3rd click"
                // failure: notifyGraff ran, then loadAttachments threw → catch closed UI
                // and restoreExtentBeforeSelection made the map look like other fields).
                if (((_t = (_s = this.props.config) === null || _s === void 0 ? void 0 : _s.settings) === null || _t === void 0 ? void 0 : _t.showAttachments) !== false) {
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
        this.renderChartIcon = (type = "bar") => type === "line" ? (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_23__["default"], { className: "agri3-chart-icon", strokeWidth: 2, "aria-hidden": "true" })) : (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_24__["default"], { className: "agri3-chart-icon", strokeWidth: 2, "aria-hidden": "true" }));
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
                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_25__["default"], { size: 14, strokeWidth: 2.2, "aria-hidden": "true" }),
                        this.tr("indices.title")),
                    latestIndexDate && !loadingLatestIndices && (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("span", { className: "agri3-field-value agri3-indices-date" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_26__["default"], { size: 13, strokeWidth: 2, "aria-hidden": "true" }),
                        latestIndexDate))),
                showBlockingLoader ? (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-indices-loading-container" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(_shared_AgriChartLoader__WEBPACK_IMPORTED_MODULE_21__["default"], { label: this.tr("indices.loading") }))) : hasValues ? (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: `agri3-indices-body${showRefreshLoader ? " agri3-indices-body--loading" : ""}` },
                    showRefreshLoader ? (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(_shared_AgriChartLoader__WEBPACK_IMPORTED_MODULE_21__["default"], { label: this.tr("indices.loading") })) : null,
                    AgriPolygon.VEG_INDEX_FIELDS.filter((f) => latestIndexValues[f] != null).map((f) => (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: `agri3-field-row agri3-index-row agri3-index-row--${f}`, key: f },
                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("span", { className: `agri3-field-label agri3-index-label agri3-index-label--${f}` },
                            jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("span", { className: "agri3-index-dot", "aria-hidden": "true" }),
                            f.toUpperCase()),
                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("span", { className: "agri3-field-value" }, latestIndexValues[f].toFixed(4))))))) : (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-status-indicator agri3-status-waiting" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_27__["default"], { className: "agri3-status-icon", size: 16, strokeWidth: 2.2, "aria-hidden": "true" }),
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
                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_28__["default"], { className: "agri3-popup-minimized-icon", size: 16, strokeWidth: 2.4, "aria-hidden": "true" }))));
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
                    jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("button", { className: `agri3-popup-pin${pinToCorner ? " active" : ""}`, onClick: this.togglePinToCorner, title: pinToCorner ? this.tr("action.unpin") : this.tr("action.pin"), "aria-pressed": pinToCorner, type: "button" }, pinToCorner ? (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_29__["default"], { size: 15, strokeWidth: 2.2, "aria-hidden": "true" })) : (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_30__["default"], { size: 15, strokeWidth: 2.2, "aria-hidden": "true" }))),
                    jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("h2", { className: "agri3-popup-title" }, title),
                    jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("button", { type: "button", className: "agri3-popup-close", onClick: this.minimizePopup, "aria-label": this.tr("action.minimize"), title: this.tr("action.minimize") },
                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_31__["default"], { size: 16, strokeWidth: 2.4, "aria-hidden": "true" }))),
                jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-popup-content" },
                    error && (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-error-container" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_32__["default"], { className: "agri3-error-icon", size: 20, strokeWidth: 2.2, "aria-hidden": "true" }),
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
                            jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_27__["default"], { className: "agri3-status-icon", size: 16, strokeWidth: 2.2, "aria-hidden": "true" }),
                            this.tr("status.noConfiguredData"))))),
                    !loading && selectedAttrs && fields.length === 0 && (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-status-indicator agri3-status-waiting" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_33__["default"], { className: "agri3-status-icon", size: 16, strokeWidth: 2.2, "aria-hidden": "true" }),
                        this.tr("status.noFields"))),
                    !loading && selectedAttrs && this.renderLatestIndices(),
                    !loading && selectedAttrs && this.renderChart(),
                    showAttachments && (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-attachments" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-attachments-header" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-attachments-title" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_34__["default"], { size: 15, strokeWidth: 2.2, "aria-hidden": "true" }),
                                this.tr("attachments.title"),
                                " ",
                                hasAttachments ? `(${attachments.length})` : "")),
                        loadingAttachments && (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-loading-container agri3-loading-container--compact", style: { marginTop: 8 } },
                            jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(_shared_AgriChartLoader__WEBPACK_IMPORTED_MODULE_21__["default"], { label: this.tr("status.loadingAttachments") }))),
                        !loadingAttachments && attachmentsError && (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-status-indicator agri3-status-waiting", style: { marginTop: 6 }, title: attachmentsError },
                            jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_32__["default"], { className: "agri3-status-icon", size: 16, strokeWidth: 2.2, "aria-hidden": "true" }),
                            this.tr("status.attachmentsError") || attachmentsError)),
                        !loadingAttachments && !attachmentsError && !hasAttachments && (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-status-indicator agri3-status-waiting", style: { marginTop: 6 } },
                            jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_34__["default"], { className: "agri3-status-icon", size: 16, strokeWidth: 2.2, "aria-hidden": "true" }),
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
                                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_35__["default"], { size: 14, strokeWidth: 2.2, "aria-hidden": "true" }),
                                        a.name ||
                                            this.tr("attachment.fileFallback", {
                                                id: a.id,
                                            })),
                                    jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("a", { className: "agri3-attachment-download", href: a.url, target: "_blank", rel: "noopener noreferrer", download: a.name || undefined },
                                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_36__["default"], { size: 13, strokeWidth: 2.2, "aria-hidden": "true" }),
                                        this.tr("attachment.download"))),
                                jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-attachment-file-meta" },
                                    (a.contentType || "").split("/").pop() || "",
                                    " ",
                                    a.size ? `• ${this.bytesToSize(a.size)}` : ""))))))))),
                    !loading && !selectedAttrs && !error && (jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement("div", { className: "agri3-status-indicator agri3-status-waiting" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_7__.React.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_37__["default"], { className: "agri3-status-icon", size: 16, strokeWidth: 2.2, "aria-hidden": "true" }),
                        this.tr("status.clickPolygon"))))));
        };
        this.dataSourceEngine = (0,_gis_agri_engine_registry__WEBPACK_IMPORTED_MODULE_12__.getSharedAgriDataSourceEngine)(props.id);
        this.state = {
            currentLang: (0,_messages__WEBPACK_IMPORTED_MODULE_22__.getInitialLang)(),
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

/***/ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/panels/GraffPanel/runtime/graff-graph-constants.ts":
/*!************************************************************************************************************!*\
  !*** ./your-extensions/widgets/Agri3/Agro_widgetV5/src/panels/GraffPanel/runtime/graff-graph-constants.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GRAFF_INDEX_BUTTONS: () => (/* binding */ GRAFF_INDEX_BUTTONS),
/* harmony export */   GRAFF_INDEX_ORDER: () => (/* binding */ GRAFF_INDEX_ORDER),
/* harmony export */   REPUBLIC_TIMESERIES_INDEX_FIELDS: () => (/* binding */ REPUBLIC_TIMESERIES_INDEX_FIELDS),
/* harmony export */   isRepublicTimeseriesIndexField: () => (/* binding */ isRepublicTimeseriesIndexField)
/* harmony export */ });
const GRAFF_INDEX_BUTTONS = [
    { key: "ndvi", label: "NDVI", color: "#00d084" },
    { key: "savi", label: "SAVI", color: "#7aa5ff" },
    { key: "rvi", label: "RVI", color: "#ffb347" },
    { key: "ci", label: "CI", color: "#c78bff" },
    { key: "evi", label: "EVI", color: "#ff4d8d" },
    { key: "ndwi", label: "NDWI", color: "#2ec4f1" },
];
const GRAFF_INDEX_ORDER = GRAFF_INDEX_BUTTONS.map((item) => item.key);
/** Republic regional timeseries AVG field allow-list. */
const REPUBLIC_TIMESERIES_INDEX_FIELDS = [
    "ndvi",
    "savi",
    "evi",
    "rvi",
    "ci",
    "ndwi",
];
function isRepublicTimeseriesIndexField(value) {
    return REPUBLIC_TIMESERIES_INDEX_FIELDS.includes(value);
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

/***/ "./node_modules/lucide-react/dist/esm/icons/chart-line.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/chart-line.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ ChartLine)
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
  ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }]
];
const ChartLine = (0,_createLucideIcon_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])("chart-line", __iconNode);


//# sourceMappingURL=chart-line.mjs.map


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvQWdyaTNfQWdyb193aWRnZXRWNV9zcmNfcGFuZWxzX1BvcHVwUGFuZWxfcnVudGltZV93aWRnZXRfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBcUQ7QUFDckQsdUdBQXVHOzs7Ozs7Ozs7O0FBRXBFO0FBRW1CO0FBQ2Q7QUFDRDtBQUNzQjtBQUNBO0FBQ0g7QUFNdkM7QUFpQkc7QUFDbUQ7QUFJM0I7QUFDMkc7QUFDMUU7QUFDRztBQUt2QztBQUN3QztBQUNNO0FBU3pEO0FBZVM7QUFJUztBQUlMO0FBQ29CO0FBQ0g7QUFPMUM7QUFvRnBCLE1BQXFCLFdBQVksU0FBUSw0Q0FBSyxDQUFDLGFBRzlDO0lBMkNTLGFBQWEsQ0FDbkIsSUFBK0M7UUFFL0MsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNqQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBRWpDLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQztZQUMvQixNQUFNLElBQUksR0FDUCxRQUFRLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUF3QjtnQkFDcEUsUUFBUSxDQUFDLGVBQWUsQ0FBQztZQUMzQixNQUFNLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7aUJBQy9CLGdCQUFnQixDQUFDLDhCQUE4QixDQUFDO2lCQUNoRCxJQUFJLEVBQUUsQ0FBQztZQUNWLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEMsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDMUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztZQUNyQixDQUFDO1FBQ0gsQ0FBQztRQUVELElBQUksSUFBSSxFQUFFLENBQUM7WUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUVBQWdCOztBQUVVO0FBQzVDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXVEOztBQUV2RDtBQUNBLGFBQWEsOEJBQThCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlFQUFnQjs7QUFFVTtBQUN0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV1RDs7QUFFdkQ7QUFDQSxhQUFhLDhCQUE4QjtBQUMzQyxhQUFhLDZCQUE2QjtBQUMxQyxlQUFlLDJDQUEyQztBQUMxRCxlQUFlLHlDQUF5QztBQUN4RDtBQUNBLGtCQUFrQixpRUFBZ0I7O0FBRVU7QUFDNUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvQWdyaTMvQWdyb193aWRnZXRWNS9zcmMvcGFuZWxzL1BvcHVwUGFuZWwvcnVudGltZS93aWRnZXQudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9BZ3JpMy9BZ3JvX3dpZGdldFY1L3NyYy9naXMvQWdyaUhpZGRlbkNvbm5lY3RvcnMudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9BZ3JpMy9BZ3JvX3dpZGdldFY1L3NyYy9naXMvYWdyaS1kYXRhLXNvdXJjZS1lbmdpbmUudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL0FncmkzL0Fncm9fd2lkZ2V0VjUvc3JjL2dpcy9hZ3JpLWVuZ2luZS1yZWdpc3RyeS50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvQWdyaTMvQWdyb193aWRnZXRWNS9zcmMvZ2lzL2FncmktbGlua2VkLW1hcC1sYXlvdXQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL0FncmkzL0Fncm9fd2lkZ2V0VjUvc3JjL3BhbmVscy9HcmFmZlBhbmVsL3J1bnRpbWUvZ3JhZmYtZ3JhcGgtY29uc3RhbnRzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9BZ3JpMy9BZ3JvX3dpZGdldFY1L3NyYy9wYW5lbHMvUG9wdXBQYW5lbC9ydW50aW1lL21lc3NhZ2VzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9BZ3JpMy9BZ3JvX3dpZGdldFY1L3NyYy9wYW5lbHMvUG9wdXBQYW5lbC9ydW50aW1lL3BvcHVwLWZpZWxkLWhlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL0FncmkzL0Fncm9fd2lkZ2V0VjUvc3JjL3BhbmVscy9Qb3B1cFBhbmVsL3J1bnRpbWUvcG9wdXAtZm9ybWF0LWhlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvY2FsZW5kYXItZGF5cy5tanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvY2hhcnQtY29sdW1uLm1qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9pY29ucy9jaGFydC1saW5lLm1qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9pY29ucy9jaGV2cm9uLXVwLm1qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9pY29ucy9kb3dubG9hZC5tanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvZm9sZGVyLW9wZW4ubWpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2ljb25zL2luYm94Lm1qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9pY29ucy9tYXAtcGluLm1qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9pY29ucy9tb3VzZS1wb2ludGVyLWNsaWNrLm1qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9pY29ucy9wYXBlcmNsaXAubWpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2ljb25zL3Bpbi5tanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvc2V0dGluZ3MtMi5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUG9seWdvbiBBdHRyaWJ1dGUgSW5zcGVjdG9yIChBZ3JpUG9seWdvbiByZWZhY3Rvcilcbi8vIOKchSBVUERBVEVEOiBzdXBwb3J0cyBNVUxUSVBMRSBzZWxlY3RlZCBGZWF0dXJlIExheWVycyAoZS5nLiB5ZWFybHkgbGF5ZXJzIGZpbHRlcmVkIGJ5IGFub3RoZXIgd2lkZ2V0KVxuXG5pbXBvcnQgR3JhcGhpYyBmcm9tIFwiZXNyaS9HcmFwaGljXCI7XG5pbXBvcnQgRmVhdHVyZUxheWVyIGZyb20gXCJlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXJcIjtcbmltcG9ydCBHcmFwaGljc0xheWVyIGZyb20gXCJlc3JpL2xheWVycy9HcmFwaGljc0xheWVyXCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcImVzcmkvZ2VvbWV0cnkvUG9pbnRcIjtcbmltcG9ydCBlc3JpUmVxdWVzdCBmcm9tIFwiZXNyaS9yZXF1ZXN0XCI7XG5pbXBvcnQgU2ltcGxlRmlsbFN5bWJvbCBmcm9tIFwiZXNyaS9zeW1ib2xzL1NpbXBsZUZpbGxTeW1ib2xcIjtcbmltcG9ydCBTaW1wbGVMaW5lU3ltYm9sIGZyb20gXCJlc3JpL3N5bWJvbHMvU2ltcGxlTGluZVN5bWJvbFwiO1xuaW1wb3J0IHsgSmltdU1hcFZpZXcsIE1hcFZpZXdNYW5hZ2VyIH0gZnJvbSBcImppbXUtYXJjZ2lzXCI7XG5pbXBvcnQge1xuICBBbGxXaWRnZXRQcm9wcyxcbiAgRGF0YVNvdXJjZU1hbmFnZXIsXG4gIFF1ZXJpYWJsZURhdGFTb3VyY2UsXG4gIFJlYWN0LFxufSBmcm9tIFwiamltdS1jb3JlXCI7XG5pbXBvcnQge1xuICBBbGVydFRyaWFuZ2xlLFxuICBCYXJDaGFydDMsXG4gIENhbGVuZGFyRGF5cyxcbiAgRG93bmxvYWQsXG4gIEZvbGRlck9wZW4sXG4gIEluYm94LFxuICBMaW5lQ2hhcnQsXG4gIE1hcFBpbixcbiAgTW91c2VQb2ludGVyQ2xpY2ssXG4gIFBhcGVyY2xpcCxcbiAgUGluLFxuICBTZXR0aW5nczIsXG4gIFNwcm91dCxcbiAgQ2hldnJvblVwLFxuICBYLFxufSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBBZ3JpSGlkZGVuQ29ubmVjdG9ycyB9IGZyb20gXCIuLi8uLi8uLi9naXMvQWdyaUhpZGRlbkNvbm5lY3RvcnNcIjtcbmltcG9ydCB7XG4gIGdldFNlbGVjdGVkRHNJZHMsXG4gIHR5cGUgQWdyaURhdGFTb3VyY2VFbmdpbmUsXG59IGZyb20gXCIuLi8uLi8uLi9naXMvYWdyaS1kYXRhLXNvdXJjZS1lbmdpbmVcIjtcbmltcG9ydCB7IEFHUklfTUFQX1ZJRVdfUkVBRFlfRVZFTlQsIEFHUklfTUFQX0NMSUNLX0VWRU5ULCBBR1JJX1hZX1BBR0VfQ0xPU0VEX0VWRU5ULCB0eXBlIEFncmlNYXBDbGlja0RldGFpbCB9IGZyb20gXCIuLi8uLi8uLi9naXMvYWdyaS1kYXRhLWxheWVyLXJvbGVzXCI7XG5pbXBvcnQgeyBkaXNjb3Zlck1hcFdpZGdldElkSW5BcHAgfSBmcm9tIFwiLi4vLi4vLi4vZ2lzL2FncmktbGlua2VkLW1hcC1sYXlvdXRcIjtcbmltcG9ydCB7IGdldFNoYXJlZEFncmlEYXRhU291cmNlRW5naW5lIH0gZnJvbSBcIi4uLy4uLy4uL2dpcy9hZ3JpLWVuZ2luZS1yZWdpc3RyeVwiO1xuaW1wb3J0IHtcbiAgYWdyaU1hcENsaWNrRGVidWcsXG4gIGFncmlNYXBDbGlja1dhcm4sXG4gIGxvZ1BvaW50ZXJTdGFjayxcbn0gZnJvbSBcIi4uLy4uLy4uL2dpcy9hZ3JpLW1hcC1jbGljay1kZWJ1Z1wiO1xuaW1wb3J0IHsgR1JBRkZfSU5ERVhfT1JERVIgfSBmcm9tIFwiLi4vLi4vR3JhZmZQYW5lbC9ydW50aW1lL2dyYWZmLWdyYXBoLWNvbnN0YW50c1wiO1xuaW1wb3J0IHsgbm9ybWFsaXplRmllbGRBbGlhcyBhcyBub3JtYWxpemVGaWVsZEFsaWFzU2hhcmVkIH0gZnJvbSBcIi4vcG9wdXAtZmllbGQtaGVscGVyc1wiO1xuaW1wb3J0IHtcbiAgZmluZEF0dHJpYnV0ZVZhbHVlQ2FzZUluc2Vuc2l0aXZlIGFzIGZpbmRBdHRyaWJ1dGVWYWx1ZUNhc2VJbnNlbnNpdGl2ZVNoYXJlZCxcbiAgZm9ybWF0Q2hhcnRUaWNrIGFzIGZvcm1hdENoYXJ0VGlja1NoYXJlZCxcbiAgZm9ybWF0Q2hhcnRUb29sdGlwVmFsdWUgYXMgZm9ybWF0Q2hhcnRUb29sdGlwVmFsdWVTaGFyZWQsXG4gIGZvcm1hdERhdGVTbWFydCBhcyBmb3JtYXREYXRlU21hcnRTaGFyZWQsXG4gIGZvcm1hdFBvcHVwQXR0cmlidXRlVmFsdWUsXG4gIGlzRXNyaURhdGVGaWVsZFR5cGUsXG4gIG5pY2VDaGFydE1heCBhcyBuaWNlQ2hhcnRNYXhTaGFyZWQsXG59IGZyb20gXCIuL3BvcHVwLWZvcm1hdC1oZWxwZXJzXCI7XG5pbXBvcnQge1xuICBjb2xsZWN0UXVlcnlhYmxlRmllbGRMYXllcnMsXG4gIGV4dHJhY3RNYXBMYXllcklkRnJvbURzSWQsXG4gIGZpbmRRdWVyeWFibGVMYXllck9uTWFwQnlVcmwsXG4gIGZpbmRRdWVyeWFibGVMYXllck9uTWFwQnlJZCxcbiAgZ2V0QWxsRmVhdHVyZUxheWVyc0Zyb21NYXAsXG4gIGdldERldGFjaGVkUXVlcnlMYXllckZvcixcbiAgZ2V0QWdyaUxheWVyTWFwS2V5LFxuICBnZXRRdWVyeWFibGVMYXllcixcbiAgaXNNYXBJbWFnZUdyb3VwU3VibGF5ZXIsXG4gIGlzTWFwSW1hZ2VPd25lZExheWVyLFxuICBpc1F1ZXJ5YWJsZUZpZWxkTGF5ZXIsXG4gIG5vcm1hbGl6ZVF1ZXJ5YWJsZUxheWVyVXJsLFxuICBzYWZlTG9hZE1hcExheWVyLFxufSBmcm9tIFwiLi4vLi4vLi4vZ2lzL2ZlYXR1cmUtbGF5ZXItZGF0YVwiO1xuaW1wb3J0IHtcbiAgZm9ybWF0QXJjZ2lzRGF0ZVRvWW1kLFxuICBxdWVyeVZlZ2V0YXRpb25TZXJpZXNGb3JVbmlxdWVJZCxcbn0gZnJvbSBcIi4uLy4uLy4uL2dpcy9hZ3JpLXZlZ2V0YXRpb24tZGF0YS1zb3VyY2VcIjtcbmltcG9ydCB7XG4gIEFHUklfVEFCTEVfSk9JTl9GSUVMRCxcbiAgcXVlcnlBZ3JpUmVjb3JkQnlVbmlxdWVJZCxcbn0gZnJvbSBcIi4uLy4uLy4uL2dpcy9hZ3JpLXRhYmxlLWRhdGEtc291cmNlXCI7XG5pbXBvcnQgeyBiaW5kTWFzdGVyRmlsdGVyIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvYWdyaS1maWx0ZXItYnVzXCI7XG5pbXBvcnQgQWdyaUNoYXJ0TG9hZGVyIGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvQWdyaUNoYXJ0TG9hZGVyXCI7XG5pbXBvcnQge1xuICBnZXRJbml0aWFsTGFuZyxcbiAgZ2V0SW5pdGlhbFRoZW1lLFxuICBub3JtYWxpemVMYW5nLFxuICB0LFxuICB0eXBlIExhbmdDb2RlLFxufSBmcm9tIFwiLi9tZXNzYWdlc1wiO1xuXG50eXBlIENvbmZpZyA9IHtcbiAgZmllbGRzVG9TaG93Pzogc3RyaW5nW107XG4gIHRpdGxlRmllbGQ/OiBzdHJpbmc7XG4gIGxhYmVscz86IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gIHNldHRpbmdzPzoge1xuICAgIHpvb21Ub1NlbGVjdGlvbj86IGJvb2xlYW47IC8vIGRlZmF1bHQgdHJ1ZVxuICAgIHNob3dNYXBQb3B1cD86IGJvb2xlYW47IC8vIGRlZmF1bHQgZmFsc2VcbiAgICBzaG93QXR0YWNobWVudHM/OiBib29sZWFuOyAvLyBkZWZhdWx0IHRydWUgKHdoZW4gdW5kZWZpbmVkKVxuICB9O1xuICBjaGFydEVuYWJsZWQ/OiBib29sZWFuO1xuICBjaGFydFR5cGU/OiBcImJhclwiIHwgXCJsaW5lXCI7XG4gIGNoYXJ0VGl0bGU/OiBzdHJpbmc7XG4gIGNoYXJ0RmllbGRzPzogc3RyaW5nW107XG4gIGNoYXJ0Q29sb3I/OiBzdHJpbmc7XG59O1xuXG50eXBlIEF0dGFjaG1lbnRJdGVtID0ge1xuICBpZDogbnVtYmVyO1xuICBuYW1lPzogc3RyaW5nO1xuICBzaXplPzogbnVtYmVyO1xuICBjb250ZW50VHlwZT86IHN0cmluZztcbiAgdXJsPzogc3RyaW5nOyAvLyBkaXJlY3QgZG93bmxvYWQgVVJMXG4gIHByZXZpZXdPYmplY3RVcmw/OiBzdHJpbmc7IC8vIGNyZWF0ZWQgdmlhIFVSTC5jcmVhdGVPYmplY3RVUkwgZm9yIDxpbWc+IHByZXZpZXdzXG59O1xuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBjdXJyZW50TGFuZzogTGFuZ0NvZGU7XG4gIGlzRGFya1RoZW1lOiBib29sZWFuO1xuXG4gIGppbXVNYXBWaWV3PzogSmltdU1hcFZpZXcgfCBudWxsO1xuXG4gIC8qKiDinIUgTVVMVEk6IGFsbCByZXNvbHZlZCBsYXllcnMgZnJvbSBzZXR0aW5ncyAqL1xuICBmZWF0dXJlTGF5ZXJzOiBfX2VzcmkuRmVhdHVyZUxheWVyW107XG4gIC8qKiDinIUgTVVMVEk6IG1hcCBjbGlja2VkIGxheWVyID0+IGRzSWQgKGJlc3QtZWZmb3J0KSAqL1xuICBsYXllcktleVRvRHNJZDogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcblxuICAvKiog4pyFIE1VTFRJOiBzdG9yZSBEUyBzY2hlbWFzIHBlciBEUyBpZCAqL1xuICBkYXRhU291cmNlc0J5SWQ6IFJlY29yZDxzdHJpbmcsIFF1ZXJpYWJsZURhdGFTb3VyY2U+O1xuXG4gIC8qKiB3aGljaCBsYXllciB3YXMgbGFzdCBjbGlja2VkIChmb3IgYWxpYXNlcy9maWVsZCByZXNvbHZpbmcpICovXG4gIGxhc3RDbGlja2VkRHNJZDogc3RyaW5nIHwgbnVsbDtcbiAgbGFzdENsaWNrZWRMYXllcktleTogc3RyaW5nIHwgbnVsbDtcblxuICBwaW5Ub0Nvcm5lcjogYm9vbGVhbjtcblxuICAvLyBhdHRhY2htZW50cyBVSVxuICBsb2FkaW5nQXR0YWNobWVudHM6IGJvb2xlYW47XG4gIGF0dGFjaG1lbnRzOiBBdHRhY2htZW50SXRlbVtdO1xuICBhdHRhY2htZW50c0Vycm9yOiBzdHJpbmcgfCBudWxsO1xuICBhdHRhY2htZW50c0V4cGFuZGVkOiBib29sZWFuO1xuXG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIGVycm9yOiBzdHJpbmcgfCBudWxsO1xuXG4gIHNlbGVjdGVkQXR0cnM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCBudWxsO1xuICBzZWxlY3RlZE9JRDogbnVtYmVyIHwgbnVsbDtcbiAgb2JqZWN0SWRGaWVsZDogc3RyaW5nIHwgbnVsbDtcblxuICBzaG93UG9wdXA6IGJvb2xlYW47XG4gIC8qKiBYIGNvbGxhcHNlcyB0aGUgcGFuZWw7IHNlbGVjdGlvbiArIGRhdGEgc3RheSB1bnRpbCByZWFsIGRlc2VsZWN0LiAqL1xuICBwb3B1cE1pbmltaXplZDogYm9vbGVhbjtcbiAgcG9wdXBQb3NpdGlvbjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbDtcbiAgY2xpY2tTY3JlZW5Qb2ludDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbDtcblxuICBkZWJ1Z0luZm86IHtcbiAgICBsYXllckluZm8/OiBhbnk7XG4gICAgaGl0VGVzdFJlc3VsdHM/OiBhbnk7XG4gICAgcXVlcnlSZXN1bHRzPzogYW55O1xuICAgIGZpZWxkTWFwcGluZz86IGFueTtcbiAgICBhdmFpbGFibGVMYXllcnM/OiBhbnk7XG4gIH07XG5cbiAgY2hhcnRFeHBhbmRlZDogYm9vbGVhbjtcbiAgY2hhcnRIb3ZlckluZGV4OiBudW1iZXIgfCBudWxsO1xuXG4gIC8vIExhdGVzdC1kYXkgdmVnZXRhdGlvbiBpbmRleCB2YWx1ZXMgKE5EVkkvU0FWSS9SVkkvQ0kvRVZJL05EV0kpIGZvciB0aGVcbiAgLy8gY3VycmVudGx5IHNlbGVjdGVkIHBvbHlnb24sIGZyb20gYWdyaV92ZWdldGF0aW9uX2luZGljZXMuXG4gIGxvYWRpbmdMYXRlc3RJbmRpY2VzOiBib29sZWFuO1xuICBsYXRlc3RJbmRleERhdGU6IHN0cmluZyB8IG51bGw7XG4gIGxhdGVzdEluZGV4VmFsdWVzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+IHwgbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWdyaVBvbHlnb24gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFxuICBBbGxXaWRnZXRQcm9wczxDb25maWc+LFxuICBTdGF0ZVxuPiB7XG4gIHByaXZhdGUgX2lzTW91bnRlZCA9IGZhbHNlO1xuICBwcml2YXRlIF91bmJpbmRNYXN0ZXJGaWx0ZXI6ICgoKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHRoZW1lT2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXIgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfY2xpY2tIYW5kbGU6IElIYW5kbGVMaWtlIHwgbnVsbCA9IG51bGw7XG4gIC8qKiBNb25vdG9uaWMgaWQgc28gYSBzbG93L2R1cGxpY2F0ZSBjbGljayBwYXRoIGNhbm5vdCBjbG9zZSBhIG5ld2VyIHBvcHVwLiAqL1xuICBwcml2YXRlIF9jbGlja0dlbmVyYXRpb24gPSAwO1xuICBwcml2YXRlIF9wb3B1cFJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICBwcml2YXRlIF9oaWdobGlnaHRMYXllcjogX19lc3JpLkdyYXBoaWNzTGF5ZXIgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfaGlnaGxpZ2h0R3JhcGhpYzogX19lc3JpLkdyYXBoaWMgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfaGlnaGxpZ2h0SGFsb0dyYXBoaWM6IF9fZXNyaS5HcmFwaGljIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX2V4dGVudEJlZm9yZVNlbGVjdGlvbjogX19lc3JpLkV4dGVudCB8IG51bGwgPSBudWxsO1xuICAvKiogQ3VycmVudGx5IGluc3BlY3RlZCBmaWVsZCB1bmlxdWVpZCAobWFwIG9yIHRhYmxlIHZpYSBodWIpLiBTYW1lLWlkIG1hcCBjbGljayB0b2dnbGVzIG9mZi4gKi9cbiAgcHJpdmF0ZSBfYWN0aXZlSW5zcGVjdGVkVW5pcXVlaWQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAvKiogTGFzdCB5aWx8dmlsb3lhdHx0dW1hbiBmcm9tIG1hc3RlckZpbHRlckNoYW5nZWQg4oCUIGdlb2dyYXBoeSBtb3ZlIGNsb3NlcyBwb3B1cC4gKi9cbiAgcHJpdmF0ZSBfbGFzdE1hc3Rlckdlb0tleSA9IFwiXCI7XG4gIHByaXZhdGUgX2lzRHJhZ2dpbmdQb3B1cCA9IGZhbHNlO1xuICBwcml2YXRlIF9wb3B1cERyYWdPZmZzZXQgPSB7IHg6IDAsIHk6IDAgfTtcbiAgcHJpdmF0ZSBfcG9wdXBMYXlvdXRUaW1lcjogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfcG9wdXBMYXlvdXRSYWYgPSAwO1xuICBwcml2YXRlIG1hcEFyZWFSZXNpemVPYnNlcnZlcjogUmVzaXplT2JzZXJ2ZXIgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSByZWFkb25seSBfZmVhdHVyZVF1ZXJ5Q2FjaGVUdGxNcyA9IDYwICogNjAgKiAxMDAwO1xuICBwcml2YXRlIF9mZWF0dXJlUXVlcnlDYWNoZSA9IG5ldyBNYXA8XG4gICAgc3RyaW5nLFxuICAgIHsgZXhwaXJlczogbnVtYmVyOyB2YWx1ZTogUHJvbWlzZTxfX2VzcmkuR3JhcGhpYyB8IG51bGw+IH1cbiAgPigpO1xuICAvKiogRGV0YWNoZWQgcXVlcnkgY2xpZW50cyBrZXllZCBieSBzZXJ2aWNlIFVSTDsgbmV2ZXIgbXV0YXRlIGxpdmUgbWFwIHN1YmxheWVycy4gKi9cbiAgcHJpdmF0ZSBfcXVlcnlPbmx5TGF5ZXJzID0gbmV3IE1hcDxzdHJpbmcsIEZlYXR1cmVMYXllcj4oKTtcbiAgcHJpdmF0ZSByZWFkb25seSBkYXRhU291cmNlRW5naW5lOiBBZ3JpRGF0YVNvdXJjZUVuZ2luZTtcbiAgcHJpdmF0ZSBtYXBWaWV3RmFsbGJhY2tUaW1lcjogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBtYXBJbml0UmV0cnlUaW1lcjogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBjb25uZWN0ZWRNYXBWaWV3SWQgPSBcIlwiO1xuICBwcml2YXRlIG1hcEluaXRSZXRyeUNvdW50ID0gMDtcbiAgcHJpdmF0ZSByZWFkb25seSBtYXhNYXBJbml0UmV0cmllcyA9IDEyO1xuICBwcml2YXRlIG1hcENsaWNrQm9vdHN0cmFwVGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldEludGVydmFsPiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHJlYWRvbmx5IFBPUFVQX1dJRFRIID0gMzQwO1xuICBwcml2YXRlIHJlYWRvbmx5IFBPUFVQX01BUkdJTiA9IDEyO1xuICAvKiogTWF0Y2ggZGFzaGJvYXJkIG1hcCBvdmVybGF5czogMTZweCBob3Jpem9udGFsIGFuZCAxMnB4IHZlcnRpY2FsIGluc2V0LiAqL1xuICBwcml2YXRlIHJlYWRvbmx5IERBU0hCT0FSRF9QT1BVUF9IT1JJWk9OVEFMX0lOU0VUID0gMTY7XG4gIHByaXZhdGUgcmVhZG9ubHkgREFTSEJPQVJEX1BPUFVQX1ZFUlRJQ0FMX0lOU0VUID0gMTI7XG4gIC8qKiBHdWFyZHMgYWdhaW5zdCBhIHN0YWxlIGxhdGVzdC1pbmRpY2VzIHJlc3BvbnNlIGxhbmRpbmcgYWZ0ZXIgYSBuZXdlciBwb2x5Z29uIHNlbGVjdGlvbi4gKi9cbiAgcHJpdmF0ZSBfbGF0ZXN0SW5kaWNlc1JlcXVlc3RJZCA9IDA7XG5cbiAgcHJpdmF0ZSBnZXRQb3B1cFdpZHRoKFxuICAgIHZpZXc/OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcgfCBudWxsLFxuICApOiBudW1iZXIge1xuICAgIGNvbnN0IG1hcmdpbiA9IHRoaXMuUE9QVVBfTUFSR0lOO1xuICAgIGxldCBwcmVmZXJyZWQgPSB0aGlzLlBPUFVQX1dJRFRIO1xuXG4gICAgaWYgKHRoaXMuaXNEYXNoYm9hcmRFbWJlZGRlZCgpKSB7XG4gICAgICBjb25zdCByb290ID1cbiAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWdyaS1kYXNoYm9hcmQtdjNcIikgYXMgSFRNTEVsZW1lbnQgfCBudWxsKSB8fFxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICBjb25zdCByYXcgPSBnZXRDb21wdXRlZFN0eWxlKHJvb3QpXG4gICAgICAgIC5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1hZ3JpLWRhc2hib2FyZC1wb3B1cC13aWR0aFwiKVxuICAgICAgICAudHJpbSgpO1xuICAgICAgY29uc3QgcGFyc2VkID0gTnVtYmVyLnBhcnNlRmxvYXQocmF3KTtcbiAgICAgIGlmIChOdW1iZXIuaXNGaW5pdGUocGFyc2VkKSAmJiBwYXJzZWQgPiAwKSB7XG4gICAgICAgIHByZWZlcnJlZCA9IHBhcnNlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmlldykge1xuICAgICAgY29uc3QgbWFwVyA9IHRoaXMuZ2V0TWFwQXJlYVJlY3Qodmlldykud2lkdGg7XG4gICAgICByZXR1cm4gTWF0aC5tYXgoMjIwLCBNYXRoLm1pbihwcmVmZXJyZWQsIG1hcFcgLSBtYXJnaW4gKiAyKSk7XG4gICAgfVxuICAgIHJldHVybiBwcmVmZXJyZWQ7XG4gIH1cblxuICBwcml2YXRlIGdldFBpbm5lZFBvcHVwSGVpZ2h0KFxuICAgIHZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldyxcbiAgICB0b3BZOiBudW1iZXIsXG4gICk6IG51bWJlciB7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuZ2V0TWFwQXJlYVJlY3Qodmlldyk7XG4gICAgaWYgKHRoaXMuaXNEYXNoYm9hcmRFbWJlZGRlZCgpKSB7XG4gICAgICBjb25zdCBib3R0b21JbnNldCA9IHRoaXMuREFTSEJPQVJEX1BPUFVQX1ZFUlRJQ0FMX0lOU0VUO1xuICAgICAgcmV0dXJuIE1hdGgubWF4KDE2MCwgcmVjdC5ib3R0b20gLSBib3R0b21JbnNldCAtIHRvcFkpO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmdpbiA9IHRoaXMuUE9QVVBfTUFSR0lOO1xuICAgIGNvbnN0IG1hcEJvdHRvbSA9IHRoaXMuZ2V0RWZmZWN0aXZlTWFwQm90dG9tKHZpZXcsIG1hcmdpbik7XG4gICAgcmV0dXJuIE1hdGgubWF4KDE2MCwgbWFwQm90dG9tIC0gdG9wWSk7XG4gIH1cblxuICBwcml2YXRlIGdldFBvcHVwRGltZW5zaW9ucyhcbiAgICB2aWV3PzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3IHwgbnVsbCxcbiAgICBwaW5uZWQgPSBmYWxzZSxcbiAgICBwb3NpdGlvbj86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGwsXG4gICk6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFBvcHVwV2lkdGgodmlldyk7XG4gICAgaWYgKHBpbm5lZCAmJiB2aWV3KSB7XG4gICAgICBjb25zdCB0b3BZID1cbiAgICAgICAgcG9zaXRpb24/LnkgPz8gdGhpcy5jYWxjdWxhdGVQaW5uZWRQb3NpdGlvbih2aWV3KS55O1xuICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRQaW5uZWRQb3B1cEhlaWdodCh2aWV3LCB0b3BZKTtcbiAgICAgIHJldHVybiB7IHdpZHRoLCBoZWlnaHQgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgd2lkdGgsIGhlaWdodDogd2lkdGggfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBBbGxXaWRnZXRQcm9wczxDb25maWc+KSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuZGF0YVNvdXJjZUVuZ2luZSA9IGdldFNoYXJlZEFncmlEYXRhU291cmNlRW5naW5lKHByb3BzLmlkKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50TGFuZzogZ2V0SW5pdGlhbExhbmcoKSxcbiAgICAgIGlzRGFya1RoZW1lOiB0aGlzLmdldFJlc29sdmVkVGhlbWUoKSxcblxuICAgICAgamltdU1hcFZpZXc6IG51bGwsXG5cbiAgICAgIGZlYXR1cmVMYXllcnM6IFtdLFxuICAgICAgbGF5ZXJLZXlUb0RzSWQ6IHt9LFxuICAgICAgZGF0YVNvdXJjZXNCeUlkOiB7fSxcblxuICAgICAgbGFzdENsaWNrZWREc0lkOiBudWxsLFxuICAgICAgbGFzdENsaWNrZWRMYXllcktleTogbnVsbCxcblxuICAgICAgcGluVG9Db3JuZXI6IHRydWUsXG5cbiAgICAgIGxvYWRpbmdBdHRhY2htZW50czogZmFsc2UsXG4gICAgICBhdHRhY2htZW50czogW10sXG4gICAgICBhdHRhY2htZW50c0Vycm9yOiBudWxsLFxuICAgICAgYXR0YWNobWVudHNFeHBhbmRlZDogZmFsc2UsXG5cbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgZXJyb3I6IG51bGwsXG5cbiAgICAgIHNlbGVjdGVkQXR0cnM6IG51bGwsXG4gICAgICBzZWxlY3RlZE9JRDogbnVsbCxcbiAgICAgIG9iamVjdElkRmllbGQ6IG51bGwsXG5cbiAgICAgIHNob3dQb3B1cDogZmFsc2UsXG4gICAgICBwb3B1cE1pbmltaXplZDogZmFsc2UsXG4gICAgICBwb3B1cFBvc2l0aW9uOiBudWxsLFxuICAgICAgY2xpY2tTY3JlZW5Qb2ludDogbnVsbCxcblxuICAgICAgZGVidWdJbmZvOiB7fSxcbiAgICAgIGNoYXJ0RXhwYW5kZWQ6IGZhbHNlLFxuICAgICAgY2hhcnRIb3ZlckluZGV4OiBudWxsLFxuXG4gICAgICBsb2FkaW5nTGF0ZXN0SW5kaWNlczogZmFsc2UsXG4gICAgICBsYXRlc3RJbmRleERhdGU6IG51bGwsXG4gICAgICBsYXRlc3RJbmRleFZhbHVlczogbnVsbCxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSZXNvbHZlZFRoZW1lID0gKCk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2F2ZWRUaGVtZSA9XG4gICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWdyaV92MTFfYXBwX3RoZW1lXCIpO1xuXG4gICAgICBpZiAoc2F2ZWRUaGVtZSA9PT0gXCJsaWdodFwiKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAoc2F2ZWRUaGVtZSA9PT0gXCJkYXJrXCIpIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gaWdub3JlIHN0b3JhZ2UgYWNjZXNzIGlzc3Vlc1xuICAgIH1cblxuICAgIGNvbnN0IGlzTGlnaHQgPVxuICAgICAgcm9vdC5jbGFzc0xpc3QuY29udGFpbnMoXCJsaWdodC10aGVtZVwiKSB8fFxuICAgICAgcm9vdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIpID09PSBcImxpZ2h0XCIgfHxcbiAgICAgIGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGlnaHQtdGhlbWVcIik7XG5cbiAgICByZXR1cm4gZ2V0SW5pdGlhbFRoZW1lKCkgPz8gIWlzTGlnaHQ7XG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICB0aGlzLnNldHVwVGhlbWVPYnNlcnZlcigpO1xuICAgIGNvbnN0IGlzRGFya1RoZW1lID0gdGhpcy5nZXRSZXNvbHZlZFRoZW1lKCk7XG4gICAgaWYgKGlzRGFya1RoZW1lICE9PSB0aGlzLnN0YXRlLmlzRGFya1RoZW1lKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNEYXJrVGhlbWUgfSk7XG4gICAgfVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcInRoZW1lQ2hhbmdlZFwiLFxuICAgICAgdGhpcy5oYW5kbGVUaGVtZUNoYW5nZSBhcyBFdmVudExpc3RlbmVyLFxuICAgICk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwibGFuZ3VhZ2VDaGFuZ2VkXCIsXG4gICAgICB0aGlzLmhhbmRsZUxhbmd1YWdlQ2hhbmdlIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrKTtcbiAgICB0aGlzLl91bmJpbmRNYXN0ZXJGaWx0ZXIgPSBiaW5kTWFzdGVyRmlsdGVyKHRoaXMuaGFuZGxlTWFzdGVyRmlsdGVyQ2hhbmdlZCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwid2lkZ2V0U2VsZWN0aW9uQ2hhbmdlZFwiLFxuICAgICAgdGhpcy5oYW5kbGVXaWRnZXRTZWxlY3Rpb25DaGFuZ2VkIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnNjaGVkdWxlUG9wdXBMYXlvdXQpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgQUdSSV9NQVBfVklFV19SRUFEWV9FVkVOVCxcbiAgICAgIHRoaXMuaGFuZGxlTWFwVmlld1JlYWR5IGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIEFHUklfTUFQX0NMSUNLX0VWRU5ULFxuICAgICAgdGhpcy5oYW5kbGVTaGFyZWRNYXBDbGljayBhcyBFdmVudExpc3RlbmVyLFxuICAgICk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBBR1JJX1hZX1BBR0VfQ0xPU0VEX0VWRU5ULFxuICAgICAgdGhpcy5oYW5kbGVYeVBhZ2VDbG9zZWQgYXMgRXZlbnRMaXN0ZW5lcixcbiAgICApO1xuICAgIGlmICghdGhpcy5pc0Rhc2hib2FyZEVtYmVkZGVkKCkpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuc2NoZWR1bGVQb3B1cExheW91dCwgdHJ1ZSk7XG4gICAgfVxuICAgIHRoaXMuc2NoZWR1bGVNYXBWaWV3RmFsbGJhY2soKTtcbiAgICB0aGlzLm1hcENsaWNrQm9vdHN0cmFwVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5lbnN1cmVNYXBDbGlja0F0dGFjaGVkKCkgJiYgdGhpcy5tYXBDbGlja0Jvb3RzdHJhcFRpbWVyKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5tYXBDbGlja0Jvb3RzdHJhcFRpbWVyKTtcbiAgICAgICAgdGhpcy5tYXBDbGlja0Jvb3RzdHJhcFRpbWVyID0gbnVsbDtcbiAgICAgIH1cbiAgICB9LCAyNTAwKTtcbiAgICBhZ3JpTWFwQ2xpY2tEZWJ1ZyhcIkFncmlQb2x5Z29uIG1vdW50ZWRcIiwge1xuICAgICAgd2lkZ2V0SWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICBlbWJlZGRlZDogdGhpcy5pc0Rhc2hib2FyZEVtYmVkZGVkKCksXG4gICAgICBtYXBXaWRnZXRJZDogdGhpcy5nZXRMaW5rZWRNYXBXaWRnZXRJZCgpLFxuICAgICAgdXNlRGF0YVNvdXJjZUlkczogZ2V0U2VsZWN0ZWREc0lkcyh0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzKSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCk6IHZvaWQge1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3dQb3B1cCkge1xuICAgICAgdGhpcy5icm9hZGNhc3RQb3B1cFZpc2liaWxpdHkoZmFsc2UpO1xuICAgIH1cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgXCJ0aGVtZUNoYW5nZWRcIixcbiAgICAgIHRoaXMuaGFuZGxlVGhlbWVDaGFuZ2UgYXMgRXZlbnRMaXN0ZW5lcixcbiAgICApO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICBcImxhbmd1YWdlQ2hhbmdlZFwiLFxuICAgICAgdGhpcy5oYW5kbGVMYW5ndWFnZUNoYW5nZSBhcyBFdmVudExpc3RlbmVyLFxuICAgICk7XG4gICAgdGhpcy5kZXRhY2hNYXBDbGljaygpO1xuICAgIHRoaXMuY2xlYW51cEhpZ2hsaWdodCgpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2spO1xuICAgIHRoaXMuX3VuYmluZE1hc3RlckZpbHRlcj8uKCk7XG4gICAgdGhpcy5fdW5iaW5kTWFzdGVyRmlsdGVyID0gbnVsbDtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgXCJ3aWRnZXRTZWxlY3Rpb25DaGFuZ2VkXCIsXG4gICAgICB0aGlzLmhhbmRsZVdpZGdldFNlbGVjdGlvbkNoYW5nZWQgYXMgRXZlbnRMaXN0ZW5lcixcbiAgICApO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuc2NoZWR1bGVQb3B1cExheW91dCk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICBBR1JJX01BUF9WSUVXX1JFQURZX0VWRU5ULFxuICAgICAgdGhpcy5oYW5kbGVNYXBWaWV3UmVhZHkgYXMgRXZlbnRMaXN0ZW5lcixcbiAgICApO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgQUdSSV9NQVBfQ0xJQ0tfRVZFTlQsXG4gICAgICB0aGlzLmhhbmRsZVNoYXJlZE1hcENsaWNrIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgIEFHUklfWFlfUEFHRV9DTE9TRURfRVZFTlQsXG4gICAgICB0aGlzLmhhbmRsZVh5UGFnZUNsb3NlZCBhcyBFdmVudExpc3RlbmVyLFxuICAgICk7XG4gICAgaWYgKHRoaXMubWFwVmlld0ZhbGxiYWNrVGltZXIpIGNsZWFyVGltZW91dCh0aGlzLm1hcFZpZXdGYWxsYmFja1RpbWVyKTtcbiAgICBpZiAodGhpcy5tYXBJbml0UmV0cnlUaW1lcikgY2xlYXJUaW1lb3V0KHRoaXMubWFwSW5pdFJldHJ5VGltZXIpO1xuICAgIGlmICh0aGlzLm1hcENsaWNrQm9vdHN0cmFwVGltZXIpIGNsZWFySW50ZXJ2YWwodGhpcy5tYXBDbGlja0Jvb3RzdHJhcFRpbWVyKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLnNjaGVkdWxlUG9wdXBMYXlvdXQsIHRydWUpO1xuICAgIGlmICh0aGlzLl9wb3B1cExheW91dFRpbWVyKSBjbGVhclRpbWVvdXQodGhpcy5fcG9wdXBMYXlvdXRUaW1lcik7XG4gICAgaWYgKHRoaXMuX3BvcHVwTGF5b3V0UmFmKSBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9wb3B1cExheW91dFJhZik7XG4gICAgdGhpcy5tYXBBcmVhUmVzaXplT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgICB0aGlzLm1hcEFyZWFSZXNpemVPYnNlcnZlciA9IG51bGw7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5vblBvcHVwRHJhZ01vdmUpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLm9uUG9wdXBEcmFnRW5kKTtcbiAgICBpZiAodGhpcy50aGVtZU9ic2VydmVyKSB7XG4gICAgICB0aGlzLnRoZW1lT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgdGhpcy50aGVtZU9ic2VydmVyID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5yZXZva2VBbGxBdHRhY2htZW50VXJscygpO1xuICAgIHRoaXMuX2ZlYXR1cmVRdWVyeUNhY2hlLmNsZWFyKCk7XG4gIH1cblxuICBwcml2YXRlIHBydW5lRmVhdHVyZVF1ZXJ5Q2FjaGUobm93ID0gRGF0ZS5ub3coKSk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgW2tleSwgZW50cnldIG9mIHRoaXMuX2ZlYXR1cmVRdWVyeUNhY2hlKSB7XG4gICAgICBpZiAoZW50cnkuZXhwaXJlcyA8PSBub3cpIHRoaXMuX2ZlYXR1cmVRdWVyeUNhY2hlLmRlbGV0ZShrZXkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0RmVhdHVyZVF1ZXJ5Q2FjaGVLZXkoXG4gICAgbGF5ZXI6IF9fZXNyaS5GZWF0dXJlTGF5ZXIsXG4gICAgb2lkRmllbGQ6IHN0cmluZyxcbiAgICBvaWQ6IHVua25vd24sXG4gICAgb3V0RmllbGRzOiBzdHJpbmdbXSxcbiAgKTogc3RyaW5nIHtcbiAgICBjb25zdCBsYXllcktleSA9IFN0cmluZygobGF5ZXIgYXMgYW55KT8udXJsIHx8IGxheWVyLmlkIHx8IGxheWVyLnRpdGxlIHx8IFwiXCIpO1xuICAgIGNvbnN0IGZpZWxkc0tleSA9IEFycmF5LmZyb20obmV3IFNldChvdXRGaWVsZHMubWFwKChmKSA9PiBTdHJpbmcoZikpKSlcbiAgICAgIC5zb3J0KClcbiAgICAgIC5qb2luKFwiLFwiKTtcbiAgICByZXR1cm4gYCR7bGF5ZXJLZXl9fCR7b2lkRmllbGR9fCR7U3RyaW5nKG9pZCl9fCR7ZmllbGRzS2V5fWA7XG4gIH1cblxuICAvKipcbiAgICogT2ZmLW1hcCBGZWF0dXJlTGF5ZXIgY2xpZW50IGZvciBhIGxpdmUgbWFwIGxheWVyJ3MgVVJMLiBFdmVyeSBxdWVyeSBpblxuICAgKiB0aGUgY2xpY2sgY2hhaW4gbXVzdCBydW4gYWdhaW5zdCB0aGVzZSBkZXRhY2hlZCBjbGllbnRzOiBjcmVhdGVRdWVyeSAvXG4gICAqIHF1ZXJ5RmVhdHVyZXMgb24gYSBsaXZlIE1hcEltYWdlIFN1YmxheWVyIHJlaHlkcmF0ZXMgaXQgYW5kIGNhbiBjbGVhciBpdHNcbiAgICogcnVudGltZSBkZWZpbml0aW9uRXhwcmVzc2lvbiwgd2hpY2ggbWFrZXMgdGhlIG1hcCBleHBvcnQgKGFuZCBicmllZmx5XG4gICAqIHBhaW50KSBldmVyeSBkaXN0cmljdCdzIGZpZWxkcyB1bnRpbCB0aGUgZmlsdGVyIGd1YXJkIHJlc3RvcmVzIGl0LlxuICAgKlxuICAgKiBTaGFyZWQgaGVscGVyIGFsc28gc2tpcHMgTWFwU2VydmVyIHJvb3RzIGFuZCBHcm91cCBMYXllciBmb2xkZXJzXG4gICAqIChcIkFncmkgMjAyNiByZXB1YmxpYyBkYXRhXCIpIHRoYXQgRmVhdHVyZUxheWVyIGNhbm5vdCBsb2FkLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXREZXRhY2hlZFF1ZXJ5TGF5ZXIgPSBhc3luYyAoXG4gICAgbGF5ZXI6IGFueSxcbiAgKTogUHJvbWlzZTxfX2VzcmkuRmVhdHVyZUxheWVyIHwgbnVsbD4gPT4ge1xuICAgIGlmICghbGF5ZXIgfHwgaXNNYXBJbWFnZUdyb3VwU3VibGF5ZXIobGF5ZXIpKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBkZXRhY2hlZCA9IGF3YWl0IGdldERldGFjaGVkUXVlcnlMYXllckZvcihsYXllcik7XG4gICAgaWYgKCFkZXRhY2hlZCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgdXJsID0gU3RyaW5nKGxheWVyPy51cmwgfHwgXCJcIikudHJpbSgpLnJlcGxhY2UoL1xcLyskLywgXCJcIik7XG4gICAgaWYgKHVybCkgdGhpcy5fcXVlcnlPbmx5TGF5ZXJzLnNldCh1cmwsIGRldGFjaGVkKTtcbiAgICByZXR1cm4gZGV0YWNoZWQgYXMgdW5rbm93biBhcyBfX2VzcmkuRmVhdHVyZUxheWVyO1xuICB9O1xuXG4gIC8qKiBTbmFwc2hvdCB0aGUgbGl2ZSBkZWZpbml0aW9uRXhwcmVzc2lvbiBvZiBlYWNoIGxheWVyIChwcmUtaGl0VGVzdCkuICovXG4gIHByaXZhdGUgc25hcHNob3REZWZpbml0aW9uRXhwcmVzc2lvbnMoXG4gICAgbGF5ZXJzOiBBcnJheTxfX2VzcmkuRmVhdHVyZUxheWVyIHwgYW55PixcbiAgKTogTWFwPGFueSwgc3RyaW5nPiB7XG4gICAgY29uc3Qgc25hcHNob3QgPSBuZXcgTWFwPGFueSwgc3RyaW5nPigpO1xuICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgbGF5ZXJzKSB7XG4gICAgICBpZiAoIWxheWVyIHx8IHNuYXBzaG90LmhhcyhsYXllcikpIGNvbnRpbnVlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgc25hcHNob3Quc2V0KGxheWVyLCBTdHJpbmcoKGxheWVyIGFzIGFueSkuZGVmaW5pdGlvbkV4cHJlc3Npb24gPz8gXCJcIikpO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8qIGlnbm9yZSAqL1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc25hcHNob3Q7XG4gIH1cblxuICAvKipcbiAgICogUmVzdG9yZSBhbnkgZGVmaW5pdGlvbkV4cHJlc3Npb24gdGhhdCBkcmlmdGVkICh3YXMgY2xlYXJlZCBieSBoaXRUZXN0IC9cbiAgICogaWRlbnRpZnkgLyBsb2FkIHJlaHlkcmF0aW9uKSBzeW5jaHJvbm91c2x5LCBiZWZvcmUgdGhlIHVuZmlsdGVyZWRcbiAgICogTWFwSW1hZ2UgZXhwb3J0IGNhbiBiZSBwYWludGVkLlxuICAgKi9cbiAgcHJpdmF0ZSByZXN0b3JlRHJpZnRlZERlZmluaXRpb25FeHByZXNzaW9ucyhcbiAgICBzbmFwc2hvdDogTWFwPGFueSwgc3RyaW5nPixcbiAgKTogdm9pZCB7XG4gICAgc25hcHNob3QuZm9yRWFjaCgoZXhwcmVzc2lvbiwgbGF5ZXIpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBTdHJpbmcoKGxheWVyIGFzIGFueSkuZGVmaW5pdGlvbkV4cHJlc3Npb24gPz8gXCJcIik7XG4gICAgICAgIGlmIChjdXJyZW50ICE9PSBleHByZXNzaW9uKSB7XG4gICAgICAgICAgKGxheWVyIGFzIGFueSkuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xuICAgICAgICAgIGFncmlNYXBDbGlja1dhcm4oXCJkZWZpbml0aW9uRXhwcmVzc2lvbiBkcmlmdCByZXN0b3JlZFwiLCB7XG4gICAgICAgICAgICBsYXllcjogbGF5ZXI/LnRpdGxlIHx8IGxheWVyPy51cmwgfHwgbGF5ZXI/LmlkLFxuICAgICAgICAgICAgZHJpZnRlZDogY3VycmVudCB8fCBcIjxlbXB0eT5cIixcbiAgICAgICAgICAgIHJlc3RvcmVkOiBleHByZXNzaW9uIHx8IFwiPGVtcHR5PlwiLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLyogaWdub3JlICovXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHF1ZXJ5RmVhdHVyZUJ5T2JqZWN0SWRDYWNoZWQoXG4gICAgbGF5ZXI6IF9fZXNyaS5GZWF0dXJlTGF5ZXIsXG4gICAgb2lkRmllbGQ6IHN0cmluZyxcbiAgICBvaWQ6IHVua25vd24sXG4gICAgb3V0RmllbGRzOiBzdHJpbmdbXSxcbiAgKTogUHJvbWlzZTxfX2VzcmkuR3JhcGhpYyB8IG51bGw+IHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMucHJ1bmVGZWF0dXJlUXVlcnlDYWNoZShub3cpO1xuICAgIGNvbnN0IGtleSA9IHRoaXMuZ2V0RmVhdHVyZVF1ZXJ5Q2FjaGVLZXkobGF5ZXIsIG9pZEZpZWxkLCBvaWQsIG91dEZpZWxkcyk7XG4gICAgY29uc3QgaGl0ID0gdGhpcy5fZmVhdHVyZVF1ZXJ5Q2FjaGUuZ2V0KGtleSk7XG4gICAgaWYgKGhpdCAmJiBoaXQuZXhwaXJlcyA+IG5vdykge1xuICAgICAgYWdyaU1hcENsaWNrRGVidWcoXCJmZWF0dXJlLXF1ZXJ5OmNhY2hlLWhpdFwiLCB7XG4gICAgICAgIGxheWVyOiBsYXllci50aXRsZSB8fCBsYXllci51cmwgfHwgbGF5ZXIuaWQsXG4gICAgICAgIG9pZEZpZWxkLFxuICAgICAgICBvaWQsXG4gICAgICAgIG91dEZpZWxkQ291bnQ6IG91dEZpZWxkcy5sZW5ndGgsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBoaXQudmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3Qgam9iID0gKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGxpdmVEZWZpbml0aW9uRXhwcmVzc2lvbiA9IFN0cmluZyhcbiAgICAgICAgKGxheWVyIGFzIGFueSkuZGVmaW5pdGlvbkV4cHJlc3Npb24gfHwgXCJcIixcbiAgICAgICk7XG5cbiAgICAgIC8vIENhbGxpbmcgcXVlcnlGZWF0dXJlcyBvbiBhIGxpdmUgTWFwSW1hZ2Ugc3VibGF5ZXIgY2FuIHJlaHlkcmF0ZSB0aGF0XG4gICAgICAvLyBzdWJsYXllciBhbmQgdGVtcG9yYXJpbHkgY2xlYXIgaXRzIHJ1bnRpbWUgZGVmaW5pdGlvbkV4cHJlc3Npb24uIFRoZVxuICAgICAgLy8gbWFwIHRoZW4gcmVuZGVycyBldmVyeSBkaXN0cmljdCB1bnRpbCBMb2NhbGl6YXRpb24ncyBndWFyZCByZXN0b3Jlc1xuICAgICAgLy8gdGhlIGZpbHRlci4gUXVlcnkgYW4gb2ZmLW1hcCBGZWF0dXJlTGF5ZXIgY2xpZW50IGluc3RlYWQuXG4gICAgICBjb25zdCBkZXRhY2hlZFF1ZXJ5TGF5ZXIgPSBhd2FpdCB0aGlzLmdldERldGFjaGVkUXVlcnlMYXllcihsYXllcik7XG4gICAgICBjb25zdCBxdWVyeUxheWVyOiBfX2VzcmkuRmVhdHVyZUxheWVyID0gZGV0YWNoZWRRdWVyeUxheWVyIHx8IGxheWVyO1xuXG4gICAgICBjb25zdCBxID0gcXVlcnlMYXllci5jcmVhdGVRdWVyeSgpO1xuICAgICAgcS53aGVyZSA9IGAke29pZEZpZWxkfSA9ICR7TnVtYmVyKG9pZCl9YDtcbiAgICAgIHEub3V0RmllbGRzID0gb3V0RmllbGRzO1xuICAgICAgcS5yZXR1cm5HZW9tZXRyeSA9IHRydWU7XG4gICAgICBhZ3JpTWFwQ2xpY2tEZWJ1ZyhcImZlYXR1cmUtcXVlcnk6cmVxdWVzdFwiLCB7XG4gICAgICAgIGxheWVyOiBsYXllci50aXRsZSB8fCBsYXllci51cmwgfHwgbGF5ZXIuaWQsXG4gICAgICAgIHVybDogbGF5ZXIudXJsIHx8IG51bGwsXG4gICAgICAgIHdoZXJlOiBxLndoZXJlLFxuICAgICAgICBvdXRGaWVsZHMsXG4gICAgICAgIHJldHVybkdlb21ldHJ5OiB0cnVlLFxuICAgICAgfSk7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBxdWVyeUxheWVyLnF1ZXJ5RmVhdHVyZXMocSk7XG4gICAgICAvLyBEZWZlbnNpdmUgcmVzdG9yZSBmb3IgdGhlIG5vLVVSTCBmYWxsYmFjay4gVGhlIGRldGFjaGVkIHBhdGggYWJvdmVcbiAgICAgIC8vIG5ldmVyIHRvdWNoZXMgdGhlIGxpdmUgbGF5ZXIuXG4gICAgICBpZiAoXG4gICAgICAgIHF1ZXJ5TGF5ZXIgPT09IGxheWVyICYmXG4gICAgICAgIFN0cmluZygobGF5ZXIgYXMgYW55KS5kZWZpbml0aW9uRXhwcmVzc2lvbiB8fCBcIlwiKSAhPT1cbiAgICAgICAgICBsaXZlRGVmaW5pdGlvbkV4cHJlc3Npb25cbiAgICAgICkge1xuICAgICAgICAobGF5ZXIgYXMgYW55KS5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IGxpdmVEZWZpbml0aW9uRXhwcmVzc2lvbjtcbiAgICAgIH1cbiAgICAgIGFncmlNYXBDbGlja0RlYnVnKFwiZmVhdHVyZS1xdWVyeTpyZXNwb25zZVwiLCB7XG4gICAgICAgIGxheWVyOiBsYXllci50aXRsZSB8fCBsYXllci51cmwgfHwgbGF5ZXIuaWQsXG4gICAgICAgIGZlYXR1cmVDb3VudDogcmVzLmZlYXR1cmVzPy5sZW5ndGggfHwgMCxcbiAgICAgICAgaGFzR2VvbWV0cnk6IEJvb2xlYW4ocmVzLmZlYXR1cmVzPy5bMF0/Lmdlb21ldHJ5KSxcbiAgICAgICAgYXR0cmlidXRlS2V5czogT2JqZWN0LmtleXMocmVzLmZlYXR1cmVzPy5bMF0/LmF0dHJpYnV0ZXMgfHwge30pLFxuICAgICAgICBxdWVyeU1vZGU6IHF1ZXJ5TGF5ZXIgPT09IGxheWVyID8gXCJsaXZlLWZhbGxiYWNrXCIgOiBcImRldGFjaGVkXCIsXG4gICAgICAgIGxpdmVEZWZpbml0aW9uRXhwcmVzc2lvbjpcbiAgICAgICAgICAobGF5ZXIgYXMgYW55KS5kZWZpbml0aW9uRXhwcmVzc2lvbiB8fCBudWxsLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzLmZlYXR1cmVzPy5bMF0gfHwgbnVsbDtcbiAgICB9KSgpO1xuXG4gICAgdGhpcy5fZmVhdHVyZVF1ZXJ5Q2FjaGUuc2V0KGtleSwge1xuICAgICAgZXhwaXJlczogbm93ICsgdGhpcy5fZmVhdHVyZVF1ZXJ5Q2FjaGVUdGxNcyxcbiAgICAgIHZhbHVlOiBqb2IsXG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgZmVhdHVyZSA9IGF3YWl0IGpvYjtcbiAgICAgIGlmICghZmVhdHVyZSAmJiB0aGlzLl9mZWF0dXJlUXVlcnlDYWNoZS5nZXQoa2V5KT8udmFsdWUgPT09IGpvYikge1xuICAgICAgICB0aGlzLl9mZWF0dXJlUXVlcnlDYWNoZS5kZWxldGUoa2V5KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmZWF0dXJlO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKHRoaXMuX2ZlYXR1cmVRdWVyeUNhY2hlLmdldChrZXkpPy52YWx1ZSA9PT0gam9iKSB7XG4gICAgICAgIHRoaXMuX2ZlYXR1cmVRdWVyeUNhY2hlLmRlbGV0ZShrZXkpO1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIHRyID0gKFxuICAgIGtleTogc3RyaW5nLFxuICAgIHBhcmFtcz86IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlcj4sXG4gICk6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIHQodGhpcy5zdGF0ZS5jdXJyZW50TGFuZywga2V5LCBwYXJhbXMpO1xuICB9O1xuXG4gIHByaXZhdGUgc2V0dXBUaGVtZU9ic2VydmVyID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgdGhpcy50aGVtZU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgY29uc3QgaXNEYXJrVGhlbWUgPSB0aGlzLmdldFJlc29sdmVkVGhlbWUoKTtcbiAgICAgIGlmICh0aGlzLl9pc01vdW50ZWQgJiYgaXNEYXJrVGhlbWUgIT09IHRoaXMuc3RhdGUuaXNEYXJrVGhlbWUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRGFya1RoZW1lIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy50aGVtZU9ic2VydmVyLm9ic2VydmUocm9vdCwge1xuICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgIGF0dHJpYnV0ZUZpbHRlcjogW1wiY2xhc3NcIiwgXCJkYXRhLXRoZW1lXCJdLFxuICAgIH0pO1xuXG4gICAgdGhpcy50aGVtZU9ic2VydmVyLm9ic2VydmUoYm9keSwge1xuICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgIGF0dHJpYnV0ZUZpbHRlcjogW1wiY2xhc3NcIl0sXG4gICAgfSk7XG4gIH07XG5cbiAgcHJpdmF0ZSBoYW5kbGVUaGVtZUNoYW5nZSA9IChlOiBhbnkpOiB2b2lkID0+IHtcbiAgICBpZiAoIXRoaXMuX2lzTW91bnRlZCkgcmV0dXJuO1xuICAgIGNvbnN0IGRldGFpbCA9IGU/LmRldGFpbCB8fCB7fTtcbiAgICBsZXQgaXNEYXJrVGhlbWUgPSB0aGlzLmdldFJlc29sdmVkVGhlbWUoKTtcblxuICAgIGlmICh0eXBlb2YgZGV0YWlsLmlzRGFya1RoZW1lID09PSBcImJvb2xlYW5cIikge1xuICAgICAgaXNEYXJrVGhlbWUgPSBkZXRhaWwuaXNEYXJrVGhlbWU7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGV0YWlsLnRoZW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBpc0RhcmtUaGVtZSA9IFN0cmluZyhkZXRhaWwudGhlbWUpLnRvTG93ZXJDYXNlKCkgIT09IFwibGlnaHRcIjtcbiAgICB9XG5cbiAgICBpZiAoaXNEYXJrVGhlbWUgIT09IHRoaXMuc3RhdGUuaXNEYXJrVGhlbWUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0RhcmtUaGVtZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBoYW5kbGVMYW5ndWFnZUNoYW5nZSA9IChlOiBhbnkpOiB2b2lkID0+IHtcbiAgICBpZiAoIXRoaXMuX2lzTW91bnRlZCkgcmV0dXJuO1xuICAgIGNvbnN0IGxhbmcgPSBlPy5kZXRhaWw/LmxhbmcgfHwgZT8uZGV0YWlsPy5sYW5ndWFnZSB8fCBlPy5kZXRhaWw/LmNvZGU7XG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZUxhbmcobGFuZyk7XG4gICAgaWYgKG5vcm1hbGl6ZWQgIT09IHRoaXMuc3RhdGUuY3VycmVudExhbmcpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50TGFuZzogbm9ybWFsaXplZCB9KTtcbiAgICB9XG4gIH07XG5cbiAgLyogLS0tIHBpbm5lZCBwb3B1cCBoZWxwZXJzIC0tLSAqL1xuICBwcml2YXRlIGlzRGFzaGJvYXJkRW1iZWRkZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIFN0cmluZyh0aGlzLnByb3BzLmlkIHx8IFwiXCIpLmVuZHNXaXRoKFwiLXBvcHVwXCIpO1xuICB9XG5cbiAgLyoqIENyb3Agb3ZlcmxheSB0b3AgaW4gdmlld3BvcnQgY29vcmRzOyBudWxsIHdoZW4gbm90IHVzZWQuICovXG4gIHByaXZhdGUgZ2V0Q3JvcE92ZXJsYXlUb3AoKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgaWYgKCF0aGlzLmlzRGFzaGJvYXJkRW1iZWRkZWQoKSkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBjcm9wRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIuYWdyaS1kYXNoYm9hcmQtY3JvcC1vdmVybGF5LmFncmktZGFzaGJvYXJkLW1hbmFnZWQtY3JvcFwiLFxuICAgICkgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgIGlmIChjcm9wRWwpIHtcbiAgICAgIGNvbnN0IHJlY3QgPSBjcm9wRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBpZiAocmVjdC5oZWlnaHQgPiAwICYmIE51bWJlci5pc0Zpbml0ZShyZWN0LnRvcCkpIHtcbiAgICAgICAgcmV0dXJuIHJlY3QudG9wO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRNYXBBcmVhUmVjdChcbiAgICB2aWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsXG4gICk6IERPTVJlY3Qge1xuICAgIGlmICh0aGlzLmlzRGFzaGJvYXJkRW1iZWRkZWQoKSkge1xuICAgICAgY29uc3QgbWFwU2xvdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLmFncmktZGFzaGJvYXJkLW1hcC1zbG90XCIsXG4gICAgICApIGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgICAgIGlmIChtYXBTbG90KSB7XG4gICAgICAgIGNvbnN0IHNsb3RSZWN0ID0gbWFwU2xvdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKHNsb3RSZWN0LndpZHRoID4gNDAgJiYgc2xvdFJlY3QuaGVpZ2h0ID4gNDApIHtcbiAgICAgICAgICByZXR1cm4gc2xvdFJlY3Q7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICh2aWV3LmNvbnRhaW5lciBhcyBIVE1MRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH1cblxuICBwcml2YXRlIG9ic2VydmVNYXBBcmVhUmVzaXplKFxuICAgIHZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldyxcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5tYXBBcmVhUmVzaXplT2JzZXJ2ZXI/LmRpc2Nvbm5lY3QoKTtcbiAgICB0aGlzLm1hcEFyZWFSZXNpemVPYnNlcnZlciA9IG51bGw7XG5cbiAgICBpZiAodHlwZW9mIFJlc2l6ZU9ic2VydmVyID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG5cbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmlzRGFzaGJvYXJkRW1iZWRkZWQoKVxuICAgICAgPyAoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgXCIuYWdyaS1kYXNoYm9hcmQtbWFwLXNsb3RcIixcbiAgICAgICAgKSBhcyBIVE1MRWxlbWVudCB8IG51bGwpIHx8ICh2aWV3LmNvbnRhaW5lciBhcyBIVE1MRWxlbWVudCB8IG51bGwpKVxuICAgICAgOiAodmlldy5jb250YWluZXIgYXMgSFRNTEVsZW1lbnQgfCBudWxsKTtcbiAgICBpZiAoIXRhcmdldCkgcmV0dXJuO1xuXG4gICAgdGhpcy5tYXBBcmVhUmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKCkgPT4ge1xuICAgICAgdGhpcy5zY2hlZHVsZVBvcHVwTGF5b3V0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5tYXBBcmVhUmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFZmZlY3RpdmVNYXBCb3R0b20oXG4gICAgdmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LFxuICAgIGdhcCA9IDQsXG4gICk6IG51bWJlciB7XG4gICAgY29uc3QgcmVjdCA9IHRoaXMuZ2V0TWFwQXJlYVJlY3Qodmlldyk7XG4gICAgY29uc3QgY3JvcFRvcCA9IHRoaXMuZ2V0Q3JvcE92ZXJsYXlUb3AoKTtcbiAgICBpZiAoY3JvcFRvcCAhPSBudWxsICYmIGNyb3BUb3AgPiByZWN0LnRvcCAmJiBjcm9wVG9wIDw9IHJlY3QuYm90dG9tICsgMikge1xuICAgICAgcmV0dXJuIGNyb3BUb3AgLSBnYXA7XG4gICAgfVxuICAgIHJldHVybiByZWN0LmJvdHRvbSAtIGdhcDtcbiAgfVxuXG4gIHByaXZhdGUgbWVhc3VyZVBvcHVwSGVpZ2h0KHBvcHVwRWw6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgICBjb25zdCBoZWFkZXIgPSBwb3B1cEVsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5hZ3JpMy1wb3B1cC1oZWFkZXJcIixcbiAgICApIGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgICBjb25zdCBjb250ZW50ID0gcG9wdXBFbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIuYWdyaTMtcG9wdXAtY29udGVudFwiLFxuICAgICkgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgIGNvbnN0IGhlYWRlckggPSBoZWFkZXI/Lm9mZnNldEhlaWdodCB8fCAwO1xuICAgIGNvbnN0IGNvbnRlbnRIID0gY29udGVudD8uc2Nyb2xsSGVpZ2h0IHx8IGNvbnRlbnQ/Lm9mZnNldEhlaWdodCB8fCAwO1xuICAgIGNvbnN0IG5hdHVyYWwgPSBoZWFkZXJIICsgY29udGVudEg7XG4gICAgaWYgKG5hdHVyYWwgPiAwKSByZXR1cm4gTWF0aC5jZWlsKG5hdHVyYWwpO1xuXG4gICAgY29uc3QgcmVjdCA9IHBvcHVwRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHJlY3QuaGVpZ2h0ID4gMCA/IE1hdGguY2VpbChyZWN0LmhlaWdodCkgOiBNYXRoLmNlaWwocG9wdXBFbC5zY3JvbGxIZWlnaHQpO1xuICB9XG5cbiAgcHJpdmF0ZSBwb3B1cFBvc2l0aW9uc0VxdWFsKFxuICAgIGE6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGwgfCB1bmRlZmluZWQsXG4gICAgYjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LFxuICAgIGVwc2lsb24gPSAxLFxuICApOiBib29sZWFuIHtcbiAgICBpZiAoIWEpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gKFxuICAgICAgTWF0aC5hYnMoYS54IC0gYi54KSA8PSBlcHNpbG9uICYmIE1hdGguYWJzKGEueSAtIGIueSkgPD0gZXBzaWxvblxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGFwcGx5UG9wdXBQb3NpdGlvbiA9IChwb3M6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSk6IHZvaWQgPT4ge1xuICAgIGlmICh0aGlzLnBvcHVwUG9zaXRpb25zRXF1YWwodGhpcy5zdGF0ZS5wb3B1cFBvc2l0aW9uLCBwb3MpKSByZXR1cm47XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHBvcHVwUG9zaXRpb246IHBvcyB9KTtcbiAgfTtcblxuICBwcml2YXRlIHNjaGVkdWxlUG9wdXBMYXlvdXQgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMuX2lzRHJhZ2dpbmdQb3B1cCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLl9wb3B1cExheW91dFRpbWVyKSBjbGVhclRpbWVvdXQodGhpcy5fcG9wdXBMYXlvdXRUaW1lcik7XG4gICAgdGhpcy5fcG9wdXBMYXlvdXRUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fcG9wdXBMYXlvdXRUaW1lciA9IG51bGw7XG4gICAgICB0aGlzLnJlcG9zaXRpb25QaW5uZWRJZk5lZWRlZCgpO1xuICAgIH0sIDQ4KTtcbiAgfTtcblxuICBwcml2YXRlIHNjaGVkdWxlUG9wdXBMYXlvdXRBZnRlckNvbnRlbnQgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMuX3BvcHVwTGF5b3V0UmFmKSBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9wb3B1cExheW91dFJhZik7XG4gICAgdGhpcy5fcG9wdXBMYXlvdXRSYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5fcG9wdXBMYXlvdXRSYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLl9wb3B1cExheW91dFJhZiA9IDA7XG4gICAgICAgIHRoaXMucmVwb3NpdGlvblBpbm5lZElmTmVlZGVkKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBwcml2YXRlIGNhbGN1bGF0ZVBpbm5lZFBvc2l0aW9uID0gKFxuICAgIHZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldyxcbiAgKTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9ID0+IHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5nZXRNYXBBcmVhUmVjdCh2aWV3KTtcbiAgICBjb25zdCBtYXJnaW4gPSB0aGlzLlBPUFVQX01BUkdJTjtcbiAgICBjb25zdCBwb3B1cFdpZHRoID0gdGhpcy5nZXRQb3B1cFdpZHRoKHZpZXcpO1xuICAgIGlmICh0aGlzLmlzRGFzaGJvYXJkRW1iZWRkZWQoKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeDogcmVjdC5yaWdodCAtIHBvcHVwV2lkdGggLSB0aGlzLkRBU0hCT0FSRF9QT1BVUF9IT1JJWk9OVEFMX0lOU0VULFxuICAgICAgICB5OiByZWN0LnRvcCArIHRoaXMuREFTSEJPQVJEX1BPUFVQX1ZFUlRJQ0FMX0lOU0VULFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgeDogcmVjdC5yaWdodCAtIHBvcHVwV2lkdGggLSBtYXJnaW4sXG4gICAgICB5OiByZWN0LnRvcCArIG1hcmdpbixcbiAgICB9O1xuICB9O1xuXG4gIHByaXZhdGUgcmVwb3NpdGlvblBpbm5lZElmTmVlZGVkID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5faXNNb3VudGVkKSByZXR1cm47XG4gICAgaWYgKCF0aGlzLnN0YXRlLnNob3dQb3B1cCkgcmV0dXJuO1xuICAgIGlmICh0aGlzLl9pc0RyYWdnaW5nUG9wdXApIHJldHVybjtcbiAgICBjb25zdCB2aWV3ID0gdGhpcy5zdGF0ZS5qaW11TWFwVmlldz8udmlldztcbiAgICBpZiAoIXZpZXcpIHJldHVybjtcblxuICAgIGlmICh0aGlzLnN0YXRlLnBpblRvQ29ybmVyKSB7XG4gICAgICBjb25zdCBwb3MgPSB0aGlzLmNhbGN1bGF0ZVBpbm5lZFBvc2l0aW9uKHZpZXcpO1xuICAgICAgaWYgKHRoaXMucG9wdXBQb3NpdGlvbnNFcXVhbCh0aGlzLnN0YXRlLnBvcHVwUG9zaXRpb24sIHBvcykpIHtcbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBvcHVwUG9zaXRpb246IHBvcyB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuc3RhdGUucG9wdXBQb3NpdGlvbikgcmV0dXJuO1xuICAgIGNvbnN0IGNsYW1wZWQgPSB0aGlzLmNsYW1wUG9wdXBUb01hcENvbnRhaW5lcihcbiAgICAgIHRoaXMuc3RhdGUucG9wdXBQb3NpdGlvbixcbiAgICAgIHZpZXcsXG4gICAgKTtcbiAgICB0aGlzLmFwcGx5UG9wdXBQb3NpdGlvbihjbGFtcGVkKTtcbiAgfTtcblxuICBwcml2YXRlIHRvZ2dsZVBpblRvQ29ybmVyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAocHJldikgPT4ge1xuICAgICAgICBjb25zdCBuZXh0ID0gIXByZXYucGluVG9Db3JuZXI7XG4gICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3Py52aWV3O1xuXG4gICAgICAgIGxldCBwb3MgPSBwcmV2LnBvcHVwUG9zaXRpb247XG5cbiAgICAgICAgaWYgKG5leHQpIHtcbiAgICAgICAgICBpZiAodmlldykgcG9zID0gdGhpcy5jYWxjdWxhdGVQaW5uZWRQb3NpdGlvbih2aWV3KTtcbiAgICAgICAgfSBlbHNlIGlmICh2aWV3ICYmIHByZXYuY2xpY2tTY3JlZW5Qb2ludCkge1xuICAgICAgICAgIHBvcyA9IHRoaXMuY2FsY3VsYXRlUG9wdXBQb3NpdGlvbihwcmV2LmNsaWNrU2NyZWVuUG9pbnQsIHZpZXcpO1xuICAgICAgICB9IGVsc2UgaWYgKHZpZXcpIHtcbiAgICAgICAgICBjb25zdCByZWN0ID0gKHZpZXcuY29udGFpbmVyIGFzIEhUTUxFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBwb3MgPSB7XG4gICAgICAgICAgICB4OiByZWN0LmxlZnQgKyByZWN0LndpZHRoIC8gMixcbiAgICAgICAgICAgIHk6IHJlY3QudG9wICsgcmVjdC5oZWlnaHQgLyAyLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBpblRvQ29ybmVyOiBuZXh0LFxuICAgICAgICAgIHBvcHVwUG9zaXRpb246IHBvcyxcbiAgICAgICAgICBjaGFydEV4cGFuZGVkOiBuZXh0ID8gdHJ1ZSA6IHByZXYuY2hhcnRFeHBhbmRlZCxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVQb3B1cExheW91dEFmdGVyQ29udGVudCgpO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaG93UG9wdXApIHtcbiAgICAgICAgICB0aGlzLmJyb2FkY2FzdFBvcHVwVmlzaWJpbGl0eSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICApO1xuICB9O1xuXG4gIHByaXZhdGUgaGFuZGxlT3V0c2lkZUNsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLnNob3dQb3B1cCB8fCAhdGhpcy5fcG9wdXBSZWYuY3VycmVudCkgcmV0dXJuO1xuICAgIC8vIENvbGxhcHNlZCBjaGlwIHN0YXlzIHVudGlsIGFuIGVtcHR5LW1hcCBkZXNlbGVjdCAvIGdlb2dyYXBoeSByZXNldC5cbiAgICBpZiAodGhpcy5zdGF0ZS5wb3B1cE1pbmltaXplZCkgcmV0dXJuO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIE5vZGUgfCBudWxsO1xuICAgIGlmICghdGFyZ2V0IHx8IHRoaXMuX3BvcHVwUmVmLmN1cnJlbnQuY29udGFpbnModGFyZ2V0KSkgcmV0dXJuO1xuXG4gICAgY29uc3QgbWFwQ29udGFpbmVyID0gdGhpcy5zdGF0ZS5qaW11TWFwVmlldz8udmlldz8uY29udGFpbmVyO1xuICAgIGlmIChtYXBDb250YWluZXIgJiYgbWFwQ29udGFpbmVyLmNvbnRhaW5zKHRhcmdldCkpIHJldHVybjtcblxuICAgIGlmICh0aGlzLmlzRGFzaGJvYXJkRW1iZWRkZWQoKSkge1xuICAgICAgY29uc3QgZGFzaGJvYXJkVWkgPSAodGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbG9zZXN0Py4oXG4gICAgICAgIFwiLmFncmktZGFzaGJvYXJkLXYzLCAuYWdyaS1kYXNoYm9hcmQtY3JvcC1vdmVybGF5LCAuYWdyaS1kYXNoYm9hcmQtaGVhZGVyLCAuYWdyaS1kYXNoYm9hcmQtbGVmdC1wYW5lbCwgLmFncmktZGFzaGJvYXJkLWJvdHRvbS1yb3csIC5hZ3JpLWRhc2hib2FyZC13aWRnZXQtc2xvdCwgLmFncmktZGFzaGJvYXJkLWluZGljYXRvci1vdmVybGF5LCAuYWdyaS1kYXNoYm9hcmQtZGF0ZS1pbmRleC1vdmVybGF5LCAuYWdyaS12MjAtZmxvYXRpbmctb3ZlcmxheVwiLFxuICAgICAgKTtcbiAgICAgIGlmIChkYXNoYm9hcmRVaSkgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIE91dHNpZGUgZGFzaGJvYXJkIGNocm9tZSDihpIgY29sbGFwc2UgaW5zdGVhZCBvZiB3aXBpbmcgc2VsZWN0aW9uLlxuICAgIHRoaXMubWluaW1pemVQb3B1cCgpO1xuICB9O1xuXG4gIHByaXZhdGUgb25Qb3B1cEhlYWRlck1vdXNlRG93biA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgIC8vIEFsbG93IG5vcm1hbCBiZWhhdmlvciBmb3IgY29udHJvbHMgaW5zaWRlIGhlYWRlci5cbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAodGFyZ2V0Py5jbG9zZXN0KFwiYnV0dG9uLCBhLCBpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdFwiKSkgcmV0dXJuO1xuICAgIGlmIChlLmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xuXG4gICAgY29uc3QgcG9wdXBFbCA9IHRoaXMuX3BvcHVwUmVmLmN1cnJlbnQ7XG4gICAgaWYgKCFwb3B1cEVsKSByZXR1cm47XG5cbiAgICBjb25zdCByZWN0ID0gcG9wdXBFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0aGlzLl9pc0RyYWdnaW5nUG9wdXAgPSB0cnVlO1xuICAgIHRoaXMuX3BvcHVwRHJhZ09mZnNldCA9IHtcbiAgICAgIHg6IGUuY2xpZW50WCAtIHJlY3QubGVmdCxcbiAgICAgIHk6IGUuY2xpZW50WSAtIHJlY3QudG9wLFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5waW5Ub0Nvcm5lcikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBpblRvQ29ybmVyOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm9uUG9wdXBEcmFnTW92ZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMub25Qb3B1cERyYWdFbmQpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICBwcml2YXRlIG9uUG9wdXBEcmFnTW92ZSA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCF0aGlzLl9pc0RyYWdnaW5nUG9wdXAgfHwgIXRoaXMuX2lzTW91bnRlZCkgcmV0dXJuO1xuICAgIGNvbnN0IHZpZXcgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3Py52aWV3O1xuICAgIGlmICghdmlldykgcmV0dXJuO1xuXG4gICAgY29uc3QgbmV4dFBvcyA9IHtcbiAgICAgIHg6IGUuY2xpZW50WCAtIHRoaXMuX3BvcHVwRHJhZ09mZnNldC54LFxuICAgICAgeTogZS5jbGllbnRZIC0gdGhpcy5fcG9wdXBEcmFnT2Zmc2V0LnksXG4gICAgfTtcbiAgICBjb25zdCBjbGFtcGVkID0gdGhpcy5jbGFtcFBvcHVwVG9NYXBDb250YWluZXIobmV4dFBvcywgdmlldyk7XG4gICAgdGhpcy5hcHBseVBvcHVwUG9zaXRpb24oY2xhbXBlZCk7XG4gIH07XG5cbiAgcHJpdmF0ZSBvblBvcHVwRHJhZ0VuZCA9ICgpID0+IHtcbiAgICB0aGlzLl9pc0RyYWdnaW5nUG9wdXAgPSBmYWxzZTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm9uUG9wdXBEcmFnTW92ZSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMub25Qb3B1cERyYWdFbmQpO1xuICB9O1xuICAvKiog4pyFIE5FVzogc2FmZWx5IGRldGVjdCB3aGV0aGVyIHRoaXMgbGF5ZXIgc3VwcG9ydHMgYXR0YWNobWVudHMgKi9cbiAgcHJpdmF0ZSBsYXllclN1cHBvcnRzQXR0YWNobWVudHMoXG4gICAgbGF5ZXI6IF9fZXNyaS5GZWF0dXJlTGF5ZXIgfCBGZWF0dXJlTGF5ZXIgfCBudWxsIHwgdW5kZWZpbmVkLFxuICApOiBib29sZWFuIHtcbiAgICBpZiAoIWxheWVyKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBEaWZmZXJlbnQgSlNBUEkvRUIgYnVpbGRzIGV4cG9zZSBpdCBzbGlnaHRseSBkaWZmZXJlbnRseVxuICAgIGNvbnN0IGFueUxheWVyOiBhbnkgPSBsYXllciBhcyBhbnk7XG5cbiAgICAvLyBDb21tb24gc2lnbmFsc1xuICAgIGlmICh0eXBlb2YgYW55TGF5ZXIuc3VwcG9ydHNBdHRhY2htZW50cyA9PT0gXCJib29sZWFuXCIpXG4gICAgICByZXR1cm4gYW55TGF5ZXIuc3VwcG9ydHNBdHRhY2htZW50cztcblxuICAgIGNvbnN0IGNhcCA9IGFueUxheWVyLmNhcGFiaWxpdGllcztcbiAgICBjb25zdCBzdXBwb3J0ZWQgPVxuICAgICAgY2FwPy5kYXRhPy5zdXBwb3J0c0F0dGFjaG1lbnRzID8/XG4gICAgICBjYXA/LmRhdGE/LnN1cHBvcnRzQXR0YWNobWVudCA/P1xuICAgICAgY2FwPy5vcGVyYXRpb25zPy5zdXBwb3J0c0F0dGFjaG1lbnRzID8/XG4gICAgICBjYXA/Lm9wZXJhdGlvbnM/LnN1cHBvcnRzQXR0YWNobWVudDtcblxuICAgIGlmICh0eXBlb2Ygc3VwcG9ydGVkID09PSBcImJvb2xlYW5cIikgcmV0dXJuIHN1cHBvcnRlZDtcblxuICAgIC8vIFVua25vd24gPT4gYXNzdW1lIGZhbHNlIHRvIGF2b2lkIHVnbHkgd2FybmluZ1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0gSGlnaGxpZ2h0IG1hbmFnZW1lbnQgLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gIHByaXZhdGUgc2V0dXBIaWdobGlnaHRMYXllciA9ICh2aWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcpID0+IHtcbiAgICBpZiAoIXRoaXMuX2hpZ2hsaWdodExheWVyKSB7XG4gICAgICB0aGlzLl9oaWdobGlnaHRMYXllciA9IG5ldyBHcmFwaGljc0xheWVyKHtcbiAgICAgICAgaWQ6IFwiYWdyaS1wb2x5Z29uLWhpZ2hsaWdodFwiLFxuICAgICAgICB0aXRsZTogXCJTZWxlY3RlZCBQb2x5Z29uIEhpZ2hsaWdodFwiLFxuICAgICAgfSk7XG4gICAgICB2aWV3Lm1hcC5hZGQodGhpcy5faGlnaGxpZ2h0TGF5ZXIpO1xuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIGhpZ2hsaWdodFBvbHlnb24gPSAoZ2VvbWV0cnk6IF9fZXNyaS5HZW9tZXRyeSkgPT4ge1xuICAgIGlmICghdGhpcy5faGlnaGxpZ2h0TGF5ZXIgfHwgIWdlb21ldHJ5KSByZXR1cm47XG4gICAgdGhpcy5jbGVhckhpZ2hsaWdodCgpO1xuXG4gICAgLy8gRHJvcCBHcmFmZi90YWJsZSBzZWxlY3Rpb24gZ3JhcGhpY3Mgc28gb25seSBvbmUgb3V0bGluZSBpcyB2aXNpYmxlLlxuICAgIHRyeSB7XG4gICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3Py52aWV3Py5ncmFwaGljcz8ucmVtb3ZlQWxsPy4oKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8qIGlnbm9yZSAqL1xuICAgIH1cblxuICAgIC8vIFdpZGUgdHJhbnNsdWNlbnQgaGFsbyBwbHVzIGEgYnJpZ2h0IGN5YW4gY29yZSBrZWVwcyB0aGUgc2VsZWN0ZWQgZmllbGRcbiAgICAvLyB2aXNpYmxlIG92ZXIgYm90aCBsaWdodCBhbmQgZGFyayBzYXRlbGxpdGUgaW1hZ2VyeS5cbiAgICBjb25zdCBoYWxvU3ltYm9sID0gbmV3IFNpbXBsZUZpbGxTeW1ib2woe1xuICAgICAgY29sb3I6IFswLCAwLCAwLCAwXSxcbiAgICAgIG91dGxpbmU6IG5ldyBTaW1wbGVMaW5lU3ltYm9sKHtcbiAgICAgICAgY29sb3I6IFswLCAyMjksIDI1NSwgMC4zMl0sXG4gICAgICAgIHdpZHRoOiA5LFxuICAgICAgICBzdHlsZTogXCJzb2xpZFwiLFxuICAgICAgfSksXG4gICAgfSk7XG4gICAgY29uc3QgaGlnaGxpZ2h0U3ltYm9sID0gbmV3IFNpbXBsZUZpbGxTeW1ib2woe1xuICAgICAgY29sb3I6IFswLCAwLCAwLCAwXSxcbiAgICAgIG91dGxpbmU6IG5ldyBTaW1wbGVMaW5lU3ltYm9sKHtcbiAgICAgICAgY29sb3I6IFsxMjgsIDI0NSwgMjU1LCAxXSxcbiAgICAgICAgd2lkdGg6IDMsXG4gICAgICAgIHN0eWxlOiBcInNvbGlkXCIsXG4gICAgICB9KSxcbiAgICB9KTtcblxuICAgIHRoaXMuX2hpZ2hsaWdodEhhbG9HcmFwaGljID0gbmV3IEdyYXBoaWMoeyBnZW9tZXRyeSwgc3ltYm9sOiBoYWxvU3ltYm9sIH0pO1xuICAgIHRoaXMuX2hpZ2hsaWdodEdyYXBoaWMgPSBuZXcgR3JhcGhpYyh7IGdlb21ldHJ5LCBzeW1ib2w6IGhpZ2hsaWdodFN5bWJvbCB9KTtcbiAgICB0aGlzLl9oaWdobGlnaHRMYXllci5hZGRNYW55KFtcbiAgICAgIHRoaXMuX2hpZ2hsaWdodEhhbG9HcmFwaGljLFxuICAgICAgdGhpcy5faGlnaGxpZ2h0R3JhcGhpYyxcbiAgICBdKTtcbiAgfTtcblxuICBwcml2YXRlIGNsZWFySGlnaGxpZ2h0ID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5faGlnaGxpZ2h0TGF5ZXIpIHJldHVybjtcbiAgICBpZiAodGhpcy5faGlnaGxpZ2h0SGFsb0dyYXBoaWMpIHtcbiAgICAgIHRoaXMuX2hpZ2hsaWdodExheWVyLnJlbW92ZSh0aGlzLl9oaWdobGlnaHRIYWxvR3JhcGhpYyk7XG4gICAgICB0aGlzLl9oaWdobGlnaHRIYWxvR3JhcGhpYyA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLl9oaWdobGlnaHRHcmFwaGljKSB7XG4gICAgICB0aGlzLl9oaWdobGlnaHRMYXllci5yZW1vdmUodGhpcy5faGlnaGxpZ2h0R3JhcGhpYyk7XG4gICAgICB0aGlzLl9oaWdobGlnaHRHcmFwaGljID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSByZXN0b3JlRXh0ZW50QmVmb3JlU2VsZWN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHZpZXcgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3Py52aWV3O1xuICAgIGNvbnN0IHNhdmVkRXh0ZW50ID0gdGhpcy5fZXh0ZW50QmVmb3JlU2VsZWN0aW9uO1xuICAgIHRoaXMuX2V4dGVudEJlZm9yZVNlbGVjdGlvbiA9IG51bGw7XG4gICAgY29uc3Qgem9vbVRvID0gdGhpcy5wcm9wcy5jb25maWc/LnNldHRpbmdzPy56b29tVG9TZWxlY3Rpb24gIT09IGZhbHNlO1xuICAgIGlmICghem9vbVRvIHx8ICFzYXZlZEV4dGVudCB8fCAhdmlldykgcmV0dXJuO1xuICAgIHRyeSB7XG4gICAgICB2b2lkIHZpZXcuZ29UbyhzYXZlZEV4dGVudCwgeyBkdXJhdGlvbjogNDAwIH0pO1xuICAgIH0gY2F0Y2gge1xuICAgICAgLyogaWdub3JlICovXG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgY2xlYW51cEhpZ2hsaWdodCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5faGlnaGxpZ2h0TGF5ZXIpIHtcbiAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3Py52aWV3O1xuICAgICAgaWYgKHZpZXcgJiYgdmlldy5tYXApIHtcbiAgICAgICAgdmlldy5tYXAucmVtb3ZlKHRoaXMuX2hpZ2hsaWdodExheWVyKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2hpZ2hsaWdodExheWVyID0gbnVsbDtcbiAgICAgIHRoaXMuX2hpZ2hsaWdodEdyYXBoaWMgPSBudWxsO1xuICAgICAgdGhpcy5faGlnaGxpZ2h0SGFsb0dyYXBoaWMgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLl9leHRlbnRCZWZvcmVTZWxlY3Rpb24gPSBudWxsO1xuICB9O1xuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0gTWFwIHdpcmluZyAtLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgcHJpdmF0ZSBnZXRMaW5rZWRNYXBXaWRnZXRJZCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICBjb25zdCBpZHMgPSB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcyBhcyBhbnk7XG4gICAgY29uc3QgbGlzdCA9IGlkcz8ubGVuZ3RoXG4gICAgICA/IGlkcy5hc011dGFibGU/LigpIHx8IGlkcy50b0FycmF5Py4oKSB8fCBpZHNcbiAgICAgIDogW107XG4gICAgY29uc3QgZmlyc3QgPSBBcnJheS5pc0FycmF5KGxpc3QpID8gbGlzdFswXSA6IG51bGw7XG4gICAgaWYgKGZpcnN0KSByZXR1cm4gU3RyaW5nKGZpcnN0KTtcbiAgICBjb25zdCBob3N0SWQgPSBTdHJpbmcodGhpcy5wcm9wcy5pZCB8fCBcIlwiKS5yZXBsYWNlKC8tcG9wdXAkLywgXCJcIik7XG4gICAgcmV0dXJuIGRpc2NvdmVyTWFwV2lkZ2V0SWRJbkFwcCh7XG4gICAgICBob3N0V2lkZ2V0SWQ6IGhvc3RJZCxcbiAgICAgIGdldFNsb3RFbGVtZW50OiAoKSA9PiB7XG4gICAgICAgIGlmIChob3N0SWQpIHtcbiAgICAgICAgICBjb25zdCBzY29wZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC53aWRnZXQtcmVuZGVyZXJbZGF0YS13aWRnZXRpZD1cIiR7aG9zdElkfVwiXSAuYWdyaS1kYXNoYm9hcmQtbWFwLXNsb3RgLFxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKHNjb3BlZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSByZXR1cm4gc2NvcGVkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZhbGxiYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZ3JpLWRhc2hib2FyZC1tYXAtc2xvdFwiKTtcbiAgICAgICAgcmV0dXJuIGZhbGxiYWNrIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBmYWxsYmFjayA6IG51bGw7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRNYXBWaWV3RnJvbU1hbmFnZXIoXG4gICAgbWFwV2lkZ2V0SWQ6IHN0cmluZyB8IG51bGwsXG4gICk6IEppbXVNYXBWaWV3IHwgbnVsbCB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG1hbmFnZXIgPSBNYXBWaWV3TWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgICAgaWYgKCFtYW5hZ2VyKSByZXR1cm4gbnVsbDtcbiAgICAgIGlmIChtYXBXaWRnZXRJZCkge1xuICAgICAgICBjb25zdCBncm91cCA9IG1hbmFnZXIuZ2V0SmltdU1hcFZpZXdHcm91cChtYXBXaWRnZXRJZCk7XG4gICAgICAgIGNvbnN0IGFjdGl2ZSA9IGdyb3VwPy5nZXRBY3RpdmVKaW11TWFwVmlldz8uKCk7XG4gICAgICAgIGlmIChhY3RpdmU/LnZpZXcpIHJldHVybiBhY3RpdmU7XG4gICAgICAgIGNvbnN0IGdyb3VwVmlld3MgPSBncm91cD8uZ2V0QWxsSmltdU1hcFZpZXdzPy4oKSB8fCBbXTtcbiAgICAgICAgY29uc3QgZmlyc3RMb2FkZWQgPSBncm91cFZpZXdzLmZpbmQoKHZpZXc6IGFueSkgPT4gdmlldz8udmlldyk7XG4gICAgICAgIGlmIChmaXJzdExvYWRlZCkgcmV0dXJuIGZpcnN0TG9hZGVkO1xuICAgICAgfVxuICAgICAgY29uc3QgYWxsID0gbWFuYWdlci5nZXRBbGxKaW11TWFwVmlld3M/LigpIHx8IFtdO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgYWxsLmZpbmQoKHZpZXc6IGFueSkgPT4gdmlldz8udmlldyAmJiB2aWV3Py5pc0FjdGl2ZSAhPT0gZmFsc2UpIHx8XG4gICAgICAgIGFsbC5maW5kKCh2aWV3OiBhbnkpID0+IHZpZXc/LnZpZXcpIHx8XG4gICAgICAgIG51bGxcbiAgICAgICk7XG4gICAgfSBjYXRjaCB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU1hcFZpZXdSZWFkeSA9IChldmVudDogRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBtYXBXaWRnZXRJZCA9IChldmVudCBhcyBDdXN0b21FdmVudDx7IG1hcFdpZGdldElkPzogc3RyaW5nIH0+KS5kZXRhaWxcbiAgICAgID8ubWFwV2lkZ2V0SWQ7XG4gICAgY29uc3QgbGlua2VkID0gdGhpcy5nZXRMaW5rZWRNYXBXaWRnZXRJZCgpO1xuICAgIGlmIChtYXBXaWRnZXRJZCAmJiBsaW5rZWQgJiYgbWFwV2lkZ2V0SWQgIT09IGxpbmtlZCkgcmV0dXJuO1xuICAgIHRoaXMuc2NoZWR1bGVNYXBWaWV3RmFsbGJhY2soKTtcbiAgfTtcblxuICBwcml2YXRlIHNjaGVkdWxlTWFwVmlld0ZhbGxiYWNrID0gKCk6IHZvaWQgPT4ge1xuICAgIC8vIEFscmVhZHkgaGF2ZSBhIGxpdmUgbWFwIHZpZXcg4oCUIGRvIE5PVCByZS1lbnRlciBvbkFjdGl2ZVZpZXdDaGFuZ2VcbiAgICAvLyAodGhhdCBwYXRoIHNldFN0YXRlIOKGkiBpbml0aWFsaXplTWFwQ29ubmVjdGlvbiDihpIgc2NoZWR1bGVNYXBWaWV3RmFsbGJhY2tcbiAgICAvLyBhbmQgZnJlZXplcyB0aGUgYnVpbGRlciB3aXRoIFJlYWN0ICMxODUgd2hlbiBmZWF0dXJlTGF5ZXJzIHN0YXkgZW1wdHkpLlxuICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3Py52aWV3KSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUuZmVhdHVyZUxheWVycz8ubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVNYXBJbml0UmV0cnkodGhpcy5zdGF0ZS5qaW11TWFwVmlldyk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1hcFdpZGdldElkID0gdGhpcy5nZXRMaW5rZWRNYXBXaWRnZXRJZCgpO1xuICAgIGNvbnN0IGZyb21NYW5hZ2VyID0gdGhpcy5nZXRNYXBWaWV3RnJvbU1hbmFnZXIobWFwV2lkZ2V0SWQpO1xuICAgIGlmIChmcm9tTWFuYWdlcj8udmlldykge1xuICAgICAgdGhpcy5vbkFjdGl2ZVZpZXdDaGFuZ2UoZnJvbU1hbmFnZXIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIW1hcFdpZGdldElkKSByZXR1cm47XG4gICAgaWYgKHRoaXMubWFwVmlld0ZhbGxiYWNrVGltZXIpIGNsZWFyVGltZW91dCh0aGlzLm1hcFZpZXdGYWxsYmFja1RpbWVyKTtcbiAgICB0aGlzLm1hcFZpZXdGYWxsYmFja1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm1hcFZpZXdGYWxsYmFja1RpbWVyID0gbnVsbDtcbiAgICAgIGlmICghdGhpcy5faXNNb3VudGVkKSByZXR1cm47XG4gICAgICBpZiAodGhpcy5zdGF0ZS5qaW11TWFwVmlldz8udmlldykgcmV0dXJuO1xuICAgICAgY29uc3QgbGF0ZSA9IHRoaXMuZ2V0TWFwVmlld0Zyb21NYW5hZ2VyKG1hcFdpZGdldElkKTtcbiAgICAgIGlmIChsYXRlPy52aWV3KSB0aGlzLm9uQWN0aXZlVmlld0NoYW5nZShsYXRlKTtcbiAgICB9LCA2MDApO1xuICB9O1xuXG4gIHByaXZhdGUgc2NoZWR1bGVNYXBJbml0UmV0cnkgPSAoam12OiBKaW11TWFwVmlldyk6IHZvaWQgPT4ge1xuICAgIGlmICh0aGlzLm1hcEluaXRSZXRyeUNvdW50ID49IHRoaXMubWF4TWFwSW5pdFJldHJpZXMpIHJldHVybjtcbiAgICBpZiAodGhpcy5tYXBJbml0UmV0cnlUaW1lcikgY2xlYXJUaW1lb3V0KHRoaXMubWFwSW5pdFJldHJ5VGltZXIpO1xuICAgIHRoaXMubWFwSW5pdFJldHJ5Q291bnQgKz0gMTtcbiAgICB0aGlzLm1hcEluaXRSZXRyeVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm1hcEluaXRSZXRyeVRpbWVyID0gbnVsbDtcbiAgICAgIGlmICghdGhpcy5faXNNb3VudGVkKSByZXR1cm47XG4gICAgICB2b2lkIHRoaXMuaW5pdGlhbGl6ZU1hcENvbm5lY3Rpb24oam12KTtcbiAgICB9LCA4MDApO1xuICB9O1xuXG4gIHByaXZhdGUgZXhwYW5kVXNlRGF0YVNvdXJjZUVudHJpZXModXNlTGlzdDogYW55W10pOiBhbnlbXSB7XG4gICAgY29uc3QgZHNNZ3IgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgIGNvbnN0IG91dDogYW55W10gPSBbXTtcbiAgICBjb25zdCBzZWVuID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgICBmb3IgKGNvbnN0IHVkcyBvZiB1c2VMaXN0KSB7XG4gICAgICBjb25zdCBpZCA9IFN0cmluZyh1ZHM/LmRhdGFTb3VyY2VJZCB8fCBcIlwiKTtcbiAgICAgIGlmICghaWQgfHwgc2Vlbi5oYXMoaWQpKSBjb250aW51ZTtcbiAgICAgIHNlZW4uYWRkKGlkKTtcbiAgICAgIG91dC5wdXNoKHVkcyk7XG5cbiAgICAgIGNvbnN0IGRzID0gZHNNZ3IuZ2V0RGF0YVNvdXJjZShpZCkgYXMgYW55O1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSBkcz8uZ2V0Q2hpbGREYXRhU291cmNlcz8uKCkgfHwgW107XG4gICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkSWQgPSBTdHJpbmcoY2hpbGQ/LmlkIHx8IFwiXCIpO1xuICAgICAgICBpZiAoIWNoaWxkSWQgfHwgc2Vlbi5oYXMoY2hpbGRJZCkpIGNvbnRpbnVlO1xuICAgICAgICBzZWVuLmFkZChjaGlsZElkKTtcbiAgICAgICAgb3V0LnB1c2goeyBkYXRhU291cmNlSWQ6IGNoaWxkSWQsIG1haW5EYXRhU291cmNlSWQ6IGlkIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICBwcml2YXRlIGFkZFJlc29sdmVkTGF5ZXIgPSAoXG4gICAgdGFyZ2V0OiBfX2VzcmkuRmVhdHVyZUxheWVyW10sXG4gICAgbGF5ZXJLZXlUb0RzSWQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sXG4gICAgc2VlbjogU2V0PHN0cmluZz4sXG4gICAgbGF5ZXI6IGFueSxcbiAgICBkc0lkPzogc3RyaW5nLFxuICApOiB2b2lkID0+IHtcbiAgICBjb25zdCBxdWVyeWFibGUgPSBnZXRRdWVyeWFibGVMYXllcihsYXllcikgfHwgbGF5ZXI7XG4gICAgaWYgKCFpc1F1ZXJ5YWJsZUZpZWxkTGF5ZXIocXVlcnlhYmxlKSkgcmV0dXJuO1xuICAgIGNvbnN0IGtleSA9XG4gICAgICBnZXRBZ3JpTGF5ZXJNYXBLZXkocXVlcnlhYmxlKSB8fFxuICAgICAgU3RyaW5nKHF1ZXJ5YWJsZS51cmwgfHwgcXVlcnlhYmxlLmlkIHx8IFwiXCIpO1xuICAgIGlmICgha2V5IHx8IHNlZW4uaGFzKGtleSkpIHJldHVybjtcbiAgICBzZWVuLmFkZChrZXkpO1xuICAgIHRhcmdldC5wdXNoKHF1ZXJ5YWJsZSBhcyBfX2VzcmkuRmVhdHVyZUxheWVyKTtcbiAgICBpZiAoZHNJZCkgbGF5ZXJLZXlUb0RzSWRba2V5XSA9IGRzSWQ7XG4gIH07XG5cbiAgcHJpdmF0ZSBjb2xsZWN0TGF5ZXJzRnJvbURhdGFTb3VyY2VzID0gKFxuICAgIGptdjogSmltdU1hcFZpZXcsXG4gICAgdXNlTGlzdDogYW55W10sXG4gICk6IHtcbiAgICBsYXllcnM6IF9fZXNyaS5GZWF0dXJlTGF5ZXJbXTtcbiAgICBsYXllcktleVRvRHNJZDogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgfSA9PiB7XG4gICAgY29uc3QgbGF5ZXJzOiBfX2VzcmkuRmVhdHVyZUxheWVyW10gPSBbXTtcbiAgICBjb25zdCBsYXllcktleVRvRHNJZDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuICAgIGNvbnN0IHNlZW4gPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBjb25zdCBtYXAgPSBqbXY/LnZpZXc/Lm1hcDtcblxuICAgIGZvciAoY29uc3QgdWRzIG9mIHVzZUxpc3QpIHtcbiAgICAgIGNvbnN0IGRzSWQgPSBTdHJpbmcodWRzPy5kYXRhU291cmNlSWQgfHwgXCJcIik7XG4gICAgICBpZiAoIWRzSWQpIGNvbnRpbnVlO1xuXG4gICAgICBjb25zdCBjYWNoZWREcyA9IHRoaXMuc3RhdGUuZGF0YVNvdXJjZXNCeUlkPy5bZHNJZF0gYXMgYW55O1xuICAgICAgaWYgKGNhY2hlZERzKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlZExheWVyID1cbiAgICAgICAgICBjYWNoZWREcy5sYXllciB8fFxuICAgICAgICAgICh0eXBlb2YgY2FjaGVkRHMuZ2V0TGF5ZXIgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgPyBjYWNoZWREcy5nZXRMYXllcigpXG4gICAgICAgICAgICA6IG51bGwpO1xuICAgICAgICBjb25zdCBsaXZlID0gdGhpcy50b0xpdmVNYXBMYXllcihjYWNoZWRMYXllciwgbWFwKTtcbiAgICAgICAgaWYgKGxpdmUpIHRoaXMuYWRkUmVzb2x2ZWRMYXllcihsYXllcnMsIGxheWVyS2V5VG9Ec0lkLCBzZWVuLCBsaXZlLCBkc0lkKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZHNNZ3IgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpO1xuICAgICAgY29uc3QgZHMgPSBkc01nci5nZXREYXRhU291cmNlKGRzSWQpIGFzIGFueTtcbiAgICAgIGlmIChkcykge1xuICAgICAgICBjb25zdCBkc0xheWVyID1cbiAgICAgICAgICAodHlwZW9mIGRzLmdldExheWVyID09PSBcImZ1bmN0aW9uXCIgPyBkcy5nZXRMYXllcigpIDogbnVsbCkgfHxcbiAgICAgICAgICBkcy5sYXllcjtcbiAgICAgICAgY29uc3QgbGl2ZSA9IHRoaXMudG9MaXZlTWFwTGF5ZXIoXG4gICAgICAgICAgZ2V0UXVlcnlhYmxlTGF5ZXIoZHNMYXllcikgfHwgZHNMYXllcixcbiAgICAgICAgICBtYXAsXG4gICAgICAgICk7XG4gICAgICAgIGlmIChsaXZlKSB0aGlzLmFkZFJlc29sdmVkTGF5ZXIobGF5ZXJzLCBsYXllcktleVRvRHNJZCwgc2VlbiwgbGl2ZSwgZHNJZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbGF5ZXJzLCBsYXllcktleVRvRHNJZCB9O1xuICB9O1xuXG4gIG9uQWN0aXZlVmlld0NoYW5nZSA9IChqaW11TWFwVmlldzogSmltdU1hcFZpZXcpID0+IHtcbiAgICB0aGlzLmRldGFjaE1hcENsaWNrKCk7XG4gICAgdGhpcy5jbGVhbnVwSGlnaGxpZ2h0KCk7XG5cbiAgICBpZiAoIWppbXVNYXBWaWV3KSB7XG4gICAgICB0aGlzLm1hcEFyZWFSZXNpemVPYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICAgICAgdGhpcy5tYXBBcmVhUmVzaXplT2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgdGhpcy5jb25uZWN0ZWRNYXBWaWV3SWQgPSBcIlwiO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGppbXVNYXBWaWV3OiBudWxsLFxuICAgICAgICBmZWF0dXJlTGF5ZXJzOiBbXSxcbiAgICAgICAgb2JqZWN0SWRGaWVsZDogbnVsbCxcbiAgICAgICAgZXJyb3I6IHRoaXMudHIoXCJlcnJvci5ub01hcFZpZXdcIiksXG4gICAgICAgIGRlYnVnSW5mbzoge1xuICAgICAgICAgIC4uLnRoaXMuc3RhdGUuZGVidWdJbmZvLFxuICAgICAgICAgIGxheWVySW5mbzogdGhpcy50cihcImVycm9yLm5vTWFwVmlld1wiKSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZVZpZXcgPSBqaW11TWFwVmlldy52aWV3O1xuICAgIGlmIChhY3RpdmVWaWV3KSB7XG4gICAgICB0aGlzLm9ic2VydmVNYXBBcmVhUmVzaXplKGFjdGl2ZVZpZXcpO1xuICAgIH1cblxuICAgIGNvbnN0IHZpZXdJZCA9IFN0cmluZyhcbiAgICAgIChqaW11TWFwVmlldyBhcyBhbnkpLmlkIHx8IChqaW11TWFwVmlldyBhcyBhbnkpLm1hcFdpZGdldElkIHx8IFwiXCIsXG4gICAgKTtcbiAgICAvLyBTYW1lIG1hcCBhbHJlYWR5IHdpcmVkIOKAlCBkbyBub3Qgc2V0U3RhdGUgYWdhaW4gKGNhdXNlcyBmcmVlemUgbG9vcHMpLlxuICAgIGlmICh2aWV3SWQgJiYgdmlld0lkID09PSB0aGlzLmNvbm5lY3RlZE1hcFZpZXdJZCAmJiB0aGlzLnN0YXRlLmppbXVNYXBWaWV3KSB7XG4gICAgICBpZiAoIXRoaXMuX2NsaWNrSGFuZGxlKSB0aGlzLmF0dGFjaE1hcENsaWNrKGppbXVNYXBWaWV3KTtcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXJzPy5sZW5ndGgpIHtcbiAgICAgICAgdm9pZCB0aGlzLmluaXRpYWxpemVNYXBDb25uZWN0aW9uKGppbXVNYXBWaWV3KTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jb25uZWN0ZWRNYXBWaWV3SWQgPSB2aWV3SWQ7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgamltdU1hcFZpZXcgfSwgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdmlldyA9IGppbXVNYXBWaWV3LnZpZXc7XG4gICAgICBpZiAoIXZpZXcpIHJldHVybjtcblxuICAgICAgLy8gQXR0YWNoIGltbWVkaWF0ZWx5IHNvIHRoZSBmaXJzdCBmaWVsZCBjbGljayBuZXZlciByYWNlcyBsYXllciByZXNvbHZlLlxuICAgICAgdGhpcy5hdHRhY2hNYXBDbGljayhqaW11TWFwVmlldyk7XG5cbiAgICAgIGlmICh2aWV3LnJlYWR5KSB7XG4gICAgICAgIHRoaXMuc2V0dXBIaWdobGlnaHRMYXllcih2aWV3KTtcbiAgICAgICAgYXdhaXQgdGhpcy5pbml0aWFsaXplTWFwQ29ubmVjdGlvbihqaW11TWFwVmlldyk7XG4gICAgICAgIHRoaXMucmVwb3NpdGlvblBpbm5lZElmTmVlZGVkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBoID0gdmlldy53YXRjaChcInJlYWR5XCIsIGFzeW5jIChyZWFkeSkgPT4ge1xuICAgICAgICAgIGlmIChyZWFkeSkge1xuICAgICAgICAgICAgaC5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoTWFwQ2xpY2soamltdU1hcFZpZXcpO1xuICAgICAgICAgICAgdGhpcy5zZXR1cEhpZ2hsaWdodExheWVyKHZpZXcpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5pbml0aWFsaXplTWFwQ29ubmVjdGlvbihqaW11TWFwVmlldyk7XG4gICAgICAgICAgICB0aGlzLnJlcG9zaXRpb25QaW5uZWRJZk5lZWRlZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplTWFwQ29ubmVjdGlvbiA9IGFzeW5jIChqbXY6IEppbXVNYXBWaWV3KSA9PiB7XG4gICAgaWYgKCF0aGlzLl9pc01vdW50ZWQpIHJldHVybjtcbiAgICBjb25zdCB2aWV3ID0gam12Py52aWV3O1xuICAgIGlmICghdmlldyB8fCAhdmlldy5tYXApIHJldHVybjtcblxuICAgIGNvbnN0IHJhd0xpc3QgPSAodGhpcy5wcm9wcy51c2VEYXRhU291cmNlcz8uYXNNdXRhYmxlPy4oKSBhcyBhbnlbXSkgfHwgW107XG4gICAgY29uc3QgdXNlTGlzdCA9IHRoaXMuZXhwYW5kVXNlRGF0YVNvdXJjZUVudHJpZXMocmF3TGlzdCk7XG4gICAgLy8gRW1wdHkgdXNlRGF0YVNvdXJjZXMgaXMgbm9ybWFsIHJpZ2h0IGFmdGVyIGRyb3Ag4oCUIHJlc29sdmUgbWFwIGxheWVycyBvbmx5LlxuICAgIC8vIE5ldmVyIGJvdW5jZSB0aHJvdWdoIHNjaGVkdWxlTWFwVmlld0ZhbGxiYWNrIGhlcmUgKHRoYXQgcmUtZW50ZXJlZFxuICAgIC8vIG9uQWN0aXZlVmlld0NoYW5nZSBhbmQgZnJvemUgdGhlIHBhZ2UpLlxuXG4gICAgdGhpcy5kYXRhU291cmNlRW5naW5lLnN5bmNTZWxlY3Rpb24oZ2V0U2VsZWN0ZWREc0lkcyh0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzKSk7XG5cbiAgICBjb25zdCByZXNvbHZlZExheWVyczogX19lc3JpLkZlYXR1cmVMYXllcltdID0gW107XG4gICAgY29uc3QgbGF5ZXJLZXlUb0RzSWQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcbiAgICBjb25zdCBzZWVuID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgICBjb25zdCBtYXBMYXllcnMgPSBnZXRBbGxGZWF0dXJlTGF5ZXJzRnJvbU1hcCh2aWV3Lm1hcCk7XG4gICAgLy8gbG9hZCgpIHJlaHlkcmF0ZXMgTWFwSW1hZ2Ugc3VibGF5ZXJzIGFuZCBjYW4gZHJvcCB0aGVpciBydW50aW1lXG4gICAgLy8gZGlzdHJpY3QgZGVmaW5pdGlvbkV4cHJlc3Npb24g4oCUIHNuYXBzaG90IGFuZCByZXBhaXIgc3luY2hyb25vdXNseSBzb1xuICAgIC8vIGEgY29ubmVjdC9yZXRyeSB0aGF0IG92ZXJsYXBzIGEgZmllbGQgY2xpY2sgbmV2ZXIgZmxhc2hlcyBvdGhlclxuICAgIC8vIGRpc3RyaWN0cycgZmllbGRzLlxuICAgIGNvbnN0IGRlZmluaXRpb25TbmFwc2hvdCA9IHRoaXMuc25hcHNob3REZWZpbml0aW9uRXhwcmVzc2lvbnMobWFwTGF5ZXJzKTtcbiAgICBmb3IgKGNvbnN0IGxheWVyIG9mIG1hcExheWVycykge1xuICAgICAgYXdhaXQgc2FmZUxvYWRNYXBMYXllcihsYXllcik7XG4gICAgICB0aGlzLmFkZFJlc29sdmVkTGF5ZXIocmVzb2x2ZWRMYXllcnMsIGxheWVyS2V5VG9Ec0lkLCBzZWVuLCBsYXllcik7XG4gICAgfVxuICAgIHRoaXMucmVzdG9yZURyaWZ0ZWREZWZpbml0aW9uRXhwcmVzc2lvbnMoZGVmaW5pdGlvblNuYXBzaG90KTtcblxuICAgIGlmICh1c2VMaXN0Lmxlbmd0aCkge1xuICAgICAgY29uc3QgZnJvbURzID0gdGhpcy5jb2xsZWN0TGF5ZXJzRnJvbURhdGFTb3VyY2VzKGptdiwgdXNlTGlzdCk7XG4gICAgICBmb3IgKGNvbnN0IGxheWVyIG9mIGZyb21Ecy5sYXllcnMpIHtcbiAgICAgICAgY29uc3QgbGl2ZSA9IHRoaXMudG9MaXZlTWFwTGF5ZXIobGF5ZXIsIHZpZXcubWFwKSB8fCBsYXllcjtcbiAgICAgICAgY29uc3Qga2V5ID0gZ2V0QWdyaUxheWVyTWFwS2V5KGxpdmUpIHx8IFN0cmluZyhsaXZlLnVybCB8fCBsaXZlLmlkIHx8IFwiXCIpO1xuICAgICAgICBjb25zdCBkc0lkID0gZnJvbURzLmxheWVyS2V5VG9Ec0lkW2tleV07XG4gICAgICAgIHRoaXMuYWRkUmVzb2x2ZWRMYXllcihyZXNvbHZlZExheWVycywgbGF5ZXJLZXlUb0RzSWQsIHNlZW4sIGxpdmUsIGRzSWQpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IHVzZURzIG9mIHVzZUxpc3QpIHtcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBhd2FpdCB0aGlzLnJlc29sdmVGZWF0dXJlTGF5ZXJGb3JVc2VEYXRhU291cmNlKGptdiwgdXNlRHMpO1xuICAgICAgICBpZiAoIWxheWVyKSBjb250aW51ZTtcblxuICAgICAgICBhd2FpdCBzYWZlTG9hZE1hcExheWVyKGxheWVyKTtcblxuICAgICAgICBjb25zdCBkc0lkID0gU3RyaW5nKHVzZURzPy5kYXRhU291cmNlSWQgfHwgXCJcIik7XG4gICAgICAgIGNvbnN0IGxpdmUgPSB0aGlzLnRvTGl2ZU1hcExheWVyKGxheWVyLCB2aWV3Lm1hcCkgfHwgbGF5ZXI7XG4gICAgICAgIHRoaXMuYWRkUmVzb2x2ZWRMYXllcihyZXNvbHZlZExheWVycywgbGF5ZXJLZXlUb0RzSWQsIHNlZW4sIGxpdmUsIGRzSWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdGhpcy5faXNNb3VudGVkKSByZXR1cm47XG5cbiAgICBpZiAoIXJlc29sdmVkTGF5ZXJzLmxlbmd0aCkge1xuICAgICAgLy8gU29mdCBmYWlsIOKAlCBtYXAgbWF5IHN0aWxsIGJlIGxvYWRpbmcgcmVnaW9uLXllYXIgc3VibGF5ZXJzLiBSZXRyeVxuICAgICAgLy8gYSBmZXcgdGltZXMgd2l0aG91dCByZS1lbnRlcmluZyBvbkFjdGl2ZVZpZXdDaGFuZ2UuXG4gICAgICAvLyBTdGlsbCBhdHRhY2ggdGhlIGNsaWNrIGhhbmRsZXIgc28gdGhlIGZpcnN0IGZpZWxkIGNsaWNrIHdvcmtzIGFzIHNvb25cbiAgICAgIC8vIGFzIGxpdmUgTWFwSW1hZ2Ugc3VibGF5ZXJzIGJlY29tZSBoaXR0YWJsZSB2aWEgZ2V0Q2xpY2tUYXJnZXRMYXllcnMuXG4gICAgICBpZiAoIXRoaXMuX2NsaWNrSGFuZGxlKSB0aGlzLmF0dGFjaE1hcENsaWNrKGptdik7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuc3RhdGUuZXJyb3IgIT09IHRoaXMudHIoXCJlcnJvci5zZWxlY3RlZExheWVyc01pc3NpbmdcIikgfHxcbiAgICAgICAgKHRoaXMuc3RhdGUuZmVhdHVyZUxheWVycz8ubGVuZ3RoIHx8IDApID4gMFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGZlYXR1cmVMYXllcnM6IFtdLFxuICAgICAgICAgIG9iamVjdElkRmllbGQ6IG51bGwsXG4gICAgICAgICAgZXJyb3I6IHVzZUxpc3QubGVuZ3RoXG4gICAgICAgICAgICA/IHRoaXMudHIoXCJlcnJvci5zZWxlY3RlZExheWVyc01pc3NpbmdcIilcbiAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNjaGVkdWxlTWFwSW5pdFJldHJ5KGptdik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5tYXBJbml0UmV0cnlDb3VudCA9IDA7XG4gICAgYWdyaU1hcENsaWNrRGVidWcoXCJpbml0aWFsaXplTWFwQ29ubmVjdGlvbiBPS1wiLCB7XG4gICAgICBsYXllckNvdW50OiByZXNvbHZlZExheWVycy5sZW5ndGgsXG4gICAgICBsYXllcnM6IHJlc29sdmVkTGF5ZXJzLm1hcCgobCkgPT4gbC50aXRsZSB8fCBsLnVybCB8fCBsLmlkKSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHByZXZLZXlzID0gKHRoaXMuc3RhdGUuZmVhdHVyZUxheWVycyB8fCBbXSlcbiAgICAgIC5tYXAoKGwpID0+IGdldEFncmlMYXllck1hcEtleShsKSB8fCBTdHJpbmcobC51cmwgfHwgbC5pZCB8fCBcIlwiKSlcbiAgICAgIC5qb2luKFwifFwiKTtcbiAgICBjb25zdCBuZXh0S2V5cyA9IHJlc29sdmVkTGF5ZXJzXG4gICAgICAubWFwKChsKSA9PiBnZXRBZ3JpTGF5ZXJNYXBLZXkobCkgfHwgU3RyaW5nKGwudXJsIHx8IGwuaWQgfHwgXCJcIikpXG4gICAgICAuam9pbihcInxcIik7XG4gICAgaWYgKHByZXZLZXlzID09PSBuZXh0S2V5cyAmJiB0aGlzLl9jbGlja0hhbmRsZSkge1xuICAgICAgdGhpcy5hdHRhY2hNYXBDbGljayhqbXYpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIGZlYXR1cmVMYXllcnM6IHJlc29sdmVkTGF5ZXJzLFxuICAgICAgICBsYXllcktleVRvRHNJZCxcbiAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgIGRlYnVnSW5mbzoge1xuICAgICAgICAgIC4uLnRoaXMuc3RhdGUuZGVidWdJbmZvLFxuICAgICAgICAgIGxheWVySW5mbzogcmVzb2x2ZWRMYXllcnMubWFwKChsKSA9PiAoe1xuICAgICAgICAgICAgaWQ6IGwuaWQsXG4gICAgICAgICAgICB0aXRsZTogbC50aXRsZSxcbiAgICAgICAgICAgIHVybDogbC51cmwsXG4gICAgICAgICAgICBvYmplY3RJZEZpZWxkOiBsLm9iamVjdElkRmllbGQsXG4gICAgICAgICAgfSkpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLl9pc01vdW50ZWQpIHJldHVybjtcbiAgICAgICAgdGhpcy5hdHRhY2hNYXBDbGljayhqbXYpO1xuICAgICAgfSxcbiAgICApO1xuICB9O1xuXG4gIHByaXZhdGUgdG9MaXZlTWFwTGF5ZXIgPSAoXG4gICAgbGF5ZXI6IGFueSxcbiAgICBtYXA6IF9fZXNyaS5NYXAgfCBudWxsIHwgdW5kZWZpbmVkLFxuICApOiBfX2VzcmkuRmVhdHVyZUxheWVyIHwgbnVsbCA9PiB7XG4gICAgaWYgKCFsYXllcikgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgdXJsID0gU3RyaW5nKGxheWVyPy51cmwgfHwgXCJcIik7XG4gICAgaWYgKG1hcCAmJiB1cmwpIHtcbiAgICAgIGNvbnN0IGJ5VXJsID0gZmluZFF1ZXJ5YWJsZUxheWVyT25NYXBCeVVybChtYXAsIHVybCk7XG4gICAgICBpZiAoYnlVcmwpIHJldHVybiBieVVybCBhcyBfX2VzcmkuRmVhdHVyZUxheWVyO1xuICAgIH1cbiAgICBpZiAobWFwICYmIGxheWVyPy5pZCAhPSBudWxsKSB7XG4gICAgICBjb25zdCBieUlkID0gZmluZFF1ZXJ5YWJsZUxheWVyT25NYXBCeUlkKG1hcCwgU3RyaW5nKGxheWVyLmlkKSk7XG4gICAgICBpZiAoYnlJZCkgcmV0dXJuIGJ5SWQgYXMgX19lc3JpLkZlYXR1cmVMYXllcjtcbiAgICB9XG4gICAgY29uc3QgcXVlcnlhYmxlID0gZ2V0UXVlcnlhYmxlTGF5ZXIobGF5ZXIpO1xuICAgIHJldHVybiAocXVlcnlhYmxlIHx8IGxheWVyKSBhcyBfX2VzcmkuRmVhdHVyZUxheWVyO1xuICB9O1xuXG4gIHByaXZhdGUgbGF5ZXJLZXlzTWF0Y2ggPSAoYTogYW55LCBiOiBhbnkpOiBib29sZWFuID0+IHtcbiAgICBpZiAoIWEgfHwgIWIpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBrZXlBID0gZ2V0QWdyaUxheWVyTWFwS2V5KGEpO1xuICAgIGNvbnN0IGtleUIgPSBnZXRBZ3JpTGF5ZXJNYXBLZXkoYik7XG4gICAgaWYgKGtleUEgJiYga2V5QiAmJiBrZXlBID09PSBrZXlCKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoYS5pZCAhPSBudWxsICYmIGIuaWQgIT0gbnVsbCAmJiBTdHJpbmcoYS5pZCkgPT09IFN0cmluZyhiLmlkKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IHVybEEgPSBub3JtYWxpemVRdWVyeWFibGVMYXllclVybChTdHJpbmcoYS51cmwgfHwgXCJcIikpO1xuICAgIGNvbnN0IHVybEIgPSBub3JtYWxpemVRdWVyeWFibGVMYXllclVybChTdHJpbmcoYi51cmwgfHwgXCJcIikpO1xuICAgIHJldHVybiAhISh1cmxBICYmIHVybEIgJiYgdXJsQSA9PT0gdXJsQik7XG4gIH07XG5cbiAgLyoqIFJlc29sdmUgdGhlIGxpdmUgbWFwIGxheWVyIGZvciBhIHNlbGVjdGVkIHVzZURhdGFTb3VyY2UgKEZlYXR1cmVMYXllciBvciBNYXBJbWFnZSBzdWJsYXllcikuICovXG4gIHByaXZhdGUgcmVzb2x2ZUZlYXR1cmVMYXllckZvclVzZURhdGFTb3VyY2UgPSBhc3luYyAoXG4gICAgam12OiBKaW11TWFwVmlldyxcbiAgICB1c2VEczogYW55LFxuICApOiBQcm9taXNlPF9fZXNyaS5GZWF0dXJlTGF5ZXIgfCBudWxsPiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghdXNlRHM/LmRhdGFTb3VyY2VJZCkgcmV0dXJuIG51bGw7XG5cbiAgICAgIGNvbnN0IGRzSWQgPSBTdHJpbmcodXNlRHMuZGF0YVNvdXJjZUlkKTtcbiAgICAgIGNvbnN0IG1hcCA9IGptdj8udmlldz8ubWFwO1xuICAgICAgaWYgKCFtYXApIHJldHVybiBudWxsO1xuXG4gICAgICBjb25zdCBqbHZCeUFwaSA9IChqbXYgYXMgYW55KS5nZXRKaW11TGF5ZXJWaWV3QnlEYXRhU291cmNlSWQ/Lihkc0lkKTtcbiAgICAgIGNvbnN0IGZyb21BcGkgPSBnZXRRdWVyeWFibGVMYXllcihqbHZCeUFwaT8ubGF5ZXIpO1xuICAgICAgaWYgKGZyb21BcGkpIHJldHVybiB0aGlzLnRvTGl2ZU1hcExheWVyKGZyb21BcGksIG1hcCk7XG5cbiAgICAgIGNvbnN0IGpsdkxpc3Q6IGFueVtdID0gam12LmdldEFsbEppbXVMYXllclZpZXdzPy4oKSB8fCBbXTtcbiAgICAgIGNvbnN0IGxheWVySWRIaW50ID0gZXh0cmFjdE1hcExheWVySWRGcm9tRHNJZChkc0lkKTtcblxuICAgICAgZm9yIChjb25zdCBsdiBvZiBqbHZMaXN0KSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBsdj8ubGF5ZXJEYXRhU291cmNlSWQgPT09IGRzSWQgfHxcbiAgICAgICAgICBsdj8uZGF0YVNvdXJjZUlkID09PSBkc0lkXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IHJlc29sdmVkID0gZ2V0UXVlcnlhYmxlTGF5ZXIobHY/LmxheWVyKTtcbiAgICAgICAgICBpZiAocmVzb2x2ZWQpIHJldHVybiB0aGlzLnRvTGl2ZU1hcExheWVyKHJlc29sdmVkLCBtYXApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChsYXllcklkSGludCkge1xuICAgICAgICBjb25zdCBtYXRjaCA9IGpsdkxpc3QuZmluZChcbiAgICAgICAgICAobHYpID0+IFN0cmluZyhsdj8ubGF5ZXI/LmlkIHx8IFwiXCIpID09PSBsYXllcklkSGludCxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgcmVzb2x2ZWQgPSBnZXRRdWVyeWFibGVMYXllcihtYXRjaD8ubGF5ZXIpO1xuICAgICAgICBpZiAocmVzb2x2ZWQpIHJldHVybiB0aGlzLnRvTGl2ZU1hcExheWVyKHJlc29sdmVkLCBtYXApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkc01nciA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgICBjb25zdCBkczogYW55ID0gZHNNZ3IuZ2V0RGF0YVNvdXJjZShkc0lkKTtcbiAgICAgIGlmIChkcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICh0eXBlb2YgZHMuZmV0Y2hTY2hlbWEgPT09IFwiZnVuY3Rpb25cIikgYXdhaXQgZHMuZmV0Y2hTY2hlbWEoKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgLyogc2NoZW1hIG9wdGlvbmFsICovXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkc0xheWVyID1cbiAgICAgICAgICAodHlwZW9mIGRzLmdldExheWVyID09PSBcImZ1bmN0aW9uXCIgPyBkcy5nZXRMYXllcigpIDogbnVsbCkgfHxcbiAgICAgICAgICBkcy5sYXllciB8fFxuICAgICAgICAgICh0eXBlb2YgZHMuZ2V0SmltdUxheWVyID09PSBcImZ1bmN0aW9uXCIgPyBkcy5nZXRKaW11TGF5ZXIoKSA6IG51bGwpO1xuICAgICAgICBjb25zdCBxdWVyeWFibGUgPSBnZXRRdWVyeWFibGVMYXllcihkc0xheWVyKTtcbiAgICAgICAgaWYgKHF1ZXJ5YWJsZSkge1xuICAgICAgICAgIGNvbnN0IGxpdmUgPSB0aGlzLnRvTGl2ZU1hcExheWVyKHF1ZXJ5YWJsZSwgbWFwKTtcbiAgICAgICAgICBpZiAobGl2ZSkgcmV0dXJuIGxpdmU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkc1VybCA9IFN0cmluZyhkcz8udXJsIHx8IHF1ZXJ5YWJsZT8udXJsIHx8IGRzTGF5ZXI/LnVybCB8fCBcIlwiKTtcbiAgICAgICAgaWYgKGRzVXJsKSB7XG4gICAgICAgICAgY29uc3QgYnlVcmwgPSBmaW5kUXVlcnlhYmxlTGF5ZXJPbk1hcEJ5VXJsKG1hcCwgZHNVcmwpO1xuICAgICAgICAgIGlmIChieVVybCkgcmV0dXJuIGJ5VXJsIGFzIF9fZXNyaS5GZWF0dXJlTGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIHtcbiAgICAgIC8qIGlnbm9yZSAqL1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbiAgcHJpdmF0ZSBjbGFtcFBvcHVwVG9NYXBDb250YWluZXIgPSAoXG4gICAgcG9zOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sXG4gICAgdmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LFxuICApID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSB2aWV3LmNvbnRhaW5lciBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCByZWN0ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IG1hcmdpbiA9IHRoaXMuUE9QVVBfTUFSR0lOO1xuICAgIGNvbnN0IHBpbm5lZCA9IHRoaXMuc3RhdGUucGluVG9Db3JuZXI7XG4gICAgY29uc3QgeyB3aWR0aDogcG9wdXBXLCBoZWlnaHQ6IHBvcHVwSCB9ID0gdGhpcy5nZXRQb3B1cERpbWVuc2lvbnMoXG4gICAgICB2aWV3LFxuICAgICAgcGlubmVkLFxuICAgICAgcG9zLFxuICAgICk7XG5cbiAgICBjb25zdCBtYXBMZWZ0ID0gcmVjdC5sZWZ0O1xuICAgIGNvbnN0IG1hcFRvcCA9IHJlY3QudG9wO1xuICAgIGNvbnN0IG1hcFJpZ2h0ID0gcmVjdC5yaWdodDtcbiAgICBjb25zdCBtYXBCb3R0b20gPSB0aGlzLmdldEVmZmVjdGl2ZU1hcEJvdHRvbSh2aWV3LCBtYXJnaW4pO1xuXG4gICAgY29uc3QgeCA9IE1hdGgubWF4KFxuICAgICAgbWFwTGVmdCArIG1hcmdpbixcbiAgICAgIE1hdGgubWluKHBvcy54LCBtYXBSaWdodCAtIHBvcHVwVyAtIG1hcmdpbiksXG4gICAgKTtcblxuICAgIGxldCB5ID0gcG9zLnk7XG4gICAgaWYgKHkgKyBwb3B1cEggPiBtYXBCb3R0b20pIHtcbiAgICAgIHkgPSBtYXBCb3R0b20gLSBwb3B1cEggLSBtYXJnaW47XG4gICAgfVxuICAgIHkgPSBNYXRoLm1heChtYXBUb3AgKyBtYXJnaW4sIHkpO1xuXG4gICAgcmV0dXJuIHsgeCwgeSB9O1xuICB9O1xuXG4gIHByaXZhdGUgYXR0YWNoTWFwQ2xpY2soam12OiBKaW11TWFwVmlldykge1xuICAgIHRoaXMuZGV0YWNoTWFwQ2xpY2soKTtcbiAgICBjb25zdCB2aWV3ID0gam12Py52aWV3IGFzIHsgb24/OiAoZXZlbnQ6IHN0cmluZywgY2I6IHVua25vd24pID0+IHVua25vd24gfSB8IG51bGw7XG4gICAgaWYgKCF2aWV3IHx8IHR5cGVvZiB2aWV3Lm9uICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybjtcbiAgICB0aGlzLl9jbGlja0hhbmRsZSA9IHZpZXcub24oXCJjbGlja1wiLCB0aGlzLm9uVmlld0NsaWNrKSBhcyBhbnk7XG4gIH1cblxuICBwcml2YXRlIGVuc3VyZU1hcENsaWNrQXR0YWNoZWQgPSAoKTogYm9vbGVhbiA9PiB7XG4gICAgaWYgKCF0aGlzLl9pc01vdW50ZWQpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBtYXBXaWRnZXRJZCA9IHRoaXMuZ2V0TGlua2VkTWFwV2lkZ2V0SWQoKTtcbiAgICBjb25zdCBqbXYgPVxuICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldz8udmlld1xuICAgICAgICA/IHRoaXMuc3RhdGUuamltdU1hcFZpZXdcbiAgICAgICAgOiB0aGlzLmdldE1hcFZpZXdGcm9tTWFuYWdlcihtYXBXaWRnZXRJZCk7XG4gICAgaWYgKCFqbXY/LnZpZXcpIHJldHVybiBmYWxzZTtcblxuICAgIGlmICghdGhpcy5zdGF0ZS5qaW11TWFwVmlldz8udmlldykge1xuICAgICAgdGhpcy5vbkFjdGl2ZVZpZXdDaGFuZ2Uoam12KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fY2xpY2tIYW5kbGUpIHtcbiAgICAgIHRoaXMuYXR0YWNoTWFwQ2xpY2soam12KTtcbiAgICB9XG4gICAgcmV0dXJuICEhdGhpcy5fY2xpY2tIYW5kbGU7XG4gIH07XG5cbiAgcHJpdmF0ZSBoYW5kbGVYeVBhZ2VDbG9zZWQgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKCF0aGlzLmlzRGFzaGJvYXJkRW1iZWRkZWQoKSkgcmV0dXJuO1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3dQb3B1cCkge1xuICAgICAgdGhpcy5jbG9zZVBvcHVwKHsgcmVzdG9yZUV4dGVudDogZmFsc2UsIG5vdGlmeURlc2VsZWN0OiBmYWxzZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENsb3NlIHRoZSBmaWVsZCBwb3B1cCB3aGVuIHRoZSBodWIgZ2VvZ3JhcGh5IG1vdmVzIChvdGhlciB0dW1hbiAvXG4gICAqIHZpbG95YXQgLyB5ZWFyKSBvciB3aGVuIHBvbHlnb24gZm9jdXMgaXMgY2xlYXJlZC4gRG8gbm90IHJlc3RvcmUgdGhlXG4gICAqIHByZS1maWVsZCBleHRlbnQgb24gZ2VvZ3JhcGh5IGNoYW5nZSDigJQgTG9jYWxpemF0aW9uIGlzIGFscmVhZHkgem9vbWluZ1xuICAgKiB0byB0aGUgbmV3IGRpc3RyaWN0L3JlZ2lvbi5cbiAgICovXG4gIHByaXZhdGUgaGFuZGxlTWFzdGVyRmlsdGVyQ2hhbmdlZCA9IChldmVudDogRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoIXRoaXMuX2lzTW91bnRlZCkgcmV0dXJuO1xuICAgIGNvbnN0IGRldGFpbDogYW55ID0gKGV2ZW50IGFzIEN1c3RvbUV2ZW50KS5kZXRhaWwgfHwge307XG4gICAgY29uc3QgZjogYW55ID0gZGV0YWlsLmZpbHRlcnMgfHwge307XG4gICAgY29uc3QgZ2VvS2V5ID0gYCR7U3RyaW5nKGYueWlsIHx8IFwiXCIpfXwke1N0cmluZyhmLnZpbG95YXQgfHwgXCJcIil9fCR7U3RyaW5nKGYudHVtYW4gfHwgXCJcIil9YDtcbiAgICBjb25zdCBwcmV2R2VvID0gdGhpcy5fbGFzdE1hc3Rlckdlb0tleTtcbiAgICB0aGlzLl9sYXN0TWFzdGVyR2VvS2V5ID0gZ2VvS2V5O1xuXG4gICAgY29uc3QgZ2VvQ2hhbmdlZCA9IEJvb2xlYW4ocHJldkdlbykgJiYgcHJldkdlbyAhPT0gZ2VvS2V5O1xuICAgIGNvbnN0IHBvbHlnb25DbGVhcmVkID0gZi5wb2x5Z29uTW9kZSA9PT0gZmFsc2U7XG4gICAgY29uc3QgaW5jb21pbmdVbmlxdWUgPSBTdHJpbmcoZi51bmlxdWVpZCB8fCBcIlwiKVxuICAgICAgLnJlcGxhY2UoL1t7fV0vZywgXCJcIilcbiAgICAgIC50cmltKCk7XG4gICAgaWYgKGYucG9seWdvbk1vZGUgPT09IHRydWUgJiYgaW5jb21pbmdVbmlxdWUpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZUluc3BlY3RlZFVuaXF1ZWlkID0gaW5jb21pbmdVbmlxdWU7XG4gICAgICAvLyBGYWxsYmFjazogaWYgc2VsZWN0aW9uIGFycml2ZWQgdmlhIGh1YiBidXQgcG9wdXAgaXMgc3RpbGwgY2xvc2VkLCBvcGVuIGl0LlxuICAgICAgaWYgKCF0aGlzLnN0YXRlLnNob3dQb3B1cCkge1xuICAgICAgICB2b2lkIHRoaXMub3BlblBvcHVwRm9yVW5pcXVlaWQoaW5jb21pbmdVbmlxdWUsIHtcbiAgICAgICAgICB6b29tOiBmYWxzZSxcbiAgICAgICAgICBub3RpZnlTZWxlY3Rpb246IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBvbHlnb25DbGVhcmVkKSB7XG4gICAgICB0aGlzLl9hY3RpdmVJbnNwZWN0ZWRVbmlxdWVpZCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGdlb0NoYW5nZWQpIHtcbiAgICAgIHRoaXMuY2xvc2VQb3B1cCh7IHJlc3RvcmVFeHRlbnQ6IGZhbHNlLCBub3RpZnlEZXNlbGVjdDogZmFsc2UgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFNhbWUgZ2VvZ3JhcGh5IGJ1dCBodWIgY2xlYXJlZCBwb2x5Z29uIGZvY3VzIChlLmcuIEdyYWZmIGRlc2VsZWN0KS5cbiAgICBpZiAocG9seWdvbkNsZWFyZWQgJiYgKHRoaXMuc3RhdGUuc2hvd1BvcHVwIHx8IHRoaXMuc3RhdGUubG9hZGluZykpIHtcbiAgICAgIHRoaXMuY2xvc2VQb3B1cCh7IHJlc3RvcmVFeHRlbnQ6IHRydWUsIG5vdGlmeURlc2VsZWN0OiBmYWxzZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqIEltbWVkaWF0ZSBjbG9zZSB3aGVuIFJlZ2lvbi9QaWUveWVhciBjaGFuZ2UgZ2VvZ3JhcGh5IChiZWZvcmUgbWFwIHN5bmMgZmluaXNoZXMpLiAqL1xuICBwcml2YXRlIGhhbmRsZVdpZGdldFNlbGVjdGlvbkNoYW5nZWQgPSAoZXZlbnQ6IEV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKCF0aGlzLl9pc01vdW50ZWQpIHJldHVybjtcbiAgICBjb25zdCBkOiBhbnkgPSAoZXZlbnQgYXMgQ3VzdG9tRXZlbnQpLmRldGFpbCB8fCB7fTtcbiAgICAvLyBPdXIgb3duIHBvbHlnb24gbm90aWZ5IG11c3Qgbm90IGNsb3NlIHRoZSBwb3B1cCB3ZSBqdXN0IG9wZW5lZC5cbiAgICBpZiAoZC5zb3VyY2UgPT09IFwiQWdyaVBvcHVwXCIpIHJldHVybjtcbiAgICBpZiAoXG4gICAgICBkLnlpbCAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICBkLnZpbG95YXQgIT09IHVuZGVmaW5lZCB8fFxuICAgICAgZC50dW1hbiAhPT0gdW5kZWZpbmVkXG4gICAgKSB7XG4gICAgICB0aGlzLmNsb3NlUG9wdXAoeyByZXN0b3JlRXh0ZW50OiBmYWxzZSwgbm90aWZ5RGVzZWxlY3Q6IGZhbHNlIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZC5wb2x5Z29uTW9kZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZUluc3BlY3RlZFVuaXF1ZWlkID0gbnVsbDtcbiAgICAgIHRoaXMuY2xvc2VQb3B1cCh7IHJlc3RvcmVFeHRlbnQ6IHRydWUsIG5vdGlmeURlc2VsZWN0OiBmYWxzZSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgKGQuc291cmNlID09PSBcIkFncmlHcmFmZldpZGdldFwiIHx8IGQuc291cmNlID09PSBcIkFncmlHcmFmZjEwXCIpICYmXG4gICAgICBkLnBvbHlnb25Nb2RlID09PSB0cnVlICYmXG4gICAgICBkLnVuaXF1ZWlkXG4gICAgKSB7XG4gICAgICBjb25zdCBjbGVhbiA9IFN0cmluZyhkLnVuaXF1ZWlkKVxuICAgICAgICAucmVwbGFjZSgvW3t9XS9nLCBcIlwiKVxuICAgICAgICAudHJpbSgpO1xuICAgICAgdGhpcy5fYWN0aXZlSW5zcGVjdGVkVW5pcXVlaWQgPSBjbGVhbjtcbiAgICAgIC8vIFRhYmxlIC8gR3JhZmYgc2VsZWN0aW9uIG11c3QgYWx3YXlzIG9wZW4gdGhlIGZpZWxkIHBvcHVwLlxuICAgICAgdm9pZCB0aGlzLm9wZW5Qb3B1cEZvclVuaXF1ZWlkKGNsZWFuLCB7XG4gICAgICAgIHpvb206IGZhbHNlLFxuICAgICAgICBub3RpZnlTZWxlY3Rpb246IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBPcGVuIChvciByZWZyZXNoKSB0aGUgZmllbGQgcG9wdXAgZm9yIGEgcG9seWdvbiB1bmlxdWVpZCDigJQgdXNlZCB3aGVuXG4gICAqIHNlbGVjdGlvbiBjb21lcyBmcm9tIHRoZSB0YWJsZS9HcmFmZiBwYXRoIChtYXAgY2xpY2sgYWxyZWFkeSBvcGVucyBpdHNlbGYpLlxuICAgKi9cbiAgcHJpdmF0ZSBvcGVuUG9wdXBGb3JVbmlxdWVpZCA9IGFzeW5jIChcbiAgICB1bmlxdWVpZDogc3RyaW5nLFxuICAgIG9wdHM/OiB7IHpvb20/OiBib29sZWFuOyBub3RpZnlTZWxlY3Rpb24/OiBib29sZWFuIH0sXG4gICk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IGNsZWFuID0gU3RyaW5nKHVuaXF1ZWlkIHx8IFwiXCIpXG4gICAgICAucmVwbGFjZSgvW3t9XS9nLCBcIlwiKVxuICAgICAgLnRyaW0oKTtcbiAgICBpZiAoIWNsZWFuIHx8ICF0aGlzLl9pc01vdW50ZWQpIHJldHVybjtcblxuICAgIGNvbnN0IGFjdGl2ZSA9IFN0cmluZyh0aGlzLl9hY3RpdmVJbnNwZWN0ZWRVbmlxdWVpZCB8fCBcIlwiKVxuICAgICAgLnJlcGxhY2UoL1t7fV0vZywgXCJcIilcbiAgICAgIC50cmltKCk7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvd1BvcHVwICYmIGFjdGl2ZSA9PT0gY2xlYW4gJiYgdGhpcy5zdGF0ZS5zZWxlY3RlZEF0dHJzKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5wb3B1cE1pbmltaXplZCkge1xuICAgICAgICB0aGlzLmV4cGFuZFBvcHVwKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmJyb2FkY2FzdFBvcHVwVmlzaWJpbGl0eSh0cnVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBqbXYgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3O1xuICAgIGNvbnN0IHZpZXcgPSBqbXY/LnZpZXc7XG4gICAgaWYgKCF2aWV3IHx8ICFqbXYpIHJldHVybjtcblxuICAgIGNvbnN0IGNsaWNrR2VuZXJhdGlvbiA9ICsrdGhpcy5fY2xpY2tHZW5lcmF0aW9uO1xuICAgIGNvbnN0IGlzU3RhbGUgPSAoKSA9PlxuICAgICAgIXRoaXMuX2lzTW91bnRlZCB8fCBjbGlja0dlbmVyYXRpb24gIT09IHRoaXMuX2NsaWNrR2VuZXJhdGlvbjtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIGVycm9yOiBudWxsLFxuICAgICAgbG9hZGluZ0F0dGFjaG1lbnRzOiB0cnVlLFxuICAgICAgYXR0YWNobWVudHM6IFtdLFxuICAgICAgYXR0YWNobWVudHNFeHBhbmRlZDogdHJ1ZSxcbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBsYXllcnMgPSBhd2FpdCB0aGlzLnJlc29sdmVDbGlja0xheWVycyh2aWV3LCBqbXYpO1xuICAgICAgaWYgKGlzU3RhbGUoKSkgcmV0dXJuO1xuXG4gICAgICBsZXQgZmVhdHVyZTogX19lc3JpLkdyYXBoaWMgfCBudWxsID0gbnVsbDtcbiAgICAgIGxldCBjbGlja2VkTGF5ZXI6IF9fZXNyaS5GZWF0dXJlTGF5ZXIgfCBudWxsID0gbnVsbDtcblxuICAgICAgZm9yIChjb25zdCBsYXllciBvZiBsYXllcnMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQWdyaWN1bHR1cmFsRmllbGRMYXllcihsYXllcikpIGNvbnRpbnVlO1xuICAgICAgICBpZiAoIXRoaXMuaXNMYXllckVmZmVjdGl2ZWx5VmlzaWJsZShsYXllciwgdmlldykpIGNvbnRpbnVlO1xuICAgICAgICBjb25zdCBkZXRhY2hlZCA9IGF3YWl0IHRoaXMuZ2V0RGV0YWNoZWRRdWVyeUxheWVyKGxheWVyKTtcbiAgICAgICAgaWYgKGlzU3RhbGUoKSkgcmV0dXJuO1xuICAgICAgICBjb25zdCBxdWVyeVRhcmdldCA9IGRldGFjaGVkIHx8IGxheWVyO1xuICAgICAgICBjb25zdCB2YXJpYW50cyA9IFtjbGVhbiwgYHske2NsZWFufX1gXTtcbiAgICAgICAgZm9yIChjb25zdCB2IG9mIHZhcmlhbnRzKSB7XG4gICAgICAgICAgY29uc3QgcSA9IHF1ZXJ5VGFyZ2V0LmNyZWF0ZVF1ZXJ5KCk7XG4gICAgICAgICAgcS5vdXRGaWVsZHMgPSBbXCIqXCJdO1xuICAgICAgICAgIHEucmV0dXJuR2VvbWV0cnkgPSB0cnVlO1xuICAgICAgICAgIHEubnVtID0gMTtcbiAgICAgICAgICBjb25zdCBlc2NhcGVkID0gU3RyaW5nKHYpLnJlcGxhY2UoLycvZywgXCInJ1wiKTtcbiAgICAgICAgICBxLndoZXJlID0gYCR7QUdSSV9UQUJMRV9KT0lOX0ZJRUxEfT0nJHtlc2NhcGVkfSdgO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBxdWVyeVRhcmdldC5xdWVyeUZlYXR1cmVzKHEpO1xuICAgICAgICAgICAgaWYgKHJlcy5mZWF0dXJlcz8uWzBdKSB7XG4gICAgICAgICAgICAgIGZlYXR1cmUgPSByZXMuZmVhdHVyZXNbMF07XG4gICAgICAgICAgICAgIGNsaWNrZWRMYXllciA9IGxheWVyO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIC8qIHRyeSBuZXh0IHZhcmlhbnQgLyBsYXllciAqL1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZmVhdHVyZSkgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmICghZmVhdHVyZSB8fCAhY2xpY2tlZExheWVyIHx8IGlzU3RhbGUoKSkge1xuICAgICAgICBpZiAoIWlzU3RhbGUoKSkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBsb2FkaW5nQXR0YWNobWVudHM6IGZhbHNlLFxuICAgICAgICAgICAgYXR0YWNobWVudHM6IFtdLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbGl2ZUxheWVyID1cbiAgICAgICAgKHRoaXMudG9MaXZlTWFwTGF5ZXIoY2xpY2tlZExheWVyLCB2aWV3Lm1hcCkgfHxcbiAgICAgICAgICBjbGlja2VkTGF5ZXIpIGFzIF9fZXNyaS5GZWF0dXJlTGF5ZXI7XG4gICAgICBjb25zdCBsYXllcktleSA9XG4gICAgICAgIGdldEFncmlMYXllck1hcEtleShsaXZlTGF5ZXIpIHx8XG4gICAgICAgIFN0cmluZyhsaXZlTGF5ZXI/LnVybCB8fCBsaXZlTGF5ZXI/LmlkIHx8IFwiXCIpO1xuICAgICAgY29uc3QgZHNJZCA9IHRoaXMuc3RhdGUubGF5ZXJLZXlUb0RzSWQ/LltsYXllcktleV0gfHwgbnVsbDtcbiAgICAgIGNvbnN0IG9pZEZpZWxkID1cbiAgICAgICAgbGl2ZUxheWVyLm9iamVjdElkRmllbGQgfHxcbiAgICAgICAgbGl2ZUxheWVyLmZpZWxkcz8uZmluZCgoZjogYW55KSA9PiBmLnR5cGUgPT09IFwib2lkXCIpPy5uYW1lIHx8XG4gICAgICAgIG51bGw7XG4gICAgICBpZiAoIW9pZEZpZWxkKSB7XG4gICAgICAgIGlmICghaXNTdGFsZSgpKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGxvYWRpbmdBdHRhY2htZW50czogZmFsc2UsXG4gICAgICAgICAgICBzaG93UG9wdXA6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb2lkID0gZmVhdHVyZS5hdHRyaWJ1dGVzPy5bb2lkRmllbGRdO1xuICAgICAgaWYgKG9pZCA9PSBudWxsKSB7XG4gICAgICAgIGlmICghaXNTdGFsZSgpKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGxvYWRpbmdBdHRhY2htZW50czogZmFsc2UsXG4gICAgICAgICAgICBzaG93UG9wdXA6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb3V0RmllbGRzID0gdGhpcy5nZXRPdXRGaWVsZHMobGl2ZUxheWVyIGFzIGFueSwgb2lkRmllbGQpO1xuICAgICAgY29uc3QgZiA9XG4gICAgICAgIChhd2FpdCB0aGlzLnF1ZXJ5RmVhdHVyZUJ5T2JqZWN0SWRDYWNoZWQoXG4gICAgICAgICAgbGl2ZUxheWVyLFxuICAgICAgICAgIG9pZEZpZWxkLFxuICAgICAgICAgIG9pZCxcbiAgICAgICAgICBvdXRGaWVsZHMsXG4gICAgICAgICkpIHx8IGZlYXR1cmU7XG4gICAgICBpZiAoaXNTdGFsZSgpKSByZXR1cm47XG5cbiAgICAgIGlmIChmLmdlb21ldHJ5KSB0aGlzLmhpZ2hsaWdodFBvbHlnb24oZi5nZW9tZXRyeSk7XG5cbiAgICAgIGNvbnN0IGRpc3BsYXlBdHRycyA9IGF3YWl0IHRoaXMucmVzb2x2ZURpc3BsYXlBdHRycyhmLmF0dHJpYnV0ZXMpO1xuICAgICAgaWYgKGlzU3RhbGUoKSkgcmV0dXJuO1xuXG4gICAgICBjb25zdCBzaG91bGRQaW4gPSB0aGlzLnN0YXRlLnBpblRvQ29ybmVyO1xuICAgICAgY29uc3QgcG9wdXBQb3NpdGlvbiA9IHNob3VsZFBpblxuICAgICAgICA/IHRoaXMuY2FsY3VsYXRlUGlubmVkUG9zaXRpb24odmlldylcbiAgICAgICAgOiB0aGlzLnN0YXRlLnBvcHVwUG9zaXRpb24gfHwgdGhpcy5jYWxjdWxhdGVQaW5uZWRQb3NpdGlvbih2aWV3KTtcblxuICAgICAgY29uc3QgY29uZmlndXJlZEZpZWxkcyA9IHRoaXMucHJvcHMuY29uZmlnPy5maWVsZHNUb1Nob3cgfHwgW107XG4gICAgICBjb25zdCBhY3R1YWxGaWVsZHMgPSBPYmplY3Qua2V5cyhkaXNwbGF5QXR0cnMpO1xuICAgICAgY29uc3QgbWlzc2luZ0ZpZWxkcyA9IGNvbmZpZ3VyZWRGaWVsZHMuZmlsdGVyKFxuICAgICAgICAoZmllbGQpID0+ICFhY3R1YWxGaWVsZHMuaW5jbHVkZXMoZmllbGQpLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGZpZWxkc1dpdGhEYXRhID0gY29uZmlndXJlZEZpZWxkcy5maWx0ZXIoXG4gICAgICAgIChuYW1lKSA9PlxuICAgICAgICAgIGRpc3BsYXlBdHRycy5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJlxuICAgICAgICAgIGRpc3BsYXlBdHRyc1tuYW1lXSAhPSBudWxsICYmXG4gICAgICAgICAgZGlzcGxheUF0dHJzW25hbWVdICE9PSBcIlwiLFxuICAgICAgKTtcblxuICAgICAgdGhpcy5fYWN0aXZlSW5zcGVjdGVkVW5pcXVlaWQgPSBjbGVhbjtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgbGFzdENsaWNrZWREc0lkOiBkc0lkLFxuICAgICAgICBsYXN0Q2xpY2tlZExheWVyS2V5OiBsYXllcktleSxcbiAgICAgICAgc2VsZWN0ZWRBdHRyczogZGlzcGxheUF0dHJzLFxuICAgICAgICBzZWxlY3RlZE9JRDogTnVtYmVyKG9pZCksXG4gICAgICAgIG9iamVjdElkRmllbGQ6IG9pZEZpZWxkLFxuICAgICAgICBzaG93UG9wdXA6IHRydWUsXG4gICAgICAgIHBvcHVwTWluaW1pemVkOiBmYWxzZSxcbiAgICAgICAgY2hhcnRFeHBhbmRlZDogc2hvdWxkUGluLFxuICAgICAgICBjaGFydEhvdmVySW5kZXg6IG51bGwsXG4gICAgICAgIHBvcHVwUG9zaXRpb24sXG4gICAgICAgIGVycm9yOlxuICAgICAgICAgIG1pc3NpbmdGaWVsZHMubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyB0aGlzLnRyKFwiZXJyb3IuY29uZmlndXJlZEZpZWxkTWlzc2luZ1wiLCB7XG4gICAgICAgICAgICAgICAgZmllbGRzOiBtaXNzaW5nRmllbGRzLmpvaW4oXCIsIFwiKSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogZmllbGRzV2l0aERhdGEubGVuZ3RoID09PSAwICYmIGNvbmZpZ3VyZWRGaWVsZHMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICA/IHRoaXMudHIoXCJlcnJvci5ub0RhdGFGb3JDb25maWd1cmVkRmllbGRzXCIpXG4gICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAob3B0cz8ubm90aWZ5U2VsZWN0aW9uKSB7XG4gICAgICAgIHRoaXMubm90aWZ5R3JhZmZQb2x5Z29uU2VsZWN0aW9uKGNsZWFuLCB0cnVlLCBEYXRlLm5vdygpKTtcbiAgICAgIH1cbiAgICAgIHZvaWQgdGhpcy5mZXRjaExhdGVzdFZlZ2V0YXRpb25JbmRpY2VzKGNsZWFuKTtcblxuICAgICAgaWYgKG9wdHM/Lnpvb20gIT09IGZhbHNlICYmIGYuZ2VvbWV0cnkgJiYgIWlzU3RhbGUoKSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghdGhpcy5fZXh0ZW50QmVmb3JlU2VsZWN0aW9uICYmIHZpZXcuZXh0ZW50Py5jbG9uZSkge1xuICAgICAgICAgICAgdGhpcy5fZXh0ZW50QmVmb3JlU2VsZWN0aW9uID0gdmlldy5leHRlbnQuY2xvbmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID1cbiAgICAgICAgICAgIChmLmdlb21ldHJ5IGFzIGFueSkuZXh0ZW50Py5leHBhbmQ/LigxLjA4KSB8fCBmLmdlb21ldHJ5O1xuICAgICAgICAgIHZvaWQgdmlldy5nb1RvKFxuICAgICAgICAgICAgeyB0YXJnZXQgfSxcbiAgICAgICAgICAgIHsgZHVyYXRpb246IDY1MCwgZWFzaW5nOiBcImVhc2UtaW4tb3V0XCIgYXMgYW55IH0sXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgLyogaWdub3JlICovXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMuY29uZmlnPy5zZXR0aW5ncz8uc2hvd0F0dGFjaG1lbnRzICE9PSBmYWxzZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGNsaWNrZWRVcmwgPSBTdHJpbmcoKGxpdmVMYXllciBhcyBhbnkpLnVybCB8fCBcIlwiKS50cmltKCk7XG4gICAgICAgICAgY29uc3QgYXR0YWNobWVudExheWVyID1cbiAgICAgICAgICAgIChjbGlja2VkVXJsICYmIHRoaXMuX3F1ZXJ5T25seUxheWVycy5nZXQoY2xpY2tlZFVybCkpIHx8IGxpdmVMYXllcjtcbiAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRBdHRhY2htZW50c0Zvck9pZChhdHRhY2htZW50TGF5ZXIgYXMgYW55LCBOdW1iZXIob2lkKSk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIGlmICghaXNTdGFsZSgpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZ0F0dGFjaG1lbnRzOiBmYWxzZSwgYXR0YWNobWVudHM6IFtdIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghaXNTdGFsZSgpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nQXR0YWNobWVudHM6IGZhbHNlLCBhdHRhY2htZW50czogW10gfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNTdGFsZSgpKSB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVQb3B1cExheW91dEFmdGVyQ29udGVudCgpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgaWYgKCFpc1N0YWxlKCkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgbG9hZGluZ0F0dGFjaG1lbnRzOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogZT8ubWVzc2FnZSB8fCBTdHJpbmcoZSksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIGhhbmRsZVNoYXJlZE1hcENsaWNrID0gYXN5bmMgKGV2ZW50OiBFdmVudCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIC8vIEFsd2F5cyBpZ25vcmUgdGhlIExvY2FsaXphdGlvbiBjbGljayBidXMuIEFncmlQb3B1cCBvd25zIHZpZXcub24oXCJjbGlja1wiKVxuICAgIC8vIGV4Y2x1c2l2ZWx5IOKAlCBoYW5kbGluZyBib3RoIHJhY2VzIHR3byBmdWxsIG9uVmlld0NsaWNrIGNoYWluczogdGhlIGxvc2VyXG4gICAgLy8gb2Z0ZW4gY2xlYXJzIHNob3dQb3B1cCwgcmVzdG9yZXMgdGhlIHByZS1zZWxlY3Rpb24gZXh0ZW50LCBhbmQgZmxhc2hlc1xuICAgIC8vIG90aGVyLWRpc3RyaWN0IGZpZWxkcy4gTG9jYWxpemF0aW9uIG1heSBzdGlsbCBkaXNwYXRjaCBmb3Igb3RoZXIgbGlzdGVuZXJzLlxuICAgIGFncmlNYXBDbGlja0RlYnVnKFxuICAgICAgXCJBZ3JpUG9seWdvbiDihpAgc2hhcmVkIG1hcC1jbGljayBTS0lQIChkaXJlY3QgdmlldyBjbGljayBpcyBzb2xlIG93bmVyKVwiLFxuICAgICk7XG4gICAgcmV0dXJuO1xuICB9O1xuXG4gIHByaXZhdGUgZGV0YWNoTWFwQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuX2NsaWNrSGFuZGxlPy5yZW1vdmUpIHRoaXMuX2NsaWNrSGFuZGxlLnJlbW92ZSgpO1xuICAgIHRoaXMuX2NsaWNrSGFuZGxlID0gbnVsbDtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0gQ2xpY2sg4oaSIGhpdFRlc3Qg4oaSIHF1ZXJ5IGZ1bGwgYXR0cnMgLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gIHByaXZhdGUgdG9DbGlja1F1ZXJ5R2VvbWV0cnkgPSAoXG4gICAgdmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LFxuICAgIHNjcmVlblBvaW50OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sXG4gICAgbWFwUG9pbnQ/OiB7IHg/OiBudW1iZXI7IHk/OiBudW1iZXI7IHNwYXRpYWxSZWZlcmVuY2U/OiB7IHdraWQ/OiBudW1iZXIgfSB9LFxuICApOiBfX2VzcmkuUG9pbnQgfCBudWxsID0+IHtcbiAgICBpZiAodHlwZW9mIHZpZXcudG9NYXAgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZnJvbVZpZXcgPSB2aWV3LnRvTWFwKHNjcmVlblBvaW50KTtcbiAgICAgICAgaWYgKGZyb21WaWV3KSByZXR1cm4gZnJvbVZpZXcgYXMgX19lc3JpLlBvaW50O1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8qIGlnbm9yZSAqL1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB4ID0gTnVtYmVyKG1hcFBvaW50Py54KTtcbiAgICBjb25zdCB5ID0gTnVtYmVyKG1hcFBvaW50Py55KTtcbiAgICBpZiAoIU51bWJlci5pc0Zpbml0ZSh4KSB8fCAhTnVtYmVyLmlzRmluaXRlKHkpKSByZXR1cm4gbnVsbDtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIG5ldyBQb2ludCh7XG4gICAgICAgIHgsXG4gICAgICAgIHksXG4gICAgICAgIHNwYXRpYWxSZWZlcmVuY2U6XG4gICAgICAgICAgbWFwUG9pbnQ/LnNwYXRpYWxSZWZlcmVuY2UgfHwgKHZpZXcgYXMgYW55KS5zcGF0aWFsUmVmZXJlbmNlLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBmaW5kSGl0R3JhcGhpYyA9IChcbiAgICBoaXQ6IF9fZXNyaS5IaXRUZXN0UmVzdWx0IHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgICBsYXllcnM6IF9fZXNyaS5GZWF0dXJlTGF5ZXJbXSxcbiAgKTogX19lc3JpLkdyYXBoaWMgfCBudWxsID0+IHtcbiAgICBjb25zdCBoaXRSZXN1bHQgPSBoaXQ/LnJlc3VsdHM/LmZpbmQoKHIpID0+IHtcbiAgICAgIGlmIChcImdyYXBoaWNcIiBpbiByICYmIHIuZ3JhcGhpYykge1xuICAgICAgICBjb25zdCBseXI6IGFueSA9IHIuZ3JhcGhpYy5sYXllcjtcbiAgICAgICAgaWYgKCFseXIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGxheWVycy5zb21lKChMKSA9PiB0aGlzLmxheWVyS2V5c01hdGNoKEwsIGx5cikpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIHJldHVybiBoaXRSZXN1bHQgJiYgXCJncmFwaGljXCIgaW4gaGl0UmVzdWx0ID8gaGl0UmVzdWx0LmdyYXBoaWMgOiBudWxsO1xuICB9O1xuXG4gIHByaXZhdGUgcGlja0NsaWNrR3JhcGhpYyA9IChcbiAgICBoaXQ6IF9fZXNyaS5IaXRUZXN0UmVzdWx0IHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgICBwcmVmZXJyZWRMYXllcnM6IF9fZXNyaS5GZWF0dXJlTGF5ZXJbXSxcbiAgKTogX19lc3JpLkdyYXBoaWMgfCBudWxsID0+IHtcbiAgICBjb25zdCBhY3RpdmVWaWV3ID0gdGhpcy5zdGF0ZS5qaW11TWFwVmlldz8udmlldztcbiAgICBjb25zdCBtYXAgPSBhY3RpdmVWaWV3Py5tYXA7XG4gICAgY29uc3QgY2FuZGlkYXRlczogX19lc3JpLkdyYXBoaWNbXSA9IFtdO1xuICAgIGNvbnN0IHJlc3RyaWN0VG9QcmVmZXJyZWQgPSBwcmVmZXJyZWRMYXllcnMubGVuZ3RoID4gMDtcblxuICAgIGZvciAoY29uc3QgciBvZiBoaXQ/LnJlc3VsdHMgfHwgW10pIHtcbiAgICAgIGlmICghciB8fCB0eXBlb2YgciAhPT0gXCJvYmplY3RcIikgY29udGludWU7XG4gICAgICBjb25zdCBncmFwaGljID1cbiAgICAgICAgXCJncmFwaGljXCIgaW4gciAmJiAociBhcyBhbnkpLmdyYXBoaWNcbiAgICAgICAgICA/ICgociBhcyBhbnkpLmdyYXBoaWMgYXMgX19lc3JpLkdyYXBoaWMpXG4gICAgICAgICAgOiBudWxsO1xuICAgICAgaWYgKCFncmFwaGljKSBjb250aW51ZTtcblxuICAgICAgY29uc3QgcmF3TGF5ZXI6IGFueSA9IGdyYXBoaWMubGF5ZXI7XG4gICAgICBpZiAodGhpcy5pc0hpZ2hsaWdodExheWVyKHJhd0xheWVyKSkgY29udGludWU7XG5cbiAgICAgIGNvbnN0IGxheWVyID0gdGhpcy50b0xpdmVNYXBMYXllcihcbiAgICAgICAgZ2V0UXVlcnlhYmxlTGF5ZXIocmF3TGF5ZXIpIHx8IHJhd0xheWVyLFxuICAgICAgICBtYXAsXG4gICAgICApO1xuICAgICAgaWYgKCFsYXllciB8fCAhdGhpcy5pc0FncmljdWx0dXJhbEZpZWxkTGF5ZXIobGF5ZXIpKSBjb250aW51ZTtcbiAgICAgIGlmICghYWN0aXZlVmlldyB8fCAhdGhpcy5pc0xheWVyRWZmZWN0aXZlbHlWaXNpYmxlKGxheWVyLCBhY3RpdmVWaWV3KSkgY29udGludWU7XG4gICAgICBpZiAoIXRoaXMuaXNBZ3JpY3VsdHVyYWxGaWVsZEdyYXBoaWMoZ3JhcGhpYywgbGF5ZXIpKSBjb250aW51ZTtcbiAgICAgIGlmIChcbiAgICAgICAgcmVzdHJpY3RUb1ByZWZlcnJlZCAmJlxuICAgICAgICAhcHJlZmVycmVkTGF5ZXJzLnNvbWUoKEwpID0+IHRoaXMubGF5ZXJLZXlzTWF0Y2goTCwgbGF5ZXIpKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBnZW9tVHlwZSA9IFN0cmluZyhncmFwaGljLmdlb21ldHJ5Py50eXBlIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjb25zdCBpc1BvbHlnb25MaWtlID1cbiAgICAgICAgIWdlb21UeXBlIHx8IGdlb21UeXBlID09PSBcInBvbHlnb25cIiB8fCBnZW9tVHlwZSA9PT0gXCJtdWx0aXBvbHlnb25cIjtcbiAgICAgIGNvbnN0IGhhc0F0dHJpYnV0ZXMgPVxuICAgICAgICAhIWdyYXBoaWMuYXR0cmlidXRlcyAmJiBPYmplY3Qua2V5cyhncmFwaGljLmF0dHJpYnV0ZXMpLmxlbmd0aCA+IDA7XG5cbiAgICAgIGlmIChnZW9tVHlwZSAmJiAhaXNQb2x5Z29uTGlrZSkgY29udGludWU7XG4gICAgICBpZiAoIWhhc0F0dHJpYnV0ZXMgJiYgIWdyYXBoaWMuZ2VvbWV0cnkpIGNvbnRpbnVlO1xuXG4gICAgICBjYW5kaWRhdGVzLnB1c2goZ3JhcGhpYyk7XG4gICAgfVxuXG4gICAgaWYgKCFjYW5kaWRhdGVzLmxlbmd0aCkgcmV0dXJuIG51bGw7XG5cbiAgICBpZiAocmVzdHJpY3RUb1ByZWZlcnJlZCkge1xuICAgICAgZm9yIChjb25zdCBncmFwaGljIG9mIGNhbmRpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgbGF5ZXIgPSB0aGlzLnRvTGl2ZU1hcExheWVyKFxuICAgICAgICAgIGdldFF1ZXJ5YWJsZUxheWVyKGdyYXBoaWMubGF5ZXIpIHx8IGdyYXBoaWMubGF5ZXIsXG4gICAgICAgICAgbWFwLFxuICAgICAgICApO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgbGF5ZXIgJiZcbiAgICAgICAgICBwcmVmZXJyZWRMYXllcnMuc29tZSgoTCkgPT4gdGhpcy5sYXllcktleXNNYXRjaChMLCBsYXllcikpICYmXG4gICAgICAgICAgKGxheWVyIGFzIGFueSkudmlzaWJsZSAhPT0gZmFsc2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGdyYXBoaWM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgZ3JhcGhpYyBvZiBjYW5kaWRhdGVzKSB7XG4gICAgICBjb25zdCBsYXllcjogYW55ID0gZ3JhcGhpYy5sYXllcjtcbiAgICAgIGlmIChsYXllcj8udmlzaWJsZSAhPT0gZmFsc2UpIHJldHVybiBncmFwaGljO1xuICAgIH1cblxuICAgIHJldHVybiBjYW5kaWRhdGVzWzBdO1xuICB9O1xuXG4gIHByaXZhdGUgaXNIaWdobGlnaHRMYXllcihsYXllcjogYW55KTogYm9vbGVhbiB7XG4gICAgY29uc3QgaWQgPSBTdHJpbmcobGF5ZXI/LmlkIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgdGl0bGUgPSBTdHJpbmcobGF5ZXI/LnRpdGxlIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIGlkID09PSBcImFncmktcG9seWdvbi1oaWdobGlnaHRcIiB8fFxuICAgICAgdGl0bGUuaW5jbHVkZXMoXCJzZWxlY3RlZCBwb2x5Z29uIGhpZ2hsaWdodFwiKSB8fFxuICAgICAgdGl0bGUuaW5jbHVkZXMoXCJza2V0Y2hcIik7XG4gIH1cblxuICAvKiogQSBzdWJsYXllciBpcyBjbGlja2FibGUgb25seSB3aGVuIGl0IGFuZCBldmVyeSBwYXJlbnQgYXJlIHZpc2libGUuICovXG4gIHByaXZhdGUgaXNMYXllckVmZmVjdGl2ZWx5VmlzaWJsZShcbiAgICBsYXllcjogYW55LFxuICAgIHZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldyxcbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKCFsYXllciB8fCB0aGlzLmlzSGlnaGxpZ2h0TGF5ZXIobGF5ZXIpKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3Qgc2VlbiA9IG5ldyBTZXQ8YW55PigpO1xuICAgIGxldCBjdXJyZW50OiBhbnkgPSBsYXllcjtcbiAgICB3aGlsZSAoY3VycmVudCAmJiAhc2Vlbi5oYXMoY3VycmVudCkpIHtcbiAgICAgIHNlZW4uYWRkKGN1cnJlbnQpO1xuICAgICAgaWYgKGN1cnJlbnQudmlzaWJsZSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudCB8fCBjdXJyZW50LmxheWVyIHx8IG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHNjYWxlID0gTnVtYmVyKCh2aWV3IGFzIGFueSk/LnNjYWxlIHx8IDApO1xuICAgIGNvbnN0IG1pblNjYWxlID0gTnVtYmVyKGxheWVyLm1pblNjYWxlIHx8IDApO1xuICAgIGNvbnN0IG1heFNjYWxlID0gTnVtYmVyKGxheWVyLm1heFNjYWxlIHx8IDApO1xuICAgIGlmIChzY2FsZSA+IDAgJiYgbWluU2NhbGUgPiAwICYmIHNjYWxlID4gbWluU2NhbGUpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoc2NhbGUgPiAwICYmIG1heFNjYWxlID4gMCAmJiBzY2FsZSA8IG1heFNjYWxlKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIFN0cmluZyhsYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiB8fCBcIjE9MVwiKS50cmltKCkgIT09IFwiMT0wXCI7XG4gIH1cblxuICBwcml2YXRlIGlzQWdyaWN1bHR1cmFsRmllbGRMYXllcihsYXllcjogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKCFsYXllcikgcmV0dXJuIGZhbHNlO1xuICAgIC8vIEdyb3VwIExheWVyIGZvbGRlcnMgYXJlIG5vdCBmaWVsZCBwb2x5Z29ucyDigJQgbmV2ZXIgYWNjZXB0IHRoZW0gZm9yIGNsaWNrLlxuICAgIGlmIChpc01hcEltYWdlR3JvdXBTdWJsYXllcihsYXllcikpIHJldHVybiBmYWxzZTtcbiAgICAvLyBQcmVmZXIgcXVlcnlhYmxlIGxheWVycywgYnV0IHRpdGxlL3VybCBpZGVudGl0eSBpcyBlbm91Z2ggdG8gYWNjZXB0IGFcbiAgICAvLyBsaXZlIE1hcEltYWdlIGxlYWYgdGhhdCBpcyBzdGlsbCBoeWRyYXRpbmcgaXRzIHF1ZXJ5IG1ldGhvZHMuXG4gICAgY29uc3QgaWRlbnRpdHkgPSBgJHtsYXllci50aXRsZSB8fCBcIlwifSAke2xheWVyLnVybCB8fCBcIlwifSAke2xheWVyLnBhcmVudD8udGl0bGUgfHwgXCJcIn1gLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgbG9va3NBZ3JpID0gL1xcYmFncmlcXGJ8YWdyaWN1bHR1cmV8cWlzaGxvcS8udGVzdChpZGVudGl0eSk7XG4gICAgaWYgKCFpc1F1ZXJ5YWJsZUZpZWxkTGF5ZXIobGF5ZXIpICYmICFsb29rc0FncmkpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBnZW9tZXRyeVR5cGUgPSBTdHJpbmcobGF5ZXIuZ2VvbWV0cnlUeXBlIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGdlb21ldHJ5VHlwZSAmJiBnZW9tZXRyeVR5cGUgIT09IFwicG9seWdvblwiKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgZmllbGRzOiBhbnlbXSA9IEFycmF5LmlzQXJyYXkobGF5ZXIuZmllbGRzKSA/IGxheWVyLmZpZWxkcyA6IFtdO1xuICAgIGNvbnN0IG5hbWVzID0gbmV3IFNldChmaWVsZHMubWFwKChmaWVsZCkgPT4gU3RyaW5nKGZpZWxkPy5uYW1lIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCkpKTtcbiAgICBpZiAobmFtZXMuaGFzKFwidW5pcXVlaWRcIikgfHwgbmFtZXMuaGFzKFwiY3JvcF9pZFwiKSB8fCBuYW1lcy5oYXMoXCJ0dXJpXCIpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBsb29rc0FncmkgYWxvbmUgaXMgT0sgZm9yIGEgaHlkcmF0aW5nIGxlYWY7IGdyb3VwcyBhbHJlYWR5IHJlamVjdGVkIGFib3ZlLlxuICAgIHJldHVybiBsb29rc0Fncmk7XG4gIH1cblxuICBwcml2YXRlIGlzQWdyaWN1bHR1cmFsRmllbGRHcmFwaGljKGdyYXBoaWM6IF9fZXNyaS5HcmFwaGljLCBsYXllcjogYW55KTogYm9vbGVhbiB7XG4gICAgY29uc3QgZ2VvbWV0cnlUeXBlID0gU3RyaW5nKGdyYXBoaWM/Lmdlb21ldHJ5Py50eXBlIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGdlb21ldHJ5VHlwZSAmJiBnZW9tZXRyeVR5cGUgIT09IFwicG9seWdvblwiICYmIGdlb21ldHJ5VHlwZSAhPT0gXCJtdWx0aXBvbHlnb25cIikgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IGF0dHJzID0gZ3JhcGhpYz8uYXR0cmlidXRlcyB8fCB7fTtcbiAgICBjb25zdCBrZXlzID0gbmV3IFNldChPYmplY3Qua2V5cyhhdHRycykubWFwKChrZXkpID0+IGtleS50b0xvd2VyQ2FzZSgpKSk7XG4gICAgcmV0dXJuIGtleXMuaGFzKFwidW5pcXVlaWRcIikgfHwga2V5cy5oYXMoXCJjcm9wX2lkXCIpIHx8IGtleXMuaGFzKFwidHVyaVwiKSB8fFxuICAgICAgdGhpcy5pc0FncmljdWx0dXJhbEZpZWxkTGF5ZXIobGF5ZXIpO1xuICB9XG4gIHByaXZhdGUgZ2V0Q2xpY2tUYXJnZXRMYXllcnMoXG4gICAgdmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LFxuICApOiBfX2VzcmkuRmVhdHVyZUxheWVyW10ge1xuICAgIGNvbnN0IHsgZmVhdHVyZUxheWVycywgbGF5ZXJLZXlUb0RzSWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZHNLZXlzID0gT2JqZWN0LmtleXMobGF5ZXJLZXlUb0RzSWQgfHwge30pO1xuICAgIGNvbnN0IG1hcCA9IHZpZXcubWFwO1xuICAgIGNvbnN0IGNvbmZpZ3VyZWRMYXllcnMgPSBmZWF0dXJlTGF5ZXJzIHx8IFtdO1xuICAgIGNvbnN0IGxpdmVSb290cyA9XG4gICAgICAoKG1hcCBhcyBhbnkpPy5hbGxMYXllcnM/LnRvQXJyYXk/LigpIGFzIGFueVtdKSB8fCBbXTtcbiAgICAvLyBNYXBJbWFnZSBwYXJlbnRzIGFyZSBub3QgcXVlcnlhYmxlIOKAlCBleHBhbmQgdG8gYWdyaS9mZWF0dXJlIHN1YmxheWVycy5cbiAgICBjb25zdCBsaXZlTWFwTGF5ZXJzOiBfX2VzcmkuRmVhdHVyZUxheWVyW10gPSBbXTtcbiAgICBjb25zdCBzZWVuID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgY29uc3QgcHVzaExpdmUgPSAobGF5ZXI6IGFueSkgPT4ge1xuICAgICAgaWYgKCFsYXllciB8fCAhaXNRdWVyeWFibGVGaWVsZExheWVyKGxheWVyKSkgcmV0dXJuO1xuICAgICAgY29uc3Qga2V5ID1cbiAgICAgICAgZ2V0QWdyaUxheWVyTWFwS2V5KGxheWVyKSB8fFxuICAgICAgICBTdHJpbmcobGF5ZXIudXJsIHx8IGxheWVyLmlkIHx8IFwiXCIpO1xuICAgICAgaWYgKCFrZXkgfHwgc2Vlbi5oYXMoa2V5KSkgcmV0dXJuO1xuICAgICAgc2Vlbi5hZGQoa2V5KTtcbiAgICAgIGxpdmVNYXBMYXllcnMucHVzaChsYXllciBhcyBfX2VzcmkuRmVhdHVyZUxheWVyKTtcbiAgICB9O1xuICAgIGZvciAoY29uc3Qgcm9vdCBvZiBsaXZlUm9vdHMpIHtcbiAgICAgIC8vIFdhbGsgZ3JvdXBzIGZ1bGx5IOKAlCBuZXZlciBwdXNoIHRoZSBHcm91cCBMYXllciBub2RlIGl0c2VsZlxuICAgICAgLy8gKEZlYXR1cmVMYXllciNsb2FkIGZhaWxzIHdpdGggdW5zdXBwb3J0ZWQtdHlwZSBcIkdyb3VwIExheWVyXCIpLlxuICAgICAgZm9yIChjb25zdCBsZWFmIG9mIGNvbGxlY3RRdWVyeWFibGVGaWVsZExheWVycyhyb290KSkge1xuICAgICAgICBwdXNoTGl2ZShsZWFmKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjYW5kaWRhdGVzID0gQXJyYXkuZnJvbShcbiAgICAgIG5ldyBTZXQ8X19lc3JpLkZlYXR1cmVMYXllcj4oW1xuICAgICAgICAuLi5jb25maWd1cmVkTGF5ZXJzLFxuICAgICAgICAuLi5saXZlTWFwTGF5ZXJzLFxuICAgICAgXSksXG4gICAgKTtcblxuICAgIHJldHVybiBjYW5kaWRhdGVzXG4gICAgICAubWFwKChsYXllcikgPT4gdGhpcy50b0xpdmVNYXBMYXllcihsYXllciwgbWFwKSB8fCBsYXllcilcbiAgICAgIC5maWx0ZXIoKGxheWVyOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmlzTGF5ZXJFZmZlY3RpdmVseVZpc2libGUobGF5ZXIsIHZpZXcpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICghdGhpcy5pc0FncmljdWx0dXJhbEZpZWxkTGF5ZXIobGF5ZXIpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IGtleSA9XG4gICAgICAgICAgZ2V0QWdyaUxheWVyTWFwS2V5KGxheWVyKSB8fFxuICAgICAgICAgIFN0cmluZyhsYXllci51cmwgfHwgbGF5ZXIuaWQgfHwgXCJcIik7XG4gICAgICAgIGlmICh0aGlzLmlzRGFzaGJvYXJkRW1iZWRkZWQoKSkgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmICghZHNLZXlzLmxlbmd0aCkgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiAhIWxheWVyS2V5VG9Ec0lkW2tleV07XG4gICAgICB9KSBhcyBfX2VzcmkuRmVhdHVyZUxheWVyW107XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlc29sdmVDbGlja0xheWVycyhcbiAgICB2aWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsXG4gICAgam12OiBKaW11TWFwVmlldyxcbiAgKTogUHJvbWlzZTxfX2VzcmkuRmVhdHVyZUxheWVyW10+IHtcbiAgICBsZXQgbGF5ZXJzID0gdGhpcy5nZXRDbGlja1RhcmdldExheWVycyh2aWV3KTtcbiAgICBpZiAobGF5ZXJzLmxlbmd0aCkgcmV0dXJuIGxheWVycztcblxuICAgIGF3YWl0IHRoaXMuaW5pdGlhbGl6ZU1hcENvbm5lY3Rpb24oam12KTtcbiAgICBsYXllcnMgPSB0aGlzLmdldENsaWNrVGFyZ2V0TGF5ZXJzKHZpZXcpO1xuICAgIGlmIChsYXllcnMubGVuZ3RoKSByZXR1cm4gbGF5ZXJzO1xuXG4gICAgLy8gTGFzdCByZXNvcnQ6IHNjYW4gbWFwIGFnYWluIGFmdGVyIGxheWVycyBtYXkgaGF2ZSBmaW5pc2hlZCBsb2FkaW5nXG4gICAgLy8gKHBvcnRhbCAvIE1hcEltYWdlIHN1YmxheWVycyBvZnRlbiBhcmVuJ3QgcXVlcnlhYmxlIGF0IGZpcnN0IGNvbm5lY3QpLlxuICAgIHRyeSB7XG4gICAgICBjb25zdCBtYXBMYXllcnMgPSBnZXRBbGxGZWF0dXJlTGF5ZXJzRnJvbU1hcCh2aWV3Lm1hcCk7XG4gICAgICBmb3IgKGNvbnN0IGxheWVyIG9mIG1hcExheWVycykge1xuICAgICAgICBhd2FpdCBzYWZlTG9hZE1hcExheWVyKGxheWVyKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIHtcbiAgICAgIC8qIGlnbm9yZSAqL1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5nZXRDbGlja1RhcmdldExheWVycyh2aWV3KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZUNsaWNrRmVhdHVyZUF0ID0gYXN5bmMgKFxuICAgIGV2OiBfX2VzcmkuVmlld0NsaWNrRXZlbnQsXG4gICAgdmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LFxuICAgIGxheWVyczogX19lc3JpLkZlYXR1cmVMYXllcltdLFxuICApOiBQcm9taXNlPHtcbiAgICBncmFwaGljOiBfX2VzcmkuR3JhcGhpYztcbiAgICBxdWVyeUhpdExheWVyOiBfX2VzcmkuRmVhdHVyZUxheWVyIHwgbnVsbDtcbiAgfSB8IG51bGw+ID0+IHtcbiAgICBjb25zdCBjbGlja1NjcmVlblBvaW50ID0geyB4OiBldi54LCB5OiBldi55IH07XG4gICAgY29uc3QgcXVlcnlHZW9tZXRyeSA9IHRoaXMudG9DbGlja1F1ZXJ5R2VvbWV0cnkoXG4gICAgICB2aWV3LFxuICAgICAgY2xpY2tTY3JlZW5Qb2ludCxcbiAgICAgIGV2Lm1hcFBvaW50LFxuICAgICk7XG5cbiAgICBjb25zdCBxdWVyeUxheWVycyA9XG4gICAgICBsYXllcnMubGVuZ3RoID4gMFxuICAgICAgICA/IGxheWVyc1xuICAgICAgICA6ICh0aGlzLmdldENsaWNrVGFyZ2V0TGF5ZXJzKHZpZXcpIGFzIF9fZXNyaS5GZWF0dXJlTGF5ZXJbXSk7XG5cbiAgICAvLyBoaXRUZXN0IC8gaWRlbnRpZnkgY2FuIHJlaHlkcmF0ZSBNYXBJbWFnZSBzdWJsYXllcnMgYW5kIGNsZWFyIHRoZWlyXG4gICAgLy8gcnVudGltZSBkZWZpbml0aW9uRXhwcmVzc2lvbiAoZGlzdHJpY3QgZmlsdGVyKSDigJQgc25hcHNob3QgZXZlcnkgY2xpY2tcbiAgICAvLyBjYW5kaWRhdGUgbm93IGFuZCByZXN0b3JlIGFueSBkcmlmdCBzeW5jaHJvbm91c2x5IGFmdGVyd2FyZHMsIGJlZm9yZVxuICAgIC8vIGFuIHVuZmlsdGVyZWQgZXhwb3J0IGdldHMgcGFpbnRlZCAob3RoZXItZGlzdHJpY3QgZmllbGRzIGZsYXNoKS5cbiAgICBjb25zdCBkZWZpbml0aW9uU25hcHNob3QgPSB0aGlzLnNuYXBzaG90RGVmaW5pdGlvbkV4cHJlc3Npb25zKFtcbiAgICAgIC4uLmxheWVycyxcbiAgICAgIC4uLnF1ZXJ5TGF5ZXJzLFxuICAgIF0pO1xuXG4gICAgLy8gQWx3YXlzIGhpdC10ZXN0IHRoZSByZW5kZXJlZCBtYXAgd2l0aG91dCBhbiBpbmNsdWRlIHJlc3RyaWN0aW9uLiBNYXAtaW1hZ2VcbiAgICAvLyBzdWJsYXllcnMgZnJlcXVlbnRseSBoYXZlIHJ1bnRpbWUgaWRzL1VSTHMgdGhhdCBkaWZmZXIgZnJvbSBjb25maWd1cmVkIERTXG4gICAgLy8gd3JhcHBlcnM7IHJlc3RyaWN0aW5nIGluY2x1ZGUvcHJlZmVycmVkIGxheWVycyBtYWtlcyB2aXNpYmxlIGZpZWxkcyB1bmNsaWNrYWJsZS5cbiAgICBjb25zdCBoaXQgPSBhd2FpdCB2aWV3LmhpdFRlc3QoZXYpO1xuICAgIHRoaXMucmVzdG9yZURyaWZ0ZWREZWZpbml0aW9uRXhwcmVzc2lvbnMoZGVmaW5pdGlvblNuYXBzaG90KTtcbiAgICAvLyBPbmx5IGFjY2VwdCBncmFwaGljcyBiZWxvbmdpbmcgdG8gdGhlIGNvbmZpZ3VyZWQgYWdyaWN1bHR1cmFsIGxheWVycy5cbiAgICAvLyBXZWJNYXAgc2tldGNoL21hcC1ub3RlcyBncmFwaGljcyBjYW4gY29udGFpbiBwYWdlLXNpemVkIHBvbHlnb25zOyB0cmVhdGluZ1xuICAgIC8vIG9uZSBhcyBhIGZpZWxkIG1ha2VzIGdvVG8gem9vbSBvdXQgdG8gYSB3b3JsZCBleHRlbnQuXG4gICAgLy8gRW1wdHkgYGxheWVyc2Agc3RpbGwgYWxsb3dzIGFncmljdWx0dXJhbCBoaXRzIChubyBwcmVmZXJyZWQgcmVzdHJpY3Rpb24pLlxuICAgIGxldCBnID0gdGhpcy5waWNrQ2xpY2tHcmFwaGljKGhpdCwgbGF5ZXJzKTtcbiAgICBsZXQgcXVlcnlIaXRMYXllcjogX19lc3JpLkZlYXR1cmVMYXllciB8IG51bGwgPSBudWxsO1xuXG4gICAgaWYgKCFnICYmIHF1ZXJ5R2VvbWV0cnkgJiYgcXVlcnlMYXllcnMubGVuZ3RoKSB7XG4gICAgICBmb3IgKGNvbnN0IGxheWVyIG9mIHF1ZXJ5TGF5ZXJzKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0xheWVyRWZmZWN0aXZlbHlWaXNpYmxlKGxheWVyLCB2aWV3KSkgY29udGludWU7XG4gICAgICAgIGlmICghdGhpcy5pc0FncmljdWx0dXJhbEZpZWxkTGF5ZXIobGF5ZXIpKSBjb250aW51ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBORVZFUiBxdWVyeSB0aGUgbGl2ZSBsYXllciBoZXJlOiBvbiBhIE1hcEltYWdlIHN1YmxheWVyIHRoYXRcbiAgICAgICAgICAvLyByZWh5ZHJhdGVzIGl0IGFuZCBjbGVhcnMgdGhlIHR1bWFuIGRlZmluaXRpb25FeHByZXNzaW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBtYXAgYnJpZWZseSBleHBvcnRzL3BhaW50cyBldmVyeSBkaXN0cmljdCdzIGZpZWxkcyB3aGlsZSB0aGVcbiAgICAgICAgICAvLyBwb3B1cCB6b29tIHJ1bnMuIFVzZSB0aGUgZGV0YWNoZWQgb2ZmLW1hcCBjbGllbnQgaW5zdGVhZCBhbmRcbiAgICAgICAgICAvLyBtaXJyb3IgdGhlIGxpdmUgZmlsdGVyIG9udG8gdGhlIHF1ZXJ5IFdIRVJFLlxuICAgICAgICAgIGNvbnN0IGxpdmVXaGVyZSA9IFN0cmluZyhcbiAgICAgICAgICAgIChsYXllciBhcyBhbnkpLmRlZmluaXRpb25FeHByZXNzaW9uIHx8IFwiXCIsXG4gICAgICAgICAgKS50cmltKCk7XG4gICAgICAgICAgY29uc3QgZGV0YWNoZWQgPSBhd2FpdCB0aGlzLmdldERldGFjaGVkUXVlcnlMYXllcihsYXllcik7XG4gICAgICAgICAgY29uc3QgcXVlcnlUYXJnZXQgPSBkZXRhY2hlZCB8fCBsYXllcjtcbiAgICAgICAgICBjb25zdCBxID0gcXVlcnlUYXJnZXQuY3JlYXRlUXVlcnkoKTtcbiAgICAgICAgICBxLmdlb21ldHJ5ID0gcXVlcnlHZW9tZXRyeTtcbiAgICAgICAgICBxLnNwYXRpYWxSZWxhdGlvbnNoaXAgPSBcImludGVyc2VjdHNcIjtcbiAgICAgICAgICBxLm91dEZpZWxkcyA9IFtcIipcIl07XG4gICAgICAgICAgcS5yZXR1cm5HZW9tZXRyeSA9IHRydWU7XG4gICAgICAgICAgcS5udW0gPSAxO1xuICAgICAgICAgIGlmIChsaXZlV2hlcmUgJiYgbGl2ZVdoZXJlICE9PSBcIjE9MVwiKSBxLndoZXJlID0gbGl2ZVdoZXJlO1xuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHF1ZXJ5VGFyZ2V0LnF1ZXJ5RmVhdHVyZXMocSk7XG4gICAgICAgICAgaWYgKCFkZXRhY2hlZCkge1xuICAgICAgICAgICAgLy8gTGl2ZS1sYXllciBmYWxsYmFjayAobm8gVVJMKSDigJQgcmVwYWlyIGFueSBkcmlmdCBpbW1lZGlhdGVseS5cbiAgICAgICAgICAgIHRoaXMucmVzdG9yZURyaWZ0ZWREZWZpbml0aW9uRXhwcmVzc2lvbnMoZGVmaW5pdGlvblNuYXBzaG90KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlcy5mZWF0dXJlcz8uWzBdKSB7XG4gICAgICAgICAgICBnID0gcmVzLmZlYXR1cmVzWzBdO1xuICAgICAgICAgICAgLy8gS2VlcCB0aGUgTElWRSBsYXllciBhcyB0aGUgaGl0IGxheWVyIOKAlCBkb3duc3RyZWFtIGxheWVyLWtleSAvXG4gICAgICAgICAgICAvLyBkc0lkIC8gYWxpYXMgcmVzb2x1dGlvbiBtdXN0IG1hcCBiYWNrIHRvIHRoZSBtYXAncyBvd24gbGF5ZXIuXG4gICAgICAgICAgICBxdWVyeUhpdExheWVyID0gbGF5ZXI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIC8qIHRyeSBuZXh0IGxheWVyICovXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWcpIHJldHVybiBudWxsO1xuICAgIHJldHVybiB7IGdyYXBoaWM6IGcsIHF1ZXJ5SGl0TGF5ZXIgfTtcbiAgfTtcblxuICAvKiogQ2FzZS1pbnNlbnNpdGl2ZSBhdHRyaWJ1dGUgbG9va3VwIOKAlCB0aGUgcG9seWdvbiBsYXllcidzIGpvaW4gZmllbGQgY2FzaW5nIGlzIG5vdCBndWFyYW50ZWVkLiAqL1xuICBwcml2YXRlIGZpbmRBdHRyaWJ1dGVWYWx1ZUNhc2VJbnNlbnNpdGl2ZShcbiAgICBhdHRyaWJ1dGVzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgICBmaWVsZE5hbWU6IHN0cmluZyxcbiAgKTogYW55IHtcbiAgICByZXR1cm4gZmluZEF0dHJpYnV0ZVZhbHVlQ2FzZUluc2Vuc2l0aXZlU2hhcmVkKGF0dHJpYnV0ZXMsIGZpZWxkTmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogVGVsbHMgQWdyaUdyYWZmMTAgKHZpYSBBZ3JpTG9jYWxpemF0aW9uLCB0aGUgY2VudHJhbCBmaWx0ZXIgaHViKSB3aGljaFxuICAgKiBwb2x5Z29uIGlzIGN1cnJlbnRseSBpbnNwZWN0ZWQgc28gaXRzIGNoYXJ0IGNhbiBzd2l0Y2ggdG8gc2hvd2luZyB0aGF0XG4gICAqIHNpbmdsZSBwb2x5Z29uJ3MgdmVnZXRhdGlvbi1pbmRleCBzZXJpZXMgaW5zdGVhZCBvZiB0aGUgcmVnaW9uLXdpZGVcbiAgICogdGltZXNlcmllcy4gTWlycm9ycyB0aGUgd2lkZ2V0U2VsZWN0aW9uQ2hhbmdlZCBzaGFwZSBBZ3JpR3JhZmZXaWRnZXRcbiAgICogaXRzZWxmIGFscmVhZHkgZGlzcGF0Y2hlcyBvbiBpdHMgb3duIHJvdy1jbGljayBzZWxlY3Rpb24uXG4gICAqL1xuICBwcml2YXRlIG5vdGlmeUdyYWZmUG9seWdvblNlbGVjdGlvbiA9IChcbiAgICB1bmlxdWVpZDogc3RyaW5nLFxuICAgIHBvbHlnb25Nb2RlOiBib29sZWFuLFxuICAgIGNsaWNrZWRBdD86IG51bWJlcixcbiAgKTogdm9pZCA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBDdXN0b21FdmVudChcIndpZGdldFNlbGVjdGlvbkNoYW5nZWRcIiwge1xuICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgc291cmNlOiBcIkFncmlQb3B1cFwiLFxuICAgICAgICAgICAgcG9seWdvbk1vZGUsXG4gICAgICAgICAgICB1bmlxdWVpZDogcG9seWdvbk1vZGUgPyB1bmlxdWVpZCA6IFwiXCIsXG4gICAgICAgICAgICAvLyBUaW1lc3RhbXAgb2YgdGhlIE9SSUdJTkFMIG1hcCBjbGljayAoY2FwdHVyZWQgYmVmb3JlIHRoaXNcbiAgICAgICAgICAgIC8vIHdpZGdldCdzIG93biBhc3luYyBhdHRyaWJ1dGUtcmVzb2x1dGlvbiBjaGFpbiksIG5vdCBvZiB0aGlzXG4gICAgICAgICAgICAvLyBkaXNwYXRjaCDigJQgbGV0cyBkb3duc3RyZWFtIGxpc3RlbmVycyAoQWdyaUdyYWZmMTApIGRldGVjdCBhbmRcbiAgICAgICAgICAgIC8vIGlnbm9yZSBhIHN0YWxlIG5vdGlmaWNhdGlvbiB0aGF0IHJlc29sdmVzIGFmdGVyIGEgbmV3ZXIgY2xpY2tcbiAgICAgICAgICAgIC8vIHdhcyBhbHJlYWR5IGFwcGxpZWQgKHNlZSBBZ3JpR3JhZmYxMCdzIF9sYXN0QXBwbGllZFBvbHlnb25DbGlja2VkQXQpLlxuICAgICAgICAgICAgY2xpY2tlZEF0OiBjbGlja2VkQXQgPz8gRGF0ZS5ub3coKSxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8qIGlnbm9yZSAqL1xuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIGJyb2FkY2FzdFBvcHVwVmlzaWJpbGl0eSA9IChvcGVuOiBib29sZWFuKTogdm9pZCA9PiB7XG4gICAgY29uc3QgcGlubmVkID0gISF0aGlzLnN0YXRlLnBpblRvQ29ybmVyO1xuICAgIHRyeSB7XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoXCJhZ3JpTWFwUG9wdXBWaXNpYmlsaXR5XCIsIHtcbiAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgIG9wZW46ICEhb3BlbixcbiAgICAgICAgICAgIHBpbm5lZCxcbiAgICAgICAgICAgIHNvdXJjZTogXCJBZ3JpUG9wdXBcIixcbiAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8qIGlnbm9yZSAqL1xuICAgIH1cbiAgICBpZiAob3Blbikge1xuICAgICAgLy8gUmUtbm90aWZ5IGFmdGVyIHBhaW50IHNvIE5EVkkgY2FuIG1lYXN1cmUgdGhlIHJlYWwgcG9wdXAgYm94LlxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICAgICAgbmV3IEN1c3RvbUV2ZW50KFwiYWdyaU1hcFBvcHVwVmlzaWJpbGl0eVwiLCB7XG4gICAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICAgICAgcGlubmVkLFxuICAgICAgICAgICAgICAgIGxheW91dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzb3VyY2U6IFwiQWdyaVBvcHVwXCIsXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgLyogaWdub3JlICovXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBWRUdfSU5ERVhfRklFTERTID0gWy4uLkdSQUZGX0lOREVYX09SREVSXTtcblxuICAvKipcbiAgICogTGF0ZXN0LWRheSB2ZWdldGF0aW9uIGluZGV4IHZhbHVlcyBmb3IgdGhlIHNlbGVjdGVkIHBvbHlnb24sIHNob3duIGluXG4gICAqIHRoZSBwb3B1cC4gUmV1c2VzIHF1ZXJ5VmVnZXRhdGlvblNlcmllc0ZvclVuaXF1ZUlkIChxdWVyaWVzIHRoZVxuICAgKiBhZ3JpX3ZlZ2V0YXRpb25faW5kaWNlcyBBcmNHSVMgdGFibGUgZGlyZWN0bHksIHNhbWUgc291cmNlIEFncmlHcmFmZjEwJ3NcbiAgICogY2hhcnQgdXNlcykgcmF0aGVyIHRoYW4gdGhlIGFwaS1hZ3JpIGV4cG9ydC1pbWFnZS9hdmFpbGFibGUtZGF0ZXMgUkVTVFxuICAgKiBlbmRwb2ludHMg4oCUIHRob3NlIGFyZSBmb3IgZmV0Y2hpbmcgYSByZW5kZXJlZCByYXN0ZXIgZm9yIGEgc3BlY2lmaWNcbiAgICogY2hvc2VuIGRhdGUsIHdoaWNoIGlzIHVubmVjZXNzYXJ5IGhlcmU7IHdlIG9ubHkgbmVlZCB0aGUgc2NhbGFyIGluZGV4XG4gICAqIHZhbHVlcyBmb3Igd2hpY2hldmVyIGRhdGUgaXMgbW9zdCByZWNlbnQsIGFuZCB0aGUgdGFibGUgYWxyZWFkeSBoYXNcbiAgICogbmR2aS9zYXZpL3J2aS9jaS9ldmkvbmR3aSBhcyBwbGFpbiBmaWVsZHMgcGVyICh1bmlxdWVpZCwgcmFzdGVyX2RhdGUpLlxuICAgKi9cbiAgcHJpdmF0ZSBmZXRjaExhdGVzdFZlZ2V0YXRpb25JbmRpY2VzID0gYXN5bmMgKFxuICAgIHVuaXF1ZUlkOiBzdHJpbmcsXG4gICk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IGlkID0gU3RyaW5nKHVuaXF1ZUlkIHx8IFwiXCIpLnRyaW0oKTtcbiAgICBpZiAoIWlkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbG9hZGluZ0xhdGVzdEluZGljZXM6IGZhbHNlLFxuICAgICAgICBsYXRlc3RJbmRleERhdGU6IG51bGwsXG4gICAgICAgIGxhdGVzdEluZGV4VmFsdWVzOiBudWxsLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVxdWVzdElkID0gKyt0aGlzLl9sYXRlc3RJbmRpY2VzUmVxdWVzdElkO1xuICAgIGFncmlNYXBDbGlja0RlYnVnKFwidmVnZXRhdGlvbjpyZXF1ZXN0XCIsIHtcbiAgICAgIHVuaXF1ZWlkOiBpZCxcbiAgICAgIHNvdXJjZTogXCJhZ3JpX3ZlZ2V0YXRpb25faW5kaWNlcy9GZWF0dXJlU2VydmVyLzFcIixcbiAgICAgIHJlcXVlc3RJZCxcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxvYWRpbmdMYXRlc3RJbmRpY2VzOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvd3MgPSBhd2FpdCBxdWVyeVZlZ2V0YXRpb25TZXJpZXNGb3JVbmlxdWVJZChpZCk7XG4gICAgICBpZiAoIXRoaXMuX2lzTW91bnRlZCB8fCByZXF1ZXN0SWQgIT09IHRoaXMuX2xhdGVzdEluZGljZXNSZXF1ZXN0SWQpIHJldHVybjtcblxuICAgICAgaWYgKCFyb3dzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBsb2FkaW5nTGF0ZXN0SW5kaWNlczogZmFsc2UsXG4gICAgICAgICAgbGF0ZXN0SW5kZXhEYXRlOiBudWxsLFxuICAgICAgICAgIGxhdGVzdEluZGV4VmFsdWVzOiBudWxsLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBSb3dzIGNvbWUgYmFjayBvcmRlcmVkIGJ5IHJhc3Rlcl9kYXRlIEFTQyDigJQgdGhlIGxhc3Qgb25lIGlzIHRoZVxuICAgICAgLy8gbW9zdCByZWNlbnQgcHJvY2Vzc2VkIGRhdGUgZm9yIHRoaXMgcG9seWdvbi5cbiAgICAgIGNvbnN0IGxhdGVzdCA9IHJvd3Nbcm93cy5sZW5ndGggLSAxXSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuICAgICAgY29uc3QgZGF0ZSA9IGZvcm1hdEFyY2dpc0RhdGVUb1ltZChsYXRlc3QucmFzdGVyX2RhdGUpO1xuICAgICAgY29uc3QgdmFsdWVzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge307XG4gICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIEFncmlQb2x5Z29uLlZFR19JTkRFWF9GSUVMRFMpIHtcbiAgICAgICAgY29uc3QgdiA9IE51bWJlcihsYXRlc3RbZmllbGRdKTtcbiAgICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZSh2KSkgdmFsdWVzW2ZpZWxkXSA9IHY7XG4gICAgICB9XG4gICAgICBhZ3JpTWFwQ2xpY2tEZWJ1ZyhcInZlZ2V0YXRpb246cmVzcG9uc2VcIiwge1xuICAgICAgICB1bmlxdWVpZDogaWQsXG4gICAgICAgIHJlcXVlc3RJZCxcbiAgICAgICAgcm93Q291bnQ6IHJvd3MubGVuZ3RoLFxuICAgICAgICBsYXRlc3REYXRlOiBkYXRlLFxuICAgICAgICB2YWx1ZXMsXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxvYWRpbmdMYXRlc3RJbmRpY2VzOiBmYWxzZSxcbiAgICAgICAgbGF0ZXN0SW5kZXhEYXRlOiBkYXRlLFxuICAgICAgICBsYXRlc3RJbmRleFZhbHVlczogT2JqZWN0LmtleXModmFsdWVzKS5sZW5ndGggPyB2YWx1ZXMgOiBudWxsLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICBpZiAoIXRoaXMuX2lzTW91bnRlZCB8fCByZXF1ZXN0SWQgIT09IHRoaXMuX2xhdGVzdEluZGljZXNSZXF1ZXN0SWQpIHJldHVybjtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsb2FkaW5nTGF0ZXN0SW5kaWNlczogZmFsc2UsXG4gICAgICAgIGxhdGVzdEluZGV4RGF0ZTogbnVsbCxcbiAgICAgICAgbGF0ZXN0SW5kZXhWYWx1ZXM6IG51bGwsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEFncmlfdGFibGVfZGF0YSBpcyBhbiBleHRlcm5hbCBUYWJsZSAobm8gZ2VvbWV0cnkpIOKAlCB0aGUgbWFwIGNsaWNrIHN0aWxsXG4gICAqIHJlc29sdmVzIHRoZSBwb2x5Z29uIGZlYXR1cmUgZm9yIGhpZ2hsaWdodC96b29tLCBidXQgdGhlIGRpc3BsYXllZFxuICAgKiBhdHRyaWJ1dGVzIGNvbWUgZnJvbSBBZ3JpX3RhYmxlX2RhdGEsIGpvaW5lZCBieSB1bmlxdWVpZC5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgcmVzb2x2ZURpc3BsYXlBdHRycyhcbiAgICBwb2x5Z29uQXR0cmlidXRlczogUmVjb3JkPHN0cmluZywgYW55PiB8IG51bGwgfCB1bmRlZmluZWQsXG4gICk6IFByb21pc2U8UmVjb3JkPHN0cmluZywgYW55Pj4ge1xuICAgIGNvbnN0IGpvaW5WYWx1ZSA9IHRoaXMuZmluZEF0dHJpYnV0ZVZhbHVlQ2FzZUluc2Vuc2l0aXZlKFxuICAgICAgcG9seWdvbkF0dHJpYnV0ZXMsXG4gICAgICBBR1JJX1RBQkxFX0pPSU5fRklFTEQsXG4gICAgKTtcbiAgICBpZiAoam9pblZhbHVlID09IG51bGwgfHwgU3RyaW5nKGpvaW5WYWx1ZSkudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICBhZ3JpTWFwQ2xpY2tXYXJuKFwiYWdyaS10YWJsZS1qb2luOlNLSVAtbm8tdW5pcXVlaWRcIiwge1xuICAgICAgICBwb2x5Z29uQXR0cmlidXRlS2V5czogT2JqZWN0LmtleXMocG9seWdvbkF0dHJpYnV0ZXMgfHwge30pLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcG9seWdvbkF0dHJpYnV0ZXMgfHwge307XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBhZ3JpTWFwQ2xpY2tEZWJ1ZyhcImFncmktdGFibGUtam9pbjpyZXF1ZXN0XCIsIHtcbiAgICAgICAgdW5pcXVlaWQ6IFN0cmluZyhqb2luVmFsdWUpLFxuICAgICAgICBzb3VyY2U6IFwiQWdyaV90YWJsZV9kYXRhL0ZlYXR1cmVTZXJ2ZXIvMlwiLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBhZ3JpUmVjb3JkID0gYXdhaXQgcXVlcnlBZ3JpUmVjb3JkQnlVbmlxdWVJZChTdHJpbmcoam9pblZhbHVlKSk7XG4gICAgICBhZ3JpTWFwQ2xpY2tEZWJ1ZyhcImFncmktdGFibGUtam9pbjpyZXNwb25zZVwiLCB7XG4gICAgICAgIHVuaXF1ZWlkOiBTdHJpbmcoam9pblZhbHVlKSxcbiAgICAgICAgZm91bmQ6IEJvb2xlYW4oYWdyaVJlY29yZCksXG4gICAgICAgIGF0dHJpYnV0ZUtleXM6IE9iamVjdC5rZXlzKGFncmlSZWNvcmQgfHwge30pLFxuICAgICAgfSk7XG4gICAgICBpZiAoYWdyaVJlY29yZCkge1xuICAgICAgICAvLyBLZWVwIHBvbHlnb24tb25seSB2YWx1ZXMgKGZvciBleGFtcGxlIHN0X2FyZWEoc2hhcGUpKSB3aGlsZSBhbGxvd2luZ1xuICAgICAgICAvLyB0aGUgam9pbmVkIEFncmkgdGFibGUgdG8gcHJvdmlkZS9vdmVycmlkZSB0aGUgcG9wdXAncyBidXNpbmVzcyBkYXRhLlxuICAgICAgICByZXR1cm4geyAuLi4ocG9seWdvbkF0dHJpYnV0ZXMgfHwge30pLCAuLi5hZ3JpUmVjb3JkIH07XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgYWdyaU1hcENsaWNrV2FybihcIkFncmlfdGFibGVfZGF0YSBsb29rdXAgZmFpbGVkXCIsIHtcbiAgICAgICAgdW5pcXVlSWQ6IGpvaW5WYWx1ZSxcbiAgICAgICAgZXJyb3I6IChlIGFzIGFueSk/Lm1lc3NhZ2UgfHwgU3RyaW5nKGUpLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBwb2x5Z29uQXR0cmlidXRlcyB8fCB7fTtcbiAgfVxuXG4gIHByaXZhdGUgb25WaWV3Q2xpY2sgPSBhc3luYyAoZXY6IF9fZXNyaS5WaWV3Q2xpY2tFdmVudCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoXCJhZ3JpUG9seWdvbk1hcENsaWNrUGhhc2VcIiwge1xuICAgICAgICAgIGRldGFpbDogeyBwaGFzZTogXCJjbGljay1zdGFydFwiLCB0aW1lc3RhbXA6IERhdGUubm93KCkgfSxcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH0gY2F0Y2gge1xuICAgICAgLyogYmVzdC1lZmZvcnQgZmlsdGVyIGd1YXJkICovXG4gICAgfVxuICAgIC8vIENhcHR1cmVkIEJFRk9SRSBhbnkgYXdhaXRzIGJlbG93IOKAlCB0aGlzIHdpZGdldCdzIGF0dHJpYnV0ZS1yZXNvbHV0aW9uXG4gICAgLy8gY2hhaW4gKHJlc29sdmVDbGlja0xheWVycy9yZXNvbHZlQ2xpY2tGZWF0dXJlQXQvcXVlcnkvcmVzb2x2ZURpc3BsYXlBdHRycylcbiAgICAvLyBjYW4gdGFrZSBub3RpY2VhYmx5IGxvbmdlciB0aGFuIEFncmlHcmFmZjEwJ3Mgb3duLCBtb3JlIGRpcmVjdCBtYXAtY2xpY2tcbiAgICAvLyBoYW5kbGluZyBvZiB0aGUgc2FtZSBjbGljay4gSWYgdGhlIHVzZXIgY2xpY2tzIGEgc2Vjb25kIHBvbHlnb24gYmVmb3JlXG4gICAgLy8gdGhpcyBjaGFpbiBmaW5pc2hlcywgdGhlIHN0YWxlIHJlc3VsdCBtdXN0IG5vdCB3aW4g4oCUIGNsaWNrZWRBdCBsZXRzXG4gICAgLy8gQWdyaUdyYWZmMTAgZGV0ZWN0IGFuZCBkcm9wIGl0LlxuICAgIGNvbnN0IGNsaWNrU3RhcnRlZEF0ID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBjbGlja0dlbmVyYXRpb24gPSArK3RoaXMuX2NsaWNrR2VuZXJhdGlvbjtcbiAgICBhZ3JpTWFwQ2xpY2tEZWJ1ZyhcImNsaWNrOnJlY2VpdmVkXCIsIHtcbiAgICAgIGNsaWNrR2VuZXJhdGlvbixcbiAgICAgIHg6IGV2LngsXG4gICAgICB5OiBldi55LFxuICAgICAgbWFwUG9pbnQ6IGV2Lm1hcFBvaW50XG4gICAgICAgID8ge1xuICAgICAgICAgICAgeDogZXYubWFwUG9pbnQueCxcbiAgICAgICAgICAgIHk6IGV2Lm1hcFBvaW50LnksXG4gICAgICAgICAgICB3a2lkOiBldi5tYXBQb2ludC5zcGF0aWFsUmVmZXJlbmNlPy53a2lkIHx8IG51bGwsXG4gICAgICAgICAgfVxuICAgICAgICA6IG51bGwsXG4gICAgfSk7XG4gICAgY29uc3QgaXNTdGFsZSA9ICgpID0+XG4gICAgICAhdGhpcy5faXNNb3VudGVkIHx8IGNsaWNrR2VuZXJhdGlvbiAhPT0gdGhpcy5fY2xpY2tHZW5lcmF0aW9uO1xuICAgIGxldCBwb3B1cE9wZW5lZEZvclRoaXNDbGljayA9IGZhbHNlO1xuICAgIGNvbnN0IGptdiA9IHRoaXMuc3RhdGUuamltdU1hcFZpZXc7XG4gICAgY29uc3QgdmlldyA9IGptdj8udmlldztcbiAgICBpZiAoIXZpZXcgfHwgIWptdikge1xuICAgICAgYWdyaU1hcENsaWNrV2FybihcIm9uVmlld0NsaWNrIFNLSVA6IG5vIHZpZXcvam12XCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGxheWVycyA9IGF3YWl0IHRoaXMucmVzb2x2ZUNsaWNrTGF5ZXJzKHZpZXcsIGptdik7XG4gICAgaWYgKGlzU3RhbGUoKSkgcmV0dXJuO1xuICAgIGFncmlNYXBDbGlja0RlYnVnKFwib25WaWV3Q2xpY2sgc3RhcnRcIiwge1xuICAgICAgc2NyZWVuOiB7IHg6IGV2LngsIHk6IGV2LnkgfSxcbiAgICAgIGxheWVyQ291bnQ6IGxheWVycy5sZW5ndGgsXG4gICAgICBsYXllcnM6IGxheWVycy5tYXAoKGwpID0+ICh7XG4gICAgICAgIGlkOiBsLmlkLFxuICAgICAgICB0aXRsZTogbC50aXRsZSxcbiAgICAgICAgdXJsOiBsLnVybCxcbiAgICAgIH0pKSxcbiAgICB9KTtcblxuXG4gICAgY29uc3QgY2xpY2tTY3JlZW5Qb2ludCA9IHsgeDogZXYueCwgeTogZXYueSB9O1xuICAgIGNvbnN0IGhpdFJlc3VsdCA9IGF3YWl0IHRoaXMucmVzb2x2ZUNsaWNrRmVhdHVyZUF0KGV2LCB2aWV3LCBsYXllcnMpO1xuICAgIGlmIChpc1N0YWxlKCkpIHJldHVybjtcblxuICAgIHRyeSB7XG4gICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoXCJhZ3JpUG9seWdvbk1hcENsaWNrUGhhc2VcIiwge1xuICAgICAgICAgIGRldGFpbDogeyBwaGFzZTogXCJhZnRlci1oaXQtdGVzdFwiLCB0aW1lc3RhbXA6IERhdGUubm93KCkgfSxcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH0gY2F0Y2gge1xuICAgICAgLyogYmVzdC1lZmZvcnQgZmlsdGVyIGd1YXJkICovXG4gICAgfVxuXG4gICAgaWYgKCFoaXRSZXN1bHQpIHtcbiAgICAgIC8vIEVtcHR5IG1hcCBjbGljayB3aGlsZSBhIGZpZWxkIHBvcHVwIGlzIG9wZW4gPSBkZXNlbGVjdCBhbmQgcmV0dXJuIHRvXG4gICAgICAvLyB0aGUgZGlzdHJpY3QvcmVnaW9uIGV4dGVudCBzYXZlZCBiZWZvcmUgdGhlIGZpZWxkIHpvb20uXG4gICAgICBpZiAodGhpcy5zdGF0ZS5zaG93UG9wdXAgfHwgdGhpcy5zdGF0ZS5sb2FkaW5nKSB7XG4gICAgICAgIGFncmlNYXBDbGlja0RlYnVnKFwib25WaWV3Q2xpY2s6IGNsaWNrIG91dHNpZGUg4oCUIGNsb3NlIHBvcHVwICsgcmVzdG9yZSBleHRlbnRcIik7XG4gICAgICAgIHRoaXMuY2xvc2VQb3B1cCh7IHJlc3RvcmVFeHRlbnQ6IHRydWUsIG5vdGlmeURlc2VsZWN0OiB0cnVlIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWdyaU1hcENsaWNrRGVidWcoXCJvblZpZXdDbGljazogY2xpY2sgb3V0c2lkZSBmaWVsZCBwb2x5Z29ucyDigJQgaWdub3JlZFwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGdyYXBoaWM6IGcsIHF1ZXJ5SGl0TGF5ZXIgfSA9IGhpdFJlc3VsdDtcblxuICAgIHRyeSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgIGNsaWNrU2NyZWVuUG9pbnQsXG4gICAgICAgIGxvYWRpbmdBdHRhY2htZW50czogdHJ1ZSxcbiAgICAgICAgYXR0YWNobWVudHM6IFtdLFxuICAgICAgICBhdHRhY2htZW50c0V4cGFuZGVkOiB0cnVlLFxuICAgICAgfSk7XG5cbiAgICAgIGFncmlNYXBDbGlja0RlYnVnKFwiZmllbGQgcG9seWdvbiBoaXRcIiwge1xuICAgICAgICBsYXllcklkOiAoZyBhcyBhbnkpLmxheWVyPy5pZCxcbiAgICAgICAgZ2VvbWV0cnk6IGcuZ2VvbWV0cnk/LnR5cGUgfHwgbnVsbCxcbiAgICAgICAgYXR0cktleXM6IGcuYXR0cmlidXRlc1xuICAgICAgICAgID8gT2JqZWN0LmtleXMoZy5hdHRyaWJ1dGVzKS5zbGljZSgwLCA4KVxuICAgICAgICAgIDogW10sXG4gICAgICB9KTtcblxuICAgICAgLy8gcXVlcnlGZWF0dXJlcyByZXN1bHRzIGhhdmUgbm8gZ3JhcGhpYy5sYXllciDigJQgdXNlIHRoZSBsYXllciB3ZSBxdWVyaWVkXG4gICAgICBjb25zdCBjbGlja2VkTGF5ZXIgPSAoXG4gICAgICAgIHF1ZXJ5SGl0TGF5ZXJcbiAgICAgICAgICA/IHRoaXMudG9MaXZlTWFwTGF5ZXIocXVlcnlIaXRMYXllciwgdmlldy5tYXApIHx8IHF1ZXJ5SGl0TGF5ZXJcbiAgICAgICAgICA6IHRoaXMudG9MaXZlTWFwTGF5ZXIoXG4gICAgICAgICAgICAgIGdldFF1ZXJ5YWJsZUxheWVyKChnIGFzIGFueSkubGF5ZXIpIHx8IChnIGFzIGFueSkubGF5ZXIsXG4gICAgICAgICAgICAgIHZpZXcubWFwLFxuICAgICAgICAgICAgKVxuICAgICAgKSBhcyBfX2VzcmkuRmVhdHVyZUxheWVyO1xuICAgICAgaWYgKCFjbGlja2VkTGF5ZXIpIHtcbiAgICAgICAgYWdyaU1hcENsaWNrV2FybihcIm5vIGxpdmUgbGF5ZXIgZm9yIGhpdCBncmFwaGljXCIpO1xuICAgICAgICBpZiAoIWlzU3RhbGUoKSkgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBzaG93UG9wdXA6IGZhbHNlIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBsYXllcktleSA9XG4gICAgICAgIGdldEFncmlMYXllck1hcEtleShjbGlja2VkTGF5ZXIpIHx8XG4gICAgICAgIFN0cmluZyhjbGlja2VkTGF5ZXI/LnVybCB8fCBjbGlja2VkTGF5ZXI/LmlkIHx8IFwiXCIpO1xuICAgICAgY29uc3QgZHNJZCA9IHRoaXMuc3RhdGUubGF5ZXJLZXlUb0RzSWQ/LltsYXllcktleV0gfHwgbnVsbDtcbiAgICAgIGFncmlNYXBDbGlja0RlYnVnKFwibGF5ZXI6cmVzb2x2ZWRcIiwge1xuICAgICAgICB0aXRsZTogY2xpY2tlZExheWVyLnRpdGxlLFxuICAgICAgICBpZDogY2xpY2tlZExheWVyLmlkLFxuICAgICAgICB1cmw6IGNsaWNrZWRMYXllci51cmwgfHwgbnVsbCxcbiAgICAgICAgbGF5ZXJLZXksXG4gICAgICAgIGRhdGFTb3VyY2VJZDogZHNJZCxcbiAgICAgICAgZGVmaW5pdGlvbkV4cHJlc3Npb246IChjbGlja2VkTGF5ZXIgYXMgYW55KS5kZWZpbml0aW9uRXhwcmVzc2lvbiB8fCBudWxsLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG9pZEZpZWxkID1cbiAgICAgICAgY2xpY2tlZExheWVyLm9iamVjdElkRmllbGQgfHxcbiAgICAgICAgY2xpY2tlZExheWVyLmZpZWxkcz8uZmluZCgoZjogYW55KSA9PiBmLnR5cGUgPT09IFwib2lkXCIpPy5uYW1lIHx8XG4gICAgICAgIG51bGw7XG5cbiAgICAgIGlmICghb2lkRmllbGQpIHtcbiAgICAgICAgaWYgKCFpc1N0YWxlKCkpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZXJyb3I6IHRoaXMudHIoXCJlcnJvci5vYmplY3RJZEZpZWxkTWlzc2luZ1wiKSxcbiAgICAgICAgICAgIHNob3dQb3B1cDogZmFsc2UsXG4gICAgICAgICAgICBsb2FkaW5nQXR0YWNobWVudHM6IGZhbHNlLFxuICAgICAgICAgICAgYXR0YWNobWVudHM6IFtdLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuY2xlYXJIaWdobGlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9pZCA9IChnIGFzIGFueSkuYXR0cmlidXRlcz8uW29pZEZpZWxkXTtcbiAgICAgIGlmIChvaWQgPT0gbnVsbCkge1xuICAgICAgICBpZiAoIWlzU3RhbGUoKSkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBlcnJvcjogdGhpcy50cihcImVycm9yLm9iamVjdElkTWlzc2luZ1wiLCB7IGZpZWxkOiBvaWRGaWVsZCB9KSxcbiAgICAgICAgICAgIHNob3dQb3B1cDogZmFsc2UsXG4gICAgICAgICAgICBsb2FkaW5nQXR0YWNobWVudHM6IGZhbHNlLFxuICAgICAgICAgICAgYXR0YWNobWVudHM6IFtdLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuY2xlYXJIaWdobGlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG91dEZpZWxkcyA9IHRoaXMuZ2V0T3V0RmllbGRzKGNsaWNrZWRMYXllciBhcyBhbnksIG9pZEZpZWxkKTtcblxuICAgICAgY29uc3QgZiA9IGF3YWl0IHRoaXMucXVlcnlGZWF0dXJlQnlPYmplY3RJZENhY2hlZChcbiAgICAgICAgY2xpY2tlZExheWVyLFxuICAgICAgICBvaWRGaWVsZCxcbiAgICAgICAgb2lkLFxuICAgICAgICBvdXRGaWVsZHMsXG4gICAgICApO1xuICAgICAgaWYgKGlzU3RhbGUoKSkgcmV0dXJuO1xuICAgICAgaWYgKCFmKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiB0aGlzLnRyKFwiZXJyb3IuZmVhdHVyZUJ5T2JqZWN0SWRNaXNzaW5nXCIpLFxuICAgICAgICAgIHNob3dQb3B1cDogZmFsc2UsXG4gICAgICAgICAgbG9hZGluZ0F0dGFjaG1lbnRzOiBmYWxzZSxcbiAgICAgICAgICBhdHRhY2htZW50czogW10sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNsZWFySGlnaGxpZ2h0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGYuZ2VvbWV0cnkpIHRoaXMuaGlnaGxpZ2h0UG9seWdvbihmLmdlb21ldHJ5KTtcblxuICAgICAgY29uc3QgZWFybHlVbmlxdWVJZCA9XG4gICAgICAgIHRoaXMuZmluZEF0dHJpYnV0ZVZhbHVlQ2FzZUluc2Vuc2l0aXZlKFxuICAgICAgICAgIGYuYXR0cmlidXRlcyBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+LFxuICAgICAgICAgIEFHUklfVEFCTEVfSk9JTl9GSUVMRCxcbiAgICAgICAgKSA/PyBudWxsO1xuICAgICAgY29uc3QgZWFybHlDbGVhbktleSA9IFN0cmluZyhlYXJseVVuaXF1ZUlkIHx8IFwiXCIpXG4gICAgICAgIC5yZXBsYWNlKC9be31dL2csIFwiXCIpXG4gICAgICAgIC50cmltKCk7XG4gICAgICBjb25zdCBhY3RpdmVLZXkgPSBTdHJpbmcodGhpcy5fYWN0aXZlSW5zcGVjdGVkVW5pcXVlaWQgfHwgXCJcIilcbiAgICAgICAgLnJlcGxhY2UoL1t7fV0vZywgXCJcIilcbiAgICAgICAgLnRyaW0oKTtcbiAgICAgIC8qXG4gICAgICAgKiBTYW1lIGFscmVhZHktYWN0aXZlIGZpZWxkIChpbmNsLiB0YWJsZSBzZWxlY3Rpb24pIGNsaWNrZWQgb24gbWFwIOKGklxuICAgICAgICogZGVhY3RpdmF0ZSB3aXRob3V0IHpvb21pbmcgaW4gYWdhaW4uIEdyYWZmIHJlc3RvcmVzIHRoZSBwcmUtc2VsZWN0IGV4dGVudC5cbiAgICAgICAqIElmIHRoZSBwYW5lbCB3YXMgb25seSBtaW5pbWl6ZWQsIGV4cGFuZCBpdCBpbnN0ZWFkIG9mIGRlc2VsZWN0aW5nLlxuICAgICAgICovXG4gICAgICBpZiAoYWN0aXZlS2V5ICYmIGVhcmx5Q2xlYW5LZXkgJiYgYWN0aXZlS2V5ID09PSBlYXJseUNsZWFuS2V5KSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnBvcHVwTWluaW1pemVkKSB7XG4gICAgICAgICAgYWdyaU1hcENsaWNrRGVidWcoXCJzZWxlY3Rpb246ZXhwYW5kLW1pbmltaXplZC1zYW1lLWZpZWxkXCIsIHtcbiAgICAgICAgICAgIHVuaXF1ZWlkOiBlYXJseUNsZWFuS2V5LFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuZXhwYW5kUG9wdXAoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYWdyaU1hcENsaWNrRGVidWcoXCJzZWxlY3Rpb246dG9nZ2xlLW9mZi1zYW1lLWZpZWxkXCIsIHtcbiAgICAgICAgICB1bmlxdWVpZDogZWFybHlDbGVhbktleSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2xlYXJIaWdobGlnaHQoKTtcbiAgICAgICAgdGhpcy5fYWN0aXZlSW5zcGVjdGVkVW5pcXVlaWQgPSBudWxsO1xuICAgICAgICB0aGlzLmNsb3NlUG9wdXAoeyByZXN0b3JlRXh0ZW50OiB0cnVlLCBub3RpZnlEZXNlbGVjdDogdHJ1ZSB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBsb2FkU3RhdHVzID0gU3RyaW5nKChjbGlja2VkTGF5ZXIgYXMgYW55KS5sb2FkU3RhdHVzIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGlzTG9hZGVkID0gQm9vbGVhbigoY2xpY2tlZExheWVyIGFzIGFueSkubG9hZGVkKSB8fCBsb2FkU3RhdHVzID09PSBcImxvYWRlZFwiO1xuICAgICAgICAvLyBMb2FkaW5nIGEgbGl2ZSBNYXBJbWFnZS1vd25lZCBzdWJsYXllciByZWh5ZHJhdGVzIGl0IGFuZCBjYW4gY2xlYXJcbiAgICAgICAgLy8gdGhlIHJ1bnRpbWUgdHVtYW4gZGVmaW5pdGlvbkV4cHJlc3Npb24gKG90aGVyLWRpc3RyaWN0IGZsYXNoKS4gVGhlXG4gICAgICAgIC8vIGRldGFjaGVkIGNsaWVudCBmcm9tIHF1ZXJ5RmVhdHVyZUJ5T2JqZWN0SWRDYWNoZWQgaXMgYWxyZWFkeSBsb2FkZWRcbiAgICAgICAgLy8gYW5kIHByb3ZpZGVzIHRoZSBzYW1lIGZpZWxkIG1ldGFkYXRhLlxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWlzTG9hZGVkICYmXG4gICAgICAgICAgIWlzTWFwSW1hZ2VPd25lZExheWVyKGNsaWNrZWRMYXllcikgJiZcbiAgICAgICAgICAhaXNNYXBJbWFnZUdyb3VwU3VibGF5ZXIoY2xpY2tlZExheWVyKVxuICAgICAgICApIHtcbiAgICAgICAgICBhZ3JpTWFwQ2xpY2tEZWJ1ZyhcImxheWVyOmxvYWQtcmVxdWlyZWRcIiwge1xuICAgICAgICAgICAgdGl0bGU6IGNsaWNrZWRMYXllci50aXRsZSxcbiAgICAgICAgICAgIGxvYWRTdGF0dXM6IGxvYWRTdGF0dXMgfHwgbnVsbCxcbiAgICAgICAgICAgIGRlZmluaXRpb25FeHByZXNzaW9uOlxuICAgICAgICAgICAgICAoY2xpY2tlZExheWVyIGFzIGFueSkuZGVmaW5pdGlvbkV4cHJlc3Npb24gfHwgbnVsbCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhd2FpdCBzYWZlTG9hZE1hcExheWVyKGNsaWNrZWRMYXllcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWdyaU1hcENsaWNrRGVidWcoXCJsYXllcjpsb2FkLXNraXAtYWxyZWFkeS1sb2FkZWRcIiwge1xuICAgICAgICAgICAgdGl0bGU6IGNsaWNrZWRMYXllci50aXRsZSxcbiAgICAgICAgICAgIGxvYWRTdGF0dXM6IGxvYWRTdGF0dXMgfHwgXCJsb2FkZWRcIixcbiAgICAgICAgICAgIGRlZmluaXRpb25FeHByZXNzaW9uOlxuICAgICAgICAgICAgICAoY2xpY2tlZExheWVyIGFzIGFueSkuZGVmaW5pdGlvbkV4cHJlc3Npb24gfHwgbnVsbCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8qIGZyZXNoIGZpZWxkIGFsaWFzZXMgZnJvbSBsaXZlIGxheWVyICovXG4gICAgICB9XG4gICAgICBpZiAoaXNTdGFsZSgpKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IHNob3VsZFBpbiA9IHRoaXMuc3RhdGUucGluVG9Db3JuZXI7XG4gICAgICBjb25zdCBwb3B1cFBvc2l0aW9uID0gc2hvdWxkUGluXG4gICAgICAgID8gdGhpcy5jYWxjdWxhdGVQaW5uZWRQb3NpdGlvbih2aWV3KVxuICAgICAgICA6IHRoaXMuY2FsY3VsYXRlUG9wdXBQb3NpdGlvbihjbGlja1NjcmVlblBvaW50LCB2aWV3KTtcblxuICAgICAgLy8gQWdyaV90YWJsZV9kYXRhIGhhcyBubyBnZW9tZXRyeSDigJQgdGhlIHBvbHlnb24gbGF5ZXIgb25seSBkcml2ZXNcbiAgICAgIC8vIG1hcC1jbGljay9oaWdobGlnaHQvem9vbTsgdGhlIGZpZWxkcyB0aGUgcG9wdXAgc2hvd3MgY29tZSBmcm9tIHRoZVxuICAgICAgLy8gZXh0ZXJuYWwgdGFibGUsIGpvaW5lZCBieSB1bmlxdWVpZC5cbiAgICAgIGNvbnN0IGRpc3BsYXlBdHRycyA9IGF3YWl0IHRoaXMucmVzb2x2ZURpc3BsYXlBdHRycyhmLmF0dHJpYnV0ZXMpO1xuICAgICAgaWYgKGlzU3RhbGUoKSkgcmV0dXJuO1xuXG4gICAgICBjb25zdCBjb25maWd1cmVkRmllbGRzID0gdGhpcy5wcm9wcy5jb25maWc/LmZpZWxkc1RvU2hvdyB8fCBbXTtcbiAgICAgIGNvbnN0IGFjdHVhbEZpZWxkcyA9IE9iamVjdC5rZXlzKGRpc3BsYXlBdHRycyk7XG4gICAgICBjb25zdCBtaXNzaW5nRmllbGRzID0gY29uZmlndXJlZEZpZWxkcy5maWx0ZXIoXG4gICAgICAgIChmaWVsZCkgPT4gIWFjdHVhbEZpZWxkcy5pbmNsdWRlcyhmaWVsZCksXG4gICAgICApO1xuICAgICAgY29uc3QgZmllbGRzV2l0aERhdGEgPSBjb25maWd1cmVkRmllbGRzLmZpbHRlcihcbiAgICAgICAgKG5hbWUpID0+XG4gICAgICAgICAgZGlzcGxheUF0dHJzLmhhc093blByb3BlcnR5KG5hbWUpICYmXG4gICAgICAgICAgZGlzcGxheUF0dHJzW25hbWVdICE9IG51bGwgJiZcbiAgICAgICAgICBkaXNwbGF5QXR0cnNbbmFtZV0gIT09IFwiXCIsXG4gICAgICApO1xuXG4gICAgICBhZ3JpTWFwQ2xpY2tEZWJ1ZyhcInBvcHVwIE9QRU5cIiwge1xuICAgICAgICBvaWQsXG4gICAgICAgIG9pZEZpZWxkLFxuICAgICAgICBsYXllcktleSxcbiAgICAgICAgYXR0cmlidXRlS2V5czogYWN0dWFsRmllbGRzLnNsaWNlKDAsIDEyKSxcbiAgICAgICAgcG9wdXBQb3NpdGlvbixcbiAgICAgIH0pO1xuXG4gICAgICAvLyBPcGVuIHRoZSBwb3B1cCBCRUZPUkUgZ29UbyDigJQgYXdhaXRpbmcgem9vbSBmaXJzdCBsZWZ0IGEgbG9uZyB3aW5kb3dcbiAgICAgIC8vIHdoZXJlIGEgdHdpbi9zaGFyZWQgY2xpY2sgcGF0aCBjb3VsZCBmYWlsIGFuZCB3aXBlIHNob3dQb3B1cC5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcblxuICAgICAgICAvLyDinIUgc3RvcmUgd2hpY2ggbGF5ZXIvZHMgd2FzIGNsaWNrZWQgKGZvciBhbGlhcyByZXNvbHZpbmcpXG4gICAgICAgIGxhc3RDbGlja2VkRHNJZDogZHNJZCxcbiAgICAgICAgbGFzdENsaWNrZWRMYXllcktleTogbGF5ZXJLZXksXG5cbiAgICAgICAgc2VsZWN0ZWRBdHRyczogZGlzcGxheUF0dHJzLFxuICAgICAgICBzZWxlY3RlZE9JRDogTnVtYmVyKG9pZCksXG4gICAgICAgIG9iamVjdElkRmllbGQ6IG9pZEZpZWxkLFxuXG4gICAgICAgIHNob3dQb3B1cDogdHJ1ZSxcbiAgICAgICAgcG9wdXBNaW5pbWl6ZWQ6IGZhbHNlLFxuICAgICAgICBjaGFydEV4cGFuZGVkOiBzaG91bGRQaW4sXG4gICAgICAgIGNoYXJ0SG92ZXJJbmRleDogbnVsbCxcbiAgICAgICAgcG9wdXBQb3NpdGlvbixcbiAgICAgICAgZXJyb3I6XG4gICAgICAgICAgbWlzc2luZ0ZpZWxkcy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IHRoaXMudHIoXCJlcnJvci5jb25maWd1cmVkRmllbGRNaXNzaW5nXCIsIHtcbiAgICAgICAgICAgICAgICBmaWVsZHM6IG1pc3NpbmdGaWVsZHMuam9pbihcIiwgXCIpLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBmaWVsZHNXaXRoRGF0YS5sZW5ndGggPT09IDAgJiYgY29uZmlndXJlZEZpZWxkcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgID8gdGhpcy50cihcImVycm9yLm5vRGF0YUZvckNvbmZpZ3VyZWRGaWVsZHNcIilcbiAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgfSk7XG4gICAgICBwb3B1cE9wZW5lZEZvclRoaXNDbGljayA9IHRydWU7XG5cbiAgICAgIGNvbnN0IGNsaWNrZWRVbmlxdWVJZCA9XG4gICAgICAgIHRoaXMuZmluZEF0dHJpYnV0ZVZhbHVlQ2FzZUluc2Vuc2l0aXZlKFxuICAgICAgICAgIGRpc3BsYXlBdHRycyxcbiAgICAgICAgICBBR1JJX1RBQkxFX0pPSU5fRklFTEQsXG4gICAgICAgICkgPz9cbiAgICAgICAgdGhpcy5maW5kQXR0cmlidXRlVmFsdWVDYXNlSW5zZW5zaXRpdmUoXG4gICAgICAgICAgZi5hdHRyaWJ1dGVzIGFzIFJlY29yZDxzdHJpbmcsIGFueT4sXG4gICAgICAgICAgQUdSSV9UQUJMRV9KT0lOX0ZJRUxELFxuICAgICAgICApO1xuICAgICAgaWYgKGNsaWNrZWRVbmlxdWVJZCAhPSBudWxsICYmIFN0cmluZyhjbGlja2VkVW5pcXVlSWQpLnRyaW0oKSAhPT0gXCJcIikge1xuICAgICAgICBjb25zdCBjbGVhblVuaXF1ZUlkID0gU3RyaW5nKGNsaWNrZWRVbmlxdWVJZCkudHJpbSgpO1xuICAgICAgICB0aGlzLl9hY3RpdmVJbnNwZWN0ZWRVbmlxdWVpZCA9IGNsZWFuVW5pcXVlSWQucmVwbGFjZSgvW3t9XS9nLCBcIlwiKS50cmltKCk7XG4gICAgICAgIGFncmlNYXBDbGlja0RlYnVnKFwic2VsZWN0aW9uOmJyb2FkY2FzdFwiLCB7XG4gICAgICAgICAgdW5pcXVlaWQ6IGNsZWFuVW5pcXVlSWQsXG4gICAgICAgICAgc291cmNlOiBcIkFncmlQb3B1cFwiLFxuICAgICAgICAgIHBvbHlnb25Nb2RlOiB0cnVlLFxuICAgICAgICAgIGRlc3RpbmF0aW9uczogW1wiQWdyaUxvY2FsaXphdGlvblwiLCBcIkFncmlHcmFmZjEwXCJdLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ub3RpZnlHcmFmZlBvbHlnb25TZWxlY3Rpb24oY2xlYW5VbmlxdWVJZCwgdHJ1ZSwgY2xpY2tTdGFydGVkQXQpO1xuICAgICAgICB2b2lkIHRoaXMuZmV0Y2hMYXRlc3RWZWdldGF0aW9uSW5kaWNlcyhjbGVhblVuaXF1ZUlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGxvYWRpbmdMYXRlc3RJbmRpY2VzOiBmYWxzZSxcbiAgICAgICAgICBsYXRlc3RJbmRleERhdGU6IG51bGwsXG4gICAgICAgICAgbGF0ZXN0SW5kZXhWYWx1ZXM6IG51bGwsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB6b29tVG8gPSB0aGlzLnByb3BzLmNvbmZpZz8uc2V0dGluZ3M/Lnpvb21Ub1NlbGVjdGlvbiAhPT0gZmFsc2U7XG4gICAgICBpZiAoem9vbVRvICYmIGYuZ2VvbWV0cnkgJiYgIWlzU3RhbGUoKSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIEtlZXAgdGhlIGZpcnN0IHByZS1zZWxlY3Rpb24gZXh0ZW50IHNvIGNsb3NpbmcgcmVzdG9yZXMgdGhlXG4gICAgICAgICAgLy8gZGlzdHJpY3QvcmVnaW9uIHZpZXcgZXZlbiBpZiBhbm90aGVyIGZpZWxkIGlzIGNsaWNrZWQgbmV4dC5cbiAgICAgICAgICBpZiAoIXRoaXMuX2V4dGVudEJlZm9yZVNlbGVjdGlvbiAmJiB2aWV3LmV4dGVudD8uY2xvbmUpIHtcbiAgICAgICAgICAgIHRoaXMuX2V4dGVudEJlZm9yZVNlbGVjdGlvbiA9IHZpZXcuZXh0ZW50LmNsb25lKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEtlZXAgdGhlIHdob2xlIGZpZWxkIHZpc2libGUgd2l0aCBvbmx5IGEgc21hbGwgbWFyZ2luLlxuICAgICAgICAgIGNvbnN0IHRhcmdldCA9XG4gICAgICAgICAgICAoZi5nZW9tZXRyeSBhcyBhbnkpLmV4dGVudD8uZXhwYW5kPy4oMS4wOCkgfHwgZi5nZW9tZXRyeTtcbiAgICAgICAgICBhZ3JpTWFwQ2xpY2tEZWJ1ZyhcInpvb206c3RhcnRcIiwge1xuICAgICAgICAgICAgdW5pcXVlaWQ6IGNsaWNrZWRVbmlxdWVJZCA9PSBudWxsID8gbnVsbCA6IFN0cmluZyhjbGlja2VkVW5pcXVlSWQpLFxuICAgICAgICAgICAgZ2VvbWV0cnlUeXBlOiBmLmdlb21ldHJ5LnR5cGUsXG4gICAgICAgICAgICBkdXJhdGlvbk1zOiA2NTAsXG4gICAgICAgICAgICB0YXJnZXRFeHRlbnQ6ICh0YXJnZXQgYXMgYW55KT8udG9KU09OPy4oKSB8fCBudWxsLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZvaWQgdmlldy5nb1RvKFxuICAgICAgICAgICAgeyB0YXJnZXQgfSxcbiAgICAgICAgICAgIHsgZHVyYXRpb246IDY1MCwgZWFzaW5nOiBcImVhc2UtaW4tb3V0XCIgYXMgYW55IH0sXG4gICAgICAgICAgKS50aGVuKFxuICAgICAgICAgICAgKCkgPT4gYWdyaU1hcENsaWNrRGVidWcoXCJ6b29tOmNvbXBsZXRlXCIsIHtcbiAgICAgICAgICAgICAgdW5pcXVlaWQ6IGNsaWNrZWRVbmlxdWVJZCA9PSBudWxsID8gbnVsbCA6IFN0cmluZyhjbGlja2VkVW5pcXVlSWQpLFxuICAgICAgICAgICAgICBzY2FsZTogKHZpZXcgYXMgYW55KS5zY2FsZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IGFncmlNYXBDbGlja1dhcm4oXCJ6b29tOmZhaWxlZFwiLCB7XG4gICAgICAgICAgICAgIHVuaXF1ZWlkOiBjbGlja2VkVW5pcXVlSWQgPT0gbnVsbCA/IG51bGwgOiBTdHJpbmcoY2xpY2tlZFVuaXF1ZUlkKSxcbiAgICAgICAgICAgICAgZXJyb3I6IGVycm9yPy5tZXNzYWdlIHx8IFN0cmluZyhlcnJvciksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAvKiBpZ25vcmUgKi9cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBBdHRhY2htZW50cyBhcmUgYmVzdC1lZmZvcnQg4oCUIG5ldmVyIGxldCBhIG1lZGlhIGZldGNoIHdpcGUgYW4gb3BlbiBwb3B1cFxuICAgICAgLy8gKHRoYXQgd2FzIHRoZSBcInZlZ2V0YXRpb24gdXBkYXRlcyBidXQgcG9wdXAgb25seSBzdGlja3Mgb24gMm5kLzNyZCBjbGlja1wiXG4gICAgICAvLyBmYWlsdXJlOiBub3RpZnlHcmFmZiByYW4sIHRoZW4gbG9hZEF0dGFjaG1lbnRzIHRocmV3IOKGkiBjYXRjaCBjbG9zZWQgVUlcbiAgICAgIC8vIGFuZCByZXN0b3JlRXh0ZW50QmVmb3JlU2VsZWN0aW9uIG1hZGUgdGhlIG1hcCBsb29rIGxpa2Ugb3RoZXIgZmllbGRzKS5cbiAgICAgIGlmICh0aGlzLnByb3BzLmNvbmZpZz8uc2V0dGluZ3M/LnNob3dBdHRhY2htZW50cyAhPT0gZmFsc2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBRdWVyeSBhdHRhY2htZW50cyBvbiB0aGUgZGV0YWNoZWQgY2xpZW50IHRvbyDigJQgcXVlcnlBdHRhY2htZW50c1xuICAgICAgICAgIC8vIG9uIGEgbGl2ZSBNYXBJbWFnZSBzdWJsYXllciBjYW4gcmVoeWRyYXRlIGl0IChzYW1lIERFLWNsZWFyaW5nXG4gICAgICAgICAgLy8gcGF0aCBhcyBxdWVyeUZlYXR1cmVzKSBhbmQgaXQgb2Z0ZW4gbGFja3MgdGhlIEFQSSBhbnl3YXkuXG4gICAgICAgICAgY29uc3QgY2xpY2tlZFVybCA9IFN0cmluZygoY2xpY2tlZExheWVyIGFzIGFueSkudXJsIHx8IFwiXCIpLnRyaW0oKTtcbiAgICAgICAgICBjb25zdCBhdHRhY2htZW50TGF5ZXIgPVxuICAgICAgICAgICAgKGNsaWNrZWRVcmwgJiYgdGhpcy5fcXVlcnlPbmx5TGF5ZXJzLmdldChjbGlja2VkVXJsKSkgfHxcbiAgICAgICAgICAgIGNsaWNrZWRMYXllcjtcbiAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRBdHRhY2htZW50c0Zvck9pZChhdHRhY2htZW50TGF5ZXIgYXMgYW55LCBOdW1iZXIob2lkKSk7XG4gICAgICAgIH0gY2F0Y2ggKGF0dGFjaEVycjogYW55KSB7XG4gICAgICAgICAgYWdyaU1hcENsaWNrV2FybihcImF0dGFjaG1lbnRzIGZhaWxlZCAocG9wdXAga2VwdCBvcGVuKVwiLCB7XG4gICAgICAgICAgICBtZXNzYWdlOiBhdHRhY2hFcnI/Lm1lc3NhZ2UgfHwgU3RyaW5nKGF0dGFjaEVyciksXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKCFpc1N0YWxlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nQXR0YWNobWVudHM6IGZhbHNlLCBhdHRhY2htZW50czogW10gfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFpc1N0YWxlKCkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmdBdHRhY2htZW50czogZmFsc2UsIGF0dGFjaG1lbnRzOiBbXSB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1N0YWxlKCkpIHJldHVybjtcblxuICAgICAgaWYgKHRoaXMuc3RhdGUucGluVG9Db3JuZXIpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZVBvcHVwTGF5b3V0QWZ0ZXJDb250ZW50KCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNEYXNoYm9hcmRFbWJlZGRlZCgpKSB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVQb3B1cExheW91dEFmdGVyQ29udGVudCgpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgICAgLy8gTmV2ZXIgbGV0IGEgc3VwZXJzZWRlZCB0d2luL3NoYXJlZCBjbGljayBjbGVhciBhIG5ld2VyIHBvcHVwLlxuICAgICAgaWYgKGlzU3RhbGUoKSkgcmV0dXJuO1xuICAgICAgLy8gSWYgd2UgYWxyZWFkeSBvcGVuZWQgdGhlIHBvcHVwIGZvciBUSElTIGNsaWNrLCBrZWVwIGl0IOKAlCBzdXJmYWNlIGVycm9yIG9ubHkuXG4gICAgICBpZiAocG9wdXBPcGVuZWRGb3JUaGlzQ2xpY2spIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IHRoaXMudHIoXCJlcnJvci51bmV4cGVjdGVkXCIsIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGU/Lm1lc3NhZ2UgfHwgXCJVbmtub3duIGVycm9yXCIsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgbG9hZGluZ0F0dGFjaG1lbnRzOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IHRoaXMudHIoXCJlcnJvci51bmV4cGVjdGVkXCIsIHtcbiAgICAgICAgICBtZXNzYWdlOiBlPy5tZXNzYWdlIHx8IFwiVW5rbm93biBlcnJvclwiLFxuICAgICAgICB9KSxcbiAgICAgICAgc2hvd1BvcHVwOiBmYWxzZSxcbiAgICAgICAgbG9hZGluZ0F0dGFjaG1lbnRzOiBmYWxzZSxcbiAgICAgICAgYXR0YWNobWVudHM6IFtdLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmNsZWFySGlnaGxpZ2h0KCk7XG4gICAgICB0aGlzLm5vdGlmeUdyYWZmUG9seWdvblNlbGVjdGlvbihcIlwiLCBmYWxzZSk7XG4gICAgICB0aGlzLnJlc3RvcmVFeHRlbnRCZWZvcmVTZWxlY3Rpb24oKTtcbiAgICB9XG4gIH07XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLSBBdHRhY2htZW50cyBoZWxwZXJzIC0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICBwcml2YXRlIGFzeW5jIGZldGNoQXR0YWNobWVudFByZXZpZXcodXJsOiBzdHJpbmcpOiBQcm9taXNlPEJsb2I+IHtcbiAgICBjb25zdCByZXNwID0gYXdhaXQgZXNyaVJlcXVlc3QodXJsLCB7XG4gICAgICByZXNwb25zZVR5cGU6IFwiYmxvYlwiLFxuICAgICAgcXVlcnk6IHt9LFxuICAgIH0gYXMgYW55KTtcbiAgICByZXR1cm4gcmVzcD8uZGF0YSBpbnN0YW5jZW9mIEJsb2IgPyByZXNwLmRhdGEgOiAocmVzcCBhcyB1bmtub3duIGFzIEJsb2IpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXZva2VBbGxBdHRhY2htZW50VXJscygpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYXR0cyA9IHRoaXMuc3RhdGUuYXR0YWNobWVudHMgfHwgW107XG4gICAgICBhdHRzLmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgaWYgKGEucHJldmlld09iamVjdFVybCkgVVJMLnJldm9rZU9iamVjdFVSTChhLnByZXZpZXdPYmplY3RVcmwpO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCB7fVxuICB9XG5cbiAgcHJpdmF0ZSBpc0ltYWdlQ29udGVudFR5cGUoY3Q/OiBzdHJpbmcpIHtcbiAgICBpZiAoIWN0KSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIC9eaW1hZ2VcXC8vaS50ZXN0KGN0KTtcbiAgfVxuXG4gIHByaXZhdGUgYnl0ZXNUb1NpemUobj86IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKCFuICYmIG4gIT09IDApIHJldHVybiBcIlwiO1xuICAgIGlmIChuID09PSAwKSByZXR1cm4gXCIwIEJcIjtcbiAgICBjb25zdCBrID0gMTAyNCxcbiAgICAgIHNpemVzID0gW1wiQlwiLCBcIktCXCIsIFwiTUJcIiwgXCJHQlwiLCBcIlRCXCJdO1xuICAgIGNvbnN0IGkgPSBNYXRoLmZsb29yKE1hdGgubG9nKG4pIC8gTWF0aC5sb2coaykpO1xuICAgIHJldHVybiBgJHsobiAvIE1hdGgucG93KGssIGkpKS50b0ZpeGVkKDIpfSAke3NpemVzW2ldfWA7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGxvYWRBdHRhY2htZW50c0Zvck9pZChsYXllcjogRmVhdHVyZUxheWVyLCBvaWQ6IG51bWJlcikge1xuICAgIC8vIOKchSBJZiBsYXllciBkb2VzbuKAmXQgc3VwcG9ydCBhdHRhY2htZW50cyAtPiBzaWxlbnRseSBzaG93IG5vbmUgKE5PIHdhcm5pbmcpXG4gICAgaWYgKCF0aGlzLmxheWVyU3VwcG9ydHNBdHRhY2htZW50cyhsYXllcikpIHtcbiAgICAgIGlmICghdGhpcy5faXNNb3VudGVkKSByZXR1cm47XG4gICAgICB0aGlzLnJldm9rZUFsbEF0dGFjaG1lbnRVcmxzKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbG9hZGluZ0F0dGFjaG1lbnRzOiBmYWxzZSxcbiAgICAgICAgYXR0YWNobWVudHM6IFtdLFxuICAgICAgICBhdHRhY2htZW50c0Vycm9yOiBudWxsLFxuICAgICAgICBhdHRhY2htZW50c0V4cGFuZGVkOiB0cnVlLCAvLyBrZWVwIGFyZWEgdmlzaWJsZSBpZiB5b3Ugd2FudCBcIk5vIGF0dGFjaG1lbnRzXCJcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB0aGlzLnJldm9rZUFsbEF0dGFjaG1lbnRVcmxzKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbG9hZGluZ0F0dGFjaG1lbnRzOiB0cnVlLFxuICAgICAgICBhdHRhY2htZW50czogW10sXG4gICAgICAgIGF0dGFjaG1lbnRzRXJyb3I6IG51bGwsXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbGF5ZXIucXVlcnlBdHRhY2htZW50cyh7IG9iamVjdElkczogW29pZF0gfSk7XG4gICAgICBjb25zdCBsaXN0ID0gKHJlc3VsdD8uW29pZF0gfHwgW10pIGFzIGFueVtdO1xuXG4gICAgICBjb25zdCBpdGVtczogQXR0YWNobWVudEl0ZW1bXSA9IGxpc3QubWFwKChhdHQpID0+ICh7XG4gICAgICAgIGlkOiBhdHQuaWQsXG4gICAgICAgIG5hbWU6IGF0dC5uYW1lLFxuICAgICAgICBzaXplOiBhdHQuc2l6ZSxcbiAgICAgICAgY29udGVudFR5cGU6IGF0dC5jb250ZW50VHlwZSxcbiAgICAgICAgdXJsOiBhdHQudXJsLFxuICAgICAgfSkpO1xuXG4gICAgICBjb25zdCB3aXRoUHJldmlld3M6IEF0dGFjaG1lbnRJdGVtW10gPSBbXTtcbiAgICAgIGZvciAoY29uc3QgaXQgb2YgaXRlbXMpIHtcbiAgICAgICAgaWYgKGl0LnVybCAmJiB0aGlzLmlzSW1hZ2VDb250ZW50VHlwZShpdC5jb250ZW50VHlwZSkpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IHRoaXMuZmV0Y2hBdHRhY2htZW50UHJldmlldyhpdC51cmwpO1xuICAgICAgICAgICAgaXQucHJldmlld09iamVjdFVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAvLyBpZ25vcmUgcHJldmlldyBmYWlsdXJlc1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3aXRoUHJldmlld3MucHVzaChpdCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5faXNNb3VudGVkKSByZXR1cm47XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYXR0YWNobWVudHM6IHdpdGhQcmV2aWV3cyxcbiAgICAgICAgbG9hZGluZ0F0dGFjaG1lbnRzOiBmYWxzZSxcbiAgICAgICAgYXR0YWNobWVudHNFcnJvcjogbnVsbCxcbiAgICAgICAgYXR0YWNobWVudHNFeHBhbmRlZDogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICAvLyDinIUgSWYgc2VydmVyIHNheXMgYXR0YWNobWVudHMgbm90IHN1cHBvcnRlZC9lbmFibGVkIC0+IFNJTEVOVCAobm8gcmVkIHdhcm5pbmcpXG4gICAgICBjb25zdCBtc2cgPSBTdHJpbmcoZXJyPy5tZXNzYWdlIHx8IGVyciB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgY29uc3QgaXNOb3RTdXBwb3J0ZWQgPVxuICAgICAgICBtc2cuaW5jbHVkZXMoXCJkb2Vzbid0IHN1cHBvcnQgYXR0YWNobWVudHNcIikgfHxcbiAgICAgICAgbXNnLmluY2x1ZGVzKFwiZG9lcyBub3Qgc3VwcG9ydCBhdHRhY2htZW50c1wiKSB8fFxuICAgICAgICBtc2cuaW5jbHVkZXMoXCJhdHRhY2htZW50cyBhcmUgbm90IGVuYWJsZWRcIikgfHxcbiAgICAgICAgbXNnLmluY2x1ZGVzKFwiYXR0YWNobWVudHMgZGlzYWJsZWRcIikgfHxcbiAgICAgICAgKG1zZy5pbmNsdWRlcyhcIm5vdCBzdXBwb3J0ZWRcIikgJiYgbXNnLmluY2x1ZGVzKFwiYXR0YWNobWVudFwiKSk7XG5cbiAgICAgIGlmICghdGhpcy5faXNNb3VudGVkKSByZXR1cm47XG5cbiAgICAgIGlmIChpc05vdFN1cHBvcnRlZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBsb2FkaW5nQXR0YWNobWVudHM6IGZhbHNlLFxuICAgICAgICAgIGF0dGFjaG1lbnRzOiBbXSxcbiAgICAgICAgICBhdHRhY2htZW50c0Vycm9yOiBudWxsLFxuICAgICAgICAgIGF0dGFjaG1lbnRzRXhwYW5kZWQ6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsb2FkaW5nQXR0YWNobWVudHM6IGZhbHNlLFxuICAgICAgICBhdHRhY2htZW50czogW10sXG4gICAgICAgIGF0dGFjaG1lbnRzRXJyb3I6IFN0cmluZyhlcnI/Lm1lc3NhZ2UgfHwgZXJyIHx8IFwiQXR0YWNobWVudHMgZmFpbGVkXCIpLFxuICAgICAgICBhdHRhY2htZW50c0V4cGFuZGVkOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLSBGaWVsZCBhbGlhcyArIGZvcm1hdHRpbmcgLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gIHByaXZhdGUgaXNEYXRlRmllbGQobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgLy8gVXNlIHRoZSBjbGlja2VkIGxheWVyIGlmIHBvc3NpYmxlXG4gICAgY29uc3QgY2xpY2tlZExheWVyID0gdGhpcy5nZXRDbGlja2VkTGF5ZXIoKTtcbiAgICBjb25zdCBmbGQgPSBjbGlja2VkTGF5ZXI/LmZpZWxkcz8uZmluZCgoZmY6IGFueSkgPT4gZmYubmFtZSA9PT0gbmFtZSk7XG4gICAgcmV0dXJuIGlzRXNyaURhdGVGaWVsZFR5cGUoKGZsZCBhcyBhbnkpPy50eXBlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2xpY2tlZExheWVyKCk6IF9fZXNyaS5GZWF0dXJlTGF5ZXIgfCBudWxsIHtcbiAgICBjb25zdCBrZXkgPSB0aGlzLnN0YXRlLmxhc3RDbGlja2VkTGF5ZXJLZXk7XG4gICAgaWYgKCFrZXkpIHJldHVybiBudWxsO1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnN0YXRlLmZlYXR1cmVMYXllcnMuZmluZChcbiAgICAgICAgKEwpID0+XG4gICAgICAgICAgZ2V0QWdyaUxheWVyTWFwS2V5KEwpID09PSBrZXkgfHxcbiAgICAgICAgICBTdHJpbmcoTC51cmwgfHwgTC5pZCB8fCBcIlwiKSA9PT0ga2V5LFxuICAgICAgKSB8fCBudWxsXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZUZpZWxkTmFtZSA9IChrZXk6IHN0cmluZyk6IHN0cmluZyB8IG51bGwgPT4ge1xuICAgIC8vIFByZWZlciBEUyBzY2hlbWEgZm9yIHRoZSBMQVNUIGNsaWNrZWQgZHMgKGJlc3QgZm9yIGFsaWFzL2ppbXVOYW1lKVxuICAgIGNvbnN0IGRzSWQgPSB0aGlzLnN0YXRlLmxhc3RDbGlja2VkRHNJZDtcbiAgICBjb25zdCBkczogYW55ID1cbiAgICAgIGRzSWQgJiYgdGhpcy5zdGF0ZS5kYXRhU291cmNlc0J5SWQ/Lltkc0lkXVxuICAgICAgICA/IHRoaXMuc3RhdGUuZGF0YVNvdXJjZXNCeUlkW2RzSWRdXG4gICAgICAgIDogbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBzY2hlbWEgPSBkcz8uZ2V0U2NoZW1hPy4oKTtcbiAgICAgIGNvbnN0IGZpZWxkc09iaiA9IHNjaGVtYT8uZmllbGRzIHx8IHt9O1xuICAgICAgaWYgKGZpZWxkc09ialtrZXldPy5uYW1lKSByZXR1cm4gZmllbGRzT2JqW2tleV0ubmFtZTtcbiAgICAgIGZvciAoY29uc3QgayBvZiBPYmplY3Qua2V5cyhmaWVsZHNPYmopKSB7XG4gICAgICAgIGNvbnN0IGYgPSAoZmllbGRzT2JqIGFzIGFueSlba107XG4gICAgICAgIGlmIChmPy5uYW1lID09PSBrZXkgfHwgZj8uamltdU5hbWUgPT09IGtleSB8fCBrID09PSBrZXkpXG4gICAgICAgICAgcmV0dXJuIGY/Lm5hbWUgfHwga2V5O1xuICAgICAgfVxuICAgIH0gY2F0Y2gge31cblxuICAgIC8vIGZhbGxiYWNrIHRvIGNsaWNrZWQgbGF5ZXIgZmllbGRzXG4gICAgY29uc3QgY2xpY2tlZExheWVyID0gdGhpcy5nZXRDbGlja2VkTGF5ZXIoKTtcbiAgICBjb25zdCBsZiA9IGNsaWNrZWRMYXllcj8uZmllbGRzPy5maW5kKFxuICAgICAgKGZmOiBhbnkpID0+IGZmLm5hbWUgPT09IGtleSB8fCBmZi5hbGlhcyA9PT0ga2V5LFxuICAgICk7XG4gICAgcmV0dXJuIGxmPy5uYW1lIHx8IG51bGw7XG4gIH07XG5cbiAgcHJpdmF0ZSBub3JtYWxpemVGaWVsZEFsaWFzKGZpZWxkOiBhbnksIGZhbGxiYWNrTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbm9ybWFsaXplRmllbGRBbGlhc1NoYXJlZChmaWVsZCwgZmFsbGJhY2tOYW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgZmluZEZpZWxkTWV0YU9uTGF5ZXIoXG4gICAgbGF5ZXI6IGFueSxcbiAgICBmaWVsZE5hbWU6IHN0cmluZyxcbiAgKTogX19lc3JpLkZpZWxkIHwgbnVsbCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZmllbGROYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgZmllbGRzID0gQXJyYXkuaXNBcnJheShsYXllcj8uZmllbGRzKSA/IGxheWVyLmZpZWxkcyA6IFtdO1xuICAgIHJldHVybiAoXG4gICAgICAoZmllbGRzLmZpbmQoXG4gICAgICAgIChmOiBhbnkpID0+IFN0cmluZyhmPy5uYW1lIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCkgPT09IHRhcmdldCxcbiAgICAgICkgYXMgX19lc3JpLkZpZWxkIHwgdW5kZWZpbmVkKSB8fCBudWxsXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZUFsaWFzRnJvbUxpdmVMYXllcnMoZmllbGROYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgICBjb25zdCBsYXllcnM6IF9fZXNyaS5GZWF0dXJlTGF5ZXJbXSA9IFtdO1xuICAgIGNvbnN0IGNsaWNrZWQgPSB0aGlzLmdldENsaWNrZWRMYXllcigpO1xuICAgIGlmIChjbGlja2VkKSBsYXllcnMucHVzaChjbGlja2VkKTtcbiAgICBmb3IgKGNvbnN0IGxheWVyIG9mIHRoaXMuc3RhdGUuZmVhdHVyZUxheWVycyB8fCBbXSkge1xuICAgICAgaWYgKGxheWVyICYmICFsYXllcnMuaW5jbHVkZXMobGF5ZXIpKSBsYXllcnMucHVzaChsYXllcik7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBsYXllciBvZiBsYXllcnMpIHtcbiAgICAgIGNvbnN0IGZsZCA9IHRoaXMuZmluZEZpZWxkTWV0YU9uTGF5ZXIobGF5ZXIsIGZpZWxkTmFtZSk7XG4gICAgICBpZiAoIWZsZCkgY29udGludWU7XG4gICAgICBjb25zdCBhbGlhcyA9IHRoaXMubm9ybWFsaXplRmllbGRBbGlhcyhmbGQsIGZpZWxkTmFtZSk7XG4gICAgICBpZiAoYWxpYXMgJiYgYWxpYXMudG9Mb3dlckNhc2UoKSAhPT0gZmllbGROYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgcmV0dXJuIGFsaWFzO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZUFsaWFzRnJvbURhdGFTb3VyY2VTY2hlbWEoXG4gICAgZmllbGROYW1lOiBzdHJpbmcsXG4gICAgZHM6IGFueSxcbiAgKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgaWYgKCFkcykgcmV0dXJuIG51bGw7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZpZWxkc09iaiA9IGRzPy5nZXRTY2hlbWE/LigpPy5maWVsZHMgfHwge307XG4gICAgICBjb25zdCB0YXJnZXQgPSBmaWVsZE5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGZpZWxkc09iaikpIHtcbiAgICAgICAgY29uc3QgZiA9IGZpZWxkc09ialtrZXldO1xuICAgICAgICBjb25zdCBmbmFtZSA9IFN0cmluZyhmPy5uYW1lIHx8IGY/LmppbXVOYW1lIHx8IGtleSB8fCBcIlwiKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGZuYW1lLnRvTG93ZXJDYXNlKCkgIT09IHRhcmdldCAmJlxuICAgICAgICAgIGtleS50b0xvd2VyQ2FzZSgpICE9PSB0YXJnZXQgJiZcbiAgICAgICAgICBTdHJpbmcoZj8uamltdU5hbWUgfHwgXCJcIikudG9Mb3dlckNhc2UoKSAhPT0gdGFyZ2V0XG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsaWFzID0gdGhpcy5ub3JtYWxpemVGaWVsZEFsaWFzKGYsIGZpZWxkTmFtZSk7XG4gICAgICAgIGlmIChhbGlhcyAmJiBhbGlhcy50b0xvd2VyQ2FzZSgpICE9PSBmaWVsZE5hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgIHJldHVybiBhbGlhcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2gge1xuICAgICAgLyogaWdub3JlICovXG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGaWVsZEFsaWFzKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgY3VzdG9tID0gdGhpcy5wcm9wcy5jb25maWc/LmxhYmVscz8uW25hbWVdO1xuICAgIGlmIChjdXN0b20pIHJldHVybiBjdXN0b207XG5cbiAgICBjb25zdCByZWFsTmFtZSA9IHRoaXMucmVzb2x2ZUZpZWxkTmFtZShuYW1lKSB8fCBuYW1lO1xuXG4gICAgLy8gTGl2ZSBtYXAgbGF5ZXIgZmlyc3Qg4oCUIHJlZmxlY3RzIGxhdGVzdCBBcmNHSVMgZmllbGQgZGlzcGxheSBuYW1lc1xuICAgIGNvbnN0IGZyb21MYXllciA9IHRoaXMucmVzb2x2ZUFsaWFzRnJvbUxpdmVMYXllcnMocmVhbE5hbWUpO1xuICAgIGlmIChmcm9tTGF5ZXIpIHJldHVybiBmcm9tTGF5ZXI7XG5cbiAgICBjb25zdCBkc0lkID0gdGhpcy5zdGF0ZS5sYXN0Q2xpY2tlZERzSWQ7XG4gICAgY29uc3QgZHM6IGFueSA9XG4gICAgICBkc0lkICYmIHRoaXMuc3RhdGUuZGF0YVNvdXJjZXNCeUlkPy5bZHNJZF1cbiAgICAgICAgPyB0aGlzLnN0YXRlLmRhdGFTb3VyY2VzQnlJZFtkc0lkXVxuICAgICAgICA6IG51bGw7XG4gICAgY29uc3QgZnJvbURzID0gdGhpcy5yZXNvbHZlQWxpYXNGcm9tRGF0YVNvdXJjZVNjaGVtYShyZWFsTmFtZSwgZHMpO1xuICAgIGlmIChmcm9tRHMpIHJldHVybiBmcm9tRHM7XG5cbiAgICBmb3IgKGNvbnN0IGxheWVyRHMgb2YgT2JqZWN0LnZhbHVlcyh0aGlzLnN0YXRlLmRhdGFTb3VyY2VzQnlJZCB8fCB7fSkpIHtcbiAgICAgIGNvbnN0IGFsaWFzID0gdGhpcy5yZXNvbHZlQWxpYXNGcm9tRGF0YVNvdXJjZVNjaGVtYShyZWFsTmFtZSwgbGF5ZXJEcyk7XG4gICAgICBpZiAoYWxpYXMpIHJldHVybiBhbGlhcztcbiAgICB9XG5cbiAgICBjb25zdCBjbGlja2VkTGF5ZXIgPSB0aGlzLmdldENsaWNrZWRMYXllcigpO1xuICAgIGNvbnN0IGxheWVyRmxkID0gY2xpY2tlZExheWVyXG4gICAgICA/IHRoaXMuZmluZEZpZWxkTWV0YU9uTGF5ZXIoY2xpY2tlZExheWVyLCByZWFsTmFtZSlcbiAgICAgIDogbnVsbDtcbiAgICBpZiAobGF5ZXJGbGQ/LmFsaWFzKSByZXR1cm4gU3RyaW5nKGxheWVyRmxkLmFsaWFzKTtcblxuICAgIHJldHVybiByZWFsTmFtZTtcbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0RGF0ZVNtYXJ0KHJhdzogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gZm9ybWF0RGF0ZVNtYXJ0U2hhcmVkKHJhdyk7XG4gIH1cblxuICBwcml2YXRlIGZvcm1hdFZhbHVlKG5hbWU6IHN0cmluZywgcmF3OiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiBmb3JtYXRQb3B1cEF0dHJpYnV0ZVZhbHVlKHJhdywge1xuICAgICAgaXNEYXRlRmllbGQ6IHRoaXMuaXNEYXRlRmllbGQobmFtZSksXG4gICAgICBmb3JtYXREYXRlOiAodmFsdWUpID0+IHRoaXMuZm9ybWF0RGF0ZVNtYXJ0KHZhbHVlKSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T3V0RmllbGRzKGxheWVyOiBGZWF0dXJlTGF5ZXIsIG9pZEZpZWxkOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgLy8ga2VlcCB5b3VyIGRlYnVnZ2luZyBiZWhhdmlvclxuICAgIHJldHVybiBbXCIqXCJdO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLSBQb3B1cCBwb3NpdGlvbmluZyAtLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVQb3B1cFBvc2l0aW9uID0gKFxuICAgIGNsaWNrUG9pbnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSxcbiAgICB2aWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsXG4gICk6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdmlldy5jb250YWluZXIgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgcmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGNvbnN0IG1hcmdpbiA9IHRoaXMuUE9QVVBfTUFSR0lOO1xuICAgIGNvbnN0IHBvcHVwVyA9IHRoaXMuZ2V0UG9wdXBXaWR0aCh2aWV3KTtcbiAgICBjb25zdCBwb3B1cEggPSBwb3B1cFc7XG5cbiAgICAvLyDinIUgRUIgYnVpbGRzIGRpZmZlcjpcbiAgICAvLyAtIHNvbWUgZ2l2ZSBldi54L2V2LnkgcmVsYXRpdmUgdG8gY29udGFpbmVyICgwLi5yZWN0LndpZHRoKVxuICAgIC8vIC0gb3RoZXJzIGdpdmUgdmlld3BvcnQgY29vcmRzIChzYW1lIHNwYWNlIGFzIHJlY3QubGVmdC90b3ApXG4gICAgY29uc3QgbG9va3NDb250YWluZXJSZWxhdGl2ZSA9XG4gICAgICBjbGlja1BvaW50LnggPj0gMCAmJlxuICAgICAgY2xpY2tQb2ludC55ID49IDAgJiZcbiAgICAgIGNsaWNrUG9pbnQueCA8PSByZWN0LndpZHRoICsgMiAmJlxuICAgICAgY2xpY2tQb2ludC55IDw9IHJlY3QuaGVpZ2h0ICsgMjtcblxuICAgIC8vIENvbnZlcnQgY2xpY2sgdG8gVklFV1BPUlQgY29vcmRzIChiZWNhdXNlIHBvcHVwIGlzIHBvc2l0aW9uOiBmaXhlZClcbiAgICBjb25zdCB2aWV3cG9ydENsaWNrWCA9IGxvb2tzQ29udGFpbmVyUmVsYXRpdmVcbiAgICAgID8gcmVjdC5sZWZ0ICsgY2xpY2tQb2ludC54XG4gICAgICA6IGNsaWNrUG9pbnQueDtcbiAgICBjb25zdCB2aWV3cG9ydENsaWNrWSA9IGxvb2tzQ29udGFpbmVyUmVsYXRpdmVcbiAgICAgID8gcmVjdC50b3AgKyBjbGlja1BvaW50LnlcbiAgICAgIDogY2xpY2tQb2ludC55O1xuXG4gICAgLy8gTWFwIGNvbnRhaW5lciBib3VuZGFyaWVzIGluIHZpZXdwb3J0IGNvb3Jkc1xuICAgIGNvbnN0IG1hcExlZnQgPSByZWN0LmxlZnQ7XG4gICAgY29uc3QgbWFwVG9wID0gcmVjdC50b3A7XG4gICAgY29uc3QgbWFwUmlnaHQgPSByZWN0LnJpZ2h0O1xuICAgIGNvbnN0IG1hcEJvdHRvbSA9IHRoaXMuZ2V0RWZmZWN0aXZlTWFwQm90dG9tKHZpZXcsIG1hcmdpbik7XG5cbiAgICAvLyBQcmVmZXIgYm90dG9tLXJpZ2h0IG9mIGNsaWNrXG4gICAgbGV0IHggPSB2aWV3cG9ydENsaWNrWCArIG1hcmdpbjtcbiAgICBsZXQgeSA9IHZpZXdwb3J0Q2xpY2tZICsgbWFyZ2luO1xuXG4gICAgLy8gRmxpcCBsZWZ0IGlmIG92ZXJmbG93aW5nIHJpZ2h0IGVkZ2UgKENSSVRJQ0FMISlcbiAgICAvLyBDaGVjayBpZiBwb3B1cCB3b3VsZCBnbyBvdXRzaWRlIG1hcCdzIHJpZ2h0IGJvdW5kYXJ5XG4gICAgaWYgKHggKyBwb3B1cFcgPiBtYXBSaWdodCAtIG1hcmdpbikge1xuICAgICAgeCA9IHZpZXdwb3J0Q2xpY2tYIC0gcG9wdXBXIC0gbWFyZ2luO1xuICAgIH1cblxuICAgIC8vIEZsaXAgdXAgaWYgb3ZlcmZsb3dpbmcgYm90dG9tIGVkZ2VcbiAgICBpZiAoeSArIHBvcHVwSCA+IG1hcEJvdHRvbSAtIG1hcmdpbikge1xuICAgICAgeSA9IHZpZXdwb3J0Q2xpY2tZIC0gcG9wdXBIIC0gbWFyZ2luO1xuICAgIH1cblxuICAgIC8vIEZpbmFsIGhhcmQgY2xhbXAgdG8gbWFwIGNvbnRhaW5lciBib3VuZHNcbiAgICAvLyBUaGlzIGlzIHRoZSBjcml0aWNhbCBwYXJ0IC0gZW5zdXJlIHBvcHVwIE5FVkVSIGV4Y2VlZHMgbWFwIGJvdW5kc1xuICAgIGNvbnN0IG1pblggPSBtYXBMZWZ0ICsgbWFyZ2luO1xuICAgIGNvbnN0IG1heFggPSBtYXBSaWdodCAtIHBvcHVwVyAtIG1hcmdpbjtcbiAgICBjb25zdCBtaW5ZID0gbWFwVG9wICsgbWFyZ2luO1xuICAgIGNvbnN0IG1heFkgPSBtYXBCb3R0b20gLSBwb3B1cEggLSBtYXJnaW47XG5cbiAgICB4ID0gTWF0aC5tYXgobWluWCwgTWF0aC5taW4oeCwgbWF4WCkpO1xuICAgIHkgPSBNYXRoLm1heChtaW5ZLCBNYXRoLm1pbih5LCBtYXhZKSk7XG5cbiAgICAvLyBGSU5BTCBTQUZFVFkgTkVUOiBFbnN1cmUgeCBuZXZlciBleGNlZWRzIHJpZ2h0IGJvdW5kYXJ5XG4gICAgaWYgKHggKyBwb3B1cFcgPiBtYXBSaWdodCAtIG1hcmdpbikge1xuICAgICAgeCA9IG1hcFJpZ2h0IC0gcG9wdXBXIC0gbWFyZ2luO1xuICAgIH1cbiAgICAvLyBBbHNvIGVuc3VyZSB4ID49IGxlZnQgYm91bmRhcnlcbiAgICBpZiAoeCA8IG1hcExlZnQgKyBtYXJnaW4pIHtcbiAgICAgIHggPSBtYXBMZWZ0ICsgbWFyZ2luO1xuICAgIH1cblxuICAgIHJldHVybiB7IHgsIHkgfTtcbiAgfTtcblxuICBjb21wb25lbnREaWRVcGRhdGUoXG4gICAgcHJldlByb3BzOiBSZWFkb25seTxBbGxXaWRnZXRQcm9wczxDb25maWc+PixcbiAgICBwcmV2U3RhdGU6IFJlYWRvbmx5PFN0YXRlPixcbiAgKSB7XG4gICAgY29uc3QgcHJldkRzID0gZ2V0U2VsZWN0ZWREc0lkcyhwcmV2UHJvcHMudXNlRGF0YVNvdXJjZXMpLmpvaW4oXCJ8XCIpO1xuICAgIGNvbnN0IG5leHREcyA9IGdldFNlbGVjdGVkRHNJZHModGhpcy5wcm9wcy51c2VEYXRhU291cmNlcykuam9pbihcInxcIik7XG4gICAgY29uc3QgZHNDaGFuZ2VkID0gcHJldkRzICE9PSBuZXh0RHM7XG4gICAgY29uc3QgcHJldk1hcCA9IFN0cmluZyhcbiAgICAgIChwcmV2UHJvcHMudXNlTWFwV2lkZ2V0SWRzIGFzIGFueSk/LlswXSB8fFxuICAgICAgICAocHJldlByb3BzLnVzZU1hcFdpZGdldElkcyBhcyBhbnkpPy5nZXQ/LigwKSB8fFxuICAgICAgICBcIlwiLFxuICAgICk7XG4gICAgY29uc3QgbmV4dE1hcCA9IFN0cmluZyhcbiAgICAgICh0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcyBhcyBhbnkpPy5bMF0gfHxcbiAgICAgICAgKHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzIGFzIGFueSk/LmdldD8uKDApIHx8XG4gICAgICAgIFwiXCIsXG4gICAgKTtcbiAgICBjb25zdCBtYXBDaGFuZ2VkID0gcHJldk1hcCAhPT0gbmV4dE1hcDtcbiAgICBpZiAoKGRzQ2hhbmdlZCB8fCBtYXBDaGFuZ2VkKSAmJiB0aGlzLnN0YXRlLmppbXVNYXBWaWV3KSB7XG4gICAgICB2b2lkIHRoaXMuaW5pdGlhbGl6ZU1hcENvbm5lY3Rpb24odGhpcy5zdGF0ZS5qaW11TWFwVmlldyk7XG4gICAgfSBlbHNlIGlmIChtYXBDaGFuZ2VkKSB7XG4gICAgICB0aGlzLnNjaGVkdWxlTWFwVmlld0ZhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgcHJldlN0YXRlLnNob3dQb3B1cCAhPT0gdGhpcy5zdGF0ZS5zaG93UG9wdXAgfHxcbiAgICAgIHByZXZTdGF0ZS5wb3B1cE1pbmltaXplZCAhPT0gdGhpcy5zdGF0ZS5wb3B1cE1pbmltaXplZFxuICAgICkge1xuICAgICAgdGhpcy5icm9hZGNhc3RQb3B1cFZpc2liaWxpdHkoXG4gICAgICAgIHRoaXMuc3RhdGUuc2hvd1BvcHVwICYmICF0aGlzLnN0YXRlLnBvcHVwTWluaW1pemVkLFxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdGhpcy5zdGF0ZS5zaG93UG9wdXAgJiZcbiAgICAgICF0aGlzLnN0YXRlLnBvcHVwTWluaW1pemVkICYmXG4gICAgICBwcmV2U3RhdGUucGluVG9Db3JuZXIgIT09IHRoaXMuc3RhdGUucGluVG9Db3JuZXJcbiAgICApIHtcbiAgICAgIHRoaXMuYnJvYWRjYXN0UG9wdXBWaXNpYmlsaXR5KHRydWUpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5zdGF0ZS5zaG93UG9wdXAgfHwgdGhpcy5zdGF0ZS5wb3B1cE1pbmltaXplZCkgcmV0dXJuO1xuXG4gICAgY29uc3Qgb3BlbmVkTm93ID1cbiAgICAgICh0aGlzLnN0YXRlLnNob3dQb3B1cCAmJiAhcHJldlN0YXRlLnNob3dQb3B1cCkgfHxcbiAgICAgIChwcmV2U3RhdGUucG9wdXBNaW5pbWl6ZWQgJiYgIXRoaXMuc3RhdGUucG9wdXBNaW5pbWl6ZWQpO1xuICAgIGNvbnN0IGF0dGFjaG1lbnRzQ2hhbmdlZCA9XG4gICAgICB0aGlzLnN0YXRlLmxvYWRpbmdBdHRhY2htZW50cyAhPT0gcHJldlN0YXRlLmxvYWRpbmdBdHRhY2htZW50cyB8fFxuICAgICAgKHRoaXMuc3RhdGUuYXR0YWNobWVudHM/Lmxlbmd0aCB8fCAwKSAhPT1cbiAgICAgICAgKHByZXZTdGF0ZS5hdHRhY2htZW50cz8ubGVuZ3RoIHx8IDApO1xuICAgIGNvbnN0IGxvYWRpbmdDaGFuZ2VkID0gdGhpcy5zdGF0ZS5sb2FkaW5nICE9PSBwcmV2U3RhdGUubG9hZGluZztcbiAgICBjb25zdCBhdHRyc0NoYW5nZWQgPSB0aGlzLnN0YXRlLnNlbGVjdGVkQXR0cnMgIT09IHByZXZTdGF0ZS5zZWxlY3RlZEF0dHJzO1xuXG4gICAgaWYgKFxuICAgICAgIW9wZW5lZE5vdyAmJlxuICAgICAgIWF0dGFjaG1lbnRzQ2hhbmdlZCAmJlxuICAgICAgIWxvYWRpbmdDaGFuZ2VkICYmXG4gICAgICAhYXR0cnNDaGFuZ2VkXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zY2hlZHVsZVBvcHVwTGF5b3V0QWZ0ZXJDb250ZW50KCk7XG4gIH1cblxuICBwcml2YXRlIGNsb3NlUG9wdXAgPSAob3B0cz86IHtcbiAgICByZXN0b3JlRXh0ZW50PzogYm9vbGVhbjtcbiAgICBub3RpZnlEZXNlbGVjdD86IGJvb2xlYW47XG4gIH0pID0+IHtcbiAgICAvLyBDbG9zaW5nIHRoZSBwYW5lbCBhbG9uZSBtdXN0IGtlZXAgdGhlIHBvbHlnb24gaGlnaGxpZ2h0ICsgbWFwIGV4dGVudC5cbiAgICAvLyBFeHBsaWNpdCBjYWxsZXJzIChlbXB0eSBtYXAgY2xpY2sgLyBnZW8gcmVzZXQpIG9wdCBpbnRvIHJlc3RvcmUvZGVzZWxlY3QuXG4gICAgY29uc3QgcmVzdG9yZUV4dGVudCA9IG9wdHM/LnJlc3RvcmVFeHRlbnQgPT09IHRydWU7XG4gICAgY29uc3Qgbm90aWZ5RGVzZWxlY3QgPSBvcHRzPy5ub3RpZnlEZXNlbGVjdCA9PT0gdHJ1ZTtcblxuICAgIC8vIEludmFsaWRhdGUgZXZlcnkgcGVuZGluZyBoaXRUZXN0L3F1ZXJ5L2F0dGFjaG1lbnQgcmVxdWVzdC4gT3RoZXJ3aXNlIGFcbiAgICAvLyBmaWVsZCBjbGljayB0aGF0IHdhcyBzdGlsbCBsb2FkaW5nIGNvdWxkIHJlb3BlbiBpdHMgc3RhbGUgcG9wdXAgYWZ0ZXJcbiAgICAvLyB0aGUgdXNlciBoYWQgYWxyZWFkeSBtb3ZlZCB0byBhbm90aGVyIGRpc3RyaWN0IG9yIHJlZ2lvbi5cbiAgICB0aGlzLl9jbGlja0dlbmVyYXRpb24gKz0gMTtcbiAgICB0aGlzLl9sYXRlc3RJbmRpY2VzUmVxdWVzdElkICs9IDE7XG5cbiAgICBpZiAoIXRoaXMuc3RhdGUuc2hvd1BvcHVwKSB7XG4gICAgICBpZiAobm90aWZ5RGVzZWxlY3QpIHtcbiAgICAgICAgdGhpcy5jbGVhckhpZ2hsaWdodCgpO1xuICAgICAgICB0aGlzLm5vdGlmeUdyYWZmUG9seWdvblNlbGVjdGlvbihcIlwiLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICBpZiAoIXJlc3RvcmVFeHRlbnQpIHRoaXMuX2V4dGVudEJlZm9yZVNlbGVjdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICBzZWxlY3RlZEF0dHJzOiBudWxsLFxuICAgICAgICBzZWxlY3RlZE9JRDogbnVsbCxcbiAgICAgICAgb2JqZWN0SWRGaWVsZDogbnVsbCxcbiAgICAgICAgbGFzdENsaWNrZWREc0lkOiBudWxsLFxuICAgICAgICBsYXN0Q2xpY2tlZExheWVyS2V5OiBudWxsLFxuICAgICAgICBwb3B1cFBvc2l0aW9uOiBudWxsLFxuICAgICAgICBjbGlja1NjcmVlblBvaW50OiBudWxsLFxuICAgICAgICBwb3B1cE1pbmltaXplZDogZmFsc2UsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobm90aWZ5RGVzZWxlY3QpIHtcbiAgICAgIHRoaXMuY2xlYXJIaWdobGlnaHQoKTtcbiAgICAgIHRoaXMubm90aWZ5R3JhZmZQb2x5Z29uU2VsZWN0aW9uKFwiXCIsIGZhbHNlKTtcbiAgICB9XG4gICAgdGhpcy5yZXZva2VBbGxBdHRhY2htZW50VXJscygpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd1BvcHVwOiBmYWxzZSxcbiAgICAgIHBvcHVwTWluaW1pemVkOiBmYWxzZSxcbiAgICAgIHBvcHVwUG9zaXRpb246IG51bGwsXG4gICAgICBjbGlja1NjcmVlblBvaW50OiBudWxsLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBlcnJvcjogbnVsbCxcbiAgICAgIHNlbGVjdGVkQXR0cnM6IG51bGwsXG4gICAgICBzZWxlY3RlZE9JRDogbnVsbCxcbiAgICAgIG9iamVjdElkRmllbGQ6IG51bGwsXG4gICAgICBsYXN0Q2xpY2tlZERzSWQ6IG51bGwsXG4gICAgICBsYXN0Q2xpY2tlZExheWVyS2V5OiBudWxsLFxuICAgICAgYXR0YWNobWVudHM6IFtdLFxuICAgICAgYXR0YWNobWVudHNFeHBhbmRlZDogZmFsc2UsXG4gICAgICBsb2FkaW5nQXR0YWNobWVudHM6IGZhbHNlLFxuICAgICAgY2hhcnRFeHBhbmRlZDogZmFsc2UsXG4gICAgICBjaGFydEhvdmVySW5kZXg6IG51bGwsXG4gICAgICBsb2FkaW5nTGF0ZXN0SW5kaWNlczogZmFsc2UsXG4gICAgICBsYXRlc3RJbmRleERhdGU6IG51bGwsXG4gICAgICBsYXRlc3RJbmRleFZhbHVlczogbnVsbCxcbiAgICB9KTtcbiAgICBpZiAocmVzdG9yZUV4dGVudCkge1xuICAgICAgdGhpcy5yZXN0b3JlRXh0ZW50QmVmb3JlU2VsZWN0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2V4dGVudEJlZm9yZVNlbGVjdGlvbiA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIC8qKiBIZWFkZXIgWCDigJQgY29sbGFwc2UgdGhlIHBhbmVsOyBrZWVwIHBvbHlnb24gc2VsZWN0aW9uICsgbG9hZGVkIGF0dHJzLiAqL1xuICBwcml2YXRlIG1pbmltaXplUG9wdXAgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKCF0aGlzLl9pc01vdW50ZWQgfHwgIXRoaXMuc3RhdGUuc2hvd1BvcHVwIHx8IHRoaXMuc3RhdGUucG9wdXBNaW5pbWl6ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHBvcHVwTWluaW1pemVkOiB0cnVlIH0pO1xuICB9O1xuXG4gIC8qKiBFeHBhbmQgYSBwcmV2aW91c2x5IG1pbmltaXplZCBhdHRyaWJ1dGUgcGFuZWwuICovXG4gIHByaXZhdGUgZXhwYW5kUG9wdXAgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKCF0aGlzLl9pc01vdW50ZWQgfHwgIXRoaXMuc3RhdGUuc2hvd1BvcHVwIHx8ICF0aGlzLnN0YXRlLnBvcHVwTWluaW1pemVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBwb3B1cE1pbmltaXplZDogZmFsc2UgfSk7XG4gIH07XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLSBEUyBob29rIChpbnN0YW50aWF0ZXMgRFMpIC0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICBvbkRhdGFTb3VyY2VDcmVhdGVkID0gKGRzOiBRdWVyaWFibGVEYXRhU291cmNlKSA9PiB7XG4gICAgaWYgKCFkcz8uaWQpIHJldHVybjtcbiAgICB0aGlzLmRhdGFTb3VyY2VFbmdpbmUub25Ec0NyZWF0ZWQoXG4gICAgICBkcyxcbiAgICAgIGdldFNlbGVjdGVkRHNJZHModGhpcy5wcm9wcy51c2VEYXRhU291cmNlcyksXG4gICAgKTtcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2KSA9PiAoe1xuICAgICAgZGF0YVNvdXJjZXNCeUlkOiB7IC4uLihwcmV2LmRhdGFTb3VyY2VzQnlJZCB8fCB7fSksIFtkcy5pZF06IGRzIH0sXG4gICAgfSkpO1xuICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3KSB7XG4gICAgICB2b2lkIHRoaXMuaW5pdGlhbGl6ZU1hcENvbm5lY3Rpb24odGhpcy5zdGF0ZS5qaW11TWFwVmlldyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2NoZWR1bGVNYXBWaWV3RmFsbGJhY2soKTtcbiAgICB9XG4gIH07XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLSBDaGFydCByZW5kZXJpbmcgLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gIHByaXZhdGUgdG9nZ2xlQ2hhcnRFeHBhbmRlZCA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2KSA9PiAoeyBjaGFydEV4cGFuZGVkOiAhcHJldi5jaGFydEV4cGFuZGVkIH0pKTtcbiAgfTtcblxuICBwcml2YXRlIHJlbmRlckNoYXJ0SWNvbiA9ICh0eXBlOiBcImJhclwiIHwgXCJsaW5lXCIgPSBcImJhclwiKTogSlNYLkVsZW1lbnQgPT5cbiAgICB0eXBlID09PSBcImxpbmVcIiA/IChcbiAgICAgIDxMaW5lQ2hhcnQgY2xhc3NOYW1lPVwiYWdyaTMtY2hhcnQtaWNvblwiIHN0cm9rZVdpZHRoPXsyfSBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICkgOiAoXG4gICAgICA8QmFyQ2hhcnQzIGNsYXNzTmFtZT1cImFncmkzLWNoYXJ0LWljb25cIiBzdHJva2VXaWR0aD17Mn0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICApO1xuXG4gIHByaXZhdGUgY2xlYXJDaGFydEhvdmVyID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmNoYXJ0SG92ZXJJbmRleCAhPSBudWxsKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2hhcnRIb3ZlckluZGV4OiBudWxsIH0pO1xuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIHNldENoYXJ0SG92ZXIgPSAoaW5kZXg6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmNoYXJ0SG92ZXJJbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGFydEhvdmVySW5kZXg6IGluZGV4IH0pO1xuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIG5pY2VDaGFydE1heCh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gbmljZUNoYXJ0TWF4U2hhcmVkKHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0Q2hhcnRUaWNrKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBmb3JtYXRDaGFydFRpY2tTaGFyZWQodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRDaGFydFRvb2x0aXBWYWx1ZSh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZm9ybWF0Q2hhcnRUb29sdGlwVmFsdWVTaGFyZWQodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZFNtb290aExpbmVQYXRoKFxuICAgIHBvaW50czogQXJyYXk8eyB4OiBudW1iZXI7IHk6IG51bWJlciB9PixcbiAgKTogc3RyaW5nIHtcbiAgICBpZiAoIXBvaW50cy5sZW5ndGgpIHJldHVybiBcIlwiO1xuICAgIGlmIChwb2ludHMubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gYE0gJHtwb2ludHNbMF0ueH0gJHtwb2ludHNbMF0ueX1gO1xuICAgIH1cblxuICAgIGxldCBwYXRoID0gYE0gJHtwb2ludHNbMF0ueH0gJHtwb2ludHNbMF0ueX1gO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgY29uc3QgcDAgPSBwb2ludHNbaSAtIDFdIHx8IHBvaW50c1tpXTtcbiAgICAgIGNvbnN0IHAxID0gcG9pbnRzW2ldO1xuICAgICAgY29uc3QgcDIgPSBwb2ludHNbaSArIDFdO1xuICAgICAgY29uc3QgcDMgPSBwb2ludHNbaSArIDJdIHx8IHAyO1xuICAgICAgY29uc3QgY3AxeCA9IHAxLnggKyAocDIueCAtIHAwLngpIC8gNjtcbiAgICAgIGNvbnN0IGNwMXkgPSBwMS55ICsgKHAyLnkgLSBwMC55KSAvIDY7XG4gICAgICBjb25zdCBjcDJ4ID0gcDIueCAtIChwMy54IC0gcDEueCkgLyA2O1xuICAgICAgY29uc3QgY3AyeSA9IHAyLnkgLSAocDMueSAtIHAxLnkpIC8gNjtcbiAgICAgIHBhdGggKz0gYCBDICR7Y3AxeH0gJHtjcDF5fSwgJHtjcDJ4fSAke2NwMnl9LCAke3AyLnh9ICR7cDIueX1gO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRSb3VuZGVkQmFyUGF0aChcbiAgICB4OiBudW1iZXIsXG4gICAgeTogbnVtYmVyLFxuICAgIHdpZHRoOiBudW1iZXIsXG4gICAgaGVpZ2h0OiBudW1iZXIsXG4gICAgcmFkaXVzOiBudW1iZXIsXG4gICk6IHN0cmluZyB7XG4gICAgY29uc3QgciA9IE1hdGgubWluKHJhZGl1cywgd2lkdGggLyAyLCBoZWlnaHQpO1xuICAgIGNvbnN0IGJvdHRvbSA9IHkgKyBoZWlnaHQ7XG4gICAgcmV0dXJuIFtcbiAgICAgIGBNICR7eH0gJHtib3R0b219YCxcbiAgICAgIGBMICR7eH0gJHt5ICsgcn1gLFxuICAgICAgYFEgJHt4fSAke3l9ICR7eCArIHJ9ICR7eX1gLFxuICAgICAgYEwgJHt4ICsgd2lkdGggLSByfSAke3l9YCxcbiAgICAgIGBRICR7eCArIHdpZHRofSAke3l9ICR7eCArIHdpZHRofSAke3kgKyByfWAsXG4gICAgICBgTCAke3ggKyB3aWR0aH0gJHtib3R0b219YCxcbiAgICAgIFwiWlwiLFxuICAgIF0uam9pbihcIiBcIik7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckxhdGVzdEluZGljZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBsb2FkaW5nTGF0ZXN0SW5kaWNlcywgbGF0ZXN0SW5kZXhEYXRlLCBsYXRlc3RJbmRleFZhbHVlcyB9ID1cbiAgICAgIHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCBoYXNWYWx1ZXMgPSAhIWxhdGVzdEluZGV4VmFsdWVzO1xuICAgIGNvbnN0IHNob3dCbG9ja2luZ0xvYWRlciA9IGxvYWRpbmdMYXRlc3RJbmRpY2VzICYmICFoYXNWYWx1ZXM7XG4gICAgY29uc3Qgc2hvd1JlZnJlc2hMb2FkZXIgPSBsb2FkaW5nTGF0ZXN0SW5kaWNlcyAmJiBoYXNWYWx1ZXM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JpMy1maWVsZC1saXN0IGFncmkzLWluZGljZXMtbGlzdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmkzLWZpZWxkLXJvdyBhZ3JpMy1pbmRpY2VzLWhlYWRlci1yb3dcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZ3JpMy1maWVsZC1sYWJlbCBhZ3JpMy1pbmRpY2VzLXRpdGxlXCI+XG4gICAgICAgICAgICA8U3Byb3V0IHNpemU9ezE0fSBzdHJva2VXaWR0aD17Mi4yfSBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAge3RoaXMudHIoXCJpbmRpY2VzLnRpdGxlXCIpfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICB7bGF0ZXN0SW5kZXhEYXRlICYmICFsb2FkaW5nTGF0ZXN0SW5kaWNlcyAmJiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZ3JpMy1maWVsZC12YWx1ZSBhZ3JpMy1pbmRpY2VzLWRhdGVcIj5cbiAgICAgICAgICAgICAgPENhbGVuZGFyRGF5cyBzaXplPXsxM30gc3Ryb2tlV2lkdGg9ezJ9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgIHtsYXRlc3RJbmRleERhdGV9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtzaG93QmxvY2tpbmdMb2FkZXIgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JpMy1pbmRpY2VzLWxvYWRpbmctY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8QWdyaUNoYXJ0TG9hZGVyIGxhYmVsPXt0aGlzLnRyKFwiaW5kaWNlcy5sb2FkaW5nXCIpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogaGFzVmFsdWVzID8gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFncmkzLWluZGljZXMtYm9keSR7XG4gICAgICAgICAgICAgIHNob3dSZWZyZXNoTG9hZGVyID8gXCIgYWdyaTMtaW5kaWNlcy1ib2R5LS1sb2FkaW5nXCIgOiBcIlwiXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2hvd1JlZnJlc2hMb2FkZXIgPyAoXG4gICAgICAgICAgICAgIDxBZ3JpQ2hhcnRMb2FkZXIgbGFiZWw9e3RoaXMudHIoXCJpbmRpY2VzLmxvYWRpbmdcIil9IC8+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIHtBZ3JpUG9seWdvbi5WRUdfSU5ERVhfRklFTERTLmZpbHRlcihcbiAgICAgICAgICAgICAgKGYpID0+IGxhdGVzdEluZGV4VmFsdWVzW2ZdICE9IG51bGwsXG4gICAgICAgICAgICApLm1hcCgoZikgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYWdyaTMtZmllbGQtcm93IGFncmkzLWluZGV4LXJvdyBhZ3JpMy1pbmRleC1yb3ctLSR7Zn1gfVxuICAgICAgICAgICAgICAgIGtleT17Zn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhZ3JpMy1maWVsZC1sYWJlbCBhZ3JpMy1pbmRleC1sYWJlbCBhZ3JpMy1pbmRleC1sYWJlbC0tJHtmfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWdyaTMtaW5kZXgtZG90XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgIHtmLnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFncmkzLWZpZWxkLXZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICB7bGF0ZXN0SW5kZXhWYWx1ZXNbZl0udG9GaXhlZCg0KX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JpMy1zdGF0dXMtaW5kaWNhdG9yIGFncmkzLXN0YXR1cy13YWl0aW5nXCI+XG4gICAgICAgICAgICA8SW5ib3ggY2xhc3NOYW1lPVwiYWdyaTMtc3RhdHVzLWljb25cIiBzaXplPXsxNn0gc3Ryb2tlV2lkdGg9ezIuMn0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgIHt0aGlzLnRyKFwiaW5kaWNlcy5ub25lXCIpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBwcml2YXRlIHJlbmRlckNoYXJ0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMucHJvcHMuY29uZmlnO1xuICAgIGlmICghY29uZmlnPy5jaGFydEVuYWJsZWQpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgY2hhcnRGaWVsZHMgPSBjb25maWcuY2hhcnRGaWVsZHMgfHwgW107XG4gICAgY29uc3QgY2hhcnRUeXBlID0gY29uZmlnLmNoYXJ0VHlwZSB8fCBcImJhclwiO1xuICAgIGNvbnN0IGNoYXJ0VGl0bGUgPSBjb25maWcuY2hhcnRUaXRsZSB8fCBcIlwiO1xuICAgIGNvbnN0IGNoYXJ0Q29sb3IgPSBjb25maWcuY2hhcnRDb2xvciB8fCBcIiMwMGE4ZThcIjtcbiAgICBjb25zdCBhdHRycyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRBdHRycztcbiAgICBjb25zdCBwaW5uZWQgPSB0aGlzLnN0YXRlLnBpblRvQ29ybmVyO1xuICAgIGNvbnN0IGNoYXJ0RXhwYW5kZWQgPSBwaW5uZWQgfHwgdGhpcy5zdGF0ZS5jaGFydEV4cGFuZGVkO1xuXG4gICAgaWYgKCFhdHRycyB8fCBjaGFydEZpZWxkcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuXG4gICAgLy8gQ29sbGVjdCBudW1lcmljIGRhdGEgZm9yIGNoYXJ0XG4gICAgY29uc3QgZGF0YVBvaW50czogeyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIH1bXSA9IFtdO1xuICAgIGZvciAoY29uc3QgZmllbGROYW1lIG9mIGNoYXJ0RmllbGRzKSB7XG4gICAgICBjb25zdCByYXcgPSBhdHRyc1tmaWVsZE5hbWVdO1xuICAgICAgY29uc3QgbnVtVmFsID0gdHlwZW9mIHJhdyA9PT0gXCJudW1iZXJcIiA/IHJhdyA6IHBhcnNlRmxvYXQocmF3KTtcbiAgICAgIGlmICghaXNOYU4obnVtVmFsKSkge1xuICAgICAgICBkYXRhUG9pbnRzLnB1c2goe1xuICAgICAgICAgIGxhYmVsOiB0aGlzLmdldEZpZWxkQWxpYXMoZmllbGROYW1lKSxcbiAgICAgICAgICB2YWx1ZTogbnVtVmFsLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGF0YVBvaW50cy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgY2hhcnRMYWJlbCA9IGNoYXJ0VGl0bGUgfHwgZGF0YVBvaW50c1swXT8ubGFiZWwgfHwgXCJHcmFmaWtcIjtcbiAgICBjb25zdCBob3ZlckluZGV4ID0gdGhpcy5zdGF0ZS5jaGFydEhvdmVySW5kZXg7XG5cbiAgICBjb25zdCBzdmdXaWR0aCA9IDM0MDtcbiAgICBjb25zdCBzdmdIZWlnaHQgPSAxNjg7XG4gICAgY29uc3QgcGFkZGluZyA9IHsgdG9wOiAxMiwgcmlnaHQ6IDEyLCBib3R0b206IDgsIGxlZnQ6IDQwIH07XG4gICAgY29uc3QgY2hhcnRXID0gc3ZnV2lkdGggLSBwYWRkaW5nLmxlZnQgLSBwYWRkaW5nLnJpZ2h0O1xuICAgIGNvbnN0IGNoYXJ0SCA9IHN2Z0hlaWdodCAtIHBhZGRpbmcudG9wIC0gcGFkZGluZy5ib3R0b207XG5cbiAgICBjb25zdCBtYXhWYWwgPSBNYXRoLm1heCguLi5kYXRhUG9pbnRzLm1hcCgoZCkgPT4gZC52YWx1ZSksIDApO1xuICAgIGNvbnN0IHlNYXggPSB0aGlzLm5pY2VDaGFydE1heChtYXhWYWwpO1xuICAgIGNvbnN0IHNjYWxlWSA9ICh2OiBudW1iZXIpID0+IGNoYXJ0SCAtICh2IC8geU1heCkgKiBjaGFydEg7XG5cbiAgICBjb25zdCBpc0RhcmsgPSB0aGlzLnN0YXRlLmlzRGFya1RoZW1lO1xuICAgIGNvbnN0IGF4aXNDb2xvciA9IGlzRGFyayA/IFwicmdiYSgyNTUsMjU1LDI1NSwwLjU1KVwiIDogXCIjOTRhM2I4XCI7XG4gICAgY29uc3QgZ3JpZENvbG9yID0gaXNEYXJrID8gXCJyZ2JhKDI1NSwyNTUsMjU1LDAuMTQpXCIgOiBcIiNkYmVhZmVcIjtcbiAgICBjb25zdCBjaGFydEJvZHlCZyA9IGlzRGFyayA/IFwidHJhbnNwYXJlbnRcIiA6IFwiI2ZmZmZmZlwiO1xuICAgIGNvbnN0IGhpZ2hsaWdodEZpbGwgPSBpc0RhcmtcbiAgICAgID8gXCJyZ2JhKDAsIDE2OCwgMjMyLCAwLjEyKVwiXG4gICAgICA6IFwicmdiYSgwLCAxNjgsIDIzMiwgMC4xKVwiO1xuXG4gICAgY29uc3QgZ3JpZExpbmVzID0gNDtcbiAgICBjb25zdCBncmlkU3RlcCA9IHlNYXggLyBncmlkTGluZXM7XG5cbiAgICBjb25zdCBiYXJMYXlvdXQgPVxuICAgICAgY2hhcnRUeXBlID09PSBcImJhclwiXG4gICAgICAgID8gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJhckdhcCA9IE1hdGgubWF4KDYsIE1hdGgubWluKDEwLCBjaGFydFcgLyBkYXRhUG9pbnRzLmxlbmd0aCAvIDQpKTtcbiAgICAgICAgICAgIGNvbnN0IGJhclcgPSBNYXRoLm1heChcbiAgICAgICAgICAgICAgOCxcbiAgICAgICAgICAgICAgKGNoYXJ0VyAtIChkYXRhUG9pbnRzLmxlbmd0aCAtIDEpICogYmFyR2FwKSAvIGRhdGFQb2ludHMubGVuZ3RoLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhUG9pbnRzLm1hcCgoZCwgaSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB4ID0gcGFkZGluZy5sZWZ0ICsgaSAqIChiYXJXICsgYmFyR2FwKTtcbiAgICAgICAgICAgICAgY29uc3QgYmFySCA9IE1hdGgubWF4KDIsIChkLnZhbHVlIC8geU1heCkgKiBjaGFydEgpO1xuICAgICAgICAgICAgICBjb25zdCB5ID0gcGFkZGluZy50b3AgKyBjaGFydEggLSBiYXJIO1xuICAgICAgICAgICAgICByZXR1cm4geyAuLi5kLCBpLCB4LCB5LCBiYXJXLCBiYXJILCBjZW50ZXJYOiB4ICsgYmFyVyAvIDIgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pKClcbiAgICAgICAgOiBbXTtcblxuICAgIGNvbnN0IGxpbmVQb2ludHMgPVxuICAgICAgY2hhcnRUeXBlID09PSBcImxpbmVcIlxuICAgICAgICA/ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGVwWCA9XG4gICAgICAgICAgICAgIGRhdGFQb2ludHMubGVuZ3RoID4gMSA/IGNoYXJ0VyAvIChkYXRhUG9pbnRzLmxlbmd0aCAtIDEpIDogMDtcbiAgICAgICAgICAgIHJldHVybiBkYXRhUG9pbnRzLm1hcCgoZCwgaSkgPT4gKHtcbiAgICAgICAgICAgICAgLi4uZCxcbiAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgeDpcbiAgICAgICAgICAgICAgICBwYWRkaW5nLmxlZnQgK1xuICAgICAgICAgICAgICAgIChkYXRhUG9pbnRzLmxlbmd0aCA+IDEgPyBpICogc3RlcFggOiBjaGFydFcgLyAyKSxcbiAgICAgICAgICAgICAgeTogcGFkZGluZy50b3AgKyBzY2FsZVkoZC52YWx1ZSksXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfSkoKVxuICAgICAgICA6IFtdO1xuXG4gICAgY29uc3QgaG92ZXJQb2ludCA9XG4gICAgICBob3ZlckluZGV4ICE9IG51bGxcbiAgICAgICAgPyBjaGFydFR5cGUgPT09IFwiYmFyXCJcbiAgICAgICAgICA/IGJhckxheW91dFtob3ZlckluZGV4XVxuICAgICAgICAgIDogbGluZVBvaW50c1tob3ZlckluZGV4XVxuICAgICAgICA6IG51bGw7XG5cbiAgICBjb25zdCB0b29sdGlwTGVmdFBjdCA9IGhvdmVyUG9pbnRcbiAgICAgID8gTWF0aC5tYXgoOCwgTWF0aC5taW4oODIsIChob3ZlclBvaW50LnggLyBzdmdXaWR0aCkgKiAxMDApKVxuICAgICAgOiAwO1xuICAgIGNvbnN0IHRvb2x0aXBUb3BQY3QgPSBob3ZlclBvaW50XG4gICAgICA/IE1hdGgubWF4KDYsIE1hdGgubWluKDU4LCAoaG92ZXJQb2ludC55IC8gc3ZnSGVpZ2h0KSAqIDEwMCAtIDE4KSlcbiAgICAgIDogMDtcblxuICAgIGNvbnN0IGNoYXJ0U3ZnID0gKFxuICAgICAgPHN2Z1xuICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICB2aWV3Qm94PXtgMCAwICR7c3ZnV2lkdGh9ICR7c3ZnSGVpZ2h0fWB9XG4gICAgICAgIGNsYXNzTmFtZT1cImFncmkzLWNoYXJ0LXN2Z1wiXG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IGNoYXJ0Qm9keUJnIH19XG4gICAgICA+XG4gICAgICAgIDxyZWN0XG4gICAgICAgICAgeD17cGFkZGluZy5sZWZ0fVxuICAgICAgICAgIHk9e3BhZGRpbmcudG9wfVxuICAgICAgICAgIHdpZHRoPXtjaGFydFd9XG4gICAgICAgICAgaGVpZ2h0PXtjaGFydEh9XG4gICAgICAgICAgZmlsbD17aXNEYXJrID8gXCJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpXCIgOiBcIiNmZmZmZmZcIn1cbiAgICAgICAgICByeD17Nn1cbiAgICAgICAgLz5cblxuICAgICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogZ3JpZExpbmVzICsgMSB9KS5tYXAoKF8sIGkpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWwgPSBncmlkU3RlcCAqIGk7XG4gICAgICAgICAgY29uc3QgeSA9IHBhZGRpbmcudG9wICsgc2NhbGVZKHZhbCk7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxnIGtleT17YGdyaWQtJHtpfWB9PlxuICAgICAgICAgICAgICA8bGluZVxuICAgICAgICAgICAgICAgIHgxPXtwYWRkaW5nLmxlZnR9XG4gICAgICAgICAgICAgICAgeTE9e3l9XG4gICAgICAgICAgICAgICAgeDI9e3N2Z1dpZHRoIC0gcGFkZGluZy5yaWdodH1cbiAgICAgICAgICAgICAgICB5Mj17eX1cbiAgICAgICAgICAgICAgICBzdHJva2U9e2dyaWRDb2xvcn1cbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17MX1cbiAgICAgICAgICAgICAgICBzdHJva2VEYXNoYXJyYXk9XCIzIDVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8dGV4dFxuICAgICAgICAgICAgICAgIHg9e3BhZGRpbmcubGVmdCAtIDh9XG4gICAgICAgICAgICAgICAgeT17eSArIDR9XG4gICAgICAgICAgICAgICAgZmlsbD17YXhpc0NvbG9yfVxuICAgICAgICAgICAgICAgIGZvbnRTaXplPXsxMH1cbiAgICAgICAgICAgICAgICB0ZXh0QW5jaG9yPVwiZW5kXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGlzLmZvcm1hdENoYXJ0VGljayh2YWwpfVxuICAgICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG5cbiAgICAgICAge2NoYXJ0VHlwZSA9PT0gXCJiYXJcIiAmJlxuICAgICAgICAgIGJhckxheW91dC5tYXAoKGJhcikgPT4gKFxuICAgICAgICAgICAgPGcga2V5PXtgYmFyLSR7YmFyLml9YH0+XG4gICAgICAgICAgICAgIHtob3ZlckluZGV4ID09PSBiYXIuaSAmJiAoXG4gICAgICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICAgIHg9e2Jhci54IC0gM31cbiAgICAgICAgICAgICAgICAgIHk9e3BhZGRpbmcudG9wfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9e2Jhci5iYXJXICsgNn1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17Y2hhcnRIfVxuICAgICAgICAgICAgICAgICAgZmlsbD17aGlnaGxpZ2h0RmlsbH1cbiAgICAgICAgICAgICAgICAgIHJ4PXs1fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD17dGhpcy5idWlsZFJvdW5kZWRCYXJQYXRoKGJhci54LCBiYXIueSwgYmFyLmJhclcsIGJhci5iYXJILCA1KX1cbiAgICAgICAgICAgICAgICBmaWxsPXtjaGFydENvbG9yfVxuICAgICAgICAgICAgICAgIG9wYWNpdHk9e2hvdmVySW5kZXggPT0gbnVsbCB8fCBob3ZlckluZGV4ID09PSBiYXIuaSA/IDEgOiAwLjQ1fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFncmkzLWNoYXJ0LWJhclwiXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB0aGlzLnNldENoYXJ0SG92ZXIoYmFyLmkpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgIHg9e2Jhci54fVxuICAgICAgICAgICAgICAgIHk9e3BhZGRpbmcudG9wfVxuICAgICAgICAgICAgICAgIHdpZHRoPXtiYXIuYmFyV31cbiAgICAgICAgICAgICAgICBoZWlnaHQ9e2NoYXJ0SH1cbiAgICAgICAgICAgICAgICBmaWxsPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gdGhpcy5zZXRDaGFydEhvdmVyKGJhci5pKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICApKX1cblxuICAgICAgICB7Y2hhcnRUeXBlID09PSBcImxpbmVcIiAmJiAoXG4gICAgICAgICAgPGc+XG4gICAgICAgICAgICB7aG92ZXJJbmRleCAhPSBudWxsICYmIGxpbmVQb2ludHNbaG92ZXJJbmRleF0gJiYgKFxuICAgICAgICAgICAgICA8bGluZVxuICAgICAgICAgICAgICAgIHgxPXtsaW5lUG9pbnRzW2hvdmVySW5kZXhdLnh9XG4gICAgICAgICAgICAgICAgeTE9e3BhZGRpbmcudG9wfVxuICAgICAgICAgICAgICAgIHgyPXtsaW5lUG9pbnRzW2hvdmVySW5kZXhdLnh9XG4gICAgICAgICAgICAgICAgeTI9e3BhZGRpbmcudG9wICsgY2hhcnRIfVxuICAgICAgICAgICAgICAgIHN0cm9rZT17Y2hhcnRDb2xvcn1cbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17MS41fVxuICAgICAgICAgICAgICAgIG9wYWNpdHk9ezAuMzV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD17dGhpcy5idWlsZFNtb290aExpbmVQYXRoKGxpbmVQb2ludHMpfVxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIHN0cm9rZT17Y2hhcnRDb2xvcn1cbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezIuNX1cbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2xpbmVQb2ludHMubWFwKChwKSA9PiAoXG4gICAgICAgICAgICAgIDxnIGtleT17YHB0LSR7cC5pfWB9PlxuICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgIGN4PXtwLnh9XG4gICAgICAgICAgICAgICAgICBjeT17cC55fVxuICAgICAgICAgICAgICAgICAgcj17aG92ZXJJbmRleCA9PT0gcC5pID8gNS41IDogNH1cbiAgICAgICAgICAgICAgICAgIGZpbGw9e2lzRGFyayA/IFwiIzBiMWEzMFwiIDogXCIjZmZmZmZmXCJ9XG4gICAgICAgICAgICAgICAgICBzdHJva2U9e2NoYXJ0Q29sb3J9XG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17aG92ZXJJbmRleCA9PT0gcC5pID8gMi41IDogMn1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFncmkzLWNoYXJ0LXBvaW50XCJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gdGhpcy5zZXRDaGFydEhvdmVyKHAuaSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgICBjeD17cC54fVxuICAgICAgICAgICAgICAgICAgY3k9e3AueX1cbiAgICAgICAgICAgICAgICAgIHI9ezEyfVxuICAgICAgICAgICAgICAgICAgZmlsbD1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gdGhpcy5zZXRDaGFydEhvdmVyKHAuaSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9nPlxuICAgICAgICApfVxuICAgICAgPC9zdmc+XG4gICAgKTtcblxuICAgIGNvbnN0IGNoYXJ0Qm9keSA9IChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiYWdyaTMtY2hhcnQtYm9keVwiXG4gICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5jbGVhckNoYXJ0SG92ZXJ9XG4gICAgICA+XG4gICAgICAgIHtob3ZlclBvaW50ICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhZ3JpMy1jaGFydC10b29sdGlwXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGxlZnQ6IGAke3Rvb2x0aXBMZWZ0UGN0fSVgLFxuICAgICAgICAgICAgICB0b3A6IGAke3Rvb2x0aXBUb3BQY3R9JWAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyaTMtY2hhcnQtdG9vbHRpcC1sYWJlbFwiPntob3ZlclBvaW50LmxhYmVsfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JpMy1jaGFydC10b29sdGlwLXZhbHVlXCI+XG4gICAgICAgICAgICAgIHt0aGlzLmZvcm1hdENoYXJ0VG9vbHRpcFZhbHVlKGhvdmVyUG9pbnQudmFsdWUpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHtjaGFydFN2Z31cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgICBpZiAoIWNoYXJ0RXhwYW5kZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhZ3JpMy1jaGFydC10cmlnZ2VyXCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNoYXJ0RXhwYW5kZWR9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZ3JpMy1jaGFydC10cmlnZ2VyLWljb25cIj57dGhpcy5yZW5kZXJDaGFydEljb24oY2hhcnRUeXBlKX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWdyaTMtY2hhcnQtdHJpZ2dlci1sYWJlbFwiPntjaGFydExhYmVsfTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZ3JpMy1jaGFydC10cmlnZ2VyLWNoZXZyb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgIOKWvlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmkzLWNoYXJ0LXBhbmVsXCI+XG4gICAgICAgIHshcGlubmVkID8gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWdyaTMtY2hhcnQtcGFuZWwtaGVhZGVyXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ2hhcnRFeHBhbmRlZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZ3JpMy1jaGFydC10cmlnZ2VyLWljb25cIj57dGhpcy5yZW5kZXJDaGFydEljb24oY2hhcnRUeXBlKX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZ3JpMy1jaGFydC10cmlnZ2VyLWxhYmVsXCI+e2NoYXJ0TGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWdyaTMtY2hhcnQtdHJpZ2dlci1jaGV2cm9uIGlzLW9wZW5cIlxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICDilrRcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmkzLWNoYXJ0LXBhbmVsLWhlYWRlciBhZ3JpMy1jaGFydC1wYW5lbC1oZWFkZXItLXN0YXRpY1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWdyaTMtY2hhcnQtdHJpZ2dlci1pY29uXCI+e3RoaXMucmVuZGVyQ2hhcnRJY29uKGNoYXJ0VHlwZSl9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWdyaTMtY2hhcnQtdHJpZ2dlci1sYWJlbFwiPntjaGFydExhYmVsfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JpMy1jaGFydC1jb250YWluZXJcIj57Y2hhcnRCb2R5fTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tIFBvcHVwIFVJIC0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICBwcml2YXRlIHJlbmRlclBvcHVwID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHNlbGVjdGVkQXR0cnMsXG4gICAgICBzZWxlY3RlZE9JRCxcbiAgICAgIGxvYWRpbmcsXG4gICAgICBlcnJvcixcbiAgICAgIHNob3dQb3B1cCxcbiAgICAgIHBvcHVwTWluaW1pemVkLFxuICAgICAgcG9wdXBQb3NpdGlvbixcbiAgICAgIGxvYWRpbmdBdHRhY2htZW50cyxcbiAgICAgIGF0dGFjaG1lbnRzLFxuICAgICAgYXR0YWNobWVudHNFcnJvcixcbiAgICAgIHBpblRvQ29ybmVyLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKCFzaG93UG9wdXApIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgZmllbGRzID0gKHRoaXMucHJvcHMuY29uZmlnPy5maWVsZHNUb1Nob3cgfHwgW10pXG4gICAgICAubWFwKChuKSA9PiB0aGlzLnJlc29sdmVGaWVsZE5hbWUobikgfHwgbilcbiAgICAgIC5maWx0ZXIoQm9vbGVhbik7XG5cbiAgICBjb25zdCB0aXRsZSA9IHRoaXMudHIoXCJ0aXRsZS5hdHRyaWJ1dGVzXCIpO1xuXG4gICAgY29uc3QgdmlldyA9IHRoaXMuc3RhdGUuamltdU1hcFZpZXc/LnZpZXc7XG4gICAgY29uc3QgbGF5b3V0UG9zID0gcG9wdXBQb3NpdGlvbjtcblxuICAgIGlmIChwb3B1cE1pbmltaXplZCkge1xuICAgICAgY29uc3Qgdmlld0ZvckNoaXAgPSB2aWV3IHx8IHRoaXMuc3RhdGUuamltdU1hcFZpZXc/LnZpZXcgfHwgbnVsbDtcbiAgICAgIGNvbnN0IG1hcFJlY3QgPSB2aWV3Rm9yQ2hpcCA/IHRoaXMuZ2V0TWFwQXJlYVJlY3Qodmlld0ZvckNoaXApIDogbnVsbDtcbiAgICAgIGNvbnN0IGNoaXBTdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IG1hcFJlY3RcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgcmlnaHQ6IE1hdGgubWF4KFxuICAgICAgICAgICAgICA4LFxuICAgICAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5pbm5lcldpZHRoIDogbWFwUmVjdC5yaWdodCkgLVxuICAgICAgICAgICAgICAgIG1hcFJlY3QucmlnaHQgK1xuICAgICAgICAgICAgICAgIHRoaXMuREFTSEJPQVJEX1BPUFVQX1ZFUlRJQ0FMX0lOU0VULFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHRvcDogbWFwUmVjdC50b3AgKyB0aGlzLkRBU0hCT0FSRF9QT1BVUF9WRVJUSUNBTF9JTlNFVCxcbiAgICAgICAgICAgIGxlZnQ6IFwiYXV0b1wiLFxuICAgICAgICAgICAgYm90dG9tOiBcImF1dG9cIixcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJub25lXCIsXG4gICAgICAgICAgfVxuICAgICAgICA6IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgICByaWdodDogdGhpcy5EQVNIQk9BUkRfUE9QVVBfVkVSVElDQUxfSU5TRVQsXG4gICAgICAgICAgICB0b3A6IHRoaXMuREFTSEJPQVJEX1BPUFVQX1ZFUlRJQ0FMX0lOU0VULFxuICAgICAgICAgICAgbGVmdDogXCJhdXRvXCIsXG4gICAgICAgICAgICBib3R0b206IFwiYXV0b1wiLFxuICAgICAgICAgIH07XG5cbiAgICAgIGNvbnN0IHN0b3BNYXBIaXQgPSAoZTogUmVhY3QuU3ludGhldGljRXZlbnQpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YGFncmkzLXBvcHVwLW1pbmltaXplZCAke1xuICAgICAgICAgICAgcGluVG9Db3JuZXIgPyBcImlzLXBpbm5lZFwiIDogXCJpcy1mbG9hdGluZ1wiXG4gICAgICAgICAgfWB9XG4gICAgICAgICAgc3R5bGU9e2NoaXBTdHlsZX1cbiAgICAgICAgICByZWY9e3RoaXMuX3BvcHVwUmVmfVxuICAgICAgICAgIG9uTW91c2VEb3duPXtzdG9wTWFwSGl0fVxuICAgICAgICAgIG9uUG9pbnRlckRvd249e3N0b3BNYXBIaXR9XG4gICAgICAgICAgb25DbGljaz17c3RvcE1hcEhpdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWdyaTMtcG9wdXAtbWluaW1pemVkLWJ0blwiXG4gICAgICAgICAgICBvbk1vdXNlRG93bj17c3RvcE1hcEhpdH1cbiAgICAgICAgICAgIG9uUG9pbnRlckRvd249e3N0b3BNYXBIaXR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBzdG9wTWFwSGl0KGUpO1xuICAgICAgICAgICAgICB0aGlzLmV4cGFuZFBvcHVwKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdGl0bGU9e3RoaXMudHIoXCJhY3Rpb24uZXhwYW5kXCIpfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17dGhpcy50cihcImFjdGlvbi5leHBhbmRcIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWdyaTMtcG9wdXAtbWluaW1pemVkLWFjY2VudFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZ3JpMy1wb3B1cC1taW5pbWl6ZWQtdGl0bGVcIj57dGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgPENoZXZyb25VcFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZ3JpMy1wb3B1cC1taW5pbWl6ZWQtaWNvblwiXG4gICAgICAgICAgICAgIHNpemU9ezE2fVxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mi40fVxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHsgd2lkdGg6IHBvcHVwV2lkdGgsIGhlaWdodDogcG9wdXBIZWlnaHQgfSA9IHRoaXMuZ2V0UG9wdXBEaW1lbnNpb25zKFxuICAgICAgdmlldyB8fCBudWxsLFxuICAgICAgcGluVG9Db3JuZXIsXG4gICAgICBsYXlvdXRQb3MsXG4gICAgKTtcblxuICAgIGNvbnN0IGRpbWVuc2lvblN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgd2lkdGg6IGAke3BvcHVwV2lkdGh9cHhgLFxuICAgICAgbWluV2lkdGg6IGAke3BvcHVwV2lkdGh9cHhgLFxuICAgICAgbWF4V2lkdGg6IGAke3BvcHVwV2lkdGh9cHhgLFxuICAgICAgaGVpZ2h0OiBgJHtwb3B1cEhlaWdodH1weGAsXG4gICAgICBtYXhIZWlnaHQ6IGAke3BvcHVwSGVpZ2h0fXB4YCxcbiAgICB9O1xuXG4gICAgY29uc3Qgc3R5bGVQaW5uZWQ6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSBsYXlvdXRQb3NcbiAgICAgID8ge1xuICAgICAgICAgIGxlZnQ6IGxheW91dFBvcy54LFxuICAgICAgICAgIHRvcDogbGF5b3V0UG9zLnksXG4gICAgICAgICAgdHJhbnNmb3JtOiBcIm5vbmVcIixcbiAgICAgICAgICAuLi5kaW1lbnNpb25TdHlsZSxcbiAgICAgICAgfVxuICAgICAgOiB7IC4uLmRpbWVuc2lvblN0eWxlIH07XG5cbiAgICBjb25zdCBzdHlsZUZyZWU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICBsZWZ0OiBsYXlvdXRQb3M/LnggfHwgXCI1MCVcIixcbiAgICAgIHRvcDogbGF5b3V0UG9zPy55IHx8IFwiNTAlXCIsXG4gICAgICB0cmFuc2Zvcm06ICFsYXlvdXRQb3MgPyBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiIDogXCJub25lXCIsXG4gICAgICAuLi5kaW1lbnNpb25TdHlsZSxcbiAgICB9O1xuXG4gICAgY29uc3QgcG9wdXBTdHlsZSA9IHBpblRvQ29ybmVyID8gc3R5bGVQaW5uZWQgOiBzdHlsZUZyZWU7XG5cbiAgICBjb25zdCBzaG93QXR0YWNobWVudHMgPVxuICAgICAgdGhpcy5wcm9wcy5jb25maWc/LnNldHRpbmdzPy5zaG93QXR0YWNobWVudHMgIT09IGZhbHNlO1xuICAgIGNvbnN0IGhhc0F0dGFjaG1lbnRzID0gKGF0dGFjaG1lbnRzPy5sZW5ndGggfHwgMCkgPiAwO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgYWdyaTMtcG9wdXAtZGlyZWN0ICR7cGluVG9Db3JuZXIgPyBcImlzLXBpbm5lZFwiIDogXCJpcy1mbG9hdGluZ1wifWB9XG4gICAgICAgIHN0eWxlPXtwb3B1cFN0eWxlfVxuICAgICAgICByZWY9e3RoaXMuX3BvcHVwUmVmfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmkzLXBvcHVwLWhlYWRlclwiIG9uTW91c2VEb3duPXt0aGlzLm9uUG9wdXBIZWFkZXJNb3VzZURvd259PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFncmkzLXBvcHVwLXBpbiR7cGluVG9Db3JuZXIgPyBcIiBhY3RpdmVcIiA6IFwiXCJ9YH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlUGluVG9Db3JuZXJ9XG4gICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgIHBpblRvQ29ybmVyID8gdGhpcy50cihcImFjdGlvbi51bnBpblwiKSA6IHRoaXMudHIoXCJhY3Rpb24ucGluXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcmlhLXByZXNzZWQ9e3BpblRvQ29ybmVyfVxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3BpblRvQ29ybmVyID8gKFxuICAgICAgICAgICAgICA8UGluIHNpemU9ezE1fSBzdHJva2VXaWR0aD17Mi4yfSBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPE1hcFBpbiBzaXplPXsxNX0gc3Ryb2tlV2lkdGg9ezIuMn0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYWdyaTMtcG9wdXAtdGl0bGVcIj57dGl0bGV9PC9oMj5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWdyaTMtcG9wdXAtY2xvc2VcIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5taW5pbWl6ZVBvcHVwfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17dGhpcy50cihcImFjdGlvbi5taW5pbWl6ZVwiKX1cbiAgICAgICAgICAgIHRpdGxlPXt0aGlzLnRyKFwiYWN0aW9uLm1pbmltaXplXCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxYIHNpemU9ezE2fSBzdHJva2VXaWR0aD17Mi40fSBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmkzLXBvcHVwLWNvbnRlbnRcIj5cbiAgICAgICAgICB7ZXJyb3IgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JpMy1lcnJvci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPEFsZXJ0VHJpYW5nbGUgY2xhc3NOYW1lPVwiYWdyaTMtZXJyb3ItaWNvblwiIHNpemU9ezIwfSBzdHJva2VXaWR0aD17Mi4yfSBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmkzLWVycm9yLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAge3RoaXMudHIoXCJzdGF0dXMud2FybmluZ1wiKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyaTMtZXJyb3ItbWVzc2FnZVwiPntlcnJvcn08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7bG9hZGluZyAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmkzLWxvYWRpbmctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxBZ3JpQ2hhcnRMb2FkZXIgbGFiZWw9e3RoaXMudHIoXCJzdGF0dXMubG9hZGluZ0ZlYXR1cmVcIil9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgeyFsb2FkaW5nICYmIHNlbGVjdGVkQXR0cnMgJiYgZmllbGRzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JpMy1maWVsZC1saXN0XCI+XG4gICAgICAgICAgICAgIHtmaWVsZHNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgKG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWxlY3RlZEF0dHJzLmhhc093blByb3BlcnR5KG5hbWUpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHNlbGVjdGVkQXR0cnNbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPT0gbnVsbCB8fCB2YWwgPT09IFwiXCIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgJiYgIXZhbC50cmltKCkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAubWFwKChuYW1lKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmkzLWZpZWxkLXJvd1wiIGtleT17bmFtZX0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFncmkzLWZpZWxkLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3RoaXMuZ2V0RmllbGRBbGlhcyhuYW1lKX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZ3JpMy1maWVsZC12YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmZvcm1hdFZhbHVlKG5hbWUsIHNlbGVjdGVkQXR0cnNbbmFtZV0pfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cblxuICAgICAgICAgICAgICB7ZmllbGRzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAobmFtZSkgPT5cbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQXR0cnMuaGFzT3duUHJvcGVydHkobmFtZSkgJiZcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQXR0cnNbbmFtZV0gIT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRBdHRyc1tuYW1lXSAhPT0gXCJcIixcbiAgICAgICAgICAgICAgKS5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyaTMtc3RhdHVzLWluZGljYXRvciBhZ3JpMy1zdGF0dXMtd2FpdGluZ1wiPlxuICAgICAgICAgICAgICAgICAgPEluYm94IGNsYXNzTmFtZT1cImFncmkzLXN0YXR1cy1pY29uXCIgc2l6ZT17MTZ9IHN0cm9rZVdpZHRoPXsyLjJ9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICB7dGhpcy50cihcInN0YXR1cy5ub0NvbmZpZ3VyZWREYXRhXCIpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHshbG9hZGluZyAmJiBzZWxlY3RlZEF0dHJzICYmIGZpZWxkcy5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JpMy1zdGF0dXMtaW5kaWNhdG9yIGFncmkzLXN0YXR1cy13YWl0aW5nXCI+XG4gICAgICAgICAgICAgIDxTZXR0aW5nczIgY2xhc3NOYW1lPVwiYWdyaTMtc3RhdHVzLWljb25cIiBzaXplPXsxNn0gc3Ryb2tlV2lkdGg9ezIuMn0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAge3RoaXMudHIoXCJzdGF0dXMubm9GaWVsZHNcIil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgey8qIExhdGVzdC1kYXkgdmVnZXRhdGlvbiBpbmRpY2VzICovfVxuICAgICAgICAgIHshbG9hZGluZyAmJiBzZWxlY3RlZEF0dHJzICYmIHRoaXMucmVuZGVyTGF0ZXN0SW5kaWNlcygpfVxuXG4gICAgICAgICAgey8qIENoYXJ0ICovfVxuICAgICAgICAgIHshbG9hZGluZyAmJiBzZWxlY3RlZEF0dHJzICYmIHRoaXMucmVuZGVyQ2hhcnQoKX1cblxuICAgICAgICAgIHtzaG93QXR0YWNobWVudHMgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JpMy1hdHRhY2htZW50c1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmkzLWF0dGFjaG1lbnRzLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyaTMtYXR0YWNobWVudHMtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIDxGb2xkZXJPcGVuIHNpemU9ezE1fSBzdHJva2VXaWR0aD17Mi4yfSBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgICAge3RoaXMudHIoXCJhdHRhY2htZW50cy50aXRsZVwiKX17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICB7aGFzQXR0YWNobWVudHMgPyBgKCR7YXR0YWNobWVudHMubGVuZ3RofSlgIDogXCJcIn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAge2xvYWRpbmdBdHRhY2htZW50cyAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWdyaTMtbG9hZGluZy1jb250YWluZXIgYWdyaTMtbG9hZGluZy1jb250YWluZXItLWNvbXBhY3RcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiA4IH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEFncmlDaGFydExvYWRlciBsYWJlbD17dGhpcy50cihcInN0YXR1cy5sb2FkaW5nQXR0YWNobWVudHNcIil9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgeyFsb2FkaW5nQXR0YWNobWVudHMgJiYgYXR0YWNobWVudHNFcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWdyaTMtc3RhdHVzLWluZGljYXRvciBhZ3JpMy1zdGF0dXMtd2FpdGluZ1wiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IDYgfX1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPXthdHRhY2htZW50c0Vycm9yfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxBbGVydFRyaWFuZ2xlIGNsYXNzTmFtZT1cImFncmkzLXN0YXR1cy1pY29uXCIgc2l6ZT17MTZ9IHN0cm9rZVdpZHRoPXsyLjJ9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICB7dGhpcy50cihcInN0YXR1cy5hdHRhY2htZW50c0Vycm9yXCIpIHx8IGF0dGFjaG1lbnRzRXJyb3J9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgeyFsb2FkaW5nQXR0YWNobWVudHMgJiYgIWF0dGFjaG1lbnRzRXJyb3IgJiYgIWhhc0F0dGFjaG1lbnRzICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZ3JpMy1zdGF0dXMtaW5kaWNhdG9yIGFncmkzLXN0YXR1cy13YWl0aW5nXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogNiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxGb2xkZXJPcGVuIGNsYXNzTmFtZT1cImFncmkzLXN0YXR1cy1pY29uXCIgc2l6ZT17MTZ9IHN0cm9rZVdpZHRoPXsyLjJ9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICB7dGhpcy50cihcInN0YXR1cy5ub0F0dGFjaG1lbnRzXCIpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIHshbG9hZGluZ0F0dGFjaG1lbnRzICYmIGhhc0F0dGFjaG1lbnRzICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmkzLWF0dGFjaG1lbnRzLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyaTMtYXR0YWNobWVudHMtaW1hZ2VzIGFncmkzLWdyaWRcIj5cbiAgICAgICAgICAgICAgICAgICAge2F0dGFjaG1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoYSkgPT4gYS5wcmV2aWV3T2JqZWN0VXJsKVxuICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGEpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YGltZy0ke2EuaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YS51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZ3JpMy1hdHRhY2htZW50LXRodW1iIGFncmkzLWNhcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17YS5uYW1lIHx8IHRoaXMudHIoXCJhdHRhY2htZW50LmltYWdlRmFsbGJhY2tcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvd25sb2FkPXthLm5hbWUgfHwgdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXthLnByZXZpZXdPYmplY3RVcmwhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YS5uYW1lIHx8IHRoaXMudHIoXCJhdHRhY2htZW50LmltYWdlRmFsbGJhY2tcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZ3JpMy10aHVtYi1jYXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17YS5uYW1lIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YS5uYW1lIHx8IHRoaXMudHIoXCJhdHRhY2htZW50LmltYWdlRmFsbGJhY2tcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyaTMtYXR0YWNobWVudHMtZmlsZXNcIj5cbiAgICAgICAgICAgICAgICAgICAge2F0dGFjaG1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoYSkgPT4gIWEucHJldmlld09iamVjdFVybClcbiAgICAgICAgICAgICAgICAgICAgICAubWFwKChhKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFncmkzLWF0dGFjaG1lbnQtZmlsZSBhZ3JpMy1jYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgZmlsZS0ke2EuaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JpMy1hdHRhY2htZW50LWZpbGUtdG9wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWdyaTMtYXR0YWNobWVudC1maWxlLW5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2EubmFtZSB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXBlcmNsaXAgc2l6ZT17MTR9IHN0cm9rZVdpZHRoPXsyLjJ9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YS5uYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHIoXCJhdHRhY2htZW50LmZpbGVGYWxsYmFja1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGEuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZ3JpMy1hdHRhY2htZW50LWRvd25sb2FkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2EudXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWQ9e2EubmFtZSB8fCB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERvd25sb2FkIHNpemU9ezEzfSBzdHJva2VXaWR0aD17Mi4yfSBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMudHIoXCJhdHRhY2htZW50LmRvd25sb2FkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyaTMtYXR0YWNobWVudC1maWxlLW1ldGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGEuY29udGVudFR5cGUgfHwgXCJcIikuc3BsaXQoXCIvXCIpLnBvcCgpIHx8IFwiXCJ9e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthLnNpemUgPyBg4oCiICR7dGhpcy5ieXRlc1RvU2l6ZShhLnNpemUpfWAgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgeyFsb2FkaW5nICYmICFzZWxlY3RlZEF0dHJzICYmICFlcnJvciAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmkzLXN0YXR1cy1pbmRpY2F0b3IgYWdyaTMtc3RhdHVzLXdhaXRpbmdcIj5cbiAgICAgICAgICAgICAgPE1vdXNlUG9pbnRlckNsaWNrIGNsYXNzTmFtZT1cImFncmkzLXN0YXR1cy1pY29uXCIgc2l6ZT17MTZ9IHN0cm9rZVdpZHRoPXsyLjJ9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgIHt0aGlzLnRyKFwic3RhdHVzLmNsaWNrUG9seWdvblwiKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB1c2VNYXBXaWRnZXRJZHMsIHVzZURhdGFTb3VyY2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRoZW1lQ2xhc3MgPSB0aGlzLnN0YXRlLmlzRGFya1RoZW1lXG4gICAgICA/IFwiYWdyaTMtdGhlbWUtZGFya1wiXG4gICAgICA6IFwiYWdyaTMtdGhlbWUtbGlnaHRcIjtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGFncmkzLWF0dHItY2FyZCAke3RoZW1lQ2xhc3N9YH0+XG4gICAgICAgIHt0aGlzLnJlbmRlclBvcHVwKCl9XG5cbiAgICAgICAgPEFncmlIaWRkZW5Db25uZWN0b3JzXG4gICAgICAgICAgdXNlRGF0YVNvdXJjZXM9e3VzZURhdGFTb3VyY2VzfVxuICAgICAgICAgIHVzZU1hcFdpZGdldElkcz17dXNlTWFwV2lkZ2V0SWRzfVxuICAgICAgICAgIG9uRGF0YVNvdXJjZUNyZWF0ZWQ9e3RoaXMub25EYXRhU291cmNlQ3JlYXRlZH1cbiAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e3RoaXMub25BY3RpdmVWaWV3Q2hhbmdlfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgIGJvdHRvbTogXCI4cHhcIixcbiAgICAgICAgICAgIHJpZ2h0OiBcIjhweFwiLFxuICAgICAgICAgICAgd2lkdGg6IFwiOHB4XCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiOHB4XCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGlzLnN0YXRlLmZlYXR1cmVMYXllcnM/Lmxlbmd0aFxuICAgICAgICAgICAgICA/IFwiIzEwYjk4MVwiXG4gICAgICAgICAgICAgIDogXCIjOTRhM2I4XCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjYsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjNzIGVhc2VcIixcbiAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXJzPy5sZW5ndGhcbiAgICAgICAgICAgICAgPyB0aGlzLnRyKFwic3RhdHVzLnJlYWR5XCIpXG4gICAgICAgICAgICAgIDogdGhpcy50cihcInN0YXR1cy5sb2FkaW5nXCIpXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgSUhhbmRsZUxpa2Uge1xuICByZW1vdmU6ICgpID0+IHZvaWQ7XG59XG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9IiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQge1xuICBEYXRhU291cmNlQ29tcG9uZW50LFxuICBqc3gsXG4gIHR5cGUgRGF0YVNvdXJjZSxcbiAgdHlwZSBRdWVyaWFibGVEYXRhU291cmNlLFxufSBmcm9tIFwiamltdS1jb3JlXCI7XG5pbXBvcnQgeyBKaW11TWFwVmlld0NvbXBvbmVudCwgdHlwZSBKaW11TWFwVmlldyB9IGZyb20gXCJqaW11LWFyY2dpc1wiO1xuaW1wb3J0IHsgdG9QbGFpbkFycmF5IH0gZnJvbSBcIi4vYWdyaS1kYXRhLXNvdXJjZS1lbmdpbmVcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdXNlRGF0YVNvdXJjZXM/OiBhbnk7XG4gIHVzZU1hcFdpZGdldElkcz86IGFueTtcbiAgb25EYXRhU291cmNlQ3JlYXRlZD86IChkczogUXVlcmlhYmxlRGF0YVNvdXJjZSkgPT4gdm9pZDtcbiAgb25BY3RpdmVWaWV3Q2hhbmdlPzogKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldykgPT4gdm9pZDtcbn1cblxuLyoqIEhpZGRlbiBEYXRhU291cmNlICsgTWFwIGNvbm5lY3RvcnMgKHNhbWUgcGF0dGVybiBhcyBBZ3JpTG9jYWxpemF0aW9uKS5cbiAqIE9ubHkgY29ubmVjdCB0aGUgZmlyc3QgdXNlRGF0YVNvdXJjZSDigJQgbW91bnRpbmcgYWxsIH4zMCsgcmVnaW9uIEZlYXR1cmVTZXJ2ZXJzXG4gKiBvbiBldmVyeSBjaGlsZCByZW1vdW50IGZsb29kcyBOZXR3b3JrIHdpdGggRmVhdHVyZVNlcnZlcj9mPWpzb24gbG9hZHMgYW5kXG4gKiBkb2VzIG5vdCBoZWxwIG1hcCBoaXQtdGVzdGluZyAobGl2ZSBNYXBWaWV3IGxheWVycyBhcmUgdXNlZCBpbnN0ZWFkKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBBZ3JpSGlkZGVuQ29ubmVjdG9ycyhwcm9wczogUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHNlbGVjdGVkVXNlRGF0YVNvdXJjZXMgPSB0b1BsYWluQXJyYXk8YW55Pihwcm9wcy51c2VEYXRhU291cmNlcyk7XG4gIGNvbnN0IG1hcFdpZGdldElkID0gdG9QbGFpbkFycmF5PHN0cmluZz4ocHJvcHMudXNlTWFwV2lkZ2V0SWRzKVswXTtcbiAgY29uc3QgcHJpbWFyeURzID0gc2VsZWN0ZWRVc2VEYXRhU291cmNlc1swXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICB7cHJpbWFyeURzID8gKFxuICAgICAgICA8RGF0YVNvdXJjZUNvbXBvbmVudFxuICAgICAgICAgIGtleT17cHJpbWFyeURzPy5kYXRhU291cmNlSWR9XG4gICAgICAgICAgdXNlRGF0YVNvdXJjZT17cHJpbWFyeURzfVxuICAgICAgICAgIG9uRGF0YVNvdXJjZUNyZWF0ZWQ9e1xuICAgICAgICAgICAgcHJvcHMub25EYXRhU291cmNlQ3JlYXRlZFxuICAgICAgICAgICAgICA/IChkczogRGF0YVNvdXJjZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcHJvcHMub25EYXRhU291cmNlQ3JlYXRlZD8uKGRzIGFzIFF1ZXJpYWJsZURhdGFTb3VyY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHttYXBXaWRnZXRJZCAmJiAoXG4gICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxuICAgICAgICAgIHVzZU1hcFdpZGdldElkPXttYXBXaWRnZXRJZH1cbiAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9e3Byb3BzLm9uQWN0aXZlVmlld0NoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgeyB0eXBlIFF1ZXJpYWJsZURhdGFTb3VyY2UgfSBmcm9tIFwiamltdS1jb3JlXCI7XG5pbXBvcnQge1xuICBidWlsZEFncmlXaGVyZSxcbiAgY2Fub25pY2FsaXplUmVnaW9uRmlsdGVyVmFsdWUsXG4gIGRpc2FibGVMYXllclBiZixcbiAgZmxMb2csXG4gIGhheXN0YWNrTWF0Y2hlc1JlZ2lvbixcbiAgaGF5c3RhY2tNYXRjaGVzWWVhcixcbiAgZ2V0UXVlcnlhYmxlTGF5ZXIsXG4gIHBpY2tZZWFyUmVnaW9uTGF5ZXJQb29sLFxuICBwcmVwYXJlVmFsdWVJbmRleCxcbiAgcXVpY2tMYXllckZlYXR1cmVDb3VudCxcbiAgcmVzb2x2ZUZlYXR1cmVMYXllckZvckZpbHRlcnMsXG4gIHNhZmVMb2FkTWFwTGF5ZXIsXG4gIHNjb3JlSGF5c3RhY2tGb3JGaWx0ZXJzLFxuICB0eXBlIEFncmlGaWx0ZXJzLFxuICB0eXBlIFJlc29sdmVkRmVhdHVyZUxheWVyLFxufSBmcm9tIFwiLi9mZWF0dXJlLWxheWVyLWRhdGFcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvUGxhaW5BcnJheTxUID0gYW55Pih2YWw6IGFueSk6IFRbXSB7XG4gIGlmICghdmFsKSByZXR1cm4gW107XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHJldHVybiB2YWwgYXMgVFtdO1xuICBpZiAodHlwZW9mIHZhbC5hc011dGFibGUgPT09IFwiZnVuY3Rpb25cIilcbiAgICByZXR1cm4gdmFsLmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSkgYXMgVFtdO1xuICBpZiAodHlwZW9mIHZhbC50b0FycmF5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB2YWwudG9BcnJheSgpIGFzIFRbXTtcbiAgcmV0dXJuIFtdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0ZWREc0lkcyh1c2VEYXRhU291cmNlczogYW55KTogc3RyaW5nW10ge1xuICBjb25zdCB1ZHMgPSB0b1BsYWluQXJyYXk8YW55Pih1c2VEYXRhU291cmNlcyk7XG4gIGNvbnN0IGlkcyA9IHVkcy5tYXAoKHUpID0+IHU/LmRhdGFTb3VyY2VJZCkuZmlsdGVyKEJvb2xlYW4pO1xuICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGlkcykpO1xufVxuXG50eXBlIFNjb3JlZERzID0ge1xuICBkczogUXVlcmlhYmxlRGF0YVNvdXJjZTtcbiAgc2NvcmU6IG51bWJlcjtcbiAgcmVnaW9uTWF0Y2g6IGJvb2xlYW47XG59O1xuXG4vKipcbiAqIFJlc29sdmVzIHRoZSBhY3RpdmUgRmVhdHVyZUxheWVyIGZvciBkYXNoYm9hcmQgd2lkZ2V0cy5cbiAqIFByZWZlcnMgRVhCIERhdGFTb3VyY2VzIChzYW1lIHBhdGggYXMgQWdyaUxvY2FsaXphdGlvbiksXG4gKiBmYWxscyBiYWNrIHRvIEppbXVNYXBWaWV3IG1hcCBsYXllcnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBBZ3JpRGF0YVNvdXJjZUVuZ2luZSB7XG4gIHByaXZhdGUgZHNCeUlkOiBSZWNvcmQ8c3RyaW5nLCBRdWVyaWFibGVEYXRhU291cmNlPiA9IHt9O1xuICBwcml2YXRlIHNlbGVjdGVkSWRzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIHJlc29sdmVDYWNoZSA9IG5ldyBNYXA8XG4gICAgc3RyaW5nLFxuICAgIFByb21pc2U8UmVzb2x2ZWRGZWF0dXJlTGF5ZXIgfCBudWxsPlxuICA+KCk7XG5cbiAgb25Ec0NyZWF0ZWQoZHM6IFF1ZXJpYWJsZURhdGFTb3VyY2UsIGlkczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICBpZiAoIWRzPy5pZCkgcmV0dXJuO1xuICAgIHRoaXMuZHNCeUlkW2RzLmlkXSA9IGRzO1xuICAgIHRoaXMuc2VsZWN0ZWRJZHMgPSBbLi4uaWRzXTtcbiAgICB0aGlzLnJlc29sdmVDYWNoZS5jbGVhcigpO1xuICB9XG5cbiAgc3luY1NlbGVjdGlvbihpZHM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZElkcyA9IFsuLi5pZHNdO1xuICAgIHRoaXMucmVzb2x2ZUNhY2hlLmNsZWFyKCk7XG4gIH1cblxuICBjbGVhclJlc29sdmVDYWNoZSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlc29sdmVDYWNoZS5jbGVhcigpO1xuICB9XG5cbiAgLyoqIFRydWUgd2hpbGUgc2VsZWN0ZWQgZGF0YSBzb3VyY2VzIGFyZSBzdGlsbCBjb25uZWN0aW5nIChubyBtYXAgZmFsbGJhY2sgeWV0KS4gKi9cbiAgaXNSZXNvbHZlUGVuZGluZyhqaW11TWFwVmlldzogYW55IHwgbnVsbCk6IGJvb2xlYW4ge1xuICAgIGlmIChqaW11TWFwVmlldz8udmlldz8ubWFwKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKCF0aGlzLnNlbGVjdGVkSWRzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IGNvbm5lY3RlZCA9IHRoaXMuc2VsZWN0ZWRJZHMuZmlsdGVyKChpZCkgPT4gISF0aGlzLmRzQnlJZFtpZF0pLmxlbmd0aDtcbiAgICByZXR1cm4gY29ubmVjdGVkIDwgdGhpcy5zZWxlY3RlZElkcy5sZW5ndGg7XG4gIH1cblxuICBoYXNDb25uZWN0ZWRTb3VyY2VzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSWRzLnNvbWUoKGlkKSA9PiAhIXRoaXMuZHNCeUlkW2lkXSk7XG4gIH1cblxuICBnZXRMYXllckZyb21EcyhkczogUXVlcmlhYmxlRGF0YVNvdXJjZSk6IGFueSB8IG51bGwge1xuICAgIGNvbnN0IGFueURzID0gZHMgYXMgYW55O1xuICAgIHJldHVybiBnZXRRdWVyeWFibGVMYXllcihhbnlEcy5sYXllciB8fCBhbnlEcy5fbGF5ZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREc0hheXN0YWNrKGRzOiBRdWVyaWFibGVEYXRhU291cmNlKTogc3RyaW5nIHtcbiAgICBjb25zdCBhbnlEcyA9IGRzIGFzIGFueTtcbiAgICBjb25zdCBsYXllciA9IGFueURzLmxheWVyIHx8IGFueURzLl9sYXllcjtcbiAgICBjb25zdCB0aXRsZSA9IFN0cmluZyhsYXllcj8udGl0bGUgfHwgXCJcIik7XG4gICAgY29uc3QgdXJsID0gU3RyaW5nKGxheWVyPy51cmwgfHwgYW55RHMuZ2V0RGF0YVNvdXJjZUpzb24/LigpPy51cmwgfHwgXCJcIik7XG4gICAgY29uc3QgbGFiZWwgPSBTdHJpbmcoXG4gICAgICBhbnlEcy5nZXRMYWJlbD8uKCkgfHxcbiAgICAgICAgYW55RHMuZ2V0RGF0YVNvdXJjZUpzb24/LigpPy5sYWJlbCB8fFxuICAgICAgICBhbnlEcy5nZXREYXRhU291cmNlSnNvbj8uKCk/LnNvdXJjZUxhYmVsIHx8XG4gICAgICAgIFwiXCIsXG4gICAgKTtcbiAgICByZXR1cm4gYCR7dGl0bGV9ICR7dXJsfSAke2xhYmVsfWA7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkUmVnaW9uUHJvYmVXaGVyZShcbiAgICBmaWx0ZXJzOiBQaWNrPEFncmlGaWx0ZXJzLCBcInlpbFwiIHwgXCJ2aWxveWF0XCI+LFxuICAgIGxheWVyOiBhbnksXG4gICAgZmllbGRzOiBzdHJpbmdbXSxcbiAgICByZWdpb25TY29wZWQ6IGJvb2xlYW4sXG4gICAgeWVhclNjb3BlZDogYm9vbGVhbixcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYnVpbGRBZ3JpV2hlcmUoXG4gICAgICB7XG4gICAgICAgIHlpbDogZmlsdGVycy55aWwsXG4gICAgICAgIHZpbG95YXQ6IGZpbHRlcnMudmlsb3lhdCxcbiAgICAgICAgc2tpcFJlZ2lvbkZpbHRlcjogcmVnaW9uU2NvcGVkLFxuICAgICAgICBza2lwWWVhckZpbHRlcjogeWVhclNjb3BlZCxcbiAgICAgIH0sXG4gICAgICBmaWVsZHMsXG4gICAgICBsYXllcixcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBwaWNrQmVzdERzQnlDb3VudChcbiAgICBwb29sOiBTY29yZWREc1tdLFxuICAgIGZpbHRlcnM6IFBpY2s8QWdyaUZpbHRlcnMsIFwieWlsXCIgfCBcInZpbG95YXRcIj4sXG4gICAgcHJlZmVycmVkRHM6IFF1ZXJpYWJsZURhdGFTb3VyY2UgfCBudWxsLFxuICApOiBQcm9taXNlPFNjb3JlZERzIHwgbnVsbD4ge1xuICAgIGlmICghcG9vbC5sZW5ndGgpIHJldHVybiBudWxsO1xuICAgIGlmICghU3RyaW5nKGZpbHRlcnMudmlsb3lhdCA/PyBcIlwiKS50cmltKCkgfHwgcG9vbC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiBwb29sWzBdO1xuICAgIH1cblxuICAgIGNvbnN0IHNjb3JlZDogQXJyYXk8eyBpdGVtOiBTY29yZWREczsgY291bnQ6IG51bWJlciB9PiA9IFtdO1xuICAgIGNvbnN0IHRyeUl0ZW0gPSBhc3luYyAoaXRlbTogU2NvcmVkRHMpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgIGNvbnN0IGxheWVyID0gdGhpcy5nZXRMYXllckZyb21EcyhpdGVtLmRzKTtcbiAgICAgIGlmICghbGF5ZXIpIHJldHVybjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHNhZmVMb2FkTWFwTGF5ZXIobGF5ZXIpO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8qIGlnbm9yZSAqL1xuICAgICAgfVxuICAgICAgY29uc3QgZmllbGRzOiBzdHJpbmdbXSA9IChsYXllci5maWVsZHMgfHwgW10pLm1hcCgoZjogYW55KSA9PiBmLm5hbWUpO1xuICAgICAgY29uc3Qgd2hlcmUgPSB0aGlzLmJ1aWxkUmVnaW9uUHJvYmVXaGVyZShcbiAgICAgICAgZmlsdGVycyxcbiAgICAgICAgbGF5ZXIsXG4gICAgICAgIGZpZWxkcyxcbiAgICAgICAgaXRlbS5yZWdpb25NYXRjaCxcbiAgICAgICAgaGF5c3RhY2tNYXRjaGVzWWVhcih0aGlzLmdldERzSGF5c3RhY2soaXRlbS5kcyksIGZpbHRlcnMueWlsKSxcbiAgICAgICk7XG4gICAgICBjb25zdCBjb3VudCA9IGF3YWl0IHF1aWNrTGF5ZXJGZWF0dXJlQ291bnQobGF5ZXIsIHdoZXJlKTtcbiAgICAgIHNjb3JlZC5wdXNoKHsgaXRlbSwgY291bnQgfSk7XG4gICAgfTtcblxuICAgIGlmIChwcmVmZXJyZWREcykge1xuICAgICAgY29uc3QgcHJlZmVycmVkID0gcG9vbC5maW5kKChwKSA9PiBwLmRzLmlkID09PSBwcmVmZXJyZWREcy5pZCk7XG4gICAgICBpZiAocHJlZmVycmVkKSB7XG4gICAgICAgIGF3YWl0IHRyeUl0ZW0ocHJlZmVycmVkKTtcbiAgICAgICAgY29uc3QgcHJlZmVycmVkQ291bnQgPSBzY29yZWRbMF0/LmNvdW50ID8/IC0xO1xuICAgICAgICBpZiAocHJlZmVycmVkQ291bnQgPiAwKSByZXR1cm4gcHJlZmVycmVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbWFpbmluZyA9IHBvb2wuZmlsdGVyKFxuICAgICAgKHApID0+ICFwcmVmZXJyZWREcyB8fCBwLmRzLmlkICE9PSBwcmVmZXJyZWREcy5pZCxcbiAgICApO1xuICAgIGF3YWl0IFByb21pc2UuYWxsKHJlbWFpbmluZy5tYXAoKGl0ZW0pID0+IHRyeUl0ZW0oaXRlbSkpKTtcblxuICAgIGNvbnN0IHBvc2l0aXZlID0gc2NvcmVkXG4gICAgICAuZmlsdGVyKChzKSA9PiBzLmNvdW50ID4gMClcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmNvdW50IC0gYS5jb3VudCk7XG4gICAgaWYgKHBvc2l0aXZlLmxlbmd0aCkgcmV0dXJuIHBvc2l0aXZlWzBdLml0ZW07XG5cbiAgICByZXR1cm4gKFxuICAgICAgc2NvcmVkLmZpbmQoKHMpID0+IHMuY291bnQgPj0gMCk/Lml0ZW0gfHxcbiAgICAgIHBvb2wuZmluZCgocCkgPT4gcC5kcy5pZCA9PT0gcHJlZmVycmVkRHM/LmlkKSB8fFxuICAgICAgcG9vbFswXVxuICAgICk7XG4gIH1cblxuICBhc3luYyByZXNvbHZlRnJvbURhdGFTb3VyY2VzKFxuICAgIGZpbHRlcnM6IFBpY2s8QWdyaUZpbHRlcnMsIFwieWlsXCIgfCBcInZpbG95YXRcIj4sXG4gICk6IFByb21pc2U8UmVzb2x2ZWRGZWF0dXJlTGF5ZXIgfCBudWxsPiB7XG4gICAgY29uc3Qgbm9ybWFsaXplZEZpbHRlcnMgPSB7XG4gICAgICB5aWw6IGZpbHRlcnMueWlsLFxuICAgICAgdmlsb3lhdDogY2Fub25pY2FsaXplUmVnaW9uRmlsdGVyVmFsdWUoU3RyaW5nKGZpbHRlcnMudmlsb3lhdCA/PyBcIlwiKS50cmltKCkpLFxuICAgIH07XG4gICAgY29uc3Qgd2FudHNSZWdpb24gPSAhIW5vcm1hbGl6ZWRGaWx0ZXJzLnZpbG95YXQ7XG4gICAgY29uc3Qgc2NvcmVkOiBTY29yZWREc1tdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGlkIG9mIHRoaXMuc2VsZWN0ZWRJZHMpIHtcbiAgICAgIGNvbnN0IGRzID0gdGhpcy5kc0J5SWRbaWRdO1xuICAgICAgaWYgKCFkcyB8fCAhdGhpcy5nZXRMYXllckZyb21EcyhkcykpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgaGF5c3RhY2sgPSB0aGlzLmdldERzSGF5c3RhY2soZHMpO1xuICAgICAgc2NvcmVkLnB1c2goe1xuICAgICAgICBkcyxcbiAgICAgICAgc2NvcmU6IHNjb3JlSGF5c3RhY2tGb3JGaWx0ZXJzKGhheXN0YWNrLCBub3JtYWxpemVkRmlsdGVycyksXG4gICAgICAgIHJlZ2lvbk1hdGNoOiBoYXlzdGFja01hdGNoZXNSZWdpb24oaGF5c3RhY2ssIG5vcm1hbGl6ZWRGaWx0ZXJzLnZpbG95YXQpLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFzY29yZWQubGVuZ3RoKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IHBvb2wgPSBwaWNrWWVhclJlZ2lvbkxheWVyUG9vbChcbiAgICAgIHNjb3JlZCxcbiAgICAgIHNjb3JlZC5sZW5ndGgsXG4gICAgICBub3JtYWxpemVkRmlsdGVycyxcbiAgICAgIChpdGVtKSA9PiB0aGlzLmdldERzSGF5c3RhY2soaXRlbS5kcyksXG4gICAgKTtcbiAgICBpZiAoIXBvb2wubGVuZ3RoKSByZXR1cm4gbnVsbDtcblxuICAgIGxldCBiZXN0U2NvcmUgPSAtMTtcbiAgICBsZXQgc2NvcmVXaW5uZXI6IFNjb3JlZERzIHwgbnVsbCA9IG51bGw7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHBvb2wpIHtcbiAgICAgIGlmIChpdGVtLnNjb3JlID4gYmVzdFNjb3JlKSB7XG4gICAgICAgIGJlc3RTY29yZSA9IGl0ZW0uc2NvcmU7XG4gICAgICAgIHNjb3JlV2lubmVyID0gaXRlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwcmVmZXJyZWREcyA9IHNjb3JlV2lubmVyPy5kcyB8fCBudWxsO1xuICAgIGNvbnN0IGJlc3RJdGVtID1cbiAgICAgIHdhbnRzUmVnaW9uICYmIHBvb2wubGVuZ3RoID4gMVxuICAgICAgICA/IGF3YWl0IHRoaXMucGlja0Jlc3REc0J5Q291bnQocG9vbCwgbm9ybWFsaXplZEZpbHRlcnMsIHByZWZlcnJlZERzKVxuICAgICAgICA6IHNjb3JlV2lubmVyO1xuXG4gICAgY29uc3QgYmVzdERzID0gYmVzdEl0ZW0/LmRzIHx8IHByZWZlcnJlZERzO1xuICAgIGlmICghYmVzdERzKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IGxheWVyID0gdGhpcy5nZXRMYXllckZyb21EcyhiZXN0RHMpO1xuICAgIGlmICghbGF5ZXIpIHJldHVybiBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHNhZmVMb2FkTWFwTGF5ZXIobGF5ZXIpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgLyogbGF5ZXIgbWF5IGFscmVhZHkgYmUgbG9hZGVkICovXG4gICAgfVxuICAgIGRpc2FibGVMYXllclBiZihsYXllcik7XG5cbiAgICBjb25zdCBmaWVsZHM6IHN0cmluZ1tdID0gKGxheWVyLmZpZWxkcyB8fCBbXSkubWFwKChmOiBhbnkpID0+IGYubmFtZSk7XG4gICAgY29uc3QgcmVnaW9uTWF0Y2ggPSBiZXN0SXRlbT8ucmVnaW9uTWF0Y2ggPz8gZmFsc2U7XG4gICAgY29uc3QgcmVnaW9uU2NvcGVkID0gcmVnaW9uTWF0Y2ggfHwgKGJlc3RJdGVtPy5zY29yZSA/PyAwKSA+PSAyNTtcbiAgICBjb25zdCBoYXlzdGFjayA9IHRoaXMuZ2V0RHNIYXlzdGFjayhiZXN0RHMpO1xuICAgIGNvbnN0IHllYXJTY29wZWQgPSBoYXlzdGFja01hdGNoZXNZZWFyKGhheXN0YWNrLCBub3JtYWxpemVkRmlsdGVycy55aWwpO1xuXG4gICAgZmxMb2coXCJyZXNvbHZlIHZpYSBEYXRhU291cmNlXCIsIHtcbiAgICAgIGZpbHRlcnM6IG5vcm1hbGl6ZWRGaWx0ZXJzLFxuICAgICAgZHNJZDogYmVzdERzLmlkLFxuICAgICAgbGF5ZXJUaXRsZTogbGF5ZXI/LnRpdGxlIHx8IGxheWVyPy51cmwgfHwgbnVsbCxcbiAgICAgIHNjb3JlOiBiZXN0SXRlbT8uc2NvcmUgPz8gYmVzdFNjb3JlLFxuICAgICAgcmVnaW9uU2NvcGVkLFxuICAgICAgeWVhclNjb3BlZCxcbiAgICAgIGZpZWxkQ291bnQ6IGZpZWxkcy5sZW5ndGgsXG4gICAgICBjb3VudEJhc2VkOiB3YW50c1JlZ2lvbiAmJiBwb29sLmxlbmd0aCA+IDEsXG4gICAgfSk7XG4gICAgdm9pZCBwcmVwYXJlVmFsdWVJbmRleChsYXllciwgZmllbGRzKTtcbiAgICByZXR1cm4ge1xuICAgICAgbGF5ZXIsXG4gICAgICBmaWVsZHMsXG4gICAgICByZWdpb25TY29wZWQsXG4gICAgICB5ZWFyU2NvcGVkLFxuICAgIH07XG4gIH1cblxuICBhc3luYyByZXNvbHZlKFxuICAgIGZpbHRlcnM6IFBpY2s8QWdyaUZpbHRlcnMsIFwieWlsXCIgfCBcInZpbG95YXRcIj4sXG4gICAgamltdU1hcFZpZXc6IGFueSB8IG51bGwsXG4gICk6IFByb21pc2U8UmVzb2x2ZWRGZWF0dXJlTGF5ZXIgfCBudWxsPiB7XG4gICAgY29uc3QgY2FjaGVLZXkgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB5aWw6IGZpbHRlcnMueWlsIHx8IFwiXCIsXG4gICAgICB2aWxveWF0OiBjYW5vbmljYWxpemVSZWdpb25GaWx0ZXJWYWx1ZShTdHJpbmcoZmlsdGVycy52aWxveWF0ID8/IFwiXCIpLnRyaW0oKSksXG4gICAgICBpZHM6IHRoaXMuc2VsZWN0ZWRJZHMsXG4gICAgICBtYXBSZWFkeTogISFqaW11TWFwVmlldyxcbiAgICB9KTtcbiAgICBjb25zdCBwZW5kaW5nID0gdGhpcy5yZXNvbHZlQ2FjaGUuZ2V0KGNhY2hlS2V5KTtcbiAgICBpZiAocGVuZGluZykgcmV0dXJuIHBlbmRpbmc7XG5cbiAgICBjb25zdCBqb2IgPSB0aGlzLnJlc29sdmVJbnRlcm5hbChmaWx0ZXJzLCBqaW11TWFwVmlldyk7XG4gICAgdGhpcy5yZXNvbHZlQ2FjaGUuc2V0KGNhY2hlS2V5LCBqb2IpO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgam9iO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAodGhpcy5yZXNvbHZlQ2FjaGUuZ2V0KGNhY2hlS2V5KSA9PT0gam9iKSB7XG4gICAgICAgIHRoaXMucmVzb2x2ZUNhY2hlLmRlbGV0ZShjYWNoZUtleSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyByZXNvbHZlSW50ZXJuYWwoXG4gICAgZmlsdGVyczogUGljazxBZ3JpRmlsdGVycywgXCJ5aWxcIiB8IFwidmlsb3lhdFwiPixcbiAgICBqaW11TWFwVmlldzogYW55IHwgbnVsbCxcbiAgKTogUHJvbWlzZTxSZXNvbHZlZEZlYXR1cmVMYXllciB8IG51bGw+IHtcbiAgICBjb25zdCBmcm9tRHMgPSBhd2FpdCB0aGlzLnJlc29sdmVGcm9tRGF0YVNvdXJjZXMoZmlsdGVycyk7XG4gICAgaWYgKGZyb21EcykgcmV0dXJuIGZyb21EcztcbiAgICBpZiAoIWppbXVNYXBWaWV3KSB7XG4gICAgICBmbExvZyhcInJlc29sdmUgRkFJTEVEIChubyBEUyBsYXllciwgbm8gbWFwIHZpZXcpXCIsIHtcbiAgICAgICAgZmlsdGVycyxcbiAgICAgICAgc2VsZWN0ZWRJZHM6IHRoaXMuc2VsZWN0ZWRJZHMsXG4gICAgICAgIGNvbm5lY3RlZElkczogdGhpcy5zZWxlY3RlZElkcy5maWx0ZXIoKGlkKSA9PiAhIXRoaXMuZHNCeUlkW2lkXSksXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBmcm9tTWFwID0gYXdhaXQgcmVzb2x2ZUZlYXR1cmVMYXllckZvckZpbHRlcnMoamltdU1hcFZpZXcsIGZpbHRlcnMpO1xuICAgIGZsTG9nKFwicmVzb2x2ZSB2aWEgTWFwXCIsIHtcbiAgICAgIGZpbHRlcnMsXG4gICAgICBsYXllclRpdGxlOiBmcm9tTWFwPy5sYXllcj8udGl0bGUgfHwgZnJvbU1hcD8ubGF5ZXI/LnVybCB8fCBudWxsLFxuICAgICAgcmVnaW9uU2NvcGVkOiBmcm9tTWFwPy5yZWdpb25TY29wZWQgPz8gbnVsbCxcbiAgICAgIHllYXJTY29wZWQ6IGZyb21NYXA/LnllYXJTY29wZWQgPz8gbnVsbCxcbiAgICAgIGZvdW5kOiAhIWZyb21NYXAsXG4gICAgfSk7XG4gICAgaWYgKGZyb21NYXA/LmxheWVyKSB7XG4gICAgICB2b2lkIHByZXBhcmVWYWx1ZUluZGV4KGZyb21NYXAubGF5ZXIsIGZyb21NYXAuZmllbGRzKTtcbiAgICB9XG4gICAgcmV0dXJuIGZyb21NYXA7XG4gIH1cbn1cbiIsImltcG9ydCB7IEFncmlEYXRhU291cmNlRW5naW5lIH0gZnJvbSBcIi4vYWdyaS1kYXRhLXNvdXJjZS1lbmdpbmVcIjtcblxuY29uc3QgREFTSEJPQVJEX0NISUxEX1NVRkZJWEVTID0gW1xuICBcIi1sb2NhbGl6YXRpb25cIixcbiAgXCItaW5kaWNhdG9yXCIsXG4gIFwiLXJlZ2lvblwiLFxuICBcIi1waWVcIixcbiAgXCItZ3JhZmZcIixcbiAgXCItYmFyXCIsXG4gIFwiLXBvcHVwXCIsXG5dIGFzIGNvbnN0O1xuXG4vKiogUm9vdCBBZ3JvV2lkZ2V0VjUgd2lkZ2V0IGlkIGZyb20gYW55IGVtYmVkZGVkIGNoaWxkIGlkLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFncmlEYXNoYm9hcmRSb290SWQod2lkZ2V0SWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGlkID0gU3RyaW5nKHdpZGdldElkIHx8IFwiXCIpO1xuICBmb3IgKGNvbnN0IHN1ZmZpeCBvZiBEQVNIQk9BUkRfQ0hJTERfU1VGRklYRVMpIHtcbiAgICBpZiAoaWQuZW5kc1dpdGgoc3VmZml4KSkgcmV0dXJuIGlkLnNsaWNlKDAsIC1zdWZmaXgubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gaWQ7XG59XG5cbmNvbnN0IHNoYXJlZEVuZ2luZXMgPSBuZXcgTWFwPHN0cmluZywgQWdyaURhdGFTb3VyY2VFbmdpbmU+KCk7XG5cbi8qKiBPbmUgRGF0YVNvdXJjZSBlbmdpbmUgcGVyIGRhc2hib2FyZCBpbnN0YW5jZSDigJQgc2hhcmVkIGJ5IGFsbCBlbWJlZGRlZCBjaGlsZHJlbi4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTaGFyZWRBZ3JpRGF0YVNvdXJjZUVuZ2luZShcbiAgd2lkZ2V0SWQ6IHN0cmluZyxcbik6IEFncmlEYXRhU291cmNlRW5naW5lIHtcbiAgY29uc3Qgcm9vdElkID0gZ2V0QWdyaURhc2hib2FyZFJvb3RJZCh3aWRnZXRJZCk7XG4gIGxldCBlbmdpbmUgPSBzaGFyZWRFbmdpbmVzLmdldChyb290SWQpO1xuICBpZiAoIWVuZ2luZSkge1xuICAgIGVuZ2luZSA9IG5ldyBBZ3JpRGF0YVNvdXJjZUVuZ2luZSgpO1xuICAgIHNoYXJlZEVuZ2luZXMuc2V0KHJvb3RJZCwgZW5naW5lKTtcbiAgfVxuICByZXR1cm4gZW5naW5lO1xufVxuIiwiaW1wb3J0IHsgQXBwTW9kZSwgZ2V0QXBwU3RvcmUgfSBmcm9tIFwiamltdS1jb3JlXCI7XG5pbXBvcnQgeyB0b1BsYWluQXJyYXkgfSBmcm9tIFwiLi9hZ3JpLWRhdGEtc291cmNlLWVuZ2luZVwiO1xuXG5leHBvcnQgdHlwZSBMaW5rZWRNYXBMYXlvdXRTY29wZSA9IFwiZGFzaGJvYXJkXCIgfCBcInBsbVwiO1xuXG5jb25zdCBNQU5BR0VEX01BUF9DTEFTUzogUmVjb3JkPExpbmtlZE1hcExheW91dFNjb3BlLCBzdHJpbmc+ID0ge1xuICBkYXNoYm9hcmQ6IFwiYWdyaS1kYXNoYm9hcmQtbWFuYWdlZC1tYXBcIixcbiAgcGxtOiBcInBsbS1tYW5hZ2VkLW1hcFwiLFxufTtcblxuY29uc3QgTUFOQUdFRF9SRU5ERVJFUl9DTEFTUzogUmVjb3JkPExpbmtlZE1hcExheW91dFNjb3BlLCBzdHJpbmc+ID0ge1xuICBkYXNoYm9hcmQ6IFwiYWdyaS1kYXNoYm9hcmQtbWFuYWdlZC1tYXAtcmVuZGVyZXJcIixcbiAgcGxtOiBcInBsbS1tYW5hZ2VkLW1hcC1yZW5kZXJlclwiLFxufTtcblxuY29uc3QgTUFQX1BBTkVMX0JPUkRFUl9SQURJVVMgPSBcIjIwcHhcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBZ3JpTGlua2VkTWFwTGF5b3V0T3B0aW9ucyB7XG4gIHNjb3BlOiBMaW5rZWRNYXBMYXlvdXRTY29wZTtcbiAgaG9zdFdpZGdldElkOiBzdHJpbmc7XG4gIGdldFNsb3RFbGVtZW50OiAoKSA9PiBIVE1MRWxlbWVudCB8IG51bGw7XG4gIGdldFVzZU1hcFdpZGdldElkczogKCkgPT4gdW5rbm93bjtcbiAgb25NYXBXaWRnZXRMaW5rZWQ/OiAobWFwV2lkZ2V0SWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgLyoqIEZpcmVkIHdoZW4gYSBtYXAgd2lkZ2V0IGlkIGJlY29tZXMgYXZhaWxhYmxlIChjb25maWcgbGluayBvciBhcHAgZGlzY292ZXJ5KS4gKi9cbiAgb25NYXBSZXNvbHZlZD86IChtYXBXaWRnZXRJZDogc3RyaW5nKSA9PiB2b2lkO1xuICByZXNpemVNYXBWaWV3PzogKCkgPT4gdm9pZDtcbn1cblxuZnVuY3Rpb24gaXNNYXBXaWRnZXRDb25maWcod2lkZ2V0OiBhbnkpOiBib29sZWFuIHtcbiAgY29uc3QgbWFuaWZlc3ROYW1lID0gU3RyaW5nKHdpZGdldD8ubWFuaWZlc3Q/Lm5hbWUgfHwgXCJcIikudG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgdXJpID0gU3RyaW5nKHdpZGdldD8udXJpIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiBtYW5pZmVzdE5hbWUgPT09IFwibWFwXCIgfHwgdXJpLmluY2x1ZGVzKFwiYXJjZ2lzLW1hcFwiKTtcbn1cblxuZnVuY3Rpb24gZmluZFdpZGdldFJlbmRlcmVyKHdpZGdldElkOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB8IG51bGwge1xuICBjb25zdCBzZWxlY3RvcnMgPSBbXG4gICAgYC53aWRnZXQtcmVuZGVyZXJbZGF0YS13aWRnZXRpZD1cIiR7d2lkZ2V0SWR9XCJdYCxcbiAgICBgW2RhdGEtd2lkZ2V0aWQ9XCIke3dpZGdldElkfVwiXS53aWRnZXQtcmVuZGVyZXJgLFxuICAgIGBbZGF0YS13aWRnZXRpZD1cIiR7d2lkZ2V0SWR9XCJdYCxcbiAgXTtcbiAgZm9yIChjb25zdCBzZWxlY3RvciBvZiBzZWxlY3RvcnMpIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgICBpZiAoZWwpIHJldHVybiBlbDtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gZmluZFdpZGdldExheW91dEl0ZW0od2lkZ2V0SWQ6IHN0cmluZyk6IEhUTUxFbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHJlbmRlcmVyID0gZmluZFdpZGdldFJlbmRlcmVyKHdpZGdldElkKTtcbiAgaWYgKCFyZW5kZXJlcikgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgY2FuZGlkYXRlcyA9IFtcbiAgICByZW5kZXJlci5jbG9zZXN0KFwiLmxheW91dC1pdGVtLmlzLXdpZGdldFwiKSxcbiAgICByZW5kZXJlci5jbG9zZXN0KFwiLmJ1aWxkZXItbGF5b3V0LWl0ZW1cIiksXG4gICAgcmVuZGVyZXIuY2xvc2VzdChcIi5sYXlvdXQtaXRlbVwiKSxcbiAgICByZW5kZXJlci5jbG9zZXN0KFwiLnNlY3Rpb24tbGF5b3V0LWl0ZW1cIiksXG4gICAgcmVuZGVyZXIuY2xvc2VzdCgnW2NsYXNzKj1cImxheW91dC1pdGVtXCJdJyksXG4gICAgcmVuZGVyZXIucGFyZW50RWxlbWVudCxcbiAgXTtcblxuICBmb3IgKGNvbnN0IGNhbmRpZGF0ZSBvZiBjYW5kaWRhdGVzKSB7XG4gICAgaWYgKGNhbmRpZGF0ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIGNhbmRpZGF0ZS5jb250YWlucyhyZW5kZXJlcikpIHtcbiAgICAgIHJldHVybiBjYW5kaWRhdGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlbmRlcmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNLbm93bk1hcFdpZGdldElkKHdpZGdldElkPzogc3RyaW5nIHwgbnVsbCk6IGJvb2xlYW4ge1xuICBjb25zdCBpZCA9IFN0cmluZyh3aWRnZXRJZCB8fCBcIlwiKS50cmltKCk7XG4gIGlmICghaWQpIHJldHVybiBmYWxzZTtcblxuICB0cnkge1xuICAgIGNvbnN0IHdpZGdldHMgPSAoZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpIGFzIGFueSk/LmFwcENvbmZpZz8ud2lkZ2V0cyB8fCB7fTtcbiAgICBjb25zdCB3aWRnZXQgPSB3aWRnZXRzW2lkXTtcbiAgICBpZiAod2lkZ2V0ICYmIGlzTWFwV2lkZ2V0Q29uZmlnKHdpZGdldCkpIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIHtcbiAgICAvKiBhcHAgY29uZmlnIG1heSBzdGlsbCBiZSB3YXJtaW5nIHVwICovXG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiAhIWZpbmRXaWRnZXRSZW5kZXJlcihpZCk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc01hcE92ZXJsYXBwaW5nU2xvdChtYXBXaWRnZXRJZDogc3RyaW5nLCBzbG90OiBET01SZWN0KTogYm9vbGVhbiB7XG4gIGNvbnN0IGl0ZW0gPSBmaW5kV2lkZ2V0TGF5b3V0SXRlbShtYXBXaWRnZXRJZCk7XG4gIGlmICghaXRlbSkgcmV0dXJuIGZhbHNlO1xuICBjb25zdCByZWN0ID0gaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3QgY3ggPSByZWN0LmxlZnQgKyByZWN0LndpZHRoIC8gMjtcbiAgY29uc3QgY3kgPSByZWN0LnRvcCArIHJlY3QuaGVpZ2h0IC8gMjtcbiAgaWYgKGN4ID49IHNsb3QubGVmdCAmJiBjeCA8PSBzbG90LnJpZ2h0ICYmIGN5ID49IHNsb3QudG9wICYmIGN5IDw9IHNsb3QuYm90dG9tKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY29uc3Qgb3ZlcmxhcFggPSBNYXRoLm1heChcbiAgICAwLFxuICAgIE1hdGgubWluKHJlY3QucmlnaHQsIHNsb3QucmlnaHQpIC0gTWF0aC5tYXgocmVjdC5sZWZ0LCBzbG90LmxlZnQpLFxuICApO1xuICBjb25zdCBvdmVybGFwWSA9IE1hdGgubWF4KFxuICAgIDAsXG4gICAgTWF0aC5taW4ocmVjdC5ib3R0b20sIHNsb3QuYm90dG9tKSAtIE1hdGgubWF4KHJlY3QudG9wLCBzbG90LnRvcCksXG4gICk7XG4gIGNvbnN0IG92ZXJsYXBBcmVhID0gb3ZlcmxhcFggKiBvdmVybGFwWTtcbiAgY29uc3QgbWFwQXJlYSA9IE1hdGgubWF4KDEsIHJlY3Qud2lkdGggKiByZWN0LmhlaWdodCk7XG4gIHJldHVybiBvdmVybGFwQXJlYSAvIG1hcEFyZWEgPiAwLjM7XG59XG5cbi8qKiBGaW5kIHRoZSBzdGFuZGFyZCBNYXAgd2lkZ2V0IGlkIGZyb20gYXBwIGNvbmZpZyAocHVibGlzaGVkIGV4cGVyaWVuY2Ugc2FmZSkuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzY292ZXJNYXBXaWRnZXRJZEluQXBwKG9wdGlvbnM6IHtcbiAgaG9zdFdpZGdldElkOiBzdHJpbmc7XG4gIGdldFNsb3RFbGVtZW50PzogKCkgPT4gSFRNTEVsZW1lbnQgfCBudWxsO1xufSk6IHN0cmluZyB8IG51bGwge1xuICB0cnkge1xuICAgIGNvbnN0IHN0YXRlID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpIGFzIGFueTtcbiAgICBjb25zdCB3aWRnZXRzID0gc3RhdGU/LmFwcENvbmZpZz8ud2lkZ2V0cyB8fCB7fTtcbiAgICBjb25zdCBvd25JZCA9IG9wdGlvbnMuaG9zdFdpZGdldElkO1xuICAgIGNvbnN0IGNhbmRpZGF0ZXM6IHN0cmluZ1tdID0gW107XG4gICAgT2JqZWN0LmtleXMod2lkZ2V0cykuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgIGlmIChpZCA9PT0gb3duSWQgfHwgaWQuc3RhcnRzV2l0aChgJHtvd25JZH0tYCkpIHJldHVybjtcbiAgICAgIGlmIChpc01hcFdpZGdldENvbmZpZyh3aWRnZXRzW2lkXSkpIGNhbmRpZGF0ZXMucHVzaChpZCk7XG4gICAgfSk7XG4gICAgaWYgKCFjYW5kaWRhdGVzLmxlbmd0aCkgcmV0dXJuIG51bGw7XG4gICAgaWYgKGNhbmRpZGF0ZXMubGVuZ3RoID09PSAxKSByZXR1cm4gY2FuZGlkYXRlc1swXTtcblxuICAgIGNvbnN0IHNsb3QgPSBvcHRpb25zLmdldFNsb3RFbGVtZW50Py4oKT8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKCFzbG90KSByZXR1cm4gY2FuZGlkYXRlc1swXTtcblxuICAgIGNvbnN0IGluc2lkZVNsb3QgPSBjYW5kaWRhdGVzLmZpbHRlcigoaWQpID0+XG4gICAgICBpc01hcE92ZXJsYXBwaW5nU2xvdChpZCwgc2xvdCksXG4gICAgKTtcbiAgICBpZiAoaW5zaWRlU2xvdC5sZW5ndGggPT09IDEpIHJldHVybiBpbnNpZGVTbG90WzBdO1xuICAgIGNvbnN0IHBvb2wgPSBpbnNpZGVTbG90Lmxlbmd0aCA/IGluc2lkZVNsb3QgOiBjYW5kaWRhdGVzO1xuXG4gICAgbGV0IGJlc3RJZCA9IHBvb2xbMF07XG4gICAgbGV0IGJlc3REaXN0YW5jZSA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICBwb29sLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICBjb25zdCBpdGVtID0gZmluZFdpZGdldExheW91dEl0ZW0oaWQpO1xuICAgICAgaWYgKCFpdGVtKSByZXR1cm47XG4gICAgICBjb25zdCByZWN0ID0gaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGR4ID0gcmVjdC5sZWZ0ICsgcmVjdC53aWR0aCAvIDIgLSAoc2xvdC5sZWZ0ICsgc2xvdC53aWR0aCAvIDIpO1xuICAgICAgY29uc3QgZHkgPSByZWN0LnRvcCArIHJlY3QuaGVpZ2h0IC8gMiAtIChzbG90LnRvcCArIHNsb3QuaGVpZ2h0IC8gMik7XG4gICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguaHlwb3QoZHgsIGR5KTtcbiAgICAgIGlmIChkaXN0YW5jZSA8IGJlc3REaXN0YW5jZSkge1xuICAgICAgICBiZXN0RGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICAgICAgYmVzdElkID0gaWQ7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGJlc3RJZDtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFncmlMaW5rZWRNYXBMYXlvdXRNYW5hZ2VyIHtcbiAgcHJpdmF0ZSBtYXBMYXlvdXRJdGVtOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIG1hcFdpZGdldFJlbmRlcmVyOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGF1dG9MaW5rQXR0ZW1wdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgbGF5b3V0UmFmID0gMDtcbiAgcHJpdmF0ZSBsYXN0Tm90aWZpZWRNYXBJZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBvcHRpb25zOiBBZ3JpTGlua2VkTWFwTGF5b3V0T3B0aW9ucykge31cblxuICBzY2hlZHVsZUxheW91dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5sYXlvdXRSYWYpIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGF5b3V0UmFmKTtcbiAgICB0aGlzLmxheW91dFJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLmxheW91dFJhZiA9IDA7XG4gICAgICB0aGlzLnN5bmMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxheW91dE5vdygpOiB2b2lkIHtcbiAgICB0aGlzLnN5bmMoKTtcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubGF5b3V0UmFmKSBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxheW91dFJhZik7XG4gICAgdGhpcy5sYXlvdXRSYWYgPSAwO1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgfVxuXG4gIGdldFJlc29sdmVkTWFwV2lkZ2V0SWQoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgY29uc3QgbGlua2VkID0gdGhpcy5nZXRMaW5rZWRNYXBXaWRnZXRJZCgpO1xuICAgIGlmIChsaW5rZWQgJiYgaXNLbm93bk1hcFdpZGdldElkKGxpbmtlZCkpIHJldHVybiBsaW5rZWQ7XG4gICAgcmV0dXJuIHRoaXMuZGlzY292ZXJNYXBXaWRnZXRJZEZyb21BcHAoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TGlua2VkTWFwV2lkZ2V0SWQoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgY29uc3QgaWRzID0gdG9QbGFpbkFycmF5PHN0cmluZz4odGhpcy5vcHRpb25zLmdldFVzZU1hcFdpZGdldElkcygpKTtcbiAgICByZXR1cm4gaWRzWzBdID8gU3RyaW5nKGlkc1swXSkgOiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kU2hhcmVkTGF5b3V0U3VyZmFjZShzbG90OiBIVE1MRWxlbWVudCk6IEhUTUxFbGVtZW50IHwgbnVsbCB7XG4gICAgY29uc3QgaG9zdEl0ZW0gPSBzbG90LmNsb3Nlc3QoXG4gICAgICBcIi5sYXlvdXQtaXRlbSwgLmJ1aWxkZXItbGF5b3V0LWl0ZW1cIixcbiAgICApIGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgICByZXR1cm4gaG9zdEl0ZW0/LnBhcmVudEVsZW1lbnQgfHwgbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgZGlzY292ZXJNYXBXaWRnZXRJZEZyb21BcHAoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIGRpc2NvdmVyTWFwV2lkZ2V0SWRJbkFwcCh7XG4gICAgICBob3N0V2lkZ2V0SWQ6IHRoaXMub3B0aW9ucy5ob3N0V2lkZ2V0SWQsXG4gICAgICBnZXRTbG90RWxlbWVudDogdGhpcy5vcHRpb25zLmdldFNsb3RFbGVtZW50LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnlNYXBSZXNvbHZlZChtYXBXaWRnZXRJZDogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xuICAgIGlmICghbWFwV2lkZ2V0SWQgfHwgbWFwV2lkZ2V0SWQgPT09IHRoaXMubGFzdE5vdGlmaWVkTWFwSWQpIHJldHVybjtcbiAgICB0aGlzLmxhc3ROb3RpZmllZE1hcElkID0gbWFwV2lkZ2V0SWQ7XG4gICAgdGhpcy5vcHRpb25zLm9uTWFwUmVzb2x2ZWQ/LihtYXBXaWRnZXRJZCk7XG4gIH1cblxuICBwcml2YXRlIHRyeUF1dG9MaW5rTWFwV2lkZ2V0KG1hcFdpZGdldElkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBsaW5rZWQgPSB0aGlzLmdldExpbmtlZE1hcFdpZGdldElkKCk7XG4gICAgaWYgKCFtYXBXaWRnZXRJZCB8fCAobGlua2VkICYmIGlzS25vd25NYXBXaWRnZXRJZChsaW5rZWQpKSB8fCB0aGlzLmF1dG9MaW5rQXR0ZW1wdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNsb3QgPSB0aGlzLm9wdGlvbnMuZ2V0U2xvdEVsZW1lbnQoKT8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKHNsb3QgJiYgIWlzTWFwT3ZlcmxhcHBpbmdTbG90KG1hcFdpZGdldElkLCBzbG90KSkgcmV0dXJuO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG1vZGUgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuYXBwUnVudGltZUluZm8/LmFwcE1vZGU7XG4gICAgICBpZiAobW9kZSAhPT0gQXBwTW9kZS5EZXNpZ24pIHJldHVybjtcbiAgICAgIC8vIFJ1bnRpbWUgYnVuZGxlcyBtdXN0IG5vdCBkZXBlbmQgb24gdGhlIGJ1aWxkZXItb25seSBwYWNrYWdlLiBBc2sgdGhlXG4gICAgICAvLyBzZXR0aW5nIHBhbmVsIHRvIGZvY3VzIHRoZSBtYXAgc2VsZWN0b3I7IHRoZSB1c2VyIGNhbiBjb25maXJtIGxpbmthZ2VcbiAgICAgIC8vIHRoZXJlIHdpdGhvdXQgbWFraW5nIHB1Ymxpc2hlZCBhcHBzIGxvYWQgYGppbXUtZm9yLWJ1aWxkZXJgLlxuICAgICAgdGhpcy5hdXRvTGlua0F0dGVtcHRlZCA9IHRydWU7XG4gICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50KFwiYWdyaS1tYWluOm1hcC1zZXR0aW5ncy1yZXF1ZXN0XCIsIHtcbiAgICAgICAgICBkZXRhaWw6IHsgd2lkZ2V0SWQ6IHRoaXMub3B0aW9ucy5ob3N0V2lkZ2V0SWQsIG1hcFdpZGdldElkIH0sXG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8qIGJ1aWxkZXItb25seSBoZWxwZXIgKi9cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFwcGx5TWFwU2xvdEJvdW5kcyhsYXlvdXRJdGVtOiBIVE1MRWxlbWVudCwgc2xvdEVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IHNsb3RSZWN0ID0gc2xvdEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHN1cmZhY2UgPSB0aGlzLmZpbmRTaGFyZWRMYXlvdXRTdXJmYWNlKHNsb3RFbCk7XG5cbiAgICBsZXQgdG9wID0gc2xvdFJlY3QudG9wO1xuICAgIGxldCBsZWZ0ID0gc2xvdFJlY3QubGVmdDtcbiAgICBsZXQgcG9zaXRpb25Nb2RlOiBcImZpeGVkXCIgfCBcImFic29sdXRlXCIgPSBcImZpeGVkXCI7XG5cbiAgICBpZiAoc3VyZmFjZSkge1xuICAgICAgY29uc3Qgc3VyZmFjZVJlY3QgPSBzdXJmYWNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdG9wID0gc2xvdFJlY3QudG9wIC0gc3VyZmFjZVJlY3QudG9wICsgc3VyZmFjZS5zY3JvbGxUb3A7XG4gICAgICBsZWZ0ID0gc2xvdFJlY3QubGVmdCAtIHN1cmZhY2VSZWN0LmxlZnQgKyBzdXJmYWNlLnNjcm9sbExlZnQ7XG4gICAgICBwb3NpdGlvbk1vZGUgPSBcImFic29sdXRlXCI7XG5cbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKHN1cmZhY2UpLnBvc2l0aW9uID09PSBcInN0YXRpY1wiKSB7XG4gICAgICAgIHN1cmZhY2Uuc3R5bGUuc2V0UHJvcGVydHkoXCJwb3NpdGlvblwiLCBcInJlbGF0aXZlXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGVudHJpZXM6IEFycmF5PFtzdHJpbmcsIHN0cmluZ10+ID0gW1xuICAgICAgW1wicG9zaXRpb25cIiwgcG9zaXRpb25Nb2RlXSxcbiAgICAgIFtcInRvcFwiLCBgJHt0b3B9cHhgXSxcbiAgICAgIFtcImxlZnRcIiwgYCR7bGVmdH1weGBdLFxuICAgICAgW1wid2lkdGhcIiwgYCR7c2xvdFJlY3Qud2lkdGh9cHhgXSxcbiAgICAgIFtcImhlaWdodFwiLCBgJHtzbG90UmVjdC5oZWlnaHR9cHhgXSxcbiAgICAgIFtcInJpZ2h0XCIsIFwiYXV0b1wiXSxcbiAgICAgIFtcImJvdHRvbVwiLCBcImF1dG9cIl0sXG4gICAgICBbXCJtYXJnaW5cIiwgXCIwXCJdLFxuICAgICAgW1wicGFkZGluZ1wiLCBcIjBcIl0sXG4gICAgICBbXCJ0cmFuc2Zvcm1cIiwgXCJub25lXCJdLFxuICAgICAgW1wiYm9yZGVyLXJhZGl1c1wiLCBNQVBfUEFORUxfQk9SREVSX1JBRElVU10sXG4gICAgICBbXCJvdmVyZmxvd1wiLCBcImhpZGRlblwiXSxcbiAgICAgIFtcInotaW5kZXhcIiwgXCIxMlwiXSxcbiAgICAgIFtcImJveC1zaXppbmdcIiwgXCJib3JkZXItYm94XCJdLFxuICAgICAgW1wicG9pbnRlci1ldmVudHNcIiwgXCJhdXRvXCJdLFxuICAgIF07XG5cbiAgICBlbnRyaWVzLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgbGF5b3V0SXRlbS5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlLCBcImltcG9ydGFudFwiKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHdyYXBwZXIgPSBsYXlvdXRJdGVtLmNsb3Nlc3QoXCIuYnVpbGRlci1sYXlvdXQtaXRlbVwiKSBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgaWYgKHdyYXBwZXIgJiYgd3JhcHBlciAhPT0gbGF5b3V0SXRlbSkge1xuICAgICAgW1xuICAgICAgICBbXCJwb3NpdGlvblwiLCBcInN0YXRpY1wiXSxcbiAgICAgICAgW1wid2lkdGhcIiwgXCIwXCJdLFxuICAgICAgICBbXCJoZWlnaHRcIiwgXCIwXCJdLFxuICAgICAgICBbXCJtYXJnaW5cIiwgXCIwXCJdLFxuICAgICAgICBbXCJwYWRkaW5nXCIsIFwiMFwiXSxcbiAgICAgICAgW1wib3ZlcmZsb3dcIiwgXCJ2aXNpYmxlXCJdLFxuICAgICAgICBbXCJwb2ludGVyLWV2ZW50c1wiLCBcIm5vbmVcIl0sXG4gICAgICBdLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICB3cmFwcGVyLnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUsIFwiaW1wb3J0YW50XCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaWxsTWFwUmVuZGVyZXIocmVuZGVyZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgcmFkaXVzID0gTUFQX1BBTkVMX0JPUkRFUl9SQURJVVM7XG4gICAgW1xuICAgICAgW1wicG9zaXRpb25cIiwgXCJyZWxhdGl2ZVwiXSxcbiAgICAgIFtcIndpZHRoXCIsIFwiMTAwJVwiXSxcbiAgICAgIFtcImhlaWdodFwiLCBcIjEwMCVcIl0sXG4gICAgICBbXCJ0b3BcIiwgXCIwXCJdLFxuICAgICAgW1wibGVmdFwiLCBcIjBcIl0sXG4gICAgICBbXCJtYXJnaW5cIiwgXCIwXCJdLFxuICAgICAgW1wicGFkZGluZ1wiLCBcIjBcIl0sXG4gICAgICBbXCJ0cmFuc2Zvcm1cIiwgXCJub25lXCJdLFxuICAgICAgW1wiYm9yZGVyLXJhZGl1c1wiLCByYWRpdXNdLFxuICAgICAgW1wib3ZlcmZsb3dcIiwgXCJoaWRkZW5cIl0sXG4gICAgICBbXCJib3gtc2l6aW5nXCIsIFwiYm9yZGVyLWJveFwiXSxcbiAgICBdLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgcmVuZGVyZXIuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSwgXCJpbXBvcnRhbnRcIik7XG4gICAgfSk7XG5cbiAgICByZW5kZXJlclxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFxuICAgICAgICBcIi5lc3JpLXZpZXcsIC5lc3JpLXZpZXctcm9vdCwgLmVzcmktdmlldy1zdXJmYWNlLCAud2lkZ2V0LW1hcFwiLFxuICAgICAgKVxuICAgICAgLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShcImJvcmRlci1yYWRpdXNcIiwgcmFkaXVzLCBcImltcG9ydGFudFwiKTtcbiAgICAgICAgbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShcIm92ZXJmbG93XCIsIFwiaGlkZGVuXCIsIFwiaW1wb3J0YW50XCIpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyTWFuYWdlZEVsZW1lbnQodGFyZ2V0OiBIVE1MRWxlbWVudCB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAoIXRhcmdldCkgcmV0dXJuO1xuICAgIFtcbiAgICAgIFwicG9zaXRpb25cIixcbiAgICAgIFwidG9wXCIsXG4gICAgICBcImxlZnRcIixcbiAgICAgIFwicmlnaHRcIixcbiAgICAgIFwiYm90dG9tXCIsXG4gICAgICBcIndpZHRoXCIsXG4gICAgICBcImhlaWdodFwiLFxuICAgICAgXCJ6LWluZGV4XCIsXG4gICAgICBcIm1hcmdpblwiLFxuICAgICAgXCJwYWRkaW5nXCIsXG4gICAgICBcInRyYW5zZm9ybVwiLFxuICAgICAgXCJib3JkZXItcmFkaXVzXCIsXG4gICAgICBcIm92ZXJmbG93XCIsXG4gICAgICBcImJveC1zaXppbmdcIixcbiAgICAgIFwicG9pbnRlci1ldmVudHNcIixcbiAgICBdLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KGtleSkpO1xuICAgIE9iamVjdC52YWx1ZXMoTUFOQUdFRF9NQVBfQ0xBU1MpLmZvckVhY2goKGNscykgPT4gdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoY2xzKSk7XG4gICAgT2JqZWN0LnZhbHVlcyhNQU5BR0VEX1JFTkRFUkVSX0NMQVNTKS5mb3JFYWNoKChjbHMpID0+XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShjbHMpLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyKCk6IHZvaWQge1xuICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLm1hcExheW91dEl0ZW0/LmNsb3Nlc3QoXG4gICAgICBcIi5idWlsZGVyLWxheW91dC1pdGVtXCIsXG4gICAgKSBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgaWYgKHdyYXBwZXIgJiYgd3JhcHBlciAhPT0gdGhpcy5tYXBMYXlvdXRJdGVtKSB7XG4gICAgICBbXCJwb3NpdGlvblwiLCBcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwibWFyZ2luXCIsIFwicGFkZGluZ1wiLCBcIm92ZXJmbG93XCIsIFwicG9pbnRlci1ldmVudHNcIl0uZm9yRWFjaChcbiAgICAgICAgKGtleSkgPT4gd3JhcHBlci5zdHlsZS5yZW1vdmVQcm9wZXJ0eShrZXkpLFxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5jbGVhck1hbmFnZWRFbGVtZW50KHRoaXMubWFwTGF5b3V0SXRlbSk7XG4gICAgdGhpcy5jbGVhck1hbmFnZWRFbGVtZW50KHRoaXMubWFwV2lkZ2V0UmVuZGVyZXIpO1xuICAgIHRoaXMubWFwTGF5b3V0SXRlbSA9IG51bGw7XG4gICAgdGhpcy5tYXBXaWRnZXRSZW5kZXJlciA9IG51bGw7XG4gIH1cblxuICBwcml2YXRlIHN5bmMoKTogdm9pZCB7XG4gICAgY29uc3Qgc2xvdCA9IHRoaXMub3B0aW9ucy5nZXRTbG90RWxlbWVudCgpO1xuICAgIGlmICghc2xvdCkge1xuICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcFdpZGdldElkID0gdGhpcy5nZXRSZXNvbHZlZE1hcFdpZGdldElkKCk7XG4gICAgaWYgKCFtYXBXaWRnZXRJZCkge1xuICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubm90aWZ5TWFwUmVzb2x2ZWQobWFwV2lkZ2V0SWQpO1xuXG4gICAgaWYgKCF0aGlzLmdldExpbmtlZE1hcFdpZGdldElkKCkpIHtcbiAgICAgIHRoaXMudHJ5QXV0b0xpbmtNYXBXaWRnZXQobWFwV2lkZ2V0SWQpO1xuICAgIH1cblxuICAgIGNvbnN0IGxheW91dEl0ZW0gPSBmaW5kV2lkZ2V0TGF5b3V0SXRlbShtYXBXaWRnZXRJZCk7XG4gICAgY29uc3QgcmVuZGVyZXIgPSBmaW5kV2lkZ2V0UmVuZGVyZXIobWFwV2lkZ2V0SWQpO1xuICAgIGlmICghbGF5b3V0SXRlbSB8fCAhcmVuZGVyZXIpIHtcbiAgICAgIC8vIFB1Ymxpc2hlZCBwb3J0YWw6IG1hcCB3aWRnZXQgRE9NIG9mdGVuIG1vdW50cyBhZnRlciB0aGUgZGFzaGJvYXJkIOKAlCBrZWVwXG4gICAgICAvLyB0aGUgbGFzdCBwb3NpdGlvbmVkIG1hcCBpbnN0ZWFkIG9mIGNsZWFyaW5nIHN0eWxlcyAodGhhdCBzdHJhbmRzIHRoZSBtYXApLlxuICAgICAgaWYgKHRoaXMubWFwTGF5b3V0SXRlbSAmJiB0aGlzLm1hcFdpZGdldFJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMuYXBwbHlNYXBTbG90Qm91bmRzKHRoaXMubWFwTGF5b3V0SXRlbSwgc2xvdCk7XG4gICAgICAgIHRoaXMuZmlsbE1hcFJlbmRlcmVyKHRoaXMubWFwV2lkZ2V0UmVuZGVyZXIpO1xuICAgICAgICB0aGlzLm9wdGlvbnMucmVzaXplTWFwVmlldz8uKCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5tYXBMYXlvdXRJdGVtID0gbGF5b3V0SXRlbTtcbiAgICB0aGlzLm1hcFdpZGdldFJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgbGF5b3V0SXRlbS5jbGFzc0xpc3QuYWRkKE1BTkFHRURfTUFQX0NMQVNTW3RoaXMub3B0aW9ucy5zY29wZV0pO1xuICAgIHJlbmRlcmVyLmNsYXNzTGlzdC5hZGQoTUFOQUdFRF9SRU5ERVJFUl9DTEFTU1t0aGlzLm9wdGlvbnMuc2NvcGVdKTtcbiAgICB0aGlzLmFwcGx5TWFwU2xvdEJvdW5kcyhsYXlvdXRJdGVtLCBzbG90KTtcbiAgICB0aGlzLmZpbGxNYXBSZW5kZXJlcihyZW5kZXJlcik7XG4gICAgdGhpcy5vcHRpb25zLnJlc2l6ZU1hcFZpZXc/LigpO1xuICB9XG59XG4iLCIvKiogU2hhcmVkIHZlZ2V0YXRpb24gaW5kZXggbGVnZW5kIGNvbmZpZyBmb3IgR3JhZmYgZ3JhcGgvdGFibGUgdmlld3MuICovXG5leHBvcnQgdHlwZSBHcmFmZkluZGV4S2V5ID0gXCJuZHZpXCIgfCBcInNhdmlcIiB8IFwicnZpXCIgfCBcImNpXCIgfCBcImV2aVwiIHwgXCJuZHdpXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JhZmZJbmRleEJ1dHRvbiB7XG4gIGtleTogR3JhZmZJbmRleEtleTtcbiAgbGFiZWw6IHN0cmluZztcbiAgY29sb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEdSQUZGX0lOREVYX0JVVFRPTlM6IEdyYWZmSW5kZXhCdXR0b25bXSA9IFtcbiAgeyBrZXk6IFwibmR2aVwiLCBsYWJlbDogXCJORFZJXCIsIGNvbG9yOiBcIiMwMGQwODRcIiB9LFxuICB7IGtleTogXCJzYXZpXCIsIGxhYmVsOiBcIlNBVklcIiwgY29sb3I6IFwiIzdhYTVmZlwiIH0sXG4gIHsga2V5OiBcInJ2aVwiLCBsYWJlbDogXCJSVklcIiwgY29sb3I6IFwiI2ZmYjM0N1wiIH0sXG4gIHsga2V5OiBcImNpXCIsIGxhYmVsOiBcIkNJXCIsIGNvbG9yOiBcIiNjNzhiZmZcIiB9LFxuICB7IGtleTogXCJldmlcIiwgbGFiZWw6IFwiRVZJXCIsIGNvbG9yOiBcIiNmZjRkOGRcIiB9LFxuICB7IGtleTogXCJuZHdpXCIsIGxhYmVsOiBcIk5EV0lcIiwgY29sb3I6IFwiIzJlYzRmMVwiIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgR1JBRkZfSU5ERVhfT1JERVI6IEdyYWZmSW5kZXhLZXlbXSA9IEdSQUZGX0lOREVYX0JVVFRPTlMubWFwKFxuICAoaXRlbSkgPT4gaXRlbS5rZXksXG4pO1xuXG4vKiogUmVwdWJsaWMgcmVnaW9uYWwgdGltZXNlcmllcyBBVkcgZmllbGQgYWxsb3ctbGlzdC4gKi9cbmV4cG9ydCBjb25zdCBSRVBVQkxJQ19USU1FU0VSSUVTX0lOREVYX0ZJRUxEUyA9IFtcbiAgXCJuZHZpXCIsXG4gIFwic2F2aVwiLFxuICBcImV2aVwiLFxuICBcInJ2aVwiLFxuICBcImNpXCIsXG4gIFwibmR3aVwiLFxuXSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgUmVwdWJsaWNUaW1lc2VyaWVzSW5kZXhGaWVsZCA9XG4gICh0eXBlb2YgUkVQVUJMSUNfVElNRVNFUklFU19JTkRFWF9GSUVMRFMpW251bWJlcl07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1JlcHVibGljVGltZXNlcmllc0luZGV4RmllbGQoXG4gIHZhbHVlOiBzdHJpbmcsXG4pOiB2YWx1ZSBpcyBSZXB1YmxpY1RpbWVzZXJpZXNJbmRleEZpZWxkIHtcbiAgcmV0dXJuIChSRVBVQkxJQ19USU1FU0VSSUVTX0lOREVYX0ZJRUxEUyBhcyByZWFkb25seSBzdHJpbmdbXSkuaW5jbHVkZXMoXG4gICAgdmFsdWUsXG4gICk7XG59XG4iLCJleHBvcnQgdHlwZSBMYW5nQ29kZSA9IFwidXpfbGF0XCIgfCBcInV6X2N5clwiIHwgXCJydVwiIHwgXCJlblwiO1xuXG50eXBlIERpY3QgPSBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xudHlwZSBCdW5kbGUgPSBSZWNvcmQ8TGFuZ0NvZGUsIERpY3Q+O1xuXG5jb25zdCBNRVNTQUdFUzogQnVuZGxlID0ge1xuICB1el9sYXQ6IHtcbiAgICBcInRpdGxlLmRlZmF1bHRcIjogXCJQb2xpZ29uIG1hJ2x1bW90aVwiLFxuICAgIFwidGl0bGUuYXR0cmlidXRlc1wiOiBcIkF0cmlidXQgbWEnbHVtb3RsYXJpXCIsXG4gICAgXCJ0aXRsZS5yZWNvcmRcIjogXCJNYSdsdW1vdCAje3tpZH19XCIsXG4gICAgXCJhY3Rpb24ucGluXCI6IFwiUG9wdXBuaSB5dXFvcmktbyduZ2dhIHFhZGFzaFwiLFxuICAgIFwiYWN0aW9uLnVucGluXCI6IFwiUG9wdXBuaSB5ZWNoaXNoXCIsXG4gICAgXCJhY3Rpb24ubWluaW1pemVcIjogXCJQb3B1cG5pIHlpZydpc2hcIixcbiAgICBcImFjdGlvbi5leHBhbmRcIjogXCJQb3B1cG5pIG9jaGlzaFwiLFxuICAgIFwic3RhdHVzLndhcm5pbmdcIjogXCJPZ29obGFudGlyaXNoXCIsXG4gICAgXCJzdGF0dXMubG9hZGluZ0ZlYXR1cmVcIjogXCJPYnlla3QgbWEnbHVtb3RsYXJpIHl1a2xhbm1vcWRhLi4uXCIsXG4gICAgXCJzdGF0dXMubm9Db25maWd1cmVkRGF0YVwiOiBcIlNvemxhbmdhbiBtYXlkb25sYXIgdWNodW4gbWEnbHVtb3QgdG9waWxtYWRpXCIsXG4gICAgXCJzdGF0dXMubm9GaWVsZHNcIjpcbiAgICAgIFwiTWF5ZG9ubGFyIHNvemxhbm1hZ2FuLiBWaWRqZXQgc296bGFtYWxhcmlkYSBtYXlkb25sYXJuaSB0YW5sYW5nLlwiLFxuICAgIFwiYXR0YWNobWVudHMudGl0bGVcIjogXCJSYXNtbGFyIHZhIGZheWxsYXJcIixcbiAgICBcInN0YXR1cy5sb2FkaW5nQXR0YWNobWVudHNcIjogXCJRbydzaGltY2hhbGFyIHl1a2xhbm1vcWRhLi4uXCIsXG4gICAgXCJzdGF0dXMubm9BdHRhY2htZW50c1wiOiBcIlFvJ3NoaW1jaGFsYXIgeW8ncVwiLFxuICAgIFwiYXR0YWNobWVudC5pbWFnZUZhbGxiYWNrXCI6IFwiUmFzbVwiLFxuICAgIFwiYXR0YWNobWVudC5maWxlRmFsbGJhY2tcIjogXCJmYXlsLXt7aWR9fVwiLFxuICAgIFwiYXR0YWNobWVudC5kb3dubG9hZFwiOiBcIll1a2xhYiBvbGlzaFwiLFxuICAgIFwic3RhdHVzLmNsaWNrUG9seWdvblwiOlxuICAgICAgXCJUYWZzaWxvdGxhcm5pIGtvJ3Jpc2ggdWNodW4geGFyaXRhZGEgcG9saWdvbm5pIGJvc2luZ1wiLFxuICAgIFwic3RhdHVzLnJlYWR5XCI6IFwiUG9seWdvbiBJbnNwZWN0b3IgdGF5eW9yXCIsXG4gICAgXCJzdGF0dXMubG9hZGluZ1wiOiBcIll1a2xhbm1vcWRhLi4uXCIsXG4gICAgXCJlcnJvci5ub01hcFZpZXdcIjogXCJYYXJpdGEga28ncmluaXNoaSB0b3BpbG1hZGlcIixcbiAgICBcImVycm9yLm5vTGF5ZXJzU2VsZWN0ZWRcIjpcbiAgICAgIFwiUWF0bGFtIHRhbmxhbm1hZ2FuLiBTb3psYW1hbGFyZGEga2FtaWRhIGJpdHRhIEZlYXR1cmUgTGF5ZXIgdGFubGFuZy5cIixcbiAgICBcImVycm9yLnNlbGVjdGVkTGF5ZXJzTWlzc2luZ1wiOlxuICAgICAgXCJUYW5sYW5nYW4gcWF0bGFtbGFyIHhhcml0YWRhIHRvcGlsbWFkaS4gVGFubGFuZ2FuIE1hcCB2aWRqZXQgaWNoaWRhIHNodSBxYXRsYW1sYXIgYm9ybGlnaW5pIHRla3NoaXJpbmcuXCIsXG4gICAgXCJlcnJvci5vYmplY3RJZEZpZWxkTWlzc2luZ1wiOlxuICAgICAgXCJCb3NpbGdhbiBxYXRsYW1kYSBPYmplY3RJZCBtYXlkb25pIHRvcGlsbWFkaS5cIixcbiAgICBcImVycm9yLm9iamVjdElkTWlzc2luZ1wiOiBcIk9iamVjdElkIHRvcGlsbWFkaS4gS3V0aWxnYW4gbWF5ZG9uOiB7e2ZpZWxkfX1cIixcbiAgICBcImVycm9yLmZlYXR1cmVCeU9iamVjdElkTWlzc2luZ1wiOiBcIk9iamVjdElkIGJvJ3lpY2hhIG9ieWVrdCB0b3BpbG1hZGkuXCIsXG4gICAgXCJlcnJvci5jb25maWd1cmVkRmllbGRNaXNzaW5nXCI6XG4gICAgICBcIkJhJ3ppIHNvemxhbmdhbiBtYXlkb25sYXIgdG9waWxtYWRpOiB7e2ZpZWxkc319XCIsXG4gICAgXCJlcnJvci5ub0RhdGFGb3JDb25maWd1cmVkRmllbGRzXCI6XG4gICAgICBcIlNvemxhbmdhbiBtYXlkb25sYXIgdWNodW4gbWEnbHVtb3QgbWF2anVkIGVtYXNcIixcbiAgICBcImVycm9yLnVuZXhwZWN0ZWRcIjogXCJLdXRpbG1hZ2FuIHhhdG86IHt7bWVzc2FnZX19XCIsXG4gICAgXCJpbmRpY2VzLnRpdGxlXCI6IFwiVmVnZXRhdHNpeWEgaW5kZWtzbGFyaVwiLFxuICAgIFwiaW5kaWNlcy5sb2FkaW5nXCI6IFwiSW5kZWtzbGFyIHl1a2xhbm1vcWRhLi4uXCIsXG4gICAgXCJpbmRpY2VzLm5vbmVcIjogXCJCdSBwb2xpZ29uIHVjaHVuIGluZGVrcyBtYSdsdW1vdGkgeW8ncVwiLFxuICB9LFxuICB1el9jeXI6IHtcbiAgICBcInRpdGxlLmF0dHJpYnV0ZXNcIjogXCLQkNGC0YDQuNCx0YPRgiDQvNCw0YrQu9GD0LzQvtGC0LvQsNGA0LhcIixcbiAgICBcInRpdGxlLmRlZmF1bHRcIjogXCLQn9C+0LvQuNCz0L7QvSDQvNCw0YrQu9GD0LzQvtGC0LhcIixcbiAgICBcInRpdGxlLnJlY29yZFwiOiBcItCc0LDRitC70YPQvNC+0YIgI3t7aWR9fVwiLFxuICAgIFwiYWN0aW9uLnBpblwiOiBcItCf0L7Qv9Cw0L/QvdC4INGO0pvQvtGA0Lgt0Z7QvdCz0LPQsCDSm9Cw0LTQsNGIXCIsXG4gICAgXCJhY3Rpb24udW5waW5cIjogXCLQn9C+0L/QsNC/0L3QuCDQtdGH0LjRiFwiLFxuICAgIFwiYWN0aW9uLm1pbmltaXplXCI6IFwi0J/QvtC/0LDQv9C90Lgg0LnQuNKT0LjRiFwiLFxuICAgIFwiYWN0aW9uLmV4cGFuZFwiOiBcItCf0L7Qv9Cw0L/QvdC4INC+0YfQuNGIXCIsXG4gICAgXCJzdGF0dXMud2FybmluZ1wiOiBcItCe0LPQvtKz0LvQsNC90YLQuNGA0LjRiFwiLFxuICAgIFwic3RhdHVzLmxvYWRpbmdGZWF0dXJlXCI6IFwi0J7QsdGK0LXQutGCINC80LDRitC70YPQvNC+0YLQu9Cw0YDQuCDRjtC60LvQsNC90LzQvtKb0LTQsC4uLlwiLFxuICAgIFwic3RhdHVzLm5vQ29uZmlndXJlZERhdGFcIjogXCLQodC+0LfQu9Cw0L3Qs9Cw0L0g0LzQsNC50LTQvtC90LvQsNGAINGD0YfRg9C9INC80LDRitC70YPQvNC+0YIg0YLQvtC/0LjQu9C80LDQtNC4XCIsXG4gICAgXCJzdGF0dXMubm9GaWVsZHNcIjpcbiAgICAgIFwi0JzQsNC50LTQvtC90LvQsNGAINGB0L7Qt9C70LDQvdC80LDQs9Cw0L0uINCS0LjQtNC20LXRgiDRgdC+0LfQu9Cw0LzQsNC70LDRgNC40LTQsCDQvNCw0LnQtNC+0L3Qu9Cw0YDQvdC4INGC0LDQvdC70LDQvdCzLlwiLFxuICAgIFwiYXR0YWNobWVudHMudGl0bGVcIjogXCLQoNCw0YHQvNC70LDRgCDQstCwINGE0LDQudC70LvQsNGAXCIsXG4gICAgXCJzdGF0dXMubG9hZGluZ0F0dGFjaG1lbnRzXCI6IFwi0prRntGI0LjQvNGH0LDQu9Cw0YAg0Y7QutC70LDQvdC80L7Sm9C00LAuLi5cIixcbiAgICBcInN0YXR1cy5ub0F0dGFjaG1lbnRzXCI6IFwi0prRntGI0LjQvNGH0LDQu9Cw0YAg0LnRntKbXCIsXG4gICAgXCJhdHRhY2htZW50LmltYWdlRmFsbGJhY2tcIjogXCLQoNCw0YHQvFwiLFxuICAgIFwiYXR0YWNobWVudC5maWxlRmFsbGJhY2tcIjogXCLRhNCw0LnQuy17e2lkfX1cIixcbiAgICBcImF0dGFjaG1lbnQuZG93bmxvYWRcIjogXCLQrtC60LvQsNCxINC+0LvQuNGIXCIsXG4gICAgXCJzdGF0dXMuY2xpY2tQb2x5Z29uXCI6IFwi0KLQsNGE0YHQuNC70L7RgtC70LDRgNC90Lgg0LrRntGA0LjRiCDRg9GH0YPQvSDRhdCw0YDQuNGC0LDQtNCwINC/0L7Qu9C40LPQvtC90L3QuCDQsdC+0YHQuNC90LNcIixcbiAgICBcInN0YXR1cy5yZWFkeVwiOiBcIlBvbHlnb24gSW5zcGVjdG9yINGC0LDQudGR0YBcIixcbiAgICBcInN0YXR1cy5sb2FkaW5nXCI6IFwi0K7QutC70LDQvdC80L7Sm9C00LAuLi5cIixcbiAgICBcImVycm9yLm5vTWFwVmlld1wiOiBcItCl0LDRgNC40YLQsCDQutGe0YDQuNC90LjRiNC4INGC0L7Qv9C40LvQvNCw0LTQuFwiLFxuICAgIFwiZXJyb3Iubm9MYXllcnNTZWxlY3RlZFwiOlxuICAgICAgXCLSmtCw0YLQu9Cw0Lwg0YLQsNC90LvQsNC90LzQsNCz0LDQvS4g0KHQvtC30LvQsNC80LDQu9Cw0YDQtNCwINC60LDQvNC40LTQsCDQsdC40YLRgtCwIEZlYXR1cmUgTGF5ZXIg0YLQsNC90LvQsNC90LMuXCIsXG4gICAgXCJlcnJvci5zZWxlY3RlZExheWVyc01pc3NpbmdcIjpcbiAgICAgIFwi0KLQsNC90LvQsNC90LPQsNC9INKb0LDRgtC70LDQvNC70LDRgCDRhdCw0YDQuNGC0LDQtNCwINGC0L7Qv9C40LvQvNCw0LTQuC4g0KLQsNC90LvQsNC90LPQsNC9IE1hcCDQstC40LTQttC10YIg0LjRh9C40LTQsCDRiNGDINKb0LDRgtC70LDQvNC70LDRgCDQsdC+0YDQu9C40LPQuNC90Lgg0YLQtdC60YjQuNGA0LjQvdCzLlwiLFxuICAgIFwiZXJyb3Iub2JqZWN0SWRGaWVsZE1pc3NpbmdcIjpcbiAgICAgIFwi0JHQvtGB0LjQu9Cz0LDQvSDSm9Cw0YLQu9Cw0LzQtNCwIE9iamVjdElkINC80LDQudC00L7QvdC4INGC0L7Qv9C40LvQvNCw0LTQuC5cIixcbiAgICBcImVycm9yLm9iamVjdElkTWlzc2luZ1wiOiBcIk9iamVjdElkINGC0L7Qv9C40LvQvNCw0LTQuC4g0JrRg9GC0LjQu9Cz0LDQvSDQvNCw0LnQtNC+0L06IHt7ZmllbGR9fVwiLFxuICAgIFwiZXJyb3IuZmVhdHVyZUJ5T2JqZWN0SWRNaXNzaW5nXCI6IFwiT2JqZWN0SWQg0LHRntC50LjRh9CwINC+0LHRitC10LrRgiDRgtC+0L/QuNC70LzQsNC00LguXCIsXG4gICAgXCJlcnJvci5jb25maWd1cmVkRmllbGRNaXNzaW5nXCI6XG4gICAgICBcItCR0LDRitC30Lgg0YHQvtC30LvQsNC90LPQsNC9INC80LDQudC00L7QvdC70LDRgCDRgtC+0L/QuNC70LzQsNC00Lg6IHt7ZmllbGRzfX1cIixcbiAgICBcImVycm9yLm5vRGF0YUZvckNvbmZpZ3VyZWRGaWVsZHNcIjpcbiAgICAgIFwi0KHQvtC30LvQsNC90LPQsNC9INC80LDQudC00L7QvdC70LDRgCDRg9GH0YPQvSDQvNCw0YrQu9GD0LzQvtGCINC80LDQstC20YPQtCDRjdC80LDRgVwiLFxuICAgIFwiZXJyb3IudW5leHBlY3RlZFwiOiBcItCa0YPRgtC40LvQvNCw0LPQsNC9INGF0LDRgtC+OiB7e21lc3NhZ2V9fVwiLFxuICAgIFwiaW5kaWNlcy50aXRsZVwiOiBcItCS0LXQs9C10YLQsNGG0LjRjyDQuNC90LTQtdC60YHQu9Cw0YDQuFwiLFxuICAgIFwiaW5kaWNlcy5sb2FkaW5nXCI6IFwi0JjQvdC00LXQutGB0LvQsNGAINGO0LrQu9Cw0L3QvNC+0pvQtNCwLi4uXCIsXG4gICAgXCJpbmRpY2VzLm5vbmVcIjogXCLQkdGDINC/0L7Qu9C40LPQvtC9INGD0YfRg9C9INC40L3QtNC10LrRgSDQvNCw0YrQu9GD0LzQvtGC0Lgg0LnRntKbXCIsXG4gIH0sXG4gIHJ1OiB7XG4gICAgXCJ0aXRsZS5hdHRyaWJ1dGVzXCI6IFwi0JDRgtGA0LjQsdGD0YLQuNCy0L3Ri9C1INC00LDQvdC90YvQtVwiLFxuICAgIFwidGl0bGUuZGVmYXVsdFwiOiBcItCY0L3RhNC+0YDQvNCw0YbQuNGPINC+INC/0L7Qu9C40LPQvtC90LVcIixcbiAgICBcInRpdGxlLnJlY29yZFwiOiBcItCX0LDQv9C40YHRjCAje3tpZH19XCIsXG4gICAgXCJhY3Rpb24ucGluXCI6IFwi0JfQsNC60YDQtdC/0LjRgtGMINC+0LrQvdC+INGB0L/RgNCw0LLQsCDRgdCy0LXRgNGF0YNcIixcbiAgICBcImFjdGlvbi51bnBpblwiOiBcItCe0YLQutGA0LXQv9C40YLRjCDQvtC60L3QvlwiLFxuICAgIFwiYWN0aW9uLm1pbmltaXplXCI6IFwi0KHQstC10YDQvdGD0YLRjCDQvtC60L3QvlwiLFxuICAgIFwiYWN0aW9uLmV4cGFuZFwiOiBcItCg0LDQt9Cy0LXRgNC90YPRgtGMINC+0LrQvdC+XCIsXG4gICAgXCJzdGF0dXMud2FybmluZ1wiOiBcItCf0YDQtdC00YPQv9GA0LXQttC00LXQvdC40LVcIixcbiAgICBcInN0YXR1cy5sb2FkaW5nRmVhdHVyZVwiOiBcItCX0LDQs9GA0YPQt9C60LAg0LTQsNC90L3Ri9GFINC+0LHRitC10LrRgtCwLi4uXCIsXG4gICAgXCJzdGF0dXMubm9Db25maWd1cmVkRGF0YVwiOiBcItCd0LXRgiDQtNCw0L3QvdGL0YUg0LTQu9GPINC90LDRgdGC0YDQvtC10L3QvdGL0YUg0L/QvtC70LXQuVwiLFxuICAgIFwic3RhdHVzLm5vRmllbGRzXCI6IFwi0J/QvtC70Y8g0L3QtSDQvdCw0YHRgtGA0L7QtdC90YsuINCS0YvQsdC10YDQuNGC0LUg0L/QvtC70Y8g0LIg0L3QsNGB0YLRgNC+0LnQutCw0YUg0LLQuNC00LbQtdGC0LAuXCIsXG4gICAgXCJhdHRhY2htZW50cy50aXRsZVwiOiBcItCY0LfQvtCx0YDQsNC20LXQvdC40Y8g0Lgg0YTQsNC50LvRi1wiLFxuICAgIFwic3RhdHVzLmxvYWRpbmdBdHRhY2htZW50c1wiOiBcItCX0LDQs9GA0YPQt9C60LAg0LLQu9C+0LbQtdC90LjQuS4uLlwiLFxuICAgIFwic3RhdHVzLm5vQXR0YWNobWVudHNcIjogXCLQndC10YIg0LLQu9C+0LbQtdC90LjQuVwiLFxuICAgIFwiYXR0YWNobWVudC5pbWFnZUZhbGxiYWNrXCI6IFwi0JjQt9C+0LHRgNCw0LbQtdC90LjQtVwiLFxuICAgIFwiYXR0YWNobWVudC5maWxlRmFsbGJhY2tcIjogXCLRhNCw0LnQuy17e2lkfX1cIixcbiAgICBcImF0dGFjaG1lbnQuZG93bmxvYWRcIjogXCLQodC60LDRh9Cw0YLRjFwiLFxuICAgIFwic3RhdHVzLmNsaWNrUG9seWdvblwiOiBcItCd0LDQttC80LjRgtC1INC90LAg0L/QvtC70LjQs9C+0L0g0L3QsCDQutCw0YDRgtC1LCDRh9GC0L7QsdGLINGD0LLQuNC00LXRgtGMINC00LXRgtCw0LvQuFwiLFxuICAgIFwic3RhdHVzLnJlYWR5XCI6IFwiUG9seWdvbiBJbnNwZWN0b3Ig0LPQvtGC0L7QslwiLFxuICAgIFwic3RhdHVzLmxvYWRpbmdcIjogXCLQl9Cw0LPRgNGD0LfQutCwLi4uXCIsXG4gICAgXCJlcnJvci5ub01hcFZpZXdcIjogXCLQktC40LQg0LrQsNGA0YLRiyDQvdC1INC90LDQudC00LXQvVwiLFxuICAgIFwiZXJyb3Iubm9MYXllcnNTZWxlY3RlZFwiOlxuICAgICAgXCLQodC70L7QuCDQvdC1INCy0YvQsdGA0LDQvdGLLiDQkiDQvdCw0YHRgtGA0L7QudC60LDRhSDQstGL0LHQtdGA0LjRgtC1INC80LjQvdC40LzRg9C8INC+0LTQuNC9IEZlYXR1cmUgTGF5ZXIuXCIsXG4gICAgXCJlcnJvci5zZWxlY3RlZExheWVyc01pc3NpbmdcIjpcbiAgICAgIFwi0JLRi9Cx0YDQsNC90L3Ri9C1INGB0LvQvtC4INC90LUg0L3QsNC50LTQtdC90Ysg0L3QsCDQutCw0YDRgtC1LiDQn9GA0L7QstC10YDRjNGC0LUsINGH0YLQviDQvtC90Lgg0LXRgdGC0Ywg0LIg0LLRi9Cx0YDQsNC90L3QvtC8IE1hcCDQstC40LTQttC10YLQtS5cIixcbiAgICBcImVycm9yLm9iamVjdElkRmllbGRNaXNzaW5nXCI6IFwi0JIg0LLRi9Cx0YDQsNC90L3QvtC8INGB0LvQvtC1INC90LUg0L3QsNC50LTQtdC90L4g0L/QvtC70LUgT2JqZWN0SWQuXCIsXG4gICAgXCJlcnJvci5vYmplY3RJZE1pc3NpbmdcIjogXCJPYmplY3RJZCDQvdC1INC90LDQudC00LXQvS4g0J7QttC40LTQsNC10LzQvtC1INC/0L7Qu9C1OiB7e2ZpZWxkfX1cIixcbiAgICBcImVycm9yLmZlYXR1cmVCeU9iamVjdElkTWlzc2luZ1wiOiBcItCe0LHRitC10LrRgiDQv9C+IE9iamVjdElkINC90LUg0L3QsNC50LTQtdC9LlwiLFxuICAgIFwiZXJyb3IuY29uZmlndXJlZEZpZWxkTWlzc2luZ1wiOlxuICAgICAgXCLQndC10LrQvtGC0L7RgNGL0LUg0L3QsNGB0YLRgNC+0LXQvdC90YvQtSDQv9C+0LvRjyDQvdC1INC90LDQudC00LXQvdGLOiB7e2ZpZWxkc319XCIsXG4gICAgXCJlcnJvci5ub0RhdGFGb3JDb25maWd1cmVkRmllbGRzXCI6IFwi0J3QtdGCINC00LDQvdC90YvRhSDQtNC70Y8g0L3QsNGB0YLRgNC+0LXQvdC90YvRhSDQv9C+0LvQtdC5XCIsXG4gICAgXCJlcnJvci51bmV4cGVjdGVkXCI6IFwi0J3QtdC/0YDQtdC00LLQuNC00LXQvdC90LDRjyDQvtGI0LjQsdC60LA6IHt7bWVzc2FnZX19XCIsXG4gICAgXCJpbmRpY2VzLnRpdGxlXCI6IFwi0JjQvdC00LXQutGB0Ysg0LLQtdCz0LXRgtCw0YbQuNC4XCIsXG4gICAgXCJpbmRpY2VzLmxvYWRpbmdcIjogXCLQl9Cw0LPRgNGD0LfQutCwINC40L3QtNC10LrRgdC+0LIuLi5cIixcbiAgICBcImluZGljZXMubm9uZVwiOiBcItCd0LXRgiDQtNCw0L3QvdGL0YUg0L/QviDQuNC90LTQtdC60YHQsNC8INC00LvRjyDRjdGC0L7Qs9C+INC/0L7Qu9C40LPQvtC90LBcIixcbiAgfSxcbiAgZW46IHtcbiAgICBcInRpdGxlLmF0dHJpYnV0ZXNcIjogXCJBdHRyaWJ1dGUgZGF0YVwiLFxuICAgIFwidGl0bGUuZGVmYXVsdFwiOiBcIlBvbHlnb24gaW5mb1wiLFxuICAgIFwidGl0bGUucmVjb3JkXCI6IFwiUmVjb3JkICN7e2lkfX1cIixcbiAgICBcImFjdGlvbi5waW5cIjogXCJQaW4gcG9wdXAgdG8gdG9wLXJpZ2h0XCIsXG4gICAgXCJhY3Rpb24udW5waW5cIjogXCJVbnBpbiBwb3B1cFwiLFxuICAgIFwiYWN0aW9uLm1pbmltaXplXCI6IFwiTWluaW1pemUgcG9wdXBcIixcbiAgICBcImFjdGlvbi5leHBhbmRcIjogXCJFeHBhbmQgcG9wdXBcIixcbiAgICBcInN0YXR1cy53YXJuaW5nXCI6IFwiV2FybmluZ1wiLFxuICAgIFwic3RhdHVzLmxvYWRpbmdGZWF0dXJlXCI6IFwiTG9hZGluZyBmZWF0dXJlIGRhdGEuLi5cIixcbiAgICBcInN0YXR1cy5ub0NvbmZpZ3VyZWREYXRhXCI6IFwiTm8gZGF0YSBhdmFpbGFibGUgZm9yIGNvbmZpZ3VyZWQgZmllbGRzXCIsXG4gICAgXCJzdGF0dXMubm9GaWVsZHNcIjpcbiAgICAgIFwiTm8gZmllbGRzIGNvbmZpZ3VyZWQuIFBsZWFzZSBjb25maWd1cmUgZmllbGRzIGluIHdpZGdldCBzZXR0aW5ncy5cIixcbiAgICBcImF0dGFjaG1lbnRzLnRpdGxlXCI6IFwiSW1hZ2VzICYgRmlsZXNcIixcbiAgICBcInN0YXR1cy5sb2FkaW5nQXR0YWNobWVudHNcIjogXCJMb2FkaW5nIGF0dGFjaG1lbnRzLi4uXCIsXG4gICAgXCJzdGF0dXMubm9BdHRhY2htZW50c1wiOiBcIk5vIGF0dGFjaG1lbnRzXCIsXG4gICAgXCJhdHRhY2htZW50LmltYWdlRmFsbGJhY2tcIjogXCJJbWFnZVwiLFxuICAgIFwiYXR0YWNobWVudC5maWxlRmFsbGJhY2tcIjogXCJhdHRhY2htZW50LXt7aWR9fVwiLFxuICAgIFwiYXR0YWNobWVudC5kb3dubG9hZFwiOiBcIkRvd25sb2FkXCIsXG4gICAgXCJzdGF0dXMuY2xpY2tQb2x5Z29uXCI6IFwiQ2xpY2sgYSBwb2x5Z29uIG9uIHRoZSBtYXAgdG8gc2VlIGl0cyBkZXRhaWxzXCIsXG4gICAgXCJzdGF0dXMucmVhZHlcIjogXCJQb2x5Z29uIEluc3BlY3RvciBSZWFkeVwiLFxuICAgIFwic3RhdHVzLmxvYWRpbmdcIjogXCJMb2FkaW5nLi4uXCIsXG4gICAgXCJlcnJvci5ub01hcFZpZXdcIjogXCJObyBtYXAgdmlldyBwcm92aWRlZFwiLFxuICAgIFwiZXJyb3Iubm9MYXllcnNTZWxlY3RlZFwiOlxuICAgICAgXCJObyBsYXllcnMgc2VsZWN0ZWQuIFBsZWFzZSBzZWxlY3Qgb25lIG9yIG1vcmUgRmVhdHVyZSBMYXllcnMgaW4gU2V0dGluZ3MuXCIsXG4gICAgXCJlcnJvci5zZWxlY3RlZExheWVyc01pc3NpbmdcIjpcbiAgICAgIFwiTm9uZSBvZiB0aGUgc2VsZWN0ZWQgbGF5ZXJzIHdlcmUgZm91bmQgb24gdGhlIG1hcC4gRW5zdXJlIHRoZSBjaG9zZW4gbGF5ZXJzIGV4aXN0IGluIHRoZSBzZWxlY3RlZCBNYXAgd2lkZ2V0LlwiLFxuICAgIFwiZXJyb3Iub2JqZWN0SWRGaWVsZE1pc3NpbmdcIjogXCJPYmplY3RJZCBmaWVsZCBub3QgZm91bmQgZm9yIGNsaWNrZWQgbGF5ZXIuXCIsXG4gICAgXCJlcnJvci5vYmplY3RJZE1pc3NpbmdcIjogXCJPYmplY3RJZCBub3QgZm91bmQuIEV4cGVjdGVkIGZpZWxkOiB7e2ZpZWxkfX1cIixcbiAgICBcImVycm9yLmZlYXR1cmVCeU9iamVjdElkTWlzc2luZ1wiOiBcIkZlYXR1cmUgbm90IGZvdW5kIGJ5IE9iamVjdElkLlwiLFxuICAgIFwiZXJyb3IuY29uZmlndXJlZEZpZWxkTWlzc2luZ1wiOlxuICAgICAgXCJTb21lIGNvbmZpZ3VyZWQgZmllbGRzIG5vdCBmb3VuZDoge3tmaWVsZHN9fVwiLFxuICAgIFwiZXJyb3Iubm9EYXRhRm9yQ29uZmlndXJlZEZpZWxkc1wiOlxuICAgICAgXCJObyBkYXRhIGF2YWlsYWJsZSBmb3IgY29uZmlndXJlZCBmaWVsZHNcIixcbiAgICBcImVycm9yLnVuZXhwZWN0ZWRcIjogXCJVbmV4cGVjdGVkIGVycm9yOiB7e21lc3NhZ2V9fVwiLFxuICAgIFwiaW5kaWNlcy50aXRsZVwiOiBcIlZlZ2V0YXRpb24gaW5kaWNlc1wiLFxuICAgIFwiaW5kaWNlcy5sb2FkaW5nXCI6IFwiTG9hZGluZyBpbmRpY2VzLi4uXCIsXG4gICAgXCJpbmRpY2VzLm5vbmVcIjogXCJObyBpbmRleCBkYXRhIGZvciB0aGlzIHBvbHlnb25cIixcbiAgfSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMYW5nKGlucHV0OiBhbnkpOiBMYW5nQ29kZSB7XG4gIGNvbnN0IHJhdyA9IFN0cmluZyhpbnB1dCA/PyBcIlwiKVxuICAgIC50cmltKClcbiAgICAudG9Mb3dlckNhc2UoKTtcblxuICBpZiAocmF3ID09PSBcImVuXCIgfHwgcmF3ID09PSBcImVuZ1wiIHx8IHJhdyA9PT0gXCJlbmdsaXNoXCIpIHJldHVybiBcImVuXCI7XG4gIGlmIChyYXcgPT09IFwicnVcIiB8fCByYXcgPT09IFwicnVzXCIgfHwgcmF3ID09PSBcInJ1c3NpYW5cIikgcmV0dXJuIFwicnVcIjtcblxuICBpZiAoXG4gICAgcmF3ID09PSBcInV6X2N5clwiIHx8XG4gICAgcmF3ID09PSBcInV6LWN5clwiIHx8XG4gICAgcmF3ID09PSBcInV6X2N5cmxcIiB8fFxuICAgIHJhdyA9PT0gXCJ1ei1jeXJsXCIgfHxcbiAgICByYXcgPT09IFwidXpjeXJsXCIgfHxcbiAgICByYXcgPT09IFwidXpfY3lyaWxsaWNcIiB8fFxuICAgIHJhdyA9PT0gXCJ1ei1jeXJpbGxpY1wiIHx8XG4gICAgcmF3ID09PSBcImN5cmlsbGljXCJcbiAgKSB7XG4gICAgcmV0dXJuIFwidXpfY3lyXCI7XG4gIH1cblxuICBpZiAoXG4gICAgcmF3ID09PSBcInV6X2xhdFwiIHx8XG4gICAgcmF3ID09PSBcInV6LWxhdFwiIHx8XG4gICAgcmF3ID09PSBcInV6bGF0aW5cIiB8fFxuICAgIHJhdyA9PT0gXCJ1ei1sYXRpblwiIHx8XG4gICAgcmF3ID09PSBcInV6XCJcbiAgKSB7XG4gICAgcmV0dXJuIFwidXpfbGF0XCI7XG4gIH1cblxuICByZXR1cm4gXCJ1el9sYXRcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaXRpYWxMYW5nKCk6IExhbmdDb2RlIHtcbiAgcmV0dXJuIG5vcm1hbGl6ZUxhbmcoXG4gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhZ3JpX2FwcF9sYW5nXCIpIHx8XG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFwcF9sYW5nXCIpIHx8XG4gICAgICBcInV6X2xhdFwiLFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5pdGlhbFRoZW1lKCk6IGJvb2xlYW4ge1xuICBjb25zdCBzdG9yZWRUaGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWdyaV92MTFfYXBwX3RoZW1lXCIpO1xuICBpZiAoc3RvcmVkVGhlbWUgPT09IFwiZGFya1wiKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKHN0b3JlZFRoZW1lID09PSBcImxpZ2h0XCIpIHJldHVybiBmYWxzZTtcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gIGNvbnN0IGlzTGlnaHQgPVxuICAgIHN0b3JlZFRoZW1lID09PSBcImxpZ2h0XCIgfHxcbiAgICByb290LmNsYXNzTGlzdC5jb250YWlucyhcImxpZ2h0LXRoZW1lXCIpIHx8XG4gICAgYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJsaWdodC10aGVtZVwiKSB8fFxuICAgIHJvb3QuZ2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiKSA9PT0gXCJsaWdodFwiO1xuICByZXR1cm4gIWlzTGlnaHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0KFxuICBsYW5nOiBMYW5nQ29kZSxcbiAga2V5OiBzdHJpbmcsXG4gIHBhcmFtcz86IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlcj4sXG4pOiBzdHJpbmcge1xuICBjb25zdCBkaWN0ID0gTUVTU0FHRVNbbGFuZ10gfHwgTUVTU0FHRVMudXpfbGF0O1xuICBjb25zdCBmYWxsYmFjayA9IE1FU1NBR0VTLmVuW2tleV0gPz8ga2V5O1xuICBjb25zdCB0ZW1wbGF0ZSA9IGRpY3Rba2V5XSA/PyBmYWxsYmFjaztcbiAgaWYgKCFwYXJhbXMpIHJldHVybiB0ZW1wbGF0ZTtcblxuICByZXR1cm4gT2JqZWN0LmtleXMocGFyYW1zKS5yZWR1Y2UoKHJlc3VsdCwgcGFyYW1LZXkpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IFN0cmluZyhwYXJhbXNbcGFyYW1LZXldID8/IFwiXCIpO1xuICAgIHJldHVybiByZXN1bHQucmVwbGFjZShuZXcgUmVnRXhwKGBcXFxce1xcXFx7JHtwYXJhbUtleX1cXFxcfVxcXFx9YCwgXCJnXCIpLCB2YWx1ZSk7XG4gIH0sIHRlbXBsYXRlKTtcbn1cbiIsIi8qKlxyXG4gKiBQdXJlIGZpZWxkIGhlbHBlcnMgZm9yIFBvcHVwUGFuZWwgKG5vIFJlYWN0IC8gbWFwIHNpZGUgZWZmZWN0cykuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUZpZWxkQWxpYXMoZmllbGQ6IGFueSwgZmFsbGJhY2tOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIGNvbnN0IG5hbWUgPSBTdHJpbmcoZmllbGQ/Lm5hbWUgfHwgZmFsbGJhY2tOYW1lIHx8IFwiXCIpLnRyaW0oKTtcclxuICBjb25zdCBhbGlhcyA9IFN0cmluZyhcclxuICAgIGZpZWxkPy5hbGlhcyB8fCBmaWVsZD8uZGlzcGxheU5hbWUgfHwgZmllbGQ/LmxhYmVsIHx8IFwiXCIsXHJcbiAgKS50cmltKCk7XHJcbiAgaWYgKCFhbGlhcykgcmV0dXJuIG5hbWU7XHJcbiAgcmV0dXJuIGFsaWFzO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBQdXJlIFBvcHVwUGFuZWwgZm9ybWF0IC8gYXR0cmlidXRlIGhlbHBlcnMuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRBdHRyaWJ1dGVWYWx1ZUNhc2VJbnNlbnNpdGl2ZShcclxuICBhdHRyaWJ1dGVzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgbnVsbCB8IHVuZGVmaW5lZCxcclxuICBmaWVsZE5hbWU6IHN0cmluZyxcclxuKTogYW55IHtcclxuICBpZiAoIWF0dHJpYnV0ZXMpIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IHRhcmdldCA9IGZpZWxkTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZpbmQoKGspID0+IGsudG9Mb3dlckNhc2UoKSA9PT0gdGFyZ2V0KTtcclxuICByZXR1cm4ga2V5ID8gYXR0cmlidXRlc1trZXldIDogbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGVTbWFydChyYXc6IGFueSk6IHN0cmluZyB7XHJcbiAgaWYgKHJhdyBpbnN0YW5jZW9mIERhdGUpIHJldHVybiByYXcudG9Mb2NhbGVTdHJpbmcoKTtcclxuXHJcbiAgaWYgKHR5cGVvZiByYXcgPT09IFwibnVtYmVyXCIgJiYgaXNGaW5pdGUocmF3KSkge1xyXG4gICAgY29uc3QgbXMgPSByYXcgPCAxZTEyID8gcmF3ICogMTAwMCA6IHJhdztcclxuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShtcyk7XHJcbiAgICByZXR1cm4gaXNOYU4oZC5nZXRUaW1lKCkpXHJcbiAgICAgID8gU3RyaW5nKHJhdylcclxuICAgICAgOiBkLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge1xyXG4gICAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXHJcbiAgICAgICAgICBtb250aDogXCIyLWRpZ2l0XCIsXHJcbiAgICAgICAgICBkYXk6IFwiMi1kaWdpdFwiLFxyXG4gICAgICAgICAgaG91cjogXCIyLWRpZ2l0XCIsXHJcbiAgICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxyXG4gICAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiByYXcgPT09IFwic3RyaW5nXCIpIHtcclxuICAgIGNvbnN0IHRyaW1tZWQgPSByYXcudHJpbSgpO1xyXG4gICAgaWYgKC9eXFxkezEwLDEzfSQvLnRlc3QodHJpbW1lZCkpIHJldHVybiBmb3JtYXREYXRlU21hcnQoTnVtYmVyKHRyaW1tZWQpKTtcclxuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSh0cmltbWVkKTtcclxuICAgIGlmICghaXNOYU4oZC5nZXRUaW1lKCkpKSB7XHJcbiAgICAgIHJldHVybiBkLnRvTG9jYWxlU3RyaW5nKHVuZGVmaW5lZCwge1xyXG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgIG1vbnRoOiBcIjItZGlnaXRcIixcclxuICAgICAgICBkYXk6IFwiMi1kaWdpdFwiLFxyXG4gICAgICAgIGhvdXI6IFwiMi1kaWdpdFwiLFxyXG4gICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFN0cmluZyhyYXcpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmljZUNoYXJ0TWF4KHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gIGlmICghTnVtYmVyLmlzRmluaXRlKHZhbHVlKSB8fCB2YWx1ZSA8PSAwKSByZXR1cm4gMTtcclxuICBjb25zdCBwYWRkZWQgPSB2YWx1ZSAqIDEuMDg7XHJcbiAgY29uc3QgbWFnbml0dWRlID0gTWF0aC5wb3coMTAsIE1hdGguZmxvb3IoTWF0aC5sb2cxMChwYWRkZWQpKSk7XHJcbiAgY29uc3Qgbm9ybWFsaXplZCA9IHBhZGRlZCAvIG1hZ25pdHVkZTtcclxuICBsZXQgbmljZSA9IDEwO1xyXG4gIGlmIChub3JtYWxpemVkIDw9IDEpIG5pY2UgPSAxO1xyXG4gIGVsc2UgaWYgKG5vcm1hbGl6ZWQgPD0gMikgbmljZSA9IDI7XHJcbiAgZWxzZSBpZiAobm9ybWFsaXplZCA8PSA1KSBuaWNlID0gNTtcclxuICByZXR1cm4gbmljZSAqIG1hZ25pdHVkZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdENoYXJ0VGljayh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcclxuICBpZiAoIU51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpIHJldHVybiBcIlwiO1xyXG4gIGlmIChNYXRoLmFicyh2YWx1ZSkgPj0gMTAwMCkgcmV0dXJuIGAke01hdGgucm91bmQodmFsdWUpfWA7XHJcbiAgaWYgKE1hdGguYWJzKHZhbHVlKSA+PSAxMDApIHJldHVybiBgJHtNYXRoLnJvdW5kKHZhbHVlKX1gO1xyXG4gIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSkgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XHJcbiAgcmV0dXJuIHZhbHVlLnRvRml4ZWQoMSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRDaGFydFRvb2x0aXBWYWx1ZSh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcclxuICBpZiAoIU51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpIHJldHVybiBcIlwiO1xyXG4gIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSkge1xyXG4gICAgcmV0dXJuIHZhbHVlLnRvTG9jYWxlU3RyaW5nKFwicnUtUlVcIikucmVwbGFjZSgvW1xcdTAwYTBcXHUyMDJmXS9nLCBcIiBcIik7XHJcbiAgfVxyXG4gIHJldHVybiB2YWx1ZVxyXG4gICAgLnRvTG9jYWxlU3RyaW5nKFwicnUtUlVcIiwge1xyXG4gICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDEsXHJcbiAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMSxcclxuICAgIH0pXHJcbiAgICAucmVwbGFjZSgvW1xcdTAwYTBcXHUyMDJmXS9nLCBcIiBcIilcclxuICAgIC5yZXBsYWNlKC8sL2csIFwiLlwiKTtcclxufVxyXG5cclxuLyoqIEFyY0dJUyBmaWVsZCB0eXBlIGd1YXJkIGZvciBwb3B1cCBkYXRlIGZvcm1hdHRpbmcuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0VzcmlEYXRlRmllbGRUeXBlKHR5cGU6IHVua25vd24pOiBib29sZWFuIHtcclxuICBjb25zdCB0ID0gU3RyaW5nKHR5cGUgfHwgXCJcIik7XHJcbiAgcmV0dXJuIChcclxuICAgIHQgPT09IFwiZGF0ZVwiIHx8XHJcbiAgICB0ID09PSBcInRpbWVzdGFtcC1vZmZzZXRcIiB8fFxyXG4gICAgdCA9PT0gXCJkYXRlLW9ubHlcIiB8fFxyXG4gICAgdCA9PT0gXCJ0aW1lLW9ubHlcIlxyXG4gICk7XHJcbn1cclxuXHJcbi8qKiBEaXNwbGF5IHN0cmluZyBmb3IgYSBwb3B1cCBhdHRyaWJ1dGUgY2VsbC4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFBvcHVwQXR0cmlidXRlVmFsdWUoXHJcbiAgcmF3OiBhbnksXHJcbiAgb3B0czoge1xyXG4gICAgaXNEYXRlRmllbGQ6IGJvb2xlYW47XHJcbiAgICBmb3JtYXREYXRlOiAodmFsdWU6IGFueSkgPT4gc3RyaW5nO1xyXG4gIH0sXHJcbik6IHN0cmluZyB7XHJcbiAgaWYgKHJhdyA9PT0gbnVsbCB8fCByYXcgPT09IHVuZGVmaW5lZCB8fCByYXcgPT09IFwiXCIpIHJldHVybiBcIuKAlFwiO1xyXG5cclxuICBpZiAob3B0cy5pc0RhdGVGaWVsZCkgcmV0dXJuIG9wdHMuZm9ybWF0RGF0ZShyYXcpO1xyXG4gIGlmIChcclxuICAgICh0eXBlb2YgcmF3ID09PSBcIm51bWJlclwiICYmIHJhdyA+IDFlOSAmJiByYXcgPCAxZTE0KSB8fFxyXG4gICAgKHR5cGVvZiByYXcgPT09IFwic3RyaW5nXCIgJiYgL15cXGR7MTAsMTN9JC8udGVzdChyYXcpKVxyXG4gICkge1xyXG4gICAgcmV0dXJuIG9wdHMuZm9ybWF0RGF0ZShyYXcpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiByYXcgPT09IFwibnVtYmVyXCIgJiYgaXNGaW5pdGUocmF3KSkge1xyXG4gICAgcmV0dXJuIHJhd1xyXG4gICAgICAudG9Mb2NhbGVTdHJpbmcoXCJydS1SVVwiKVxyXG4gICAgICAucmVwbGFjZSgvW1xcdTAwYTBcXHUyMDJmXS9nLCBcIiBcIilcclxuICAgICAgLnJlcGxhY2UoLywvZywgXCIuXCIpO1xyXG4gIH1cclxuICBpZiAoQXJyYXkuaXNBcnJheShyYXcpKSByZXR1cm4gcmF3LmpvaW4oXCIsIFwiKTtcclxuICBpZiAodHlwZW9mIHJhdyA9PT0gXCJvYmplY3RcIikgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJhdyk7XHJcbiAgcmV0dXJuIFN0cmluZyhyYXcpO1xyXG59XHJcbiIsIi8qKlxuICogQGxpY2Vuc2UgbHVjaWRlLXJlYWN0IHYxLjIzLjAgLSBJU0NcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZS5cbiAqIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBjcmVhdGVMdWNpZGVJY29uIGZyb20gJy4uL2NyZWF0ZUx1Y2lkZUljb24ubWpzJztcblxuY29uc3QgX19pY29uTm9kZSA9IFtcbiAgW1wicGF0aFwiLCB7IGQ6IFwiTTggMnY0XCIsIGtleTogXCIxY21weW1cIiB9XSxcbiAgW1wicGF0aFwiLCB7IGQ6IFwiTTE2IDJ2NFwiLCBrZXk6IFwiNG04MXZrXCIgfV0sXG4gIFtcInJlY3RcIiwgeyB3aWR0aDogXCIxOFwiLCBoZWlnaHQ6IFwiMThcIiwgeDogXCIzXCIsIHk6IFwiNFwiLCByeDogXCIyXCIsIGtleTogXCIxaG9wY3lcIiB9XSxcbiAgW1wicGF0aFwiLCB7IGQ6IFwiTTMgMTBoMThcIiwga2V5OiBcIjh0b2VuOFwiIH1dLFxuICBbXCJwYXRoXCIsIHsgZDogXCJNOCAxNGguMDFcIiwga2V5OiBcIjY0MjNiaFwiIH1dLFxuICBbXCJwYXRoXCIsIHsgZDogXCJNMTIgMTRoLjAxXCIsIGtleTogXCIxZXRpbGlcIiB9XSxcbiAgW1wicGF0aFwiLCB7IGQ6IFwiTTE2IDE0aC4wMVwiLCBrZXk6IFwiMWdib2Z3XCIgfV0sXG4gIFtcInBhdGhcIiwgeyBkOiBcIk04IDE4aC4wMVwiLCBrZXk6IFwibHJwMzV0XCIgfV0sXG4gIFtcInBhdGhcIiwgeyBkOiBcIk0xMiAxOGguMDFcIiwga2V5OiBcIm1oeWd2dVwiIH1dLFxuICBbXCJwYXRoXCIsIHsgZDogXCJNMTYgMThoLjAxXCIsIGtleTogXCJrenNtaW1cIiB9XVxuXTtcbmNvbnN0IENhbGVuZGFyRGF5cyA9IGNyZWF0ZUx1Y2lkZUljb24oXCJjYWxlbmRhci1kYXlzXCIsIF9faWNvbk5vZGUpO1xuXG5leHBvcnQgeyBfX2ljb25Ob2RlLCBDYWxlbmRhckRheXMgYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2FsZW5kYXItZGF5cy5tanMubWFwXG4iLCIvKipcbiAqIEBsaWNlbnNlIGx1Y2lkZS1yZWFjdCB2MS4yMy4wIC0gSVNDXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgSVNDIGxpY2Vuc2UuXG4gKiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgY3JlYXRlTHVjaWRlSWNvbiBmcm9tICcuLi9jcmVhdGVMdWNpZGVJY29uLm1qcyc7XG5cbmNvbnN0IF9faWNvbk5vZGUgPSBbXG4gIFtcInBhdGhcIiwgeyBkOiBcIk0zIDN2MTZhMiAyIDAgMCAwIDIgMmgxNlwiLCBrZXk6IFwiYzI0aTQ4XCIgfV0sXG4gIFtcInBhdGhcIiwgeyBkOiBcIk0xOCAxN1Y5XCIsIGtleTogXCIyYno2MG5cIiB9XSxcbiAgW1wicGF0aFwiLCB7IGQ6IFwiTTEzIDE3VjVcIiwga2V5OiBcIjFmcmR0OFwiIH1dLFxuICBbXCJwYXRoXCIsIHsgZDogXCJNOCAxN3YtM1wiLCBrZXk6IFwiMTdza2EwXCIgfV1cbl07XG5jb25zdCBDaGFydENvbHVtbiA9IGNyZWF0ZUx1Y2lkZUljb24oXCJjaGFydC1jb2x1bW5cIiwgX19pY29uTm9kZSk7XG5cbmV4cG9ydCB7IF9faWNvbk5vZGUsIENoYXJ0Q29sdW1uIGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNoYXJ0LWNvbHVtbi5tanMubWFwXG4iLCIvKipcbiAqIEBsaWNlbnNlIGx1Y2lkZS1yZWFjdCB2MS4yMy4wIC0gSVNDXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgSVNDIGxpY2Vuc2UuXG4gKiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgY3JlYXRlTHVjaWRlSWNvbiBmcm9tICcuLi9jcmVhdGVMdWNpZGVJY29uLm1qcyc7XG5cbmNvbnN0IF9faWNvbk5vZGUgPSBbXG4gIFtcInBhdGhcIiwgeyBkOiBcIk0zIDN2MTZhMiAyIDAgMCAwIDIgMmgxNlwiLCBrZXk6IFwiYzI0aTQ4XCIgfV0sXG4gIFtcInBhdGhcIiwgeyBkOiBcIm0xOSA5LTUgNS00LTQtMyAzXCIsIGtleTogXCIyb3NoOWlcIiB9XVxuXTtcbmNvbnN0IENoYXJ0TGluZSA9IGNyZWF0ZUx1Y2lkZUljb24oXCJjaGFydC1saW5lXCIsIF9faWNvbk5vZGUpO1xuXG5leHBvcnQgeyBfX2ljb25Ob2RlLCBDaGFydExpbmUgYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2hhcnQtbGluZS5tanMubWFwXG4iLCIvKipcbiAqIEBsaWNlbnNlIGx1Y2lkZS1yZWFjdCB2MS4yMy4wIC0gSVNDXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgSVNDIGxpY2Vuc2UuXG4gKiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgY3JlYXRlTHVjaWRlSWNvbiBmcm9tICcuLi9jcmVhdGVMdWNpZGVJY29uLm1qcyc7XG5cbmNvbnN0IF9faWNvbk5vZGUgPSBbW1wicGF0aFwiLCB7IGQ6IFwibTE4IDE1LTYtNi02IDZcIiwga2V5OiBcIjE1M3VkelwiIH1dXTtcbmNvbnN0IENoZXZyb25VcCA9IGNyZWF0ZUx1Y2lkZUljb24oXCJjaGV2cm9uLXVwXCIsIF9faWNvbk5vZGUpO1xuXG5leHBvcnQgeyBfX2ljb25Ob2RlLCBDaGV2cm9uVXAgYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2hldnJvbi11cC5tanMubWFwXG4iLCIvKipcbiAqIEBsaWNlbnNlIGx1Y2lkZS1yZWFjdCB2MS4yMy4wIC0gSVNDXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgSVNDIGxpY2Vuc2UuXG4gKiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgY3JlYXRlTHVjaWRlSWNvbiBmcm9tICcuLi9jcmVhdGVMdWNpZGVJY29uLm1qcyc7XG5cbmNvbnN0IF9faWNvbk5vZGUgPSBbXG4gIFtcInBhdGhcIiwgeyBkOiBcIk0xMiAxNVYzXCIsIGtleTogXCJtOWcxeDFcIiB9XSxcbiAgW1wicGF0aFwiLCB7IGQ6IFwiTTIxIDE1djRhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJ2LTRcIiwga2V5OiBcImloN24zaFwiIH1dLFxuICBbXCJwYXRoXCIsIHsgZDogXCJtNyAxMCA1IDUgNS01XCIsIGtleTogXCJicnNuNzBcIiB9XVxuXTtcbmNvbnN0IERvd25sb2FkID0gY3JlYXRlTHVjaWRlSWNvbihcImRvd25sb2FkXCIsIF9faWNvbk5vZGUpO1xuXG5leHBvcnQgeyBfX2ljb25Ob2RlLCBEb3dubG9hZCBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kb3dubG9hZC5tanMubWFwXG4iLCIvKipcbiAqIEBsaWNlbnNlIGx1Y2lkZS1yZWFjdCB2MS4yMy4wIC0gSVNDXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgSVNDIGxpY2Vuc2UuXG4gKiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgY3JlYXRlTHVjaWRlSWNvbiBmcm9tICcuLi9jcmVhdGVMdWNpZGVJY29uLm1qcyc7XG5cbmNvbnN0IF9faWNvbk5vZGUgPSBbXG4gIFtcbiAgICBcInBhdGhcIixcbiAgICB7XG4gICAgICBkOiBcIm02IDE0IDEuNS0yLjlBMiAyIDAgMCAxIDkuMjQgMTBIMjBhMiAyIDAgMCAxIDEuOTQgMi41bC0xLjU0IDZhMiAyIDAgMCAxLTEuOTUgMS41SDRhMiAyIDAgMCAxLTItMlY1YTIgMiAwIDAgMSAyLTJoMy45YTIgMiAwIDAgMSAxLjY5LjlsLjgxIDEuMmEyIDIgMCAwIDAgMS42Ny45SDE4YTIgMiAwIDAgMSAyIDJ2MlwiLFxuICAgICAga2V5OiBcInVzZGthMFwiXG4gICAgfVxuICBdXG5dO1xuY29uc3QgRm9sZGVyT3BlbiA9IGNyZWF0ZUx1Y2lkZUljb24oXCJmb2xkZXItb3BlblwiLCBfX2ljb25Ob2RlKTtcblxuZXhwb3J0IHsgX19pY29uTm9kZSwgRm9sZGVyT3BlbiBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb2xkZXItb3Blbi5tanMubWFwXG4iLCIvKipcbiAqIEBsaWNlbnNlIGx1Y2lkZS1yZWFjdCB2MS4yMy4wIC0gSVNDXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgSVNDIGxpY2Vuc2UuXG4gKiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgY3JlYXRlTHVjaWRlSWNvbiBmcm9tICcuLi9jcmVhdGVMdWNpZGVJY29uLm1qcyc7XG5cbmNvbnN0IF9faWNvbk5vZGUgPSBbXG4gIFtcInBvbHlsaW5lXCIsIHsgcG9pbnRzOiBcIjIyIDEyIDE2IDEyIDE0IDE1IDEwIDE1IDggMTIgMiAxMlwiLCBrZXk6IFwibzk3dDlkXCIgfV0sXG4gIFtcbiAgICBcInBhdGhcIixcbiAgICB7XG4gICAgICBkOiBcIk01LjQ1IDUuMTEgMiAxMnY2YTIgMiAwIDAgMCAyIDJoMTZhMiAyIDAgMCAwIDItMnYtNmwtMy40NS02Ljg5QTIgMiAwIDAgMCAxNi43NiA0SDcuMjRhMiAyIDAgMCAwLTEuNzkgMS4xMXpcIixcbiAgICAgIGtleTogXCJvb3Q2bXJcIlxuICAgIH1cbiAgXVxuXTtcbmNvbnN0IEluYm94ID0gY3JlYXRlTHVjaWRlSWNvbihcImluYm94XCIsIF9faWNvbk5vZGUpO1xuXG5leHBvcnQgeyBfX2ljb25Ob2RlLCBJbmJveCBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmJveC5tanMubWFwXG4iLCIvKipcbiAqIEBsaWNlbnNlIGx1Y2lkZS1yZWFjdCB2MS4yMy4wIC0gSVNDXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgSVNDIGxpY2Vuc2UuXG4gKiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgY3JlYXRlTHVjaWRlSWNvbiBmcm9tICcuLi9jcmVhdGVMdWNpZGVJY29uLm1qcyc7XG5cbmNvbnN0IF9faWNvbk5vZGUgPSBbXG4gIFtcbiAgICBcInBhdGhcIixcbiAgICB7XG4gICAgICBkOiBcIk0yMCAxMGMwIDQuOTkzLTUuNTM5IDEwLjE5My03LjM5OSAxMS43OTlhMSAxIDAgMCAxLTEuMjAyIDBDOS41MzkgMjAuMTkzIDQgMTQuOTkzIDQgMTBhOCA4IDAgMCAxIDE2IDBcIixcbiAgICAgIGtleTogXCIxcjBmMHpcIlxuICAgIH1cbiAgXSxcbiAgW1wiY2lyY2xlXCIsIHsgY3g6IFwiMTJcIiwgY3k6IFwiMTBcIiwgcjogXCIzXCIsIGtleTogXCJpbHFocjdcIiB9XVxuXTtcbmNvbnN0IE1hcFBpbiA9IGNyZWF0ZUx1Y2lkZUljb24oXCJtYXAtcGluXCIsIF9faWNvbk5vZGUpO1xuXG5leHBvcnQgeyBfX2ljb25Ob2RlLCBNYXBQaW4gYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFwLXBpbi5tanMubWFwXG4iLCIvKipcbiAqIEBsaWNlbnNlIGx1Y2lkZS1yZWFjdCB2MS4yMy4wIC0gSVNDXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgSVNDIGxpY2Vuc2UuXG4gKiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgY3JlYXRlTHVjaWRlSWNvbiBmcm9tICcuLi9jcmVhdGVMdWNpZGVJY29uLm1qcyc7XG5cbmNvbnN0IF9faWNvbk5vZGUgPSBbXG4gIFtcInBhdGhcIiwgeyBkOiBcIk0xNCA0LjEgMTIgNlwiLCBrZXk6IFwiaXRhOGk0XCIgfV0sXG4gIFtcInBhdGhcIiwgeyBkOiBcIm01LjEgOC0yLjktLjhcIiwga2V5OiBcIjFnbzNrZlwiIH1dLFxuICBbXCJwYXRoXCIsIHsgZDogXCJtNiAxMi0xLjkgMlwiLCBrZXk6IFwibW5odDk3XCIgfV0sXG4gIFtcInBhdGhcIiwgeyBkOiBcIk03LjIgMi4yIDggNS4xXCIsIGtleTogXCIxY2ZrbzFcIiB9XSxcbiAgW1xuICAgIFwicGF0aFwiLFxuICAgIHtcbiAgICAgIGQ6IFwiTTkuMDM3IDkuNjlhLjQ5OC40OTggMCAwIDEgLjY1My0uNjUzbDExIDQuNWEuNS41IDAgMCAxLS4wNzQuOTQ5bC00LjM0OSAxLjA0MWExIDEgMCAwIDAtLjc0LjczOWwtMS4wNCA0LjM1YS41LjUgMCAwIDEtLjk1LjA3NHpcIixcbiAgICAgIGtleTogXCJzMGgzeXpcIlxuICAgIH1cbiAgXVxuXTtcbmNvbnN0IE1vdXNlUG9pbnRlckNsaWNrID0gY3JlYXRlTHVjaWRlSWNvbihcIm1vdXNlLXBvaW50ZXItY2xpY2tcIiwgX19pY29uTm9kZSk7XG5cbmV4cG9ydCB7IF9faWNvbk5vZGUsIE1vdXNlUG9pbnRlckNsaWNrIGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vdXNlLXBvaW50ZXItY2xpY2subWpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZSBsdWNpZGUtcmVhY3QgdjEuMjMuMCAtIElTQ1xuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIElTQyBsaWNlbnNlLlxuICogU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IGNyZWF0ZUx1Y2lkZUljb24gZnJvbSAnLi4vY3JlYXRlTHVjaWRlSWNvbi5tanMnO1xuXG5jb25zdCBfX2ljb25Ob2RlID0gW1xuICBbXG4gICAgXCJwYXRoXCIsXG4gICAge1xuICAgICAgZDogXCJtMTYgNi04LjQxNCA4LjU4NmEyIDIgMCAwIDAgMi44MjkgMi44MjlsOC40MTQtOC41ODZhNCA0IDAgMSAwLTUuNjU3LTUuNjU3bC04LjM3OSA4LjU1MWE2IDYgMCAxIDAgOC40ODUgOC40ODVsOC4zNzktOC41NTFcIixcbiAgICAgIGtleTogXCIxbWllY3VcIlxuICAgIH1cbiAgXVxuXTtcbmNvbnN0IFBhcGVyY2xpcCA9IGNyZWF0ZUx1Y2lkZUljb24oXCJwYXBlcmNsaXBcIiwgX19pY29uTm9kZSk7XG5cbmV4cG9ydCB7IF9faWNvbk5vZGUsIFBhcGVyY2xpcCBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXBlcmNsaXAubWpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZSBsdWNpZGUtcmVhY3QgdjEuMjMuMCAtIElTQ1xuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIElTQyBsaWNlbnNlLlxuICogU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IGNyZWF0ZUx1Y2lkZUljb24gZnJvbSAnLi4vY3JlYXRlTHVjaWRlSWNvbi5tanMnO1xuXG5jb25zdCBfX2ljb25Ob2RlID0gW1xuICBbXCJwYXRoXCIsIHsgZDogXCJNMTIgMTd2NVwiLCBrZXk6IFwiYmIxZHU5XCIgfV0sXG4gIFtcbiAgICBcInBhdGhcIixcbiAgICB7XG4gICAgICBkOiBcIk05IDEwLjc2YTIgMiAwIDAgMS0xLjExIDEuNzlsLTEuNzguOUEyIDIgMCAwIDAgNSAxNS4yNFYxNmExIDEgMCAwIDAgMSAxaDEyYTEgMSAwIDAgMCAxLTF2LS43NmEyIDIgMCAwIDAtMS4xMS0xLjc5bC0xLjc4LS45QTIgMiAwIDAgMSAxNSAxMC43NlY3YTEgMSAwIDAgMSAxLTEgMiAyIDAgMCAwIDAtNEg4YTIgMiAwIDAgMCAwIDQgMSAxIDAgMCAxIDEgMXpcIixcbiAgICAgIGtleTogXCIxbmt6OGJcIlxuICAgIH1cbiAgXVxuXTtcbmNvbnN0IFBpbiA9IGNyZWF0ZUx1Y2lkZUljb24oXCJwaW5cIiwgX19pY29uTm9kZSk7XG5cbmV4cG9ydCB7IF9faWNvbk5vZGUsIFBpbiBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1waW4ubWpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZSBsdWNpZGUtcmVhY3QgdjEuMjMuMCAtIElTQ1xuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIElTQyBsaWNlbnNlLlxuICogU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IGNyZWF0ZUx1Y2lkZUljb24gZnJvbSAnLi4vY3JlYXRlTHVjaWRlSWNvbi5tanMnO1xuXG5jb25zdCBfX2ljb25Ob2RlID0gW1xuICBbXCJwYXRoXCIsIHsgZDogXCJNMTQgMTdINVwiLCBrZXk6IFwiZ2ZuM214XCIgfV0sXG4gIFtcInBhdGhcIiwgeyBkOiBcIk0xOSA3aC05XCIsIGtleTogXCI2aTl0Z1wiIH1dLFxuICBbXCJjaXJjbGVcIiwgeyBjeDogXCIxN1wiLCBjeTogXCIxN1wiLCByOiBcIjNcIiwga2V5OiBcIjE4YjQ5eVwiIH1dLFxuICBbXCJjaXJjbGVcIiwgeyBjeDogXCI3XCIsIGN5OiBcIjdcIiwgcjogXCIzXCIsIGtleTogXCJkZm15MHhcIiB9XVxuXTtcbmNvbnN0IFNldHRpbmdzMiA9IGNyZWF0ZUx1Y2lkZUljb24oXCJzZXR0aW5ncy0yXCIsIF9faWNvbk5vZGUpO1xuXG5leHBvcnQgeyBfX2ljb25Ob2RlLCBTZXR0aW5nczIgYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2V0dGluZ3MtMi5tanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=