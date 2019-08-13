/*
Copyright 2017-2019 Opera Software AS

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

{
  const SUPPORTED_EVENTS = [
    // mouse events
    'onAuxClick',
    'onClick',
    'onContextMenu',
    'onDoubleClick',
    'onDrag',
    'onDragEnd',
    'onDragEnter',
    'onDragExit',
    'onDragLeave',
    'onDragOver',
    'onDragStart',
    'onDrop',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    // keyboard events
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
    // focus events
    'onFocus',
    'onBlur',
    // form events
    'onChange',
    'onInput',
    'onInvalid',
    'onSubmit',
    // clipboard events
    'onCopy',
    'onCut',
    'onPaste',
    // composition events
    'onCompositionEnd',
    'onCompositionStart',
    'onCompositionUpdate',
    // selection events
    'onSelect',
    // touch events
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    // UI events
    'onScroll',
    // wheel events
    'onWheel',
    // media events
    'onAbort',
    'onCanPlay',
    'onCanPlayThrough',
    'onDurationChange',
    'onEmptied',
    'onEncrypted',
    'onEnded',
    'onError',
    'onLoadedData',
    'onLoadedMetadata',
    'onLoadStart',
    'onPause',
    'onPlay',
    'onPlaying',
    'onProgress',
    'onRateChange',
    'onSeeked',
    'onSeeking',
    'onStalled',
    'onSuspend',
    'onTimeUpdate',
    'onVolumeChange',
    'onWaiting',
    // image events
    'onLoad',
    'onError',
    // animation events
    'onAnimationStart',
    'onAnimationEnd',
    'onAnimationIteration',
    // transition events
    'onTransitionEnd',
    // search event
    'onSearch',
    // toogle event
    'onToggle',
  ];

  const SUPPORTED_ATTRIBUTES = [
    [
      'accept',
      [
        'form',
        'input',
      ],
    ],
    [
      'acceptCharset',
      [
        'form',
      ],
    ],
    [
      'accessKey',
    ],
    [
      'action',
      [
        'form',
      ],
    ],
    [
      'align',
      [
        'caption',
        'col',
        'colgroup',
        'hr',
        'iframe',
        'img',
        'table',
        'tbody',
        'td',
        'tfoot',
        'th',
        'thead',
        'tr',
      ],
    ],
    [
      'allow',
      [
        'iframe',
      ],
    ],
    [
      'allowFullScreen',
      [
        'iframe',
      ],
    ],
    [
      'alt',
      [
        'area',
        'img',
        'input',
      ],
    ],
    [
      'async',
      [
        'script',
      ],
    ],
    [
      'autoCapitalize',
    ],
    [
      'autoComplete',
      [
        'form',
        'input',
        'textarea',
      ],
    ],
    [
      'autoFocus',
      [
        'button',
        'input',
        'keygen',
        'select',
        'textarea',
      ],
    ],
    [
      'autoPlay',
      [
        'audio',
        'video',
      ],
    ],
    [
      'buffered',
      [
        'audio',
        'video',
      ],
    ],
    [
      'capture',
      [
        'input',
      ],
    ],
    [
      'challenge',
      [
        'keygen',
      ],
    ],
    [
      'charset',
      [
        'meta',
        'script',
      ],
    ],
    [
      'checked',
      [
        'command',
        'input',
      ],
    ],
    [
      'cite',
      [
        'blockquote',
        'del',
        'ins',
        'q',
      ],
    ],
    [
      'class',
    ],
    [
      'cols',
      [
        'textarea',
      ],
    ],
    [
      'colSpan',
      [
        'td',
        'th',
      ],
    ],
    [
      'content',
      [
        'meta',
      ],
    ],
    [
      'contentEditable',
    ],
    [
      'contextMenu',
    ],
    [
      'controls',
      [
        'audio',
        'video',
      ],
    ],
    [
      'coords',
      [
        'area',
      ],
    ],
    [
      'crossOrigin',
      [
        'audio',
        'img',
        'link',
        'script',
        'video',
      ],
    ],
    [
      'csp',
      [
        'iframe',
      ],
    ],
    [
      'data',
      [
        'object',
      ],
    ],
    [
      'dateTime',
      [
        'del',
        'ins',
        'time',
      ],
    ],
    [
      'decoding',
      [
        'img',
      ],
    ],
    [
      'default',
      [
        'track',
      ],
    ],
    [
      'defer',
      [
        'script',
      ],
    ],
    [
      'dir',
    ],
    [
      'disabled',
      [
        'button',
        'command',
        'fieldset',
        'input',
        'keygen',
        'optgroup',
        'option',
        'select',
        'textarea',
      ],
    ],
    [
      'download',
      [
        'a',
        'area',
      ],
    ],
    [
      'draggable',
    ],
    [
      'dropZone',
    ],
    [
      'encType',
      [
        'form',
      ],
    ],
    [
      'for',
      [
        'label',
        'output',
      ],
    ],
    [
      'form',
      [
        'button',
        'fieldset',
        'input',
        'keygen',
        'label',
        'meter',
        'object',
        'output',
        'progress',
        'select',
        'textarea',
      ],
    ],
    [
      'formAction',
      [
        'input',
        'button',
      ],
    ],
    [
      'headers',
      [
        'td',
        'th',
      ],
    ],
    [
      'height',
      [
        'canvas',
        'embed',
        'iframe',
        'img',
        'input',
        'object',
        'video',
      ],
    ],
    [
      'hidden',
    ],
    [
      'high',
      [
        'meter',
      ],
    ],
    [
      'href',
      [
        'a',
        'area',
        'base',
        'link',
      ],
    ],
    [
      'hrefLang',
      [
        'a',
        'area',
        'link',
      ],
    ],
    [
      'httpEquiv',
      [
        'meta',
      ],
    ],
    [
      'icon',
      [
        'command',
      ],
    ],
    [
      'id',
    ],
    [
      'incremental',
      [
        'input',
      ],
    ],
    [
      'inputMode',
      [
        'input',
      ],
    ],
    [
      'integrity',
      [
        'link',
        'script',
      ],
    ],
    [
      'is',
    ],
    [
      'isMap',
      [
        'img',
      ],
    ],
    [
      'itemProp',
    ],
    [
      'keyType',
      [
        'keygen',
      ],
    ],
    [
      'kind',
      [
        'track',
      ],
    ],
    [
      'label',
      [
        'track',
      ],
    ],
    [
      'lang',
    ],
    [
      'language',
      [
        'script',
      ],
    ],
    [
      'list',
      [
        'input',
      ],
    ],
    [
      'loop',
      [
        'audio',
        'bgsound',
        'marquee',
        'video',
      ],
    ],
    [
      'low',
      [
        'meter',
      ],
    ],
    [
      'manifest',
      [
        'html',
      ],
    ],
    [
      'max',
      [
        'input',
        'meter',
        'progress',
      ],
    ],
    [
      'maxLength',
      [
        'input',
        'textarea',
      ],
    ],
    [
      'media',
      [
        'a',
        'area',
        'link',
        'source',
        'style',
      ],
    ],
    [
      'method',
      [
        'form',
      ],
    ],
    [
      'min',
      [
        'input',
        'meter',
      ],
    ],
    [
      'minLength',
      [
        'input',
        'textarea',
      ],
    ],
    [
      'multiple',
      [
        'input',
        'select',
      ],
    ],
    [
      'muted',
      [
        'audio',
        'video',
      ],
    ],
    [
      'name',
      [
        'button',
        'form',
        'fieldset',
        'iframe',
        'input',
        'keygen',
        'object',
        'output',
        'select',
        'textarea',
        'map',
        'meta',
        'param',
        'slot',
      ],
    ],
    [
      'noValidate',
      [
        'form',
      ],
    ],
    [
      'open',
      [
        'details',
      ],
    ],
    [
      'optimum',
      [
        'meter',
      ],
    ],
    [
      'pattern',
      [
        'input',
      ],
    ],
    [
      'ping',
      [
        'a',
        'area',
      ],
    ],
    [
      'placeholder',
      [
        'input',
        'textarea',
      ],
    ],
    [
      'poster',
      [
        'video',
      ],
    ],
    [
      'preload',
      [
        'audio',
        'video',
      ],
    ],
    [
      'radioGroup',
      [
        'command',
      ],
    ],
    [
      'readOnly',
      [
        'input',
        'textarea',
      ],
    ],
    [
      'rel',
      [
        'a',
        'area',
        'link',
      ],
    ],
    [
      'required',
      [
        'input',
        'select',
        'textarea',
      ],
    ],
    [
      'reversed',
      [
        'ol',
      ],
    ],
    [
      'role',
    ],
    [
      'rows',
      [
        'textarea',
      ],
    ],
    [
      'rowSpan',
      [
        'td',
        'th',
      ],
    ],
    [
      'sandbox',
      [
        'iframe',
      ],
    ],
    [
      'scope',
      [
        'th',
      ],
    ],
    [
      'scoped',
      [
        'style',
      ],
    ],
    [
      'selected',
      [
        'option',
      ],
    ],
    [
      'shape',
      [
        'a',
        'area',
      ],
    ],
    [
      'size',
      [
        'input',
        'select',
      ],
    ],
    [
      'sizes',
      [
        'link',
        'img',
        'source',
      ],
    ],
    [
      'slot',
    ],
    [
      'span',
      [
        'col',
        'colgroup',
      ],
    ],
    [
      'spellCheck',
    ],
    [
      'src',
      [
        'audio',
        'embed',
        'iframe',
        'img',
        'input',
        'script',
        'source',
        'track',
        'video',
      ],
    ],
    [
      'srcDoc',
      [
        'iframe',
      ],
    ],
    [
      'srcLang',
      [
        'track',
      ],
    ],
    [
      'srcSet',
      [
        'img',
        'source',
      ],
    ],
    [
      'start',
      [
        'ol',
      ],
    ],
    [
      'step',
      [
        'input',
      ],
    ],
    [
      'summary',
      [
        'table',
      ],
    ],
    [
      'tabIndex',
    ],
    [
      'target',
      [
        'a',
        'area',
        'base',
        'form',
      ],
    ],
    [
      'title',
    ],
    [
      'translate',
    ],
    [
      'type',
      [
        'button',
        'input',
        'command',
        'embed',
        'object',
        'script',
        'source',
        'style',
        'menu',
      ],
    ],
    [
      'useMap',
      [
        'img',
        'input',
        'object',
      ],
    ],
    [
      'value',
      [
        'button',
        'option',
        'input',
        'li',
        'meter',
        'progress',
        'param',
      ],
    ],
    [
      'width',
      [
        'canvas',
        'embed',
        'iframe',
        'img',
        'input',
        'object',
        'video',
      ],
    ],
    [
      'wrap',
      [
        'textarea',
      ],
    ],
    [
      'ariaActiveDescendant',
    ],
    [
      'ariaAtomic',
    ],
    [
      'ariaAutoComplete',
    ],
    [
      'ariaBusy',
    ],
    [
      'ariaChecked',
    ],
    [
      'ariaControls',
    ],
    [
      'ariaDescribedBy',
    ],
    [
      'ariaDisabled',
    ],
    [
      'ariaDropEffect',
    ],
    [
      'ariaExpanded',
    ],
    [
      'ariaFlowTo',
    ],
    [
      'ariaGrabbed',
    ],
    [
      'ariaHasPopup',
    ],
    [
      'ariaHidden',
    ],
    [
      'ariaInvalid',
    ],
    [
      'ariaLabel',
    ],
    [
      'ariaLabelLedBy',
    ],
    [
      'ariaLevel',
    ],
    [
      'ariaLive',
    ],
    [
      'ariaMultiLine',
    ],
    [
      'ariaMultiSelectable',
    ],
    [
      'ariaOrientation',
    ],
    [
      'ariaOwns',
    ],
    [
      'ariaPosInSet',
    ],
    [
      'ariaPressed',
    ],
    [
      'ariaReadOnly',
    ],
    [
      'ariaRelevant',
    ],
    [
      'ariaRequired',
    ],
    [
      'ariaSelected',
    ],
    [
      'ariaSetSize',
    ],
    [
      'ariaSort',
    ],
    [
      'ariaValueMax',
    ],
    [
      'ariaValueMin',
    ],
    [
      'ariaValueNow',
    ],
    [
      'ariaValueText',
    ],
  ];

  const SUPPORTED_STYLES = Object.keys(document.documentElement.style);

  const SUPPORTED_FILTERS = [
    'blur',
    'brightness',
    'contrast',
    'dropShadow',
    'grayscale',
    'hueRotate',
    'invert',
    'opacity',
    'sepia',
    'saturate',
  ];

  const SUPPORTED_TRANSFORMS = [
    'matrix',
    'matrix3d',
    'translate',
    'translate3d',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scale3d',
    'scaleX',
    'scaleY',
    'scaleZ',
    'rotate',
    'rotate3d',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY',
    'perspective',
  ];

  const supportedAttributes = new Map();
  for (const [key, whitelist] of SUPPORTED_ATTRIBUTES) {
    supportedAttributes.set(key, whitelist || '*');
  }

  const Browser = {

    isAttributeSupported(key) {
      return supportedAttributes.has(key);
    },

    isAttributeValid(key, element) {
      const whitelist = supportedAttributes.get(key);
      if (whitelist) {
        return whitelist === '*' || whitelist.includes(element);
      }
      return false;
    },

    getValidElementNamesFor(key) {
      return supportedAttributes.get(key);
    },

    isEventSupported(key) {
      return SUPPORTED_EVENTS.includes(key);
    },

    isStyleSupported(key) {
      return key.startsWith('--') || SUPPORTED_STYLES.includes(key);
    },

    isFilterSupported(key) {
      return SUPPORTED_FILTERS.includes(key);
    },

    isTransformSupported(key) {
      return SUPPORTED_TRANSFORMS.includes(key);
    },

    SUPPORTED_FILTERS,
    SUPPORTED_TRANSFORMS,
  };

  module.exports = Browser;
}
