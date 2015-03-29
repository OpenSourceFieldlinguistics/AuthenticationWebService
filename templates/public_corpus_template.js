module.exports = {
  "_id": "corpus",
  "title": "Private Corpus",
  "titleAsUrl": "private_corpus",
  "description": "The details of this corpus are not public.",
  "connection": {},
  "termsOfUse": {
    "humanReadable": "Sample: The materials included in this corpus are available for research and educational use. If you want to use the materials for commercial purposes, please notify the author(s) of the corpus (myemail@myemail.org) prior to the use of the materials. Users of this corpus can copy and redistribute the materials included in this corpus, under the condition that the materials copied/redistributed are properly attributed.  Modification of the data in any copied/redistributed work is not allowed unless the data source is properly cited and the details of the modification is clearly mentioned in the work. Some of the items included in this corpus may be subject to further access conditions specified by the owners of the data and/or the authors of the corpus."
  },
  "license": {
    "title": "Default: Creative Commons Attribution-ShareAlike (CC BY-SA).",
    "humanReadable": "This license lets others remix, tweak, and build upon your work even for commercial purposes, as long as they credit you and license their new creations under the identical terms. This license is often compared to “copyleft” free and open source software licenses. All new works based on yours will carry the same license, so any derivatives will also allow commercial use. This is the license used by Wikipedia, and is recommended for materials that would benefit from incorporating content from Wikipedia and similarly licensed projects.",
    "link": "http://creativecommons.org/licenses/by-sa/3.0/"
  },
  "copyright": "Default: Add names of the copyright holders of the corpus.",
  "dbname": "",
  "datumFields": [{
    "label": "judgement",
    "value": "",
    "mask": "",
    "encrypted": "",
    "shouldBeEncrypted": "",
    "help": "Grammaticality/acceptability judgement of this data.",
    "size": "3",
    "showToUserTypes": "linguist",
    "userchooseable": "disabled"
  }, {
    "label": "gloss",
    "value": "",
    "mask": "",
    "encrypted": "",
    "shouldBeEncrypted": "checked",
    "help": "Metalanguage glosses of each individual morpheme (morphemes are pieces ofprefix, suffix) Sample entry: friend-fem-pl",
    "showToUserTypes": "linguist",
    "userchooseable": "disabled"
  }, {
    "label": "syntacticCategory",
    "value": "",
    "mask": "",
    "encrypted": "",
    "shouldBeEncrypted": "checked",
    "help": "This optional field is used by the machine to help with search.",
    "showToUserTypes": "machine",
    "userchooseable": "disabled"
  }, {
    "label": "syntacticTreeLatex",
    "value": "",
    "mask": "",
    "encrypted": "",
    "shouldBeEncrypted": "checked",
    "help": "This optional field is used by the machine to make LaTeX trees and help with search and data cleaning, in combination with morphemes and gloss (above). Sample entry: Tree [.S NP VP ]",
    "showToUserTypes": "machine",
    "userchooseable": "disabled"
  }, {
    "label": "tags",
    "value": "",
    "mask": "",
    "encrypted": "",
    "shouldBeEncrypted": "",
    "help": "Tags for constructions or other info that you might want to use to categorize your data.",
    "showToUserTypes": "all",
    "userchooseable": "disabled"
  }, {
    "label": "validationStatus",
    "value": "",
    "mask": "",
    "encrypted": "",
    "shouldBeEncrypted": "",
    "help": "Any number of tags of data validity (replaces DatumStates). For example: ToBeCheckedWithSeberina, CheckedWithRicardo, Deleted etc...",
    "showToUserTypes": "all",
    "userchooseable": "disabled"
  }],
  "sessionFields": [{
    "label": "dialect",
    "value": "",
    "mask": "",
    "encrypted": "",
    "shouldBeEncrypted": "",
    "help": "You can use this field to be as precise as you would like about the dialect of this session.",
    "userchooseable": "disabled"
  }, {
    "label": "language",
    "value": "",
    "mask": "",
    "encrypted": "",
    "shouldBeEncrypted": "",
    "help": "This is the langauge (or language family), if you would like to use it.",
    "userchooseable": "disabled"
  }, {
    "label": "dateElicited",
    "value": "",
    "mask": "",
    "encrypted": "",
    "shouldBeEncrypted": "",
    "help": "This is the date in which the session took place.",
    "userchooseable": "disabled"
  }],
  "comments": []
};
