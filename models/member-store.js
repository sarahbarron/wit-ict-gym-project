"use strict";

const _ = require("lodash");
const JsonStore = require("./json-store");
const logger = require("../utils/logger");

const memberStore = {
  store: new JsonStore("./models/member-store.json", {
    members: []
  }),
  collection: "members",

  getAllMembers() {
    return this.store.findAll(this.collection);
  },

  addMember(member) {
    this.store.add(this.collection, member);
    this.store.save();
  },

  getMemberById(id) {
    return this.store.findOneBy(this.collection, {
      id: id
    });
  },

  getMemberByEmail(email) {
    return this.store.findOneBy(this.collection, {
      email: email
    });
  },

  updateMember(newMemberDetails, member) {

    if (newMemberDetails.firstName !== "") {
      logger.info(`inside update member if first name: ${newMemberDetails.firstName}`);
      member.firstName = newMemberDetails.firstName;
    }
    if (newMemberDetails.lastName !== "") {
      logger.info(`inside update member if last name: ${newMemberDetails.lastName}`);
      member.lastName = newMemberDetails.lastName;
    }
    if (newMemberDetails.email !== "") {
      member.email = newMemberDetails.email;
    }
    if (newMemberDetails.password !== "") {
      member.password = newMemberDetails.password;
    }
    member.gender = newMemberDetails.gender;
    if (newMemberDetails.address !== "") {
      member.address = newMemberDetails.address;
    }
    if (newMemberDetails.height !== "") {
      member.height = newMemberDetails.height;
    }
    if (newMemberDetails.startweight !== "") {
      member.startweight = newMemberDetails.startweight;
    }
    this.store.save();
  }


};

module.exports = memberStore;