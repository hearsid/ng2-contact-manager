module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Users/siddharthsharma/Documents/repos/ng2-contacts-manager";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("@angular/core");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("@angular/router");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var mock_contacts_1 = __webpack_require__(23);
var ContactService = (function () {
    function ContactService() {
    }
    ContactService.prototype.getContacts = function () {
        return Promise.resolve(mock_contacts_1.CONTACTS);
    };
    Object.defineProperty(ContactService.prototype, "activeContact", {
        get: function () {
            return this._activeContact;
        },
        set: function (contact) {
            this._activeContact = contact;
        },
        enumerable: true,
        configurable: true
    });
    ContactService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ContactService);
    return ContactService;
}());
exports.ContactService = ContactService;


/***/ },
/* 3 */
/***/ function(module, exports) {

"use strict";
"use strict";
var Contact = (function () {
    function Contact() {
    }
    return Contact;
}());
exports.Contact = Contact;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'about',
            template: 'About component'
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(1);
var contact_1 = __webpack_require__(3);
var contact_service_1 = __webpack_require__(2);
var ContactsComponent = (function () {
    function ContactsComponent(router, contactService) {
        this.router = router;
        this.contactService = contactService;
        this.title = 'List of contacts';
    }
    ContactsComponent.prototype.getContacts = function () {
        var _this = this;
        this.contactService.getContacts().then(function (contacts) { _this.contacts = contacts; });
    };
    ContactsComponent.prototype.ngOnInit = function () {
        this.getContacts();
    };
    ContactsComponent.prototype.onSelect = function (contact) {
        this.selectedContact = contact;
    };
    ContactsComponent.prototype.addContact = function () {
        // set active component to null to determine edit/add
        this.contactService.activeContact = new contact_1.Contact();
        this.router.navigate(['/newContact']);
    };
    ContactsComponent = __decorate([
        core_1.Component({
            selector: 'contacts',
            template: __webpack_require__(34)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof contact_service_1.ContactService !== 'undefined' && contact_service_1.ContactService) === 'function' && _b) || Object])
    ], ContactsComponent);
    return ContactsComponent;
    var _a, _b;
}());
exports.ContactsComponent = ContactsComponent;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            template: 'Home component'
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(1);
var contact_1 = __webpack_require__(3);
var contact_service_1 = __webpack_require__(2);
var NewContactsComponent = (function () {
    function NewContactsComponent(contactService, router, route) {
        this.contactService = contactService;
        this.router = router;
        this.route = route;
        this.title = 'List of contacts';
    }
    NewContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            debugger;
            if (params['id'] !== undefined) {
                _this.contact = _this.contactService.activeContact;
                _this.navigated = true;
            }
            else {
                _this.navigated = false;
                _this.contact = new contact_1.Contact();
            }
        });
    };
    NewContactsComponent = __decorate([
        core_1.Component({
            selector: 'new-contact',
            template: __webpack_require__(35)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof contact_service_1.ContactService !== 'undefined' && contact_service_1.ContactService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, (typeof (_c = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _c) || Object])
    ], NewContactsComponent);
    return NewContactsComponent;
    var _a, _b, _c;
}());
exports.NewContactsComponent = NewContactsComponent;


