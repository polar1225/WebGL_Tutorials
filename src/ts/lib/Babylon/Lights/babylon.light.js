var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var BABYLON;
(function (BABYLON) {
    var Light = (function (_super) {
        __extends(Light, _super);
        function Light(name, scene) {
            _super.call(this, name, scene);
            this.diffuse = new Color3(1.0, 1.0, 1.0);
            this.specular = new Color3(1.0, 1.0, 1.0);
            this.intensity = 1.0;
            this.range = Number.MAX_VALUE;
            this.includeOnlyWithLayerMask = 0;
            this.includedOnlyMeshes = new Array();
            this.excludedMeshes = new Array();
            this.excludeWithLayerMask = 0;
            this.lightmapMode = 0;
            // PBR Properties.
            this.radius = 0.00001;
            this._excludedMeshesIds = new Array();
            this._includedOnlyMeshesIds = new Array();
            scene.addLight(this);
        }
        Object.defineProperty(Light, "LIGHTMAP_DEFAULT", {
            /**
             * If every light affecting the material is in this lightmapMode,
             * material.lightmapTexture adds or multiplies
             * (depends on material.useLightmapAsShadowmap)
             * after every other light calculations.
             */
            get: function () {
                return Light._LIGHTMAP_DEFAULT;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Light, "LIGHTMAP_SPECULAR", {
            /**
             * material.lightmapTexture as only diffuse lighting from this light
             * adds pnly specular lighting from this light
             * adds dynamic shadows
             */
            get: function () {
                return Light._LIGHTMAP_SPECULAR;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Light, "LIGHTMAP_SHADOWSONLY", {
            /**
             * material.lightmapTexture as only lighting
             * no light calculation from this light
             * only adds dynamic shadows from this light
             */
            get: function () {
                return Light._LIGHTMAP_SHADOWSONLY;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {boolean} fullDetails - support for multiple levels of logging within scene loading
         */
        Light.prototype.toString = function (fullDetails) {
            var ret = "Name: " + this.name;
            ret += ", type: " + (["Point", "Directional", "Spot", "Hemispheric"])[this.getTypeID()];
            if (this.animations) {
                for (var i = 0; i < this.animations.length; i++) {
                    ret += ", animation[0]: " + this.animations[i].toString(fullDetails);
                }
            }
            if (fullDetails) {
            }
            return ret;
        };
        Light.prototype.getShadowGenerator = function () {
            return this._shadowGenerator;
        };
        Light.prototype.getAbsolutePosition = function () {
            return Vector3.Zero();
        };
        Light.prototype.transferToEffect = function (effect, uniformName0, uniformName1) {
        };
        Light.prototype._getWorldMatrix = function () {
            return Matrix.Identity();
        };
        Light.prototype.canAffectMesh = function (mesh) {
            if (!mesh) {
                return true;
            }
            if (this.includedOnlyMeshes.length > 0 && this.includedOnlyMeshes.indexOf(mesh) === -1) {
                return false;
            }
            if (this.excludedMeshes.length > 0 && this.excludedMeshes.indexOf(mesh) !== -1) {
                return false;
            }
            if (this.includeOnlyWithLayerMask !== 0 && (this.includeOnlyWithLayerMask & mesh.layerMask) === 0) {
                return false;
            }
            if (this.excludeWithLayerMask !== 0 && this.excludeWithLayerMask & mesh.layerMask) {
                return false;
            }
            return true;
        };
        Light.prototype.getWorldMatrix = function () {
            this._currentRenderId = this.getScene().getRenderId();
            var worldMatrix = this._getWorldMatrix();
            if (this.parent && this.parent.getWorldMatrix) {
                if (!this._parentedWorldMatrix) {
                    this._parentedWorldMatrix = Matrix.Identity();
                }
                worldMatrix.multiplyToRef(this.parent.getWorldMatrix(), this._parentedWorldMatrix);
                this._markSyncedWithParent();
                return this._parentedWorldMatrix;
            }
            return worldMatrix;
        };
        Light.prototype.dispose = function () {
            if (this._shadowGenerator) {
                this._shadowGenerator.dispose();
                this._shadowGenerator = null;
            }
            // Animations
            this.getScene().stopAnimation(this);
            // Remove from scene
            this.getScene().removeLight(this);
            _super.prototype.dispose.call(this);
        };
        Light.prototype.getTypeID = function () {
            return 0;
        };
        Light.prototype.clone = function (name) {
            return SerializationHelper.Clone(Light.GetConstructorFromName(this.getTypeID(), name, this.getScene()), this);
        };
        Light.prototype.serialize = function () {
            var serializationObject = SerializationHelper.Serialize(this);
            // Type
            serializationObject.type = this.getTypeID();
            // Parent
            if (this.parent) {
                serializationObject.parentId = this.parent.id;
            }
            // Inclusion / exclusions
            if (this.excludedMeshes.length > 0) {
                serializationObject.excludedMeshesIds = [];
                this.excludedMeshes.forEach(function (mesh) {
                    serializationObject.excludedMeshesIds.push(mesh.id);
                });
            }
            if (this.includedOnlyMeshes.length > 0) {
                serializationObject.includedOnlyMeshesIds = [];
                this.includedOnlyMeshes.forEach(function (mesh) {
                    serializationObject.includedOnlyMeshesIds.push(mesh.id);
                });
            }
            // Animations  
            Animation.AppendSerializedAnimations(this, serializationObject);
            serializationObject.ranges = this.serializeAnimationRanges();
            return serializationObject;
        };
        Light.GetConstructorFromName = function (type, name, scene) {
            switch (type) {
                case 0:
                    return function () { return new PointLight(name, Vector3.Zero(), scene); };
                case 1:
                    return function () { return new DirectionalLight(name, Vector3.Zero(), scene); };
                case 2:
                    return function () { return new SpotLight(name, Vector3.Zero(), Vector3.Zero(), 0, 0, scene); };
                case 3:
                    return function () { return new HemisphericLight(name, Vector3.Zero(), scene); };
            }
        };
        Light.Parse = function (parsedLight, scene) {
            var light = SerializationHelper.Parse(Light.GetConstructorFromName(parsedLight.type, parsedLight.name, scene), parsedLight, scene);
            // Inclusion / exclusions
            if (parsedLight.excludedMeshesIds) {
                light._excludedMeshesIds = parsedLight.excludedMeshesIds;
            }
            if (parsedLight.includedOnlyMeshesIds) {
                light._includedOnlyMeshesIds = parsedLight.includedOnlyMeshesIds;
            }
            // Parent
            if (parsedLight.parentId) {
                light._waitingParentId = parsedLight.parentId;
            }
            // Animations
            if (parsedLight.animations) {
                for (var animationIndex = 0; animationIndex < parsedLight.animations.length; animationIndex++) {
                    var parsedAnimation = parsedLight.animations[animationIndex];
                    light.animations.push(Animation.Parse(parsedAnimation));
                }
                Node.ParseAnimationRanges(light, parsedLight, scene);
            }
            if (parsedLight.autoAnimate) {
                scene.beginAnimation(light, parsedLight.autoAnimateFrom, parsedLight.autoAnimateTo, parsedLight.autoAnimateLoop, parsedLight.autoAnimateSpeed || 1.0);
            }
            return light;
        };
        //lightmapMode Consts
        Light._LIGHTMAP_DEFAULT = 0;
        Light._LIGHTMAP_SPECULAR = 1;
        Light._LIGHTMAP_SHADOWSONLY = 2;
        __decorate([
            serializeAsColor3()
        ], Light.prototype, "diffuse");
        __decorate([
            serializeAsColor3()
        ], Light.prototype, "specular");
        __decorate([
            serialize()
        ], Light.prototype, "intensity");
        __decorate([
            serialize()
        ], Light.prototype, "range");
        __decorate([
            serialize()
        ], Light.prototype, "includeOnlyWithLayerMask");
        __decorate([
            serialize()
        ], Light.prototype, "excludeWithLayerMask");
        __decorate([
            serialize()
        ], Light.prototype, "lightmapMode");
        __decorate([
            serialize()
        ], Light.prototype, "radius");
        return Light;
    })(Node);
    BABYLON.Light = Light;
})(BABYLON || (BABYLON = {}));
//# sourceMappingURL=babylon.light.js.map