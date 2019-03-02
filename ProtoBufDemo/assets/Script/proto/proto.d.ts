import * as $protobuf from "protobufjs";
/** Namespace Person. */
export namespace Person {

    /** Properties of a personInfo. */
    interface IpersonInfo {

        /** personInfo uid */
        uid?: (number|null);

        /** personInfo name */
        name?: (string|null);

        /** personInfo grender */
        grender?: (boolean|null);

        /** personInfo skills */
        skills?: (Person.personInfo.ISkill|null);
    }

    /** Represents a personInfo. */
    class personInfo implements IpersonInfo {

        /**
         * Constructs a new personInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Person.IpersonInfo);

        /** personInfo uid. */
        public uid: number;

        /** personInfo name. */
        public name: string;

        /** personInfo grender. */
        public grender: boolean;

        /** personInfo skills. */
        public skills?: (Person.personInfo.ISkill|null);

        /**
         * Creates a new personInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns personInfo instance
         */
        public static create(properties?: Person.IpersonInfo): Person.personInfo;

        /**
         * Encodes the specified personInfo message. Does not implicitly {@link Person.personInfo.verify|verify} messages.
         * @param message personInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Person.IpersonInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified personInfo message, length delimited. Does not implicitly {@link Person.personInfo.verify|verify} messages.
         * @param message personInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Person.IpersonInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a personInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns personInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Person.personInfo;

        /**
         * Decodes a personInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns personInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Person.personInfo;

        /**
         * Verifies a personInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a personInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns personInfo
         */
        public static fromObject(object: { [k: string]: any }): Person.personInfo;

        /**
         * Creates a plain object from a personInfo message. Also converts values to other types if specified.
         * @param message personInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Person.personInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this personInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace personInfo {

        /** Properties of a Skill. */
        interface ISkill {

            /** Skill favorite */
            favorite?: (string|null);

            /** Skill hobby */
            hobby?: (string[]|null);
        }

        /** Represents a Skill. */
        class Skill implements ISkill {

            /**
             * Constructs a new Skill.
             * @param [properties] Properties to set
             */
            constructor(properties?: Person.personInfo.ISkill);

            /** Skill favorite. */
            public favorite: string;

            /** Skill hobby. */
            public hobby: string[];

            /**
             * Creates a new Skill instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Skill instance
             */
            public static create(properties?: Person.personInfo.ISkill): Person.personInfo.Skill;

            /**
             * Encodes the specified Skill message. Does not implicitly {@link Person.personInfo.Skill.verify|verify} messages.
             * @param message Skill message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Person.personInfo.ISkill, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Skill message, length delimited. Does not implicitly {@link Person.personInfo.Skill.verify|verify} messages.
             * @param message Skill message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Person.personInfo.ISkill, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Skill message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Skill
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Person.personInfo.Skill;

            /**
             * Decodes a Skill message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Skill
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Person.personInfo.Skill;

            /**
             * Verifies a Skill message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Skill message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Skill
             */
            public static fromObject(object: { [k: string]: any }): Person.personInfo.Skill;

            /**
             * Creates a plain object from a Skill message. Also converts values to other types if specified.
             * @param message Skill
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Person.personInfo.Skill, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Skill to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
