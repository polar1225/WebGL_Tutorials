declare module BABYLON {
    class InstancingAttributeInfo {
        /**
         * Index/offset of the attribute in the vertex shader
         */
        index: number;
        /**
         * size of the attribute, 1, 2, 3 or 4
         */
        attributeSize: number;
        /**
         * type of the attribute, gl.BYTE, gl.UNSIGNED_BYTE, gl.SHORT, gl.UNSIGNED_SHORT, gl.FIXED, gl.FLOAT.
         * default is FLOAT
         */
        attribyteType: number;
        /**
         * normalization of fixed-point data. behavior unclear, use FALSE, default is FALSE
         */
        normalized: boolean;
        /**
         * Offset of the data in the Vertex Buffer acting as the instancing buffer
         */
        offset: number;
        /**
         * Name of the GLSL attribute, for debugging purpose only
         */
        attributeName: string;
    }
    class EngineCapabilities {
        maxTexturesImageUnits: number;
        maxVertexTextureImageUnits: number;
        maxTextureSize: number;
        maxCubemapTextureSize: number;
        maxRenderTextureSize: number;
        maxVertexAttribs: number;
        maxVaryingVectors: number;
        maxVertexUniformVectors: number;
        maxFragmentUniformVectors: number;
        standardDerivatives: boolean;
        s3tc: WEBGL_compressed_texture_s3tc;
        pvrtc: any;
        etc1: any;
        etc2: any;
        astc: any;
        textureFloat: boolean;
        vertexArrayObject: boolean;
        textureAnisotropicFilterExtension: EXT_texture_filter_anisotropic;
        maxAnisotropy: number;
        instancedArrays: boolean;
        uintIndices: boolean;
        highPrecisionShaderSupported: boolean;
        fragmentDepthSupported: boolean;
        textureFloatLinearFiltering: boolean;
        textureFloatRender: boolean;
        textureHalfFloat: boolean;
        textureHalfFloatLinearFiltering: boolean;
        textureHalfFloatRender: boolean;
        textureLOD: boolean;
        drawBuffersExtension: any;
        colorBufferFloat: boolean;
    }
    interface EngineOptions extends WebGLContextAttributes {
        limitDeviceRatio?: number;
        autoEnableWebVR?: boolean;
        disableWebGL2Support?: boolean;
        audioEngine?: boolean;
    }
    /**
     * The engine class is responsible for interfacing with all lower-level APIs such as WebGL and Audio.
     */
    class Engine {
        static Instances: Engine[];
        static readonly LastCreatedEngine: Engine;
        static readonly LastCreatedScene: Scene;
        /**
         * Will flag all materials in all scenes in all engines as dirty to trigger new shader compilation
         */
        static MarkAllMaterialsAsDirty(flag: number, predicate?: (mat: Material) => boolean): void;
        private static _ALPHA_DISABLE;
        private static _ALPHA_ADD;
        private static _ALPHA_COMBINE;
        private static _ALPHA_SUBTRACT;
        private static _ALPHA_MULTIPLY;
        private static _ALPHA_MAXIMIZED;
        private static _ALPHA_ONEONE;
        private static _ALPHA_PREMULTIPLIED;
        private static _ALPHA_PREMULTIPLIED_PORTERDUFF;
        private static _ALPHA_INTERPOLATE;
        private static _ALPHA_SCREENMODE;
        private static _DELAYLOADSTATE_NONE;
        private static _DELAYLOADSTATE_LOADED;
        private static _DELAYLOADSTATE_LOADING;
        private static _DELAYLOADSTATE_NOTLOADED;
        private static _TEXTUREFORMAT_ALPHA;
        private static _TEXTUREFORMAT_LUMINANCE;
        private static _TEXTUREFORMAT_LUMINANCE_ALPHA;
        private static _TEXTUREFORMAT_RGB;
        private static _TEXTUREFORMAT_RGBA;
        private static _TEXTURETYPE_UNSIGNED_INT;
        private static _TEXTURETYPE_FLOAT;
        private static _TEXTURETYPE_HALF_FLOAT;
        private static _NEVER;
        private static _ALWAYS;
        private static _LESS;
        private static _EQUAL;
        private static _LEQUAL;
        private static _GREATER;
        private static _GEQUAL;
        private static _NOTEQUAL;
        static readonly NEVER: number;
        static readonly ALWAYS: number;
        static readonly LESS: number;
        static readonly EQUAL: number;
        static readonly LEQUAL: number;
        static readonly GREATER: number;
        static readonly GEQUAL: number;
        static readonly NOTEQUAL: number;
        private static _KEEP;
        private static _REPLACE;
        private static _INCR;
        private static _DECR;
        private static _INVERT;
        private static _INCR_WRAP;
        private static _DECR_WRAP;
        static readonly KEEP: number;
        static readonly REPLACE: number;
        static readonly INCR: number;
        static readonly DECR: number;
        static readonly INVERT: number;
        static readonly INCR_WRAP: number;
        static readonly DECR_WRAP: number;
        static readonly ALPHA_DISABLE: number;
        static readonly ALPHA_ONEONE: number;
        static readonly ALPHA_ADD: number;
        static readonly ALPHA_COMBINE: number;
        static readonly ALPHA_SUBTRACT: number;
        static readonly ALPHA_MULTIPLY: number;
        static readonly ALPHA_MAXIMIZED: number;
        static readonly ALPHA_PREMULTIPLIED: number;
        static readonly ALPHA_PREMULTIPLIED_PORTERDUFF: number;
        static readonly ALPHA_INTERPOLATE: number;
        static readonly ALPHA_SCREENMODE: number;
        static readonly DELAYLOADSTATE_NONE: number;
        static readonly DELAYLOADSTATE_LOADED: number;
        static readonly DELAYLOADSTATE_LOADING: number;
        static readonly DELAYLOADSTATE_NOTLOADED: number;
        static readonly TEXTUREFORMAT_ALPHA: number;
        static readonly TEXTUREFORMAT_LUMINANCE: number;
        static readonly TEXTUREFORMAT_LUMINANCE_ALPHA: number;
        static readonly TEXTUREFORMAT_RGB: number;
        static readonly TEXTUREFORMAT_RGBA: number;
        static readonly TEXTURETYPE_UNSIGNED_INT: number;
        static readonly TEXTURETYPE_FLOAT: number;
        static readonly TEXTURETYPE_HALF_FLOAT: number;
        private static _SCALEMODE_FLOOR;
        private static _SCALEMODE_NEAREST;
        private static _SCALEMODE_CEILING;
        static readonly SCALEMODE_FLOOR: number;
        static readonly SCALEMODE_NEAREST: number;
        static readonly SCALEMODE_CEILING: number;
        static readonly Version: string;
        static CollisionsEpsilon: number;
        static CodeRepository: string;
        static ShadersRepository: string;
        isFullscreen: boolean;
        isPointerLock: boolean;
        cullBackFaces: boolean;
        renderEvenInBackground: boolean;
        preventCacheWipeBetweenFrames: boolean;
        enableOfflineSupport: typeof Database;
        scenes: Scene[];
        /**
         * Observable event triggered each time the rendering canvas is resized
         */
        onResizeObservable: Observable<Engine>;
        /**
         * Observable event triggered each time the canvas lost focus
         */
        onCanvasBlurObservable: Observable<Engine>;
        vrDisplaysPromise: any;
        private _vrDisplays;
        private _vrDisplayEnabled;
        private _oldSize;
        private _oldHardwareScaleFactor;
        private _vrAnimationFrameHandler;
        _gl: WebGLRenderingContext;
        private _renderingCanvas;
        private _windowIsBackground;
        private _webGLVersion;
        private _badOS;
        readonly badOS: boolean;
        private _badDesktopOS;
        readonly badDesktopOS: boolean;
        static audioEngine: AudioEngine;
        private _onCanvasBlur;
        private _onBlur;
        private _onFocus;
        private _onFullscreenChange;
        private _onPointerLockChange;
        private _hardwareScalingLevel;
        private _caps;
        private _pointerLockRequested;
        private _alphaTest;
        private _isStencilEnable;
        private _loadingScreen;
        _drawCalls: PerfCounter;
        private _glVersion;
        private _glRenderer;
        private _glVendor;
        private _videoTextureSupported;
        private _renderingQueueLaunched;
        private _activeRenderLoops;
        private fpsRange;
        private previousFramesDuration;
        private fps;
        private deltaTime;
        private _depthCullingState;
        private _stencilState;
        private _alphaState;
        private _alphaMode;
        private _loadedTexturesCache;
        private _maxTextureChannels;
        private _activeTexture;
        private _activeTexturesCache;
        private _currentEffect;
        private _currentProgram;
        private _compiledEffects;
        private _vertexAttribArraysEnabled;
        private _cachedViewport;
        private _cachedVertexArrayObject;
        private _cachedVertexBuffers;
        private _cachedIndexBuffer;
        private _cachedEffectForVertexBuffers;
        private _currentRenderTarget;
        private _uintIndicesCurrentlySet;
        private _currentBoundBuffer;
        private _currentFramebuffer;
        private _currentBufferPointers;
        private _currentInstanceLocations;
        private _currentInstanceBuffers;
        private _textureUnits;
        private _workingCanvas;
        private _workingContext;
        private _dummyFramebuffer;
        private _externalData;
        private _bindedRenderFunction;
        private _vaoRecordInProgress;
        private _mustWipeVertexAttributes;
        private _emptyTexture;
        private _emptyCubeTexture;
        private _texturesSupported;
        private _textureFormatInUse;
        readonly texturesSupported: Array<string>;
        readonly textureFormatInUse: string;
        readonly emptyTexture: WebGLTexture;
        readonly emptyCubeTexture: WebGLTexture;
        /**
         * @constructor
         * @param {HTMLCanvasElement} canvas - the canvas to be used for rendering
         * @param {boolean} [antialias] - enable antialias
         * @param options - further options to be sent to the getContext function
         */
        constructor(canvas: HTMLCanvasElement, antialias?: boolean, options?: EngineOptions, adaptToDeviceRatio?: boolean);
        readonly webGLVersion: number;
        /**
         * Returns true if the stencil buffer has been enabled through the creation option of the context.
         */
        readonly isStencilEnable: boolean;
        private _prepareWorkingCanvas();
        resetTextureCache(): void;
        getGlInfo(): {
            vendor: string;
            renderer: string;
            version: string;
        };
        getAspectRatio(camera: Camera, useScreen?: boolean): number;
        getRenderWidth(useScreen?: boolean): number;
        getRenderHeight(useScreen?: boolean): number;
        getRenderingCanvas(): HTMLCanvasElement;
        getRenderingCanvasClientRect(): ClientRect;
        setHardwareScalingLevel(level: number): void;
        getHardwareScalingLevel(): number;
        getLoadedTexturesCache(): WebGLTexture[];
        getCaps(): EngineCapabilities;
        readonly drawCalls: number;
        readonly drawCallsPerfCounter: PerfCounter;
        getDepthFunction(): number;
        setDepthFunction(depthFunc: number): void;
        setDepthFunctionToGreater(): void;
        setDepthFunctionToGreaterOrEqual(): void;
        setDepthFunctionToLess(): void;
        setDepthFunctionToLessOrEqual(): void;
        getStencilBuffer(): boolean;
        setStencilBuffer(enable: boolean): void;
        getStencilMask(): number;
        setStencilMask(mask: number): void;
        getStencilFunction(): number;
        getStencilFunctionReference(): number;
        getStencilFunctionMask(): number;
        setStencilFunction(stencilFunc: number): void;
        setStencilFunctionReference(reference: number): void;
        setStencilFunctionMask(mask: number): void;
        getStencilOperationFail(): number;
        getStencilOperationDepthFail(): number;
        getStencilOperationPass(): number;
        setStencilOperationFail(operation: number): void;
        setStencilOperationDepthFail(operation: number): void;
        setStencilOperationPass(operation: number): void;
        setDitheringState(value: boolean): void;
        /**
         * stop executing a render loop function and remove it from the execution array
         * @param {Function} [renderFunction] the function to be removed. If not provided all functions will be removed.
         */
        stopRenderLoop(renderFunction?: () => void): void;
        _renderLoop(): void;
        /**
         * Register and execute a render loop. The engine can have more than one render function.
         * @param {Function} renderFunction - the function to continuously execute starting the next render loop.
         * @example
         * engine.runRenderLoop(function () {
         *      scene.render()
         * })
         */
        runRenderLoop(renderFunction: () => void): void;
        /**
         * Toggle full screen mode.
         * @param {boolean} requestPointerLock - should a pointer lock be requested from the user
         * @param {any} options - an options object to be sent to the requestFullscreen function
         */
        switchFullscreen(requestPointerLock: boolean): void;
        clear(color: Color4, backBuffer: boolean, depth: boolean, stencil?: boolean): void;
        scissorClear(x: number, y: number, width: number, height: number, clearColor: Color4): void;
        /**
         * Set the WebGL's viewport
         * @param {BABYLON.Viewport} viewport - the viewport element to be used.
         * @param {number} [requiredWidth] - the width required for rendering. If not provided the rendering canvas' width is used.
         * @param {number} [requiredHeight] - the height required for rendering. If not provided the rendering canvas' height is used.
         */
        setViewport(viewport: Viewport, requiredWidth?: number, requiredHeight?: number): void;
        /**
         * Directly set the WebGL Viewport
         * The x, y, width & height are directly passed to the WebGL call
         * @return the current viewport Object (if any) that is being replaced by this call. You can restore this viewport later on to go back to the original state.
         */
        setDirectViewport(x: number, y: number, width: number, height: number): Viewport;
        beginFrame(): void;
        endFrame(): void;
        /**
         * resize the view according to the canvas' size.
         * @example
         *   window.addEventListener("resize", function () {
         *      engine.resize();
         *   });
         */
        resize(): void;
        /**
         * force a specific size of the canvas
         * @param {number} width - the new canvas' width
         * @param {number} height - the new canvas' height
         */
        setSize(width: number, height: number): void;
        isVRDevicePresent(callback: (result: boolean) => void): void;
        getVRDevice(name: string, callback: (device: any) => void): void;
        initWebVR(): void;
        enableVR(vrDevice: any): void;
        disableVR(): void;
        private _onVRFullScreenTriggered;
        private _getVRDisplays();
        bindFramebuffer(texture: WebGLTexture, faceIndex?: number, requiredWidth?: number, requiredHeight?: number): void;
        private bindUnboundFramebuffer(framebuffer);
        unBindFramebuffer(texture: WebGLTexture, disableGenerateMipMaps?: boolean, onBeforeUnbind?: () => void): void;
        generateMipMapsForCubemap(texture: WebGLTexture): void;
        flushFramebuffer(): void;
        restoreDefaultFramebuffer(): void;
        createUniformBuffer(elements: number[] | Float32Array): WebGLBuffer;
        createDynamicUniformBuffer(elements: number[] | Float32Array): WebGLBuffer;
        updateUniformBuffer(uniformBuffer: WebGLBuffer, elements: number[] | Float32Array, offset?: number, count?: number): void;
        private _resetVertexBufferBinding();
        createVertexBuffer(vertices: number[] | Float32Array): WebGLBuffer;
        createDynamicVertexBuffer(vertices: number[] | Float32Array): WebGLBuffer;
        updateDynamicVertexBuffer(vertexBuffer: WebGLBuffer, vertices: number[] | Float32Array, offset?: number, count?: number): void;
        private _resetIndexBufferBinding();
        createIndexBuffer(indices: IndicesArray): WebGLBuffer;
        bindArrayBuffer(buffer: WebGLBuffer): void;
        bindUniformBuffer(buffer?: WebGLBuffer): void;
        bindUniformBufferBase(buffer: WebGLBuffer, location: number): void;
        bindUniformBlock(shaderProgram: WebGLProgram, blockName: string, index: number): void;
        private bindIndexBuffer(buffer);
        private bindBuffer(buffer, target);
        updateArrayBuffer(data: Float32Array): void;
        private vertexAttribPointer(buffer, indx, size, type, normalized, stride, offset);
        private _bindIndexBufferWithCache(indexBuffer);
        private _bindVertexBuffersAttributes(vertexBuffers, effect);
        recordVertexArrayObject(vertexBuffers: {
            [key: string]: VertexBuffer;
        }, indexBuffer: WebGLBuffer, effect: Effect): WebGLVertexArrayObject;
        bindVertexArrayObject(vertexArrayObject: WebGLVertexArrayObject, indexBuffer: WebGLBuffer): void;
        bindBuffersDirectly(vertexBuffer: WebGLBuffer, indexBuffer: WebGLBuffer, vertexDeclaration: number[], vertexStrideSize: number, effect: Effect): void;
        private _unBindVertexArrayObject();
        bindBuffers(vertexBuffers: {
            [key: string]: VertexBuffer;
        }, indexBuffer: WebGLBuffer, effect: Effect): void;
        unbindInstanceAttributes(): void;
        releaseVertexArrayObject(vao: WebGLVertexArrayObject): void;
        _releaseBuffer(buffer: WebGLBuffer): boolean;
        createInstancesBuffer(capacity: number): WebGLBuffer;
        deleteInstancesBuffer(buffer: WebGLBuffer): void;
        updateAndBindInstancesBuffer(instancesBuffer: WebGLBuffer, data: Float32Array, offsetLocations: number[] | InstancingAttributeInfo[]): void;
        applyStates(): void;
        draw(useTriangles: boolean, indexStart: number, indexCount: number, instancesCount?: number): void;
        drawPointClouds(verticesStart: number, verticesCount: number, instancesCount?: number): void;
        drawUnIndexed(useTriangles: boolean, verticesStart: number, verticesCount: number, instancesCount?: number): void;
        _releaseEffect(effect: Effect): void;
        createEffect(baseName: any, attributesNamesOrOptions: string[] | EffectCreationOptions, uniformsNamesOrEngine: string[] | Engine, samplers?: string[], defines?: string, fallbacks?: EffectFallbacks, onCompiled?: (effect: Effect) => void, onError?: (effect: Effect, errors: string) => void, indexParameters?: any): Effect;
        createEffectForParticles(fragmentName: string, uniformsNames?: string[], samplers?: string[], defines?: string, fallbacks?: EffectFallbacks, onCompiled?: (effect: Effect) => void, onError?: (effect: Effect, errors: string) => void): Effect;
        createShaderProgram(vertexCode: string, fragmentCode: string, defines: string, context?: WebGLRenderingContext): WebGLProgram;
        getUniforms(shaderProgram: WebGLProgram, uniformsNames: string[]): WebGLUniformLocation[];
        getAttributes(shaderProgram: WebGLProgram, attributesNames: string[]): number[];
        enableEffect(effect: Effect): void;
        setIntArray(uniform: WebGLUniformLocation, array: Int32Array): void;
        setIntArray2(uniform: WebGLUniformLocation, array: Int32Array): void;
        setIntArray3(uniform: WebGLUniformLocation, array: Int32Array): void;
        setIntArray4(uniform: WebGLUniformLocation, array: Int32Array): void;
        setFloatArray(uniform: WebGLUniformLocation, array: Float32Array): void;
        setFloatArray2(uniform: WebGLUniformLocation, array: Float32Array): void;
        setFloatArray3(uniform: WebGLUniformLocation, array: Float32Array): void;
        setFloatArray4(uniform: WebGLUniformLocation, array: Float32Array): void;
        setArray(uniform: WebGLUniformLocation, array: number[]): void;
        setArray2(uniform: WebGLUniformLocation, array: number[]): void;
        setArray3(uniform: WebGLUniformLocation, array: number[]): void;
        setArray4(uniform: WebGLUniformLocation, array: number[]): void;
        setMatrices(uniform: WebGLUniformLocation, matrices: Float32Array): void;
        setMatrix(uniform: WebGLUniformLocation, matrix: Matrix): void;
        setMatrix3x3(uniform: WebGLUniformLocation, matrix: Float32Array): void;
        setMatrix2x2(uniform: WebGLUniformLocation, matrix: Float32Array): void;
        setFloat(uniform: WebGLUniformLocation, value: number): void;
        setFloat2(uniform: WebGLUniformLocation, x: number, y: number): void;
        setFloat3(uniform: WebGLUniformLocation, x: number, y: number, z: number): void;
        setBool(uniform: WebGLUniformLocation, bool: number): void;
        setFloat4(uniform: WebGLUniformLocation, x: number, y: number, z: number, w: number): void;
        setColor3(uniform: WebGLUniformLocation, color3: Color3): void;
        setColor4(uniform: WebGLUniformLocation, color3: Color3, alpha: number): void;
        setState(culling: boolean, zOffset?: number, force?: boolean, reverseSide?: boolean): void;
        setZOffset(value: number): void;
        getZOffset(): number;
        setDepthBuffer(enable: boolean): void;
        getDepthWrite(): boolean;
        setDepthWrite(enable: boolean): void;
        setColorWrite(enable: boolean): void;
        setAlphaConstants(r: number, g: number, b: number, a: number): void;
        setAlphaMode(mode: number, noDepthWriteChange?: boolean): void;
        getAlphaMode(): number;
        setAlphaTesting(enable: boolean): void;
        getAlphaTesting(): boolean;
        wipeCaches(bruteForce?: boolean): void;
        /**
         * Set the compressed texture format to use, based on the formats you have, and the formats
         * supported by the hardware / browser.
         *
         * Khronos Texture Container (.ktx) files are used to support this.  This format has the
         * advantage of being specifically designed for OpenGL.  Header elements directly correspond
         * to API arguments needed to compressed textures.  This puts the burden on the container
         * generator to house the arcane code for determining these for current & future formats.
         *
         * for description see https://www.khronos.org/opengles/sdk/tools/KTX/
         * for file layout see https://www.khronos.org/opengles/sdk/tools/KTX/file_format_spec/
         *
         * Note: The result of this call is not taken into account when a texture is base64.
         *
         * @param {Array<string>} formatsAvailable- The list of those format families you have created
         * on your server.  Syntax: '-' + format family + '.ktx'.  (Case and order do not matter.)
         *
         * Current families are astc, dxt, pvrtc, etc2, & etc1.
         * @returns The extension selected.
         */
        setTextureFormatToUse(formatsAvailable: Array<string>): string;
        /**
         * Usually called from BABYLON.Texture.ts.  Passed information to create a WebGLTexture.
         * @param {string} urlArg- This contains one of the following:
         *                         1. A conventional http URL, e.g. 'http://...' or 'file://...'
         *                         2. A base64 string of in-line texture data, e.g. 'data:image/jpg;base64,/...'
         *                         3. An indicator that data being passed using the buffer parameter, e.g. 'data:mytexture.jpg'
         *
         * @param {boolean} noMipmap- When true, no mipmaps shall be generated.  Ignored for compressed textures.  They must be in the file.
         * @param {boolean} invertY- When true, image is flipped when loaded.  You probably want true. Ignored for compressed textures.  Must be flipped in the file.
         * @param {Scene} scene- Needed for loading to the correct scene.
         * @param {number} samplingMode- Mode with should be used sample / access the texture.  Default: TRILINEAR
         * @param {callback} onLoad- Optional callback to be called upon successful completion.
         * @param {callback} onError- Optional callback to be called upon failure.
         * @param {ArrayBuffer | HTMLImageElement} buffer- A source of a file previously fetched as either an ArrayBuffer (compressed or image format) or HTMLImageElement (image format)
         * @param {WebGLTexture} fallback- An internal argument in case the function must be called again, due to etc1 not having alpha capabilities.
         * @param {number} format-  Internal format.  Default: RGB when extension is '.jpg' else RGBA.  Ignored for compressed textures.
         *
         * @returns {WebGLTexture} for assignment back into BABYLON.Texture
         */
        createTexture(urlArg: string, noMipmap: boolean, invertY: boolean, scene: Scene, samplingMode?: number, onLoad?: () => void, onError?: () => void, buffer?: ArrayBuffer | HTMLImageElement, fallBack?: WebGLTexture, format?: number): WebGLTexture;
        private _getInternalFormat(format);
        updateRawTexture(texture: WebGLTexture, data: ArrayBufferView, format: number, invertY: boolean, compression?: string): void;
        createRawTexture(data: ArrayBufferView, width: number, height: number, format: number, generateMipMaps: boolean, invertY: boolean, samplingMode: number, compression?: string): WebGLTexture;
        createDynamicTexture(width: number, height: number, generateMipMaps: boolean, samplingMode: number): WebGLTexture;
        updateTextureSamplingMode(samplingMode: number, texture: WebGLTexture): void;
        updateDynamicTexture(texture: WebGLTexture, canvas: HTMLCanvasElement, invertY: boolean, premulAlpha?: boolean, format?: number): void;
        updateVideoTexture(texture: WebGLTexture, video: HTMLVideoElement, invertY: boolean): void;
        createRenderTargetTexture(size: any, options: any): WebGLTexture;
        createMultipleRenderTarget(size: any, options: any): WebGLTexture[];
        private _setupFramebufferDepthAttachments(generateStencilBuffer, generateDepthBuffer, width, height, samples?);
        updateRenderTargetTextureSampleCount(texture: WebGLTexture, samples: number): number;
        _uploadDataToTexture(target: number, lod: number, internalFormat: number, width: number, height: number, format: number, type: number, data: ArrayBufferView): void;
        _uploadCompressedDataToTexture(target: number, lod: number, internalFormat: number, width: number, height: number, data: ArrayBufferView): void;
        createRenderTargetCubeTexture(size: number, options?: any): WebGLTexture;
        createPrefilteredCubeTexture(rootUrl: string, scene: Scene, scale: number, offset: number, onLoad: () => void, onError?: () => void, format?: number): WebGLTexture;
        createCubeTexture(rootUrl: string, scene: Scene, files: string[], noMipmap?: boolean, onLoad?: (data?: any) => void, onError?: () => void, format?: number): WebGLTexture;
        updateTextureSize(texture: WebGLTexture, width: number, height: number): void;
        updateRawCubeTexture(texture: WebGLTexture, data: ArrayBufferView[], format: number, type: number, invertY: boolean, compression?: string, level?: number): void;
        createRawCubeTexture(data: ArrayBufferView[], size: number, format: number, type: number, generateMipMaps: boolean, invertY: boolean, samplingMode: number, compression?: string): WebGLTexture;
        createRawCubeTextureFromUrl(url: string, scene: Scene, size: number, format: number, type: number, noMipmap: boolean, callback: (ArrayBuffer: ArrayBuffer) => ArrayBufferView[], mipmmapGenerator: ((faces: ArrayBufferView[]) => ArrayBufferView[][]), onLoad?: () => void, onError?: () => void, samplingMode?: number, invertY?: boolean): WebGLTexture;
        private _convertRGBtoRGBATextureData(rgbData, width, height, textureType);
        _releaseFramebufferObjects(texture: WebGLTexture): void;
        _releaseTexture(texture: WebGLTexture): void;
        private setProgram(program);
        bindSamplers(effect: Effect): void;
        private activateTexture(texture);
        _bindTextureDirectly(target: number, texture: WebGLTexture): void;
        _bindTexture(channel: number, texture: WebGLTexture): void;
        setTextureFromPostProcess(channel: number, postProcess: PostProcess): void;
        unbindAllTextures(): void;
        setTexture(channel: number, uniform: WebGLUniformLocation, texture: BaseTexture): void;
        private _setTexture(channel, texture);
        setTextureArray(channel: number, uniform: WebGLUniformLocation, textures: BaseTexture[]): void;
        _setAnisotropicLevel(key: number, texture: BaseTexture): void;
        readPixels(x: number, y: number, width: number, height: number): Uint8Array;
        /**
         * Add an externaly attached data from its key.
         * This method call will fail and return false, if such key already exists.
         * If you don't care and just want to get the data no matter what, use the more convenient getOrAddExternalDataWithFactory() method.
         * @param key the unique key that identifies the data
         * @param data the data object to associate to the key for this Engine instance
         * @return true if no such key were already present and the data was added successfully, false otherwise
         */
        addExternalData<T>(key: string, data: T): boolean;
        /**
         * Get an externaly attached data from its key
         * @param key the unique key that identifies the data
         * @return the associated data, if present (can be null), or undefined if not present
         */
        getExternalData<T>(key: string): T;
        /**
         * Get an externaly attached data from its key, create it using a factory if it's not already present
         * @param key the unique key that identifies the data
         * @param factory the factory that will be called to create the instance if and only if it doesn't exists
         * @return the associated data, can be null if the factory returned null.
         */
        getOrAddExternalDataWithFactory<T>(key: string, factory: (k: string) => T): T;
        /**
         * Remove an externaly attached data from the Engine instance
         * @param key the unique key that identifies the data
         * @return true if the data was successfully removed, false if it doesn't exist
         */
        removeExternalData(key: any): boolean;
        releaseInternalTexture(texture: WebGLTexture): void;
        unbindAllAttributes(): void;
        releaseEffects(): void;
        dispose(): void;
        displayLoadingUI(): void;
        hideLoadingUI(): void;
        loadingScreen: ILoadingScreen;
        loadingUIText: string;
        loadingUIBackgroundColor: string;
        attachContextLostEvent(callback: ((event: WebGLContextEvent) => void)): void;
        attachContextRestoredEvent(callback: ((event: WebGLContextEvent) => void)): void;
        getVertexShaderSource(program: WebGLProgram): string;
        getFragmentShaderSource(program: WebGLProgram): string;
        getError(): number;
        getFps(): number;
        getDeltaTime(): number;
        private _measureFps();
        _readTexturePixels(texture: WebGLTexture, width: number, height: number, faceIndex?: number): ArrayBufferView;
        private _canRenderToFloatFramebuffer();
        private _canRenderToHalfFloatFramebuffer();
        private _canRenderToFramebuffer(type);
        _getWebGLTextureType(type: number): number;
        _getRGBABufferInternalSizedFormat(type: number): number;
        static isSupported(): boolean;
    }
}

interface Window {
    mozIndexedDB(func: any): any;
    webkitIndexedDB(func: any): any;
    msIndexedDB: IDBFactory;
    IDBTransaction(func: any): any;
    webkitIDBTransaction(func: any): any;
    msIDBTransaction(func: any): any;
    IDBKeyRange(func: any): any;
    webkitIDBKeyRange(func: any): any;
    msIDBKeyRange(func: any): any;
    webkitURL: HTMLURL;
    webkitRequestAnimationFrame(func: any): any;
    mozRequestAnimationFrame(func: any): any;
    oRequestAnimationFrame(func: any): any;
    WebGLRenderingContext: WebGLRenderingContext;
    MSGesture: MSGesture;
    CANNON: any;
    SIMD: any;
    AudioContext: AudioContext;
    webkitAudioContext: AudioContext;
    PointerEvent: any;
    Math: Math;
    Uint8Array: Uint8ArrayConstructor;
    Float32Array: Float32ArrayConstructor;
    mozURL: any;
    msURL: any;
    VRFrameData: any;
}
interface WebGLRenderingContext {
    drawArraysInstanced(mode: number, first: number, count: number, primcount: number): void;
    drawElementsInstanced(mode: number, count: number, type: number, offset: number, primcount: number): void;
    vertexAttribDivisor(index: number, divisor: number): void;
    createVertexArray(): any;
    bindVertexArray(vao: WebGLVertexArrayObject): void;
    deleteVertexArray(vao: WebGLVertexArrayObject): void;
    blitFramebuffer(srcX0: number, srcY0: number, srcX1: number, srcY1: number, dstX0: number, dstY0: number, dstX1: number, dstY1: number, mask: number, filter: number): void;
    renderbufferStorageMultisample(target: number, samples: number, internalformat: number, width: number, height: number): void;
    bindBufferBase(target: number, index: number, buffer: WebGLBuffer | null): void;
    getUniformBlockIndex(program: WebGLProgram, uniformBlockName: string): number;
    uniformBlockBinding(program: WebGLProgram, uniformBlockIndex: number, uniformBlockBinding: number): void;
    MAX_SAMPLES: number;
    RGBA8: number;
    READ_FRAMEBUFFER: number;
    DRAW_FRAMEBUFFER: number;
    UNIFORM_BUFFER: number;
    HALF_FLOAT_OES: number;
    RGBA16F: number;
    RGBA32F: number;
    DEPTH24_STENCIL8: number;
    drawBuffers(buffers: number[]): void;
    readBuffer(src: number): void;
    readonly COLOR_ATTACHMENT0: number;
    readonly COLOR_ATTACHMENT1: number;
    readonly COLOR_ATTACHMENT2: number;
    readonly COLOR_ATTACHMENT3: number;
}
interface HTMLURL {
    createObjectURL(param1: any, param2?: any): any;
}
interface Document {
    exitFullscreen(): void;
    webkitCancelFullScreen(): void;
    mozCancelFullScreen(): void;
    msCancelFullScreen(): void;
    mozFullScreen: boolean;
    msIsFullScreen: boolean;
    fullscreen: boolean;
    mozPointerLockElement: HTMLElement;
    msPointerLockElement: HTMLElement;
    webkitPointerLockElement: HTMLElement;
}
interface HTMLCanvasElement {
    requestPointerLock(): void;
    msRequestPointerLock?(): void;
    mozRequestPointerLock?(): void;
    webkitRequestPointerLock?(): void;
}
interface CanvasRenderingContext2D {
    imageSmoothingEnabled: boolean;
    mozImageSmoothingEnabled: boolean;
    oImageSmoothingEnabled: boolean;
    webkitImageSmoothingEnabled: boolean;
    msImageSmoothingEnabled: boolean;
}
interface WebGLTexture {
    isReady: boolean;
    isCube: boolean;
    url: string;
    samplingMode: number;
    references: number;
    generateMipMaps: boolean;
    samples: number;
    type: number;
    format: number;
    onLoadedCallbacks: Array<Function>;
    _size: number;
    _baseWidth: number;
    _baseHeight: number;
    _width: number;
    _height: number;
    _workingCanvas: HTMLCanvasElement;
    _workingContext: CanvasRenderingContext2D;
    _framebuffer: WebGLFramebuffer;
    _depthStencilBuffer: WebGLRenderbuffer;
    _MSAAFramebuffer: WebGLFramebuffer;
    _MSAARenderBuffer: WebGLRenderbuffer;
    _cachedCoordinatesMode: number;
    _cachedWrapU: number;
    _cachedWrapV: number;
    _isDisabled: boolean;
    _generateStencilBuffer: boolean;
    _generateDepthBuffer: boolean;
    _sphericalPolynomial: BABYLON.SphericalPolynomial;
    _lodTextureHigh: BABYLON.BaseTexture;
    _lodTextureMid: BABYLON.BaseTexture;
    _lodTextureLow: BABYLON.BaseTexture;
}
interface WebGLBuffer {
    references: number;
    capacity: number;
    is32Bits: boolean;
}
interface MouseEvent {
    mozMovementX: number;
    mozMovementY: number;
    webkitMovementX: number;
    webkitMovementY: number;
    msMovementX: number;
    msMovementY: number;
}
interface MSStyleCSSProperties {
    webkitTransform: string;
    webkitTransition: string;
}
interface Navigator {
    getVRDisplays: () => any;
    mozGetVRDevices: (any: any) => any;
    isCocoonJS: boolean;
    getUserMedia: any;
    webkitGetUserMedia: any;
    mozGetUserMedia: any;
    msGetUserMedia: any;
}
interface HTMLVideoElement {
    mozSrcObject: any;
}
interface Screen {
    orientation: string;
    mozOrientation: string;
}
interface HTMLMediaElement {
    crossOrigin: string | null;
}
interface Math {
    fround(x: number): number;
    imul(a: number, b: number): number;
}
interface SIMDglobal {
    SIMD: SIMD;
    Math: Math;
    Uint8Array: Uint8ArrayConstructor;
    Float32Array: Float32ArrayConstructor;
}
interface SIMD {
    Float32x4: SIMD.Float32x4Constructor;
    Int32x4: SIMD.Int32x4Constructor;
    Int16x8: SIMD.Int16x8Constructor;
    Int8x16: SIMD.Int8x16Constructor;
    Uint32x4: SIMD.Uint32x4Constructor;
    Uint16x8: SIMD.Uint16x8Constructor;
    Uint8x16: SIMD.Uint8x16Constructor;
    Bool32x4: SIMD.Bool32x4Constructor;
    Bool16x8: SIMD.Bool16x8Constructor;
    Bool8x16: SIMD.Bool8x16Constructor;
}
interface GamepadPose {
    hasOrientation: boolean;
    hasPosition: boolean;
    position?: Float32Array;
    linearVelocity?: Float32Array;
    linearAcceleration?: Float32Array;
    orientation?: Float32Array;
    angularVelocity?: Float32Array;
    angularAcceleration?: Float32Array;
}
declare namespace SIMD {
    interface Float32x4 {
        constructor: Float32x4Constructor;
        valueOf(): Float32x4;
        toLocaleString(): string;
        toString(): string;
    }
    interface Float32x4Constructor {
        (s0?: number, s1?: number, s2?: number, s3?: number): Float32x4;
        prototype: Float32x4;
        extractLane(simd: SIMD.Float32x4, lane: number): number;
        swizzle(a: SIMD.Float32x4, l1: number, l2: number, l3: number, l4: number): SIMD.Float32x4;
        shuffle(a: SIMD.Float32x4, b: SIMD.Float32x4, l1: number, l2: number, l3: number, l4: number): SIMD.Float32x4;
        check(a: SIMD.Float32x4): SIMD.Float32x4;
        splat(n: number): SIMD.Float32x4;
        replaceLane(simd: SIMD.Float32x4, lane: number, value: number): SIMD.Float32x4;
        select(selector: SIMD.Bool32x4, a: SIMD.Float32x4, b: SIMD.Float32x4): SIMD.Float32x4;
        equal(a: SIMD.Float32x4, b: SIMD.Float32x4): SIMD.Bool32x4;
        notEqual(a: SIMD.Float32x4, b: SIMD.Float32x4): SIMD.Bool32x4;
        lessThan(a: SIMD.Float32x4, b: SIMD.Float32x4): SIMD.Bool32x4;
        lessThanOrEqual(a: SIMD.Float32x4, b: SIMD.Float32x4): SIMD.Bool32x4;
        greaterThan(a: SIMD.Float32x4, b: SIMD.Float32x4): SIMD.Bool32x4;
        greaterThanOrEqual(a: SIMD.Float32x4, b: SIMD.Float32x4): SIMD.Bool32x4;
        add(a: SIMD.Float32x4, b: SIMD.Float32x4): SIMD.Float32x4;
        sub(a: SIMD.Float32x4, b: SIMD.Float32x4): SIMD.Float32x4;
        mul(a: SIMD.Float32x4, b: SIMD.Float32x4): SIMD.Float32x4;
        div(a: SIMD.Float32x4, b: SIMD.Float32x4): SIMD.Float32x4;
        neg(a: SIMD.Float32x4): SIMD.Float32x4;
        abs(a: SIMD.Float32x4): SIMD.Float32x4;
        min(a: SIMD.Float32x4, b: SIMD.Float32x4): SIMD.Float32x4;
        max(a: SIMD.Float32x4, b: SIMD.Float32x4): SIMD.Float32x4;
        minNum(a: SIMD.Float32x4, b: SIMD.Float32x4): SIMD.Float32x4;
        maxNum(a: SIMD.Float32x4, b: SIMD.Float32x4): SIMD.Float32x4;
        reciprocalApproximation(a: SIMD.Float32x4): SIMD.Float32x4;
        reciprocalSqrtApproximation(a: SIMD.Float32x4): SIMD.Float32x4;
        sqrt(a: SIMD.Float32x4): SIMD.Float32x4;
        load(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number): SIMD.Float32x4;
        load1(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number): SIMD.Float32x4;
        load2(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number): SIMD.Float32x4;
        load3(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number): SIMD.Float32x4;
        store(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number, value: SIMD.Float32x4): SIMD.Float32x4;
        store1(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number, value: SIMD.Float32x4): SIMD.Float32x4;
        store2(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number, value: SIMD.Float32x4): SIMD.Float32x4;
        store3(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number, value: SIMD.Float32x4): SIMD.Float32x4;
        fromInt32x4(value: SIMD.Int32x4): SIMD.Float32x4;
        fromUint32x4(value: SIMD.Uint32x4): SIMD.Float32x4;
        fromInt32x4Bits(value: SIMD.Int32x4): SIMD.Float32x4;
        fromInt16x8Bits(value: SIMD.Int16x8): SIMD.Float32x4;
        fromInt8x16Bits(value: SIMD.Int8x16): SIMD.Float32x4;
        fromUint32x4Bits(value: SIMD.Uint32x4): SIMD.Float32x4;
        fromUint16x8Bits(value: SIMD.Uint16x8): SIMD.Float32x4;
        fromUint8x16Bits(value: SIMD.Uint8x16): SIMD.Float32x4;
    }
    interface Int32x4 {
        constructor: Int32x4Constructor;
        valueOf(): Int32x4;
        toLocaleString(): string;
        toString(): string;
    }
    interface Int32x4Constructor {
        (s0?: number, s1?: number, s2?: number, s3?: number): Int32x4;
        prototype: Int32x4;
        extractLane(simd: SIMD.Int32x4, lane: number): number;
        swizzle(a: SIMD.Int32x4, l1: number, l2: number, l3: number, l4: number): SIMD.Int32x4;
        shuffle(a: SIMD.Int32x4, b: SIMD.Int32x4, l1: number, l2: number, l3: number, l4: number): SIMD.Int32x4;
        check(a: SIMD.Int32x4): SIMD.Int32x4;
        splat(n: number): SIMD.Int32x4;
        replaceLane(simd: SIMD.Int32x4, lane: number, value: number): SIMD.Int32x4;
        select(selector: SIMD.Bool32x4, a: SIMD.Int32x4, b: SIMD.Int32x4): SIMD.Int32x4;
        equal(a: SIMD.Int32x4, b: SIMD.Int32x4): SIMD.Bool32x4;
        notEqual(a: SIMD.Int32x4, b: SIMD.Int32x4): SIMD.Bool32x4;
        lessThan(a: SIMD.Int32x4, b: SIMD.Int32x4): SIMD.Bool32x4;
        lessThanOrEqual(a: SIMD.Int32x4, b: SIMD.Int32x4): SIMD.Bool32x4;
        greaterThan(a: SIMD.Int32x4, b: SIMD.Int32x4): SIMD.Bool32x4;
        greaterThanOrEqual(a: SIMD.Int32x4, b: SIMD.Int32x4): SIMD.Bool32x4;
        and(a: SIMD.Int32x4, b: SIMD.Int32x4): SIMD.Int32x4;
        or(a: SIMD.Int32x4, b: SIMD.Int32x4): SIMD.Int32x4;
        xor(a: SIMD.Int32x4, b: SIMD.Int32x4): SIMD.Int32x4;
        not(a: SIMD.Int32x4, b: SIMD.Int32x4): SIMD.Int32x4;
        add(a: SIMD.Int32x4, b: SIMD.Int32x4): SIMD.Int32x4;
        sub(a: SIMD.Int32x4, b: SIMD.Int32x4): SIMD.Int32x4;
        mul(a: SIMD.Int32x4, b: SIMD.Int32x4): SIMD.Int32x4;
        neg(a: SIMD.Int32x4): SIMD.Int32x4;
        shiftLeftByScalar(a: SIMD.Int32x4, bits: number): SIMD.Int32x4;
        shiftRightByScalar(a: SIMD.Int32x4, bits: number): SIMD.Int32x4;
        load(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number): SIMD.Int32x4;
        load1(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number): SIMD.Int32x4;
        load2(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number): SIMD.Int32x4;
        load3(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number): SIMD.Int32x4;
        store(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number, value: SIMD.Int32x4): SIMD.Int32x4;
        store1(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number, value: SIMD.Int32x4): SIMD.Int32x4;
        store2(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number, value: SIMD.Int32x4): SIMD.Int32x4;
        store3(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number, value: SIMD.Int32x4): SIMD.Int32x4;
        fromFloat32x4(value: SIMD.Float32x4): SIMD.Int32x4;
        fromUint32x4(value: SIMD.Uint32x4): SIMD.Int32x4;
        fromFloat32x4Bits(value: SIMD.Float32x4): SIMD.Int32x4;
        fromInt16x8Bits(value: SIMD.Int16x8): SIMD.Int32x4;
        fromInt8x16Bits(value: SIMD.Int8x16): SIMD.Int32x4;
        fromUint32x4Bits(value: SIMD.Uint32x4): SIMD.Int32x4;
        fromUint16x8Bits(value: SIMD.Uint16x8): SIMD.Int32x4;
        fromUint8x16Bits(value: SIMD.Uint8x16): SIMD.Int32x4;
    }
    interface Int16x8 {
        constructor: Int16x8Constructor;
        valueOf(): Int16x8;
        toLocaleString(): string;
        toString(): string;
    }
    interface Int16x8Constructor {
        (s0?: number, s1?: number, s2?: number, s3?: number, s4?: number, s5?: number, s6?: number, s7?: number): Int16x8;
        prototype: Int16x8;
        extractLane(simd: SIMD.Int16x8, lane: number): number;
        swizzle(a: SIMD.Int16x8, l1: number, l2: number, l3: number, l4: number, l5: number, l6: number, l7: number, l8: number): SIMD.Int16x8;
        shuffle(a: SIMD.Int16x8, b: SIMD.Int16x8, l1: number, l2: number, l3: number, l4: number, l5: number, l6: number, l7: number, l8: number): SIMD.Int16x8;
        check(a: SIMD.Int16x8): SIMD.Int16x8;
        splat(n: number): SIMD.Int16x8;
        replaceLane(simd: SIMD.Int16x8, lane: number, value: number): SIMD.Int16x8;
        select(selector: SIMD.Bool16x8, a: SIMD.Int16x8, b: SIMD.Int16x8): SIMD.Int16x8;
        equal(a: SIMD.Int16x8, b: SIMD.Int16x8): SIMD.Bool16x8;
        notEqual(a: SIMD.Int16x8, b: SIMD.Int16x8): SIMD.Bool16x8;
        lessThan(a: SIMD.Int16x8, b: SIMD.Int16x8): SIMD.Bool16x8;
        lessThanOrEqual(a: SIMD.Int16x8, b: SIMD.Int16x8): SIMD.Bool16x8;
        greaterThan(a: SIMD.Int16x8, b: SIMD.Int16x8): SIMD.Bool16x8;
        greaterThanOrEqual(a: SIMD.Int16x8, b: SIMD.Int16x8): SIMD.Bool16x8;
        and(a: SIMD.Int16x8, b: SIMD.Int16x8): SIMD.Int16x8;
        or(a: SIMD.Int16x8, b: SIMD.Int16x8): SIMD.Int16x8;
        xor(a: SIMD.Int16x8, b: SIMD.Int16x8): SIMD.Int16x8;
        not(a: SIMD.Int16x8, b: SIMD.Int16x8): SIMD.Int16x8;
        add(a: SIMD.Int16x8, b: SIMD.Int16x8): SIMD.Int16x8;
        sub(a: SIMD.Int16x8, b: SIMD.Int16x8): SIMD.Int16x8;
        mul(a: SIMD.Int16x8, b: SIMD.Int16x8): SIMD.Int16x8;
        neg(a: SIMD.Int16x8): SIMD.Int16x8;
        shiftLeftByScalar(a: SIMD.Int16x8, bits: number): SIMD.Int16x8;
        shiftRightByScalar(a: SIMD.Int16x8, bits: number): SIMD.Int16x8;
        addSaturate(a: SIMD.Int16x8, b: SIMD.Int16x8): SIMD.Int16x8;
        subSaturate(a: SIMD.Int16x8, b: SIMD.Int16x8): SIMD.Int16x8;
        load(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number): SIMD.Int16x8;
        store(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number, value: SIMD.Int16x8): SIMD.Int16x8;
        fromUint16x8(value: SIMD.Uint16x8): SIMD.Int16x8;
        fromFloat32x4Bits(value: SIMD.Float32x4): SIMD.Int16x8;
        fromInt32x4Bits(value: SIMD.Int32x4): SIMD.Int16x8;
        fromInt8x16Bits(value: SIMD.Int8x16): SIMD.Int16x8;
        fromUint32x4Bits(value: SIMD.Uint32x4): SIMD.Int16x8;
        fromUint16x8Bits(value: SIMD.Uint16x8): SIMD.Int16x8;
        fromUint8x16Bits(value: SIMD.Uint8x16): SIMD.Int16x8;
    }
    interface Int8x16 {
        constructor: Int8x16Constructor;
        valueOf(): Int8x16;
        toLocaleString(): string;
        toString(): string;
    }
    interface Int8x16Constructor {
        (s0?: number, s1?: number, s2?: number, s3?: number, s4?: number, s5?: number, s6?: number, s7?: number, s8?: number, s9?: number, s10?: number, s11?: number, s12?: number, s13?: number, s14?: number, s15?: number): Int8x16;
        prototype: Int8x16;
        extractLane(simd: SIMD.Int8x16, lane: number): number;
        swizzle(a: SIMD.Int8x16, l1: number, l2: number, l3: number, l4: number, l5: number, l6: number, l7: number, l8: number, l9: number, l10: number, l11: number, l12: number, l13: number, l14: number, l15: number, l16: number): SIMD.Int8x16;
        shuffle(a: SIMD.Int8x16, b: SIMD.Int8x16, l1: number, l2: number, l3: number, l4: number, l5: number, l6: number, l7: number, l8: number, l9: number, l10: number, l11: number, l12: number, l13: number, l14: number, l15: number, l16: number): SIMD.Int8x16;
        check(a: SIMD.Int8x16): SIMD.Int8x16;
        splat(n: number): SIMD.Int8x16;
        replaceLane(simd: SIMD.Int8x16, lane: number, value: number): SIMD.Int8x16;
        select(selector: SIMD.Bool8x16, a: SIMD.Int8x16, b: SIMD.Int8x16): SIMD.Int8x16;
        equal(a: SIMD.Int8x16, b: SIMD.Int8x16): SIMD.Bool8x16;
        notEqual(a: SIMD.Int8x16, b: SIMD.Int8x16): SIMD.Bool8x16;
        lessThan(a: SIMD.Int8x16, b: SIMD.Int8x16): SIMD.Bool8x16;
        lessThanOrEqual(a: SIMD.Int8x16, b: SIMD.Int8x16): SIMD.Bool8x16;
        greaterThan(a: SIMD.Int8x16, b: SIMD.Int8x16): SIMD.Bool8x16;
        greaterThanOrEqual(a: SIMD.Int8x16, b: SIMD.Int8x16): SIMD.Bool8x16;
        and(a: SIMD.Int8x16, b: SIMD.Int8x16): SIMD.Int8x16;
        or(a: SIMD.Int8x16, b: SIMD.Int8x16): SIMD.Int8x16;
        xor(a: SIMD.Int8x16, b: SIMD.Int8x16): SIMD.Int8x16;
        not(a: SIMD.Int8x16, b: SIMD.Int8x16): SIMD.Int8x16;
        add(a: SIMD.Int8x16, b: SIMD.Int8x16): SIMD.Int8x16;
        sub(a: SIMD.Int8x16, b: SIMD.Int8x16): SIMD.Int8x16;
        mul(a: SIMD.Int8x16, b: SIMD.Int8x16): SIMD.Int8x16;
        neg(a: SIMD.Int8x16): SIMD.Int8x16;
        shiftLeftByScalar(a: SIMD.Int8x16, bits: number): SIMD.Int8x16;
        shiftRightByScalar(a: SIMD.Int8x16, bits: number): SIMD.Int8x16;
        addSaturate(a: SIMD.Int8x16, b: SIMD.Int8x16): SIMD.Int8x16;
        subSaturate(a: SIMD.Int8x16, b: SIMD.Int8x16): SIMD.Int8x16;
        load(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number): SIMD.Int8x16;
        store(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number, value: SIMD.Int8x16): SIMD.Int8x16;
        fromUint8x16(value: SIMD.Uint8x16): SIMD.Int8x16;
        fromFloat32x4Bits(value: SIMD.Float32x4): SIMD.Int8x16;
        fromInt32x4Bits(value: SIMD.Int32x4): SIMD.Int8x16;
        fromInt16x8Bits(value: SIMD.Int16x8): SIMD.Int8x16;
        fromUint32x4Bits(value: SIMD.Uint32x4): SIMD.Int8x16;
        fromUint16x8Bits(value: SIMD.Uint16x8): SIMD.Int8x16;
        fromUint8x16Bits(value: SIMD.Uint8x16): SIMD.Int8x16;
    }
    interface Uint32x4 {
        constructor: Uint32x4Constructor;
        valueOf(): Uint32x4;
        toLocaleString(): string;
        toString(): string;
    }
    interface Uint32x4Constructor {
        (s0?: number, s1?: number, s2?: number, s3?: number): Uint32x4;
        prototype: Uint32x4;
        extractLane(simd: SIMD.Uint32x4, lane: number): number;
        swizzle(a: SIMD.Uint32x4, l1: number, l2: number, l3: number, l4: number): SIMD.Uint32x4;
        shuffle(a: SIMD.Uint32x4, b: SIMD.Uint32x4, l1: number, l2: number, l3: number, l4: number): SIMD.Uint32x4;
        check(a: SIMD.Uint32x4): SIMD.Uint32x4;
        splat(n: number): SIMD.Uint32x4;
        replaceLane(simd: SIMD.Uint32x4, lane: number, value: number): SIMD.Uint32x4;
        select(selector: SIMD.Bool32x4, a: SIMD.Uint32x4, b: SIMD.Uint32x4): SIMD.Uint32x4;
        equal(a: SIMD.Uint32x4, b: SIMD.Uint32x4): SIMD.Bool32x4;
        notEqual(a: SIMD.Uint32x4, b: SIMD.Uint32x4): SIMD.Bool32x4;
        lessThan(a: SIMD.Uint32x4, b: SIMD.Uint32x4): SIMD.Bool32x4;
        lessThanOrEqual(a: SIMD.Uint32x4, b: SIMD.Uint32x4): SIMD.Bool32x4;
        greaterThan(a: SIMD.Uint32x4, b: SIMD.Uint32x4): SIMD.Bool32x4;
        greaterThanOrEqual(a: SIMD.Uint32x4, b: SIMD.Uint32x4): SIMD.Bool32x4;
        and(a: SIMD.Uint32x4, b: SIMD.Uint32x4): SIMD.Uint32x4;
        or(a: SIMD.Uint32x4, b: SIMD.Uint32x4): SIMD.Uint32x4;
        xor(a: SIMD.Uint32x4, b: SIMD.Uint32x4): SIMD.Uint32x4;
        not(a: SIMD.Uint32x4, b: SIMD.Uint32x4): SIMD.Uint32x4;
        add(a: SIMD.Uint32x4, b: SIMD.Uint32x4): SIMD.Uint32x4;
        sub(a: SIMD.Uint32x4, b: SIMD.Uint32x4): SIMD.Uint32x4;
        mul(a: SIMD.Uint32x4, b: SIMD.Uint32x4): SIMD.Uint32x4;
        shiftLeftByScalar(a: SIMD.Uint32x4, bits: number): SIMD.Uint32x4;
        shiftRightByScalar(a: SIMD.Uint32x4, bits: number): SIMD.Uint32x4;
        load(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number): SIMD.Uint32x4;
        load1(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number): SIMD.Uint32x4;
        load2(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number): SIMD.Uint32x4;
        load3(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number): SIMD.Uint32x4;
        store(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number, value: SIMD.Uint32x4): SIMD.Uint32x4;
        store1(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number, value: SIMD.Uint32x4): SIMD.Uint32x4;
        store2(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number, value: SIMD.Uint32x4): SIMD.Uint32x4;
        store3(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number, value: SIMD.Uint32x4): SIMD.Uint32x4;
        fromFloat32x4(value: SIMD.Float32x4): SIMD.Uint32x4;
        fromInt32x4(value: SIMD.Int32x4): SIMD.Uint32x4;
        fromFloat32x4Bits(value: SIMD.Float32x4): SIMD.Uint32x4;
        fromInt32x4Bits(value: SIMD.Int32x4): SIMD.Uint32x4;
        fromInt16x8Bits(value: SIMD.Int16x8): SIMD.Uint32x4;
        fromInt8x16Bits(value: SIMD.Int8x16): SIMD.Uint32x4;
        fromUint16x8Bits(value: SIMD.Uint16x8): SIMD.Uint32x4;
        fromUint8x16Bits(value: SIMD.Uint8x16): SIMD.Uint32x4;
    }
    interface Uint16x8 {
        constructor: Uint16x8Constructor;
        valueOf(): Uint16x8;
        toLocaleString(): string;
        toString(): string;
    }
    interface Uint16x8Constructor {
        (s0?: number, s1?: number, s2?: number, s3?: number, s4?: number, s5?: number, s6?: number, s7?: number): Uint16x8;
        prototype: Uint16x8;
        extractLane(simd: SIMD.Uint16x8, lane: number): number;
        swizzle(a: SIMD.Uint16x8, l1: number, l2: number, l3: number, l4: number, l5: number, l6: number, l7: number, l8: number): SIMD.Uint16x8;
        shuffle(a: SIMD.Uint16x8, b: SIMD.Uint16x8, l1: number, l2: number, l3: number, l4: number, l5: number, l6: number, l7: number, l8: number): SIMD.Uint16x8;
        check(a: SIMD.Uint16x8): SIMD.Uint16x8;
        splat(n: number): SIMD.Uint16x8;
        replaceLane(simd: SIMD.Uint16x8, lane: number, value: number): SIMD.Uint16x8;
        select(selector: SIMD.Bool16x8, a: SIMD.Uint16x8, b: SIMD.Uint16x8): SIMD.Uint16x8;
        equal(a: SIMD.Uint16x8, b: SIMD.Uint16x8): SIMD.Bool16x8;
        notEqual(a: SIMD.Uint16x8, b: SIMD.Uint16x8): SIMD.Bool16x8;
        lessThan(a: SIMD.Uint16x8, b: SIMD.Uint16x8): SIMD.Bool16x8;
        lessThanOrEqual(a: SIMD.Uint16x8, b: SIMD.Uint16x8): SIMD.Bool16x8;
        greaterThan(a: SIMD.Uint16x8, b: SIMD.Uint16x8): SIMD.Bool16x8;
        greaterThanOrEqual(a: SIMD.Uint16x8, b: SIMD.Uint16x8): SIMD.Bool16x8;
        and(a: SIMD.Uint16x8, b: SIMD.Uint16x8): SIMD.Uint16x8;
        or(a: SIMD.Uint16x8, b: SIMD.Uint16x8): SIMD.Uint16x8;
        xor(a: SIMD.Uint16x8, b: SIMD.Uint16x8): SIMD.Uint16x8;
        not(a: SIMD.Uint16x8, b: SIMD.Uint16x8): SIMD.Uint16x8;
        add(a: SIMD.Uint16x8, b: SIMD.Uint16x8): SIMD.Uint16x8;
        sub(a: SIMD.Uint16x8, b: SIMD.Uint16x8): SIMD.Uint16x8;
        mul(a: SIMD.Uint16x8, b: SIMD.Uint16x8): SIMD.Uint16x8;
        shiftLeftByScalar(a: SIMD.Uint16x8, bits: number): SIMD.Uint16x8;
        shiftRightByScalar(a: SIMD.Uint16x8, bits: number): SIMD.Uint16x8;
        addSaturate(a: SIMD.Uint16x8, b: SIMD.Uint16x8): SIMD.Uint16x8;
        subSaturate(a: SIMD.Uint16x8, b: SIMD.Uint16x8): SIMD.Uint16x8;
        load(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number): SIMD.Uint16x8;
        store(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number, value: SIMD.Uint16x8): SIMD.Uint16x8;
        fromInt16x8(value: SIMD.Int16x8): SIMD.Uint16x8;
        fromFloat32x4Bits(value: SIMD.Float32x4): SIMD.Uint16x8;
        fromInt32x4Bits(value: SIMD.Int32x4): SIMD.Uint16x8;
        fromInt16x8Bits(value: SIMD.Int16x8): SIMD.Uint16x8;
        fromInt8x16Bits(value: SIMD.Int8x16): SIMD.Uint16x8;
        fromUint32x4Bits(value: SIMD.Uint32x4): SIMD.Uint16x8;
        fromUint8x16Bits(value: SIMD.Uint8x16): SIMD.Uint16x8;
    }
    interface Uint8x16 {
        constructor: Uint8x16Constructor;
        valueOf(): Uint8x16;
        toLocaleString(): string;
        toString(): string;
    }
    interface Uint8x16Constructor {
        (s0?: number, s1?: number, s2?: number, s3?: number, s4?: number, s5?: number, s6?: number, s7?: number, s8?: number, s9?: number, s10?: number, s11?: number, s12?: number, s13?: number, s14?: number, s15?: number): Uint8x16;
        prototype: Uint8x16;
        extractLane(simd: SIMD.Uint8x16, lane: number): number;
        swizzle(a: SIMD.Uint8x16, l1: number, l2: number, l3: number, l4: number, l5: number, l6: number, l7: number, l8: number, l9: number, l10: number, l11: number, l12: number, l13: number, l14: number, l15: number, l16: number): SIMD.Uint8x16;
        shuffle(a: SIMD.Uint8x16, b: SIMD.Uint8x16, l1: number, l2: number, l3: number, l4: number, l5: number, l6: number, l7: number, l8: number, l9: number, l10: number, l11: number, l12: number, l13: number, l14: number, l15: number, l16: number): SIMD.Uint8x16;
        check(a: SIMD.Uint8x16): SIMD.Uint8x16;
        splat(n: number): SIMD.Uint8x16;
        replaceLane(simd: SIMD.Uint8x16, lane: number, value: number): SIMD.Uint8x16;
        select(selector: SIMD.Bool8x16, a: SIMD.Uint8x16, b: SIMD.Uint8x16): SIMD.Uint8x16;
        equal(a: SIMD.Uint8x16, b: SIMD.Uint8x16): SIMD.Bool8x16;
        notEqual(a: SIMD.Uint8x16, b: SIMD.Uint8x16): SIMD.Bool8x16;
        lessThan(a: SIMD.Uint8x16, b: SIMD.Uint8x16): SIMD.Bool8x16;
        lessThanOrEqual(a: SIMD.Uint8x16, b: SIMD.Uint8x16): SIMD.Bool8x16;
        greaterThan(a: SIMD.Uint8x16, b: SIMD.Uint8x16): SIMD.Bool8x16;
        greaterThanOrEqual(a: SIMD.Uint8x16, b: SIMD.Uint8x16): SIMD.Bool8x16;
        and(a: SIMD.Uint8x16, b: SIMD.Uint8x16): SIMD.Uint8x16;
        or(a: SIMD.Uint8x16, b: SIMD.Uint8x16): SIMD.Uint8x16;
        xor(a: SIMD.Uint8x16, b: SIMD.Uint8x16): SIMD.Uint8x16;
        not(a: SIMD.Uint8x16, b: SIMD.Uint8x16): SIMD.Uint8x16;
        add(a: SIMD.Uint8x16, b: SIMD.Uint8x16): SIMD.Uint8x16;
        sub(a: SIMD.Uint8x16, b: SIMD.Uint8x16): SIMD.Uint8x16;
        mul(a: SIMD.Uint8x16, b: SIMD.Uint8x16): SIMD.Uint8x16;
        shiftLeftByScalar(a: SIMD.Uint8x16, bits: number): SIMD.Uint8x16;
        shiftRightByScalar(a: SIMD.Uint8x16, bits: number): SIMD.Uint8x16;
        addSaturate(a: SIMD.Uint8x16, b: SIMD.Uint8x16): SIMD.Uint8x16;
        subSaturate(a: SIMD.Uint8x16, b: SIMD.Uint8x16): SIMD.Uint8x16;
        load(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number): SIMD.Uint8x16;
        store(tarray: Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, index: number, value: SIMD.Uint8x16): SIMD.Uint8x16;
        fromInt8x16(value: SIMD.Int8x16): SIMD.Uint8x16;
        fromFloat32x4Bits(value: SIMD.Float32x4): SIMD.Uint8x16;
        fromInt32x4Bits(value: SIMD.Int32x4): SIMD.Uint8x16;
        fromInt16x8Bits(value: SIMD.Int16x8): SIMD.Uint8x16;
        fromInt8x16Bits(value: SIMD.Int8x16): SIMD.Uint8x16;
        fromUint32x4Bits(value: SIMD.Uint32x4): SIMD.Uint8x16;
        fromUint16x8Bits(value: SIMD.Uint16x8): SIMD.Uint8x16;
    }
    interface Bool32x4 {
        constructor: Bool32x4Constructor;
        valueOf(): Bool32x4;
        toLocaleString(): string;
        toString(): string;
    }
    interface Bool32x4Constructor {
        (s0?: boolean, s1?: boolean, s2?: boolean, s3?: boolean): Bool32x4;
        prototype: Bool32x4;
        extractLane(simd: SIMD.Bool32x4, lane: number): boolean;
        check(a: SIMD.Bool32x4): SIMD.Bool32x4;
        splat(n: boolean): SIMD.Bool32x4;
        replaceLane(simd: SIMD.Bool32x4, lane: number, value: boolean): SIMD.Bool32x4;
        allTrue(a: SIMD.Bool32x4): boolean;
        anyTrue(a: SIMD.Bool32x4): boolean;
        and(a: SIMD.Bool32x4, b: SIMD.Bool32x4): SIMD.Bool32x4;
        or(a: SIMD.Bool32x4, b: SIMD.Bool32x4): SIMD.Bool32x4;
        xor(a: SIMD.Bool32x4, b: SIMD.Bool32x4): SIMD.Bool32x4;
        not(a: SIMD.Bool32x4, b: SIMD.Bool32x4): SIMD.Bool32x4;
    }
    interface Bool16x8 {
        constructor: Bool16x8Constructor;
        valueOf(): Bool16x8;
        toLocaleString(): string;
        toString(): string;
    }
    interface Bool16x8Constructor {
        (s0?: boolean, s1?: boolean, s2?: boolean, s3?: boolean, s4?: boolean, s5?: boolean, s6?: boolean, s7?: boolean): Bool16x8;
        prototype: Bool16x8;
        extractLane(simd: SIMD.Bool16x8, lane: number): boolean;
        check(a: SIMD.Bool16x8): SIMD.Bool16x8;
        splat(n: boolean): SIMD.Bool16x8;
        replaceLane(simd: SIMD.Bool16x8, lane: number, value: boolean): SIMD.Bool16x8;
        allTrue(a: SIMD.Bool16x8): boolean;
        anyTrue(a: SIMD.Bool16x8): boolean;
        and(a: SIMD.Bool16x8, b: SIMD.Bool16x8): SIMD.Bool16x8;
        or(a: SIMD.Bool16x8, b: SIMD.Bool16x8): SIMD.Bool16x8;
        xor(a: SIMD.Bool16x8, b: SIMD.Bool16x8): SIMD.Bool16x8;
        not(a: SIMD.Bool16x8, b: SIMD.Bool16x8): SIMD.Bool16x8;
    }
    interface Bool8x16 {
        constructor: Bool8x16Constructor;
        valueOf(): Bool8x16;
        toLocaleString(): string;
        toString(): string;
    }
    interface Bool8x16Constructor {
        (s0?: boolean, s1?: boolean, s2?: boolean, s3?: boolean, s4?: boolean, s5?: boolean, s6?: boolean, s7?: boolean, s8?: boolean, s9?: boolean, s10?: boolean, s11?: boolean, s12?: boolean, s13?: boolean, s14?: boolean, s15?: boolean): Bool8x16;
        prototype: Bool8x16;
        extractLane(simd: SIMD.Bool8x16, lane: number): boolean;
        check(a: SIMD.Bool8x16): SIMD.Bool8x16;
        splat(n: boolean): SIMD.Bool8x16;
        replaceLane(simd: SIMD.Bool8x16, lane: number, value: boolean): SIMD.Bool8x16;
        allTrue(a: SIMD.Bool8x16): boolean;
        anyTrue(a: SIMD.Bool8x16): boolean;
        and(a: SIMD.Bool8x16, b: SIMD.Bool8x16): SIMD.Bool8x16;
        or(a: SIMD.Bool8x16, b: SIMD.Bool8x16): SIMD.Bool8x16;
        xor(a: SIMD.Bool8x16, b: SIMD.Bool8x16): SIMD.Bool8x16;
        not(a: SIMD.Bool8x16, b: SIMD.Bool8x16): SIMD.Bool8x16;
    }
}

declare module BABYLON {
    /**
     * Node is the basic class for all scene objects (Mesh, Light Camera).
     */
    class Node {
        name: string;
        id: string;
        uniqueId: number;
        state: string;
        metadata: any;
        doNotSerialize: boolean;
        animations: Animation[];
        private _ranges;
        onReady: (node: Node) => void;
        private _childrenFlag;
        private _isEnabled;
        private _isReady;
        _currentRenderId: number;
        private _parentRenderId;
        _waitingParentId: string;
        private _scene;
        _cache: any;
        private _parentNode;
        private _children;
        parent: Node;
        getClassName(): string;
        /**
        * An event triggered when the mesh is disposed.
        * @type {BABYLON.Observable}
        */
        onDisposeObservable: Observable<Node>;
        private _onDisposeObserver;
        onDispose: () => void;
        /**
         * @constructor
         * @param {string} name - the name and id to be given to this node
         * @param {BABYLON.Scene} the scene this node will be added to
         */
        constructor(name: string, scene: Scene);
        getScene(): Scene;
        getEngine(): Engine;
        getWorldMatrix(): Matrix;
        _initCache(): void;
        updateCache(force?: boolean): void;
        _updateCache(ignoreParentClass?: boolean): void;
        _isSynchronized(): boolean;
        _markSyncedWithParent(): void;
        isSynchronizedWithParent(): boolean;
        isSynchronized(updateCache?: boolean): boolean;
        hasNewParent(update?: boolean): boolean;
        /**
         * Is this node ready to be used/rendered
         * @return {boolean} is it ready
         */
        isReady(): boolean;
        /**
         * Is this node enabled.
         * If the node has a parent and is enabled, the parent will be inspected as well.
         * @return {boolean} whether this node (and its parent) is enabled.
         * @see setEnabled
         */
        isEnabled(): boolean;
        /**
         * Set the enabled state of this node.
         * @param {boolean} value - the new enabled state
         * @see isEnabled
         */
        setEnabled(value: boolean): void;
        /**
         * Is this node a descendant of the given node.
         * The function will iterate up the hierarchy until the ancestor was found or no more parents defined.
         * @param {BABYLON.Node} ancestor - The parent node to inspect
         * @see parent
         */
        isDescendantOf(ancestor: Node): boolean;
        /**
         * Evaluate the list of children and determine if they should be considered as descendants considering the given criterias
         * @param {BABYLON.Node[]} results the result array containing the nodes matching the given criterias
         * @param {boolean} directDescendantsOnly if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered.
         * @param predicate: an optional predicate that will be called on every evaluated children, the predicate must return true for a given child to be part of the result, otherwise it will be ignored.
         */
        _getDescendants(results: Node[], directDescendantsOnly?: boolean, predicate?: (node: Node) => boolean): void;
        /**
         * Will return all nodes that have this node as ascendant.
         * @param {boolean} directDescendantsOnly if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered.
         * @param predicate: an optional predicate that will be called on every evaluated children, the predicate must return true for a given child to be part of the result, otherwise it will be ignored.
         * @return {BABYLON.Node[]} all children nodes of all types.
         */
        getDescendants(directDescendantsOnly?: boolean, predicate?: (node: Node) => boolean): Node[];
        /**
         * Get all child-meshes of this node.
         */
        getChildMeshes(directDecendantsOnly?: boolean, predicate?: (node: Node) => boolean): AbstractMesh[];
        /**
         * Get all direct children of this node.
        */
        getChildren(predicate?: (node: Node) => boolean): Node[];
        _setReady(state: boolean): void;
        getAnimationByName(name: string): Animation;
        createAnimationRange(name: string, from: number, to: number): void;
        deleteAnimationRange(name: string, deleteFrames?: boolean): void;
        getAnimationRange(name: string): AnimationRange;
        beginAnimation(name: string, loop?: boolean, speedRatio?: number, onAnimationEnd?: () => void): void;
        serializeAnimationRanges(): any;
        dispose(): void;
        static ParseAnimationRanges(node: Node, parsedNode: any, scene: Scene): void;
    }
}

declare module BABYLON {
    interface IDisposable {
        dispose(): void;
    }
    class PointerEventTypes {
        static _POINTERDOWN: number;
        static _POINTERUP: number;
        static _POINTERMOVE: number;
        static _POINTERWHEEL: number;
        static _POINTERPICK: number;
        static _POINTERTAP: number;
        static _POINTERDOUBLETAP: number;
        static readonly POINTERDOWN: number;
        static readonly POINTERUP: number;
        static readonly POINTERMOVE: number;
        static readonly POINTERWHEEL: number;
        static readonly POINTERPICK: number;
        static readonly POINTERTAP: number;
        static readonly POINTERDOUBLETAP: number;
    }
    class PointerInfoBase {
        type: number;
        event: PointerEvent | MouseWheelEvent;
        constructor(type: number, event: PointerEvent | MouseWheelEvent);
    }
    /**
     * This class is used to store pointer related info for the onPrePointerObservable event.
     * Set the skipOnPointerObservable property to true if you want the engine to stop any process after this event is triggered, even not calling onPointerObservable
     */
    class PointerInfoPre extends PointerInfoBase {
        constructor(type: number, event: PointerEvent | MouseWheelEvent, localX: any, localY: any);
        localPosition: Vector2;
        skipOnPointerObservable: boolean;
    }
    /**
     * This type contains all the data related to a pointer event in Babylon.js.
     * The event member is an instance of PointerEvent for all types except PointerWheel and is of type MouseWheelEvent when type equals PointerWheel. The different event types can be found in the PointerEventTypes class.
     */
    class PointerInfo extends PointerInfoBase {
        pickInfo: PickingInfo;
        constructor(type: number, event: PointerEvent | MouseWheelEvent, pickInfo: PickingInfo);
    }
    /**
     * This class is used by the onRenderingGroupObservable
     */
    class RenderingGroupInfo {
        /**
         * The Scene that being rendered
         */
        scene: Scene;
        /**
         * The camera currently used for the rendering pass
         */
        camera: Camera;
        /**
         * The ID of the renderingGroup being processed
         */
        renderingGroupId: number;
        /**
         * The rendering stage, can be either STAGE_PRECLEAR, STAGE_PREOPAQUE, STAGE_PRETRANSPARENT, STAGE_POSTTRANSPARENT
         */
        renderStage: number;
        /**
         * Stage corresponding to the very first hook in the renderingGroup phase: before the render buffer may be cleared
         * This stage will be fired no matter what
         */
        static STAGE_PRECLEAR: number;
        /**
         * Called before opaque object are rendered.
         * This stage will be fired only if there's 3D Opaque content to render
         */
        static STAGE_PREOPAQUE: number;
        /**
         * Called after the opaque objects are rendered and before the transparent ones
         * This stage will be fired only if there's 3D transparent content to render
         */
        static STAGE_PRETRANSPARENT: number;
        /**
         * Called after the transparent object are rendered, last hook of the renderingGroup phase
         * This stage will be fired no matter what
         */
        static STAGE_POSTTRANSPARENT: number;
    }
    /**
     * Represents a scene to be rendered by the engine.
     * @see http://doc.babylonjs.com/page.php?p=21911
     */
    class Scene implements IAnimatable {
        private static _FOGMODE_NONE;
        private static _FOGMODE_EXP;
        private static _FOGMODE_EXP2;
        private static _FOGMODE_LINEAR;
        static MinDeltaTime: number;
        static MaxDeltaTime: number;
        static readonly FOGMODE_NONE: number;
        static readonly FOGMODE_EXP: number;
        static readonly FOGMODE_EXP2: number;
        static readonly FOGMODE_LINEAR: number;
        autoClear: boolean;
        autoClearDepthAndStencil: boolean;
        clearColor: Color4;
        ambientColor: Color3;
        _environmentBRDFTexture: BaseTexture;
        protected _environmentTexture: BaseTexture;
        /**
         * Texture used in all pbr material as the reflection texture.
         * As in the majority of the scene they are the same (exception for multi room and so on),
         * this is easier to reference from here than from all the materials.
         */
        /**
         * Texture used in all pbr material as the reflection texture.
         * As in the majority of the scene they are the same (exception for multi room and so on),
         * this is easier to set here than in all the materials.
         */
        environmentTexture: BaseTexture;
        protected _imageProcessingConfiguration: ImageProcessingConfiguration;
        /**
         * Default image processing configuration used either in the rendering
         * Forward main pass or through the imageProcessingPostProcess if present.
         * As in the majority of the scene they are the same (exception for multi camera),
         * this is easier to reference from here than from all the materials and post process.
         *
         * No setter as we it is a shared configuration, you can set the values instead.
         */
        readonly imageProcessingConfiguration: ImageProcessingConfiguration;
        forceWireframe: boolean;
        private _forcePointsCloud;
        forcePointsCloud: boolean;
        forceShowBoundingBoxes: boolean;
        clipPlane: Plane;
        animationsEnabled: boolean;
        constantlyUpdateMeshUnderPointer: boolean;
        hoverCursor: string;
        metadata: any;
        /**
        * An event triggered when the scene is disposed.
        * @type {BABYLON.Observable}
        */
        onDisposeObservable: Observable<Scene>;
        private _onDisposeObserver;
        onDispose: () => void;
        /**
        * An event triggered before rendering the scene
        * @type {BABYLON.Observable}
        */
        onBeforeRenderObservable: Observable<Scene>;
        private _onBeforeRenderObserver;
        beforeRender: () => void;
        /**
        * An event triggered after rendering the scene
        * @type {BABYLON.Observable}
        */
        onAfterRenderObservable: Observable<Scene>;
        private _onAfterRenderObserver;
        afterRender: () => void;
        /**
        * An event triggered when the scene is ready
        * @type {BABYLON.Observable}
        */
        onReadyObservable: Observable<Scene>;
        /**
        * An event triggered before rendering a camera
        * @type {BABYLON.Observable}
        */
        onBeforeCameraRenderObservable: Observable<Camera>;
        private _onBeforeCameraRenderObserver;
        beforeCameraRender: () => void;
        /**
        * An event triggered after rendering a camera
        * @type {BABYLON.Observable}
        */
        onAfterCameraRenderObservable: Observable<Camera>;
        private _onAfterCameraRenderObserver;
        afterCameraRender: () => void;
        /**
        * An event triggered when a camera is created
        * @type {BABYLON.Observable}
        */
        onNewCameraAddedObservable: Observable<Camera>;
        /**
        * An event triggered when a camera is removed
        * @type {BABYLON.Observable}
        */
        onCameraRemovedObservable: Observable<Camera>;
        /**
        * An event triggered when a light is created
        * @type {BABYLON.Observable}
        */
        onNewLightAddedObservable: Observable<Light>;
        /**
        * An event triggered when a light is removed
        * @type {BABYLON.Observable}
        */
        onLightRemovedObservable: Observable<Light>;
        /**
        * An event triggered when a geometry is created
        * @type {BABYLON.Observable}
        */
        onNewGeometryAddedObservable: Observable<Geometry>;
        /**
        * An event triggered when a geometry is removed
        * @type {BABYLON.Observable}
        */
        onGeometryRemovedObservable: Observable<Geometry>;
        /**
        * An event triggered when a mesh is created
        * @type {BABYLON.Observable}
        */
        onNewMeshAddedObservable: Observable<AbstractMesh>;
        /**
        * An event triggered when a mesh is removed
        * @type {BABYLON.Observable}
        */
        onMeshRemovedObservable: Observable<AbstractMesh>;
        /**
         * This Observable will be triggered for each stage of each renderingGroup of each rendered camera.
         * The RenderinGroupInfo class contains all the information about the context in which the observable is called
         * If you wish to register an Observer only for a given set of renderingGroup, use the mask with a combination of the renderingGroup index elevated to the power of two (1 for renderingGroup 0, 2 for renderingrOup1, 4 for 2 and 8 for 3)
         */
        onRenderingGroupObservable: Observable<RenderingGroupInfo>;
        animations: Animation[];
        pointerDownPredicate: (Mesh: AbstractMesh) => boolean;
        pointerUpPredicate: (Mesh: AbstractMesh) => boolean;
        pointerMovePredicate: (Mesh: AbstractMesh) => boolean;
        private _onPointerMove;
        private _onPointerDown;
        private _onPointerUp;
        onPointerMove: (evt: PointerEvent, pickInfo: PickingInfo) => void;
        onPointerDown: (evt: PointerEvent, pickInfo: PickingInfo) => void;
        onPointerUp: (evt: PointerEvent, pickInfo: PickingInfo) => void;
        onPointerPick: (evt: PointerEvent, pickInfo: PickingInfo) => void;
        /**
         * This observable event is triggered when any mouse event registered during Scene.attach() is called BEFORE the 3D engine to process anything (mesh/sprite picking for instance).
         * You have the possibility to skip the 3D Engine process and the call to onPointerObservable by setting PointerInfoBase.skipOnPointerObservable to true
         */
        onPrePointerObservable: Observable<PointerInfoPre>;
        /**
         * Observable event triggered each time an input event is received from the rendering canvas
         */
        onPointerObservable: Observable<PointerInfo>;
        readonly unTranslatedPointer: Vector2;
        static DragMovementThreshold: number;
        static LongPressDelay: number;
        static DoubleClickDelay: number;
        static ExclusiveDoubleClickMode: boolean;
        private _initClickEvent;
        private _initActionManager;
        private _delayedSimpleClick;
        private _delayedSimpleClickTimeout;
        private _previousDelayedSimpleClickTimeout;
        private _meshPickProceed;
        private _previousButtonPressed;
        private _previousHasSwiped;
        private _currentPickResult;
        private _previousPickResult;
        private _isButtonPressed;
        private _doubleClickOccured;
        cameraToUseForPointers: Camera;
        private _pointerX;
        private _pointerY;
        private _unTranslatedPointerX;
        private _unTranslatedPointerY;
        private _startingPointerPosition;
        private _previousStartingPointerPosition;
        private _startingPointerTime;
        private _previousStartingPointerTime;
        _mirroredCameraPosition: Vector3;
        private _onKeyDown;
        private _onKeyUp;
        /**
        * use right-handed coordinate system on this scene.
        * @type {boolean}
        */
        private _useRightHandedSystem;
        useRightHandedSystem: boolean;
        /**
        * is fog enabled on this scene.
        * @type {boolean}
        */
        private _fogEnabled;
        fogEnabled: boolean;
        private _fogMode;
        fogMode: number;
        fogColor: Color3;
        fogDensity: number;
        fogStart: number;
        fogEnd: number;
        /**
        * is shadow enabled on this scene.
        * @type {boolean}
        */
        private _shadowsEnabled;
        shadowsEnabled: boolean;
        /**
        * is light enabled on this scene.
        * @type {boolean}
        */
        private _lightsEnabled;
        lightsEnabled: boolean;
        /**
        * All of the lights added to this scene.
        * @see BABYLON.Light
        * @type {BABYLON.Light[]}
        */
        lights: Light[];
        /**
        * All of the cameras added to this scene.
        * @see BABYLON.Camera
        * @type {BABYLON.Camera[]}
        */
        cameras: Camera[];
        activeCameras: Camera[];
        activeCamera: Camera;
        /**
        * All of the (abstract) meshes added to this scene.
        * @see BABYLON.AbstractMesh
        * @type {BABYLON.AbstractMesh[]}
        */
        meshes: AbstractMesh[];
        private _geometries;
        materials: Material[];
        multiMaterials: MultiMaterial[];
        private _defaultMaterial;
        defaultMaterial: Material;
        private _texturesEnabled;
        texturesEnabled: boolean;
        textures: BaseTexture[];
        particlesEnabled: boolean;
        particleSystems: ParticleSystem[];
        spritesEnabled: boolean;
        spriteManagers: SpriteManager[];
        layers: Layer[];
        highlightLayers: HighlightLayer[];
        private _skeletonsEnabled;
        skeletonsEnabled: boolean;
        skeletons: Skeleton[];
        morphTargetManagers: MorphTargetManager[];
        lensFlaresEnabled: boolean;
        lensFlareSystems: LensFlareSystem[];
        collisionsEnabled: boolean;
        private _workerCollisions;
        collisionCoordinator: ICollisionCoordinator;
        gravity: Vector3;
        postProcessesEnabled: boolean;
        postProcessManager: PostProcessManager;
        private _postProcessRenderPipelineManager;
        readonly postProcessRenderPipelineManager: PostProcessRenderPipelineManager;
        renderTargetsEnabled: boolean;
        dumpNextRenderTargets: boolean;
        customRenderTargets: RenderTargetTexture[];
        useDelayedTextureLoading: boolean;
        importedMeshesFiles: String[];
        probesEnabled: boolean;
        reflectionProbes: ReflectionProbe[];
        database: any;
        /**
         * This scene's action manager
         * @type {BABYLON.ActionManager}
        */
        actionManager: ActionManager;
        _actionManagers: ActionManager[];
        private _meshesForIntersections;
        proceduralTexturesEnabled: boolean;
        _proceduralTextures: ProceduralTexture[];
        mainSoundTrack: SoundTrack;
        soundTracks: SoundTrack[];
        private _audioEnabled;
        private _headphone;
        simplificationQueue: SimplificationQueue;
        private _engine;
        private _totalMeshesCounter;
        private _totalLightsCounter;
        private _totalMaterialsCounter;
        private _totalTexturesCounter;
        private _totalVertices;
        _activeIndices: PerfCounter;
        _activeParticles: PerfCounter;
        private _lastFrameDuration;
        private _evaluateActiveMeshesDuration;
        private _renderTargetsDuration;
        _particlesDuration: PerfCounter;
        private _renderDuration;
        _spritesDuration: PerfCounter;
        _activeBones: PerfCounter;
        private _animationRatio;
        private _animationTimeLast;
        private _animationTime;
        animationTimeScale: number;
        _cachedMaterial: Material;
        _cachedEffect: Effect;
        _cachedVisibility: number;
        private _renderId;
        private _executeWhenReadyTimeoutId;
        private _intermediateRendering;
        private _viewUpdateFlag;
        private _projectionUpdateFlag;
        _toBeDisposed: SmartArray<IDisposable>;
        private _pendingData;
        private _activeMeshes;
        private _processedMaterials;
        private _renderTargets;
        _activeParticleSystems: SmartArray<ParticleSystem>;
        private _activeSkeletons;
        private _softwareSkinnedMeshes;
        private _renderingManager;
        private _physicsEngine;
        _activeAnimatables: Animatable[];
        private _transformMatrix;
        private _sceneUbo;
        private _pickWithRayInverseMatrix;
        private _boundingBoxRenderer;
        private _outlineRenderer;
        private _viewMatrix;
        private _projectionMatrix;
        private _frustumPlanes;
        readonly frustumPlanes: Plane[];
        requireLightSorting: boolean;
        private _selectionOctree;
        private _pointerOverMesh;
        private _pointerOverSprite;
        private _debugLayer;
        private _depthRenderer;
        private _geometryBufferRenderer;
        private _uniqueIdCounter;
        private _pickedDownMesh;
        private _pickedUpMesh;
        private _pickedDownSprite;
        private _externalData;
        private _uid;
        /**
         * @constructor
         * @param {BABYLON.Engine} engine - the engine to be used to render this scene.
         */
        constructor(engine: Engine);
        readonly debugLayer: DebugLayer;
        workerCollisions: boolean;
        readonly selectionOctree: Octree<AbstractMesh>;
        /**
         * The mesh that is currently under the pointer.
         * @return {BABYLON.AbstractMesh} mesh under the pointer/mouse cursor or null if none.
         */
        readonly meshUnderPointer: AbstractMesh;
        /**
         * Current on-screen X position of the pointer
         * @return {number} X position of the pointer
         */
        readonly pointerX: number;
        /**
         * Current on-screen Y position of the pointer
         * @return {number} Y position of the pointer
         */
        readonly pointerY: number;
        getCachedMaterial(): Material;
        getCachedEffect(): Effect;
        getCachedVisibility(): number;
        isCachedMaterialValid(material: Material, effect: Effect, visibility?: number): boolean;
        getBoundingBoxRenderer(): BoundingBoxRenderer;
        getOutlineRenderer(): OutlineRenderer;
        getEngine(): Engine;
        getTotalVertices(): number;
        readonly totalVerticesPerfCounter: PerfCounter;
        getActiveIndices(): number;
        readonly totalActiveIndicesPerfCounter: PerfCounter;
        getActiveParticles(): number;
        readonly activeParticlesPerfCounter: PerfCounter;
        getActiveBones(): number;
        readonly activeBonesPerfCounter: PerfCounter;
        getLastFrameDuration(): number;
        readonly lastFramePerfCounter: PerfCounter;
        getEvaluateActiveMeshesDuration(): number;
        readonly evaluateActiveMeshesDurationPerfCounter: PerfCounter;
        getActiveMeshes(): SmartArray<Mesh>;
        getRenderTargetsDuration(): number;
        getRenderDuration(): number;
        readonly renderDurationPerfCounter: PerfCounter;
        getParticlesDuration(): number;
        readonly particlesDurationPerfCounter: PerfCounter;
        getSpritesDuration(): number;
        readonly spriteDuractionPerfCounter: PerfCounter;
        getAnimationRatio(): number;
        getRenderId(): number;
        incrementRenderId(): void;
        private _updatePointerPosition(evt);
        private _createUbo();
        /**
        * Attach events to the canvas (To handle actionManagers triggers and raise onPointerMove, onPointerDown and onPointerUp
        * @param attachUp defines if you want to attach events to pointerup
        * @param attachDown defines if you want to attach events to pointerdown
        * @param attachMove defines if you want to attach events to pointermove
        */
        attachControl(attachUp?: boolean, attachDown?: boolean, attachMove?: boolean): void;
        detachControl(): void;
        isReady(): boolean;
        resetCachedMaterial(): void;
        registerBeforeRender(func: () => void): void;
        unregisterBeforeRender(func: () => void): void;
        registerAfterRender(func: () => void): void;
        unregisterAfterRender(func: () => void): void;
        _addPendingData(data: any): void;
        _removePendingData(data: any): void;
        getWaitingItemsCount(): number;
        /**
         * Registers a function to be executed when the scene is ready.
         * @param {Function} func - the function to be executed.
         */
        executeWhenReady(func: () => void): void;
        _checkIsReady(): void;
        /**
         * Will start the animation sequence of a given target
         * @param target - the target
         * @param {number} from - from which frame should animation start
         * @param {number} to - till which frame should animation run.
         * @param {boolean} [loop] - should the animation loop
         * @param {number} [speedRatio] - the speed in which to run the animation
         * @param {Function} [onAnimationEnd] function to be executed when the animation ended.
         * @param {BABYLON.Animatable} [animatable] an animatable object. If not provided a new one will be created from the given params.
         * @return {BABYLON.Animatable} the animatable object created for this animation
         * @see BABYLON.Animatable
         * @see http://doc.babylonjs.com/page.php?p=22081
         */
        beginAnimation(target: any, from: number, to: number, loop?: boolean, speedRatio?: number, onAnimationEnd?: () => void, animatable?: Animatable): Animatable;
        beginDirectAnimation(target: any, animations: Animation[], from: number, to: number, loop?: boolean, speedRatio?: number, onAnimationEnd?: () => void): Animatable;
        getAnimatableByTarget(target: any): Animatable;
        readonly Animatables: Animatable[];
        /**
         * Will stop the animation of the given target
         * @param target - the target
         * @param animationName - the name of the animation to stop (all animations will be stopped is empty)
         * @see beginAnimation
         */
        stopAnimation(target: any, animationName?: string): void;
        private _animate();
        getViewMatrix(): Matrix;
        getProjectionMatrix(): Matrix;
        getTransformMatrix(): Matrix;
        setTransformMatrix(view: Matrix, projection: Matrix): void;
        getSceneUniformBuffer(): UniformBuffer;
        getUniqueId(): number;
        addMesh(newMesh: AbstractMesh): void;
        removeMesh(toRemove: AbstractMesh): number;
        removeSkeleton(toRemove: Skeleton): number;
        removeMorphTargetManager(toRemove: MorphTargetManager): number;
        removeLight(toRemove: Light): number;
        removeCamera(toRemove: Camera): number;
        addLight(newLight: Light): void;
        sortLightsByPriority(): void;
        addCamera(newCamera: Camera): void;
        /**
         * Switch active camera
         * @param {Camera} newCamera - new active camera
         * @param {boolean} attachControl - call attachControl for the new active camera (default: true)
         */
        switchActiveCamera(newCamera: Camera, attachControl?: boolean): void;
        /**
         * sets the active camera of the scene using its ID
         * @param {string} id - the camera's ID
         * @return {BABYLON.Camera|null} the new active camera or null if none found.
         * @see activeCamera
         */
        setActiveCameraByID(id: string): Camera;
        /**
         * sets the active camera of the scene using its name
         * @param {string} name - the camera's name
         * @return {BABYLON.Camera|null} the new active camera or null if none found.
         * @see activeCamera
         */
        setActiveCameraByName(name: string): Camera;
        /**
         * get a material using its id
         * @param {string} the material's ID
         * @return {BABYLON.Material|null} the material or null if none found.
         */
        getMaterialByID(id: string): Material;
        /**
         * get a material using its name
         * @param {string} the material's name
         * @return {BABYLON.Material|null} the material or null if none found.
         */
        getMaterialByName(name: string): Material;
        getLensFlareSystemByName(name: string): LensFlareSystem;
        getLensFlareSystemByID(id: string): LensFlareSystem;
        getCameraByID(id: string): Camera;
        getCameraByUniqueID(uniqueId: number): Camera;
        /**
         * get a camera using its name
         * @param {string} the camera's name
         * @return {BABYLON.Camera|null} the camera or null if none found.
         */
        getCameraByName(name: string): Camera;
        /**
         * get a bone using its id
         * @param {string} the bone's id
         * @return {BABYLON.Bone|null} the bone or null if not found
         */
        getBoneByID(id: string): Bone;
        /**
        * get a bone using its id
        * @param {string} the bone's name
        * @return {BABYLON.Bone|null} the bone or null if not found
        */
        getBoneByName(name: string): Bone;
        /**
         * get a light node using its name
         * @param {string} the light's name
         * @return {BABYLON.Light|null} the light or null if none found.
         */
        getLightByName(name: string): Light;
        /**
         * get a light node using its ID
         * @param {string} the light's id
         * @return {BABYLON.Light|null} the light or null if none found.
         */
        getLightByID(id: string): Light;
        /**
         * get a light node using its scene-generated unique ID
         * @param {number} the light's unique id
         * @return {BABYLON.Light|null} the light or null if none found.
         */
        getLightByUniqueID(uniqueId: number): Light;
        /**
         * get a particle system by id
         * @param id {number} the particle system id
         * @return {BABYLON.ParticleSystem|null} the corresponding system or null if none found.
         */
        getParticleSystemByID(id: string): ParticleSystem;
        /**
         * get a geometry using its ID
         * @param {string} the geometry's id
         * @return {BABYLON.Geometry|null} the geometry or null if none found.
         */
        getGeometryByID(id: string): Geometry;
        /**
         * add a new geometry to this scene.
         * @param {BABYLON.Geometry} geometry - the geometry to be added to the scene.
         * @param {boolean} [force] - force addition, even if a geometry with this ID already exists
         * @return {boolean} was the geometry added or not
         */
        pushGeometry(geometry: Geometry, force?: boolean): boolean;
        /**
         * Removes an existing geometry
         * @param {BABYLON.Geometry} geometry - the geometry to be removed from the scene.
         * @return {boolean} was the geometry removed or not
         */
        removeGeometry(geometry: Geometry): boolean;
        getGeometries(): Geometry[];
        /**
         * Get the first added mesh found of a given ID
         * @param {string} id - the id to search for
         * @return {BABYLON.AbstractMesh|null} the mesh found or null if not found at all.
         */
        getMeshByID(id: string): AbstractMesh;
        getMeshesByID(id: string): Array<AbstractMesh>;
        /**
         * Get a mesh with its auto-generated unique id
         * @param {number} uniqueId - the unique id to search for
         * @return {BABYLON.AbstractMesh|null} the mesh found or null if not found at all.
         */
        getMeshByUniqueID(uniqueId: number): AbstractMesh;
        /**
         * Get a the last added mesh found of a given ID
         * @param {string} id - the id to search for
         * @return {BABYLON.AbstractMesh|null} the mesh found or null if not found at all.
         */
        getLastMeshByID(id: string): AbstractMesh;
        /**
         * Get a the last added node (Mesh, Camera, Light) found of a given ID
         * @param {string} id - the id to search for
         * @return {BABYLON.Node|null} the node found or null if not found at all.
         */
        getLastEntryByID(id: string): Node;
        getNodeByID(id: string): Node;
        getNodeByName(name: string): Node;
        getMeshByName(name: string): AbstractMesh;
        getSoundByName(name: string): Sound;
        getLastSkeletonByID(id: string): Skeleton;
        getSkeletonById(id: string): Skeleton;
        getSkeletonByName(name: string): Skeleton;
        getMorphTargetManagerById(id: number): MorphTargetManager;
        isActiveMesh(mesh: Mesh): boolean;
        /**
         * Return a the first highlight layer of the scene with a given name.
         * @param name The name of the highlight layer to look for.
         * @return The highlight layer if found otherwise null.
         */
        getHighlightLayerByName(name: string): HighlightLayer;
        /**
         * Return a unique id as a string which can serve as an identifier for the scene
         */
        readonly uid: string;
        /**
         * Add an externaly attached data from its key.
         * This method call will fail and return false, if such key already exists.
         * If you don't care and just want to get the data no matter what, use the more convenient getOrAddExternalDataWithFactory() method.
         * @param key the unique key that identifies the data
         * @param data the data object to associate to the key for this Engine instance
         * @return true if no such key were already present and the data was added successfully, false otherwise
         */
        addExternalData<T>(key: string, data: T): boolean;
        /**
         * Get an externaly attached data from its key
         * @param key the unique key that identifies the data
         * @return the associated data, if present (can be null), or undefined if not present
         */
        getExternalData<T>(key: string): T;
        /**
         * Get an externaly attached data from its key, create it using a factory if it's not already present
         * @param key the unique key that identifies the data
         * @param factory the factory that will be called to create the instance if and only if it doesn't exists
         * @return the associated data, can be null if the factory returned null.
         */
        getOrAddExternalDataWithFactory<T>(key: string, factory: (k: string) => T): T;
        /**
         * Remove an externaly attached data from the Engine instance
         * @param key the unique key that identifies the data
         * @return true if the data was successfully removed, false if it doesn't exist
         */
        removeExternalData(key: any): boolean;
        private _evaluateSubMesh(subMesh, mesh);
        _isInIntermediateRendering(): boolean;
        private _evaluateActiveMeshes();
        private _activeMesh(sourceMesh, mesh);
        updateTransformMatrix(force?: boolean): void;
        private _renderForCamera(camera);
        private _processSubCameras(camera);
        private _checkIntersections();
        render(): void;
        private _updateAudioParameters();
        audioEnabled: boolean;
        private _disableAudio();
        private _enableAudio();
        headphone: boolean;
        private _switchAudioModeForHeadphones();
        private _switchAudioModeForNormalSpeakers();
        enableDepthRenderer(): DepthRenderer;
        disableDepthRenderer(): void;
        enableGeometryBufferRenderer(ratio?: number): GeometryBufferRenderer;
        disableGeometryBufferRenderer(): void;
        freezeMaterials(): void;
        unfreezeMaterials(): void;
        dispose(): void;
        readonly isDisposed: boolean;
        disposeSounds(): void;
        getWorldExtends(): {
            min: Vector3;
            max: Vector3;
        };
        createOrUpdateSelectionOctree(maxCapacity?: number, maxDepth?: number): Octree<AbstractMesh>;
        createPickingRay(x: number, y: number, world: Matrix, camera: Camera, cameraViewSpace?: boolean): Ray;
        createPickingRayInCameraSpace(x: number, y: number, camera: Camera): Ray;
        private _internalPick(rayFunction, predicate, fastCheck?);
        private _internalMultiPick(rayFunction, predicate);
        private _internalPickSprites(ray, predicate?, fastCheck?, camera?);
        pick(x: number, y: number, predicate?: (mesh: AbstractMesh) => boolean, fastCheck?: boolean, camera?: Camera): PickingInfo;
        pickSprite(x: number, y: number, predicate?: (sprite: Sprite) => boolean, fastCheck?: boolean, camera?: Camera): PickingInfo;
        pickWithRay(ray: Ray, predicate: (mesh: Mesh) => boolean, fastCheck?: boolean): PickingInfo;
        multiPick(x: number, y: number, predicate?: (mesh: AbstractMesh) => boolean, camera?: Camera): PickingInfo[];
        multiPickWithRay(ray: Ray, predicate: (mesh: Mesh) => boolean): PickingInfo[];
        setPointerOverMesh(mesh: AbstractMesh): void;
        getPointerOverMesh(): AbstractMesh;
        setPointerOverSprite(sprite: Sprite): void;
        getPointerOverSprite(): Sprite;
        getPhysicsEngine(): PhysicsEngine;
        /**
         * Enables physics to the current scene
         * @param {BABYLON.Vector3} [gravity] - the scene's gravity for the physics engine
         * @param {BABYLON.IPhysicsEnginePlugin} [plugin] - The physics engine to be used. defaults to OimoJS.
         * @return {boolean} was the physics engine initialized
         */
        enablePhysics(gravity?: Vector3, plugin?: IPhysicsEnginePlugin): boolean;
        disablePhysicsEngine(): void;
        isPhysicsEnabled(): boolean;
        deleteCompoundImpostor(compound: any): void;
        createDefaultCameraOrLight(createArcRotateCamera?: boolean, replace?: boolean, attachCameraControls?: boolean): void;
        createDefaultSkybox(environmentTexture?: BaseTexture, pbr?: boolean, scale?: number, blur?: number): Mesh;
        private _getByTags(list, tagsQuery, forEach?);
        getMeshesByTags(tagsQuery: string, forEach?: (mesh: AbstractMesh) => void): Mesh[];
        getCamerasByTags(tagsQuery: string, forEach?: (camera: Camera) => void): Camera[];
        getLightsByTags(tagsQuery: string, forEach?: (light: Light) => void): Light[];
        getMaterialByTags(tagsQuery: string, forEach?: (material: Material) => void): Material[];
        /**
         * Overrides the default sort function applied in the renderging group to prepare the meshes.
         * This allowed control for front to back rendering or reversly depending of the special needs.
         *
         * @param renderingGroupId The rendering group id corresponding to its index
         * @param opaqueSortCompareFn The opaque queue comparison function use to sort.
         * @param alphaTestSortCompareFn The alpha test queue comparison function use to sort.
         * @param transparentSortCompareFn The transparent queue comparison function use to sort.
         */
        setRenderingOrder(renderingGroupId: number, opaqueSortCompareFn?: (a: SubMesh, b: SubMesh) => number, alphaTestSortCompareFn?: (a: SubMesh, b: SubMesh) => number, transparentSortCompareFn?: (a: SubMesh, b: SubMesh) => number): void;
        /**
         * Specifies whether or not the stencil and depth buffer are cleared between two rendering groups.
         *
         * @param renderingGroupId The rendering group id corresponding to its index
         * @param autoClearDepthStencil Automatically clears depth and stencil between groups if true.
         * @param depth Automatically clears depth between groups if true and autoClear is true.
         * @param stencil Automatically clears stencil between groups if true and autoClear is true.
         */
        setRenderingAutoClearDepthStencil(renderingGroupId: number, autoClearDepthStencil: boolean, depth?: boolean, stencil?: boolean): void;
        /**
         * Will flag all materials as dirty to trigger new shader compilation
         * @param predicate If not null, it will be used to specifiy if a material has to be marked as dirty
         */
        markAllMaterialsAsDirty(flag: number, predicate?: (mat: Material) => boolean): void;
    }
}

interface ImageBitmap {
    readonly width: number;
    readonly height: number;
    close(): void;
}
interface WebGLQuery extends WebGLObject {
}
declare var WebGLQuery: {
    prototype: WebGLQuery;
    new (): WebGLQuery;
};
interface WebGLSampler extends WebGLObject {
}
declare var WebGLSampler: {
    prototype: WebGLSampler;
    new (): WebGLSampler;
};
interface WebGLSync extends WebGLObject {
}
declare var WebGLSync: {
    prototype: WebGLSync;
    new (): WebGLSync;
};
interface WebGLTransformFeedback extends WebGLObject {
}
declare var WebGLTransformFeedback: {
    prototype: WebGLTransformFeedback;
    new (): WebGLTransformFeedback;
};
interface WebGLVertexArrayObject extends WebGLObject {
}
declare var WebGLVertexArrayObject: {
    prototype: WebGLVertexArrayObject;
    new (): WebGLVertexArrayObject;
};

declare module BABYLON {
    class Action {
        triggerOptions: any;
        trigger: number;
        _actionManager: ActionManager;
        private _nextActiveAction;
        private _child;
        private _condition;
        private _triggerParameter;
        constructor(triggerOptions: any, condition?: Condition);
        _prepare(): void;
        getTriggerParameter(): any;
        _executeCurrent(evt: ActionEvent): void;
        execute(evt: ActionEvent): void;
        skipToNextActiveAction(): void;
        then(action: Action): Action;
        _getProperty(propertyPath: string): string;
        _getEffectiveTarget(target: any, propertyPath: string): any;
        serialize(parent: any): any;
        protected _serialize(serializedAction: any, parent?: any): any;
        static _SerializeValueAsString: (value: any) => string;
        static _GetTargetProperty: (target: Scene | Node) => {
            name: string;
            targetType: string;
            value: string;
        };
    }
}

declare module BABYLON {
    /**
     * ActionEvent is the event beint sent when an action is triggered.
     */
    class ActionEvent {
        source: any;
        pointerX: number;
        pointerY: number;
        meshUnderPointer: AbstractMesh;
        sourceEvent: any;
        additionalData: any;
        /**
         * @constructor
         * @param source The mesh or sprite that triggered the action.
         * @param pointerX The X mouse cursor position at the time of the event
         * @param pointerY The Y mouse cursor position at the time of the event
         * @param meshUnderPointer The mesh that is currently pointed at (can be null)
         * @param sourceEvent the original (browser) event that triggered the ActionEvent
         */
        constructor(source: any, pointerX: number, pointerY: number, meshUnderPointer: AbstractMesh, sourceEvent?: any, additionalData?: any);
        /**
         * Helper function to auto-create an ActionEvent from a source mesh.
         * @param source The source mesh that triggered the event
         * @param evt {Event} The original (browser) event
         */
        static CreateNew(source: AbstractMesh, evt?: Event, additionalData?: any): ActionEvent;
        /**
         * Helper function to auto-create an ActionEvent from a source mesh.
         * @param source The source sprite that triggered the event
         * @param scene Scene associated with the sprite
         * @param evt {Event} The original (browser) event
         */
        static CreateNewFromSprite(source: Sprite, scene: Scene, evt?: Event, additionalData?: any): ActionEvent;
        /**
         * Helper function to auto-create an ActionEvent from a scene. If triggered by a mesh use ActionEvent.CreateNew
         * @param scene the scene where the event occurred
         * @param evt {Event} The original (browser) event
         */
        static CreateNewFromScene(scene: Scene, evt: Event): ActionEvent;
        static CreateNewFromPrimitive(prim: any, pointerPos: Vector2, evt?: Event, additionalData?: any): ActionEvent;
    }
    /**
     * Action Manager manages all events to be triggered on a given mesh or the global scene.
     * A single scene can have many Action Managers to handle predefined actions on specific meshes.
     */
    class ActionManager {
        private static _NothingTrigger;
        private static _OnPickTrigger;
        private static _OnLeftPickTrigger;
        private static _OnRightPickTrigger;
        private static _OnCenterPickTrigger;
        private static _OnPickDownTrigger;
        private static _OnDoublePickTrigger;
        private static _OnPickUpTrigger;
        private static _OnLongPressTrigger;
        private static _OnPointerOverTrigger;
        private static _OnPointerOutTrigger;
        private static _OnEveryFrameTrigger;
        private static _OnIntersectionEnterTrigger;
        private static _OnIntersectionExitTrigger;
        private static _OnKeyDownTrigger;
        private static _OnKeyUpTrigger;
        private static _OnPickOutTrigger;
        static readonly NothingTrigger: number;
        static readonly OnPickTrigger: number;
        static readonly OnLeftPickTrigger: number;
        static readonly OnRightPickTrigger: number;
        static readonly OnCenterPickTrigger: number;
        static readonly OnPickDownTrigger: number;
        static readonly OnDoublePickTrigger: number;
        static readonly OnPickUpTrigger: number;
        static readonly OnPickOutTrigger: number;
        static readonly OnLongPressTrigger: number;
        static readonly OnPointerOverTrigger: number;
        static readonly OnPointerOutTrigger: number;
        static readonly OnEveryFrameTrigger: number;
        static readonly OnIntersectionEnterTrigger: number;
        static readonly OnIntersectionExitTrigger: number;
        static readonly OnKeyDownTrigger: number;
        static readonly OnKeyUpTrigger: number;
        static Triggers: {};
        actions: Action[];
        hoverCursor: string;
        private _scene;
        constructor(scene: Scene);
        dispose(): void;
        getScene(): Scene;
        /**
         * Does this action manager handles actions of any of the given triggers
         * @param {number[]} triggers - the triggers to be tested
         * @return {boolean} whether one (or more) of the triggers is handeled
         */
        hasSpecificTriggers(triggers: number[]): boolean;
        /**
         * Does this action manager handles actions of a given trigger
         * @param {number} trigger - the trigger to be tested
         * @return {boolean} whether the trigger is handeled
         */
        hasSpecificTrigger(trigger: number): boolean;
        /**
         * Does this action manager has pointer triggers
         * @return {boolean} whether or not it has pointer triggers
         */
        readonly hasPointerTriggers: boolean;
        /**
         * Does this action manager has pick triggers
         * @return {boolean} whether or not it has pick triggers
         */
        readonly hasPickTriggers: boolean;
        /**
         * Does exist one action manager with at least one trigger
         * @return {boolean} whether or not it exists one action manager with one trigger
        **/
        static readonly HasTriggers: boolean;
        /**
         * Does exist one action manager with at least one pick trigger
         * @return {boolean} whether or not it exists one action manager with one pick trigger
        **/
        static readonly HasPickTriggers: boolean;
        /**
         * Does exist one action manager that handles actions of a given trigger
         * @param {number} trigger - the trigger to be tested
         * @return {boolean} whether the trigger is handeled by at least one action manager
        **/
        static HasSpecificTrigger(trigger: number): boolean;
        /**
         * Registers an action to this action manager
         * @param {BABYLON.Action} action - the action to be registered
         * @return {BABYLON.Action} the action amended (prepared) after registration
         */
        registerAction(action: Action): Action;
        /**
         * Process a specific trigger
         * @param {number} trigger - the trigger to process
         * @param evt {BABYLON.ActionEvent} the event details to be processed
         */
        processTrigger(trigger: number, evt: ActionEvent): void;
        _getEffectiveTarget(target: any, propertyPath: string): any;
        _getProperty(propertyPath: string): string;
        serialize(name: string): any;
        static Parse(parsedActions: any, object: AbstractMesh, scene: Scene): void;
        static GetTriggerName(trigger: number): string;
    }
}

declare module BABYLON {
    class Condition {
        _actionManager: ActionManager;
        _evaluationId: number;
        _currentResult: boolean;
        constructor(actionManager: ActionManager);
        isValid(): boolean;
        _getProperty(propertyPath: string): string;
        _getEffectiveTarget(target: any, propertyPath: string): any;
        serialize(): any;
        protected _serialize(serializedCondition: any): any;
    }
    class ValueCondition extends Condition {
        propertyPath: string;
        value: any;
        operator: number;
        private static _IsEqual;
        private static _IsDifferent;
        private static _IsGreater;
        private static _IsLesser;
        static readonly IsEqual: number;
        static readonly IsDifferent: number;
        static readonly IsGreater: number;
        static readonly IsLesser: number;
        _actionManager: ActionManager;
        private _target;
        private _effectiveTarget;
        private _property;
        constructor(actionManager: ActionManager, target: any, propertyPath: string, value: any, operator?: number);
        isValid(): boolean;
        serialize(): any;
        static GetOperatorName(operator: number): string;
    }
    class PredicateCondition extends Condition {
        predicate: () => boolean;
        _actionManager: ActionManager;
        constructor(actionManager: ActionManager, predicate: () => boolean);
        isValid(): boolean;
    }
    class StateCondition extends Condition {
        value: string;
        _actionManager: ActionManager;
        private _target;
        constructor(actionManager: ActionManager, target: any, value: string);
        isValid(): boolean;
        serialize(): any;
    }
}

declare module BABYLON {
    class SwitchBooleanAction extends Action {
        propertyPath: string;
        private _target;
        private _effectiveTarget;
        private _property;
        constructor(triggerOptions: any, target: any, propertyPath: string, condition?: Condition);
        _prepare(): void;
        execute(): void;
        serialize(parent: any): any;
    }
    class SetStateAction extends Action {
        value: string;
        private _target;
        constructor(triggerOptions: any, target: any, value: string, condition?: Condition);
        execute(): void;
        serialize(parent: any): any;
    }
    class SetValueAction extends Action {
        propertyPath: string;
        value: any;
        private _target;
        private _effectiveTarget;
        private _property;
        constructor(triggerOptions: any, target: any, propertyPath: string, value: any, condition?: Condition);
        _prepare(): void;
        execute(): void;
        serialize(parent: any): any;
    }
    class IncrementValueAction extends Action {
        propertyPath: string;
        value: any;
        private _target;
        private _effectiveTarget;
        private _property;
        constructor(triggerOptions: any, target: any, propertyPath: string, value: any, condition?: Condition);
        _prepare(): void;
        execute(): void;
        serialize(parent: any): any;
    }
    class PlayAnimationAction extends Action {
        from: number;
        to: number;
        loop: boolean;
        private _target;
        constructor(triggerOptions: any, target: any, from: number, to: number, loop?: boolean, condition?: Condition);
        _prepare(): void;
        execute(): void;
        serialize(parent: any): any;
    }
    class StopAnimationAction extends Action {
        private _target;
        constructor(triggerOptions: any, target: any, condition?: Condition);
        _prepare(): void;
        execute(): void;
        serialize(parent: any): any;
    }
    class DoNothingAction extends Action {
        constructor(triggerOptions?: any, condition?: Condition);
        execute(): void;
        serialize(parent: any): any;
    }
    class CombineAction extends Action {
        children: Action[];
        constructor(triggerOptions: any, children: Action[], condition?: Condition);
        _prepare(): void;
        execute(evt: ActionEvent): void;
        serialize(parent: any): any;
    }
    class ExecuteCodeAction extends Action {
        func: (evt: ActionEvent) => void;
        constructor(triggerOptions: any, func: (evt: ActionEvent) => void, condition?: Condition);
        execute(evt: ActionEvent): void;
    }
    class SetParentAction extends Action {
        private _parent;
        private _target;
        constructor(triggerOptions: any, target: any, parent: any, condition?: Condition);
        _prepare(): void;
        execute(): void;
        serialize(parent: any): any;
    }
    class PlaySoundAction extends Action {
        private _sound;
        constructor(triggerOptions: any, sound: Sound, condition?: Condition);
        _prepare(): void;
        execute(): void;
        serialize(parent: any): any;
    }
    class StopSoundAction extends Action {
        private _sound;
        constructor(triggerOptions: any, sound: Sound, condition?: Condition);
        _prepare(): void;
        execute(): void;
        serialize(parent: any): any;
    }
}

declare module BABYLON {
    class InterpolateValueAction extends Action {
        propertyPath: string;
        value: any;
        duration: number;
        stopOtherAnimations: boolean;
        onInterpolationDone: () => void;
        private _target;
        private _effectiveTarget;
        private _property;
        constructor(triggerOptions: any, target: any, propertyPath: string, value: any, duration?: number, condition?: Condition, stopOtherAnimations?: boolean, onInterpolationDone?: () => void);
        _prepare(): void;
        execute(): void;
        serialize(parent: any): any;
    }
}

declare module BABYLON {
    class Animatable {
        target: any;
        fromFrame: number;
        toFrame: number;
        loopAnimation: boolean;
        speedRatio: number;
        onAnimationEnd: any;
        private _localDelayOffset;
        private _pausedDelay;
        private _animations;
        private _paused;
        private _scene;
        animationStarted: boolean;
        constructor(scene: Scene, target: any, fromFrame?: number, toFrame?: number, loopAnimation?: boolean, speedRatio?: number, onAnimationEnd?: any, animations?: any);
        getAnimations(): Animation[];
        appendAnimations(target: any, animations: Animation[]): void;
        getAnimationByTargetProperty(property: string): Animation;
        reset(): void;
        enableBlending(blendingSpeed: number): void;
        disableBlending(): void;
        goToFrame(frame: number): void;
        pause(): void;
        restart(): void;
        stop(animationName?: string): void;
        _animate(delay: number): boolean;
    }
}

declare module BABYLON {
    class AnimationRange {
        name: string;
        from: number;
        to: number;
        constructor(name: string, from: number, to: number);
        clone(): AnimationRange;
    }
    /**
     * Composed of a frame, and an action function
     */
    class AnimationEvent {
        frame: number;
        action: () => void;
        onlyOnce: boolean;
        isDone: boolean;
        constructor(frame: number, action: () => void, onlyOnce?: boolean);
    }
    class PathCursor {
        private path;
        private _onchange;
        value: number;
        animations: Animation[];
        constructor(path: Path2);
        getPoint(): Vector3;
        moveAhead(step?: number): PathCursor;
        moveBack(step?: number): PathCursor;
        move(step: number): PathCursor;
        private ensureLimits();
        private markAsDirty(propertyName);
        private raiseOnChange();
        onchange(f: (cursor: PathCursor) => void): PathCursor;
    }
    class Animation {
        name: string;
        targetProperty: string;
        framePerSecond: number;
        dataType: number;
        loopMode: number;
        enableBlending: boolean;
        private _keys;
        private _offsetsCache;
        private _highLimitsCache;
        private _stopped;
        _target: any;
        private _blendingFactor;
        private _easingFunction;
        private _events;
        targetPropertyPath: string[];
        currentFrame: number;
        allowMatricesInterpolation: boolean;
        blendingSpeed: number;
        private _originalBlendValue;
        private _ranges;
        static _PrepareAnimation(name: string, targetProperty: string, framePerSecond: number, totalFrame: number, from: any, to: any, loopMode?: number, easingFunction?: EasingFunction): Animation;
        static CreateAndStartAnimation(name: string, node: Node, targetProperty: string, framePerSecond: number, totalFrame: number, from: any, to: any, loopMode?: number, easingFunction?: EasingFunction, onAnimationEnd?: () => void): Animatable;
        static CreateMergeAndStartAnimation(name: string, node: Node, targetProperty: string, framePerSecond: number, totalFrame: number, from: any, to: any, loopMode?: number, easingFunction?: EasingFunction, onAnimationEnd?: () => void): Animatable;
        constructor(name: string, targetProperty: string, framePerSecond: number, dataType: number, loopMode?: number, enableBlending?: boolean);
        /**
         * @param {boolean} fullDetails - support for multiple levels of logging within scene loading
         */
        toString(fullDetails?: boolean): string;
        /**
         * Add an event to this animation.
         */
        addEvent(event: AnimationEvent): void;
        /**
         * Remove all events found at the given frame
         * @param frame
         */
        removeEvents(frame: number): void;
        createRange(name: string, from: number, to: number): void;
        deleteRange(name: string, deleteFrames?: boolean): void;
        getRange(name: string): AnimationRange;
        reset(): void;
        isStopped(): boolean;
        getKeys(): Array<{
            frame: number;
            value: any;
        }>;
        getHighestFrame(): number;
        getEasingFunction(): IEasingFunction;
        setEasingFunction(easingFunction: EasingFunction): void;
        floatInterpolateFunction(startValue: number, endValue: number, gradient: number): number;
        floatInterpolateFunctionWithTangents(startValue: number, outTangent: number, endValue: number, inTangent: number, gradient: number): number;
        quaternionInterpolateFunction(startValue: Quaternion, endValue: Quaternion, gradient: number): Quaternion;
        quaternionInterpolateFunctionWithTangents(startValue: Quaternion, outTangent: Quaternion, endValue: Quaternion, inTangent: Quaternion, gradient: number): Quaternion;
        vector3InterpolateFunction(startValue: Vector3, endValue: Vector3, gradient: number): Vector3;
        vector3InterpolateFunctionWithTangents(startValue: Vector3, outTangent: Vector3, endValue: Vector3, inTangent: Vector3, gradient: number): Vector3;
        vector2InterpolateFunction(startValue: Vector2, endValue: Vector2, gradient: number): Vector2;
        vector2InterpolateFunctionWithTangents(startValue: Vector2, outTangent: Vector2, endValue: Vector2, inTangent: Vector2, gradient: number): Vector2;
        sizeInterpolateFunction(startValue: Size, endValue: Size, gradient: number): Size;
        color3InterpolateFunction(startValue: Color3, endValue: Color3, gradient: number): Color3;
        matrixInterpolateFunction(startValue: Matrix, endValue: Matrix, gradient: number): Matrix;
        clone(): Animation;
        setKeys(values: Array<{
            frame: number;
            value: any;
        }>): void;
        private _getKeyValue(value);
        private _interpolate(currentFrame, repeatCount, loopMode, offsetValue?, highLimitValue?);
        setValue(currentValue: any, blend?: boolean): void;
        goToFrame(frame: number): void;
        animate(delay: number, from: number, to: number, loop: boolean, speedRatio: number, blend?: boolean): boolean;
        serialize(): any;
        private static _ANIMATIONTYPE_FLOAT;
        private static _ANIMATIONTYPE_VECTOR3;
        private static _ANIMATIONTYPE_QUATERNION;
        private static _ANIMATIONTYPE_MATRIX;
        private static _ANIMATIONTYPE_COLOR3;
        private static _ANIMATIONTYPE_VECTOR2;
        private static _ANIMATIONTYPE_SIZE;
        private static _ANIMATIONLOOPMODE_RELATIVE;
        private static _ANIMATIONLOOPMODE_CYCLE;
        private static _ANIMATIONLOOPMODE_CONSTANT;
        static readonly ANIMATIONTYPE_FLOAT: number;
        static readonly ANIMATIONTYPE_VECTOR3: number;
        static readonly ANIMATIONTYPE_VECTOR2: number;
        static readonly ANIMATIONTYPE_SIZE: number;
        static readonly ANIMATIONTYPE_QUATERNION: number;
        static readonly ANIMATIONTYPE_MATRIX: number;
        static readonly ANIMATIONTYPE_COLOR3: number;
        static readonly ANIMATIONLOOPMODE_RELATIVE: number;
        static readonly ANIMATIONLOOPMODE_CYCLE: number;
        static readonly ANIMATIONLOOPMODE_CONSTANT: number;
        static Parse(parsedAnimation: any): Animation;
        static AppendSerializedAnimations(source: IAnimatable, destination: any): any;
    }
}

declare module BABYLON {
    interface IEasingFunction {
        ease(gradient: number): number;
    }
    class EasingFunction implements IEasingFunction {
        private static _EASINGMODE_EASEIN;
        private static _EASINGMODE_EASEOUT;
        private static _EASINGMODE_EASEINOUT;
        static readonly EASINGMODE_EASEIN: number;
        static readonly EASINGMODE_EASEOUT: number;
        static readonly EASINGMODE_EASEINOUT: number;
        private _easingMode;
        setEasingMode(easingMode: number): void;
        getEasingMode(): number;
        easeInCore(gradient: number): number;
        ease(gradient: number): number;
    }
    class CircleEase extends EasingFunction implements IEasingFunction {
        easeInCore(gradient: number): number;
    }
    class BackEase extends EasingFunction implements IEasingFunction {
        amplitude: number;
        constructor(amplitude?: number);
        easeInCore(gradient: number): number;
    }
    class BounceEase extends EasingFunction implements IEasingFunction {
        bounces: number;
        bounciness: number;
        constructor(bounces?: number, bounciness?: number);
        easeInCore(gradient: number): number;
    }
    class CubicEase extends EasingFunction implements IEasingFunction {
        easeInCore(gradient: number): number;
    }
    class ElasticEase extends EasingFunction implements IEasingFunction {
        oscillations: number;
        springiness: number;
        constructor(oscillations?: number, springiness?: number);
        easeInCore(gradient: number): number;
    }
    class ExponentialEase extends EasingFunction implements IEasingFunction {
        exponent: number;
        constructor(exponent?: number);
        easeInCore(gradient: number): number;
    }
    class PowerEase extends EasingFunction implements IEasingFunction {
        power: number;
        constructor(power?: number);
        easeInCore(gradient: number): number;
    }
    class QuadraticEase extends EasingFunction implements IEasingFunction {
        easeInCore(gradient: number): number;
    }
    class QuarticEase extends EasingFunction implements IEasingFunction {
        easeInCore(gradient: number): number;
    }
    class QuinticEase extends EasingFunction implements IEasingFunction {
        easeInCore(gradient: number): number;
    }
    class SineEase extends EasingFunction implements IEasingFunction {
        easeInCore(gradient: number): number;
    }
    class BezierCurveEase extends EasingFunction implements IEasingFunction {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        constructor(x1?: number, y1?: number, x2?: number, y2?: number);
        easeInCore(gradient: number): number;
    }
}

declare module BABYLON {
    class Analyser {
        SMOOTHING: number;
        FFT_SIZE: number;
        BARGRAPHAMPLITUDE: number;
        DEBUGCANVASPOS: {
            x: number;
            y: number;
        };
        DEBUGCANVASSIZE: {
            width: number;
            height: number;
        };
        private _byteFreqs;
        private _byteTime;
        private _floatFreqs;
        private _webAudioAnalyser;
        private _debugCanvas;
        private _debugCanvasContext;
        private _scene;
        private _registerFunc;
        private _audioEngine;
        constructor(scene: Scene);
        getFrequencyBinCount(): number;
        getByteFrequencyData(): Uint8Array;
        getByteTimeDomainData(): Uint8Array;
        getFloatFrequencyData(): Uint8Array;
        drawDebugCanvas(): void;
        stopDebugCanvas(): void;
        connectAudioNodes(inputAudioNode: AudioNode, outputAudioNode: AudioNode): void;
        dispose(): void;
    }
}

declare module BABYLON {
    class AudioEngine {
        private _audioContext;
        private _audioContextInitialized;
        canUseWebAudio: boolean;
        masterGain: GainNode;
        private _connectedAnalyser;
        WarnedWebAudioUnsupported: boolean;
        unlocked: boolean;
        onAudioUnlocked: () => any;
        isMP3supported: boolean;
        isOGGsupported: boolean;
        readonly audioContext: AudioContext;
        constructor();
        private _unlockiOSaudio();
        private _initializeAudioContext();
        dispose(): void;
        getGlobalVolume(): number;
        setGlobalVolume(newVolume: number): void;
        connectToAnalyser(analyser: Analyser): void;
    }
}

declare module BABYLON {
    class Sound {
        name: string;
        autoplay: boolean;
        loop: boolean;
        useCustomAttenuation: boolean;
        soundTrackId: number;
        spatialSound: boolean;
        refDistance: number;
        rolloffFactor: number;
        maxDistance: number;
        distanceModel: string;
        private _panningModel;
        onended: () => any;
        private _playbackRate;
        private _streaming;
        private _startTime;
        private _startOffset;
        private _position;
        private _localDirection;
        private _volume;
        private _isLoaded;
        private _isReadyToPlay;
        isPlaying: boolean;
        isPaused: boolean;
        private _isDirectional;
        private _readyToPlayCallback;
        private _audioBuffer;
        private _soundSource;
        private _streamingSource;
        private _soundPanner;
        private _soundGain;
        private _inputAudioNode;
        private _ouputAudioNode;
        private _coneInnerAngle;
        private _coneOuterAngle;
        private _coneOuterGain;
        private _scene;
        private _connectedMesh;
        private _customAttenuationFunction;
        private _registerFunc;
        private _isOutputConnected;
        private _htmlAudioElement;
        private _urlType;
        /**
        * Create a sound and attach it to a scene
        * @param name Name of your sound
        * @param urlOrArrayBuffer Url to the sound to load async or ArrayBuffer
        * @param readyToPlayCallback Provide a callback function if you'd like to load your code once the sound is ready to be played
        * @param options Objects to provide with the current available options: autoplay, loop, volume, spatialSound, maxDistance, rolloffFactor, refDistance, distanceModel, panningModel, streaming
        */
        constructor(name: string, urlOrArrayBuffer: any, scene: Scene, readyToPlayCallback?: () => void, options?: any);
        dispose(): void;
        isReady(): boolean;
        private _soundLoaded(audioData);
        setAudioBuffer(audioBuffer: AudioBuffer): void;
        updateOptions(options: any): void;
        private _createSpatialParameters();
        private _updateSpatialParameters();
        switchPanningModelToHRTF(): void;
        switchPanningModelToEqualPower(): void;
        private _switchPanningModel();
        connectToSoundTrackAudioNode(soundTrackAudioNode: AudioNode): void;
        /**
        * Transform this sound into a directional source
        * @param coneInnerAngle Size of the inner cone in degree
        * @param coneOuterAngle Size of the outer cone in degree
        * @param coneOuterGain Volume of the sound outside the outer cone (between 0.0 and 1.0)
        */
        setDirectionalCone(coneInnerAngle: number, coneOuterAngle: number, coneOuterGain: number): void;
        setPosition(newPosition: Vector3): void;
        setLocalDirectionToMesh(newLocalDirection: Vector3): void;
        private _updateDirection();
        updateDistanceFromListener(): void;
        setAttenuationFunction(callback: (currentVolume: number, currentDistance: number, maxDistance: number, refDistance: number, rolloffFactor: number) => number): void;
        /**
        * Play the sound
        * @param time (optional) Start the sound after X seconds. Start immediately (0) by default.
        * @param offset (optional) Start the sound setting it at a specific time
        */
        play(time?: number, offset?: number): void;
        private _onended();
        /**
        * Stop the sound
        * @param time (optional) Stop the sound after X seconds. Stop immediately (0) by default.
        */
        stop(time?: number): void;
        pause(): void;
        setVolume(newVolume: number, time?: number): void;
        setPlaybackRate(newPlaybackRate: number): void;
        getVolume(): number;
        attachToMesh(meshToConnectTo: AbstractMesh): void;
        detachFromMesh(): void;
        private _onRegisterAfterWorldMatrixUpdate(connectedMesh);
        clone(): Sound;
        getAudioBuffer(): AudioBuffer;
        serialize(): any;
        static Parse(parsedSound: any, scene: Scene, rootUrl: string, sourceSound?: Sound): Sound;
    }
}

declare module BABYLON {
    class SoundTrack {
        private _outputAudioNode;
        private _inputAudioNode;
        private _trackConvolver;
        private _scene;
        id: number;
        soundCollection: Array<Sound>;
        private _isMainTrack;
        private _connectedAnalyser;
        private _options;
        private _isInitialized;
        constructor(scene: Scene, options?: any);
        private _initializeSoundTrackAudioGraph();
        dispose(): void;
        AddSound(sound: Sound): void;
        RemoveSound(sound: Sound): void;
        setVolume(newVolume: number): void;
        switchPanningModelToHRTF(): void;
        switchPanningModelToEqualPower(): void;
        connectToAnalyser(analyser: Analyser): void;
    }
}

declare module BABYLON {
    class Bone extends Node {
        name: string;
        private static _tmpVecs;
        private static _tmpQuat;
        private static _tmpMats;
        children: Bone[];
        animations: Animation[];
        length: number;
        private _skeleton;
        private _localMatrix;
        private _restPose;
        private _baseMatrix;
        private _worldTransform;
        private _absoluteTransform;
        private _invertedAbsoluteTransform;
        private _parent;
        private _scaleMatrix;
        private _scaleVector;
        private _negateScaleChildren;
        private _scalingDeterminant;
        _matrix: Matrix;
        constructor(name: string, skeleton: Skeleton, parentBone?: Bone, matrix?: Matrix, restPose?: Matrix);
        getSkeleton(): Skeleton;
        getParent(): Bone;
        setParent(parent: Bone, updateDifferenceMatrix?: boolean): void;
        getLocalMatrix(): Matrix;
        getBaseMatrix(): Matrix;
        getRestPose(): Matrix;
        returnToRest(): void;
        getWorldMatrix(): Matrix;
        getInvertedAbsoluteTransform(): Matrix;
        getAbsoluteTransform(): Matrix;
        position: Vector3;
        rotation: Vector3;
        rotationQuaternion: Quaternion;
        scaling: Vector3;
        updateMatrix(matrix: Matrix, updateDifferenceMatrix?: boolean): void;
        _updateDifferenceMatrix(rootMatrix?: Matrix): void;
        markAsDirty(): void;
        copyAnimationRange(source: Bone, rangeName: string, frameOffset: number, rescaleAsRequired?: boolean, skelDimensionsRatio?: Vector3): boolean;
        /**
         * Translate the bone in local or world space.
         * @param vec The amount to translate the bone.
         * @param space The space that the translation is in.
         * @param mesh The mesh that this bone is attached to.  This is only used in world space.
         */
        translate(vec: Vector3, space?: Space, mesh?: AbstractMesh): void;
        /**
         * Set the postion of the bone in local or world space.
         * @param position The position to set the bone.
         * @param space The space that the position is in.
         * @param mesh The mesh that this bone is attached to.  This is only used in world space.
         */
        setPosition(position: Vector3, space?: Space, mesh?: AbstractMesh): void;
        /**
         * Set the absolute postion of the bone (world space).
         * @param position The position to set the bone.
         * @param mesh The mesh that this bone is attached to.
         */
        setAbsolutePosition(position: Vector3, mesh?: AbstractMesh): void;
        /**
         * Set the scale of the bone on the x, y and z axes.
         * @param x The scale of the bone on the x axis.
         * @param x The scale of the bone on the y axis.
         * @param z The scale of the bone on the z axis.
         * @param scaleChildren Set this to true if children of the bone should be scaled.
         */
        setScale(x: number, y: number, z: number, scaleChildren?: boolean): void;
        /**
         * Scale the bone on the x, y and z axes.
         * @param x The amount to scale the bone on the x axis.
         * @param x The amount to scale the bone on the y axis.
         * @param z The amount to scale the bone on the z axis.
         * @param scaleChildren Set this to true if children of the bone should be scaled.
         */
        scale(x: number, y: number, z: number, scaleChildren?: boolean): void;
        /**
         * Set the yaw, pitch, and roll of the bone in local or world space.
         * @param yaw The rotation of the bone on the y axis.
         * @param pitch The rotation of the bone on the x axis.
         * @param roll The rotation of the bone on the z axis.
         * @param space The space that the axes of rotation are in.
         * @param mesh The mesh that this bone is attached to.  This is only used in world space.
         */
        setYawPitchRoll(yaw: number, pitch: number, roll: number, space?: Space, mesh?: AbstractMesh): void;
        /**
         * Rotate the bone on an axis in local or world space.
         * @param axis The axis to rotate the bone on.
         * @param amount The amount to rotate the bone.
         * @param space The space that the axis is in.
         * @param mesh The mesh that this bone is attached to.  This is only used in world space.
         */
        rotate(axis: Vector3, amount: number, space?: Space, mesh?: AbstractMesh): void;
        /**
         * Set the rotation of the bone to a particular axis angle in local or world space.
         * @param axis The axis to rotate the bone on.
         * @param angle The angle that the bone should be rotated to.
         * @param space The space that the axis is in.
         * @param mesh The mesh that this bone is attached to.  This is only used in world space.
         */
        setAxisAngle(axis: Vector3, angle: number, space?: Space, mesh?: AbstractMesh): void;
        /**
         * Set the euler rotation of the bone in local of world space.
         * @param rotation The euler rotation that the bone should be set to.
         * @param space The space that the rotation is in.
         * @param mesh The mesh that this bone is attached to.  This is only used in world space.
         */
        setRotation(rotation: Vector3, space?: Space, mesh?: AbstractMesh): void;
        /**
         * Set the quaternion rotation of the bone in local of world space.
         * @param quat The quaternion rotation that the bone should be set to.
         * @param space The space that the rotation is in.
         * @param mesh The mesh that this bone is attached to.  This is only used in world space.
         */
        setRotationQuaternion(quat: Quaternion, space?: Space, mesh?: AbstractMesh): void;
        /**
         * Set the rotation matrix of the bone in local of world space.
         * @param rotMat The rotation matrix that the bone should be set to.
         * @param space The space that the rotation is in.
         * @param mesh The mesh that this bone is attached to.  This is only used in world space.
         */
        setRotationMatrix(rotMat: Matrix, space?: Space, mesh?: AbstractMesh): void;
        private _rotateWithMatrix(rmat, space?, mesh?);
        private _getNegativeRotationToRef(rotMatInv, space?, mesh?);
        /**
         * Get the scale of the bone
         * @returns the scale of the bone
         */
        getScale(): Vector3;
        /**
         * Copy the scale of the bone to a vector3.
         * @param result The vector3 to copy the scale to
         */
        getScaleToRef(result: Vector3): void;
        /**
         * Get the position of the bone in local or world space.
         * @param space The space that the returned position is in.
         * @param mesh The mesh that this bone is attached to.  This is only used in world space.
         * @returns The position of the bone
         */
        getPosition(space?: Space, mesh?: AbstractMesh): Vector3;
        /**
         * Copy the position of the bone to a vector3 in local or world space.
         * @param space The space that the returned position is in.
         * @param mesh The mesh that this bone is attached to.  This is only used in world space.
         * @param result The vector3 to copy the position to.
         */
        getPositionToRef(space: Space, mesh: AbstractMesh, result: Vector3): void;
        /**
         * Get the absolute position of the bone (world space).
         * @param mesh The mesh that this bone is attached to.
         * @returns The absolute position of the bone
         */
        getAbsolutePosition(mesh?: AbstractMesh): Vector3;
        /**
         * Copy the absolute position of the bone (world space) to the result param.
         * @param mesh The mesh that this bone is attached to.
         * @param result The vector3 to copy the absolute position to.
         */
        getAbsolutePositionToRef(mesh: AbstractMesh, result: Vector3): void;
        /**
         * Compute the absolute transforms of this bone and its children.
         */
        computeAbsoluteTransforms(): void;
        private _syncScaleVector();
        /**
         * Get the world direction from an axis that is in the local space of the bone.
         * @param localAxis The local direction that is used to compute the world direction.
         * @param mesh The mesh that this bone is attached to.
         * @returns The world direction
         */
        getDirection(localAxis: Vector3, mesh?: AbstractMesh): Vector3;
        /**
         * Copy the world direction to a vector3 from an axis that is in the local space of the bone.
         * @param localAxis The local direction that is used to compute the world direction.
         * @param mesh The mesh that this bone is attached to.
         * @param result The vector3 that the world direction will be copied to.
         */
        getDirectionToRef(localAxis: Vector3, mesh: AbstractMesh, result: Vector3): void;
        /**
         * Get the euler rotation of the bone in local or world space.
         * @param space The space that the rotation should be in.
         * @param mesh The mesh that this bone is attached to.  This is only used in world space.
         * @returns The euler rotation
         */
        getRotation(space?: Space, mesh?: AbstractMesh): Vector3;
        /**
         * Copy the euler rotation of the bone to a vector3.  The rotation can be in either local or world space.
         * @param space The space that the rotation should be in.
         * @param mesh The mesh that this bone is attached to.  This is only used in world space.
         * @param result The vector3 that the rotation should be copied to.
         */
        getRotationToRef(space: Space, mesh: AbstractMesh, result: Vector3): void;
        /**
         * Get the quaternion rotation of the bone in either local or world space.
         * @param space The space that the rotation should be in.
         * @param mesh The mesh that this bone is attached to.  This is only used in world space.
         * @returns The quaternion rotation
         */
        getRotationQuaternion(space?: Space, mesh?: AbstractMesh): Quaternion;
        /**
         * Copy the quaternion rotation of the bone to a quaternion.  The rotation can be in either local or world space.
         * @param space The space that the rotation should be in.
         * @param mesh The mesh that this bone is attached to.  This is only used in world space.
         * @param result The quaternion that the rotation should be copied to.
         */
        getRotationQuaternionToRef(space: Space, mesh: AbstractMesh, result: Quaternion): void;
        /**
         * Get the rotation matrix of the bone in local or world space.
         * @param space The space that the rotation should be in.
         * @param mesh The mesh that this bone is attached to.  This is only used in world space.
         * @returns The rotation matrix
         */
        getRotationMatrix(space: Space, mesh: AbstractMesh): Matrix;
        /**
         * Copy the rotation matrix of the bone to a matrix.  The rotation can be in either local or world space.
         * @param space The space that the rotation should be in.
         * @param mesh The mesh that this bone is attached to.  This is only used in world space.
         * @param result The quaternion that the rotation should be copied to.
         */
        getRotationMatrixToRef(space: Space, mesh: AbstractMesh, result: Matrix): void;
        /**
         * Get the world position of a point that is in the local space of the bone.
         * @param position The local position
         * @param mesh The mesh that this bone is attached to.
         * @returns The world position
         */
        getAbsolutePositionFromLocal(position: Vector3, mesh?: AbstractMesh): Vector3;
        /**
         * Get the world position of a point that is in the local space of the bone and copy it to the result param.
         * @param position The local position
         * @param mesh The mesh that this bone is attached to.
         * @param result The vector3 that the world position should be copied to.
         */
        getAbsolutePositionFromLocalToRef(position: Vector3, mesh: AbstractMesh, result: Vector3): void;
        /**
         * Get the local position of a point that is in world space.
         * @param position The world position
         * @param mesh The mesh that this bone is attached to.
         * @returns The local position
         */
        getLocalPositionFromAbsolute(position: Vector3, mesh?: AbstractMesh): Vector3;
        /**
         * Get the local position of a point that is in world space and copy it to the result param.
         * @param position The world position
         * @param mesh The mesh that this bone is attached to.
         * @param result The vector3 that the local position should be copied to.
         */
        getLocalPositionFromAbsoluteToRef(position: Vector3, mesh: AbstractMesh, result: Vector3): void;
    }
}

declare module BABYLON {
    class BoneIKController {
        private static _tmpVecs;
        private static _tmpQuat;
        private static _tmpMats;
        targetMesh: AbstractMesh;
        poleTargetMesh: AbstractMesh;
        poleTargetBone: Bone;
        targetPosition: Vector3;
        poleTargetPosition: Vector3;
        poleTargetLocalOffset: Vector3;
        poleAngle: number;
        mesh: AbstractMesh;
        slerpAmount: number;
        private _bone1Quat;
        private _bone1Mat;
        private _bone2Ang;
        private _bone1;
        private _bone2;
        private _bone1Length;
        private _bone2Length;
        private _maxAngle;
        private _maxReach;
        private _rightHandedSystem;
        private _bendAxis;
        private _slerping;
        private _adjustRoll;
        maxAngle: number;
        constructor(mesh: AbstractMesh, bone: Bone, options?: {
            targetMesh?: AbstractMesh;
            poleTargetMesh?: AbstractMesh;
            poleTargetBone?: Bone;
            poleTargetLocalOffset?: Vector3;
            poleAngle?: number;
            bendAxis?: Vector3;
            maxAngle?: number;
            slerpAmount?: number;
        });
        private _setMaxAngle(ang);
        update(): void;
    }
}

declare module BABYLON {
    class BoneLookController {
        private static _tmpVecs;
        private static _tmpQuat;
        private static _tmpMats;
        /**
         * The target Vector3 that the bone will look at.
         */
        target: Vector3;
        /**
         * The mesh that the bone is attached to.
         */
        mesh: AbstractMesh;
        /**
         * The bone that will be looking to the target.
         */
        bone: Bone;
        /**
         * The up axis of the coordinate system that is used when the bone is rotated.
         */
        upAxis: Vector3;
        /**
         * The space that the up axis is in - BABYLON.Space.BONE, BABYLON.Space.LOCAL (default), or BABYLON.Space.WORLD.
         */
        upAxisSpace: Space;
        /**
         * Used to make an adjustment to the yaw of the bone.
         */
        adjustYaw: number;
        /**
         * Used to make an adjustment to the pitch of the bone.
         */
        adjustPitch: number;
        /**
         * Used to make an adjustment to the roll of the bone.
         */
        adjustRoll: number;
        /**
         * The amount to slerp (spherical linear interpolation) to the target.  Set this to a value between 0 and 1 (a value of 1 disables slerp).
         */
        slerpAmount: number;
        private _minYaw;
        private _maxYaw;
        private _minPitch;
        private _maxPitch;
        private _minYawSin;
        private _minYawCos;
        private _maxYawSin;
        private _maxYawCos;
        private _midYawConstraint;
        private _minPitchTan;
        private _maxPitchTan;
        private _boneQuat;
        private _slerping;
        private _transformYawPitch;
        private _transformYawPitchInv;
        private _firstFrameSkipped;
        private _yawRange;
        private _fowardAxis;
        /**
         * Get/set the minimum yaw angle that the bone can look to.
         */
        minYaw: number;
        /**
         * Get/set the maximum yaw angle that the bone can look to.
         */
        maxYaw: number;
        /**
         * Get/set the minimum pitch angle that the bone can look to.
         */
        minPitch: number;
        /**
         * Get/set the maximum pitch angle that the bone can look to.
         */
        maxPitch: number;
        /**
         * Create a BoneLookController
         * @param mesh the mesh that the bone belongs to
         * @param bone the bone that will be looking to the target
         * @param target the target Vector3 to look at
         * @param settings optional settings:
         * - maxYaw: the maximum angle the bone will yaw to
         * - minYaw: the minimum angle the bone will yaw to
         * - maxPitch: the maximum angle the bone will pitch to
         * - minPitch: the minimum angle the bone will yaw to
         * - slerpAmount: set the between 0 and 1 to make the bone slerp to the target.
         * - upAxis: the up axis of the coordinate system
         * - upAxisSpace: the space that the up axis is in - BABYLON.Space.BONE, BABYLON.Space.LOCAL (default), or BABYLON.Space.WORLD.
         * - yawAxis: set yawAxis if the bone does not yaw on the y axis
         * - pitchAxis: set pitchAxis if the bone does not pitch on the x axis
         * - adjustYaw: used to make an adjustment to the yaw of the bone
         * - adjustPitch: used to make an adjustment to the pitch of the bone
         * - adjustRoll: used to make an adjustment to the roll of the bone
         **/
        constructor(mesh: AbstractMesh, bone: Bone, target: Vector3, options?: {
            maxYaw?: number;
            minYaw?: number;
            maxPitch?: number;
            minPitch?: number;
            slerpAmount?: number;
            upAxis?: Vector3;
            upAxisSpace?: Space;
            yawAxis?: Vector3;
            pitchAxis?: Vector3;
            adjustYaw?: number;
            adjustPitch?: number;
            adjustRoll?: number;
        });
        /**
         * Update the bone to look at the target.  This should be called before the scene is rendered (use scene.registerBeforeRender()).
         */
        update(): void;
        private _getAngleDiff(ang1, ang2);
        private _getAngleBetween(ang1, ang2);
        private _isAngleBetween(ang, ang1, ang2);
    }
}

declare module BABYLON {
    class Skeleton {
        name: string;
        id: string;
        bones: Bone[];
        dimensionsAtRest: Vector3;
        needInitialSkinMatrix: boolean;
        private _scene;
        private _isDirty;
        private _transformMatrices;
        private _meshesWithPoseMatrix;
        private _animatables;
        private _identity;
        private _synchronizedWithMesh;
        private _ranges;
        private _lastAbsoluteTransformsUpdateId;
        /**
         * An event triggered before computing the skeleton's matrices
         * @type {BABYLON.Observable}
         */
        onBeforeComputeObservable: Observable<Skeleton>;
        constructor(name: string, id: string, scene: Scene);
        getTransformMatrices(mesh: AbstractMesh): Float32Array;
        getScene(): Scene;
        /**
         * @param {boolean} fullDetails - support for multiple levels of logging within scene loading
         */
        toString(fullDetails?: boolean): string;
        /**
        * Get bone's index searching by name
        * @param {string} name is bone's name to search for
        * @return {number} Indice of the bone. Returns -1 if not found
        */
        getBoneIndexByName(name: string): number;
        createAnimationRange(name: string, from: number, to: number): void;
        deleteAnimationRange(name: string, deleteFrames?: boolean): void;
        getAnimationRange(name: string): AnimationRange;
        /**
         *  Returns as an Array, all AnimationRanges defined on this skeleton
         */
        getAnimationRanges(): AnimationRange[];
        /**
         *  note: This is not for a complete retargeting, only between very similar skeleton's with only possible bone length differences
         */
        copyAnimationRange(source: Skeleton, name: string, rescaleAsRequired?: boolean): boolean;
        returnToRest(): void;
        private _getHighestAnimationFrame();
        beginAnimation(name: string, loop?: boolean, speedRatio?: number, onAnimationEnd?: () => void): Animatable;
        _markAsDirty(): void;
        _registerMeshWithPoseMatrix(mesh: AbstractMesh): void;
        _unregisterMeshWithPoseMatrix(mesh: AbstractMesh): void;
        _computeTransformMatrices(targetMatrix: Float32Array, initialSkinMatrix: Matrix): void;
        prepare(): void;
        getAnimatables(): IAnimatable[];
        clone(name: string, id: string): Skeleton;
        enableBlending(blendingSpeed?: number): void;
        dispose(): void;
        serialize(): any;
        static Parse(parsedSkeleton: any, scene: Scene): Skeleton;
        computeAbsoluteTransforms(forceUpdate?: boolean): void;
        getPoseMatrix(): Matrix;
    }
}

declare module BABYLON {
    class ArcRotateCamera extends TargetCamera {
        alpha: number;
        beta: number;
        radius: number;
        protected _target: Vector3;
        protected _targetHost: AbstractMesh;
        target: Vector3;
        inertialAlphaOffset: number;
        inertialBetaOffset: number;
        inertialRadiusOffset: number;
        lowerAlphaLimit: any;
        upperAlphaLimit: any;
        lowerBetaLimit: number;
        upperBetaLimit: number;
        lowerRadiusLimit: any;
        upperRadiusLimit: any;
        inertialPanningX: number;
        inertialPanningY: number;
        panningInertia: number;
        angularSensibilityX: number;
        angularSensibilityY: number;
        pinchPrecision: number;
        panningSensibility: number;
        keysUp: number[];
        keysDown: number[];
        keysLeft: number[];
        keysRight: number[];
        wheelPrecision: number;
        zoomOnFactor: number;
        targetScreenOffset: Vector2;
        allowUpsideDown: boolean;
        _viewMatrix: Matrix;
        _useCtrlForPanning: boolean;
        _panningMouseButton: number;
        inputs: ArcRotateCameraInputsManager;
        _reset: () => void;
        panningAxis: Vector3;
        protected _localDirection: Vector3;
        protected _transformedDirection: Vector3;
        onCollide: (collidedMesh: AbstractMesh) => void;
        checkCollisions: boolean;
        collisionRadius: Vector3;
        protected _collider: Collider;
        protected _previousPosition: Vector3;
        protected _collisionVelocity: Vector3;
        protected _newPosition: Vector3;
        protected _previousAlpha: number;
        protected _previousBeta: number;
        protected _previousRadius: number;
        protected _collisionTriggered: boolean;
        protected _targetBoundingCenter: Vector3;
        constructor(name: string, alpha: number, beta: number, radius: number, target: Vector3, scene: Scene);
        _initCache(): void;
        _updateCache(ignoreParentClass?: boolean): void;
        protected _getTargetPosition(): Vector3;
        _isSynchronizedViewMatrix(): boolean;
        attachControl(element: HTMLElement, noPreventDefault?: boolean, useCtrlForPanning?: boolean, panningMouseButton?: number): void;
        detachControl(element: HTMLElement): void;
        _checkInputs(): void;
        protected _checkLimits(): void;
        rebuildAnglesAndRadius(): void;
        setPosition(position: Vector3): void;
        setTarget(target: AbstractMesh | Vector3, toBoundingCenter?: boolean, allowSamePosition?: boolean): void;
        _getViewMatrix(): Matrix;
        protected _onCollisionPositionChange: (collisionId: number, newPosition: Vector3, collidedMesh?: AbstractMesh) => void;
        zoomOn(meshes?: AbstractMesh[], doNotUpdateMaxZ?: boolean): void;
        focusOn(meshesOrMinMaxVectorAndDistance: any, doNotUpdateMaxZ?: boolean): void;
        /**
         * @override
         * Override Camera.createRigCamera
         */
        createRigCamera(name: string, cameraIndex: number): Camera;
        /**
         * @override
         * Override Camera._updateRigCameras
         */
        _updateRigCameras(): void;
        dispose(): void;
        getClassName(): string;
    }
}

declare module BABYLON {
    class ArcRotateCameraInputsManager extends CameraInputsManager<ArcRotateCamera> {
        constructor(camera: ArcRotateCamera);
        addMouseWheel(): ArcRotateCameraInputsManager;
        addPointers(): ArcRotateCameraInputsManager;
        addKeyboard(): ArcRotateCameraInputsManager;
        addGamepad(): ArcRotateCameraInputsManager;
        addVRDeviceOrientation(): ArcRotateCameraInputsManager;
    }
}

declare module BABYLON {
    class Camera extends Node {
        inputs: CameraInputsManager<Camera>;
        private static _PERSPECTIVE_CAMERA;
        private static _ORTHOGRAPHIC_CAMERA;
        private static _FOVMODE_VERTICAL_FIXED;
        private static _FOVMODE_HORIZONTAL_FIXED;
        private static _RIG_MODE_NONE;
        private static _RIG_MODE_STEREOSCOPIC_ANAGLYPH;
        private static _RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL;
        private static _RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED;
        private static _RIG_MODE_STEREOSCOPIC_OVERUNDER;
        private static _RIG_MODE_VR;
        private static _RIG_MODE_WEBVR;
        static readonly PERSPECTIVE_CAMERA: number;
        static readonly ORTHOGRAPHIC_CAMERA: number;
        static readonly FOVMODE_VERTICAL_FIXED: number;
        static readonly FOVMODE_HORIZONTAL_FIXED: number;
        static readonly RIG_MODE_NONE: number;
        static readonly RIG_MODE_STEREOSCOPIC_ANAGLYPH: number;
        static readonly RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL: number;
        static readonly RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED: number;
        static readonly RIG_MODE_STEREOSCOPIC_OVERUNDER: number;
        static readonly RIG_MODE_VR: number;
        static readonly RIG_MODE_WEBVR: number;
        static ForceAttachControlToAlwaysPreventDefault: boolean;
        position: Vector3;
        upVector: Vector3;
        orthoLeft: any;
        orthoRight: any;
        orthoBottom: any;
        orthoTop: any;
        fov: number;
        minZ: number;
        maxZ: number;
        inertia: number;
        mode: number;
        isIntermediate: boolean;
        viewport: Viewport;
        layerMask: number;
        fovMode: number;
        cameraRigMode: number;
        interaxialDistance: number;
        isStereoscopicSideBySide: boolean;
        _cameraRigParams: any;
        _rigCameras: Camera[];
        _rigPostProcess: PostProcess;
        protected _webvrViewMatrix: Matrix;
        customRenderTargets: RenderTargetTexture[];
        private _computedViewMatrix;
        _projectionMatrix: Matrix;
        private _doNotComputeProjectionMatrix;
        private _worldMatrix;
        _postProcesses: PostProcess[];
        private _transformMatrix;
        _activeMeshes: SmartArray<Mesh>;
        private _globalPosition;
        private _frustumPlanes;
        private _refreshFrustumPlanes;
        constructor(name: string, position: Vector3, scene: Scene);
        getClassName(): string;
        /**
         * @param {boolean} fullDetails - support for multiple levels of logging within scene loading
         */
        toString(fullDetails?: boolean): string;
        readonly globalPosition: Vector3;
        getActiveMeshes(): SmartArray<Mesh>;
        isActiveMesh(mesh: Mesh): boolean;
        _initCache(): void;
        _updateCache(ignoreParentClass?: boolean): void;
        _updateFromScene(): void;
        _isSynchronized(): boolean;
        _isSynchronizedViewMatrix(): boolean;
        _isSynchronizedProjectionMatrix(): boolean;
        attachControl(element: HTMLElement, noPreventDefault?: boolean): void;
        detachControl(element: HTMLElement): void;
        update(): void;
        _checkInputs(): void;
        readonly rigCameras: Camera[];
        readonly rigPostProcess: PostProcess;
        private _cascadePostProcessesToRigCams();
        attachPostProcess(postProcess: PostProcess, insertAt?: number): number;
        detachPostProcess(postProcess: PostProcess, atIndices?: any): number[];
        getWorldMatrix(): Matrix;
        _getViewMatrix(): Matrix;
        getViewMatrix(force?: boolean): Matrix;
        _computeViewMatrix(force?: boolean): Matrix;
        freezeProjectionMatrix(projection?: Matrix): void;
        unfreezeProjectionMatrix(): void;
        getProjectionMatrix(force?: boolean): Matrix;
        getTranformationMatrix(): Matrix;
        private updateFrustumPlanes();
        isInFrustum(target: ICullable): boolean;
        isCompletelyInFrustum(target: ICullable): boolean;
        getForwardRay(length?: number, transform?: Matrix, origin?: Vector3): Ray;
        dispose(): void;
        readonly leftCamera: FreeCamera;
        readonly rightCamera: FreeCamera;
        getLeftTarget(): Vector3;
        getRightTarget(): Vector3;
        setCameraRigMode(mode: number, rigParams: any): void;
        private _getVRProjectionMatrix();
        protected _updateCameraRotationMatrix(): void;
        protected _updateWebVRCameraRotationMatrix(): void;
        /**
         * This function MUST be overwritten by the different WebVR cameras available.
         * The context in which it is running is the RIG camera. So 'this' is the TargetCamera, left or right.
         */
        protected _getWebVRProjectionMatrix(): Matrix;
        /**
         * This function MUST be overwritten by the different WebVR cameras available.
         * The context in which it is running is the RIG camera. So 'this' is the TargetCamera, left or right.
         */
        protected _getWebVRViewMatrix(): Matrix;
        setCameraRigParameter(name: string, value: any): void;
        /**
         * needs to be overridden by children so sub has required properties to be copied
         */
        createRigCamera(name: string, cameraIndex: number): Camera;
        /**
         * May need to be overridden by children
         */
        _updateRigCameras(): void;
        _setupInputs(): void;
        serialize(): any;
        clone(name: string): Camera;
        getDirection(localAxis: Vector3): Vector3;
        getDirectionToRef(localAxis: Vector3, result: Vector3): void;
        static GetConstructorFromName(type: string, name: string, scene: Scene, interaxial_distance?: number, isStereoscopicSideBySide?: boolean): () => Camera;
        static Parse(parsedCamera: any, scene: Scene): Camera;
    }
}

declare module BABYLON {
    var CameraInputTypes: {};
    interface ICameraInput<TCamera extends BABYLON.Camera> {
        camera: TCamera;
        getTypeName(): string;
        getSimpleName(): string;
        attachControl: (element: HTMLElement, noPreventDefault?: boolean) => void;
        detachControl: (element: HTMLElement) => void;
        checkInputs?: () => void;
    }
    interface CameraInputsMap<TCamera extends BABYLON.Camera> {
        [name: string]: ICameraInput<TCamera>;
        [idx: number]: ICameraInput<TCamera>;
    }
    class CameraInputsManager<TCamera extends BABYLON.Camera> {
        attached: CameraInputsMap<TCamera>;
        attachedElement: HTMLElement;
        noPreventDefault: boolean;
        camera: TCamera;
        checkInputs: () => void;
        constructor(camera: TCamera);
        add(input: ICameraInput<TCamera>): void;
        remove(inputToRemove: ICameraInput<TCamera>): void;
        removeByType(inputType: string): void;
        private _addCheckInputs(fn);
        attachInput(input: ICameraInput<TCamera>): void;
        attachElement(element: HTMLElement, noPreventDefault?: boolean): void;
        detachElement(element: HTMLElement): void;
        rebuildInputCheck(): void;
        clear(): void;
        serialize(serializedCamera: any): void;
        parse(parsedCamera: any): void;
    }
}

declare module BABYLON {
    class DeviceOrientationCamera extends FreeCamera {
        private _initialQuaternion;
        private _quaternionCache;
        constructor(name: string, position: Vector3, scene: Scene);
        getClassName(): string;
        _checkInputs(): void;
        resetToCurrentRotation(axis?: Axis): void;
    }
}

declare module BABYLON {
    class FollowCamera extends TargetCamera {
        radius: number;
        rotationOffset: number;
        heightOffset: number;
        cameraAcceleration: number;
        maxCameraSpeed: number;
        lockedTarget: AbstractMesh;
        constructor(name: string, position: Vector3, scene: Scene, lockedTarget?: AbstractMesh);
        private getRadians(degrees);
        private follow(cameraTarget);
        _checkInputs(): void;
        getClassName(): string;
    }
    class ArcFollowCamera extends TargetCamera {
        alpha: number;
        beta: number;
        radius: number;
        target: AbstractMesh;
        private _cartesianCoordinates;
        constructor(name: string, alpha: number, beta: number, radius: number, target: AbstractMesh, scene: Scene);
        private follow();
        _checkInputs(): void;
        getClassName(): string;
    }
}

declare module BABYLON {
    class FreeCamera extends TargetCamera {
        ellipsoid: Vector3;
        checkCollisions: boolean;
        applyGravity: boolean;
        inputs: FreeCameraInputsManager;
        angularSensibility: number;
        keysUp: number[];
        keysDown: number[];
        keysLeft: number[];
        keysRight: number[];
        onCollide: (collidedMesh: AbstractMesh) => void;
        private _collider;
        private _needMoveForGravity;
        private _oldPosition;
        private _diffPosition;
        private _newPosition;
        _localDirection: Vector3;
        _transformedDirection: Vector3;
        constructor(name: string, position: Vector3, scene: Scene);
        attachControl(element: HTMLElement, noPreventDefault?: boolean): void;
        detachControl(element: HTMLElement): void;
        private _collisionMask;
        collisionMask: number;
        _collideWithWorld(velocity: Vector3): void;
        private _onCollisionPositionChange;
        _checkInputs(): void;
        _decideIfNeedsToMove(): boolean;
        _updatePosition(): void;
        dispose(): void;
        getClassName(): string;
    }
}

declare module BABYLON {
    class FreeCameraInputsManager extends CameraInputsManager<FreeCamera> {
        constructor(camera: FreeCamera);
        addKeyboard(): FreeCameraInputsManager;
        addMouse(touchEnabled?: boolean): FreeCameraInputsManager;
        addGamepad(): FreeCameraInputsManager;
        addDeviceOrientation(): FreeCameraInputsManager;
        addTouch(): FreeCameraInputsManager;
        addVirtualJoystick(): FreeCameraInputsManager;
    }
}

declare module BABYLON {
    class GamepadCamera extends UniversalCamera {
        gamepadAngularSensibility: number;
        gamepadMoveSensibility: number;
        constructor(name: string, position: Vector3, scene: Scene);
        getClassName(): string;
    }
}

declare module BABYLON {
    class AnaglyphFreeCamera extends FreeCamera {
        constructor(name: string, position: Vector3, interaxialDistance: number, scene: Scene);
        getClassName(): string;
    }
    class AnaglyphArcRotateCamera extends ArcRotateCamera {
        constructor(name: string, alpha: number, beta: number, radius: number, target: any, interaxialDistance: number, scene: Scene);
        getClassName(): string;
    }
    class AnaglyphGamepadCamera extends GamepadCamera {
        constructor(name: string, position: Vector3, interaxialDistance: number, scene: Scene);
        getClassName(): string;
    }
    class AnaglyphUniversalCamera extends UniversalCamera {
        constructor(name: string, position: Vector3, interaxialDistance: number, scene: Scene);
        getClassName(): string;
    }
    class StereoscopicFreeCamera extends FreeCamera {
        constructor(name: string, position: Vector3, interaxialDistance: number, isStereoscopicSideBySide: boolean, scene: Scene);
        getClassName(): string;
    }
    class StereoscopicArcRotateCamera extends ArcRotateCamera {
        constructor(name: string, alpha: number, beta: number, radius: number, target: any, interaxialDistance: number, isStereoscopicSideBySide: boolean, scene: Scene);
        getClassName(): string;
    }
    class StereoscopicGamepadCamera extends GamepadCamera {
        constructor(name: string, position: Vector3, interaxialDistance: number, isStereoscopicSideBySide: boolean, scene: Scene);
        getClassName(): string;
    }
    class StereoscopicUniversalCamera extends UniversalCamera {
        constructor(name: string, position: Vector3, interaxialDistance: number, isStereoscopicSideBySide: boolean, scene: Scene);
        getClassName(): string;
    }
}

declare module BABYLON {
    class TargetCamera extends Camera {
        cameraDirection: Vector3;
        cameraRotation: Vector2;
        rotation: Vector3;
        rotationQuaternion: Quaternion;
        speed: number;
        noRotationConstraint: boolean;
        lockedTarget: any;
        _currentTarget: Vector3;
        _viewMatrix: Matrix;
        _camMatrix: Matrix;
        _cameraTransformMatrix: Matrix;
        _cameraRotationMatrix: Matrix;
        private _rigCamTransformMatrix;
        _referencePoint: Vector3;
        private _defaultUpVector;
        _transformedReferencePoint: Vector3;
        _lookAtTemp: Matrix;
        _tempMatrix: Matrix;
        _reset: () => void;
        constructor(name: string, position: Vector3, scene: Scene);
        getFrontPosition(distance: number): Vector3;
        _getLockedTargetPosition(): Vector3;
        _initCache(): void;
        _updateCache(ignoreParentClass?: boolean): void;
        _isSynchronizedViewMatrix(): boolean;
        _computeLocalCameraSpeed(): number;
        setTarget(target: Vector3): void;
        /**
         * Return the current target position of the camera. This value is expressed in local space.
         */
        getTarget(): Vector3;
        _decideIfNeedsToMove(): boolean;
        _updatePosition(): void;
        _checkInputs(): void;
        protected _updateCameraRotationMatrix(): void;
        _getViewMatrix(): Matrix;
        /**
         * @override
         * Override Camera.createRigCamera
         */
        createRigCamera(name: string, cameraIndex: number): Camera;
        /**
         * @override
         * Override Camera._updateRigCameras
         */
        _updateRigCameras(): void;
        private _getRigCamPosition(halfSpace, result);
        getClassName(): string;
    }
}

declare module BABYLON {
    class TouchCamera extends FreeCamera {
        touchAngularSensibility: number;
        touchMoveSensibility: number;
        constructor(name: string, position: Vector3, scene: Scene);
        getClassName(): string;
        _setupInputs(): void;
    }
}

declare module BABYLON {
    class UniversalCamera extends TouchCamera {
        gamepadAngularSensibility: number;
        gamepadMoveSensibility: number;
        constructor(name: string, position: Vector3, scene: Scene);
        getClassName(): string;
    }
}

declare module BABYLON {
    class VirtualJoysticksCamera extends FreeCamera {
        constructor(name: string, position: Vector3, scene: Scene);
        getClassName(): string;
    }
}

declare module BABYLON {
    class Collider {
        radius: Vector3;
        retry: number;
        velocity: Vector3;
        basePoint: Vector3;
        epsilon: number;
        collisionFound: boolean;
        velocityWorldLength: number;
        basePointWorld: Vector3;
        velocityWorld: Vector3;
        normalizedVelocity: Vector3;
        initialVelocity: Vector3;
        initialPosition: Vector3;
        nearestDistance: number;
        intersectionPoint: Vector3;
        collidedMesh: AbstractMesh;
        private _collisionPoint;
        private _planeIntersectionPoint;
        private _tempVector;
        private _tempVector2;
        private _tempVector3;
        private _tempVector4;
        private _edge;
        private _baseToVertex;
        private _destinationPoint;
        private _slidePlaneNormal;
        private _displacementVector;
        private _collisionMask;
        collisionMask: number;
        _initialize(source: Vector3, dir: Vector3, e: number): void;
        _checkPointInTriangle(point: Vector3, pa: Vector3, pb: Vector3, pc: Vector3, n: Vector3): boolean;
        _canDoCollision(sphereCenter: Vector3, sphereRadius: number, vecMin: Vector3, vecMax: Vector3): boolean;
        _testTriangle(faceIndex: number, trianglePlaneArray: Array<Plane>, p1: Vector3, p2: Vector3, p3: Vector3, hasMaterial: boolean): void;
        _collide(trianglePlaneArray: Array<Plane>, pts: Vector3[], indices: IndicesArray, indexStart: number, indexEnd: number, decal: number, hasMaterial: boolean): void;
        _getResponse(pos: Vector3, vel: Vector3): void;
    }
}

declare module BABYLON {
    var CollisionWorker: string;
    interface ICollisionCoordinator {
        getNewPosition(position: Vector3, velocity: Vector3, collider: Collider, maximumRetry: number, excludedMesh: AbstractMesh, onNewPosition: (collisionIndex: number, newPosition: Vector3, collidedMesh?: AbstractMesh) => void, collisionIndex: number): void;
        init(scene: Scene): void;
        destroy(): void;
        onMeshAdded(mesh: AbstractMesh): any;
        onMeshUpdated(mesh: AbstractMesh): any;
        onMeshRemoved(mesh: AbstractMesh): any;
        onGeometryAdded(geometry: Geometry): any;
        onGeometryUpdated(geometry: Geometry): any;
        onGeometryDeleted(geometry: Geometry): any;
    }
    interface SerializedMesh {
        id: string;
        name: string;
        uniqueId: number;
        geometryId: string;
        sphereCenter: Array<number>;
        sphereRadius: number;
        boxMinimum: Array<number>;
        boxMaximum: Array<number>;
        worldMatrixFromCache: any;
        subMeshes: Array<SerializedSubMesh>;
        checkCollisions: boolean;
    }
    interface SerializedSubMesh {
        position: number;
        verticesStart: number;
        verticesCount: number;
        indexStart: number;
        indexCount: number;
        hasMaterial: boolean;
        sphereCenter: Array<number>;
        sphereRadius: number;
        boxMinimum: Array<number>;
        boxMaximum: Array<number>;
    }
    interface SerializedGeometry {
        id: string;
        positions: Float32Array;
        indices: Uint32Array;
        normals: Float32Array;
    }
    interface BabylonMessage {
        taskType: WorkerTaskType;
        payload: InitPayload | CollidePayload | UpdatePayload;
    }
    interface SerializedColliderToWorker {
        position: Array<number>;
        velocity: Array<number>;
        radius: Array<number>;
    }
    enum WorkerTaskType {
        INIT = 0,
        UPDATE = 1,
        COLLIDE = 2,
    }
    interface WorkerReply {
        error: WorkerReplyType;
        taskType: WorkerTaskType;
        payload?: any;
    }
    interface CollisionReplyPayload {
        newPosition: Array<number>;
        collisionId: number;
        collidedMeshUniqueId: number;
    }
    interface InitPayload {
    }
    interface CollidePayload {
        collisionId: number;
        collider: SerializedColliderToWorker;
        maximumRetry: number;
        excludedMeshUniqueId?: number;
    }
    interface UpdatePayload {
        updatedMeshes: {
            [n: number]: SerializedMesh;
        };
        updatedGeometries: {
            [s: string]: SerializedGeometry;
        };
        removedMeshes: Array<number>;
        removedGeometries: Array<string>;
    }
    enum WorkerReplyType {
        SUCCESS = 0,
        UNKNOWN_ERROR = 1,
    }
    class CollisionCoordinatorWorker implements ICollisionCoordinator {
        private _scene;
        private _scaledPosition;
        private _scaledVelocity;
        private _collisionsCallbackArray;
        private _init;
        private _runningUpdated;
        private _runningCollisionTask;
        private _worker;
        private _addUpdateMeshesList;
        private _addUpdateGeometriesList;
        private _toRemoveMeshesArray;
        private _toRemoveGeometryArray;
        constructor();
        static SerializeMesh: (mesh: AbstractMesh) => SerializedMesh;
        static SerializeGeometry: (geometry: Geometry) => SerializedGeometry;
        getNewPosition(position: Vector3, velocity: Vector3, collider: Collider, maximumRetry: number, excludedMesh: AbstractMesh, onNewPosition: (collisionIndex: number, newPosition: Vector3, collidedMesh?: AbstractMesh) => void, collisionIndex: number): void;
        init(scene: Scene): void;
        destroy(): void;
        onMeshAdded(mesh: AbstractMesh): void;
        onMeshUpdated: (mesh: AbstractMesh) => void;
        onMeshRemoved(mesh: AbstractMesh): void;
        onGeometryAdded(geometry: Geometry): void;
        onGeometryUpdated: (geometry: Geometry) => void;
        onGeometryDeleted(geometry: Geometry): void;
        private _afterRender;
        private _onMessageFromWorker;
    }
    class CollisionCoordinatorLegacy implements ICollisionCoordinator {
        private _scene;
        private _scaledPosition;
        private _scaledVelocity;
        private _finalPosition;
        getNewPosition(position: Vector3, velocity: Vector3, collider: Collider, maximumRetry: number, excludedMesh: AbstractMesh, onNewPosition: (collisionIndex: number, newPosition: Vector3, collidedMesh?: AbstractMesh) => void, collisionIndex: number): void;
        init(scene: Scene): void;
        destroy(): void;
        onMeshAdded(mesh: AbstractMesh): void;
        onMeshUpdated(mesh: AbstractMesh): void;
        onMeshRemoved(mesh: AbstractMesh): void;
        onGeometryAdded(geometry: Geometry): void;
        onGeometryUpdated(geometry: Geometry): void;
        onGeometryDeleted(geometry: Geometry): void;
        private _collideWithWorld(position, velocity, collider, maximumRetry, finalPosition, excludedMesh?);
    }
}

declare module BABYLON {
    var WorkerIncluded: boolean;
    class CollisionCache {
        private _meshes;
        private _geometries;
        getMeshes(): {
            [n: number]: SerializedMesh;
        };
        getGeometries(): {
            [s: number]: SerializedGeometry;
        };
        getMesh(id: any): SerializedMesh;
        addMesh(mesh: SerializedMesh): void;
        removeMesh(uniqueId: number): void;
        getGeometry(id: string): SerializedGeometry;
        addGeometry(geometry: SerializedGeometry): void;
        removeGeometry(id: string): void;
    }
    class CollideWorker {
        collider: Collider;
        private _collisionCache;
        private finalPosition;
        private collisionsScalingMatrix;
        private collisionTranformationMatrix;
        constructor(collider: Collider, _collisionCache: CollisionCache, finalPosition: Vector3);
        collideWithWorld(position: Vector3, velocity: Vector3, maximumRetry: number, excludedMeshUniqueId?: number): void;
        private checkCollision(mesh);
        private processCollisionsForSubMeshes(transformMatrix, mesh);
        private collideForSubMesh(subMesh, transformMatrix, meshGeometry);
        private checkSubmeshCollision(subMesh);
    }
    interface ICollisionDetector {
        onInit(payload: InitPayload): void;
        onUpdate(payload: UpdatePayload): void;
        onCollision(payload: CollidePayload): void;
    }
    class CollisionDetectorTransferable implements ICollisionDetector {
        private _collisionCache;
        onInit(payload: InitPayload): void;
        onUpdate(payload: UpdatePayload): void;
        onCollision(payload: CollidePayload): void;
    }
}

declare module BABYLON {
    class IntersectionInfo {
        bu: number;
        bv: number;
        distance: number;
        faceId: number;
        subMeshId: number;
        constructor(bu: number, bv: number, distance: number);
    }
    class PickingInfo {
        hit: boolean;
        distance: number;
        pickedPoint: Vector3;
        pickedMesh: AbstractMesh;
        bu: number;
        bv: number;
        faceId: number;
        subMeshId: number;
        pickedSprite: Sprite;
        getNormal(useWorldCoordinates?: boolean, useVerticesNormals?: boolean): Vector3;
        getTextureCoordinates(): Vector2;
    }
}

declare module BABYLON.Debug {
    class AxesViewer {
        private _xline;
        private _yline;
        private _zline;
        private _xmesh;
        private _ymesh;
        private _zmesh;
        scene: Scene;
        scaleLines: number;
        constructor(scene: Scene, scaleLines?: number);
        update(position: Vector3, xaxis: Vector3, yaxis: Vector3, zaxis: Vector3): void;
        dispose(): void;
    }
}

declare module BABYLON.Debug {
    class BoneAxesViewer extends Debug.AxesViewer {
        mesh: Mesh;
        bone: Bone;
        pos: Vector3;
        xaxis: Vector3;
        yaxis: Vector3;
        zaxis: Vector3;
        constructor(scene: Scene, bone: Bone, mesh: Mesh, scaleLines?: number);
        update(): void;
        dispose(): void;
    }
}

declare module BABYLON {
    class DebugLayer {
        private _scene;
        static InspectorURL: string;
        private _inspector;
        constructor(scene: Scene);
        /** Creates the inspector window. */
        private _createInspector(config?);
        isVisible(): boolean;
        hide(): void;
        show(config?: {
            popup?: boolean;
            initialTab?: number;
            parentElement?: HTMLElement;
            newColors?: {
                backgroundColor?: string;
                backgroundColorLighter?: string;
                backgroundColorLighter2?: string;
                backgroundColorLighter3?: string;
                color?: string;
                colorTop?: string;
                colorBot?: string;
            };
        }): void;
    }
}

declare module BABYLON.Debug {
    class PhysicsViewer {
        protected _impostors: Array<PhysicsImpostor>;
        protected _meshes: Array<AbstractMesh>;
        protected _scene: Scene;
        protected _numMeshes: number;
        protected _physicsEnginePlugin: IPhysicsEnginePlugin;
        private _renderFunction;
        private _debugBoxMesh;
        private _debugSphereMesh;
        private _debugMaterial;
        constructor(scene: Scene);
        protected _updateDebugMeshes(): void;
        showImpostor(impostor: PhysicsImpostor): void;
        hideImpostor(impostor: PhysicsImpostor): void;
        private _getDebugMaterial(scene);
        private _getDebugBoxMesh(scene);
        private _getDebugSphereMesh(scene);
        private _getDebugMesh(impostor, scene);
        dispose(): void;
    }
}

declare module BABYLON {
    class RayHelper {
        ray: Ray;
        private _renderPoints;
        private _renderLine;
        private _renderFunction;
        private _scene;
        private _updateToMeshFunction;
        private _attachedToMesh;
        private _meshSpaceDirection;
        private _meshSpaceOrigin;
        static CreateAndShow(ray: Ray, scene: Scene, color: Color3): RayHelper;
        constructor(ray: Ray);
        show(scene: Scene, color: Color3): void;
        hide(): void;
        private _render();
        attachToMesh(mesh: AbstractMesh, meshSpaceDirection?: Vector3, meshSpaceOrigin?: Vector3, length?: number): void;
        detachFromMesh(): void;
        private _updateToMesh();
        dispose(): void;
    }
}

declare module BABYLON.Debug {
    /**
    * Demo available here: http://www.babylonjs-playground.com/#1BZJVJ#8
    */
    class SkeletonViewer {
        skeleton: Skeleton;
        mesh: AbstractMesh;
        autoUpdateBonesMatrices: boolean;
        renderingGroupId: number;
        color: Color3;
        private _scene;
        private _debugLines;
        private _debugMesh;
        private _isEnabled;
        private _renderFunction;
        constructor(skeleton: Skeleton, mesh: AbstractMesh, scene: Scene, autoUpdateBonesMatrices?: boolean, renderingGroupId?: number);
        isEnabled: boolean;
        private _getBonePosition(position, bone, meshMat, x?, y?, z?);
        private _getLinesForBonesWithLength(bones, meshMat);
        private _getLinesForBonesNoLength(bones, meshMat);
        update(): void;
        dispose(): void;
    }
}

declare module BABYLON {
    class BoundingBox implements ICullable {
        minimum: Vector3;
        maximum: Vector3;
        vectors: Vector3[];
        center: Vector3;
        centerWorld: Vector3;
        extendSize: Vector3;
        extendSizeWorld: Vector3;
        directions: Vector3[];
        vectorsWorld: Vector3[];
        minimumWorld: Vector3;
        maximumWorld: Vector3;
        private _worldMatrix;
        constructor(minimum: Vector3, maximum: Vector3);
        getWorldMatrix(): Matrix;
        setWorldMatrix(matrix: Matrix): BoundingBox;
        _update(world: Matrix): void;
        isInFrustum(frustumPlanes: Plane[]): boolean;
        isCompletelyInFrustum(frustumPlanes: Plane[]): boolean;
        intersectsPoint(point: Vector3): boolean;
        intersectsSphere(sphere: BoundingSphere): boolean;
        intersectsMinMax(min: Vector3, max: Vector3): boolean;
        static Intersects(box0: BoundingBox, box1: BoundingBox): boolean;
        static IntersectsSphere(minPoint: Vector3, maxPoint: Vector3, sphereCenter: Vector3, sphereRadius: number): boolean;
        static IsCompletelyInFrustum(boundingVectors: Vector3[], frustumPlanes: Plane[]): boolean;
        static IsInFrustum(boundingVectors: Vector3[], frustumPlanes: Plane[]): boolean;
    }
}

declare module BABYLON {
    interface ICullable {
        isInFrustum(frustumPlanes: Plane[]): boolean;
        isCompletelyInFrustum(frustumPlanes: Plane[]): boolean;
    }
    class BoundingInfo implements ICullable {
        minimum: Vector3;
        maximum: Vector3;
        boundingBox: BoundingBox;
        boundingSphere: BoundingSphere;
        private _isLocked;
        constructor(minimum: Vector3, maximum: Vector3);
        isLocked: boolean;
        update(world: Matrix): void;
        isInFrustum(frustumPlanes: Plane[]): boolean;
        isCompletelyInFrustum(frustumPlanes: Plane[]): boolean;
        _checkCollision(collider: Collider): boolean;
        intersectsPoint(point: Vector3): boolean;
        intersects(boundingInfo: BoundingInfo, precise: boolean): boolean;
    }
}

declare module BABYLON {
    class BoundingSphere {
        minimum: Vector3;
        maximum: Vector3;
        center: Vector3;
        radius: number;
        centerWorld: Vector3;
        radiusWorld: number;
        private _tempRadiusVector;
        constructor(minimum: Vector3, maximum: Vector3);
        _update(world: Matrix): void;
        isInFrustum(frustumPlanes: Plane[]): boolean;
        intersectsPoint(point: Vector3): boolean;
        static Intersects(sphere0: BoundingSphere, sphere1: BoundingSphere): boolean;
    }
}

declare module BABYLON {
    class Ray {
        origin: Vector3;
        direction: Vector3;
        length: number;
        private _edge1;
        private _edge2;
        private _pvec;
        private _tvec;
        private _qvec;
        private _tmpRay;
        private _rayHelper;
        constructor(origin: Vector3, direction: Vector3, length?: number);
        intersectsBoxMinMax(minimum: Vector3, maximum: Vector3): boolean;
        intersectsBox(box: BoundingBox): boolean;
        intersectsSphere(sphere: BoundingSphere): boolean;
        intersectsTriangle(vertex0: Vector3, vertex1: Vector3, vertex2: Vector3): IntersectionInfo;
        intersectsPlane(plane: Plane): number;
        intersectsMesh(mesh: AbstractMesh, fastCheck?: boolean): PickingInfo;
        intersectsMeshes(meshes: Array<AbstractMesh>, fastCheck?: boolean, results?: Array<PickingInfo>): Array<PickingInfo>;
        private _comparePickingInfo(pickingInfoA, pickingInfoB);
        private static smallnum;
        private static rayl;
        /**
         * Intersection test between the ray and a given segment whithin a given tolerance (threshold)
         * @param sega the first point of the segment to test the intersection against
         * @param segb the second point of the segment to test the intersection against
         * @param threshold the tolerance margin, if the ray doesn't intersect the segment but is close to the given threshold, the intersection is successful
         * @return the distance from the ray origin to the intersection point if there's intersection, or -1 if there's no intersection
         */
        intersectionSegment(sega: Vector3, segb: Vector3, threshold: number): number;
        static CreateNew(x: number, y: number, viewportWidth: number, viewportHeight: number, world: Matrix, view: Matrix, projection: Matrix): Ray;
        /**
        * Function will create a new transformed ray starting from origin and ending at the end point. Ray's length will be set, and ray will be
        * transformed to the given world matrix.
        * @param origin The origin point
        * @param end The end point
        * @param world a matrix to transform the ray to. Default is the identity matrix.
        */
        static CreateNewFromTo(origin: Vector3, end: Vector3, world?: Matrix): Ray;
        static Transform(ray: Ray, matrix: Matrix): Ray;
        static TransformToRef(ray: Ray, matrix: Matrix, result: Ray): void;
    }
}

declare module BABYLON {
    /**
     * Highlight layer options. This helps customizing the behaviour
     * of the highlight layer.
     */
    interface IHighlightLayerOptions {
        /**
         * Multiplication factor apply to the canvas size to compute the render target size
         * used to generated the glowing objects (the smaller the faster).
         */
        mainTextureRatio?: number;
        /**
         * Enforces a fixed size texture to ensure resize independant blur.
         */
        mainTextureFixedSize?: number;
        /**
         * Multiplication factor apply to the main texture size in the first step of the blur to reduce the size
         * of the picture to blur (the smaller the faster).
         */
        blurTextureSizeRatio?: number;
        /**
         * How big in texel of the blur texture is the vertical blur.
         */
        blurVerticalSize?: number;
        /**
         * How big in texel of the blur texture is the horizontal blur.
         */
        blurHorizontalSize?: number;
        /**
         * Alpha blending mode used to apply the blur. Default is combine.
         */
        alphaBlendingMode?: number;
        /**
         * The camera attached to the layer.
         */
        camera?: Camera;
    }
    /**
     * The highlight layer Helps adding a glow effect around a mesh.
     *
     * Once instantiated in a scene, simply use the pushMesh or removeMesh method to add or remove
     * glowy meshes to your scene.
     *
     * !!! THIS REQUIRES AN ACTIVE STENCIL BUFFER ON THE CANVAS !!!
     */
    class HighlightLayer {
        name: string;
        /**
         * The neutral color used during the preparation of the glow effect.
         * This is black by default as the blend operation is a blend operation.
         */
        static neutralColor: Color4;
        /**
         * Stencil value used for glowing meshes.
         */
        static glowingMeshStencilReference: number;
        /**
         * Stencil value used for the other meshes in the scene.
         */
        static normalMeshStencilReference: number;
        private _scene;
        private _engine;
        private _options;
        private _vertexBuffers;
        private _indexBuffer;
        private _downSamplePostprocess;
        private _horizontalBlurPostprocess;
        private _verticalBlurPostprocess;
        private _cachedDefines;
        private _glowMapGenerationEffect;
        private _glowMapMergeEffect;
        private _blurTexture;
        private _mainTexture;
        private _mainTextureDesiredSize;
        private _meshes;
        private _maxSize;
        private _shouldRender;
        private _instanceGlowingMeshStencilReference;
        private _excludedMeshes;
        /**
         * Specifies whether or not the inner glow is ACTIVE in the layer.
         */
        innerGlow: boolean;
        /**
         * Specifies whether or not the outer glow is ACTIVE in the layer.
         */
        outerGlow: boolean;
        /**
         * Specifies wether the highlight layer is enabled or not.
         */
        isEnabled: boolean;
        /**
         * Gets the horizontal size of the blur.
         */
        /**
         * Specifies the horizontal size of the blur.
         */
        blurHorizontalSize: number;
        /**
         * Gets the vertical size of the blur.
         */
        /**
         * Specifies the vertical size of the blur.
         */
        blurVerticalSize: number;
        /**
         * Gets the camera attached to the layer.
         */
        readonly camera: Camera;
        /**
         * An event triggered when the highlight layer has been disposed.
         * @type {BABYLON.Observable}
         */
        onDisposeObservable: Observable<HighlightLayer>;
        /**
         * An event triggered when the highlight layer is about rendering the main texture with the glowy parts.
         * @type {BABYLON.Observable}
         */
        onBeforeRenderMainTextureObservable: Observable<HighlightLayer>;
        /**
         * An event triggered when the highlight layer is being blurred.
         * @type {BABYLON.Observable}
         */
        onBeforeBlurObservable: Observable<HighlightLayer>;
        /**
         * An event triggered when the highlight layer has been blurred.
         * @type {BABYLON.Observable}
         */
        onAfterBlurObservable: Observable<HighlightLayer>;
        /**
         * An event triggered when the glowing blurred texture is being merged in the scene.
         * @type {BABYLON.Observable}
         */
        onBeforeComposeObservable: Observable<HighlightLayer>;
        /**
         * An event triggered when the glowing blurred texture has been merged in the scene.
         * @type {BABYLON.Observable}
         */
        onAfterComposeObservable: Observable<HighlightLayer>;
        /**
         * An event triggered when the highlight layer changes its size.
         * @type {BABYLON.Observable}
         */
        onSizeChangedObservable: Observable<HighlightLayer>;
        /**
         * Instantiates a new highlight Layer and references it to the scene..
         * @param name The name of the layer
         * @param scene The scene to use the layer in
         * @param options Sets of none mandatory options to use with the layer (see IHighlightLayerOptions for more information)
         */
        constructor(name: string, scene: Scene, options?: IHighlightLayerOptions);
        /**
         * Creates the render target textures and post processes used in the highlight layer.
         */
        private createTextureAndPostProcesses();
        /**
         * Checks for the readiness of the element composing the layer.
         * @param subMesh the mesh to check for
         * @param useInstances specify wether or not to use instances to render the mesh
         * @param emissiveTexture the associated emissive texture used to generate the glow
         * @return true if ready otherwise, false
         */
        private isReady(subMesh, useInstances, emissiveTexture);
        /**
         * Renders the glowing part of the scene by blending the blurred glowing meshes on top of the rendered scene.
         */
        render(): void;
        /**
         * Add a mesh in the exclusion list to prevent it to impact or being impacted by the highlight layer.
         * @param mesh The mesh to exclude from the highlight layer
         */
        addExcludedMesh(mesh: Mesh): void;
        /**
          * Remove a mesh from the exclusion list to let it impact or being impacted by the highlight layer.
          * @param mesh The mesh to highlight
          */
        removeExcludedMesh(mesh: Mesh): void;
        /**
         * Add a mesh in the highlight layer in order to make it glow with the chosen color.
         * @param mesh The mesh to highlight
         * @param color The color of the highlight
         * @param glowEmissiveOnly Extract the glow from the emissive texture
         */
        addMesh(mesh: Mesh, color: Color3, glowEmissiveOnly?: boolean): void;
        /**
         * Remove a mesh from the highlight layer in order to make it stop glowing.
         * @param mesh The mesh to highlight
         */
        removeMesh(mesh: Mesh): void;
        /**
         * Returns true if the layer contains information to display, otherwise false.
         */
        shouldRender(): boolean;
        /**
         * Sets the main texture desired size which is the closest power of two
         * of the engine canvas size.
         */
        private setMainTextureSize();
        /**
         * Force the stencil to the normal expected value for none glowing parts
         */
        private defaultStencilReference(mesh);
        /**
         * Dispose only the render target textures and post process.
         */
        private disposeTextureAndPostProcesses();
        /**
         * Dispose the highlight layer and free resources.
         */
        dispose(): void;
    }
}

declare module BABYLON {
    class Layer {
        name: string;
        texture: Texture;
        isBackground: boolean;
        color: Color4;
        scale: Vector2;
        offset: Vector2;
        alphaBlendingMode: number;
        alphaTest: boolean;
        layerMask: number;
        private _scene;
        private _vertexBuffers;
        private _indexBuffer;
        private _effect;
        private _alphaTestEffect;
        /**
        * An event triggered when the layer is disposed.
        * @type {BABYLON.Observable}
        */
        onDisposeObservable: Observable<Layer>;
        private _onDisposeObserver;
        onDispose: () => void;
        /**
        * An event triggered before rendering the scene
        * @type {BABYLON.Observable}
        */
        onBeforeRenderObservable: Observable<Layer>;
        private _onBeforeRenderObserver;
        onBeforeRender: () => void;
        /**
        * An event triggered after rendering the scene
        * @type {BABYLON.Observable}
        */
        onAfterRenderObservable: Observable<Layer>;
        private _onAfterRenderObserver;
        onAfterRender: () => void;
        constructor(name: string, imgUrl: string, scene: Scene, isBackground?: boolean, color?: Color4);
        render(): void;
        dispose(): void;
    }
}

declare module BABYLON {
    class LensFlare {
        size: number;
        position: number;
        color: Color3;
        texture: Texture;
        alphaMode: number;
        private _system;
        constructor(size: number, position: number, color: any, imgUrl: string, system: LensFlareSystem);
        dispose: () => void;
    }
}

declare module BABYLON {
    class LensFlareSystem {
        name: string;
        lensFlares: LensFlare[];
        borderLimit: number;
        viewportBorder: number;
        meshesSelectionPredicate: (mesh: Mesh) => boolean;
        layerMask: number;
        id: string;
        private _scene;
        private _emitter;
        private _vertexBuffers;
        private _indexBuffer;
        private _effect;
        private _positionX;
        private _positionY;
        private _isEnabled;
        constructor(name: string, emitter: any, scene: Scene);
        isEnabled: boolean;
        getScene(): Scene;
        getEmitter(): any;
        setEmitter(newEmitter: any): void;
        getEmitterPosition(): Vector3;
        computeEffectivePosition(globalViewport: Viewport): boolean;
        _isVisible(): boolean;
        render(): boolean;
        dispose(): void;
        static Parse(parsedLensFlareSystem: any, scene: Scene, rootUrl: string): LensFlareSystem;
        serialize(): any;
    }
}

declare module BABYLON {
    class DirectionalLight extends ShadowLight {
        private _shadowFrustumSize;
        /**
         * Fix frustum size for the shadow generation. This is disabled if the value is 0.
         */
        /**
         * Specifies a fix frustum size for the shadow generation.
         */
        shadowFrustumSize: number;
        private _shadowOrthoScale;
        shadowOrthoScale: number;
        autoUpdateExtends: boolean;
        private _orthoLeft;
        private _orthoRight;
        private _orthoTop;
        private _orthoBottom;
        /**
         * Creates a DirectionalLight object in the scene, oriented towards the passed direction (Vector3).
         * The directional light is emitted from everywhere in the given direction.
         * It can cast shawdows.
         * Documentation : http://doc.babylonjs.com/tutorials/lights
         */
        constructor(name: string, direction: Vector3, scene: Scene);
        /**
         * Returns the string "DirectionalLight".
         */
        getClassName(): string;
        /**
         * Returns the integer 1.
         */
        getTypeID(): number;
        /**
         * Sets the passed matrix "matrix" as projection matrix for the shadows cast by the light according to the passed view matrix.
         * Returns the DirectionalLight Shadow projection matrix.
         */
        protected _setDefaultShadowProjectionMatrix(matrix: Matrix, viewMatrix: Matrix, renderList: Array<AbstractMesh>): void;
        /**
         * Sets the passed matrix "matrix" as fixed frustum projection matrix for the shadows cast by the light according to the passed view matrix.
         * Returns the DirectionalLight Shadow projection matrix.
         */
        protected _setDefaultFixedFrustumShadowProjectionMatrix(matrix: Matrix, viewMatrix: Matrix): void;
        /**
         * Sets the passed matrix "matrix" as auto extend projection matrix for the shadows cast by the light according to the passed view matrix.
         * Returns the DirectionalLight Shadow projection matrix.
         */
        protected _setDefaultAutoExtendShadowProjectionMatrix(matrix: Matrix, viewMatrix: Matrix, renderList: Array<AbstractMesh>): void;
        protected _buildUniformLayout(): void;
        /**
         * Sets the passed Effect object with the DirectionalLight transformed position (or position if not parented) and the passed name.
         * Returns the DirectionalLight.
         */
        transferToEffect(effect: Effect, lightIndex: string): DirectionalLight;
        /**
         * Gets the minZ used for shadow according to both the scene and the light.
         *
         * Values are fixed on directional lights as it relies on an ortho projection hence the need to convert being
         * -1 and 1 to 0 and 1 doing (depth + min) / (min + max) -> (depth + 1) / (1 + 1) -> (depth * 0.5) + 0.5.
         * @param activeCamera
         */
        getDepthMinZ(activeCamera: Camera): number;
        /**
         * Gets the maxZ used for shadow according to both the scene and the light.
         *
         * Values are fixed on directional lights as it relies on an ortho projection hence the need to convert being
         * -1 and 1 to 0 and 1 doing (depth + min) / (min + max) -> (depth + 1) / (1 + 1) -> (depth * 0.5) + 0.5.
         * @param activeCamera
         */
        getDepthMaxZ(activeCamera: Camera): number;
    }
}

declare module BABYLON {
    class HemisphericLight extends Light {
        groundColor: Color3;
        direction: Vector3;
        private _worldMatrix;
        /**
         * Creates a HemisphericLight object in the scene according to the passed direction (Vector3).
         * The HemisphericLight simulates the ambient environment light, so the passed direction is the light reflection direction, not the incoming direction.
         * The HemisphericLight can't cast shadows.
         * Documentation : http://doc.babylonjs.com/tutorials/lights
         */
        constructor(name: string, direction: Vector3, scene: Scene);
        protected _buildUniformLayout(): void;
        /**
         * Returns the string "HemisphericLight".
         */
        getClassName(): string;
        /**
         * Sets the HemisphericLight direction towards the passed target (Vector3).
         * Returns the updated direction.
         */
        setDirectionToTarget(target: Vector3): Vector3;
        getShadowGenerator(): ShadowGenerator;
        /**
         * Sets the passed Effect object with the HemisphericLight normalized direction and color and the passed name (string).
         * Returns the HemisphericLight.
         */
        transferToEffect(effect: Effect, lightIndex: string): HemisphericLight;
        _getWorldMatrix(): Matrix;
        /**
         * Returns the integer 3.
         */
        getTypeID(): number;
    }
}

declare module BABYLON {
    class Light extends Node {
        private static _LIGHTMAP_DEFAULT;
        private static _LIGHTMAP_SPECULAR;
        private static _LIGHTMAP_SHADOWSONLY;
        /**
         * If every light affecting the material is in this lightmapMode,
         * material.lightmapTexture adds or multiplies
         * (depends on material.useLightmapAsShadowmap)
         * after every other light calculations.
         */
        static readonly LIGHTMAP_DEFAULT: number;
        /**
         * material.lightmapTexture as only diffuse lighting from this light
         * adds pnly specular lighting from this light
         * adds dynamic shadows
         */
        static readonly LIGHTMAP_SPECULAR: number;
        /**
         * material.lightmapTexture as only lighting
         * no light calculation from this light
         * only adds dynamic shadows from this light
         */
        static readonly LIGHTMAP_SHADOWSONLY: number;
        private static _INTENSITYMODE_AUTOMATIC;
        private static _INTENSITYMODE_LUMINOUSPOWER;
        private static _INTENSITYMODE_LUMINOUSINTENSITY;
        private static _INTENSITYMODE_ILLUMINANCE;
        private static _INTENSITYMODE_LUMINANCE;
        /**
         * Each light type uses the default quantity according to its type:
         *      point/spot lights use luminous intensity
         *      directional lights use illuminance
         */
        static readonly INTENSITYMODE_AUTOMATIC: number;
        /**
         * lumen (lm)
         */
        static readonly INTENSITYMODE_LUMINOUSPOWER: number;
        /**
         * candela (lm/sr)
         */
        static readonly INTENSITYMODE_LUMINOUSINTENSITY: number;
        /**
         * lux (lm/m^2)
         */
        static readonly INTENSITYMODE_ILLUMINANCE: number;
        /**
         * nit (cd/m^2)
         */
        static readonly INTENSITYMODE_LUMINANCE: number;
        private static _LIGHTTYPEID_POINTLIGHT;
        private static _LIGHTTYPEID_DIRECTIONALLIGHT;
        private static _LIGHTTYPEID_SPOTLIGHT;
        private static _LIGHTTYPEID_HEMISPHERICLIGHT;
        /**
         * Light type const id of the point light.
         */
        static readonly LIGHTTYPEID_POINTLIGHT: number;
        /**
         * Light type const id of the directional light.
         */
        static readonly LIGHTTYPEID_DIRECTIONALLIGHT: number;
        /**
         * Light type const id of the spot light.
         */
        static readonly LIGHTTYPEID_SPOTLIGHT: number;
        /**
         * Light type const id of the hemispheric light.
         */
        static readonly LIGHTTYPEID_HEMISPHERICLIGHT: number;
        diffuse: Color3;
        specular: Color3;
        intensity: number;
        range: number;
        /**
         * Cached photometric scale default to 1.0 as the automatic intensity mode defaults to 1.0 for every type
         * of light.
         */
        private _photometricScale;
        private _intensityMode;
        /**
         * Gets the photometric scale used to interpret the intensity.
         * This is only relevant with PBR Materials where the light intensity can be defined in a physical way.
         */
        /**
         * Sets the photometric scale used to interpret the intensity.
         * This is only relevant with PBR Materials where the light intensity can be defined in a physical way.
         */
        intensityMode: number;
        private _radius;
        /**
         * Gets the light radius used by PBR Materials to simulate soft area lights.
         */
        /**
         * sets the light radius used by PBR Materials to simulate soft area lights.
         */
        radius: number;
        /**
         * Defines the rendering priority of the lights. It can help in case of fallback or number of lights
         * exceeding the number allowed of the materials.
         */
        private _renderPriority;
        renderPriority: number;
        /**
         * Defines wether or not the shadows are enabled for this light. This can help turning off/on shadow without detaching
         * the current shadow generator.
         */
        shadowEnabled: boolean;
        private _includedOnlyMeshes;
        includedOnlyMeshes: AbstractMesh[];
        private _excludedMeshes;
        excludedMeshes: AbstractMesh[];
        private _excludeWithLayerMask;
        excludeWithLayerMask: number;
        private _includeOnlyWithLayerMask;
        includeOnlyWithLayerMask: number;
        private _lightmapMode;
        lightmapMode: number;
        private _parentedWorldMatrix;
        _shadowGenerator: IShadowGenerator;
        _excludedMeshesIds: string[];
        _includedOnlyMeshesIds: string[];
        _uniformBuffer: UniformBuffer;
        /**
         * Creates a Light object in the scene.
         * Documentation : http://doc.babylonjs.com/tutorials/lights
         */
        constructor(name: string, scene: Scene);
        protected _buildUniformLayout(): void;
        /**
         * Returns the string "Light".
         */
        getClassName(): string;
        /**
         * @param {boolean} fullDetails - support for multiple levels of logging within scene loading
         */
        toString(fullDetails?: boolean): string;
        /**
         * Set the enabled state of this node.
         * @param {boolean} value - the new enabled state
         * @see isEnabled
         */
        setEnabled(value: boolean): void;
        /**
         * Returns the Light associated shadow generator.
         */
        getShadowGenerator(): IShadowGenerator;
        /**
         * Returns a Vector3, the absolute light position in the World.
         */
        getAbsolutePosition(): Vector3;
        transferToEffect(effect: Effect, lightIndex: string): void;
        _getWorldMatrix(): Matrix;
        /**
         * Boolean : True if the light will affect the passed mesh.
         */
        canAffectMesh(mesh: AbstractMesh): boolean;
        /**
         * Returns the light World matrix.
         */
        getWorldMatrix(): Matrix;
        /**
         * Sort function to order lights for rendering.
         * @param a First Light object to compare to second.
         * @param b Second Light object to compare first.
         * @return -1 to reduce's a's index relative to be, 0 for no change, 1 to increase a's index relative to b.
         */
        static compareLightsPriority(a: Light, b: Light): number;
        /**
         * Disposes the light.
         */
        dispose(): void;
        /**
         * Returns the light type ID (integer).
         */
        getTypeID(): number;
        /**
         * Returns the intensity scaled by the Photometric Scale according to the light type and intensity mode.
         */
        getScaledIntensity(): number;
        /**
         * Returns a new Light object, named "name", from the current one.
         */
        clone(name: string): Light;
        /**
         * Serializes the current light into a Serialization object.
         * Returns the serialized object.
         */
        serialize(): any;
        /**
         * Creates a new typed light from the passed type (integer) : point light = 0, directional light = 1, spot light = 2, hemispheric light = 3.
         * This new light is named "name" and added to the passed scene.
         */
        static GetConstructorFromName(type: number, name: string, scene: Scene): () => Light;
        /**
         * Parses the passed "parsedLight" and returns a new instanced Light from this parsing.
         */
        static Parse(parsedLight: any, scene: Scene): Light;
        private _hookArrayForExcluded(array);
        private _hookArrayForIncludedOnly(array);
        private _resyncMeshes();
        _markMeshesAsLightDirty(): void;
        /**
         * Recomputes the cached photometric scale if needed.
         */
        private _computePhotometricScale();
        /**
         * Returns the Photometric Scale according to the light type and intensity mode.
         */
        private _getPhotometricScale();
        private _reorderLightsInScene();
    }
}

declare module BABYLON {
    class PointLight extends ShadowLight {
        private _shadowAngle;
        /**
         * Getter: In case of direction provided, the shadow will not use a cube texture but simulate a spot shadow as a fallback
         * This specifies what angle the shadow will use to be created.
         *
         * It default to 90 degrees to work nicely with the cube texture generation for point lights shadow maps.
         */
        /**
         * Setter: In case of direction provided, the shadow will not use a cube texture but simulate a spot shadow as a fallback
         * This specifies what angle the shadow will use to be created.
         *
         * It default to 90 degrees to work nicely with the cube texture generation for point lights shadow maps.
         */
        shadowAngle: number;
        /**
         * In case of direction provided, the shadow will not use a cube texture but simulate a spot shadow as a fallback
         */
        direction: Vector3;
        /**
         * Creates a PointLight object from the passed name and position (Vector3) and adds it in the scene.
         * A PointLight emits the light in every direction.
         * It can cast shadows.
         * If the scene camera is already defined and you want to set your PointLight at the camera position, just set it :
         * ```javascript
         * var pointLight = new BABYLON.PointLight("pl", camera.position, scene);
         * ```
         * Documentation : http://doc.babylonjs.com/tutorials/lights
         */
        constructor(name: string, position: Vector3, scene: Scene);
        /**
         * Returns the string "PointLight"
         */
        getClassName(): string;
        /**
         * Returns the integer 0.
         */
        getTypeID(): number;
        /**
         * Specifies wether or not the shadowmap should be a cube texture.
         */
        needCube(): boolean;
        /**
         * Returns a new Vector3 aligned with the PointLight cube system according to the passed cube face index (integer).
         */
        getShadowDirection(faceIndex?: number): Vector3;
        /**
         * Sets the passed matrix "matrix" as a left-handed perspective projection matrix with the following settings :
         * - fov = PI / 2
         * - aspect ratio : 1.0
         * - z-near and far equal to the active camera minZ and maxZ.
         * Returns the PointLight.
         */
        protected _setDefaultShadowProjectionMatrix(matrix: Matrix, viewMatrix: Matrix, renderList: Array<AbstractMesh>): void;
        protected _buildUniformLayout(): void;
        /**
         * Sets the passed Effect "effect" with the PointLight transformed position (or position, if none) and passed name (string).
         * Returns the PointLight.
         */
        transferToEffect(effect: Effect, lightIndex: string): PointLight;
    }
}

declare module BABYLON {
    interface IShadowLight extends Light {
        id: string;
        position: Vector3;
        direction: Vector3;
        transformedPosition: Vector3;
        transformedDirection: Vector3;
        name: string;
        shadowMinZ: number;
        shadowMaxZ: number;
        computeTransformedInformation(): boolean;
        getScene(): Scene;
        customProjectionMatrixBuilder: (viewMatrix: Matrix, renderList: Array<AbstractMesh>, result: Matrix) => void;
        setShadowProjectionMatrix(matrix: Matrix, viewMatrix: Matrix, renderList: Array<AbstractMesh>): IShadowLight;
        getDepthScale(): number;
        needCube(): boolean;
        needProjectionMatrixCompute(): boolean;
        forceProjectionMatrixCompute(): void;
        getShadowDirection(faceIndex?: number): Vector3;
        /**
         * Gets the minZ used for shadow according to both the scene and the light.
         * @param activeCamera
         */
        getDepthMinZ(activeCamera: Camera): number;
        /**
         * Gets the minZ used for shadow according to both the scene and the light.
         * @param activeCamera
         */
        getDepthMaxZ(activeCamera: Camera): number;
    }
    abstract class ShadowLight extends Light implements IShadowLight {
        protected abstract _setDefaultShadowProjectionMatrix(matrix: Matrix, viewMatrix: Matrix, renderList: Array<AbstractMesh>): void;
        position: Vector3;
        protected _direction: Vector3;
        direction: Vector3;
        private _shadowMinZ;
        shadowMinZ: number;
        private _shadowMaxZ;
        shadowMaxZ: number;
        customProjectionMatrixBuilder: (viewMatrix: Matrix, renderList: Array<AbstractMesh>, result: Matrix) => void;
        transformedPosition: Vector3;
        transformedDirection: Vector3;
        private _worldMatrix;
        private _needProjectionMatrixCompute;
        /**
         * Computes the light transformed position/direction in case the light is parented. Returns true if parented, else false.
         */
        computeTransformedInformation(): boolean;
        /**
         * Return the depth scale used for the shadow map.
         */
        getDepthScale(): number;
        /**
         * Returns the light direction (Vector3) for any passed face index.
         */
        getShadowDirection(faceIndex?: number): Vector3;
        /**
         * Returns the DirectionalLight absolute position in the World.
         */
        getAbsolutePosition(): Vector3;
        /**
         * Sets the DirectionalLight direction toward the passed target (Vector3).
         * Returns the updated DirectionalLight direction (Vector3).
         */
        setDirectionToTarget(target: Vector3): Vector3;
        /**
         * Returns the light rotation (Vector3).
         */
        getRotation(): Vector3;
        /**
         * Boolean : false by default.
         */
        needCube(): boolean;
        /**
         * Specifies wether or not the projection matrix should be recomputed this frame.
         */
        needProjectionMatrixCompute(): boolean;
        /**
         * Forces the shadow generator to recompute the projection matrix even if position and direction did not changed.
         */
        forceProjectionMatrixCompute(): void;
        /**
         * Get the world matrix of the sahdow lights.
         */
        _getWorldMatrix(): Matrix;
        /**
         * Gets the minZ used for shadow according to both the scene and the light.
         * @param activeCamera
         */
        getDepthMinZ(activeCamera: Camera): number;
        /**
         * Gets the maxZ used for shadow according to both the scene and the light.
         * @param activeCamera
         */
        getDepthMaxZ(activeCamera: Camera): number;
        /**
         * Sets the projection matrix according to the type of light and custom projection matrix definition.
         * Returns the light.
         */
        setShadowProjectionMatrix(matrix: Matrix, viewMatrix: Matrix, renderList: Array<AbstractMesh>): IShadowLight;
    }
}

declare module BABYLON {
    class SpotLight extends ShadowLight {
        private _angle;
        angle: number;
        private _shadowAngleScale;
        /**
         * Allows scaling the angle of the light for shadow generation only.
         */
        shadowAngleScale: number;
        exponent: number;
        /**
         * Creates a SpotLight object in the scene with the passed parameters :
         * - `position` (Vector3) is the initial SpotLight position,
         * - `direction` (Vector3) is the initial SpotLight direction,
         * - `angle` (float, in radians) is the spot light cone angle,
         * - `exponent` (float) is the light decay speed with the distance from the emission spot.
         * A spot light is a simply light oriented cone.
         * It can cast shadows.
         * Documentation : http://doc.babylonjs.com/tutorials/lights
         */
        constructor(name: string, position: Vector3, direction: Vector3, angle: number, exponent: number, scene: Scene);
        /**
         * Returns the string "SpotLight".
         */
        getClassName(): string;
        /**
         * Returns the integer 2.
         */
        getTypeID(): number;
        /**
         * Sets the passed matrix "matrix" as perspective projection matrix for the shadows and the passed view matrix with the fov equal to the SpotLight angle and and aspect ratio of 1.0.
         * Returns the SpotLight.
         */
        protected _setDefaultShadowProjectionMatrix(matrix: Matrix, viewMatrix: Matrix, renderList: Array<AbstractMesh>): void;
        protected _buildUniformLayout(): void;
        /**
         * Sets the passed Effect object with the SpotLight transfomed position (or position if not parented) and normalized direction.
         * Return the SpotLight.
         */
        transferToEffect(effect: Effect, lightIndex: string): SpotLight;
    }
}

declare module BABYLON {
    /**
     * The color grading curves provide additional color adjustmnent that is applied after any color grading transform (3D LUT).
     * They allow basic adjustment of saturation and small exposure adjustments, along with color filter tinting to provide white balance adjustment or more stylistic effects.
     * These are similar to controls found in many professional imaging or colorist software. The global controls are applied to the entire image. For advanced tuning, extra controls are provided to adjust the shadow, midtone and highlight areas of the image;
     * corresponding to low luminance, medium luminance, and high luminance areas respectively.
     */
    class ColorCurves {
        private _dirty;
        private _tempColor;
        private _globalCurve;
        private _highlightsCurve;
        private _midtonesCurve;
        private _shadowsCurve;
        private _positiveCurve;
        private _negativeCurve;
        private _globalHue;
        private _globalDensity;
        private _globalSaturation;
        private _globalExposure;
        /**
         * Gets the global Hue value.
         * The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).
         */
        /**
         * Sets the global Hue value.
         * The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).
         */
        globalHue: number;
        /**
         * Gets the global Density value.
         * The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
         * Values less than zero provide a filter of opposite hue.
         */
        /**
         * Sets the global Density value.
         * The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
         * Values less than zero provide a filter of opposite hue.
         */
        globalDensity: number;
        /**
         * Gets the global Saturation value.
         * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.
         */
        /**
         * Sets the global Saturation value.
         * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.
         */
        globalSaturation: number;
        private _highlightsHue;
        private _highlightsDensity;
        private _highlightsSaturation;
        private _highlightsExposure;
        /**
         * Gets the highlights Hue value.
         * The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).
         */
        /**
         * Sets the highlights Hue value.
         * The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).
         */
        highlightsHue: number;
        /**
         * Gets the highlights Density value.
         * The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
         * Values less than zero provide a filter of opposite hue.
         */
        /**
         * Sets the highlights Density value.
         * The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
         * Values less than zero provide a filter of opposite hue.
         */
        highlightsDensity: number;
        /**
         * Gets the highlights Saturation value.
         * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.
         */
        /**
         * Sets the highlights Saturation value.
         * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.
         */
        highlightsSaturation: number;
        /**
         * Gets the highlights Exposure value.
         * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.
         */
        /**
         * Sets the highlights Exposure value.
         * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.
         */
        highlightsExposure: number;
        private _midtonesHue;
        private _midtonesDensity;
        private _midtonesSaturation;
        private _midtonesExposure;
        /**
         * Gets the midtones Hue value.
         * The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).
         */
        /**
         * Sets the midtones Hue value.
         * The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).
         */
        midtonesHue: number;
        /**
         * Gets the midtones Density value.
         * The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
         * Values less than zero provide a filter of opposite hue.
         */
        /**
         * Sets the midtones Density value.
         * The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
         * Values less than zero provide a filter of opposite hue.
         */
        midtonesDensity: number;
        /**
         * Gets the midtones Saturation value.
         * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.
         */
        /**
         * Sets the midtones Saturation value.
         * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.
         */
        midtonesSaturation: number;
        /**
         * Gets the midtones Exposure value.
         * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.
         */
        /**
         * Sets the midtones Exposure value.
         * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.
         */
        midtonesExposure: number;
        private _shadowsHue;
        private _shadowsDensity;
        private _shadowsSaturation;
        private _shadowsExposure;
        /**
         * Gets the shadows Hue value.
         * The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).
         */
        /**
         * Sets the shadows Hue value.
         * The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).
         */
        shadowsHue: number;
        /**
         * Gets the shadows Density value.
         * The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
         * Values less than zero provide a filter of opposite hue.
         */
        /**
         * Sets the shadows Density value.
         * The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
         * Values less than zero provide a filter of opposite hue.
         */
        shadowsDensity: number;
        /**
         * Gets the shadows Saturation value.
         * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.
         */
        /**
         * Sets the shadows Saturation value.
         * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.
         */
        shadowsSaturation: number;
        /**
         * Gets the shadows Exposure value.
         * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.
         */
        /**
         * Sets the shadows Exposure value.
         * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.
         */
        shadowsExposure: number;
        /**
         * Binds the color curves to the shader.
         * @param colorCurves The color curve to bind
         * @param effect The effect to bind to
         */
        static Bind(colorCurves: ColorCurves, effect: Effect, positiveUniform?: string, neutralUniform?: string, negativeUniform?: string): void;
        /**
         * Prepare the list of uniforms associated with the ColorCurves effects.
         * @param uniformsList The list of uniforms used in the effect
         */
        static PrepareUniforms(uniformsList: string[]): void;
        /**
         * Returns color grading data based on a hue, density, saturation and exposure value.
         * @param filterHue The hue of the color filter.
         * @param filterDensity The density of the color filter.
         * @param saturation The saturation.
         * @param exposure The exposure.
         * @param result The result data container.
         */
        private getColorGradingDataToRef(hue, density, saturation, exposure, result);
        /**
         * Takes an input slider value and returns an adjusted value that provides extra control near the centre.
         * @param value The input slider value in range [-100,100].
         * @returns Adjusted value.
         */
        private static applyColorGradingSliderNonlinear(value);
        /**
         * Returns an RGBA Color4 based on Hue, Saturation and Brightness (also referred to as value, HSV).
         * @param hue The hue (H) input.
         * @param saturation The saturation (S) input.
         * @param brightness The brightness (B) input.
         * @result An RGBA color represented as Vector4.
         */
        private static fromHSBToRef(hue, saturation, brightness, result);
        /**
         * Returns a value clamped between min and max
         * @param value The value to clamp
         * @param min The minimum of value
         * @param max The maximum of value
         * @returns The clamped value.
         */
        private static clamp(value, min, max);
        /**
         * Clones the current color curve instance.
         * @return The cloned curves
         */
        clone(): ColorCurves;
        /**
         * Serializes the current color curve instance to a json representation.
         * @return a JSON representation
         */
        serialize(): any;
        /**
         * Parses the color curve from a json representation.
         * @param source the JSON source to parse
         * @return The parsed curves
         */
        static Parse(source: any): ColorCurves;
    }
}

declare module BABYLON {
    class EffectFallbacks {
        private _defines;
        private _currentRank;
        private _maxRank;
        private _mesh;
        private _meshRank;
        addFallback(rank: number, define: string): void;
        addCPUSkinningFallback(rank: number, mesh: BABYLON.AbstractMesh): void;
        readonly isMoreFallbacks: boolean;
        reduce(currentDefines: string): string;
    }
    class EffectCreationOptions {
        attributes: string[];
        uniformsNames: string[];
        uniformBuffersNames: string[];
        samplers: string[];
        defines: any;
        fallbacks: EffectFallbacks;
        onCompiled: (effect: Effect) => void;
        onError: (effect: Effect, errors: string) => void;
        indexParameters: any;
        maxSimultaneousLights: number;
    }
    class Effect {
        name: any;
        defines: string;
        onCompiled: (effect: Effect) => void;
        onError: (effect: Effect, errors: string) => void;
        onBind: (effect: Effect) => void;
        uniqueId: number;
        onCompileObservable: Observable<Effect>;
        onErrorObservable: Observable<Effect>;
        onBindObservable: Observable<Effect>;
        private static _uniqueIdSeed;
        private _engine;
        private _uniformBuffersNames;
        private _uniformsNames;
        private _samplers;
        private _isReady;
        private _compilationError;
        private _attributesNames;
        private _attributes;
        private _uniforms;
        _key: string;
        private _indexParameters;
        private _fallbacks;
        private _program;
        private _valueCache;
        private static _baseCache;
        constructor(baseName: any, attributesNamesOrOptions: string[] | EffectCreationOptions, uniformsNamesOrEngine: string[] | Engine, samplers?: string[], engine?: Engine, defines?: string, fallbacks?: EffectFallbacks, onCompiled?: (effect: Effect) => void, onError?: (effect: Effect, errors: string) => void, indexParameters?: any);
        readonly key: string;
        isReady(): boolean;
        getEngine(): Engine;
        getProgram(): WebGLProgram;
        getAttributesNames(): string[];
        getAttributeLocation(index: number): number;
        getAttributeLocationByName(name: string): number;
        getAttributesCount(): number;
        getUniformIndex(uniformName: string): number;
        getUniform(uniformName: string): WebGLUniformLocation;
        getSamplers(): string[];
        getCompilationError(): string;
        getVertexShaderSource(): string;
        getFragmentShaderSource(): string;
        executeWhenCompiled(func: (effect: Effect) => void): void;
        _loadVertexShader(vertex: any, callback: (data: any) => void): void;
        _loadFragmentShader(fragment: any, callback: (data: any) => void): void;
        private _dumpShadersSource(vertexCode, fragmentCode, defines);
        private _processShaderConversion(sourceCode, isFragment, callback);
        private _processIncludes(sourceCode, callback);
        private _processPrecision(source);
        private _prepareEffect(vertexSourceCode, fragmentSourceCode, attributesNames, defines, fallbacks?);
        readonly isSupported: boolean;
        _bindTexture(channel: string, texture: WebGLTexture): void;
        setTexture(channel: string, texture: BaseTexture): void;
        setTextureArray(channel: string, textures: BaseTexture[]): void;
        setTextureFromPostProcess(channel: string, postProcess: PostProcess): void;
        _cacheMatrix(uniformName: string, matrix: Matrix): boolean;
        _cacheFloat2(uniformName: string, x: number, y: number): boolean;
        _cacheFloat3(uniformName: string, x: number, y: number, z: number): boolean;
        _cacheFloat4(uniformName: string, x: number, y: number, z: number, w: number): boolean;
        bindUniformBuffer(buffer: WebGLBuffer, name: string): void;
        bindUniformBlock(blockName: string, index: number): void;
        setIntArray(uniformName: string, array: Int32Array): Effect;
        setIntArray2(uniformName: string, array: Int32Array): Effect;
        setIntArray3(uniformName: string, array: Int32Array): Effect;
        setIntArray4(uniformName: string, array: Int32Array): Effect;
        setFloatArray(uniformName: string, array: Float32Array): Effect;
        setFloatArray2(uniformName: string, array: Float32Array): Effect;
        setFloatArray3(uniformName: string, array: Float32Array): Effect;
        setFloatArray4(uniformName: string, array: Float32Array): Effect;
        setArray(uniformName: string, array: number[]): Effect;
        setArray2(uniformName: string, array: number[]): Effect;
        setArray3(uniformName: string, array: number[]): Effect;
        setArray4(uniformName: string, array: number[]): Effect;
        setMatrices(uniformName: string, matrices: Float32Array): Effect;
        setMatrix(uniformName: string, matrix: Matrix): Effect;
        setMatrix3x3(uniformName: string, matrix: Float32Array): Effect;
        setMatrix2x2(uniformName: string, matrix: Float32Array): Effect;
        setFloat(uniformName: string, value: number): Effect;
        setBool(uniformName: string, bool: boolean): Effect;
        setVector2(uniformName: string, vector2: Vector2): Effect;
        setFloat2(uniformName: string, x: number, y: number): Effect;
        setVector3(uniformName: string, vector3: Vector3): Effect;
        setFloat3(uniformName: string, x: number, y: number, z: number): Effect;
        setVector4(uniformName: string, vector4: Vector4): Effect;
        setFloat4(uniformName: string, x: number, y: number, z: number, w: number): Effect;
        setColor3(uniformName: string, color3: Color3): Effect;
        setColor4(uniformName: string, color3: Color3, alpha: number): Effect;
        private _recombineShader(node);
        private _evaluateDefinesOnString(shaderString);
        static ShadersStore: {};
        static IncludesShadersStore: {};
    }
}

declare module BABYLON {
    class FresnelParameters {
        private _isEnabled;
        isEnabled: boolean;
        leftColor: Color3;
        rightColor: Color3;
        bias: number;
        power: number;
        clone(): FresnelParameters;
        serialize(): any;
        static Parse(parsedFresnelParameters: any): FresnelParameters;
    }
}

declare module BABYLON {
    /**
     * Interface to follow in your material defines to integrate easily the
     * Image proccessing functions.
     */
    interface IImageProcessingConfigurationDefines {
        IMAGEPROCESSING: boolean;
        VIGNETTE: boolean;
        VIGNETTEBLENDMODEMULTIPLY: boolean;
        VIGNETTEBLENDMODEOPAQUE: boolean;
        TONEMAPPING: boolean;
        CONTRAST: boolean;
        EXPOSURE: boolean;
        COLORCURVES: boolean;
        COLORGRADING: boolean;
        SAMPLER3DGREENDEPTH: boolean;
        SAMPLER3DBGRMAP: boolean;
        IMAGEPROCESSINGPOSTPROCESS: boolean;
    }
    /**
     * This groups together the common properties used for image processing either in direct forward pass
     * or through post processing effect depending on the use of the image processing pipeline in your scene
     * or not.
     */
    class ImageProcessingConfiguration {
        /**
         * Color curves setup used in the effect if colorCurvesEnabled is set to true
         */
        colorCurves: ColorCurves;
        private _colorCurvesEnabled;
        /**
         * Gets wether the color curves effect is enabled.
         */
        /**
         * Sets wether the color curves effect is enabled.
         */
        colorCurvesEnabled: boolean;
        /**
         * Color grading LUT texture used in the effect if colorGradingEnabled is set to true
         */
        colorGradingTexture: BaseTexture;
        private _colorGradingEnabled;
        /**
         * Gets wether the color grading effect is enabled.
         */
        /**
         * Sets wether the color grading effect is enabled.
         */
        colorGradingEnabled: boolean;
        private _colorGradingWithGreenDepth;
        /**
         * Gets wether the color grading effect is using a green depth for the 3d Texture.
         */
        /**
         * Sets wether the color grading effect is using a green depth for the 3d Texture.
         */
        colorGradingWithGreenDepth: boolean;
        private _colorGradingBGR;
        /**
         * Gets wether the color grading texture contains BGR values.
         */
        /**
         * Sets wether the color grading texture contains BGR values.
         */
        colorGradingBGR: boolean;
        _exposure: number;
        /**
         * Gets the Exposure used in the effect.
         */
        /**
         * Sets the Exposure used in the effect.
         */
        exposure: number;
        private _toneMappingEnabled;
        /**
         * Gets wether the tone mapping effect is enabled.
         */
        /**
         * Sets wether the tone mapping effect is enabled.
         */
        toneMappingEnabled: boolean;
        protected _contrast: number;
        /**
         * Gets the contrast used in the effect.
         */
        /**
         * Sets the contrast used in the effect.
         */
        contrast: number;
        /**
         * Vignette stretch size.
         */
        vignetteStretch: number;
        /**
         * Vignette centre X Offset.
         */
        vignetteCentreX: number;
        /**
         * Vignette centre Y Offset.
         */
        vignetteCentreY: number;
        /**
         * Vignette weight or intensity of the vignette effect.
         */
        vignetteWeight: number;
        /**
         * Color of the vignette applied on the screen through the chosen blend mode (vignetteBlendMode)
         * if vignetteEnabled is set to true.
         */
        vignetteColor: BABYLON.Color4;
        /**
         * Camera field of view used by the Vignette effect.
         */
        vignetteCameraFov: number;
        private _vignetteBlendMode;
        /**
         * Gets the vignette blend mode allowing different kind of effect.
         */
        /**
         * Sets the vignette blend mode allowing different kind of effect.
         */
        vignetteBlendMode: number;
        private _vignetteEnabled;
        /**
         * Gets wether the vignette effect is enabled.
         */
        /**
         * Sets wether the vignette effect is enabled.
         */
        vignetteEnabled: boolean;
        private _applyByPostProcess;
        /**
         * Gets wether the image processing is applied through a post process or not.
         */
        /**
         * Sets wether the image processing is applied through a post process or not.
         */
        applyByPostProcess: boolean;
        /**
        * An event triggered when the configuration changes and requires Shader to Update some parameters.
        * @type {BABYLON.Observable}
        */
        onUpdateParameters: Observable<ImageProcessingConfiguration>;
        /**
         * Method called each time the image processing information changes requires to recompile the effect.
         */
        protected _updateParameters(): void;
        /**
         * Prepare the list of uniforms associated with the Image Processing effects.
         * @param uniformsList The list of uniforms used in the effect
         * @param defines the list of defines currently in use
         */
        static PrepareUniforms(uniforms: string[], defines: IImageProcessingConfigurationDefines): void;
        /**
         * Prepare the list of samplers associated with the Image Processing effects.
         * @param uniformsList The list of uniforms used in the effect
         * @param defines the list of defines currently in use
         */
        static PrepareSamplers(samplersList: string[], defines: IImageProcessingConfigurationDefines): void;
        /**
         * Prepare the list of defines associated to the shader.
         * @param defines the list of defines to complete
         */
        prepareDefines(defines: IImageProcessingConfigurationDefines): void;
        /**
         * Returns true if all the image processing information are ready.
         */
        isReady(): boolean;
        /**
         * Binds the image processing to the shader.
         * @param effect The effect to bind to
         */
        bind(effect: Effect, aspectRatio?: number): void;
        /**
         * Clones the current image processing instance.
         * @return The cloned image processing
         */
        clone(): ImageProcessingConfiguration;
        /**
         * Serializes the current image processing instance to a json representation.
         * @return a JSON representation
         */
        serialize(): any;
        /**
         * Parses the image processing from a json representation.
         * @param source the JSON source to parse
         * @return The parsed image processing
         */
        static Parse(source: any): ImageProcessingConfiguration;
        private static _VIGNETTEMODE_MULTIPLY;
        private static _VIGNETTEMODE_OPAQUE;
        /**
         * Used to apply the vignette as a mix with the pixel color.
         */
        static readonly VIGNETTEMODE_MULTIPLY: number;
        /**
         * Used to apply the vignette as a replacement of the pixel color.
         */
        static readonly VIGNETTEMODE_OPAQUE: number;
    }
}

declare module BABYLON {
    class MaterialDefines {
        private _keys;
        private _isDirty;
        _renderId: number;
        _areLightsDirty: boolean;
        _areAttributesDirty: boolean;
        _areTexturesDirty: boolean;
        _areFresnelDirty: boolean;
        _areMiscDirty: boolean;
        _areImageProcessingDirty: boolean;
        _normals: boolean;
        _uvs: boolean;
        _needNormals: boolean;
        _needUVs: boolean;
        readonly isDirty: boolean;
        markAsProcessed(): void;
        markAsUnprocessed(): void;
        markAllAsDirty(): void;
        markAsImageProcessingDirty(): void;
        markAsLightDirty(): void;
        markAsAttributesDirty(): void;
        markAsTexturesDirty(): void;
        markAsFresnelDirty(): void;
        markAsMiscDirty(): void;
        rebuild(): void;
        isEqual(other: MaterialDefines): boolean;
        cloneTo(other: MaterialDefines): void;
        reset(): void;
        toString(): string;
    }
    class Material {
        private static _TriangleFillMode;
        private static _WireFrameFillMode;
        private static _PointFillMode;
        static readonly TriangleFillMode: number;
        static readonly WireFrameFillMode: number;
        static readonly PointFillMode: number;
        private static _ClockWiseSideOrientation;
        private static _CounterClockWiseSideOrientation;
        static readonly ClockWiseSideOrientation: number;
        static readonly CounterClockWiseSideOrientation: number;
        private static _TextureDirtyFlag;
        private static _LightDirtyFlag;
        private static _FresnelDirtyFlag;
        private static _AttributesDirtyFlag;
        private static _MiscDirtyFlag;
        static readonly TextureDirtyFlag: number;
        static readonly LightDirtyFlag: number;
        static readonly FresnelDirtyFlag: number;
        static readonly AttributesDirtyFlag: number;
        static readonly MiscDirtyFlag: number;
        id: string;
        name: string;
        checkReadyOnEveryCall: boolean;
        checkReadyOnlyOnce: boolean;
        state: string;
        alpha: number;
        protected _backFaceCulling: boolean;
        backFaceCulling: boolean;
        sideOrientation: number;
        onCompiled: (effect: Effect) => void;
        onError: (effect: Effect, errors: string) => void;
        getRenderTargetTextures: () => SmartArray<RenderTargetTexture>;
        doNotSerialize: boolean;
        storeEffectOnSubMeshes: boolean;
        /**
        * An event triggered when the material is disposed.
        * @type {BABYLON.Observable}
        */
        onDisposeObservable: Observable<Material>;
        private _onDisposeObserver;
        onDispose: () => void;
        /**
        * An event triggered when the material is bound.
        * @type {BABYLON.Observable}
        */
        onBindObservable: Observable<AbstractMesh>;
        private _onBindObserver;
        onBind: (Mesh: AbstractMesh) => void;
        /**
        * An event triggered when the material is unbound.
        * @type {BABYLON.Observable}
        */
        onUnBindObservable: Observable<Material>;
        alphaMode: number;
        disableDepthWrite: boolean;
        private _fogEnabled;
        fogEnabled: boolean;
        pointSize: number;
        zOffset: number;
        wireframe: boolean;
        pointsCloud: boolean;
        fillMode: number;
        _effect: Effect;
        _wasPreviouslyReady: boolean;
        private _useUBO;
        private _scene;
        private _fillMode;
        private _cachedDepthWriteState;
        protected _uniformBuffer: UniformBuffer;
        constructor(name: string, scene: Scene, doNotAdd?: boolean);
        /**
         * @param {boolean} fullDetails - support for multiple levels of logging within scene loading
         * subclasses should override adding information pertainent to themselves
         */
        toString(fullDetails?: boolean): string;
        /**
         * Child classes can use it to update shaders
         */
        getClassName(): string;
        readonly isFrozen: boolean;
        freeze(): void;
        unfreeze(): void;
        isReady(mesh?: AbstractMesh, useInstances?: boolean): boolean;
        isReadyForSubMesh(mesh: AbstractMesh, subMesh: BaseSubMesh, useInstances?: boolean): boolean;
        getEffect(): Effect;
        getScene(): Scene;
        needAlphaBlending(): boolean;
        needAlphaTesting(): boolean;
        getAlphaTestTexture(): BaseTexture;
        markDirty(): void;
        _preBind(effect?: Effect): void;
        bind(world: Matrix, mesh?: Mesh): void;
        bindForSubMesh(world: Matrix, mesh: Mesh, subMesh: SubMesh): void;
        bindOnlyWorldMatrix(world: Matrix): void;
        bindSceneUniformBuffer(effect: Effect, sceneUbo: UniformBuffer): void;
        bindView(effect: Effect): void;
        bindViewProjection(effect: Effect): void;
        protected _afterBind(mesh: Mesh): void;
        unbind(): void;
        getActiveTextures(): BaseTexture[];
        hasTexture(texture: BaseTexture): boolean;
        clone(name: string): Material;
        getBindedMeshes(): AbstractMesh[];
        forceCompilation(mesh: AbstractMesh, onCompiled: (material: Material) => void, options?: {
            alphaTest: boolean;
        }): void;
        markAsDirty(flag: number): void;
        protected _markAllSubMeshesAsDirty(func: (defines: MaterialDefines) => void): void;
        protected _markAllSubMeshesAsImageProcessingDirty(): void;
        protected _markAllSubMeshesAsTexturesDirty(): void;
        protected _markAllSubMeshesAsFresnelDirty(): void;
        protected _markAllSubMeshesAsLightsDirty(): void;
        protected _markAllSubMeshesAsAttributesDirty(): void;
        protected _markAllSubMeshesAsMiscDirty(): void;
        dispose(forceDisposeEffect?: boolean, forceDisposeTextures?: boolean): void;
        serialize(): any;
        static ParseMultiMaterial(parsedMultiMaterial: any, scene: Scene): MultiMaterial;
        static Parse(parsedMaterial: any, scene: Scene, rootUrl: string): any;
    }
}

declare module BABYLON {
    class MaterialHelper {
        static PrepareDefinesForMergedUV(texture: BaseTexture, defines: MaterialDefines, key: string): void;
        static BindTextureMatrix(texture: BaseTexture, uniformBuffer: UniformBuffer, key: string): void;
        static PrepareDefinesForMisc(mesh: AbstractMesh, scene: Scene, useLogarithmicDepth: boolean, pointsCloud: any, fogEnabled: boolean, defines: MaterialDefines): void;
        static PrepareDefinesForFrameBoundValues(scene: Scene, engine: Engine, defines: MaterialDefines, useInstances: boolean, forceAlphaTest?: boolean): void;
        static PrepareDefinesForAttributes(mesh: AbstractMesh, defines: MaterialDefines, useVertexColor: boolean, useBones: boolean, useMorphTargets?: boolean): boolean;
        static PrepareDefinesForLights(scene: Scene, mesh: AbstractMesh, defines: MaterialDefines, specularSupported: boolean, maxSimultaneousLights?: number, disableLighting?: boolean): boolean;
        static PrepareUniformsAndSamplersList(uniformsListOrOptions: string[] | EffectCreationOptions, samplersList?: string[], defines?: MaterialDefines, maxSimultaneousLights?: number): void;
        static HandleFallbacksForShadows(defines: MaterialDefines, fallbacks: EffectFallbacks, maxSimultaneousLights?: number): void;
        static PrepareAttributesForMorphTargets(attribs: string[], mesh: AbstractMesh, defines: MaterialDefines): void;
        static PrepareAttributesForBones(attribs: string[], mesh: AbstractMesh, defines: MaterialDefines, fallbacks: EffectFallbacks): void;
        static PrepareAttributesForInstances(attribs: string[], defines: MaterialDefines): void;
        static BindLightShadow(light: Light, scene: Scene, mesh: AbstractMesh, lightIndex: string, effect: Effect): void;
        static BindLightProperties(light: Light, effect: Effect, lightIndex: number): void;
        static BindLights(scene: Scene, mesh: AbstractMesh, effect: Effect, defines: MaterialDefines, maxSimultaneousLights?: number, usePhysicalLightFalloff?: boolean): void;
        static BindFogParameters(scene: Scene, mesh: AbstractMesh, effect: Effect): void;
        static BindBonesParameters(mesh: AbstractMesh, effect: Effect): void;
        static BindMorphTargetParameters(abstractMesh: AbstractMesh, effect: Effect): void;
        static BindLogDepth(defines: MaterialDefines, effect: Effect, scene: Scene): void;
        static BindClipPlane(effect: Effect, scene: Scene): void;
    }
}

declare module BABYLON {
    class MultiMaterial extends Material {
        private _subMaterials;
        subMaterials: Material[];
        constructor(name: string, scene: Scene);
        private _hookArray(array);
        getSubMaterial(index: any): Material;
        getActiveTextures(): BaseTexture[];
        getClassName(): string;
        isReady(mesh?: AbstractMesh): boolean;
        clone(name: string, cloneChildren?: boolean): MultiMaterial;
        serialize(): any;
    }
}

declare module BABYLON {
    class PushMaterial extends Material {
        protected _activeEffect: Effect;
        constructor(name: string, scene: Scene);
        getEffect(): Effect;
        isReady(mesh?: AbstractMesh, useInstances?: boolean): boolean;
        bindOnlyWorldMatrix(world: Matrix): void;
        bind(world: Matrix, mesh?: Mesh): void;
        protected _afterBind(mesh: Mesh, effect?: Effect): void;
        protected _mustRebind(scene: Scene, effect: Effect, visibility?: number): boolean;
    }
}

declare module BABYLON {
    class ShaderMaterial extends Material {
        private _shaderPath;
        private _options;
        private _textures;
        private _textureArrays;
        private _floats;
        private _floatsArrays;
        private _colors3;
        private _colors4;
        private _vectors2;
        private _vectors3;
        private _vectors4;
        private _matrices;
        private _matrices3x3;
        private _matrices2x2;
        private _vectors3Arrays;
        private _cachedWorldViewMatrix;
        private _renderId;
        constructor(name: string, scene: Scene, shaderPath: any, options: any);
        getClassName(): string;
        needAlphaBlending(): boolean;
        needAlphaTesting(): boolean;
        private _checkUniform(uniformName);
        setTexture(name: string, texture: Texture): ShaderMaterial;
        setTextureArray(name: string, textures: Texture[]): ShaderMaterial;
        setFloat(name: string, value: number): ShaderMaterial;
        setFloats(name: string, value: number[]): ShaderMaterial;
        setColor3(name: string, value: Color3): ShaderMaterial;
        setColor4(name: string, value: Color4): ShaderMaterial;
        setVector2(name: string, value: Vector2): ShaderMaterial;
        setVector3(name: string, value: Vector3): ShaderMaterial;
        setVector4(name: string, value: Vector4): ShaderMaterial;
        setMatrix(name: string, value: Matrix): ShaderMaterial;
        setMatrix3x3(name: string, value: Float32Array): ShaderMaterial;
        setMatrix2x2(name: string, value: Float32Array): ShaderMaterial;
        setArray3(name: string, value: number[]): ShaderMaterial;
        private _checkCache(scene, mesh?, useInstances?);
        isReady(mesh?: AbstractMesh, useInstances?: boolean): boolean;
        bindOnlyWorldMatrix(world: Matrix): void;
        bind(world: Matrix, mesh?: Mesh): void;
        getActiveTextures(): BaseTexture[];
        hasTexture(texture: BaseTexture): boolean;
        clone(name: string): ShaderMaterial;
        dispose(forceDisposeEffect?: boolean, forceDisposeTextures?: boolean): void;
        serialize(): any;
        static Parse(source: any, scene: Scene, rootUrl: string): ShaderMaterial;
    }
}

declare module BABYLON {
    class StandardMaterialDefines extends MaterialDefines implements IImageProcessingConfigurationDefines {
        MAINUV1: boolean;
        MAINUV2: boolean;
        DIFFUSE: boolean;
        DIFFUSEDIRECTUV: number;
        AMBIENT: boolean;
        AMBIENTDIRECTUV: number;
        OPACITY: boolean;
        OPACITYDIRECTUV: number;
        OPACITYRGB: boolean;
        REFLECTION: boolean;
        EMISSIVE: boolean;
        EMISSIVEDIRECTUV: number;
        SPECULAR: boolean;
        SPECULARDIRECTUV: number;
        BUMP: boolean;
        BUMPDIRECTUV: number;
        PARALLAX: boolean;
        PARALLAXOCCLUSION: boolean;
        SPECULAROVERALPHA: boolean;
        CLIPPLANE: boolean;
        ALPHATEST: boolean;
        ALPHAFROMDIFFUSE: boolean;
        POINTSIZE: boolean;
        FOG: boolean;
        SPECULARTERM: boolean;
        DIFFUSEFRESNEL: boolean;
        OPACITYFRESNEL: boolean;
        REFLECTIONFRESNEL: boolean;
        REFRACTIONFRESNEL: boolean;
        EMISSIVEFRESNEL: boolean;
        FRESNEL: boolean;
        NORMAL: boolean;
        UV1: boolean;
        UV2: boolean;
        VERTEXCOLOR: boolean;
        VERTEXALPHA: boolean;
        NUM_BONE_INFLUENCERS: number;
        BonesPerMesh: number;
        INSTANCES: boolean;
        GLOSSINESS: boolean;
        ROUGHNESS: boolean;
        EMISSIVEASILLUMINATION: boolean;
        LINKEMISSIVEWITHDIFFUSE: boolean;
        REFLECTIONFRESNELFROMSPECULAR: boolean;
        LIGHTMAP: boolean;
        LIGHTMAPDIRECTUV: number;
        USELIGHTMAPASSHADOWMAP: boolean;
        REFLECTIONMAP_3D: boolean;
        REFLECTIONMAP_SPHERICAL: boolean;
        REFLECTIONMAP_PLANAR: boolean;
        REFLECTIONMAP_CUBIC: boolean;
        REFLECTIONMAP_PROJECTION: boolean;
        REFLECTIONMAP_SKYBOX: boolean;
        REFLECTIONMAP_EXPLICIT: boolean;
        REFLECTIONMAP_EQUIRECTANGULAR: boolean;
        REFLECTIONMAP_EQUIRECTANGULAR_FIXED: boolean;
        REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED: boolean;
        INVERTCUBICMAP: boolean;
        LOGARITHMICDEPTH: boolean;
        REFRACTION: boolean;
        REFRACTIONMAP_3D: boolean;
        REFLECTIONOVERALPHA: boolean;
        INVERTNORMALMAPX: boolean;
        INVERTNORMALMAPY: boolean;
        TWOSIDEDLIGHTING: boolean;
        SHADOWFLOAT: boolean;
        MORPHTARGETS: boolean;
        MORPHTARGETS_NORMAL: boolean;
        MORPHTARGETS_TANGENT: boolean;
        NUM_MORPH_INFLUENCERS: number;
        USERIGHTHANDEDSYSTEM: boolean;
        IMAGEPROCESSING: boolean;
        VIGNETTE: boolean;
        VIGNETTEBLENDMODEMULTIPLY: boolean;
        VIGNETTEBLENDMODEOPAQUE: boolean;
        TONEMAPPING: boolean;
        CONTRAST: boolean;
        COLORCURVES: boolean;
        COLORGRADING: boolean;
        SAMPLER3DGREENDEPTH: boolean;
        SAMPLER3DBGRMAP: boolean;
        IMAGEPROCESSINGPOSTPROCESS: boolean;
        EXPOSURE: boolean;
        constructor();
        setReflectionMode(modeToEnable: string): void;
    }
    class StandardMaterial extends PushMaterial {
        private _diffuseTexture;
        diffuseTexture: BaseTexture;
        private _ambientTexture;
        ambientTexture: BaseTexture;
        private _opacityTexture;
        opacityTexture: BaseTexture;
        private _reflectionTexture;
        reflectionTexture: BaseTexture;
        private _emissiveTexture;
        emissiveTexture: BaseTexture;
        private _specularTexture;
        specularTexture: BaseTexture;
        private _bumpTexture;
        bumpTexture: BaseTexture;
        private _lightmapTexture;
        lightmapTexture: BaseTexture;
        private _refractionTexture;
        refractionTexture: BaseTexture;
        ambientColor: Color3;
        diffuseColor: Color3;
        specularColor: Color3;
        emissiveColor: Color3;
        specularPower: number;
        private _useAlphaFromDiffuseTexture;
        useAlphaFromDiffuseTexture: boolean;
        private _useEmissiveAsIllumination;
        useEmissiveAsIllumination: boolean;
        private _linkEmissiveWithDiffuse;
        linkEmissiveWithDiffuse: boolean;
        private _useSpecularOverAlpha;
        useSpecularOverAlpha: boolean;
        private _useReflectionOverAlpha;
        useReflectionOverAlpha: boolean;
        private _disableLighting;
        disableLighting: boolean;
        private _useParallax;
        useParallax: boolean;
        private _useParallaxOcclusion;
        useParallaxOcclusion: boolean;
        parallaxScaleBias: number;
        private _roughness;
        roughness: number;
        indexOfRefraction: number;
        invertRefractionY: boolean;
        private _useLightmapAsShadowmap;
        useLightmapAsShadowmap: boolean;
        private _diffuseFresnelParameters;
        diffuseFresnelParameters: FresnelParameters;
        private _opacityFresnelParameters;
        opacityFresnelParameters: FresnelParameters;
        private _reflectionFresnelParameters;
        reflectionFresnelParameters: FresnelParameters;
        private _refractionFresnelParameters;
        refractionFresnelParameters: FresnelParameters;
        private _emissiveFresnelParameters;
        emissiveFresnelParameters: FresnelParameters;
        private _useReflectionFresnelFromSpecular;
        useReflectionFresnelFromSpecular: boolean;
        private _useGlossinessFromSpecularMapAlpha;
        useGlossinessFromSpecularMapAlpha: boolean;
        private _maxSimultaneousLights;
        maxSimultaneousLights: number;
        /**
         * If sets to true, x component of normal map value will invert (x = 1.0 - x).
         */
        private _invertNormalMapX;
        invertNormalMapX: boolean;
        /**
         * If sets to true, y component of normal map value will invert (y = 1.0 - y).
         */
        private _invertNormalMapY;
        invertNormalMapY: boolean;
        /**
         * If sets to true and backfaceCulling is false, normals will be flipped on the backside.
         */
        private _twoSidedLighting;
        twoSidedLighting: boolean;
        /**
         * Default configuration related to image processing available in the standard Material.
         */
        protected _imageProcessingConfiguration: ImageProcessingConfiguration;
        /**
         * Gets the image processing configuration used either in this material.
         */
        /**
         * Sets the Default image processing configuration used either in the this material.
         *
         * If sets to null, the scene one is in use.
         */
        imageProcessingConfiguration: ImageProcessingConfiguration;
        /**
         * Keep track of the image processing observer to allow dispose and replace.
         */
        private _imageProcessingObserver;
        /**
         * Attaches a new image processing configuration to the Standard Material.
         * @param configuration
         */
        protected _attachImageProcessingConfiguration(configuration: ImageProcessingConfiguration): void;
        /**
         * Gets wether the color curves effect is enabled.
         */
        /**
         * Sets wether the color curves effect is enabled.
         */
        cameraColorCurvesEnabled: boolean;
        /**
         * Gets wether the color grading effect is enabled.
         */
        /**
         * Gets wether the color grading effect is enabled.
         */
        cameraColorGradingEnabled: boolean;
        /**
         * Gets wether tonemapping is enabled or not.
         */
        /**
         * Sets wether tonemapping is enabled or not
         */
        cameraToneMappingEnabled: boolean;
        /**
         * The camera exposure used on this material.
         * This property is here and not in the camera to allow controlling exposure without full screen post process.
         * This corresponds to a photographic exposure.
         */
        /**
         * The camera exposure used on this material.
         * This property is here and not in the camera to allow controlling exposure without full screen post process.
         * This corresponds to a photographic exposure.
         */
        cameraExposure: number;
        /**
         * Gets The camera contrast used on this material.
         */
        /**
         * Sets The camera contrast used on this material.
         */
        cameraContrast: number;
        /**
         * Gets the Color Grading 2D Lookup Texture.
         */
        /**
         * Sets the Color Grading 2D Lookup Texture.
         */
        cameraColorGradingTexture: BaseTexture;
        customShaderNameResolve: (shaderName: string, uniforms: string[], uniformBuffers: string[], samplers: string[], defines: StandardMaterialDefines) => string;
        protected _renderTargets: SmartArray<RenderTargetTexture>;
        protected _worldViewProjectionMatrix: Matrix;
        protected _globalAmbientColor: Color3;
        protected _useLogarithmicDepth: boolean;
        constructor(name: string, scene: Scene);
        getClassName(): string;
        useLogarithmicDepth: boolean;
        needAlphaBlending(): boolean;
        needAlphaTesting(): boolean;
        protected _shouldUseAlphaFromDiffuseTexture(): boolean;
        getAlphaTestTexture(): BaseTexture;
        /**
         * Child classes can use it to update shaders
         */
        isReadyForSubMesh(mesh: AbstractMesh, subMesh: SubMesh, useInstances?: boolean): boolean;
        buildUniformLayout(): void;
        unbind(): void;
        bindForSubMesh(world: Matrix, mesh: Mesh, subMesh: SubMesh): void;
        getAnimatables(): IAnimatable[];
        getActiveTextures(): BaseTexture[];
        hasTexture(texture: BaseTexture): boolean;
        dispose(forceDisposeEffect?: boolean, forceDisposeTextures?: boolean): void;
        clone(name: string): StandardMaterial;
        serialize(): any;
        static Parse(source: any, scene: Scene, rootUrl: string): StandardMaterial;
        static _DiffuseTextureEnabled: boolean;
        static DiffuseTextureEnabled: boolean;
        static _AmbientTextureEnabled: boolean;
        static AmbientTextureEnabled: boolean;
        static _OpacityTextureEnabled: boolean;
        static OpacityTextureEnabled: boolean;
        static _ReflectionTextureEnabled: boolean;
        static ReflectionTextureEnabled: boolean;
        static _EmissiveTextureEnabled: boolean;
        static EmissiveTextureEnabled: boolean;
        static _SpecularTextureEnabled: boolean;
        static SpecularTextureEnabled: boolean;
        static _BumpTextureEnabled: boolean;
        static BumpTextureEnabled: boolean;
        static _LightmapTextureEnabled: boolean;
        static LightmapTextureEnabled: boolean;
        static _RefractionTextureEnabled: boolean;
        static RefractionTextureEnabled: boolean;
        static _ColorGradingTextureEnabled: boolean;
        static ColorGradingTextureEnabled: boolean;
        static _FresnelEnabled: boolean;
        static FresnelEnabled: boolean;
    }
}

declare module BABYLON {
    class UniformBuffer {
        private _engine;
        private _buffer;
        private _data;
        private _bufferData;
        private _dynamic;
        private _uniformName;
        private _uniformLocations;
        private _uniformSizes;
        private _uniformLocationPointer;
        private _needSync;
        private _cache;
        private _noUBO;
        private _currentEffect;
        private static _MAX_UNIFORM_SIZE;
        private static _tempBuffer;
        /**
         * Wrapper for updateUniform.
         * @method updateMatrix3x3
         * @param {string} name Name of the uniform, as used in the uniform block in the shader.
         * @param {Float32Array} matrix
         */
        updateMatrix3x3: (name: string, matrix: Float32Array) => void;
        /**
         * Wrapper for updateUniform.
         * @param {string} name Name of the uniform, as used in the uniform block in the shader.
         * @param {Float32Array} matrix
         */
        updateMatrix2x2: (name: string, matrix: Float32Array) => void;
        /**
         * Wrapper for updateUniform.
         * @param {string} name Name of the uniform, as used in the uniform block in the shader.
         * @param {number} x
         */
        updateFloat: (name: string, x: number) => void;
        /**
         * Wrapper for updateUniform.
         * @param {string} name Name of the uniform, as used in the uniform block in the shader.
         * @param {number} x
         * @param {number} y
         * @param {string} [suffix] Suffix to add to the uniform name.
         */
        updateFloat2: (name: string, x: number, y: number, suffix?: string) => void;
        /**
         * Wrapper for updateUniform.
         * @param {string} name Name of the uniform, as used in the uniform block in the shader.
         * @param {number} x
         * @param {number} y
         * @param {number} z
         * @param {string} [suffix] Suffix to add to the uniform name.
         */
        updateFloat3: (name: string, x: number, y: number, z: number, suffix?: string) => void;
        /**
         * Wrapper for updateUniform.
         * @param {string} name Name of the uniform, as used in the uniform block in the shader.
         * @param {number} x
         * @param {number} y
         * @param {number} z
         * @param {number} w
         * @param {string} [suffix] Suffix to add to the uniform name.
         */
        updateFloat4: (name: string, x: number, y: number, z: number, w: number, suffix?: string) => void;
        /**
         * Wrapper for updateUniform.
         * @param {string} name Name of the uniform, as used in the uniform block in the shader.
         * @param {Matrix} A 4x4 matrix.
         */
        updateMatrix: (name: string, mat: Matrix) => void;
        /**
         * Wrapper for updateUniform.
         * @param {string} name Name of the uniform, as used in the uniform block in the shader.
         * @param {Vector3} vector
         */
        updateVector3: (name: string, vector: Vector3) => void;
        /**
         * Wrapper for updateUniform.
         * @param {string} name Name of the uniform, as used in the uniform block in the shader.
         * @param {Vector4} vector
         */
        updateVector4: (name: string, vector: Vector4) => void;
        /**
         * Wrapper for updateUniform.
         * @param {string} name Name of the uniform, as used in the uniform block in the shader.
         * @param {Color3} color
         * @param {string} [suffix] Suffix to add to the uniform name.
         */
        updateColor3: (name: string, color: Color3, suffix?: string) => void;
        /**
         * Wrapper for updateUniform.
         * @param {string} name Name of the uniform, as used in the uniform block in the shader.
         * @param {Color3} color
         * @param {number} alpha
         * @param {string} [suffix] Suffix to add to the uniform name.
         */
        updateColor4: (name: string, color: Color3, alpha: number, suffix?: string) => void;
        /**
         * Uniform buffer objects.
         *
         * Handles blocks of uniform on the GPU.
         *
         * If WebGL 2 is not available, this class falls back on traditionnal setUniformXXX calls.
         *
         * For more information, please refer to :
         * https://www.khronos.org/opengl/wiki/Uniform_Buffer_Object
         */
        constructor(engine: Engine, data?: number[], dynamic?: boolean);
        /**
         * Indicates if the buffer is using the WebGL2 UBO implementation,
         * or just falling back on setUniformXXX calls.
         */
        readonly useUbo: boolean;
        /**
         * Indicates if the WebGL underlying uniform buffer is in sync
         * with the javascript cache data.
         */
        readonly isSync: boolean;
        /**
         * Indicates if the WebGL underlying uniform buffer is dynamic.
         * Also, a dynamic UniformBuffer will disable cache verification and always
         * update the underlying WebGL uniform buffer to the GPU.
         */
        isDynamic(): boolean;
        /**
         * The data cache on JS side.
         */
        getData(): Float32Array;
        /**
         * The underlying WebGL Uniform buffer.
         */
        getBuffer(): WebGLBuffer;
        /**
         * std140 layout specifies how to align data within an UBO structure.
         * See https://khronos.org/registry/OpenGL/specs/gl/glspec45.core.pdf#page=159
         * for specs.
         */
        private _fillAlignment(size);
        /**
         * Adds an uniform in the buffer.
         * Warning : the subsequents calls of this function must be in the same order as declared in the shader
         * for the layout to be correct !
         * @param {string} name Name of the uniform, as used in the uniform block in the shader.
         * @param {number|number[]} size Data size, or data directly.
         */
        addUniform(name: string, size: number | number[]): void;
        /**
         * Wrapper for addUniform.
         * @param {string} name Name of the uniform, as used in the uniform block in the shader.
         * @param {Matrix} mat A 4x4 matrix.
         */
        addMatrix(name: string, mat: Matrix): void;
        /**
         * Wrapper for addUniform.
         * @param {string} name Name of the uniform, as used in the uniform block in the shader.
         * @param {number} x
         * @param {number} y
         */
        addFloat2(name: string, x: number, y: number): void;
        /**
         * Wrapper for addUniform.
         * @param {string} name Name of the uniform, as used in the uniform block in the shader.
         * @param {number} x
         * @param {number} y
         * @param {number} z
         */
        addFloat3(name: string, x: number, y: number, z: number): void;
        /**
         * Wrapper for addUniform.
         * @param {string} name Name of the uniform, as used in the uniform block in the shader.
         * @param {Color3} color
         */
        addColor3(name: string, color: Color3): void;
        /**
         * Wrapper for addUniform.
         * @param {string} name Name of the uniform, as used in the uniform block in the shader.
         * @param {Color3} color
         * @param {number} alpha
         */
        addColor4(name: string, color: Color3, alpha: number): void;
        /**
         * Wrapper for addUniform.
         * @param {string} name Name of the uniform, as used in the uniform block in the shader.
         * @param {Vector3} vector
         */
        addVector3(name: string, vector: Vector3): void;
        /**
         * Wrapper for addUniform.
         * @param {string} name Name of the uniform, as used in the uniform block in the shader.
         */
        addMatrix3x3(name: string): void;
        /**
         * Wrapper for addUniform.
         * @param {string} name Name of the uniform, as used in the uniform block in the shader.
         */
        addMatrix2x2(name: string): void;
        /**
         * Effectively creates the WebGL Uniform Buffer, once layout is completed with `addUniform`.
         */
        create(): void;
        /**
         * Updates the WebGL Uniform Buffer on the GPU.
         * If the `dynamic` flag is set to true, no cache comparison is done.
         * Otherwise, the buffer will be updated only if the cache differs.
         */
        update(): void;
        /**
         * Updates the value of an uniform. The `update` method must be called afterwards to make it effective in the GPU.
         * @param {string} uniformName Name of the uniform, as used in the uniform block in the shader.
         * @param {number[]|Float32Array} data Flattened data
         * @param {number} size Size of the data.
         */
        updateUniform(uniformName: string, data: number[] | Float32Array, size: number): void;
        private _updateMatrix3x3ForUniform(name, matrix);
        private _updateMatrix3x3ForEffect(name, matrix);
        private _updateMatrix2x2ForEffect(name, matrix);
        private _updateMatrix2x2ForUniform(name, matrix);
        private _updateFloatForEffect(name, x);
        private _updateFloatForUniform(name, x);
        private _updateFloat2ForEffect(name, x, y, suffix?);
        private _updateFloat2ForUniform(name, x, y, suffix?);
        private _updateFloat3ForEffect(name, x, y, z, suffix?);
        private _updateFloat3ForUniform(name, x, y, z, suffix?);
        private _updateFloat4ForEffect(name, x, y, z, w, suffix?);
        private _updateFloat4ForUniform(name, x, y, z, w, suffix?);
        private _updateMatrixForEffect(name, mat);
        private _updateMatrixForUniform(name, mat);
        private _updateVector3ForEffect(name, vector);
        private _updateVector3ForUniform(name, vector);
        private _updateVector4ForEffect(name, vector);
        private _updateVector4ForUniform(name, vector);
        private _updateColor3ForEffect(name, color, suffix?);
        private _updateColor3ForUniform(name, color, suffix?);
        private _updateColor4ForEffect(name, color, alpha, suffix?);
        private _updateColor4ForUniform(name, color, alpha, suffix?);
        /**
         * Sets a sampler uniform on the effect.
         * @param {string} name Name of the sampler.
         * @param {Texture} texture
         */
        setTexture(name: string, texture: BaseTexture): void;
        /**
         * Directly updates the value of the uniform in the cache AND on the GPU.
         * @param {string} uniformName Name of the uniform, as used in the uniform block in the shader.
         * @param {number[]|Float32Array} data Flattened data
         */
        updateUniformDirectly(uniformName: string, data: number[] | Float32Array): void;
        /**
         * Binds this uniform buffer to an effect.
         * @param {Effect} effect
         * @param {string} name Name of the uniform block in the shader.
         */
        bindToEffect(effect: Effect, name: string): void;
        /**
         * Disposes the uniform buffer.
         */
        dispose(): void;
    }
}

declare module BABYLON {
    interface ILoadingScreen {
        displayLoadingUI: () => void;
        hideLoadingUI: () => void;
        loadingUIBackgroundColor: string;
        loadingUIText: string;
    }
    class DefaultLoadingScreen implements ILoadingScreen {
        private _renderingCanvas;
        private _loadingText;
        private _loadingDivBackgroundColor;
        private _loadingDiv;
        private _loadingTextDiv;
        constructor(_renderingCanvas: HTMLCanvasElement, _loadingText?: string, _loadingDivBackgroundColor?: string);
        displayLoadingUI(): void;
        hideLoadingUI(): void;
        loadingUIText: string;
        loadingUIBackgroundColor: string;
        private _resizeLoadingUI;
    }
}

declare module BABYLON {
    interface ISceneLoaderPluginExtensions {
        [extension: string]: {
            isBinary: boolean;
        };
    }
    interface ISceneLoaderPlugin {
        extensions: string | ISceneLoaderPluginExtensions;
        importMesh: (meshesNames: any, scene: Scene, data: any, rootUrl: string, meshes: AbstractMesh[], particleSystems: ParticleSystem[], skeletons: Skeleton[]) => boolean;
        load: (scene: Scene, data: string, rootUrl: string) => boolean;
        canDirectLoad?: (data: string) => boolean;
    }
    interface ISceneLoaderPluginAsync {
        extensions: string | ISceneLoaderPluginExtensions;
        importMeshAsync: (meshesNames: any, scene: Scene, data: any, rootUrl: string, onsuccess: (meshes: AbstractMesh[], particleSystems: ParticleSystem[], skeletons: Skeleton[]) => void, onerror: () => void) => void;
        loadAsync: (scene: Scene, data: string, rootUrl: string, onsuccess: () => void, onerror: () => void) => void;
        canDirectLoad?: (data: string) => boolean;
    }
    class SceneLoader {
        private static _ForceFullSceneLoadingForIncremental;
        private static _ShowLoadingScreen;
        static readonly NO_LOGGING: number;
        static readonly MINIMAL_LOGGING: number;
        static readonly SUMMARY_LOGGING: number;
        static readonly DETAILED_LOGGING: number;
        private static _loggingLevel;
        static ForceFullSceneLoadingForIncremental: boolean;
        static ShowLoadingScreen: boolean;
        static loggingLevel: number;
        private static _registeredPlugins;
        private static _getDefaultPlugin();
        private static _getPluginForExtension(extension);
        private static _getPluginForDirectLoad(data);
        private static _getPluginForFilename(sceneFilename);
        private static _getDirectLoad(sceneFilename);
        static GetPluginForExtension(extension: string): ISceneLoaderPlugin | ISceneLoaderPluginAsync;
        static RegisterPlugin(plugin: ISceneLoaderPlugin | ISceneLoaderPluginAsync): void;
        static ImportMesh(meshesNames: any, rootUrl: string, sceneFilename: string, scene: Scene, onsuccess?: (meshes: AbstractMesh[], particleSystems: ParticleSystem[], skeletons: Skeleton[]) => void, progressCallBack?: () => void, onerror?: (scene: Scene, message: string, exception?: any) => void): void;
        /**
        * Load a scene
        * @param rootUrl a string that defines the root url for scene and resources
        * @param sceneFilename a string that defines the name of the scene file. can start with "data:" following by the stringified version of the scene
        * @param engine is the instance of BABYLON.Engine to use to create the scene
        */
        static Load(rootUrl: string, sceneFilename: any, engine: Engine, onsuccess?: (scene: Scene) => void, progressCallBack?: any, onerror?: (scene: Scene) => void): void;
        /**
        * Append a scene
        * @param rootUrl a string that defines the root url for scene and resources
        * @param sceneFilename a string that defines the name of the scene file. can start with "data:" following by the stringified version of the scene
        * @param scene is the instance of BABYLON.Scene to append to
        */
        static Append(rootUrl: string, sceneFilename: any, scene: Scene, onsuccess?: (scene: Scene) => void, progressCallBack?: any, onerror?: (scene: Scene) => void): void;
    }
}

declare module BABYLON {
    class SIMDHelper {
        private static _isEnabled;
        static readonly IsEnabled: boolean;
        static DisableSIMD(): void;
        static EnableSIMD(): void;
    }
}

declare module BABYLON {
    const ToGammaSpace: number;
    const ToLinearSpace = 2.2;
    const Epsilon = 0.001;
    class MathTools {
        /**
         * Boolean : true if the absolute difference between a and b is lower than epsilon (default = 1.401298E-45)
         */
        static WithinEpsilon(a: number, b: number, epsilon?: number): boolean;
        /**
         * Returns a string : the upper case translation of the number i to hexadecimal.
         */
        static ToHex(i: number): string;
        /**
         * Returns -1 if value is negative and +1 is value is positive.
         * Returns the value itself if it's equal to zero.
         */
        static Sign(value: number): number;
        /**
         * Returns the value itself if it's between min and max.
         * Returns min if the value is lower than min.
         * Returns max if the value is greater than max.
         */
        static Clamp(value: number, min?: number, max?: number): number;
        /**
         * Returns the log2 of value.
         */
        static Log2(value: number): number;
    }
    class Scalar {
        /**
         * Creates a new scalar with values linearly interpolated of "amount" between the start scalar and the end scalar.
         */
        static Lerp(start: number, end: number, amount: number): number;
        /**
         * Returns a new scalar located for "amount" (float) on the Hermite spline defined by the scalars "value1", "value3", "tangent1", "tangent2".
         */
        static Hermite(value1: number, tangent1: number, value2: number, tangent2: number, amount: number): number;
    }
    class Color3 {
        r: number;
        g: number;
        b: number;
        /**
         * Creates a new Color3 object from red, green, blue values, all between 0 and 1.
         */
        constructor(r?: number, g?: number, b?: number);
        /**
         * Returns a string with the Color3 current values.
         */
        toString(): string;
        /**
         * Returns the string "Color3".
         */
        getClassName(): string;
        /**
         * Returns the Color3 hash code.
         */
        getHashCode(): number;
        /**
         * Stores in the passed array from the passed starting index the red, green, blue values as successive elements.
         * Returns the Color3.
         */
        toArray(array: number[] | Float32Array, index?: number): Color3;
        /**
         * Returns a new Color4 object from the current Color3 and the passed alpha.
         */
        toColor4(alpha?: number): Color4;
        /**
         * Returns a new array populated with 3 numeric elements : red, green and blue values.
         */
        asArray(): number[];
        /**
         * Returns the luminance value (float).
         */
        toLuminance(): number;
        /**
         * Multiply each Color3 rgb values by the passed Color3 rgb values in a new Color3 object.
         * Returns this new object.
         */
        multiply(otherColor: Color3): Color3;
        /**
         * Multiply the rgb values of the Color3 and the passed Color3 and stores the result in the object "result".
         * Returns the current Color3.
         */
        multiplyToRef(otherColor: Color3, result: Color3): Color3;
        /**
         * Boolean : True if the rgb values are equal to the passed ones.
         */
        equals(otherColor: Color3): boolean;
        /**
         * Boolean : True if the rgb values are equal to the passed ones.
         */
        equalsFloats(r: number, g: number, b: number): boolean;
        /**
         * Multiplies in place each rgb value by scale.
         * Returns the updated Color3.
         */
        scale(scale: number): Color3;
        /**
         * Multiplies the rgb values by scale and stores the result into "result".
         * Returns the unmodified current Color3.
         */
        scaleToRef(scale: number, result: Color3): Color3;
        /**
         * Returns a new Color3 set with the added values of the current Color3 and of the passed one.
         */
        add(otherColor: Color3): Color3;
        /**
         * Stores the result of the addition of the current Color3 and passed one rgb values into "result".
         * Returns the unmodified current Color3.
         */
        addToRef(otherColor: Color3, result: Color3): Color3;
        /**
         * Returns a new Color3 set with the subtracted values of the passed one from the current Color3 .
         */
        subtract(otherColor: Color3): Color3;
        /**
         * Stores the result of the subtraction of passed one from the current Color3 rgb values into "result".
         * Returns the unmodified current Color3.
         */
        subtractToRef(otherColor: Color3, result: Color3): Color3;
        /**
         * Returns a new Color3 copied the current one.
         */
        clone(): Color3;
        /**
         * Copies the rgb values from the source in the current Color3.
         * Returns the updated Color3.
         */
        copyFrom(source: Color3): Color3;
        /**
         * Updates the Color3 rgb values from the passed floats.
         * Returns the Color3.
         */
        copyFromFloats(r: number, g: number, b: number): Color3;
        /**
         * Updates the Color3 rgb values from the passed floats.
         * Returns the Color3.
         */
        set(r: number, g: number, b: number): Color3;
        /**
         * Returns the Color3 hexadecimal code as a string.
         */
        toHexString(): string;
        /**
         * Returns a new Color3 converted to linear space.
         */
        toLinearSpace(): Color3;
        /**
         * Converts the Color3 values to linear space and stores the result in "convertedColor".
         * Returns the unmodified Color3.
         */
        toLinearSpaceToRef(convertedColor: Color3): Color3;
        /**
         * Returns a new Color3 converted to gamma space.
         */
        toGammaSpace(): Color3;
        /**
         * Converts the Color3 values to gamma space and stores the result in "convertedColor".
         * Returns the unmodified Color3.
         */
        toGammaSpaceToRef(convertedColor: Color3): Color3;
        /**
         * Creates a new Color3 from the string containing valid hexadecimal values.
         */
        static FromHexString(hex: string): Color3;
        /**
         * Creates a new Vector3 from the startind index of the passed array.
         */
        static FromArray(array: ArrayLike<number>, offset?: number): Color3;
        /**
         * Creates a new Color3 from integer values ( < 256).
         */
        static FromInts(r: number, g: number, b: number): Color3;
        /**
         * Creates a new Color3 with values linearly interpolated of "amount" between the start Color3 and the end Color3.
         */
        static Lerp(start: Color3, end: Color3, amount: number): Color3;
        static Red(): Color3;
        static Green(): Color3;
        static Blue(): Color3;
        static Black(): Color3;
        static White(): Color3;
        static Purple(): Color3;
        static Magenta(): Color3;
        static Yellow(): Color3;
        static Gray(): Color3;
        static Random(): Color3;
    }
    class Color4 {
        r: number;
        g: number;
        b: number;
        a: number;
        /**
         * Creates a new Color4 object from the passed float values ( < 1) : red, green, blue, alpha.
         */
        constructor(r: number, g: number, b: number, a: number);
        /**
         * Adds in place the passed Color4 values to the current Color4.
         * Returns the updated Color4.
         */
        addInPlace(right: any): Color4;
        /**
         * Returns a new array populated with 4 numeric elements : red, green, blue, alpha values.
         */
        asArray(): number[];
        /**
         * Stores from the starting index in the passed array the Color4 successive values.
         * Returns the Color4.
         */
        toArray(array: number[], index?: number): Color4;
        /**
         * Returns a new Color4 set with the added values of the current Color4 and of the passed one.
         */
        add(right: Color4): Color4;
        /**
         * Returns a new Color4 set with the subtracted values of the passed one from the current Color4.
         */
        subtract(right: Color4): Color4;
        /**
         * Subtracts the passed ones from the current Color4 values and stores the results in "result".
         * Returns the Color4.
         */
        subtractToRef(right: Color4, result: Color4): Color4;
        /**
         * Creates a new Color4 with the current Color4 values multiplied by scale.
         */
        scale(scale: number): Color4;
        /**
         * Multiplies the current Color4 values by scale and stores the result in "result".
         * Returns the Color4.
         */
        scaleToRef(scale: number, result: Color4): Color4;
        /**
          * Multipy an RGBA Color4 value by another and return a new Color4 object
          * @param color The Color4 (RGBA) value to multiply by
          * @returns A new Color4.
          */
        multiply(color: Color4): Color4;
        /**
         * Multipy an RGBA Color4 value by another and push the result in a reference value
         * @param color The Color4 (RGBA) value to multiply by
         * @param result The Color4 (RGBA) to fill the result in
         * @returns the result Color4.
         */
        multiplyToRef(color: Color4, result: Color4): Color4;
        /**
         * Returns a string with the Color4 values.
         */
        toString(): string;
        /**
         * Returns the string "Color4"
         */
        getClassName(): string;
        /**
         * Return the Color4 hash code as a number.
         */
        getHashCode(): number;
        /**
         * Creates a new Color4 copied from the current one.
         */
        clone(): Color4;
        /**
         * Copies the passed Color4 values into the current one.
         * Returns the updated Color4.
         */
        copyFrom(source: Color4): Color4;
        /**
         * Copies the passed float values into the current one.
         * Returns the updated Color4.
         */
        copyFromFloats(r: number, g: number, b: number, a: number): Color4;
        /**
         * Copies the passed float values into the current one.
         * Returns the updated Color4.
         */
        set(r: number, g: number, b: number, a: number): Color4;
        /**
         * Returns a string containing the hexadecimal Color4 code.
         */
        toHexString(): string;
        /**
         * Creates a new Color4 from the valid hexadecimal value contained in the passed string.
         */
        static FromHexString(hex: string): Color4;
        /**
         * Creates a new Color4 object set with the linearly interpolated values of "amount" between the left Color4 and the right Color4.
         */
        static Lerp(left: Color4, right: Color4, amount: number): Color4;
        /**
         * Set the passed "result" with the linearly interpolated values of "amount" between the left Color4 and the right Color4.
         */
        static LerpToRef(left: Color4, right: Color4, amount: number, result: Color4): void;
        /**
         * Creates a new Color4 from the starting index element of the passed array.
         */
        static FromArray(array: ArrayLike<number>, offset?: number): Color4;
        /**
         * Creates a new Color4 from the passed integers ( < 256 ).
         */
        static FromInts(r: number, g: number, b: number, a: number): Color4;
        static CheckColors4(colors: number[], count: number): number[];
    }
    class Vector2 {
        x: number;
        y: number;
        /**
         * Creates a new Vector2 from the passed x and y coordinates.
         */
        constructor(x: number, y: number);
        /**
         * Returns a string with the Vector2 coordinates.
         */
        toString(): string;
        /**
         * Returns the string "Vector2"
         */
        getClassName(): string;
        /**
         * Returns the Vector2 hash code as a number.
         */
        getHashCode(): number;
        /**
         * Sets the Vector2 coordinates in the passed array or Float32Array from the passed index.
         * Returns the Vector2.
         */
        toArray(array: number[] | Float32Array, index?: number): Vector2;
        /**
         * Returns a new array with 2 elements : the Vector2 coordinates.
         */
        asArray(): number[];
        /**
         *  Sets the Vector2 coordinates with the passed Vector2 coordinates.
         * Returns the updated Vector2.
         */
        copyFrom(source: Vector2): Vector2;
        /**
         * Sets the Vector2 coordinates with the passed floats.
         * Returns the updated Vector2.
         */
        copyFromFloats(x: number, y: number): Vector2;
        /**
         * Sets the Vector2 coordinates with the passed floats.
         * Returns the updated Vector2.
         */
        set(x: number, y: number): Vector2;
        /**
         * Returns a new Vector2 set with the addition of the current Vector2 and the passed one coordinates.
         */
        add(otherVector: Vector2): Vector2;
        /**
         * Sets the "result" coordinates with the addition of the current Vector2 and the passed one coordinates.
         * Returns the Vector2.
         */
        addToRef(otherVector: Vector2, result: Vector2): Vector2;
        /**
         * Set the Vector2 coordinates by adding the passed Vector2 coordinates.
         * Returns the updated Vector2.
         */
        addInPlace(otherVector: Vector2): Vector2;
        /**
         * Returns a new Vector2 by adding the current Vector2 coordinates to the passed Vector3 x, y coordinates.
         */
        addVector3(otherVector: Vector3): Vector2;
        /**
         * Returns a new Vector2 set with the subtracted coordinates of the passed one from the current Vector2.
         */
        subtract(otherVector: Vector2): Vector2;
        /**
         * Sets the "result" coordinates with the subtraction of the passed one from the current Vector2 coordinates.
         * Returns the Vector2.
         */
        subtractToRef(otherVector: Vector2, result: Vector2): Vector2;
        /**
         * Sets the current Vector2 coordinates by subtracting from it the passed one coordinates.
         * Returns the updated Vector2.
         */
        subtractInPlace(otherVector: Vector2): Vector2;
        /**
         * Multiplies in place the current Vector2 coordinates by the passed ones.
         * Returns the updated Vector2.
         */
        multiplyInPlace(otherVector: Vector2): Vector2;
        /**
         * Returns a new Vector2 set with the multiplication of the current Vector2 and the passed one coordinates.
         */
        multiply(otherVector: Vector2): Vector2;
        /**
         * Sets "result" coordinates with the multiplication of the current Vector2 and the passed one coordinates.
         * Returns the Vector2.
         */
        multiplyToRef(otherVector: Vector2, result: Vector2): Vector2;
        /**
         * Returns a new Vector2 set with the Vector2 coordinates multiplied by the passed floats.
         */
        multiplyByFloats(x: number, y: number): Vector2;
        /**
         * Returns a new Vector2 set with the Vector2 coordinates divided by the passed one coordinates.
         */
        divide(otherVector: Vector2): Vector2;
        /**
         * Sets the "result" coordinates with the Vector2 divided by the passed one coordinates.
         * Returns the Vector2.
         */
        divideToRef(otherVector: Vector2, result: Vector2): Vector2;
        /**
         * Returns a new Vector2 with current Vector2 negated coordinates.
         */
        negate(): Vector2;
        /**
         * Multiply the Vector2 coordinates by scale.
         * Returns the updated Vector2.
         */
        scaleInPlace(scale: number): Vector2;
        /**
         * Returns a new Vector2 scaled by "scale" from the current Vector2.
         */
        scale(scale: number): Vector2;
        /**
         * Boolean : True if the passed vector coordinates strictly equal the current Vector2 ones.
         */
        equals(otherVector: Vector2): boolean;
        /**
         * Boolean : True if the passed vector coordinates are close to the current ones by a distance of epsilon.
         */
        equalsWithEpsilon(otherVector: Vector2, epsilon?: number): boolean;
        /**
         * Returns the vector length (float).
         */
        length(): number;
        /**
         * Returns the vector squared length (float);
         */
        lengthSquared(): number;
        /**
         * Normalize the vector.
         * Returns the updated Vector2.
         */
        normalize(): Vector2;
        /**
         * Returns a new Vector2 copied from the Vector2.
         */
        clone(): Vector2;
        /**
         * Returns a new Vector2(0, 0)
         */
        static Zero(): Vector2;
        /**
         * Returns a new Vector2(1, 1)
         */
        static One(): Vector2;
        /**
         * Returns a new Vector2 set from the passed index element of the passed array.
         */
        static FromArray(array: ArrayLike<number>, offset?: number): Vector2;
        /**
         * Sets "result" from the passed index element of the passed array.
         */
        static FromArrayToRef(array: ArrayLike<number>, offset: number, result: Vector2): void;
        /**
         * Retuns a new Vector2 located for "amount" (float) on the CatmullRom  spline defined by the passed four Vector2.
         */
        static CatmullRom(value1: Vector2, value2: Vector2, value3: Vector2, value4: Vector2, amount: number): Vector2;
        /**
         * Returns a new Vector2 set with same the coordinates than "value" ones if the vector "value" is in the square defined by "min" and "max".
         * If a coordinate of "value" is lower than "min" coordinates, the returned Vector2 is given this "min" coordinate.
         * If a coordinate of "value" is greater than "max" coordinates, the returned Vector2 is given this "max" coordinate.
         */
        static Clamp(value: Vector2, min: Vector2, max: Vector2): Vector2;
        /**
         * Returns a new Vector2 located for "amount" (float) on the Hermite spline defined by the vectors "value1", "value3", "tangent1", "tangent2".
         */
        static Hermite(value1: Vector2, tangent1: Vector2, value2: Vector2, tangent2: Vector2, amount: number): Vector2;
        /**
         * Returns a new Vector2 located for "amount" (float) on the linear interpolation between the vector "start" adn the vector "end".
         */
        static Lerp(start: Vector2, end: Vector2, amount: number): Vector2;
        /**
         * Returns the dot product (float) of the vector "left" and the vector "right".
         */
        static Dot(left: Vector2, right: Vector2): number;
        /**
         * Returns a new Vector2 equal to the normalized passed vector.
         */
        static Normalize(vector: Vector2): Vector2;
        /**
         * Returns a new Vecto2 set with the minimal coordinate values from the "left" and "right" vectors.
         */
        static Minimize(left: Vector2, right: Vector2): Vector2;
        /**
         * Returns a new Vecto2 set with the maximal coordinate values from the "left" and "right" vectors.
         */
        static Maximize(left: Vector2, right: Vector2): Vector2;
        /**
         * Returns a new Vecto2 set with the transformed coordinates of the passed vector by the passed transformation matrix.
         */
        static Transform(vector: Vector2, transformation: Matrix): Vector2;
        /**
         * Transforms the passed vector coordinates by the passed transformation matrix and stores the result in the vector "result" coordinates.
         */
        static TransformToRef(vector: Vector2, transformation: Matrix, result: Vector2): void;
        /**
         * Boolean : True if the point "p" is in the triangle defined by the vertors "p0", "p1", "p2"
         */
        static PointInTriangle(p: Vector2, p0: Vector2, p1: Vector2, p2: Vector2): boolean;
        /**
         * Returns the distance (float) between the vectors "value1" and "value2".
         */
        static Distance(value1: Vector2, value2: Vector2): number;
        /**
         * Returns the squared distance (float) between the vectors "value1" and "value2".
         */
        static DistanceSquared(value1: Vector2, value2: Vector2): number;
        /**
         * Returns a new Vecto2 located at the center of the vectors "value1" and "value2".
         */
        static Center(value1: Vector2, value2: Vector2): Vector2;
        /**
         * Returns the shortest distance (float) between the point "p" and the segment defined by the two points "segA" and "segB".
         */
        static DistanceOfPointFromSegment(p: Vector2, segA: Vector2, segB: Vector2): number;
    }
    class Vector3 {
        x: number;
        y: number;
        z: number;
        /**
         * Creates a new Vector3 object from the passed x, y, z (floats) coordinates.
         * A Vector3 is the main object used in 3D geometry.
         * It can represent etiher the coordinates of a point the space, either a direction.
         */
        constructor(x: number, y: number, z: number);
        /**
         * Returns a string with the Vector3 coordinates.
         */
        toString(): string;
        /**
         * Returns the string "Vector3"
         */
        getClassName(): string;
        /**
         * Returns the Vector hash code.
         */
        getHashCode(): number;
        /**
         * Returns a new array with three elements : the coordinates the Vector3.
         */
        asArray(): number[];
        /**
         * Populates the passed array or Float32Array from the passed index with the successive coordinates of the Vector3.
         * Returns the Vector3.
         */
        toArray(array: number[] | Float32Array, index?: number): Vector3;
        /**
         * Returns a new Quaternion object, computed from the Vector3 coordinates.
         */
        toQuaternion(): Quaternion;
        /**
         * Adds the passed vector to the current Vector3.
         * Returns the updated Vector3.
         */
        addInPlace(otherVector: Vector3): Vector3;
        /**
         * Returns a new Vector3, result of the addition the current Vector3 and the passed vector.
         */
        add(otherVector: Vector3): Vector3;
        /**
         * Adds the current Vector3 to the passed one and stores the result in the vector "result".
         * Returns the current Vector3.
         */
        addToRef(otherVector: Vector3, result: Vector3): Vector3;
        /**
         * Subtract the passed vector from the current Vector3.
         * Returns the updated Vector3.
         */
        subtractInPlace(otherVector: Vector3): Vector3;
        /**
         * Returns a new Vector3, result of the subtraction of the passed vector from the current Vector3.
         */
        subtract(otherVector: Vector3): Vector3;
        /**
         * Subtracts the passed vector from the current Vector3 and stores the result in the vector "result".
         * Returns the current Vector3.
         */
        subtractToRef(otherVector: Vector3, result: Vector3): Vector3;
        /**
         * Returns a new Vector3 set with the subtraction of the passed floats from the current Vector3 coordinates.
         */
        subtractFromFloats(x: number, y: number, z: number): Vector3;
        /**
         * Subtracts the passed floats from the current Vector3 coordinates and set the passed vector "result" with this result.
         * Returns the current Vector3.
         */
        subtractFromFloatsToRef(x: number, y: number, z: number, result: Vector3): Vector3;
        /**
         * Returns a new Vector3 set with the current Vector3 negated coordinates.
         */
        negate(): Vector3;
        /**
         * Multiplies the Vector3 coordinates by the float "scale".
         * Returns the updated Vector3.
         */
        scaleInPlace(scale: number): Vector3;
        /**
         * Returns a new Vector3 set with the current Vector3 coordinates multiplied by the float "scale".
         */
        scale(scale: number): Vector3;
        /**
         * Multiplies the current Vector3 coordinates by the float "scale" and stores the result in the passed vector "result" coordinates.
         * Returns the current Vector3.
         */
        scaleToRef(scale: number, result: Vector3): Vector3;
        /**
         * Boolean : True if the current Vector3 and the passed vector coordinates are strictly equal.
         */
        equals(otherVector: Vector3): boolean;
        /**
         * Boolean : True if the current Vector3 and the passed vector coordinates are distant less than epsilon.
         */
        equalsWithEpsilon(otherVector: Vector3, epsilon?: number): boolean;
        /**
         * Boolean : True if the current Vector3 coordinate equal the passed floats.
         */
        equalsToFloats(x: number, y: number, z: number): boolean;
        /**
         * Muliplies the current Vector3 coordinates by the passed ones.
         * Returns the updated Vector3.
         */
        multiplyInPlace(otherVector: Vector3): Vector3;
        /**
         * Returns a new Vector3, result of the multiplication of the current Vector3 by the passed vector.
         */
        multiply(otherVector: Vector3): Vector3;
        /**
         * Multiplies the current Vector3 by the passed one and stores the result in the passed vector "result".
         * Returns the current Vector3.
         */
        multiplyToRef(otherVector: Vector3, result: Vector3): Vector3;
        /**
         * Returns a new Vector3 set witth the result of the mulliplication of the current Vector3 coordinates by the passed floats.
         */
        multiplyByFloats(x: number, y: number, z: number): Vector3;
        /**
         * Returns a new Vector3 set witth the result of the division of the current Vector3 coordinates by the passed ones.
         */
        divide(otherVector: Vector3): Vector3;
        /**
         * Divides the current Vector3 coordinates by the passed ones and stores the result in the passed vector "result".
         * Returns the current Vector3.
         */
        divideToRef(otherVector: Vector3, result: Vector3): Vector3;
        /**
         * Updates the current Vector3 with the minimal coordinate values between its and the passed vector ones.
         * Returns the updated Vector3.
         */
        MinimizeInPlace(other: Vector3): Vector3;
        /**
         * Updates the current Vector3 with the maximal coordinate values between its and the passed vector ones.
         * Returns the updated Vector3.
         */
        MaximizeInPlace(other: Vector3): Vector3;
        /**
         * Returns the length of the Vector3 (float).
         */
        length(): number;
        /**
         * Returns the squared length of the Vector3 (float).
         */
        lengthSquared(): number;
        /**
         * Normalize the current Vector3.
         * Returns the updated Vector3.
         */
        normalize(): Vector3;
        /**
         * Returns a new Vector3 copied from the current Vector3.
         */
        clone(): Vector3;
        /**
         * Copies the passed vector coordinates to the current Vector3 ones.
         * Returns the updated Vector3.
         */
        copyFrom(source: Vector3): Vector3;
        /**
         * Copies the passed floats to the current Vector3 coordinates.
         * Returns the updated Vector3.
         */
        copyFromFloats(x: number, y: number, z: number): Vector3;
        /**
         * Copies the passed floats to the current Vector3 coordinates.
         * Returns the updated Vector3.
         */
        set(x: number, y: number, z: number): Vector3;
        /**
         *
         */
        static GetClipFactor(vector0: Vector3, vector1: Vector3, axis: Vector3, size: any): number;
        /**
         * Returns a new Vector3 set from the index "offset" of the passed array.
         */
        static FromArray(array: ArrayLike<number>, offset?: number): Vector3;
        /**
         * Returns a new Vector3 set from the index "offset" of the passed Float32Array.
         * This function is deprecated.  Use FromArray instead.
         */
        static FromFloatArray(array: Float32Array, offset?: number): Vector3;
        /**
         * Sets the passed vector "result" with the element values from the index "offset" of the passed array.
         */
        static FromArrayToRef(array: ArrayLike<number>, offset: number, result: Vector3): void;
        /**
         * Sets the passed vector "result" with the element values from the index "offset" of the passed Float32Array.
         * This function is deprecated.  Use FromArrayToRef instead.
         */
        static FromFloatArrayToRef(array: Float32Array, offset: number, result: Vector3): void;
        /**
         * Sets the passed vector "result" with the passed floats.
         */
        static FromFloatsToRef(x: number, y: number, z: number, result: Vector3): void;
        /**
         * Returns a new Vector3 set to (0.0, 0.0, 0.0).
         */
        static Zero(): Vector3;
        /**
         * Returns a new Vector3 set to (1.0, 1.0, 1.0).
         */
        static One(): Vector3;
        /**
         * Returns a new Vector3 set to (0.0, 1.0, 0.0)
         */
        static Up(): Vector3;
        /**
         * Returns a new Vector3 set to (0.0, 0.0, 1.0)
         */
        static Forward(): Vector3;
        /**
         * Returns a new Vector3 set to (1.0, 0.0, 0.0)
         */
        static Right(): Vector3;
        /**
         * Returns a new Vector3 set to (-1.0, 0.0, 0.0)
         */
        static Left(): Vector3;
        /**
         * Returns a new Vector3 set with the result of the transformation by the passed matrix of the passed vector.
         * This method computes tranformed coordinates only, not transformed direction vectors.
         */
        static TransformCoordinates(vector: Vector3, transformation: Matrix): Vector3;
        /**
         * Sets the passed vector "result" coordinates with the result of the transformation by the passed matrix of the passed vector.
         * This method computes tranformed coordinates only, not transformed direction vectors.
         */
        static TransformCoordinatesToRef(vector: Vector3, transformation: Matrix, result: Vector3): void;
        /**
         * Sets the passed vector "result" coordinates with the result of the transformation by the passed matrix of the passed floats (x, y, z).
         * This method computes tranformed coordinates only, not transformed direction vectors.
         */
        static TransformCoordinatesFromFloatsToRef(x: number, y: number, z: number, transformation: Matrix, result: Vector3): void;
        /**
         * Returns a new Vector3 set with the result of the normal transformation by the passed matrix of the passed vector.
         * This methods computes transformed normalized direction vectors only.
         */
        static TransformNormal(vector: Vector3, transformation: Matrix): Vector3;
        /**
         * Sets the passed vector "result" with the result of the normal transformation by the passed matrix of the passed vector.
         * This methods computes transformed normalized direction vectors only.
         */
        static TransformNormalToRef(vector: Vector3, transformation: Matrix, result: Vector3): void;
        /**
         * Sets the passed vector "result" with the result of the normal transformation by the passed matrix of the passed floats (x, y, z).
         * This methods computes transformed normalized direction vectors only.
         */
        static TransformNormalFromFloatsToRef(x: number, y: number, z: number, transformation: Matrix, result: Vector3): void;
        /**
         * Returns a new Vector3 located for "amount" on the CatmullRom interpolation spline defined by the vectors "value1", "value2", "value3", "value4".
         */
        static CatmullRom(value1: Vector3, value2: Vector3, value3: Vector3, value4: Vector3, amount: number): Vector3;
        /**
         * Returns a new Vector3 set with the coordinates of "value", if the vector "value" is in the cube defined by the vectors "min" and "max".
         * If a coordinate value of "value" is lower than one of the "min" coordinate, then this "value" coordinate is set with the "min" one.
         * If a coordinate value of "value" is greater than one of the "max" coordinate, then this "value" coordinate is set with the "max" one.
         */
        static Clamp(value: Vector3, min: Vector3, max: Vector3): Vector3;
        /**
         * Returns a new Vector3 located for "amount" (float) on the Hermite interpolation spline defined by the vectors "value1", "tangent1", "value2", "tangent2".
         */
        static Hermite(value1: Vector3, tangent1: Vector3, value2: Vector3, tangent2: Vector3, amount: number): Vector3;
        /**
         * Returns a new Vector3 located for "amount" (float) on the linear interpolation between the vectors "start" and "end".
         */
        static Lerp(start: Vector3, end: Vector3, amount: number): Vector3;
        /**
         * Sets the passed vector "result" with the result of the linear interpolation from the vector "start" for "amount" to the vector "end".
         */
        static LerpToRef(start: Vector3, end: Vector3, amount: number, result: Vector3): void;
        /**
         * Returns the dot product (float) between the vectors "left" and "right".
         */
        static Dot(left: Vector3, right: Vector3): number;
        /**
         * Returns a new Vector3 as the cross product of the vectors "left" and "right".
         * The cross product is then orthogonal to both "left" and "right".
         */
        static Cross(left: Vector3, right: Vector3): Vector3;
        /**
         * Sets the passed vector "result" with the cross product of "left" and "right".
         * The cross product is then orthogonal to both "left" and "right".
         */
        static CrossToRef(left: Vector3, right: Vector3, result: Vector3): void;
        /**
         * Returns a new Vector3 as the normalization of the passed vector.
         */
        static Normalize(vector: Vector3): Vector3;
        /**
         * Sets the passed vector "result" with the normalization of the passed first vector.
         */
        static NormalizeToRef(vector: Vector3, result: Vector3): void;
        private static _viewportMatrixCache;
        private static _matrixCache;
        static Project(vector: Vector3, world: Matrix, transform: Matrix, viewport: Viewport): Vector3;
        static UnprojectFromTransform(source: Vector3, viewportWidth: number, viewportHeight: number, world: Matrix, transform: Matrix): Vector3;
        static Unproject(source: Vector3, viewportWidth: number, viewportHeight: number, world: Matrix, view: Matrix, projection: Matrix): Vector3;
        static Minimize(left: Vector3, right: Vector3): Vector3;
        static Maximize(left: Vector3, right: Vector3): Vector3;
        /**
         * Returns the distance (float) between the vectors "value1" and "value2".
         */
        static Distance(value1: Vector3, value2: Vector3): number;
        /**
         * Returns the squared distance (float) between the vectors "value1" and "value2".
         */
        static DistanceSquared(value1: Vector3, value2: Vector3): number;
        /**
         * Returns a new Vector3 located at the center between "value1" and "value2".
         */
        static Center(value1: Vector3, value2: Vector3): Vector3;
        /**
         * Given three orthogonal normalized left-handed oriented Vector3 axis in space (target system),
         * RotationFromAxis() returns the rotation Euler angles (ex : rotation.x, rotation.y, rotation.z) to apply
         * to something in order to rotate it from its local system to the given target system.
         * Note : axis1, axis2 and axis3 are normalized during this operation.
         * Returns a new Vector3.
         */
        static RotationFromAxis(axis1: Vector3, axis2: Vector3, axis3: Vector3): Vector3;
        /**
         * The same than RotationFromAxis but updates the passed ref Vector3 parameter instead of returning a new Vector3.
         */
        static RotationFromAxisToRef(axis1: Vector3, axis2: Vector3, axis3: Vector3, ref: Vector3): void;
    }
    class Vector4 {
        x: number;
        y: number;
        z: number;
        w: number;
        /**
         * Creates a Vector4 object from the passed floats.
         */
        constructor(x: number, y: number, z: number, w: number);
        /**
         * Returns the string with the Vector4 coordinates.
         */
        toString(): string;
        /**
         * Returns the string "Vector4".
         */
        getClassName(): string;
        /**
         * Returns the Vector4 hash code.
         */
        getHashCode(): number;
        /**
         * Returns a new array populated with 4 elements : the Vector4 coordinates.
         */
        asArray(): number[];
        /**
         * Populates the passed array from the passed index with the Vector4 coordinates.
         * Returns the Vector4.
         */
        toArray(array: number[] | Float32Array, index?: number): Vector4;
        /**
         * Adds the passed vector to the current Vector4.
         * Returns the updated Vector4.
         */
        addInPlace(otherVector: Vector4): Vector4;
        /**
         * Returns a new Vector4 as the result of the addition of the current Vector4 and the passed one.
         */
        add(otherVector: Vector4): Vector4;
        /**
         * Updates the passed vector "result" with the result of the addition of the current Vector4 and the passed one.
         * Returns the current Vector4.
         */
        addToRef(otherVector: Vector4, result: Vector4): Vector4;
        /**
         * Subtract in place the passed vector from the current Vector4.
         * Returns the updated Vector4.
         */
        subtractInPlace(otherVector: Vector4): Vector4;
        /**
         * Returns a new Vector4 with the result of the subtraction of the passed vector from the current Vector4.
         */
        subtract(otherVector: Vector4): Vector4;
        /**
         * Sets the passed vector "result" with the result of the subtraction of the passed vector from the current Vector4.
         * Returns the current Vector4.
         */
        subtractToRef(otherVector: Vector4, result: Vector4): Vector4;
        /**
         * Returns a new Vector4 set with the result of the subtraction of the passed floats from the current Vector4 coordinates.
         */
        subtractFromFloats(x: number, y: number, z: number, w: number): Vector4;
        /**
         * Sets the passed vector "result" set with the result of the subtraction of the passed floats from the current Vector4 coordinates.
         * Returns the current Vector4.
         */
        subtractFromFloatsToRef(x: number, y: number, z: number, w: number, result: Vector4): Vector4;
        /**
         * Returns a new Vector4 set with the current Vector4 negated coordinates.
         */
        negate(): Vector4;
        /**
         * Multiplies the current Vector4 coordinates by scale (float).
         * Returns the updated Vector4.
         */
        scaleInPlace(scale: number): Vector4;
        /**
         * Returns a new Vector4 set with the current Vector4 coordinates multiplied by scale (float).
         */
        scale(scale: number): Vector4;
        /**
         * Sets the passed vector "result" with the current Vector4 coordinates multiplied by scale (float).
         * Returns the current Vector4.
         */
        scaleToRef(scale: number, result: Vector4): Vector4;
        /**
         * Boolean : True if the current Vector4 coordinates are stricly equal to the passed ones.
         */
        equals(otherVector: Vector4): boolean;
        /**
         * Boolean : True if the current Vector4 coordinates are each beneath the distance "epsilon" from the passed vector ones.
         */
        equalsWithEpsilon(otherVector: Vector4, epsilon?: number): boolean;
        /**
         * Boolean : True if the passed floats are strictly equal to the current Vector4 coordinates.
         */
        equalsToFloats(x: number, y: number, z: number, w: number): boolean;
        /**
         * Multiplies in place the current Vector4 by the passed one.
         * Returns the updated Vector4.
         */
        multiplyInPlace(otherVector: Vector4): Vector4;
        /**
         * Returns a new Vector4 set with the multiplication result of the current Vector4 and the passed one.
         */
        multiply(otherVector: Vector4): Vector4;
        /**
         * Updates the passed vector "result" with the multiplication result of the current Vector4 and the passed one.
         * Returns the current Vector4.
         */
        multiplyToRef(otherVector: Vector4, result: Vector4): Vector4;
        /**
         * Returns a new Vector4 set with the multiplication result of the passed floats and the current Vector4 coordinates.
         */
        multiplyByFloats(x: number, y: number, z: number, w: number): Vector4;
        /**
         * Returns a new Vector4 set with the division result of the current Vector4 by the passed one.
         */
        divide(otherVector: Vector4): Vector4;
        /**
         * Updates the passed vector "result" with the division result of the current Vector4 by the passed one.
         * Returns the current Vector4.
         */
        divideToRef(otherVector: Vector4, result: Vector4): Vector4;
        /**
         * Updates the Vector4 coordinates with the minimum values between its own and the passed vector ones.
         */
        MinimizeInPlace(other: Vector4): Vector4;
        /**
         * Updates the Vector4 coordinates with the maximum values between its own and the passed vector ones.
         */
        MaximizeInPlace(other: Vector4): Vector4;
        /**
         * Returns the Vector4 length (float).
         */
        length(): number;
        /**
         * Returns the Vector4 squared length (float).
         */
        lengthSquared(): number;
        /**
         * Normalizes in place the Vector4.
         * Returns the updated Vector4.
         */
        normalize(): Vector4;
        /**
         * Returns a new Vector3 from the Vector4 (x, y, z) coordinates.
         */
        toVector3(): Vector3;
        /**
         * Returns a new Vector4 copied from the current one.
         */
        clone(): Vector4;
        /**
         * Updates the current Vector4 with the passed one coordinates.
         * Returns the updated Vector4.
         */
        copyFrom(source: Vector4): Vector4;
        /**
         * Updates the current Vector4 coordinates with the passed floats.
         * Returns the updated Vector4.
         */
        copyFromFloats(x: number, y: number, z: number, w: number): Vector4;
        /**
         * Updates the current Vector4 coordinates with the passed floats.
         * Returns the updated Vector4.
         */
        set(x: number, y: number, z: number, w: number): Vector4;
        /**
         * Returns a new Vector4 set from the starting index of the passed array.
         */
        static FromArray(array: ArrayLike<number>, offset?: number): Vector4;
        /**
         * Updates the passed vector "result" from the starting index of the passed array.
         */
        static FromArrayToRef(array: ArrayLike<number>, offset: number, result: Vector4): void;
        /**
         * Updates the passed vector "result" from the starting index of the passed Float32Array.
         */
        static FromFloatArrayToRef(array: Float32Array, offset: number, result: Vector4): void;
        /**
         * Updates the passed vector "result" coordinates from the passed floats.
         */
        static FromFloatsToRef(x: number, y: number, z: number, w: number, result: Vector4): void;
        /**
         * Returns a new Vector4 set to (0.0, 0.0, 0.0, 0.0)
         */
        static Zero(): Vector4;
        /**
         * Returns a new Vector4 set to (1.0, 1.0, 1.0, 1.0)
         */
        static One(): Vector4;
        /**
         * Returns a new normalized Vector4 from the passed one.
         */
        static Normalize(vector: Vector4): Vector4;
        /**
         * Updates the passed vector "result" from the normalization of the passed one.
         */
        static NormalizeToRef(vector: Vector4, result: Vector4): void;
        static Minimize(left: Vector4, right: Vector4): Vector4;
        static Maximize(left: Vector4, right: Vector4): Vector4;
        /**
         * Returns the distance (float) between the vectors "value1" and "value2".
         */
        static Distance(value1: Vector4, value2: Vector4): number;
        /**
         * Returns the squared distance (float) between the vectors "value1" and "value2".
         */
        static DistanceSquared(value1: Vector4, value2: Vector4): number;
        /**
         * Returns a new Vector4 located at the center between the vectors "value1" and "value2".
         */
        static Center(value1: Vector4, value2: Vector4): Vector4;
        /**
         * Returns a new Vector4 set with the result of the normal transformation by the passed matrix of the passed vector.
         * This methods computes transformed normalized direction vectors only.
         */
        static TransformNormal(vector: Vector4, transformation: Matrix): Vector4;
        /**
         * Sets the passed vector "result" with the result of the normal transformation by the passed matrix of the passed vector.
         * This methods computes transformed normalized direction vectors only.
         */
        static TransformNormalToRef(vector: Vector4, transformation: Matrix, result: Vector4): void;
        /**
         * Sets the passed vector "result" with the result of the normal transformation by the passed matrix of the passed floats (x, y, z, w).
         * This methods computes transformed normalized direction vectors only.
         */
        static TransformNormalFromFloatsToRef(x: number, y: number, z: number, w: number, transformation: Matrix, result: Vector4): void;
    }
    interface ISize {
        width: number;
        height: number;
    }
    class Size implements ISize {
        width: number;
        height: number;
        /**
         * Creates a Size object from the passed width and height (floats).
         */
        constructor(width: number, height: number);
        toString(): string;
        /**
         * Returns the string "Size"
         */
        getClassName(): string;
        /**
         * Returns the Size hash code.
         */
        getHashCode(): number;
        /**
         * Updates the current size from the passed one.
         * Returns the updated Size.
         */
        copyFrom(src: Size): void;
        /**
         * Updates in place the current Size from the passed floats.
         * Returns the updated Size.
         */
        copyFromFloats(width: number, height: number): Size;
        /**
         * Updates in place the current Size from the passed floats.
         * Returns the updated Size.
         */
        set(width: number, height: number): Size;
        /**
         * Returns a new Size set with the multiplication result of the current Size and the passed floats.
         */
        multiplyByFloats(w: number, h: number): Size;
        /**
         * Returns a new Size copied from the passed one.
         */
        clone(): Size;
        /**
         * Boolean : True if the current Size and the passed one width and height are strictly equal.
         */
        equals(other: Size): boolean;
        /**
         * Returns the surface of the Size : width * height (float).
         */
        readonly surface: number;
        /**
         * Returns a new Size set to (0.0, 0.0)
         */
        static Zero(): Size;
        /**
         * Returns a new Size set as the addition result of the current Size and the passed one.
         */
        add(otherSize: Size): Size;
        /**
         * Returns a new Size set as the subtraction result of  the passed one from the current Size.
         */
        subtract(otherSize: Size): Size;
        /**
         * Returns a new Size set at the linear interpolation "amount" between "start" and "end".
         */
        static Lerp(start: Size, end: Size, amount: number): Size;
    }
    class Quaternion {
        x: number;
        y: number;
        z: number;
        w: number;
        /**
         * Creates a new Quaternion from the passed floats.
         */
        constructor(x?: number, y?: number, z?: number, w?: number);
        /**
         * Returns a string with the Quaternion coordinates.
         */
        toString(): string;
        /**
         * Returns the string "Quaternion".
         */
        getClassName(): string;
        /**
         * Returns the Quaternion hash code.
         */
        getHashCode(): number;
        /**
         * Returns a new array populated with 4 elements : the Quaternion coordinates.
         */
        asArray(): number[];
        /**
         * Boolean : True if the current Quaterion and the passed one coordinates are strictly equal.
         */
        equals(otherQuaternion: Quaternion): boolean;
        /**
         * Returns a new Quaternion copied from the current one.
         */
        clone(): Quaternion;
        /**
         * Updates the current Quaternion from the passed one coordinates.
         * Returns the updated Quaterion.
         */
        copyFrom(other: Quaternion): Quaternion;
        /**
         * Updates the current Quaternion from the passed float coordinates.
         * Returns the updated Quaterion.
         */
        copyFromFloats(x: number, y: number, z: number, w: number): Quaternion;
        /**
         * Updates the current Quaternion from the passed float coordinates.
         * Returns the updated Quaterion.
         */
        set(x: number, y: number, z: number, w: number): Quaternion;
        /**
         * Returns a new Quaternion as the addition result of the passed one and the current Quaternion.
         */
        add(other: Quaternion): Quaternion;
        /**
         * Returns a new Quaternion as the subtraction result of the passed one from the current Quaternion.
         */
        subtract(other: Quaternion): Quaternion;
        /**
         * Returns a new Quaternion set by multiplying the current Quaterion coordinates by the float "scale".
         */
        scale(value: number): Quaternion;
        /**
         * Returns a new Quaternion set as the quaternion mulplication result of the current one with the passed one "q1".
         */
        multiply(q1: Quaternion): Quaternion;
        /**
         * Sets the passed "result" as the quaternion mulplication result of the current one with the passed one "q1".
         * Returns the current Quaternion.
         */
        multiplyToRef(q1: Quaternion, result: Quaternion): Quaternion;
        /**
         * Updates the current Quaternion with the quaternion mulplication result of itself with the passed one "q1".
         * Returns the updated Quaternion.
         */
        multiplyInPlace(q1: Quaternion): Quaternion;
        /**
         * Sets the passed "ref" with the conjugation of the current Quaternion.
         * Returns the current Quaternion.
         */
        conjugateToRef(ref: Quaternion): Quaternion;
        /**
         * Conjugates in place the current Quaternion.
         * Returns the updated Quaternion.
         */
        conjugateInPlace(): Quaternion;
        /**
         * Returns a new Quaternion as the conjugate of the current Quaternion.
         */
        conjugate(): Quaternion;
        /**
         * Returns the Quaternion length (float).
         */
        length(): number;
        /**
         * Normalize in place the current Quaternion.
         * Returns the updated Quaternion.
         */
        normalize(): Quaternion;
        /**
         * Returns a new Vector3 set with the Euler angles translated from the current Quaternion.
         */
        toEulerAngles(order?: string): Vector3;
        /**
         * Sets the passed vector3 "result" with the Euler angles translated from the current Quaternion.
         * Returns the current Quaternion.
         */
        toEulerAnglesToRef(result: Vector3, order?: string): Quaternion;
        /**
         * Updates the passed rotation matrix with the current Quaternion values.
         * Returns the current Quaternion.
         */
        toRotationMatrix(result: Matrix): Quaternion;
        /**
         * Updates the current Quaternion from the passed rotation matrix values.
         * Returns the updated Quaternion.
         */
        fromRotationMatrix(matrix: Matrix): Quaternion;
        /**
         * Returns a new Quaternion set from the passed rotation matrix values.
         */
        static FromRotationMatrix(matrix: Matrix): Quaternion;
        /**
         * Updates the passed quaternion "result" with the passed rotation matrix values.
         */
        static FromRotationMatrixToRef(matrix: Matrix, result: Quaternion): void;
        /**
         * Returns a new Quaternion set to (0.0, 0.0, 0.0).
         */
        static Zero(): Quaternion;
        /**
         * Returns a new Quaternion as the inverted current Quaternion.
         */
        static Inverse(q: Quaternion): Quaternion;
        /**
         * Returns the identity Quaternion.
         */
        static Identity(): Quaternion;
        static IsIdentity(quaternion: Quaternion): boolean;
        /**
         * Returns a new Quaternion set from the passed axis (Vector3) and angle in radians (float).
         */
        static RotationAxis(axis: Vector3, angle: number): Quaternion;
        /**
         * Sets the passed quaternion "result" from the passed axis (Vector3) and angle in radians (float).
         */
        static RotationAxisToRef(axis: Vector3, angle: number, result: Quaternion): Quaternion;
        /**
         * Retuns a new Quaternion set from the starting index of the passed array.
         */
        static FromArray(array: ArrayLike<number>, offset?: number): Quaternion;
        /**
         * Returns a new Quaternion set from the passed Euler float angles (y, x, z).
         */
        static RotationYawPitchRoll(yaw: number, pitch: number, roll: number): Quaternion;
        /**
         * Sets the passed quaternion "result" from the passed float Euler angles (y, x, z).
         */
        static RotationYawPitchRollToRef(yaw: number, pitch: number, roll: number, result: Quaternion): void;
        /**
         * Returns a new Quaternion from the passed float Euler angles expressed in z-x-z orientation
         */
        static RotationAlphaBetaGamma(alpha: number, beta: number, gamma: number): Quaternion;
        /**
         * Sets the passed quaternion "result" from the passed float Euler angles expressed in z-x-z orientation
         */
        static RotationAlphaBetaGammaToRef(alpha: number, beta: number, gamma: number, result: Quaternion): void;
        /**
         * Returns a new Quaternion as the quaternion rotation value to reach the target (axis1, axis2, axis3) orientation as a rotated XYZ system.
         * cf to Vector3.RotationFromAxis() documentation.
         * Note : axis1, axis2 and axis3 are normalized during this operation.
         */
        static RotationQuaternionFromAxis(axis1: Vector3, axis2: Vector3, axis3: Vector3, ref: Quaternion): Quaternion;
        /**
         * Sets the passed quaternion "ref" with the quaternion rotation value to reach the target (axis1, axis2, axis3) orientation as a rotated XYZ system.
         * cf to Vector3.RotationFromAxis() documentation.
         * Note : axis1, axis2 and axis3 are normalized during this operation.
         */
        static RotationQuaternionFromAxisToRef(axis1: Vector3, axis2: Vector3, axis3: Vector3, ref: Quaternion): void;
        static Slerp(left: Quaternion, right: Quaternion, amount: number): Quaternion;
        static SlerpToRef(left: Quaternion, right: Quaternion, amount: number, result: Quaternion): void;
        /**
         * Returns a new Quaternion located for "amount" (float) on the Hermite interpolation spline defined by the vectors "value1", "tangent1", "value2", "tangent2".
         */
        static Hermite(value1: Quaternion, tangent1: Quaternion, value2: Quaternion, tangent2: Quaternion, amount: number): Quaternion;
    }
    class Matrix {
        private static _tempQuaternion;
        private static _xAxis;
        private static _yAxis;
        private static _zAxis;
        private static _updateFlagSeed;
        private _isIdentity;
        private _isIdentityDirty;
        updateFlag: number;
        m: Float32Array;
        _markAsUpdated(): void;
        constructor();
        /**
         * Boolean : True is the matrix is the identity matrix
         */
        isIdentity(considerAsTextureMatrix?: boolean): boolean;
        /**
         * Returns the matrix determinant (float).
         */
        determinant(): number;
        /**
         * Returns the matrix underlying array.
         */
        toArray(): Float32Array;
        /**
        * Returns the matrix underlying array.
        */
        asArray(): Float32Array;
        /**
         * Inverts in place the Matrix.
         * Returns the Matrix inverted.
         */
        invert(): Matrix;
        /**
         * Sets all the matrix elements to zero.
         * Returns the Matrix.
         */
        reset(): Matrix;
        /**
         * Returns a new Matrix as the addition result of the current Matrix and the passed one.
         */
        add(other: Matrix): Matrix;
        /**
         * Sets the passed matrix "result" with the ddition result of the current Matrix and the passed one.
         * Returns the Matrix.
         */
        addToRef(other: Matrix, result: Matrix): Matrix;
        /**
         * Adds in place the passed matrix to the current Matrix.
         * Returns the updated Matrix.
         */
        addToSelf(other: Matrix): Matrix;
        /**
         * Sets the passed matrix with the current inverted Matrix.
         * Returns the unmodified current Matrix.
         */
        invertToRef(other: Matrix): Matrix;
        /**
         * Inserts the translation vector (using 3 x floats) in the current Matrix.
         * Returns the updated Matrix.
         */
        setTranslationFromFloats(x: number, y: number, z: number): Matrix;
        /**
 * Inserts the translation vector in the current Matrix.
 * Returns the updated Matrix.
 */
        setTranslation(vector3: Vector3): Matrix;
        /**
         * Returns a new Vector3 as the extracted translation from the Matrix.
         */
        getTranslation(): Vector3;
        /**
         * Fill a Vector3 with the extracted translation from the Matrix.
         */
        getTranslationToRef(result: Vector3): Matrix;
        /**
         * Remove rotation and scaling part from the Matrix.
         * Returns the updated Matrix.
         */
        removeRotationAndScaling(): Matrix;
        /**
         * Returns a new Matrix set with the multiplication result of the current Matrix and the passed one.
         */
        multiply(other: Matrix): Matrix;
        /**
         * Updates the current Matrix from the passed one values.
         * Returns the updated Matrix.
         */
        copyFrom(other: Matrix): Matrix;
        /**
         * Populates the passed array from the starting index with the Matrix values.
         * Returns the Matrix.
         */
        copyToArray(array: Float32Array, offset?: number): Matrix;
        /**
         * Sets the passed matrix "result" with the multiplication result of the current Matrix and the passed one.
         */
        multiplyToRef(other: Matrix, result: Matrix): Matrix;
        /**
         * Sets the Float32Array "result" from the passed index "offset" with the multiplication result of the current Matrix and the passed one.
         */
        multiplyToArray(other: Matrix, result: Float32Array, offset: number): Matrix;
        /**
         * Boolean : True is the current Matrix and the passed one values are strictly equal.
         */
        equals(value: Matrix): boolean;
        /**
         * Returns a new Matrix from the current Matrix.
         */
        clone(): Matrix;
        /**
         * Returns the string "Matrix"
         */
        getClassName(): string;
        /**
         * Returns the Matrix hash code.
         */
        getHashCode(): number;
        /**
         * Decomposes the current Matrix into :
         * - a scale vector3 passed as a reference to update,
         * - a rotation quaternion passed as a reference to update,
         * - a translation vector3 passed as a reference to update.
         * Returns the boolean `true`.
         */
        decompose(scale: Vector3, rotation: Quaternion, translation: Vector3): boolean;
        /**
         * Returns a new Matrix as the extracted rotation matrix from the current one.
         */
        getRotationMatrix(): Matrix;
        /**
         * Extracts the rotation matrix from the current one and sets it as the passed "result".
         * Returns the current Matrix.
         */
        getRotationMatrixToRef(result: Matrix): Matrix;
        /**
         * Returns a new Matrix set from the starting index of the passed array.
         */
        static FromArray(array: ArrayLike<number>, offset?: number): Matrix;
        /**
         * Sets the passed "result" matrix from the starting index of the passed array.
         */
        static FromArrayToRef(array: ArrayLike<number>, offset: number, result: Matrix): void;
        /**
         * Sets the passed "result" matrix from the starting index of the passed Float32Array by multiplying each element by the float "scale".
         */
        static FromFloat32ArrayToRefScaled(array: Float32Array, offset: number, scale: number, result: Matrix): void;
        /**
         * Sets the passed matrix "result" with the 16 passed floats.
         */
        static FromValuesToRef(initialM11: number, initialM12: number, initialM13: number, initialM14: number, initialM21: number, initialM22: number, initialM23: number, initialM24: number, initialM31: number, initialM32: number, initialM33: number, initialM34: number, initialM41: number, initialM42: number, initialM43: number, initialM44: number, result: Matrix): void;
        /**
         * Returns the index-th row of the current matrix as a new Vector4.
         */
        getRow(index: number): Vector4;
        /**
         * Sets the index-th row of the current matrix with the passed Vector4 values.
         * Returns the updated Matrix.
         */
        setRow(index: number, row: Vector4): Matrix;
        /**
         * Sets the index-th row of the current matrix with the passed 4 x float values.
         * Returns the updated Matrix.
         */
        setRowFromFloats(index: number, x: number, y: number, z: number, w: number): Matrix;
        /**
         * Returns a new Matrix set from the 16 passed floats.
         */
        static FromValues(initialM11: number, initialM12: number, initialM13: number, initialM14: number, initialM21: number, initialM22: number, initialM23: number, initialM24: number, initialM31: number, initialM32: number, initialM33: number, initialM34: number, initialM41: number, initialM42: number, initialM43: number, initialM44: number): Matrix;
        /**
         * Returns a new Matrix composed by the passed scale (vector3), rotation (quaternion) and translation (vector3).
         */
        static Compose(scale: Vector3, rotation: Quaternion, translation: Vector3): Matrix;
        /**
       * Update a Matrix with values composed by the passed scale (vector3), rotation (quaternion) and translation (vector3).
       */
        static ComposeToRef(scale: Vector3, rotation: Quaternion, translation: Vector3, result: Matrix): void;
        /**
         * Returns a new indentity Matrix.
         */
        static Identity(): Matrix;
        /**
         * Sets the passed "result" as an identity matrix.
         */
        static IdentityToRef(result: Matrix): void;
        /**
         * Returns a new zero Matrix.
         */
        static Zero(): Matrix;
        /**
         * Returns a new rotation matrix for "angle" radians around the X axis.
         */
        static RotationX(angle: number): Matrix;
        /**
         * Returns a new Matrix as the passed inverted one.
         */
        static Invert(source: Matrix): Matrix;
        /**
         * Sets the passed matrix "result" as a rotation matrix for "angle" radians around the X axis.
         */
        static RotationXToRef(angle: number, result: Matrix): void;
        /**
         * Returns a new rotation matrix for "angle" radians around the Y axis.
         */
        static RotationY(angle: number): Matrix;
        /**
         * Sets the passed matrix "result" as a rotation matrix for "angle" radians around the Y axis.
         */
        static RotationYToRef(angle: number, result: Matrix): void;
        /**
         * Returns a new rotation matrix for "angle" radians around the Z axis.
         */
        static RotationZ(angle: number): Matrix;
        /**
         * Sets the passed matrix "result" as a rotation matrix for "angle" radians around the Z axis.
         */
        static RotationZToRef(angle: number, result: Matrix): void;
        /**
         * Returns a new rotation matrix for "angle" radians around the passed axis.
         */
        static RotationAxis(axis: Vector3, angle: number): Matrix;
        /**
         * Sets the passed matrix "result" as a rotation matrix for "angle" radians around the passed axis.
         */
        static RotationAxisToRef(axis: Vector3, angle: number, result: Matrix): void;
        /**
         * Returns a new Matrix as a rotation matrix from the Euler angles (y, x, z).
         */
        static RotationYawPitchRoll(yaw: number, pitch: number, roll: number): Matrix;
        /**
         * Sets the passed matrix "result" as a rotation matrix from the Euler angles (y, x, z).
         */
        static RotationYawPitchRollToRef(yaw: number, pitch: number, roll: number, result: Matrix): void;
        /**
         * Returns a new Matrix as a scaling matrix from the passed floats (x, y, z).
         */
        static Scaling(x: number, y: number, z: number): Matrix;
        /**
         * Sets the passed matrix "result" as a scaling matrix from the passed floats (x, y, z).
         */
        static ScalingToRef(x: number, y: number, z: number, result: Matrix): void;
        /**
         * Returns a new Matrix as a translation matrix from the passed floats (x, y, z).
         */
        static Translation(x: number, y: number, z: number): Matrix;
        /**
         * Sets the passed matrix "result" as a translation matrix from the passed floats (x, y, z).
         */
        static TranslationToRef(x: number, y: number, z: number, result: Matrix): void;
        /**
         * Returns a new Matrix whose values are the interpolated values for "gradien" (float) between the ones of the matrices "startValue" and "endValue".
         */
        static Lerp(startValue: Matrix, endValue: Matrix, gradient: number): Matrix;
        /**
         * Returns a new Matrix whose values are computed by :
         * - decomposing the the "startValue" and "endValue" matrices into their respective scale, rotation and translation matrices,
         * - interpolating for "gradient" (float) the values between each of these decomposed matrices between the start and the end,
         * - recomposing a new matrix from these 3 interpolated scale, rotation and translation matrices.
         */
        static DecomposeLerp(startValue: Matrix, endValue: Matrix, gradient: number): Matrix;
        /**
         * Returns a new rotation Matrix used to rotate a mesh so as it looks at the target Vector3, from the eye Vector3, the UP vector3 being orientated like "up".
         * This methods works for a Left-Handed system.
         */
        static LookAtLH(eye: Vector3, target: Vector3, up: Vector3): Matrix;
        /**
         * Sets the passed "result" Matrix as a rotation matrix used to rotate a mesh so as it looks at the target Vector3, from the eye Vector3, the UP vector3 being orientated like "up".
         * This methods works for a Left-Handed system.
         */
        static LookAtLHToRef(eye: Vector3, target: Vector3, up: Vector3, result: Matrix): void;
        /**
         * Returns a new rotation Matrix used to rotate a mesh so as it looks at the target Vector3, from the eye Vector3, the UP vector3 being orientated like "up".
         * This methods works for a Right-Handed system.
         */
        static LookAtRH(eye: Vector3, target: Vector3, up: Vector3): Matrix;
        /**
         * Sets the passed "result" Matrix as a rotation matrix used to rotate a mesh so as it looks at the target Vector3, from the eye Vector3, the UP vector3 being orientated like "up".
         * This methods works for a Left-Handed system.
         */
        static LookAtRHToRef(eye: Vector3, target: Vector3, up: Vector3, result: Matrix): void;
        /**
         * Returns a new Matrix as a left-handed orthographic projection matrix computed from the passed floats : width and height of the projection plane, z near and far limits.
         */
        static OrthoLH(width: number, height: number, znear: number, zfar: number): Matrix;
        /**
         * Sets the passed matrix "result" as a left-handed orthographic projection matrix computed from the passed floats : width and height of the projection plane, z near and far limits.
         */
        static OrthoLHToRef(width: number, height: number, znear: number, zfar: number, result: Matrix): void;
        /**
         * Returns a new Matrix as a left-handed orthographic projection matrix computed from the passed floats : left, right, top and bottom being the coordinates of the projection plane, z near and far limits.
         */
        static OrthoOffCenterLH(left: number, right: number, bottom: number, top: number, znear: number, zfar: number): Matrix;
        /**
         * Sets the passed matrix "result" as a left-handed orthographic projection matrix computed from the passed floats : left, right, top and bottom being the coordinates of the projection plane, z near and far limits.
         */
        static OrthoOffCenterLHToRef(left: number, right: number, bottom: number, top: number, znear: number, zfar: number, result: Matrix): void;
        /**
         * Returns a new Matrix as a right-handed orthographic projection matrix computed from the passed floats : left, right, top and bottom being the coordinates of the projection plane, z near and far limits.
         */
        static OrthoOffCenterRH(left: number, right: number, bottom: number, top: number, znear: number, zfar: number): Matrix;
        /**
         * Sets the passed matrix "result" as a right-handed orthographic projection matrix computed from the passed floats : left, right, top and bottom being the coordinates of the projection plane, z near and far limits.
         */
        static OrthoOffCenterRHToRef(left: number, right: any, bottom: number, top: number, znear: number, zfar: number, result: Matrix): void;
        /**
         * Returns a new Matrix as a left-handed perspective projection matrix computed from the passed floats : width and height of the projection plane, z near and far limits.
         */
        static PerspectiveLH(width: number, height: number, znear: number, zfar: number): Matrix;
        /**
         * Returns a new Matrix as a left-handed perspective projection matrix computed from the passed floats : vertical angle of view (fov), width/height ratio (aspect), z near and far limits.
         */
        static PerspectiveFovLH(fov: number, aspect: number, znear: number, zfar: number): Matrix;
        /**
         * Sets the passed matrix "result" as a left-handed perspective projection matrix computed from the passed floats : vertical angle of view (fov), width/height ratio (aspect), z near and far limits.
         */
        static PerspectiveFovLHToRef(fov: number, aspect: number, znear: number, zfar: number, result: Matrix, isVerticalFovFixed?: boolean): void;
        /**
         * Returns a new Matrix as a right-handed perspective projection matrix computed from the passed floats : vertical angle of view (fov), width/height ratio (aspect), z near and far limits.
         */
        static PerspectiveFovRH(fov: number, aspect: number, znear: number, zfar: number): Matrix;
        /**
         * Sets the passed matrix "result" as a right-handed perspective projection matrix computed from the passed floats : vertical angle of view (fov), width/height ratio (aspect), z near and far limits.
         */
        static PerspectiveFovRHToRef(fov: number, aspect: number, znear: number, zfar: number, result: Matrix, isVerticalFovFixed?: boolean): void;
        /**
         * Sets the passed matrix "result" as a left-handed perspective projection matrix  for WebVR computed from the passed floats : vertical angle of view (fov), width/height ratio (aspect), z near and far limits.
         */
        static PerspectiveFovWebVRToRef(fov: any, znear: number, zfar: number, result: Matrix, rightHanded?: boolean): void;
        /**
         * Returns the final transformation matrix : world * view * projection * viewport
         */
        static GetFinalMatrix(viewport: Viewport, world: Matrix, view: Matrix, projection: Matrix, zmin: number, zmax: number): Matrix;
        /**
         * Returns a new Float32Array array with 4 elements : the 2x2 matrix extracted from the passed Matrix.
         */
        static GetAsMatrix2x2(matrix: Matrix): Float32Array;
        /**
         * Returns a new Float32Array array with 9 elements : the 3x3 matrix extracted from the passed Matrix.
         */
        static GetAsMatrix3x3(matrix: Matrix): Float32Array;
        /**
         * Compute the transpose of the passed Matrix.
         * Returns a new Matrix.
         */
        static Transpose(matrix: Matrix): Matrix;
        /**
         * Returns a new Matrix as the reflection  matrix across the passed plane.
         */
        static Reflection(plane: Plane): Matrix;
        /**
         * Sets the passed matrix "result" as the reflection matrix across the passed plane.
         */
        static ReflectionToRef(plane: Plane, result: Matrix): void;
        /**
         * Sets the passed matrix "mat" as a rotation matrix composed from the 3 passed  left handed axis.
         */
        static FromXYZAxesToRef(xaxis: Vector3, yaxis: Vector3, zaxis: Vector3, result: Matrix): void;
        /**
         * Sets the passed matrix "result" as a rotation matrix according to the passed quaternion.
         */
        static FromQuaternionToRef(quat: Quaternion, result: Matrix): void;
    }
    class Plane {
        normal: Vector3;
        d: number;
        /**
         * Creates a Plane object according to the passed floats a, b, c, d and the plane equation : ax + by + cz + d = 0
         */
        constructor(a: number, b: number, c: number, d: number);
        /**
         * Returns the plane coordinates as a new array of 4 elements [a, b, c, d].
         */
        asArray(): number[];
        /**
         * Returns a new plane copied from the current Plane.
         */
        clone(): Plane;
        /**
         * Returns the string "Plane".
         */
        getClassName(): string;
        /**
         * Returns the Plane hash code.
         */
        getHashCode(): number;
        /**
         * Normalize the current Plane in place.
         * Returns the updated Plane.
         */
        normalize(): Plane;
        /**
         * Returns a new Plane as the result of the transformation of the current Plane by the passed matrix.
         */
        transform(transformation: Matrix): Plane;
        /**
         * Returns the dot product (float) of the point coordinates and the plane normal.
         */
        dotCoordinate(point: any): number;
        /**
         * Updates the current Plane from the plane defined by the three passed points.
         * Returns the updated Plane.
         */
        copyFromPoints(point1: Vector3, point2: Vector3, point3: Vector3): Plane;
        /**
         * Boolean : True is the vector "direction"  is the same side than the plane normal.
         */
        isFrontFacingTo(direction: Vector3, epsilon: number): boolean;
        /**
         * Returns the signed distance (float) from the passed point to the Plane.
         */
        signedDistanceTo(point: Vector3): number;
        /**
         * Returns a new Plane from the passed array.
         */
        static FromArray(array: ArrayLike<number>): Plane;
        /**
         * Returns a new Plane defined by the three passed points.
         */
        static FromPoints(point1: any, point2: any, point3: any): Plane;
        /**
         * Returns a new Plane the normal vector to this plane at the passed origin point.
         * Note : the vector "normal" is updated because normalized.
         */
        static FromPositionAndNormal(origin: Vector3, normal: Vector3): Plane;
        /**
         * Returns the signed distance between the plane defined by the normal vector at the "origin"" point and the passed other point.
         */
        static SignedDistanceToPlaneFromPositionAndNormal(origin: Vector3, normal: Vector3, point: Vector3): number;
    }
    class Viewport {
        x: number;
        y: number;
        width: number;
        height: number;
        /**
         * Creates a Viewport object located at (x, y) and sized (width, height).
         */
        constructor(x: number, y: number, width: number, height: number);
        toGlobal(renderWidthOrEngine: number | Engine, renderHeight: number): Viewport;
        /**
         * Returns a new Viewport copied from the current one.
         */
        clone(): Viewport;
    }
    class Frustum {
        /**
         * Returns a new array of 6 Frustum planes computed by the passed transformation matrix.
         */
        static GetPlanes(transform: Matrix): Plane[];
        /**
         * Sets the passed array "frustumPlanes" with the 6 Frustum planes computed by the passed transformation matrix.
         */
        static GetPlanesToRef(transform: Matrix, frustumPlanes: Plane[]): void;
    }
    enum Space {
        LOCAL = 0,
        WORLD = 1,
        BONE = 2,
    }
    class Axis {
        static X: Vector3;
        static Y: Vector3;
        static Z: Vector3;
    }
    class BezierCurve {
        /**
         * Returns the cubic Bezier interpolated value (float) at "t" (float) from the passed x1, y1, x2, y2 floats.
         */
        static interpolate(t: number, x1: number, y1: number, x2: number, y2: number): number;
    }
    enum Orientation {
        CW = 0,
        CCW = 1,
    }
    class Angle {
        private _radians;
        /**
         * Creates an Angle object of "radians" radians (float).
         */
        constructor(radians: number);
        /**
         * Returns the Angle value in degrees (float).
         */
        degrees: () => number;
        /**
         * Returns the Angle value in radians (float).
         */
        radians: () => number;
        /**
         * Returns a new Angle object valued with the angle value in radians between the two passed vectors.
         */
        static BetweenTwoPoints(a: Vector2, b: Vector2): Angle;
        /**
         * Returns a new Angle object from the passed float in radians.
         */
        static FromRadians(radians: number): Angle;
        /**
         * Returns a new Angle object from the passed float in degrees.
         */
        static FromDegrees(degrees: number): Angle;
    }
    class Arc2 {
        startPoint: Vector2;
        midPoint: Vector2;
        endPoint: Vector2;
        centerPoint: Vector2;
        radius: number;
        angle: Angle;
        startAngle: Angle;
        orientation: Orientation;
        /**
         * Creates an Arc object from the three passed points : start, middle and end.
         */
        constructor(startPoint: Vector2, midPoint: Vector2, endPoint: Vector2);
    }
    class Path2 {
        private _points;
        private _length;
        closed: boolean;
        /**
         * Creates a Path2 object from the starting 2D coordinates x and y.
         */
        constructor(x: number, y: number);
        /**
         * Adds a new segment until the passed coordinates (x, y) to the current Path2.
         * Returns the updated Path2.
         */
        addLineTo(x: number, y: number): Path2;
        /**
         * Adds _numberOfSegments_ segments according to the arc definition (middle point coordinates, end point coordinates, the arc start point being the current Path2 last point) to the current Path2.
         * Returns the updated Path2.
         */
        addArcTo(midX: number, midY: number, endX: number, endY: number, numberOfSegments?: number): Path2;
        /**
         * Closes the Path2.
         * Returns the Path2.
         */
        close(): Path2;
        /**
         * Returns the Path2 total length (float).
         */
        length(): number;
        /**
         * Returns the Path2 internal array of points.
         */
        getPoints(): Vector2[];
        /**
         * Returns a new Vector2 located at a percentage of the Path2 total length on this path.
         */
        getPointAtLengthPosition(normalizedLengthPosition: number): Vector2;
        /**
         * Returns a new Path2 starting at the coordinates (x, y).
         */
        static StartingAt(x: number, y: number): Path2;
    }
    class Path3D {
        path: Vector3[];
        private _curve;
        private _distances;
        private _tangents;
        private _normals;
        private _binormals;
        private _raw;
        /**
        * new Path3D(path, normal, raw)
        * Creates a Path3D. A Path3D is a logical math object, so not a mesh.
        * please read the description in the tutorial :  http://doc.babylonjs.com/tutorials/How_to_use_Path3D
        * path : an array of Vector3, the curve axis of the Path3D
        * normal (optional) : Vector3, the first wanted normal to the curve. Ex (0, 1, 0) for a vertical normal.
        * raw (optional, default false) : boolean, if true the returned Path3D isn't normalized. Useful to depict path acceleration or speed.
        */
        constructor(path: Vector3[], firstNormal?: Vector3, raw?: boolean);
        /**
         * Returns the Path3D array of successive Vector3 designing its curve.
         */
        getCurve(): Vector3[];
        /**
         * Returns an array populated with tangent vectors on each Path3D curve point.
         */
        getTangents(): Vector3[];
        /**
         * Returns an array populated with normal vectors on each Path3D curve point.
         */
        getNormals(): Vector3[];
        /**
         * Returns an array populated with binormal vectors on each Path3D curve point.
         */
        getBinormals(): Vector3[];
        /**
         * Returns an array populated with distances (float) of the i-th point from the first curve point.
         */
        getDistances(): number[];
        /**
         * Forces the Path3D tangent, normal, binormal and distance recomputation.
         * Returns the same object updated.
         */
        update(path: Vector3[], firstNormal?: Vector3): Path3D;
        private _compute(firstNormal);
        private _getFirstNonNullVector(index);
        private _getLastNonNullVector(index);
        private _normalVector(v0, vt, va);
    }
    class Curve3 {
        private _points;
        private _length;
        /**
         * Returns a Curve3 object along a Quadratic Bezier curve : http://doc.babylonjs.com/tutorials/How_to_use_Curve3#quadratic-bezier-curve
         * @param v0 (Vector3) the origin point of the Quadratic Bezier
         * @param v1 (Vector3) the control point
         * @param v2 (Vector3) the end point of the Quadratic Bezier
         * @param nbPoints (integer) the wanted number of points in the curve
         */
        static CreateQuadraticBezier(v0: Vector3, v1: Vector3, v2: Vector3, nbPoints: number): Curve3;
        /**
         * Returns a Curve3 object along a Cubic Bezier curve : http://doc.babylonjs.com/tutorials/How_to_use_Curve3#cubic-bezier-curve
         * @param v0 (Vector3) the origin point of the Cubic Bezier
         * @param v1 (Vector3) the first control point
         * @param v2 (Vector3) the second control point
         * @param v3 (Vector3) the end point of the Cubic Bezier
         * @param nbPoints (integer) the wanted number of points in the curve
         */
        static CreateCubicBezier(v0: Vector3, v1: Vector3, v2: Vector3, v3: Vector3, nbPoints: number): Curve3;
        /**
         * Returns a Curve3 object along a Hermite Spline curve : http://doc.babylonjs.com/tutorials/How_to_use_Curve3#hermite-spline
         * @param p1 (Vector3) the origin point of the Hermite Spline
         * @param t1 (Vector3) the tangent vector at the origin point
         * @param p2 (Vector3) the end point of the Hermite Spline
         * @param t2 (Vector3) the tangent vector at the end point
         * @param nbPoints (integer) the wanted number of points in the curve
         */
        static CreateHermiteSpline(p1: Vector3, t1: Vector3, p2: Vector3, t2: Vector3, nbPoints: number): Curve3;
        /**
         * Returns a Curve3 object along a CatmullRom Spline curve :
         * @param points (array of Vector3) the points the spline must pass through. At least, four points required.
         * @param nbPoints (integer) the wanted number of points between each curve control points.
         */
        static CreateCatmullRomSpline(points: Vector3[], nbPoints: number): Curve3;
        /**
         * A Curve3 object is a logical object, so not a mesh, to handle curves in the 3D geometric space.
         * A Curve3 is designed from a series of successive Vector3.
         * Tuto : http://doc.babylonjs.com/tutorials/How_to_use_Curve3#curve3-object
         */
        constructor(points: Vector3[]);
        /**
         * Returns the Curve3 stored array of successive Vector3
         */
        getPoints(): Vector3[];
        /**
         * Returns the computed length (float) of the curve.
         */
        length(): number;
        /**
         * Returns a new instance of Curve3 object : var curve = curveA.continue(curveB);
         * This new Curve3 is built by translating and sticking the curveB at the end of the curveA.
         * curveA and curveB keep unchanged.
         */
        continue(curve: Curve3): Curve3;
        private _computeLength(path);
    }
    class PositionNormalVertex {
        position: Vector3;
        normal: Vector3;
        constructor(position?: Vector3, normal?: Vector3);
        clone(): PositionNormalVertex;
    }
    class PositionNormalTextureVertex {
        position: Vector3;
        normal: Vector3;
        uv: Vector2;
        constructor(position?: Vector3, normal?: Vector3, uv?: Vector2);
        clone(): PositionNormalTextureVertex;
    }
    class Tmp {
        static Color3: Color3[];
        static Vector2: Vector2[];
        static Vector3: Vector3[];
        static Vector4: Vector4[];
        static Quaternion: Quaternion[];
        static Matrix: Matrix[];
    }
}

declare module BABYLON {
    class SphericalPolynomial {
        x: Vector3;
        y: Vector3;
        z: Vector3;
        xx: Vector3;
        yy: Vector3;
        zz: Vector3;
        xy: Vector3;
        yz: Vector3;
        zx: Vector3;
        addAmbient(color: Color3): void;
        static getSphericalPolynomialFromHarmonics(harmonics: SphericalHarmonics): SphericalPolynomial;
        scale(scale: number): void;
    }
    class SphericalHarmonics {
        L00: Vector3;
        L1_1: Vector3;
        L10: Vector3;
        L11: Vector3;
        L2_2: Vector3;
        L2_1: Vector3;
        L20: Vector3;
        L21: Vector3;
        L22: Vector3;
        addLight(direction: Vector3, color: Color3, deltaSolidAngle: number): void;
        scale(scale: number): void;
        convertIncidentRadianceToIrradiance(): void;
        convertIrradianceToLambertianRadiance(): void;
        static getsphericalHarmonicsFromPolynomial(polynomial: SphericalPolynomial): SphericalHarmonics;
    }
}

declare module BABYLON {
    class AbstractMesh extends Node implements IDisposable, ICullable, IGetSetVerticesData {
        private static _BILLBOARDMODE_NONE;
        private static _BILLBOARDMODE_X;
        private static _BILLBOARDMODE_Y;
        private static _BILLBOARDMODE_Z;
        private static _BILLBOARDMODE_ALL;
        static readonly BILLBOARDMODE_NONE: number;
        static readonly BILLBOARDMODE_X: number;
        static readonly BILLBOARDMODE_Y: number;
        static readonly BILLBOARDMODE_Z: number;
        static readonly BILLBOARDMODE_ALL: number;
        private _facetPositions;
        private _facetNormals;
        private _facetPartitioning;
        private _facetNb;
        private _partitioningSubdivisions;
        private _partitioningBBoxRatio;
        private _facetDataEnabled;
        private _facetParameters;
        private _bbSize;
        private _subDiv;
        /**
         * Read-only : the number of facets in the mesh
         */
        readonly facetNb: number;
        /**
         * The number (integer) of subdivisions per axis in the partioning space
         */
        partitioningSubdivisions: number;
        /**
         * The ratio (float) to apply to the bouding box size to set to the partioning space.
         * Ex : 1.01 (default) the partioning space is 1% bigger than the bounding box.
         */
        partitioningBBoxRatio: number;
        /**
         * Read-only boolean : is the feature facetData enabled ?
         */
        readonly isFacetDataEnabled: boolean;
        /**
        * An event triggered when this mesh collides with another one
        * @type {BABYLON.Observable}
        */
        onCollideObservable: Observable<AbstractMesh>;
        private _onCollideObserver;
        onCollide: () => void;
        /**
        * An event triggered when the collision's position changes
        * @type {BABYLON.Observable}
        */
        onCollisionPositionChangeObservable: Observable<Vector3>;
        private _onCollisionPositionChangeObserver;
        onCollisionPositionChange: () => void;
        /**
        * An event triggered after the world matrix is updated
        * @type {BABYLON.Observable}
        */
        onAfterWorldMatrixUpdateObservable: Observable<AbstractMesh>;
        definedFacingForward: boolean;
        position: Vector3;
        private _rotation;
        private _rotationQuaternion;
        private _scaling;
        billboardMode: number;
        visibility: number;
        alphaIndex: number;
        infiniteDistance: boolean;
        isVisible: boolean;
        isPickable: boolean;
        showBoundingBox: boolean;
        showSubMeshesBoundingBox: boolean;
        isBlocker: boolean;
        renderingGroupId: number;
        private _material;
        material: Material;
        private _receiveShadows;
        receiveShadows: boolean;
        renderOutline: boolean;
        outlineColor: Color3;
        outlineWidth: number;
        renderOverlay: boolean;
        overlayColor: Color3;
        overlayAlpha: number;
        private _hasVertexAlpha;
        hasVertexAlpha: boolean;
        private _useVertexColors;
        useVertexColors: boolean;
        private _computeBonesUsingShaders;
        computeBonesUsingShaders: boolean;
        private _numBoneInfluencers;
        numBoneInfluencers: number;
        private _applyFog;
        applyFog: boolean;
        scalingDeterminant: number;
        useOctreeForRenderingSelection: boolean;
        useOctreeForPicking: boolean;
        useOctreeForCollisions: boolean;
        layerMask: number;
        /**
         * True if the mesh must be rendered in any case.
         */
        alwaysSelectAsActiveMesh: boolean;
        /**
         * This scene's action manager
         * @type {BABYLON.ActionManager}
        */
        actionManager: ActionManager;
        physicsImpostor: BABYLON.PhysicsImpostor;
        private _checkCollisions;
        private _collisionMask;
        private _collisionGroup;
        ellipsoid: Vector3;
        ellipsoidOffset: Vector3;
        private _collider;
        private _oldPositionForCollisions;
        private _diffPositionForCollisions;
        private _newPositionForCollisions;
        collisionMask: number;
        collisionGroup: number;
        private _meshToBoneReferal;
        edgesWidth: number;
        edgesColor: Color4;
        _edgesRenderer: EdgesRenderer;
        private _localWorld;
        _worldMatrix: Matrix;
        private _absolutePosition;
        private _collisionsTransformMatrix;
        private _collisionsScalingMatrix;
        private _isDirty;
        _masterMesh: AbstractMesh;
        _boundingInfo: BoundingInfo;
        private _pivotMatrix;
        _isDisposed: boolean;
        _renderId: number;
        subMeshes: SubMesh[];
        _submeshesOctree: Octree<SubMesh>;
        _intersectionsInProgress: AbstractMesh[];
        private _isWorldMatrixFrozen;
        _unIndexed: boolean;
        _poseMatrix: Matrix;
        _lightSources: Light[];
        readonly _positions: Vector3[];
        _waitingActions: any;
        _waitingFreezeWorldMatrix: boolean;
        private _skeleton;
        _bonesTransformMatrices: Float32Array;
        skeleton: Skeleton;
        constructor(name: string, scene: Scene);
        /**
         * Returns the string "AbstractMesh"
         */
        getClassName(): string;
        /**
         * @param {boolean} fullDetails - support for multiple levels of logging within scene loading
         */
        toString(fullDetails?: boolean): string;
        _resyncLightSources(): void;
        _resyncLighSource(light: Light): void;
        _removeLightSource(light: Light): void;
        private _markSubMeshesAsDirty(func);
        _markSubMeshesAsLightDirty(): void;
        _markSubMeshesAsAttributesDirty(): void;
        _markSubMeshesAsMiscDirty(): void;
        /**
         * Rotation property : a Vector3 depicting the rotation value in radians around each local axis X, Y, Z.
         * If rotation quaternion is set, this Vector3 will (almost always) be the Zero vector!
         * Default : (0.0, 0.0, 0.0)
         */
        rotation: Vector3;
        /**
         * Scaling property : a Vector3 depicting the mesh scaling along each local axis X, Y, Z.
         * Default : (1.0, 1.0, 1.0)
         */
        scaling: Vector3;
        /**
         * Rotation Quaternion property : this a Quaternion object depicting the mesh rotation by using a unit quaternion.
         * It's null by default.
         * If set, only the rotationQuaternion is then used to compute the mesh rotation and its property `.rotation\ is then ignored and set to (0.0, 0.0, 0.0)
         */
        rotationQuaternion: Quaternion;
        /**
         * Copies the paramater passed Matrix into the mesh Pose matrix.
         * Returns the AbstractMesh.
         */
        updatePoseMatrix(matrix: Matrix): AbstractMesh;
        /**
         * Returns the mesh Pose matrix.
         * Returned object : Matrix
         */
        getPoseMatrix(): Matrix;
        /**
         * Disables the mesh edger rendering mode.
         * Returns the AbstractMesh.
         */
        disableEdgesRendering(): AbstractMesh;
        /**
         * Enables the edge rendering mode on the mesh.
         * This mode makes the mesh edges visible.
         * Returns the AbstractMesh.
         */
        enableEdgesRendering(epsilon?: number, checkVerticesInsteadOfIndices?: boolean): AbstractMesh;
        /**
         * Returns true if the mesh is blocked. Used by the class Mesh.
         * Returns the boolean `false` by default.
         */
        readonly isBlocked: boolean;
        /**
         * Returns the mesh itself by default, used by the class Mesh.
         * Returned type : AbstractMesh
         */
        getLOD(camera: Camera): AbstractMesh;
        /**
         * Returns 0 by default, used by the class Mesh.
         * Returns an integer.
         */
        getTotalVertices(): number;
        /**
         * Returns null by default, used by the class Mesh.
         * Returned type : integer array
         */
        getIndices(): IndicesArray;
        /**
         * Returns the array of the requested vertex data kind. Used by the class Mesh. Returns null here.
         * Returned type : float array or Float32Array
         */
        getVerticesData(kind: string): number[] | Float32Array;
        /**
         * Sets the vertex data of the mesh geometry for the requested `kind`.
         * If the mesh has no geometry, a new Geometry object is set to the mesh and then passed this vertex data.
         * The `data` are either a numeric array either a Float32Array.
         * The parameter `updatable` is passed as is to the underlying Geometry object constructor (if initianilly none) or updater.
         * The parameter `stride` is an optional positive integer, it is usually automatically deducted from the `kind` (3 for positions or normals, 2 for UV, etc).
         * Note that a new underlying VertexBuffer object is created each call.
         * If the `kind` is the `PositionKind`, the mesh BoundingInfo is renewed, so the bounding box and sphere, and the mesh World Matrix is recomputed.
         *
         * Possible `kind` values :
         * - BABYLON.VertexBuffer.PositionKind
         * - BABYLON.VertexBuffer.UVKind
         * - BABYLON.VertexBuffer.UV2Kind
         * - BABYLON.VertexBuffer.UV3Kind
         * - BABYLON.VertexBuffer.UV4Kind
         * - BABYLON.VertexBuffer.UV5Kind
         * - BABYLON.VertexBuffer.UV6Kind
         * - BABYLON.VertexBuffer.ColorKind
         * - BABYLON.VertexBuffer.MatricesIndicesKind
         * - BABYLON.VertexBuffer.MatricesIndicesExtraKind
         * - BABYLON.VertexBuffer.MatricesWeightsKind
         * - BABYLON.VertexBuffer.MatricesWeightsExtraKind
         *
         * Returns the Mesh.
         */
        setVerticesData(kind: string, data: number[] | Float32Array, updatable?: boolean, stride?: number): Mesh;
        /**
         * Updates the existing vertex data of the mesh geometry for the requested `kind`.
         * If the mesh has no geometry, it is simply returned as it is.
         * The `data` are either a numeric array either a Float32Array.
         * No new underlying VertexBuffer object is created.
         * If the `kind` is the `PositionKind` and if `updateExtends` is true, the mesh BoundingInfo is renewed, so the bounding box and sphere, and the mesh World Matrix is recomputed.
         * If the parameter `makeItUnique` is true, a new global geometry is created from this positions and is set to the mesh.
         *
         * Possible `kind` values :
         * - BABYLON.VertexBuffer.PositionKind
         * - BABYLON.VertexBuffer.UVKind
         * - BABYLON.VertexBuffer.UV2Kind
         * - BABYLON.VertexBuffer.UV3Kind
         * - BABYLON.VertexBuffer.UV4Kind
         * - BABYLON.VertexBuffer.UV5Kind
         * - BABYLON.VertexBuffer.UV6Kind
         * - BABYLON.VertexBuffer.ColorKind
         * - BABYLON.VertexBuffer.MatricesIndicesKind
         * - BABYLON.VertexBuffer.MatricesIndicesExtraKind
         * - BABYLON.VertexBuffer.MatricesWeightsKind
         * - BABYLON.VertexBuffer.MatricesWeightsExtraKind
         *
         * Returns the Mesh.
         */
        updateVerticesData(kind: string, data: number[] | Float32Array, updateExtends?: boolean, makeItUnique?: boolean): Mesh;
        /**
         * Sets the mesh indices.
         * Expects an array populated with integers or a typed array (Int32Array, Uint32Array, Uint16Array).
         * If the mesh has no geometry, a new Geometry object is created and set to the mesh.
         * This method creates a new index buffer each call.
         * Returns the Mesh.
         */
        setIndices(indices: IndicesArray, totalVertices?: number): Mesh;
        /** Returns false by default, used by the class Mesh.
         *  Returns a boolean
        */
        isVerticesDataPresent(kind: string): boolean;
        /**
         * Returns the mesh BoundingInfo object or creates a new one and returns it if undefined.
         * Returns a BoundingInfo
         */
        getBoundingInfo(): BoundingInfo;
        /**
         * Sets a mesh new object BoundingInfo.
         * Returns the AbstractMesh.
         */
        setBoundingInfo(boundingInfo: BoundingInfo): AbstractMesh;
        readonly useBones: boolean;
        _preActivate(): void;
        _preActivateForIntermediateRendering(renderId: number): void;
        _activate(renderId: number): void;
        /**
         * Returns the last update of the World matrix
         * Returns a Matrix.
         */
        getWorldMatrix(): Matrix;
        /**
         * Returns directly the last state of the mesh World matrix.
         * A Matrix is returned.
         */
        readonly worldMatrixFromCache: Matrix;
        /**
         * Returns the current mesh absolute position.
         * Retuns a Vector3.
         */
        readonly absolutePosition: Vector3;
        /**
         * Prevents the World matrix to be computed any longer.
         * Returns the AbstractMesh.
         */
        freezeWorldMatrix(): AbstractMesh;
        /**
         * Allows back the World matrix computation.
         * Returns the AbstractMesh.
         */
        unfreezeWorldMatrix(): this;
        /**
         * True if the World matrix has been frozen.
         * Returns a boolean.
         */
        readonly isWorldMatrixFrozen: boolean;
        private static _rotationAxisCache;
        /**
         * Rotates the mesh around the axis vector for the passed angle (amount) expressed in radians, in the given space.
         * space (default LOCAL) can be either BABYLON.Space.LOCAL, either BABYLON.Space.WORLD.
         * Note that the property `rotationQuaternion` is then automatically updated and the property `rotation` is set to (0,0,0) and no longer used.
         * The passed axis is also normalized.
         * Returns the AbstractMesh.
         */
        rotate(axis: Vector3, amount: number, space?: Space): AbstractMesh;
        /**
         * Rotates the mesh around the axis vector for the passed angle (amount) expressed in radians, in world space.
         * Note that the property `rotationQuaternion` is then automatically updated and the property `rotation` is set to (0,0,0) and no longer used.
         * The passed axis is also normalized.
         * Returns the AbstractMesh.
         * Method is based on http://www.euclideanspace.com/maths/geometry/affine/aroundPoint/index.htm
         */
        rotateAround(point: Vector3, axis: Vector3, amount: number): AbstractMesh;
        /**
         * Translates the mesh along the axis vector for the passed distance in the given space.
         * space (default LOCAL) can be either BABYLON.Space.LOCAL, either BABYLON.Space.WORLD.
         * Returns the AbstractMesh.
         */
        translate(axis: Vector3, distance: number, space?: Space): AbstractMesh;
        /**
         * Adds a rotation step to the mesh current rotation.
         * x, y, z are Euler angles expressed in radians.
         * This methods updates the current mesh rotation, either mesh.rotation, either mesh.rotationQuaternion if it's set.
         * This means this rotation is made in the mesh local space only.
         * It's useful to set a custom rotation order different from the BJS standard one YXZ.
         * Example : this rotates the mesh first around its local X axis, then around its local Z axis, finally around its local Y axis.
         * ```javascript
         * mesh.addRotation(x1, 0, 0).addRotation(0, 0, z2).addRotation(0, 0, y3);
         * ```
         * Note that `addRotation()` accumulates the passed rotation values to the current ones and computes the .rotation or .rotationQuaternion updated values.
         * Under the hood, only quaternions are used. So it's a little faster is you use .rotationQuaternion because it doesn't need to translate them back to Euler angles.
         * Returns the AbstractMesh.
         */
        addRotation(x: number, y: number, z: number): AbstractMesh;
        /**
         * Retuns the mesh absolute position in the World.
         * Returns a Vector3.
         */
        getAbsolutePosition(): Vector3;
        /**
         * Sets the mesh absolute position in the World from a Vector3 or an Array(3).
         * Returns the AbstractMesh.
         */
        setAbsolutePosition(absolutePosition: Vector3): AbstractMesh;
        /**
         * Perform relative position change from the point of view of behind the front of the mesh.
         * This is performed taking into account the meshes current rotation, so you do not have to care.
         * Supports definition of mesh facing forward or backward.
         * @param {number} amountRight
         * @param {number} amountUp
         * @param {number} amountForward
         *
         * Returns the AbstractMesh.
         */
        movePOV(amountRight: number, amountUp: number, amountForward: number): AbstractMesh;
        /**
         * Calculate relative position change from the point of view of behind the front of the mesh.
         * This is performed taking into account the meshes current rotation, so you do not have to care.
         * Supports definition of mesh facing forward or backward.
         * @param {number} amountRight
         * @param {number} amountUp
         * @param {number} amountForward
         *
         * Returns a new Vector3.
         */
        calcMovePOV(amountRight: number, amountUp: number, amountForward: number): Vector3;
        /**
         * Perform relative rotation change from the point of view of behind the front of the mesh.
         * Supports definition of mesh facing forward or backward.
         * @param {number} flipBack
         * @param {number} twirlClockwise
         * @param {number} tiltRight
         *
         * Returns the AbstractMesh.
         */
        rotatePOV(flipBack: number, twirlClockwise: number, tiltRight: number): AbstractMesh;
        /**
         * Calculate relative rotation change from the point of view of behind the front of the mesh.
         * Supports definition of mesh facing forward or backward.
         * @param {number} flipBack
         * @param {number} twirlClockwise
         * @param {number} tiltRight
         *
         * Returns a new Vector3.
         */
        calcRotatePOV(flipBack: number, twirlClockwise: number, tiltRight: number): Vector3;
        /**
         * Sets a new pivot matrix to the mesh.
         * Returns the AbstractMesh.
         */
        setPivotMatrix(matrix: Matrix): AbstractMesh;
        /**
         * Returns the mesh pivot matrix.
         * Default : Identity.
         * A Matrix is returned.
         */
        getPivotMatrix(): Matrix;
        _isSynchronized(): boolean;
        _initCache(): void;
        markAsDirty(property: string): AbstractMesh;
        /**
         * Updates the mesh BoundingInfo object and all its children BoundingInfo objects also.
         * Returns the AbstractMesh.
         */
        _updateBoundingInfo(): AbstractMesh;
        /**
         * Update a mesh's children BoundingInfo objects only.
         * Returns the AbstractMesh.
         */
        _updateSubMeshesBoundingInfo(matrix: Matrix): AbstractMesh;
        /**
         * Computes the mesh World matrix and returns it.
         * If the mesh world matrix is frozen, this computation does nothing more than returning the last frozen values.
         * If the parameter `force` is let to `false` (default), the current cached World matrix is returned.
         * If the parameter `force`is set to `true`, the actual computation is done.
         * Returns the mesh World Matrix.
         */
        computeWorldMatrix(force?: boolean): Matrix;
        /**
        * If you'd like to be called back after the mesh position, rotation or scaling has been updated.
        * @param func: callback function to add
        *
        * Returns the AbstractMesh.
        */
        registerAfterWorldMatrixUpdate(func: (mesh: AbstractMesh) => void): AbstractMesh;
        /**
         * Removes a registered callback function.
         * Returns the AbstractMesh.
         */
        unregisterAfterWorldMatrixUpdate(func: (mesh: AbstractMesh) => void): AbstractMesh;
        /**
         * Sets the mesh position in its local space.
         * Returns the AbstractMesh.
         */
        setPositionWithLocalVector(vector3: Vector3): AbstractMesh;
        /**
         * Returns the mesh position in the local space from the current World matrix values.
         * Returns a new Vector3.
         */
        getPositionExpressedInLocalSpace(): Vector3;
        /**
         * Translates the mesh along the passed Vector3 in its local space.
         * Returns the AbstractMesh.
         */
        locallyTranslate(vector3: Vector3): AbstractMesh;
        private static _lookAtVectorCache;
        lookAt(targetPoint: Vector3, yawCor?: number, pitchCor?: number, rollCor?: number, space?: Space): AbstractMesh;
        attachToBone(bone: Bone, affectedMesh: AbstractMesh): AbstractMesh;
        detachFromBone(): AbstractMesh;
        /**
         * Returns `true` if the mesh is within the frustum defined by the passed array of planes.
         * A mesh is in the frustum if its bounding box intersects the frustum.
         * Boolean returned.
         */
        isInFrustum(frustumPlanes: Plane[]): boolean;
        /**
         * Returns `true` if the mesh is completely in the frustum defined be the passed array of planes.
         * A mesh is completely in the frustum if its bounding box it completely inside the frustum.
         * Boolean returned.
         */
        isCompletelyInFrustum(frustumPlanes: Plane[]): boolean;
        /**
         * True if the mesh intersects another mesh or a SolidParticle object.
         * Unless the parameter `precise` is set to `true` the intersection is computed according to Axis Aligned Bounding Boxes (AABB), else according to OBB (Oriented BBoxes)
         * Returns a boolean.
         */
        intersectsMesh(mesh: AbstractMesh | SolidParticle, precise?: boolean): boolean;
        /**
         * Returns true if the passed point (Vector3) is inside the mesh bounding box.
         * Returns a boolean.
         */
        intersectsPoint(point: Vector3): boolean;
        getPhysicsImpostor(): PhysicsImpostor;
        getPositionInCameraSpace(camera?: Camera): Vector3;
        /**
         * Returns the distance from the mesh to the active camera.
         * Returns a float.
         */
        getDistanceToCamera(camera?: Camera): number;
        applyImpulse(force: Vector3, contactPoint: Vector3): AbstractMesh;
        setPhysicsLinkWith(otherMesh: Mesh, pivot1: Vector3, pivot2: Vector3, options?: any): AbstractMesh;
        /**
         * Property checkCollisions : Boolean, whether the camera should check the collisions against the mesh.
         * Default `false`.
         */
        checkCollisions: boolean;
        moveWithCollisions(velocity: Vector3): AbstractMesh;
        private _onCollisionPositionChange;
        /**
        * This function will create an octree to help to select the right submeshes for rendering, picking and collision computations.
        * Please note that you must have a decent number of submeshes to get performance improvements when using an octree.
        * Returns an Octree of submeshes.
        */
        createOrUpdateSubmeshesOctree(maxCapacity?: number, maxDepth?: number): Octree<SubMesh>;
        _collideForSubMesh(subMesh: SubMesh, transformMatrix: Matrix, collider: Collider): AbstractMesh;
        _processCollisionsForSubMeshes(collider: Collider, transformMatrix: Matrix): AbstractMesh;
        _checkCollision(collider: Collider): AbstractMesh;
        _generatePointsArray(): boolean;
        /**
         * Checks if the passed Ray intersects with the mesh.
         * Returns an object PickingInfo.
         */
        intersects(ray: Ray, fastCheck?: boolean): PickingInfo;
        /**
         * Clones the mesh, used by the class Mesh.
         * Just returns `null` for an AbstractMesh.
         */
        clone(name: string, newParent?: Node, doNotCloneChildren?: boolean): AbstractMesh;
        /**
         * Disposes all the mesh submeshes.
         * Returns the AbstractMesh.
         */
        releaseSubMeshes(): AbstractMesh;
        /**
         * Disposes the AbstractMesh.
         * Some internal references are kept for further use.
         * By default, all the mesh children are also disposed unless the parameter `doNotRecurse` is set to `true`.
         * Returns nothing.
         */
        dispose(doNotRecurse?: boolean): void;
        /**
         * Returns a new Vector3 what is the localAxis, expressed in the mesh local space, rotated like the mesh.
         * This Vector3 is expressed in the World space.
         */
        getDirection(localAxis: Vector3): Vector3;
        /**
         * Sets the Vector3 "result" as the rotated Vector3 "localAxis" in the same rotation than the mesh.
         * localAxis is expressed in the mesh local space.
         * result is computed in the Wordl space from the mesh World matrix.
         * Returns the AbstractMesh.
         */
        getDirectionToRef(localAxis: Vector3, result: Vector3): AbstractMesh;
        setPivotPoint(point: Vector3, space?: Space): AbstractMesh;
        /**
         * Returns a new Vector3 set with the mesh pivot point coordinates in the local space.
         */
        getPivotPoint(): Vector3;
        /**
         * Sets the passed Vector3 "result" with the coordinates of the mesh pivot point in the local space.
         * Returns the AbstractMesh.
         */
        getPivotPointToRef(result: Vector3): AbstractMesh;
        /**
         * Returns a new Vector3 set with the mesh pivot point World coordinates.
         */
        getAbsolutePivotPoint(): Vector3;
        /**
         * Defines the passed mesh as the parent of the current mesh.
         * Returns the AbstractMesh.
         */
        setParent(mesh: AbstractMesh): AbstractMesh;
        /**
         * Adds the passed mesh as a child to the current mesh.
         * Returns the AbstractMesh.
         */
        addChild(mesh: AbstractMesh): AbstractMesh;
        /**
         * Removes the passed mesh from the current mesh children list.
         * Returns the AbstractMesh.
         */
        removeChild(mesh: AbstractMesh): AbstractMesh;
        /**
         * Sets the Vector3 "result" coordinates with the mesh pivot point World coordinates.
         * Returns the AbstractMesh.
         */
        getAbsolutePivotPointToRef(result: Vector3): AbstractMesh;
        /**
         *  Initialize the facet data arrays : facetNormals, facetPositions and facetPartitioning.
         * Returns the AbstractMesh.
         */
        private _initFacetData();
        /**
         * Updates the mesh facetData arrays and the internal partitioning when the mesh is morphed or updated.
         * This method can be called within the render loop.
         * You don't need to call this method by yourself in the render loop when you update/morph a mesh with the methods CreateXXX() as they automatically manage this computation.
         * Returns the AbstractMesh.
         */
        updateFacetData(): AbstractMesh;
        /**
         * Returns the facetLocalNormals array.
         * The normals are expressed in the mesh local space.
         */
        getFacetLocalNormals(): Vector3[];
        /**
         * Returns the facetLocalPositions array.
         * The facet positions are expressed in the mesh local space.
         */
        getFacetLocalPositions(): Vector3[];
        /**
         * Returns the facetLocalPartioning array.
         */
        getFacetLocalPartitioning(): number[][];
        /**
         * Returns the i-th facet position in the world system.
         * This method allocates a new Vector3 per call.
         */
        getFacetPosition(i: number): Vector3;
        /**
         * Sets the reference Vector3 with the i-th facet position in the world system.
         * Returns the AbstractMesh.
         */
        getFacetPositionToRef(i: number, ref: Vector3): AbstractMesh;
        /**
         * Returns the i-th facet normal in the world system.
         * This method allocates a new Vector3 per call.
         */
        getFacetNormal(i: number): Vector3;
        /**
         * Sets the reference Vector3 with the i-th facet normal in the world system.
         * Returns the AbstractMesh.
         */
        getFacetNormalToRef(i: number, ref: Vector3): this;
        /**
         * Returns the facets (in an array) in the same partitioning block than the one the passed coordinates are located (expressed in the mesh local system).
         */
        getFacetsAtLocalCoordinates(x: number, y: number, z: number): number[];
        /**
         * Returns the closest mesh facet index at (x,y,z) World coordinates, null if not found.
         * If the parameter projected (vector3) is passed, it is set as the (x,y,z) World projection on the facet.
         * If checkFace is true (default false), only the facet "facing" to (x,y,z) or only the ones "turning their backs", according to the parameter "facing" are returned.
         * If facing and checkFace are true, only the facet "facing" to (x, y, z) are returned : positive dot (x, y, z) * facet position.
         * If facing si false and checkFace is true, only the facet "turning their backs" to (x, y, z) are returned : negative dot (x, y, z) * facet position.
         */
        getClosestFacetAtCoordinates(x: number, y: number, z: number, projected?: Vector3, checkFace?: boolean, facing?: boolean): number;
        /**
         * Returns the closest mesh facet index at (x,y,z) local coordinates, null if not found.
         * If the parameter projected (vector3) is passed, it is set as the (x,y,z) local projection on the facet.
         * If checkFace is true (default false), only the facet "facing" to (x,y,z) or only the ones "turning their backs", according to the parameter "facing" are returned.
         * If facing and checkFace are true, only the facet "facing" to (x, y, z) are returned : positive dot (x, y, z) * facet position.
         * If facing si false and checkFace is true, only the facet "turning their backs"  to (x, y, z) are returned : negative dot (x, y, z) * facet position.
         */
        getClosestFacetAtLocalCoordinates(x: number, y: number, z: number, projected?: Vector3, checkFace?: boolean, facing?: boolean): number;
        /**
         * Returns the object "parameter" set with all the expected parameters for facetData computation by ComputeNormals()
         */
        getFacetDataParameters(): any;
        /**
         * Disables the feature FacetData and frees the related memory.
         * Returns the AbstractMesh.
         */
        disableFacetData(): AbstractMesh;
        /**
         * Creates new normals data for the mesh.
         * @param updatable.
         */
        createNormals(updatable: boolean): void;
    }
}

declare module BABYLON {
    class Buffer {
        private _engine;
        private _buffer;
        private _data;
        private _updatable;
        private _strideSize;
        private _instanced;
        private _instanceDivisor;
        constructor(engine: any, data: number[] | Float32Array, updatable: boolean, stride: number, postponeInternalCreation?: boolean, instanced?: boolean);
        createVertexBuffer(kind: string, offset: number, size: number, stride?: number): VertexBuffer;
        isUpdatable(): boolean;
        getData(): number[] | Float32Array;
        getBuffer(): WebGLBuffer;
        getStrideSize(): number;
        getIsInstanced(): boolean;
        instanceDivisor: number;
        create(data?: number[] | Float32Array): void;
        update(data: number[] | Float32Array): void;
        updateDirectly(data: Float32Array, offset: number, vertexCount?: number): void;
        dispose(): void;
    }
}

declare module BABYLON {
    class CSG {
        private polygons;
        matrix: Matrix;
        position: Vector3;
        rotation: Vector3;
        rotationQuaternion: Quaternion;
        scaling: Vector3;
        static FromMesh(mesh: Mesh): CSG;
        private static FromPolygons(polygons);
        clone(): CSG;
        private toPolygons();
        union(csg: CSG): CSG;
        unionInPlace(csg: CSG): void;
        subtract(csg: CSG): CSG;
        subtractInPlace(csg: CSG): void;
        intersect(csg: CSG): CSG;
        intersectInPlace(csg: CSG): void;
        inverse(): CSG;
        inverseInPlace(): void;
        copyTransformAttributes(csg: CSG): CSG;
        buildMeshGeometry(name: string, scene: Scene, keepSubMeshes: boolean): Mesh;
        toMesh(name: string, material: Material, scene: Scene, keepSubMeshes: boolean): Mesh;
    }
}

declare module BABYLON {
    class Geometry implements IGetSetVerticesData {
        id: string;
        delayLoadState: number;
        delayLoadingFile: string;
        onGeometryUpdated: (geometry: Geometry, kind?: string) => void;
        private _scene;
        private _engine;
        private _meshes;
        private _totalVertices;
        private _indices;
        private _vertexBuffers;
        private _isDisposed;
        private _extend;
        private _boundingBias;
        _delayInfo: any;
        private _indexBuffer;
        _boundingInfo: BoundingInfo;
        _delayLoadingFunction: (any: any, geometry: Geometry) => void;
        _softwareSkinningRenderId: number;
        private _vertexArrayObjects;
        _positions: Vector3[];
        /**
         *  The Bias Vector to apply on the bounding elements (box/sphere), the max extend is computed as v += v * bias.x + bias.y, the min is computed as v -= v * bias.x + bias.y
         * @returns The Bias Vector
         */
        boundingBias: Vector2;
        constructor(id: string, scene: Scene, vertexData?: VertexData, updatable?: boolean, mesh?: Mesh);
        readonly extend: {
            minimum: Vector3;
            maximum: Vector3;
        };
        getScene(): Scene;
        getEngine(): Engine;
        isReady(): boolean;
        readonly doNotSerialize: boolean;
        setAllVerticesData(vertexData: VertexData, updatable?: boolean): void;
        setVerticesData(kind: string, data: number[] | Float32Array, updatable?: boolean, stride?: number): void;
        removeVerticesData(kind: string): void;
        setVerticesBuffer(buffer: VertexBuffer): void;
        updateVerticesDataDirectly(kind: string, data: Float32Array, offset: number): void;
        updateVerticesData(kind: string, data: number[] | Float32Array, updateExtends?: boolean): void;
        private updateBoundingInfo(updateExtends, data);
        _bind(effect: Effect, indexToBind?: WebGLBuffer): void;
        getTotalVertices(): number;
        getVerticesData(kind: string, copyWhenShared?: boolean, forceCopy?: boolean): number[] | Float32Array;
        getVertexBuffer(kind: string): VertexBuffer;
        getVertexBuffers(): {
            [key: string]: VertexBuffer;
        };
        isVerticesDataPresent(kind: string): boolean;
        getVerticesDataKinds(): string[];
        setIndices(indices: IndicesArray, totalVertices?: number): void;
        getTotalIndices(): number;
        getIndices(copyWhenShared?: boolean): IndicesArray;
        getIndexBuffer(): WebGLBuffer;
        _releaseVertexArrayObject(effect: Effect): void;
        releaseForMesh(mesh: Mesh, shouldDispose?: boolean): void;
        applyToMesh(mesh: Mesh): void;
        private updateExtend(data?, stride?);
        private _applyToMesh(mesh);
        private notifyUpdate(kind?);
        load(scene: Scene, onLoaded?: () => void): void;
        private _queueLoad(scene, onLoaded?);
        /**
         * Invert the geometry to move from a right handed system to a left handed one.
         */
        toLeftHanded(): void;
        _resetPointsArrayCache(): void;
        _generatePointsArray(): boolean;
        isDisposed(): boolean;
        private _disposeVertexArrayObjects();
        dispose(): void;
        copy(id: string): Geometry;
        serialize(): any;
        private toNumberArray(origin);
        serializeVerticeData(): any;
        static ExtractFromMesh(mesh: Mesh, id: string): Geometry;
        /**
         * You should now use Tools.RandomId(), this method is still here for legacy reasons.
         * Implementation from http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#answer-2117523
         * Be aware Math.random() could cause collisions, but:
         * "All but 6 of the 128 bits of the ID are randomly generated, which means that for any two ids, there's a 1 in 2^^122 (or 5.3x10^^36) chance they'll collide"
         */
        static RandomId(): string;
        static ImportGeometry(parsedGeometry: any, mesh: Mesh): void;
        static Parse(parsedVertexData: any, scene: Scene, rootUrl: string): Geometry;
    }
    module Geometry.Primitives {
        class _Primitive extends Geometry {
            private _canBeRegenerated;
            private _beingRegenerated;
            constructor(id: string, scene: Scene, _canBeRegenerated?: boolean, mesh?: Mesh);
            canBeRegenerated(): boolean;
            regenerate(): void;
            asNewGeometry(id: string): Geometry;
            setAllVerticesData(vertexData: VertexData, updatable?: boolean): void;
            setVerticesData(kind: string, data: number[] | Float32Array, updatable?: boolean): void;
            _regenerateVertexData(): VertexData;
            copy(id: string): Geometry;
            serialize(): any;
        }
        class Ribbon extends _Primitive {
            pathArray: Vector3[][];
            closeArray: boolean;
            closePath: boolean;
            offset: number;
            side: number;
            constructor(id: string, scene: Scene, pathArray: Vector3[][], closeArray: boolean, closePath: boolean, offset: number, canBeRegenerated?: boolean, mesh?: Mesh, side?: number);
            _regenerateVertexData(): VertexData;
            copy(id: string): Geometry;
        }
        class Box extends _Primitive {
            size: number;
            side: number;
            constructor(id: string, scene: Scene, size: number, canBeRegenerated?: boolean, mesh?: Mesh, side?: number);
            _regenerateVertexData(): VertexData;
            copy(id: string): Geometry;
            serialize(): any;
            static Parse(parsedBox: any, scene: Scene): Box;
        }
        class Sphere extends _Primitive {
            segments: number;
            diameter: number;
            side: number;
            constructor(id: string, scene: Scene, segments: number, diameter: number, canBeRegenerated?: boolean, mesh?: Mesh, side?: number);
            _regenerateVertexData(): VertexData;
            copy(id: string): Geometry;
            serialize(): any;
            static Parse(parsedSphere: any, scene: Scene): Geometry.Primitives.Sphere;
        }
        class Disc extends _Primitive {
            radius: number;
            tessellation: number;
            side: number;
            constructor(id: string, scene: Scene, radius: number, tessellation: number, canBeRegenerated?: boolean, mesh?: Mesh, side?: number);
            _regenerateVertexData(): VertexData;
            copy(id: string): Geometry;
        }
        class Cylinder extends _Primitive {
            height: number;
            diameterTop: number;
            diameterBottom: number;
            tessellation: number;
            subdivisions: number;
            side: number;
            constructor(id: string, scene: Scene, height: number, diameterTop: number, diameterBottom: number, tessellation: number, subdivisions?: number, canBeRegenerated?: boolean, mesh?: Mesh, side?: number);
            _regenerateVertexData(): VertexData;
            copy(id: string): Geometry;
            serialize(): any;
            static Parse(parsedCylinder: any, scene: Scene): Geometry.Primitives.Cylinder;
        }
        class Torus extends _Primitive {
            diameter: number;
            thickness: number;
            tessellation: number;
            side: number;
            constructor(id: string, scene: Scene, diameter: number, thickness: number, tessellation: number, canBeRegenerated?: boolean, mesh?: Mesh, side?: number);
            _regenerateVertexData(): VertexData;
            copy(id: string): Geometry;
            serialize(): any;
            static Parse(parsedTorus: any, scene: Scene): Geometry.Primitives.Torus;
        }
        class Ground extends _Primitive {
            width: number;
            height: number;
            subdivisions: number;
            constructor(id: string, scene: Scene, width: number, height: number, subdivisions: number, canBeRegenerated?: boolean, mesh?: Mesh);
            _regenerateVertexData(): VertexData;
            copy(id: string): Geometry;
            serialize(): any;
            static Parse(parsedGround: any, scene: Scene): Geometry.Primitives.Ground;
        }
        class TiledGround extends _Primitive {
            xmin: number;
            zmin: number;
            xmax: number;
            zmax: number;
            subdivisions: {
                w: number;
                h: number;
            };
            precision: {
                w: number;
                h: number;
            };
            constructor(id: string, scene: Scene, xmin: number, zmin: number, xmax: number, zmax: number, subdivisions: {
                w: number;
                h: number;
            }, precision: {
                w: number;
                h: number;
            }, canBeRegenerated?: boolean, mesh?: Mesh);
            _regenerateVertexData(): VertexData;
            copy(id: string): Geometry;
        }
        class Plane extends _Primitive {
            size: number;
            side: number;
            constructor(id: string, scene: Scene, size: number, canBeRegenerated?: boolean, mesh?: Mesh, side?: number);
            _regenerateVertexData(): VertexData;
            copy(id: string): Geometry;
            serialize(): any;
            static Parse(parsedPlane: any, scene: Scene): Geometry.Primitives.Plane;
        }
        class TorusKnot extends _Primitive {
            radius: number;
            tube: number;
            radialSegments: number;
            tubularSegments: number;
            p: number;
            q: number;
            side: number;
            constructor(id: string, scene: Scene, radius: number, tube: number, radialSegments: number, tubularSegments: number, p: number, q: number, canBeRegenerated?: boolean, mesh?: Mesh, side?: number);
            _regenerateVertexData(): VertexData;
            copy(id: string): Geometry;
            serialize(): any;
            static Parse(parsedTorusKnot: any, scene: Scene): Geometry.Primitives.TorusKnot;
        }
    }
}

declare module BABYLON {
    class GroundMesh extends Mesh {
        generateOctree: boolean;
        private _worldInverse;
        private _heightQuads;
        _subdivisionsX: number;
        _subdivisionsY: number;
        _width: number;
        _height: number;
        _minX: number;
        _maxX: number;
        _minZ: number;
        _maxZ: number;
        constructor(name: string, scene: Scene);
        getClassName(): string;
        readonly subdivisions: number;
        readonly subdivisionsX: number;
        readonly subdivisionsY: number;
        optimize(chunksCount: number, octreeBlocksSize?: number): void;
        /**
         * Returns a height (y) value in the Worl system :
         * the ground altitude at the coordinates (x, z) expressed in the World system.
         * Returns the ground y position if (x, z) are outside the ground surface.
         */
        getHeightAtCoordinates(x: number, z: number): number;
        /**
         * Returns a normalized vector (Vector3) orthogonal to the ground
         * at the ground coordinates (x, z) expressed in the World system.
         * Returns Vector3(0.0, 1.0, 0.0) if (x, z) are outside the ground surface.
         */
        getNormalAtCoordinates(x: number, z: number): Vector3;
        /**
         * Updates the Vector3 passed a reference with a normalized vector orthogonal to the ground
         * at the ground coordinates (x, z) expressed in the World system.
         * Doesn't uptade the reference Vector3 if (x, z) are outside the ground surface.
         * Returns the GroundMesh.
         */
        getNormalAtCoordinatesToRef(x: number, z: number, ref: Vector3): GroundMesh;
        /**
        * Force the heights to be recomputed for getHeightAtCoordinates() or getNormalAtCoordinates()
        * if the ground has been updated.
        * This can be used in the render loop.
        * Returns the GroundMesh.
        */
        updateCoordinateHeights(): GroundMesh;
        private _getFacetAt(x, z);
        private _initHeightQuads();
        private _computeHeightQuads();
        serialize(serializationObject: any): void;
        static Parse(parsedMesh: any, scene: Scene): GroundMesh;
    }
}

declare module BABYLON {
    /**
     * Creates an instance based on a source mesh.
     */
    class InstancedMesh extends AbstractMesh {
        private _sourceMesh;
        private _currentLOD;
        constructor(name: string, source: Mesh);
        /**
         * Returns the string "InstancedMesh".
         */
        getClassName(): string;
        readonly receiveShadows: boolean;
        readonly material: Material;
        readonly visibility: number;
        readonly skeleton: Skeleton;
        readonly renderingGroupId: number;
        /**
         * Returns the total number of vertices (integer).
         */
        getTotalVertices(): number;
        readonly sourceMesh: Mesh;
        /**
         * Returns a float array or a Float32Array of the requested kind of data : positons, normals, uvs, etc.
         */
        getVerticesData(kind: string, copyWhenShared?: boolean): number[] | Float32Array;
        /**
         * Sets the vertex data of the mesh geometry for the requested `kind`.
         * If the mesh has no geometry, a new Geometry object is set to the mesh and then passed this vertex data.
         * The `data` are either a numeric array either a Float32Array.
         * The parameter `updatable` is passed as is to the underlying Geometry object constructor (if initianilly none) or updater.
         * The parameter `stride` is an optional positive integer, it is usually automatically deducted from the `kind` (3 for positions or normals, 2 for UV, etc).
         * Note that a new underlying VertexBuffer object is created each call.
         * If the `kind` is the `PositionKind`, the mesh BoundingInfo is renewed, so the bounding box and sphere, and the mesh World Matrix is recomputed.
         *
         * Possible `kind` values :
         * - BABYLON.VertexBuffer.PositionKind
         * - BABYLON.VertexBuffer.UVKind
         * - BABYLON.VertexBuffer.UV2Kind
         * - BABYLON.VertexBuffer.UV3Kind
         * - BABYLON.VertexBuffer.UV4Kind
         * - BABYLON.VertexBuffer.UV5Kind
         * - BABYLON.VertexBuffer.UV6Kind
         * - BABYLON.VertexBuffer.ColorKind
         * - BABYLON.VertexBuffer.MatricesIndicesKind
         * - BABYLON.VertexBuffer.MatricesIndicesExtraKind
         * - BABYLON.VertexBuffer.MatricesWeightsKind
         * - BABYLON.VertexBuffer.MatricesWeightsExtraKind
         *
         * Returns the Mesh.
         */
        setVerticesData(kind: string, data: number[] | Float32Array, updatable?: boolean, stride?: number): Mesh;
        /**
         * Updates the existing vertex data of the mesh geometry for the requested `kind`.
         * If the mesh has no geometry, it is simply returned as it is.
         * The `data` are either a numeric array either a Float32Array.
         * No new underlying VertexBuffer object is created.
         * If the `kind` is the `PositionKind` and if `updateExtends` is true, the mesh BoundingInfo is renewed, so the bounding box and sphere, and the mesh World Matrix is recomputed.
         * If the parameter `makeItUnique` is true, a new global geometry is created from this positions and is set to the mesh.
         *
         * Possible `kind` values :
         * - BABYLON.VertexBuffer.PositionKind
         * - BABYLON.VertexBuffer.UVKind
         * - BABYLON.VertexBuffer.UV2Kind
         * - BABYLON.VertexBuffer.UV3Kind
         * - BABYLON.VertexBuffer.UV4Kind
         * - BABYLON.VertexBuffer.UV5Kind
         * - BABYLON.VertexBuffer.UV6Kind
         * - BABYLON.VertexBuffer.ColorKind
         * - BABYLON.VertexBuffer.MatricesIndicesKind
         * - BABYLON.VertexBuffer.MatricesIndicesExtraKind
         * - BABYLON.VertexBuffer.MatricesWeightsKind
         * - BABYLON.VertexBuffer.MatricesWeightsExtraKind
         *
         * Returns the Mesh.
         */
        updateVerticesData(kind: string, data: number[] | Float32Array, updateExtends?: boolean, makeItUnique?: boolean): Mesh;
        /**
         * Sets the mesh indices.
         * Expects an array populated with integers or a typed array (Int32Array, Uint32Array, Uint16Array).
         * If the mesh has no geometry, a new Geometry object is created and set to the mesh.
         * This method creates a new index buffer each call.
         * Returns the Mesh.
         */
        setIndices(indices: IndicesArray, totalVertices?: number): Mesh;
        /**
         * Boolean : True if the mesh owns the requested kind of data.
         */
        isVerticesDataPresent(kind: string): boolean;
        /**
         * Returns an array of indices (IndicesArray).
         */
        getIndices(): IndicesArray;
        readonly _positions: Vector3[];
        /**
         * Sets a new updated BoundingInfo to the mesh.
         * Returns the mesh.
         */
        refreshBoundingInfo(): InstancedMesh;
        _preActivate(): InstancedMesh;
        _activate(renderId: number): InstancedMesh;
        /**
         * Returns the current associated LOD AbstractMesh.
         */
        getLOD(camera: Camera): AbstractMesh;
        _syncSubMeshes(): InstancedMesh;
        _generatePointsArray(): boolean;
        /**
         * Creates a new InstancedMesh from the current mesh.
         * - name (string) : the cloned mesh name
         * - newParent (optional Node) : the optional Node to parent the clone to.
         * - doNotCloneChildren (optional boolean, default `false`) : if `true` the model children aren't cloned.
         *
         * Returns the clone.
         */
        clone(name: string, newParent: Node, doNotCloneChildren?: boolean): InstancedMesh;
        /**
         * Disposes the InstancedMesh.
         * Returns nothing.
         */
        dispose(doNotRecurse?: boolean): void;
    }
}

declare module BABYLON {
    class LinesMesh extends Mesh {
        useVertexColor: boolean;
        color: Color3;
        alpha: number;
        /**
         * The intersection Threshold is the margin applied when intersection a segment of the LinesMesh with a Ray.
         * This margin is expressed in world space coordinates, so its value may vary.
         * Default value is 0.1
         * @returns the intersection Threshold value.
         */
        /**
         * The intersection Threshold is the margin applied when intersection a segment of the LinesMesh with a Ray.
         * This margin is expressed in world space coordinates, so its value may vary.
         * @param value the new threshold to apply
         */
        intersectionThreshold: number;
        private _intersectionThreshold;
        private _colorShader;
        constructor(name: string, scene: Scene, parent?: Node, source?: LinesMesh, doNotCloneChildren?: boolean, useVertexColor?: boolean);
        /**
         * Returns the string "LineMesh"
         */
        getClassName(): string;
        readonly material: Material;
        readonly checkCollisions: boolean;
        createInstance(name: string): InstancedMesh;
        _bind(subMesh: SubMesh, effect: Effect, fillMode: number): LinesMesh;
        _draw(subMesh: SubMesh, fillMode: number, instancesCount?: number): LinesMesh;
        dispose(doNotRecurse?: boolean): void;
        /**
         * Returns a new LineMesh object cloned from the current one.
         */
        clone(name: string, newParent?: Node, doNotCloneChildren?: boolean): LinesMesh;
    }
}

declare module BABYLON {
    class _InstancesBatch {
        mustReturn: boolean;
        visibleInstances: InstancedMesh[][];
        renderSelf: boolean[];
    }
    class Mesh extends AbstractMesh implements IGetSetVerticesData {
        static _FRONTSIDE: number;
        static _BACKSIDE: number;
        static _DOUBLESIDE: number;
        static _DEFAULTSIDE: number;
        static _NO_CAP: number;
        static _CAP_START: number;
        static _CAP_END: number;
        static _CAP_ALL: number;
        /**
         * Mesh side orientation : usually the external or front surface
         */
        static readonly FRONTSIDE: number;
        /**
         * Mesh side orientation : usually the internal or back surface
         */
        static readonly BACKSIDE: number;
        /**
         * Mesh side orientation : both internal and external or front and back surfaces
         */
        static readonly DOUBLESIDE: number;
        /**
         * Mesh side orientation : by default, `FRONTSIDE`
         */
        static readonly DEFAULTSIDE: number;
        /**
         * Mesh cap setting : no cap
         */
        static readonly NO_CAP: number;
        /**
         * Mesh cap setting : one cap at the beginning of the mesh
         */
        static readonly CAP_START: number;
        /**
         * Mesh cap setting : one cap at the end of the mesh
         */
        static readonly CAP_END: number;
        /**
         * Mesh cap setting : two caps, one at the beginning  and one at the end of the mesh
         */
        static readonly CAP_ALL: number;
        /**
         * An event triggered before rendering the mesh
         * @type {BABYLON.Observable}
         */
        onBeforeRenderObservable: Observable<Mesh>;
        /**
        * An event triggered after rendering the mesh
        * @type {BABYLON.Observable}
        */
        onAfterRenderObservable: Observable<Mesh>;
        /**
        * An event triggered before drawing the mesh
        * @type {BABYLON.Observable}
        */
        onBeforeDrawObservable: Observable<Mesh>;
        private _onBeforeDrawObserver;
        onBeforeDraw: () => void;
        delayLoadState: number;
        instances: InstancedMesh[];
        delayLoadingFile: string;
        _binaryInfo: any;
        private _LODLevels;
        onLODLevelSelection: (distance: number, mesh: Mesh, selectedLevel: Mesh) => void;
        private _morphTargetManager;
        morphTargetManager: MorphTargetManager;
        _geometry: Geometry;
        _delayInfo: any;
        _delayLoadingFunction: (any: any, mesh: Mesh) => void;
        _visibleInstances: any;
        private _renderIdForInstances;
        private _batchCache;
        private _instancesBufferSize;
        private _instancesBuffer;
        private _instancesData;
        private _overridenInstanceCount;
        _shouldGenerateFlatShading: boolean;
        private _preActivateId;
        private _sideOrientation;
        private _areNormalsFrozen;
        private _sourcePositions;
        private _sourceNormals;
        private _source;
        readonly source: BABYLON.Mesh;
        /**
         * @constructor
         * @param {string} name The value used by scene.getMeshByName() to do a lookup.
         * @param {Scene} scene The scene to add this mesh to.
         * @param {Node} parent The parent of this mesh, if it has one
         * @param {Mesh} source An optional Mesh from which geometry is shared, cloned.
         * @param {boolean} doNotCloneChildren When cloning, skip cloning child meshes of source, default False.
         *                  When false, achieved by calling a clone(), also passing False.
         *                  This will make creation of children, recursive.
         * @param {boolean} clonePhysicsImpostor When cloning, include cloning mesh physics impostor, default True.
         */
        constructor(name: string, scene: Scene, parent?: Node, source?: Mesh, doNotCloneChildren?: boolean, clonePhysicsImpostor?: boolean);
        /**
         * Returns the string "Mesh".
         */
        getClassName(): string;
        /**
         * Returns a string.
         * @param {boolean} fullDetails - support for multiple levels of logging within scene loading
         */
        toString(fullDetails?: boolean): string;
        /**
         * True if the mesh has some Levels Of Details (LOD).
         * Returns a boolean.
         */
        readonly hasLODLevels: boolean;
        private _sortLODLevels();
        /**
         * Add a mesh as LOD level triggered at the given distance.
         * tuto : http://doc.babylonjs.com/tutorials/How_to_use_LOD
         * @param {number} distance The distance from the center of the object to show this level
         * @param {Mesh} mesh The mesh to be added as LOD level
         * @return {Mesh} This mesh (for chaining)
         */
        addLODLevel(distance: number, mesh: Mesh): Mesh;
        /**
         * Returns the LOD level mesh at the passed distance or null if not found.
         * It is related to the method `addLODLevel(distance, mesh)`.
         * tuto : http://doc.babylonjs.com/tutorials/How_to_use_LOD
         * Returns an object Mesh or `null`.
         */
        getLODLevelAtDistance(distance: number): Mesh;
        /**
         * Remove a mesh from the LOD array
         * tuto : http://doc.babylonjs.com/tutorials/How_to_use_LOD
         * @param {Mesh} mesh The mesh to be removed.
         * @return {Mesh} This mesh (for chaining)
         */
        removeLODLevel(mesh: Mesh): Mesh;
        /**
         * Returns the registered LOD mesh distant from the parameter `camera` position if any, else returns the current mesh.
         * tuto : http://doc.babylonjs.com/tutorials/How_to_use_LOD
         */
        getLOD(camera: Camera, boundingSphere?: BoundingSphere): AbstractMesh;
        /**
         * Returns the mesh internal Geometry object.
         */
        readonly geometry: Geometry;
        /**
         * Returns a positive integer : the total number of vertices within the mesh geometry or zero if the mesh has no geometry.
         */
        getTotalVertices(): number;
        /**
         * Returns an array of integers or floats, or a Float32Array, depending on the requested `kind` (positions, indices, normals, etc).
         * If `copywhenShared` is true (default false) and if the mesh geometry is shared among some other meshes, the returned array is a copy of the internal one.
         * You can force the copy with forceCopy === true
         * Returns null if the mesh has no geometry or no vertex buffer.
         * Possible `kind` values :
         * - BABYLON.VertexBuffer.PositionKind
         * - BABYLON.VertexBuffer.UVKind
         * - BABYLON.VertexBuffer.UV2Kind
         * - BABYLON.VertexBuffer.UV3Kind
         * - BABYLON.VertexBuffer.UV4Kind
         * - BABYLON.VertexBuffer.UV5Kind
         * - BABYLON.VertexBuffer.UV6Kind
         * - BABYLON.VertexBuffer.ColorKind
         * - BABYLON.VertexBuffer.MatricesIndicesKind
         * - BABYLON.VertexBuffer.MatricesIndicesExtraKind
         * - BABYLON.VertexBuffer.MatricesWeightsKind
         * - BABYLON.VertexBuffer.MatricesWeightsExtraKind
         */
        getVerticesData(kind: string, copyWhenShared?: boolean, forceCopy?: boolean): number[] | Float32Array;
        /**
         * Returns the mesh VertexBuffer object from the requested `kind` : positions, indices, normals, etc.
         * Returns `undefined` if the mesh has no geometry.
         * Possible `kind` values :
         * - BABYLON.VertexBuffer.PositionKind
         * - BABYLON.VertexBuffer.UVKind
         * - BABYLON.VertexBuffer.UV2Kind
         * - BABYLON.VertexBuffer.UV3Kind
         * - BABYLON.VertexBuffer.UV4Kind
         * - BABYLON.VertexBuffer.UV5Kind
         * - BABYLON.VertexBuffer.UV6Kind
         * - BABYLON.VertexBuffer.ColorKind
         * - BABYLON.VertexBuffer.MatricesIndicesKind
         * - BABYLON.VertexBuffer.MatricesIndicesExtraKind
         * - BABYLON.VertexBuffer.MatricesWeightsKind
         * - BABYLON.VertexBuffer.MatricesWeightsExtraKind
         */
        getVertexBuffer(kind: any): VertexBuffer;
        /**
         * Returns a boolean depending on the existence of the Vertex Data for the requested `kind`.
         * Possible `kind` values :
         * - BABYLON.VertexBuffer.PositionKind
         * - BABYLON.VertexBuffer.UVKind
         * - BABYLON.VertexBuffer.UV2Kind
         * - BABYLON.VertexBuffer.UV3Kind
         * - BABYLON.VertexBuffer.UV4Kind
         * - BABYLON.VertexBuffer.UV5Kind
         * - BABYLON.VertexBuffer.UV6Kind
         * - BABYLON.VertexBuffer.ColorKind
         * - BABYLON.VertexBuffer.MatricesIndicesKind
         * - BABYLON.VertexBuffer.MatricesIndicesExtraKind
         * - BABYLON.VertexBuffer.MatricesWeightsKind
         * - BABYLON.VertexBuffer.MatricesWeightsExtraKind
         */
        isVerticesDataPresent(kind: string): boolean;
        /**
         * Returns a string : the list of existing `kinds` of Vertex Data for this mesh.
         * Possible `kind` values :
         * - BABYLON.VertexBuffer.PositionKind
         * - BABYLON.VertexBuffer.UVKind
         * - BABYLON.VertexBuffer.UV2Kind
         * - BABYLON.VertexBuffer.UV3Kind
         * - BABYLON.VertexBuffer.UV4Kind
         * - BABYLON.VertexBuffer.UV5Kind
         * - BABYLON.VertexBuffer.UV6Kind
         * - BABYLON.VertexBuffer.ColorKind
         * - BABYLON.VertexBuffer.MatricesIndicesKind
         * - BABYLON.VertexBuffer.MatricesIndicesExtraKind
         * - BABYLON.VertexBuffer.MatricesWeightsKind
         * - BABYLON.VertexBuffer.MatricesWeightsExtraKind
         */
        getVerticesDataKinds(): string[];
        /**
         * Returns a positive integer : the total number of indices in this mesh geometry.
         * Returns zero if the mesh has no geometry.
         */
        getTotalIndices(): number;
        /**
         * Returns an array of integers or a typed array (Int32Array, Uint32Array, Uint16Array) populated with the mesh indices.
         * If the parameter `copyWhenShared` is true (default false) and and if the mesh geometry is shared among some other meshes, the returned array is a copy of the internal one.
         * Returns an empty array if the mesh has no geometry.
         */
        getIndices(copyWhenShared?: boolean): IndicesArray;
        readonly isBlocked: boolean;
        /**
         * Boolean : true once the mesh is ready after all the delayed process (loading, etc) are complete.
         */
        isReady(): boolean;
        /**
         * Boolean : true if the mesh has been disposed.
         */
        isDisposed(): boolean;
        /**
         * Sets the mesh side orientation : BABYLON.Mesh.FRONTSIDE, BABYLON.Mesh.BACKSIDE, BABYLON.Mesh.DOUBLESIDE or BABYLON.Mesh.DEFAULTSIDE
         * tuto : http://doc.babylonjs.com/tutorials/Discover_Basic_Elements#side-orientation
         */
        sideOrientation: number;
        /**
         * Boolean : true if the normals aren't to be recomputed on next mesh `positions` array update.
         * This property is pertinent only for updatable parametric shapes.
         */
        readonly areNormalsFrozen: boolean;
        /**
         * This function affects parametric shapes on vertex position update only : ribbons, tubes, etc.
         * It has no effect at all on other shapes.
         * It prevents the mesh normals from being recomputed on next `positions` array update.
         * Returns the Mesh.
         */
        freezeNormals(): Mesh;
        /**
         * This function affects parametric shapes on vertex position update only : ribbons, tubes, etc.
         * It has no effect at all on other shapes.
         * It reactivates the mesh normals computation if it was previously frozen.
         * Returns the Mesh.
         */
        unfreezeNormals(): Mesh;
        /**
         * Overrides instance count. Only applicable when custom instanced InterleavedVertexBuffer are used rather than InstancedMeshs
         */
        overridenInstanceCount: number;
        _preActivate(): Mesh;
        _preActivateForIntermediateRendering(renderId: number): Mesh;
        _registerInstanceForRenderId(instance: InstancedMesh, renderId: number): Mesh;
        /**
         * This method recomputes and sets a new BoundingInfo to the mesh unless it is locked.
         * This means the mesh underlying bounding box and sphere are recomputed.
         * Returns the Mesh.
         */
        refreshBoundingInfo(): Mesh;
        _createGlobalSubMesh(): SubMesh;
        subdivide(count: number): void;
        /**
         * Sets the vertex data of the mesh geometry for the requested `kind`.
         * If the mesh has no geometry, a new Geometry object is set to the mesh and then passed this vertex data.
         * The `data` are either a numeric array either a Float32Array.
         * The parameter `updatable` is passed as is to the underlying Geometry object constructor (if initianilly none) or updater.
         * The parameter `stride` is an optional positive integer, it is usually automatically deducted from the `kind` (3 for positions or normals, 2 for UV, etc).
         * Note that a new underlying VertexBuffer object is created each call.
         * If the `kind` is the `PositionKind`, the mesh BoundingInfo is renewed, so the bounding box and sphere, and the mesh World Matrix is recomputed.
         *
         * Possible `kind` values :
         * - BABYLON.VertexBuffer.PositionKind
         * - BABYLON.VertexBuffer.UVKind
         * - BABYLON.VertexBuffer.UV2Kind
         * - BABYLON.VertexBuffer.UV3Kind
         * - BABYLON.VertexBuffer.UV4Kind
         * - BABYLON.VertexBuffer.UV5Kind
         * - BABYLON.VertexBuffer.UV6Kind
         * - BABYLON.VertexBuffer.ColorKind
         * - BABYLON.VertexBuffer.MatricesIndicesKind
         * - BABYLON.VertexBuffer.MatricesIndicesExtraKind
         * - BABYLON.VertexBuffer.MatricesWeightsKind
         * - BABYLON.VertexBuffer.MatricesWeightsExtraKind
         *
         * Returns the Mesh.
         */
        setVerticesData(kind: string, data: number[] | Float32Array, updatable?: boolean, stride?: number): Mesh;
        markVerticesDataAsUpdatable(kind: string, updatable?: boolean): void;
        /**
         * Sets the mesh VertexBuffer.
         * Returns the Mesh.
         */
        setVerticesBuffer(buffer: VertexBuffer): Mesh;
        /**
         * Updates the existing vertex data of the mesh geometry for the requested `kind`.
         * If the mesh has no geometry, it is simply returned as it is.
         * The `data` are either a numeric array either a Float32Array.
         * No new underlying VertexBuffer object is created.
         * If the `kind` is the `PositionKind` and if `updateExtends` is true, the mesh BoundingInfo is renewed, so the bounding box and sphere, and the mesh World Matrix is recomputed.
         * If the parameter `makeItUnique` is true, a new global geometry is created from this positions and is set to the mesh.
         *
         * Possible `kind` values :
         * - BABYLON.VertexBuffer.PositionKind
         * - BABYLON.VertexBuffer.UVKind
         * - BABYLON.VertexBuffer.UV2Kind
         * - BABYLON.VertexBuffer.UV3Kind
         * - BABYLON.VertexBuffer.UV4Kind
         * - BABYLON.VertexBuffer.UV5Kind
         * - BABYLON.VertexBuffer.UV6Kind
         * - BABYLON.VertexBuffer.ColorKind
         * - BABYLON.VertexBuffer.MatricesIndicesKind
         * - BABYLON.VertexBuffer.MatricesIndicesExtraKind
         * - BABYLON.VertexBuffer.MatricesWeightsKind
         * - BABYLON.VertexBuffer.MatricesWeightsExtraKind
         *
         * Returns the Mesh.
         */
        updateVerticesData(kind: string, data: number[] | Float32Array, updateExtends?: boolean, makeItUnique?: boolean): Mesh;
        /**
         * This method updates the vertex positions of an updatable mesh according to the `positionFunction` returned values.
         * tuto : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#other-shapes-updatemeshpositions
         * The parameter `positionFunction` is a simple JS function what is passed the mesh `positions` array. It doesn't need to return anything.
         * The parameter `computeNormals` is a boolean (default true) to enable/disable the mesh normal recomputation after the vertex position update.
         * Returns the Mesh.
         */
        updateMeshPositions(positionFunction: any, computeNormals?: boolean): Mesh;
        /**
         * Creates a un-shared specific occurence of the geometry for the mesh.
         * Returns the Mesh.
         */
        makeGeometryUnique(): Mesh;
        /**
         * Sets the mesh indices.
         * Expects an array populated with integers or a typed array (Int32Array, Uint32Array, Uint16Array).
         * If the mesh has no geometry, a new Geometry object is created and set to the mesh.
         * This method creates a new index buffer each call.
         * Returns the Mesh.
         */
        setIndices(indices: IndicesArray, totalVertices?: number): Mesh;
        /**
         * Invert the geometry to move from a right handed system to a left handed one.
         * Returns the Mesh.
         */
        toLeftHanded(): Mesh;
        _bind(subMesh: SubMesh, effect: Effect, fillMode: number): Mesh;
        _draw(subMesh: SubMesh, fillMode: number, instancesCount?: number): Mesh;
        /**
         * Registers for this mesh a javascript function called just before the rendering process.
         * This function is passed the current mesh.
         * Return the Mesh.
         */
        registerBeforeRender(func: (mesh: AbstractMesh) => void): Mesh;
        /**
         * Disposes a previously registered javascript function called before the rendering.
         * This function is passed the current mesh.
         * Returns the Mesh.
         */
        unregisterBeforeRender(func: (mesh: AbstractMesh) => void): Mesh;
        /**
         * Registers for this mesh a javascript function called just after the rendering is complete.
         * This function is passed the current mesh.
         * Returns the Mesh.
         */
        registerAfterRender(func: (mesh: AbstractMesh) => void): Mesh;
        /**
         * Disposes a previously registered javascript function called after the rendering.
         * This function is passed the current mesh.
         * Return the Mesh.
         */
        unregisterAfterRender(func: (mesh: AbstractMesh) => void): Mesh;
        _getInstancesRenderList(subMeshId: number): _InstancesBatch;
        _renderWithInstances(subMesh: SubMesh, fillMode: number, batch: _InstancesBatch, effect: Effect, engine: Engine): Mesh;
        _processRendering(subMesh: SubMesh, effect: Effect, fillMode: number, batch: _InstancesBatch, hardwareInstancedRendering: boolean, onBeforeDraw: (isInstance: boolean, world: Matrix, effectiveMaterial?: Material) => void, effectiveMaterial?: Material): Mesh;
        /**
         * Triggers the draw call for the mesh.
         * Usually, you don't need to call this method by your own because the mesh rendering is handled by the scene rendering manager.
         * Returns the Mesh.
         */
        render(subMesh: SubMesh, enableAlphaMode: boolean): Mesh;
        private _onBeforeDraw(isInstance, world, effectiveMaterial);
        /**
         * Returns an array populated with ParticleSystem objects whose the mesh is the emitter.
         */
        getEmittedParticleSystems(): ParticleSystem[];
        /**
         * Returns an array populated with ParticleSystem objects whose the mesh or its children are the emitter.
         */
        getHierarchyEmittedParticleSystems(): ParticleSystem[];
        _checkDelayState(): Mesh;
        private _queueLoad(mesh, scene);
        /**
         * Boolean, true is the mesh in the frustum defined by the Plane objects from the `frustumPlanes` array parameter.
         */
        isInFrustum(frustumPlanes: Plane[]): boolean;
        /**
         * Sets the mesh material by the material or multiMaterial `id` property.
         * The material `id` is a string identifying the material or the multiMaterial.
         * This method returns the Mesh.
         */
        setMaterialByID(id: string): Mesh;
        /**
         * Returns as a new array populated with the mesh material and/or skeleton, if any.
         */
        getAnimatables(): IAnimatable[];
        /**
         * Modifies the mesh geometry according to the passed transformation matrix.
         * This method returns nothing but it really modifies the mesh even if it's originally not set as updatable.
         * The mesh normals are modified accordingly the same transformation.
         * tuto : http://doc.babylonjs.com/tutorials/How_Rotations_and_Translations_Work#baking-transform
         * Note that, under the hood, this method sets a new VertexBuffer each call.
         * Returns the Mesh.
         */
        bakeTransformIntoVertices(transform: Matrix): Mesh;
        /**
         * Modifies the mesh geometry according to its own current World Matrix.
         * The mesh World Matrix is then reset.
         * This method returns nothing but really modifies the mesh even if it's originally not set as updatable.
         * tuto : tuto : http://doc.babylonjs.com/tutorials/How_Rotations_and_Translations_Work#baking-transform
         * Note that, under the hood, this method sets a new VertexBuffer each call.
         * Returns the Mesh.
         */
        bakeCurrentTransformIntoVertices(): Mesh;
        readonly _positions: Vector3[];
        _resetPointsArrayCache(): Mesh;
        _generatePointsArray(): boolean;
        /**
         * Returns a new Mesh object generated from the current mesh properties.
         * This method must not get confused with createInstance().
         * The parameter `name` is a string, the name given to the new mesh.
         * The optional parameter `newParent` can be any Node object (default `null`).
         * The optional parameter `doNotCloneChildren` (default `false`) allows/denies the recursive cloning of the original mesh children if any.
         * The parameter `clonePhysicsImpostor` (default `true`)  allows/denies the cloning in the same time of the original mesh `body` used by the physics engine, if any.
         */
        clone(name: string, newParent?: Node, doNotCloneChildren?: boolean, clonePhysicsImpostor?: boolean): Mesh;
        /**
         * Disposes the mesh.
         * This also frees the memory allocated under the hood to all the buffers used by WebGL.
         */
        dispose(doNotRecurse?: boolean): void;
        /**
         * Modifies the mesh geometry according to a displacement map.
         * A displacement map is a colored image. Each pixel color value (actually a gradient computed from red, green, blue values) will give the displacement to apply to each mesh vertex.
         * The mesh must be set as updatable. Its internal geometry is directly modified, no new buffer are allocated.
         * This method returns nothing.
         * The parameter `url` is a string, the URL from the image file is to be downloaded.
         * The parameters `minHeight` and `maxHeight` are the lower and upper limits of the displacement.
         * The parameter `onSuccess` is an optional Javascript function to be called just after the mesh is modified. It is passed the modified mesh and must return nothing.
         * The parameter `uvOffset` is an optional vector2 used to offset UV.
         * The parameter `uvScale` is an optional vector2 used to scale UV.
         *
         * Returns the Mesh.
         */
        applyDisplacementMap(url: string, minHeight: number, maxHeight: number, onSuccess?: (mesh: Mesh) => void, uvOffset?: Vector2, uvScale?: Vector2): Mesh;
        /**
         * Modifies the mesh geometry according to a displacementMap buffer.
         * A displacement map is a colored image. Each pixel color value (actually a gradient computed from red, green, blue values) will give the displacement to apply to each mesh vertex.
         * The mesh must be set as updatable. Its internal geometry is directly modified, no new buffer are allocated.
         * This method returns nothing.
         * The parameter `buffer` is a `Uint8Array` buffer containing series of `Uint8` lower than 255, the red, green, blue and alpha values of each successive pixel.
         * The parameters `heightMapWidth` and `heightMapHeight` are positive integers to set the width and height of the buffer image.
         * The parameters `minHeight` and `maxHeight` are the lower and upper limits of the displacement.
         * The parameter `uvOffset` is an optional vector2 used to offset UV.
         * The parameter `uvScale` is an optional vector2 used to scale UV.
         *
         * Returns the Mesh.
         */
        applyDisplacementMapFromBuffer(buffer: Uint8Array, heightMapWidth: number, heightMapHeight: number, minHeight: number, maxHeight: number, uvOffset?: Vector2, uvScale?: Vector2): Mesh;
        /**
         * Modify the mesh to get a flat shading rendering.
         * This means each mesh facet will then have its own normals. Usually new vertices are added in the mesh geometry to get this result.
         * This method returns the Mesh.
         * Warning : the mesh is really modified even if not set originally as updatable and, under the hood, a new VertexBuffer is allocated.
         */
        convertToFlatShadedMesh(): Mesh;
        /**
         * This method removes all the mesh indices and add new vertices (duplication) in order to unfold facets into buffers.
         * In other words, more vertices, no more indices and a single bigger VBO.
         * The mesh is really modified even if not set originally as updatable. Under the hood, a new VertexBuffer is allocated.
         * Returns the Mesh.
         */
        convertToUnIndexedMesh(): Mesh;
        /**
         * Inverses facet orientations and inverts also the normals with `flipNormals` (default `false`) if true.
         * This method returns the Mesh.
         * Warning : the mesh is really modified even if not set originally as updatable. A new VertexBuffer is created under the hood each call.
         */
        flipFaces(flipNormals?: boolean): Mesh;
        /**
         * Creates a new InstancedMesh object from the mesh model.
         * An instance shares the same properties and the same material than its model.
         * Only these properties of each instance can then be set individually :
         * - position
         * - rotation
         * - rotationQuaternion
         * - setPivotMatrix
         * - scaling
         * tuto : http://doc.babylonjs.com/tutorials/How_to_use_Instances
         * Warning : this method is not supported for Line mesh and LineSystem
         */
        createInstance(name: string): InstancedMesh;
        /**
         * Synchronises all the mesh instance submeshes to the current mesh submeshes, if any.
         * After this call, all the mesh instances have the same submeshes than the current mesh.
         * This method returns the Mesh.
         */
        synchronizeInstances(): Mesh;
        /**
         * Simplify the mesh according to the given array of settings.
         * Function will return immediately and will simplify async. It returns the Mesh.
         * @param settings a collection of simplification settings.
         * @param parallelProcessing should all levels calculate parallel or one after the other.
         * @param type the type of simplification to run.
         * @param successCallback optional success callback to be called after the simplification finished processing all settings.
         */
        simplify(settings: Array<ISimplificationSettings>, parallelProcessing?: boolean, simplificationType?: SimplificationType, successCallback?: (mesh?: Mesh, submeshIndex?: number) => void): Mesh;
        /**
         * Optimization of the mesh's indices, in case a mesh has duplicated vertices.
         * The function will only reorder the indices and will not remove unused vertices to avoid problems with submeshes.
         * This should be used together with the simplification to avoid disappearing triangles.
         * Returns the Mesh.
         * @param successCallback an optional success callback to be called after the optimization finished.
         */
        optimizeIndices(successCallback?: (mesh?: Mesh) => void): Mesh;
        serialize(serializationObject: any): void;
        _syncGeometryWithMorphTargetManager(): void;
        /**
         * Returns a new Mesh object what is a deep copy of the passed mesh.
         * The parameter `parsedMesh` is the mesh to be copied.
         * The parameter `rootUrl` is a string, it's the root URL to prefix the `delayLoadingFile` property with
         */
        static Parse(parsedMesh: any, scene: Scene, rootUrl: string): Mesh;
        /**
         * Creates a ribbon mesh.
         * Please consider using the same method from the MeshBuilder class instead.
         * The ribbon is a parametric shape :  http://doc.babylonjs.com/tutorials/Parametric_Shapes.  It has no predefined shape. Its final shape will depend on the input parameters.
         *
         * Please read this full tutorial to understand how to design a ribbon : http://doc.babylonjs.com/tutorials/Ribbon_Tutorial
         * The parameter `pathArray` is a required array of paths, what are each an array of successive Vector3. The pathArray parameter depicts the ribbon geometry.
         * The parameter `closeArray` (boolean, default false) creates a seam between the first and the last paths of the path array.
         * The parameter `closePath` (boolean, default false) creates a seam between the first and the last points of each path of the path array.
         * The parameter `offset` (positive integer, default : rounded half size of the pathArray length), is taken in account only if the `pathArray` is containing a single path.
         * It's the offset to join together the points from the same path. Ex : offset = 10 means the point 1 is joined to the point 11.
         * The optional parameter `instance` is an instance of an existing Ribbon object to be updated with the passed `pathArray` parameter : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#ribbon
         * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
         * Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateRibbon(name: string, pathArray: Vector3[][], closeArray: boolean, closePath: boolean, offset: number, scene?: Scene, updatable?: boolean, sideOrientation?: number, instance?: Mesh): Mesh;
        /**
         * Creates a plane polygonal mesh.  By default, this is a disc.
         * Please consider using the same method from the MeshBuilder class instead.
         * The parameter `radius` sets the radius size (float) of the polygon (default 0.5).
         * The parameter `tessellation` sets the number of polygon sides (positive integer, default 64). So a tessellation valued to 3 will build a triangle, to 4 a square, etc.
         * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
         * Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateDisc(name: string, radius: number, tessellation: number, scene?: Scene, updatable?: boolean, sideOrientation?: number): Mesh;
        /**
         * Creates a box mesh.
         * Please consider using the same method from the MeshBuilder class instead.
         * The parameter `size` sets the size (float) of each box side (default 1).
         * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
         * Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateBox(name: string, size: number, scene?: Scene, updatable?: boolean, sideOrientation?: number): Mesh;
        /**
         * Creates a sphere mesh.
         * Please consider using the same method from the MeshBuilder class instead.
         * The parameter `diameter` sets the diameter size (float) of the sphere (default 1).
         * The parameter `segments` sets the sphere number of horizontal stripes (positive integer, default 32).
         * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
         * Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation
         * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
         */
        static CreateSphere(name: string, segments: number, diameter: number, scene?: Scene, updatable?: boolean, sideOrientation?: number): Mesh;
        /**
         * Creates a cylinder or a cone mesh.
         * Please consider using the same method from the MeshBuilder class instead.
         * The parameter `height` sets the height size (float) of the cylinder/cone (float, default 2).
         * The parameter `diameter` sets the diameter of the top and 