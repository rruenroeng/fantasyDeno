import { Relationships } from "denodb";

import SocialProfile from "./SocialProfile.ts";

import User from "./User.ts";

const models = [User, SocialProfile];

// TODO: FK relationships attempt to create every run... fix that
Relationships.belongsTo(SocialProfile, User, { foreignKey: "user_id" });

export default models;