/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("@angular/forms");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Fix Material Support
var platform_browser_1 = __webpack_require__(9);
function universalMaterialSupports(eventName) { return Boolean(this.isCustomEvent(eventName)); }
platform_browser_1.__platform_browser_private__.HammerGesturesPlugin.prototype.supports = universalMaterialSupports;
// End Fix Material Support
var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(8);
var node_1 = __webpack_require__(36); // for AoT we need to manually split universal packages
var home_module_1 = __webpack_require__(27);
var about_module_1 = __webpack_require__(19);
var app_component_1 = __webpack_require__(21);
var app_routing_module_1 = __webpack_require__(20);
var universal_cache_1 = __webpack_require__(29);
var contacts_module_1 = __webpack_require__(25);
var MainModule = (function () {
    function MainModule(cache) {
        var _this = this;
        this.cache = cache;
        // we need to use the arrow function here to bind the context as this is a gotcha in Universal for now until it's fixed
        this.universalDoDehydrate = function (universalCache) {
            universalCache['Cache'] = JSON.stringify(_this.cache.dehydrate());
        };
        this.universalAfterDehydrate = function () {
            _this.cache.clear();
        };
    }
    MainModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            declarations: [app_component_1.AppComponent],
            imports: [
                node_1.UniversalModule,
                forms_1.FormsModule,
                home_module_1.HomeModule,
                about_module_1.AboutModule,
                contacts_module_1.ContactsModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [
                { provide: 'isBrowser', useValue: node_1.isBrowser },
                { provide: 'isNode', useValue: node_1.isNode },
                universal_cache_1.Cache
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof universal_cache_1.Cache !== 'undefined' && universal_cache_1.Cache) === 'function' && _a) || Object])
    ], MainModule);
    return MainModule;
    var _a;
}());
exports.MainModule = MainModule;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
// Our API for demos only
var db_1 = __webpack_require__(31);
var cache_1 = __webpack_require__(30);
// you would use cookies/token etc
var USER_ID = 'f9d98cf1-1b96-464e-8755-bcc2a5c09077'; // hardcoded as an example
// Our API for demos only
function serverApi(req, res) {
    var key = USER_ID + '/data.json';
    var cache = cache_1.fakeDemoRedisCache.get(key);
    if (cache !== undefined) {
        console.log('/data.json Cache Hit');
        return res.json(cache);
    }
    console.log('/data.json Cache Miss');
    db_1.fakeDataBase.get()
        .then(function (data) {
        cache_1.fakeDemoRedisCache.set(key, data);
        return data;
    })
        .then(function (data) { return res.json(data); });
}
exports.serverApi = serverApi;


/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = require("angular2-express-engine");

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = require("angular2-universal-polyfills");

/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = require("body-parser");

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = require("cookie-parser");

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(1);
var about_component_1 = __webpack_require__(4);
var AboutRoutingModule = (function () {
    function AboutRoutingModule() {
    }
    AboutRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'about', component: about_component_1.AboutComponent }
                ])
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutRoutingModule);
    return AboutRoutingModule;
}());
exports.AboutRoutingModule = AboutRoutingModule;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var about_component_1 = __webpack_require__(4);
var about_routing_module_1 = __webpack_require__(18);
var AboutModule = (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        core_1.NgModule({
            imports: [
                about_routing_module_1.AboutRoutingModule
            ],
            declarations: [
                about_component_1.AboutComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutModule);
    return AboutModule;
}());
exports.AboutModule = AboutModule;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(1);
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot([
                    { path: '', redirectTo: '/contacts', pathMatch: 'full' }
                ])
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: __webpack_require__(32)
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(1);
var contact_1 = __webpack_require__(3);
var contact_service_1 = __webpack_require__(2);
var ContactComponent = (function () {
    function ContactComponent(router, contactService, route) {
        this.router = router;
        this.contactService = contactService;
        this.route = route;
        this.close = new core_1.EventEmitter();
        this.navigated = false; // true if navigated here
    }
    ContactComponent.prototype.edit = function () {
        debugger;
        this.contactService.activeContact = this.contact;
        this.router.navigate(['/newContact', this.contact.id]);
    };
    ContactComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', (typeof (_a = typeof contact_1.Contact !== 'undefined' && contact_1.Contact) === 'function' && _a) || Object)
    ], ContactComponent.prototype, "contact", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ContactComponent.prototype, "close", void 0);
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'contact',
            template: __webpack_require__(33),
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, (typeof (_c = typeof contact_service_1.ContactService !== 'undefined' && contact_service_1.ContactService) === 'function' && _c) || Object, (typeof (_d = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _d) || Object])
    ], ContactComponent);
    return ContactComponent;
    var _a, _b, _c, _d;
}());
exports.ContactComponent = ContactComponent;


