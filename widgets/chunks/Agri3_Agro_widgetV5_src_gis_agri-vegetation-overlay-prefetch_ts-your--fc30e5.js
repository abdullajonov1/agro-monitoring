(self["webpackChunkexb_client"] = self["webpackChunkexb_client"] || []).push([["your-extensions_widgets_Agri3_Agro_widgetV5_src_gis_agri-vegetation-overlay-prefetch_ts-your--fc30e5"],{

/***/ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/gis/agri-polygon-api-source.ts":
/*!****************************************************************************************!*\
  !*** ./your-extensions/widgets/Agri3/Agro_widgetV5/src/gis/agri-polygon-api-source.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   agriPolygonApiLog: () => (/* binding */ agriPolygonApiLog),
/* harmony export */   fetchPolygonAvailableDates: () => (/* binding */ fetchPolygonAvailableDates),
/* harmony export */   fetchPolygonExportImageTiff: () => (/* binding */ fetchPolygonExportImageTiff),
/* harmony export */   getAgriPolygonApiBaseUrl: () => (/* binding */ getAgriPolygonApiBaseUrl),
/* harmony export */   sampleIndexFromRgba: () => (/* binding */ sampleIndexFromRgba),
/* harmony export */   warmPolygonApiConnection: () => (/* binding */ warmPolygonApiConnection)
/* harmony export */ });
/* harmony import */ var geotiff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! geotiff */ "./node_modules/geotiff/dist-module/compression/index.js");
/* harmony import */ var geotiff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! geotiff */ "./node_modules/geotiff/dist-module/geotiff.js");
/* harmony import */ var _vendor_geotiff_decoders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vendor/geotiff-decoders */ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/vendor/geotiff-decoders.ts");
/* harmony import */ var _shared_agri_service_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/agri-service-urls */ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/shared/agri-service-urls.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Client for the api-agri.sgm.uzspace.uz REST API — per-polygon vegetation
 * index available dates and colored raster exports.
 *
 * Separate from agri-vegetation-data-source.ts (which queries the raw
 * ArcGIS agri_vegetation_indices Table directly): that table has scalar
 * index values per (uniqueid, raster_date), fine for charts and the
 * region-wide status bar, but no pixel data. This API is used specifically
 * for the single-selected-polygon case in AgriGraff10, where we need an
 * actual rendered, georeferenced raster image to overlay on the map.
 */



(0,geotiff__WEBPACK_IMPORTED_MODULE_2__.addDecoder)([undefined, 1], () => __awaiter(void 0, void 0, void 0, function* () { return _vendor_geotiff_decoders__WEBPACK_IMPORTED_MODULE_0__.RawDecoder; }), undefined, false);
(0,geotiff__WEBPACK_IMPORTED_MODULE_2__.addDecoder)(5, () => __awaiter(void 0, void 0, void 0, function* () { return _vendor_geotiff_decoders__WEBPACK_IMPORTED_MODULE_0__.LzwDecoder; }), undefined, false);
(0,geotiff__WEBPACK_IMPORTED_MODULE_2__.addDecoder)([8, 32946], () => __awaiter(void 0, void 0, void 0, function* () { return _vendor_geotiff_decoders__WEBPACK_IMPORTED_MODULE_0__.DeflateDecoder; }), undefined, false);
(0,geotiff__WEBPACK_IMPORTED_MODULE_2__.addDecoder)(32773, () => __awaiter(void 0, void 0, void 0, function* () { return _vendor_geotiff_decoders__WEBPACK_IMPORTED_MODULE_0__.PackbitsDecoder; }), undefined, false);
function getAgriPolygonApiBaseUrl() {
    return (0,_shared_agri_service_urls__WEBPACK_IMPORTED_MODULE_1__.getAgriServiceUrls)().polygonApiBaseUrl;
}
/** Logger disabled — keep call sites without console noise. */
function agriPolygonApiLog(_phase, _detail) {
    /* no-op */
}
/**
 * GET /v1/polygon/{uniqueid}/available-dates
 * Confirmed response shape: { uniqueid, region, year, count, dates: [] }
 */
function fetchPolygonAvailableDates(uniqueid, regionId, year) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `${getAgriPolygonApiBaseUrl()}/v1/polygon/${encodeURIComponent(uniqueid)}/available-dates` +
            `?region_id=${encodeURIComponent(String(regionId))}&year=${encodeURIComponent(String(year))}`;
        agriPolygonApiLog("available-dates:request", { url, uniqueid, regionId, year });
        const res = yield fetch(url, { headers: { accept: "application/json" } });
        if (!res.ok) {
            agriPolygonApiLog("available-dates:FAILED", { url, status: res.status });
            throw new Error(`HTTP ${res.status}`);
        }
        const json = yield res.json();
        agriPolygonApiLog("available-dates:response", {
            uniqueid,
            count: json === null || json === void 0 ? void 0 : json.count,
            dates: json === null || json === void 0 ? void 0 : json.dates,
        });
        return Array.isArray(json === null || json === void 0 ? void 0 : json.dates) ? json.dates : [];
    });
}
/** Classic vegetation color stops (low → high) for client-side colorize + RGB reverse. */
const VEG_COLOR_STOPS = [
    { v: 0.0, r: 165, g: 0, b: 38 },
    { v: 0.15, r: 215, g: 48, b: 39 },
    { v: 0.3, r: 244, g: 109, b: 67 },
    { v: 0.45, r: 253, g: 174, b: 97 },
    { v: 0.55, r: 254, g: 224, b: 139 },
    { v: 0.65, r: 217, g: 239, b: 139 },
    { v: 0.75, r: 166, g: 217, b: 106 },
    { v: 0.85, r: 102, g: 189, b: 99 },
    { v: 0.95, r: 26, g: 152, b: 80 },
    { v: 1.0, r: 0, g: 104, b: 55 },
];
function lerp(a, b, t) {
    return a + (b - a) * t;
}
function colorizeIndexValue(value, out, offset) {
    if (!Number.isFinite(value)) {
        out[offset] = 0;
        out[offset + 1] = 0;
        out[offset + 2] = 0;
        out[offset + 3] = 0;
        return;
    }
    const v = Math.max(0, Math.min(1, value));
    let i = 0;
    while (i < VEG_COLOR_STOPS.length - 1 && VEG_COLOR_STOPS[i + 1].v < v)
        i++;
    const a = VEG_COLOR_STOPS[i];
    const b = VEG_COLOR_STOPS[Math.min(i + 1, VEG_COLOR_STOPS.length - 1)];
    const span = b.v - a.v || 1;
    const t = (v - a.v) / span;
    out[offset] = Math.round(lerp(a.r, b.r, t));
    out[offset + 1] = Math.round(lerp(a.g, b.g, t));
    out[offset + 2] = Math.round(lerp(a.b, b.b, t));
    out[offset + 3] = 255;
}
/**
 * Recover an approximate continuous index (0..1) from a pre-colored RGB pixel.
 * Projects onto the nearest segment of VEG_COLOR_STOPS (not nearest stop only),
 * so hover shows values like 0.22 / 0.37 instead of only 0.15 / 0.30 / 0.45.
 * Still an approximation when the TIFF has no float band — true NDVI needs floats.
 */
function sampleIndexFromRgba(r, g, b, a) {
    if (a != null && a < 8)
        return null;
    if (r + g + b < 8)
        return null;
    let bestVal = 0;
    let bestDist = Infinity;
    for (let i = 0; i < VEG_COLOR_STOPS.length - 1; i++) {
        const stopA = VEG_COLOR_STOPS[i];
        const stopC = VEG_COLOR_STOPS[i + 1];
        const abx = stopC.r - stopA.r;
        const aby = stopC.g - stopA.g;
        const abz = stopC.b - stopA.b;
        const ab2 = abx * abx + aby * aby + abz * abz || 1;
        const apx = r - stopA.r;
        const apy = g - stopA.g;
        const apz = b - stopA.b;
        let t = (apx * abx + apy * aby + apz * abz) / ab2;
        if (t < 0)
            t = 0;
        else if (t > 1)
            t = 1;
        const cx = stopA.r + abx * t;
        const cy = stopA.g + aby * t;
        const cz = stopA.b + abz * t;
        const dr = r - cx;
        const dg = g - cy;
        const db = b - cz;
        const dist = dr * dr + dg * dg + db * db;
        if (dist < bestDist) {
            bestDist = dist;
            bestVal = stopA.v + (stopC.v - stopA.v) * t;
        }
    }
    return bestVal;
}
/** Session cache: first click pays network+decode; repeats reuse the canvas. */
const exportImageCache = new Map();
const EXPORT_IMAGE_CACHE_MAX = 24;
function exportImageCacheKey(params) {
    return [
        String(params.uniqueid || "").replace(/[{}]/g, ""),
        params.regionId,
        params.rasterDate,
        params.indiceType || "ndvi",
        params.stretch || "fixed",
    ].join("|");
}
function cloneExportCanvas(source) {
    const copy = document.createElement("canvas");
    copy.width = source.width;
    copy.height = source.height;
    const ctx = copy.getContext("2d");
    if (ctx)
        ctx.drawImage(source, 0, 0);
    return copy;
}
/**
 * Best-effort TLS / DNS warmup for api-agri so the first field click does not
 * pay cold-connection cost on export-image.
 */
function warmPolygonApiConnection() {
    try {
        void fetch(`${getAgriPolygonApiBaseUrl()}/`, {
            method: "GET",
            headers: { accept: "*/*" },
            mode: "cors",
            cache: "no-store",
        }).catch(() => {
            /* ignore — warmup only */
        });
    }
    catch (_a) {
        /* ignore */
    }
}
/**
 * GET /v1/polygon/{uniqueid}/export-image, requested with
 * response_format=tiff — fetches the raw GeoTIFF bytes directly (skips the
 * response_format=json envelope, whose exact stats/base64 field names
 * weren't confirmed) and decodes it client-side with geotiff.js. A GeoTIFF
 * carries its own extent + CRS in its tags, so no separate georeferencing
 * call is needed — read it straight off the decoded image.
 */
