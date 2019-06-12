'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cropperjs = require('cropperjs');

var _cropperjs2 = _interopRequireDefault(_cropperjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'VueCropperInput',

    render: function render(h) {
        return h('div', { style: { border: '1px solid red', position: 'relative' }, class: 'vue-cropper-input' }, [h('img', {
            attrs: { src: 'https://www.w3schools.com/w3css/img_lights.jpg' },
            style: { width: '100%', display: 'block' }
        }), h('button', {
            style: { position: 'absolute', top: 0, right: 0 },
            on: { '!click': this.onEditClicked }
        }, [h('img', { attrs: { src: 'https://img.icons8.com/ios/32/000000/pencil.png' } })])]);
    },


    methods: {
        onEditClicked: function onEditClicked() {
            var modal = document.createElement('div');
            modal.style = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, .5)';
            modal.innerHTML = 'This is modal';
            this.$el.appendChild(modal);
        }
    }
};