/***/ },
/* 23 */
/***/ function(module, exports) {

"use strict";
"use strict";
exports.CONTACTS = [
    {
        id: 1,
        name: 'Terrence S. Hatfield',
        tel: '651-603-1723',
        email: 'TerrenceSHatfield@rhyta.com'
    },
    {
        id: 2,
        name: 'Chris M. Manning',
        tel: '513-307-5859',
        email: 'ChrisMManning@dayrep.com'
    },
    {
        id: 3,
        name: 'Ricky M. Digiacomo',
        tel: '918-774-0199',
        email: 'RickyMDigiacomo@teleworm.us'
    },
    {
        id: 4,
        name: 'Michael K. Bayne',
        tel: '702-989-5145',
        email: 'MichaelKBayne@rhyta.com'
    },
    {
        id: 5,
        name: 'John I. Wilson',
        tel: '318-292-6700',
        email: 'JohnIWilson@dayrep.com'
    },
    {
        id: 6,
        name: 'Rodolfo P. Robinett',
        tel: '803-557-9815',
        email: 'RodolfoPRobinett@jourrapide.com'
    }
];


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(1);
var contacts_component_ts_1 = __webpack_require__(5);
var ContactsRoutingModule = (function () {
    function ContactsRoutingModule() {
    }
    ContactsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'contacts', component: contacts_component_ts_1.ContactsComponent }
                ])
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactsRoutingModule);
    return ContactsRoutingModule;
}());
exports.ContactsRoutingModule = ContactsRoutingModule;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(9);
var forms_1 = __webpack_require__(8);
var contacts_component_1 = __webpack_require__(5);
var contacts_routing_module_1 = __webpack_require__(24);
var newContactRouting_module_1 = __webpack_require__(28);
var contact_component_1 = __webpack_require__(22);
var newContact_component_1 = __webpack_require__(7);
var ContactsModule = (function () {
    function ContactsModule() {
    }
    ContactsModule = __decorate([
        core_1.NgModule({
            imports: [
                contacts_routing_module_1.ContactsRoutingModule,
                newContactRouting_module_1.NewContactRoutingModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            declarations: [
                contacts_component_1.ContactsComponent,
                contact_component_1.ContactComponent,
                newContact_component_1.NewContactsComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactsModule);
    return ContactsModule;
}());
exports.ContactsModule = ContactsModule;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(1);
var home_component_1 = __webpack_require__(6);
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'home', component: home_component_1.HomeComponent }
                ])
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());
exports.HomeRoutingModule = HomeRoutingModule;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var home_component_1 = __webpack_require__(6);
var home_routing_module_1 = __webpack_require__(26);
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [
                home_routing_module_1.HomeRoutingModule
            ],
            declarations: [
                home_component_1.HomeComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(1);
var newContact_component_1 = __webpack_require__(7);
var NewContactRoutingModule = (function () {
    function NewContactRoutingModule() {
    }
    NewContactRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'newContact', component: newContact_component_1.NewContactsComponent },
                    { path: 'newContact/:id', component: newContact_component_1.NewContactsComponent }
                ])
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], NewContactRoutingModule);
    return NewContactRoutingModule;
}());
exports.NewContactRoutingModule = NewContactRoutingModule;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__(0);
function rehydrateCache(defaultValue) {
    var win = window;
    if (win['UNIVERSAL_CACHE'] && win['UNIVERSAL_CACHE']['Cache']) {
        var serverCache = defaultValue;
        try {
            serverCache = JSON.parse(win['UNIVERSAL_CACHE']['Cache']);
            if (typeof serverCache !== typeof defaultValue) {
                serverCache = defaultValue;
            }
        }
        catch (e) {
            serverCache = defaultValue;
        }
        return serverCache;
    }
    return defaultValue;
}
exports.rehydrateCache = rehydrateCache;
var Cache = (function () {
    function Cache(isBrowser) {
        this._cache = {};
        if (isBrowser) {
            var serverCache = rehydrateCache(this._cache);
            this.rehydrate(serverCache);
        }
    }
    Cache.prototype.has = function (key) {
        return key in this._cache;
    };
    Cache.prototype.set = function (key, value) {
        this._cache[key] = value;
    };
    Cache.prototype.get = function (key) {
        return this._cache[key];
    };
    Cache.prototype.clear = function () {
        var _this = this;
        Object.keys(this._cache).forEach(function (key) {
            delete _this._cache[key];
        });
    };
    Cache.prototype.dehydrate = function () {
        var _this = this;
        var json = {};
        Object.keys(this._cache).forEach(function (key) {
            json[key] = _this._cache[key];
        });
        return json;
    };
    Cache.prototype.rehydrate = function (json) {
        var _this = this;
        Object.keys(json).forEach(function (key) {
            _this._cache[key] = json[key];
        });
    };
    Cache.prototype.toJSON = function () {
        return this.dehydrate();
    };
    Cache = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject('isBrowser')), 
        __metadata('design:paramtypes', [Boolean])
    ], Cache);
    return Cache;
}());
exports.Cache = Cache;