function fetchPolygonExportImageTiff(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const cacheKey = exportImageCacheKey(params);
        let pending = exportImageCache.get(cacheKey);
        if (!pending) {
            pending = fetchPolygonExportImageTiffUncached(params).catch((err) => {
                exportImageCache.delete(cacheKey);
                throw err;
            });
            exportImageCache.set(cacheKey, pending);
            while (exportImageCache.size > EXPORT_IMAGE_CACHE_MAX) {
                const oldest = exportImageCache.keys().next().value;
                if (oldest == null)
                    break;
                exportImageCache.delete(oldest);
            }
        }
        const result = yield pending;
        // Clone canvas so a later MediaLayer remove/reuse cannot blank a cached entry.
        return Object.assign(Object.assign({}, result), { canvas: cloneExportCanvas(result.canvas) });
    });
}
function fetchPolygonExportImageTiffUncached(params) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        const qs = new URLSearchParams({
            region_id: String(params.regionId),
            raster_date: params.rasterDate,
            indice_type: params.indiceType || "ndvi",
            stretch: params.stretch || "fixed",
            response_format: "tiff",
        });
        const url = `${getAgriPolygonApiBaseUrl()}/v1/polygon/${encodeURIComponent(params.uniqueid)}/export-image?${qs.toString()}`;
        agriPolygonApiLog("export-image:request", Object.assign({ url }, params));
        // Bound hung export-image calls so the map loader cannot stick forever.
        const controller = typeof AbortController !== "undefined" ? new AbortController() : null;
        const timeoutId = controller && typeof setTimeout === "function"
            ? setTimeout(() => {
                try {
                    controller.abort();
                }
                catch (_a) {
                    /* ignore */
                }
            }, 25000)
            : null;
        let res;
        try {
            res = yield fetch(url, Object.assign({ headers: { accept: "*/*" } }, (controller ? { signal: controller.signal } : {})));
        }
        catch (err) {
            if (timeoutId)
                clearTimeout(timeoutId);
            if ((err === null || err === void 0 ? void 0 : err.name) === "AbortError") {
                throw new Error("Export-image so‘rovi vaqtidan oshdi (25s).");
            }
            throw err;
        }
        if (timeoutId)
            clearTimeout(timeoutId);
        if (!res.ok) {
            let responseText = '';
            try {
                responseText = yield res.text();
            }
            catch (bodyError) {
                responseText = `<response body read failed: ${String((bodyError === null || bodyError === void 0 ? void 0 : bodyError.message) || bodyError)}>`;
            }
            const contentType = res.headers.get('content-type') || '';
            agriPolygonApiLog('export-image:FAILED-response', {
                url,
                status: res.status,
                statusText: res.statusText,
                contentType,
                responseText,
            });
            const error = new Error(`HTTP ${res.status}${res.statusText ? ` ${res.statusText}` : ''}${responseText ? `: ${responseText}` : ''}`);
            error.status = res.status;
            error.statusText = res.statusText;
            error.contentType = contentType;
            error.responseText = responseText;
            error.url = url;
            throw error;
        }
        const buffer = yield res.arrayBuffer();
        const tiff = yield (0,geotiff__WEBPACK_IMPORTED_MODULE_3__.fromArrayBuffer)(buffer);
        const image = yield tiff.getImage();
        const bbox = image.getBoundingBox();
        const width = image.getWidth();
        const height = image.getHeight();
        const samplesPerPixel = image.getSamplesPerPixel();
        const pixelCount = width * height;
        if (!Array.isArray(bbox) ||
            bbox.length < 4 ||
            ![bbox[0], bbox[1], bbox[2], bbox[3]].every((n) => Number.isFinite(n)) ||
            !(bbox[2] > bbox[0]) ||
            !(bbox[3] > bbox[1]) ||
            !(width > 0) ||
            !(height > 0)) {
            throw new Error("GeoTIFF bounding box/size invalid");
        }
        let epsgCode = null;
        try {
            const geoKeys = image.getGeoKeys();
            epsgCode =
                Number(geoKeys === null || geoKeys === void 0 ? void 0 : geoKeys.ProjectedCSTypeGeoKey) ||
                    Number(geoKeys === null || geoKeys === void 0 ? void 0 : geoKeys.GeographicTypeGeoKey) ||
                    null;
            if (!Number.isFinite(epsgCode))
                epsgCode = null;
        }
        catch (_c) {
            epsgCode = null;
        }
        // Geographic coords without geo-keys: safe default. Projected metres without
        // an EPSG must not be tagged as the map view SR (causes stretch/misplace).
        if (epsgCode == null) {
            const absMax = Math.max(Math.abs(bbox[0]), Math.abs(bbox[1]), Math.abs(bbox[2]), Math.abs(bbox[3]));
            if (absMax <= 180)
                epsgCode = 4326;
        }
        let noData = null;
        try {
            const gd = Number((_b = (_a = image).getGDALNoData) === null || _b === void 0 ? void 0 : _b.call(_a));
            noData = Number.isFinite(gd) ? gd : null;
        }
        catch (_d) {
            noData = null;
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx)
            throw new Error("2D canvas context unavailable");
        const imageData = ctx.createImageData(width, height);
        const out = imageData.data;
        const clamp255 = (v) => {
            const n = Math.round(Number(v) || 0);
            return n < 0 ? 0 : n > 255 ? 255 : n;
        };
        let hoverValues = null;
        let dataMin = Infinity;
        let dataMax = -Infinity;
        if (samplesPerPixel >= 3) {
            // Pre-colored RGB/RGBA: one interleaved read only (was double-read before).
            const raster = (yield image.readRasters({ interleave: true }));
            const stride = samplesPerPixel;
            if (samplesPerPixel >= 4) {
                for (let p = 0; p < pixelCount; p++) {
                    const o = p * stride;
                    out[p * 4] = clamp255(raster[o]);
                    out[p * 4 + 1] = clamp255(raster[o + 1]);
                    out[p * 4 + 2] = clamp255(raster[o + 2]);
                    out[p * 4 + 3] = clamp255(raster[o + 3]);
                }
            }
            else {
                for (let p = 0; p < pixelCount; p++) {
                    const o = p * 3;
                    out[p * 4] = clamp255(raster[o]);
                    out[p * 4 + 1] = clamp255(raster[o + 1]);
                    out[p * 4 + 2] = clamp255(raster[o + 2]);
                    out[p * 4 + 3] = 255;
                }
            }
        }
        else {
            const bands = (yield image.readRasters({ interleave: false }));
            const band0 = bands === null || bands === void 0 ? void 0 : bands[0];
            const values = new Float32Array(pixelCount);
            for (let p = 0; p < pixelCount; p++) {
                const raw = Number(band0 === null || band0 === void 0 ? void 0 : band0[p]);
                const v = Number.isFinite(raw) ? raw : NaN;
                values[p] = v;
                if (Number.isFinite(v) && (noData == null || v !== noData)) {
                    if (v < dataMin)
                        dataMin = v;
                    if (v > dataMax)
                        dataMax = v;
                }
            }
            const looksLikeIndex = Number.isFinite(dataMin) &&
                Number.isFinite(dataMax) &&
                dataMin >= -1.5 &&
                dataMax <= 1.5;
            const looksLikeByte = Number.isFinite(dataMin) &&
                Number.isFinite(dataMax) &&
                dataMax > 2 &&
                dataMax <= 255;
            if (looksLikeIndex) {
                hoverValues = values;
            }
            else if (looksLikeByte) {
                hoverValues = new Float32Array(pixelCount);
                for (let p = 0; p < pixelCount; p++) {
                    const v = values[p];
                    hoverValues[p] =
                        !Number.isFinite(v) || v <= 0 || (noData != null && v === noData)
                            ? NaN
                            : v / 255;
                }
            }
            if (looksLikeIndex || (looksLikeByte && hoverValues)) {
                const src = hoverValues || values;
                for (let p = 0; p < pixelCount; p++) {
                    colorizeIndexValue(src[p], out, p * 4);
                }
            }
            else {
                for (let p = 0; p < pixelCount; p++) {
                    const v = clamp255(values[p]);
                    out[p * 4] = v;
                    out[p * 4 + 1] = v;
                    out[p * 4 + 2] = v;
                    out[p * 4 + 3] = v > 0 ? 255 : 0;
                }
            }
        }
        ctx.putImageData(imageData, 0, 0);
        // Only keep RGBA when hover floats were not recovered (typical RGB TIFF).
        const rgbaForHover = !hoverValues && samplesPerPixel >= 3
            ? new Uint8ClampedArray(out)
            : null;
        agriPolygonApiLog("export-image:decoded", {
            uniqueid: params.uniqueid,
            rasterDate: params.rasterDate,
            width,
            height,
            samplesPerPixel,
            bbox,
            epsgCode,
            dataMin: Number.isFinite(dataMin) ? dataMin : null,
            dataMax: Number.isFinite(dataMax) ? dataMax : null,
            hasHoverValues: Boolean(hoverValues),
            hasRgbaHover: Boolean(rgbaForHover),
        });
        return {
            canvas,
            bbox,
            epsgCode,
            width,
            height,
            values: hoverValues,
            rgba: rgbaForHover,
            noData,
        };
    });
}


/***/ }),

/***/ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/gis/agri-vegetation-overlay-prefetch.ts":
/*!*************************************************************************************************!*\
  !*** ./your-extensions/widgets/Agri3/Agro_widgetV5/src/gis/agri-vegetation-overlay-prefetch.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getVegetationOverlayContext: () => (/* binding */ getVegetationOverlayContext),
/* harmony export */   prefetchVegetationOverlayForUniqueid: () => (/* binding */ prefetchVegetationOverlayForUniqueid),
/* harmony export */   setVegetationOverlayContext: () => (/* binding */ setVegetationOverlayContext)
/* harmony export */ });
/* harmony import */ var _gis_agri_polygon_api_source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gis/agri-polygon-api-source */ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/gis/agri-polygon-api-source.ts");
/**
 * Shared vegetation overlay context so Popup can warm export-image as soon as
 * uniqueid is known — without waiting for Graff setState / available-dates race.
 */

const SESSION_DATE_KEY = "agri.veg.overlay.lastDate";
const SESSION_INDEX_KEY = "agri.veg.overlay.lastIndex";
const SESSION_REGION_KEY = "agri.veg.overlay.lastRegion";
const SESSION_YEAR_KEY = "agri.veg.overlay.lastYear";
let ctx = {};
function readSession() {
    try {
        if (typeof sessionStorage === "undefined")
            return {};
        const date = sessionStorage.getItem(SESSION_DATE_KEY) || undefined;
        const index = (sessionStorage.getItem(SESSION_INDEX_KEY) ||
            undefined);
        const regionRaw = sessionStorage.getItem(SESSION_REGION_KEY);
        const yearRaw = sessionStorage.getItem(SESSION_YEAR_KEY);
        const regionId = regionRaw != null ? Number(regionRaw) : undefined;
        const year = yearRaw != null ? Number(yearRaw) : undefined;
        return {
            lastDate: date || null,
            lastIndex: index || "ndvi",
            regionId: Number.isFinite(regionId) ? regionId : undefined,
            year: Number.isFinite(year) ? year : undefined,
        };
    }
    catch (_a) {
        return {};
    }
}
function writeSession(next) {
    try {
        if (typeof sessionStorage === "undefined")
            return;
        if (next.lastDate)
            sessionStorage.setItem(SESSION_DATE_KEY, next.lastDate);
        if (next.lastIndex)
            sessionStorage.setItem(SESSION_INDEX_KEY, next.lastIndex);
        if (next.regionId != null)
            sessionStorage.setItem(SESSION_REGION_KEY, String(next.regionId));
        if (next.year != null)
            sessionStorage.setItem(SESSION_YEAR_KEY, String(next.year));
    }
    catch (_a) {
        /* ignore quota / private mode */
    }
}
/** Merge live Graff/Localization context (region/year/last successful date). */
function setVegetationOverlayContext(patch) {
    ctx = Object.assign(Object.assign({}, ctx), patch);
    writeSession(ctx);
    return ctx;
}
function getVegetationOverlayContext() {
    var _a, _b, _c, _d, _e;
    if (ctx.regionId == null ||
        ctx.year == null ||
        !ctx.lastDate) {
        const fromSession = readSession();
        ctx = {
            regionId: (_a = ctx.regionId) !== null && _a !== void 0 ? _a : fromSession.regionId,
            year: (_b = ctx.year) !== null && _b !== void 0 ? _b : fromSession.year,
            lastDate: (_c = ctx.lastDate) !== null && _c !== void 0 ? _c : fromSession.lastDate,
            lastIndex: (_e = (_d = ctx.lastIndex) !== null && _d !== void 0 ? _d : fromSession.lastIndex) !== null && _e !== void 0 ? _e : "ndvi",
        };
    }
    return ctx;
}
function cleanUniqueid(uniqueid) {
    return String(uniqueid || "").replace(/[{}]/g, "").trim();
}
/**
 * Fire-and-forget: start available-dates (if needed) + export-image into the
 * session TIFF cache so Graff's applyVegetationImageOverlay hits a warm promise.
 */
function prefetchVegetationOverlayForUniqueid(uniqueid, opts) {
    var _a, _b;
    const id = cleanUniqueid(uniqueid);
    if (!id)
        return;
    const live = getVegetationOverlayContext();
    const regionId = (_a = opts === null || opts === void 0 ? void 0 : opts.regionId) !== null && _a !== void 0 ? _a : live.regionId;
    const year = (_b = opts === null || opts === void 0 ? void 0 : opts.year) !== null && _b !== void 0 ? _b : live.year;
    const indiceType = ((opts === null || opts === void 0 ? void 0 : opts.indiceType) ||
        live.lastIndex ||
        "ndvi");
    let rasterDate = ((opts === null || opts === void 0 ? void 0 : opts.rasterDate) || live.lastDate || "").trim();
    if (regionId == null || !Number.isFinite(regionId))
        return;
    const runExport = (date) => {
        if (!date)
            return;
        setVegetationOverlayContext({
            regionId,
            year,
            lastDate: date,
            lastIndex: indiceType,
        });
        void (0,_gis_agri_polygon_api_source__WEBPACK_IMPORTED_MODULE_0__.fetchPolygonExportImageTiff)({
            uniqueid: id,
            regionId,
            rasterDate: date,
            indiceType,
            stretch: "fixed",
        }).catch(() => {
            /* warm only — Graff handles errors */
        });
    };
    if (rasterDate) {
        runExport(rasterDate);
        return;
    }
    if (year == null || !Number.isFinite(year))
        return;
    void (0,_gis_agri_polygon_api_source__WEBPACK_IMPORTED_MODULE_0__.fetchPolygonAvailableDates)(id, regionId, year)
        .then((dates) => {
        if (!(dates === null || dates === void 0 ? void 0 : dates.length))
            return;
        const sorted = dates
            .slice()
            .sort((a, b) => String(a).localeCompare(String(b)));
        const latest = sorted[sorted.length - 1];
        if (latest)
            runExport(latest);
    })
        .catch(() => {
        /* ignore */
    });
}


