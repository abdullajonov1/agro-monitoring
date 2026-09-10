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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvQWdyaTNfQWdyb193aWRnZXRWNV9zcmNfcGFuZWxzX1BvcHVwUGFuZWxfcnVudGltZV93aWRnZXRfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBcUQ7QUFDckQsdUdBQXVHOzs7Ozs7Ozs7O0FBRXBFO0FBRW1CO0FBQ2Q7QUFDRDtBQUNzQjtBQUNBO0FBQ0g7QUFNdkM7QUFpQkc7QUFDbUQ7QUFJM0I7QUFDMkc7QUFDMUU7QUFDRztBQUt2QztBQUN3QztBQUNNO0FBU3pEO0FBZVM7QUFJUztBQUlMO0FBQ29CO0FBQ0g7QUFPMUM7QUFvRnBCLE1BQXFCLFdBQVksU0FBUSw0Q0FBSyxDQUFDLGFBRzlDO0lBMkNTLGFBQWEsQ0FDbkIsSUFBK0M7UUFFL0MsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNqQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBRWpDLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQztZQUMvQixNQUFNLElBQUksR0FDUCxRQUFRLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUF3QjtnQkFDcEUsUUFBUSxDQUFDLGVBQWUsQ0FBQztZQUMzQixNQUFNLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7aUJBQy9CLGdCQUFnQixDQUFDLDhCQUE4QixDQUFDO2lCQUNoRCxJQUFJLEVBQUUsQ0FBQztZQUNWLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEMsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDMUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztZQUNyQixDQUFDO1FBQ0gsQ0FBQztRQUVELElBQUksSUFBSSxFQUFFLENBQUM7WUFD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QThCO0FBQzNDLGFBQWEsNkJBQTZCO0FBQzFDLGVBQWUsMkNBQTJDO0FBQzFELGVBQWUseUNBQXlDO0FBQ3hEO0FBQ0Esa0JBQWtCLGlFQUFnQjs7QUFFVTtBQUM1QyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9BZ3JpMy9BZ3JvX3dpZGdldFY1L3NyYy9wYW5lbHMvUG9wdXBQYW5lbC9ydW50aW1lL3dpZGdldC50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL0FncmkzL0Fncm9fd2lkZ2V0VjUvc3JjL2dpcy9BZ3JpSGlkZGVuQ29ubmVjdG9ycy50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL0FncmkzL0Fncm9fd2lkZ2V0VjUvc3JjL2dpcy9hZ3JpLWRhdGEtc291cmNlLWVuZ2luZS50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvQWdyaTMvQWdyb193aWRnZXRWNS9zcmMvZ2lzL2FncmktZW5naW5lLXJlZ2lzdHJ5LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9BZ3JpMy9BZ3JvX3dpZGdldFY1L3NyYy9naXMvYWdyaS1saW5rZWQtbWFwLWxheW91dC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvQWdyaTMvQWdyb193aWRnZXRWNS9zcmMvcGFuZWxzL0dyYWZmUGFuZWwvcnVudGltZS9ncmFmZi1ncmFwaC1jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL0FncmkzL0Fncm9fd2lkZ2V0VjUvc3JjL3BhbmVscy9Qb3B1cFBhbmVsL3J1bnRpbWUvbWVzc2FnZXMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL0FncmkzL0Fncm9fd2lkZ2V0VjUvc3JjL3BhbmVscy9Qb3B1cFBhbmVsL3J1bnRpbWUvcG9wdXAtZmllbGQtaGVscGVycy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvQWdyaTMvQWdyb193aWRnZXRWNS9zcmMvcGFuZWxzL1BvcHVwUGFuZWwvcnVudGltZS9wb3B1cC1mb3JtYXQtaGVscGVycy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9pY29ucy9jYWxlbmRhci1kYXlzLm1qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9pY29ucy9jaGFydC1jb2x1bW4ubWpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2ljb25zL2NoYXJ0LWxpbmUubWpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2ljb25zL2NoZXZyb24tdXAubWpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2ljb25zL2Rvd25sb2FkLm1qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9pY29ucy9mb2xkZXItb3Blbi5tanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvaW5ib3gubWpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2ljb25zL21hcC1waW4ubWpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2ljb25zL21vdXNlLXBvaW50ZXItY2xpY2subWpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2ljb25zL3BhcGVyY2xpcC5tanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvcGluLm1qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9pY29ucy9zZXR0aW5ncy0yLm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQb2x5Z29uIEF0dHJpYnV0ZSBJbnNwZWN0b3IgKEFncmlQb2x5Z29uIHJlZmFjdG9yKVxuLy8g4pyFIFVQREFURUQ6IHN1cHBvcnRzIE1VTFRJUExFIHNlbGVjdGVkIEZlYXR1cmUgTGF5ZXJzIChlLmcuIHllYXJseSBsYXllcnMgZmlsdGVyZWQgYnkgYW5vdGhlciB3aWRnZXQpXG5cbmltcG9ydCBHcmFwaGljIGZyb20gXCJlc3JpL0dyYXBoaWNcIjtcbmltcG9ydCBGZWF0dXJlTGF5ZXIgZnJvbSBcImVzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllclwiO1xuaW1wb3J0IEdyYXBoaWNzTGF5ZXIgZnJvbSBcImVzcmkvbGF5ZXJzL0dyYXBoaWNzTGF5ZXJcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiZXNyaS9nZW9tZXRyeS9Qb2ludFwiO1xuaW1wb3J0IGVzcmlSZXF1ZXN0IGZyb20gXCJlc3JpL3JlcXVlc3RcIjtcbmltcG9ydCBTaW1wbGVGaWxsU3ltYm9sIGZyb20gXCJlc3JpL3N5bWJvbHMvU2ltcGxlRmlsbFN5bWJvbFwiO1xuaW1wb3J0IFNpbXBsZUxpbmVTeW1ib2wgZnJvbSBcImVzcmkvc3ltYm9scy9TaW1wbGVMaW5lU3ltYm9sXCI7XG5pbXBvcnQgeyBKaW11TWFwVmlldywgTWFwVmlld01hbmFnZXIgfSBmcm9tIFwiamltdS1hcmNnaXNcIjtcbmltcG9ydCB7XG4gIEFsbFdpZGdldFByb3BzLFxuICBEYXRhU291cmNlTWFuYWdlcixcbiAgUXVlcmlhYmxlRGF0YVNvdXJjZSxcbiAgUmVhY3QsXG59IGZyb20gXCJqaW11LWNvcmVcIjtcbmltcG9ydCB7XG4gIEFsZXJ0VHJpYW5nbGUsXG4gIEJhckNoYXJ0MyxcbiAgQ2FsZW5kYXJEYXlzLFxuICBEb3dubG9hZCxcbiAgRm9sZGVyT3BlbixcbiAgSW5ib3gsXG4gIExpbmVDaGFydCxcbiAgTWFwUGluLFxuICBNb3VzZVBvaW50ZXJDbGljayxcbiAgUGFwZXJjbGlwLFxuICBQaW4sXG4gIFNldHRpbmdzMixcbiAgU3Byb3V0LFxuICBDaGV2cm9uVXAsXG4gIFgsXG59IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IEFncmlIaWRkZW5Db25uZWN0b3JzIH0gZnJvbSBcIi4uLy4uLy4uL2dpcy9BZ3JpSGlkZGVuQ29ubmVjdG9yc1wiO1xuaW1wb3J0IHtcbiAgZ2V0U2VsZWN0ZWREc0lkcyxcbiAgdHlwZSBBZ3JpRGF0YVNvdXJjZUVuZ2luZSxcbn0gZnJvbSBcIi4uLy4uLy4uL2dpcy9hZ3JpLWRhdGEtc291cmNlLWVuZ2luZVwiO1xuaW1wb3J0IHsgQUdSSV9NQVBfVklFV19SRUFEWV9FVkVOVCwgQUdSSV9NQVBfQ0xJQ0tfRVZFTlQsIEFHUklfWFlfUEFHRV9DTE9TRURfRVZFTlQsIHR5cGUgQWdyaU1hcENsaWNrRGV0YWlsIH0gZnJvbSBcIi4uLy4uLy4uL2dpcy9hZ3JpLWRhdGEtbGF5ZXItcm9sZXNcIjtcbmltcG9ydCB7IGRpc2NvdmVyTWFwV2lkZ2V0SWRJbkFwcCB9IGZyb20gXCIuLi8uLi8uLi9naXMvYWdyaS1saW5rZWQtbWFwLWxheW91dFwiO1xuaW1wb3J0IHsgZ2V0U2hhcmVkQWdyaURhdGFTb3VyY2VFbmdpbmUgfSBmcm9tIFwiLi4vLi4vLi4vZ2lzL2FncmktZW5naW5lLXJlZ2lzdHJ5XCI7XG5pbXBvcnQge1xuICBhZ3JpTWFwQ2xpY2tEZWJ1ZyxcbiAgYWdyaU1hcENsaWNrV2FybixcbiAgbG9nUG9pbnRlclN0YWNrLFxufSBmcm9tIFwiLi4vLi4vLi4vZ2lzL2FncmktbWFwLWNsaWNrLWRlYnVnXCI7XG5pbXBvcnQgeyBHUkFGRl9JTkRFWF9PUkRFUiB9IGZyb20gXCIuLi8uLi9HcmFmZlBhbmVsL3J1bnRpbWUvZ3JhZmYtZ3JhcGgtY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBub3JtYWxpemVGaWVsZEFsaWFzIGFzIG5vcm1hbGl6ZUZpZWxkQWxpYXNTaGFyZWQgfSBmcm9tIFwiLi9wb3B1cC1maWVsZC1oZWxwZXJzXCI7XG5pbXBvcnQge1xuICBmaW5kQXR0cmlidXRlVmFsdWVDYXNlSW5zZW5zaXRpdmUgYXMgZmluZEF0dHJpYnV0ZVZhbHVlQ2FzZUluc2Vuc2l0aXZlU2hhcmVkLFxuICBmb3JtYXRDaGFydFRpY2sgYXMgZm9ybWF0Q2hhcnRUaWNrU2hhcmVkLFxuICBmb3JtYXRDaGFydFRvb2x0aXBWYWx1ZSBhcyBmb3JtYXRDaGFydFRvb2x0aXBWYWx1ZVNoYXJlZCxcbiAgZm9ybWF0RGF0ZVNtYXJ0IGFzIGZvcm1hdERhdGVTbWFydFNoYXJlZCxcbiAgZm9ybWF0UG9wdXBBdHRyaWJ1dGVWYWx1ZSxcbiAgaXNFc3JpRGF0ZUZpZWxkVHlwZSxcbiAgbmljZUNoYXJ0TWF4IGFzIG5pY2VDaGFydE1heFNoYXJlZCxcbn0gZnJvbSBcIi4vcG9wdXAtZm9ybWF0LWhlbHBlcnNcIjtcbmltcG9ydCB7XG4gIGNvbGxlY3RRdWVyeWFibGVGaWVsZExheWVycyxcbiAgZXh0cmFjdE1hcExheWVySWRGcm9tRHNJZCxcbiAgZmluZFF1ZXJ5YWJsZUxheWVyT25NYXBCeVVybCxcbiAgZmluZFF1ZXJ5YWJsZUxheWVyT25NYXBCeUlkLFxuICBnZXRBbGxGZWF0dXJlTGF5ZXJzRnJvbU1hcCxcbiAgZ2V0RGV0YWNoZWRRdWVyeUxheWVyRm9yLFxuICBnZXRBZ3JpTGF5ZXJNYXBLZXksXG4gIGdldFF1ZXJ5YWJsZUxheWVyLFxuICBpc01hcEltYWdlR3JvdXBTdWJsYXllcixcbiAgaXNNYXBJbWFnZU93bmVkTGF5ZXIsXG4gIGlzUXVlcnlhYmxlRmllbGRMYXllcixcbiAgbm9ybWFsaXplUXVlcnlhYmxlTGF5ZXJVcmwsXG4gIHNhZmVMb2FkTWFwTGF5ZXIsXG59IGZyb20gXCIuLi8uLi8uLi9naXMvZmVhdHVyZS1sYXllci1kYXRhXCI7XG5pbXBvcnQge1xuICBmb3JtYXRBcmNnaXNEYXRlVG9ZbWQsXG4gIHF1ZXJ5VmVnZXRhdGlvblNlcmllc0ZvclVuaXF1ZUlkLFxufSBmcm9tIFwiLi4vLi4vLi4vZ2lzL2FncmktdmVnZXRhdGlvbi1kYXRhLXNvdXJjZVwiO1xuaW1wb3J0IHtcbiAgQUdSSV9UQUJMRV9KT0lOX0ZJRUxELFxuICBxdWVyeUFncmlSZWNvcmRCeVVuaXF1ZUlkLFxufSBmcm9tIFwiLi4vLi4vLi4vZ2lzL2FncmktdGFibGUtZGF0YS1zb3VyY2VcIjtcbmltcG9ydCB7IGJpbmRNYXN0ZXJGaWx0ZXIgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9hZ3JpLWZpbHRlci1idXNcIjtcbmltcG9ydCBBZ3JpQ2hhcnRMb2FkZXIgZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9BZ3JpQ2hhcnRMb2FkZXJcIjtcbmltcG9ydCB7XG4gIGdldEluaXRpYWxMYW5nLFxuICBnZXRJbml0aWFsVGhlbWUsXG4gIG5vcm1hbGl6ZUxhbmcsXG4gIHQsXG4gIHR5cGUgTGFuZ0NvZGUsXG59IGZyb20gXCIuL21lc3NhZ2VzXCI7XG5cbnR5cGUgQ29uZmlnID0ge1xuICBmaWVsZHNUb1Nob3c/OiBzdHJpbmdbXTtcbiAgdGl0bGVGaWVsZD86IHN0cmluZztcbiAgbGFiZWxzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgc2V0dGluZ3M/OiB7XG4gICAgem9vbVRvU2VsZWN0aW9uPzogYm9vbGVhbjsgLy8gZGVmYXVsdCB0cnVlXG4gICAgc2hvd01hcFBvcHVwPzogYm9vbGVhbjsgLy8gZGVmYXVsdCBmYWxzZVxuICAgIHNob3dBdHRhY2htZW50cz86IGJvb2xlYW47IC8vIGRlZmF1bHQgdHJ1ZSAod2hlbiB1bmRlZmluZWQpXG4gIH07XG4gIGNoYXJ0RW5hYmxlZD86IGJvb2xlYW47XG4gIGNoYXJ0VHlwZT86IFwiYmFyXCIgfCBcImxpbmVcIjtcbiAgY2hhcnRUaXRsZT86IHN0cmluZztcbiAgY2hhcnRGaWVsZHM/OiBzdHJpbmdbXTtcbiAgY2hhcnRDb2xvcj86IHN0cmluZztcbn07XG5cbnR5cGUgQXR0YWNobWVudEl0ZW0gPSB7XG4gIGlkOiBudW1iZXI7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHNpemU/OiBudW1iZXI7XG4gIGNvbnRlbnRUeXBlPzogc3RyaW5nO1xuICB1cmw/OiBzdHJpbmc7IC8vIGRpcmVjdCBkb3dubG9hZCBVUkxcbiAgcHJldmlld09iamVjdFVybD86IHN0cmluZzsgLy8gY3JlYXRlZCB2aWEgVVJMLmNyZWF0ZU9iamVjdFVSTCBmb3IgPGltZz4gcHJldmlld3Ncbn07XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIGN1cnJlbnRMYW5nOiBMYW5nQ29kZTtcbiAgaXNEYXJrVGhlbWU6IGJvb2xlYW47XG5cbiAgamltdU1hcFZpZXc/OiBKaW11TWFwVmlldyB8IG51bGw7XG5cbiAgLyoqIOKchSBNVUxUSTogYWxsIHJlc29sdmVkIGxheWVycyBmcm9tIHNldHRpbmdzICovXG4gIGZlYXR1cmVMYXllcnM6IF9fZXNyaS5GZWF0dXJlTGF5ZXJbXTtcbiAgLyoqIOKchSBNVUxUSTogbWFwIGNsaWNrZWQgbGF5ZXIgPT4gZHNJZCAoYmVzdC1lZmZvcnQpICovXG4gIGxheWVyS2V5VG9Ec0lkOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuXG4gIC8qKiDinIUgTVVMVEk6IHN0b3JlIERTIHNjaGVtYXMgcGVyIERTIGlkICovXG4gIGRhdGFTb3VyY2VzQnlJZDogUmVjb3JkPHN0cmluZywgUXVlcmlhYmxlRGF0YVNvdXJjZT47XG5cbiAgLyoqIHdoaWNoIGxheWVyIHdhcyBsYXN0IGNsaWNrZWQgKGZvciBhbGlhc2VzL2ZpZWxkIHJlc29sdmluZykgKi9cbiAgbGFzdENsaWNrZWREc0lkOiBzdHJpbmcgfCBudWxsO1xuICBsYXN0Q2xpY2tlZExheWVyS2V5OiBzdHJpbmcgfCBudWxsO1xuXG4gIHBpblRvQ29ybmVyOiBib29sZWFuO1xuXG4gIC8vIGF0dGFjaG1lbnRzIFVJXG4gIGxvYWRpbmdBdHRhY2htZW50czogYm9vbGVhbjtcbiAgYXR0YWNobWVudHM6IEF0dGFjaG1lbnRJdGVtW107XG4gIGF0dGFjaG1lbnRzRXJyb3I6IHN0cmluZyB8IG51bGw7XG4gIGF0dGFjaG1lbnRzRXhwYW5kZWQ6IGJvb2xlYW47XG5cbiAgbG9hZGluZzogYm9vbGVhbjtcbiAgZXJyb3I6IHN0cmluZyB8IG51bGw7XG5cbiAgc2VsZWN0ZWRBdHRyczogUmVjb3JkPHN0cmluZywgYW55PiB8IG51bGw7XG4gIHNlbGVjdGVkT0lEOiBudW1iZXIgfCBudWxsO1xuICBvYmplY3RJZEZpZWxkOiBzdHJpbmcgfCBudWxsO1xuXG4gIHNob3dQb3B1cDogYm9vbGVhbjtcbiAgLyoqIFggY29sbGFwc2VzIHRoZSBwYW5lbDsgc2VsZWN0aW9uICsgZGF0YSBzdGF5IHVudGlsIHJlYWwgZGVzZWxlY3QuICovXG4gIHBvcHVwTWluaW1pemVkOiBib29sZWFuO1xuICBwb3B1cFBvc2l0aW9uOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsO1xuICBjbGlja1NjcmVlblBvaW50OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsO1xuXG4gIGRlYnVnSW5mbzoge1xuICAgIGxheWVySW5mbz86IGFueTtcbiAgICBoaXRUZXN0UmVzdWx0cz86IGFueTtcbiAgICBxdWVyeVJlc3VsdHM/OiBhbnk7XG4gICAgZmllbGRNYXBwaW5nPzogYW55O1xuICAgIGF2YWlsYWJsZUxheWVycz86IGFueTtcbiAgfTtcblxuICBjaGFydEV4cGFuZGVkOiBib29sZWFuO1xuICBjaGFydEhvdmVySW5kZXg6IG51bWJlciB8IG51bGw7XG5cbiAgLy8gTGF0ZXN0LWRheSB2ZWdldGF0aW9uIGluZGV4IHZhbHVlcyAoTkRWSS9TQVZJL1JWSS9DSS9FVkkvTkRXSSkgZm9yIHRoZVxuICAvLyBjdXJyZW50bHkgc2VsZWN0ZWQgcG9seWdvbiwgZnJvbSBhZ3JpX3ZlZ2V0YXRpb25faW5kaWNlcy5cbiAgbG9hZGluZ0xhdGVzdEluZGljZXM6IGJvb2xlYW47XG4gIGxhdGVzdEluZGV4RGF0ZTogc3RyaW5nIHwgbnVsbDtcbiAgbGF0ZXN0SW5kZXhWYWx1ZXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gfCBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZ3JpUG9seWdvbiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8XG4gIEFsbFdpZGdldFByb3BzPENvbmZpZz4sXG4gIFN0YXRlXG4+IHtcbiAgcHJpdmF0ZSBfaXNNb3VudGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3VuYmluZE1hc3RlckZpbHRlcjogKCgpID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgdGhlbWVPYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlciB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9jbGlja0hhbmRsZTogSUhhbmRsZUxpa2UgfCBudWxsID0gbnVsbDtcbiAgLyoqIE1vbm90b25pYyBpZCBzbyBhIHNsb3cvZHVwbGljYXRlIGNsaWNrIHBhdGggY2Fubm90IGNsb3NlIGEgbmV3ZXIgcG9wdXAuICovXG4gIHByaXZhdGUgX2NsaWNrR2VuZXJhdGlvbiA9IDA7XG4gIHByaXZhdGUgX3BvcHVwUmVmOiBSZWFjdC5SZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+ID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gIHByaXZhdGUgX2hpZ2hsaWdodExheWVyOiBfX2VzcmkuR3JhcGhpY3NMYXllciB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9oaWdobGlnaHRHcmFwaGljOiBfX2VzcmkuR3JhcGhpYyB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9oaWdobGlnaHRIYWxvR3JhcGhpYzogX19lc3JpLkdyYXBoaWMgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfZXh0ZW50QmVmb3JlU2VsZWN0aW9uOiBfX2VzcmkuRXh0ZW50IHwgbnVsbCA9IG51bGw7XG4gIC8qKiBDdXJyZW50bHkgaW5zcGVjdGVkIGZpZWxkIHVuaXF1ZWlkIChtYXAgb3IgdGFibGUgdmlhIGh1YikuIFNhbWUtaWQgbWFwIGNsaWNrIHRvZ2dsZXMgb2ZmLiAqL1xuICBwcml2YXRlIF9hY3RpdmVJbnNwZWN0ZWRVbmlxdWVpZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIC8qKiBMYXN0IHlpbHx2aWxveWF0fHR1bWFuIGZyb20gbWFzdGVyRmlsdGVyQ2hhbmdlZCDigJQgZ2VvZ3JhcGh5IG1vdmUgY2xvc2VzIHBvcHVwLiAqL1xuICBwcml2YXRlIF9sYXN0TWFzdGVyR2VvS2V5ID0gXCJcIjtcbiAgcHJpdmF0ZSBfaXNEcmFnZ2luZ1BvcHVwID0gZmFsc2U7XG4gIHByaXZhdGUgX3BvcHVwRHJhZ09mZnNldCA9IHsgeDogMCwgeTogMCB9O1xuICBwcml2YXRlIF9wb3B1cExheW91dFRpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9wb3B1cExheW91dFJhZiA9IDA7XG4gIHByaXZhdGUgbWFwQXJlYVJlc2l6ZU9ic2VydmVyOiBSZXNpemVPYnNlcnZlciB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHJlYWRvbmx5IF9mZWF0dXJlUXVlcnlDYWNoZVR0bE1zID0gNjAgKiA2MCAqIDEwMDA7XG4gIHByaXZhdGUgX2ZlYXR1cmVRdWVyeUNhY2hlID0gbmV3IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgeyBleHBpcmVzOiBudW1iZXI7IHZhbHVlOiBQcm9taXNlPF9fZXNyaS5HcmFwaGljIHwgbnVsbD4gfVxuICA+KCk7XG4gIC8qKiBEZXRhY2hlZCBxdWVyeSBjbGllbnRzIGtleWVkIGJ5IHNlcnZpY2UgVVJMOyBuZXZlciBtdXRhdGUgbGl2ZSBtYXAgc3VibGF5ZXJzLiAqL1xuICBwcml2YXRlIF9xdWVyeU9ubHlMYXllcnMgPSBuZXcgTWFwPHN0cmluZywgRmVhdHVyZUxheWVyPigpO1xuICBwcml2YXRlIHJlYWRvbmx5IGRhdGFTb3VyY2VFbmdpbmU6IEFncmlEYXRhU291cmNlRW5naW5lO1xuICBwcml2YXRlIG1hcFZpZXdGYWxsYmFja1RpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIG1hcEluaXRSZXRyeVRpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGNvbm5lY3RlZE1hcFZpZXdJZCA9IFwiXCI7XG4gIHByaXZhdGUgbWFwSW5pdFJldHJ5Q291bnQgPSAwO1xuICBwcml2YXRlIHJlYWRvbmx5IG1heE1hcEluaXRSZXRyaWVzID0gMTI7XG4gIHByaXZhdGUgbWFwQ2xpY2tCb290c3RyYXBUaW1lcjogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0SW50ZXJ2YWw+IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgcmVhZG9ubHkgUE9QVVBfV0lEVEggPSAzNDA7XG4gIHByaXZhdGUgcmVhZG9ubHkgUE9QVVBfTUFSR0lOID0gMTI7XG4gIC8qKiBNYXRjaCBkYXNoYm9hcmQgbWFwIG92ZXJsYXlzOiAxNnB4IGhvcml6b250YWwgYW5kIDEycHggdmVydGljYWwgaW5zZXQuICovXG4gIHByaXZhdGUgcmVhZG9ubHkgREFTSEJPQVJEX1BPUFVQX0hPUklaT05UQUxfSU5TRVQgPSAxNjtcbiAgcHJpdmF0ZSByZWFkb25seSBEQVNIQk9BUkRfUE9QVVBfVkVSVElDQUxfSU5TRVQgPSAxMjtcbiAgLyoqIEd1YXJkcyBhZ2FpbnN0IGEgc3RhbGUgbGF0ZXN0LWluZGljZXMgcmVzcG9uc2UgbGFuZGluZyBhZnRlciBhIG5ld2VyIHBvbHlnb24gc2VsZWN0aW9uLiAqL1xuICBwcml2YXRlIF9sYXRlc3RJbmRpY2VzUmVxdWVzdElkID0gMDtcblxuICBwcml2YXRlIGdldFBvcHVwV2lkdGgoXG4gICAgdmlldz86IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldyB8IG51bGwsXG4gICk6IG51bWJlciB7XG4gICAgY29uc3QgbWFyZ2luID0gdGhpcy5QT1BVUF9NQVJHSU47XG4gICAgbGV0IHByZWZlcnJlZCA9IHRoaXMuUE9QVVBfV0lEVEg7XG5cbiAgICBpZiAodGhpcy5pc0Rhc2hib2FyZEVtYmVkZGVkKCkpIHtcbiAgICAgIGNvbnN0IHJvb3QgPVxuICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZ3JpLWRhc2hib2FyZC12M1wiKSBhcyBIVE1MRWxlbWVudCB8IG51bGwpIHx8XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgIGNvbnN0IHJhdyA9IGdldENvbXB1dGVkU3R5bGUocm9vdClcbiAgICAgICAgLmdldFByb3BlcnR5VmFsdWUoXCItLWFncmktZGFzaGJvYXJkLXBvcHVwLXdpZHRoXCIpXG4gICAgICAgIC50cmltKCk7XG4gICAgICBjb25zdCBwYXJzZWQgPSBOdW1iZXIucGFyc2VGbG9hdChyYXcpO1xuICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZShwYXJzZWQpICYmIHBhcnNlZCA+IDApIHtcbiAgICAgICAgcHJlZmVycmVkID0gcGFyc2VkO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2aWV3KSB7XG4gICAgICBjb25zdCBtYXBXID0gdGhpcy5nZXRNYXBBcmVhUmVjdCh2aWV3KS53aWR0aDtcbiAgICAgIHJldHVybiBNYXRoLm1heCgyMjAsIE1hdGgubWluKHByZWZlcnJlZCwgbWFwVyAtIG1hcmdpbiAqIDIpKTtcbiAgICB9XG4gICAgcmV0dXJuIHByZWZlcnJlZDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGlubmVkUG9wdXBIZWlnaHQoXG4gICAgdmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LFxuICAgIHRvcFk6IG51bWJlcixcbiAgKTogbnVtYmVyIHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5nZXRNYXBBcmVhUmVjdCh2aWV3KTtcbiAgICBpZiAodGhpcy5pc0Rhc2hib2FyZEVtYmVkZGVkKCkpIHtcbiAgICAgIGNvbnN0IGJvdHRvbUluc2V0ID0gdGhpcy5EQVNIQk9BUkRfUE9QVVBfVkVSVElDQUxfSU5TRVQ7XG4gICAgICByZXR1cm4gTWF0aC5tYXgoMTYwLCByZWN0LmJvdHRvbSAtIGJvdHRvbUluc2V0IC0gdG9wWSk7XG4gICAgfVxuXG4gICAgY29uc3QgbWFyZ2luID0gdGhpcy5QT1BVUF9NQVJHSU47XG4gICAgY29uc3QgbWFwQm90dG9tID0gdGhpcy5nZXRFZmZlY3RpdmVNYXBCb3R0b20odmlldywgbWFyZ2luKTtcbiAgICByZXR1cm4gTWF0aC5tYXgoMTYwLCBtYXBCb3R0b20gLSB0b3BZKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UG9wdXBEaW1lbnNpb25zKFxuICAgIHZpZXc/OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcgfCBudWxsLFxuICAgIHBpbm5lZCA9IGZhbHNlLFxuICAgIHBvc2l0aW9uPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbCxcbiAgKTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9IHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0UG9wdXBXaWR0aCh2aWV3KTtcbiAgICBpZiAocGlubmVkICYmIHZpZXcpIHtcbiAgICAgIGNvbnN0IHRvcFkgPVxuICAgICAgICBwb3NpdGlvbj8ueSA/PyB0aGlzLmNhbGN1bGF0ZVBpbm5lZFBvc2l0aW9uKHZpZXcpLnk7XG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldFBpbm5lZFBvcHVwSGVpZ2h0KHZpZXcsIHRvcFkpO1xuICAgICAgcmV0dXJuIHsgd2lkdGgsIGhlaWdodCB9O1xuICAgIH1cbiAgICByZXR1cm4geyB3aWR0aCwgaGVpZ2h0OiB3aWR0aCB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IEFsbFdpZGdldFByb3BzPENvbmZpZz4pIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5kYXRhU291cmNlRW5naW5lID0gZ2V0U2hhcmVkQWdyaURhdGFTb3VyY2VFbmdpbmUocHJvcHMuaWQpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN1cnJlbnRMYW5nOiBnZXRJbml0aWFsTGFuZygpLFxuICAgICAgaXNEYXJrVGhlbWU6IHRoaXMuZ2V0UmVzb2x2ZWRUaGVtZSgpLFxuXG4gICAgICBqaW11TWFwVmlldzogbnVsbCxcblxuICAgICAgZmVhdHVyZUxheWVyczogW10sXG4gICAgICBsYXllcktleVRvRHNJZDoge30sXG4gICAgICBkYXRhU291cmNlc0J5SWQ6IHt9LFxuXG4gICAgICBsYXN0Q2xpY2tlZERzSWQ6IG51bGwsXG4gICAgICBsYXN0Q2xpY2tlZExheWVyS2V5OiBudWxsLFxuXG4gICAgICBwaW5Ub0Nvcm5lcjogdHJ1ZSxcblxuICAgICAgbG9hZGluZ0F0dGFjaG1lbnRzOiBmYWxzZSxcbiAgICAgIGF0dGFjaG1lbnRzOiBbXSxcbiAgICAgIGF0dGFjaG1lbnRzRXJyb3I6IG51bGwsXG4gICAgICBhdHRhY2htZW50c0V4cGFuZGVkOiBmYWxzZSxcblxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBlcnJvcjogbnVsbCxcblxuICAgICAgc2VsZWN0ZWRBdHRyczogbnVsbCxcbiAgICAgIHNlbGVjdGVkT0lEOiBudWxsLFxuICAgICAgb2JqZWN0SWRGaWVsZDogbnVsbCxcblxuICAgICAgc2hvd1BvcHVwOiBmYWxzZSxcbiAgICAgIHBvcHVwTWluaW1pemVkOiBmYWxzZSxcbiAgICAgIHBvcHVwUG9zaXRpb246IG51bGwsXG4gICAgICBjbGlja1NjcmVlblBvaW50OiBudWxsLFxuXG4gICAgICBkZWJ1Z0luZm86IHt9LFxuICAgICAgY2hhcnRFeHBhbmRlZDogZmFsc2UsXG4gICAgICBjaGFydEhvdmVySW5kZXg6IG51bGwsXG5cbiAgICAgIGxvYWRpbmdMYXRlc3RJbmRpY2VzOiBmYWxzZSxcbiAgICAgIGxhdGVzdEluZGV4RGF0ZTogbnVsbCxcbiAgICAgIGxhdGVzdEluZGV4VmFsdWVzOiBudWxsLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldFJlc29sdmVkVGhlbWUgPSAoKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBzYXZlZFRoZW1lID1cbiAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhZ3JpX3YxMV9hcHBfdGhlbWVcIik7XG5cbiAgICAgIGlmIChzYXZlZFRoZW1lID09PSBcImxpZ2h0XCIpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmIChzYXZlZFRoZW1lID09PSBcImRhcmtcIikgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBpZ25vcmUgc3RvcmFnZSBhY2Nlc3MgaXNzdWVzXG4gICAgfVxuXG4gICAgY29uc3QgaXNMaWdodCA9XG4gICAgICByb290LmNsYXNzTGlzdC5jb250YWlucyhcImxpZ2h0LXRoZW1lXCIpIHx8XG4gICAgICByb290LmdldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIikgPT09IFwibGlnaHRcIiB8fFxuICAgICAgYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJsaWdodC10aGVtZVwiKTtcblxuICAgIHJldHVybiBnZXRJbml0aWFsVGhlbWUoKSA/PyAhaXNMaWdodDtcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgIHRoaXMuc2V0dXBUaGVtZU9ic2VydmVyKCk7XG4gICAgY29uc3QgaXNEYXJrVGhlbWUgPSB0aGlzLmdldFJlc29sdmVkVGhlbWUoKTtcbiAgICBpZiAoaXNEYXJrVGhlbWUgIT09IHRoaXMuc3RhdGUuaXNEYXJrVGhlbWUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0RhcmtUaGVtZSB9KTtcbiAgICB9XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwidGhlbWVDaGFuZ2VkXCIsXG4gICAgICB0aGlzLmhhbmRsZVRoZW1lQ2hhbmdlIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJsYW5ndWFnZUNoYW5nZWRcIixcbiAgICAgIHRoaXMuaGFuZGxlTGFuZ3VhZ2VDaGFuZ2UgYXMgRXZlbnRMaXN0ZW5lcixcbiAgICApO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2spO1xuICAgIHRoaXMuX3VuYmluZE1hc3RlckZpbHRlciA9IGJpbmRNYXN0ZXJGaWx0ZXIodGhpcy5oYW5kbGVNYXN0ZXJGaWx0ZXJDaGFuZ2VkKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJ3aWRnZXRTZWxlY3Rpb25DaGFuZ2VkXCIsXG4gICAgICB0aGlzLmhhbmRsZVdpZGdldFNlbGVjdGlvbkNoYW5nZWQgYXMgRXZlbnRMaXN0ZW5lcixcbiAgICApO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuc2NoZWR1bGVQb3B1cExheW91dCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBBR1JJX01BUF9WSUVXX1JFQURZX0VWRU5ULFxuICAgICAgdGhpcy5oYW5kbGVNYXBWaWV3UmVhZHkgYXMgRXZlbnRMaXN0ZW5lcixcbiAgICApO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgQUdSSV9NQVBfQ0xJQ0tfRVZFTlQsXG4gICAgICB0aGlzLmhhbmRsZVNoYXJlZE1hcENsaWNrIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIEFHUklfWFlfUEFHRV9DTE9TRURfRVZFTlQsXG4gICAgICB0aGlzLmhhbmRsZVh5UGFnZUNsb3NlZCBhcyBFdmVudExpc3RlbmVyLFxuICAgICk7XG4gICAgaWYgKCF0aGlzLmlzRGFzaGJvYXJkRW1iZWRkZWQoKSkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5zY2hlZHVsZVBvcHVwTGF5b3V0LCB0cnVlKTtcbiAgICB9XG4gICAgdGhpcy5zY2hlZHVsZU1hcFZpZXdGYWxsYmFjaygpO1xuICAgIHRoaXMubWFwQ2xpY2tCb290c3RyYXBUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmVuc3VyZU1hcENsaWNrQXR0YWNoZWQoKSAmJiB0aGlzLm1hcENsaWNrQm9vdHN0cmFwVGltZXIpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLm1hcENsaWNrQm9vdHN0cmFwVGltZXIpO1xuICAgICAgICB0aGlzLm1hcENsaWNrQm9vdHN0cmFwVGltZXIgPSBudWxsO1xuICAgICAgfVxuICAgIH0sIDI1MDApO1xuICAgIGFncmlNYXBDbGlja0RlYnVnKFwiQWdyaVBvbHlnb24gbW91bnRlZFwiLCB7XG4gICAgICB3aWRnZXRJZDogdGhpcy5wcm9wcy5pZCxcbiAgICAgIGVtYmVkZGVkOiB0aGlzLmlzRGFzaGJvYXJkRW1iZWRkZWQoKSxcbiAgICAgIG1hcFdpZGdldElkOiB0aGlzLmdldExpbmtlZE1hcFdpZGdldElkKCksXG4gICAgICB1c2VEYXRhU291cmNlSWRzOiBnZXRTZWxlY3RlZERzSWRzKHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMpLFxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvd1BvcHVwKSB7XG4gICAgICB0aGlzLmJyb2FkY2FzdFBvcHVwVmlzaWJpbGl0eShmYWxzZSk7XG4gICAgfVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICBcInRoZW1lQ2hhbmdlZFwiLFxuICAgICAgdGhpcy5oYW5kbGVUaGVtZUNoYW5nZSBhcyBFdmVudExpc3RlbmVyLFxuICAgICk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwibGFuZ3VhZ2VDaGFuZ2VkXCIsXG4gICAgICB0aGlzLmhhbmRsZUxhbmd1YWdlQ2hhbmdlIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgKTtcbiAgICB0aGlzLmRldGFjaE1hcENsaWNrKCk7XG4gICAgdGhpcy5jbGVhbnVwSGlnaGxpZ2h0KCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLmhhbmRsZU91dHNpZGVDbGljayk7XG4gICAgdGhpcy5fdW5iaW5kTWFzdGVyRmlsdGVyPy4oKTtcbiAgICB0aGlzLl91bmJpbmRNYXN0ZXJGaWx0ZXIgPSBudWxsO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICBcIndpZGdldFNlbGVjdGlvbkNoYW5nZWRcIixcbiAgICAgIHRoaXMuaGFuZGxlV2lkZ2V0U2VsZWN0aW9uQ2hhbmdlZCBhcyBFdmVudExpc3RlbmVyLFxuICAgICk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5zY2hlZHVsZVBvcHVwTGF5b3V0KTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgIEFHUklfTUFQX1ZJRVdfUkVBRFlfRVZFTlQsXG4gICAgICB0aGlzLmhhbmRsZU1hcFZpZXdSZWFkeSBhcyBFdmVudExpc3RlbmVyLFxuICAgICk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICBBR1JJX01BUF9DTElDS19FVkVOVCxcbiAgICAgIHRoaXMuaGFuZGxlU2hhcmVkTWFwQ2xpY2sgYXMgRXZlbnRMaXN0ZW5lcixcbiAgICApO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgQUdSSV9YWV9QQUdFX0NMT1NFRF9FVkVOVCxcbiAgICAgIHRoaXMuaGFuZGxlWHlQYWdlQ2xvc2VkIGFzIEV2ZW50TGlzdGVuZXIsXG4gICAgKTtcbiAgICBpZiAodGhpcy5tYXBWaWV3RmFsbGJhY2tUaW1lcikgY2xlYXJUaW1lb3V0KHRoaXMubWFwVmlld0ZhbGxiYWNrVGltZXIpO1xuICAgIGlmICh0aGlzLm1hcEluaXRSZXRyeVRpbWVyKSBjbGVhclRpbWVvdXQodGhpcy5tYXBJbml0UmV0cnlUaW1lcik7XG4gICAgaWYgKHRoaXMubWFwQ2xpY2tCb290c3RyYXBUaW1lcikgY2xlYXJJbnRlcnZhbCh0aGlzLm1hcENsaWNrQm9vdHN0cmFwVGltZXIpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuc2NoZWR1bGVQb3B1cExheW91dCwgdHJ1ZSk7XG4gICAgaWYgKHRoaXMuX3BvcHVwTGF5b3V0VGltZXIpIGNsZWFyVGltZW91dCh0aGlzLl9wb3B1cExheW91dFRpbWVyKTtcbiAgICBpZiAodGhpcy5fcG9wdXBMYXlvdXRSYWYpIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuX3BvcHVwTGF5b3V0UmFmKTtcbiAgICB0aGlzLm1hcEFyZWFSZXNpemVPYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICAgIHRoaXMubWFwQXJlYVJlc2l6ZU9ic2VydmVyID0gbnVsbDtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm9uUG9wdXBEcmFnTW92ZSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMub25Qb3B1cERyYWdFbmQpO1xuICAgIGlmICh0aGlzLnRoZW1lT2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMudGhlbWVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB0aGlzLnRoZW1lT2JzZXJ2ZXIgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLnJldm9rZUFsbEF0dGFjaG1lbnRVcmxzKCk7XG4gICAgdGhpcy5fZmVhdHVyZVF1ZXJ5Q2FjaGUuY2xlYXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgcHJ1bmVGZWF0dXJlUXVlcnlDYWNoZShub3cgPSBEYXRlLm5vdygpKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBba2V5LCBlbnRyeV0gb2YgdGhpcy5fZmVhdHVyZVF1ZXJ5Q2FjaGUpIHtcbiAgICAgIGlmIChlbnRyeS5leHBpcmVzIDw9IG5vdykgdGhpcy5fZmVhdHVyZVF1ZXJ5Q2FjaGUuZGVsZXRlKGtleSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRGZWF0dXJlUXVlcnlDYWNoZUtleShcbiAgICBsYXllcjogX19lc3JpLkZlYXR1cmVMYXllcixcbiAgICBvaWRGaWVsZDogc3RyaW5nLFxuICAgIG9pZDogdW5rbm93bixcbiAgICBvdXRGaWVsZHM6IHN0cmluZ1tdLFxuICApOiBzdHJpbmcge1xuICAgIGNvbnN0IGxheWVyS2V5ID0gU3RyaW5nKChsYXllciBhcyBhbnkpPy51cmwgfHwgbGF5ZXIuaWQgfHwgbGF5ZXIudGl0bGUgfHwgXCJcIik7XG4gICAgY29uc3QgZmllbGRzS2V5ID0gQXJyYXkuZnJvbShuZXcgU2V0KG91dEZpZWxkcy5tYXAoKGYpID0+IFN0cmluZyhmKSkpKVxuICAgICAgLnNvcnQoKVxuICAgICAgLmpvaW4oXCIsXCIpO1xuICAgIHJldHVybiBgJHtsYXllcktleX18JHtvaWRGaWVsZH18JHtTdHJpbmcob2lkKX18JHtmaWVsZHNLZXl9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPZmYtbWFwIEZlYXR1cmVMYXllciBjbGllbnQgZm9yIGEgbGl2ZSBtYXAgbGF5ZXIncyBVUkwuIEV2ZXJ5IHF1ZXJ5IGluXG4gICAqIHRoZSBjbGljayBjaGFpbiBtdXN0IHJ1biBhZ2FpbnN0IHRoZXNlIGRldGFjaGVkIGNsaWVudHM6IGNyZWF0ZVF1ZXJ5IC9cbiAgICogcXVlcnlGZWF0dXJlcyBvbiBhIGxpdmUgTWFwSW1hZ2UgU3VibGF5ZXIgcmVoeWRyYXRlcyBpdCBhbmQgY2FuIGNsZWFyIGl0c1xuICAgKiBydW50aW1lIGRlZmluaXRpb25FeHByZXNzaW9uLCB3aGljaCBtYWtlcyB0aGUgbWFwIGV4cG9ydCAoYW5kIGJyaWVmbHlcbiAgICogcGFpbnQpIGV2ZXJ5IGRpc3RyaWN0J3MgZmllbGRzIHVudGlsIHRoZSBmaWx0ZXIgZ3VhcmQgcmVzdG9yZXMgaXQuXG4gICAqXG4gICAqIFNoYXJlZCBoZWxwZXIgYWxzbyBza2lwcyBNYXBTZXJ2ZXIgcm9vdHMgYW5kIEdyb3VwIExheWVyIGZvbGRlcnNcbiAgICogKFwiQWdyaSAyMDI2IHJlcHVibGljIGRhdGFcIikgdGhhdCBGZWF0dXJlTGF5ZXIgY2Fubm90IGxvYWQuXG4gICAqL1xuICBwcml2YXRlIGdldERldGFjaGVkUXVlcnlMYXllciA9IGFzeW5jIChcbiAgICBsYXllcjogYW55LFxuICApOiBQcm9taXNlPF9fZXNyaS5GZWF0dXJlTGF5ZXIgfCBudWxsPiA9PiB7XG4gICAgaWYgKCFsYXllciB8fCBpc01hcEltYWdlR3JvdXBTdWJsYXllcihsYXllcikpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGRldGFjaGVkID0gYXdhaXQgZ2V0RGV0YWNoZWRRdWVyeUxheWVyRm9yKGxheWVyKTtcbiAgICBpZiAoIWRldGFjaGVkKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCB1cmwgPSBTdHJpbmcobGF5ZXI/LnVybCB8fCBcIlwiKS50cmltKCkucmVwbGFjZSgvXFwvKyQvLCBcIlwiKTtcbiAgICBpZiAodXJsKSB0aGlzLl9xdWVyeU9ubHlMYXllcnMuc2V0KHVybCwgZGV0YWNoZWQpO1xuICAgIHJldHVybiBkZXRhY2hlZCBhcyB1bmtub3duIGFzIF9fZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIH07XG5cbiAgLyoqIFNuYXBzaG90IHRoZSBsaXZlIGRlZmluaXRpb25FeHByZXNzaW9uIG9mIGVhY2ggbGF5ZXIgKHByZS1oaXRUZXN0KS4gKi9cbiAgcHJpdmF0ZSBzbmFwc2hvdERlZmluaXRpb25FeHByZXNzaW9ucyhcbiAgICBsYXllcnM6IEFycmF5PF9fZXNyaS5GZWF0dXJlTGF5ZXIgfCBhbnk+LFxuICApOiBNYXA8YW55LCBzdHJpbmc+IHtcbiAgICBjb25zdCBzbmFwc2hvdCA9IG5ldyBNYXA8YW55LCBzdHJpbmc+KCk7XG4gICAgZm9yIChjb25zdCBsYXllciBvZiBsYXllcnMpIHtcbiAgICAgIGlmICghbGF5ZXIgfHwgc25hcHNob3QuaGFzKGxheWVyKSkgY29udGludWU7XG4gICAgICB0cnkge1xuICAgICAgICBzbmFwc2hvdC5zZXQobGF5ZXIsIFN0cmluZygobGF5ZXIgYXMgYW55KS5kZWZpbml0aW9uRXhwcmVzc2lvbiA/PyBcIlwiKSk7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLyogaWdub3JlICovXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzbmFwc2hvdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXN0b3JlIGFueSBkZWZpbml0aW9uRXhwcmVzc2lvbiB0aGF0IGRyaWZ0ZWQgKHdhcyBjbGVhcmVkIGJ5IGhpdFRlc3QgL1xuICAgKiBpZGVudGlmeSAvIGxvYWQgcmVoeWRyYXRpb24pIHN5bmNocm9ub3VzbHksIGJlZm9yZSB0aGUgdW5maWx0ZXJlZFxuICAgKiBNYXBJbWFnZSBleHBvcnQgY2FuIGJlIHBhaW50ZWQuXG4gICAqL1xuICBwcml2YXRlIHJlc3RvcmVEcmlmdGVkRGVmaW5pdGlvbkV4cHJlc3Npb25zKFxuICAgIHNuYXBzaG90OiBNYXA8YW55LCBzdHJpbmc+LFxuICApOiB2b2lkIHtcbiAgICBzbmFwc2hvdC5mb3JFYWNoKChleHByZXNzaW9uLCBsYXllcikgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IFN0cmluZygobGF5ZXIgYXMgYW55KS5kZWZpbml0aW9uRXhwcmVzc2lvbiA/PyBcIlwiKTtcbiAgICAgICAgaWYgKGN1cnJlbnQgIT09IGV4cHJlc3Npb24pIHtcbiAgICAgICAgICAobGF5ZXIgYXMgYW55KS5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgICAgICAgYWdyaU1hcENsaWNrV2FybihcImRlZmluaXRpb25FeHByZXNzaW9uIGRyaWZ0IHJlc3RvcmVkXCIsIHtcbiAgICAgICAgICAgIGxheWVyOiBsYXllcj8udGl0bGUgfHwgbGF5ZXI/LnVybCB8fCBsYXllcj8uaWQsXG4gICAgICAgICAgICBkcmlmdGVkOiBjdXJyZW50IHx8IFwiPGVtcHR5PlwiLFxuICAgICAgICAgICAgcmVzdG9yZWQ6IGV4cHJlc3Npb24gfHwgXCI8ZW1wdHk+XCIsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvKiBpZ25vcmUgKi9cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcXVlcnlGZWF0dXJlQnlPYmplY3RJZENhY2hlZChcbiAgICBsYXllcjogX19lc3JpLkZlYXR1cmVMYXllcixcbiAgICBvaWRGaWVsZDogc3RyaW5nLFxuICAgIG9pZDogdW5rbm93bixcbiAgICBvdXRGaWVsZHM6IHN0cmluZ1tdLFxuICApOiBQcm9taXNlPF9fZXNyaS5HcmFwaGljIHwgbnVsbD4ge1xuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgdGhpcy5wcnVuZUZlYXR1cmVRdWVyeUNhY2hlKG5vdyk7XG4gICAgY29uc3Qga2V5ID0gdGhpcy5nZXRGZWF0dXJlUXVlcnlDYWNoZUtleShsYXllciwgb2lkRmllbGQsIG9pZCwgb3V0RmllbGRzKTtcbiAgICBjb25zdCBoaXQgPSB0aGlzLl9mZWF0dXJlUXVlcnlDYWNoZS5nZXQoa2V5KTtcbiAgICBpZiAoaGl0ICYmIGhpdC5leHBpcmVzID4gbm93KSB7XG4gICAgICBhZ3JpTWFwQ2xpY2tEZWJ1ZyhcImZlYXR1cmUtcXVlcnk6Y2FjaGUtaGl0XCIsIHtcbiAgICAgICAgbGF5ZXI6IGxheWVyLnRpdGxlIHx8IGxheWVyLnVybCB8fCBsYXllci5pZCxcbiAgICAgICAgb2lkRmllbGQsXG4gICAgICAgIG9pZCxcbiAgICAgICAgb3V0RmllbGRDb3VudDogb3V0RmllbGRzLmxlbmd0aCxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGhpdC52YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBqb2IgPSAoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbGl2ZURlZmluaXRpb25FeHByZXNzaW9uID0gU3RyaW5nKFxuICAgICAgICAobGF5ZXIgYXMgYW55KS5kZWZpbml0aW9uRXhwcmVzc2lvbiB8fCBcIlwiLFxuICAgICAgKTtcblxuICAgICAgLy8gQ2FsbGluZyBxdWVyeUZlYXR1cmVzIG9uIGEgbGl2ZSBNYXBJbWFnZSBzdWJsYXllciBjYW4gcmVoeWRyYXRlIHRoYXRcbiAgICAgIC8vIHN1YmxheWVyIGFuZCB0ZW1wb3JhcmlseSBjbGVhciBpdHMgcnVudGltZSBkZWZpbml0aW9uRXhwcmVzc2lvbi4gVGhlXG4gICAgICAvLyBtYXAgdGhlbiByZW5kZXJzIGV2ZXJ5IGRpc3RyaWN0IHVudGlsIExvY2FsaXphdGlvbidzIGd1YXJkIHJlc3RvcmVzXG4gICAgICAvLyB0aGUgZmlsdGVyLiBRdWVyeSBhbiBvZmYtbWFwIEZlYXR1cmVMYXllciBjbGllbnQgaW5zdGVhZC5cbiAgICAgIGNvbnN0IGRldGFjaGVkUXVlcnlMYXllciA9IGF3YWl0IHRoaXMuZ2V0RGV0YWNoZWRRdWVyeUxheWVyKGxheWVyKTtcbiAgICAgIGNvbnN0IHF1ZXJ5TGF5ZXI6IF9fZXNyaS5GZWF0dXJlTGF5ZXIgPSBkZXRhY2hlZFF1ZXJ5TGF5ZXIgfHwgbGF5ZXI7XG5cbiAgICAgIGNvbnN0IHEgPSBxdWVyeUxheWVyLmNyZWF0ZVF1ZXJ5KCk7XG4gICAgICBxLndoZXJlID0gYCR7b2lkRmllbGR9ID0gJHtOdW1iZXIob2lkKX1gO1xuICAgICAgcS5vdXRGaWVsZHMgPSBvdXRGaWVsZHM7XG4gICAgICBxLnJldHVybkdlb21ldHJ5ID0gdHJ1ZTtcbiAgICAgIGFncmlNYXBDbGlja0RlYnVnKFwiZmVhdHVyZS1xdWVyeTpyZXF1ZXN0XCIsIHtcbiAgICAgICAgbGF5ZXI6IGxheWVyLnRpdGxlIHx8IGxheWVyLnVybCB8fCBsYXllci5pZCxcbiAgICAgICAgdXJsOiBsYXllci51cmwgfHwgbnVsbCxcbiAgICAgICAgd2hlcmU6IHEud2hlcmUsXG4gICAgICAgIG91dEZpZWxkcyxcbiAgICAgICAgcmV0dXJuR2VvbWV0cnk6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHF1ZXJ5TGF5ZXIucXVlcnlGZWF0dXJlcyhxKTtcbiAgICAgIC8vIERlZmVuc2l2ZSByZXN0b3JlIGZvciB0aGUgbm8tVVJMIGZhbGxiYWNrLiBUaGUgZGV0YWNoZWQgcGF0aCBhYm92ZVxuICAgICAgLy8gbmV2ZXIgdG91Y2hlcyB0aGUgbGl2ZSBsYXllci5cbiAgICAgIGlmIChcbiAgICAgICAgcXVlcnlMYXllciA9PT0gbGF5ZXIgJiZcbiAgICAgICAgU3RyaW5nKChsYXllciBhcyBhbnkpLmRlZmluaXRpb25FeHByZXNzaW9uIHx8IFwiXCIpICE9PVxuICAgICAgICAgIGxpdmVEZWZpbml0aW9uRXhwcmVzc2lvblxuICAgICAgKSB7XG4gICAgICAgIChsYXllciBhcyBhbnkpLmRlZmluaXRpb25FeHByZXNzaW9uID0gbGl2ZURlZmluaXRpb25FeHByZXNzaW9uO1xuICAgICAgfVxuICAgICAgYWdyaU1hcENsaWNrRGVidWcoXCJmZWF0dXJlLXF1ZXJ5OnJlc3BvbnNlXCIsIHtcbiAgICAgICAgbGF5ZXI6IGxheWVyLnRpdGxlIHx8IGxheWVyLnVybCB8fCBsYXllci5pZCxcbiAgICAgICAgZmVhdHVyZUNvdW50OiByZXMuZmVhdHVyZXM/Lmxlbmd0aCB8fCAwLFxuICAgICAgICBoYXNHZW9tZXRyeTogQm9vbGVhbihyZXMuZmVhdHVyZXM/LlswXT8uZ2VvbWV0cnkpLFxuICAgICAgICBhdHRyaWJ1dGVLZXlzOiBPYmplY3Qua2V5cyhyZXMuZmVhdHVyZXM/LlswXT8uYXR0cmlidXRlcyB8fCB7fSksXG4gICAgICAgIHF1ZXJ5TW9kZTogcXVlcnlMYXllciA9PT0gbGF5ZXIgPyBcImxpdmUtZmFsbGJhY2tcIiA6IFwiZGV0YWNoZWRcIixcbiAgICAgICAgbGl2ZURlZmluaXRpb25FeHByZXNzaW9uOlxuICAgICAgICAgIChsYXllciBhcyBhbnkpLmRlZmluaXRpb25FeHByZXNzaW9uIHx8IG51bGwsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXMuZmVhdHVyZXM/LlswXSB8fCBudWxsO1xuICAgIH0pKCk7XG5cbiAgICB0aGlzLl9mZWF0dXJlUXVlcnlDYWNoZS5zZXQoa2V5LCB7XG4gICAgICBleHBpcmVzOiBub3cgKyB0aGlzLl9mZWF0dXJlUXVlcnlDYWNoZVR0bE1zLFxuICAgICAgdmFsdWU6IGpvYixcbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBmZWF0dXJlID0gYXdhaXQgam9iO1xuICAgICAgaWYgKCFmZWF0dXJlICYmIHRoaXMuX2ZlYXR1cmVRdWVyeUNhY2hlLmdldChrZXkpPy52YWx1ZSA9PT0gam9iKSB7XG4gICAgICAgIHRoaXMuX2ZlYXR1cmVRdWVyeUNhY2hlLmRlbGV0ZShrZXkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZlYXR1cmU7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAodGhpcy5fZmVhdHVyZVF1ZXJ5Q2FjaGUuZ2V0KGtleSk/LnZhbHVlID09PSBqb2IpIHtcbiAgICAgICAgdGhpcy5fZmVhdHVyZVF1ZXJ5Q2FjaGUuZGVsZXRlKGtleSk7XG4gICAgICB9XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgdHIgPSAoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgcGFyYW1zPzogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyPixcbiAgKTogc3RyaW5nID0+IHtcbiAgICByZXR1cm4gdCh0aGlzLnN0YXRlLmN1cnJlbnRMYW5nLCBrZXksIHBhcmFtcyk7XG4gIH07XG5cbiAgcHJpdmF0ZSBzZXR1cFRoZW1lT2JzZXJ2ZXIgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICB0aGlzLnRoZW1lT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICBjb25zdCBpc0RhcmtUaGVtZSA9IHRoaXMuZ2V0UmVzb2x2ZWRUaGVtZSgpO1xuICAgICAgaWYgKHRoaXMuX2lzTW91bnRlZCAmJiBpc0RhcmtUaGVtZSAhPT0gdGhpcy5zdGF0ZS5pc0RhcmtUaGVtZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNEYXJrVGhlbWUgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnRoZW1lT2JzZXJ2ZXIub2JzZXJ2ZShyb290LCB7XG4gICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgYXR0cmlidXRlRmlsdGVyOiBbXCJjbGFzc1wiLCBcImRhdGEtdGhlbWVcIl0sXG4gICAgfSk7XG5cbiAgICB0aGlzLnRoZW1lT2JzZXJ2ZXIub2JzZXJ2ZShib2R5LCB7XG4gICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgYXR0cmlidXRlRmlsdGVyOiBbXCJjbGFzc1wiXSxcbiAgICB9KTtcbiAgfTtcblxuICBwcml2YXRlIGhhbmRsZVRoZW1lQ2hhbmdlID0gKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgIGlmICghdGhpcy5faXNNb3VudGVkKSByZXR1cm47XG4gICAgY29uc3QgZGV0YWlsID0gZT8uZGV0YWlsIHx8IHt9O1xuICAgIGxldCBpc0RhcmtUaGVtZSA9IHRoaXMuZ2V0UmVzb2x2ZWRUaGVtZSgpO1xuXG4gICAgaWYgKHR5cGVvZiBkZXRhaWwuaXNEYXJrVGhlbWUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICBpc0RhcmtUaGVtZSA9IGRldGFpbC5pc0RhcmtUaGVtZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkZXRhaWwudGhlbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGlzRGFya1RoZW1lID0gU3RyaW5nKGRldGFpbC50aGVtZSkudG9Mb3dlckNhc2UoKSAhPT0gXCJsaWdodFwiO1xuICAgIH1cblxuICAgIGlmIChpc0RhcmtUaGVtZSAhPT0gdGhpcy5zdGF0ZS5pc0RhcmtUaGVtZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRGFya1RoZW1lIH0pO1xuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIGhhbmRsZUxhbmd1YWdlQ2hhbmdlID0gKGU6IGFueSk6IHZvaWQgPT4ge1xuICAgIGlmICghdGhpcy5faXNNb3VudGVkKSByZXR1cm47XG4gICAgY29uc3QgbGFuZyA9IGU/LmRldGFpbD8ubGFuZyB8fCBlPy5kZXRhaWw/Lmxhbmd1YWdlIHx8IGU/LmRldGFpbD8uY29kZTtcbiAgICBjb25zdCBub3JtYWxpemVkID0gbm9ybWFsaXplTGFuZyhsYW5nKTtcbiAgICBpZiAobm9ybWFsaXplZCAhPT0gdGhpcy5zdGF0ZS5jdXJyZW50TGFuZykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRMYW5nOiBub3JtYWxpemVkIH0pO1xuICAgIH1cbiAgfTtcblxuICAvKiAtLS0gcGlubmVkIHBvcHVwIGhlbHBlcnMgLS0tICovXG4gIHByaXZhdGUgaXNEYXNoYm9hcmRFbWJlZGRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gU3RyaW5nKHRoaXMucHJvcHMuaWQgfHwgXCJcIikuZW5kc1dpdGgoXCItcG9wdXBcIik7XG4gIH1cblxuICAvKiogQ3JvcCBvdmVybGF5IHRvcCBpbiB2aWV3cG9ydCBjb29yZHM7IG51bGwgd2hlbiBub3QgdXNlZC4gKi9cbiAgcHJpdmF0ZSBnZXRDcm9wT3ZlcmxheVRvcCgpOiBudW1iZXIgfCBudWxsIHtcbiAgICBpZiAoIXRoaXMuaXNEYXNoYm9hcmRFbWJlZGRlZCgpKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IGNyb3BFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5hZ3JpLWRhc2hib2FyZC1jcm9wLW92ZXJsYXkuYWdyaS1kYXNoYm9hcmQtbWFuYWdlZC1jcm9wXCIsXG4gICAgKSBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgaWYgKGNyb3BFbCkge1xuICAgICAgY29uc3QgcmVjdCA9IGNyb3BFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGlmIChyZWN0LmhlaWdodCA+IDAgJiYgTnVtYmVyLmlzRmluaXRlKHJlY3QudG9wKSkge1xuICAgICAgICByZXR1cm4gcmVjdC50b3A7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGdldE1hcEFyZWFSZWN0KFxuICAgIHZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldyxcbiAgKTogRE9NUmVjdCB7XG4gICAgaWYgKHRoaXMuaXNEYXNoYm9hcmRFbWJlZGRlZCgpKSB7XG4gICAgICBjb25zdCBtYXBTbG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIuYWdyaS1kYXNoYm9hcmQtbWFwLXNsb3RcIixcbiAgICAgICkgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgICAgaWYgKG1hcFNsb3QpIHtcbiAgICAgICAgY29uc3Qgc2xvdFJlY3QgPSBtYXBTbG90LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAoc2xvdFJlY3Qud2lkdGggPiA0MCAmJiBzbG90UmVjdC5oZWlnaHQgPiA0MCkge1xuICAgICAgICAgIHJldHVybiBzbG90UmVjdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKHZpZXcuY29udGFpbmVyIGFzIEhUTUxFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfVxuXG4gIHByaXZhdGUgb2JzZXJ2ZU1hcEFyZWFSZXNpemUoXG4gICAgdmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LFxuICApOiB2b2lkIHtcbiAgICB0aGlzLm1hcEFyZWFSZXNpemVPYnNlcnZlcj8uZGlzY29ubmVjdCgpO1xuICAgIHRoaXMubWFwQXJlYVJlc2l6ZU9ic2VydmVyID0gbnVsbDtcblxuICAgIGlmICh0eXBlb2YgUmVzaXplT2JzZXJ2ZXIgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcblxuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuaXNEYXNoYm9hcmRFbWJlZGRlZCgpXG4gICAgICA/ICgoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBcIi5hZ3JpLWRhc2hib2FyZC1tYXAtc2xvdFwiLFxuICAgICAgICApIGFzIEhUTUxFbGVtZW50IHwgbnVsbCkgfHwgKHZpZXcuY29udGFpbmVyIGFzIEhUTUxFbGVtZW50IHwgbnVsbCkpXG4gICAgICA6ICh2aWV3LmNvbnRhaW5lciBhcyBIVE1MRWxlbWVudCB8IG51bGwpO1xuICAgIGlmICghdGFyZ2V0KSByZXR1cm47XG5cbiAgICB0aGlzLm1hcEFyZWFSZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiB7XG4gICAgICB0aGlzLnNjaGVkdWxlUG9wdXBMYXlvdXQoKTtcbiAgICB9KTtcbiAgICB0aGlzLm1hcEFyZWFSZXNpemVPYnNlcnZlci5vYnNlcnZlKHRhcmdldCk7XG4gIH1cblxuICBwcml2YXRlIGdldEVmZmVjdGl2ZU1hcEJvdHRvbShcbiAgICB2aWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsXG4gICAgZ2FwID0gNCxcbiAgKTogbnVtYmVyIHtcbiAgICBjb25zdCByZWN0ID0gdGhpcy5nZXRNYXBBcmVhUmVjdCh2aWV3KTtcbiAgICBjb25zdCBjcm9wVG9wID0gdGhpcy5nZXRDcm9wT3ZlcmxheVRvcCgpO1xuICAgIGlmIChjcm9wVG9wICE9IG51bGwgJiYgY3JvcFRvcCA+IHJlY3QudG9wICYmIGNyb3BUb3AgPD0gcmVjdC5ib3R0b20gKyAyKSB7XG4gICAgICByZXR1cm4gY3JvcFRvcCAtIGdhcDtcbiAgICB9XG4gICAgcmV0dXJuIHJlY3QuYm90dG9tIC0gZ2FwO1xuICB9XG5cbiAgcHJpdmF0ZSBtZWFzdXJlUG9wdXBIZWlnaHQocG9wdXBFbDogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICAgIGNvbnN0IGhlYWRlciA9IHBvcHVwRWwucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLmFncmkzLXBvcHVwLWhlYWRlclwiLFxuICAgICkgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBwb3B1cEVsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5hZ3JpMy1wb3B1cC1jb250ZW50XCIsXG4gICAgKSBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgY29uc3QgaGVhZGVySCA9IGhlYWRlcj8ub2Zmc2V0SGVpZ2h0IHx8IDA7XG4gICAgY29uc3QgY29udGVudEggPSBjb250ZW50Py5zY3JvbGxIZWlnaHQgfHwgY29udGVudD8ub2Zmc2V0SGVpZ2h0IHx8IDA7XG4gICAgY29uc3QgbmF0dXJhbCA9IGhlYWRlckggKyBjb250ZW50SDtcbiAgICBpZiAobmF0dXJhbCA+IDApIHJldHVybiBNYXRoLmNlaWwobmF0dXJhbCk7XG5cbiAgICBjb25zdCByZWN0ID0gcG9wdXBFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gcmVjdC5oZWlnaHQgPiAwID8gTWF0aC5jZWlsKHJlY3QuaGVpZ2h0KSA6IE1hdGguY2VpbChwb3B1cEVsLnNjcm9sbEhlaWdodCk7XG4gIH1cblxuICBwcml2YXRlIHBvcHVwUG9zaXRpb25zRXF1YWwoXG4gICAgYTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgICBiOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sXG4gICAgZXBzaWxvbiA9IDEsXG4gICk6IGJvb2xlYW4ge1xuICAgIGlmICghYSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiAoXG4gICAgICBNYXRoLmFicyhhLnggLSBiLngpIDw9IGVwc2lsb24gJiYgTWF0aC5hYnMoYS55IC0gYi55KSA8PSBlcHNpbG9uXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlQb3B1cFBvc2l0aW9uID0gKHBvczogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMucG9wdXBQb3NpdGlvbnNFcXVhbCh0aGlzLnN0YXRlLnBvcHVwUG9zaXRpb24sIHBvcykpIHJldHVybjtcbiAgICB0aGlzLnNldFN0YXRlKHsgcG9wdXBQb3NpdGlvbjogcG9zIH0pO1xuICB9O1xuXG4gIHByaXZhdGUgc2NoZWR1bGVQb3B1cExheW91dCA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5faXNEcmFnZ2luZ1BvcHVwKSByZXR1cm47XG4gICAgaWYgKHRoaXMuX3BvcHVwTGF5b3V0VGltZXIpIGNsZWFyVGltZW91dCh0aGlzLl9wb3B1cExheW91dFRpbWVyKTtcbiAgICB0aGlzLl9wb3B1cExheW91dFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9wb3B1cExheW91dFRpbWVyID0gbnVsbDtcbiAgICAgIHRoaXMucmVwb3NpdGlvblBpbm5lZElmTmVlZGVkKCk7XG4gICAgfSwgNDgpO1xuICB9O1xuXG4gIHByaXZhdGUgc2NoZWR1bGVQb3B1cExheW91dEFmdGVyQ29udGVudCA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5fcG9wdXBMYXlvdXRSYWYpIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuX3BvcHVwTGF5b3V0UmFmKTtcbiAgICB0aGlzLl9wb3B1cExheW91dFJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICB0aGlzLl9wb3B1cExheW91dFJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3BvcHVwTGF5b3V0UmFmID0gMDtcbiAgICAgICAgdGhpcy5yZXBvc2l0aW9uUGlubmVkSWZOZWVkZWQoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHByaXZhdGUgY2FsY3VsYXRlUGlubmVkUG9zaXRpb24gPSAoXG4gICAgdmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LFxuICApOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gPT4ge1xuICAgIGNvbnN0IHJlY3QgPSB0aGlzLmdldE1hcEFyZWFSZWN0KHZpZXcpO1xuICAgIGNvbnN0IG1hcmdpbiA9IHRoaXMuUE9QVVBfTUFSR0lOO1xuICAgIGNvbnN0IHBvcHVwV2lkdGggPSB0aGlzLmdldFBvcHVwV2lkdGgodmlldyk7XG4gICAgaWYgKHRoaXMuaXNEYXNoYm9hcmRFbWJlZGRlZCgpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB4OiByZWN0LnJpZ2h0IC0gcG9wdXBXaWR0aCAtIHRoaXMuREFTSEJPQVJEX1BPUFVQX0hPUklaT05UQUxfSU5TRVQsXG4gICAgICAgIHk6IHJlY3QudG9wICsgdGhpcy5EQVNIQk9BUkRfUE9QVVBfVkVSVElDQUxfSU5TRVQsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB4OiByZWN0LnJpZ2h0IC0gcG9wdXBXaWR0aCAtIG1hcmdpbixcbiAgICAgIHk6IHJlY3QudG9wICsgbWFyZ2luLFxuICAgIH07XG4gIH07XG5cbiAgcHJpdmF0ZSByZXBvc2l0aW9uUGlubmVkSWZOZWVkZWQgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLl9pc01vdW50ZWQpIHJldHVybjtcbiAgICBpZiAoIXRoaXMuc3RhdGUuc2hvd1BvcHVwKSByZXR1cm47XG4gICAgaWYgKHRoaXMuX2lzRHJhZ2dpbmdQb3B1cCkgcmV0dXJuO1xuICAgIGNvbnN0IHZpZXcgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3Py52aWV3O1xuICAgIGlmICghdmlldykgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUucGluVG9Db3JuZXIpIHtcbiAgICAgIGNvbnN0IHBvcyA9IHRoaXMuY2FsY3VsYXRlUGlubmVkUG9zaXRpb24odmlldyk7XG4gICAgICBpZiAodGhpcy5wb3B1cFBvc2l0aW9uc0VxdWFsKHRoaXMuc3RhdGUucG9wdXBQb3NpdGlvbiwgcG9zKSkge1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcG9wdXBQb3NpdGlvbjogcG9zIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5zdGF0ZS5wb3B1cFBvc2l0aW9uKSByZXR1cm47XG4gICAgY29uc3QgY2xhbXBlZCA9IHRoaXMuY2xhbXBQb3B1cFRvTWFwQ29udGFpbmVyKFxuICAgICAgdGhpcy5zdGF0ZS5wb3B1cFBvc2l0aW9uLFxuICAgICAgdmlldyxcbiAgICApO1xuICAgIHRoaXMuYXBwbHlQb3B1cFBvc2l0aW9uKGNsYW1wZWQpO1xuICB9O1xuXG4gIHByaXZhdGUgdG9nZ2xlUGluVG9Db3JuZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIChwcmV2KSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHQgPSAhcHJldi5waW5Ub0Nvcm5lcjtcbiAgICAgICAgY29uc3QgdmlldyA9IHRoaXMuc3RhdGUuamltdU1hcFZpZXc/LnZpZXc7XG5cbiAgICAgICAgbGV0IHBvcyA9IHByZXYucG9wdXBQb3NpdGlvbjtcblxuICAgICAgICBpZiAobmV4dCkge1xuICAgICAgICAgIGlmICh2aWV3KSBwb3MgPSB0aGlzLmNhbGN1bGF0ZVBpbm5lZFBvc2l0aW9uKHZpZXcpO1xuICAgICAgICB9IGVsc2UgaWYgKHZpZXcgJiYgcHJldi5jbGlja1NjcmVlblBvaW50KSB7XG4gICAgICAgICAgcG9zID0gdGhpcy5jYWxjdWxhdGVQb3B1cFBvc2l0aW9uKHByZXYuY2xpY2tTY3JlZW5Qb2ludCwgdmlldyk7XG4gICAgICAgIH0gZWxzZSBpZiAodmlldykge1xuICAgICAgICAgIGNvbnN0IHJlY3QgPSAodmlldy5jb250YWluZXIgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIHBvcyA9IHtcbiAgICAgICAgICAgIHg6IHJlY3QubGVmdCArIHJlY3Qud2lkdGggLyAyLFxuICAgICAgICAgICAgeTogcmVjdC50b3AgKyByZWN0LmhlaWdodCAvIDIsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGluVG9Db3JuZXI6IG5leHQsXG4gICAgICAgICAgcG9wdXBQb3NpdGlvbjogcG9zLFxuICAgICAgICAgIGNoYXJ0RXhwYW5kZWQ6IG5leHQgPyB0cnVlIDogcHJldi5jaGFydEV4cGFuZGVkLFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZVBvcHVwTGF5b3V0QWZ0ZXJDb250ZW50KCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dQb3B1cCkge1xuICAgICAgICAgIHRoaXMuYnJvYWRjYXN0UG9wdXBWaXNpYmlsaXR5KHRydWUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICk7XG4gIH07XG5cbiAgcHJpdmF0ZSBoYW5kbGVPdXRzaWRlQ2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuc2hvd1BvcHVwIHx8ICF0aGlzLl9wb3B1cFJlZi5jdXJyZW50KSByZXR1cm47XG4gICAgLy8gQ29sbGFwc2VkIGNoaXAgc3RheXMgdW50aWwgYW4gZW1wdHktbWFwIGRlc2VsZWN0IC8gZ2VvZ3JhcGh5IHJlc2V0LlxuICAgIGlmICh0aGlzLnN0YXRlLnBvcHVwTWluaW1pemVkKSByZXR1cm47XG5cbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgTm9kZSB8IG51bGw7XG4gICAgaWYgKCF0YXJnZXQgfHwgdGhpcy5fcG9wdXBSZWYuY3VycmVudC5jb250YWlucyh0YXJnZXQpKSByZXR1cm47XG5cbiAgICBjb25zdCBtYXBDb250YWluZXIgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3Py52aWV3Py5jb250YWluZXI7XG4gICAgaWYgKG1hcENvbnRhaW5lciAmJiBtYXBDb250YWluZXIuY29udGFpbnModGFyZ2V0KSkgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMuaXNEYXNoYm9hcmRFbWJlZGRlZCgpKSB7XG4gICAgICBjb25zdCBkYXNoYm9hcmRVaSA9ICh0YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3Q/LihcbiAgICAgICAgXCIuYWdyaS1kYXNoYm9hcmQtdjMsIC5hZ3JpLWRhc2hib2FyZC1jcm9wLW92ZXJsYXksIC5hZ3JpLWRhc2hib2FyZC1oZWFkZXIsIC5hZ3JpLWRhc2hib2FyZC1sZWZ0LXBhbmVsLCAuYWdyaS1kYXNoYm9hcmQtYm90dG9tLXJvdywgLmFncmktZGFzaGJvYXJkLXdpZGdldC1zbG90LCAuYWdyaS1kYXNoYm9hcmQtaW5kaWNhdG9yLW92ZXJsYXksIC5hZ3JpLWRhc2hib2FyZC1kYXRlLWluZGV4LW92ZXJsYXksIC5hZ3JpLXYyMC1mbG9hdGluZy1vdmVybGF5XCIsXG4gICAgICApO1xuICAgICAgaWYgKGRhc2hib2FyZFVpKSByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gT3V0c2lkZSBkYXNoYm9hcmQgY2hyb21lIOKGkiBjb2xsYXBzZSBpbnN0ZWFkIG9mIHdpcGluZyBzZWxlY3Rpb24uXG4gICAgdGhpcy5taW5pbWl6ZVBvcHVwKCk7XG4gIH07XG5cbiAgcHJpdmF0ZSBvblBvcHVwSGVhZGVyTW91c2VEb3duID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgLy8gQWxsb3cgbm9ybWFsIGJlaGF2aW9yIGZvciBjb250cm9scyBpbnNpZGUgaGVhZGVyLlxuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICh0YXJnZXQ/LmNsb3Nlc3QoXCJidXR0b24sIGEsIGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCIpKSByZXR1cm47XG4gICAgaWYgKGUuYnV0dG9uICE9PSAwKSByZXR1cm47XG5cbiAgICBjb25zdCBwb3B1cEVsID0gdGhpcy5fcG9wdXBSZWYuY3VycmVudDtcbiAgICBpZiAoIXBvcHVwRWwpIHJldHVybjtcblxuICAgIGNvbnN0IHJlY3QgPSBwb3B1cEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMuX2lzRHJhZ2dpbmdQb3B1cCA9IHRydWU7XG4gICAgdGhpcy5fcG9wdXBEcmFnT2Zmc2V0ID0ge1xuICAgICAgeDogZS5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgeTogZS5jbGllbnRZIC0gcmVjdC50b3AsXG4gICAgfTtcblxuICAgIGlmICh0aGlzLnN0YXRlLnBpblRvQ29ybmVyKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcGluVG9Db3JuZXI6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMub25Qb3B1cERyYWdNb3ZlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5vblBvcHVwRHJhZ0VuZCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIHByaXZhdGUgb25Qb3B1cERyYWdNb3ZlID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIXRoaXMuX2lzRHJhZ2dpbmdQb3B1cCB8fCAhdGhpcy5faXNNb3VudGVkKSByZXR1cm47XG4gICAgY29uc3QgdmlldyA9IHRoaXMuc3RhdGUuamltdU1hcFZpZXc/LnZpZXc7XG4gICAgaWYgKCF2aWV3KSByZXR1cm47XG5cbiAgICBjb25zdCBuZXh0UG9zID0ge1xuICAgICAgeDogZS5jbGllbnRYIC0gdGhpcy5fcG9wdXBEcmFnT2Zmc2V0LngsXG4gICAgICB5OiBlLmNsaWVudFkgLSB0aGlzLl9wb3B1cERyYWdPZmZzZXQueSxcbiAgICB9O1xuICAgIGNvbnN0IGNsYW1wZWQgPSB0aGlzLmNsYW1wUG9wdXBUb01hcENvbnRhaW5lcihuZXh0UG9zLCB2aWV3KTtcbiAgICB0aGlzLmFwcGx5UG9wdXBQb3NpdGlvbihjbGFtcGVkKTtcbiAgfTtcblxuICBwcml2YXRlIG9uUG9wdXBEcmFnRW5kID0gKCkgPT4ge1xuICAgIHRoaXMuX2lzRHJhZ2dpbmdQb3B1cCA9IGZhbHNlO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMub25Qb3B1cERyYWdNb3ZlKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5vblBvcHVwRHJhZ0VuZCk7XG4gIH07XG4gIC8qKiDinIUgTkVXOiBzYWZlbHkgZGV0ZWN0IHdoZXRoZXIgdGhpcyBsYXllciBzdXBwb3J0cyBhdHRhY2htZW50cyAqL1xuICBwcml2YXRlIGxheWVyU3VwcG9ydHNBdHRhY2htZW50cyhcbiAgICBsYXllcjogX19lc3JpLkZlYXR1cmVMYXllciB8IEZlYXR1cmVMYXllciB8IG51bGwgfCB1bmRlZmluZWQsXG4gICk6IGJvb2xlYW4ge1xuICAgIGlmICghbGF5ZXIpIHJldHVybiBmYWxzZTtcblxuICAgIC8vIERpZmZlcmVudCBKU0FQSS9FQiBidWlsZHMgZXhwb3NlIGl0IHNsaWdodGx5IGRpZmZlcmVudGx5XG4gICAgY29uc3QgYW55TGF5ZXI6IGFueSA9IGxheWVyIGFzIGFueTtcblxuICAgIC8vIENvbW1vbiBzaWduYWxzXG4gICAgaWYgKHR5cGVvZiBhbnlMYXllci5zdXBwb3J0c0F0dGFjaG1lbnRzID09PSBcImJvb2xlYW5cIilcbiAgICAgIHJldHVybiBhbnlMYXllci5zdXBwb3J0c0F0dGFjaG1lbnRzO1xuXG4gICAgY29uc3QgY2FwID0gYW55TGF5ZXIuY2FwYWJpbGl0aWVzO1xuICAgIGNvbnN0IHN1cHBvcnRlZCA9XG4gICAgICBjYXA/LmRhdGE/LnN1cHBvcnRzQXR0YWNobWVudHMgPz9cbiAgICAgIGNhcD8uZGF0YT8uc3VwcG9ydHNBdHRhY2htZW50ID8/XG4gICAgICBjYXA/Lm9wZXJhdGlvbnM/LnN1cHBvcnRzQXR0YWNobWVudHMgPz9cbiAgICAgIGNhcD8ub3BlcmF0aW9ucz8uc3VwcG9ydHNBdHRhY2htZW50O1xuXG4gICAgaWYgKHR5cGVvZiBzdXBwb3J0ZWQgPT09IFwiYm9vbGVhblwiKSByZXR1cm4gc3VwcG9ydGVkO1xuXG4gICAgLy8gVW5rbm93biA9PiBhc3N1bWUgZmFsc2UgdG8gYXZvaWQgdWdseSB3YXJuaW5nXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLSBIaWdobGlnaHQgbWFuYWdlbWVudCAtLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgcHJpdmF0ZSBzZXR1cEhpZ2hsaWdodExheWVyID0gKHZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldykgPT4ge1xuICAgIGlmICghdGhpcy5faGlnaGxpZ2h0TGF5ZXIpIHtcbiAgICAgIHRoaXMuX2hpZ2hsaWdodExheWVyID0gbmV3IEdyYXBoaWNzTGF5ZXIoe1xuICAgICAgICBpZDogXCJhZ3JpLXBvbHlnb24taGlnaGxpZ2h0XCIsXG4gICAgICAgIHRpdGxlOiBcIlNlbGVjdGVkIFBvbHlnb24gSGlnaGxpZ2h0XCIsXG4gICAgICB9KTtcbiAgICAgIHZpZXcubWFwLmFkZCh0aGlzLl9oaWdobGlnaHRMYXllcik7XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgaGlnaGxpZ2h0UG9seWdvbiA9IChnZW9tZXRyeTogX19lc3JpLkdlb21ldHJ5KSA9PiB7XG4gICAgaWYgKCF0aGlzLl9oaWdobGlnaHRMYXllciB8fCAhZ2VvbWV0cnkpIHJldHVybjtcbiAgICB0aGlzLmNsZWFySGlnaGxpZ2h0KCk7XG5cbiAgICAvLyBEcm9wIEdyYWZmL3RhYmxlIHNlbGVjdGlvbiBncmFwaGljcyBzbyBvbmx5IG9uZSBvdXRsaW5lIGlzIHZpc2libGUuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXc/LnZpZXc/LmdyYXBoaWNzPy5yZW1vdmVBbGw/LigpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgLyogaWdub3JlICovXG4gICAgfVxuXG4gICAgLy8gV2lkZSB0cmFuc2x1Y2VudCBoYWxvIHBsdXMgYSBicmlnaHQgY3lhbiBjb3JlIGtlZXBzIHRoZSBzZWxlY3RlZCBmaWVsZFxuICAgIC8vIHZpc2libGUgb3ZlciBib3RoIGxpZ2h0IGFuZCBkYXJrIHNhdGVsbGl0ZSBpbWFnZXJ5LlxuICAgIGNvbnN0IGhhbG9TeW1ib2wgPSBuZXcgU2ltcGxlRmlsbFN5bWJvbCh7XG4gICAgICBjb2xvcjogWzAsIDAsIDAsIDBdLFxuICAgICAgb3V0bGluZTogbmV3IFNpbXBsZUxpbmVTeW1ib2woe1xuICAgICAgICBjb2xvcjogWzAsIDIyOSwgMjU1LCAwLjMyXSxcbiAgICAgICAgd2lkdGg6IDksXG4gICAgICAgIHN0eWxlOiBcInNvbGlkXCIsXG4gICAgICB9KSxcbiAgICB9KTtcbiAgICBjb25zdCBoaWdobGlnaHRTeW1ib2wgPSBuZXcgU2ltcGxlRmlsbFN5bWJvbCh7XG4gICAgICBjb2xvcjogWzAsIDAsIDAsIDBdLFxuICAgICAgb3V0bGluZTogbmV3IFNpbXBsZUxpbmVTeW1ib2woe1xuICAgICAgICBjb2xvcjogWzEyOCwgMjQ1LCAyNTUsIDFdLFxuICAgICAgICB3aWR0aDogMyxcbiAgICAgICAgc3R5bGU6IFwic29saWRcIixcbiAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgdGhpcy5faGlnaGxpZ2h0SGFsb0dyYXBoaWMgPSBuZXcgR3JhcGhpYyh7IGdlb21ldHJ5LCBzeW1ib2w6IGhhbG9TeW1ib2wgfSk7XG4gICAgdGhpcy5faGlnaGxpZ2h0R3JhcGhpYyA9IG5ldyBHcmFwaGljKHsgZ2VvbWV0cnksIHN5bWJvbDogaGlnaGxpZ2h0U3ltYm9sIH0pO1xuICAgIHRoaXMuX2hpZ2hsaWdodExheWVyLmFkZE1hbnkoW1xuICAgICAgdGhpcy5faGlnaGxpZ2h0SGFsb0dyYXBoaWMsXG4gICAgICB0aGlzLl9oaWdobGlnaHRHcmFwaGljLFxuICAgIF0pO1xuICB9O1xuXG4gIHByaXZhdGUgY2xlYXJIaWdobGlnaHQgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLl9oaWdobGlnaHRMYXllcikgcmV0dXJuO1xuICAgIGlmICh0aGlzLl9oaWdobGlnaHRIYWxvR3JhcGhpYykge1xuICAgICAgdGhpcy5faGlnaGxpZ2h0TGF5ZXIucmVtb3ZlKHRoaXMuX2hpZ2hsaWdodEhhbG9HcmFwaGljKTtcbiAgICAgIHRoaXMuX2hpZ2hsaWdodEhhbG9HcmFwaGljID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hpZ2hsaWdodEdyYXBoaWMpIHtcbiAgICAgIHRoaXMuX2hpZ2hsaWdodExheWVyLnJlbW92ZSh0aGlzLl9oaWdobGlnaHRHcmFwaGljKTtcbiAgICAgIHRoaXMuX2hpZ2hsaWdodEdyYXBoaWMgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIHJlc3RvcmVFeHRlbnRCZWZvcmVTZWxlY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgdmlldyA9IHRoaXMuc3RhdGUuamltdU1hcFZpZXc/LnZpZXc7XG4gICAgY29uc3Qgc2F2ZWRFeHRlbnQgPSB0aGlzLl9leHRlbnRCZWZvcmVTZWxlY3Rpb247XG4gICAgdGhpcy5fZXh0ZW50QmVmb3JlU2VsZWN0aW9uID0gbnVsbDtcbiAgICBjb25zdCB6b29tVG8gPSB0aGlzLnByb3BzLmNvbmZpZz8uc2V0dGluZ3M/Lnpvb21Ub1NlbGVjdGlvbiAhPT0gZmFsc2U7XG4gICAgaWYgKCF6b29tVG8gfHwgIXNhdmVkRXh0ZW50IHx8ICF2aWV3KSByZXR1cm47XG4gICAgdHJ5IHtcbiAgICAgIHZvaWQgdmlldy5nb1RvKHNhdmVkRXh0ZW50LCB7IGR1cmF0aW9uOiA0MDAgfSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAvKiBpZ25vcmUgKi9cbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBjbGVhbnVwSGlnaGxpZ2h0ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLl9oaWdobGlnaHRMYXllcikge1xuICAgICAgY29uc3QgdmlldyA9IHRoaXMuc3RhdGUuamltdU1hcFZpZXc/LnZpZXc7XG4gICAgICBpZiAodmlldyAmJiB2aWV3Lm1hcCkge1xuICAgICAgICB2aWV3Lm1hcC5yZW1vdmUodGhpcy5faGlnaGxpZ2h0TGF5ZXIpO1xuICAgICAgfVxuICAgICAgdGhpcy5faGlnaGxpZ2h0TGF5ZXIgPSBudWxsO1xuICAgICAgdGhpcy5faGlnaGxpZ2h0R3JhcGhpYyA9IG51bGw7XG4gICAgICB0aGlzLl9oaWdobGlnaHRIYWxvR3JhcGhpYyA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuX2V4dGVudEJlZm9yZVNlbGVjdGlvbiA9IG51bGw7XG4gIH07XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLSBNYXAgd2lyaW5nIC0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICBwcml2YXRlIGdldExpbmtlZE1hcFdpZGdldElkKCk6IHN0cmluZyB8IG51bGwge1xuICAgIGNvbnN0IGlkcyA9IHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzIGFzIGFueTtcbiAgICBjb25zdCBsaXN0ID0gaWRzPy5sZW5ndGhcbiAgICAgID8gaWRzLmFzTXV0YWJsZT8uKCkgfHwgaWRzLnRvQXJyYXk/LigpIHx8IGlkc1xuICAgICAgOiBbXTtcbiAgICBjb25zdCBmaXJzdCA9IEFycmF5LmlzQXJyYXkobGlzdCkgPyBsaXN0WzBdIDogbnVsbDtcbiAgICBpZiAoZmlyc3QpIHJldHVybiBTdHJpbmcoZmlyc3QpO1xuICAgIGNvbnN0IGhvc3RJZCA9IFN0cmluZyh0aGlzLnByb3BzLmlkIHx8IFwiXCIpLnJlcGxhY2UoLy1wb3B1cCQvLCBcIlwiKTtcbiAgICByZXR1cm4gZGlzY292ZXJNYXBXaWRnZXRJZEluQXBwKHtcbiAgICAgIGhvc3RXaWRnZXRJZDogaG9zdElkLFxuICAgICAgZ2V0U2xvdEVsZW1lbnQ6ICgpID0+IHtcbiAgICAgICAgaWYgKGhvc3RJZCkge1xuICAgICAgICAgIGNvbnN0IHNjb3BlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLndpZGdldC1yZW5kZXJlcltkYXRhLXdpZGdldGlkPVwiJHtob3N0SWR9XCJdIC5hZ3JpLWRhc2hib2FyZC1tYXAtc2xvdGAsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoc2NvcGVkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHJldHVybiBzY29wZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmFsbGJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFncmktZGFzaGJvYXJkLW1hcC1zbG90XCIpO1xuICAgICAgICByZXR1cm4gZmFsbGJhY2sgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA/IGZhbGxiYWNrIDogbnVsbDtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldE1hcFZpZXdGcm9tTWFuYWdlcihcbiAgICBtYXBXaWRnZXRJZDogc3RyaW5nIHwgbnVsbCxcbiAgKTogSmltdU1hcFZpZXcgfCBudWxsIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbWFuYWdlciA9IE1hcFZpZXdNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgICBpZiAoIW1hbmFnZXIpIHJldHVybiBudWxsO1xuICAgICAgaWYgKG1hcFdpZGdldElkKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gbWFuYWdlci5nZXRKaW11TWFwVmlld0dyb3VwKG1hcFdpZGdldElkKTtcbiAgICAgICAgY29uc3QgYWN0aXZlID0gZ3JvdXA/LmdldEFjdGl2ZUppbXVNYXBWaWV3Py4oKTtcbiAgICAgICAgaWYgKGFjdGl2ZT8udmlldykgcmV0dXJuIGFjdGl2ZTtcbiAgICAgICAgY29uc3QgZ3JvdXBWaWV3cyA9IGdyb3VwPy5nZXRBbGxKaW11TWFwVmlld3M/LigpIHx8IFtdO1xuICAgICAgICBjb25zdCBmaXJzdExvYWRlZCA9IGdyb3VwVmlld3MuZmluZCgodmlldzogYW55KSA9PiB2aWV3Py52aWV3KTtcbiAgICAgICAgaWYgKGZpcnN0TG9hZGVkKSByZXR1cm4gZmlyc3RMb2FkZWQ7XG4gICAgICB9XG4gICAgICBjb25zdCBhbGwgPSBtYW5hZ2VyLmdldEFsbEppbXVNYXBWaWV3cz8uKCkgfHwgW107XG4gICAgICByZXR1cm4gKFxuICAgICAgICBhbGwuZmluZCgodmlldzogYW55KSA9PiB2aWV3Py52aWV3ICYmIHZpZXc/LmlzQWN0aXZlICE9PSBmYWxzZSkgfHxcbiAgICAgICAgYWxsLmZpbmQoKHZpZXc6IGFueSkgPT4gdmlldz8udmlldykgfHxcbiAgICAgICAgbnVsbFxuICAgICAgKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTWFwVmlld1JlYWR5ID0gKGV2ZW50OiBFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IG1hcFdpZGdldElkID0gKGV2ZW50IGFzIEN1c3RvbUV2ZW50PHsgbWFwV2lkZ2V0SWQ/OiBzdHJpbmcgfT4pLmRldGFpbFxuICAgICAgPy5tYXBXaWRnZXRJZDtcbiAgICBjb25zdCBsaW5rZWQgPSB0aGlzLmdldExpbmtlZE1hcFdpZGdldElkKCk7XG4gICAgaWYgKG1hcFdpZGdldElkICYmIGxpbmtlZCAmJiBtYXBXaWRnZXRJZCAhPT0gbGlua2VkKSByZXR1cm47XG4gICAgdGhpcy5zY2hlZHVsZU1hcFZpZXdGYWxsYmFjaygpO1xuICB9O1xuXG4gIHByaXZhdGUgc2NoZWR1bGVNYXBWaWV3RmFsbGJhY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgLy8gQWxyZWFkeSBoYXZlIGEgbGl2ZSBtYXAgdmlldyDigJQgZG8gTk9UIHJlLWVudGVyIG9uQWN0aXZlVmlld0NoYW5nZVxuICAgIC8vICh0aGF0IHBhdGggc2V0U3RhdGUg4oaSIGluaXRpYWxpemVNYXBDb25uZWN0aW9uIOKGkiBzY2hlZHVsZU1hcFZpZXdGYWxsYmFja1xuICAgIC8vIGFuZCBmcmVlemVzIHRoZSBidWlsZGVyIHdpdGggUmVhY3QgIzE4NSB3aGVuIGZlYXR1cmVMYXllcnMgc3RheSBlbXB0eSkuXG4gICAgaWYgKHRoaXMuc3RhdGUuamltdU1hcFZpZXc/LnZpZXcpIHtcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXJzPy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU1hcEluaXRSZXRyeSh0aGlzLnN0YXRlLmppbXVNYXBWaWV3KTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbWFwV2lkZ2V0SWQgPSB0aGlzLmdldExpbmtlZE1hcFdpZGdldElkKCk7XG4gICAgY29uc3QgZnJvbU1hbmFnZXIgPSB0aGlzLmdldE1hcFZpZXdGcm9tTWFuYWdlcihtYXBXaWRnZXRJZCk7XG4gICAgaWYgKGZyb21NYW5hZ2VyPy52aWV3KSB7XG4gICAgICB0aGlzLm9uQWN0aXZlVmlld0NoYW5nZShmcm9tTWFuYWdlcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghbWFwV2lkZ2V0SWQpIHJldHVybjtcbiAgICBpZiAodGhpcy5tYXBWaWV3RmFsbGJhY2tUaW1lcikgY2xlYXJUaW1lb3V0KHRoaXMubWFwVmlld0ZhbGxiYWNrVGltZXIpO1xuICAgIHRoaXMubWFwVmlld0ZhbGxiYWNrVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubWFwVmlld0ZhbGxiYWNrVGltZXIgPSBudWxsO1xuICAgICAgaWYgKCF0aGlzLl9pc01vdW50ZWQpIHJldHVybjtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3Py52aWV3KSByZXR1cm47XG4gICAgICBjb25zdCBsYXRlID0gdGhpcy5nZXRNYXBWaWV3RnJvbU1hbmFnZXIobWFwV2lkZ2V0SWQpO1xuICAgICAgaWYgKGxhdGU/LnZpZXcpIHRoaXMub25BY3RpdmVWaWV3Q2hhbmdlKGxhdGUpO1xuICAgIH0sIDYwMCk7XG4gIH07XG5cbiAgcHJpdmF0ZSBzY2hlZHVsZU1hcEluaXRSZXRyeSA9IChqbXY6IEppbXVNYXBWaWV3KTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMubWFwSW5pdFJldHJ5Q291bnQgPj0gdGhpcy5tYXhNYXBJbml0UmV0cmllcykgcmV0dXJuO1xuICAgIGlmICh0aGlzLm1hcEluaXRSZXRyeVRpbWVyKSBjbGVhclRpbWVvdXQodGhpcy5tYXBJbml0UmV0cnlUaW1lcik7XG4gICAgdGhpcy5tYXBJbml0UmV0cnlDb3VudCArPSAxO1xuICAgIHRoaXMubWFwSW5pdFJldHJ5VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubWFwSW5pdFJldHJ5VGltZXIgPSBudWxsO1xuICAgICAgaWYgKCF0aGlzLl9pc01vdW50ZWQpIHJldHVybjtcbiAgICAgIHZvaWQgdGhpcy5pbml0aWFsaXplTWFwQ29ubmVjdGlvbihqbXYpO1xuICAgIH0sIDgwMCk7XG4gIH07XG5cbiAgcHJpdmF0ZSBleHBhbmRVc2VEYXRhU291cmNlRW50cmllcyh1c2VMaXN0OiBhbnlbXSk6IGFueVtdIHtcbiAgICBjb25zdCBkc01nciA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgY29uc3Qgb3V0OiBhbnlbXSA9IFtdO1xuICAgIGNvbnN0IHNlZW4gPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICAgIGZvciAoY29uc3QgdWRzIG9mIHVzZUxpc3QpIHtcbiAgICAgIGNvbnN0IGlkID0gU3RyaW5nKHVkcz8uZGF0YVNvdXJjZUlkIHx8IFwiXCIpO1xuICAgICAgaWYgKCFpZCB8fCBzZWVuLmhhcyhpZCkpIGNvbnRpbnVlO1xuICAgICAgc2Vlbi5hZGQoaWQpO1xuICAgICAgb3V0LnB1c2godWRzKTtcblxuICAgICAgY29uc3QgZHMgPSBkc01nci5nZXREYXRhU291cmNlKGlkKSBhcyBhbnk7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IGRzPy5nZXRDaGlsZERhdGFTb3VyY2VzPy4oKSB8fCBbXTtcbiAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4pIHtcbiAgICAgICAgY29uc3QgY2hpbGRJZCA9IFN0cmluZyhjaGlsZD8uaWQgfHwgXCJcIik7XG4gICAgICAgIGlmICghY2hpbGRJZCB8fCBzZWVuLmhhcyhjaGlsZElkKSkgY29udGludWU7XG4gICAgICAgIHNlZW4uYWRkKGNoaWxkSWQpO1xuICAgICAgICBvdXQucHVzaCh7IGRhdGFTb3VyY2VJZDogY2hpbGRJZCwgbWFpbkRhdGFTb3VyY2VJZDogaWQgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbiAgfVxuXG4gIHByaXZhdGUgYWRkUmVzb2x2ZWRMYXllciA9IChcbiAgICB0YXJnZXQ6IF9fZXNyaS5GZWF0dXJlTGF5ZXJbXSxcbiAgICBsYXllcktleVRvRHNJZDogUmVjb3JkPHN0cmluZywgc3RyaW5nPixcbiAgICBzZWVuOiBTZXQ8c3RyaW5nPixcbiAgICBsYXllcjogYW55LFxuICAgIGRzSWQ/OiBzdHJpbmcsXG4gICk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHF1ZXJ5YWJsZSA9IGdldFF1ZXJ5YWJsZUxheWVyKGxheWVyKSB8fCBsYXllcjtcbiAgICBpZiAoIWlzUXVlcnlhYmxlRmllbGRMYXllcihxdWVyeWFibGUpKSByZXR1cm47XG4gICAgY29uc3Qga2V5ID1cbiAgICAgIGdldEFncmlMYXllck1hcEtleShxdWVyeWFibGUpIHx8XG4gICAgICBTdHJpbmcocXVlcnlhYmxlLnVybCB8fCBxdWVyeWFibGUuaWQgfHwgXCJcIik7XG4gICAgaWYgKCFrZXkgfHwgc2Vlbi5oYXMoa2V5KSkgcmV0dXJuO1xuICAgIHNlZW4uYWRkKGtleSk7XG4gICAgdGFyZ2V0LnB1c2gocXVlcnlhYmxlIGFzIF9fZXNyaS5GZWF0dXJlTGF5ZXIpO1xuICAgIGlmIChkc0lkKSBsYXllcktleVRvRHNJZFtrZXldID0gZHNJZDtcbiAgfTtcblxuICBwcml2YXRlIGNvbGxlY3RMYXllcnNGcm9tRGF0YVNvdXJjZXMgPSAoXG4gICAgam12OiBKaW11TWFwVmlldyxcbiAgICB1c2VMaXN0OiBhbnlbXSxcbiAgKToge1xuICAgIGxheWVyczogX19lc3JpLkZlYXR1cmVMYXllcltdO1xuICAgIGxheWVyS2V5VG9Ec0lkOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xuICB9ID0+IHtcbiAgICBjb25zdCBsYXllcnM6IF9fZXNyaS5GZWF0dXJlTGF5ZXJbXSA9IFtdO1xuICAgIGNvbnN0IGxheWVyS2V5VG9Ec0lkOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG4gICAgY29uc3Qgc2VlbiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGNvbnN0IG1hcCA9IGptdj8udmlldz8ubWFwO1xuXG4gICAgZm9yIChjb25zdCB1ZHMgb2YgdXNlTGlzdCkge1xuICAgICAgY29uc3QgZHNJZCA9IFN0cmluZyh1ZHM/LmRhdGFTb3VyY2VJZCB8fCBcIlwiKTtcbiAgICAgIGlmICghZHNJZCkgY29udGludWU7XG5cbiAgICAgIGNvbnN0IGNhY2hlZERzID0gdGhpcy5zdGF0ZS5kYXRhU291cmNlc0J5SWQ/Lltkc0lkXSBhcyBhbnk7XG4gICAgICBpZiAoY2FjaGVkRHMpIHtcbiAgICAgICAgY29uc3QgY2FjaGVkTGF5ZXIgPVxuICAgICAgICAgIGNhY2hlZERzLmxheWVyIHx8XG4gICAgICAgICAgKHR5cGVvZiBjYWNoZWREcy5nZXRMYXllciA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICA/IGNhY2hlZERzLmdldExheWVyKClcbiAgICAgICAgICAgIDogbnVsbCk7XG4gICAgICAgIGNvbnN0IGxpdmUgPSB0aGlzLnRvTGl2ZU1hcExheWVyKGNhY2hlZExheWVyLCBtYXApO1xuICAgICAgICBpZiAobGl2ZSkgdGhpcy5hZGRSZXNvbHZlZExheWVyKGxheWVycywgbGF5ZXJLZXlUb0RzSWQsIHNlZW4sIGxpdmUsIGRzSWQpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkc01nciA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCk7XG4gICAgICBjb25zdCBkcyA9IGRzTWdyLmdldERhdGFTb3VyY2UoZHNJZCkgYXMgYW55O1xuICAgICAgaWYgKGRzKSB7XG4gICAgICAgIGNvbnN0IGRzTGF5ZXIgPVxuICAgICAgICAgICh0eXBlb2YgZHMuZ2V0TGF5ZXIgPT09IFwiZnVuY3Rpb25cIiA/IGRzLmdldExheWVyKCkgOiBudWxsKSB8fFxuICAgICAgICAgIGRzLmxheWVyO1xuICAgICAgICBjb25zdCBsaXZlID0gdGhpcy50b0xpdmVNYXBMYXllcihcbiAgICAgICAgICBnZXRRdWVyeWFibGVMYXllcihkc0xheWVyKSB8fCBkc0xheWVyLFxuICAgICAgICAgIG1hcCxcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGxpdmUpIHRoaXMuYWRkUmVzb2x2ZWRMYXllcihsYXllcnMsIGxheWVyS2V5VG9Ec0lkLCBzZWVuLCBsaXZlLCBkc0lkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBsYXllcnMsIGxheWVyS2V5VG9Ec0lkIH07XG4gIH07XG5cbiAgb25BY3RpdmVWaWV3Q2hhbmdlID0gKGppbXVNYXBWaWV3OiBKaW11TWFwVmlldykgPT4ge1xuICAgIHRoaXMuZGV0YWNoTWFwQ2xpY2soKTtcbiAgICB0aGlzLmNsZWFudXBIaWdobGlnaHQoKTtcblxuICAgIGlmICghamltdU1hcFZpZXcpIHtcbiAgICAgIHRoaXMubWFwQXJlYVJlc2l6ZU9ic2VydmVyPy5kaXNjb25uZWN0KCk7XG4gICAgICB0aGlzLm1hcEFyZWFSZXNpemVPYnNlcnZlciA9IG51bGw7XG4gICAgICB0aGlzLmNvbm5lY3RlZE1hcFZpZXdJZCA9IFwiXCI7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgamltdU1hcFZpZXc6IG51bGwsXG4gICAgICAgIGZlYXR1cmVMYXllcnM6IFtdLFxuICAgICAgICBvYmplY3RJZEZpZWxkOiBudWxsLFxuICAgICAgICBlcnJvcjogdGhpcy50cihcImVycm9yLm5vTWFwVmlld1wiKSxcbiAgICAgICAgZGVidWdJbmZvOiB7XG4gICAgICAgICAgLi4udGhpcy5zdGF0ZS5kZWJ1Z0luZm8sXG4gICAgICAgICAgbGF5ZXJJbmZvOiB0aGlzLnRyKFwiZXJyb3Iubm9NYXBWaWV3XCIpLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlVmlldyA9IGppbXVNYXBWaWV3LnZpZXc7XG4gICAgaWYgKGFjdGl2ZVZpZXcpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZU1hcEFyZWFSZXNpemUoYWN0aXZlVmlldyk7XG4gICAgfVxuXG4gICAgY29uc3Qgdmlld0lkID0gU3RyaW5nKFxuICAgICAgKGppbXVNYXBWaWV3IGFzIGFueSkuaWQgfHwgKGppbXVNYXBWaWV3IGFzIGFueSkubWFwV2lkZ2V0SWQgfHwgXCJcIixcbiAgICApO1xuICAgIC8vIFNhbWUgbWFwIGFscmVhZHkgd2lyZWQg4oCUIGRvIG5vdCBzZXRTdGF0ZSBhZ2FpbiAoY2F1c2VzIGZyZWV6ZSBsb29wcykuXG4gICAgaWYgKHZpZXdJZCAmJiB2aWV3SWQgPT09IHRoaXMuY29ubmVjdGVkTWFwVmlld0lkICYmIHRoaXMuc3RhdGUuamltdU1hcFZpZXcpIHtcbiAgICAgIGlmICghdGhpcy5fY2xpY2tIYW5kbGUpIHRoaXMuYXR0YWNoTWFwQ2xpY2soamltdU1hcFZpZXcpO1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLmZlYXR1cmVMYXllcnM/Lmxlbmd0aCkge1xuICAgICAgICB2b2lkIHRoaXMuaW5pdGlhbGl6ZU1hcENvbm5lY3Rpb24oamltdU1hcFZpZXcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNvbm5lY3RlZE1hcFZpZXdJZCA9IHZpZXdJZDtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBqaW11TWFwVmlldyB9LCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB2aWV3ID0gamltdU1hcFZpZXcudmlldztcbiAgICAgIGlmICghdmlldykgcmV0dXJuO1xuXG4gICAgICAvLyBBdHRhY2ggaW1tZWRpYXRlbHkgc28gdGhlIGZpcnN0IGZpZWxkIGNsaWNrIG5ldmVyIHJhY2VzIGxheWVyIHJlc29sdmUuXG4gICAgICB0aGlzLmF0dGFjaE1hcENsaWNrKGppbXVNYXBWaWV3KTtcblxuICAgICAgaWYgKHZpZXcucmVhZHkpIHtcbiAgICAgICAgdGhpcy5zZXR1cEhpZ2hsaWdodExheWVyKHZpZXcpO1xuICAgICAgICBhd2FpdCB0aGlzLmluaXRpYWxpemVNYXBDb25uZWN0aW9uKGppbXVNYXBWaWV3KTtcbiAgICAgICAgdGhpcy5yZXBvc2l0aW9uUGlubmVkSWZOZWVkZWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGggPSB2aWV3LndhdGNoKFwicmVhZHlcIiwgYXN5bmMgKHJlYWR5KSA9PiB7XG4gICAgICAgICAgaWYgKHJlYWR5KSB7XG4gICAgICAgICAgICBoLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhpcy5hdHRhY2hNYXBDbGljayhqaW11TWFwVmlldyk7XG4gICAgICAgICAgICB0aGlzLnNldHVwSGlnaGxpZ2h0TGF5ZXIodmlldyk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmluaXRpYWxpemVNYXBDb25uZWN0aW9uKGppbXVNYXBWaWV3KTtcbiAgICAgICAgICAgIHRoaXMucmVwb3NpdGlvblBpbm5lZElmTmVlZGVkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBwcml2YXRlIGluaXRpYWxpemVNYXBDb25uZWN0aW9uID0gYXN5bmMgKGptdjogSmltdU1hcFZpZXcpID0+IHtcbiAgICBpZiAoIXRoaXMuX2lzTW91bnRlZCkgcmV0dXJuO1xuICAgIGNvbnN0IHZpZXcgPSBqbXY/LnZpZXc7XG4gICAgaWYgKCF2aWV3IHx8ICF2aWV3Lm1hcCkgcmV0dXJuO1xuXG4gICAgY29uc3QgcmF3TGlzdCA9ICh0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzPy5hc011dGFibGU/LigpIGFzIGFueVtdKSB8fCBbXTtcbiAgICBjb25zdCB1c2VMaXN0ID0gdGhpcy5leHBhbmRVc2VEYXRhU291cmNlRW50cmllcyhyYXdMaXN0KTtcbiAgICAvLyBFbXB0eSB1c2VEYXRhU291cmNlcyBpcyBub3JtYWwgcmlnaHQgYWZ0ZXIgZHJvcCDigJQgcmVzb2x2ZSBtYXAgbGF5ZXJzIG9ubHkuXG4gICAgLy8gTmV2ZXIgYm91bmNlIHRocm91Z2ggc2NoZWR1bGVNYXBWaWV3RmFsbGJhY2sgaGVyZSAodGhhdCByZS1lbnRlcmVkXG4gICAgLy8gb25BY3RpdmVWaWV3Q2hhbmdlIGFuZCBmcm96ZSB0aGUgcGFnZSkuXG5cbiAgICB0aGlzLmRhdGFTb3VyY2VFbmdpbmUuc3luY1NlbGVjdGlvbihnZXRTZWxlY3RlZERzSWRzKHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMpKTtcblxuICAgIGNvbnN0IHJlc29sdmVkTGF5ZXJzOiBfX2VzcmkuRmVhdHVyZUxheWVyW10gPSBbXTtcbiAgICBjb25zdCBsYXllcktleVRvRHNJZDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuICAgIGNvbnN0IHNlZW4gPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICAgIGNvbnN0IG1hcExheWVycyA9IGdldEFsbEZlYXR1cmVMYXllcnNGcm9tTWFwKHZpZXcubWFwKTtcbiAgICAvLyBsb2FkKCkgcmVoeWRyYXRlcyBNYXBJbWFnZSBzdWJsYXllcnMgYW5kIGNhbiBkcm9wIHRoZWlyIHJ1bnRpbWVcbiAgICAvLyBkaXN0cmljdCBkZWZpbml0aW9uRXhwcmVzc2lvbiDigJQgc25hcHNob3QgYW5kIHJlcGFpciBzeW5jaHJvbm91c2x5IHNvXG4gICAgLy8gYSBjb25uZWN0L3JldHJ5IHRoYXQgb3ZlcmxhcHMgYSBmaWVsZCBjbGljayBuZXZlciBmbGFzaGVzIG90aGVyXG4gICAgLy8gZGlzdHJpY3RzJyBmaWVsZHMuXG4gICAgY29uc3QgZGVmaW5pdGlvblNuYXBzaG90ID0gdGhpcy5zbmFwc2hvdERlZmluaXRpb25FeHByZXNzaW9ucyhtYXBMYXllcnMpO1xuICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgbWFwTGF5ZXJzKSB7XG4gICAgICBhd2FpdCBzYWZlTG9hZE1hcExheWVyKGxheWVyKTtcbiAgICAgIHRoaXMuYWRkUmVzb2x2ZWRMYXllcihyZXNvbHZlZExheWVycywgbGF5ZXJLZXlUb0RzSWQsIHNlZW4sIGxheWVyKTtcbiAgICB9XG4gICAgdGhpcy5yZXN0b3JlRHJpZnRlZERlZmluaXRpb25FeHByZXNzaW9ucyhkZWZpbml0aW9uU25hcHNob3QpO1xuXG4gICAgaWYgKHVzZUxpc3QubGVuZ3RoKSB7XG4gICAgICBjb25zdCBmcm9tRHMgPSB0aGlzLmNvbGxlY3RMYXllcnNGcm9tRGF0YVNvdXJjZXMoam12LCB1c2VMaXN0KTtcbiAgICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgZnJvbURzLmxheWVycykge1xuICAgICAgICBjb25zdCBsaXZlID0gdGhpcy50b0xpdmVNYXBMYXllcihsYXllciwgdmlldy5tYXApIHx8IGxheWVyO1xuICAgICAgICBjb25zdCBrZXkgPSBnZXRBZ3JpTGF5ZXJNYXBLZXkobGl2ZSkgfHwgU3RyaW5nKGxpdmUudXJsIHx8IGxpdmUuaWQgfHwgXCJcIik7XG4gICAgICAgIGNvbnN0IGRzSWQgPSBmcm9tRHMubGF5ZXJLZXlUb0RzSWRba2V5XTtcbiAgICAgICAgdGhpcy5hZGRSZXNvbHZlZExheWVyKHJlc29sdmVkTGF5ZXJzLCBsYXllcktleVRvRHNJZCwgc2VlbiwgbGl2ZSwgZHNJZCk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3QgdXNlRHMgb2YgdXNlTGlzdCkge1xuICAgICAgICBjb25zdCBsYXllciA9IGF3YWl0IHRoaXMucmVzb2x2ZUZlYXR1cmVMYXllckZvclVzZURhdGFTb3VyY2Uoam12LCB1c2VEcyk7XG4gICAgICAgIGlmICghbGF5ZXIpIGNvbnRpbnVlO1xuXG4gICAgICAgIGF3YWl0IHNhZmVMb2FkTWFwTGF5ZXIobGF5ZXIpO1xuXG4gICAgICAgIGNvbnN0IGRzSWQgPSBTdHJpbmcodXNlRHM/LmRhdGFTb3VyY2VJZCB8fCBcIlwiKTtcbiAgICAgICAgY29uc3QgbGl2ZSA9IHRoaXMudG9MaXZlTWFwTGF5ZXIobGF5ZXIsIHZpZXcubWFwKSB8fCBsYXllcjtcbiAgICAgICAgdGhpcy5hZGRSZXNvbHZlZExheWVyKHJlc29sdmVkTGF5ZXJzLCBsYXllcktleVRvRHNJZCwgc2VlbiwgbGl2ZSwgZHNJZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9pc01vdW50ZWQpIHJldHVybjtcblxuICAgIGlmICghcmVzb2x2ZWRMYXllcnMubGVuZ3RoKSB7XG4gICAgICAvLyBTb2Z0IGZhaWwg4oCUIG1hcCBtYXkgc3RpbGwgYmUgbG9hZGluZyByZWdpb24teWVhciBzdWJsYXllcnMuIFJldHJ5XG4gICAgICAvLyBhIGZldyB0aW1lcyB3aXRob3V0IHJlLWVudGVyaW5nIG9uQWN0aXZlVmlld0NoYW5nZS5cbiAgICAgIC8vIFN0aWxsIGF0dGFjaCB0aGUgY2xpY2sgaGFuZGxlciBzbyB0aGUgZmlyc3QgZmllbGQgY2xpY2sgd29ya3MgYXMgc29vblxuICAgICAgLy8gYXMgbGl2ZSBNYXBJbWFnZSBzdWJsYXllcnMgYmVjb21lIGhpdHRhYmxlIHZpYSBnZXRDbGlja1RhcmdldExheWVycy5cbiAgICAgIGlmICghdGhpcy5fY2xpY2tIYW5kbGUpIHRoaXMuYXR0YWNoTWFwQ2xpY2soam12KTtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5zdGF0ZS5lcnJvciAhPT0gdGhpcy50cihcImVycm9yLnNlbGVjdGVkTGF5ZXJzTWlzc2luZ1wiKSB8fFxuICAgICAgICAodGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXJzPy5sZW5ndGggfHwgMCkgPiAwXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZmVhdHVyZUxheWVyczogW10sXG4gICAgICAgICAgb2JqZWN0SWRGaWVsZDogbnVsbCxcbiAgICAgICAgICBlcnJvcjogdXNlTGlzdC5sZW5ndGhcbiAgICAgICAgICAgID8gdGhpcy50cihcImVycm9yLnNlbGVjdGVkTGF5ZXJzTWlzc2luZ1wiKVxuICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2NoZWR1bGVNYXBJbml0UmV0cnkoam12KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm1hcEluaXRSZXRyeUNvdW50ID0gMDtcbiAgICBhZ3JpTWFwQ2xpY2tEZWJ1ZyhcImluaXRpYWxpemVNYXBDb25uZWN0aW9uIE9LXCIsIHtcbiAgICAgIGxheWVyQ291bnQ6IHJlc29sdmVkTGF5ZXJzLmxlbmd0aCxcbiAgICAgIGxheWVyczogcmVzb2x2ZWRMYXllcnMubWFwKChsKSA9PiBsLnRpdGxlIHx8IGwudXJsIHx8IGwuaWQpLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcHJldktleXMgPSAodGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXJzIHx8IFtdKVxuICAgICAgLm1hcCgobCkgPT4gZ2V0QWdyaUxheWVyTWFwS2V5KGwpIHx8IFN0cmluZyhsLnVybCB8fCBsLmlkIHx8IFwiXCIpKVxuICAgICAgLmpvaW4oXCJ8XCIpO1xuICAgIGNvbnN0IG5leHRLZXlzID0gcmVzb2x2ZWRMYXllcnNcbiAgICAgIC5tYXAoKGwpID0+IGdldEFncmlMYXllck1hcEtleShsKSB8fCBTdHJpbmcobC51cmwgfHwgbC5pZCB8fCBcIlwiKSlcbiAgICAgIC5qb2luKFwifFwiKTtcbiAgICBpZiAocHJldktleXMgPT09IG5leHRLZXlzICYmIHRoaXMuX2NsaWNrSGFuZGxlKSB7XG4gICAgICB0aGlzLmF0dGFjaE1hcENsaWNrKGptdik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgZmVhdHVyZUxheWVyczogcmVzb2x2ZWRMYXllcnMsXG4gICAgICAgIGxheWVyS2V5VG9Ec0lkLFxuICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgZGVidWdJbmZvOiB7XG4gICAgICAgICAgLi4udGhpcy5zdGF0ZS5kZWJ1Z0luZm8sXG4gICAgICAgICAgbGF5ZXJJbmZvOiByZXNvbHZlZExheWVycy5tYXAoKGwpID0+ICh7XG4gICAgICAgICAgICBpZDogbC5pZCxcbiAgICAgICAgICAgIHRpdGxlOiBsLnRpdGxlLFxuICAgICAgICAgICAgdXJsOiBsLnVybCxcbiAgICAgICAgICAgIG9iamVjdElkRmllbGQ6IGwub2JqZWN0SWRGaWVsZCxcbiAgICAgICAgICB9KSksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2lzTW91bnRlZCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmF0dGFjaE1hcENsaWNrKGptdik7XG4gICAgICB9LFxuICAgICk7XG4gIH07XG5cbiAgcHJpdmF0ZSB0b0xpdmVNYXBMYXllciA9IChcbiAgICBsYXllcjogYW55LFxuICAgIG1hcDogX19lc3JpLk1hcCB8IG51bGwgfCB1bmRlZmluZWQsXG4gICk6IF9fZXNyaS5GZWF0dXJlTGF5ZXIgfCBudWxsID0+IHtcbiAgICBpZiAoIWxheWVyKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCB1cmwgPSBTdHJpbmcobGF5ZXI/LnVybCB8fCBcIlwiKTtcbiAgICBpZiAobWFwICYmIHVybCkge1xuICAgICAgY29uc3QgYnlVcmwgPSBmaW5kUXVlcnlhYmxlTGF5ZXJPbk1hcEJ5VXJsKG1hcCwgdXJsKTtcbiAgICAgIGlmIChieVVybCkgcmV0dXJuIGJ5VXJsIGFzIF9fZXNyaS5GZWF0dXJlTGF5ZXI7XG4gICAgfVxuICAgIGlmIChtYXAgJiYgbGF5ZXI/LmlkICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IGJ5SWQgPSBmaW5kUXVlcnlhYmxlTGF5ZXJPbk1hcEJ5SWQobWFwLCBTdHJpbmcobGF5ZXIuaWQpKTtcbiAgICAgIGlmIChieUlkKSByZXR1cm4gYnlJZCBhcyBfX2VzcmkuRmVhdHVyZUxheWVyO1xuICAgIH1cbiAgICBjb25zdCBxdWVyeWFibGUgPSBnZXRRdWVyeWFibGVMYXllcihsYXllcik7XG4gICAgcmV0dXJuIChxdWVyeWFibGUgfHwgbGF5ZXIpIGFzIF9fZXNyaS5GZWF0dXJlTGF5ZXI7XG4gIH07XG5cbiAgcHJpdmF0ZSBsYXllcktleXNNYXRjaCA9IChhOiBhbnksIGI6IGFueSk6IGJvb2xlYW4gPT4ge1xuICAgIGlmICghYSB8fCAhYikgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IGtleUEgPSBnZXRBZ3JpTGF5ZXJNYXBLZXkoYSk7XG4gICAgY29uc3Qga2V5QiA9IGdldEFncmlMYXllck1hcEtleShiKTtcbiAgICBpZiAoa2V5QSAmJiBrZXlCICYmIGtleUEgPT09IGtleUIpIHJldHVybiB0cnVlO1xuICAgIGlmIChhLmlkICE9IG51bGwgJiYgYi5pZCAhPSBudWxsICYmIFN0cmluZyhhLmlkKSA9PT0gU3RyaW5nKGIuaWQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgdXJsQSA9IG5vcm1hbGl6ZVF1ZXJ5YWJsZUxheWVyVXJsKFN0cmluZyhhLnVybCB8fCBcIlwiKSk7XG4gICAgY29uc3QgdXJsQiA9IG5vcm1hbGl6ZVF1ZXJ5YWJsZUxheWVyVXJsKFN0cmluZyhiLnVybCB8fCBcIlwiKSk7XG4gICAgcmV0dXJuICEhKHVybEEgJiYgdXJsQiAmJiB1cmxBID09PSB1cmxCKTtcbiAgfTtcblxuICAvKiogUmVzb2x2ZSB0aGUgbGl2ZSBtYXAgbGF5ZXIgZm9yIGEgc2VsZWN0ZWQgdXNlRGF0YVNvdXJjZSAoRmVhdHVyZUxheWVyIG9yIE1hcEltYWdlIHN1YmxheWVyKS4gKi9cbiAgcHJpdmF0ZSByZXNvbHZlRmVhdHVyZUxheWVyRm9yVXNlRGF0YVNvdXJjZSA9IGFzeW5jIChcbiAgICBqbXY6IEppbXVNYXBWaWV3LFxuICAgIHVzZURzOiBhbnksXG4gICk6IFByb21pc2U8X19lc3JpLkZlYXR1cmVMYXllciB8IG51bGw+ID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCF1c2VEcz8uZGF0YVNvdXJjZUlkKSByZXR1cm4gbnVsbDtcblxuICAgICAgY29uc3QgZHNJZCA9IFN0cmluZyh1c2VEcy5kYXRhU291cmNlSWQpO1xuICAgICAgY29uc3QgbWFwID0gam12Py52aWV3Py5tYXA7XG4gICAgICBpZiAoIW1hcCkgcmV0dXJuIG51bGw7XG5cbiAgICAgIGNvbnN0IGpsdkJ5QXBpID0gKGptdiBhcyBhbnkpLmdldEppbXVMYXllclZpZXdCeURhdGFTb3VyY2VJZD8uKGRzSWQpO1xuICAgICAgY29uc3QgZnJvbUFwaSA9IGdldFF1ZXJ5YWJsZUxheWVyKGpsdkJ5QXBpPy5sYXllcik7XG4gICAgICBpZiAoZnJvbUFwaSkgcmV0dXJuIHRoaXMudG9MaXZlTWFwTGF5ZXIoZnJvbUFwaSwgbWFwKTtcblxuICAgICAgY29uc3Qgamx2TGlzdDogYW55W10gPSBqbXYuZ2V0QWxsSmltdUxheWVyVmlld3M/LigpIHx8IFtdO1xuICAgICAgY29uc3QgbGF5ZXJJZEhpbnQgPSBleHRyYWN0TWFwTGF5ZXJJZEZyb21Ec0lkKGRzSWQpO1xuXG4gICAgICBmb3IgKGNvbnN0IGx2IG9mIGpsdkxpc3QpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGx2Py5sYXllckRhdGFTb3VyY2VJZCA9PT0gZHNJZCB8fFxuICAgICAgICAgIGx2Py5kYXRhU291cmNlSWQgPT09IGRzSWRcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgcmVzb2x2ZWQgPSBnZXRRdWVyeWFibGVMYXllcihsdj8ubGF5ZXIpO1xuICAgICAgICAgIGlmIChyZXNvbHZlZCkgcmV0dXJuIHRoaXMudG9MaXZlTWFwTGF5ZXIocmVzb2x2ZWQsIG1hcCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGxheWVySWRIaW50KSB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gamx2TGlzdC5maW5kKFxuICAgICAgICAgIChsdikgPT4gU3RyaW5nKGx2Py5sYXllcj8uaWQgfHwgXCJcIikgPT09IGxheWVySWRIaW50LFxuICAgICAgICApO1xuICAgICAgICBjb25zdCByZXNvbHZlZCA9IGdldFF1ZXJ5YWJsZUxheWVyKG1hdGNoPy5sYXllcik7XG4gICAgICAgIGlmIChyZXNvbHZlZCkgcmV0dXJuIHRoaXMudG9MaXZlTWFwTGF5ZXIocmVzb2x2ZWQsIG1hcCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRzTWdyID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgICAgIGNvbnN0IGRzOiBhbnkgPSBkc01nci5nZXREYXRhU291cmNlKGRzSWQpO1xuICAgICAgaWYgKGRzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkcy5mZXRjaFNjaGVtYSA9PT0gXCJmdW5jdGlvblwiKSBhd2FpdCBkcy5mZXRjaFNjaGVtYSgpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAvKiBzY2hlbWEgb3B0aW9uYWwgKi9cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRzTGF5ZXIgPVxuICAgICAgICAgICh0eXBlb2YgZHMuZ2V0TGF5ZXIgPT09IFwiZnVuY3Rpb25cIiA/IGRzLmdldExheWVyKCkgOiBudWxsKSB8fFxuICAgICAgICAgIGRzLmxheWVyIHx8XG4gICAgICAgICAgKHR5cGVvZiBkcy5nZXRKaW11TGF5ZXIgPT09IFwiZnVuY3Rpb25cIiA/IGRzLmdldEppbXVMYXllcigpIDogbnVsbCk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5YWJsZSA9IGdldFF1ZXJ5YWJsZUxheWVyKGRzTGF5ZXIpO1xuICAgICAgICBpZiAocXVlcnlhYmxlKSB7XG4gICAgICAgICAgY29uc3QgbGl2ZSA9IHRoaXMudG9MaXZlTWFwTGF5ZXIocXVlcnlhYmxlLCBtYXApO1xuICAgICAgICAgIGlmIChsaXZlKSByZXR1cm4gbGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRzVXJsID0gU3RyaW5nKGRzPy51cmwgfHwgcXVlcnlhYmxlPy51cmwgfHwgZHNMYXllcj8udXJsIHx8IFwiXCIpO1xuICAgICAgICBpZiAoZHNVcmwpIHtcbiAgICAgICAgICBjb25zdCBieVVybCA9IGZpbmRRdWVyeWFibGVMYXllck9uTWFwQnlVcmwobWFwLCBkc1VybCk7XG4gICAgICAgICAgaWYgKGJ5VXJsKSByZXR1cm4gYnlVcmwgYXMgX19lc3JpLkZlYXR1cmVMYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2gge1xuICAgICAgLyogaWdub3JlICovXG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuICBwcml2YXRlIGNsYW1wUG9wdXBUb01hcENvbnRhaW5lciA9IChcbiAgICBwb3M6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSxcbiAgICB2aWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsXG4gICkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHZpZXcuY29udGFpbmVyIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IHJlY3QgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgbWFyZ2luID0gdGhpcy5QT1BVUF9NQVJHSU47XG4gICAgY29uc3QgcGlubmVkID0gdGhpcy5zdGF0ZS5waW5Ub0Nvcm5lcjtcbiAgICBjb25zdCB7IHdpZHRoOiBwb3B1cFcsIGhlaWdodDogcG9wdXBIIH0gPSB0aGlzLmdldFBvcHVwRGltZW5zaW9ucyhcbiAgICAgIHZpZXcsXG4gICAgICBwaW5uZWQsXG4gICAgICBwb3MsXG4gICAgKTtcblxuICAgIGNvbnN0IG1hcExlZnQgPSByZWN0LmxlZnQ7XG4gICAgY29uc3QgbWFwVG9wID0gcmVjdC50b3A7XG4gICAgY29uc3QgbWFwUmlnaHQgPSByZWN0LnJpZ2h0O1xuICAgIGNvbnN0IG1hcEJvdHRvbSA9IHRoaXMuZ2V0RWZmZWN0aXZlTWFwQm90dG9tKHZpZXcsIG1hcmdpbik7XG5cbiAgICBjb25zdCB4ID0gTWF0aC5tYXgoXG4gICAgICBtYXBMZWZ0ICsgbWFyZ2luLFxuICAgICAgTWF0aC5taW4ocG9zLngsIG1hcFJpZ2h0IC0gcG9wdXBXIC0gbWFyZ2luKSxcbiAgICApO1xuXG4gICAgbGV0IHkgPSBwb3MueTtcbiAgICBpZiAoeSArIHBvcHVwSCA+IG1hcEJvdHRvbSkge1xuICAgICAgeSA9IG1hcEJvdHRvbSAtIHBvcHVwSCAtIG1hcmdpbjtcbiAgICB9XG4gICAgeSA9IE1hdGgubWF4KG1hcFRvcCArIG1hcmdpbiwgeSk7XG5cbiAgICByZXR1cm4geyB4LCB5IH07XG4gIH07XG5cbiAgcHJpdmF0ZSBhdHRhY2hNYXBDbGljayhqbXY6IEppbXVNYXBWaWV3KSB7XG4gICAgdGhpcy5kZXRhY2hNYXBDbGljaygpO1xuICAgIGNvbnN0IHZpZXcgPSBqbXY/LnZpZXcgYXMgeyBvbj86IChldmVudDogc3RyaW5nLCBjYjogdW5rbm93bikgPT4gdW5rbm93biB9IHwgbnVsbDtcbiAgICBpZiAoIXZpZXcgfHwgdHlwZW9mIHZpZXcub24gIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuO1xuICAgIHRoaXMuX2NsaWNrSGFuZGxlID0gdmlldy5vbihcImNsaWNrXCIsIHRoaXMub25WaWV3Q2xpY2spIGFzIGFueTtcbiAgfVxuXG4gIHByaXZhdGUgZW5zdXJlTWFwQ2xpY2tBdHRhY2hlZCA9ICgpOiBib29sZWFuID0+IHtcbiAgICBpZiAoIXRoaXMuX2lzTW91bnRlZCkgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IG1hcFdpZGdldElkID0gdGhpcy5nZXRMaW5rZWRNYXBXaWRnZXRJZCgpO1xuICAgIGNvbnN0IGptdiA9XG4gICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3Py52aWV3XG4gICAgICAgID8gdGhpcy5zdGF0ZS5qaW11TWFwVmlld1xuICAgICAgICA6IHRoaXMuZ2V0TWFwVmlld0Zyb21NYW5hZ2VyKG1hcFdpZGdldElkKTtcbiAgICBpZiAoIWptdj8udmlldykgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKCF0aGlzLnN0YXRlLmppbXVNYXBWaWV3Py52aWV3KSB7XG4gICAgICB0aGlzLm9uQWN0aXZlVmlld0NoYW5nZShqbXYpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9jbGlja0hhbmRsZSkge1xuICAgICAgdGhpcy5hdHRhY2hNYXBDbGljayhqbXYpO1xuICAgIH1cbiAgICByZXR1cm4gISF0aGlzLl9jbGlja0hhbmRsZTtcbiAgfTtcblxuICBwcml2YXRlIGhhbmRsZVh5UGFnZUNsb3NlZCA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAoIXRoaXMuaXNEYXNoYm9hcmRFbWJlZGRlZCgpKSByZXR1cm47XG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvd1BvcHVwKSB7XG4gICAgICB0aGlzLmNsb3NlUG9wdXAoeyByZXN0b3JlRXh0ZW50OiBmYWxzZSwgbm90aWZ5RGVzZWxlY3Q6IGZhbHNlIH0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ2xvc2UgdGhlIGZpZWxkIHBvcHVwIHdoZW4gdGhlIGh1YiBnZW9ncmFwaHkgbW92ZXMgKG90aGVyIHR1bWFuIC9cbiAgICogdmlsb3lhdCAvIHllYXIpIG9yIHdoZW4gcG9seWdvbiBmb2N1cyBpcyBjbGVhcmVkLiBEbyBub3QgcmVzdG9yZSB0aGVcbiAgICogcHJlLWZpZWxkIGV4dGVudCBvbiBnZW9ncmFwaHkgY2hhbmdlIOKAlCBMb2NhbGl6YXRpb24gaXMgYWxyZWFkeSB6b29taW5nXG4gICAqIHRvIHRoZSBuZXcgZGlzdHJpY3QvcmVnaW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBoYW5kbGVNYXN0ZXJGaWx0ZXJDaGFuZ2VkID0gKGV2ZW50OiBFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghdGhpcy5faXNNb3VudGVkKSByZXR1cm47XG4gICAgY29uc3QgZGV0YWlsOiBhbnkgPSAoZXZlbnQgYXMgQ3VzdG9tRXZlbnQpLmRldGFpbCB8fCB7fTtcbiAgICBjb25zdCBmOiBhbnkgPSBkZXRhaWwuZmlsdGVycyB8fCB7fTtcbiAgICBjb25zdCBnZW9LZXkgPSBgJHtTdHJpbmcoZi55aWwgfHwgXCJcIil9fCR7U3RyaW5nKGYudmlsb3lhdCB8fCBcIlwiKX18JHtTdHJpbmcoZi50dW1hbiB8fCBcIlwiKX1gO1xuICAgIGNvbnN0IHByZXZHZW8gPSB0aGlzLl9sYXN0TWFzdGVyR2VvS2V5O1xuICAgIHRoaXMuX2xhc3RNYXN0ZXJHZW9LZXkgPSBnZW9LZXk7XG5cbiAgICBjb25zdCBnZW9DaGFuZ2VkID0gQm9vbGVhbihwcmV2R2VvKSAmJiBwcmV2R2VvICE9PSBnZW9LZXk7XG4gICAgY29uc3QgcG9seWdvbkNsZWFyZWQgPSBmLnBvbHlnb25Nb2RlID09PSBmYWxzZTtcbiAgICBjb25zdCBpbmNvbWluZ1VuaXF1ZSA9IFN0cmluZyhmLnVuaXF1ZWlkIHx8IFwiXCIpXG4gICAgICAucmVwbGFjZSgvW3t9XS9nLCBcIlwiKVxuICAgICAgLnRyaW0oKTtcbiAgICBpZiAoZi5wb2x5Z29uTW9kZSA9PT0gdHJ1ZSAmJiBpbmNvbWluZ1VuaXF1ZSkge1xuICAgICAgdGhpcy5fYWN0aXZlSW5zcGVjdGVkVW5pcXVlaWQgPSBpbmNvbWluZ1VuaXF1ZTtcbiAgICAgIC8vIEZhbGxiYWNrOiBpZiBzZWxlY3Rpb24gYXJyaXZlZCB2aWEgaHViIGJ1dCBwb3B1cCBpcyBzdGlsbCBjbG9zZWQsIG9wZW4gaXQuXG4gICAgICBpZiAoIXRoaXMuc3RhdGUuc2hvd1BvcHVwKSB7XG4gICAgICAgIHZvaWQgdGhpcy5vcGVuUG9wdXBGb3JVbmlxdWVpZChpbmNvbWluZ1VuaXF1ZSwge1xuICAgICAgICAgIHpvb206IGZhbHNlLFxuICAgICAgICAgIG5vdGlmeVNlbGVjdGlvbjogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocG9seWdvbkNsZWFyZWQpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZUluc3BlY3RlZFVuaXF1ZWlkID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoZ2VvQ2hhbmdlZCkge1xuICAgICAgdGhpcy5jbG9zZVBvcHVwKHsgcmVzdG9yZUV4dGVudDogZmFsc2UsIG5vdGlmeURlc2VsZWN0OiBmYWxzZSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gU2FtZSBnZW9ncmFwaHkgYnV0IGh1YiBjbGVhcmVkIHBvbHlnb24gZm9jdXMgKGUuZy4gR3JhZmYgZGVzZWxlY3QpLlxuICAgIGlmIChwb2x5Z29uQ2xlYXJlZCAmJiAodGhpcy5zdGF0ZS5zaG93UG9wdXAgfHwgdGhpcy5zdGF0ZS5sb2FkaW5nKSkge1xuICAgICAgdGhpcy5jbG9zZVBvcHVwKHsgcmVzdG9yZUV4dGVudDogdHJ1ZSwgbm90aWZ5RGVzZWxlY3Q6IGZhbHNlIH0pO1xuICAgIH1cbiAgfTtcblxuICAvKiogSW1tZWRpYXRlIGNsb3NlIHdoZW4gUmVnaW9uL1BpZS95ZWFyIGNoYW5nZSBnZW9ncmFwaHkgKGJlZm9yZSBtYXAgc3luYyBmaW5pc2hlcykuICovXG4gIHByaXZhdGUgaGFuZGxlV2lkZ2V0U2VsZWN0aW9uQ2hhbmdlZCA9IChldmVudDogRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoIXRoaXMuX2lzTW91bnRlZCkgcmV0dXJuO1xuICAgIGNvbnN0IGQ6IGFueSA9IChldmVudCBhcyBDdXN0b21FdmVudCkuZGV0YWlsIHx8IHt9O1xuICAgIC8vIE91ciBvd24gcG9seWdvbiBub3RpZnkgbXVzdCBub3QgY2xvc2UgdGhlIHBvcHVwIHdlIGp1c3Qgb3BlbmVkLlxuICAgIGlmIChkLnNvdXJjZSA9PT0gXCJBZ3JpUG9wdXBcIikgcmV0dXJuO1xuICAgIGlmIChcbiAgICAgIGQueWlsICE9PSB1bmRlZmluZWQgfHxcbiAgICAgIGQudmlsb3lhdCAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICBkLnR1bWFuICE9PSB1bmRlZmluZWRcbiAgICApIHtcbiAgICAgIHRoaXMuY2xvc2VQb3B1cCh7IHJlc3RvcmVFeHRlbnQ6IGZhbHNlLCBub3RpZnlEZXNlbGVjdDogZmFsc2UgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChkLnBvbHlnb25Nb2RlID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5fYWN0aXZlSW5zcGVjdGVkVW5pcXVlaWQgPSBudWxsO1xuICAgICAgdGhpcy5jbG9zZVBvcHVwKHsgcmVzdG9yZUV4dGVudDogdHJ1ZSwgbm90aWZ5RGVzZWxlY3Q6IGZhbHNlIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICAoZC5zb3VyY2UgPT09IFwiQWdyaUdyYWZmV2lkZ2V0XCIgfHwgZC5zb3VyY2UgPT09IFwiQWdyaUdyYWZmMTBcIikgJiZcbiAgICAgIGQucG9seWdvbk1vZGUgPT09IHRydWUgJiZcbiAgICAgIGQudW5pcXVlaWRcbiAgICApIHtcbiAgICAgIGNvbnN0IGNsZWFuID0gU3RyaW5nKGQudW5pcXVlaWQpXG4gICAgICAgIC5yZXBsYWNlKC9be31dL2csIFwiXCIpXG4gICAgICAgIC50cmltKCk7XG4gICAgICB0aGlzLl9hY3RpdmVJbnNwZWN0ZWRVbmlxdWVpZCA9IGNsZWFuO1xuICAgICAgLy8gVGFibGUgLyBHcmFmZiBzZWxlY3Rpb24gbXVzdCBhbHdheXMgb3BlbiB0aGUgZmllbGQgcG9wdXAuXG4gICAgICB2b2lkIHRoaXMub3BlblBvcHVwRm9yVW5pcXVlaWQoY2xlYW4sIHtcbiAgICAgICAgem9vbTogZmFsc2UsXG4gICAgICAgIG5vdGlmeVNlbGVjdGlvbjogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIE9wZW4gKG9yIHJlZnJlc2gpIHRoZSBmaWVsZCBwb3B1cCBmb3IgYSBwb2x5Z29uIHVuaXF1ZWlkIOKAlCB1c2VkIHdoZW5cbiAgICogc2VsZWN0aW9uIGNvbWVzIGZyb20gdGhlIHRhYmxlL0dyYWZmIHBhdGggKG1hcCBjbGljayBhbHJlYWR5IG9wZW5zIGl0c2VsZikuXG4gICAqL1xuICBwcml2YXRlIG9wZW5Qb3B1cEZvclVuaXF1ZWlkID0gYXN5bmMgKFxuICAgIHVuaXF1ZWlkOiBzdHJpbmcsXG4gICAgb3B0cz86IHsgem9vbT86IGJvb2xlYW47IG5vdGlmeVNlbGVjdGlvbj86IGJvb2xlYW4gfSxcbiAgKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgY2xlYW4gPSBTdHJpbmcodW5pcXVlaWQgfHwgXCJcIilcbiAgICAgIC5yZXBsYWNlKC9be31dL2csIFwiXCIpXG4gICAgICAudHJpbSgpO1xuICAgIGlmICghY2xlYW4gfHwgIXRoaXMuX2lzTW91bnRlZCkgcmV0dXJuO1xuXG4gICAgY29uc3QgYWN0aXZlID0gU3RyaW5nKHRoaXMuX2FjdGl2ZUluc3BlY3RlZFVuaXF1ZWlkIHx8IFwiXCIpXG4gICAgICAucmVwbGFjZSgvW3t9XS9nLCBcIlwiKVxuICAgICAgLnRyaW0oKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93UG9wdXAgJiYgYWN0aXZlID09PSBjbGVhbiAmJiB0aGlzLnN0YXRlLnNlbGVjdGVkQXR0cnMpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnBvcHVwTWluaW1pemVkKSB7XG4gICAgICAgIHRoaXMuZXhwYW5kUG9wdXAoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYnJvYWRjYXN0UG9wdXBWaXNpYmlsaXR5KHRydWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGptdiA9IHRoaXMuc3RhdGUuamltdU1hcFZpZXc7XG4gICAgY29uc3QgdmlldyA9IGptdj8udmlldztcbiAgICBpZiAoIXZpZXcgfHwgIWptdikgcmV0dXJuO1xuXG4gICAgY29uc3QgY2xpY2tHZW5lcmF0aW9uID0gKyt0aGlzLl9jbGlja0dlbmVyYXRpb247XG4gICAgY29uc3QgaXNTdGFsZSA9ICgpID0+XG4gICAgICAhdGhpcy5faXNNb3VudGVkIHx8IGNsaWNrR2VuZXJhdGlvbiAhPT0gdGhpcy5fY2xpY2tHZW5lcmF0aW9uO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgZXJyb3I6IG51bGwsXG4gICAgICBsb2FkaW5nQXR0YWNobWVudHM6IHRydWUsXG4gICAgICBhdHRhY2htZW50czogW10sXG4gICAgICBhdHRhY2htZW50c0V4cGFuZGVkOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGxheWVycyA9IGF3YWl0IHRoaXMucmVzb2x2ZUNsaWNrTGF5ZXJzKHZpZXcsIGptdik7XG4gICAgICBpZiAoaXNTdGFsZSgpKSByZXR1cm47XG5cbiAgICAgIGxldCBmZWF0dXJlOiBfX2VzcmkuR3JhcGhpYyB8IG51bGwgPSBudWxsO1xuICAgICAgbGV0IGNsaWNrZWRMYXllcjogX19lc3JpLkZlYXR1cmVMYXllciB8IG51bGwgPSBudWxsO1xuXG4gICAgICBmb3IgKGNvbnN0IGxheWVyIG9mIGxheWVycykge1xuICAgICAgICBpZiAoIXRoaXMuaXNBZ3JpY3VsdHVyYWxGaWVsZExheWVyKGxheWVyKSkgY29udGludWU7XG4gICAgICAgIGlmICghdGhpcy5pc0xheWVyRWZmZWN0aXZlbHlWaXNpYmxlKGxheWVyLCB2aWV3KSkgY29udGludWU7XG4gICAgICAgIGNvbnN0IGRldGFjaGVkID0gYXdhaXQgdGhpcy5nZXREZXRhY2hlZFF1ZXJ5TGF5ZXIobGF5ZXIpO1xuICAgICAgICBpZiAoaXNTdGFsZSgpKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHF1ZXJ5VGFyZ2V0ID0gZGV0YWNoZWQgfHwgbGF5ZXI7XG4gICAgICAgIGNvbnN0IHZhcmlhbnRzID0gW2NsZWFuLCBgeyR7Y2xlYW59fWBdO1xuICAgICAgICBmb3IgKGNvbnN0IHYgb2YgdmFyaWFudHMpIHtcbiAgICAgICAgICBjb25zdCBxID0gcXVlcnlUYXJnZXQuY3JlYXRlUXVlcnkoKTtcbiAgICAgICAgICBxLm91dEZpZWxkcyA9IFtcIipcIl07XG4gICAgICAgICAgcS5yZXR1cm5HZW9tZXRyeSA9IHRydWU7XG4gICAgICAgICAgcS5udW0gPSAxO1xuICAgICAgICAgIGNvbnN0IGVzY2FwZWQgPSBTdHJpbmcodikucmVwbGFjZSgvJy9nLCBcIicnXCIpO1xuICAgICAgICAgIHEud2hlcmUgPSBgJHtBR1JJX1RBQkxFX0pPSU5fRklFTER9PScke2VzY2FwZWR9J2A7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHF1ZXJ5VGFyZ2V0LnF1ZXJ5RmVhdHVyZXMocSk7XG4gICAgICAgICAgICBpZiAocmVzLmZlYXR1cmVzPy5bMF0pIHtcbiAgICAgICAgICAgICAgZmVhdHVyZSA9IHJlcy5mZWF0dXJlc1swXTtcbiAgICAgICAgICAgICAgY2xpY2tlZExheWVyID0gbGF5ZXI7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgLyogdHJ5IG5leHQgdmFyaWFudCAvIGxheWVyICovXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmZWF0dXJlKSBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKCFmZWF0dXJlIHx8ICFjbGlja2VkTGF5ZXIgfHwgaXNTdGFsZSgpKSB7XG4gICAgICAgIGlmICghaXNTdGFsZSgpKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGxvYWRpbmdBdHRhY2htZW50czogZmFsc2UsXG4gICAgICAgICAgICBhdHRhY2htZW50czogW10sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBsaXZlTGF5ZXIgPVxuICAgICAgICAodGhpcy50b0xpdmVNYXBMYXllcihjbGlja2VkTGF5ZXIsIHZpZXcubWFwKSB8fFxuICAgICAgICAgIGNsaWNrZWRMYXllcikgYXMgX19lc3JpLkZlYXR1cmVMYXllcjtcbiAgICAgIGNvbnN0IGxheWVyS2V5ID1cbiAgICAgICAgZ2V0QWdyaUxheWVyTWFwS2V5KGxpdmVMYXllcikgfHxcbiAgICAgICAgU3RyaW5nKGxpdmVMYXllcj8udXJsIHx8IGxpdmVMYXllcj8uaWQgfHwgXCJcIik7XG4gICAgICBjb25zdCBkc0lkID0gdGhpcy5zdGF0ZS5sYXllcktleVRvRHNJZD8uW2xheWVyS2V5XSB8fCBudWxsO1xuICAgICAgY29uc3Qgb2lkRmllbGQgPVxuICAgICAgICBsaXZlTGF5ZXIub2JqZWN0SWRGaWVsZCB8fFxuICAgICAgICBsaXZlTGF5ZXIuZmllbGRzPy5maW5kKChmOiBhbnkpID0+IGYudHlwZSA9PT0gXCJvaWRcIik/Lm5hbWUgfHxcbiAgICAgICAgbnVsbDtcbiAgICAgIGlmICghb2lkRmllbGQpIHtcbiAgICAgICAgaWYgKCFpc1N0YWxlKCkpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgbG9hZGluZ0F0dGFjaG1lbnRzOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dQb3B1cDogZmFsc2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvaWQgPSBmZWF0dXJlLmF0dHJpYnV0ZXM/LltvaWRGaWVsZF07XG4gICAgICBpZiAob2lkID09IG51bGwpIHtcbiAgICAgICAgaWYgKCFpc1N0YWxlKCkpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgbG9hZGluZ0F0dGFjaG1lbnRzOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dQb3B1cDogZmFsc2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvdXRGaWVsZHMgPSB0aGlzLmdldE91dEZpZWxkcyhsaXZlTGF5ZXIgYXMgYW55LCBvaWRGaWVsZCk7XG4gICAgICBjb25zdCBmID1cbiAgICAgICAgKGF3YWl0IHRoaXMucXVlcnlGZWF0dXJlQnlPYmplY3RJZENhY2hlZChcbiAgICAgICAgICBsaXZlTGF5ZXIsXG4gICAgICAgICAgb2lkRmllbGQsXG4gICAgICAgICAgb2lkLFxuICAgICAgICAgIG91dEZpZWxkcyxcbiAgICAgICAgKSkgfHwgZmVhdHVyZTtcbiAgICAgIGlmIChpc1N0YWxlKCkpIHJldHVybjtcblxuICAgICAgaWYgKGYuZ2VvbWV0cnkpIHRoaXMuaGlnaGxpZ2h0UG9seWdvbihmLmdlb21ldHJ5KTtcblxuICAgICAgY29uc3QgZGlzcGxheUF0dHJzID0gYXdhaXQgdGhpcy5yZXNvbHZlRGlzcGxheUF0dHJzKGYuYXR0cmlidXRlcyk7XG4gICAgICBpZiAoaXNTdGFsZSgpKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IHNob3VsZFBpbiA9IHRoaXMuc3RhdGUucGluVG9Db3JuZXI7XG4gICAgICBjb25zdCBwb3B1cFBvc2l0aW9uID0gc2hvdWxkUGluXG4gICAgICAgID8gdGhpcy5jYWxjdWxhdGVQaW5uZWRQb3NpdGlvbih2aWV3KVxuICAgICAgICA6IHRoaXMuc3RhdGUucG9wdXBQb3NpdGlvbiB8fCB0aGlzLmNhbGN1bGF0ZVBpbm5lZFBvc2l0aW9uKHZpZXcpO1xuXG4gICAgICBjb25zdCBjb25maWd1cmVkRmllbGRzID0gdGhpcy5wcm9wcy5jb25maWc/LmZpZWxkc1RvU2hvdyB8fCBbXTtcbiAgICAgIGNvbnN0IGFjdHVhbEZpZWxkcyA9IE9iamVjdC5rZXlzKGRpc3BsYXlBdHRycyk7XG4gICAgICBjb25zdCBtaXNzaW5nRmllbGRzID0gY29uZmlndXJlZEZpZWxkcy5maWx0ZXIoXG4gICAgICAgIChmaWVsZCkgPT4gIWFjdHVhbEZpZWxkcy5pbmNsdWRlcyhmaWVsZCksXG4gICAgICApO1xuICAgICAgY29uc3QgZmllbGRzV2l0aERhdGEgPSBjb25maWd1cmVkRmllbGRzLmZpbHRlcihcbiAgICAgICAgKG5hbWUpID0+XG4gICAgICAgICAgZGlzcGxheUF0dHJzLmhhc093blByb3BlcnR5KG5hbWUpICYmXG4gICAgICAgICAgZGlzcGxheUF0dHJzW25hbWVdICE9IG51bGwgJiZcbiAgICAgICAgICBkaXNwbGF5QXR0cnNbbmFtZV0gIT09IFwiXCIsXG4gICAgICApO1xuXG4gICAgICB0aGlzLl9hY3RpdmVJbnNwZWN0ZWRVbmlxdWVpZCA9IGNsZWFuO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBsYXN0Q2xpY2tlZERzSWQ6IGRzSWQsXG4gICAgICAgIGxhc3RDbGlja2VkTGF5ZXJLZXk6IGxheWVyS2V5LFxuICAgICAgICBzZWxlY3RlZEF0dHJzOiBkaXNwbGF5QXR0cnMsXG4gICAgICAgIHNlbGVjdGVkT0lEOiBOdW1iZXIob2lkKSxcbiAgICAgICAgb2JqZWN0SWRGaWVsZDogb2lkRmllbGQsXG4gICAgICAgIHNob3dQb3B1cDogdHJ1ZSxcbiAgICAgICAgcG9wdXBNaW5pbWl6ZWQ6IGZhbHNlLFxuICAgICAgICBjaGFydEV4cGFuZGVkOiBzaG91bGRQaW4sXG4gICAgICAgIGNoYXJ0SG92ZXJJbmRleDogbnVsbCxcbiAgICAgICAgcG9wdXBQb3NpdGlvbixcbiAgICAgICAgZXJyb3I6XG4gICAgICAgICAgbWlzc2luZ0ZpZWxkcy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IHRoaXMudHIoXCJlcnJvci5jb25maWd1cmVkRmllbGRNaXNzaW5nXCIsIHtcbiAgICAgICAgICAgICAgICBmaWVsZHM6IG1pc3NpbmdGaWVsZHMuam9pbihcIiwgXCIpLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBmaWVsZHNXaXRoRGF0YS5sZW5ndGggPT09IDAgJiYgY29uZmlndXJlZEZpZWxkcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgID8gdGhpcy50cihcImVycm9yLm5vRGF0YUZvckNvbmZpZ3VyZWRGaWVsZHNcIilcbiAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChvcHRzPy5ub3RpZnlTZWxlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5ub3RpZnlHcmFmZlBvbHlnb25TZWxlY3Rpb24oY2xlYW4sIHRydWUsIERhdGUubm93KCkpO1xuICAgICAgfVxuICAgICAgdm9pZCB0aGlzLmZldGNoTGF0ZXN0VmVnZXRhdGlvbkluZGljZXMoY2xlYW4pO1xuXG4gICAgICBpZiAob3B0cz8uem9vbSAhPT0gZmFsc2UgJiYgZi5nZW9tZXRyeSAmJiAhaXNTdGFsZSgpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCF0aGlzLl9leHRlbnRCZWZvcmVTZWxlY3Rpb24gJiYgdmlldy5leHRlbnQ/LmNsb25lKSB7XG4gICAgICAgICAgICB0aGlzLl9leHRlbnRCZWZvcmVTZWxlY3Rpb24gPSB2aWV3LmV4dGVudC5jbG9uZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCB0YXJnZXQgPVxuICAgICAgICAgICAgKGYuZ2VvbWV0cnkgYXMgYW55KS5leHRlbnQ/LmV4cGFuZD8uKDEuMDgpIHx8IGYuZ2VvbWV0cnk7XG4gICAgICAgICAgdm9pZCB2aWV3LmdvVG8oXG4gICAgICAgICAgICB7IHRhcmdldCB9LFxuICAgICAgICAgICAgeyBkdXJhdGlvbjogNjUwLCBlYXNpbmc6IFwiZWFzZS1pbi1vdXRcIiBhcyBhbnkgfSxcbiAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAvKiBpZ25vcmUgKi9cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5jb25maWc/LnNldHRpbmdzPy5zaG93QXR0YWNobWVudHMgIT09IGZhbHNlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgY2xpY2tlZFVybCA9IFN0cmluZygobGl2ZUxheWVyIGFzIGFueSkudXJsIHx8IFwiXCIpLnRyaW0oKTtcbiAgICAgICAgICBjb25zdCBhdHRhY2htZW50TGF5ZXIgPVxuICAgICAgICAgICAgKGNsaWNrZWRVcmwgJiYgdGhpcy5fcXVlcnlPbmx5TGF5ZXJzLmdldChjbGlja2VkVXJsKSkgfHwgbGl2ZUxheWVyO1xuICAgICAgICAgIGF3YWl0IHRoaXMubG9hZEF0dGFjaG1lbnRzRm9yT2lkKGF0dGFjaG1lbnRMYXllciBhcyBhbnksIE51bWJlcihvaWQpKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgaWYgKCFpc1N0YWxlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nQXR0YWNobWVudHM6IGZhbHNlLCBhdHRhY2htZW50czogW10gfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFpc1N0YWxlKCkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmdBdHRhY2htZW50czogZmFsc2UsIGF0dGFjaG1lbnRzOiBbXSB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1N0YWxlKCkpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZVBvcHVwTGF5b3V0QWZ0ZXJDb250ZW50KCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICBpZiAoIWlzU3RhbGUoKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBsb2FkaW5nQXR0YWNobWVudHM6IGZhbHNlLFxuICAgICAgICAgIGVycm9yOiBlPy5tZXNzYWdlIHx8IFN0cmluZyhlKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgaGFuZGxlU2hhcmVkTWFwQ2xpY2sgPSBhc3luYyAoZXZlbnQ6IEV2ZW50KTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgLy8gQWx3YXlzIGlnbm9yZSB0aGUgTG9jYWxpemF0aW9uIGNsaWNrIGJ1cy4gQWdyaVBvcHVwIG93bnMgdmlldy5vbihcImNsaWNrXCIpXG4gICAgLy8gZXhjbHVzaXZlbHkg4oCUIGhhbmRsaW5nIGJvdGggcmFjZXMgdHdvIGZ1bGwgb25WaWV3Q2xpY2sgY2hhaW5zOiB0aGUgbG9zZXJcbiAgICAvLyBvZnRlbiBjbGVhcnMgc2hvd1BvcHVwLCByZXN0b3JlcyB0aGUgcHJlLXNlbGVjdGlvbiBleHRlbnQsIGFuZCBmbGFzaGVzXG4gICAgLy8gb3RoZXItZGlzdHJpY3QgZmllbGRzLiBMb2NhbGl6YXRpb24gbWF5IHN0aWxsIGRpc3BhdGNoIGZvciBvdGhlciBsaXN0ZW5lcnMuXG4gICAgYWdyaU1hcENsaWNrRGVidWcoXG4gICAgICBcIkFncmlQb2x5Z29uIOKGkCBzaGFyZWQgbWFwLWNsaWNrIFNLSVAgKGRpcmVjdCB2aWV3IGNsaWNrIGlzIHNvbGUgb3duZXIpXCIsXG4gICAgKTtcbiAgICByZXR1cm47XG4gIH07XG5cbiAgcHJpdmF0ZSBkZXRhY2hNYXBDbGljaygpIHtcbiAgICBpZiAodGhpcy5fY2xpY2tIYW5kbGU/LnJlbW92ZSkgdGhpcy5fY2xpY2tIYW5kbGUucmVtb3ZlKCk7XG4gICAgdGhpcy5fY2xpY2tIYW5kbGUgPSBudWxsO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLSBDbGljayDihpIgaGl0VGVzdCDihpIgcXVlcnkgZnVsbCBhdHRycyAtLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgcHJpdmF0ZSB0b0NsaWNrUXVlcnlHZW9tZXRyeSA9IChcbiAgICB2aWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsXG4gICAgc2NyZWVuUG9pbnQ6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSxcbiAgICBtYXBQb2ludD86IHsgeD86IG51bWJlcjsgeT86IG51bWJlcjsgc3BhdGlhbFJlZmVyZW5jZT86IHsgd2tpZD86IG51bWJlciB9IH0sXG4gICk6IF9fZXNyaS5Qb2ludCB8IG51bGwgPT4ge1xuICAgIGlmICh0eXBlb2Ygdmlldy50b01hcCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBmcm9tVmlldyA9IHZpZXcudG9NYXAoc2NyZWVuUG9pbnQpO1xuICAgICAgICBpZiAoZnJvbVZpZXcpIHJldHVybiBmcm9tVmlldyBhcyBfX2VzcmkuUG9pbnQ7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLyogaWdub3JlICovXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHggPSBOdW1iZXIobWFwUG9pbnQ/LngpO1xuICAgIGNvbnN0IHkgPSBOdW1iZXIobWFwUG9pbnQ/LnkpO1xuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKHgpIHx8ICFOdW1iZXIuaXNGaW5pdGUoeSkpIHJldHVybiBudWxsO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbmV3IFBvaW50KHtcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgc3BhdGlhbFJlZmVyZW5jZTpcbiAgICAgICAgICBtYXBQb2ludD8uc3BhdGlhbFJlZmVyZW5jZSB8fCAodmlldyBhcyBhbnkpLnNwYXRpYWxSZWZlcmVuY2UsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIGZpbmRIaXRHcmFwaGljID0gKFxuICAgIGhpdDogX19lc3JpLkhpdFRlc3RSZXN1bHQgfCBudWxsIHwgdW5kZWZpbmVkLFxuICAgIGxheWVyczogX19lc3JpLkZlYXR1cmVMYXllcltdLFxuICApOiBfX2VzcmkuR3JhcGhpYyB8IG51bGwgPT4ge1xuICAgIGNvbnN0IGhpdFJlc3VsdCA9IGhpdD8ucmVzdWx0cz8uZmluZCgocikgPT4ge1xuICAgICAgaWYgKFwiZ3JhcGhpY1wiIGluIHIgJiYgci5ncmFwaGljKSB7XG4gICAgICAgIGNvbnN0IGx5cjogYW55ID0gci5ncmFwaGljLmxheWVyO1xuICAgICAgICBpZiAoIWx5cikgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gbGF5ZXJzLnNvbWUoKEwpID0+IHRoaXMubGF5ZXJLZXlzTWF0Y2goTCwgbHlyKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgcmV0dXJuIGhpdFJlc3VsdCAmJiBcImdyYXBoaWNcIiBpbiBoaXRSZXN1bHQgPyBoaXRSZXN1bHQuZ3JhcGhpYyA6IG51bGw7XG4gIH07XG5cbiAgcHJpdmF0ZSBwaWNrQ2xpY2tHcmFwaGljID0gKFxuICAgIGhpdDogX19lc3JpLkhpdFRlc3RSZXN1bHQgfCBudWxsIHwgdW5kZWZpbmVkLFxuICAgIHByZWZlcnJlZExheWVyczogX19lc3JpLkZlYXR1cmVMYXllcltdLFxuICApOiBfX2VzcmkuR3JhcGhpYyB8IG51bGwgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZVZpZXcgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3Py52aWV3O1xuICAgIGNvbnN0IG1hcCA9IGFjdGl2ZVZpZXc/Lm1hcDtcbiAgICBjb25zdCBjYW5kaWRhdGVzOiBfX2VzcmkuR3JhcGhpY1tdID0gW107XG4gICAgY29uc3QgcmVzdHJpY3RUb1ByZWZlcnJlZCA9IHByZWZlcnJlZExheWVycy5sZW5ndGggPiAwO1xuXG4gICAgZm9yIChjb25zdCByIG9mIGhpdD8ucmVzdWx0cyB8fCBbXSkge1xuICAgICAgaWYgKCFyIHx8IHR5cGVvZiByICE9PSBcIm9iamVjdFwiKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IGdyYXBoaWMgPVxuICAgICAgICBcImdyYXBoaWNcIiBpbiByICYmIChyIGFzIGFueSkuZ3JhcGhpY1xuICAgICAgICAgID8gKChyIGFzIGFueSkuZ3JhcGhpYyBhcyBfX2VzcmkuR3JhcGhpYylcbiAgICAgICAgICA6IG51bGw7XG4gICAgICBpZiAoIWdyYXBoaWMpIGNvbnRpbnVlO1xuXG4gICAgICBjb25zdCByYXdMYXllcjogYW55ID0gZ3JhcGhpYy5sYXllcjtcbiAgICAgIGlmICh0aGlzLmlzSGlnaGxpZ2h0TGF5ZXIocmF3TGF5ZXIpKSBjb250aW51ZTtcblxuICAgICAgY29uc3QgbGF5ZXIgPSB0aGlzLnRvTGl2ZU1hcExheWVyKFxuICAgICAgICBnZXRRdWVyeWFibGVMYXllcihyYXdMYXllcikgfHwgcmF3TGF5ZXIsXG4gICAgICAgIG1hcCxcbiAgICAgICk7XG4gICAgICBpZiAoIWxheWVyIHx8ICF0aGlzLmlzQWdyaWN1bHR1cmFsRmllbGRMYXllcihsYXllcikpIGNvbnRpbnVlO1xuICAgICAgaWYgKCFhY3RpdmVWaWV3IHx8ICF0aGlzLmlzTGF5ZXJFZmZlY3RpdmVseVZpc2libGUobGF5ZXIsIGFjdGl2ZVZpZXcpKSBjb250aW51ZTtcbiAgICAgIGlmICghdGhpcy5pc0FncmljdWx0dXJhbEZpZWxkR3JhcGhpYyhncmFwaGljLCBsYXllcikpIGNvbnRpbnVlO1xuICAgICAgaWYgKFxuICAgICAgICByZXN0cmljdFRvUHJlZmVycmVkICYmXG4gICAgICAgICFwcmVmZXJyZWRMYXllcnMuc29tZSgoTCkgPT4gdGhpcy5sYXllcktleXNNYXRjaChMLCBsYXllcikpXG4gICAgICApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGdlb21UeXBlID0gU3RyaW5nKGdyYXBoaWMuZ2VvbWV0cnk/LnR5cGUgfHwgXCJcIikudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNvbnN0IGlzUG9seWdvbkxpa2UgPVxuICAgICAgICAhZ2VvbVR5cGUgfHwgZ2VvbVR5cGUgPT09IFwicG9seWdvblwiIHx8IGdlb21UeXBlID09PSBcIm11bHRpcG9seWdvblwiO1xuICAgICAgY29uc3QgaGFzQXR0cmlidXRlcyA9XG4gICAgICAgICEhZ3JhcGhpYy5hdHRyaWJ1dGVzICYmIE9iamVjdC5rZXlzKGdyYXBoaWMuYXR0cmlidXRlcykubGVuZ3RoID4gMDtcblxuICAgICAgaWYgKGdlb21UeXBlICYmICFpc1BvbHlnb25MaWtlKSBjb250aW51ZTtcbiAgICAgIGlmICghaGFzQXR0cmlidXRlcyAmJiAhZ3JhcGhpYy5nZW9tZXRyeSkgY29udGludWU7XG5cbiAgICAgIGNhbmRpZGF0ZXMucHVzaChncmFwaGljKTtcbiAgICB9XG5cbiAgICBpZiAoIWNhbmRpZGF0ZXMubGVuZ3RoKSByZXR1cm4gbnVsbDtcblxuICAgIGlmIChyZXN0cmljdFRvUHJlZmVycmVkKSB7XG4gICAgICBmb3IgKGNvbnN0IGdyYXBoaWMgb2YgY2FuZGlkYXRlcykge1xuICAgICAgICBjb25zdCBsYXllciA9IHRoaXMudG9MaXZlTWFwTGF5ZXIoXG4gICAgICAgICAgZ2V0UXVlcnlhYmxlTGF5ZXIoZ3JhcGhpYy5sYXllcikgfHwgZ3JhcGhpYy5sYXllcixcbiAgICAgICAgICBtYXAsXG4gICAgICAgICk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBsYXllciAmJlxuICAgICAgICAgIHByZWZlcnJlZExheWVycy5zb21lKChMKSA9PiB0aGlzLmxheWVyS2V5c01hdGNoKEwsIGxheWVyKSkgJiZcbiAgICAgICAgICAobGF5ZXIgYXMgYW55KS52aXNpYmxlICE9PSBmYWxzZVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gZ3JhcGhpYztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBncmFwaGljIG9mIGNhbmRpZGF0ZXMpIHtcbiAgICAgIGNvbnN0IGxheWVyOiBhbnkgPSBncmFwaGljLmxheWVyO1xuICAgICAgaWYgKGxheWVyPy52aXNpYmxlICE9PSBmYWxzZSkgcmV0dXJuIGdyYXBoaWM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbmRpZGF0ZXNbMF07XG4gIH07XG5cbiAgcHJpdmF0ZSBpc0hpZ2hsaWdodExheWVyKGxheWVyOiBhbnkpOiBib29sZWFuIHtcbiAgICBjb25zdCBpZCA9IFN0cmluZyhsYXllcj8uaWQgfHwgXCJcIikudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCB0aXRsZSA9IFN0cmluZyhsYXllcj8udGl0bGUgfHwgXCJcIikudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gaWQgPT09IFwiYWdyaS1wb2x5Z29uLWhpZ2hsaWdodFwiIHx8XG4gICAgICB0aXRsZS5pbmNsdWRlcyhcInNlbGVjdGVkIHBvbHlnb24gaGlnaGxpZ2h0XCIpIHx8XG4gICAgICB0aXRsZS5pbmNsdWRlcyhcInNrZXRjaFwiKTtcbiAgfVxuXG4gIC8qKiBBIHN1YmxheWVyIGlzIGNsaWNrYWJsZSBvbmx5IHdoZW4gaXQgYW5kIGV2ZXJ5IHBhcmVudCBhcmUgdmlzaWJsZS4gKi9cbiAgcHJpdmF0ZSBpc0xheWVyRWZmZWN0aXZlbHlWaXNpYmxlKFxuICAgIGxheWVyOiBhbnksXG4gICAgdmlldzogX19lc3JpLk1hcFZpZXcgfCBfX2VzcmkuU2NlbmVWaWV3LFxuICApOiBib29sZWFuIHtcbiAgICBpZiAoIWxheWVyIHx8IHRoaXMuaXNIaWdobGlnaHRMYXllcihsYXllcikpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBzZWVuID0gbmV3IFNldDxhbnk+KCk7XG4gICAgbGV0IGN1cnJlbnQ6IGFueSA9IGxheWVyO1xuICAgIHdoaWxlIChjdXJyZW50ICYmICFzZWVuLmhhcyhjdXJyZW50KSkge1xuICAgICAgc2Vlbi5hZGQoY3VycmVudCk7XG4gICAgICBpZiAoY3VycmVudC52aXNpYmxlID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50IHx8IGN1cnJlbnQubGF5ZXIgfHwgbnVsbDtcbiAgICB9XG4gICAgY29uc3Qgc2NhbGUgPSBOdW1iZXIoKHZpZXcgYXMgYW55KT8uc2NhbGUgfHwgMCk7XG4gICAgY29uc3QgbWluU2NhbGUgPSBOdW1iZXIobGF5ZXIubWluU2NhbGUgfHwgMCk7XG4gICAgY29uc3QgbWF4U2NhbGUgPSBOdW1iZXIobGF5ZXIubWF4U2NhbGUgfHwgMCk7XG4gICAgaWYgKHNjYWxlID4gMCAmJiBtaW5TY2FsZSA+IDAgJiYgc2NhbGUgPiBtaW5TY2FsZSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChzY2FsZSA+IDAgJiYgbWF4U2NhbGUgPiAwICYmIHNjYWxlIDwgbWF4U2NhbGUpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gU3RyaW5nKGxheWVyLmRlZmluaXRpb25FeHByZXNzaW9uIHx8IFwiMT0xXCIpLnRyaW0oKSAhPT0gXCIxPTBcIjtcbiAgfVxuXG4gIHByaXZhdGUgaXNBZ3JpY3VsdHVyYWxGaWVsZExheWVyKGxheWVyOiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAoIWxheWVyKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gR3JvdXAgTGF5ZXIgZm9sZGVycyBhcmUgbm90IGZpZWxkIHBvbHlnb25zIOKAlCBuZXZlciBhY2NlcHQgdGhlbSBmb3IgY2xpY2suXG4gICAgaWYgKGlzTWFwSW1hZ2VHcm91cFN1YmxheWVyKGxheWVyKSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIFByZWZlciBxdWVyeWFibGUgbGF5ZXJzLCBidXQgdGl0bGUvdXJsIGlkZW50aXR5IGlzIGVub3VnaCB0byBhY2NlcHQgYVxuICAgIC8vIGxpdmUgTWFwSW1hZ2UgbGVhZiB0aGF0IGlzIHN0aWxsIGh5ZHJhdGluZyBpdHMgcXVlcnkgbWV0aG9kcy5cbiAgICBjb25zdCBpZGVudGl0eSA9IGAke2xheWVyLnRpdGxlIHx8IFwiXCJ9ICR7bGF5ZXIudXJsIHx8IFwiXCJ9ICR7bGF5ZXIucGFyZW50Py50aXRsZSB8fCBcIlwifWAudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBsb29rc0FncmkgPSAvXFxiYWdyaVxcYnxhZ3JpY3VsdHVyZXxxaXNobG9xLy50ZXN0KGlkZW50aXR5KTtcbiAgICBpZiAoIWlzUXVlcnlhYmxlRmllbGRMYXllcihsYXllcikgJiYgIWxvb2tzQWdyaSkgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IGdlb21ldHJ5VHlwZSA9IFN0cmluZyhsYXllci5nZW9tZXRyeVR5cGUgfHwgXCJcIikudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoZ2VvbWV0cnlUeXBlICYmIGdlb21ldHJ5VHlwZSAhPT0gXCJwb2x5Z29uXCIpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBmaWVsZHM6IGFueVtdID0gQXJyYXkuaXNBcnJheShsYXllci5maWVsZHMpID8gbGF5ZXIuZmllbGRzIDogW107XG4gICAgY29uc3QgbmFtZXMgPSBuZXcgU2V0KGZpZWxkcy5tYXAoKGZpZWxkKSA9PiBTdHJpbmcoZmllbGQ/Lm5hbWUgfHwgXCJcIikudG9Mb3dlckNhc2UoKSkpO1xuICAgIGlmIChuYW1lcy5oYXMoXCJ1bmlxdWVpZFwiKSB8fCBuYW1lcy5oYXMoXCJjcm9wX2lkXCIpIHx8IG5hbWVzLmhhcyhcInR1cmlcIikpIHJldHVybiB0cnVlO1xuICAgIC8vIGxvb2tzQWdyaSBhbG9uZSBpcyBPSyBmb3IgYSBoeWRyYXRpbmcgbGVhZjsgZ3JvdXBzIGFscmVhZHkgcmVqZWN0ZWQgYWJvdmUuXG4gICAgcmV0dXJuIGxvb2tzQWdyaTtcbiAgfVxuXG4gIHByaXZhdGUgaXNBZ3JpY3VsdHVyYWxGaWVsZEdyYXBoaWMoZ3JhcGhpYzogX19lc3JpLkdyYXBoaWMsIGxheWVyOiBhbnkpOiBib29sZWFuIHtcbiAgICBjb25zdCBnZW9tZXRyeVR5cGUgPSBTdHJpbmcoZ3JhcGhpYz8uZ2VvbWV0cnk/LnR5cGUgfHwgXCJcIikudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoZ2VvbWV0cnlUeXBlICYmIGdlb21ldHJ5VHlwZSAhPT0gXCJwb2x5Z29uXCIgJiYgZ2VvbWV0cnlUeXBlICE9PSBcIm11bHRpcG9seWdvblwiKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgYXR0cnMgPSBncmFwaGljPy5hdHRyaWJ1dGVzIHx8IHt9O1xuICAgIGNvbnN0IGtleXMgPSBuZXcgU2V0KE9iamVjdC5rZXlzKGF0dHJzKS5tYXAoKGtleSkgPT4ga2V5LnRvTG93ZXJDYXNlKCkpKTtcbiAgICByZXR1cm4ga2V5cy5oYXMoXCJ1bmlxdWVpZFwiKSB8fCBrZXlzLmhhcyhcImNyb3BfaWRcIikgfHwga2V5cy5oYXMoXCJ0dXJpXCIpIHx8XG4gICAgICB0aGlzLmlzQWdyaWN1bHR1cmFsRmllbGRMYXllcihsYXllcik7XG4gIH1cbiAgcHJpdmF0ZSBnZXRDbGlja1RhcmdldExheWVycyhcbiAgICB2aWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsXG4gICk6IF9fZXNyaS5GZWF0dXJlTGF5ZXJbXSB7XG4gICAgY29uc3QgeyBmZWF0dXJlTGF5ZXJzLCBsYXllcktleVRvRHNJZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBkc0tleXMgPSBPYmplY3Qua2V5cyhsYXllcktleVRvRHNJZCB8fCB7fSk7XG4gICAgY29uc3QgbWFwID0gdmlldy5tYXA7XG4gICAgY29uc3QgY29uZmlndXJlZExheWVycyA9IGZlYXR1cmVMYXllcnMgfHwgW107XG4gICAgY29uc3QgbGl2ZVJvb3RzID1cbiAgICAgICgobWFwIGFzIGFueSk/LmFsbExheWVycz8udG9BcnJheT8uKCkgYXMgYW55W10pIHx8IFtdO1xuICAgIC8vIE1hcEltYWdlIHBhcmVudHMgYXJlIG5vdCBxdWVyeWFibGUg4oCUIGV4cGFuZCB0byBhZ3JpL2ZlYXR1cmUgc3VibGF5ZXJzLlxuICAgIGNvbnN0IGxpdmVNYXBMYXllcnM6IF9fZXNyaS5GZWF0dXJlTGF5ZXJbXSA9IFtdO1xuICAgIGNvbnN0IHNlZW4gPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBjb25zdCBwdXNoTGl2ZSA9IChsYXllcjogYW55KSA9PiB7XG4gICAgICBpZiAoIWxheWVyIHx8ICFpc1F1ZXJ5YWJsZUZpZWxkTGF5ZXIobGF5ZXIpKSByZXR1cm47XG4gICAgICBjb25zdCBrZXkgPVxuICAgICAgICBnZXRBZ3JpTGF5ZXJNYXBLZXkobGF5ZXIpIHx8XG4gICAgICAgIFN0cmluZyhsYXllci51cmwgfHwgbGF5ZXIuaWQgfHwgXCJcIik7XG4gICAgICBpZiAoIWtleSB8fCBzZWVuLmhhcyhrZXkpKSByZXR1cm47XG4gICAgICBzZWVuLmFkZChrZXkpO1xuICAgICAgbGl2ZU1hcExheWVycy5wdXNoKGxheWVyIGFzIF9fZXNyaS5GZWF0dXJlTGF5ZXIpO1xuICAgIH07XG4gICAgZm9yIChjb25zdCByb290IG9mIGxpdmVSb290cykge1xuICAgICAgLy8gV2FsayBncm91cHMgZnVsbHkg4oCUIG5ldmVyIHB1c2ggdGhlIEdyb3VwIExheWVyIG5vZGUgaXRzZWxmXG4gICAgICAvLyAoRmVhdHVyZUxheWVyI2xvYWQgZmFpbHMgd2l0aCB1bnN1cHBvcnRlZC10eXBlIFwiR3JvdXAgTGF5ZXJcIikuXG4gICAgICBmb3IgKGNvbnN0IGxlYWYgb2YgY29sbGVjdFF1ZXJ5YWJsZUZpZWxkTGF5ZXJzKHJvb3QpKSB7XG4gICAgICAgIHB1c2hMaXZlKGxlYWYpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNhbmRpZGF0ZXMgPSBBcnJheS5mcm9tKFxuICAgICAgbmV3IFNldDxfX2VzcmkuRmVhdHVyZUxheWVyPihbXG4gICAgICAgIC4uLmNvbmZpZ3VyZWRMYXllcnMsXG4gICAgICAgIC4uLmxpdmVNYXBMYXllcnMsXG4gICAgICBdKSxcbiAgICApO1xuXG4gICAgcmV0dXJuIGNhbmRpZGF0ZXNcbiAgICAgIC5tYXAoKGxheWVyKSA9PiB0aGlzLnRvTGl2ZU1hcExheWVyKGxheWVyLCBtYXApIHx8IGxheWVyKVxuICAgICAgLmZpbHRlcigobGF5ZXI6IGFueSkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuaXNMYXllckVmZmVjdGl2ZWx5VmlzaWJsZShsYXllciwgdmlldykpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKCF0aGlzLmlzQWdyaWN1bHR1cmFsRmllbGRMYXllcihsYXllcikpIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3Qga2V5ID1cbiAgICAgICAgICBnZXRBZ3JpTGF5ZXJNYXBLZXkobGF5ZXIpIHx8XG4gICAgICAgICAgU3RyaW5nKGxheWVyLnVybCB8fCBsYXllci5pZCB8fCBcIlwiKTtcbiAgICAgICAgaWYgKHRoaXMuaXNEYXNoYm9hcmRFbWJlZGRlZCgpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKCFkc0tleXMubGVuZ3RoKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuICEhbGF5ZXJLZXlUb0RzSWRba2V5XTtcbiAgICAgIH0pIGFzIF9fZXNyaS5GZWF0dXJlTGF5ZXJbXTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcmVzb2x2ZUNsaWNrTGF5ZXJzKFxuICAgIHZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldyxcbiAgICBqbXY6IEppbXVNYXBWaWV3LFxuICApOiBQcm9taXNlPF9fZXNyaS5GZWF0dXJlTGF5ZXJbXT4ge1xuICAgIGxldCBsYXllcnMgPSB0aGlzLmdldENsaWNrVGFyZ2V0TGF5ZXJzKHZpZXcpO1xuICAgIGlmIChsYXllcnMubGVuZ3RoKSByZXR1cm4gbGF5ZXJzO1xuXG4gICAgYXdhaXQgdGhpcy5pbml0aWFsaXplTWFwQ29ubmVjdGlvbihqbXYpO1xuICAgIGxheWVycyA9IHRoaXMuZ2V0Q2xpY2tUYXJnZXRMYXllcnModmlldyk7XG4gICAgaWYgKGxheWVycy5sZW5ndGgpIHJldHVybiBsYXllcnM7XG5cbiAgICAvLyBMYXN0IHJlc29ydDogc2NhbiBtYXAgYWdhaW4gYWZ0ZXIgbGF5ZXJzIG1heSBoYXZlIGZpbmlzaGVkIGxvYWRpbmdcbiAgICAvLyAocG9ydGFsIC8gTWFwSW1hZ2Ugc3VibGF5ZXJzIG9mdGVuIGFyZW4ndCBxdWVyeWFibGUgYXQgZmlyc3QgY29ubmVjdCkuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG1hcExheWVycyA9IGdldEFsbEZlYXR1cmVMYXllcnNGcm9tTWFwKHZpZXcubWFwKTtcbiAgICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgbWFwTGF5ZXJzKSB7XG4gICAgICAgIGF3YWl0IHNhZmVMb2FkTWFwTGF5ZXIobGF5ZXIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2gge1xuICAgICAgLyogaWdub3JlICovXG4gICAgfVxuICAgIHJldHVybiB0aGlzLmdldENsaWNrVGFyZ2V0TGF5ZXJzKHZpZXcpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlQ2xpY2tGZWF0dXJlQXQgPSBhc3luYyAoXG4gICAgZXY6IF9fZXNyaS5WaWV3Q2xpY2tFdmVudCxcbiAgICB2aWV3OiBfX2VzcmkuTWFwVmlldyB8IF9fZXNyaS5TY2VuZVZpZXcsXG4gICAgbGF5ZXJzOiBfX2VzcmkuRmVhdHVyZUxheWVyW10sXG4gICk6IFByb21pc2U8e1xuICAgIGdyYXBoaWM6IF9fZXNyaS5HcmFwaGljO1xuICAgIHF1ZXJ5SGl0TGF5ZXI6IF9fZXNyaS5GZWF0dXJlTGF5ZXIgfCBudWxsO1xuICB9IHwgbnVsbD4gPT4ge1xuICAgIGNvbnN0IGNsaWNrU2NyZWVuUG9pbnQgPSB7IHg6IGV2LngsIHk6IGV2LnkgfTtcbiAgICBjb25zdCBxdWVyeUdlb21ldHJ5ID0gdGhpcy50b0NsaWNrUXVlcnlHZW9tZXRyeShcbiAgICAgIHZpZXcsXG4gICAgICBjbGlja1NjcmVlblBvaW50LFxuICAgICAgZXYubWFwUG9pbnQsXG4gICAgKTtcblxuICAgIGNvbnN0IHF1ZXJ5TGF5ZXJzID1cbiAgICAgIGxheWVycy5sZW5ndGggPiAwXG4gICAgICAgID8gbGF5ZXJzXG4gICAgICAgIDogKHRoaXMuZ2V0Q2xpY2tUYXJnZXRMYXllcnModmlldykgYXMgX19lc3JpLkZlYXR1cmVMYXllcltdKTtcblxuICAgIC8vIGhpdFRlc3QgLyBpZGVudGlmeSBjYW4gcmVoeWRyYXRlIE1hcEltYWdlIHN1YmxheWVycyBhbmQgY2xlYXIgdGhlaXJcbiAgICAvLyBydW50aW1lIGRlZmluaXRpb25FeHByZXNzaW9uIChkaXN0cmljdCBmaWx0ZXIpIOKAlCBzbmFwc2hvdCBldmVyeSBjbGlja1xuICAgIC8vIGNhbmRpZGF0ZSBub3cgYW5kIHJlc3RvcmUgYW55IGRyaWZ0IHN5bmNocm9ub3VzbHkgYWZ0ZXJ3YXJkcywgYmVmb3JlXG4gICAgLy8gYW4gdW5maWx0ZXJlZCBleHBvcnQgZ2V0cyBwYWludGVkIChvdGhlci1kaXN0cmljdCBmaWVsZHMgZmxhc2gpLlxuICAgIGNvbnN0IGRlZmluaXRpb25TbmFwc2hvdCA9IHRoaXMuc25hcHNob3REZWZpbml0aW9uRXhwcmVzc2lvbnMoW1xuICAgICAgLi4ubGF5ZXJzLFxuICAgICAgLi4ucXVlcnlMYXllcnMsXG4gICAgXSk7XG5cbiAgICAvLyBBbHdheXMgaGl0LXRlc3QgdGhlIHJlbmRlcmVkIG1hcCB3aXRob3V0IGFuIGluY2x1ZGUgcmVzdHJpY3Rpb24uIE1hcC1pbWFnZVxuICAgIC8vIHN1YmxheWVycyBmcmVxdWVudGx5IGhhdmUgcnVudGltZSBpZHMvVVJMcyB0aGF0IGRpZmZlciBmcm9tIGNvbmZpZ3VyZWQgRFNcbiAgICAvLyB3cmFwcGVyczsgcmVzdHJpY3RpbmcgaW5jbHVkZS9wcmVmZXJyZWQgbGF5ZXJzIG1ha2VzIHZpc2libGUgZmllbGRzIHVuY2xpY2thYmxlLlxuICAgIGNvbnN0IGhpdCA9IGF3YWl0IHZpZXcuaGl0VGVzdChldik7XG4gICAgdGhpcy5yZXN0b3JlRHJpZnRlZERlZmluaXRpb25FeHByZXNzaW9ucyhkZWZpbml0aW9uU25hcHNob3QpO1xuICAgIC8vIE9ubHkgYWNjZXB0IGdyYXBoaWNzIGJlbG9uZ2luZyB0byB0aGUgY29uZmlndXJlZCBhZ3JpY3VsdHVyYWwgbGF5ZXJzLlxuICAgIC8vIFdlYk1hcCBza2V0Y2gvbWFwLW5vdGVzIGdyYXBoaWNzIGNhbiBjb250YWluIHBhZ2Utc2l6ZWQgcG9seWdvbnM7IHRyZWF0aW5nXG4gICAgLy8gb25lIGFzIGEgZmllbGQgbWFrZXMgZ29UbyB6b29tIG91dCB0byBhIHdvcmxkIGV4dGVudC5cbiAgICAvLyBFbXB0eSBgbGF5ZXJzYCBzdGlsbCBhbGxvd3MgYWdyaWN1bHR1cmFsIGhpdHMgKG5vIHByZWZlcnJlZCByZXN0cmljdGlvbikuXG4gICAgbGV0IGcgPSB0aGlzLnBpY2tDbGlja0dyYXBoaWMoaGl0LCBsYXllcnMpO1xuICAgIGxldCBxdWVyeUhpdExheWVyOiBfX2VzcmkuRmVhdHVyZUxheWVyIHwgbnVsbCA9IG51bGw7XG5cbiAgICBpZiAoIWcgJiYgcXVlcnlHZW9tZXRyeSAmJiBxdWVyeUxheWVycy5sZW5ndGgpIHtcbiAgICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgcXVlcnlMYXllcnMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzTGF5ZXJFZmZlY3RpdmVseVZpc2libGUobGF5ZXIsIHZpZXcpKSBjb250aW51ZTtcbiAgICAgICAgaWYgKCF0aGlzLmlzQWdyaWN1bHR1cmFsRmllbGRMYXllcihsYXllcikpIGNvbnRpbnVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIE5FVkVSIHF1ZXJ5IHRoZSBsaXZlIGxheWVyIGhlcmU6IG9uIGEgTWFwSW1hZ2Ugc3VibGF5ZXIgdGhhdFxuICAgICAgICAgIC8vIHJlaHlkcmF0ZXMgaXQgYW5kIGNsZWFycyB0aGUgdHVtYW4gZGVmaW5pdGlvbkV4cHJlc3Npb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG1hcCBicmllZmx5IGV4cG9ydHMvcGFpbnRzIGV2ZXJ5IGRpc3RyaWN0J3MgZmllbGRzIHdoaWxlIHRoZVxuICAgICAgICAgIC8vIHBvcHVwIHpvb20gcnVucy4gVXNlIHRoZSBkZXRhY2hlZCBvZmYtbWFwIGNsaWVudCBpbnN0ZWFkIGFuZFxuICAgICAgICAgIC8vIG1pcnJvciB0aGUgbGl2ZSBmaWx0ZXIgb250byB0aGUgcXVlcnkgV0hFUkUuXG4gICAgICAgICAgY29uc3QgbGl2ZVdoZXJlID0gU3RyaW5nKFxuICAgICAgICAgICAgKGxheWVyIGFzIGFueSkuZGVmaW5pdGlvbkV4cHJlc3Npb24gfHwgXCJcIixcbiAgICAgICAgICApLnRyaW0oKTtcbiAgICAgICAgICBjb25zdCBkZXRhY2hlZCA9IGF3YWl0IHRoaXMuZ2V0RGV0YWNoZWRRdWVyeUxheWVyKGxheWVyKTtcbiAgICAgICAgICBjb25zdCBxdWVyeVRhcmdldCA9IGRldGFjaGVkIHx8IGxheWVyO1xuICAgICAgICAgIGNvbnN0IHEgPSBxdWVyeVRhcmdldC5jcmVhdGVRdWVyeSgpO1xuICAgICAgICAgIHEuZ2VvbWV0cnkgPSBxdWVyeUdlb21ldHJ5O1xuICAgICAgICAgIHEuc3BhdGlhbFJlbGF0aW9uc2hpcCA9IFwiaW50ZXJzZWN0c1wiO1xuICAgICAgICAgIHEub3V0RmllbGRzID0gW1wiKlwiXTtcbiAgICAgICAgICBxLnJldHVybkdlb21ldHJ5ID0gdHJ1ZTtcbiAgICAgICAgICBxLm51bSA9IDE7XG4gICAgICAgICAgaWYgKGxpdmVXaGVyZSAmJiBsaXZlV2hlcmUgIT09IFwiMT0xXCIpIHEud2hlcmUgPSBsaXZlV2hlcmU7XG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcXVlcnlUYXJnZXQucXVlcnlGZWF0dXJlcyhxKTtcbiAgICAgICAgICBpZiAoIWRldGFjaGVkKSB7XG4gICAgICAgICAgICAvLyBMaXZlLWxheWVyIGZhbGxiYWNrIChubyBVUkwpIOKAlCByZXBhaXIgYW55IGRyaWZ0IGltbWVkaWF0ZWx5LlxuICAgICAgICAgICAgdGhpcy5yZXN0b3JlRHJpZnRlZERlZmluaXRpb25FeHByZXNzaW9ucyhkZWZpbml0aW9uU25hcHNob3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzLmZlYXR1cmVzPy5bMF0pIHtcbiAgICAgICAgICAgIGcgPSByZXMuZmVhdHVyZXNbMF07XG4gICAgICAgICAgICAvLyBLZWVwIHRoZSBMSVZFIGxheWVyIGFzIHRoZSBoaXQgbGF5ZXIg4oCUIGRvd25zdHJlYW0gbGF5ZXIta2V5IC9cbiAgICAgICAgICAgIC8vIGRzSWQgLyBhbGlhcyByZXNvbHV0aW9uIG11c3QgbWFwIGJhY2sgdG8gdGhlIG1hcCdzIG93biBsYXllci5cbiAgICAgICAgICAgIHF1ZXJ5SGl0TGF5ZXIgPSBsYXllcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgLyogdHJ5IG5leHQgbGF5ZXIgKi9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghZykgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIHsgZ3JhcGhpYzogZywgcXVlcnlIaXRMYXllciB9O1xuICB9O1xuXG4gIC8qKiBDYXNlLWluc2Vuc2l0aXZlIGF0dHJpYnV0ZSBsb29rdXAg4oCUIHRoZSBwb2x5Z29uIGxheWVyJ3Mgam9pbiBmaWVsZCBjYXNpbmcgaXMgbm90IGd1YXJhbnRlZWQuICovXG4gIHByaXZhdGUgZmluZEF0dHJpYnV0ZVZhbHVlQ2FzZUluc2Vuc2l0aXZlKFxuICAgIGF0dHJpYnV0ZXM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCBudWxsIHwgdW5kZWZpbmVkLFxuICAgIGZpZWxkTmFtZTogc3RyaW5nLFxuICApOiBhbnkge1xuICAgIHJldHVybiBmaW5kQXR0cmlidXRlVmFsdWVDYXNlSW5zZW5zaXRpdmVTaGFyZWQoYXR0cmlidXRlcywgZmllbGROYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZWxscyBBZ3JpR3JhZmYxMCAodmlhIEFncmlMb2NhbGl6YXRpb24sIHRoZSBjZW50cmFsIGZpbHRlciBodWIpIHdoaWNoXG4gICAqIHBvbHlnb24gaXMgY3VycmVudGx5IGluc3BlY3RlZCBzbyBpdHMgY2hhcnQgY2FuIHN3aXRjaCB0byBzaG93aW5nIHRoYXRcbiAgICogc2luZ2xlIHBvbHlnb24ncyB2ZWdldGF0aW9uLWluZGV4IHNlcmllcyBpbnN0ZWFkIG9mIHRoZSByZWdpb24td2lkZVxuICAgKiB0aW1lc2VyaWVzLiBNaXJyb3JzIHRoZSB3aWRnZXRTZWxlY3Rpb25DaGFuZ2VkIHNoYXBlIEFncmlHcmFmZldpZGdldFxuICAgKiBpdHNlbGYgYWxyZWFkeSBkaXNwYXRjaGVzIG9uIGl0cyBvd24gcm93LWNsaWNrIHNlbGVjdGlvbi5cbiAgICovXG4gIHByaXZhdGUgbm90aWZ5R3JhZmZQb2x5Z29uU2VsZWN0aW9uID0gKFxuICAgIHVuaXF1ZWlkOiBzdHJpbmcsXG4gICAgcG9seWdvbk1vZGU6IGJvb2xlYW4sXG4gICAgY2xpY2tlZEF0PzogbnVtYmVyLFxuICApOiB2b2lkID0+IHtcbiAgICB0cnkge1xuICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgbmV3IEN1c3RvbUV2ZW50KFwid2lkZ2V0U2VsZWN0aW9uQ2hhbmdlZFwiLCB7XG4gICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICBzb3VyY2U6IFwiQWdyaVBvcHVwXCIsXG4gICAgICAgICAgICBwb2x5Z29uTW9kZSxcbiAgICAgICAgICAgIHVuaXF1ZWlkOiBwb2x5Z29uTW9kZSA/IHVuaXF1ZWlkIDogXCJcIixcbiAgICAgICAgICAgIC8vIFRpbWVzdGFtcCBvZiB0aGUgT1JJR0lOQUwgbWFwIGNsaWNrIChjYXB0dXJlZCBiZWZvcmUgdGhpc1xuICAgICAgICAgICAgLy8gd2lkZ2V0J3Mgb3duIGFzeW5jIGF0dHJpYnV0ZS1yZXNvbHV0aW9uIGNoYWluKSwgbm90IG9mIHRoaXNcbiAgICAgICAgICAgIC8vIGRpc3BhdGNoIOKAlCBsZXRzIGRvd25zdHJlYW0gbGlzdGVuZXJzIChBZ3JpR3JhZmYxMCkgZGV0ZWN0IGFuZFxuICAgICAgICAgICAgLy8gaWdub3JlIGEgc3RhbGUgbm90aWZpY2F0aW9uIHRoYXQgcmVzb2x2ZXMgYWZ0ZXIgYSBuZXdlciBjbGlja1xuICAgICAgICAgICAgLy8gd2FzIGFscmVhZHkgYXBwbGllZCAoc2VlIEFncmlHcmFmZjEwJ3MgX2xhc3RBcHBsaWVkUG9seWdvbkNsaWNrZWRBdCkuXG4gICAgICAgICAgICBjbGlja2VkQXQ6IGNsaWNrZWRBdCA/PyBEYXRlLm5vdygpLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH0gY2F0Y2gge1xuICAgICAgLyogaWdub3JlICovXG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgYnJvYWRjYXN0UG9wdXBWaXNpYmlsaXR5ID0gKG9wZW46IGJvb2xlYW4pOiB2b2lkID0+IHtcbiAgICBjb25zdCBwaW5uZWQgPSAhIXRoaXMuc3RhdGUucGluVG9Db3JuZXI7XG4gICAgdHJ5IHtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBDdXN0b21FdmVudChcImFncmlNYXBQb3B1cFZpc2liaWxpdHlcIiwge1xuICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgb3BlbjogISFvcGVuLFxuICAgICAgICAgICAgcGlubmVkLFxuICAgICAgICAgICAgc291cmNlOiBcIkFncmlQb3B1cFwiLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH0gY2F0Y2gge1xuICAgICAgLyogaWdub3JlICovXG4gICAgfVxuICAgIGlmIChvcGVuKSB7XG4gICAgICAvLyBSZS1ub3RpZnkgYWZ0ZXIgcGFpbnQgc28gTkRWSSBjYW4gbWVhc3VyZSB0aGUgcmVhbCBwb3B1cCBib3guXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoXCJhZ3JpTWFwUG9wdXBWaXNpYmlsaXR5XCIsIHtcbiAgICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwaW5uZWQsXG4gICAgICAgICAgICAgICAgbGF5b3V0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHNvdXJjZTogXCJBZ3JpUG9wdXBcIixcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAvKiBpZ25vcmUgKi9cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFZFR19JTkRFWF9GSUVMRFMgPSBbLi4uR1JBRkZfSU5ERVhfT1JERVJdO1xuXG4gIC8qKlxuICAgKiBMYXRlc3QtZGF5IHZlZ2V0YXRpb24gaW5kZXggdmFsdWVzIGZvciB0aGUgc2VsZWN0ZWQgcG9seWdvbiwgc2hvd24gaW5cbiAgICogdGhlIHBvcHVwLiBSZXVzZXMgcXVlcnlWZWdldGF0aW9uU2VyaWVzRm9yVW5pcXVlSWQgKHF1ZXJpZXMgdGhlXG4gICAqIGFncmlfdmVnZXRhdGlvbl9pbmRpY2VzIEFyY0dJUyB0YWJsZSBkaXJlY3RseSwgc2FtZSBzb3VyY2UgQWdyaUdyYWZmMTAnc1xuICAgKiBjaGFydCB1c2VzKSByYXRoZXIgdGhhbiB0aGUgYXBpLWFncmkgZXhwb3J0LWltYWdlL2F2YWlsYWJsZS1kYXRlcyBSRVNUXG4gICAqIGVuZHBvaW50cyDigJQgdGhvc2UgYXJlIGZvciBmZXRjaGluZyBhIHJlbmRlcmVkIHJhc3RlciBmb3IgYSBzcGVjaWZpY1xuICAgKiBjaG9zZW4gZGF0ZSwgd2hpY2ggaXMgdW5uZWNlc3NhcnkgaGVyZTsgd2Ugb25seSBuZWVkIHRoZSBzY2FsYXIgaW5kZXhcbiAgICogdmFsdWVzIGZvciB3aGljaGV2ZXIgZGF0ZSBpcyBtb3N0IHJlY2VudCwgYW5kIHRoZSB0YWJsZSBhbHJlYWR5IGhhc1xuICAgKiBuZHZpL3NhdmkvcnZpL2NpL2V2aS9uZHdpIGFzIHBsYWluIGZpZWxkcyBwZXIgKHVuaXF1ZWlkLCByYXN0ZXJfZGF0ZSkuXG4gICAqL1xuICBwcml2YXRlIGZldGNoTGF0ZXN0VmVnZXRhdGlvbkluZGljZXMgPSBhc3luYyAoXG4gICAgdW5pcXVlSWQ6IHN0cmluZyxcbiAgKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgaWQgPSBTdHJpbmcodW5pcXVlSWQgfHwgXCJcIikudHJpbSgpO1xuICAgIGlmICghaWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsb2FkaW5nTGF0ZXN0SW5kaWNlczogZmFsc2UsXG4gICAgICAgIGxhdGVzdEluZGV4RGF0ZTogbnVsbCxcbiAgICAgICAgbGF0ZXN0SW5kZXhWYWx1ZXM6IG51bGwsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZXF1ZXN0SWQgPSArK3RoaXMuX2xhdGVzdEluZGljZXNSZXF1ZXN0SWQ7XG4gICAgYWdyaU1hcENsaWNrRGVidWcoXCJ2ZWdldGF0aW9uOnJlcXVlc3RcIiwge1xuICAgICAgdW5pcXVlaWQ6IGlkLFxuICAgICAgc291cmNlOiBcImFncmlfdmVnZXRhdGlvbl9pbmRpY2VzL0ZlYXR1cmVTZXJ2ZXIvMVwiLFxuICAgICAgcmVxdWVzdElkLFxuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9hZGluZ0xhdGVzdEluZGljZXM6IHRydWUsXG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm93cyA9IGF3YWl0IHF1ZXJ5VmVnZXRhdGlvblNlcmllc0ZvclVuaXF1ZUlkKGlkKTtcbiAgICAgIGlmICghdGhpcy5faXNNb3VudGVkIHx8IHJlcXVlc3RJZCAhPT0gdGhpcy5fbGF0ZXN0SW5kaWNlc1JlcXVlc3RJZCkgcmV0dXJuO1xuXG4gICAgICBpZiAoIXJvd3MubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGxvYWRpbmdMYXRlc3RJbmRpY2VzOiBmYWxzZSxcbiAgICAgICAgICBsYXRlc3RJbmRleERhdGU6IG51bGwsXG4gICAgICAgICAgbGF0ZXN0SW5kZXhWYWx1ZXM6IG51bGwsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFJvd3MgY29tZSBiYWNrIG9yZGVyZWQgYnkgcmFzdGVyX2RhdGUgQVNDIOKAlCB0aGUgbGFzdCBvbmUgaXMgdGhlXG4gICAgICAvLyBtb3N0IHJlY2VudCBwcm9jZXNzZWQgZGF0ZSBmb3IgdGhpcyBwb2x5Z29uLlxuICAgICAgY29uc3QgbGF0ZXN0ID0gcm93c1tyb3dzLmxlbmd0aCAtIDFdIGFzIFJlY29yZDxzdHJpbmcsIGFueT47XG4gICAgICBjb25zdCBkYXRlID0gZm9ybWF0QXJjZ2lzRGF0ZVRvWW1kKGxhdGVzdC5yYXN0ZXJfZGF0ZSk7XG4gICAgICBjb25zdCB2YWx1ZXM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fTtcbiAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgQWdyaVBvbHlnb24uVkVHX0lOREVYX0ZJRUxEUykge1xuICAgICAgICBjb25zdCB2ID0gTnVtYmVyKGxhdGVzdFtmaWVsZF0pO1xuICAgICAgICBpZiAoTnVtYmVyLmlzRmluaXRlKHYpKSB2YWx1ZXNbZmllbGRdID0gdjtcbiAgICAgIH1cbiAgICAgIGFncmlNYXBDbGlja0RlYnVnKFwidmVnZXRhdGlvbjpyZXNwb25zZVwiLCB7XG4gICAgICAgIHVuaXF1ZWlkOiBpZCxcbiAgICAgICAgcmVxdWVzdElkLFxuICAgICAgICByb3dDb3VudDogcm93cy5sZW5ndGgsXG4gICAgICAgIGxhdGVzdERhdGU6IGRhdGUsXG4gICAgICAgIHZhbHVlcyxcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbG9hZGluZ0xhdGVzdEluZGljZXM6IGZhbHNlLFxuICAgICAgICBsYXRlc3RJbmRleERhdGU6IGRhdGUsXG4gICAgICAgIGxhdGVzdEluZGV4VmFsdWVzOiBPYmplY3Qua2V5cyh2YWx1ZXMpLmxlbmd0aCA/IHZhbHVlcyA6IG51bGwsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIGlmICghdGhpcy5faXNNb3VudGVkIHx8IHJlcXVlc3RJZCAhPT0gdGhpcy5fbGF0ZXN0SW5kaWNlc1JlcXVlc3RJZCkgcmV0dXJuO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxvYWRpbmdMYXRlc3RJbmRpY2VzOiBmYWxzZSxcbiAgICAgICAgbGF0ZXN0SW5kZXhEYXRlOiBudWxsLFxuICAgICAgICBsYXRlc3RJbmRleFZhbHVlczogbnVsbCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQWdyaV90YWJsZV9kYXRhIGlzIGFuIGV4dGVybmFsIFRhYmxlIChubyBnZW9tZXRyeSkg4oCUIHRoZSBtYXAgY2xpY2sgc3RpbGxcbiAgICogcmVzb2x2ZXMgdGhlIHBvbHlnb24gZmVhdHVyZSBmb3IgaGlnaGxpZ2h0L3pvb20sIGJ1dCB0aGUgZGlzcGxheWVkXG4gICAqIGF0dHJpYnV0ZXMgY29tZSBmcm9tIEFncmlfdGFibGVfZGF0YSwgam9pbmVkIGJ5IHVuaXF1ZWlkLlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyByZXNvbHZlRGlzcGxheUF0dHJzKFxuICAgIHBvbHlnb25BdHRyaWJ1dGVzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgbnVsbCB8IHVuZGVmaW5lZCxcbiAgKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCBhbnk+PiB7XG4gICAgY29uc3Qgam9pblZhbHVlID0gdGhpcy5maW5kQXR0cmlidXRlVmFsdWVDYXNlSW5zZW5zaXRpdmUoXG4gICAgICBwb2x5Z29uQXR0cmlidXRlcyxcbiAgICAgIEFHUklfVEFCTEVfSk9JTl9GSUVMRCxcbiAgICApO1xuICAgIGlmIChqb2luVmFsdWUgPT0gbnVsbCB8fCBTdHJpbmcoam9pblZhbHVlKS50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgIGFncmlNYXBDbGlja1dhcm4oXCJhZ3JpLXRhYmxlLWpvaW46U0tJUC1uby11bmlxdWVpZFwiLCB7XG4gICAgICAgIHBvbHlnb25BdHRyaWJ1dGVLZXlzOiBPYmplY3Qua2V5cyhwb2x5Z29uQXR0cmlidXRlcyB8fCB7fSksXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwb2x5Z29uQXR0cmlidXRlcyB8fCB7fTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGFncmlNYXBDbGlja0RlYnVnKFwiYWdyaS10YWJsZS1qb2luOnJlcXVlc3RcIiwge1xuICAgICAgICB1bmlxdWVpZDogU3RyaW5nKGpvaW5WYWx1ZSksXG4gICAgICAgIHNvdXJjZTogXCJBZ3JpX3RhYmxlX2RhdGEvRmVhdHVyZVNlcnZlci8yXCIsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGFncmlSZWNvcmQgPSBhd2FpdCBxdWVyeUFncmlSZWNvcmRCeVVuaXF1ZUlkKFN0cmluZyhqb2luVmFsdWUpKTtcbiAgICAgIGFncmlNYXBDbGlja0RlYnVnKFwiYWdyaS10YWJsZS1qb2luOnJlc3BvbnNlXCIsIHtcbiAgICAgICAgdW5pcXVlaWQ6IFN0cmluZyhqb2luVmFsdWUpLFxuICAgICAgICBmb3VuZDogQm9vbGVhbihhZ3JpUmVjb3JkKSxcbiAgICAgICAgYXR0cmlidXRlS2V5czogT2JqZWN0LmtleXMoYWdyaVJlY29yZCB8fCB7fSksXG4gICAgICB9KTtcbiAgICAgIGlmIChhZ3JpUmVjb3JkKSB7XG4gICAgICAgIC8vIEtlZXAgcG9seWdvbi1vbmx5IHZhbHVlcyAoZm9yIGV4YW1wbGUgc3RfYXJlYShzaGFwZSkpIHdoaWxlIGFsbG93aW5nXG4gICAgICAgIC8vIHRoZSBqb2luZWQgQWdyaSB0YWJsZSB0byBwcm92aWRlL292ZXJyaWRlIHRoZSBwb3B1cCdzIGJ1c2luZXNzIGRhdGEuXG4gICAgICAgIHJldHVybiB7IC4uLihwb2x5Z29uQXR0cmlidXRlcyB8fCB7fSksIC4uLmFncmlSZWNvcmQgfTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBhZ3JpTWFwQ2xpY2tXYXJuKFwiQWdyaV90YWJsZV9kYXRhIGxvb2t1cCBmYWlsZWRcIiwge1xuICAgICAgICB1bmlxdWVJZDogam9pblZhbHVlLFxuICAgICAgICBlcnJvcjogKGUgYXMgYW55KT8ubWVzc2FnZSB8fCBTdHJpbmcoZSksXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHBvbHlnb25BdHRyaWJ1dGVzIHx8IHt9O1xuICB9XG5cbiAgcHJpdmF0ZSBvblZpZXdDbGljayA9IGFzeW5jIChldjogX19lc3JpLlZpZXdDbGlja0V2ZW50KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBDdXN0b21FdmVudChcImFncmlQb2x5Z29uTWFwQ2xpY2tQaGFzZVwiLCB7XG4gICAgICAgICAgZGV0YWlsOiB7IHBoYXNlOiBcImNsaWNrLXN0YXJ0XCIsIHRpbWVzdGFtcDogRGF0ZS5ub3coKSB9LFxuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAvKiBiZXN0LWVmZm9ydCBmaWx0ZXIgZ3VhcmQgKi9cbiAgICB9XG4gICAgLy8gQ2FwdHVyZWQgQkVGT1JFIGFueSBhd2FpdHMgYmVsb3cg4oCUIHRoaXMgd2lkZ2V0J3MgYXR0cmlidXRlLXJlc29sdXRpb25cbiAgICAvLyBjaGFpbiAocmVzb2x2ZUNsaWNrTGF5ZXJzL3Jlc29sdmVDbGlja0ZlYXR1cmVBdC9xdWVyeS9yZXNvbHZlRGlzcGxheUF0dHJzKVxuICAgIC8vIGNhbiB0YWtlIG5vdGljZWFibHkgbG9uZ2VyIHRoYW4gQWdyaUdyYWZmMTAncyBvd24sIG1vcmUgZGlyZWN0IG1hcC1jbGlja1xuICAgIC8vIGhhbmRsaW5nIG9mIHRoZSBzYW1lIGNsaWNrLiBJZiB0aGUgdXNlciBjbGlja3MgYSBzZWNvbmQgcG9seWdvbiBiZWZvcmVcbiAgICAvLyB0aGlzIGNoYWluIGZpbmlzaGVzLCB0aGUgc3RhbGUgcmVzdWx0IG11c3Qgbm90IHdpbiDigJQgY2xpY2tlZEF0IGxldHNcbiAgICAvLyBBZ3JpR3JhZmYxMCBkZXRlY3QgYW5kIGRyb3AgaXQuXG4gICAgY29uc3QgY2xpY2tTdGFydGVkQXQgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IGNsaWNrR2VuZXJhdGlvbiA9ICsrdGhpcy5fY2xpY2tHZW5lcmF0aW9uO1xuICAgIGFncmlNYXBDbGlja0RlYnVnKFwiY2xpY2s6cmVjZWl2ZWRcIiwge1xuICAgICAgY2xpY2tHZW5lcmF0aW9uLFxuICAgICAgeDogZXYueCxcbiAgICAgIHk6IGV2LnksXG4gICAgICBtYXBQb2ludDogZXYubWFwUG9pbnRcbiAgICAgICAgPyB7XG4gICAgICAgICAgICB4OiBldi5tYXBQb2ludC54LFxuICAgICAgICAgICAgeTogZXYubWFwUG9pbnQueSxcbiAgICAgICAgICAgIHdraWQ6IGV2Lm1hcFBvaW50LnNwYXRpYWxSZWZlcmVuY2U/LndraWQgfHwgbnVsbCxcbiAgICAgICAgICB9XG4gICAgICAgIDogbnVsbCxcbiAgICB9KTtcbiAgICBjb25zdCBpc1N0YWxlID0gKCkgPT5cbiAgICAgICF0aGlzLl9pc01vdW50ZWQgfHwgY2xpY2tHZW5lcmF0aW9uICE9PSB0aGlzLl9jbGlja0dlbmVyYXRpb247XG4gICAgbGV0IHBvcHVwT3BlbmVkRm9yVGhpc0NsaWNrID0gZmFsc2U7XG4gICAgY29uc3Qgam12ID0gdGhpcy5zdGF0ZS5qaW11TWFwVmlldztcbiAgICBjb25zdCB2aWV3ID0gam12Py52aWV3O1xuICAgIGlmICghdmlldyB8fCAham12KSB7XG4gICAgICBhZ3JpTWFwQ2xpY2tXYXJuKFwib25WaWV3Q2xpY2sgU0tJUDogbm8gdmlldy9qbXZcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbGF5ZXJzID0gYXdhaXQgdGhpcy5yZXNvbHZlQ2xpY2tMYXllcnModmlldywgam12KTtcbiAgICBpZiAoaXNTdGFsZSgpKSByZXR1cm47XG4gICAgYWdyaU1hcENsaWNrRGVidWcoXCJvblZpZXdDbGljayBzdGFydFwiLCB7XG4gICAgICBzY3JlZW46IHsgeDogZXYueCwgeTogZXYueSB9LFxuICAgICAgbGF5ZXJDb3VudDogbGF5ZXJzLmxlbmd0aCxcbiAgICAgIGxheWVyczogbGF5ZXJzLm1hcCgobCkgPT4gKHtcbiAgICAgICAgaWQ6IGwuaWQsXG4gICAgICAgIHRpdGxlOiBsLnRpdGxlLFxuICAgICAgICB1cmw6IGwudXJsLFxuICAgICAgfSkpLFxuICAgIH0pO1xuXG5cbiAgICBjb25zdCBjbGlja1NjcmVlblBvaW50ID0geyB4OiBldi54LCB5OiBldi55IH07XG4gICAgY29uc3QgaGl0UmVzdWx0ID0gYXdhaXQgdGhpcy5yZXNvbHZlQ2xpY2tGZWF0dXJlQXQoZXYsIHZpZXcsIGxheWVycyk7XG4gICAgaWYgKGlzU3RhbGUoKSkgcmV0dXJuO1xuXG4gICAgdHJ5IHtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBDdXN0b21FdmVudChcImFncmlQb2x5Z29uTWFwQ2xpY2tQaGFzZVwiLCB7XG4gICAgICAgICAgZGV0YWlsOiB7IHBoYXNlOiBcImFmdGVyLWhpdC10ZXN0XCIsIHRpbWVzdGFtcDogRGF0ZS5ub3coKSB9LFxuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAvKiBiZXN0LWVmZm9ydCBmaWx0ZXIgZ3VhcmQgKi9cbiAgICB9XG5cbiAgICBpZiAoIWhpdFJlc3VsdCkge1xuICAgICAgLy8gRW1wdHkgbWFwIGNsaWNrIHdoaWxlIGEgZmllbGQgcG9wdXAgaXMgb3BlbiA9IGRlc2VsZWN0IGFuZCByZXR1cm4gdG9cbiAgICAgIC8vIHRoZSBkaXN0cmljdC9yZWdpb24gZXh0ZW50IHNhdmVkIGJlZm9yZSB0aGUgZmllbGQgem9vbS5cbiAgICAgIGlmICh0aGlzLnN0YXRlLnNob3dQb3B1cCB8fCB0aGlzLnN0YXRlLmxvYWRpbmcpIHtcbiAgICAgICAgYWdyaU1hcENsaWNrRGVidWcoXCJvblZpZXdDbGljazogY2xpY2sgb3V0c2lkZSDigJQgY2xvc2UgcG9wdXAgKyByZXN0b3JlIGV4dGVudFwiKTtcbiAgICAgICAgdGhpcy5jbG9zZVBvcHVwKHsgcmVzdG9yZUV4dGVudDogdHJ1ZSwgbm90aWZ5RGVzZWxlY3Q6IHRydWUgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZ3JpTWFwQ2xpY2tEZWJ1ZyhcIm9uVmlld0NsaWNrOiBjbGljayBvdXRzaWRlIGZpZWxkIHBvbHlnb25zIOKAlCBpZ25vcmVkXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgZ3JhcGhpYzogZywgcXVlcnlIaXRMYXllciB9ID0gaGl0UmVzdWx0O1xuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgY2xpY2tTY3JlZW5Qb2ludCxcbiAgICAgICAgbG9hZGluZ0F0dGFjaG1lbnRzOiB0cnVlLFxuICAgICAgICBhdHRhY2htZW50czogW10sXG4gICAgICAgIGF0dGFjaG1lbnRzRXhwYW5kZWQ6IHRydWUsXG4gICAgICB9KTtcblxuICAgICAgYWdyaU1hcENsaWNrRGVidWcoXCJmaWVsZCBwb2x5Z29uIGhpdFwiLCB7XG4gICAgICAgIGxheWVySWQ6IChnIGFzIGFueSkubGF5ZXI/LmlkLFxuICAgICAgICBnZW9tZXRyeTogZy5nZW9tZXRyeT8udHlwZSB8fCBudWxsLFxuICAgICAgICBhdHRyS2V5czogZy5hdHRyaWJ1dGVzXG4gICAgICAgICAgPyBPYmplY3Qua2V5cyhnLmF0dHJpYnV0ZXMpLnNsaWNlKDAsIDgpXG4gICAgICAgICAgOiBbXSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBxdWVyeUZlYXR1cmVzIHJlc3VsdHMgaGF2ZSBubyBncmFwaGljLmxheWVyIOKAlCB1c2UgdGhlIGxheWVyIHdlIHF1ZXJpZWRcbiAgICAgIGNvbnN0IGNsaWNrZWRMYXllciA9IChcbiAgICAgICAgcXVlcnlIaXRMYXllclxuICAgICAgICAgID8gdGhpcy50b0xpdmVNYXBMYXllcihxdWVyeUhpdExheWVyLCB2aWV3Lm1hcCkgfHwgcXVlcnlIaXRMYXllclxuICAgICAgICAgIDogdGhpcy50b0xpdmVNYXBMYXllcihcbiAgICAgICAgICAgICAgZ2V0UXVlcnlhYmxlTGF5ZXIoKGcgYXMgYW55KS5sYXllcikgfHwgKGcgYXMgYW55KS5sYXllcixcbiAgICAgICAgICAgICAgdmlldy5tYXAsXG4gICAgICAgICAgICApXG4gICAgICApIGFzIF9fZXNyaS5GZWF0dXJlTGF5ZXI7XG4gICAgICBpZiAoIWNsaWNrZWRMYXllcikge1xuICAgICAgICBhZ3JpTWFwQ2xpY2tXYXJuKFwibm8gbGl2ZSBsYXllciBmb3IgaGl0IGdyYXBoaWNcIik7XG4gICAgICAgIGlmICghaXNTdGFsZSgpKSB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIHNob3dQb3B1cDogZmFsc2UgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGxheWVyS2V5ID1cbiAgICAgICAgZ2V0QWdyaUxheWVyTWFwS2V5KGNsaWNrZWRMYXllcikgfHxcbiAgICAgICAgU3RyaW5nKGNsaWNrZWRMYXllcj8udXJsIHx8IGNsaWNrZWRMYXllcj8uaWQgfHwgXCJcIik7XG4gICAgICBjb25zdCBkc0lkID0gdGhpcy5zdGF0ZS5sYXllcktleVRvRHNJZD8uW2xheWVyS2V5XSB8fCBudWxsO1xuICAgICAgYWdyaU1hcENsaWNrRGVidWcoXCJsYXllcjpyZXNvbHZlZFwiLCB7XG4gICAgICAgIHRpdGxlOiBjbGlja2VkTGF5ZXIudGl0bGUsXG4gICAgICAgIGlkOiBjbGlja2VkTGF5ZXIuaWQsXG4gICAgICAgIHVybDogY2xpY2tlZExheWVyLnVybCB8fCBudWxsLFxuICAgICAgICBsYXllcktleSxcbiAgICAgICAgZGF0YVNvdXJjZUlkOiBkc0lkLFxuICAgICAgICBkZWZpbml0aW9uRXhwcmVzc2lvbjogKGNsaWNrZWRMYXllciBhcyBhbnkpLmRlZmluaXRpb25FeHByZXNzaW9uIHx8IG51bGwsXG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgb2lkRmllbGQgPVxuICAgICAgICBjbGlja2VkTGF5ZXIub2JqZWN0SWRGaWVsZCB8fFxuICAgICAgICBjbGlja2VkTGF5ZXIuZmllbGRzPy5maW5kKChmOiBhbnkpID0+IGYudHlwZSA9PT0gXCJvaWRcIik/Lm5hbWUgfHxcbiAgICAgICAgbnVsbDtcblxuICAgICAgaWYgKCFvaWRGaWVsZCkge1xuICAgICAgICBpZiAoIWlzU3RhbGUoKSkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBlcnJvcjogdGhpcy50cihcImVycm9yLm9iamVjdElkRmllbGRNaXNzaW5nXCIpLFxuICAgICAgICAgICAgc2hvd1BvcHVwOiBmYWxzZSxcbiAgICAgICAgICAgIGxvYWRpbmdBdHRhY2htZW50czogZmFsc2UsXG4gICAgICAgICAgICBhdHRhY2htZW50czogW10sXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5jbGVhckhpZ2hsaWdodCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb2lkID0gKGcgYXMgYW55KS5hdHRyaWJ1dGVzPy5bb2lkRmllbGRdO1xuICAgICAgaWYgKG9pZCA9PSBudWxsKSB7XG4gICAgICAgIGlmICghaXNTdGFsZSgpKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGVycm9yOiB0aGlzLnRyKFwiZXJyb3Iub2JqZWN0SWRNaXNzaW5nXCIsIHsgZmllbGQ6IG9pZEZpZWxkIH0pLFxuICAgICAgICAgICAgc2hvd1BvcHVwOiBmYWxzZSxcbiAgICAgICAgICAgIGxvYWRpbmdBdHRhY2htZW50czogZmFsc2UsXG4gICAgICAgICAgICBhdHRhY2htZW50czogW10sXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5jbGVhckhpZ2hsaWdodCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb3V0RmllbGRzID0gdGhpcy5nZXRPdXRGaWVsZHMoY2xpY2tlZExheWVyIGFzIGFueSwgb2lkRmllbGQpO1xuXG4gICAgICBjb25zdCBmID0gYXdhaXQgdGhpcy5xdWVyeUZlYXR1cmVCeU9iamVjdElkQ2FjaGVkKFxuICAgICAgICBjbGlja2VkTGF5ZXIsXG4gICAgICAgIG9pZEZpZWxkLFxuICAgICAgICBvaWQsXG4gICAgICAgIG91dEZpZWxkcyxcbiAgICAgICk7XG4gICAgICBpZiAoaXNTdGFsZSgpKSByZXR1cm47XG4gICAgICBpZiAoIWYpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3I6IHRoaXMudHIoXCJlcnJvci5mZWF0dXJlQnlPYmplY3RJZE1pc3NpbmdcIiksXG4gICAgICAgICAgc2hvd1BvcHVwOiBmYWxzZSxcbiAgICAgICAgICBsb2FkaW5nQXR0YWNobWVudHM6IGZhbHNlLFxuICAgICAgICAgIGF0dGFjaG1lbnRzOiBbXSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2xlYXJIaWdobGlnaHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZi5nZW9tZXRyeSkgdGhpcy5oaWdobGlnaHRQb2x5Z29uKGYuZ2VvbWV0cnkpO1xuXG4gICAgICBjb25zdCBlYXJseVVuaXF1ZUlkID1cbiAgICAgICAgdGhpcy5maW5kQXR0cmlidXRlVmFsdWVDYXNlSW5zZW5zaXRpdmUoXG4gICAgICAgICAgZi5hdHRyaWJ1dGVzIGFzIFJlY29yZDxzdHJpbmcsIGFueT4sXG4gICAgICAgICAgQUdSSV9UQUJMRV9KT0lOX0ZJRUxELFxuICAgICAgICApID8/IG51bGw7XG4gICAgICBjb25zdCBlYXJseUNsZWFuS2V5ID0gU3RyaW5nKGVhcmx5VW5pcXVlSWQgfHwgXCJcIilcbiAgICAgICAgLnJlcGxhY2UoL1t7fV0vZywgXCJcIilcbiAgICAgICAgLnRyaW0oKTtcbiAgICAgIGNvbnN0IGFjdGl2ZUtleSA9IFN0cmluZyh0aGlzLl9hY3RpdmVJbnNwZWN0ZWRVbmlxdWVpZCB8fCBcIlwiKVxuICAgICAgICAucmVwbGFjZSgvW3t9XS9nLCBcIlwiKVxuICAgICAgICAudHJpbSgpO1xuICAgICAgLypcbiAgICAgICAqIFNhbWUgYWxyZWFkeS1hY3RpdmUgZmllbGQgKGluY2wuIHRhYmxlIHNlbGVjdGlvbikgY2xpY2tlZCBvbiBtYXAg4oaSXG4gICAgICAgKiBkZWFjdGl2YXRlIHdpdGhvdXQgem9vbWluZyBpbiBhZ2Fpbi4gR3JhZmYgcmVzdG9yZXMgdGhlIHByZS1zZWxlY3QgZXh0ZW50LlxuICAgICAgICogSWYgdGhlIHBhbmVsIHdhcyBvbmx5IG1pbmltaXplZCwgZXhwYW5kIGl0IGluc3RlYWQgb2YgZGVzZWxlY3RpbmcuXG4gICAgICAgKi9cbiAgICAgIGlmIChhY3RpdmVLZXkgJiYgZWFybHlDbGVhbktleSAmJiBhY3RpdmVLZXkgPT09IGVhcmx5Q2xlYW5LZXkpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucG9wdXBNaW5pbWl6ZWQpIHtcbiAgICAgICAgICBhZ3JpTWFwQ2xpY2tEZWJ1ZyhcInNlbGVjdGlvbjpleHBhbmQtbWluaW1pemVkLXNhbWUtZmllbGRcIiwge1xuICAgICAgICAgICAgdW5pcXVlaWQ6IGVhcmx5Q2xlYW5LZXksXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5leHBhbmRQb3B1cCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhZ3JpTWFwQ2xpY2tEZWJ1ZyhcInNlbGVjdGlvbjp0b2dnbGUtb2ZmLXNhbWUtZmllbGRcIiwge1xuICAgICAgICAgIHVuaXF1ZWlkOiBlYXJseUNsZWFuS2V5LFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jbGVhckhpZ2hsaWdodCgpO1xuICAgICAgICB0aGlzLl9hY3RpdmVJbnNwZWN0ZWRVbmlxdWVpZCA9IG51bGw7XG4gICAgICAgIHRoaXMuY2xvc2VQb3B1cCh7IHJlc3RvcmVFeHRlbnQ6IHRydWUsIG5vdGlmeURlc2VsZWN0OiB0cnVlIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEtpY2sgR3JhZmYgb3ZlcmxheSArIHpvb20gQkVGT1JFIEFncmlfdGFibGUgam9pbiDigJQgdGhhdCBqb2luIHVzZWQgdG9cbiAgICAgIC8vIHNpdCBvbiB0aGUgY3JpdGljYWwgcGF0aCAofnNlY29uZHMpIHdoaWxlIHRoZSBpbmRleCBUSUZGIHdhaXRlZC5cbiAgICAgIGlmIChlYXJseVVuaXF1ZUlkICE9IG51bGwgJiYgU3RyaW5nKGVhcmx5VW5pcXVlSWQpLnRyaW0oKSAhPT0gXCJcIikge1xuICAgICAgICBjb25zdCBlYXJseU5vdGlmeUlkID0gU3RyaW5nKGVhcmx5VW5pcXVlSWQpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5fYWN0aXZlSW5zcGVjdGVkVW5pcXVlaWQgPSBlYXJseUNsZWFuS2V5O1xuICAgICAgICBhZ3JpTWFwQ2xpY2tEZWJ1ZyhcInNlbGVjdGlvbjpicm9hZGNhc3QtZWFybHlcIiwge1xuICAgICAgICAgIHVuaXF1ZWlkOiBlYXJseU5vdGlmeUlkLFxuICAgICAgICAgIHNvdXJjZTogXCJBZ3JpUG9wdXBcIixcbiAgICAgICAgICBwb2x5Z29uTW9kZTogdHJ1ZSxcbiAgICAgICAgICBkZXN0aW5hdGlvbnM6IFtcIkFncmlMb2NhbGl6YXRpb25cIiwgXCJBZ3JpR3JhZmYxMFwiXSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubm90aWZ5R3JhZmZQb2x5Z29uU2VsZWN0aW9uKGVhcmx5Tm90aWZ5SWQsIHRydWUsIGNsaWNrU3RhcnRlZEF0KTtcbiAgICAgICAgLy8gRGVmZXIgRmVhdHVyZVNlcnZlciBzZXJpZXMgc28gZXhwb3J0LWltYWdlIGdldHMgYmFuZHdpZHRoIGZpcnN0LlxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKCF0aGlzLl9pc01vdW50ZWQpIHJldHVybjtcbiAgICAgICAgICBjb25zdCBhY3RpdmUgPSBTdHJpbmcodGhpcy5fYWN0aXZlSW5zcGVjdGVkVW5pcXVlaWQgfHwgXCJcIilcbiAgICAgICAgICAgIC5yZXBsYWNlKC9be31dL2csIFwiXCIpXG4gICAgICAgICAgICAudHJpbSgpO1xuICAgICAgICAgIGlmIChhY3RpdmUgIT09IGVhcmx5Q2xlYW5LZXkpIHJldHVybjtcbiAgICAgICAgICB2b2lkIHRoaXMuZmV0Y2hMYXRlc3RWZWdldGF0aW9uSW5kaWNlcyhlYXJseU5vdGlmeUlkKTtcbiAgICAgICAgfSwgNjUwKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgem9vbVRvRWFybHkgPSB0aGlzLnByb3BzLmNvbmZpZz8uc2V0dGluZ3M/Lnpvb21Ub1NlbGVjdGlvbiAhPT0gZmFsc2U7XG4gICAgICBpZiAoem9vbVRvRWFybHkgJiYgZi5nZW9tZXRyeSAmJiAhaXNTdGFsZSgpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCF0aGlzLl9leHRlbnRCZWZvcmVTZWxlY3Rpb24gJiYgdmlldy5leHRlbnQ/LmNsb25lKSB7XG4gICAgICAgICAgICB0aGlzLl9leHRlbnRCZWZvcmVTZWxlY3Rpb24gPSB2aWV3LmV4dGVudC5jbG9uZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCB0YXJnZXQgPVxuICAgICAgICAgICAgKGYuZ2VvbWV0cnkgYXMgYW55KS5leHRlbnQ/LmV4cGFuZD8uKDEuMDgpIHx8IGYuZ2VvbWV0cnk7XG4gICAgICAgICAgYWdyaU1hcENsaWNrRGVidWcoXCJ6b29tOnN0YXJ0LWVhcmx5XCIsIHtcbiAgICAgICAgICAgIHVuaXF1ZWlkOiBlYXJseUNsZWFuS2V5IHx8IG51bGwsXG4gICAgICAgICAgICBnZW9tZXRyeVR5cGU6IGYuZ2VvbWV0cnkudHlwZSxcbiAgICAgICAgICAgIGR1cmF0aW9uTXM6IDY1MCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2b2lkIHZpZXdcbiAgICAgICAgICAgIC5nb1RvKHsgdGFyZ2V0IH0sIHsgZHVyYXRpb246IDY1MCwgZWFzaW5nOiBcImVhc2UtaW4tb3V0XCIgYXMgYW55IH0pXG4gICAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgICAgKCkgPT5cbiAgICAgICAgICAgICAgICBhZ3JpTWFwQ2xpY2tEZWJ1ZyhcInpvb206Y29tcGxldGVcIiwge1xuICAgICAgICAgICAgICAgICAgdW5pcXVlaWQ6IGVhcmx5Q2xlYW5LZXkgfHwgbnVsbCxcbiAgICAgICAgICAgICAgICAgIHNjYWxlOiAodmlldyBhcyBhbnkpLnNjYWxlLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT5cbiAgICAgICAgICAgICAgICBhZ3JpTWFwQ2xpY2tXYXJuKFwiem9vbTpmYWlsZWRcIiwge1xuICAgICAgICAgICAgICAgICAgdW5pcXVlaWQ6IGVhcmx5Q2xlYW5LZXkgfHwgbnVsbCxcbiAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcj8ubWVzc2FnZSB8fCBTdHJpbmcoZXJyb3IpLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgLyogaWdub3JlICovXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbG9hZFN0YXR1cyA9IFN0cmluZygoY2xpY2tlZExheWVyIGFzIGFueSkubG9hZFN0YXR1cyB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBpc0xvYWRlZCA9IEJvb2xlYW4oKGNsaWNrZWRMYXllciBhcyBhbnkpLmxvYWRlZCkgfHwgbG9hZFN0YXR1cyA9PT0gXCJsb2FkZWRcIjtcbiAgICAgICAgLy8gTG9hZGluZyBhIGxpdmUgTWFwSW1hZ2Utb3duZWQgc3VibGF5ZXIgcmVoeWRyYXRlcyBpdCBhbmQgY2FuIGNsZWFyXG4gICAgICAgIC8vIHRoZSBydW50aW1lIHR1bWFuIGRlZmluaXRpb25FeHByZXNzaW9uIChvdGhlci1kaXN0cmljdCBmbGFzaCkuIFRoZVxuICAgICAgICAvLyBkZXRhY2hlZCBjbGllbnQgZnJvbSBxdWVyeUZlYXR1cmVCeU9iamVjdElkQ2FjaGVkIGlzIGFscmVhZHkgbG9hZGVkXG4gICAgICAgIC8vIGFuZCBwcm92aWRlcyB0aGUgc2FtZSBmaWVsZCBtZXRhZGF0YS5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICFpc0xvYWRlZCAmJlxuICAgICAgICAgICFpc01hcEltYWdlT3duZWRMYXllcihjbGlja2VkTGF5ZXIpICYmXG4gICAgICAgICAgIWlzTWFwSW1hZ2VHcm91cFN1YmxheWVyKGNsaWNrZWRMYXllcilcbiAgICAgICAgKSB7XG4gICAgICAgICAgYWdyaU1hcENsaWNrRGVidWcoXCJsYXllcjpsb2FkLXJlcXVpcmVkXCIsIHtcbiAgICAgICAgICAgIHRpdGxlOiBjbGlja2VkTGF5ZXIudGl0bGUsXG4gICAgICAgICAgICBsb2FkU3RhdHVzOiBsb2FkU3RhdHVzIHx8IG51bGwsXG4gICAgICAgICAgICBkZWZpbml0aW9uRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgKGNsaWNrZWRMYXllciBhcyBhbnkpLmRlZmluaXRpb25FeHByZXNzaW9uIHx8IG51bGwsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYXdhaXQgc2FmZUxvYWRNYXBMYXllcihjbGlja2VkTGF5ZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFncmlNYXBDbGlja0RlYnVnKFwibGF5ZXI6bG9hZC1za2lwLWFscmVhZHktbG9hZGVkXCIsIHtcbiAgICAgICAgICAgIHRpdGxlOiBjbGlja2VkTGF5ZXIudGl0bGUsXG4gICAgICAgICAgICBsb2FkU3RhdHVzOiBsb2FkU3RhdHVzIHx8IFwibG9hZGVkXCIsXG4gICAgICAgICAgICBkZWZpbml0aW9uRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgKGNsaWNrZWRMYXllciBhcyBhbnkpLmRlZmluaXRpb25FeHByZXNzaW9uIHx8IG51bGwsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvKiBmcmVzaCBmaWVsZCBhbGlhc2VzIGZyb20gbGl2ZSBsYXllciAqL1xuICAgICAgfVxuICAgICAgaWYgKGlzU3RhbGUoKSkgcmV0dXJuO1xuXG4gICAgICBjb25zdCBzaG91bGRQaW4gPSB0aGlzLnN0YXRlLnBpblRvQ29ybmVyO1xuICAgICAgY29uc3QgcG9wdXBQb3NpdGlvbiA9IHNob3VsZFBpblxuICAgICAgICA/IHRoaXMuY2FsY3VsYXRlUGlubmVkUG9zaXRpb24odmlldylcbiAgICAgICAgOiB0aGlzLmNhbGN1bGF0ZVBvcHVwUG9zaXRpb24oY2xpY2tTY3JlZW5Qb2ludCwgdmlldyk7XG5cbiAgICAgIC8vIEFncmlfdGFibGVfZGF0YSBoYXMgbm8gZ2VvbWV0cnkg4oCUIHRoZSBwb2x5Z29uIGxheWVyIG9ubHkgZHJpdmVzXG4gICAgICAvLyBtYXAtY2xpY2svaGlnaGxpZ2h0L3pvb207IHRoZSBmaWVsZHMgdGhlIHBvcHVwIHNob3dzIGNvbWUgZnJvbSB0aGVcbiAgICAgIC8vIGV4dGVybmFsIHRhYmxlLCBqb2luZWQgYnkgdW5pcXVlaWQuXG4gICAgICBjb25zdCBkaXNwbGF5QXR0cnMgPSBhd2FpdCB0aGlzLnJlc29sdmVEaXNwbGF5QXR0cnMoZi5hdHRyaWJ1dGVzKTtcbiAgICAgIGlmIChpc1N0YWxlKCkpIHJldHVybjtcblxuICAgICAgY29uc3QgY29uZmlndXJlZEZpZWxkcyA9IHRoaXMucHJvcHMuY29uZmlnPy5maWVsZHNUb1Nob3cgfHwgW107XG4gICAgICBjb25zdCBhY3R1YWxGaWVsZHMgPSBPYmplY3Qua2V5cyhkaXNwbGF5QXR0cnMpO1xuICAgICAgY29uc3QgbWlzc2luZ0ZpZWxkcyA9IGNvbmZpZ3VyZWRGaWVsZHMuZmlsdGVyKFxuICAgICAgICAoZmllbGQpID0+ICFhY3R1YWxGaWVsZHMuaW5jbHVkZXMoZmllbGQpLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGZpZWxkc1dpdGhEYXRhID0gY29uZmlndXJlZEZpZWxkcy5maWx0ZXIoXG4gICAgICAgIChuYW1lKSA9PlxuICAgICAgICAgIGRpc3BsYXlBdHRycy5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJlxuICAgICAgICAgIGRpc3BsYXlBdHRyc1tuYW1lXSAhPSBudWxsICYmXG4gICAgICAgICAgZGlzcGxheUF0dHJzW25hbWVdICE9PSBcIlwiLFxuICAgICAgKTtcblxuICAgICAgYWdyaU1hcENsaWNrRGVidWcoXCJwb3B1cCBPUEVOXCIsIHtcbiAgICAgICAgb2lkLFxuICAgICAgICBvaWRGaWVsZCxcbiAgICAgICAgbGF5ZXJLZXksXG4gICAgICAgIGF0dHJpYnV0ZUtleXM6IGFjdHVhbEZpZWxkcy5zbGljZSgwLCAxMiksXG4gICAgICAgIHBvcHVwUG9zaXRpb24sXG4gICAgICB9KTtcblxuICAgICAgLy8gT3BlbiB0aGUgcG9wdXAgQkVGT1JFIGdvVG8g4oCUIGF3YWl0aW5nIHpvb20gZmlyc3QgbGVmdCBhIGxvbmcgd2luZG93XG4gICAgICAvLyB3aGVyZSBhIHR3aW4vc2hhcmVkIGNsaWNrIHBhdGggY291bGQgZmFpbCBhbmQgd2lwZSBzaG93UG9wdXAuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG5cbiAgICAgICAgLy8g4pyFIHN0b3JlIHdoaWNoIGxheWVyL2RzIHdhcyBjbGlja2VkIChmb3IgYWxpYXMgcmVzb2x2aW5nKVxuICAgICAgICBsYXN0Q2xpY2tlZERzSWQ6IGRzSWQsXG4gICAgICAgIGxhc3RDbGlja2VkTGF5ZXJLZXk6IGxheWVyS2V5LFxuXG4gICAgICAgIHNlbGVjdGVkQXR0cnM6IGRpc3BsYXlBdHRycyxcbiAgICAgICAgc2VsZWN0ZWRPSUQ6IE51bWJlcihvaWQpLFxuICAgICAgICBvYmplY3RJZEZpZWxkOiBvaWRGaWVsZCxcblxuICAgICAgICBzaG93UG9wdXA6IHRydWUsXG4gICAgICAgIHBvcHVwTWluaW1pemVkOiBmYWxzZSxcbiAgICAgICAgY2hhcnRFeHBhbmRlZDogc2hvdWxkUGluLFxuICAgICAgICBjaGFydEhvdmVySW5kZXg6IG51bGwsXG4gICAgICAgIHBvcHVwUG9zaXRpb24sXG4gICAgICAgIGVycm9yOlxuICAgICAgICAgIG1pc3NpbmdGaWVsZHMubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyB0aGlzLnRyKFwiZXJyb3IuY29uZmlndXJlZEZpZWxkTWlzc2luZ1wiLCB7XG4gICAgICAgICAgICAgICAgZmllbGRzOiBtaXNzaW5nRmllbGRzLmpvaW4oXCIsIFwiKSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogZmllbGRzV2l0aERhdGEubGVuZ3RoID09PSAwICYmIGNvbmZpZ3VyZWRGaWVsZHMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICA/IHRoaXMudHIoXCJlcnJvci5ub0RhdGFGb3JDb25maWd1cmVkRmllbGRzXCIpXG4gICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgIH0pO1xuICAgICAgcG9wdXBPcGVuZWRGb3JUaGlzQ2xpY2sgPSB0cnVlO1xuXG4gICAgICBjb25zdCBjbGlja2VkVW5pcXVlSWQgPVxuICAgICAgICB0aGlzLmZpbmRBdHRyaWJ1dGVWYWx1ZUNhc2VJbnNlbnNpdGl2ZShcbiAgICAgICAgICBkaXNwbGF5QXR0cnMsXG4gICAgICAgICAgQUdSSV9UQUJMRV9KT0lOX0ZJRUxELFxuICAgICAgICApID8/XG4gICAgICAgIHRoaXMuZmluZEF0dHJpYnV0ZVZhbHVlQ2FzZUluc2Vuc2l0aXZlKFxuICAgICAgICAgIGYuYXR0cmlidXRlcyBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+LFxuICAgICAgICAgIEFHUklfVEFCTEVfSk9JTl9GSUVMRCxcbiAgICAgICAgKTtcbiAgICAgIGlmIChjbGlja2VkVW5pcXVlSWQgIT0gbnVsbCAmJiBTdHJpbmcoY2xpY2tlZFVuaXF1ZUlkKS50cmltKCkgIT09IFwiXCIpIHtcbiAgICAgICAgY29uc3QgY2xlYW5VbmlxdWVJZCA9IFN0cmluZyhjbGlja2VkVW5pcXVlSWQpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5fYWN0aXZlSW5zcGVjdGVkVW5pcXVlaWQgPSBjbGVhblVuaXF1ZUlkLnJlcGxhY2UoL1t7fV0vZywgXCJcIikudHJpbSgpO1xuICAgICAgICAvLyBFYXJseSBicm9hZGNhc3QgYWxyZWFkeSByYW4gd2hlbiBwb2x5Z29uIGF0dHJzIGhhZCB1bmlxdWVpZDsgb25seVxuICAgICAgICAvLyBub3RpZnkgYWdhaW4gaWYgdGhlIHRhYmxlIGpvaW4gaXMgdGhlIGZpcnN0IHBsYWNlIHdlIHNhdyBpdC5cbiAgICAgICAgaWYgKCFlYXJseUNsZWFuS2V5IHx8IGVhcmx5Q2xlYW5LZXkgIT09IHRoaXMuX2FjdGl2ZUluc3BlY3RlZFVuaXF1ZWlkKSB7XG4gICAgICAgICAgYWdyaU1hcENsaWNrRGVidWcoXCJzZWxlY3Rpb246YnJvYWRjYXN0XCIsIHtcbiAgICAgICAgICAgIHVuaXF1ZWlkOiBjbGVhblVuaXF1ZUlkLFxuICAgICAgICAgICAgc291cmNlOiBcIkFncmlQb3B1cFwiLFxuICAgICAgICAgICAgcG9seWdvbk1vZGU6IHRydWUsXG4gICAgICAgICAgICBkZXN0aW5hdGlvbnM6IFtcIkFncmlMb2NhbGl6YXRpb25cIiwgXCJBZ3JpR3JhZmYxMFwiXSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLm5vdGlmeUdyYWZmUG9seWdvblNlbGVjdGlvbihjbGVhblVuaXF1ZUlkLCB0cnVlLCBjbGlja1N0YXJ0ZWRBdCk7XG4gICAgICAgICAgdm9pZCB0aGlzLmZldGNoTGF0ZXN0VmVnZXRhdGlvbkluZGljZXMoY2xlYW5VbmlxdWVJZCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGxvYWRpbmdMYXRlc3RJbmRpY2VzOiBmYWxzZSxcbiAgICAgICAgICBsYXRlc3RJbmRleERhdGU6IG51bGwsXG4gICAgICAgICAgbGF0ZXN0SW5kZXhWYWx1ZXM6IG51bGwsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBab29tIGFscmVhZHkgc3RhcnRlZCBlYXJseSAoYmVmb3JlIEFncmlfdGFibGUgam9pbikgd2hlbiBnZW9tZXRyeSBleGlzdHMuXG5cbiAgICAgIC8vIEF0dGFjaG1lbnRzIGFyZSBiZXN0LWVmZm9ydCDigJQgbmV2ZXIgbGV0IGEgbWVkaWEgZmV0Y2ggd2lwZSBhbiBvcGVuIHBvcHVwXG4gICAgICAvLyAodGhhdCB3YXMgdGhlIFwidmVnZXRhdGlvbiB1cGRhdGVzIGJ1dCBwb3B1cCBvbmx5IHN0aWNrcyBvbiAybmQvM3JkIGNsaWNrXCJcbiAgICAgIC8vIGZhaWx1cmU6IG5vdGlmeUdyYWZmIHJhbiwgdGhlbiBsb2FkQXR0YWNobWVudHMgdGhyZXcg4oaSIGNhdGNoIGNsb3NlZCBVSVxuICAgICAgLy8gYW5kIHJlc3RvcmVFeHRlbnRCZWZvcmVTZWxlY3Rpb24gbWFkZSB0aGUgbWFwIGxvb2sgbGlrZSBvdGhlciBmaWVsZHMpLlxuICAgICAgaWYgKHRoaXMucHJvcHMuY29uZmlnPy5zZXR0aW5ncz8uc2hvd0F0dGFjaG1lbnRzICE9PSBmYWxzZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFF1ZXJ5IGF0dGFjaG1lbnRzIG9uIHRoZSBkZXRhY2hlZCBjbGllbnQgdG9vIOKAlCBxdWVyeUF0dGFjaG1lbnRzXG4gICAgICAgICAgLy8gb24gYSBsaXZlIE1hcEltYWdlIHN1YmxheWVyIGNhbiByZWh5ZHJhdGUgaXQgKHNhbWUgREUtY2xlYXJpbmdcbiAgICAgICAgICAvLyBwYXRoIGFzIHF1ZXJ5RmVhdHVyZXMpIGFuZCBpdCBvZnRlbiBsYWNrcyB0aGUgQVBJIGFueXdheS5cbiAgICAgICAgICBjb25zdCBjbGlja2VkVXJsID0gU3RyaW5nKChjbGlja2VkTGF5ZXIgYXMgYW55KS51cmwgfHwgXCJcIikudHJpbSgpO1xuICAgICAgICAgIGNvbnN0IGF0dGFjaG1lbnRMYXllciA9XG4gICAgICAgICAgICAoY2xpY2tlZFVybCAmJiB0aGlzLl9xdWVyeU9ubHlMYXllcnMuZ2V0KGNsaWNrZWRVcmwpKSB8fFxuICAgICAgICAgICAgY2xpY2tlZExheWVyO1xuICAgICAgICAgIGF3YWl0IHRoaXMubG9hZEF0dGFjaG1lbnRzRm9yT2lkKGF0dGFjaG1lbnRMYXllciBhcyBhbnksIE51bWJlcihvaWQpKTtcbiAgICAgICAgfSBjYXRjaCAoYXR0YWNoRXJyOiBhbnkpIHtcbiAgICAgICAgICBhZ3JpTWFwQ2xpY2tXYXJuKFwiYXR0YWNobWVudHMgZmFpbGVkIChwb3B1cCBrZXB0IG9wZW4pXCIsIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGF0dGFjaEVycj8ubWVzc2FnZSB8fCBTdHJpbmcoYXR0YWNoRXJyKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoIWlzU3RhbGUoKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmdBdHRhY2htZW50czogZmFsc2UsIGF0dGFjaG1lbnRzOiBbXSB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIWlzU3RhbGUoKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZ0F0dGFjaG1lbnRzOiBmYWxzZSwgYXR0YWNobWVudHM6IFtdIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGlzU3RhbGUoKSkgcmV0dXJuO1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5waW5Ub0Nvcm5lcikge1xuICAgICAgICB0aGlzLnNjaGVkdWxlUG9wdXBMYXlvdXRBZnRlckNvbnRlbnQoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0Rhc2hib2FyZEVtYmVkZGVkKCkpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZVBvcHVwTGF5b3V0QWZ0ZXJDb250ZW50KCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAvLyBOZXZlciBsZXQgYSBzdXBlcnNlZGVkIHR3aW4vc2hhcmVkIGNsaWNrIGNsZWFyIGEgbmV3ZXIgcG9wdXAuXG4gICAgICBpZiAoaXNTdGFsZSgpKSByZXR1cm47XG4gICAgICAvLyBJZiB3ZSBhbHJlYWR5IG9wZW5lZCB0aGUgcG9wdXAgZm9yIFRISVMgY2xpY2ssIGtlZXAgaXQg4oCUIHN1cmZhY2UgZXJyb3Igb25seS5cbiAgICAgIGlmIChwb3B1cE9wZW5lZEZvclRoaXNDbGljaykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcjogdGhpcy50cihcImVycm9yLnVuZXhwZWN0ZWRcIiwge1xuICAgICAgICAgICAgbWVzc2FnZTogZT8ubWVzc2FnZSB8fCBcIlVua25vd24gZXJyb3JcIixcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBsb2FkaW5nQXR0YWNobWVudHM6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcjogdGhpcy50cihcImVycm9yLnVuZXhwZWN0ZWRcIiwge1xuICAgICAgICAgIG1lc3NhZ2U6IGU/Lm1lc3NhZ2UgfHwgXCJVbmtub3duIGVycm9yXCIsXG4gICAgICAgIH0pLFxuICAgICAgICBzaG93UG9wdXA6IGZhbHNlLFxuICAgICAgICBsb2FkaW5nQXR0YWNobWVudHM6IGZhbHNlLFxuICAgICAgICBhdHRhY2htZW50czogW10sXG4gICAgICB9KTtcbiAgICAgIHRoaXMuY2xlYXJIaWdobGlnaHQoKTtcbiAgICAgIHRoaXMubm90aWZ5R3JhZmZQb2x5Z29uU2VsZWN0aW9uKFwiXCIsIGZhbHNlKTtcbiAgICAgIHRoaXMucmVzdG9yZUV4dGVudEJlZm9yZVNlbGVjdGlvbigpO1xuICAgIH1cbiAgfTtcblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tIEF0dGFjaG1lbnRzIGhlbHBlcnMgLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gIHByaXZhdGUgYXN5bmMgZmV0Y2hBdHRhY2htZW50UHJldmlldyh1cmw6IHN0cmluZyk6IFByb21pc2U8QmxvYj4ge1xuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBlc3JpUmVxdWVzdCh1cmwsIHtcbiAgICAgIHJlc3BvbnNlVHlwZTogXCJibG9iXCIsXG4gICAgICBxdWVyeToge30sXG4gICAgfSBhcyBhbnkpO1xuICAgIHJldHVybiByZXNwPy5kYXRhIGluc3RhbmNlb2YgQmxvYiA/IHJlc3AuZGF0YSA6IChyZXNwIGFzIHVua25vd24gYXMgQmxvYik7XG4gIH1cblxuICBwcml2YXRlIHJldm9rZUFsbEF0dGFjaG1lbnRVcmxzKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBhdHRzID0gdGhpcy5zdGF0ZS5hdHRhY2htZW50cyB8fCBbXTtcbiAgICAgIGF0dHMuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICBpZiAoYS5wcmV2aWV3T2JqZWN0VXJsKSBVUkwucmV2b2tlT2JqZWN0VVJMKGEucHJldmlld09iamVjdFVybCk7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIHt9XG4gIH1cblxuICBwcml2YXRlIGlzSW1hZ2VDb250ZW50VHlwZShjdD86IHN0cmluZykge1xuICAgIGlmICghY3QpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gL15pbWFnZVxcLy9pLnRlc3QoY3QpO1xuICB9XG5cbiAgcHJpdmF0ZSBieXRlc1RvU2l6ZShuPzogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBpZiAoIW4gJiYgbiAhPT0gMCkgcmV0dXJuIFwiXCI7XG4gICAgaWYgKG4gPT09IDApIHJldHVybiBcIjAgQlwiO1xuICAgIGNvbnN0IGsgPSAxMDI0LFxuICAgICAgc2l6ZXMgPSBbXCJCXCIsIFwiS0JcIiwgXCJNQlwiLCBcIkdCXCIsIFwiVEJcIl07XG4gICAgY29uc3QgaSA9IE1hdGguZmxvb3IoTWF0aC5sb2cobikgLyBNYXRoLmxvZyhrKSk7XG4gICAgcmV0dXJuIGAkeyhuIC8gTWF0aC5wb3coaywgaSkpLnRvRml4ZWQoMil9ICR7c2l6ZXNbaV19YDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgbG9hZEF0dGFjaG1lbnRzRm9yT2lkKGxheWVyOiBGZWF0dXJlTGF5ZXIsIG9pZDogbnVtYmVyKSB7XG4gICAgLy8g4pyFIElmIGxheWVyIGRvZXNu4oCZdCBzdXBwb3J0IGF0dGFjaG1lbnRzIC0+IHNpbGVudGx5IHNob3cgbm9uZSAoTk8gd2FybmluZylcbiAgICBpZiAoIXRoaXMubGF5ZXJTdXBwb3J0c0F0dGFjaG1lbnRzKGxheWVyKSkge1xuICAgICAgaWYgKCF0aGlzLl9pc01vdW50ZWQpIHJldHVybjtcbiAgICAgIHRoaXMucmV2b2tlQWxsQXR0YWNobWVudFVybHMoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsb2FkaW5nQXR0YWNobWVudHM6IGZhbHNlLFxuICAgICAgICBhdHRhY2htZW50czogW10sXG4gICAgICAgIGF0dGFjaG1lbnRzRXJyb3I6IG51bGwsXG4gICAgICAgIGF0dGFjaG1lbnRzRXhwYW5kZWQ6IHRydWUsIC8vIGtlZXAgYXJlYSB2aXNpYmxlIGlmIHlvdSB3YW50IFwiTm8gYXR0YWNobWVudHNcIlxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMucmV2b2tlQWxsQXR0YWNobWVudFVybHMoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsb2FkaW5nQXR0YWNobWVudHM6IHRydWUsXG4gICAgICAgIGF0dGFjaG1lbnRzOiBbXSxcbiAgICAgICAgYXR0YWNobWVudHNFcnJvcjogbnVsbCxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBsYXllci5xdWVyeUF0dGFjaG1lbnRzKHsgb2JqZWN0SWRzOiBbb2lkXSB9KTtcbiAgICAgIGNvbnN0IGxpc3QgPSAocmVzdWx0Py5bb2lkXSB8fCBbXSkgYXMgYW55W107XG5cbiAgICAgIGNvbnN0IGl0ZW1zOiBBdHRhY2htZW50SXRlbVtdID0gbGlzdC5tYXAoKGF0dCkgPT4gKHtcbiAgICAgICAgaWQ6IGF0dC5pZCxcbiAgICAgICAgbmFtZTogYXR0Lm5hbWUsXG4gICAgICAgIHNpemU6IGF0dC5zaXplLFxuICAgICAgICBjb250ZW50VHlwZTogYXR0LmNvbnRlbnRUeXBlLFxuICAgICAgICB1cmw6IGF0dC51cmwsXG4gICAgICB9KSk7XG5cbiAgICAgIGNvbnN0IHdpdGhQcmV2aWV3czogQXR0YWNobWVudEl0ZW1bXSA9IFtdO1xuICAgICAgZm9yIChjb25zdCBpdCBvZiBpdGVtcykge1xuICAgICAgICBpZiAoaXQudXJsICYmIHRoaXMuaXNJbWFnZUNvbnRlbnRUeXBlKGl0LmNvbnRlbnRUeXBlKSkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBibG9iID0gYXdhaXQgdGhpcy5mZXRjaEF0dGFjaG1lbnRQcmV2aWV3KGl0LnVybCk7XG4gICAgICAgICAgICBpdC5wcmV2aWV3T2JqZWN0VXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIC8vIGlnbm9yZSBwcmV2aWV3IGZhaWx1cmVzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdpdGhQcmV2aWV3cy5wdXNoKGl0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLl9pc01vdW50ZWQpIHJldHVybjtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhdHRhY2htZW50czogd2l0aFByZXZpZXdzLFxuICAgICAgICBsb2FkaW5nQXR0YWNobWVudHM6IGZhbHNlLFxuICAgICAgICBhdHRhY2htZW50c0Vycm9yOiBudWxsLFxuICAgICAgICBhdHRhY2htZW50c0V4cGFuZGVkOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIC8vIOKchSBJZiBzZXJ2ZXIgc2F5cyBhdHRhY2htZW50cyBub3Qgc3VwcG9ydGVkL2VuYWJsZWQgLT4gU0lMRU5UIChubyByZWQgd2FybmluZylcbiAgICAgIGNvbnN0IG1zZyA9IFN0cmluZyhlcnI/Lm1lc3NhZ2UgfHwgZXJyIHx8IFwiXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjb25zdCBpc05vdFN1cHBvcnRlZCA9XG4gICAgICAgIG1zZy5pbmNsdWRlcyhcImRvZXNuJ3Qgc3VwcG9ydCBhdHRhY2htZW50c1wiKSB8fFxuICAgICAgICBtc2cuaW5jbHVkZXMoXCJkb2VzIG5vdCBzdXBwb3J0IGF0dGFjaG1lbnRzXCIpIHx8XG4gICAgICAgIG1zZy5pbmNsdWRlcyhcImF0dGFjaG1lbnRzIGFyZSBub3QgZW5hYmxlZFwiKSB8fFxuICAgICAgICBtc2cuaW5jbHVkZXMoXCJhdHRhY2htZW50cyBkaXNhYmxlZFwiKSB8fFxuICAgICAgICAobXNnLmluY2x1ZGVzKFwibm90IHN1cHBvcnRlZFwiKSAmJiBtc2cuaW5jbHVkZXMoXCJhdHRhY2htZW50XCIpKTtcblxuICAgICAgaWYgKCF0aGlzLl9pc01vdW50ZWQpIHJldHVybjtcblxuICAgICAgaWYgKGlzTm90U3VwcG9ydGVkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGxvYWRpbmdBdHRhY2htZW50czogZmFsc2UsXG4gICAgICAgICAgYXR0YWNobWVudHM6IFtdLFxuICAgICAgICAgIGF0dGFjaG1lbnRzRXJyb3I6IG51bGwsXG4gICAgICAgICAgYXR0YWNobWVudHNFeHBhbmRlZDogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxvYWRpbmdBdHRhY2htZW50czogZmFsc2UsXG4gICAgICAgIGF0dGFjaG1lbnRzOiBbXSxcbiAgICAgICAgYXR0YWNobWVudHNFcnJvcjogU3RyaW5nKGVycj8ubWVzc2FnZSB8fCBlcnIgfHwgXCJBdHRhY2htZW50cyBmYWlsZWRcIiksXG4gICAgICAgIGF0dGFjaG1lbnRzRXhwYW5kZWQ6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tIEZpZWxkIGFsaWFzICsgZm9ybWF0dGluZyAtLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgcHJpdmF0ZSBpc0RhdGVGaWVsZChuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAvLyBVc2UgdGhlIGNsaWNrZWQgbGF5ZXIgaWYgcG9zc2libGVcbiAgICBjb25zdCBjbGlja2VkTGF5ZXIgPSB0aGlzLmdldENsaWNrZWRMYXllcigpO1xuICAgIGNvbnN0IGZsZCA9IGNsaWNrZWRMYXllcj8uZmllbGRzPy5maW5kKChmZjogYW55KSA9PiBmZi5uYW1lID09PSBuYW1lKTtcbiAgICByZXR1cm4gaXNFc3JpRGF0ZUZpZWxkVHlwZSgoZmxkIGFzIGFueSk/LnR5cGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDbGlja2VkTGF5ZXIoKTogX19lc3JpLkZlYXR1cmVMYXllciB8IG51bGwge1xuICAgIGNvbnN0IGtleSA9IHRoaXMuc3RhdGUubGFzdENsaWNrZWRMYXllcktleTtcbiAgICBpZiAoIWtleSkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc3RhdGUuZmVhdHVyZUxheWVycy5maW5kKFxuICAgICAgICAoTCkgPT5cbiAgICAgICAgICBnZXRBZ3JpTGF5ZXJNYXBLZXkoTCkgPT09IGtleSB8fFxuICAgICAgICAgIFN0cmluZyhMLnVybCB8fCBMLmlkIHx8IFwiXCIpID09PSBrZXksXG4gICAgICApIHx8IG51bGxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlRmllbGROYW1lID0gKGtleTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCA9PiB7XG4gICAgLy8gUHJlZmVyIERTIHNjaGVtYSBmb3IgdGhlIExBU1QgY2xpY2tlZCBkcyAoYmVzdCBmb3IgYWxpYXMvamltdU5hbWUpXG4gICAgY29uc3QgZHNJZCA9IHRoaXMuc3RhdGUubGFzdENsaWNrZWREc0lkO1xuICAgIGNvbnN0IGRzOiBhbnkgPVxuICAgICAgZHNJZCAmJiB0aGlzLnN0YXRlLmRhdGFTb3VyY2VzQnlJZD8uW2RzSWRdXG4gICAgICAgID8gdGhpcy5zdGF0ZS5kYXRhU291cmNlc0J5SWRbZHNJZF1cbiAgICAgICAgOiBudWxsO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNjaGVtYSA9IGRzPy5nZXRTY2hlbWE/LigpO1xuICAgICAgY29uc3QgZmllbGRzT2JqID0gc2NoZW1hPy5maWVsZHMgfHwge307XG4gICAgICBpZiAoZmllbGRzT2JqW2tleV0/Lm5hbWUpIHJldHVybiBmaWVsZHNPYmpba2V5XS5uYW1lO1xuICAgICAgZm9yIChjb25zdCBrIG9mIE9iamVjdC5rZXlzKGZpZWxkc09iaikpIHtcbiAgICAgICAgY29uc3QgZiA9IChmaWVsZHNPYmogYXMgYW55KVtrXTtcbiAgICAgICAgaWYgKGY/Lm5hbWUgPT09IGtleSB8fCBmPy5qaW11TmFtZSA9PT0ga2V5IHx8IGsgPT09IGtleSlcbiAgICAgICAgICByZXR1cm4gZj8ubmFtZSB8fCBrZXk7XG4gICAgICB9XG4gICAgfSBjYXRjaCB7fVxuXG4gICAgLy8gZmFsbGJhY2sgdG8gY2xpY2tlZCBsYXllciBmaWVsZHNcbiAgICBjb25zdCBjbGlja2VkTGF5ZXIgPSB0aGlzLmdldENsaWNrZWRMYXllcigpO1xuICAgIGNvbnN0IGxmID0gY2xpY2tlZExheWVyPy5maWVsZHM/LmZpbmQoXG4gICAgICAoZmY6IGFueSkgPT4gZmYubmFtZSA9PT0ga2V5IHx8IGZmLmFsaWFzID09PSBrZXksXG4gICAgKTtcbiAgICByZXR1cm4gbGY/Lm5hbWUgfHwgbnVsbDtcbiAgfTtcblxuICBwcml2YXRlIG5vcm1hbGl6ZUZpZWxkQWxpYXMoZmllbGQ6IGFueSwgZmFsbGJhY2tOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBub3JtYWxpemVGaWVsZEFsaWFzU2hhcmVkKGZpZWxkLCBmYWxsYmFja05hbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kRmllbGRNZXRhT25MYXllcihcbiAgICBsYXllcjogYW55LFxuICAgIGZpZWxkTmFtZTogc3RyaW5nLFxuICApOiBfX2VzcmkuRmllbGQgfCBudWxsIHtcbiAgICBjb25zdCB0YXJnZXQgPSBmaWVsZE5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBmaWVsZHMgPSBBcnJheS5pc0FycmF5KGxheWVyPy5maWVsZHMpID8gbGF5ZXIuZmllbGRzIDogW107XG4gICAgcmV0dXJuIChcbiAgICAgIChmaWVsZHMuZmluZChcbiAgICAgICAgKGY6IGFueSkgPT4gU3RyaW5nKGY/Lm5hbWUgfHwgXCJcIikudG9Mb3dlckNhc2UoKSA9PT0gdGFyZ2V0LFxuICAgICAgKSBhcyBfX2VzcmkuRmllbGQgfCB1bmRlZmluZWQpIHx8IG51bGxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlQWxpYXNGcm9tTGl2ZUxheWVycyhmaWVsZE5hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICAgIGNvbnN0IGxheWVyczogX19lc3JpLkZlYXR1cmVMYXllcltdID0gW107XG4gICAgY29uc3QgY2xpY2tlZCA9IHRoaXMuZ2V0Q2xpY2tlZExheWVyKCk7XG4gICAgaWYgKGNsaWNrZWQpIGxheWVycy5wdXNoKGNsaWNrZWQpO1xuICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXJzIHx8IFtdKSB7XG4gICAgICBpZiAobGF5ZXIgJiYgIWxheWVycy5pbmNsdWRlcyhsYXllcikpIGxheWVycy5wdXNoKGxheWVyKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGxheWVyIG9mIGxheWVycykge1xuICAgICAgY29uc3QgZmxkID0gdGhpcy5maW5kRmllbGRNZXRhT25MYXllcihsYXllciwgZmllbGROYW1lKTtcbiAgICAgIGlmICghZmxkKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IGFsaWFzID0gdGhpcy5ub3JtYWxpemVGaWVsZEFsaWFzKGZsZCwgZmllbGROYW1lKTtcbiAgICAgIGlmIChhbGlhcyAmJiBhbGlhcy50b0xvd2VyQ2FzZSgpICE9PSBmaWVsZE5hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICByZXR1cm4gYWxpYXM7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlQWxpYXNGcm9tRGF0YVNvdXJjZVNjaGVtYShcbiAgICBmaWVsZE5hbWU6IHN0cmluZyxcbiAgICBkczogYW55LFxuICApOiBzdHJpbmcgfCBudWxsIHtcbiAgICBpZiAoIWRzKSByZXR1cm4gbnVsbDtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZmllbGRzT2JqID0gZHM/LmdldFNjaGVtYT8uKCk/LmZpZWxkcyB8fCB7fTtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGZpZWxkTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoZmllbGRzT2JqKSkge1xuICAgICAgICBjb25zdCBmID0gZmllbGRzT2JqW2tleV07XG4gICAgICAgIGNvbnN0IGZuYW1lID0gU3RyaW5nKGY/Lm5hbWUgfHwgZj8uamltdU5hbWUgfHwga2V5IHx8IFwiXCIpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZm5hbWUudG9Mb3dlckNhc2UoKSAhPT0gdGFyZ2V0ICYmXG4gICAgICAgICAga2V5LnRvTG93ZXJDYXNlKCkgIT09IHRhcmdldCAmJlxuICAgICAgICAgIFN0cmluZyhmPy5qaW11TmFtZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpICE9PSB0YXJnZXRcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxpYXMgPSB0aGlzLm5vcm1hbGl6ZUZpZWxkQWxpYXMoZiwgZmllbGROYW1lKTtcbiAgICAgICAgaWYgKGFsaWFzICYmIGFsaWFzLnRvTG93ZXJDYXNlKCkgIT09IGZpZWxkTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgcmV0dXJuIGFsaWFzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCB7XG4gICAgICAvKiBpZ25vcmUgKi9cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGdldEZpZWxkQWxpYXMobmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBjdXN0b20gPSB0aGlzLnByb3BzLmNvbmZpZz8ubGFiZWxzPy5bbmFtZV07XG4gICAgaWYgKGN1c3RvbSkgcmV0dXJuIGN1c3RvbTtcblxuICAgIGNvbnN0IHJlYWxOYW1lID0gdGhpcy5yZXNvbHZlRmllbGROYW1lKG5hbWUpIHx8IG5hbWU7XG5cbiAgICAvLyBMaXZlIG1hcCBsYXllciBmaXJzdCDigJQgcmVmbGVjdHMgbGF0ZXN0IEFyY0dJUyBmaWVsZCBkaXNwbGF5IG5hbWVzXG4gICAgY29uc3QgZnJvbUxheWVyID0gdGhpcy5yZXNvbHZlQWxpYXNGcm9tTGl2ZUxheWVycyhyZWFsTmFtZSk7XG4gICAgaWYgKGZyb21MYXllcikgcmV0dXJuIGZyb21MYXllcjtcblxuICAgIGNvbnN0IGRzSWQgPSB0aGlzLnN0YXRlLmxhc3RDbGlja2VkRHNJZDtcbiAgICBjb25zdCBkczogYW55ID1cbiAgICAgIGRzSWQgJiYgdGhpcy5zdGF0ZS5kYXRhU291cmNlc0J5SWQ/Lltkc0lkXVxuICAgICAgICA/IHRoaXMuc3RhdGUuZGF0YVNvdXJjZXNCeUlkW2RzSWRdXG4gICAgICAgIDogbnVsbDtcbiAgICBjb25zdCBmcm9tRHMgPSB0aGlzLnJlc29sdmVBbGlhc0Zyb21EYXRhU291cmNlU2NoZW1hKHJlYWxOYW1lLCBkcyk7XG4gICAgaWYgKGZyb21EcykgcmV0dXJuIGZyb21EcztcblxuICAgIGZvciAoY29uc3QgbGF5ZXJEcyBvZiBPYmplY3QudmFsdWVzKHRoaXMuc3RhdGUuZGF0YVNvdXJjZXNCeUlkIHx8IHt9KSkge1xuICAgICAgY29uc3QgYWxpYXMgPSB0aGlzLnJlc29sdmVBbGlhc0Zyb21EYXRhU291cmNlU2NoZW1hKHJlYWxOYW1lLCBsYXllckRzKTtcbiAgICAgIGlmIChhbGlhcykgcmV0dXJuIGFsaWFzO1xuICAgIH1cblxuICAgIGNvbnN0IGNsaWNrZWRMYXllciA9IHRoaXMuZ2V0Q2xpY2tlZExheWVyKCk7XG4gICAgY29uc3QgbGF5ZXJGbGQgPSBjbGlja2VkTGF5ZXJcbiAgICAgID8gdGhpcy5maW5kRmllbGRNZXRhT25MYXllcihjbGlja2VkTGF5ZXIsIHJlYWxOYW1lKVxuICAgICAgOiBudWxsO1xuICAgIGlmIChsYXllckZsZD8uYWxpYXMpIHJldHVybiBTdHJpbmcobGF5ZXJGbGQuYWxpYXMpO1xuXG4gICAgcmV0dXJuIHJlYWxOYW1lO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXREYXRlU21hcnQocmF3OiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiBmb3JtYXREYXRlU21hcnRTaGFyZWQocmF3KTtcbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0VmFsdWUobmFtZTogc3RyaW5nLCByYXc6IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGZvcm1hdFBvcHVwQXR0cmlidXRlVmFsdWUocmF3LCB7XG4gICAgICBpc0RhdGVGaWVsZDogdGhpcy5pc0RhdGVGaWVsZChuYW1lKSxcbiAgICAgIGZvcm1hdERhdGU6ICh2YWx1ZSkgPT4gdGhpcy5mb3JtYXREYXRlU21hcnQodmFsdWUpLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPdXRGaWVsZHMobGF5ZXI6IEZlYXR1cmVMYXllciwgb2lkRmllbGQ6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICAvLyBrZWVwIHlvdXIgZGVidWdnaW5nIGJlaGF2aW9yXG4gICAgcmV0dXJuIFtcIipcIl07XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tIFBvcHVwIHBvc2l0aW9uaW5nIC0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICBwcml2YXRlIGNhbGN1bGF0ZVBvcHVwUG9zaXRpb24gPSAoXG4gICAgY2xpY2tQb2ludDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LFxuICAgIHZpZXc6IF9fZXNyaS5NYXBWaWV3IHwgX19lc3JpLlNjZW5lVmlldyxcbiAgKTogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9ID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSB2aWV3LmNvbnRhaW5lciBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCByZWN0ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgY29uc3QgbWFyZ2luID0gdGhpcy5QT1BVUF9NQVJHSU47XG4gICAgY29uc3QgcG9wdXBXID0gdGhpcy5nZXRQb3B1cFdpZHRoKHZpZXcpO1xuICAgIGNvbnN0IHBvcHVwSCA9IHBvcHVwVztcblxuICAgIC8vIOKchSBFQiBidWlsZHMgZGlmZmVyOlxuICAgIC8vIC0gc29tZSBnaXZlIGV2LngvZXYueSByZWxhdGl2ZSB0byBjb250YWluZXIgKDAuLnJlY3Qud2lkdGgpXG4gICAgLy8gLSBvdGhlcnMgZ2l2ZSB2aWV3cG9ydCBjb29yZHMgKHNhbWUgc3BhY2UgYXMgcmVjdC5sZWZ0L3RvcClcbiAgICBjb25zdCBsb29rc0NvbnRhaW5lclJlbGF0aXZlID1cbiAgICAgIGNsaWNrUG9pbnQueCA+PSAwICYmXG4gICAgICBjbGlja1BvaW50LnkgPj0gMCAmJlxuICAgICAgY2xpY2tQb2ludC54IDw9IHJlY3Qud2lkdGggKyAyICYmXG4gICAgICBjbGlja1BvaW50LnkgPD0gcmVjdC5oZWlnaHQgKyAyO1xuXG4gICAgLy8gQ29udmVydCBjbGljayB0byBWSUVXUE9SVCBjb29yZHMgKGJlY2F1c2UgcG9wdXAgaXMgcG9zaXRpb246IGZpeGVkKVxuICAgIGNvbnN0IHZpZXdwb3J0Q2xpY2tYID0gbG9va3NDb250YWluZXJSZWxhdGl2ZVxuICAgICAgPyByZWN0LmxlZnQgKyBjbGlja1BvaW50LnhcbiAgICAgIDogY2xpY2tQb2ludC54O1xuICAgIGNvbnN0IHZpZXdwb3J0Q2xpY2tZID0gbG9va3NDb250YWluZXJSZWxhdGl2ZVxuICAgICAgPyByZWN0LnRvcCArIGNsaWNrUG9pbnQueVxuICAgICAgOiBjbGlja1BvaW50Lnk7XG5cbiAgICAvLyBNYXAgY29udGFpbmVyIGJvdW5kYXJpZXMgaW4gdmlld3BvcnQgY29vcmRzXG4gICAgY29uc3QgbWFwTGVmdCA9IHJlY3QubGVmdDtcbiAgICBjb25zdCBtYXBUb3AgPSByZWN0LnRvcDtcbiAgICBjb25zdCBtYXBSaWdodCA9IHJlY3QucmlnaHQ7XG4gICAgY29uc3QgbWFwQm90dG9tID0gdGhpcy5nZXRFZmZlY3RpdmVNYXBCb3R0b20odmlldywgbWFyZ2luKTtcblxuICAgIC8vIFByZWZlciBib3R0b20tcmlnaHQgb2YgY2xpY2tcbiAgICBsZXQgeCA9IHZpZXdwb3J0Q2xpY2tYICsgbWFyZ2luO1xuICAgIGxldCB5ID0gdmlld3BvcnRDbGlja1kgKyBtYXJnaW47XG5cbiAgICAvLyBGbGlwIGxlZnQgaWYgb3ZlcmZsb3dpbmcgcmlnaHQgZWRnZSAoQ1JJVElDQUwhKVxuICAgIC8vIENoZWNrIGlmIHBvcHVwIHdvdWxkIGdvIG91dHNpZGUgbWFwJ3MgcmlnaHQgYm91bmRhcnlcbiAgICBpZiAoeCArIHBvcHVwVyA+IG1hcFJpZ2h0IC0gbWFyZ2luKSB7XG4gICAgICB4ID0gdmlld3BvcnRDbGlja1ggLSBwb3B1cFcgLSBtYXJnaW47XG4gICAgfVxuXG4gICAgLy8gRmxpcCB1cCBpZiBvdmVyZmxvd2luZyBib3R0b20gZWRnZVxuICAgIGlmICh5ICsgcG9wdXBIID4gbWFwQm90dG9tIC0gbWFyZ2luKSB7XG4gICAgICB5ID0gdmlld3BvcnRDbGlja1kgLSBwb3B1cEggLSBtYXJnaW47XG4gICAgfVxuXG4gICAgLy8gRmluYWwgaGFyZCBjbGFtcCB0byBtYXAgY29udGFpbmVyIGJvdW5kc1xuICAgIC8vIFRoaXMgaXMgdGhlIGNyaXRpY2FsIHBhcnQgLSBlbnN1cmUgcG9wdXAgTkVWRVIgZXhjZWVkcyBtYXAgYm91bmRzXG4gICAgY29uc3QgbWluWCA9IG1hcExlZnQgKyBtYXJnaW47XG4gICAgY29uc3QgbWF4WCA9IG1hcFJpZ2h0IC0gcG9wdXBXIC0gbWFyZ2luO1xuICAgIGNvbnN0IG1pblkgPSBtYXBUb3AgKyBtYXJnaW47XG4gICAgY29uc3QgbWF4WSA9IG1hcEJvdHRvbSAtIHBvcHVwSCAtIG1hcmdpbjtcblxuICAgIHggPSBNYXRoLm1heChtaW5YLCBNYXRoLm1pbih4LCBtYXhYKSk7XG4gICAgeSA9IE1hdGgubWF4KG1pblksIE1hdGgubWluKHksIG1heFkpKTtcblxuICAgIC8vIEZJTkFMIFNBRkVUWSBORVQ6IEVuc3VyZSB4IG5ldmVyIGV4Y2VlZHMgcmlnaHQgYm91bmRhcnlcbiAgICBpZiAoeCArIHBvcHVwVyA+IG1hcFJpZ2h0IC0gbWFyZ2luKSB7XG4gICAgICB4ID0gbWFwUmlnaHQgLSBwb3B1cFcgLSBtYXJnaW47XG4gICAgfVxuICAgIC8vIEFsc28gZW5zdXJlIHggPj0gbGVmdCBib3VuZGFyeVxuICAgIGlmICh4IDwgbWFwTGVmdCArIG1hcmdpbikge1xuICAgICAgeCA9IG1hcExlZnQgKyBtYXJnaW47XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgeCwgeSB9O1xuICB9O1xuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShcbiAgICBwcmV2UHJvcHM6IFJlYWRvbmx5PEFsbFdpZGdldFByb3BzPENvbmZpZz4+LFxuICAgIHByZXZTdGF0ZTogUmVhZG9ubHk8U3RhdGU+LFxuICApIHtcbiAgICBjb25zdCBwcmV2RHMgPSBnZXRTZWxlY3RlZERzSWRzKHByZXZQcm9wcy51c2VEYXRhU291cmNlcykuam9pbihcInxcIik7XG4gICAgY29uc3QgbmV4dERzID0gZ2V0U2VsZWN0ZWREc0lkcyh0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzKS5qb2luKFwifFwiKTtcbiAgICBjb25zdCBkc0NoYW5nZWQgPSBwcmV2RHMgIT09IG5leHREcztcbiAgICBjb25zdCBwcmV2TWFwID0gU3RyaW5nKFxuICAgICAgKHByZXZQcm9wcy51c2VNYXBXaWRnZXRJZHMgYXMgYW55KT8uWzBdIHx8XG4gICAgICAgIChwcmV2UHJvcHMudXNlTWFwV2lkZ2V0SWRzIGFzIGFueSk/LmdldD8uKDApIHx8XG4gICAgICAgIFwiXCIsXG4gICAgKTtcbiAgICBjb25zdCBuZXh0TWFwID0gU3RyaW5nKFxuICAgICAgKHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzIGFzIGFueSk/LlswXSB8fFxuICAgICAgICAodGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMgYXMgYW55KT8uZ2V0Py4oMCkgfHxcbiAgICAgICAgXCJcIixcbiAgICApO1xuICAgIGNvbnN0IG1hcENoYW5nZWQgPSBwcmV2TWFwICE9PSBuZXh0TWFwO1xuICAgIGlmICgoZHNDaGFuZ2VkIHx8IG1hcENoYW5nZWQpICYmIHRoaXMuc3RhdGUuamltdU1hcFZpZXcpIHtcbiAgICAgIHZvaWQgdGhpcy5pbml0aWFsaXplTWFwQ29ubmVjdGlvbih0aGlzLnN0YXRlLmppbXVNYXBWaWV3KTtcbiAgICB9IGVsc2UgaWYgKG1hcENoYW5nZWQpIHtcbiAgICAgIHRoaXMuc2NoZWR1bGVNYXBWaWV3RmFsbGJhY2soKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBwcmV2U3RhdGUuc2hvd1BvcHVwICE9PSB0aGlzLnN0YXRlLnNob3dQb3B1cCB8fFxuICAgICAgcHJldlN0YXRlLnBvcHVwTWluaW1pemVkICE9PSB0aGlzLnN0YXRlLnBvcHVwTWluaW1pemVkXG4gICAgKSB7XG4gICAgICB0aGlzLmJyb2FkY2FzdFBvcHVwVmlzaWJpbGl0eShcbiAgICAgICAgdGhpcy5zdGF0ZS5zaG93UG9wdXAgJiYgIXRoaXMuc3RhdGUucG9wdXBNaW5pbWl6ZWQsXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0aGlzLnN0YXRlLnNob3dQb3B1cCAmJlxuICAgICAgIXRoaXMuc3RhdGUucG9wdXBNaW5pbWl6ZWQgJiZcbiAgICAgIHByZXZTdGF0ZS5waW5Ub0Nvcm5lciAhPT0gdGhpcy5zdGF0ZS5waW5Ub0Nvcm5lclxuICAgICkge1xuICAgICAgdGhpcy5icm9hZGNhc3RQb3B1cFZpc2liaWxpdHkodHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnN0YXRlLnNob3dQb3B1cCB8fCB0aGlzLnN0YXRlLnBvcHVwTWluaW1pemVkKSByZXR1cm47XG5cbiAgICBjb25zdCBvcGVuZWROb3cgPVxuICAgICAgKHRoaXMuc3RhdGUuc2hvd1BvcHVwICYmICFwcmV2U3RhdGUuc2hvd1BvcHVwKSB8fFxuICAgICAgKHByZXZTdGF0ZS5wb3B1cE1pbmltaXplZCAmJiAhdGhpcy5zdGF0ZS5wb3B1cE1pbmltaXplZCk7XG4gICAgY29uc3QgYXR0YWNobWVudHNDaGFuZ2VkID1cbiAgICAgIHRoaXMuc3RhdGUubG9hZGluZ0F0dGFjaG1lbnRzICE9PSBwcmV2U3RhdGUubG9hZGluZ0F0dGFjaG1lbnRzIHx8XG4gICAgICAodGhpcy5zdGF0ZS5hdHRhY2htZW50cz8ubGVuZ3RoIHx8IDApICE9PVxuICAgICAgICAocHJldlN0YXRlLmF0dGFjaG1lbnRzPy5sZW5ndGggfHwgMCk7XG4gICAgY29uc3QgbG9hZGluZ0NoYW5nZWQgPSB0aGlzLnN0YXRlLmxvYWRpbmcgIT09IHByZXZTdGF0ZS5sb2FkaW5nO1xuICAgIGNvbnN0IGF0dHJzQ2hhbmdlZCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRBdHRycyAhPT0gcHJldlN0YXRlLnNlbGVjdGVkQXR0cnM7XG5cbiAgICBpZiAoXG4gICAgICAhb3BlbmVkTm93ICYmXG4gICAgICAhYXR0YWNobWVudHNDaGFuZ2VkICYmXG4gICAgICAhbG9hZGluZ0NoYW5nZWQgJiZcbiAgICAgICFhdHRyc0NoYW5nZWRcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNjaGVkdWxlUG9wdXBMYXlvdXRBZnRlckNvbnRlbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xvc2VQb3B1cCA9IChvcHRzPzoge1xuICAgIHJlc3RvcmVFeHRlbnQ/OiBib29sZWFuO1xuICAgIG5vdGlmeURlc2VsZWN0PzogYm9vbGVhbjtcbiAgfSkgPT4ge1xuICAgIC8vIENsb3NpbmcgdGhlIHBhbmVsIGFsb25lIG11c3Qga2VlcCB0aGUgcG9seWdvbiBoaWdobGlnaHQgKyBtYXAgZXh0ZW50LlxuICAgIC8vIEV4cGxpY2l0IGNhbGxlcnMgKGVtcHR5IG1hcCBjbGljayAvIGdlbyByZXNldCkgb3B0IGludG8gcmVzdG9yZS9kZXNlbGVjdC5cbiAgICBjb25zdCByZXN0b3JlRXh0ZW50ID0gb3B0cz8ucmVzdG9yZUV4dGVudCA9PT0gdHJ1ZTtcbiAgICBjb25zdCBub3RpZnlEZXNlbGVjdCA9IG9wdHM/Lm5vdGlmeURlc2VsZWN0ID09PSB0cnVlO1xuXG4gICAgLy8gSW52YWxpZGF0ZSBldmVyeSBwZW5kaW5nIGhpdFRlc3QvcXVlcnkvYXR0YWNobWVudCByZXF1ZXN0LiBPdGhlcndpc2UgYVxuICAgIC8vIGZpZWxkIGNsaWNrIHRoYXQgd2FzIHN0aWxsIGxvYWRpbmcgY291bGQgcmVvcGVuIGl0cyBzdGFsZSBwb3B1cCBhZnRlclxuICAgIC8vIHRoZSB1c2VyIGhhZCBhbHJlYWR5IG1vdmVkIHRvIGFub3RoZXIgZGlzdHJpY3Qgb3IgcmVnaW9uLlxuICAgIHRoaXMuX2NsaWNrR2VuZXJhdGlvbiArPSAxO1xuICAgIHRoaXMuX2xhdGVzdEluZGljZXNSZXF1ZXN0SWQgKz0gMTtcblxuICAgIGlmICghdGhpcy5zdGF0ZS5zaG93UG9wdXApIHtcbiAgICAgIGlmIChub3RpZnlEZXNlbGVjdCkge1xuICAgICAgICB0aGlzLmNsZWFySGlnaGxpZ2h0KCk7XG4gICAgICAgIHRoaXMubm90aWZ5R3JhZmZQb2x5Z29uU2VsZWN0aW9uKFwiXCIsIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGlmICghcmVzdG9yZUV4dGVudCkgdGhpcy5fZXh0ZW50QmVmb3JlU2VsZWN0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgICAgIHNlbGVjdGVkQXR0cnM6IG51bGwsXG4gICAgICAgIHNlbGVjdGVkT0lEOiBudWxsLFxuICAgICAgICBvYmplY3RJZEZpZWxkOiBudWxsLFxuICAgICAgICBsYXN0Q2xpY2tlZERzSWQ6IG51bGwsXG4gICAgICAgIGxhc3RDbGlja2VkTGF5ZXJLZXk6IG51bGwsXG4gICAgICAgIHBvcHVwUG9zaXRpb246IG51bGwsXG4gICAgICAgIGNsaWNrU2NyZWVuUG9pbnQ6IG51bGwsXG4gICAgICAgIHBvcHVwTWluaW1pemVkOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChub3RpZnlEZXNlbGVjdCkge1xuICAgICAgdGhpcy5jbGVhckhpZ2hsaWdodCgpO1xuICAgICAgdGhpcy5ub3RpZnlHcmFmZlBvbHlnb25TZWxlY3Rpb24oXCJcIiwgZmFsc2UpO1xuICAgIH1cbiAgICB0aGlzLnJldm9rZUFsbEF0dGFjaG1lbnRVcmxzKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93UG9wdXA6IGZhbHNlLFxuICAgICAgcG9wdXBNaW5pbWl6ZWQ6IGZhbHNlLFxuICAgICAgcG9wdXBQb3NpdGlvbjogbnVsbCxcbiAgICAgIGNsaWNrU2NyZWVuUG9pbnQ6IG51bGwsXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGVycm9yOiBudWxsLFxuICAgICAgc2VsZWN0ZWRBdHRyczogbnVsbCxcbiAgICAgIHNlbGVjdGVkT0lEOiBudWxsLFxuICAgICAgb2JqZWN0SWRGaWVsZDogbnVsbCxcbiAgICAgIGxhc3RDbGlja2VkRHNJZDogbnVsbCxcbiAgICAgIGxhc3RDbGlja2VkTGF5ZXJLZXk6IG51bGwsXG4gICAgICBhdHRhY2htZW50czogW10sXG4gICAgICBhdHRhY2htZW50c0V4cGFuZGVkOiBmYWxzZSxcbiAgICAgIGxvYWRpbmdBdHRhY2htZW50czogZmFsc2UsXG4gICAgICBjaGFydEV4cGFuZGVkOiBmYWxzZSxcbiAgICAgIGNoYXJ0SG92ZXJJbmRleDogbnVsbCxcbiAgICAgIGxvYWRpbmdMYXRlc3RJbmRpY2VzOiBmYWxzZSxcbiAgICAgIGxhdGVzdEluZGV4RGF0ZTogbnVsbCxcbiAgICAgIGxhdGVzdEluZGV4VmFsdWVzOiBudWxsLFxuICAgIH0pO1xuICAgIGlmIChyZXN0b3JlRXh0ZW50KSB7XG4gICAgICB0aGlzLnJlc3RvcmVFeHRlbnRCZWZvcmVTZWxlY3Rpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZXh0ZW50QmVmb3JlU2VsZWN0aW9uID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgLyoqIEhlYWRlciBYIOKAlCBjb2xsYXBzZSB0aGUgcGFuZWw7IGtlZXAgcG9seWdvbiBzZWxlY3Rpb24gKyBsb2FkZWQgYXR0cnMuICovXG4gIHByaXZhdGUgbWluaW1pemVQb3B1cCA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAoIXRoaXMuX2lzTW91bnRlZCB8fCAhdGhpcy5zdGF0ZS5zaG93UG9wdXAgfHwgdGhpcy5zdGF0ZS5wb3B1cE1pbmltaXplZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgcG9wdXBNaW5pbWl6ZWQ6IHRydWUgfSk7XG4gIH07XG5cbiAgLyoqIEV4cGFuZCBhIHByZXZpb3VzbHkgbWluaW1pemVkIGF0dHJpYnV0ZSBwYW5lbC4gKi9cbiAgcHJpdmF0ZSBleHBhbmRQb3B1cCA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAoIXRoaXMuX2lzTW91bnRlZCB8fCAhdGhpcy5zdGF0ZS5zaG93UG9wdXAgfHwgIXRoaXMuc3RhdGUucG9wdXBNaW5pbWl6ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHBvcHVwTWluaW1pemVkOiBmYWxzZSB9KTtcbiAgfTtcblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tIERTIGhvb2sgKGluc3RhbnRpYXRlcyBEUykgLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gIG9uRGF0YVNvdXJjZUNyZWF0ZWQgPSAoZHM6IFF1ZXJpYWJsZURhdGFTb3VyY2UpID0+IHtcbiAgICBpZiAoIWRzPy5pZCkgcmV0dXJuO1xuICAgIHRoaXMuZGF0YVNvdXJjZUVuZ2luZS5vbkRzQ3JlYXRlZChcbiAgICAgIGRzLFxuICAgICAgZ2V0U2VsZWN0ZWREc0lkcyh0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzKSxcbiAgICApO1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXYpID0+ICh7XG4gICAgICBkYXRhU291cmNlc0J5SWQ6IHsgLi4uKHByZXYuZGF0YVNvdXJjZXNCeUlkIHx8IHt9KSwgW2RzLmlkXTogZHMgfSxcbiAgICB9KSk7XG4gICAgaWYgKHRoaXMuc3RhdGUuamltdU1hcFZpZXcpIHtcbiAgICAgIHZvaWQgdGhpcy5pbml0aWFsaXplTWFwQ29ubmVjdGlvbih0aGlzLnN0YXRlLmppbXVNYXBWaWV3KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zY2hlZHVsZU1hcFZpZXdGYWxsYmFjaygpO1xuICAgIH1cbiAgfTtcblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tIENoYXJ0IHJlbmRlcmluZyAtLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgcHJpdmF0ZSB0b2dnbGVDaGFydEV4cGFuZGVkID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXYpID0+ICh7IGNoYXJ0RXhwYW5kZWQ6ICFwcmV2LmNoYXJ0RXhwYW5kZWQgfSkpO1xuICB9O1xuXG4gIHByaXZhdGUgcmVuZGVyQ2hhcnRJY29uID0gKHR5cGU6IFwiYmFyXCIgfCBcImxpbmVcIiA9IFwiYmFyXCIpOiBKU1guRWxlbWVudCA9PlxuICAgIHR5cGUgPT09IFwibGluZVwiID8gKFxuICAgICAgPExpbmVDaGFydCBjbGFzc05hbWU9XCJhZ3JpMy1jaGFydC1pY29uXCIgc3Ryb2tlV2lkdGg9ezJ9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgKSA6IChcbiAgICAgIDxCYXJDaGFydDMgY2xhc3NOYW1lPVwiYWdyaTMtY2hhcnQtaWNvblwiIHN0cm9rZVdpZHRoPXsyfSBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICk7XG5cbiAgcHJpdmF0ZSBjbGVhckNoYXJ0SG92ZXIgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuY2hhcnRIb3ZlckluZGV4ICE9IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGFydEhvdmVySW5kZXg6IG51bGwgfSk7XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgc2V0Q2hhcnRIb3ZlciA9IChpbmRleDogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuY2hhcnRIb3ZlckluZGV4ICE9PSBpbmRleCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoYXJ0SG92ZXJJbmRleDogaW5kZXggfSk7XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgbmljZUNoYXJ0TWF4KHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBuaWNlQ2hhcnRNYXhTaGFyZWQodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRDaGFydFRpY2sodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGZvcm1hdENoYXJ0VGlja1NoYXJlZCh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIGZvcm1hdENoYXJ0VG9vbHRpcFZhbHVlKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBmb3JtYXRDaGFydFRvb2x0aXBWYWx1ZVNoYXJlZCh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkU21vb3RoTGluZVBhdGgoXG4gICAgcG9pbnRzOiBBcnJheTx7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0+LFxuICApOiBzdHJpbmcge1xuICAgIGlmICghcG9pbnRzLmxlbmd0aCkgcmV0dXJuIFwiXCI7XG4gICAgaWYgKHBvaW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiBgTSAke3BvaW50c1swXS54fSAke3BvaW50c1swXS55fWA7XG4gICAgfVxuXG4gICAgbGV0IHBhdGggPSBgTSAke3BvaW50c1swXS54fSAke3BvaW50c1swXS55fWA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBjb25zdCBwMCA9IHBvaW50c1tpIC0gMV0gfHwgcG9pbnRzW2ldO1xuICAgICAgY29uc3QgcDEgPSBwb2ludHNbaV07XG4gICAgICBjb25zdCBwMiA9IHBvaW50c1tpICsgMV07XG4gICAgICBjb25zdCBwMyA9IHBvaW50c1tpICsgMl0gfHwgcDI7XG4gICAgICBjb25zdCBjcDF4ID0gcDEueCArIChwMi54IC0gcDAueCkgLyA2O1xuICAgICAgY29uc3QgY3AxeSA9IHAxLnkgKyAocDIueSAtIHAwLnkpIC8gNjtcbiAgICAgIGNvbnN0IGNwMnggPSBwMi54IC0gKHAzLnggLSBwMS54KSAvIDY7XG4gICAgICBjb25zdCBjcDJ5ID0gcDIueSAtIChwMy55IC0gcDEueSkgLyA2O1xuICAgICAgcGF0aCArPSBgIEMgJHtjcDF4fSAke2NwMXl9LCAke2NwMnh9ICR7Y3AyeX0sICR7cDIueH0gJHtwMi55fWA7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZFJvdW5kZWRCYXJQYXRoKFxuICAgIHg6IG51bWJlcixcbiAgICB5OiBudW1iZXIsXG4gICAgd2lkdGg6IG51bWJlcixcbiAgICBoZWlnaHQ6IG51bWJlcixcbiAgICByYWRpdXM6IG51bWJlcixcbiAgKTogc3RyaW5nIHtcbiAgICBjb25zdCByID0gTWF0aC5taW4ocmFkaXVzLCB3aWR0aCAvIDIsIGhlaWdodCk7XG4gICAgY29uc3QgYm90dG9tID0geSArIGhlaWdodDtcbiAgICByZXR1cm4gW1xuICAgICAgYE0gJHt4fSAke2JvdHRvbX1gLFxuICAgICAgYEwgJHt4fSAke3kgKyByfWAsXG4gICAgICBgUSAke3h9ICR7eX0gJHt4ICsgcn0gJHt5fWAsXG4gICAgICBgTCAke3ggKyB3aWR0aCAtIHJ9ICR7eX1gLFxuICAgICAgYFEgJHt4ICsgd2lkdGh9ICR7eX0gJHt4ICsgd2lkdGh9ICR7eSArIHJ9YCxcbiAgICAgIGBMICR7eCArIHdpZHRofSAke2JvdHRvbX1gLFxuICAgICAgXCJaXCIsXG4gICAgXS5qb2luKFwiIFwiKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyTGF0ZXN0SW5kaWNlcyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGxvYWRpbmdMYXRlc3RJbmRpY2VzLCBsYXRlc3RJbmRleERhdGUsIGxhdGVzdEluZGV4VmFsdWVzIH0gPVxuICAgICAgdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IGhhc1ZhbHVlcyA9ICEhbGF0ZXN0SW5kZXhWYWx1ZXM7XG4gICAgY29uc3Qgc2hvd0Jsb2NraW5nTG9hZGVyID0gbG9hZGluZ0xhdGVzdEluZGljZXMgJiYgIWhhc1ZhbHVlcztcbiAgICBjb25zdCBzaG93UmVmcmVzaExvYWRlciA9IGxvYWRpbmdMYXRlc3RJbmRpY2VzICYmIGhhc1ZhbHVlcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmkzLWZpZWxkLWxpc3QgYWdyaTMtaW5kaWNlcy1saXN0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyaTMtZmllbGQtcm93IGFncmkzLWluZGljZXMtaGVhZGVyLXJvd1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFncmkzLWZpZWxkLWxhYmVsIGFncmkzLWluZGljZXMtdGl0bGVcIj5cbiAgICAgICAgICAgIDxTcHJvdXQgc2l6ZT17MTR9IHN0cm9rZVdpZHRoPXsyLjJ9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICB7dGhpcy50cihcImluZGljZXMudGl0bGVcIil9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIHtsYXRlc3RJbmRleERhdGUgJiYgIWxvYWRpbmdMYXRlc3RJbmRpY2VzICYmIChcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFncmkzLWZpZWxkLXZhbHVlIGFncmkzLWluZGljZXMtZGF0ZVwiPlxuICAgICAgICAgICAgICA8Q2FsZW5kYXJEYXlzIHNpemU9ezEzfSBzdHJva2VXaWR0aD17Mn0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAge2xhdGVzdEluZGV4RGF0ZX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3Nob3dCbG9ja2luZ0xvYWRlciA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmkzLWluZGljZXMtbG9hZGluZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxBZ3JpQ2hhcnRMb2FkZXIgbGFiZWw9e3RoaXMudHIoXCJpbmRpY2VzLmxvYWRpbmdcIil9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBoYXNWYWx1ZXMgPyAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYWdyaTMtaW5kaWNlcy1ib2R5JHtcbiAgICAgICAgICAgICAgc2hvd1JlZnJlc2hMb2FkZXIgPyBcIiBhZ3JpMy1pbmRpY2VzLWJvZHktLWxvYWRpbmdcIiA6IFwiXCJcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzaG93UmVmcmVzaExvYWRlciA/IChcbiAgICAgICAgICAgICAgPEFncmlDaGFydExvYWRlciBsYWJlbD17dGhpcy50cihcImluZGljZXMubG9hZGluZ1wiKX0gLz5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAge0FncmlQb2x5Z29uLlZFR19JTkRFWF9GSUVMRFMuZmlsdGVyKFxuICAgICAgICAgICAgICAoZikgPT4gbGF0ZXN0SW5kZXhWYWx1ZXNbZl0gIT0gbnVsbCxcbiAgICAgICAgICAgICkubWFwKChmKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhZ3JpMy1maWVsZC1yb3cgYWdyaTMtaW5kZXgtcm93IGFncmkzLWluZGV4LXJvdy0tJHtmfWB9XG4gICAgICAgICAgICAgICAga2V5PXtmfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFncmkzLWZpZWxkLWxhYmVsIGFncmkzLWluZGV4LWxhYmVsIGFncmkzLWluZGV4LWxhYmVsLS0ke2Z9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZ3JpMy1pbmRleC1kb3RcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgICAge2YudG9VcHBlckNhc2UoKX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWdyaTMtZmllbGQtdmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgIHtsYXRlc3RJbmRleFZhbHVlc1tmXS50b0ZpeGVkKDQpfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmkzLXN0YXR1cy1pbmRpY2F0b3IgYWdyaTMtc3RhdHVzLXdhaXRpbmdcIj5cbiAgICAgICAgICAgIDxJbmJveCBjbGFzc05hbWU9XCJhZ3JpMy1zdGF0dXMtaWNvblwiIHNpemU9ezE2fSBzdHJva2VXaWR0aD17Mi4yfSBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAge3RoaXMudHIoXCJpbmRpY2VzLm5vbmVcIil9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHByaXZhdGUgcmVuZGVyQ2hhcnQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5wcm9wcy5jb25maWc7XG4gICAgaWYgKCFjb25maWc/LmNoYXJ0RW5hYmxlZCkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBjaGFydEZpZWxkcyA9IGNvbmZpZy5jaGFydEZpZWxkcyB8fCBbXTtcbiAgICBjb25zdCBjaGFydFR5cGUgPSBjb25maWcuY2hhcnRUeXBlIHx8IFwiYmFyXCI7XG4gICAgY29uc3QgY2hhcnRUaXRsZSA9IGNvbmZpZy5jaGFydFRpdGxlIHx8IFwiXCI7XG4gICAgY29uc3QgY2hhcnRDb2xvciA9IGNvbmZpZy5jaGFydENvbG9yIHx8IFwiIzAwYThlOFwiO1xuICAgIGNvbnN0IGF0dHJzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEF0dHJzO1xuICAgIGNvbnN0IHBpbm5lZCA9IHRoaXMuc3RhdGUucGluVG9Db3JuZXI7XG4gICAgY29uc3QgY2hhcnRFeHBhbmRlZCA9IHBpbm5lZCB8fCB0aGlzLnN0YXRlLmNoYXJ0RXhwYW5kZWQ7XG5cbiAgICBpZiAoIWF0dHJzIHx8IGNoYXJ0RmllbGRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgICAvLyBDb2xsZWN0IG51bWVyaWMgZGF0YSBmb3IgY2hhcnRcbiAgICBjb25zdCBkYXRhUG9pbnRzOiB7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBudW1iZXIgfVtdID0gW107XG4gICAgZm9yIChjb25zdCBmaWVsZE5hbWUgb2YgY2hhcnRGaWVsZHMpIHtcbiAgICAgIGNvbnN0IHJhdyA9IGF0dHJzW2ZpZWxkTmFtZV07XG4gICAgICBjb25zdCBudW1WYWwgPSB0eXBlb2YgcmF3ID09PSBcIm51bWJlclwiID8gcmF3IDogcGFyc2VGbG9hdChyYXcpO1xuICAgICAgaWYgKCFpc05hTihudW1WYWwpKSB7XG4gICAgICAgIGRhdGFQb2ludHMucHVzaCh7XG4gICAgICAgICAgbGFiZWw6IHRoaXMuZ2V0RmllbGRBbGlhcyhmaWVsZE5hbWUpLFxuICAgICAgICAgIHZhbHVlOiBudW1WYWwsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkYXRhUG9pbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBjaGFydExhYmVsID0gY2hhcnRUaXRsZSB8fCBkYXRhUG9pbnRzWzBdPy5sYWJlbCB8fCBcIkdyYWZpa1wiO1xuICAgIGNvbnN0IGhvdmVySW5kZXggPSB0aGlzLnN0YXRlLmNoYXJ0SG92ZXJJbmRleDtcblxuICAgIGNvbnN0IHN2Z1dpZHRoID0gMzQwO1xuICAgIGNvbnN0IHN2Z0hlaWdodCA9IDE2ODtcbiAgICBjb25zdCBwYWRkaW5nID0geyB0b3A6IDEyLCByaWdodDogMTIsIGJvdHRvbTogOCwgbGVmdDogNDAgfTtcbiAgICBjb25zdCBjaGFydFcgPSBzdmdXaWR0aCAtIHBhZGRpbmcubGVmdCAtIHBhZGRpbmcucmlnaHQ7XG4gICAgY29uc3QgY2hhcnRIID0gc3ZnSGVpZ2h0IC0gcGFkZGluZy50b3AgLSBwYWRkaW5nLmJvdHRvbTtcblxuICAgIGNvbnN0IG1heFZhbCA9IE1hdGgubWF4KC4uLmRhdGFQb2ludHMubWFwKChkKSA9PiBkLnZhbHVlKSwgMCk7XG4gICAgY29uc3QgeU1heCA9IHRoaXMubmljZUNoYXJ0TWF4KG1heFZhbCk7XG4gICAgY29uc3Qgc2NhbGVZID0gKHY6IG51bWJlcikgPT4gY2hhcnRIIC0gKHYgLyB5TWF4KSAqIGNoYXJ0SDtcblxuICAgIGNvbnN0IGlzRGFyayA9IHRoaXMuc3RhdGUuaXNEYXJrVGhlbWU7XG4gICAgY29uc3QgYXhpc0NvbG9yID0gaXNEYXJrID8gXCJyZ2JhKDI1NSwyNTUsMjU1LDAuNTUpXCIgOiBcIiM5NGEzYjhcIjtcbiAgICBjb25zdCBncmlkQ29sb3IgPSBpc0RhcmsgPyBcInJnYmEoMjU1LDI1NSwyNTUsMC4xNClcIiA6IFwiI2RiZWFmZVwiO1xuICAgIGNvbnN0IGNoYXJ0Qm9keUJnID0gaXNEYXJrID8gXCJ0cmFuc3BhcmVudFwiIDogXCIjZmZmZmZmXCI7XG4gICAgY29uc3QgaGlnaGxpZ2h0RmlsbCA9IGlzRGFya1xuICAgICAgPyBcInJnYmEoMCwgMTY4LCAyMzIsIDAuMTIpXCJcbiAgICAgIDogXCJyZ2JhKDAsIDE2OCwgMjMyLCAwLjEpXCI7XG5cbiAgICBjb25zdCBncmlkTGluZXMgPSA0O1xuICAgIGNvbnN0IGdyaWRTdGVwID0geU1heCAvIGdyaWRMaW5lcztcblxuICAgIGNvbnN0IGJhckxheW91dCA9XG4gICAgICBjaGFydFR5cGUgPT09IFwiYmFyXCJcbiAgICAgICAgPyAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmFyR2FwID0gTWF0aC5tYXgoNiwgTWF0aC5taW4oMTAsIGNoYXJ0VyAvIGRhdGFQb2ludHMubGVuZ3RoIC8gNCkpO1xuICAgICAgICAgICAgY29uc3QgYmFyVyA9IE1hdGgubWF4KFxuICAgICAgICAgICAgICA4LFxuICAgICAgICAgICAgICAoY2hhcnRXIC0gKGRhdGFQb2ludHMubGVuZ3RoIC0gMSkgKiBiYXJHYXApIC8gZGF0YVBvaW50cy5sZW5ndGgsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGFQb2ludHMubWFwKChkLCBpKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHggPSBwYWRkaW5nLmxlZnQgKyBpICogKGJhclcgKyBiYXJHYXApO1xuICAgICAgICAgICAgICBjb25zdCBiYXJIID0gTWF0aC5tYXgoMiwgKGQudmFsdWUgLyB5TWF4KSAqIGNoYXJ0SCk7XG4gICAgICAgICAgICAgIGNvbnN0IHkgPSBwYWRkaW5nLnRvcCArIGNoYXJ0SCAtIGJhckg7XG4gICAgICAgICAgICAgIHJldHVybiB7IC4uLmQsIGksIHgsIHksIGJhclcsIGJhckgsIGNlbnRlclg6IHggKyBiYXJXIC8gMiB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSkoKVxuICAgICAgICA6IFtdO1xuXG4gICAgY29uc3QgbGluZVBvaW50cyA9XG4gICAgICBjaGFydFR5cGUgPT09IFwibGluZVwiXG4gICAgICAgID8gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0ZXBYID1cbiAgICAgICAgICAgICAgZGF0YVBvaW50cy5sZW5ndGggPiAxID8gY2hhcnRXIC8gKGRhdGFQb2ludHMubGVuZ3RoIC0gMSkgOiAwO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGFQb2ludHMubWFwKChkLCBpKSA9PiAoe1xuICAgICAgICAgICAgICAuLi5kLFxuICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICB4OlxuICAgICAgICAgICAgICAgIHBhZGRpbmcubGVmdCArXG4gICAgICAgICAgICAgICAgKGRhdGFQb2ludHMubGVuZ3RoID4gMSA/IGkgKiBzdGVwWCA6IGNoYXJ0VyAvIDIpLFxuICAgICAgICAgICAgICB5OiBwYWRkaW5nLnRvcCArIHNjYWxlWShkLnZhbHVlKSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9KSgpXG4gICAgICAgIDogW107XG5cbiAgICBjb25zdCBob3ZlclBvaW50ID1cbiAgICAgIGhvdmVySW5kZXggIT0gbnVsbFxuICAgICAgICA/IGNoYXJ0VHlwZSA9PT0gXCJiYXJcIlxuICAgICAgICAgID8gYmFyTGF5b3V0W2hvdmVySW5kZXhdXG4gICAgICAgICAgOiBsaW5lUG9pbnRzW2hvdmVySW5kZXhdXG4gICAgICAgIDogbnVsbDtcblxuICAgIGNvbnN0IHRvb2x0aXBMZWZ0UGN0ID0gaG92ZXJQb2ludFxuICAgICAgPyBNYXRoLm1heCg4LCBNYXRoLm1pbig4MiwgKGhvdmVyUG9pbnQueCAvIHN2Z1dpZHRoKSAqIDEwMCkpXG4gICAgICA6IDA7XG4gICAgY29uc3QgdG9vbHRpcFRvcFBjdCA9IGhvdmVyUG9pbnRcbiAgICAgID8gTWF0aC5tYXgoNiwgTWF0aC5taW4oNTgsIChob3ZlclBvaW50LnkgLyBzdmdIZWlnaHQpICogMTAwIC0gMTgpKVxuICAgICAgOiAwO1xuXG4gICAgY29uc3QgY2hhcnRTdmcgPSAoXG4gICAgICA8c3ZnXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgIHZpZXdCb3g9e2AwIDAgJHtzdmdXaWR0aH0gJHtzdmdIZWlnaHR9YH1cbiAgICAgICAgY2xhc3NOYW1lPVwiYWdyaTMtY2hhcnQtc3ZnXCJcbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogY2hhcnRCb2R5QmcgfX1cbiAgICAgID5cbiAgICAgICAgPHJlY3RcbiAgICAgICAgICB4PXtwYWRkaW5nLmxlZnR9XG4gICAgICAgICAgeT17cGFkZGluZy50b3B9XG4gICAgICAgICAgd2lkdGg9e2NoYXJ0V31cbiAgICAgICAgICBoZWlnaHQ9e2NoYXJ0SH1cbiAgICAgICAgICBmaWxsPXtpc0RhcmsgPyBcInJnYmEoMjU1LDI1NSwyNTUsMC4wMilcIiA6IFwiI2ZmZmZmZlwifVxuICAgICAgICAgIHJ4PXs2fVxuICAgICAgICAvPlxuXG4gICAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiBncmlkTGluZXMgKyAxIH0pLm1hcCgoXywgaSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbCA9IGdyaWRTdGVwICogaTtcbiAgICAgICAgICBjb25zdCB5ID0gcGFkZGluZy50b3AgKyBzY2FsZVkodmFsKTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGcga2V5PXtgZ3JpZC0ke2l9YH0+XG4gICAgICAgICAgICAgIDxsaW5lXG4gICAgICAgICAgICAgICAgeDE9e3BhZGRpbmcubGVmdH1cbiAgICAgICAgICAgICAgICB5MT17eX1cbiAgICAgICAgICAgICAgICB4Mj17c3ZnV2lkdGggLSBwYWRkaW5nLnJpZ2h0fVxuICAgICAgICAgICAgICAgIHkyPXt5fVxuICAgICAgICAgICAgICAgIHN0cm9rZT17Z3JpZENvbG9yfVxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsxfVxuICAgICAgICAgICAgICAgIHN0cm9rZURhc2hhcnJheT1cIjMgNVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDx0ZXh0XG4gICAgICAgICAgICAgICAgeD17cGFkZGluZy5sZWZ0IC0gOH1cbiAgICAgICAgICAgICAgICB5PXt5ICsgNH1cbiAgICAgICAgICAgICAgICBmaWxsPXtheGlzQ29sb3J9XG4gICAgICAgICAgICAgICAgZm9udFNpemU9ezEwfVxuICAgICAgICAgICAgICAgIHRleHRBbmNob3I9XCJlbmRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RoaXMuZm9ybWF0Q2hhcnRUaWNrKHZhbCl9XG4gICAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cblxuICAgICAgICB7Y2hhcnRUeXBlID09PSBcImJhclwiICYmXG4gICAgICAgICAgYmFyTGF5b3V0Lm1hcCgoYmFyKSA9PiAoXG4gICAgICAgICAgICA8ZyBrZXk9e2BiYXItJHtiYXIuaX1gfT5cbiAgICAgICAgICAgICAge2hvdmVySW5kZXggPT09IGJhci5pICYmIChcbiAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAgeD17YmFyLnggLSAzfVxuICAgICAgICAgICAgICAgICAgeT17cGFkZGluZy50b3B9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17YmFyLmJhclcgKyA2fVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtjaGFydEh9XG4gICAgICAgICAgICAgICAgICBmaWxsPXtoaWdobGlnaHRGaWxsfVxuICAgICAgICAgICAgICAgICAgcng9ezV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPXt0aGlzLmJ1aWxkUm91bmRlZEJhclBhdGgoYmFyLngsIGJhci55LCBiYXIuYmFyVywgYmFyLmJhckgsIDUpfVxuICAgICAgICAgICAgICAgIGZpbGw9e2NoYXJ0Q29sb3J9XG4gICAgICAgICAgICAgICAgb3BhY2l0eT17aG92ZXJJbmRleCA9PSBudWxsIHx8IGhvdmVySW5kZXggPT09IGJhci5pID8gMSA6IDAuNDV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWdyaTMtY2hhcnQtYmFyXCJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHRoaXMuc2V0Q2hhcnRIb3ZlcihiYXIuaSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgeD17YmFyLnh9XG4gICAgICAgICAgICAgICAgeT17cGFkZGluZy50b3B9XG4gICAgICAgICAgICAgICAgd2lkdGg9e2Jhci5iYXJXfVxuICAgICAgICAgICAgICAgIGhlaWdodD17Y2hhcnRIfVxuICAgICAgICAgICAgICAgIGZpbGw9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB0aGlzLnNldENoYXJ0SG92ZXIoYmFyLmkpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICkpfVxuXG4gICAgICAgIHtjaGFydFR5cGUgPT09IFwibGluZVwiICYmIChcbiAgICAgICAgICA8Zz5cbiAgICAgICAgICAgIHtob3ZlckluZGV4ICE9IG51bGwgJiYgbGluZVBvaW50c1tob3ZlckluZGV4XSAmJiAoXG4gICAgICAgICAgICAgIDxsaW5lXG4gICAgICAgICAgICAgICAgeDE9e2xpbmVQb2ludHNbaG92ZXJJbmRleF0ueH1cbiAgICAgICAgICAgICAgICB5MT17cGFkZGluZy50b3B9XG4gICAgICAgICAgICAgICAgeDI9e2xpbmVQb2ludHNbaG92ZXJJbmRleF0ueH1cbiAgICAgICAgICAgICAgICB5Mj17cGFkZGluZy50b3AgKyBjaGFydEh9XG4gICAgICAgICAgICAgICAgc3Ryb2tlPXtjaGFydENvbG9yfVxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsxLjV9XG4gICAgICAgICAgICAgICAgb3BhY2l0eT17MC4zNX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPXt0aGlzLmJ1aWxkU21vb3RoTGluZVBhdGgobGluZVBvaW50cyl9XG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgc3Ryb2tlPXtjaGFydENvbG9yfVxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mi41fVxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7bGluZVBvaW50cy5tYXAoKHApID0+IChcbiAgICAgICAgICAgICAgPGcga2V5PXtgcHQtJHtwLml9YH0+XG4gICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgY3g9e3AueH1cbiAgICAgICAgICAgICAgICAgIGN5PXtwLnl9XG4gICAgICAgICAgICAgICAgICByPXtob3ZlckluZGV4ID09PSBwLmkgPyA1LjUgOiA0fVxuICAgICAgICAgICAgICAgICAgZmlsbD17aXNEYXJrID8gXCIjMGIxYTMwXCIgOiBcIiNmZmZmZmZcIn1cbiAgICAgICAgICAgICAgICAgIHN0cm9rZT17Y2hhcnRDb2xvcn1cbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXtob3ZlckluZGV4ID09PSBwLmkgPyAyLjUgOiAyfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWdyaTMtY2hhcnQtcG9pbnRcIlxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB0aGlzLnNldENoYXJ0SG92ZXIocC5pKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgIGN4PXtwLnh9XG4gICAgICAgICAgICAgICAgICBjeT17cC55fVxuICAgICAgICAgICAgICAgICAgcj17MTJ9XG4gICAgICAgICAgICAgICAgICBmaWxsPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB0aGlzLnNldENoYXJ0SG92ZXIocC5pKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2c+XG4gICAgICAgICl9XG4gICAgICA8L3N2Zz5cbiAgICApO1xuXG4gICAgY29uc3QgY2hhcnRCb2R5ID0gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJhZ3JpMy1jaGFydC1ib2R5XCJcbiAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmNsZWFyQ2hhcnRIb3Zlcn1cbiAgICAgID5cbiAgICAgICAge2hvdmVyUG9pbnQgJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFncmkzLWNoYXJ0LXRvb2x0aXBcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgbGVmdDogYCR7dG9vbHRpcExlZnRQY3R9JWAsXG4gICAgICAgICAgICAgIHRvcDogYCR7dG9vbHRpcFRvcFBjdH0lYCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JpMy1jaGFydC10b29sdGlwLWxhYmVsXCI+e2hvdmVyUG9pbnQubGFiZWx9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmkzLWNoYXJ0LXRvb2x0aXAtdmFsdWVcIj5cbiAgICAgICAgICAgICAge3RoaXMuZm9ybWF0Q2hhcnRUb29sdGlwVmFsdWUoaG92ZXJQb2ludC52YWx1ZSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge2NoYXJ0U3ZnfVxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIGlmICghY2hhcnRFeHBhbmRlZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImFncmkzLWNoYXJ0LXRyaWdnZXJcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ2hhcnRFeHBhbmRlZH1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFncmkzLWNoYXJ0LXRyaWdnZXItaWNvblwiPnt0aGlzLnJlbmRlckNoYXJ0SWNvbihjaGFydFR5cGUpfTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZ3JpMy1jaGFydC10cmlnZ2VyLWxhYmVsXCI+e2NoYXJ0TGFiZWx9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFncmkzLWNoYXJ0LXRyaWdnZXItY2hldnJvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAg4pa+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyaTMtY2hhcnQtcGFuZWxcIj5cbiAgICAgICAgeyFwaW5uZWQgPyAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhZ3JpMy1jaGFydC1wYW5lbC1oZWFkZXJcIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVDaGFydEV4cGFuZGVkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFncmkzLWNoYXJ0LXRyaWdnZXItaWNvblwiPnt0aGlzLnJlbmRlckNoYXJ0SWNvbihjaGFydFR5cGUpfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFncmkzLWNoYXJ0LXRyaWdnZXItbGFiZWxcIj57Y2hhcnRMYWJlbH08L3NwYW4+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZ3JpMy1jaGFydC10cmlnZ2VyLWNoZXZyb24gaXMtb3BlblwiXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIOKWtFxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyaTMtY2hhcnQtcGFuZWwtaGVhZGVyIGFncmkzLWNoYXJ0LXBhbmVsLWhlYWRlci0tc3RhdGljXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZ3JpMy1jaGFydC10cmlnZ2VyLWljb25cIj57dGhpcy5yZW5kZXJDaGFydEljb24oY2hhcnRUeXBlKX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZ3JpMy1jaGFydC10cmlnZ2VyLWxhYmVsXCI+e2NoYXJ0TGFiZWx9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmkzLWNoYXJ0LWNvbnRhaW5lclwiPntjaGFydEJvZHl9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0gUG9wdXAgVUkgLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gIHByaXZhdGUgcmVuZGVyUG9wdXAgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgc2VsZWN0ZWRBdHRycyxcbiAgICAgIHNlbGVjdGVkT0lELFxuICAgICAgbG9hZGluZyxcbiAgICAgIGVycm9yLFxuICAgICAgc2hvd1BvcHVwLFxuICAgICAgcG9wdXBNaW5pbWl6ZWQsXG4gICAgICBwb3B1cFBvc2l0aW9uLFxuICAgICAgbG9hZGluZ0F0dGFjaG1lbnRzLFxuICAgICAgYXR0YWNobWVudHMsXG4gICAgICBhdHRhY2htZW50c0Vycm9yLFxuICAgICAgcGluVG9Db3JuZXIsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoIXNob3dQb3B1cCkgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCBmaWVsZHMgPSAodGhpcy5wcm9wcy5jb25maWc/LmZpZWxkc1RvU2hvdyB8fCBbXSlcbiAgICAgIC5tYXAoKG4pID0+IHRoaXMucmVzb2x2ZUZpZWxkTmFtZShuKSB8fCBuKVxuICAgICAgLmZpbHRlcihCb29sZWFuKTtcblxuICAgIGNvbnN0IHRpdGxlID0gdGhpcy50cihcInRpdGxlLmF0dHJpYnV0ZXNcIik7XG5cbiAgICBjb25zdCB2aWV3ID0gdGhpcy5zdGF0ZS5qaW11TWFwVmlldz8udmlldztcbiAgICBjb25zdCBsYXlvdXRQb3MgPSBwb3B1cFBvc2l0aW9uO1xuXG4gICAgaWYgKHBvcHVwTWluaW1pemVkKSB7XG4gICAgICBjb25zdCB2aWV3Rm9yQ2hpcCA9IHZpZXcgfHwgdGhpcy5zdGF0ZS5qaW11TWFwVmlldz8udmlldyB8fCBudWxsO1xuICAgICAgY29uc3QgbWFwUmVjdCA9IHZpZXdGb3JDaGlwID8gdGhpcy5nZXRNYXBBcmVhUmVjdCh2aWV3Rm9yQ2hpcCkgOiBudWxsO1xuICAgICAgY29uc3QgY2hpcFN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0gbWFwUmVjdFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgICByaWdodDogTWF0aC5tYXgoXG4gICAgICAgICAgICAgIDgsXG4gICAgICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmlubmVyV2lkdGggOiBtYXBSZWN0LnJpZ2h0KSAtXG4gICAgICAgICAgICAgICAgbWFwUmVjdC5yaWdodCArXG4gICAgICAgICAgICAgICAgdGhpcy5EQVNIQk9BUkRfUE9QVVBfVkVSVElDQUxfSU5TRVQsXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgdG9wOiBtYXBSZWN0LnRvcCArIHRoaXMuREFTSEJPQVJEX1BPUFVQX1ZFUlRJQ0FMX0lOU0VULFxuICAgICAgICAgICAgbGVmdDogXCJhdXRvXCIsXG4gICAgICAgICAgICBib3R0b206IFwiYXV0b1wiLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBcIm5vbmVcIixcbiAgICAgICAgICB9XG4gICAgICAgIDoge1xuICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICAgIHJpZ2h0OiB0aGlzLkRBU0hCT0FSRF9QT1BVUF9WRVJUSUNBTF9JTlNFVCxcbiAgICAgICAgICAgIHRvcDogdGhpcy5EQVNIQk9BUkRfUE9QVVBfVkVSVElDQUxfSU5TRVQsXG4gICAgICAgICAgICBsZWZ0OiBcImF1dG9cIixcbiAgICAgICAgICAgIGJvdHRvbTogXCJhdXRvXCIsXG4gICAgICAgICAgfTtcblxuICAgICAgY29uc3Qgc3RvcE1hcEhpdCA9IChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgYWdyaTMtcG9wdXAtbWluaW1pemVkICR7XG4gICAgICAgICAgICBwaW5Ub0Nvcm5lciA/IFwiaXMtcGlubmVkXCIgOiBcImlzLWZsb2F0aW5nXCJcbiAgICAgICAgICB9YH1cbiAgICAgICAgICBzdHlsZT17Y2hpcFN0eWxlfVxuICAgICAgICAgIHJlZj17dGhpcy5fcG9wdXBSZWZ9XG4gICAgICAgICAgb25Nb3VzZURvd249e3N0b3BNYXBIaXR9XG4gICAgICAgICAgb25Qb2ludGVyRG93bj17c3RvcE1hcEhpdH1cbiAgICAgICAgICBvbkNsaWNrPXtzdG9wTWFwSGl0fVxuICAgICAgICA+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhZ3JpMy1wb3B1cC1taW5pbWl6ZWQtYnRuXCJcbiAgICAgICAgICAgIG9uTW91c2VEb3duPXtzdG9wTWFwSGl0fVxuICAgICAgICAgICAgb25Qb2ludGVyRG93bj17c3RvcE1hcEhpdH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIHN0b3BNYXBIaXQoZSk7XG4gICAgICAgICAgICAgIHRoaXMuZXhwYW5kUG9wdXAoKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0aXRsZT17dGhpcy50cihcImFjdGlvbi5leHBhbmRcIil9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXt0aGlzLnRyKFwiYWN0aW9uLmV4cGFuZFwiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZ3JpMy1wb3B1cC1taW5pbWl6ZWQtYWNjZW50XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFncmkzLXBvcHVwLW1pbmltaXplZC10aXRsZVwiPnt0aXRsZX08L3NwYW4+XG4gICAgICAgICAgICA8Q2hldnJvblVwXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFncmkzLXBvcHVwLW1pbmltaXplZC1pY29uXCJcbiAgICAgICAgICAgICAgc2l6ZT17MTZ9XG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPXsyLjR9XG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgeyB3aWR0aDogcG9wdXBXaWR0aCwgaGVpZ2h0OiBwb3B1cEhlaWdodCB9ID0gdGhpcy5nZXRQb3B1cERpbWVuc2lvbnMoXG4gICAgICB2aWV3IHx8IG51bGwsXG4gICAgICBwaW5Ub0Nvcm5lcixcbiAgICAgIGxheW91dFBvcyxcbiAgICApO1xuXG4gICAgY29uc3QgZGltZW5zaW9uU3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICB3aWR0aDogYCR7cG9wdXBXaWR0aH1weGAsXG4gICAgICBtaW5XaWR0aDogYCR7cG9wdXBXaWR0aH1weGAsXG4gICAgICBtYXhXaWR0aDogYCR7cG9wdXBXaWR0aH1weGAsXG4gICAgICBoZWlnaHQ6IGAke3BvcHVwSGVpZ2h0fXB4YCxcbiAgICAgIG1heEhlaWdodDogYCR7cG9wdXBIZWlnaHR9cHhgLFxuICAgIH07XG5cbiAgICBjb25zdCBzdHlsZVBpbm5lZDogUmVhY3QuQ1NTUHJvcGVydGllcyA9IGxheW91dFBvc1xuICAgICAgPyB7XG4gICAgICAgICAgbGVmdDogbGF5b3V0UG9zLngsXG4gICAgICAgICAgdG9wOiBsYXlvdXRQb3MueSxcbiAgICAgICAgICB0cmFuc2Zvcm06IFwibm9uZVwiLFxuICAgICAgICAgIC4uLmRpbWVuc2lvblN0eWxlLFxuICAgICAgICB9XG4gICAgICA6IHsgLi4uZGltZW5zaW9uU3R5bGUgfTtcblxuICAgIGNvbnN0IHN0eWxlRnJlZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgIGxlZnQ6IGxheW91dFBvcz8ueCB8fCBcIjUwJVwiLFxuICAgICAgdG9wOiBsYXlvdXRQb3M/LnkgfHwgXCI1MCVcIixcbiAgICAgIHRyYW5zZm9ybTogIWxheW91dFBvcyA/IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCIgOiBcIm5vbmVcIixcbiAgICAgIC4uLmRpbWVuc2lvblN0eWxlLFxuICAgIH07XG5cbiAgICBjb25zdCBwb3B1cFN0eWxlID0gcGluVG9Db3JuZXIgPyBzdHlsZVBpbm5lZCA6IHN0eWxlRnJlZTtcblxuICAgIGNvbnN0IHNob3dBdHRhY2htZW50cyA9XG4gICAgICB0aGlzLnByb3BzLmNvbmZpZz8uc2V0dGluZ3M/LnNob3dBdHRhY2htZW50cyAhPT0gZmFsc2U7XG4gICAgY29uc3QgaGFzQXR0YWNobWVudHMgPSAoYXR0YWNobWVudHM/Lmxlbmd0aCB8fCAwKSA+IDA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BhZ3JpMy1wb3B1cC1kaXJlY3QgJHtwaW5Ub0Nvcm5lciA/IFwiaXMtcGlubmVkXCIgOiBcImlzLWZsb2F0aW5nXCJ9YH1cbiAgICAgICAgc3R5bGU9e3BvcHVwU3R5bGV9XG4gICAgICAgIHJlZj17dGhpcy5fcG9wdXBSZWZ9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyaTMtcG9wdXAtaGVhZGVyXCIgb25Nb3VzZURvd249e3RoaXMub25Qb3B1cEhlYWRlck1vdXNlRG93bn0+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYWdyaTMtcG9wdXAtcGluJHtwaW5Ub0Nvcm5lciA/IFwiIGFjdGl2ZVwiIDogXCJcIn1gfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVQaW5Ub0Nvcm5lcn1cbiAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgcGluVG9Db3JuZXIgPyB0aGlzLnRyKFwiYWN0aW9uLnVucGluXCIpIDogdGhpcy50cihcImFjdGlvbi5waW5cIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFyaWEtcHJlc3NlZD17cGluVG9Db3JuZXJ9XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cGluVG9Db3JuZXIgPyAoXG4gICAgICAgICAgICAgIDxQaW4gc2l6ZT17MTV9IHN0cm9rZVdpZHRoPXsyLjJ9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8TWFwUGluIHNpemU9ezE1fSBzdHJva2VXaWR0aD17Mi4yfSBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJhZ3JpMy1wb3B1cC10aXRsZVwiPnt0aXRsZX08L2gyPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhZ3JpMy1wb3B1cC1jbG9zZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm1pbmltaXplUG9wdXB9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXt0aGlzLnRyKFwiYWN0aW9uLm1pbmltaXplXCIpfVxuICAgICAgICAgICAgdGl0bGU9e3RoaXMudHIoXCJhY3Rpb24ubWluaW1pemVcIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFggc2l6ZT17MTZ9IHN0cm9rZVdpZHRoPXsyLjR9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyaTMtcG9wdXAtY29udGVudFwiPlxuICAgICAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmkzLWVycm9yLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8QWxlcnRUcmlhbmdsZSBjbGFzc05hbWU9XCJhZ3JpMy1lcnJvci1pY29uXCIgc2l6ZT17MjB9IHN0cm9rZVdpZHRoPXsyLjJ9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyaTMtZXJyb3ItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICB7dGhpcy50cihcInN0YXR1cy53YXJuaW5nXCIpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JpMy1lcnJvci1tZXNzYWdlXCI+e2Vycm9yfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyaTMtbG9hZGluZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPEFncmlDaGFydExvYWRlciBsYWJlbD17dGhpcy50cihcInN0YXR1cy5sb2FkaW5nRmVhdHVyZVwiKX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7IWxvYWRpbmcgJiYgc2VsZWN0ZWRBdHRycyAmJiBmaWVsZHMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmkzLWZpZWxkLWxpc3RcIj5cbiAgICAgICAgICAgICAge2ZpZWxkc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAobmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdGVkQXR0cnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0gc2VsZWN0ZWRBdHRyc1tuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PSBudWxsIHx8IHZhbCA9PT0gXCJcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiAmJiAhdmFsLnRyaW0oKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5tYXAoKG5hbWUpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyaTMtZmllbGQtcm93XCIga2V5PXtuYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWdyaTMtZmllbGQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5nZXRGaWVsZEFsaWFzKG5hbWUpfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFncmkzLWZpZWxkLXZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3RoaXMuZm9ybWF0VmFsdWUobmFtZSwgc2VsZWN0ZWRBdHRyc1tuYW1lXSl9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICAgIHtmaWVsZHMuZmlsdGVyKFxuICAgICAgICAgICAgICAgIChuYW1lKSA9PlxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRBdHRycy5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJlxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRBdHRyc1tuYW1lXSAhPSBudWxsICYmXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZEF0dHJzW25hbWVdICE9PSBcIlwiLFxuICAgICAgICAgICAgICApLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JpMy1zdGF0dXMtaW5kaWNhdG9yIGFncmkzLXN0YXR1cy13YWl0aW5nXCI+XG4gICAgICAgICAgICAgICAgICA8SW5ib3ggY2xhc3NOYW1lPVwiYWdyaTMtc3RhdHVzLWljb25cIiBzaXplPXsxNn0gc3Ryb2tlV2lkdGg9ezIuMn0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnRyKFwic3RhdHVzLm5vQ29uZmlndXJlZERhdGFcIil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgeyFsb2FkaW5nICYmIHNlbGVjdGVkQXR0cnMgJiYgZmllbGRzLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmkzLXN0YXR1cy1pbmRpY2F0b3IgYWdyaTMtc3RhdHVzLXdhaXRpbmdcIj5cbiAgICAgICAgICAgICAgPFNldHRpbmdzMiBjbGFzc05hbWU9XCJhZ3JpMy1zdGF0dXMtaWNvblwiIHNpemU9ezE2fSBzdHJva2VXaWR0aD17Mi4yfSBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICB7dGhpcy50cihcInN0YXR1cy5ub0ZpZWxkc1wiKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7LyogTGF0ZXN0LWRheSB2ZWdldGF0aW9uIGluZGljZXMgKi99XG4gICAgICAgICAgeyFsb2FkaW5nICYmIHNlbGVjdGVkQXR0cnMgJiYgdGhpcy5yZW5kZXJMYXRlc3RJbmRpY2VzKCl9XG5cbiAgICAgICAgICB7LyogQ2hhcnQgKi99XG4gICAgICAgICAgeyFsb2FkaW5nICYmIHNlbGVjdGVkQXR0cnMgJiYgdGhpcy5yZW5kZXJDaGFydCgpfVxuXG4gICAgICAgICAge3Nob3dBdHRhY2htZW50cyAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmkzLWF0dGFjaG1lbnRzXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyaTMtYXR0YWNobWVudHMtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JpMy1hdHRhY2htZW50cy10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgPEZvbGRlck9wZW4gc2l6ZT17MTV9IHN0cm9rZVdpZHRoPXsyLjJ9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICB7dGhpcy50cihcImF0dGFjaG1lbnRzLnRpdGxlXCIpfXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgIHtoYXNBdHRhY2htZW50cyA/IGAoJHthdHRhY2htZW50cy5sZW5ndGh9KWAgOiBcIlwifVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICB7bG9hZGluZ0F0dGFjaG1lbnRzICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZ3JpMy1sb2FkaW5nLWNvbnRhaW5lciBhZ3JpMy1sb2FkaW5nLWNvbnRhaW5lci0tY29tcGFjdFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IDggfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8QWdyaUNoYXJ0TG9hZGVyIGxhYmVsPXt0aGlzLnRyKFwic3RhdHVzLmxvYWRpbmdBdHRhY2htZW50c1wiKX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICB7IWxvYWRpbmdBdHRhY2htZW50cyAmJiBhdHRhY2htZW50c0Vycm9yICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZ3JpMy1zdGF0dXMtaW5kaWNhdG9yIGFncmkzLXN0YXR1cy13YWl0aW5nXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogNiB9fVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2F0dGFjaG1lbnRzRXJyb3J9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEFsZXJ0VHJpYW5nbGUgY2xhc3NOYW1lPVwiYWdyaTMtc3RhdHVzLWljb25cIiBzaXplPXsxNn0gc3Ryb2tlV2lkdGg9ezIuMn0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnRyKFwic3RhdHVzLmF0dGFjaG1lbnRzRXJyb3JcIikgfHwgYXR0YWNobWVudHNFcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICB7IWxvYWRpbmdBdHRhY2htZW50cyAmJiAhYXR0YWNobWVudHNFcnJvciAmJiAhaGFzQXR0YWNobWVudHMgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFncmkzLXN0YXR1cy1pbmRpY2F0b3IgYWdyaTMtc3RhdHVzLXdhaXRpbmdcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiA2IH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEZvbGRlck9wZW4gY2xhc3NOYW1lPVwiYWdyaTMtc3RhdHVzLWljb25cIiBzaXplPXsxNn0gc3Ryb2tlV2lkdGg9ezIuMn0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnRyKFwic3RhdHVzLm5vQXR0YWNobWVudHNcIil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgeyFsb2FkaW5nQXR0YWNobWVudHMgJiYgaGFzQXR0YWNobWVudHMgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyaTMtYXR0YWNobWVudHMtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JpMy1hdHRhY2htZW50cy1pbWFnZXMgYWdyaTMtZ3JpZFwiPlxuICAgICAgICAgICAgICAgICAgICB7YXR0YWNobWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChhKSA9PiBhLnByZXZpZXdPYmplY3RVcmwpXG4gICAgICAgICAgICAgICAgICAgICAgLm1hcCgoYSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgaW1nLSR7YS5pZH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXthLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFncmkzLWF0dGFjaG1lbnQtdGh1bWIgYWdyaTMtY2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXthLm5hbWUgfHwgdGhpcy50cihcImF0dGFjaG1lbnQuaW1hZ2VGYWxsYmFja1wiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWQ9e2EubmFtZSB8fCB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2EucHJldmlld09iamVjdFVybCF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXthLm5hbWUgfHwgdGhpcy50cihcImF0dGFjaG1lbnQuaW1hZ2VGYWxsYmFja1wiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFncmkzLXRodW1iLWNhcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXthLm5hbWUgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthLm5hbWUgfHwgdGhpcy50cihcImF0dGFjaG1lbnQuaW1hZ2VGYWxsYmFja1wiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JpMy1hdHRhY2htZW50cy1maWxlc1wiPlxuICAgICAgICAgICAgICAgICAgICB7YXR0YWNobWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChhKSA9PiAhYS5wcmV2aWV3T2JqZWN0VXJsKVxuICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGEpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWdyaTMtYXR0YWNobWVudC1maWxlIGFncmkzLWNhcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BmaWxlLSR7YS5pZH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFncmkzLWF0dGFjaG1lbnQtZmlsZS10b3BcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZ3JpMy1hdHRhY2htZW50LWZpbGUtbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17YS5uYW1lIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcGVyY2xpcCBzaXplPXsxNH0gc3Ryb2tlV2lkdGg9ezIuMn0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthLm5hbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cihcImF0dGFjaG1lbnQuZmlsZUZhbGxiYWNrXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogYS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFncmkzLWF0dGFjaG1lbnQtZG93bmxvYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YS51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZD17YS5uYW1lIHx8IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RG93bmxvYWQgc2l6ZT17MTN9IHN0cm9rZVdpZHRoPXsyLjJ9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy50cihcImF0dGFjaG1lbnQuZG93bmxvYWRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZ3JpMy1hdHRhY2htZW50LWZpbGUtbWV0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoYS5jb250ZW50VHlwZSB8fCBcIlwiKS5zcGxpdChcIi9cIikucG9wKCkgfHwgXCJcIn17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Euc2l6ZSA/IGDigKIgJHt0aGlzLmJ5dGVzVG9TaXplKGEuc2l6ZSl9YCA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7IWxvYWRpbmcgJiYgIXNlbGVjdGVkQXR0cnMgJiYgIWVycm9yICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWdyaTMtc3RhdHVzLWluZGljYXRvciBhZ3JpMy1zdGF0dXMtd2FpdGluZ1wiPlxuICAgICAgICAgICAgICA8TW91c2VQb2ludGVyQ2xpY2sgY2xhc3NOYW1lPVwiYWdyaTMtc3RhdHVzLWljb25cIiBzaXplPXsxNn0gc3Ryb2tlV2lkdGg9ezIuMn0gYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAge3RoaXMudHIoXCJzdGF0dXMuY2xpY2tQb2x5Z29uXCIpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHVzZU1hcFdpZGdldElkcywgdXNlRGF0YVNvdXJjZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdGhlbWVDbGFzcyA9IHRoaXMuc3RhdGUuaXNEYXJrVGhlbWVcbiAgICAgID8gXCJhZ3JpMy10aGVtZS1kYXJrXCJcbiAgICAgIDogXCJhZ3JpMy10aGVtZS1saWdodFwiO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYWdyaTMtYXR0ci1jYXJkICR7dGhlbWVDbGFzc31gfT5cbiAgICAgICAge3RoaXMucmVuZGVyUG9wdXAoKX1cblxuICAgICAgICA8QWdyaUhpZGRlbkNvbm5lY3RvcnNcbiAgICAgICAgICB1c2VEYXRhU291cmNlcz17dXNlRGF0YVNvdXJjZXN9XG4gICAgICAgICAgdXNlTWFwV2lkZ2V0SWRzPXt1c2VNYXBXaWRnZXRJZHN9XG4gICAgICAgICAgb25EYXRhU291cmNlQ3JlYXRlZD17dGhpcy5vbkRhdGFTb3VyY2VDcmVhdGVkfVxuICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17dGhpcy5vbkFjdGl2ZVZpZXdDaGFuZ2V9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgYm90dG9tOiBcIjhweFwiLFxuICAgICAgICAgICAgcmlnaHQ6IFwiOHB4XCIsXG4gICAgICAgICAgICB3aWR0aDogXCI4cHhcIixcbiAgICAgICAgICAgIGhlaWdodDogXCI4cHhcIixcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRoaXMuc3RhdGUuZmVhdHVyZUxheWVycz8ubGVuZ3RoXG4gICAgICAgICAgICAgID8gXCIjMTBiOTgxXCJcbiAgICAgICAgICAgICAgOiBcIiM5NGEzYjhcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNixcbiAgICAgICAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuM3MgZWFzZVwiLFxuICAgICAgICAgICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmZlYXR1cmVMYXllcnM/Lmxlbmd0aFxuICAgICAgICAgICAgICA/IHRoaXMudHIoXCJzdGF0dXMucmVhZHlcIilcbiAgICAgICAgICAgICAgOiB0aGlzLnRyKFwic3RhdHVzLmxvYWRpbmdcIilcbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmludGVyZmFjZSBJSGFuZGxlTGlrZSB7XG4gIHJlbW92ZTogKCkgPT4gdm9pZDtcbn1cblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7XG4gIERhdGFTb3VyY2VDb21wb25lbnQsXG4gIGpzeCxcbiAgdHlwZSBEYXRhU291cmNlLFxuICB0eXBlIFF1ZXJpYWJsZURhdGFTb3VyY2UsXG59IGZyb20gXCJqaW11LWNvcmVcIjtcbmltcG9ydCB7IEppbXVNYXBWaWV3Q29tcG9uZW50LCB0eXBlIEppbXVNYXBWaWV3IH0gZnJvbSBcImppbXUtYXJjZ2lzXCI7XG5pbXBvcnQgeyB0b1BsYWluQXJyYXkgfSBmcm9tIFwiLi9hZ3JpLWRhdGEtc291cmNlLWVuZ2luZVwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB1c2VEYXRhU291cmNlcz86IGFueTtcbiAgdXNlTWFwV2lkZ2V0SWRzPzogYW55O1xuICBvbkRhdGFTb3VyY2VDcmVhdGVkPzogKGRzOiBRdWVyaWFibGVEYXRhU291cmNlKSA9PiB2b2lkO1xuICBvbkFjdGl2ZVZpZXdDaGFuZ2U/OiAoamltdU1hcFZpZXc6IEppbXVNYXBWaWV3KSA9PiB2b2lkO1xufVxuXG4vKiogSGlkZGVuIERhdGFTb3VyY2UgKyBNYXAgY29ubmVjdG9ycyAoc2FtZSBwYXR0ZXJuIGFzIEFncmlMb2NhbGl6YXRpb24pLlxuICogT25seSBjb25uZWN0IHRoZSBmaXJzdCB1c2VEYXRhU291cmNlIOKAlCBtb3VudGluZyBhbGwgfjMwKyByZWdpb24gRmVhdHVyZVNlcnZlcnNcbiAqIG9uIGV2ZXJ5IGNoaWxkIHJlbW91bnQgZmxvb2RzIE5ldHdvcmsgd2l0aCBGZWF0dXJlU2VydmVyP2Y9anNvbiBsb2FkcyBhbmRcbiAqIGRvZXMgbm90IGhlbHAgbWFwIGhpdC10ZXN0aW5nIChsaXZlIE1hcFZpZXcgbGF5ZXJzIGFyZSB1c2VkIGluc3RlYWQpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEFncmlIaWRkZW5Db25uZWN0b3JzKHByb3BzOiBQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3Qgc2VsZWN0ZWRVc2VEYXRhU291cmNlcyA9IHRvUGxhaW5BcnJheTxhbnk+KHByb3BzLnVzZURhdGFTb3VyY2VzKTtcbiAgY29uc3QgbWFwV2lkZ2V0SWQgPSB0b1BsYWluQXJyYXk8c3RyaW5nPihwcm9wcy51c2VNYXBXaWRnZXRJZHMpWzBdO1xuICBjb25zdCBwcmltYXJ5RHMgPSBzZWxlY3RlZFVzZURhdGFTb3VyY2VzWzBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fSBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgIHtwcmltYXJ5RHMgPyAoXG4gICAgICAgIDxEYXRhU291cmNlQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtwcmltYXJ5RHM/LmRhdGFTb3VyY2VJZH1cbiAgICAgICAgICB1c2VEYXRhU291cmNlPXtwcmltYXJ5RHN9XG4gICAgICAgICAgb25EYXRhU291cmNlQ3JlYXRlZD17XG4gICAgICAgICAgICBwcm9wcy5vbkRhdGFTb3VyY2VDcmVhdGVkXG4gICAgICAgICAgICAgID8gKGRzOiBEYXRhU291cmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBwcm9wcy5vbkRhdGFTb3VyY2VDcmVhdGVkPy4oZHMgYXMgUXVlcmlhYmxlRGF0YVNvdXJjZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICkgOiBudWxsfVxuICAgICAge21hcFdpZGdldElkICYmIChcbiAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XG4gICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e21hcFdpZGdldElkfVxuICAgICAgICAgIG9uQWN0aXZlVmlld0NoYW5nZT17cHJvcHMub25BY3RpdmVWaWV3Q2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCB7IHR5cGUgUXVlcmlhYmxlRGF0YVNvdXJjZSB9IGZyb20gXCJqaW11LWNvcmVcIjtcbmltcG9ydCB7XG4gIGJ1aWxkQWdyaVdoZXJlLFxuICBjYW5vbmljYWxpemVSZWdpb25GaWx0ZXJWYWx1ZSxcbiAgZGlzYWJsZUxheWVyUGJmLFxuICBmbExvZyxcbiAgaGF5c3RhY2tNYXRjaGVzUmVnaW9uLFxuICBoYXlzdGFja01hdGNoZXNZZWFyLFxuICBnZXRRdWVyeWFibGVMYXllcixcbiAgcGlja1llYXJSZWdpb25MYXllclBvb2wsXG4gIHByZXBhcmVWYWx1ZUluZGV4LFxuICBxdWlja0xheWVyRmVhdHVyZUNvdW50LFxuICByZXNvbHZlRmVhdHVyZUxheWVyRm9yRmlsdGVycyxcbiAgc2FmZUxvYWRNYXBMYXllcixcbiAgc2NvcmVIYXlzdGFja0ZvckZpbHRlcnMsXG4gIHR5cGUgQWdyaUZpbHRlcnMsXG4gIHR5cGUgUmVzb2x2ZWRGZWF0dXJlTGF5ZXIsXG59IGZyb20gXCIuL2ZlYXR1cmUtbGF5ZXItZGF0YVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9QbGFpbkFycmF5PFQgPSBhbnk+KHZhbDogYW55KTogVFtdIHtcbiAgaWYgKCF2YWwpIHJldHVybiBbXTtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkgcmV0dXJuIHZhbCBhcyBUW107XG4gIGlmICh0eXBlb2YgdmFsLmFzTXV0YWJsZSA9PT0gXCJmdW5jdGlvblwiKVxuICAgIHJldHVybiB2YWwuYXNNdXRhYmxlKHsgZGVlcDogdHJ1ZSB9KSBhcyBUW107XG4gIGlmICh0eXBlb2YgdmFsLnRvQXJyYXkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHZhbC50b0FycmF5KCkgYXMgVFtdO1xuICByZXR1cm4gW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWxlY3RlZERzSWRzKHVzZURhdGFTb3VyY2VzOiBhbnkpOiBzdHJpbmdbXSB7XG4gIGNvbnN0IHVkcyA9IHRvUGxhaW5BcnJheTxhbnk+KHVzZURhdGFTb3VyY2VzKTtcbiAgY29uc3QgaWRzID0gdWRzLm1hcCgodSkgPT4gdT8uZGF0YVNvdXJjZUlkKS5maWx0ZXIoQm9vbGVhbik7XG4gIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQoaWRzKSk7XG59XG5cbnR5cGUgU2NvcmVkRHMgPSB7XG4gIGRzOiBRdWVyaWFibGVEYXRhU291cmNlO1xuICBzY29yZTogbnVtYmVyO1xuICByZWdpb25NYXRjaDogYm9vbGVhbjtcbn07XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIGFjdGl2ZSBGZWF0dXJlTGF5ZXIgZm9yIGRhc2hib2FyZCB3aWRnZXRzLlxuICogUHJlZmVycyBFWEIgRGF0YVNvdXJjZXMgKHNhbWUgcGF0aCBhcyBBZ3JpTG9jYWxpemF0aW9uKSxcbiAqIGZhbGxzIGJhY2sgdG8gSmltdU1hcFZpZXcgbWFwIGxheWVycy5cbiAqL1xuZXhwb3J0IGNsYXNzIEFncmlEYXRhU291cmNlRW5naW5lIHtcbiAgcHJpdmF0ZSBkc0J5SWQ6IFJlY29yZDxzdHJpbmcsIFF1ZXJpYWJsZURhdGFTb3VyY2U+ID0ge307XG4gIHByaXZhdGUgc2VsZWN0ZWRJZHM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgcmVzb2x2ZUNhY2hlID0gbmV3IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgUHJvbWlzZTxSZXNvbHZlZEZlYXR1cmVMYXllciB8IG51bGw+XG4gID4oKTtcblxuICBvbkRzQ3JlYXRlZChkczogUXVlcmlhYmxlRGF0YVNvdXJjZSwgaWRzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIGlmICghZHM/LmlkKSByZXR1cm47XG4gICAgdGhpcy5kc0J5SWRbZHMuaWRdID0gZHM7XG4gICAgdGhpcy5zZWxlY3RlZElkcyA9IFsuLi5pZHNdO1xuICAgIHRoaXMucmVzb2x2ZUNhY2hlLmNsZWFyKCk7XG4gIH1cblxuICBzeW5jU2VsZWN0aW9uKGlkczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkSWRzID0gWy4uLmlkc107XG4gICAgdGhpcy5yZXNvbHZlQ2FjaGUuY2xlYXIoKTtcbiAgfVxuXG4gIGNsZWFyUmVzb2x2ZUNhY2hlKCk6IHZvaWQge1xuICAgIHRoaXMucmVzb2x2ZUNhY2hlLmNsZWFyKCk7XG4gIH1cblxuICAvKiogVHJ1ZSB3aGlsZSBzZWxlY3RlZCBkYXRhIHNvdXJjZXMgYXJlIHN0aWxsIGNvbm5lY3RpbmcgKG5vIG1hcCBmYWxsYmFjayB5ZXQpLiAqL1xuICBpc1Jlc29sdmVQZW5kaW5nKGppbXVNYXBWaWV3OiBhbnkgfCBudWxsKTogYm9vbGVhbiB7XG4gICAgaWYgKGppbXVNYXBWaWV3Py52aWV3Py5tYXApIHJldHVybiBmYWxzZTtcbiAgICBpZiAoIXRoaXMuc2VsZWN0ZWRJZHMubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgY29ubmVjdGVkID0gdGhpcy5zZWxlY3RlZElkcy5maWx0ZXIoKGlkKSA9PiAhIXRoaXMuZHNCeUlkW2lkXSkubGVuZ3RoO1xuICAgIHJldHVybiBjb25uZWN0ZWQgPCB0aGlzLnNlbGVjdGVkSWRzLmxlbmd0aDtcbiAgfVxuXG4gIGhhc0Nvbm5lY3RlZFNvdXJjZXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJZHMuc29tZSgoaWQpID0+ICEhdGhpcy5kc0J5SWRbaWRdKTtcbiAgfVxuXG4gIGdldExheWVyRnJvbURzKGRzOiBRdWVyaWFibGVEYXRhU291cmNlKTogYW55IHwgbnVsbCB7XG4gICAgY29uc3QgYW55RHMgPSBkcyBhcyBhbnk7XG4gICAgcmV0dXJuIGdldFF1ZXJ5YWJsZUxheWVyKGFueURzLmxheWVyIHx8IGFueURzLl9sYXllcik7XG4gIH1cblxuICBwcml2YXRlIGdldERzSGF5c3RhY2soZHM6IFF1ZXJpYWJsZURhdGFTb3VyY2UpOiBzdHJpbmcge1xuICAgIGNvbnN0IGFueURzID0gZHMgYXMgYW55O1xuICAgIGNvbnN0IGxheWVyID0gYW55RHMubGF5ZXIgfHwgYW55RHMuX2xheWVyO1xuICAgIGNvbnN0IHRpdGxlID0gU3RyaW5nKGxheWVyPy50aXRsZSB8fCBcIlwiKTtcbiAgICBjb25zdCB1cmwgPSBTdHJpbmcobGF5ZXI/LnVybCB8fCBhbnlEcy5nZXREYXRhU291cmNlSnNvbj8uKCk/LnVybCB8fCBcIlwiKTtcbiAgICBjb25zdCBsYWJlbCA9IFN0cmluZyhcbiAgICAgIGFueURzLmdldExhYmVsPy4oKSB8fFxuICAgICAgICBhbnlEcy5nZXREYXRhU291cmNlSnNvbj8uKCk/LmxhYmVsIHx8XG4gICAgICAgIGFueURzLmdldERhdGFTb3VyY2VKc29uPy4oKT8uc291cmNlTGFiZWwgfHxcbiAgICAgICAgXCJcIixcbiAgICApO1xuICAgIHJldHVybiBgJHt0aXRsZX0gJHt1cmx9ICR7bGFiZWx9YDtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRSZWdpb25Qcm9iZVdoZXJlKFxuICAgIGZpbHRlcnM6IFBpY2s8QWdyaUZpbHRlcnMsIFwieWlsXCIgfCBcInZpbG95YXRcIj4sXG4gICAgbGF5ZXI6IGFueSxcbiAgICBmaWVsZHM6IHN0cmluZ1tdLFxuICAgIHJlZ2lvblNjb3BlZDogYm9vbGVhbixcbiAgICB5ZWFyU2NvcGVkOiBib29sZWFuLFxuICApOiBzdHJpbmcge1xuICAgIHJldHVybiBidWlsZEFncmlXaGVyZShcbiAgICAgIHtcbiAgICAgICAgeWlsOiBmaWx0ZXJzLnlpbCxcbiAgICAgICAgdmlsb3lhdDogZmlsdGVycy52aWxveWF0LFxuICAgICAgICBza2lwUmVnaW9uRmlsdGVyOiByZWdpb25TY29wZWQsXG4gICAgICAgIHNraXBZZWFyRmlsdGVyOiB5ZWFyU2NvcGVkLFxuICAgICAgfSxcbiAgICAgIGZpZWxkcyxcbiAgICAgIGxheWVyLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHBpY2tCZXN0RHNCeUNvdW50KFxuICAgIHBvb2w6IFNjb3JlZERzW10sXG4gICAgZmlsdGVyczogUGljazxBZ3JpRmlsdGVycywgXCJ5aWxcIiB8IFwidmlsb3lhdFwiPixcbiAgICBwcmVmZXJyZWREczogUXVlcmlhYmxlRGF0YVNvdXJjZSB8IG51bGwsXG4gICk6IFByb21pc2U8U2NvcmVkRHMgfCBudWxsPiB7XG4gICAgaWYgKCFwb29sLmxlbmd0aCkgcmV0dXJuIG51bGw7XG4gICAgaWYgKCFTdHJpbmcoZmlsdGVycy52aWxveWF0ID8/IFwiXCIpLnRyaW0oKSB8fCBwb29sLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHBvb2xbMF07XG4gICAgfVxuXG4gICAgY29uc3Qgc2NvcmVkOiBBcnJheTx7IGl0ZW06IFNjb3JlZERzOyBjb3VudDogbnVtYmVyIH0+ID0gW107XG4gICAgY29uc3QgdHJ5SXRlbSA9IGFzeW5jIChpdGVtOiBTY29yZWREcyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgICAgY29uc3QgbGF5ZXIgPSB0aGlzLmdldExheWVyRnJvbURzKGl0ZW0uZHMpO1xuICAgICAgaWYgKCFsYXllcikgcmV0dXJuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgc2FmZUxvYWRNYXBMYXllcihsYXllcik7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLyogaWdub3JlICovXG4gICAgICB9XG4gICAgICBjb25zdCBmaWVsZHM6IHN0cmluZ1tdID0gKGxheWVyLmZpZWxkcyB8fCBbXSkubWFwKChmOiBhbnkpID0+IGYubmFtZSk7XG4gICAgICBjb25zdCB3aGVyZSA9IHRoaXMuYnVpbGRSZWdpb25Qcm9iZVdoZXJlKFxuICAgICAgICBmaWx0ZXJzLFxuICAgICAgICBsYXllcixcbiAgICAgICAgZmllbGRzLFxuICAgICAgICBpdGVtLnJlZ2lvbk1hdGNoLFxuICAgICAgICBoYXlzdGFja01hdGNoZXNZZWFyKHRoaXMuZ2V0RHNIYXlzdGFjayhpdGVtLmRzKSwgZmlsdGVycy55aWwpLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGNvdW50ID0gYXdhaXQgcXVpY2tMYXllckZlYXR1cmVDb3VudChsYXllciwgd2hlcmUpO1xuICAgICAgc2NvcmVkLnB1c2goeyBpdGVtLCBjb3VudCB9KTtcbiAgICB9O1xuXG4gICAgaWYgKHByZWZlcnJlZERzKSB7XG4gICAgICBjb25zdCBwcmVmZXJyZWQgPSBwb29sLmZpbmQoKHApID0+IHAuZHMuaWQgPT09IHByZWZlcnJlZERzLmlkKTtcbiAgICAgIGlmIChwcmVmZXJyZWQpIHtcbiAgICAgICAgYXdhaXQgdHJ5SXRlbShwcmVmZXJyZWQpO1xuICAgICAgICBjb25zdCBwcmVmZXJyZWRDb3VudCA9IHNjb3JlZFswXT8uY291bnQgPz8gLTE7XG4gICAgICAgIGlmIChwcmVmZXJyZWRDb3VudCA+IDApIHJldHVybiBwcmVmZXJyZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVtYWluaW5nID0gcG9vbC5maWx0ZXIoXG4gICAgICAocCkgPT4gIXByZWZlcnJlZERzIHx8IHAuZHMuaWQgIT09IHByZWZlcnJlZERzLmlkLFxuICAgICk7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwocmVtYWluaW5nLm1hcCgoaXRlbSkgPT4gdHJ5SXRlbShpdGVtKSkpO1xuXG4gICAgY29uc3QgcG9zaXRpdmUgPSBzY29yZWRcbiAgICAgIC5maWx0ZXIoKHMpID0+IHMuY291bnQgPiAwKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIuY291bnQgLSBhLmNvdW50KTtcbiAgICBpZiAocG9zaXRpdmUubGVuZ3RoKSByZXR1cm4gcG9zaXRpdmVbMF0uaXRlbTtcblxuICAgIHJldHVybiAoXG4gICAgICBzY29yZWQuZmluZCgocykgPT4gcy5jb3VudCA+PSAwKT8uaXRlbSB8fFxuICAgICAgcG9vbC5maW5kKChwKSA9PiBwLmRzLmlkID09PSBwcmVmZXJyZWREcz8uaWQpIHx8XG4gICAgICBwb29sWzBdXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIHJlc29sdmVGcm9tRGF0YVNvdXJjZXMoXG4gICAgZmlsdGVyczogUGljazxBZ3JpRmlsdGVycywgXCJ5aWxcIiB8IFwidmlsb3lhdFwiPixcbiAgKTogUHJvbWlzZTxSZXNvbHZlZEZlYXR1cmVMYXllciB8IG51bGw+IHtcbiAgICBjb25zdCBub3JtYWxpemVkRmlsdGVycyA9IHtcbiAgICAgIHlpbDogZmlsdGVycy55aWwsXG4gICAgICB2aWxveWF0OiBjYW5vbmljYWxpemVSZWdpb25GaWx0ZXJWYWx1ZShTdHJpbmcoZmlsdGVycy52aWxveWF0ID8/IFwiXCIpLnRyaW0oKSksXG4gICAgfTtcbiAgICBjb25zdCB3YW50c1JlZ2lvbiA9ICEhbm9ybWFsaXplZEZpbHRlcnMudmlsb3lhdDtcbiAgICBjb25zdCBzY29yZWQ6IFNjb3JlZERzW10gPSBbXTtcblxuICAgIGZvciAoY29uc3QgaWQgb2YgdGhpcy5zZWxlY3RlZElkcykge1xuICAgICAgY29uc3QgZHMgPSB0aGlzLmRzQnlJZFtpZF07XG4gICAgICBpZiAoIWRzIHx8ICF0aGlzLmdldExheWVyRnJvbURzKGRzKSkgY29udGludWU7XG4gICAgICBjb25zdCBoYXlzdGFjayA9IHRoaXMuZ2V0RHNIYXlzdGFjayhkcyk7XG4gICAgICBzY29yZWQucHVzaCh7XG4gICAgICAgIGRzLFxuICAgICAgICBzY29yZTogc2NvcmVIYXlzdGFja0ZvckZpbHRlcnMoaGF5c3RhY2ssIG5vcm1hbGl6ZWRGaWx0ZXJzKSxcbiAgICAgICAgcmVnaW9uTWF0Y2g6IGhheXN0YWNrTWF0Y2hlc1JlZ2lvbihoYXlzdGFjaywgbm9ybWFsaXplZEZpbHRlcnMudmlsb3lhdCksXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXNjb3JlZC5sZW5ndGgpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgcG9vbCA9IHBpY2tZZWFyUmVnaW9uTGF5ZXJQb29sKFxuICAgICAgc2NvcmVkLFxuICAgICAgc2NvcmVkLmxlbmd0aCxcbiAgICAgIG5vcm1hbGl6ZWRGaWx0ZXJzLFxuICAgICAgKGl0ZW0pID0+IHRoaXMuZ2V0RHNIYXlzdGFjayhpdGVtLmRzKSxcbiAgICApO1xuICAgIGlmICghcG9vbC5sZW5ndGgpIHJldHVybiBudWxsO1xuXG4gICAgbGV0IGJlc3RTY29yZSA9IC0xO1xuICAgIGxldCBzY29yZVdpbm5lcjogU2NvcmVkRHMgfCBudWxsID0gbnVsbDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgcG9vbCkge1xuICAgICAgaWYgKGl0ZW0uc2NvcmUgPiBiZXN0U2NvcmUpIHtcbiAgICAgICAgYmVzdFNjb3JlID0gaXRlbS5zY29yZTtcbiAgICAgICAgc2NvcmVXaW5uZXIgPSBpdGVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHByZWZlcnJlZERzID0gc2NvcmVXaW5uZXI/LmRzIHx8IG51bGw7XG4gICAgY29uc3QgYmVzdEl0ZW0gPVxuICAgICAgd2FudHNSZWdpb24gJiYgcG9vbC5sZW5ndGggPiAxXG4gICAgICAgID8gYXdhaXQgdGhpcy5waWNrQmVzdERzQnlDb3VudChwb29sLCBub3JtYWxpemVkRmlsdGVycywgcHJlZmVycmVkRHMpXG4gICAgICAgIDogc2NvcmVXaW5uZXI7XG5cbiAgICBjb25zdCBiZXN0RHMgPSBiZXN0SXRlbT8uZHMgfHwgcHJlZmVycmVkRHM7XG4gICAgaWYgKCFiZXN0RHMpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgbGF5ZXIgPSB0aGlzLmdldExheWVyRnJvbURzKGJlc3REcyk7XG4gICAgaWYgKCFsYXllcikgcmV0dXJuIG51bGw7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgc2FmZUxvYWRNYXBMYXllcihsYXllcik7XG4gICAgfSBjYXRjaCB7XG4gICAgICAvKiBsYXllciBtYXkgYWxyZWFkeSBiZSBsb2FkZWQgKi9cbiAgICB9XG4gICAgZGlzYWJsZUxheWVyUGJmKGxheWVyKTtcblxuICAgIGNvbnN0IGZpZWxkczogc3RyaW5nW10gPSAobGF5ZXIuZmllbGRzIHx8IFtdKS5tYXAoKGY6IGFueSkgPT4gZi5uYW1lKTtcbiAgICBjb25zdCByZWdpb25NYXRjaCA9IGJlc3RJdGVtPy5yZWdpb25NYXRjaCA/PyBmYWxzZTtcbiAgICBjb25zdCByZWdpb25TY29wZWQgPSByZWdpb25NYXRjaCB8fCAoYmVzdEl0ZW0/LnNjb3JlID8/IDApID49IDI1O1xuICAgIGNvbnN0IGhheXN0YWNrID0gdGhpcy5nZXREc0hheXN0YWNrKGJlc3REcyk7XG4gICAgY29uc3QgeWVhclNjb3BlZCA9IGhheXN0YWNrTWF0Y2hlc1llYXIoaGF5c3RhY2ssIG5vcm1hbGl6ZWRGaWx0ZXJzLnlpbCk7XG5cbiAgICBmbExvZyhcInJlc29sdmUgdmlhIERhdGFTb3VyY2VcIiwge1xuICAgICAgZmlsdGVyczogbm9ybWFsaXplZEZpbHRlcnMsXG4gICAgICBkc0lkOiBiZXN0RHMuaWQsXG4gICAgICBsYXllclRpdGxlOiBsYXllcj8udGl0bGUgfHwgbGF5ZXI/LnVybCB8fCBudWxsLFxuICAgICAgc2NvcmU6IGJlc3RJdGVtPy5zY29yZSA/PyBiZXN0U2NvcmUsXG4gICAgICByZWdpb25TY29wZWQsXG4gICAgICB5ZWFyU2NvcGVkLFxuICAgICAgZmllbGRDb3VudDogZmllbGRzLmxlbmd0aCxcbiAgICAgIGNvdW50QmFzZWQ6IHdhbnRzUmVnaW9uICYmIHBvb2wubGVuZ3RoID4gMSxcbiAgICB9KTtcbiAgICB2b2lkIHByZXBhcmVWYWx1ZUluZGV4KGxheWVyLCBmaWVsZHMpO1xuICAgIHJldHVybiB7XG4gICAgICBsYXllcixcbiAgICAgIGZpZWxkcyxcbiAgICAgIHJlZ2lvblNjb3BlZCxcbiAgICAgIHllYXJTY29wZWQsXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIHJlc29sdmUoXG4gICAgZmlsdGVyczogUGljazxBZ3JpRmlsdGVycywgXCJ5aWxcIiB8IFwidmlsb3lhdFwiPixcbiAgICBqaW11TWFwVmlldzogYW55IHwgbnVsbCxcbiAgKTogUHJvbWlzZTxSZXNvbHZlZEZlYXR1cmVMYXllciB8IG51bGw+IHtcbiAgICBjb25zdCBjYWNoZUtleSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHlpbDogZmlsdGVycy55aWwgfHwgXCJcIixcbiAgICAgIHZpbG95YXQ6IGNhbm9uaWNhbGl6ZVJlZ2lvbkZpbHRlclZhbHVlKFN0cmluZyhmaWx0ZXJzLnZpbG95YXQgPz8gXCJcIikudHJpbSgpKSxcbiAgICAgIGlkczogdGhpcy5zZWxlY3RlZElkcyxcbiAgICAgIG1hcFJlYWR5OiAhIWppbXVNYXBWaWV3LFxuICAgIH0pO1xuICAgIGNvbnN0IHBlbmRpbmcgPSB0aGlzLnJlc29sdmVDYWNoZS5nZXQoY2FjaGVLZXkpO1xuICAgIGlmIChwZW5kaW5nKSByZXR1cm4gcGVuZGluZztcblxuICAgIGNvbnN0IGpvYiA9IHRoaXMucmVzb2x2ZUludGVybmFsKGZpbHRlcnMsIGppbXVNYXBWaWV3KTtcbiAgICB0aGlzLnJlc29sdmVDYWNoZS5zZXQoY2FjaGVLZXksIGpvYik7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhd2FpdCBqb2I7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmICh0aGlzLnJlc29sdmVDYWNoZS5nZXQoY2FjaGVLZXkpID09PSBqb2IpIHtcbiAgICAgICAgdGhpcy5yZXNvbHZlQ2FjaGUuZGVsZXRlKGNhY2hlS2V5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlc29sdmVJbnRlcm5hbChcbiAgICBmaWx0ZXJzOiBQaWNrPEFncmlGaWx0ZXJzLCBcInlpbFwiIHwgXCJ2aWxveWF0XCI+LFxuICAgIGppbXVNYXBWaWV3OiBhbnkgfCBudWxsLFxuICApOiBQcm9taXNlPFJlc29sdmVkRmVhdHVyZUxheWVyIHwgbnVsbD4ge1xuICAgIGNvbnN0IGZyb21EcyA9IGF3YWl0IHRoaXMucmVzb2x2ZUZyb21EYXRhU291cmNlcyhmaWx0ZXJzKTtcbiAgICBpZiAoZnJvbURzKSByZXR1cm4gZnJvbURzO1xuICAgIGlmICghamltdU1hcFZpZXcpIHtcbiAgICAgIGZsTG9nKFwicmVzb2x2ZSBGQUlMRUQgKG5vIERTIGxheWVyLCBubyBtYXAgdmlldylcIiwge1xuICAgICAgICBmaWx0ZXJzLFxuICAgICAgICBzZWxlY3RlZElkczogdGhpcy5zZWxlY3RlZElkcyxcbiAgICAgICAgY29ubmVjdGVkSWRzOiB0aGlzLnNlbGVjdGVkSWRzLmZpbHRlcigoaWQpID0+ICEhdGhpcy5kc0J5SWRbaWRdKSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGZyb21NYXAgPSBhd2FpdCByZXNvbHZlRmVhdHVyZUxheWVyRm9yRmlsdGVycyhqaW11TWFwVmlldywgZmlsdGVycyk7XG4gICAgZmxMb2coXCJyZXNvbHZlIHZpYSBNYXBcIiwge1xuICAgICAgZmlsdGVycyxcbiAgICAgIGxheWVyVGl0bGU6IGZyb21NYXA/LmxheWVyPy50aXRsZSB8fCBmcm9tTWFwPy5sYXllcj8udXJsIHx8IG51bGwsXG4gICAgICByZWdpb25TY29wZWQ6IGZyb21NYXA/LnJlZ2lvblNjb3BlZCA/PyBudWxsLFxuICAgICAgeWVhclNjb3BlZDogZnJvbU1hcD8ueWVhclNjb3BlZCA/PyBudWxsLFxuICAgICAgZm91bmQ6ICEhZnJvbU1hcCxcbiAgICB9KTtcbiAgICBpZiAoZnJvbU1hcD8ubGF5ZXIpIHtcbiAgICAgIHZvaWQgcHJlcGFyZVZhbHVlSW5kZXgoZnJvbU1hcC5sYXllciwgZnJvbU1hcC5maWVsZHMpO1xuICAgIH1cbiAgICByZXR1cm4gZnJvbU1hcDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQWdyaURhdGFTb3VyY2VFbmdpbmUgfSBmcm9tIFwiLi9hZ3JpLWRhdGEtc291cmNlLWVuZ2luZVwiO1xuXG5jb25zdCBEQVNIQk9BUkRfQ0hJTERfU1VGRklYRVMgPSBbXG4gIFwiLWxvY2FsaXphdGlvblwiLFxuICBcIi1pbmRpY2F0b3JcIixcbiAgXCItcmVnaW9uXCIsXG4gIFwiLXBpZVwiLFxuICBcIi1ncmFmZlwiLFxuICBcIi1iYXJcIixcbiAgXCItcG9wdXBcIixcbl0gYXMgY29uc3Q7XG5cbi8qKiBSb290IEFncm9XaWRnZXRWNSB3aWRnZXQgaWQgZnJvbSBhbnkgZW1iZWRkZWQgY2hpbGQgaWQuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWdyaURhc2hib2FyZFJvb3RJZCh3aWRnZXRJZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgaWQgPSBTdHJpbmcod2lkZ2V0SWQgfHwgXCJcIik7XG4gIGZvciAoY29uc3Qgc3VmZml4IG9mIERBU0hCT0FSRF9DSElMRF9TVUZGSVhFUykge1xuICAgIGlmIChpZC5lbmRzV2l0aChzdWZmaXgpKSByZXR1cm4gaWQuc2xpY2UoMCwgLXN1ZmZpeC5sZW5ndGgpO1xuICB9XG4gIHJldHVybiBpZDtcbn1cblxuY29uc3Qgc2hhcmVkRW5naW5lcyA9IG5ldyBNYXA8c3RyaW5nLCBBZ3JpRGF0YVNvdXJjZUVuZ2luZT4oKTtcblxuLyoqIE9uZSBEYXRhU291cmNlIGVuZ2luZSBwZXIgZGFzaGJvYXJkIGluc3RhbmNlIOKAlCBzaGFyZWQgYnkgYWxsIGVtYmVkZGVkIGNoaWxkcmVuLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNoYXJlZEFncmlEYXRhU291cmNlRW5naW5lKFxuICB3aWRnZXRJZDogc3RyaW5nLFxuKTogQWdyaURhdGFTb3VyY2VFbmdpbmUge1xuICBjb25zdCByb290SWQgPSBnZXRBZ3JpRGFzaGJvYXJkUm9vdElkKHdpZGdldElkKTtcbiAgbGV0IGVuZ2luZSA9IHNoYXJlZEVuZ2luZXMuZ2V0KHJvb3RJZCk7XG4gIGlmICghZW5naW5lKSB7XG4gICAgZW5naW5lID0gbmV3IEFncmlEYXRhU291cmNlRW5naW5lKCk7XG4gICAgc2hhcmVkRW5naW5lcy5zZXQocm9vdElkLCBlbmdpbmUpO1xuICB9XG4gIHJldHVybiBlbmdpbmU7XG59XG4iLCJpbXBvcnQgeyBBcHBNb2RlLCBnZXRBcHBTdG9yZSB9IGZyb20gXCJqaW11LWNvcmVcIjtcbmltcG9ydCB7IHRvUGxhaW5BcnJheSB9IGZyb20gXCIuL2FncmktZGF0YS1zb3VyY2UtZW5naW5lXCI7XG5cbmV4cG9ydCB0eXBlIExpbmtlZE1hcExheW91dFNjb3BlID0gXCJkYXNoYm9hcmRcIiB8IFwicGxtXCI7XG5cbmNvbnN0IE1BTkFHRURfTUFQX0NMQVNTOiBSZWNvcmQ8TGlua2VkTWFwTGF5b3V0U2NvcGUsIHN0cmluZz4gPSB7XG4gIGRhc2hib2FyZDogXCJhZ3JpLWRhc2hib2FyZC1tYW5hZ2VkLW1hcFwiLFxuICBwbG06IFwicGxtLW1hbmFnZWQtbWFwXCIsXG59O1xuXG5jb25zdCBNQU5BR0VEX1JFTkRFUkVSX0NMQVNTOiBSZWNvcmQ8TGlua2VkTWFwTGF5b3V0U2NvcGUsIHN0cmluZz4gPSB7XG4gIGRhc2hib2FyZDogXCJhZ3JpLWRhc2hib2FyZC1tYW5hZ2VkLW1hcC1yZW5kZXJlclwiLFxuICBwbG06IFwicGxtLW1hbmFnZWQtbWFwLXJlbmRlcmVyXCIsXG59O1xuXG5jb25zdCBNQVBfUEFORUxfQk9SREVSX1JBRElVUyA9IFwiMjBweFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFncmlMaW5rZWRNYXBMYXlvdXRPcHRpb25zIHtcbiAgc2NvcGU6IExpbmtlZE1hcExheW91dFNjb3BlO1xuICBob3N0V2lkZ2V0SWQ6IHN0cmluZztcbiAgZ2V0U2xvdEVsZW1lbnQ6ICgpID0+IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgZ2V0VXNlTWFwV2lkZ2V0SWRzOiAoKSA9PiB1bmtub3duO1xuICBvbk1hcFdpZGdldExpbmtlZD86IChtYXBXaWRnZXRJZDogc3RyaW5nKSA9PiB2b2lkO1xuICAvKiogRmlyZWQgd2hlbiBhIG1hcCB3aWRnZXQgaWQgYmVjb21lcyBhdmFpbGFibGUgKGNvbmZpZyBsaW5rIG9yIGFwcCBkaXNjb3ZlcnkpLiAqL1xuICBvbk1hcFJlc29sdmVkPzogKG1hcFdpZGdldElkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIHJlc2l6ZU1hcFZpZXc/OiAoKSA9PiB2b2lkO1xufVxuXG5mdW5jdGlvbiBpc01hcFdpZGdldENvbmZpZyh3aWRnZXQ6IGFueSk6IGJvb2xlYW4ge1xuICBjb25zdCBtYW5pZmVzdE5hbWUgPSBTdHJpbmcod2lkZ2V0Py5tYW5pZmVzdD8ubmFtZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCB1cmkgPSBTdHJpbmcod2lkZ2V0Py51cmkgfHwgXCJcIikudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuIG1hbmlmZXN0TmFtZSA9PT0gXCJtYXBcIiB8fCB1cmkuaW5jbHVkZXMoXCJhcmNnaXMtbWFwXCIpO1xufVxuXG5mdW5jdGlvbiBmaW5kV2lkZ2V0UmVuZGVyZXIod2lkZ2V0SWQ6IHN0cmluZyk6IEhUTUxFbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHNlbGVjdG9ycyA9IFtcbiAgICBgLndpZGdldC1yZW5kZXJlcltkYXRhLXdpZGdldGlkPVwiJHt3aWRnZXRJZH1cIl1gLFxuICAgIGBbZGF0YS13aWRnZXRpZD1cIiR7d2lkZ2V0SWR9XCJdLndpZGdldC1yZW5kZXJlcmAsXG4gICAgYFtkYXRhLXdpZGdldGlkPVwiJHt3aWRnZXRJZH1cIl1gLFxuICBdO1xuICBmb3IgKGNvbnN0IHNlbGVjdG9yIG9mIHNlbGVjdG9ycykge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgIGlmIChlbCkgcmV0dXJuIGVsO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBmaW5kV2lkZ2V0TGF5b3V0SXRlbSh3aWRnZXRJZDogc3RyaW5nKTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3QgcmVuZGVyZXIgPSBmaW5kV2lkZ2V0UmVuZGVyZXIod2lkZ2V0SWQpO1xuICBpZiAoIXJlbmRlcmVyKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBjYW5kaWRhdGVzID0gW1xuICAgIHJlbmRlcmVyLmNsb3Nlc3QoXCIubGF5b3V0LWl0ZW0uaXMtd2lkZ2V0XCIpLFxuICAgIHJlbmRlcmVyLmNsb3Nlc3QoXCIuYnVpbGRlci1sYXlvdXQtaXRlbVwiKSxcbiAgICByZW5kZXJlci5jbG9zZXN0KFwiLmxheW91dC1pdGVtXCIpLFxuICAgIHJlbmRlcmVyLmNsb3Nlc3QoXCIuc2VjdGlvbi1sYXlvdXQtaXRlbVwiKSxcbiAgICByZW5kZXJlci5jbG9zZXN0KCdbY2xhc3MqPVwibGF5b3V0LWl0ZW1cIl0nKSxcbiAgICByZW5kZXJlci5wYXJlbnRFbGVtZW50LFxuICBdO1xuXG4gIGZvciAoY29uc3QgY2FuZGlkYXRlIG9mIGNhbmRpZGF0ZXMpIHtcbiAgICBpZiAoY2FuZGlkYXRlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgY2FuZGlkYXRlLmNvbnRhaW5zKHJlbmRlcmVyKSkge1xuICAgICAgcmV0dXJuIGNhbmRpZGF0ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVuZGVyZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0tub3duTWFwV2lkZ2V0SWQod2lkZ2V0SWQ/OiBzdHJpbmcgfCBudWxsKTogYm9vbGVhbiB7XG4gIGNvbnN0IGlkID0gU3RyaW5nKHdpZGdldElkIHx8IFwiXCIpLnRyaW0oKTtcbiAgaWYgKCFpZCkgcmV0dXJuIGZhbHNlO1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgd2lkZ2V0cyA9IChnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkgYXMgYW55KT8uYXBwQ29uZmlnPy53aWRnZXRzIHx8IHt9O1xuICAgIGNvbnN0IHdpZGdldCA9IHdpZGdldHNbaWRdO1xuICAgIGlmICh3aWRnZXQgJiYgaXNNYXBXaWRnZXRDb25maWcod2lkZ2V0KSkgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2gge1xuICAgIC8qIGFwcCBjb25maWcgbWF5IHN0aWxsIGJlIHdhcm1pbmcgdXAgKi9cbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZmluZFdpZGdldFJlbmRlcmVyKGlkKTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzTWFwT3ZlcmxhcHBpbmdTbG90KG1hcFdpZGdldElkOiBzdHJpbmcsIHNsb3Q6IERPTVJlY3QpOiBib29sZWFuIHtcbiAgY29uc3QgaXRlbSA9IGZpbmRXaWRnZXRMYXlvdXRJdGVtKG1hcFdpZGdldElkKTtcbiAgaWYgKCFpdGVtKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IHJlY3QgPSBpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCBjeCA9IHJlY3QubGVmdCArIHJlY3Qud2lkdGggLyAyO1xuICBjb25zdCBjeSA9IHJlY3QudG9wICsgcmVjdC5oZWlnaHQgLyAyO1xuICBpZiAoY3ggPj0gc2xvdC5sZWZ0ICYmIGN4IDw9IHNsb3QucmlnaHQgJiYgY3kgPj0gc2xvdC50b3AgJiYgY3kgPD0gc2xvdC5ib3R0b20pIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCBvdmVybGFwWCA9IE1hdGgubWF4KFxuICAgIDAsXG4gICAgTWF0aC5taW4ocmVjdC5yaWdodCwgc2xvdC5yaWdodCkgLSBNYXRoLm1heChyZWN0LmxlZnQsIHNsb3QubGVmdCksXG4gICk7XG4gIGNvbnN0IG92ZXJsYXBZID0gTWF0aC5tYXgoXG4gICAgMCxcbiAgICBNYXRoLm1pbihyZWN0LmJvdHRvbSwgc2xvdC5ib3R0b20pIC0gTWF0aC5tYXgocmVjdC50b3AsIHNsb3QudG9wKSxcbiAgKTtcbiAgY29uc3Qgb3ZlcmxhcEFyZWEgPSBvdmVybGFwWCAqIG92ZXJsYXBZO1xuICBjb25zdCBtYXBBcmVhID0gTWF0aC5tYXgoMSwgcmVjdC53aWR0aCAqIHJlY3QuaGVpZ2h0KTtcbiAgcmV0dXJuIG92ZXJsYXBBcmVhIC8gbWFwQXJlYSA+IDAuMztcbn1cblxuLyoqIEZpbmQgdGhlIHN0YW5kYXJkIE1hcCB3aWRnZXQgaWQgZnJvbSBhcHAgY29uZmlnIChwdWJsaXNoZWQgZXhwZXJpZW5jZSBzYWZlKS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNjb3Zlck1hcFdpZGdldElkSW5BcHAob3B0aW9uczoge1xuICBob3N0V2lkZ2V0SWQ6IHN0cmluZztcbiAgZ2V0U2xvdEVsZW1lbnQ/OiAoKSA9PiBIVE1MRWxlbWVudCB8IG51bGw7XG59KTogc3RyaW5nIHwgbnVsbCB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc3RhdGUgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkgYXMgYW55O1xuICAgIGNvbnN0IHdpZGdldHMgPSBzdGF0ZT8uYXBwQ29uZmlnPy53aWRnZXRzIHx8IHt9O1xuICAgIGNvbnN0IG93bklkID0gb3B0aW9ucy5ob3N0V2lkZ2V0SWQ7XG4gICAgY29uc3QgY2FuZGlkYXRlczogc3RyaW5nW10gPSBbXTtcbiAgICBPYmplY3Qua2V5cyh3aWRnZXRzKS5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgaWYgKGlkID09PSBvd25JZCB8fCBpZC5zdGFydHNXaXRoKGAke293bklkfS1gKSkgcmV0dXJuO1xuICAgICAgaWYgKGlzTWFwV2lkZ2V0Q29uZmlnKHdpZGdldHNbaWRdKSkgY2FuZGlkYXRlcy5wdXNoKGlkKTtcbiAgICB9KTtcbiAgICBpZiAoIWNhbmRpZGF0ZXMubGVuZ3RoKSByZXR1cm4gbnVsbDtcbiAgICBpZiAoY2FuZGlkYXRlcy5sZW5ndGggPT09IDEpIHJldHVybiBjYW5kaWRhdGVzWzBdO1xuXG4gICAgY29uc3Qgc2xvdCA9IG9wdGlvbnMuZ2V0U2xvdEVsZW1lbnQ/LigpPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoIXNsb3QpIHJldHVybiBjYW5kaWRhdGVzWzBdO1xuXG4gICAgY29uc3QgaW5zaWRlU2xvdCA9IGNhbmRpZGF0ZXMuZmlsdGVyKChpZCkgPT5cbiAgICAgIGlzTWFwT3ZlcmxhcHBpbmdTbG90KGlkLCBzbG90KSxcbiAgICApO1xuICAgIGlmIChpbnNpZGVTbG90Lmxlbmd0aCA9PT0gMSkgcmV0dXJuIGluc2lkZVNsb3RbMF07XG4gICAgY29uc3QgcG9vbCA9IGluc2lkZVNsb3QubGVuZ3RoID8gaW5zaWRlU2xvdCA6IGNhbmRpZGF0ZXM7XG5cbiAgICBsZXQgYmVzdElkID0gcG9vbFswXTtcbiAgICBsZXQgYmVzdERpc3RhbmNlID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgIHBvb2wuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBmaW5kV2lkZ2V0TGF5b3V0SXRlbShpZCk7XG4gICAgICBpZiAoIWl0ZW0pIHJldHVybjtcbiAgICAgIGNvbnN0IHJlY3QgPSBpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgZHggPSByZWN0LmxlZnQgKyByZWN0LndpZHRoIC8gMiAtIChzbG90LmxlZnQgKyBzbG90LndpZHRoIC8gMik7XG4gICAgICBjb25zdCBkeSA9IHJlY3QudG9wICsgcmVjdC5oZWlnaHQgLyAyIC0gKHNsb3QudG9wICsgc2xvdC5oZWlnaHQgLyAyKTtcbiAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5oeXBvdChkeCwgZHkpO1xuICAgICAgaWYgKGRpc3RhbmNlIDwgYmVzdERpc3RhbmNlKSB7XG4gICAgICAgIGJlc3REaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgICAgICBiZXN0SWQgPSBpZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYmVzdElkO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWdyaUxpbmtlZE1hcExheW91dE1hbmFnZXIge1xuICBwcml2YXRlIG1hcExheW91dEl0ZW06IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgbWFwV2lkZ2V0UmVuZGVyZXI6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgYXV0b0xpbmtBdHRlbXB0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBsYXlvdXRSYWYgPSAwO1xuICBwcml2YXRlIGxhc3ROb3RpZmllZE1hcElkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IG9wdGlvbnM6IEFncmlMaW5rZWRNYXBMYXlvdXRPcHRpb25zKSB7fVxuXG4gIHNjaGVkdWxlTGF5b3V0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxheW91dFJhZikgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sYXlvdXRSYWYpO1xuICAgIHRoaXMubGF5b3V0UmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMubGF5b3V0UmFmID0gMDtcbiAgICAgIHRoaXMuc3luYygpO1xuICAgIH0pO1xuICB9XG5cbiAgbGF5b3V0Tm93KCk6IHZvaWQge1xuICAgIHRoaXMuc3luYygpO1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5sYXlvdXRSYWYpIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGF5b3V0UmFmKTtcbiAgICB0aGlzLmxheW91dFJhZiA9IDA7XG4gICAgdGhpcy5jbGVhcigpO1xuICB9XG5cbiAgZ2V0UmVzb2x2ZWRNYXBXaWRnZXRJZCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICBjb25zdCBsaW5rZWQgPSB0aGlzLmdldExpbmtlZE1hcFdpZGdldElkKCk7XG4gICAgaWYgKGxpbmtlZCAmJiBpc0tub3duTWFwV2lkZ2V0SWQobGlua2VkKSkgcmV0dXJuIGxpbmtlZDtcbiAgICByZXR1cm4gdGhpcy5kaXNjb3Zlck1hcFdpZGdldElkRnJvbUFwcCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRMaW5rZWRNYXBXaWRnZXRJZCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICBjb25zdCBpZHMgPSB0b1BsYWluQXJyYXk8c3RyaW5nPih0aGlzLm9wdGlvbnMuZ2V0VXNlTWFwV2lkZ2V0SWRzKCkpO1xuICAgIHJldHVybiBpZHNbMF0gPyBTdHJpbmcoaWRzWzBdKSA6IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGZpbmRTaGFyZWRMYXlvdXRTdXJmYWNlKHNsb3Q6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQgfCBudWxsIHtcbiAgICBjb25zdCBob3N0SXRlbSA9IHNsb3QuY2xvc2VzdChcbiAgICAgIFwiLmxheW91dC1pdGVtLCAuYnVpbGRlci1sYXlvdXQtaXRlbVwiLFxuICAgICkgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgIHJldHVybiBob3N0SXRlbT8ucGFyZW50RWxlbWVudCB8fCBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBkaXNjb3Zlck1hcFdpZGdldElkRnJvbUFwcCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gZGlzY292ZXJNYXBXaWRnZXRJZEluQXBwKHtcbiAgICAgIGhvc3RXaWRnZXRJZDogdGhpcy5vcHRpb25zLmhvc3RXaWRnZXRJZCxcbiAgICAgIGdldFNsb3RFbGVtZW50OiB0aGlzLm9wdGlvbnMuZ2V0U2xvdEVsZW1lbnQsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG5vdGlmeU1hcFJlc29sdmVkKG1hcFdpZGdldElkOiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgaWYgKCFtYXBXaWRnZXRJZCB8fCBtYXBXaWRnZXRJZCA9PT0gdGhpcy5sYXN0Tm90aWZpZWRNYXBJZCkgcmV0dXJuO1xuICAgIHRoaXMubGFzdE5vdGlmaWVkTWFwSWQgPSBtYXBXaWRnZXRJZDtcbiAgICB0aGlzLm9wdGlvbnMub25NYXBSZXNvbHZlZD8uKG1hcFdpZGdldElkKTtcbiAgfVxuXG4gIHByaXZhdGUgdHJ5QXV0b0xpbmtNYXBXaWRnZXQobWFwV2lkZ2V0SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGxpbmtlZCA9IHRoaXMuZ2V0TGlua2VkTWFwV2lkZ2V0SWQoKTtcbiAgICBpZiAoIW1hcFdpZGdldElkIHx8IChsaW5rZWQgJiYgaXNLbm93bk1hcFdpZGdldElkKGxpbmtlZCkpIHx8IHRoaXMuYXV0b0xpbmtBdHRlbXB0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2xvdCA9IHRoaXMub3B0aW9ucy5nZXRTbG90RWxlbWVudCgpPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoc2xvdCAmJiAhaXNNYXBPdmVybGFwcGluZ1Nsb3QobWFwV2lkZ2V0SWQsIHNsb3QpKSByZXR1cm47XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgbW9kZSA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5hcHBSdW50aW1lSW5mbz8uYXBwTW9kZTtcbiAgICAgIGlmIChtb2RlICE9PSBBcHBNb2RlLkRlc2lnbikgcmV0dXJuO1xuICAgICAgLy8gUnVudGltZSBidW5kbGVzIG11c3Qgbm90IGRlcGVuZCBvbiB0aGUgYnVpbGRlci1vbmx5IHBhY2thZ2UuIEFzayB0aGVcbiAgICAgIC8vIHNldHRpbmcgcGFuZWwgdG8gZm9jdXMgdGhlIG1hcCBzZWxlY3RvcjsgdGhlIHVzZXIgY2FuIGNvbmZpcm0gbGlua2FnZVxuICAgICAgLy8gdGhlcmUgd2l0aG91dCBtYWtpbmcgcHVibGlzaGVkIGFwcHMgbG9hZCBgamltdS1mb3ItYnVpbGRlcmAuXG4gICAgICB0aGlzLmF1dG9MaW5rQXR0ZW1wdGVkID0gdHJ1ZTtcbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoXCJhZ3JpLW1haW46bWFwLXNldHRpbmdzLXJlcXVlc3RcIiwge1xuICAgICAgICAgIGRldGFpbDogeyB3aWRnZXRJZDogdGhpcy5vcHRpb25zLmhvc3RXaWRnZXRJZCwgbWFwV2lkZ2V0SWQgfSxcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH0gY2F0Y2gge1xuICAgICAgLyogYnVpbGRlci1vbmx5IGhlbHBlciAqL1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlNYXBTbG90Qm91bmRzKGxheW91dEl0ZW06IEhUTUxFbGVtZW50LCBzbG90RWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3Qgc2xvdFJlY3QgPSBzbG90RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgc3VyZmFjZSA9IHRoaXMuZmluZFNoYXJlZExheW91dFN1cmZhY2Uoc2xvdEVsKTtcblxuICAgIGxldCB0b3AgPSBzbG90UmVjdC50b3A7XG4gICAgbGV0IGxlZnQgPSBzbG90UmVjdC5sZWZ0O1xuICAgIGxldCBwb3NpdGlvbk1vZGU6IFwiZml4ZWRcIiB8IFwiYWJzb2x1dGVcIiA9IFwiZml4ZWRcIjtcblxuICAgIGlmIChzdXJmYWNlKSB7XG4gICAgICBjb25zdCBzdXJmYWNlUmVjdCA9IHN1cmZhY2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB0b3AgPSBzbG90UmVjdC50b3AgLSBzdXJmYWNlUmVjdC50b3AgKyBzdXJmYWNlLnNjcm9sbFRvcDtcbiAgICAgIGxlZnQgPSBzbG90UmVjdC5sZWZ0IC0gc3VyZmFjZVJlY3QubGVmdCArIHN1cmZhY2Uuc2Nyb2xsTGVmdDtcbiAgICAgIHBvc2l0aW9uTW9kZSA9IFwiYWJzb2x1dGVcIjtcblxuICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUoc3VyZmFjZSkucG9zaXRpb24gPT09IFwic3RhdGljXCIpIHtcbiAgICAgICAgc3VyZmFjZS5zdHlsZS5zZXRQcm9wZXJ0eShcInBvc2l0aW9uXCIsIFwicmVsYXRpdmVcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZW50cmllczogQXJyYXk8W3N0cmluZywgc3RyaW5nXT4gPSBbXG4gICAgICBbXCJwb3NpdGlvblwiLCBwb3NpdGlvbk1vZGVdLFxuICAgICAgW1widG9wXCIsIGAke3RvcH1weGBdLFxuICAgICAgW1wibGVmdFwiLCBgJHtsZWZ0fXB4YF0sXG4gICAgICBbXCJ3aWR0aFwiLCBgJHtzbG90UmVjdC53aWR0aH1weGBdLFxuICAgICAgW1wiaGVpZ2h0XCIsIGAke3Nsb3RSZWN0LmhlaWdodH1weGBdLFxuICAgICAgW1wicmlnaHRcIiwgXCJhdXRvXCJdLFxuICAgICAgW1wiYm90dG9tXCIsIFwiYXV0b1wiXSxcbiAgICAgIFtcIm1hcmdpblwiLCBcIjBcIl0sXG4gICAgICBbXCJwYWRkaW5nXCIsIFwiMFwiXSxcbiAgICAgIFtcInRyYW5zZm9ybVwiLCBcIm5vbmVcIl0sXG4gICAgICBbXCJib3JkZXItcmFkaXVzXCIsIE1BUF9QQU5FTF9CT1JERVJfUkFESVVTXSxcbiAgICAgIFtcIm92ZXJmbG93XCIsIFwiaGlkZGVuXCJdLFxuICAgICAgW1wiei1pbmRleFwiLCBcIjEyXCJdLFxuICAgICAgW1wiYm94LXNpemluZ1wiLCBcImJvcmRlci1ib3hcIl0sXG4gICAgICBbXCJwb2ludGVyLWV2ZW50c1wiLCBcImF1dG9cIl0sXG4gICAgXTtcblxuICAgIGVudHJpZXMuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICBsYXlvdXRJdGVtLnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUsIFwiaW1wb3J0YW50XCIpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgd3JhcHBlciA9IGxheW91dEl0ZW0uY2xvc2VzdChcIi5idWlsZGVyLWxheW91dC1pdGVtXCIpIGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgICBpZiAod3JhcHBlciAmJiB3cmFwcGVyICE9PSBsYXlvdXRJdGVtKSB7XG4gICAgICBbXG4gICAgICAgIFtcInBvc2l0aW9uXCIsIFwic3RhdGljXCJdLFxuICAgICAgICBbXCJ3aWR0aFwiLCBcIjBcIl0sXG4gICAgICAgIFtcImhlaWdodFwiLCBcIjBcIl0sXG4gICAgICAgIFtcIm1hcmdpblwiLCBcIjBcIl0sXG4gICAgICAgIFtcInBhZGRpbmdcIiwgXCIwXCJdLFxuICAgICAgICBbXCJvdmVyZmxvd1wiLCBcInZpc2libGVcIl0sXG4gICAgICAgIFtcInBvaW50ZXItZXZlbnRzXCIsIFwibm9uZVwiXSxcbiAgICAgIF0uZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIHdyYXBwZXIuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSwgXCJpbXBvcnRhbnRcIik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpbGxNYXBSZW5kZXJlcihyZW5kZXJlcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCByYWRpdXMgPSBNQVBfUEFORUxfQk9SREVSX1JBRElVUztcbiAgICBbXG4gICAgICBbXCJwb3NpdGlvblwiLCBcInJlbGF0aXZlXCJdLFxuICAgICAgW1wid2lkdGhcIiwgXCIxMDAlXCJdLFxuICAgICAgW1wiaGVpZ2h0XCIsIFwiMTAwJVwiXSxcbiAgICAgIFtcInRvcFwiLCBcIjBcIl0sXG4gICAgICBbXCJsZWZ0XCIsIFwiMFwiXSxcbiAgICAgIFtcIm1hcmdpblwiLCBcIjBcIl0sXG4gICAgICBbXCJwYWRkaW5nXCIsIFwiMFwiXSxcbiAgICAgIFtcInRyYW5zZm9ybVwiLCBcIm5vbmVcIl0sXG4gICAgICBbXCJib3JkZXItcmFkaXVzXCIsIHJhZGl1c10sXG4gICAgICBbXCJvdmVyZmxvd1wiLCBcImhpZGRlblwiXSxcbiAgICAgIFtcImJveC1zaXppbmdcIiwgXCJib3JkZXItYm94XCJdLFxuICAgIF0uZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICByZW5kZXJlci5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlLCBcImltcG9ydGFudFwiKTtcbiAgICB9KTtcblxuICAgIHJlbmRlcmVyXG4gICAgICAucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXG4gICAgICAgIFwiLmVzcmktdmlldywgLmVzcmktdmlldy1yb290LCAuZXNyaS12aWV3LXN1cmZhY2UsIC53aWRnZXQtbWFwXCIsXG4gICAgICApXG4gICAgICAuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICBub2RlLnN0eWxlLnNldFByb3BlcnR5KFwiYm9yZGVyLXJhZGl1c1wiLCByYWRpdXMsIFwiaW1wb3J0YW50XCIpO1xuICAgICAgICBub2RlLnN0eWxlLnNldFByb3BlcnR5KFwib3ZlcmZsb3dcIiwgXCJoaWRkZW5cIiwgXCJpbXBvcnRhbnRcIik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJNYW5hZ2VkRWxlbWVudCh0YXJnZXQ6IEhUTUxFbGVtZW50IHwgbnVsbCk6IHZvaWQge1xuICAgIGlmICghdGFyZ2V0KSByZXR1cm47XG4gICAgW1xuICAgICAgXCJwb3NpdGlvblwiLFxuICAgICAgXCJ0b3BcIixcbiAgICAgIFwibGVmdFwiLFxuICAgICAgXCJyaWdodFwiLFxuICAgICAgXCJib3R0b21cIixcbiAgICAgIFwid2lkdGhcIixcbiAgICAgIFwiaGVpZ2h0XCIsXG4gICAgICBcInotaW5kZXhcIixcbiAgICAgIFwibWFyZ2luXCIsXG4gICAgICBcInBhZGRpbmdcIixcbiAgICAgIFwidHJhbnNmb3JtXCIsXG4gICAgICBcImJvcmRlci1yYWRpdXNcIixcbiAgICAgIFwib3ZlcmZsb3dcIixcbiAgICAgIFwiYm94LXNpemluZ1wiLFxuICAgICAgXCJwb2ludGVyLWV2ZW50c1wiLFxuICAgIF0uZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoa2V5KSk7XG4gICAgT2JqZWN0LnZhbHVlcyhNQU5BR0VEX01BUF9DTEFTUykuZm9yRWFjaCgoY2xzKSA9PiB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShjbHMpKTtcbiAgICBPYmplY3QudmFsdWVzKE1BTkFHRURfUkVOREVSRVJfQ0xBU1MpLmZvckVhY2goKGNscykgPT5cbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGNscyksXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXIoKTogdm9pZCB7XG4gICAgY29uc3Qgd3JhcHBlciA9IHRoaXMubWFwTGF5b3V0SXRlbT8uY2xvc2VzdChcbiAgICAgIFwiLmJ1aWxkZXItbGF5b3V0LWl0ZW1cIixcbiAgICApIGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgICBpZiAod3JhcHBlciAmJiB3cmFwcGVyICE9PSB0aGlzLm1hcExheW91dEl0ZW0pIHtcbiAgICAgIFtcInBvc2l0aW9uXCIsIFwid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJtYXJnaW5cIiwgXCJwYWRkaW5nXCIsIFwib3ZlcmZsb3dcIiwgXCJwb2ludGVyLWV2ZW50c1wiXS5mb3JFYWNoKFxuICAgICAgICAoa2V5KSA9PiB3cmFwcGVyLnN0eWxlLnJlbW92ZVByb3BlcnR5KGtleSksXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLmNsZWFyTWFuYWdlZEVsZW1lbnQodGhpcy5tYXBMYXlvdXRJdGVtKTtcbiAgICB0aGlzLmNsZWFyTWFuYWdlZEVsZW1lbnQodGhpcy5tYXBXaWRnZXRSZW5kZXJlcik7XG4gICAgdGhpcy5tYXBMYXlvdXRJdGVtID0gbnVsbDtcbiAgICB0aGlzLm1hcFdpZGdldFJlbmRlcmVyID0gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgc3luYygpOiB2b2lkIHtcbiAgICBjb25zdCBzbG90ID0gdGhpcy5vcHRpb25zLmdldFNsb3RFbGVtZW50KCk7XG4gICAgaWYgKCFzbG90KSB7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWFwV2lkZ2V0SWQgPSB0aGlzLmdldFJlc29sdmVkTWFwV2lkZ2V0SWQoKTtcbiAgICBpZiAoIW1hcFdpZGdldElkKSB7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5ub3RpZnlNYXBSZXNvbHZlZChtYXBXaWRnZXRJZCk7XG5cbiAgICBpZiAoIXRoaXMuZ2V0TGlua2VkTWFwV2lkZ2V0SWQoKSkge1xuICAgICAgdGhpcy50cnlBdXRvTGlua01hcFdpZGdldChtYXBXaWRnZXRJZCk7XG4gICAgfVxuXG4gICAgY29uc3QgbGF5b3V0SXRlbSA9IGZpbmRXaWRnZXRMYXlvdXRJdGVtKG1hcFdpZGdldElkKTtcbiAgICBjb25zdCByZW5kZXJlciA9IGZpbmRXaWRnZXRSZW5kZXJlcihtYXBXaWRnZXRJZCk7XG4gICAgaWYgKCFsYXlvdXRJdGVtIHx8ICFyZW5kZXJlcikge1xuICAgICAgLy8gUHVibGlzaGVkIHBvcnRhbDogbWFwIHdpZGdldCBET00gb2Z0ZW4gbW91bnRzIGFmdGVyIHRoZSBkYXNoYm9hcmQg4oCUIGtlZXBcbiAgICAgIC8vIHRoZSBsYXN0IHBvc2l0aW9uZWQgbWFwIGluc3RlYWQgb2YgY2xlYXJpbmcgc3R5bGVzICh0aGF0IHN0cmFuZHMgdGhlIG1hcCkuXG4gICAgICBpZiAodGhpcy5tYXBMYXlvdXRJdGVtICYmIHRoaXMubWFwV2lkZ2V0UmVuZGVyZXIpIHtcbiAgICAgICAgdGhpcy5hcHBseU1hcFNsb3RCb3VuZHModGhpcy5tYXBMYXlvdXRJdGVtLCBzbG90KTtcbiAgICAgICAgdGhpcy5maWxsTWFwUmVuZGVyZXIodGhpcy5tYXBXaWRnZXRSZW5kZXJlcik7XG4gICAgICAgIHRoaXMub3B0aW9ucy5yZXNpemVNYXBWaWV3Py4oKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm1hcExheW91dEl0ZW0gPSBsYXlvdXRJdGVtO1xuICAgIHRoaXMubWFwV2lkZ2V0UmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICBsYXlvdXRJdGVtLmNsYXNzTGlzdC5hZGQoTUFOQUdFRF9NQVBfQ0xBU1NbdGhpcy5vcHRpb25zLnNjb3BlXSk7XG4gICAgcmVuZGVyZXIuY2xhc3NMaXN0LmFkZChNQU5BR0VEX1JFTkRFUkVSX0NMQVNTW3RoaXMub3B0aW9ucy5zY29wZV0pO1xuICAgIHRoaXMuYXBwbHlNYXBTbG90Qm91bmRzKGxheW91dEl0ZW0sIHNsb3QpO1xuICAgIHRoaXMuZmlsbE1hcFJlbmRlcmVyKHJlbmRlcmVyKTtcbiAgICB0aGlzLm9wdGlvbnMucmVzaXplTWFwVmlldz8uKCk7XG4gIH1cbn1cbiIsIi8qKiBTaGFyZWQgdmVnZXRhdGlvbiBpbmRleCBsZWdlbmQgY29uZmlnIGZvciBHcmFmZiBncmFwaC90YWJsZSB2aWV3cy4gKi9cbmV4cG9ydCB0eXBlIEdyYWZmSW5kZXhLZXkgPSBcIm5kdmlcIiB8IFwic2F2aVwiIHwgXCJydmlcIiB8IFwiY2lcIiB8IFwiZXZpXCIgfCBcIm5kd2lcIjtcblxuZXhwb3J0IGludGVyZmFjZSBHcmFmZkluZGV4QnV0dG9uIHtcbiAga2V5OiBHcmFmZkluZGV4S2V5O1xuICBsYWJlbDogc3RyaW5nO1xuICBjb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgR1JBRkZfSU5ERVhfQlVUVE9OUzogR3JhZmZJbmRleEJ1dHRvbltdID0gW1xuICB7IGtleTogXCJuZHZpXCIsIGxhYmVsOiBcIk5EVklcIiwgY29sb3I6IFwiIzAwZDA4NFwiIH0sXG4gIHsga2V5OiBcInNhdmlcIiwgbGFiZWw6IFwiU0FWSVwiLCBjb2xvcjogXCIjN2FhNWZmXCIgfSxcbiAgeyBrZXk6IFwicnZpXCIsIGxhYmVsOiBcIlJWSVwiLCBjb2xvcjogXCIjZmZiMzQ3XCIgfSxcbiAgeyBrZXk6IFwiY2lcIiwgbGFiZWw6IFwiQ0lcIiwgY29sb3I6IFwiI2M3OGJmZlwiIH0sXG4gIHsga2V5OiBcImV2aVwiLCBsYWJlbDogXCJFVklcIiwgY29sb3I6IFwiI2ZmNGQ4ZFwiIH0sXG4gIHsga2V5OiBcIm5kd2lcIiwgbGFiZWw6IFwiTkRXSVwiLCBjb2xvcjogXCIjMmVjNGYxXCIgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBHUkFGRl9JTkRFWF9PUkRFUjogR3JhZmZJbmRleEtleVtdID0gR1JBRkZfSU5ERVhfQlVUVE9OUy5tYXAoXG4gIChpdGVtKSA9PiBpdGVtLmtleSxcbik7XG5cbi8qKiBSZXB1YmxpYyByZWdpb25hbCB0aW1lc2VyaWVzIEFWRyBmaWVsZCBhbGxvdy1saXN0LiAqL1xuZXhwb3J0IGNvbnN0IFJFUFVCTElDX1RJTUVTRVJJRVNfSU5ERVhfRklFTERTID0gW1xuICBcIm5kdmlcIixcbiAgXCJzYXZpXCIsXG4gIFwiZXZpXCIsXG4gIFwicnZpXCIsXG4gIFwiY2lcIixcbiAgXCJuZHdpXCIsXG5dIGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBSZXB1YmxpY1RpbWVzZXJpZXNJbmRleEZpZWxkID1cbiAgKHR5cGVvZiBSRVBVQkxJQ19USU1FU0VSSUVTX0lOREVYX0ZJRUxEUylbbnVtYmVyXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVwdWJsaWNUaW1lc2VyaWVzSW5kZXhGaWVsZChcbiAgdmFsdWU6IHN0cmluZyxcbik6IHZhbHVlIGlzIFJlcHVibGljVGltZXNlcmllc0luZGV4RmllbGQge1xuICByZXR1cm4gKFJFUFVCTElDX1RJTUVTRVJJRVNfSU5ERVhfRklFTERTIGFzIHJlYWRvbmx5IHN0cmluZ1tdKS5pbmNsdWRlcyhcbiAgICB2YWx1ZSxcbiAgKTtcbn1cbiIsImV4cG9ydCB0eXBlIExhbmdDb2RlID0gXCJ1el9sYXRcIiB8IFwidXpfY3lyXCIgfCBcInJ1XCIgfCBcImVuXCI7XG5cbnR5cGUgRGljdCA9IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG50eXBlIEJ1bmRsZSA9IFJlY29yZDxMYW5nQ29kZSwgRGljdD47XG5cbmNvbnN0IE1FU1NBR0VTOiBCdW5kbGUgPSB7XG4gIHV6X2xhdDoge1xuICAgIFwidGl0bGUuZGVmYXVsdFwiOiBcIlBvbGlnb24gbWEnbHVtb3RpXCIsXG4gICAgXCJ0aXRsZS5hdHRyaWJ1dGVzXCI6IFwiQXRyaWJ1dCBtYSdsdW1vdGxhcmlcIixcbiAgICBcInRpdGxlLnJlY29yZFwiOiBcIk1hJ2x1bW90ICN7e2lkfX1cIixcbiAgICBcImFjdGlvbi5waW5cIjogXCJQb3B1cG5pIHl1cW9yaS1vJ25nZ2EgcWFkYXNoXCIsXG4gICAgXCJhY3Rpb24udW5waW5cIjogXCJQb3B1cG5pIHllY2hpc2hcIixcbiAgICBcImFjdGlvbi5taW5pbWl6ZVwiOiBcIlBvcHVwbmkgeWlnJ2lzaFwiLFxuICAgIFwiYWN0aW9uLmV4cGFuZFwiOiBcIlBvcHVwbmkgb2NoaXNoXCIsXG4gICAgXCJzdGF0dXMud2FybmluZ1wiOiBcIk9nb2hsYW50aXJpc2hcIixcbiAgICBcInN0YXR1cy5sb2FkaW5nRmVhdHVyZVwiOiBcIk9ieWVrdCBtYSdsdW1vdGxhcmkgeXVrbGFubW9xZGEuLi5cIixcbiAgICBcInN0YXR1cy5ub0NvbmZpZ3VyZWREYXRhXCI6IFwiU296bGFuZ2FuIG1heWRvbmxhciB1Y2h1biBtYSdsdW1vdCB0b3BpbG1hZGlcIixcbiAgICBcInN0YXR1cy5ub0ZpZWxkc1wiOlxuICAgICAgXCJNYXlkb25sYXIgc296bGFubWFnYW4uIFZpZGpldCBzb3psYW1hbGFyaWRhIG1heWRvbmxhcm5pIHRhbmxhbmcuXCIsXG4gICAgXCJhdHRhY2htZW50cy50aXRsZVwiOiBcIlJhc21sYXIgdmEgZmF5bGxhclwiLFxuICAgIFwic3RhdHVzLmxvYWRpbmdBdHRhY2htZW50c1wiOiBcIlFvJ3NoaW1jaGFsYXIgeXVrbGFubW9xZGEuLi5cIixcbiAgICBcInN0YXR1cy5ub0F0dGFjaG1lbnRzXCI6IFwiUW8nc2hpbWNoYWxhciB5bydxXCIsXG4gICAgXCJhdHRhY2htZW50LmltYWdlRmFsbGJhY2tcIjogXCJSYXNtXCIsXG4gICAgXCJhdHRhY2htZW50LmZpbGVGYWxsYmFja1wiOiBcImZheWwte3tpZH19XCIsXG4gICAgXCJhdHRhY2htZW50LmRvd25sb2FkXCI6IFwiWXVrbGFiIG9saXNoXCIsXG4gICAgXCJzdGF0dXMuY2xpY2tQb2x5Z29uXCI6XG4gICAgICBcIlRhZnNpbG90bGFybmkga28ncmlzaCB1Y2h1biB4YXJpdGFkYSBwb2xpZ29ubmkgYm9zaW5nXCIsXG4gICAgXCJzdGF0dXMucmVhZHlcIjogXCJQb2x5Z29uIEluc3BlY3RvciB0YXl5b3JcIixcbiAgICBcInN0YXR1cy5sb2FkaW5nXCI6IFwiWXVrbGFubW9xZGEuLi5cIixcbiAgICBcImVycm9yLm5vTWFwVmlld1wiOiBcIlhhcml0YSBrbydyaW5pc2hpIHRvcGlsbWFkaVwiLFxuICAgIFwiZXJyb3Iubm9MYXllcnNTZWxlY3RlZFwiOlxuICAgICAgXCJRYXRsYW0gdGFubGFubWFnYW4uIFNvemxhbWFsYXJkYSBrYW1pZGEgYml0dGEgRmVhdHVyZSBMYXllciB0YW5sYW5nLlwiLFxuICAgIFwiZXJyb3Iuc2VsZWN0ZWRMYXllcnNNaXNzaW5nXCI6XG4gICAgICBcIlRhbmxhbmdhbiBxYXRsYW1sYXIgeGFyaXRhZGEgdG9waWxtYWRpLiBUYW5sYW5nYW4gTWFwIHZpZGpldCBpY2hpZGEgc2h1IHFhdGxhbWxhciBib3JsaWdpbmkgdGVrc2hpcmluZy5cIixcbiAgICBcImVycm9yLm9iamVjdElkRmllbGRNaXNzaW5nXCI6XG4gICAgICBcIkJvc2lsZ2FuIHFhdGxhbWRhIE9iamVjdElkIG1heWRvbmkgdG9waWxtYWRpLlwiLFxuICAgIFwiZXJyb3Iub2JqZWN0SWRNaXNzaW5nXCI6IFwiT2JqZWN0SWQgdG9waWxtYWRpLiBLdXRpbGdhbiBtYXlkb246IHt7ZmllbGR9fVwiLFxuICAgIFwiZXJyb3IuZmVhdHVyZUJ5T2JqZWN0SWRNaXNzaW5nXCI6IFwiT2JqZWN0SWQgYm8neWljaGEgb2J5ZWt0IHRvcGlsbWFkaS5cIixcbiAgICBcImVycm9yLmNvbmZpZ3VyZWRGaWVsZE1pc3NpbmdcIjpcbiAgICAgIFwiQmEnemkgc296bGFuZ2FuIG1heWRvbmxhciB0b3BpbG1hZGk6IHt7ZmllbGRzfX1cIixcbiAgICBcImVycm9yLm5vRGF0YUZvckNvbmZpZ3VyZWRGaWVsZHNcIjpcbiAgICAgIFwiU296bGFuZ2FuIG1heWRvbmxhciB1Y2h1biBtYSdsdW1vdCBtYXZqdWQgZW1hc1wiLFxuICAgIFwiZXJyb3IudW5leHBlY3RlZFwiOiBcIkt1dGlsbWFnYW4geGF0bzoge3ttZXNzYWdlfX1cIixcbiAgICBcImluZGljZXMudGl0bGVcIjogXCJWZWdldGF0c2l5YSBpbmRla3NsYXJpXCIsXG4gICAgXCJpbmRpY2VzLmxvYWRpbmdcIjogXCJJbmRla3NsYXIgeXVrbGFubW9xZGEuLi5cIixcbiAgICBcImluZGljZXMubm9uZVwiOiBcIkJ1IHBvbGlnb24gdWNodW4gaW5kZWtzIG1hJ2x1bW90aSB5bydxXCIsXG4gIH0sXG4gIHV6X2N5cjoge1xuICAgIFwidGl0bGUuYXR0cmlidXRlc1wiOiBcItCQ0YLRgNC40LHRg9GCINC80LDRitC70YPQvNC+0YLQu9Cw0YDQuFwiLFxuICAgIFwidGl0bGUuZGVmYXVsdFwiOiBcItCf0L7Qu9C40LPQvtC9INC80LDRitC70YPQvNC+0YLQuFwiLFxuICAgIFwidGl0bGUucmVjb3JkXCI6IFwi0JzQsNGK0LvRg9C80L7RgiAje3tpZH19XCIsXG4gICAgXCJhY3Rpb24ucGluXCI6IFwi0J/QvtC/0LDQv9C90Lgg0Y7Sm9C+0YDQuC3RntC90LPQs9CwINKb0LDQtNCw0YhcIixcbiAgICBcImFjdGlvbi51bnBpblwiOiBcItCf0L7Qv9Cw0L/QvdC4INC10YfQuNGIXCIsXG4gICAgXCJhY3Rpb24ubWluaW1pemVcIjogXCLQn9C+0L/QsNC/0L3QuCDQudC40pPQuNGIXCIsXG4gICAgXCJhY3Rpb24uZXhwYW5kXCI6IFwi0J/QvtC/0LDQv9C90Lgg0L7Rh9C40YhcIixcbiAgICBcInN0YXR1cy53YXJuaW5nXCI6IFwi0J7Qs9C+0rPQu9Cw0L3RgtC40YDQuNGIXCIsXG4gICAgXCJzdGF0dXMubG9hZGluZ0ZlYXR1cmVcIjogXCLQntCx0YrQtdC60YIg0LzQsNGK0LvRg9C80L7RgtC70LDRgNC4INGO0LrQu9Cw0L3QvNC+0pvQtNCwLi4uXCIsXG4gICAgXCJzdGF0dXMubm9Db25maWd1cmVkRGF0YVwiOiBcItCh0L7Qt9C70LDQvdCz0LDQvSDQvNCw0LnQtNC+0L3Qu9Cw0YAg0YPRh9GD0L0g0LzQsNGK0LvRg9C80L7RgiDRgtC+0L/QuNC70LzQsNC00LhcIixcbiAgICBcInN0YXR1cy5ub0ZpZWxkc1wiOlxuICAgICAgXCLQnNCw0LnQtNC+0L3Qu9Cw0YAg0YHQvtC30LvQsNC90LzQsNCz0LDQvS4g0JLQuNC00LbQtdGCINGB0L7Qt9C70LDQvNCw0LvQsNGA0LjQtNCwINC80LDQudC00L7QvdC70LDRgNC90Lgg0YLQsNC90LvQsNC90LMuXCIsXG4gICAgXCJhdHRhY2htZW50cy50aXRsZVwiOiBcItCg0LDRgdC80LvQsNGAINCy0LAg0YTQsNC50LvQu9Cw0YBcIixcbiAgICBcInN0YXR1cy5sb2FkaW5nQXR0YWNobWVudHNcIjogXCLSmtGe0YjQuNC80YfQsNC70LDRgCDRjtC60LvQsNC90LzQvtKb0LTQsC4uLlwiLFxuICAgIFwic3RhdHVzLm5vQXR0YWNobWVudHNcIjogXCLSmtGe0YjQuNC80YfQsNC70LDRgCDQudGe0ptcIixcbiAgICBcImF0dGFjaG1lbnQuaW1hZ2VGYWxsYmFja1wiOiBcItCg0LDRgdC8XCIsXG4gICAgXCJhdHRhY2htZW50LmZpbGVGYWxsYmFja1wiOiBcItGE0LDQudC7LXt7aWR9fVwiLFxuICAgIFwiYXR0YWNobWVudC5kb3dubG9hZFwiOiBcItCu0LrQu9Cw0LEg0L7Qu9C40YhcIixcbiAgICBcInN0YXR1cy5jbGlja1BvbHlnb25cIjogXCLQotCw0YTRgdC40LvQvtGC0LvQsNGA0L3QuCDQutGe0YDQuNGIINGD0YfRg9C9INGF0LDRgNC40YLQsNC00LAg0L/QvtC70LjQs9C+0L3QvdC4INCx0L7RgdC40L3Qs1wiLFxuICAgIFwic3RhdHVzLnJlYWR5XCI6IFwiUG9seWdvbiBJbnNwZWN0b3Ig0YLQsNC50ZHRgFwiLFxuICAgIFwic3RhdHVzLmxvYWRpbmdcIjogXCLQrtC60LvQsNC90LzQvtKb0LTQsC4uLlwiLFxuICAgIFwiZXJyb3Iubm9NYXBWaWV3XCI6IFwi0KXQsNGA0LjRgtCwINC60Z7RgNC40L3QuNGI0Lgg0YLQvtC/0LjQu9C80LDQtNC4XCIsXG4gICAgXCJlcnJvci5ub0xheWVyc1NlbGVjdGVkXCI6XG4gICAgICBcItKa0LDRgtC70LDQvCDRgtCw0L3Qu9Cw0L3QvNCw0LPQsNC9LiDQodC+0LfQu9Cw0LzQsNC70LDRgNC00LAg0LrQsNC80LjQtNCwINCx0LjRgtGC0LAgRmVhdHVyZSBMYXllciDRgtCw0L3Qu9Cw0L3Qsy5cIixcbiAgICBcImVycm9yLnNlbGVjdGVkTGF5ZXJzTWlzc2luZ1wiOlxuICAgICAgXCLQotCw0L3Qu9Cw0L3Qs9Cw0L0g0pvQsNGC0LvQsNC80LvQsNGAINGF0LDRgNC40YLQsNC00LAg0YLQvtC/0LjQu9C80LDQtNC4LiDQotCw0L3Qu9Cw0L3Qs9Cw0L0gTWFwINCy0LjQtNC20LXRgiDQuNGH0LjQtNCwINGI0YMg0pvQsNGC0LvQsNC80LvQsNGAINCx0L7RgNC70LjQs9C40L3QuCDRgtC10LrRiNC40YDQuNC90LMuXCIsXG4gICAgXCJlcnJvci5vYmplY3RJZEZpZWxkTWlzc2luZ1wiOlxuICAgICAgXCLQkdC+0YHQuNC70LPQsNC9INKb0LDRgtC70LDQvNC00LAgT2JqZWN0SWQg0LzQsNC50LTQvtC90Lgg0YLQvtC/0LjQu9C80LDQtNC4LlwiLFxuICAgIFwiZXJyb3Iub2JqZWN0SWRNaXNzaW5nXCI6IFwiT2JqZWN0SWQg0YLQvtC/0LjQu9C80LDQtNC4LiDQmtGD0YLQuNC70LPQsNC9INC80LDQudC00L7QvToge3tmaWVsZH19XCIsXG4gICAgXCJlcnJvci5mZWF0dXJlQnlPYmplY3RJZE1pc3NpbmdcIjogXCJPYmplY3RJZCDQsdGe0LnQuNGH0LAg0L7QsdGK0LXQutGCINGC0L7Qv9C40LvQvNCw0LTQuC5cIixcbiAgICBcImVycm9yLmNvbmZpZ3VyZWRGaWVsZE1pc3NpbmdcIjpcbiAgICAgIFwi0JHQsNGK0LfQuCDRgdC+0LfQu9Cw0L3Qs9Cw0L0g0LzQsNC50LTQvtC90LvQsNGAINGC0L7Qv9C40LvQvNCw0LTQuDoge3tmaWVsZHN9fVwiLFxuICAgIFwiZXJyb3Iubm9EYXRhRm9yQ29uZmlndXJlZEZpZWxkc1wiOlxuICAgICAgXCLQodC+0LfQu9Cw0L3Qs9Cw0L0g0LzQsNC50LTQvtC90LvQsNGAINGD0YfRg9C9INC80LDRitC70YPQvNC+0YIg0LzQsNCy0LbRg9C0INGN0LzQsNGBXCIsXG4gICAgXCJlcnJvci51bmV4cGVjdGVkXCI6IFwi0JrRg9GC0LjQu9C80LDQs9Cw0L0g0YXQsNGC0L46IHt7bWVzc2FnZX19XCIsXG4gICAgXCJpbmRpY2VzLnRpdGxlXCI6IFwi0JLQtdCz0LXRgtCw0YbQuNGPINC40L3QtNC10LrRgdC70LDRgNC4XCIsXG4gICAgXCJpbmRpY2VzLmxvYWRpbmdcIjogXCLQmNC90LTQtdC60YHQu9Cw0YAg0Y7QutC70LDQvdC80L7Sm9C00LAuLi5cIixcbiAgICBcImluZGljZXMubm9uZVwiOiBcItCR0YMg0L/QvtC70LjQs9C+0L0g0YPRh9GD0L0g0LjQvdC00LXQutGBINC80LDRitC70YPQvNC+0YLQuCDQudGe0ptcIixcbiAgfSxcbiAgcnU6IHtcbiAgICBcInRpdGxlLmF0dHJpYnV0ZXNcIjogXCLQkNGC0YDQuNCx0YPRgtC40LLQvdGL0LUg0LTQsNC90L3Ri9C1XCIsXG4gICAgXCJ0aXRsZS5kZWZhdWx0XCI6IFwi0JjQvdGE0L7RgNC80LDRhtC40Y8g0L4g0L/QvtC70LjQs9C+0L3QtVwiLFxuICAgIFwidGl0bGUucmVjb3JkXCI6IFwi0JfQsNC/0LjRgdGMICN7e2lkfX1cIixcbiAgICBcImFjdGlvbi5waW5cIjogXCLQl9Cw0LrRgNC10L/QuNGC0Ywg0L7QutC90L4g0YHQv9GA0LDQstCwINGB0LLQtdGA0YXRg1wiLFxuICAgIFwiYWN0aW9uLnVucGluXCI6IFwi0J7RgtC60YDQtdC/0LjRgtGMINC+0LrQvdC+XCIsXG4gICAgXCJhY3Rpb24ubWluaW1pemVcIjogXCLQodCy0LXRgNC90YPRgtGMINC+0LrQvdC+XCIsXG4gICAgXCJhY3Rpb24uZXhwYW5kXCI6IFwi0KDQsNC30LLQtdGA0L3Rg9GC0Ywg0L7QutC90L5cIixcbiAgICBcInN0YXR1cy53YXJuaW5nXCI6IFwi0J/RgNC10LTRg9C/0YDQtdC20LTQtdC90LjQtVwiLFxuICAgIFwic3RhdHVzLmxvYWRpbmdGZWF0dXJlXCI6IFwi0JfQsNCz0YDRg9C30LrQsCDQtNCw0L3QvdGL0YUg0L7QsdGK0LXQutGC0LAuLi5cIixcbiAgICBcInN0YXR1cy5ub0NvbmZpZ3VyZWREYXRhXCI6IFwi0J3QtdGCINC00LDQvdC90YvRhSDQtNC70Y8g0L3QsNGB0YLRgNC+0LXQvdC90YvRhSDQv9C+0LvQtdC5XCIsXG4gICAgXCJzdGF0dXMubm9GaWVsZHNcIjogXCLQn9C+0LvRjyDQvdC1INC90LDRgdGC0YDQvtC10L3Riy4g0JLRi9Cx0LXRgNC40YLQtSDQv9C+0LvRjyDQsiDQvdCw0YHRgtGA0L7QudC60LDRhSDQstC40LTQttC10YLQsC5cIixcbiAgICBcImF0dGFjaG1lbnRzLnRpdGxlXCI6IFwi0JjQt9C+0LHRgNCw0LbQtdC90LjRjyDQuCDRhNCw0LnQu9GLXCIsXG4gICAgXCJzdGF0dXMubG9hZGluZ0F0dGFjaG1lbnRzXCI6IFwi0JfQsNCz0YDRg9C30LrQsCDQstC70L7QttC10L3QuNC5Li4uXCIsXG4gICAgXCJzdGF0dXMubm9BdHRhY2htZW50c1wiOiBcItCd0LXRgiDQstC70L7QttC10L3QuNC5XCIsXG4gICAgXCJhdHRhY2htZW50LmltYWdlRmFsbGJhY2tcIjogXCLQmNC30L7QsdGA0LDQttC10L3QuNC1XCIsXG4gICAgXCJhdHRhY2htZW50LmZpbGVGYWxsYmFja1wiOiBcItGE0LDQudC7LXt7aWR9fVwiLFxuICAgIFwiYXR0YWNobWVudC5kb3dubG9hZFwiOiBcItCh0LrQsNGH0LDRgtGMXCIsXG4gICAgXCJzdGF0dXMuY2xpY2tQb2x5Z29uXCI6IFwi0J3QsNC20LzQuNGC0LUg0L3QsCDQv9C+0LvQuNCz0L7QvSDQvdCwINC60LDRgNGC0LUsINGH0YLQvtCx0Ysg0YPQstC40LTQtdGC0Ywg0LTQtdGC0LDQu9C4XCIsXG4gICAgXCJzdGF0dXMucmVhZHlcIjogXCJQb2x5Z29uIEluc3BlY3RvciDQs9C+0YLQvtCyXCIsXG4gICAgXCJzdGF0dXMubG9hZGluZ1wiOiBcItCX0LDQs9GA0YPQt9C60LAuLi5cIixcbiAgICBcImVycm9yLm5vTWFwVmlld1wiOiBcItCS0LjQtCDQutCw0YDRgtGLINC90LUg0L3QsNC50LTQtdC9XCIsXG4gICAgXCJlcnJvci5ub0xheWVyc1NlbGVjdGVkXCI6XG4gICAgICBcItCh0LvQvtC4INC90LUg0LLRi9Cx0YDQsNC90YsuINCSINC90LDRgdGC0YDQvtC50LrQsNGFINCy0YvQsdC10YDQuNGC0LUg0LzQuNC90LjQvNGD0Lwg0L7QtNC40L0gRmVhdHVyZSBMYXllci5cIixcbiAgICBcImVycm9yLnNlbGVjdGVkTGF5ZXJzTWlzc2luZ1wiOlxuICAgICAgXCLQktGL0LHRgNCw0L3QvdGL0LUg0YHQu9C+0Lgg0L3QtSDQvdCw0LnQtNC10L3RiyDQvdCwINC60LDRgNGC0LUuINCf0YDQvtCy0LXRgNGM0YLQtSwg0YfRgtC+INC+0L3QuCDQtdGB0YLRjCDQsiDQstGL0LHRgNCw0L3QvdC+0LwgTWFwINCy0LjQtNC20LXRgtC1LlwiLFxuICAgIFwiZXJyb3Iub2JqZWN0SWRGaWVsZE1pc3NpbmdcIjogXCLQkiDQstGL0LHRgNCw0L3QvdC+0Lwg0YHQu9C+0LUg0L3QtSDQvdCw0LnQtNC10L3QviDQv9C+0LvQtSBPYmplY3RJZC5cIixcbiAgICBcImVycm9yLm9iamVjdElkTWlzc2luZ1wiOiBcIk9iamVjdElkINC90LUg0L3QsNC50LTQtdC9LiDQntC20LjQtNCw0LXQvNC+0LUg0L/QvtC70LU6IHt7ZmllbGR9fVwiLFxuICAgIFwiZXJyb3IuZmVhdHVyZUJ5T2JqZWN0SWRNaXNzaW5nXCI6IFwi0J7QsdGK0LXQutGCINC/0L4gT2JqZWN0SWQg0L3QtSDQvdCw0LnQtNC10L0uXCIsXG4gICAgXCJlcnJvci5jb25maWd1cmVkRmllbGRNaXNzaW5nXCI6XG4gICAgICBcItCd0LXQutC+0YLQvtGA0YvQtSDQvdCw0YHRgtGA0L7QtdC90L3Ri9C1INC/0L7Qu9GPINC90LUg0L3QsNC50LTQtdC90Ys6IHt7ZmllbGRzfX1cIixcbiAgICBcImVycm9yLm5vRGF0YUZvckNvbmZpZ3VyZWRGaWVsZHNcIjogXCLQndC10YIg0LTQsNC90L3Ri9GFINC00LvRjyDQvdCw0YHRgtGA0L7QtdC90L3Ri9GFINC/0L7Qu9C10LlcIixcbiAgICBcImVycm9yLnVuZXhwZWN0ZWRcIjogXCLQndC10L/RgNC10LTQstC40LTQtdC90L3QsNGPINC+0YjQuNCx0LrQsDoge3ttZXNzYWdlfX1cIixcbiAgICBcImluZGljZXMudGl0bGVcIjogXCLQmNC90LTQtdC60YHRiyDQstC10LPQtdGC0LDRhtC40LhcIixcbiAgICBcImluZGljZXMubG9hZGluZ1wiOiBcItCX0LDQs9GA0YPQt9C60LAg0LjQvdC00LXQutGB0L7Qsi4uLlwiLFxuICAgIFwiaW5kaWNlcy5ub25lXCI6IFwi0J3QtdGCINC00LDQvdC90YvRhSDQv9C+INC40L3QtNC10LrRgdCw0Lwg0LTQu9GPINGN0YLQvtCz0L4g0L/QvtC70LjQs9C+0L3QsFwiLFxuICB9LFxuICBlbjoge1xuICAgIFwidGl0bGUuYXR0cmlidXRlc1wiOiBcIkF0dHJpYnV0ZSBkYXRhXCIsXG4gICAgXCJ0aXRsZS5kZWZhdWx0XCI6IFwiUG9seWdvbiBpbmZvXCIsXG4gICAgXCJ0aXRsZS5yZWNvcmRcIjogXCJSZWNvcmQgI3t7aWR9fVwiLFxuICAgIFwiYWN0aW9uLnBpblwiOiBcIlBpbiBwb3B1cCB0byB0b3AtcmlnaHRcIixcbiAgICBcImFjdGlvbi51bnBpblwiOiBcIlVucGluIHBvcHVwXCIsXG4gICAgXCJhY3Rpb24ubWluaW1pemVcIjogXCJNaW5pbWl6ZSBwb3B1cFwiLFxuICAgIFwiYWN0aW9uLmV4cGFuZFwiOiBcIkV4cGFuZCBwb3B1cFwiLFxuICAgIFwic3RhdHVzLndhcm5pbmdcIjogXCJXYXJuaW5nXCIsXG4gICAgXCJzdGF0dXMubG9hZGluZ0ZlYXR1cmVcIjogXCJMb2FkaW5nIGZlYXR1cmUgZGF0YS4uLlwiLFxuICAgIFwic3RhdHVzLm5vQ29uZmlndXJlZERhdGFcIjogXCJObyBkYXRhIGF2YWlsYWJsZSBmb3IgY29uZmlndXJlZCBmaWVsZHNcIixcbiAgICBcInN0YXR1cy5ub0ZpZWxkc1wiOlxuICAgICAgXCJObyBmaWVsZHMgY29uZmlndXJlZC4gUGxlYXNlIGNvbmZpZ3VyZSBmaWVsZHMgaW4gd2lkZ2V0IHNldHRpbmdzLlwiLFxuICAgIFwiYXR0YWNobWVudHMudGl0bGVcIjogXCJJbWFnZXMgJiBGaWxlc1wiLFxuICAgIFwic3RhdHVzLmxvYWRpbmdBdHRhY2htZW50c1wiOiBcIkxvYWRpbmcgYXR0YWNobWVudHMuLi5cIixcbiAgICBcInN0YXR1cy5ub0F0dGFjaG1lbnRzXCI6IFwiTm8gYXR0YWNobWVudHNcIixcbiAgICBcImF0dGFjaG1lbnQuaW1hZ2VGYWxsYmFja1wiOiBcIkltYWdlXCIsXG4gICAgXCJhdHRhY2htZW50LmZpbGVGYWxsYmFja1wiOiBcImF0dGFjaG1lbnQte3tpZH19XCIsXG4gICAgXCJhdHRhY2htZW50LmRvd25sb2FkXCI6IFwiRG93bmxvYWRcIixcbiAgICBcInN0YXR1cy5jbGlja1BvbHlnb25cIjogXCJDbGljayBhIHBvbHlnb24gb24gdGhlIG1hcCB0byBzZWUgaXRzIGRldGFpbHNcIixcbiAgICBcInN0YXR1cy5yZWFkeVwiOiBcIlBvbHlnb24gSW5zcGVjdG9yIFJlYWR5XCIsXG4gICAgXCJzdGF0dXMubG9hZGluZ1wiOiBcIkxvYWRpbmcuLi5cIixcbiAgICBcImVycm9yLm5vTWFwVmlld1wiOiBcIk5vIG1hcCB2aWV3IHByb3ZpZGVkXCIsXG4gICAgXCJlcnJvci5ub0xheWVyc1NlbGVjdGVkXCI6XG4gICAgICBcIk5vIGxheWVycyBzZWxlY3RlZC4gUGxlYXNlIHNlbGVjdCBvbmUgb3IgbW9yZSBGZWF0dXJlIExheWVycyBpbiBTZXR0aW5ncy5cIixcbiAgICBcImVycm9yLnNlbGVjdGVkTGF5ZXJzTWlzc2luZ1wiOlxuICAgICAgXCJOb25lIG9mIHRoZSBzZWxlY3RlZCBsYXllcnMgd2VyZSBmb3VuZCBvbiB0aGUgbWFwLiBFbnN1cmUgdGhlIGNob3NlbiBsYXllcnMgZXhpc3QgaW4gdGhlIHNlbGVjdGVkIE1hcCB3aWRnZXQuXCIsXG4gICAgXCJlcnJvci5vYmplY3RJZEZpZWxkTWlzc2luZ1wiOiBcIk9iamVjdElkIGZpZWxkIG5vdCBmb3VuZCBmb3IgY2xpY2tlZCBsYXllci5cIixcbiAgICBcImVycm9yLm9iamVjdElkTWlzc2luZ1wiOiBcIk9iamVjdElkIG5vdCBmb3VuZC4gRXhwZWN0ZWQgZmllbGQ6IHt7ZmllbGR9fVwiLFxuICAgIFwiZXJyb3IuZmVhdHVyZUJ5T2JqZWN0SWRNaXNzaW5nXCI6IFwiRmVhdHVyZSBub3QgZm91bmQgYnkgT2JqZWN0SWQuXCIsXG4gICAgXCJlcnJvci5jb25maWd1cmVkRmllbGRNaXNzaW5nXCI6XG4gICAgICBcIlNvbWUgY29uZmlndXJlZCBmaWVsZHMgbm90IGZvdW5kOiB7e2ZpZWxkc319XCIsXG4gICAgXCJlcnJvci5ub0RhdGFGb3JDb25maWd1cmVkRmllbGRzXCI6XG4gICAgICBcIk5vIGRhdGEgYXZhaWxhYmxlIGZvciBjb25maWd1cmVkIGZpZWxkc1wiLFxuICAgIFwiZXJyb3IudW5leHBlY3RlZFwiOiBcIlVuZXhwZWN0ZWQgZXJyb3I6IHt7bWVzc2FnZX19XCIsXG4gICAgXCJpbmRpY2VzLnRpdGxlXCI6IFwiVmVnZXRhdGlvbiBpbmRpY2VzXCIsXG4gICAgXCJpbmRpY2VzLmxvYWRpbmdcIjogXCJMb2FkaW5nIGluZGljZXMuLi5cIixcbiAgICBcImluZGljZXMubm9uZVwiOiBcIk5vIGluZGV4IGRhdGEgZm9yIHRoaXMgcG9seWdvblwiLFxuICB9LFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUxhbmcoaW5wdXQ6IGFueSk6IExhbmdDb2RlIHtcbiAgY29uc3QgcmF3ID0gU3RyaW5nKGlucHV0ID8/IFwiXCIpXG4gICAgLnRyaW0oKVxuICAgIC50b0xvd2VyQ2FzZSgpO1xuXG4gIGlmIChyYXcgPT09IFwiZW5cIiB8fCByYXcgPT09IFwiZW5nXCIgfHwgcmF3ID09PSBcImVuZ2xpc2hcIikgcmV0dXJuIFwiZW5cIjtcbiAgaWYgKHJhdyA9PT0gXCJydVwiIHx8IHJhdyA9PT0gXCJydXNcIiB8fCByYXcgPT09IFwicnVzc2lhblwiKSByZXR1cm4gXCJydVwiO1xuXG4gIGlmIChcbiAgICByYXcgPT09IFwidXpfY3lyXCIgfHxcbiAgICByYXcgPT09IFwidXotY3lyXCIgfHxcbiAgICByYXcgPT09IFwidXpfY3lybFwiIHx8XG4gICAgcmF3ID09PSBcInV6LWN5cmxcIiB8fFxuICAgIHJhdyA9PT0gXCJ1emN5cmxcIiB8fFxuICAgIHJhdyA9PT0gXCJ1el9jeXJpbGxpY1wiIHx8XG4gICAgcmF3ID09PSBcInV6LWN5cmlsbGljXCIgfHxcbiAgICByYXcgPT09IFwiY3lyaWxsaWNcIlxuICApIHtcbiAgICByZXR1cm4gXCJ1el9jeXJcIjtcbiAgfVxuXG4gIGlmIChcbiAgICByYXcgPT09IFwidXpfbGF0XCIgfHxcbiAgICByYXcgPT09IFwidXotbGF0XCIgfHxcbiAgICByYXcgPT09IFwidXpsYXRpblwiIHx8XG4gICAgcmF3ID09PSBcInV6LWxhdGluXCIgfHxcbiAgICByYXcgPT09IFwidXpcIlxuICApIHtcbiAgICByZXR1cm4gXCJ1el9sYXRcIjtcbiAgfVxuXG4gIHJldHVybiBcInV6X2xhdFwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5pdGlhbExhbmcoKTogTGFuZ0NvZGUge1xuICByZXR1cm4gbm9ybWFsaXplTGFuZyhcbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFncmlfYXBwX2xhbmdcIikgfHxcbiAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXBwX2xhbmdcIikgfHxcbiAgICAgIFwidXpfbGF0XCIsXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbml0aWFsVGhlbWUoKTogYm9vbGVhbiB7XG4gIGNvbnN0IHN0b3JlZFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhZ3JpX3YxMV9hcHBfdGhlbWVcIik7XG4gIGlmIChzdG9yZWRUaGVtZSA9PT0gXCJkYXJrXCIpIHJldHVybiB0cnVlO1xuICBpZiAoc3RvcmVkVGhlbWUgPT09IFwibGlnaHRcIikgcmV0dXJuIGZhbHNlO1xuICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgY29uc3QgaXNMaWdodCA9XG4gICAgc3RvcmVkVGhlbWUgPT09IFwibGlnaHRcIiB8fFxuICAgIHJvb3QuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGlnaHQtdGhlbWVcIikgfHxcbiAgICBib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImxpZ2h0LXRoZW1lXCIpIHx8XG4gICAgcm9vdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIpID09PSBcImxpZ2h0XCI7XG4gIHJldHVybiAhaXNMaWdodDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHQoXG4gIGxhbmc6IExhbmdDb2RlLFxuICBrZXk6IHN0cmluZyxcbiAgcGFyYW1zPzogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyPixcbik6IHN0cmluZyB7XG4gIGNvbnN0IGRpY3QgPSBNRVNTQUdFU1tsYW5nXSB8fCBNRVNTQUdFUy51el9sYXQ7XG4gIGNvbnN0IGZhbGxiYWNrID0gTUVTU0FHRVMuZW5ba2V5XSA/PyBrZXk7XG4gIGNvbnN0IHRlbXBsYXRlID0gZGljdFtrZXldID8/IGZhbGxiYWNrO1xuICBpZiAoIXBhcmFtcykgcmV0dXJuIHRlbXBsYXRlO1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyhwYXJhbXMpLnJlZHVjZSgocmVzdWx0LCBwYXJhbUtleSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gU3RyaW5nKHBhcmFtc1twYXJhbUtleV0gPz8gXCJcIik7XG4gICAgcmV0dXJuIHJlc3VsdC5yZXBsYWNlKG5ldyBSZWdFeHAoYFxcXFx7XFxcXHske3BhcmFtS2V5fVxcXFx9XFxcXH1gLCBcImdcIiksIHZhbHVlKTtcbiAgfSwgdGVtcGxhdGUpO1xufVxuIiwiLyoqXHJcbiAqIFB1cmUgZmllbGQgaGVscGVycyBmb3IgUG9wdXBQYW5lbCAobm8gUmVhY3QgLyBtYXAgc2lkZSBlZmZlY3RzKS5cclxuICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplRmllbGRBbGlhcyhmaWVsZDogYW55LCBmYWxsYmFja05hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgY29uc3QgbmFtZSA9IFN0cmluZyhmaWVsZD8ubmFtZSB8fCBmYWxsYmFja05hbWUgfHwgXCJcIikudHJpbSgpO1xyXG4gIGNvbnN0IGFsaWFzID0gU3RyaW5nKFxyXG4gICAgZmllbGQ/LmFsaWFzIHx8IGZpZWxkPy5kaXNwbGF5TmFtZSB8fCBmaWVsZD8ubGFiZWwgfHwgXCJcIixcclxuICApLnRyaW0oKTtcclxuICBpZiAoIWFsaWFzKSByZXR1cm4gbmFtZTtcclxuICByZXR1cm4gYWxpYXM7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFB1cmUgUG9wdXBQYW5lbCBmb3JtYXQgLyBhdHRyaWJ1dGUgaGVscGVycy5cclxuICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmluZEF0dHJpYnV0ZVZhbHVlQ2FzZUluc2Vuc2l0aXZlKFxyXG4gIGF0dHJpYnV0ZXM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCBudWxsIHwgdW5kZWZpbmVkLFxyXG4gIGZpZWxkTmFtZTogc3RyaW5nLFxyXG4pOiBhbnkge1xyXG4gIGlmICghYXR0cmlidXRlcykgcmV0dXJuIG51bGw7XHJcbiAgY29uc3QgdGFyZ2V0ID0gZmllbGROYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZmluZCgoaykgPT4gay50b0xvd2VyQ2FzZSgpID09PSB0YXJnZXQpO1xyXG4gIHJldHVybiBrZXkgPyBhdHRyaWJ1dGVzW2tleV0gOiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZVNtYXJ0KHJhdzogYW55KTogc3RyaW5nIHtcclxuICBpZiAocmF3IGluc3RhbmNlb2YgRGF0ZSkgcmV0dXJuIHJhdy50b0xvY2FsZVN0cmluZygpO1xyXG5cclxuICBpZiAodHlwZW9mIHJhdyA9PT0gXCJudW1iZXJcIiAmJiBpc0Zpbml0ZShyYXcpKSB7XHJcbiAgICBjb25zdCBtcyA9IHJhdyA8IDFlMTIgPyByYXcgKiAxMDAwIDogcmF3O1xyXG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKG1zKTtcclxuICAgIHJldHVybiBpc05hTihkLmdldFRpbWUoKSlcclxuICAgICAgPyBTdHJpbmcocmF3KVxyXG4gICAgICA6IGQudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XHJcbiAgICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgICAgICAgIG1vbnRoOiBcIjItZGlnaXRcIixcclxuICAgICAgICAgIGRheTogXCIyLWRpZ2l0XCIsXHJcbiAgICAgICAgICBob3VyOiBcIjItZGlnaXRcIixcclxuICAgICAgICAgIG1pbnV0ZTogXCIyLWRpZ2l0XCIsXHJcbiAgICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHJhdyA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgY29uc3QgdHJpbW1lZCA9IHJhdy50cmltKCk7XHJcbiAgICBpZiAoL15cXGR7MTAsMTN9JC8udGVzdCh0cmltbWVkKSkgcmV0dXJuIGZvcm1hdERhdGVTbWFydChOdW1iZXIodHJpbW1lZCkpO1xyXG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKHRyaW1tZWQpO1xyXG4gICAgaWYgKCFpc05hTihkLmdldFRpbWUoKSkpIHtcclxuICAgICAgcmV0dXJuIGQudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLCB7XHJcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXHJcbiAgICAgICAgbW9udGg6IFwiMi1kaWdpdFwiLFxyXG4gICAgICAgIGRheTogXCIyLWRpZ2l0XCIsXHJcbiAgICAgICAgaG91cjogXCIyLWRpZ2l0XCIsXHJcbiAgICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gU3RyaW5nKHJhdyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuaWNlQ2hhcnRNYXgodmFsdWU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUodmFsdWUpIHx8IHZhbHVlIDw9IDApIHJldHVybiAxO1xyXG4gIGNvbnN0IHBhZGRlZCA9IHZhbHVlICogMS4wODtcclxuICBjb25zdCBtYWduaXR1ZGUgPSBNYXRoLnBvdygxMCwgTWF0aC5mbG9vcihNYXRoLmxvZzEwKHBhZGRlZCkpKTtcclxuICBjb25zdCBub3JtYWxpemVkID0gcGFkZGVkIC8gbWFnbml0dWRlO1xyXG4gIGxldCBuaWNlID0gMTA7XHJcbiAgaWYgKG5vcm1hbGl6ZWQgPD0gMSkgbmljZSA9IDE7XHJcbiAgZWxzZSBpZiAobm9ybWFsaXplZCA8PSAyKSBuaWNlID0gMjtcclxuICBlbHNlIGlmIChub3JtYWxpemVkIDw9IDUpIG5pY2UgPSA1O1xyXG4gIHJldHVybiBuaWNlICogbWFnbml0dWRlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0Q2hhcnRUaWNrKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gIGlmICghTnVtYmVyLmlzRmluaXRlKHZhbHVlKSkgcmV0dXJuIFwiXCI7XHJcbiAgaWYgKE1hdGguYWJzKHZhbHVlKSA+PSAxMDAwKSByZXR1cm4gYCR7TWF0aC5yb3VuZCh2YWx1ZSl9YDtcclxuICBpZiAoTWF0aC5hYnModmFsdWUpID49IDEwMCkgcmV0dXJuIGAke01hdGgucm91bmQodmFsdWUpfWA7XHJcbiAgaWYgKE51bWJlci5pc0ludGVnZXIodmFsdWUpKSByZXR1cm4gU3RyaW5nKHZhbHVlKTtcclxuICByZXR1cm4gdmFsdWUudG9GaXhlZCgxKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdENoYXJ0VG9vbHRpcFZhbHVlKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gIGlmICghTnVtYmVyLmlzRmluaXRlKHZhbHVlKSkgcmV0dXJuIFwiXCI7XHJcbiAgaWYgKE51bWJlci5pc0ludGVnZXIodmFsdWUpKSB7XHJcbiAgICByZXR1cm4gdmFsdWUudG9Mb2NhbGVTdHJpbmcoXCJydS1SVVwiKS5yZXBsYWNlKC9bXFx1MDBhMFxcdTIwMmZdL2csIFwiIFwiKTtcclxuICB9XHJcbiAgcmV0dXJuIHZhbHVlXHJcbiAgICAudG9Mb2NhbGVTdHJpbmcoXCJydS1SVVwiLCB7XHJcbiAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMSxcclxuICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAxLFxyXG4gICAgfSlcclxuICAgIC5yZXBsYWNlKC9bXFx1MDBhMFxcdTIwMmZdL2csIFwiIFwiKVxyXG4gICAgLnJlcGxhY2UoLywvZywgXCIuXCIpO1xyXG59XHJcblxyXG4vKiogQXJjR0lTIGZpZWxkIHR5cGUgZ3VhcmQgZm9yIHBvcHVwIGRhdGUgZm9ybWF0dGluZy4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRXNyaURhdGVGaWVsZFR5cGUodHlwZTogdW5rbm93bik6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IHQgPSBTdHJpbmcodHlwZSB8fCBcIlwiKTtcclxuICByZXR1cm4gKFxyXG4gICAgdCA9PT0gXCJkYXRlXCIgfHxcclxuICAgIHQgPT09IFwidGltZXN0YW1wLW9mZnNldFwiIHx8XHJcbiAgICB0ID09PSBcImRhdGUtb25seVwiIHx8XHJcbiAgICB0ID09PSBcInRpbWUtb25seVwiXHJcbiAgKTtcclxufVxyXG5cclxuLyoqIERpc3BsYXkgc3RyaW5nIGZvciBhIHBvcHVwIGF0dHJpYnV0ZSBjZWxsLiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UG9wdXBBdHRyaWJ1dGVWYWx1ZShcclxuICByYXc6IGFueSxcclxuICBvcHRzOiB7XHJcbiAgICBpc0RhdGVGaWVsZDogYm9vbGVhbjtcclxuICAgIGZvcm1hdERhdGU6ICh2YWx1ZTogYW55KSA9PiBzdHJpbmc7XHJcbiAgfSxcclxuKTogc3RyaW5nIHtcclxuICBpZiAocmF3ID09PSBudWxsIHx8IHJhdyA9PT0gdW5kZWZpbmVkIHx8IHJhdyA9PT0gXCJcIikgcmV0dXJuIFwi4oCUXCI7XHJcblxyXG4gIGlmIChvcHRzLmlzRGF0ZUZpZWxkKSByZXR1cm4gb3B0cy5mb3JtYXREYXRlKHJhdyk7XHJcbiAgaWYgKFxyXG4gICAgKHR5cGVvZiByYXcgPT09IFwibnVtYmVyXCIgJiYgcmF3ID4gMWU5ICYmIHJhdyA8IDFlMTQpIHx8XHJcbiAgICAodHlwZW9mIHJhdyA9PT0gXCJzdHJpbmdcIiAmJiAvXlxcZHsxMCwxM30kLy50ZXN0KHJhdykpXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gb3B0cy5mb3JtYXREYXRlKHJhdyk7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHJhdyA9PT0gXCJudW1iZXJcIiAmJiBpc0Zpbml0ZShyYXcpKSB7XHJcbiAgICByZXR1cm4gcmF3XHJcbiAgICAgIC50b0xvY2FsZVN0cmluZyhcInJ1LVJVXCIpXHJcbiAgICAgIC5yZXBsYWNlKC9bXFx1MDBhMFxcdTIwMmZdL2csIFwiIFwiKVxyXG4gICAgICAucmVwbGFjZSgvLC9nLCBcIi5cIik7XHJcbiAgfVxyXG4gIGlmIChBcnJheS5pc0FycmF5KHJhdykpIHJldHVybiByYXcuam9pbihcIiwgXCIpO1xyXG4gIGlmICh0eXBlb2YgcmF3ID09PSBcIm9iamVjdFwiKSByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmF3KTtcclxuICByZXR1cm4gU3RyaW5nKHJhdyk7XHJcbn1cclxuIiwiLyoqXG4gKiBAbGljZW5zZSBsdWNpZGUtcmVhY3QgdjEuMjMuMCAtIElTQ1xuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIElTQyBsaWNlbnNlLlxuICogU2VlIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IGNyZWF0ZUx1Y2lkZUljb24gZnJvbSAnLi4vY3JlYXRlTHVjaWRlSWNvbi5tanMnO1xuXG5jb25zdCBfX2ljb25Ob2RlID0gW1xuICBbXCJwYXRoXCIsIHsgZDogXCJNOCAydjRcIiwga2V5OiBcIjFjbXB5bVwiIH1dLFxuICBbXCJwYXRoXCIsIHsgZDogXCJNMTYgMnY0XCIsIGtleTogXCI0bTgxdmtcIiB9XSxcbiAgW1wicmVjdFwiLCB7IHdpZHRoOiBcIjE4XCIsIGhlaWdodDogXCIxOFwiLCB4OiBcIjNcIiwgeTogXCI0XCIsIHJ4OiBcIjJcIiwga2V5OiBcIjFob3BjeVwiIH1dLFxuICBbXCJwYXRoXCIsIHsgZDogXCJNMyAxMGgxOFwiLCBrZXk6IFwiOHRvZW44XCIgfV0sXG4gIFtcInBhdGhcIiwgeyBkOiBcIk04IDE0aC4wMVwiLCBrZXk6IFwiNjQyM2JoXCIgfV0sXG4gIFtcInBhdGhcIiwgeyBkOiBcIk0xMiAxNGguMDFcIiwga2V5OiBcIjFldGlsaVwiIH1dLFxuICBbXCJwYXRoXCIsIHsgZDogXCJNMTYgMTRoLjAxXCIsIGtleTogXCIxZ2JvZndcIiB9XSxcbiAgW1wicGF0aFwiLCB7IGQ6IFwiTTggMThoLjAxXCIsIGtleTogXCJscnAzNXRcIiB9XSxcbiAgW1wicGF0aFwiLCB7IGQ6IFwiTTEyIDE4aC4wMVwiLCBrZXk6IFwibWh5Z3Z1XCIgfV0sXG4gIFtcInBhdGhcIiwgeyBkOiBcIk0xNiAxOGguMDFcIiwga2V5OiBcImt6c21pbVwiIH1dXG5dO1xuY29uc3QgQ2FsZW5kYXJEYXlzID0gY3JlYXRlTHVjaWRlSWNvbihcImNhbGVuZGFyLWRheXNcIiwgX19pY29uTm9kZSk7XG5cbmV4cG9ydCB7IF9faWNvbk5vZGUsIENhbGVuZGFyRGF5cyBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jYWxlbmRhci1kYXlzLm1qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2UgbHVjaWRlLXJlYWN0IHYxLjIzLjAgLSBJU0NcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZS5cbiAqIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBjcmVhdGVMdWNpZGVJY29uIGZyb20gJy4uL2NyZWF0ZUx1Y2lkZUljb24ubWpzJztcblxuY29uc3QgX19pY29uTm9kZSA9IFtcbiAgW1wicGF0aFwiLCB7IGQ6IFwiTTMgM3YxNmEyIDIgMCAwIDAgMiAyaDE2XCIsIGtleTogXCJjMjRpNDhcIiB9XSxcbiAgW1wicGF0aFwiLCB7IGQ6IFwiTTE4IDE3VjlcIiwga2V5OiBcIjJiejYwblwiIH1dLFxuICBbXCJwYXRoXCIsIHsgZDogXCJNMTMgMTdWNVwiLCBrZXk6IFwiMWZyZHQ4XCIgfV0sXG4gIFtcInBhdGhcIiwgeyBkOiBcIk04IDE3di0zXCIsIGtleTogXCIxN3NrYTBcIiB9XVxuXTtcbmNvbnN0IENoYXJ0Q29sdW1uID0gY3JlYXRlTHVjaWRlSWNvbihcImNoYXJ0LWNvbHVtblwiLCBfX2ljb25Ob2RlKTtcblxuZXhwb3J0IHsgX19pY29uTm9kZSwgQ2hhcnRDb2x1bW4gYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2hhcnQtY29sdW1uLm1qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2UgbHVjaWRlLXJlYWN0IHYxLjIzLjAgLSBJU0NcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZS5cbiAqIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBjcmVhdGVMdWNpZGVJY29uIGZyb20gJy4uL2NyZWF0ZUx1Y2lkZUljb24ubWpzJztcblxuY29uc3QgX19pY29uTm9kZSA9IFtcbiAgW1wicGF0aFwiLCB7IGQ6IFwiTTMgM3YxNmEyIDIgMCAwIDAgMiAyaDE2XCIsIGtleTogXCJjMjRpNDhcIiB9XSxcbiAgW1wicGF0aFwiLCB7IGQ6IFwibTE5IDktNSA1LTQtNC0zIDNcIiwga2V5OiBcIjJvc2g5aVwiIH1dXG5dO1xuY29uc3QgQ2hhcnRMaW5lID0gY3JlYXRlTHVjaWRlSWNvbihcImNoYXJ0LWxpbmVcIiwgX19pY29uTm9kZSk7XG5cbmV4cG9ydCB7IF9faWNvbk5vZGUsIENoYXJ0TGluZSBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jaGFydC1saW5lLm1qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2UgbHVjaWRlLXJlYWN0IHYxLjIzLjAgLSBJU0NcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZS5cbiAqIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBjcmVhdGVMdWNpZGVJY29uIGZyb20gJy4uL2NyZWF0ZUx1Y2lkZUljb24ubWpzJztcblxuY29uc3QgX19pY29uTm9kZSA9IFtbXCJwYXRoXCIsIHsgZDogXCJtMTggMTUtNi02LTYgNlwiLCBrZXk6IFwiMTUzdWR6XCIgfV1dO1xuY29uc3QgQ2hldnJvblVwID0gY3JlYXRlTHVjaWRlSWNvbihcImNoZXZyb24tdXBcIiwgX19pY29uTm9kZSk7XG5cbmV4cG9ydCB7IF9faWNvbk5vZGUsIENoZXZyb25VcCBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jaGV2cm9uLXVwLm1qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2UgbHVjaWRlLXJlYWN0IHYxLjIzLjAgLSBJU0NcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZS5cbiAqIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBjcmVhdGVMdWNpZGVJY29uIGZyb20gJy4uL2NyZWF0ZUx1Y2lkZUljb24ubWpzJztcblxuY29uc3QgX19pY29uTm9kZSA9IFtcbiAgW1wicGF0aFwiLCB7IGQ6IFwiTTEyIDE1VjNcIiwga2V5OiBcIm05ZzF4MVwiIH1dLFxuICBbXCJwYXRoXCIsIHsgZDogXCJNMjEgMTV2NGEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnYtNFwiLCBrZXk6IFwiaWg3bjNoXCIgfV0sXG4gIFtcInBhdGhcIiwgeyBkOiBcIm03IDEwIDUgNSA1LTVcIiwga2V5OiBcImJyc243MFwiIH1dXG5dO1xuY29uc3QgRG93bmxvYWQgPSBjcmVhdGVMdWNpZGVJY29uKFwiZG93bmxvYWRcIiwgX19pY29uTm9kZSk7XG5cbmV4cG9ydCB7IF9faWNvbk5vZGUsIERvd25sb2FkIGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRvd25sb2FkLm1qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2UgbHVjaWRlLXJlYWN0IHYxLjIzLjAgLSBJU0NcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZS5cbiAqIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBjcmVhdGVMdWNpZGVJY29uIGZyb20gJy4uL2NyZWF0ZUx1Y2lkZUljb24ubWpzJztcblxuY29uc3QgX19pY29uTm9kZSA9IFtcbiAgW1xuICAgIFwicGF0aFwiLFxuICAgIHtcbiAgICAgIGQ6IFwibTYgMTQgMS41LTIuOUEyIDIgMCAwIDEgOS4yNCAxMEgyMGEyIDIgMCAwIDEgMS45NCAyLjVsLTEuNTQgNmEyIDIgMCAwIDEtMS45NSAxLjVINGEyIDIgMCAwIDEtMi0yVjVhMiAyIDAgMCAxIDItMmgzLjlhMiAyIDAgMCAxIDEuNjkuOWwuODEgMS4yYTIgMiAwIDAgMCAxLjY3LjlIMThhMiAyIDAgMCAxIDIgMnYyXCIsXG4gICAgICBrZXk6IFwidXNka2EwXCJcbiAgICB9XG4gIF1cbl07XG5jb25zdCBGb2xkZXJPcGVuID0gY3JlYXRlTHVjaWRlSWNvbihcImZvbGRlci1vcGVuXCIsIF9faWNvbk5vZGUpO1xuXG5leHBvcnQgeyBfX2ljb25Ob2RlLCBGb2xkZXJPcGVuIGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvbGRlci1vcGVuLm1qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2UgbHVjaWRlLXJlYWN0IHYxLjIzLjAgLSBJU0NcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZS5cbiAqIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBjcmVhdGVMdWNpZGVJY29uIGZyb20gJy4uL2NyZWF0ZUx1Y2lkZUljb24ubWpzJztcblxuY29uc3QgX19pY29uTm9kZSA9IFtcbiAgW1wicG9seWxpbmVcIiwgeyBwb2ludHM6IFwiMjIgMTIgMTYgMTIgMTQgMTUgMTAgMTUgOCAxMiAyIDEyXCIsIGtleTogXCJvOTd0OWRcIiB9XSxcbiAgW1xuICAgIFwicGF0aFwiLFxuICAgIHtcbiAgICAgIGQ6IFwiTTUuNDUgNS4xMSAyIDEydjZhMiAyIDAgMCAwIDIgMmgxNmEyIDIgMCAwIDAgMi0ydi02bC0zLjQ1LTYuODlBMiAyIDAgMCAwIDE2Ljc2IDRINy4yNGEyIDIgMCAwIDAtMS43OSAxLjExelwiLFxuICAgICAga2V5OiBcIm9vdDZtclwiXG4gICAgfVxuICBdXG5dO1xuY29uc3QgSW5ib3ggPSBjcmVhdGVMdWNpZGVJY29uKFwiaW5ib3hcIiwgX19pY29uTm9kZSk7XG5cbmV4cG9ydCB7IF9faWNvbk5vZGUsIEluYm94IGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluYm94Lm1qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2UgbHVjaWRlLXJlYWN0IHYxLjIzLjAgLSBJU0NcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZS5cbiAqIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBjcmVhdGVMdWNpZGVJY29uIGZyb20gJy4uL2NyZWF0ZUx1Y2lkZUljb24ubWpzJztcblxuY29uc3QgX19pY29uTm9kZSA9IFtcbiAgW1xuICAgIFwicGF0aFwiLFxuICAgIHtcbiAgICAgIGQ6IFwiTTIwIDEwYzAgNC45OTMtNS41MzkgMTAuMTkzLTcuMzk5IDExLjc5OWExIDEgMCAwIDEtMS4yMDIgMEM5LjUzOSAyMC4xOTMgNCAxNC45OTMgNCAxMGE4IDggMCAwIDEgMTYgMFwiLFxuICAgICAga2V5OiBcIjFyMGYwelwiXG4gICAgfVxuICBdLFxuICBbXCJjaXJjbGVcIiwgeyBjeDogXCIxMlwiLCBjeTogXCIxMFwiLCByOiBcIjNcIiwga2V5OiBcImlscWhyN1wiIH1dXG5dO1xuY29uc3QgTWFwUGluID0gY3JlYXRlTHVjaWRlSWNvbihcIm1hcC1waW5cIiwgX19pY29uTm9kZSk7XG5cbmV4cG9ydCB7IF9faWNvbk5vZGUsIE1hcFBpbiBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYXAtcGluLm1qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2UgbHVjaWRlLXJlYWN0IHYxLjIzLjAgLSBJU0NcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZS5cbiAqIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBjcmVhdGVMdWNpZGVJY29uIGZyb20gJy4uL2NyZWF0ZUx1Y2lkZUljb24ubWpzJztcblxuY29uc3QgX19pY29uTm9kZSA9IFtcbiAgW1wicGF0aFwiLCB7IGQ6IFwiTTE0IDQuMSAxMiA2XCIsIGtleTogXCJpdGE4aTRcIiB9XSxcbiAgW1wicGF0aFwiLCB7IGQ6IFwibTUuMSA4LTIuOS0uOFwiLCBrZXk6IFwiMWdvM2tmXCIgfV0sXG4gIFtcInBhdGhcIiwgeyBkOiBcIm02IDEyLTEuOSAyXCIsIGtleTogXCJtbmh0OTdcIiB9XSxcbiAgW1wicGF0aFwiLCB7IGQ6IFwiTTcuMiAyLjIgOCA1LjFcIiwga2V5OiBcIjFjZmtvMVwiIH1dLFxuICBbXG4gICAgXCJwYXRoXCIsXG4gICAge1xuICAgICAgZDogXCJNOS4wMzcgOS42OWEuNDk4LjQ5OCAwIDAgMSAuNjUzLS42NTNsMTEgNC41YS41LjUgMCAwIDEtLjA3NC45NDlsLTQuMzQ5IDEuMDQxYTEgMSAwIDAgMC0uNzQuNzM5bC0xLjA0IDQuMzVhLjUuNSAwIDAgMS0uOTUuMDc0elwiLFxuICAgICAga2V5OiBcInMwaDN5elwiXG4gICAgfVxuICBdXG5dO1xuY29uc3QgTW91c2VQb2ludGVyQ2xpY2sgPSBjcmVhdGVMdWNpZGVJY29uKFwibW91c2UtcG9pbnRlci1jbGlja1wiLCBfX2ljb25Ob2RlKTtcblxuZXhwb3J0IHsgX19pY29uTm9kZSwgTW91c2VQb2ludGVyQ2xpY2sgYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW91c2UtcG9pbnRlci1jbGljay5tanMubWFwXG4iLCIvKipcbiAqIEBsaWNlbnNlIGx1Y2lkZS1yZWFjdCB2MS4yMy4wIC0gSVNDXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgSVNDIGxpY2Vuc2UuXG4gKiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgY3JlYXRlTHVjaWRlSWNvbiBmcm9tICcuLi9jcmVhdGVMdWNpZGVJY29uLm1qcyc7XG5cbmNvbnN0IF9faWNvbk5vZGUgPSBbXG4gIFtcbiAgICBcInBhdGhcIixcbiAgICB7XG4gICAgICBkOiBcIm0xNiA2LTguNDE0IDguNTg2YTIgMiAwIDAgMCAyLjgyOSAyLjgyOWw4LjQxNC04LjU4NmE0IDQgMCAxIDAtNS42NTctNS42NTdsLTguMzc5IDguNTUxYTYgNiAwIDEgMCA4LjQ4NSA4LjQ4NWw4LjM3OS04LjU1MVwiLFxuICAgICAga2V5OiBcIjFtaWVjdVwiXG4gICAgfVxuICBdXG5dO1xuY29uc3QgUGFwZXJjbGlwID0gY3JlYXRlTHVjaWRlSWNvbihcInBhcGVyY2xpcFwiLCBfX2ljb25Ob2RlKTtcblxuZXhwb3J0IHsgX19pY29uTm9kZSwgUGFwZXJjbGlwIGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcGVyY2xpcC5tanMubWFwXG4iLCIvKipcbiAqIEBsaWNlbnNlIGx1Y2lkZS1yZWFjdCB2MS4yMy4wIC0gSVNDXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgSVNDIGxpY2Vuc2UuXG4gKiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgY3JlYXRlTHVjaWRlSWNvbiBmcm9tICcuLi9jcmVhdGVMdWNpZGVJY29uLm1qcyc7XG5cbmNvbnN0IF9faWNvbk5vZGUgPSBbXG4gIFtcInBhdGhcIiwgeyBkOiBcIk0xMiAxN3Y1XCIsIGtleTogXCJiYjFkdTlcIiB9XSxcbiAgW1xuICAgIFwicGF0aFwiLFxuICAgIHtcbiAgICAgIGQ6IFwiTTkgMTAuNzZhMiAyIDAgMCAxLTEuMTEgMS43OWwtMS43OC45QTIgMiAwIDAgMCA1IDE1LjI0VjE2YTEgMSAwIDAgMCAxIDFoMTJhMSAxIDAgMCAwIDEtMXYtLjc2YTIgMiAwIDAgMC0xLjExLTEuNzlsLTEuNzgtLjlBMiAyIDAgMCAxIDE1IDEwLjc2VjdhMSAxIDAgMCAxIDEtMSAyIDIgMCAwIDAgMC00SDhhMiAyIDAgMCAwIDAgNCAxIDEgMCAwIDEgMSAxelwiLFxuICAgICAga2V5OiBcIjFua3o4YlwiXG4gICAgfVxuICBdXG5dO1xuY29uc3QgUGluID0gY3JlYXRlTHVjaWRlSWNvbihcInBpblwiLCBfX2ljb25Ob2RlKTtcblxuZXhwb3J0IHsgX19pY29uTm9kZSwgUGluIGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBpbi5tanMubWFwXG4iLCIvKipcbiAqIEBsaWNlbnNlIGx1Y2lkZS1yZWFjdCB2MS4yMy4wIC0gSVNDXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgSVNDIGxpY2Vuc2UuXG4gKiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgY3JlYXRlTHVjaWRlSWNvbiBmcm9tICcuLi9jcmVhdGVMdWNpZGVJY29uLm1qcyc7XG5cbmNvbnN0IF9faWNvbk5vZGUgPSBbXG4gIFtcInBhdGhcIiwgeyBkOiBcIk0xNCAxN0g1XCIsIGtleTogXCJnZm4zbXhcIiB9XSxcbiAgW1wicGF0aFwiLCB7IGQ6IFwiTTE5IDdoLTlcIiwga2V5OiBcIjZpOXRnXCIgfV0sXG4gIFtcImNpcmNsZVwiLCB7IGN4OiBcIjE3XCIsIGN5OiBcIjE3XCIsIHI6IFwiM1wiLCBrZXk6IFwiMThiNDl5XCIgfV0sXG4gIFtcImNpcmNsZVwiLCB7IGN4OiBcIjdcIiwgY3k6IFwiN1wiLCByOiBcIjNcIiwga2V5OiBcImRmbXkweFwiIH1dXG5dO1xuY29uc3QgU2V0dGluZ3MyID0gY3JlYXRlTHVjaWRlSWNvbihcInNldHRpbmdzLTJcIiwgX19pY29uTm9kZSk7XG5cbmV4cG9ydCB7IF9faWNvbk5vZGUsIFNldHRpbmdzMiBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zZXR0aW5ncy0yLm1qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==