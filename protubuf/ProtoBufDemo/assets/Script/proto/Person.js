/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Person = (function() {

    /**
     * Namespace Person.
     * @exports Person
     * @namespace
     */
    var Person = {};

    Person.personInfo = (function() {

        /**
         * Properties of a personInfo.
         * @memberof Person
         * @interface IpersonInfo
         * @property {number|null} [uid] personInfo uid
         * @property {string|null} [name] personInfo name
         * @property {boolean|null} [grender] personInfo grender
         * @property {Person.personInfo.ISkill|null} [skills] personInfo skills
         */

        /**
         * Constructs a new personInfo.
         * @memberof Person
         * @classdesc Represents a personInfo.
         * @implements IpersonInfo
         * @constructor
         * @param {Person.IpersonInfo=} [properties] Properties to set
         */
        function personInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * personInfo uid.
         * @member {number} uid
         * @memberof Person.personInfo
         * @instance
         */
        personInfo.prototype.uid = 0;

        /**
         * personInfo name.
         * @member {string} name
         * @memberof Person.personInfo
         * @instance
         */
        personInfo.prototype.name = "";

        /**
         * personInfo grender.
         * @member {boolean} grender
         * @memberof Person.personInfo
         * @instance
         */
        personInfo.prototype.grender = false;

        /**
         * personInfo skills.
         * @member {Person.personInfo.ISkill|null|undefined} skills
         * @memberof Person.personInfo
         * @instance
         */
        personInfo.prototype.skills = null;

        /**
         * Creates a new personInfo instance using the specified properties.
         * @function create
         * @memberof Person.personInfo
         * @static
         * @param {Person.IpersonInfo=} [properties] Properties to set
         * @returns {Person.personInfo} personInfo instance
         */
        personInfo.create = function create(properties) {
            return new personInfo(properties);
        };

        /**
         * Encodes the specified personInfo message. Does not implicitly {@link Person.personInfo.verify|verify} messages.
         * @function encode
         * @memberof Person.personInfo
         * @static
         * @param {Person.IpersonInfo} message personInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        personInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uid);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.grender != null && message.hasOwnProperty("grender"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.grender);
            if (message.skills != null && message.hasOwnProperty("skills"))
                $root.Person.personInfo.Skill.encode(message.skills, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified personInfo message, length delimited. Does not implicitly {@link Person.personInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Person.personInfo
         * @static
         * @param {Person.IpersonInfo} message personInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        personInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a personInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Person.personInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Person.personInfo} personInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        personInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Person.personInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.grender = reader.bool();
                    break;
                case 4:
                    message.skills = $root.Person.personInfo.Skill.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a personInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Person.personInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Person.personInfo} personInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        personInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a personInfo message.
         * @function verify
         * @memberof Person.personInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        personInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.grender != null && message.hasOwnProperty("grender"))
                if (typeof message.grender !== "boolean")
                    return "grender: boolean expected";
            if (message.skills != null && message.hasOwnProperty("skills")) {
                var error = $root.Person.personInfo.Skill.verify(message.skills);
                if (error)
                    return "skills." + error;
            }
            return null;
        };

        /**
         * Creates a personInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Person.personInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Person.personInfo} personInfo
         */
        personInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.Person.personInfo)
                return object;
            var message = new $root.Person.personInfo();
            if (object.uid != null)
                message.uid = object.uid | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.grender != null)
                message.grender = Boolean(object.grender);
            if (object.skills != null) {
                if (typeof object.skills !== "object")
                    throw TypeError(".Person.personInfo.skills: object expected");
                message.skills = $root.Person.personInfo.Skill.fromObject(object.skills);
            }
            return message;
        };

        /**
         * Creates a plain object from a personInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Person.personInfo
         * @static
         * @param {Person.personInfo} message personInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        personInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uid = 0;
                object.name = "";
                object.grender = false;
                object.skills = null;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.grender != null && message.hasOwnProperty("grender"))
                object.grender = message.grender;
            if (message.skills != null && message.hasOwnProperty("skills"))
                object.skills = $root.Person.personInfo.Skill.toObject(message.skills, options);
            return object;
        };

        /**
         * Converts this personInfo to JSON.
         * @function toJSON
         * @memberof Person.personInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        personInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        personInfo.Skill = (function() {

            /**
             * Properties of a Skill.
             * @memberof Person.personInfo
             * @interface ISkill
             * @property {string|null} [favorite] Skill favorite
             * @property {Array.<string>|null} [hobby] Skill hobby
             */

            /**
             * Constructs a new Skill.
             * @memberof Person.personInfo
             * @classdesc Represents a Skill.
             * @implements ISkill
             * @constructor
             * @param {Person.personInfo.ISkill=} [properties] Properties to set
             */
            function Skill(properties) {
                this.hobby = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Skill favorite.
             * @member {string} favorite
             * @memberof Person.personInfo.Skill
             * @instance
             */
            Skill.prototype.favorite = "eat";

            /**
             * Skill hobby.
             * @member {Array.<string>} hobby
             * @memberof Person.personInfo.Skill
             * @instance
             */
            Skill.prototype.hobby = $util.emptyArray;

            /**
             * Creates a new Skill instance using the specified properties.
             * @function create
             * @memberof Person.personInfo.Skill
             * @static
             * @param {Person.personInfo.ISkill=} [properties] Properties to set
             * @returns {Person.personInfo.Skill} Skill instance
             */
            Skill.create = function create(properties) {
                return new Skill(properties);
            };

            /**
             * Encodes the specified Skill message. Does not implicitly {@link Person.personInfo.Skill.verify|verify} messages.
             * @function encode
             * @memberof Person.personInfo.Skill
             * @static
             * @param {Person.personInfo.ISkill} message Skill message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Skill.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.favorite != null && message.hasOwnProperty("favorite"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.favorite);
                if (message.hobby != null && message.hobby.length)
                    for (var i = 0; i < message.hobby.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.hobby[i]);
                return writer;
            };

            /**
             * Encodes the specified Skill message, length delimited. Does not implicitly {@link Person.personInfo.Skill.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Person.personInfo.Skill
             * @static
             * @param {Person.personInfo.ISkill} message Skill message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Skill.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Skill message from the specified reader or buffer.
             * @function decode
             * @memberof Person.personInfo.Skill
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Person.personInfo.Skill} Skill
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Skill.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Person.personInfo.Skill();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.favorite = reader.string();
                        break;
                    case 2:
                        if (!(message.hobby && message.hobby.length))
                            message.hobby = [];
                        message.hobby.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Skill message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Person.personInfo.Skill
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Person.personInfo.Skill} Skill
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Skill.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Skill message.
             * @function verify
             * @memberof Person.personInfo.Skill
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Skill.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.favorite != null && message.hasOwnProperty("favorite"))
                    if (!$util.isString(message.favorite))
                        return "favorite: string expected";
                if (message.hobby != null && message.hasOwnProperty("hobby")) {
                    if (!Array.isArray(message.hobby))
                        return "hobby: array expected";
                    for (var i = 0; i < message.hobby.length; ++i)
                        if (!$util.isString(message.hobby[i]))
                            return "hobby: string[] expected";
                }
                return null;
            };

            /**
             * Creates a Skill message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Person.personInfo.Skill
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Person.personInfo.Skill} Skill
             */
            Skill.fromObject = function fromObject(object) {
                if (object instanceof $root.Person.personInfo.Skill)
                    return object;
                var message = new $root.Person.personInfo.Skill();
                if (object.favorite != null)
                    message.favorite = String(object.favorite);
                if (object.hobby) {
                    if (!Array.isArray(object.hobby))
                        throw TypeError(".Person.personInfo.Skill.hobby: array expected");
                    message.hobby = [];
                    for (var i = 0; i < object.hobby.length; ++i)
                        message.hobby[i] = String(object.hobby[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a Skill message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Person.personInfo.Skill
             * @static
             * @param {Person.personInfo.Skill} message Skill
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Skill.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.hobby = [];
                if (options.defaults)
                    object.favorite = "eat";
                if (message.favorite != null && message.hasOwnProperty("favorite"))
                    object.favorite = message.favorite;
                if (message.hobby && message.hobby.length) {
                    object.hobby = [];
                    for (var j = 0; j < message.hobby.length; ++j)
                        object.hobby[j] = message.hobby[j];
                }
                return object;
            };

            /**
             * Converts this Skill to JSON.
             * @function toJSON
             * @memberof Person.personInfo.Skill
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Skill.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Skill;
        })();

        return personInfo;
    })();

    return Person;
})();

module.exports = $root;