/***/ }),

/***/ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/panels/GraffPanel/runtime/graff-graph-constants.ts":
/*!************************************************************************************************************!*\
  !*** ./your-extensions/widgets/Agri3/Agro_widgetV5/src/panels/GraffPanel/runtime/graff-graph-constants.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./your-extensions/widgets/Agri3/Agro_widgetV5/src/vendor/geotiff-decoders.ts":
/*!************************************************************************************!*\
  !*** ./your-extensions/widgets/Agri3/Agro_widgetV5/src/vendor/geotiff-decoders.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeflateDecoder: () => (/* reexport safe */ _node_modules_geotiff_dist_module_compression_deflate_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   LzwDecoder: () => (/* reexport safe */ _node_modules_geotiff_dist_module_compression_lzw_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   PackbitsDecoder: () => (/* reexport safe */ _node_modules_geotiff_dist_module_compression_packbits_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   RawDecoder: () => (/* reexport safe */ _node_modules_geotiff_dist_module_compression_raw_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_geotiff_dist_module_compression_raw_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/geotiff/dist-module/compression/raw.js */ "./node_modules/geotiff/dist-module/compression/raw.js");
/* harmony import */ var _node_modules_geotiff_dist_module_compression_lzw_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/geotiff/dist-module/compression/lzw.js */ "./node_modules/geotiff/dist-module/compression/lzw.js");
/* harmony import */ var _node_modules_geotiff_dist_module_compression_deflate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/geotiff/dist-module/compression/deflate.js */ "./node_modules/geotiff/dist-module/compression/deflate.js");
/* harmony import */ var _node_modules_geotiff_dist_module_compression_packbits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/geotiff/dist-module/compression/packbits.js */ "./node_modules/geotiff/dist-module/compression/packbits.js");
/**
 * Single import site for geotiff compression decoders.
 * geotiff's package.json only exports "." — deep imports fail under webpack 5.
 * Relative node_modules paths (6 levels from src/vendor → client/) bypass exports.
 */







/***/ }),