/***/ },
/* 30 */
/***/ function(module, exports) {

"use strict";
"use strict";
var _fakeLRUcount = 0;
exports.fakeDemoRedisCache = {
    _cache: {},
    get: function (key) {
        var cache = exports.fakeDemoRedisCache._cache[key];
        _fakeLRUcount++;
        if (_fakeLRUcount >= 10) {
            exports.fakeDemoRedisCache.clear();
            _fakeLRUcount = 0;
        }
        return cache;
    },
    set: function (key, data) { return exports.fakeDemoRedisCache._cache[key] = data; },
    clear: function () { return exports.fakeDemoRedisCache._cache = {}; }
};


/***/ },
/* 31 */
/***/ function(module, exports) {

"use strict";
"use strict";
// Our API for demos only
exports.fakeDataBase = {
    get: function () {
        var res = { data: 'This fake data came from the db on the server.' };
        return Promise.resolve(res);
    }
};


/***/ },
/* 32 */
/***/ function(module, exports) {

module.exports = "<header class=\"bs-header\">\n    <div class=\"container\">\n      <h1>Contact Manager</h1>\n      <p>Simple Angular2 example application</p>\n    </div>\n  </header>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 main-container\">\n          <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n"

/***/ },
/* 33 */
/***/ function(module, exports) {

module.exports = "<div class=\"thumbnail\">\n    <img class=\"media-object contact-image\" src=\"assets/img/faces/{{contact.id}}.jpg\">\n</div>\n<div class=\"media-heading\">\n    <h3>\n        {{contact.name}}\n        <small>\n            <a (click)=\"edit()\"><span class=\"glyphicon glyphicon-pencil\"></span></a>\n            <a ng-click=\"deleteContact($index)\" class=\"delete-contract\">\n                <span class=\"glyphicon glyphicon-trash\"></span>\n            </a>\n        </small>\n    </h3>\n</div>\n<div class=\"media-body\">\n    <dl>\n        <dt>[Phone Number]</dt>\n        <dd >{{contact.tel}}</dd>\n        <dt>[Email]</dt>\n        <dd >{{contact.email}}</dd>\n    </dl>\n</div>\n<hr>\n"

/***/ },
/* 34 */
/***/ function(module, exports) {

module.exports = "<h2 class=\"page-header text-center\">{{title}}</h2>\n<p class=\"text-center\">\n    <a (click)=\"addContact()\" class=\"btn btn-lg btn-outline\" >Add Contact</a>\n</p>\n<ul class=\"media-list row contacts-container\">\n    <li *ngFor=\"let contact of contacts\" class=\"my-repeat-animation contacts media col-md-6 col-lg-4\">\n        {{contact.id}}\n        <contact [contact]=\"contact\"></contact>\n\n    </li>\n</ul>\n"

/***/ },
/* 35 */
/***/ function(module, exports) {

module.exports = "<h2 class=\"page-header text-center\">{{title}} Contact</h2>\n<form #f=\"ngForm\" role=\"form\" class=\"form-horizontal contract-form\">\n    <div class=\"form-group\">\n        <label class=\"col-sm-4 control-label\">Full name:</label>\n        <div class=\"col-sm-6\">\n            <input type=\"text\" class=\"form-control contact-name-input\"\n                   [(ngModel)]=\"contact.name\" name=\"contactName\">\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"col-sm-4 control-label\">Email address:</label>\n        <div class=\"col-sm-6\">\n            <input type=\"text\" class=\"form-control contact-email-input\" ng-model=\"email\">\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"col-sm-4 control-label\">Telephone number:</label>\n        <div class=\"col-sm-6\">\n            <input type=\"text\" class=\"form-control contact-tel-input\" ng-model=\"tel\">\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <div class=\"col-sm-offset-4 col-sm-3\">\n            <button ng-show=\"title=='Add'\" type=\"submit\" ng-click=\"addContact(name,email,tel)\" class=\"btn btn-outline btn-lg btn-block\">Submit</button>\n            <button ng-show=\"title=='Edit'\" type=\"submit\" ng-click=\"editContact(id , name , email , tel)\" class=\"btn btn-outline btn-lg btn-block\">Submit</button>\n        </div>\n        <div class=\"col-sm-3\">\n            <a ui-sref=\"home\" class=\"btn btn-outline btn-lg btn-block\">Cancel</a>\n        </div>\n    </div>\n</form>\n"

/***/ },
/* 36 */
/***/ function(module, exports) {

module.exports = require("angular2-universal/node");

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {"use strict";
// the polyfills must be one of the first things imported in node.js.
// The only modules to be imported higher - node modules with es6-promise 3.x or other Promise polyfill dependency
// (rule of thumb: do it if you have zone.js exception that it has been overwritten)
__webpack_require__(13);
var path = __webpack_require__(17);
var express = __webpack_require__(16);
var bodyParser = __webpack_require__(14);
var cookieParser = __webpack_require__(15);
// Angular 2 Universal
var angular2_express_engine_1 = __webpack_require__(12);
// App
var app_node_module_1 = __webpack_require__(10);
// enable prod for faster renders
// enableProdMode();
var app = express();
var ROOT = path.join(path.resolve(__dirname, '..'));
// Express View
app.engine('.html', angular2_express_engine_1.createEngine({
    precompile: true,
    ngModule: app_node_module_1.MainModule
}));
app.set('views', __dirname);
app.set('view engine', 'html');
app.use(cookieParser('Angular 2 Universal'));
app.use(bodyParser.json());
// Serve static files
app.use('/assets', express.static(path.join(__dirname, 'assets'), { maxAge: 30 }));
app.use(express.static(path.join(ROOT, 'dist/client'), { index: false }));
var api_1 = __webpack_require__(11);
// Our API for demos only
app.get('/data.json', api_1.serverApi);
function ngApp(req, res) {
    res.render('index', {
        req: req,
        res: res,
        preboot: false,
        baseUrl: '/',
        requestUrl: req.originalUrl,
        originUrl: 'http://localhost:3000'
    });
}
// Routes with html5pushstate
// ensure routes match client-side-app
app.get('/', ngApp);
app.get('/about', ngApp);
app.get('/about/*', ngApp);
app.get('/home', ngApp);
app.get('/home/*', ngApp);
app.get('/contacts', ngApp);
app.get('/contacts/*', ngApp);
app.get('*', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var pojo = { status: 404, message: 'No Content' };
    var json = JSON.stringify(pojo, null, 2);
    res.status(404).send(json);
});
// Server
var server = app.listen(process.env.PORT || 3000, function () {
    console.log("Listening on: http://localhost:" + server.address().port);
});

/* WEBPACK VAR INJECTION */}.call(exports, "src"))

/***/ }
/******/ ]);