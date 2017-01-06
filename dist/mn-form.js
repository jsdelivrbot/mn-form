"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var MnForm=function(_HTMLElement){function MnForm(self){function submit(event){event.preventDefault(),form.classList.add("submitted");var inputs=this.querySelectorAll(".mn-input");return Array.from(inputs).forEach(function(input){return input.validate()}),!!form.checkValidity()&&void("function"===this.onSubmit?this.onSubmit(event):console.error("you need set a callback function to mn-form"))}function getNameAndValue(attr){var name=attr.name,value=attr.value;return{name:name,value:value}}function setAttribute(attribute){var attributeSpec=attributeSpecs.filter(function(spec){return spec.name===attribute.name})[0];if(!attributeSpec)return!1;var isDefaultAttribute=attributeSpec.hasOwnProperty("default"),attributeValue=attribute.value;if(isDefaultAttribute){var isValidValue=attributeSpec.hasOwnProperty("values")&&attributeSpec.values.indexOf(attributeValue)>=0,value=isValidValue?attributeValue:attributeSpec.default;form.setAttribute(attribute.name,value)}else attributeValue&&form.setAttribute(attribute.name,attributeValue)}var _this,_ret;_classCallCheck(this,MnForm),self=_this=_possibleConstructorReturn(this,(MnForm.__proto__||Object.getPrototypeOf(MnForm)).call(this,self));var attributeSpecs=[{name:"spellcheck",default:"false",values:["true","false"]},{name:"name"},{name:"novalidate",default:"true"},{name:"disabled"},{name:"autocapitalize"},{name:"id",remove:!0}],form=document.createElement("form");form.addEventListener("submit",submit);var attributes=Array.from(_this.attributes).map(getNameAndValue),defaultAttibutes=attributeSpecs.filter(function(attr){return attr.hasOwnProperty("default")}).filter(function(defaultAttr){return!attributes.some(function(attribute){return attribute.name===defaultAttr.name})}),instanceIndex=Array.from(document.querySelectorAll("mn-form")).indexOf(_this),defaultFormName="form"+instanceIndex;return form.setAttribute("name",_this.getAttribute("name")||defaultFormName),attributes.concat(defaultAttibutes).forEach(setAttribute),attributeSpecs.filter(function(attr){return attr.remove}).forEach(function(attr){_this.removeAttribute(attr.name)}),Array.from(_this.children).forEach(function(element){return form.appendChild(element)}),Array.from(_this.classList).forEach(function(cssClass){_this.classList.remove(cssClass),form.classList.add(cssClass)}),_this.removeAttribute("class"),_this.removeAttribute("name"),_this.insertBefore(form,_this.firstChild),_ret=self,_possibleConstructorReturn(_this,_ret)}return _inherits(MnForm,_HTMLElement),MnForm}(HTMLElement);window.customElements.define("mn-form",MnForm);
//# sourceMappingURL=mn-form.js.map