/***/ "?cdec":
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?753a":
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?4e4d":
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?662e":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9jaHVua3MvQWdyaTNfQWdyb193aWRnZXRWNV9zcmNfZ2lzX2FncmktdmVnZXRhdGlvbi1vdmVybGF5LXByZWZldGNoX3RzLXlvdXItLWZjMzBlNS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7R0FVRztBQUNtRDtBQU1sQjtBQUM2QjtBQUVqRSxtREFBVSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQVMsRUFBRSxrREFBQyx1RUFBaUIsTUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDNUUsbURBQVUsQ0FBQyxDQUFDLEVBQUUsR0FBUyxFQUFFLGtEQUFDLHVFQUFpQixNQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMvRCxtREFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEdBQVMsRUFBRSxrREFBQywyRUFBcUIsTUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDNUUsbURBQVUsQ0FBQyxLQUFLLEVBQUUsR0FBUyxFQUFFLGtEQUFDLDRFQUFzQixNQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUVqRSxTQUFTLHdCQUF3QjtJQUN0QyxPQUFPLDZFQUFrQixFQUFFLENBQUMsaUJBQWlCLENBQUM7QUFDaEQsQ0FBQztBQUVELCtEQUErRDtBQUN4RCxTQUFTLGlCQUFpQixDQUMvQixNQUFjLEVBQ2QsT0FBaUM7SUFFakMsV0FBVztBQUNiLENBQUM7QUFVRDs7O0dBR0c7QUFDSSxTQUFlLDBCQUEwQixDQUM5QyxRQUFnQixFQUNoQixRQUFnQixFQUNoQixJQUFZOztRQUVaLE1BQU0sR0FBRyxHQUNQLEdBQUcsd0JBQXdCLEVBQUUsZUFBZSxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsa0JBQWtCO1lBQzFGLGNBQWMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNoRyxpQkFBaUIsQ0FBQyx5QkFBeUIsRUFBRSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFFaEYsTUFBTSxHQUFHLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDWixpQkFBaUIsQ0FBQyx3QkFBd0IsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDekUsTUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFDRCxNQUFNLElBQUksR0FBa0MsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0QsaUJBQWlCLENBQUMsMEJBQTBCLEVBQUU7WUFDNUMsUUFBUTtZQUNSLEtBQUssRUFBRSxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsS0FBSztZQUNsQixLQUFLLEVBQUUsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLEtBQUs7U0FDbkIsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3RELENBQUM7Q0FBQTtBQW1DRCwwRkFBMEY7QUFDMUYsTUFBTSxlQUFlLEdBQTBEO0lBQzdFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRTtJQUMvQixFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUU7SUFDakMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO0lBQ2pDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRTtJQUNsQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUU7SUFDbkMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFO0lBQ25DLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTtJQUNuQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUU7SUFDbEMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO0lBQ2pDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRTtDQUNoQyxDQUFDO0FBRUYsU0FBUyxJQUFJLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO0lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMs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QUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckMsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzlCLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM5QixNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDOUIsTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ25ELE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDWixJQUFJLENBQUMsR0FBRyxDQUFDO1lBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDN0IsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUM3QixNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLE1BQU0sRUFBRSxHQUFHLENB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QUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7SUFDaEQsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtJQUM5QyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO0lBQzVDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7SUFDOUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtDQUNqRCxDQUFDO0FBRUssTUFBTSxpQkFBaUIsR0FBb0IsbUJBQW1CLENBQUMsR0FBRyxDQUN2RSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbkIsQ0FBQztBQUVGLHlEQUF5RDtBQUNsRCxNQUFNLGdDQUFnQyxHQUFHO0lBQzlDLE1BQU07SUFDTixNQUFNO0lBQ04sS0FBSztJQUNMLEtBQUs7SUFDTCxJQUFJO0lBQ0osTUFBTTtDQUNFLENBQUM7QUFLSixTQUFTLDhCQUE4QixDQUM1QyxLQUFhO0lBRWIsT0FBUSxnQ0FBc0QsQ0FBQyxRQUFRLENBQ3JFLEtBQUssQ0FDTixDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0Q7Ozs7R0FJRztBQUM0RjtBQUNBO0FBQ1E7QUFDRTtBQUV0Qzs7Ozs7Ozs7Ozs7QUNWbkU7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvQWdyaTMvQWdyb193aWRnZXRWNS9zcmMvZ2lzL2FncmktcG9seWdvbi1hcGktc291cmNlLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9BZ3JpMy9BZ3JvX3dpZGdldFY1L3NyYy9naXMvYWdyaS12ZWdldGF0aW9uLW92ZXJsYXktcHJlZmV0Y2gudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL0FncmkzL0Fncm9fd2lkZ2V0VjUvc3JjL3BhbmVscy9HcmFmZlBhbmVsL3J1bnRpbWUvZ3JhZmYtZ3JhcGgtY29uc3RhbnRzLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9BZ3JpMy9BZ3JvX3dpZGdldFY1L3NyYy92ZW5kb3IvZ2VvdGlmZi1kZWNvZGVycy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2lnbm9yZWR8QzpcXGFyY2dpcy1leHBlcmllbmNlLWJ1aWxkZXItMS4xNlxcQXJjR0lTRXhwZXJpZW5jZUJ1aWxkZXJcXGNsaWVudFxcbm9kZV9tb2R1bGVzXFxnZW90aWZmXFxkaXN0LW1vZHVsZVxcc291cmNlXFxjbGllbnR8aHR0cCIsIndlYnBhY2s6Ly9leGItY2xpZW50L2lnbm9yZWR8QzpcXGFyY2dpcy1leHBlcmllbmNlLWJ1aWxkZXItMS4xNlxcQXJjR0lTRXhwZXJpZW5jZUJ1aWxkZXJcXGNsaWVudFxcbm9kZV9tb2R1bGVzXFxnZW90aWZmXFxkaXN0LW1vZHVsZVxcc291cmNlXFxjbGllbnR8aHR0cHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9pZ25vcmVkfEM6XFxhcmNnaXMtZXhwZXJpZW5jZS1idWlsZGVyLTEuMTZcXEFyY0dJU0V4cGVyaWVuY2VCdWlsZGVyXFxjbGllbnRcXG5vZGVfbW9kdWxlc1xcZ2VvdGlmZlxcZGlzdC1tb2R1bGVcXHNvdXJjZVxcY2xpZW50fHVybCIsIndlYnBhY2s6Ly9leGItY2xpZW50L2lnbm9yZWR8QzpcXGFyY2dpcy1leHBlcmllbmNlLWJ1aWxkZXItMS4xNlxcQXJjR0lTRXhwZXJpZW5jZUJ1aWxkZXJcXGNsaWVudFxcbm9kZV9tb2R1bGVzXFxnZW90aWZmXFxkaXN0LW1vZHVsZVxcc291cmNlfGZzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ2xpZW50IGZvciB0aGUgYXBpLWFncmkuc2dtLnV6c3BhY2UudXogUkVTVCBBUEkg4oCUIHBlci1wb2x5Z29uIHZlZ2V0YXRpb25cbiAqIGluZGV4IGF2YWlsYWJsZSBkYXRlcyBhbmQgY29sb3JlZCByYXN0ZXIgZXhwb3J0cy5cbiAqXG4gKiBTZXBhcmF0ZSBmcm9tIGFncmktdmVnZXRhdGlvbi1kYXRhLXNvdXJjZS50cyAod2hpY2ggcXVlcmllcyB0aGUgcmF3XG4gKiBBcmNHSVMgYWdyaV92ZWdldGF0aW9uX2luZGljZXMgVGFibGUgZGlyZWN0bHkpOiB0aGF0IHRhYmxlIGhhcyBzY2FsYXJcbiAqIGluZGV4IHZhbHVlcyBwZXIgKHVuaXF1ZWlkLCByYXN0ZXJfZGF0ZSksIGZpbmUgZm9yIGNoYXJ0cyBhbmQgdGhlXG4gKiByZWdpb24td2lkZSBzdGF0dXMgYmFyLCBidXQgbm8gcGl4ZWwgZGF0YS4gVGhpcyBBUEkgaXMgdXNlZCBzcGVjaWZpY2FsbHlcbiAqIGZvciB0aGUgc2luZ2xlLXNlbGVjdGVkLXBvbHlnb24gY2FzZSBpbiBBZ3JpR3JhZmYxMCwgd2hlcmUgd2UgbmVlZCBhblxuICogYWN0dWFsIHJlbmRlcmVkLCBnZW9yZWZlcmVuY2VkIHJhc3RlciBpbWFnZSB0byBvdmVybGF5IG9uIHRoZSBtYXAuXG4gKi9cbmltcG9ydCB7IGFkZERlY29kZXIsIGZyb21BcnJheUJ1ZmZlciB9IGZyb20gXCJnZW90aWZmXCI7XG5pbXBvcnQge1xuICBEZWZsYXRlRGVjb2RlcixcbiAgTHp3RGVjb2RlcixcbiAgUGFja2JpdHNEZWNvZGVyLFxuICBSYXdEZWNvZGVyLFxufSBmcm9tIFwiLi4vdmVuZG9yL2dlb3RpZmYtZGVjb2RlcnNcIjtcbmltcG9ydCB7IGdldEFncmlTZXJ2aWNlVXJscyB9IGZyb20gXCIuLi9zaGFyZWQvYWdyaS1zZXJ2aWNlLXVybHNcIjtcblxuYWRkRGVjb2RlcihbdW5kZWZpbmVkLCAxXSwgYXN5bmMgKCkgPT4gUmF3RGVjb2RlciBhcyBhbnksIHVuZGVmaW5lZCwgZmFsc2UpO1xuYWRkRGVjb2Rlcig1LCBhc3luYyAoKSA9PiBMendEZWNvZGVyIGFzIGFueSwgdW5kZWZpbmVkLCBmYWxzZSk7XG5hZGREZWNvZGVyKFs4LCAzMjk0Nl0sIGFzeW5jICgpID0+IERlZmxhdGVEZWNvZGVyIGFzIGFueSwgdW5kZWZpbmVkLCBmYWxzZSk7XG5hZGREZWNvZGVyKDMyNzczLCBhc3luYyAoKSA9PiBQYWNrYml0c0RlY29kZXIgYXMgYW55LCB1bmRlZmluZWQsIGZhbHNlKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFncmlQb2x5Z29uQXBpQmFzZVVybCgpOiBzdHJpbmcge1xuICByZXR1cm4gZ2V0QWdyaVNlcnZpY2VVcmxzKCkucG9seWdvbkFwaUJhc2VVcmw7XG59XG5cbi8qKiBMb2dnZXIgZGlzYWJsZWQg4oCUIGtlZXAgY2FsbCBzaXRlcyB3aXRob3V0IGNvbnNvbGUgbm9pc2UuICovXG5leHBvcnQgZnVuY3Rpb24gYWdyaVBvbHlnb25BcGlMb2coXG4gIF9waGFzZTogc3RyaW5nLFxuICBfZGV0YWlsPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4pOiB2b2lkIHtcbiAgLyogbm8tb3AgKi9cbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb2x5Z29uQXZhaWxhYmxlRGF0ZXNSZXNwb25zZSB7XG4gIHVuaXF1ZWlkOiBzdHJpbmc7XG4gIHJlZ2lvbjogc3RyaW5nO1xuICB5ZWFyOiBudW1iZXI7XG4gIGNvdW50OiBudW1iZXI7XG4gIGRhdGVzOiBzdHJpbmdbXTtcbn1cblxuLyoqXG4gKiBHRVQgL3YxL3BvbHlnb24ve3VuaXF1ZWlkfS9hdmFpbGFibGUtZGF0ZXNcbiAqIENvbmZpcm1lZCByZXNwb25zZSBzaGFwZTogeyB1bmlxdWVpZCwgcmVnaW9uLCB5ZWFyLCBjb3VudCwgZGF0ZXM6IFtdIH1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoUG9seWdvbkF2YWlsYWJsZURhdGVzKFxuICB1bmlxdWVpZDogc3RyaW5nLFxuICByZWdpb25JZDogbnVtYmVyLFxuICB5ZWFyOiBudW1iZXIsXG4pOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gIGNvbnN0IHVybCA9XG4gICAgYCR7Z2V0QWdyaVBvbHlnb25BcGlCYXNlVXJsKCl9L3YxL3BvbHlnb24vJHtlbmNvZGVVUklDb21wb25lbnQodW5pcXVlaWQpfS9hdmFpbGFibGUtZGF0ZXNgICtcbiAgICBgP3JlZ2lvbl9pZD0ke2VuY29kZVVSSUNvbXBvbmVudChTdHJpbmcocmVnaW9uSWQpKX0meWVhcj0ke2VuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoeWVhcikpfWA7XG4gIGFncmlQb2x5Z29uQXBpTG9nKFwiYXZhaWxhYmxlLWRhdGVzOnJlcXVlc3RcIiwgeyB1cmwsIHVuaXF1ZWlkLCByZWdpb25JZCwgeWVhciB9KTtcblxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHsgaGVhZGVyczogeyBhY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiIH0gfSk7XG4gIGlmICghcmVzLm9rKSB7XG4gICAgYWdyaVBvbHlnb25BcGlMb2coXCJhdmFpbGFibGUtZGF0ZXM6RkFJTEVEXCIsIHsgdXJsLCBzdGF0dXM6IHJlcy5zdGF0dXMgfSk7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQICR7cmVzLnN0YXR1c31gKTtcbiAgfVxuICBjb25zdCBqc29uOiBQb2x5Z29uQXZhaWxhYmxlRGF0ZXNSZXNwb25zZSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGFncmlQb2x5Z29uQXBpTG9nKFwiYXZhaWxhYmxlLWRhdGVzOnJlc3BvbnNlXCIsIHtcbiAgICB1bmlxdWVpZCxcbiAgICBjb3VudDoganNvbj8uY291bnQsXG4gICAgZGF0ZXM6IGpzb24/LmRhdGVzLFxuICB9KTtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoanNvbj8uZGF0ZXMpID8ganNvbi5kYXRlcyA6IFtdO1xufVxuXG5leHBvcnQgdHlwZSBWZWdldGF0aW9uSW5kaWNlVHlwZSA9XG4gIHwgXCJuZHZpXCJcbiAgfCBcInNhdmlcIlxuICB8IFwicnZpXCJcbiAgfCBcImNpXCJcbiAgfCBcImV2aVwiXG4gIHwgXCJuZHJlXCJcbiAgfCBcIm5kd2lcIjtcblxuZXhwb3J0IGludGVyZmFjZSBQb2x5Z29uRXhwb3J0SW1hZ2VSZXN1bHQge1xuICAvKiogRGVjb2RlZCwgY29sb3JlZCByYXN0ZXIgZHJhd24gb250byBhIGNhbnZhcyAoUkdCQSksIHJlYWR5IHRvIGRpc3BsYXkuICovXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIC8qKiBbbWluWCwgbWluWSwgbWF4WCwgbWF4WV0sIHJlYWQgZGlyZWN0bHkgZnJvbSB0aGUgR2VvVElGRidzIG93biBnZW8gdGFncy4gKi9cbiAgYmJveDogW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG4gIC8qKiBFUFNHL1dLSUQgcmVhZCBmcm9tIHRoZSBHZW9USUZGIGdlbyBrZXlzLCB3aGVuIHByZXNlbnQuICovXG4gIGVwc2dDb2RlOiBudW1iZXIgfCBudWxsO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIFJvdy1tYWpvciBwZXItcGl4ZWwgaW5kZXggdmFsdWVzIChORFZJL1NBVkkv4oCmKSwgdXNlZCBmb3IgbWFwIGhvdmVyIHRvb2x0aXBzLlxuICAgKiBQcmVzZW50IGZvciBmbG9hdCAvIHNpbmdsZS1iYW5kIHJhc3RlcnMuIEZvciBwcmUtY29sb3JlZCBSR0IsIHByZWZlciBgcmdiYWBcbiAgICogKyBzYW1wbGVJbmRleEZyb21SZ2JhIChhdm9pZHMgYSBmdWxsLWltYWdlIHJldmVyc2UgcGFzcyBiZWZvcmUgZmlyc3QgcGFpbnQpLlxuICAgKi9cbiAgdmFsdWVzOiBGbG9hdDMyQXJyYXkgfCBudWxsO1xuICAvKipcbiAgICogUm93LW1ham9yIFJHQkEgKGxlbmd0aCB3aWR0aCpoZWlnaHQqNCkgZm9yIGxhenkgaG92ZXIgc2FtcGxpbmcgb24gUkdCIFRJRkZzLlxuICAgKiBOdWxsIHdoZW4gYHZhbHVlc2AgYWxyZWFkeSBob2xkcyBmbG9hdCBpbmRpY2VzLlxuICAgKi9cbiAgcmdiYTogVWludDhDbGFtcGVkQXJyYXkgfCBudWxsO1xuICAvKiogU2VudGluZWwgZm9yIHRyYW5zcGFyZW50IC8gb3V0c2lkZS1wb2x5Z29uIHBpeGVscy4gKi9cbiAgbm9EYXRhOiBudW1iZXIgfCBudWxsO1xufVxuXG4vKiogQ2xhc3NpYyB2ZWdldGF0aW9uIGNvbG9yIHN0b3BzIChsb3cg4oaSIGhpZ2gpIGZvciBjbGllbnQtc2lkZSBjb2xvcml6ZSArIFJHQiByZXZlcnNlLiAqL1xuY29uc3QgVkVHX0NPTE9SX1NUT1BTOiBBcnJheTx7IHY6IG51bWJlcjsgcjogbnVtYmVyOyBnOiBudW1iZXI7IGI6IG51bWJlciB9PiA9IFtcbiAgeyB2OiAwLjAsIHI6IDE2NSwgZzogMCwgYjogMzggfSxcbiAgeyB2OiAwLjE1LCByOiAyMTUsIGc6IDQ4LCBiOiAzOSB9LFxuICB7IHY6IDAuMywgcjogMjQ0LCBnOiAxMDksIGI6IDY3IH0sXG4gIHsgdjogMC40NSwgcjogMjUzLCBnOiAxNzQsIGI6IDk3IH0sXG4gIHsgdjogMC41NSwgcjogMjU0LCBnOiAyMjQsIGI6IDEzOSB9LFxuICB7IHY6IDAuNjUsIHI6IDIxNywgZzogMjM5LCBiOiAxMzkgfSxcbiAgeyB2OiAwLjc1LCByOiAxNjYsIGc6IDIxNywgYjogMTA2IH0sXG4gIHsgdjogMC44NSwgcjogMTAyLCBnOiAxODksIGI6IDk5IH0sXG4gIHsgdjogMC45NSwgcjogMjYsIGc6IDE1MiwgYjogODAgfSxcbiAgeyB2OiAxLjAsIHI6IDAsIGc6IDEwNCwgYjogNTUgfSxcbl07XG5cbmZ1bmN0aW9uIGxlcnAoYTogbnVtYmVyLCBiOiBudW1iZXIsIHQ6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBhICsgKGIgLSBhKSAqIHQ7XG59XG5cbmZ1bmN0aW9uIGNvbG9yaXplSW5kZXhWYWx1ZShcbiAgdmFsdWU6IG51bWJlcixcbiAgb3V0OiBVaW50OENsYW1wZWRBcnJheSxcbiAgb2Zmc2V0OiBudW1iZXIsXG4pOiB2b2lkIHtcbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUodmFsdWUpKSB7XG4gICAgb3V0W29mZnNldF0gPSAwO1xuICAgIG91dFtvZmZzZXQgKyAxXSA9IDA7XG4gICAgb3V0W29mZnNldCArIDJdID0gMDtcbiAgICBvdXRbb2Zmc2V0ICsgM10gPSAwO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB2ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdmFsdWUpKTtcbiAgbGV0IGkgPSAwO1xuICB3aGlsZSAoaSA8IFZFR19DT0xPUl9TVE9QUy5sZW5ndGggLSAxICYmIFZFR19DT0xPUl9TVE9QU1tpICsgMV0udiA8IHYpIGkrKztcbiAgY29uc3QgYSA9IFZFR19DT0xPUl9TVE9QU1tpXTtcbiAgY29uc3QgYiA9IFZFR19DT0xPUl9TVE9QU1tNYXRoLm1pbihpICsgMSwgVkVHX0NPTE9SX1NUT1BTLmxlbmd0aCAtIDEpXTtcbiAgY29uc3Qgc3BhbiA9IGIudiAtIGEudiB8fCAxO1xuICBjb25zdCB0ID0gKHYgLSBhLnYpIC8gc3BhbjtcbiAgb3V0W29mZnNldF0gPSBNYXRoLnJvdW5kKGxlcnAoYS5yLCBiLnIsIHQpKTtcbiAgb3V0W29mZnNldCArIDFdID0gTWF0aC5yb3VuZChsZXJwKGEuZywgYi5nLCB0KSk7XG4gIG91dFtvZmZzZXQgKyAyXSA9IE1hdGgucm91bmQobGVycChhLmIsIGIuYiwgdCkpO1xuICBvdXRbb2Zmc2V0ICsgM10gPSAyNTU7XG59XG5cbi8qKlxuICogUmVjb3ZlciBhbiBhcHByb3hpbWF0ZSBjb250aW51b3VzIGluZGV4ICgwLi4xKSBmcm9tIGEgcHJlLWNvbG9yZWQgUkdCIHBpeGVsLlxuICogUHJvamVjdHMgb250byB0aGUgbmVhcmVzdCBzZWdtZW50IG9mIFZFR19DT0xPUl9TVE9QUyAobm90IG5lYXJlc3Qgc3RvcCBvbmx5KSxcbiAqIHNvIGhvdmVyIHNob3dzIHZhbHVlcyBsaWtlIDAuMjIgLyAwLjM3IGluc3RlYWQgb2Ygb25seSAwLjE1IC8gMC4zMCAvIDAuNDUuXG4gKiBTdGlsbCBhbiBhcHByb3hpbWF0aW9uIHdoZW4gdGhlIFRJRkYgaGFzIG5vIGZsb2F0IGJhbmQg4oCUIHRydWUgTkRWSSBuZWVkcyBmbG9hdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzYW1wbGVJbmRleEZyb21SZ2JhKFxuICByOiBudW1iZXIsXG4gIGc6IG51bWJlcixcbiAgYjogbnVtYmVyLFxuICBhPzogbnVtYmVyLFxuKTogbnVtYmVyIHwgbnVsbCB7XG4gIGlmIChhICE9IG51bGwgJiYgYSA8IDgpIHJldHVybiBudWxsO1xuICBpZiAociArIGcgKyBiIDwgOCkgcmV0dXJuIG51bGw7XG5cbiAgbGV0IGJlc3RWYWwgPSAwO1xuICBsZXQgYmVzdERpc3QgPSBJbmZpbml0eTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IFZFR19DT0xPUl9TVE9QUy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBjb25zdCBzdG9wQSA9IFZFR19DT0xPUl9TVE9QU1tpXTtcbiAgICBjb25zdCBzdG9wQyA9IFZFR19DT0xPUl9TVE9QU1tpICsgMV07XG4gICAgY29uc3QgYWJ4ID0gc3RvcEMuciAtIHN0b3BBLnI7XG4gICAgY29uc3QgYWJ5ID0gc3RvcEMuZyAtIHN0b3BBLmc7XG4gICAgY29uc3QgYWJ6ID0gc3RvcEMuYiAtIHN0b3BBLmI7XG4gICAgY29uc3QgYWIyID0gYWJ4ICogYWJ4ICsgYWJ5ICogYWJ5ICsgYWJ6ICogYWJ6IHx8IDE7XG4gICAgY29uc3QgYXB4ID0gciAtIHN0b3BBLnI7XG4gICAgY29uc3QgYXB5ID0gZyAtIHN0b3BBLmc7XG4gICAgY29uc3QgYXB6ID0gYiAtIHN0b3BBLmI7XG4gICAgbGV0IHQgPSAoYXB4ICogYWJ4ICsgYXB5ICogYWJ5ICsgYXB6ICogYWJ6KSAvIGFiMjtcbiAgICBpZiAodCA8IDApIHQgPSAwO1xuICAgIGVsc2UgaWYgKHQgPiAxKSB0ID0gMTtcbiAgICBjb25zdCBjeCA9IHN0b3BBLnIgKyBhYnggKiB0O1xuICAgIGNvbnN0IGN5ID0gc3RvcEEuZyArIGFieSAqIHQ7XG4gICAgY29uc3QgY3ogPSBzdG9wQS5iICsgYWJ6ICogdDtcbiAgICBjb25zdCBkciA9IHIgLSBjeDtcbiAgICBjb25zdCBkZyA9IGcgLSBjeTtcbiAgICBjb25zdCBkYiA9IGIgLSBjejtcbiAgICBjb25zdCBkaXN0ID0gZHIgKiBkciArIGRnICogZGcgKyBkYiAqIGRiO1xuICAgIGlmIChkaXN0IDwgYmVzdERpc3QpIHtcbiAgICAgIGJlc3REaXN0ID0gZGlzdDtcbiAgICAgIGJlc3RWYWwgPSBzdG9wQS52ICsgKHN0b3BDLnYgLSBzdG9wQS52KSAqIHQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJlc3RWYWw7XG59XG5cbi8qKiBTZXNzaW9uIGNhY2hlOiBmaXJzdCBjbGljayBwYXlzIG5ldHdvcmsrZGVjb2RlOyByZXBlYXRzIHJldXNlIHRoZSBjYW52YXMuICovXG5jb25zdCBleHBvcnRJbWFnZUNhY2hlID0gbmV3IE1hcDxzdHJpbmcsIFByb21pc2U8UG9seWdvbkV4cG9ydEltYWdlUmVzdWx0Pj4oKTtcbmNvbnN0IEVYUE9SVF9JTUFHRV9DQUNIRV9NQVggPSAyNDtcblxuZnVuY3Rpb24gZXhwb3J0SW1hZ2VDYWNoZUtleShwYXJhbXM6IHtcbiAgdW5pcXVlaWQ6IHN0cmluZztcbiAgcmVnaW9uSWQ6IG51bWJlcjtcbiAgcmFzdGVyRGF0ZTogc3RyaW5nO1xuICBpbmRpY2VUeXBlPzogVmVnZXRhdGlvbkluZGljZVR5cGU7XG4gIHN0cmV0Y2g/OiBcImZpeGVkXCIgfCBcIm1pbm1heFwiO1xufSk6IHN0cmluZyB7XG4gIHJldHVybiBbXG4gICAgU3RyaW5nKHBhcmFtcy51bmlxdWVpZCB8fCBcIlwiKS5yZXBsYWNlKC9be31dL2csIFwiXCIpLFxuICAgIHBhcmFtcy5yZWdpb25JZCxcbiAgICBwYXJhbXMucmFzdGVyRGF0ZSxcbiAgICBwYXJhbXMuaW5kaWNlVHlwZSB8fCBcIm5kdmlcIixcbiAgICBwYXJhbXMuc3RyZXRjaCB8fCBcImZpeGVkXCIsXG4gIF0uam9pbihcInxcIik7XG59XG5cbmZ1bmN0aW9uIGNsb25lRXhwb3J0Q2FudmFzKHNvdXJjZTogSFRNTENhbnZhc0VsZW1lbnQpOiBIVE1MQ2FudmFzRWxlbWVudCB7XG4gIGNvbnN0IGNvcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICBjb3B5LndpZHRoID0gc291cmNlLndpZHRoO1xuICBjb3B5LmhlaWdodCA9IHNvdXJjZS5oZWlnaHQ7XG4gIGNvbnN0IGN0eCA9IGNvcHkuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBpZiAoY3R4KSBjdHguZHJhd0ltYWdlKHNvdXJjZSwgMCwgMCk7XG4gIHJldHVybiBjb3B5O1xufVxuXG4vKipcbiAqIEJlc3QtZWZmb3J0IFRMUyAvIEROUyB3YXJtdXAgZm9yIGFwaS1hZ3JpIHNvIHRoZSBmaXJzdCBmaWVsZCBjbGljayBkb2VzIG5vdFxuICogcGF5IGNvbGQtY29ubmVjdGlvbiBjb3N0IG9uIGV4cG9ydC1pbWFnZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdhcm1Qb2x5Z29uQXBpQ29ubmVjdGlvbigpOiB2b2lkIHtcbiAgdHJ5IHtcbiAgICB2b2lkIGZldGNoKGAke2dldEFncmlQb2x5Z29uQXBpQmFzZVVybCgpfS9gLCB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICBoZWFkZXJzOiB7IGFjY2VwdDogXCIqLypcIiB9LFxuICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICBjYWNoZTogXCJuby1zdG9yZVwiLFxuICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgIC8qIGlnbm9yZSDigJQgd2FybXVwIG9ubHkgKi9cbiAgICB9KTtcbiAgfSBjYXRjaCB7XG4gICAgLyogaWdub3JlICovXG4gIH1cbn1cblxuLyoqXG4gKiBHRVQgL3YxL3BvbHlnb24ve3VuaXF1ZWlkfS9leHBvcnQtaW1hZ2UsIHJlcXVlc3RlZCB3aXRoXG4gKiByZXNwb25zZV9mb3JtYXQ9dGlmZiDigJQgZmV0Y2hlcyB0aGUgcmF3IEdlb1RJRkYgYnl0ZXMgZGlyZWN0bHkgKHNraXBzIHRoZVxuICogcmVzcG9uc2VfZm9ybWF0PWpzb24gZW52ZWxvcGUsIHdob3NlIGV4YWN0IHN0YXRzL2Jhc2U2NCBmaWVsZCBuYW1lc1xuICogd2VyZW4ndCBjb25maXJtZWQpIGFuZCBkZWNvZGVzIGl0IGNsaWVudC1zaWRlIHdpdGggZ2VvdGlmZi5qcy4gQSBHZW9USUZGXG4gKiBjYXJyaWVzIGl0cyBvd24gZXh0ZW50ICsgQ1JTIGluIGl0cyB0YWdzLCBzbyBubyBzZXBhcmF0ZSBnZW9yZWZlcmVuY2luZ1xuICogY2FsbCBpcyBuZWVkZWQg4oCUIHJlYWQgaXQgc3RyYWlnaHQgb2ZmIHRoZSBkZWNvZGVkIGltYWdlLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hQb2x5Z29uRXhwb3J0SW1hZ2VUaWZmKHBhcmFtczoge1xuICB1bmlxdWVpZDogc3RyaW5nO1xuICByZWdpb25JZDogbnVtYmVyO1xuICAvKiogWVlZWS1NTS1ERCAqL1xuICByYXN0ZXJEYXRlOiBzdHJpbmc7XG4gIGluZGljZVR5cGU/OiBWZWdldGF0aW9uSW5kaWNlVHlwZTtcbiAgc3RyZXRjaD86IFwiZml4ZWRcIiB8IFwibWlubWF4XCI7XG59KTogUHJvbWlzZTxQb2x5Z29uRXhwb3J0SW1hZ2VSZXN1bHQ+IHtcbiAgY29uc3QgY2FjaGVLZXkgPSBleHBvcnRJbWFnZUNhY2hlS2V5KHBhcmFtcyk7XG4gIGxldCBwZW5kaW5nID0gZXhwb3J0SW1hZ2VDYWNoZS5nZXQoY2FjaGVLZXkpO1xuICBpZiAoIXBlbmRpbmcpIHtcbiAgICBwZW5kaW5nID0gZmV0Y2hQb2x5Z29uRXhwb3J0SW1hZ2VUaWZmVW5jYWNoZWQocGFyYW1zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBleHBvcnRJbWFnZUNhY2hlLmRlbGV0ZShjYWNoZUtleSk7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG4gICAgZXhwb3J0SW1hZ2VDYWNoZS5zZXQoY2FjaGVLZXksIHBlbmRpbmcpO1xuICAgIHdoaWxlIChleHBvcnRJbWFnZUNhY2hlLnNpemUgPiBFWFBPUlRfSU1BR0VfQ0FDSEVfTUFYKSB7XG4gICAgICBjb25zdCBvbGRlc3QgPSBleHBvcnRJbWFnZUNhY2hlLmtleXMoKS5uZXh0KCkudmFsdWU7XG4gICAgICBpZiAob2xkZXN0ID09IG51bGwpIGJyZWFrO1xuICAgICAgZXhwb3J0SW1hZ2VDYWNoZS5kZWxldGUob2xkZXN0KTtcbiAgICB9XG4gIH1cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcGVuZGluZztcbiAgLy8gQ2xvbmUgY2FudmFzIHNvIGEgbGF0ZXIgTWVkaWFMYXllciByZW1vdmUvcmV1c2UgY2Fubm90IGJsYW5rIGEgY2FjaGVkIGVudHJ5LlxuICByZXR1cm4ge1xuICAgIC4uLnJlc3VsdCxcbiAgICBjYW52YXM6IGNsb25lRXhwb3J0Q2FudmFzKHJlc3VsdC5jYW52YXMpLFxuICB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFBvbHlnb25FeHBvcnRJbWFnZVRpZmZVbmNhY2hlZChwYXJhbXM6IHtcbiAgdW5pcXVlaWQ6IHN0cmluZztcbiAgcmVnaW9uSWQ6IG51bWJlcjtcbiAgcmFzdGVyRGF0ZTogc3RyaW5nO1xuICBpbmRpY2VUeXBlPzogVmVnZXRhdGlvbkluZGljZVR5cGU7XG4gIHN0cmV0Y2g/OiBcImZpeGVkXCIgfCBcIm1pbm1heFwiO1xufSk6IFByb21pc2U8UG9seWdvbkV4cG9ydEltYWdlUmVzdWx0PiB7XG4gIGNvbnN0IHFzID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgcmVnaW9uX2lkOiBTdHJpbmcocGFyYW1zLnJlZ2lvbklkKSxcbiAgICByYXN0ZXJfZGF0ZTogcGFyYW1zLnJhc3RlckRhdGUsXG4gICAgaW5kaWNlX3R5cGU6IHBhcmFtcy5pbmRpY2VUeXBlIHx8IFwibmR2aVwiLFxuICAgIHN0cmV0Y2g6IHBhcmFtcy5zdHJldGNoIHx8IFwiZml4ZWRcIixcbiAgICByZXNwb25zZV9mb3JtYXQ6IFwidGlmZlwiLFxuICB9KTtcbiAgY29uc3QgdXJsID0gYCR7Z2V0QWdyaVBvbHlnb25BcGlCYXNlVXJsKCl9L3YxL3BvbHlnb24vJHtlbmNvZGVVUklDb21wb25lbnQocGFyYW1zLnVuaXF1ZWlkKX0vZXhwb3J0LWltYWdlPyR7cXMudG9TdHJpbmcoKX1gO1xuICBhZ3JpUG9seWdvbkFwaUxvZyhcImV4cG9ydC1pbWFnZTpyZXF1ZXN0XCIsIHsgdXJsLCAuLi5wYXJhbXMgfSk7XG5cbiAgLy8gQm91bmQgaHVuZyBleHBvcnQtaW1hZ2UgY2FsbHMgc28gdGhlIG1hcCBsb2FkZXIgY2Fubm90IHN0aWNrIGZvcmV2ZXIuXG4gIGNvbnN0IGNvbnRyb2xsZXIgPVxuICAgIHR5cGVvZiBBYm9ydENvbnRyb2xsZXIgIT09IFwidW5kZWZpbmVkXCIgPyBuZXcgQWJvcnRDb250cm9sbGVyKCkgOiBudWxsO1xuICBjb25zdCB0aW1lb3V0SWQgPVxuICAgIGNvbnRyb2xsZXIgJiYgdHlwZW9mIHNldFRpbWVvdXQgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgLyogaWdub3JlICovXG4gICAgICAgICAgfVxuICAgICAgICB9LCAyNTAwMClcbiAgICAgIDogbnVsbDtcblxuICBsZXQgcmVzOiBSZXNwb25zZTtcbiAgdHJ5IHtcbiAgICByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIGhlYWRlcnM6IHsgYWNjZXB0OiBcIiovKlwiIH0sXG4gICAgICAuLi4oY29udHJvbGxlciA/IHsgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCB9IDoge30pLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgIGlmICh0aW1lb3V0SWQpIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgIGlmIChlcnI/Lm5hbWUgPT09IFwiQWJvcnRFcnJvclwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBvcnQtaW1hZ2Ugc2/igJhyb3ZpIHZhcXRpZGFuIG9zaGRpICgyNXMpLlwiKTtcbiAgICB9XG4gICAgdGhyb3cgZXJyO1xuICB9XG4gIGlmICh0aW1lb3V0SWQpIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICBpZiAoIXJlcy5vaykge1xuICAgIGxldCByZXNwb25zZVRleHQgPSAnJztcbiAgICB0cnkge1xuICAgICAgcmVzcG9uc2VUZXh0ID0gYXdhaXQgcmVzLnRleHQoKTtcbiAgICB9IGNhdGNoIChib2R5RXJyb3I6IGFueSkge1xuICAgICAgcmVzcG9uc2VUZXh0ID0gYDxyZXNwb25zZSBib2R5IHJlYWQgZmFpbGVkOiAke1N0cmluZyhib2R5RXJyb3I/Lm1lc3NhZ2UgfHwgYm9keUVycm9yKX0+YDtcbiAgICB9XG4gICAgY29uc3QgY29udGVudFR5cGUgPSByZXMuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpIHx8ICcnO1xuICAgIGFncmlQb2x5Z29uQXBpTG9nKCdleHBvcnQtaW1hZ2U6RkFJTEVELXJlc3BvbnNlJywge1xuICAgICAgdXJsLFxuICAgICAgc3RhdHVzOiByZXMuc3RhdHVzLFxuICAgICAgc3RhdHVzVGV4dDogcmVzLnN0YXR1c1RleHQsXG4gICAgICBjb250ZW50VHlwZSxcbiAgICAgIHJlc3BvbnNlVGV4dCxcbiAgICB9KTtcbiAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgIGBIVFRQICR7cmVzLnN0YXR1c30ke3Jlcy5zdGF0dXNUZXh0ID8gYCAke3Jlcy5zdGF0dXNUZXh0fWAgOiAnJ30ke3Jlc3BvbnNlVGV4dCA/IGA6ICR7cmVzcG9uc2VUZXh0fWAgOiAnJ31gLFxuICAgICkgYXMgRXJyb3IgJiB7XG4gICAgICBzdGF0dXM/OiBudW1iZXI7XG4gICAgICBzdGF0dXNUZXh0Pzogc3RyaW5nO1xuICAgICAgY29udGVudFR5cGU/OiBzdHJpbmc7XG4gICAgICByZXNwb25zZVRleHQ/OiBzdHJpbmc7XG4gICAgICB1cmw/OiBzdHJpbmc7XG4gICAgfTtcbiAgICBlcnJvci5zdGF0dXMgPSByZXMuc3RhdHVzO1xuICAgIGVycm9yLnN0YXR1c1RleHQgPSByZXMuc3RhdHVzVGV4dDtcbiAgICBlcnJvci5jb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlO1xuICAgIGVycm9yLnJlc3BvbnNlVGV4dCA9IHJlc3BvbnNlVGV4dDtcbiAgICBlcnJvci51cmwgPSB1cmw7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbiAgY29uc3QgYnVmZmVyID0gYXdhaXQgcmVzLmFycmF5QnVmZmVyKCk7XG5cbiAgY29uc3QgdGlmZiA9IGF3YWl0IGZyb21BcnJheUJ1ZmZlcihidWZmZXIpO1xuICBjb25zdCBpbWFnZSA9IGF3YWl0IHRpZmYuZ2V0SW1hZ2UoKTtcbiAgY29uc3QgYmJveCA9IGltYWdlLmdldEJvdW5kaW5nQm94KCkgYXMgW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG4gIGNvbnN0IHdpZHRoID0gaW1hZ2UuZ2V0V2lkdGgoKTtcbiAgY29uc3QgaGVpZ2h0ID0gaW1hZ2UuZ2V0SGVpZ2h0KCk7XG4gIGNvbnN0IHNhbXBsZXNQZXJQaXhlbCA9IGltYWdlLmdldFNhbXBsZXNQZXJQaXhlbCgpO1xuICBjb25zdCBwaXhlbENvdW50ID0gd2lkdGggKiBoZWlnaHQ7XG4gIGlmIChcbiAgICAhQXJyYXkuaXNBcnJheShiYm94KSB8fFxuICAgIGJib3gubGVuZ3RoIDwgNCB8fFxuICAgICFbYmJveFswXSwgYmJveFsxXSwgYmJveFsyXSwgYmJveFszXV0uZXZlcnkoKG4pID0+IE51bWJlci5pc0Zpbml0ZShuKSkgfHxcbiAgICAhKGJib3hbMl0gPiBiYm94WzBdKSB8fFxuICAgICEoYmJveFszXSA+IGJib3hbMV0pIHx8XG4gICAgISh3aWR0aCA+IDApIHx8XG4gICAgIShoZWlnaHQgPiAwKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW9USUZGIGJvdW5kaW5nIGJveC9zaXplIGludmFsaWRcIik7XG4gIH1cblxuICBsZXQgZXBzZ0NvZGU6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICB0cnkge1xuICAgIGNvbnN0IGdlb0tleXM6IGFueSA9IGltYWdlLmdldEdlb0tleXMoKTtcbiAgICBlcHNnQ29kZSA9XG4gICAgICBOdW1iZXIoZ2VvS2V5cz8uUHJvamVjdGVkQ1NUeXBlR2VvS2V5KSB8fFxuICAgICAgTnVtYmVyKGdlb0tleXM/Lkdlb2dyYXBoaWNUeXBlR2VvS2V5KSB8fFxuICAgICAgbnVsbDtcbiAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShlcHNnQ29kZSBhcyBudW1iZXIpKSBlcHNnQ29kZSA9IG51bGw7XG4gIH0gY2F0Y2gge1xuICAgIGVwc2dDb2RlID0gbnVsbDtcbiAgfVxuICAvLyBHZW9ncmFwaGljIGNvb3JkcyB3aXRob3V0IGdlby1rZXlzOiBzYWZlIGRlZmF1bHQuIFByb2plY3RlZCBtZXRyZXMgd2l0aG91dFxuICAvLyBhbiBFUFNHIG11c3Qgbm90IGJlIHRhZ2dlZCBhcyB0aGUgbWFwIHZpZXcgU1IgKGNhdXNlcyBzdHJldGNoL21pc3BsYWNlKS5cbiAgaWYgKGVwc2dDb2RlID09IG51bGwpIHtcbiAgICBjb25zdCBhYnNNYXggPSBNYXRoLm1heChcbiAgICAgIE1hdGguYWJzKGJib3hbMF0pLFxuICAgICAgTWF0aC5hYnMoYmJveFsxXSksXG4gICAgICBNYXRoLmFicyhiYm94WzJdKSxcbiAgICAgIE1hdGguYWJzKGJib3hbM10pLFxuICAgICk7XG4gICAgaWYgKGFic01heCA8PSAxODApIGVwc2dDb2RlID0gNDMyNjtcbiAgfVxuXG4gIGxldCBub0RhdGE6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICB0cnkge1xuICAgIGNvbnN0IGdkID0gTnVtYmVyKChpbWFnZSBhcyBhbnkpLmdldEdEQUxOb0RhdGE/LigpKTtcbiAgICBub0RhdGEgPSBOdW1iZXIuaXNGaW5pdGUoZ2QpID8gZ2QgOiBudWxsO1xuICB9IGNhdGNoIHtcbiAgICBub0RhdGEgPSBudWxsO1xuICB9XG5cbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGlmICghY3R4KSB0aHJvdyBuZXcgRXJyb3IoXCIyRCBjYW52YXMgY29udGV4dCB1bmF2YWlsYWJsZVwiKTtcblxuICBjb25zdCBpbWFnZURhdGEgPSBjdHguY3JlYXRlSW1hZ2VEYXRhKHdpZHRoLCBoZWlnaHQpO1xuICBjb25zdCBvdXQgPSBpbWFnZURhdGEuZGF0YTtcbiAgY29uc3QgY2xhbXAyNTUgPSAodjogdW5rbm93bik6IG51bWJlciA9PiB7XG4gICAgY29uc3QgbiA9IE1hdGgucm91bmQoTnVtYmVyKHYpIHx8IDApO1xuICAgIHJldHVybiBuIDwgMCA/IDAgOiBuID4gMjU1ID8gMjU1IDogbjtcbiAgfTtcblxuICBsZXQgaG92ZXJWYWx1ZXM6IEZsb2F0MzJBcnJheSB8IG51bGwgPSBudWxsO1xuICBsZXQgZGF0YU1pbiA9IEluZmluaXR5O1xuICBsZXQgZGF0YU1heCA9IC1JbmZpbml0eTtcblxuICBpZiAoc2FtcGxlc1BlclBpeGVsID49IDMpIHtcbiAgICAvLyBQcmUtY29sb3JlZCBSR0IvUkdCQTogb25lIGludGVybGVhdmVkIHJlYWQgb25seSAod2FzIGRvdWJsZS1yZWFkIGJlZm9yZSkuXG4gICAgY29uc3QgcmFzdGVyID0gKGF3YWl0IGltYWdlLnJlYWRSYXN0ZXJzKHsgaW50ZXJsZWF2ZTogdHJ1ZSB9KSkgYXNcbiAgICAgIHwgVWludDhBcnJheVxuICAgICAgfCBVaW50OENsYW1wZWRBcnJheVxuICAgICAgfCBGbG9hdDMyQXJyYXlcbiAgICAgIHwgbnVtYmVyW107XG4gICAgY29uc3Qgc3RyaWRlID0gc2FtcGxlc1BlclBpeGVsO1xuICAgIGlmIChzYW1wbGVzUGVyUGl4ZWwgPj0gNCkge1xuICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCBwaXhlbENvdW50OyBwKyspIHtcbiAgICAgICAgY29uc3QgbyA9IHAgKiBzdHJpZGU7XG4gICAgICAgIG91dFtwICogNF0gPSBjbGFtcDI1NShyYXN0ZXJbb10pO1xuICAgICAgICBvdXRbcCAqIDQgKyAxXSA9IGNsYW1wMjU1KHJhc3RlcltvICsgMV0pO1xuICAgICAgICBvdXRbcCAqIDQgKyAyXSA9IGNsYW1wMjU1KHJhc3RlcltvICsgMl0pO1xuICAgICAgICBvdXRbcCAqIDQgKyAzXSA9IGNsYW1wMjU1KHJhc3RlcltvICsgM10pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBwID0gMDsgcCA8IHBpeGVsQ291bnQ7IHArKykge1xuICAgICAgICBjb25zdCBvID0gcCAqIDM7XG4gICAgICAgIG91dFtwICogNF0gPSBjbGFtcDI1NShyYXN0ZXJbb10pO1xuICAgICAgICBvdXRbcCAqIDQgKyAxXSA9IGNsYW1wMjU1KHJhc3RlcltvICsgMV0pO1xuICAgICAgICBvdXRbcCAqIDQgKyAyXSA9IGNsYW1wMjU1KHJhc3RlcltvICsgMl0pO1xuICAgICAgICBvdXRbcCAqIDQgKyAzXSA9IDI1NTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgYmFuZHMgPSAoYXdhaXQgaW1hZ2UucmVhZFJhc3RlcnMoeyBpbnRlcmxlYXZlOiBmYWxzZSB9KSkgYXMgYW55W107XG4gICAgY29uc3QgYmFuZDAgPSBiYW5kcz8uWzBdO1xuICAgIGNvbnN0IHZhbHVlcyA9IG5ldyBGbG9hdDMyQXJyYXkocGl4ZWxDb3VudCk7XG4gICAgZm9yIChsZXQgcCA9IDA7IHAgPCBwaXhlbENvdW50OyBwKyspIHtcbiAgICAgIGNvbnN0IHJhdyA9IE51bWJlcihiYW5kMD8uW3BdKTtcbiAgICAgIGNvbnN0IHYgPSBOdW1iZXIuaXNGaW5pdGUocmF3KSA/IHJhdyA6IE5hTjtcbiAgICAgIHZhbHVlc1twXSA9IHY7XG4gICAgICBpZiAoTnVtYmVyLmlzRmluaXRlKHYpICYmIChub0RhdGEgPT0gbnVsbCB8fCB2ICE9PSBub0RhdGEpKSB7XG4gICAgICAgIGlmICh2IDwgZGF0YU1pbikgZGF0YU1pbiA9IHY7XG4gICAgICAgIGlmICh2ID4gZGF0YU1heCkgZGF0YU1heCA9IHY7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbG9va3NMaWtlSW5kZXggPVxuICAgICAgTnVtYmVyLmlzRmluaXRlKGRhdGFNaW4pICYmXG4gICAgICBOdW1iZXIuaXNGaW5pdGUoZGF0YU1heCkgJiZcbiAgICAgIGRhdGFNaW4gPj0gLTEuNSAmJlxuICAgICAgZGF0YU1heCA8PSAxLjU7XG4gICAgY29uc3QgbG9va3NMaWtlQnl0ZSA9XG4gICAgICBOdW1iZXIuaXNGaW5pdGUoZGF0YU1pbikgJiZcbiAgICAgIE51bWJlci5pc0Zpbml0ZShkYXRhTWF4KSAmJlxuICAgICAgZGF0YU1heCA+IDIgJiZcbiAgICAgIGRhdGFNYXggPD0gMjU1O1xuXG4gICAgaWYgKGxvb2tzTGlrZUluZGV4KSB7XG4gICAgICBob3ZlclZhbHVlcyA9IHZhbHVlcztcbiAgICB9IGVsc2UgaWYgKGxvb2tzTGlrZUJ5dGUpIHtcbiAgICAgIGhvdmVyVmFsdWVzID0gbmV3IEZsb2F0MzJBcnJheShwaXhlbENvdW50KTtcbiAgICAgIGZvciAobGV0IHAgPSAwOyBwIDwgcGl4ZWxDb3VudDsgcCsrKSB7XG4gICAgICAgIGNvbnN0IHYgPSB2YWx1ZXNbcF07XG4gICAgICAgIGhvdmVyVmFsdWVzW3BdID1cbiAgICAgICAgICAhTnVtYmVyLmlzRmluaXRlKHYpIHx8IHYgPD0gMCB8fCAobm9EYXRhICE9IG51bGwgJiYgdiA9PT0gbm9EYXRhKVxuICAgICAgICAgICAgPyBOYU5cbiAgICAgICAgICAgIDogdiAvIDI1NTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobG9va3NMaWtlSW5kZXggfHwgKGxvb2tzTGlrZUJ5dGUgJiYgaG92ZXJWYWx1ZXMpKSB7XG4gICAgICBjb25zdCBzcmMgPSBob3ZlclZhbHVlcyB8fCB2YWx1ZXM7XG4gICAgICBmb3IgKGxldCBwID0gMDsgcCA8IHBpeGVsQ291bnQ7IHArKykge1xuICAgICAgICBjb2xvcml6ZUluZGV4VmFsdWUoc3JjW3BdLCBvdXQsIHAgKiA0KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPCBwaXhlbENvdW50OyBwKyspIHtcbiAgICAgICAgY29uc3QgdiA9IGNsYW1wMjU1KHZhbHVlc1twXSk7XG4gICAgICAgIG91dFtwICogNF0gPSB2O1xuICAgICAgICBvdXRbcCAqIDQgKyAxXSA9IHY7XG4gICAgICAgIG91dFtwICogNCArIDJdID0gdjtcbiAgICAgICAgb3V0W3AgKiA0ICsgM10gPSB2ID4gMCA/IDI1NSA6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY3R4LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIDAsIDApO1xuXG4gIC8vIE9ubHkga2VlcCBSR0JBIHdoZW4gaG92ZXIgZmxvYXRzIHdlcmUgbm90IHJlY292ZXJlZCAodHlwaWNhbCBSR0IgVElGRikuXG4gIGNvbnN0IHJnYmFGb3JIb3ZlciA9XG4gICAgIWhvdmVyVmFsdWVzICYmIHNhbXBsZXNQZXJQaXhlbCA+PSAzXG4gICAgICA/IG5ldyBVaW50OENsYW1wZWRBcnJheShvdXQpXG4gICAgICA6IG51bGw7XG5cbiAgYWdyaVBvbHlnb25BcGlMb2coXCJleHBvcnQtaW1hZ2U6ZGVjb2RlZFwiLCB7XG4gICAgdW5pcXVlaWQ6IHBhcmFtcy51bmlxdWVpZCxcbiAgICByYXN0ZXJEYXRlOiBwYXJhbXMucmFzdGVyRGF0ZSxcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgc2FtcGxlc1BlclBpeGVsLFxuICAgIGJib3gsXG4gICAgZXBzZ0NvZGUsXG4gICAgZGF0YU1pbjogTnVtYmVyLmlzRmluaXRlKGRhdGFNaW4pID8gZGF0YU1pbiA6IG51bGwsXG4gICAgZGF0YU1heDogTnVtYmVyLmlzRmluaXRlKGRhdGFNYXgpID8gZGF0YU1heCA6IG51bGwsXG4gICAgaGFzSG92ZXJWYWx1ZXM6IEJvb2xlYW4oaG92ZXJWYWx1ZXMpLFxuICAgIGhhc1JnYmFIb3ZlcjogQm9vbGVhbihyZ2JhRm9ySG92ZXIpLFxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGNhbnZhcyxcbiAgICBiYm94LFxuICAgIGVwc2dDb2RlLFxuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICB2YWx1ZXM6IGhvdmVyVmFsdWVzLFxuICAgIHJnYmE6IHJnYmFGb3JIb3ZlcixcbiAgICBub0RhdGEsXG4gIH07XG59XG4iLCIvKipcbiAqIFNoYXJlZCB2ZWdldGF0aW9uIG92ZXJsYXkgY29udGV4dCBzbyBQb3B1cCBjYW4gd2FybSBleHBvcnQtaW1hZ2UgYXMgc29vbiBhc1xuICogdW5pcXVlaWQgaXMga25vd24g4oCUIHdpdGhvdXQgd2FpdGluZyBmb3IgR3JhZmYgc2V0U3RhdGUgLyBhdmFpbGFibGUtZGF0ZXMgcmFjZS5cbiAqL1xuaW1wb3J0IHtcbiAgZmV0Y2hQb2x5Z29uQXZhaWxhYmxlRGF0ZXMsXG4gIGZldGNoUG9seWdvbkV4cG9ydEltYWdlVGlmZixcbiAgdHlwZSBWZWdldGF0aW9uSW5kaWNlVHlwZSxcbn0gZnJvbSBcIi4uL2dpcy9hZ3JpLXBvbHlnb24tYXBpLXNvdXJjZVwiO1xuXG5jb25zdCBTRVNTSU9OX0RBVEVfS0VZID0gXCJhZ3JpLnZlZy5vdmVybGF5Lmxhc3REYXRlXCI7XG5jb25zdCBTRVNTSU9OX0lOREVYX0tFWSA9IFwiYWdyaS52ZWcub3ZlcmxheS5sYXN0SW5kZXhcIjtcbmNvbnN0IFNFU1NJT05fUkVHSU9OX0tFWSA9IFwiYWdyaS52ZWcub3ZlcmxheS5sYXN0UmVnaW9uXCI7XG5jb25zdCBTRVNTSU9OX1lFQVJfS0VZID0gXCJhZ3JpLnZlZy5vdmVybGF5Lmxhc3RZZWFyXCI7XG5cbnR5cGUgT3ZlcmxheUNvbnRleHQgPSB7XG4gIHJlZ2lvbklkPzogbnVtYmVyO1xuICB5ZWFyPzogbnVtYmVyO1xuICBsYXN0RGF0ZT86IHN0cmluZyB8IG51bGw7XG4gIGxhc3RJbmRleD86IFZlZ2V0YXRpb25JbmRpY2VUeXBlO1xufTtcblxubGV0IGN0eDogT3ZlcmxheUNvbnRleHQgPSB7fTtcblxuZnVuY3Rpb24gcmVhZFNlc3Npb24oKTogT3ZlcmxheUNvbnRleHQge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2Ygc2Vzc2lvblN0b3JhZ2UgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiB7fTtcbiAgICBjb25zdCBkYXRlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTRVNTSU9OX0RBVEVfS0VZKSB8fCB1bmRlZmluZWQ7XG4gICAgY29uc3QgaW5kZXggPSAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTRVNTSU9OX0lOREVYX0tFWSkgfHxcbiAgICAgIHVuZGVmaW5lZCkgYXMgVmVnZXRhdGlvbkluZGljZVR5cGUgfCB1bmRlZmluZWQ7XG4gICAgY29uc3QgcmVnaW9uUmF3ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTRVNTSU9OX1JFR0lPTl9LRVkpO1xuICAgIGNvbnN0IHllYXJSYXcgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFNFU1NJT05fWUVBUl9LRVkpO1xuICAgIGNvbnN0IHJlZ2lvbklkID0gcmVnaW9uUmF3ICE9IG51bGwgPyBOdW1iZXIocmVnaW9uUmF3KSA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCB5ZWFyID0geWVhclJhdyAhPSBudWxsID8gTnVtYmVyKHllYXJSYXcpIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiB7XG4gICAgICBsYXN0RGF0ZTogZGF0ZSB8fCBudWxsLFxuICAgICAgbGFzdEluZGV4OiBpbmRleCB8fCBcIm5kdmlcIixcbiAgICAgIHJlZ2lvbklkOiBOdW1iZXIuaXNGaW5pdGUocmVnaW9uSWQgYXMgbnVtYmVyKSA/IHJlZ2lvbklkIDogdW5kZWZpbmVkLFxuICAgICAgeWVhcjogTnVtYmVyLmlzRmluaXRlKHllYXIgYXMgbnVtYmVyKSA/IHllYXIgOiB1bmRlZmluZWQsXG4gICAgfTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHdyaXRlU2Vzc2lvbihuZXh0OiBPdmVybGF5Q29udGV4dCk6IHZvaWQge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2Ygc2Vzc2lvblN0b3JhZ2UgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybjtcbiAgICBpZiAobmV4dC5sYXN0RGF0ZSkgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTRVNTSU9OX0RBVEVfS0VZLCBuZXh0Lmxhc3REYXRlKTtcbiAgICBpZiAobmV4dC5sYXN0SW5kZXgpXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFNFU1NJT05fSU5ERVhfS0VZLCBuZXh0Lmxhc3RJbmRleCk7XG4gICAgaWYgKG5leHQucmVnaW9uSWQgIT0gbnVsbClcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU0VTU0lPTl9SRUdJT05fS0VZLCBTdHJpbmcobmV4dC5yZWdpb25JZCkpO1xuICAgIGlmIChuZXh0LnllYXIgIT0gbnVsbClcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU0VTU0lPTl9ZRUFSX0tFWSwgU3RyaW5nKG5leHQueWVhcikpO1xuICB9IGNhdGNoIHtcbiAgICAvKiBpZ25vcmUgcXVvdGEgLyBwcml2YXRlIG1vZGUgKi9cbiAgfVxufVxuXG4vKiogTWVyZ2UgbGl2ZSBHcmFmZi9Mb2NhbGl6YXRpb24gY29udGV4dCAocmVnaW9uL3llYXIvbGFzdCBzdWNjZXNzZnVsIGRhdGUpLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFZlZ2V0YXRpb25PdmVybGF5Q29udGV4dChcbiAgcGF0Y2g6IE92ZXJsYXlDb250ZXh0LFxuKTogT3ZlcmxheUNvbnRleHQge1xuICBjdHggPSB7XG4gICAgLi4uY3R4LFxuICAgIC4uLnBhdGNoLFxuICB9O1xuICB3cml0ZVNlc3Npb24oY3R4KTtcbiAgcmV0dXJuIGN0eDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZlZ2V0YXRpb25PdmVybGF5Q29udGV4dCgpOiBPdmVybGF5Q29udGV4dCB7XG4gIGlmIChcbiAgICBjdHgucmVnaW9uSWQgPT0gbnVsbCB8fFxuICAgIGN0eC55ZWFyID09IG51bGwgfHxcbiAgICAhY3R4Lmxhc3REYXRlXG4gICkge1xuICAgIGNvbnN0IGZyb21TZXNzaW9uID0gcmVhZFNlc3Npb24oKTtcbiAgICBjdHggPSB7XG4gICAgICByZWdpb25JZDogY3R4LnJlZ2lvbklkID8/IGZyb21TZXNzaW9uLnJlZ2lvbklkLFxuICAgICAgeWVhcjogY3R4LnllYXIgPz8gZnJvbVNlc3Npb24ueWVhcixcbiAgICAgIGxhc3REYXRlOiBjdHgubGFzdERhdGUgPz8gZnJvbVNlc3Npb24ubGFzdERhdGUsXG4gICAgICBsYXN0SW5kZXg6IGN0eC5sYXN0SW5kZXggPz8gZnJvbVNlc3Npb24ubGFzdEluZGV4ID8/IFwibmR2aVwiLFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIGN0eDtcbn1cblxuZnVuY3Rpb24gY2xlYW5VbmlxdWVpZCh1bmlxdWVpZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIFN0cmluZyh1bmlxdWVpZCB8fCBcIlwiKS5yZXBsYWNlKC9be31dL2csIFwiXCIpLnRyaW0oKTtcbn1cblxuLyoqXG4gKiBGaXJlLWFuZC1mb3JnZXQ6IHN0YXJ0IGF2YWlsYWJsZS1kYXRlcyAoaWYgbmVlZGVkKSArIGV4cG9ydC1pbWFnZSBpbnRvIHRoZVxuICogc2Vzc2lvbiBUSUZGIGNhY2hlIHNvIEdyYWZmJ3MgYXBwbHlWZWdldGF0aW9uSW1hZ2VPdmVybGF5IGhpdHMgYSB3YXJtIHByb21pc2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcmVmZXRjaFZlZ2V0YXRpb25PdmVybGF5Rm9yVW5pcXVlaWQoXG4gIHVuaXF1ZWlkOiBzdHJpbmcsXG4gIG9wdHM/OiB7XG4gICAgcmVnaW9uSWQ/OiBudW1iZXI7XG4gICAgeWVhcj86IG51bWJlcjtcbiAgICByYXN0ZXJEYXRlPzogc3RyaW5nIHwgbnVsbDtcbiAgICBpbmRpY2VUeXBlPzogVmVnZXRhdGlvbkluZGljZVR5cGU7XG4gIH0sXG4pOiB2b2lkIHtcbiAgY29uc3QgaWQgPSBjbGVhblVuaXF1ZWlkKHVuaXF1ZWlkKTtcbiAgaWYgKCFpZCkgcmV0dXJuO1xuXG4gIGNvbnN0IGxpdmUgPSBnZXRWZWdldGF0aW9uT3ZlcmxheUNvbnRleHQoKTtcbiAgY29uc3QgcmVnaW9uSWQgPSBvcHRzPy5yZWdpb25JZCA/PyBsaXZlLnJlZ2lvbklkO1xuICBjb25zdCB5ZWFyID0gb3B0cz8ueWVhciA/PyBsaXZlLnllYXI7XG4gIGNvbnN0IGluZGljZVR5cGUgPSAob3B0cz8uaW5kaWNlVHlwZSB8fFxuICAgIGxpdmUubGFzdEluZGV4IHx8XG4gICAgXCJuZHZpXCIpIGFzIFZlZ2V0YXRpb25JbmRpY2VUeXBlO1xuICBsZXQgcmFzdGVyRGF0ZSA9IChvcHRzPy5yYXN0ZXJEYXRlIHx8IGxpdmUubGFzdERhdGUgfHwgXCJcIikudHJpbSgpO1xuXG4gIGlmIChyZWdpb25JZCA9PSBudWxsIHx8ICFOdW1iZXIuaXNGaW5pdGUocmVnaW9uSWQpKSByZXR1cm47XG5cbiAgY29uc3QgcnVuRXhwb3J0ID0gKGRhdGU6IHN0cmluZykgPT4ge1xuICAgIGlmICghZGF0ZSkgcmV0dXJuO1xuICAgIHNldFZlZ2V0YXRpb25PdmVybGF5Q29udGV4dCh7XG4gICAgICByZWdpb25JZCxcbiAgICAgIHllYXIsXG4gICAgICBsYXN0RGF0ZTogZGF0ZSxcbiAgICAgIGxhc3RJbmRleDogaW5kaWNlVHlwZSxcbiAgICB9KTtcbiAgICB2b2lkIGZldGNoUG9seWdvbkV4cG9ydEltYWdlVGlmZih7XG4gICAgICB1bmlxdWVpZDogaWQsXG4gICAgICByZWdpb25JZCxcbiAgICAgIHJhc3RlckRhdGU6IGRhdGUsXG4gICAgICBpbmRpY2VUeXBlLFxuICAgICAgc3RyZXRjaDogXCJmaXhlZFwiLFxuICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgIC8qIHdhcm0gb25seSDigJQgR3JhZmYgaGFuZGxlcyBlcnJvcnMgKi9cbiAgICB9KTtcbiAgfTtcblxuICBpZiAocmFzdGVyRGF0ZSkge1xuICAgIHJ1bkV4cG9ydChyYXN0ZXJEYXRlKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoeWVhciA9PSBudWxsIHx8ICFOdW1iZXIuaXNGaW5pdGUoeWVhcikpIHJldHVybjtcblxuICB2b2lkIGZldGNoUG9seWdvbkF2YWlsYWJsZURhdGVzKGlkLCByZWdpb25JZCwgeWVhcilcbiAgICAudGhlbigoZGF0ZXMpID0+IHtcbiAgICAgIGlmICghZGF0ZXM/Lmxlbmd0aCkgcmV0dXJuO1xuICAgICAgY29uc3Qgc29ydGVkID0gZGF0ZXNcbiAgICAgICAgLnNsaWNlKClcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IFN0cmluZyhhKS5sb2NhbGVDb21wYXJlKFN0cmluZyhiKSkpO1xuICAgICAgY29uc3QgbGF0ZXN0ID0gc29ydGVkW3NvcnRlZC5sZW5ndGggLSAxXTtcbiAgICAgIGlmIChsYXRlc3QpIHJ1bkV4cG9ydChsYXRlc3QpO1xuICAgIH0pXG4gICAgLmNhdGNoKCgpID0+IHtcbiAgICAgIC8qIGlnbm9yZSAqL1xuICAgIH0pO1xufVxuIiwiLyoqIFNoYXJlZCB2ZWdldGF0aW9uIGluZGV4IGxlZ2VuZCBjb25maWcgZm9yIEdyYWZmIGdyYXBoL3RhYmxlIHZpZXdzLiAqL1xuZXhwb3J0IHR5cGUgR3JhZmZJbmRleEtleSA9IFwibmR2aVwiIHwgXCJzYXZpXCIgfCBcInJ2aVwiIHwgXCJjaVwiIHwgXCJldmlcIiB8IFwibmR3aVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdyYWZmSW5kZXhCdXR0b24ge1xuICBrZXk6IEdyYWZmSW5kZXhLZXk7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGNvbG9yOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBHUkFGRl9JTkRFWF9CVVRUT05TOiBHcmFmZkluZGV4QnV0dG9uW10gPSBbXG4gIHsga2V5OiBcIm5kdmlcIiwgbGFiZWw6IFwiTkRWSVwiLCBjb2xvcjogXCIjMDBkMDg0XCIgfSxcbiAgeyBrZXk6IFwic2F2aVwiLCBsYWJlbDogXCJTQVZJXCIsIGNvbG9yOiBcIiM3YWE1ZmZcIiB9LFxuICB7IGtleTogXCJydmlcIiwgbGFiZWw6IFwiUlZJXCIsIGNvbG9yOiBcIiNmZmIzNDdcIiB9LFxuICB7IGtleTogXCJjaVwiLCBsYWJlbDogXCJDSVwiLCBjb2xvcjogXCIjYzc4YmZmXCIgfSxcbiAgeyBrZXk6IFwiZXZpXCIsIGxhYmVsOiBcIkVWSVwiLCBjb2xvcjogXCIjZmY0ZDhkXCIgfSxcbiAgeyBrZXk6IFwibmR3aVwiLCBsYWJlbDogXCJORFdJXCIsIGNvbG9yOiBcIiMyZWM0ZjFcIiB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IEdSQUZGX0lOREVYX09SREVSOiBHcmFmZkluZGV4S2V5W10gPSBHUkFGRl9JTkRFWF9CVVRUT05TLm1hcChcbiAgKGl0ZW0pID0+IGl0ZW0ua2V5LFxuKTtcblxuLyoqIFJlcHVibGljIHJlZ2lvbmFsIHRpbWVzZXJpZXMgQVZHIGZpZWxkIGFsbG93LWxpc3QuICovXG5leHBvcnQgY29uc3QgUkVQVUJMSUNfVElNRVNFUklFU19JTkRFWF9GSUVMRFMgPSBbXG4gIFwibmR2aVwiLFxuICBcInNhdmlcIixcbiAgXCJldmlcIixcbiAgXCJydmlcIixcbiAgXCJjaVwiLFxuICBcIm5kd2lcIixcbl0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIFJlcHVibGljVGltZXNlcmllc0luZGV4RmllbGQgPVxuICAodHlwZW9mIFJFUFVCTElDX1RJTUVTRVJJRVNfSU5ERVhfRklFTERTKVtudW1iZXJdO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXB1YmxpY1RpbWVzZXJpZXNJbmRleEZpZWxkKFxuICB2YWx1ZTogc3RyaW5nLFxuKTogdmFsdWUgaXMgUmVwdWJsaWNUaW1lc2VyaWVzSW5kZXhGaWVsZCB7XG4gIHJldHVybiAoUkVQVUJMSUNfVElNRVNFUklFU19JTkRFWF9GSUVMRFMgYXMgcmVhZG9ubHkgc3RyaW5nW10pLmluY2x1ZGVzKFxuICAgIHZhbHVlLFxuICApO1xufVxuIiwiLyoqXG4gKiBTaW5nbGUgaW1wb3J0IHNpdGUgZm9yIGdlb3RpZmYgY29tcHJlc3Npb24gZGVjb2RlcnMuXG4gKiBnZW90aWZmJ3MgcGFja2FnZS5qc29uIG9ubHkgZXhwb3J0cyBcIi5cIiDigJQgZGVlcCBpbXBvcnRzIGZhaWwgdW5kZXIgd2VicGFjayA1LlxuICogUmVsYXRpdmUgbm9kZV9tb2R1bGVzIHBhdGhzICg2IGxldmVscyBmcm9tIHNyYy92ZW5kb3Ig4oaSIGNsaWVudC8pIGJ5cGFzcyBleHBvcnRzLlxuICovXG5pbXBvcnQgUmF3RGVjb2RlciBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2dlb3RpZmYvZGlzdC1tb2R1bGUvY29tcHJlc3Npb24vcmF3LmpzXCI7XG5pbXBvcnQgTHp3RGVjb2RlciBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2dlb3RpZmYvZGlzdC1tb2R1bGUvY29tcHJlc3Npb24vbHp3LmpzXCI7XG5pbXBvcnQgRGVmbGF0ZURlY29kZXIgZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9nZW90aWZmL2Rpc3QtbW9kdWxlL2NvbXByZXNzaW9uL2RlZmxhdGUuanNcIjtcbmltcG9ydCBQYWNrYml0c0RlY29kZXIgZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9nZW90aWZmL2Rpc3QtbW9kdWxlL2NvbXByZXNzaW9uL3BhY2tiaXRzLmpzXCI7XG5cbmV4cG9ydCB7IFJhd0RlY29kZXIsIEx6d0RlY29kZXIsIERlZmxhdGVEZWNvZGVyLCBQYWNrYml0c0RlY29kZXIgfTtcbiIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==