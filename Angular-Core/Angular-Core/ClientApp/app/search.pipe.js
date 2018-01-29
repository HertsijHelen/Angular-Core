var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, search) {
        var getvalue;
        if (search) {
            search = search.toLowerCase();
            console.log(search);
            return value.filter(function (el) {
                console.log(el);
                if (el.company.toLowerCase().indexOf(search) > -1) {
                    getvalue = el;
                    console.log(getvalue);
                }
                ;
            });
        }
        console.log(getvalue);
        return getvalue;
    };
    return SearchPipe;
}());
SearchPipe = __decorate([
    Pipe({
        name: 'SearchPipe'
    })
], SearchPipe);
export { SearchPipe };
//# sourceMappingURL=search.pipe.js.map