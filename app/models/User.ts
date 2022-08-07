import { DataTypes, Model } from "denodb";
import SocialProfile from "./SocialProfile.ts";

export default class User extends Model {
  static table = "user";
  static timestamps = true;
  static fields = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    display_name: {
      type: DataTypes.STRING,
      length: 100,
      allowNull: true,
    },
  };

  static social_profiles() {
    return this.hasMany(SocialProfile);
  }
}
